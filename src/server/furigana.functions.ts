import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const InputSchema = z.object({
  text: z.string().min(1).max(2000),
});

export interface FuriganaResult {
  /**
   * The same sentence with kanji wrapped in HTML <ruby> tags.
   * Example:
   *   input:  "私は学生です。"
   *   output: "<ruby>私<rt>わたし</rt></ruby>は<ruby>学生<rt>がくせい</rt></ruby>です。"
   *
   * Only kanji get ruby. Hiragana, katakana, punctuation, and spaces are returned
   * unchanged. The plain-text content (stripping all <rt>…</rt>) MUST equal the input.
   */
  html: string;
}

const SYSTEM = `You are a precise Japanese reading-aid generator. You add furigana (hiragana readings) above kanji using HTML <ruby> tags.

Rules — follow EXACTLY:
1. Wrap each kanji compound (one or more consecutive kanji that form a single word) in a single <ruby> tag, with the hiragana reading inside <rt>…</rt>.
2. NEVER add furigana to hiragana, katakana, punctuation, numbers, or Latin characters — leave them exactly as-is.
3. Use modern, contextually correct readings. For verbs, use the reading appropriate to the inflection (e.g. 行きます → <ruby>行<rt>い</rt></ruby>きます, not <ruby>行きます<rt>いきます</rt></ruby>).
4. Output the ENTIRE sentence verbatim — same characters, same order, same punctuation, same spaces. The only addition is <ruby>/<rt> tags around kanji.
5. NO other HTML, no markdown, no explanations, no surrounding tags.

Always respond by calling the provided tool.`;

export const addFurigana = createServerFn({ method: "POST" })
  .inputValidator((i: unknown) => InputSchema.parse(i))
  .handler(async ({ data }): Promise<{ data: FuriganaResult | null; error: string | null }> => {
    const KEY = process.env.LOVABLE_API_KEY;
    if (!KEY) return { data: null, error: "AI is not configured" };

    // Fast path: no kanji → nothing to do. Kanji range: \u4E00-\u9FFF.
    if (!/[\u4E00-\u9FFF]/.test(data.text)) {
      return { data: { html: data.text }, error: null };
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
            { role: "user", content: `Add furigana to this Japanese sentence:\n\n${data.text}` },
          ],
          tools: [
            {
              type: "function",
              function: {
                name: "return_furigana",
                description: "Return the input sentence with <ruby>/<rt> furigana applied to kanji.",
                parameters: {
                  type: "object",
                  properties: {
                    html: {
                      type: "string",
                      description:
                        "The sentence with <ruby>kanji<rt>reading</rt></ruby> applied. Plain text (with <rt>…</rt> stripped) must equal the input.",
                    },
                  },
                  required: ["html"],
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
      return { data: parsed, error: null };
    } catch (e) {
      console.error("addFurigana failed", e);
      return { data: null, error: "Furigana request failed." };
    }
  });
