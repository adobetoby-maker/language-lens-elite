import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const MessageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.string().min(1).max(8000),
});

const ModuleSchema = z
  .object({
    id: z.string().max(60),
    name: z.string().max(120),
    userRole: z.string().max(120).optional(),
    aiPersona: z.string().max(800).optional(),
    missionArea: z
      .object({
        name: z.string().max(120),
        region: z.string().max(80).optional(),
        languages: z.array(z.string().max(40)).max(12).optional(),
        cultureNote: z.string().max(400).optional(),
      })
      .optional(),
    orthoArea: z
      .object({
        name: z.string().max(120),
        counterpart: z.string().max(200).optional(),
        learnerRole: z.string().max(120).optional(),
        toneNote: z.string().max(400).optional(),
        vocab: z.array(z.string().max(60)).max(20).optional(),
      })
      .optional(),
  })
  .optional();

const BodySchema = z.object({
  messages: z.array(MessageSchema).min(1).max(40),
  context: z.object({
    language: z.string().min(1).max(40),
    level: z.string().min(1).max(40),
    textTitle: z.string().max(200).optional(),
    passage: z.string().max(2000).optional(),
    lastWord: z.string().max(80).optional(),
    module: ModuleSchema,
  }),
});

function buildModuleAddendum(mod: NonNullable<z.infer<typeof BodySchema>["context"]["module"]>) {
  const lines: (string | null)[] = [
    ``,
    `ACTIVE MODULE: ${mod.name}`,
    mod.userRole ? `- Learner role: ${mod.userRole}` : null,
    mod.aiPersona ? `- Persona guidance: ${mod.aiPersona}` : null,
  ];

  if (mod.id === "lds-missionary") {
    lines.push(
      `- You are also a knowledgeable consultant on The Church of Jesus Christ of Latter-day Saints. Speak with respectful familiarity about Preach My Gospel (2023), the General Handbook, the Book of Mormon, the Doctrine and Covenants, the Pearl of Great Price, and General Conference talks — all freely available at churchofjesuschrist.org and in the Gospel Library app.`,
      `- When teaching missionary phrases, prefer the wording a returned missionary would actually use in the field, including reverent terminology (e.g. "Heavenly Father", "Atonement", "the Restoration"). Always show the target-language translation first, then a short English gloss.`,
      `- For commitment invitations ("Will you…?"), preserve the invitation grammar (modal + sincere tone) of the target language.`,
      `- Never invent doctrine. If a question is unclear, point the learner to the relevant chapter of Preach My Gospel or the General Handbook.`,
      `- Be respectful of investigators of every background; teach by the Spirit, with love.`,
    );
    if (mod.missionArea) {
      lines.push(
        `- Mission assignment: ${mod.missionArea.name}${
          mod.missionArea.region ? ` (${mod.missionArea.region})` : ""
        }.`,
        mod.missionArea.languages?.length
          ? `- Primary teaching languages in that area: ${mod.missionArea.languages.join(", ")}.`
          : null,
        mod.missionArea.cultureNote
          ? `- Cultural note for this area: ${mod.missionArea.cultureNote}`
          : null,
        `- Tailor pronunciation, register, and example scenarios to this mission area.`,
      );
    }
  }

  if (mod.id === "orthopedics") {
    lines.push(
      `- You are an experienced clinical-language coach for orthopedic surgeons. Use accurate medical terminology in the target language and natural register for the setting.`,
      `- Always show the target-language phrase first, then a short English gloss in parentheses.`,
      `- When the learner asks to roleplay, stay in character as the counterpart described below until the learner ends the scene.`,
      `- Keep ER/OR/Trauma exchanges short and clinical; keep clinic and oncology exchanges warmer and slower.`,
      `- Never give real medical advice — this is language practice only.`,
    );
    if (mod.orthoArea) {
      lines.push(
        `- Current scenario area: ${mod.orthoArea.name}.`,
        mod.orthoArea.learnerRole ? `- Learner is playing: ${mod.orthoArea.learnerRole}.` : null,
        mod.orthoArea.counterpart ? `- You are playing: ${mod.orthoArea.counterpart}.` : null,
        mod.orthoArea.toneNote ? `- Tone for this area: ${mod.orthoArea.toneNote}` : null,
        mod.orthoArea.vocab?.length
          ? `- Lean on this vocabulary when natural: ${mod.orthoArea.vocab.join(", ")}.`
          : null,
      );
    }
  }

  return lines.filter(Boolean).join("\n");
}

function buildSystemPrompt(ctx: z.infer<typeof BodySchema>["context"]) {
  const base = [
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

  return ctx.module ? `${base}\n${buildModuleAddendum(ctx.module)}` : base;
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
