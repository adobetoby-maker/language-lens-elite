import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const MessageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.string().min(1).max(8000),
});

const BodySchema = z.object({
  messages: z.array(MessageSchema).min(1).max(40),
  context: z.object({
    language: z.string().min(1).max(40),
    level: z.string().min(1).max(40),
    textTitle: z.string().max(200).optional(),
    passage: z.string().max(2000).optional(),
    lastWord: z.string().max(80).optional(),
  }),
});

function buildSystemPrompt(ctx: z.infer<typeof BodySchema>["context"]) {
  return [
    `You are a warm, expert linguist and cultural ambassador for ${ctx.language}.`,
    `You have deep knowledge of grammar, literature, and the cultures of countries where ${ctx.language} is spoken.`,
    `Answer questions clearly and encouragingly. When relevant, explain grammar in the context of the text the learner is reading.`,
    `Use Markdown for emphasis. Keep responses focused — usually 2–4 short paragraphs.`,
    ``,
    `LEARNER CONTEXT:`,
    `- Target language: ${ctx.language}`,
    `- CEFR level: ${ctx.level}`,
    ctx.textTitle ? `- Currently reading: "${ctx.textTitle}"` : null,
    ctx.lastWord ? `- Last word the learner looked up: "${ctx.lastWord}"` : null,
    ctx.passage
      ? `- Snippet of current passage:\n"""\n${ctx.passage.slice(0, 1200)}\n"""`
      : null,
  ]
    .filter(Boolean)
    .join("\n");
}

export const Route = createFileRoute("/api/tutor")({
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

        const KEY = process.env.LOVABLE_API_KEY;
        if (!KEY) {
          return new Response(JSON.stringify({ error: "AI is not configured" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }

        const system = buildSystemPrompt(payload.context);

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
                { role: "system", content: system },
                ...payload.messages,
              ],
            }),
          },
        );

        if (!upstream.ok) {
          if (upstream.status === 429) {
            return new Response(
              JSON.stringify({ error: "Rate limit hit. Please try again shortly." }),
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
          const text = await upstream.text();
          console.error("Tutor upstream error:", upstream.status, text);
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
