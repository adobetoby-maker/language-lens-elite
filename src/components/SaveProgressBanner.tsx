import { useState } from "react";
import { Bookmark, X } from "lucide-react";
import { useAuth } from "@/state/auth-state";
import { AuthModal } from "./auth/AuthModal";

const DISMISSED_KEY = "lt.save-progress-dismissed";

export function SaveProgressBanner() {
  const { user, loading } = useAuth();
  const [dismissed, setDismissed] = useState(() => {
    try { return localStorage.getItem(DISMISSED_KEY) === "1"; } catch { return false; }
  });
  const [authOpen, setAuthOpen] = useState(false);

  if (loading || user || dismissed) return null;

  return (
    <>
      <div className="mx-3 mb-3 rounded-xl border border-gold/25 bg-gold/5 px-3 py-3">
        <div className="flex items-start gap-2.5">
          <Bookmark className="h-4 w-4 flex-shrink-0 mt-0.5 text-gold" />
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-foreground leading-tight mb-1">
              Save your progress
            </p>
            <p className="text-[11px] text-muted-foreground leading-relaxed mb-2.5">
              Your XP and streaks live on this device. Create a free account to sync across devices.
            </p>
            <button
              type="button"
              onClick={() => setAuthOpen(true)}
              className="w-full rounded-lg bg-gold px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-midnight font-semibold hover:opacity-90 transition-opacity"
            >
              Save progress →
            </button>
          </div>
          <button
            type="button"
            onClick={() => {
              try { localStorage.setItem(DISMISSED_KEY, "1"); } catch { /* noop */ }
              setDismissed(true);
            }}
            className="flex-shrink-0 rounded p-0.5 text-muted-foreground/50 hover:text-muted-foreground"
            aria-label="Dismiss"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <AuthModal open={authOpen} onOpenChange={setAuthOpen} />
    </>
  );
}
