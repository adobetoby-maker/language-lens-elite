import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const MessageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.string().min(1).max(2000),
});

const BodySchema = z.object({
  mode: z.enum(["chat", "tip"]),
  language: z.string().min(1).max(40),
  level: z.string().min(1).max(40),
  messages: z.array(MessageSchema).min(1).max(40).optional(),
  userText: z.string().max(2000).optional(),
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

const KEY_ERROR = "AI is not configured";

export const Route = createFileRoute("/api/speak")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let payload: z.infer<typeof BodySchema>;
        try {
          payload = BodySchema.parse(await request.json());
        } catch (e) {
          return new Response(
            JSON.stringify({
              error: e instanceof Error ? e.message : "Invalid input",
            }),
            { status: 400, headers: { "Content-Type": "application/json" } },
          );
        }

        const KEY = process.env.LOVABLE_API_KEY;
        if (!KEY) {
          return new Response(JSON.stringify({ error: KEY_ERROR }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }

        // ----- TIP MODE: short JSON grammar tip -----
        if (payload.mode === "tip") {
          if (!payload.userText?.trim()) {
            return new Response(JSON.stringify({ tip: null }), {
              status: 200,
              headers: { "Content-Type": "application/json" },
            });
          }
          const upstream = await fetch(
            "https://ai.gateway.lovable.dev/v1/chat/completions",
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${KEY}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                model: "google/gemini-3-flash-preview",
                messages: [
                  {
                    role: "system",
                    content:
                      "You are a gentle language coach. Reply via the grammar_tip tool only.",
                  },
                  {
                    role: "user",
                    content: `Did the user make any grammar errors in this ${payload.language} sentence: "${payload.userText}"? If yes, give one gentle tip in English under 20 words. If no errors, return null.`,
                  },
                ],
                tools: [
                  {
                    type: "function",
                    function: {
                      name: "grammar_tip",
                      description: "Return a single gentle grammar tip or null.",
                      parameters: {
                        type: "object",
                        properties: {
                          tip: {
                            type: ["string", "null"],
                            description:
                              "Gentle correction under 20 words, or null if no errors.",
                          },
                        },
                        required: ["tip"],
                        additionalProperties: false,
                      },
                    },
                  },
                ],
                tool_choice: {
                  type: "function",
                  function: { name: "grammar_tip" },
                },
              }),
            },
          );

          if (!upstream.ok) {
            // Soft-fail tips: don't break the conversation
            return new Response(JSON.stringify({ tip: null }), {
              status: 200,
              headers: { "Content-Type": "application/json" },
            });
          }
          try {
            const data = (await upstream.json()) as any;
            const args =
              data?.choices?.[0]?.message?.tool_calls?.[0]?.function?.arguments;
            const parsed = args ? JSON.parse(args) : { tip: null };
            const tip =
              typeof parsed?.tip === "string" && parsed.tip.trim()
                ? parsed.tip.trim()
                : null;
            return new Response(JSON.stringify({ tip }), {
              status: 200,
              headers: { "Content-Type": "application/json" },
            });
          } catch {
            return new Response(JSON.stringify({ tip: null }), {
              status: 200,
              headers: { "Content-Type": "application/json" },
            });
          }
        }

        // ----- CHAT MODE: streaming conversation -----
        if (!payload.messages || payload.messages.length === 0) {
          return new Response(
            JSON.stringify({ error: "messages required for chat mode" }),
            { status: 400, headers: { "Content-Type": "application/json" } },
          );
        }

        const upstream = await fetch(
          "https://ai.gateway.lovable.dev/v1/chat/completions",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${KEY}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              model: "google/gemini-3-flash-preview",
              stream: true,
              messages: [
                {
                  role: "system",
                  content: chatSystemPrompt(payload.language, payload.level),
                },
                ...payload.messages,
              ],
            }),
          },
        );

        if (!upstream.ok) {
          if (upstream.status === 429) {
            return new Response(
              JSON.stringify({
                error: "Rate limit hit. Please try again shortly.",
              }),
              { status: 429, headers: { "Content-Type": "application/json" } },
            );
          }
          if (upstream.status === 402) {
            return new Response(
              JSON.stringify({
                error:
                  "AI credits exhausted. Add funds in Settings → Workspace → Usage.",
              }),
              { status: 402, headers: { "Content-Type": "application/json" } },
            );
          }
          const t = await upstream.text();
          console.error("Speak upstream error:", upstream.status, t);
          return new Response(JSON.stringify({ error: "AI request failed." }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }

        return new Response(upstream.body, {
          status: 200,
          headers: {
            "Content-Type": "text/event-stream",
            "Cache-Control": "no-cache, no-transform",
            Connection: "keep-alive",
          },
        });
      },
    },
  },
});
