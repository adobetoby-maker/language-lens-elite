import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const InputSchema = z.object({
  text: z.string().min(1).max(2000),
});

/**
 * A single segment of the analyzed sentence.
 *  - `base`     : the original characters (kanji compound, kana run, punctuation, etc.)
 *  - `hiragana` : hiragana reading (only present for kanji segments)
 *  - `romaji`   : Hepburn romanization (only present for kanji segments)
 *
 * Concatenating every `base` in order MUST equal the original input verbatim.
 */
export interface FuriganaSegment {
  base: string;
  hiragana?: string;
  romaji?: string;
}

export interface FuriganaResult {
  segments: FuriganaSegment[];
}

const SYSTEM = `You are a precise Japanese reading-aid generator. You split a Japanese sentence into segments and add furigana (hiragana reading) AND romaji (Hepburn romanization) for each kanji compound.

Rules — follow EXACTLY:
1. Split the sentence into ordered segments. Each kanji compound (one or more consecutive kanji that form a single word) is ONE segment with both hiragana and romaji readings.
2. Hiragana, katakana, punctuation, numbers, Latin letters, and spaces are segments WITHOUT readings — leave hiragana/romaji fields empty/undefined.
3. Use modern, contextually correct readings. For inflected verbs like 行きます, the kanji segment is just "行" with reading "い" (romaji "i"), and "きます" is a separate kana segment.
4. Concatenating every "base" in order must reproduce the input EXACTLY — same characters, same order, same punctuation, same spaces.
5. Use Hepburn romaji (e.g. し → "shi", つ → "tsu", を → "wo", ち → "chi", づ → "zu", じ → "ji"). Long vowels: write as the underlying kana (e.g. とう → "tou", おお → "oo"). No macrons.

Always respond by calling the provided tool.`;

export const addFurigana = createServerFn({ method: "POST" })
  .inputValidator((i: unknown) => InputSchema.parse(i))
  .handler(async ({ data }): Promise<{ data: FuriganaResult | null; error: string | null }> => {
    const KEY = process.env.LOVABLE_API_KEY;
    if (!KEY) return { data: null, error: "AI is not configured" };

    // Fast path: no kanji → nothing to analyze. One plain segment.
    if (!/[\u4E00-\u9FFF]/.test(data.text)) {
      return { data: { segments: [{ base: data.text }] }, error: null };
    }

    try {
      const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            { role: "system", content: SYSTEM },
            { role: "user", content: `Analyze this Japanese sentence:\n\n${data.text}` },
          ],
          tools: [
            {
              type: "function",
              function: {
                name: "return_furigana",
                description:
                  "Return ordered segments of the sentence with hiragana + romaji on each kanji compound.",
                parameters: {
                  type: "object",
                  properties: {
                    segments: {
                      type: "array",
                      items: {
                        type: "object",
                        properties: {
                          base: { type: "string" },
                          hiragana: { type: "string" },
                          romaji: { type: "string" },
                        },
                        required: ["base"],
                        additionalProperties: false,
                      },
                    },
                  },
                  required: ["segments"],
                  additionalProperties: false,
                },
              },
            },
          ],
          tool_choice: { type: "function", function: { name: "return_furigana" } },
        }),
      });

      if (!res.ok) {
        if (res.status === 429) return { data: null, error: "Rate limit, please retry shortly." };
        if (res.status === 402) return { data: null, error: "AI credits exhausted." };
        return { data: null, error: "Furigana request failed." };
      }

      const json = await res.json();
      const args = json.choices?.[0]?.message?.tool_calls?.[0]?.function?.arguments;
      if (!args) return { data: null, error: "No furigana returned." };
      const parsed = JSON.parse(args) as FuriganaResult;
      if (!Array.isArray(parsed.segments)) {
        return { data: null, error: "Invalid furigana response." };
      }
      return { data: parsed, error: null };
    } catch (e) {
      console.error("addFurigana failed", e);
      return { data: null, error: "Furigana request failed." };
    }
  });
