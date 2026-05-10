import Anthropic from "@anthropic-ai/sdk";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { initSentry, Sentry } from '../lib/sentry'
initSentry()

const MessageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.string().min(1).max(2000),
});

const BodySchema = z.object({
  mode: z.enum(["chat", "tip", "challenge"]),
  language: z.string().min(1).max(40),
  level: z.string().min(1).max(40),
  messages: z.array(MessageSchema).min(1).max(40).optional(),
  userText: z.string().max(2000).optional(),
  concepts: z.array(z.string().min(1).max(120)).max(20).optional(),
  kind: z.enum(["grammar", "reach"]).optional(),
});

function chatSystemPrompt(language: string, level: string) {
  return [
    `You are a warm, fluent ${language} conversation partner.`,
    `The learner is at ${level} level. Speak naturally but clearly.`,
    `Keep responses to 2-3 sentences unless asked for more.`,
    `You love talking about food, travel, daily life, culture, and the places where ${language} is spoken.`,
    `Always respond in ${language}. Be encouraging and patient. Avoid markdown — write plain conversational text.`,
  ].join(" ");
}

// Wraps an Anthropic stream in a ReadableStream emitting OpenAI-compatible SSE
// so existing client parsers (choices[0].delta.content) work without changes.
function anthropicStreamToSSE(
  stream: AsyncIterable<Anthropic.MessageStreamEvent>,
): ReadableStream<Uint8Array> {
  const enc = new TextEncoder();
  return new ReadableStream({
    async start(controller) {
      try {
        for await (const event of stream) {
          if (
            event.type === "content_block_delta" &&
            event.delta.type === "text_delta"
          ) {
            const chunk =
              `data: ${JSON.stringify({ choices: [{ delta: { content: event.delta.text } }] })}\n\n`;
            controller.enqueue(enc.encode(chunk));
          }
        }
        controller.enqueue(enc.encode("data: [DONE]\n\n"));
      } finally {
        controller.close();
      }
    },
  });
}

export const Route = createFileRoute("/api/speak")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let payload: z.infer<typeof BodySchema>;
        try {
          payload = BodySchema.parse(await request.json());
        } catch (e) {
          return new Response(
            JSON.stringify({ error: e instanceof Error ? e.message : "Invalid input" }),
            { status: 400, headers: { "Content-Type": "application/json" } },
          );
        }

        const KEY = process.env.ANTHROPIC_API_KEY;
        if (!KEY) {
          return new Response(JSON.stringify({ error: "AI is not configured" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }

        const client = new Anthropic({ apiKey: KEY });

        // ----- TIP MODE: short JSON grammar tip -----
        if (payload.mode === "tip") {
          if (!payload.userText?.trim()) {
            return new Response(JSON.stringify({ tip: null }), {
              status: 200,
              headers: { "Content-Type": "application/json" },
            });
          }
          try {
            const response = await client.messages.create({
              model: "claude-haiku-4-5",
              max_tokens: 128,
              system: "You are a gentle language coach. Reply via the grammar_tip tool only.",
              messages: [
                {
                  role: "user",
                  content: `Did the user make any grammar errors in this ${payload.language} sentence: "${payload.userText}"? If yes, give one gentle tip in English under 20 words. If no errors, return null for the tip field.`,
                },
              ],
              tools: [
                {
                  name: "grammar_tip",
                  description: "Return a single gentle grammar tip or null.",
                  input_schema: {
                    type: "object" as const,
                    properties: {
                      tip: {
                        anyOf: [{ type: "string" }, { type: "null" }],
                        description: "Gentle correction under 20 words, or null if no errors.",
                      },
                    },
                    required: ["tip"],
                    additionalProperties: false,
                  },
                },
              ],
              tool_choice: { type: "tool", name: "grammar_tip" },
            });
            const toolUse = response.content.find((c) => c.type === "tool_use");
            const input = toolUse?.type === "tool_use"
              ? (toolUse.input as { tip: string | null })
              : { tip: null };
            const tip =
              typeof input.tip === "string" && input.tip.trim() ? input.tip.trim() : null;
            return new Response(JSON.stringify({ tip }), {
              status: 200,
              headers: { "Content-Type": "application/json" },
            });
          } catch {
            // Soft-fail tips: don't break the conversation
            return new Response(JSON.stringify({ tip: null }), {
              status: 200,
              headers: { "Content-Type": "application/json" },
            });
          }
        }

        // ----- CHALLENGE MODE: generate a target phrase to say -----
        if (payload.mode === "challenge") {
          const kind = payload.kind ?? "grammar";
          const concepts =
            payload.concepts && payload.concepts.length > 0
              ? payload.concepts
              : ["everyday conversation"];
          const userPrompt =
            kind === "grammar"
              ? `The learner has completed these ${payload.language} grammar lessons: ${concepts.join("; ")}. Create ONE short spoken challenge sentence (6-14 words) in ${payload.language} that naturally USES one of these grammar concepts. Then give the English translation and a one-line hint about which concept it practices.`
              : `Create ONE "reach" vocabulary challenge in ${payload.language} for a ${payload.level} learner: a short useful sentence (6-12 words) containing ONE slightly advanced word the learner probably doesn't know yet. Provide the English translation and a hint that highlights the stretch word with its meaning.`;

          try {
            const response = await client.messages.create({
              model: "claude-haiku-4-5",
              max_tokens: 256,
              system: "You design spoken language challenges. Always respond via the speak_challenge tool only.",
              messages: [{ role: "user", content: userPrompt }],
              tools: [
                {
                  name: "speak_challenge",
                  description: "A single spoken challenge for the learner.",
                  input_schema: {
                    type: "object" as const,
                    properties: {
                      target: {
                        type: "string",
                        description: `The sentence to say in ${payload.language}.`,
                      },
                      english: { type: "string", description: "Plain English translation." },
                      hint: {
                        type: "string",
                        description: "One-line coaching hint (concept name or stretch word + meaning).",
                      },
                      keyword: {
                        type: "string",
                        description:
                          "The single most important word/phrase from `target` to listen for in the learner's speech.",
                      },
                    },
                    required: ["target", "english", "hint", "keyword"],
                    additionalProperties: false,
                  },
                },
              ],
              tool_choice: { type: "tool", name: "speak_challenge" },
            });
            const toolUse = response.content.find((c) => c.type === "tool_use");
            if (!toolUse || toolUse.type !== "tool_use") throw new Error("bad payload");
            return new Response(JSON.stringify(toolUse.input), {
              status: 200,
              headers: { "Content-Type": "application/json" },
            });
          } catch {
            return new Response(
              JSON.stringify({ error: "Could not generate a challenge." }),
              { status: 500, headers: { "Content-Type": "application/json" } },
            );
          }
        }

        // ----- CHAT MODE: streaming conversation -----
        if (!payload.messages || payload.messages.length === 0) {
          return new Response(
            JSON.stringify({ error: "messages required for chat mode" }),
            { status: 400, headers: { "Content-Type": "application/json" } },
          );
        }

        try {
          const stream = await client.messages.create({
            model: "claude-haiku-4-5",
            max_tokens: 512,
            system: chatSystemPrompt(payload.language, payload.level),
            messages: payload.messages,
            stream: true,
          });

          return new Response(anthropicStreamToSSE(stream), {
            status: 200,
            headers: {
              "Content-Type": "text/event-stream",
              "Cache-Control": "no-cache, no-transform",
              Connection: "keep-alive",
            },
          });
        } catch (e) {
          Sentry.captureException(e)
          console.error("Speak stream error:", e);
          return new Response(JSON.stringify({ error: "AI request failed." }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }
      },
    },
  },
});
