import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle, Sparkles, ChevronRight } from "lucide-react";
import { useAuth } from "@/state/auth-state";
import { useSubscription } from "@/state/subscription-state";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
  head: () => ({
    meta: [
      { title: "Pricing — Language Threshold" },
      {
        name: "description",
        content:
          "Start free for 7 days. Full access to 660+ professional Spanish lessons for medical and construction workers.",
      },
    ],
  }),
});

const MONTHLY_PRICE_ID = import.meta.env.VITE_STRIPE_PRICE_MONTHLY as string | undefined;
const ANNUAL_PRICE_ID = import.meta.env.VITE_STRIPE_PRICE_ANNUAL as string | undefined;
const MONTHLY_PAYMENT_LINK = "https://buy.stripe.com/dRm6oJ91VcO95PX3UabfO00";
const ANNUAL_PAYMENT_LINK = "https://buy.stripe.com/dRm6oJ91VcO95PX3UabfO00";

async function startCheckout(
  priceId: string | undefined,
  fallbackLink: string,
  userId: string,
  userEmail?: string,
) {
  if (!priceId) {
    // Fall back to Payment Link when Stripe Checkout not yet configured
    window.location.href = fallbackLink;
    return;
  }
  const res = await fetch("/api/create-checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ priceId, userId, userEmail }),
  });
  if (!res.ok) {
    window.location.href = fallbackLink;
    return;
  }
  const { url } = await res.json() as { url: string };
  window.location.href = url;
}

const FEATURES_PRO = [
  "270 construction lessons across 9 trades",
  "390 medical lessons across 13 specialties",
  "AI word cards with morphology breakdown",
  "Speaking practice with AI feedback",
  "Grammar drills, games, and listening exercises",
  "Conjugation trainer and sentence builder",
  "Daily challenges + leaderboard",
];

const FEATURES_FREE = [
  "Missionary Spanish — full access, always free",
  "Onboarding + language selection",
];

export default function PricingPage() {
  const { user } = useAuth();
  const { isActive, status } = useSubscription();
  const [billing, setBilling] = useState<"monthly" | "annual">("annual");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    if (!user) {
      // Redirect to app root — sign in flow will redirect back
      window.location.href = "/?redirect=pricing";
      return;
    }
    setLoading(true);
    await startCheckout(
      billing === "monthly" ? MONTHLY_PRICE_ID : ANNUAL_PRICE_ID,
      billing === "monthly" ? MONTHLY_PAYMENT_LINK : ANNUAL_PAYMENT_LINK,
      user.id,
      user.email ?? undefined,
    );
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <Link to="/" className="inline-block mb-6 text-xs text-muted-foreground hover:text-gold transition-colors">
            ← Back to app
          </Link>
          <div className="flex justify-center mb-4">
            <span className="rounded-full bg-gold/10 border border-gold/30 px-4 py-1.5 text-xs font-semibold text-gold uppercase tracking-wider">
              7-day free trial
            </span>
          </div>
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl mb-3">
            Professional Spanish training
          </h1>
          <p className="text-muted-foreground text-sm max-w-sm mx-auto leading-relaxed">
            Built for healthcare workers and tradespeople who need Spanish on the job — not in a classroom.
          </p>
        </div>

        {/* Already subscribed */}
        {isActive && (
          <div className="mb-8 rounded-xl border border-gold/30 bg-gold/5 px-5 py-4 text-center">
            <p className="text-sm font-semibold text-gold">
              {status === "trialing" ? "You're in your free trial — enjoy full access!" : "You have an active subscription. "}
            </p>
            <Link to="/" className="mt-2 inline-block text-xs text-muted-foreground underline">
              Back to the app →
            </Link>
          </div>
        )}

        {/* Billing toggle */}
        {!isActive && (
          <>
            <div className="flex justify-center mb-8">
              <div className="inline-flex rounded-lg border border-border bg-card p-1 text-sm">
                <button
                  onClick={() => setBilling("monthly")}
                  className={`rounded-md px-4 py-2 font-medium transition-colors ${billing === "monthly" ? "bg-gold text-background" : "text-muted-foreground hover:text-foreground"}`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBilling("annual")}
                  className={`rounded-md px-4 py-2 font-medium transition-colors ${billing === "annual" ? "bg-gold text-background" : "text-muted-foreground hover:text-foreground"}`}
                >
                  Annual
                  <span className="ml-1.5 rounded bg-emerald-500/20 px-1.5 py-0.5 text-[10px] font-bold text-emerald-400">SAVE 35%</span>
                </button>
              </div>
            </div>

            {/* Pro tier card */}
            <div className="rounded-2xl border border-gold/40 bg-card overflow-hidden mb-6">
              <div className="bg-gradient-to-r from-gold/10 to-transparent border-b border-gold/20 px-6 py-5">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-foreground">
                    {billing === "annual" ? "$12" : "$19"}
                  </span>
                  <span className="text-muted-foreground text-sm">/month</span>
                  {billing === "annual" && (
                    <span className="text-xs text-muted-foreground">billed $149/year</span>
                  )}
                </div>
                <div className="mt-1 text-xs text-muted-foreground flex items-center gap-1">
                  <Sparkles className="h-3 w-3 text-gold" />
                  First 7 days completely free — cancel anytime
                </div>
              </div>

              <div className="px-6 py-5">
                <ul className="space-y-2.5 mb-6">
                  {FEATURES_PRO.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={handleSubscribe}
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-gold px-6 py-3.5 text-sm font-bold text-background transition-opacity hover:opacity-90 disabled:opacity-50"
                >
                  {loading ? (
                    "Preparing checkout…"
                  ) : (
                    <>
                      Start free trial
                      <ChevronRight className="h-4 w-4" />
                    </>
                  )}
                </button>

                <p className="mt-3 text-center text-xs text-muted-foreground">
                  No credit card required during trial · Cancel before day 7 to pay nothing
                </p>
              </div>
            </div>

            {/* Free tier card */}
            <div className="rounded-2xl border border-border bg-card/50 overflow-hidden">
              <div className="px-6 py-5">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-2xl font-bold text-foreground">Free</span>
                  <span className="text-muted-foreground text-sm">forever</span>
                </div>
                <ul className="space-y-2.5">
                  {FEATURES_FREE.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/"
                  className="mt-5 inline-block text-xs text-gold underline underline-offset-2 hover:opacity-80"
                >
                  Continue with free access →
                </Link>
              </div>
            </div>
          </>
        )}

        {/* Trust / FAQ */}
        <div className="mt-10 space-y-4 text-xs text-muted-foreground">
          <p className="border-t border-border pt-6 text-center">
            Questions? Email <span className="text-foreground">support@languagethreshold.com</span>
          </p>
        </div>
      </div>
    </div>
  );
}
