import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const MessageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.string().min(1).max(3000),
});

const InvestigatorSchema = z.object({
  type: z.enum(["golden", "challenging", "difficult"]),
  name: z.string().min(1).max(80),
  tone: z.string().min(1).max(400),
  questionsPerTopic: z.number().min(1).max(8),
});

const LessonContextSchema = z.object({
  lessonNumber: z.number().min(1).max(5),
  lessonTitle: z.string().min(1).max(80),
  topicTitle: z.string().min(1).max(120),
  topicKeyConcepts: z.array(z.string().min(1).max(60)).max(20),
  questionsAskedOnTopic: z.number().min(0).max(20),
});

const BodySchema = z.object({
  mode: z.enum(["investigator", "companion"]),
  language: z.string().min(1).max(40),
  investigator: InvestigatorSchema,
  lesson: LessonContextSchema,
  missionArea: z
    .object({
      name: z.string().max(120),
      cultureNote: z.string().max(400).optional(),
    })
    .optional(),
  // Last user (missionary) utterance — used by companion mode
  userText: z.string().max(2000).optional(),
  messages: z.array(MessageSchema).min(1).max(40),
});

function investigatorPrompt(p: z.infer<typeof BodySchema>) {
  const { investigator, lesson, language, missionArea } = p;
  const remaining = Math.max(
    0,
    investigator.questionsPerTopic - lesson.questionsAskedOnTopic,
  );
  const moveOn = remaining <= 0;
  return [
    `You are roleplaying as ${investigator.name}, a person taking the missionary discussions from The Church of Jesus Christ of Latter-day Saints.`,
    `Personality and tone: ${investigator.tone}`,
    `Always respond in ${language}. Use natural conversational ${language} — no markdown, no lists.`,
    `Stay strictly in character. Never break the fourth wall, never act like an AI, never give a "lesson" yourself — you are the investigator, not the teacher.`,
    missionArea
      ? `Cultural setting: ${missionArea.name}. ${missionArea.cultureNote ?? ""}`
      : null,
    ``,
    `CURRENT LESSON: Lesson ${lesson.lessonNumber} — ${lesson.lessonTitle}`,
    `CURRENT TOPIC: "${lesson.topicTitle}"`,
    `Key gospel concepts the missionary is trying to teach you on this topic: ${lesson.topicKeyConcepts.join(", ")}.`,
    ``,
    `RULES OF ENGAGEMENT:`,
    `- You ask roughly ${investigator.questionsPerTopic} sincere questions on each topic before being satisfied.`,
    `- So far on this topic, you have asked ${lesson.questionsAskedOnTopic} question(s); about ${remaining} remain.`,
    moveOn
      ? `- You feel the topic has been covered. Express how you feel about it (in character) and naturally invite them to continue to the next thing.`
      : `- Ask one focused, in-character follow-up question OR react briefly to what the missionary just said. Keep it to 1–3 sentences.`,
    `- If the missionary uses a key gospel term correctly, react authentically (curious, moved, skeptical depending on character).`,
    `- If the missionary speaks vaguely, push back politely and ask for clarification.`,
    `- Never list multiple questions in one turn. One question per turn.`,
    `- Keep answers under 60 words.`,
  ]
    .filter(Boolean)
    .join("\n");
}

function companionPrompt(p: z.infer<typeof BodySchema>) {
  const { investigator, lesson, language } = p;
  return [
    `You are the missionary's companion — a brief, supportive coach.`,
    `After hearing the missionary's last sentence in ${language}, give ONE short tip in English (under 25 words).`,
    `Focus tip on: (a) which key gospel concept they should mention next, (b) a phrasing improvement in ${language}, OR (c) a way to invite the investigator to commit.`,
    `The current investigator is "${investigator.name}" (${investigator.type}). Current topic: "${lesson.topicTitle}".`,
    `Key concepts still useful here: ${lesson.topicKeyConcepts.join(", ")}.`,
    `Output ONLY the tip text — no preamble, no quotes, no markdown.`,
  ].join("\n");
}

export const Route = createFileRoute("/api/discussion")({
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
          return new Response(
            JSON.stringify({ error: "AI is not configured" }),
            {
              status: 500,
              headers: { "Content-Type": "application/json" },
            },
          );
        }

        const system =
          payload.mode === "investigator"
            ? investigatorPrompt(payload)
            : companionPrompt(payload);

        // Companion mode returns a single short tip (non-streaming JSON)
        if (payload.mode === "companion") {
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
                  { role: "system", content: system },
                  {
                    role: "user",
                    content: `Missionary just said (in ${payload.language}): "${payload.userText ?? ""}"`,
                  },
                ],
              }),
            },
          );
          if (!upstream.ok) {
            return new Response(JSON.stringify({ tip: null }), {
              status: 200,
              headers: { "Content-Type": "application/json" },
            });
          }
          const data = (await upstream.json().catch(() => null)) as
            | { choices?: { message?: { content?: string } }[] }
            | null;
          const tip = data?.choices?.[0]?.message?.content?.trim() ?? null;
          return new Response(JSON.stringify({ tip }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          });
        }

        // Investigator mode — streamed
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
          console.error("Discussion upstream error:", upstream.status, text);
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
