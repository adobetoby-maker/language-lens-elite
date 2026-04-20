import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const CEFR = ["A1", "A2", "B1", "B2", "C1", "C2"] as const;

const Input = z.object({
  language: z.string().min(1).max(40),
  round: z.number().int().min(1).max(99),
  cefr: z.enum(CEFR),
  avoid: z.array(z.string().min(1).max(80)).max(20).optional(),
});

export interface BattleWord {
  word: string;
  correctDefinition: string;
  wrongDefinitions: string[]; // exactly 3
}

const GATEWAY = "https://ai.gateway.lovable.dev/v1/chat/completions";

export const generateBattleWord = createServerFn({ method: "POST" })
  .inputValidator((i: unknown) => Input.parse(i))
  .handler(async ({ data }): Promise<{ data: BattleWord | null; error: string | null }> => {
    const KEY = process.env.LOVABLE_API_KEY;
    if (!KEY) return { data: null, error: "AI is not configured" };

    const avoidLine =
      data.avoid && data.avoid.length
        ? ` Do NOT pick any of these already-used words: ${data.avoid.join(", ")}.`
        : "";

    const system =
      "You write vocabulary battle rounds for a competitive language learning game. " +
      "Always respond by calling the provided tool. All definitions are in English. " +
      "Make wrong definitions plausible — same part of speech, same general semantic field — but clearly incorrect on close reading.";

    const user = `Generate ONE ${data.language} vocabulary battle word for round ${data.round} at CEFR level ${data.cefr}.${avoidLine} Return: the word in its native script (with diacritics), the correct English definition, and exactly 3 plausible-but-wrong English definitions.`;

    try {
      const res = await fetch(GATEWAY, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            { role: "system", content: system },
            { role: "user", content: user },
          ],
          tools: [
            {
              type: "function",
              function: {
                name: "return_battle_word",
                description: "Return one vocabulary battle word.",
                parameters: {
                  type: "object",
                  properties: {
                    word: { type: "string", minLength: 1, maxLength: 60 },
                    correctDefinition: { type: "string", minLength: 3, maxLength: 200 },
                    wrongDefinitions: {
                      type: "array",
                      minItems: 3,
                      maxItems: 3,
                      items: { type: "string", minLength: 3, maxLength: 200 },
                    },
                  },
                  required: ["word", "correctDefinition", "wrongDefinitions"],
                  additionalProperties: false,
                },
              },
            },
          ],
          tool_choice: { type: "function", function: { name: "return_battle_word" } },
        }),
      });

      if (!res.ok) {
        if (res.status === 429)
          return { data: null, error: "Rate limit hit, please retry shortly." };
        if (res.status === 402)
          return {
            data: null,
            error: "AI credits exhausted. Add funds in Settings → Workspace → Usage.",
          };
        const t = await res.text();
        console.error("battle word AI error", res.status, t);
        return { data: null, error: "AI request failed." };
      }

      const json = await res.json();
      const args = json.choices?.[0]?.message?.tool_calls?.[0]?.function?.arguments;
      if (!args) return { data: null, error: "No structured result returned." };
      const parsed = JSON.parse(args) as BattleWord;
      return { data: parsed, error: null };
    } catch (e) {
      console.error("generateBattleWord failed", e);
      return { data: null, error: "Request failed." };
    }
  });
