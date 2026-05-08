import Anthropic from "@anthropic-ai/sdk";
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const InputSchema = z.object({
  word: z.string().min(1).max(100),
  sentence: z.string().min(1).max(2000),
  language: z.string().min(1).max(40),
  nativeLanguage: z.string().min(1).max(40).optional(),
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
    const KEY = process.env.ANTHROPIC_API_KEY;
    if (!KEY) return { card: null, error: "AI is not configured" };

    const systemPrompt =
      "You are a precise multilingual dictionary and grammar tutor. Always respond by calling the provided tool with accurate linguistic data.";

    const isJapanese = /japanese|日本/i.test(data.language);
    const isKorean = /korean|한국/i.test(data.language);
    let phoneticInstruction = "For the phonetic field, use IPA notation.";
    if (isJapanese) {
      phoneticInstruction =
        "For the phonetic field, ALWAYS use standard Hepburn romaji (e.g. 'chiisana', 'gakusei', 'tabemasu'). NEVER use IPA symbols like ɕ, ː, ɯ, ɴ. Use only basic Latin letters a-z and apostrophes. Long vowels: write 'ou', 'aa', 'ii' (no macrons).";
    } else if (isKorean) {
      phoneticInstruction =
        "For the phonetic field, ALWAYS use standard Revised Romanization (RR) of Korean (e.g. 'annyeonghaseyo', 'hangugeo', 'gamsahamnida'). NEVER use IPA symbols. Use only basic Latin letters a-z. Apply contextual pronunciation rules (linking, assimilation) as actually pronounced.";
    }

    const native = data.nativeLanguage ?? "English";
    const userPrompt = `The user clicked the word "${data.word}" in this sentence: "${data.sentence}". The target language is ${data.language}. The learner's native language is ${native}; write baseDefinition and exampleTranslation IN ${native}. Return the requested fields. ${phoneticInstruction} The conjugationNote must explain (in ${native}) exactly how this word is being used in THIS sentence (tense, person, number, mood if verb; case, gender, number if noun/adj). Keep all answers concise.`;

    try {
      const client = new Anthropic({ apiKey: KEY });
      const response = await client.messages.create({
        model: "claude-haiku-4-5",
        max_tokens: 512,
        system: systemPrompt,
        messages: [{ role: "user", content: userPrompt }],
        tools: [
          {
            name: "return_word_card",
            description: "Return structured dictionary + grammar info for the clicked word.",
            input_schema: {
              type: "object" as const,
              properties: {
                headword: { type: "string", description: "Dictionary base form" },
                partOfSpeech: {
                  type: "string",
                  description: "noun, verb, adjective, adverb, pronoun, preposition, etc.",
                },
                phonetic: {
                  type: "string",
                  description:
                    "Pronunciation. For Japanese: Hepburn romaji using only Latin letters (no IPA). For other languages: IPA.",
                },
                baseDefinition: { type: "string", description: "Simple meaning in the learner's native language" },
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
                  description: "Translation of the example sentence in the learner's native language.",
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
        ],
        tool_choice: { type: "tool", name: "return_word_card" },
      });

      const toolUse = response.content.find((c) => c.type === "tool_use");
      if (!toolUse || toolUse.type !== "tool_use") {
        return { card: null, error: "No card returned." };
      }
      return { card: toolUse.input as WordCardData, error: null };
    } catch (e) {
      console.error("lookupWord failed", e);
      return { card: null, error: "Lookup failed." };
    }
  });
