import { createFileRoute } from "@tanstack/react-router";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

async function updateSubscriptionStatus(
  userId: string,
  status: string,
  stripeCustomerId?: string,
) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error("Supabase service role not configured");

  const client = createClient(url, key);

  // Fetch existing profile data first so we don't clobber other fields
  const { data: existing } = await client
    .from("profiles")
    .select("data")
    .eq("id", userId)
    .single();

  const merged = {
    ...(existing?.data ?? {}),
    subscription_status: status,
    ...(stripeCustomerId ? { stripe_customer_id: stripeCustomerId } : {}),
  };

  await client
    .from("profiles")
    .upsert({ id: userId, data: merged, updated_at: new Date().toISOString() });
}

export const Route = createFileRoute("/api/stripe-webhook")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const SECRET_KEY = process.env.STRIPE_SECRET_KEY;
        const WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET;

        if (!SECRET_KEY || !WEBHOOK_SECRET) {
          return new Response("Stripe not configured", { status: 503 });
        }

        const rawBody = await request.text();
        const sig = request.headers.get("stripe-signature") ?? "";

        const stripe = new Stripe(SECRET_KEY, { apiVersion: "2026-04-22.dahlia" });

        let event: Stripe.Event;
        try {
          event = await stripe.webhooks.constructEventAsync(rawBody, sig, WEBHOOK_SECRET);
        } catch {
          return new Response("Invalid signature", { status: 400 });
        }

        try {
          if (event.type === "checkout.session.completed") {
            const session = event.data.object as Stripe.Checkout.Session;
            const userId = session.client_reference_id ?? session.metadata?.userId;
            if (userId) {
              // If trial, status is 'trialing'; if paid immediately, 'active'
              const status =
                session.subscription
                  ? "trialing" // trial starts on checkout; subscription.updated will flip to active
                  : "active";
              await updateSubscriptionStatus(
                userId,
                status,
                typeof session.customer === "string" ? session.customer : undefined,
              );
            }
          }

          if (event.type === "customer.subscription.updated" || event.type === "customer.subscription.created") {
            const sub = event.data.object as Stripe.Subscription;
            const userId = sub.metadata?.userId;
            if (userId) {
              await updateSubscriptionStatus(userId, sub.status, typeof sub.customer === "string" ? sub.customer : undefined);
            }
          }

          if (event.type === "customer.subscription.deleted") {
            const sub = event.data.object as Stripe.Subscription;
            const userId = sub.metadata?.userId;
            if (userId) {
              await updateSubscriptionStatus(userId, "canceled");
            }
          }
        } catch (err) {
          console.error("Webhook handler error:", err);
          // Return 200 so Stripe doesn't keep retrying
        }

        return new Response("ok", { status: 200 });
      },
    },
  },
});
