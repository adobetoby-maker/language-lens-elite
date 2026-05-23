import Anthropic from "@anthropic-ai/sdk";
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const InputSchema = z.object({
  imageBase64: z.string().min(100).max(500_000),
});

export interface HandwritingResult {
  text: string;
  reading: string;
  meaning: string;
}

export const recognizeHandwriting = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => InputSchema.parse(input))
  .handler(
    async ({ data }): Promise<{ result: HandwritingResult | null; error: string | null }> => {
      const KEY = process.env.ANTHROPIC_API_KEY;
      if (!KEY) return { result: null, error: "AI is not configured" };

      try {
        const client = new Anthropic({ apiKey: KEY });
        const response = await client.messages.create({
          model: "claude-haiku-4-5",
          max_tokens: 256,
          system:
            "You are a Japanese language expert. Identify handwritten Japanese characters from images. Always respond using the identify_character tool.",
          messages: [
            {
              role: "user",
              content: [
                {
                  type: "image",
                  source: {
                    type: "base64",
                    media_type: "image/png",
                    data: data.imageBase64,
                  },
                },
                {
                  type: "text",
                  text: "Identify the Japanese character(s) drawn in this image. If multiple characters are visible, identify the most prominent one. Use the identify_character tool.",
                },
              ],
            },
          ],
          tools: [
            {
              name: "identify_character",
              description: "Return the identified Japanese character with its reading and meaning",
              input_schema: {
                type: "object" as const,
                properties: {
                  text: {
                    type: "string",
                    description: "The character(s) in Japanese script (kanji/kana)",
                  },
                  reading: { type: "string", description: "Hiragana reading (e.g. に ほ ん ご)" },
                  meaning: { type: "string", description: "English meaning or translation" },
                },
                required: ["text", "reading", "meaning"],
              },
            },
          ],
          tool_choice: { type: "tool", name: "identify_character" },
        });

        const toolUse = response.content.find((b) => b.type === "tool_use");
        if (!toolUse || toolUse.type !== "tool_use") {
          return { result: null, error: "Could not identify the character" };
        }

        const input = toolUse.input as HandwritingResult;
        return { result: input, error: null };
      } catch {
        return { result: null, error: "Recognition failed" };
      }
    },
  );
