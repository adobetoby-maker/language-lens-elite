import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const TranslateInput = z.object({
  text: z.string().min(10).max(8000),
  title: z.string().min(1).max(120),
  targetLanguage: z.string().min(1).max(40),
  nativeLanguage: z.string().min(1).max(40).optional(),
});

export interface TranslatedText {
  detectedLanguage: string;
  title: string;
  leftPaneText: string[]; // Native language
  rightPaneText: string[]; // Target language
}

const CultureInput = z.object({
  country: z.string().min(1).max(60),
  targetLanguage: z.string().min(1).max(40),
  nativeLanguage: z.string().min(1).max(40).optional(),
});

export interface CultureEssay {
  countryName: string;
  targetLanguageText: string[];
  englishText: string[]; // Native-language text (kept name for back-compat)
}

const GATEWAY = "https://ai.gateway.lovable.dev/v1/chat/completions";

async function callTool<T>(
  systemPrompt: string,
  userPrompt: string,
  toolName: string,
  parameters: Record<string, unknown>,
): Promise<{ data: T | null; error: string | null }> {
  const KEY = process.env.LOVABLE_API_KEY;
  if (!KEY) return { data: null, error: "AI is not configured" };

  try {
    const res = await fetch(GATEWAY, {
      method: "POST",
      headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        tools: [
          {
            type: "function",
            function: { name: toolName, description: "Return structured result.", parameters },
          },
        ],
        tool_choice: { type: "function", function: { name: toolName } },
      }),
    });

    if (!res.ok) {
      if (res.status === 429) return { data: null, error: "Rate limit hit, please retry shortly." };
      if (res.status === 402)
        return { data: null, error: "AI credits exhausted. Add funds in Settings → Workspace → Usage." };
      const t = await res.text();
      console.error("AI gateway error", res.status, t);
      return { data: null, error: "AI request failed." };
    }

    const json = await res.json();
    const args = json.choices?.[0]?.message?.tool_calls?.[0]?.function?.arguments;
    if (!args) return { data: null, error: "No structured result returned." };
    return { data: JSON.parse(args) as T, error: null };
  } catch (e) {
    console.error("callTool failed", e);
    return { data: null, error: "Request failed." };
  }
}

const sentenceArraySchema = {
  type: "array",
  items: { type: "string" },
  minItems: 1,
  maxItems: 80,
};

export const translateCustomText = createServerFn({ method: "POST" })
  .inputValidator((i: unknown) => TranslateInput.parse(i))
  .handler(async ({ data }) => {
    const native = data.nativeLanguage ?? "English";
    const system =
      "You are a professional literary translator. Always respond by calling the provided tool. Split text into clean, aligned sentences so each native-language sentence pairs index-by-index with its translation.";
    const user = `Here is a text titled "${data.title}":\n\n${data.text}\n\nDetect the source language. Produce a ${native} version (leftPaneText) and a ${data.targetLanguage} version (rightPaneText). Both arrays must have the SAME length so each index pairs together. Keep sentences short and natural.`;
    return callTool<TranslatedText>(system, user, "return_translation", {
      type: "object",
      properties: {
        detectedLanguage: { type: "string" },
        title: { type: "string" },
        leftPaneText: sentenceArraySchema,
        rightPaneText: sentenceArraySchema,
      },
      required: ["detectedLanguage", "title", "leftPaneText", "rightPaneText"],
      additionalProperties: false,
    });
  });

export const generateCultureEssay = createServerFn({ method: "POST" })
  .inputValidator((i: unknown) => CultureInput.parse(i))
  .handler(async ({ data }) => {
    const native = data.nativeLanguage ?? "English";
    const system =
      "You are a warm, vivid cultural essayist and translator. Always respond by calling the provided tool. Sentences must align index-by-index between the two languages.";
    const user = `Write a ~400-word essay IN ${data.targetLanguage} about ${data.country}, covering geography, culture, food, famous landmarks, and daily life. Make it warm, vivid, and educational. Then provide a ${native} translation (use the field name "englishText" for the ${native} version). Both arrays MUST have the same length so each index pairs together.`;
    return callTool<CultureEssay>(system, user, "return_culture_essay", {
      type: "object",
      properties: {
        countryName: { type: "string" },
        targetLanguageText: sentenceArraySchema,
        englishText: sentenceArraySchema,
      },
      required: ["countryName", "targetLanguageText", "englishText"],
      additionalProperties: false,
    });
  });
