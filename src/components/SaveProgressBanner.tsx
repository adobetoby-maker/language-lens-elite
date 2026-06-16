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

  if (user || dismissed) return null;

  // Skeleton during auth resolution
  if (loading) {
    return (
      <div className="border-b border-gold/10 bg-gold/[0.03] px-4 py-2.5 animate-pulse sm:px-6">
        <div className="flex items-center gap-3">
          <div className="h-4 w-4 rounded bg-gold/15 flex-shrink-0" />
          <div className="flex-1 h-3 rounded bg-gold/15" />
          <div className="h-7 w-28 rounded-lg bg-gold/15 flex-shrink-0" />
          <div className="h-4 w-4 rounded bg-gold/10 flex-shrink-0" />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="border-b border-gold/20 bg-gold/[0.04] px-4 py-2.5 sm:px-6">
        <div className="flex items-center gap-3">
          <Bookmark className="h-4 w-4 flex-shrink-0 text-gold" />
          <p className="flex-1 text-xs text-muted-foreground leading-snug min-w-0">
            <span className="font-semibold text-foreground">Save your progress —</span>{" "}
            your XP and streaks live on this device. Create a free account to sync across devices.
          </p>
          <button
            type="button"
            onClick={() => setAuthOpen(true)}
            className="flex-shrink-0 rounded-lg bg-gold px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-midnight font-semibold hover:opacity-90 transition-opacity"
          >
            Save progress →
          </button>
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
