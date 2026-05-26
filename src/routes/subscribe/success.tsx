import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { CheckCircle, Sparkles } from "lucide-react";
import { useSubscription } from "@/state/subscription-state";

export const Route = createFileRoute("/subscribe/success")({
  component: SuccessPage,
  head: () => ({
    meta: [{ title: "Welcome — Language Threshold" }],
  }),
});

function SuccessPage() {
  const { refresh } = useSubscription();

  // Refresh subscription status so the gate opens immediately on return
  useEffect(() => {
    const timer = setTimeout(() => refresh(), 2000);
    return () => clearTimeout(timer);
  }, [refresh]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="flex justify-center mb-6">
          <div className="rounded-full bg-emerald-500/10 p-4 border border-emerald-500/30">
            <CheckCircle className="h-10 w-10 text-emerald-400" />
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mb-3">
          <Sparkles className="h-4 w-4 text-gold" />
          <span className="text-xs font-semibold uppercase tracking-wider text-gold">
            Trial activated
          </span>
        </div>

        <h1 className="text-3xl font-bold text-foreground mb-3">
          You're in.
        </h1>
        <p className="text-muted-foreground text-sm leading-relaxed mb-8">
          Your 7-day free trial has started. Full access to all professional Spanish lessons —
          construction, medical, sports, and more. Cancel any time before day 7 to pay nothing.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-xl bg-gold px-8 py-3.5 text-sm font-bold text-background transition-opacity hover:opacity-90"
        >
          Start learning →
        </Link>

        <p className="mt-6 text-xs text-muted-foreground">
          A receipt has been sent to your email. Questions?{" "}
          <a href="mailto:support@languagethreshold.com" className="text-gold underline underline-offset-2">
            support@languagethreshold.com
          </a>
        </p>
      </div>
    </div>
  );
}
