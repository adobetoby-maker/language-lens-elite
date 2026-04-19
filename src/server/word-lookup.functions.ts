import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const InputSchema = z.object({
  word: z.string().min(1).max(100),
  sentence: z.string().min(1).max(2000),
  language: z.string().min(1).max(40),
});

export interface WordCardData {
  headword: string;
  partOfSpeech: string;
  phonetic: string;
  baseDefinition: string;
  conjugationNote: string;
  exampleSentence: string;
  exampleTranslation: string;
}

export const lookupWord = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => InputSchema.parse(input))
  .handler(async ({ data }): Promise<{ card: WordCardData | null; error: string | null }> => {
    const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
    if (!LOVABLE_API_KEY) {
      return { card: null, error: "AI is not configured" };
    }

    const systemPrompt =
      "You are a precise multilingual dictionary and grammar tutor. Always respond by calling the provided tool with accurate linguistic data.";

    const userPrompt = `The user clicked the word "${data.word}" in this sentence: "${data.sentence}". The target language is ${data.language}. Return the requested fields. The conjugationNote must explain exactly how this word is being used in THIS sentence (tense, person, number, mood if verb; case, gender, number if noun/adj). Keep all answers concise.`;

    try {
      const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userPrompt },
          ],
          tools: [
            {
              type: "function",
              function: {
                name: "return_word_card",
                description: "Return structured dictionary + grammar info for the clicked word.",
                parameters: {
                  type: "object",
                  properties: {
                    headword: { type: "string", description: "Dictionary base form" },
                    partOfSpeech: {
                      type: "string",
                      description: "noun, verb, adjective, adverb, pronoun, preposition, etc.",
                    },
                    phonetic: { type: "string", description: "Pronunciation in IPA" },
                    baseDefinition: { type: "string", description: "Simple English meaning" },
                    conjugationNote: {
                      type: "string",
                      description:
                        "How this word is used in THIS sentence (tense/person/number/mood for verbs; case/gender/number for nouns/adj).",
                    },
                    exampleSentence: {
                      type: "string",
                      description: "One short example in the target language.",
                    },
                    exampleTranslation: {
                      type: "string",
                      description: "English translation of the example sentence.",
                    },
                  },
                  required: [
                    "headword",
                    "partOfSpeech",
                    "phonetic",
                    "baseDefinition",
                    "conjugationNote",
                    "exampleSentence",
                    "exampleTranslation",
                  ],
                  additionalProperties: false,
                },
              },
            },
          ],
          tool_choice: { type: "function", function: { name: "return_word_card" } },
        }),
      });

      if (!response.ok) {
        if (response.status === 429) {
          return { card: null, error: "Rate limit hit — please wait a moment." };
        }
        if (response.status === 402) {
          return { card: null, error: "AI credits exhausted. Add funds in Settings → Workspace → Usage." };
        }
        const text = await response.text();
        console.error("AI gateway error", response.status, text);
        return { card: null, error: "AI lookup failed." };
      }

      const json = await response.json();
      const toolCall = json.choices?.[0]?.message?.tool_calls?.[0];
      const argsStr = toolCall?.function?.arguments;
      if (!argsStr) {
        return { card: null, error: "No card returned." };
      }
      const card = JSON.parse(argsStr) as WordCardData;
      return { card, error: null };
    } catch (e) {
      console.error("lookupWord failed", e);
      return { card: null, error: "Lookup failed." };
    }
  });
