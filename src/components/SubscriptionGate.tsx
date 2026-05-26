import { type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Sparkles, Lock, CheckCircle } from "lucide-react";
import { useSubscription } from "@/state/subscription-state";
import { useAuth } from "@/state/auth-state";
import type { TabKey } from "@/state/app-state";

// Tabs that remain free — no subscription required
const FREE_TABS = new Set<TabKey>(["missionary"]);

interface Props {
  currentTab: TabKey;
  children: ReactNode;
}

export function SubscriptionGate({ currentTab, children }: Props) {
  const { isActive, loading: subLoading } = useSubscription();
  const { user, loading: authLoading } = useAuth();

  // Free tabs bypass the gate entirely
  if (FREE_TABS.has(currentTab)) return <>{children}</>;

  // Wait for both auth + subscription to resolve
  if (authLoading || subLoading) return <>{children}</>;

  // Subscribed or trialing — full access
  if (isActive) return <>{children}</>;

  // Not signed in or no active subscription → paywall overlay
  return (
    <div className="relative min-h-[420px]">
      {/* Blurred preview of content */}
      <div className="pointer-events-none select-none blur-sm opacity-40 max-h-64 overflow-hidden">
        {children}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-xl">
        <div className="mx-auto max-w-sm text-center px-6 py-8">
          <div className="flex justify-center mb-4">
            <div className="rounded-full bg-gold/10 p-3 border border-gold/30">
              <Lock className="h-6 w-6 text-gold" />
            </div>
          </div>

          <h2 className="text-xl font-bold text-foreground mb-2">
            Start your free 7-day trial
          </h2>
          <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
            Full access to all professional Spanish content — construction, medical, sports, and more.
            {!user && " Sign in to get started."}
          </p>

          <div className="space-y-2 text-left mb-6">
            {[
              "270 construction lessons across 9 trades",
              "390 medical lessons across 13 specialties",
              "AI word cards with morphology",
              "All games, drills, and tutor modes",
            ].map((f) => (
              <div key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                <CheckCircle className="h-3.5 w-3.5 text-gold flex-shrink-0" />
                <span>{f}</span>
              </div>
            ))}
          </div>

          <Link
            to="/pricing"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gold px-5 py-3 text-sm font-bold text-background transition-opacity hover:opacity-90"
          >
            <Sparkles className="h-4 w-4" />
            Start Free Trial — 7 days free
          </Link>

          {!user && (
            <p className="mt-3 text-xs text-muted-foreground">
              Already subscribed?{" "}
              <Link to="/" className="text-gold underline underline-offset-2">
                Sign in
              </Link>
            </p>
          )}

          <p className="mt-3 text-xs text-muted-foreground">
            <Link to="/" search={{ tab: "missionary" } as never} className="underline underline-offset-2">
              Continue free with Missionary Spanish →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
