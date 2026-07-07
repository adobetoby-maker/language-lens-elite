// Built by ATLAS — 2026-07-07
// Server TTS for languages browsers cannot speak (no SpeechSynthesis voice).
// Currently: Pashto (ps) via ElevenLabs eleven_v3 — the only model with ps support.
//
// GET /api/tts?text=<utf8>&lang=ps
//  → audio/mpeg, Cache-Control immutable (Vercel edge caches per unique text,
//    so each static reading sentence is generated at most once globally).

import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { initSentry, Sentry } from "../lib/sentry";
initSentry();

// Only languages with NO browser voice belong here — everything else uses
// SpeechSynthesis for free on-device.
const REMOTE_TTS_LANGS: Record<string, { language_code: string; voice_id: string }> = {
  ps: { language_code: "ps", voice_id: "XrExE9yKIg1WjnnlVkGX" }, // Matilda — warm, clear
};

const QuerySchema = z.object({
  text: z.string().min(1).max(400),
  lang: z.enum(["ps"]),
});

export const Route = createFileRoute("/api/tts")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url);
        const parsed = QuerySchema.safeParse({
          text: url.searchParams.get("text") ?? "",
          lang: url.searchParams.get("lang") ?? "",
        });
        if (!parsed.success) {
          return new Response(JSON.stringify({ error: "Invalid text/lang" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }

        const apiKey = process.env.ELEVEN_API_KEY;
        if (!apiKey) {
          return new Response(JSON.stringify({ error: "TTS not configured" }), {
            status: 503,
            headers: { "Content-Type": "application/json" },
          });
        }

        const { text, lang } = parsed.data;
        const cfg = REMOTE_TTS_LANGS[lang];

        try {
          const res = await fetch(
            `https://api.elevenlabs.io/v1/text-to-speech/${cfg.voice_id}?output_format=mp3_44100_64`,
            {
              method: "POST",
              headers: { "xi-api-key": apiKey, "Content-Type": "application/json" },
              body: JSON.stringify({
                text,
                model_id: "eleven_v3",
                language_code: cfg.language_code,
              }),
            },
          );
          if (!res.ok) {
            const detail = await res.text();
            Sentry.captureException(new Error(`TTS upstream ${res.status}: ${detail.slice(0, 200)}`));
            return new Response(JSON.stringify({ error: "TTS generation failed" }), {
              status: 502,
              headers: { "Content-Type": "application/json" },
            });
          }
          return new Response(res.body, {
            status: 200,
            headers: {
              "Content-Type": "audio/mpeg",
              // Same text+lang always yields equivalent audio — cache hard at the edge.
              "Cache-Control": "public, max-age=31536000, s-maxage=31536000, immutable",
            },
          });
        } catch (err) {
          Sentry.captureException(err);
          return new Response(JSON.stringify({ error: "TTS error" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }
      },
    },
  },
});
