import { createFileRoute } from "@tanstack/react-router";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

export const Route = createFileRoute("/api/capture-email")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const BodySchema = z.object({
          email: z.string().email(),
          moduleId: z.string().optional().nullable(),
          callCount: z.number().int().optional(),
        });

        let body: z.infer<typeof BodySchema>;
        try {
          body = BodySchema.parse(await request.json());
        } catch {
          return new Response(JSON.stringify({ ok: false, error: "Invalid input" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }

        const email = body.email.toLowerCase().trim();
        const moduleId = body.moduleId ?? null;
        const callCount = body.callCount ?? 3;

        try {
          await Promise.all([
            addToResend(email, moduleId),
            upsertBetaSignup(email, moduleId, callCount),
          ]);
          return new Response(JSON.stringify({ ok: true }), {
            headers: { "Content-Type": "application/json" },
          });
        } catch (err) {
          console.error("capture-email error:", err);
          return new Response(JSON.stringify({ ok: false, error: "Server error" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }
      },
    },
  },
});

async function addToResend(email: string, moduleId: string | null) {
  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_LANGUAGETHRESHOLD;
  if (!apiKey || !audienceId) return;

  await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      unsubscribed: false,
      data: {
        source: "app-ai-gate",
        module: moduleId ?? "unknown",
        captured_at: new Date().toISOString(),
      },
    }),
  });
}

async function upsertBetaSignup(
  email: string,
  moduleId: string | null,
  callCount: number,
) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return;

  const supabase = createClient(url, key);
  await supabase.from("beta_signups").upsert(
    { email, module_id: moduleId, call_count: callCount, captured_at: new Date().toISOString() },
    { onConflict: "email" },
  );
}
