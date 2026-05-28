import { createFileRoute } from "@tanstack/react-router";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

export const Route = createFileRoute("/api/cancel-subscription")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const SECRET_KEY = process.env.STRIPE_SECRET_KEY;
        const SUPABASE_URL = process.env.SUPABASE_URL;
        const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

        if (!SECRET_KEY || !SUPABASE_URL || !SUPABASE_KEY) {
          return new Response(JSON.stringify({ error: "Server not configured." }), {
            status: 503,
            headers: { "Content-Type": "application/json" },
          });
        }

        const body = (await request.json()) as { userId?: string; reason?: string };
        if (!body.userId) {
          return new Response(JSON.stringify({ error: "Missing userId." }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }

        const admin = createClient(SUPABASE_URL, SUPABASE_KEY, {
          auth: { autoRefreshToken: false, persistSession: false },
        });

        const { data: profile } = await admin
          .from("profiles")
          .select("data")
          .eq("id", body.userId)
          .single();

        const profileData = profile?.data as Record<string, unknown> | null;
        const subscriptionId = profileData?.subscription_id as string | undefined;

        if (!subscriptionId) {
          return new Response(
            JSON.stringify({ error: "No active subscription found." }),
            { status: 404, headers: { "Content-Type": "application/json" } },
          );
        }

        const stripe = new Stripe(SECRET_KEY, { apiVersion: "2026-04-22.dahlia" });

        try {
          await stripe.subscriptions.update(subscriptionId, {
            cancel_at_period_end: true,
            metadata: { cancel_reason: body.reason ?? "not_provided" },
          });

          await admin
            .from("profiles")
            .update({
              data: {
                ...profileData,
                cancel_at_period_end: true,
                cancel_reason: body.reason ?? "not_provided",
              },
              updated_at: new Date().toISOString(),
            })
            .eq("id", body.userId);

          return new Response(JSON.stringify({ ok: true }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          });
        } catch (err) {
          const msg = err instanceof Error ? err.message : "Stripe error.";
          return new Response(JSON.stringify({ error: msg }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }
      },
    },
  },
});
