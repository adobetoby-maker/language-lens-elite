import { useEffect, useState } from "react";
import { Sparkles, X } from "lucide-react";

/**
 * Displays a "Free preview" banner while the app has no real paywall wired up.
 *
 * Hides itself after FREE_PREVIEW_UNTIL passes — at that point payments should
 * be enabled and any real gating should kick in. Dismissals are remembered
 * locally so testers don't see it on every refresh.
 */
const FREE_PREVIEW_UNTIL = new Date("2026-05-26T23:59:59Z");
const STORAGE_KEY = "free-preview-banner-dismissed";

function formatDate(d: Date) {
  return d.toLocaleDateString(undefined, {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function FreePreviewBanner() {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (Date.now() > FREE_PREVIEW_UNTIL.getTime()) return;
    if (typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY) === "1") return;
    setHidden(false);
  }, []);

  if (hidden) return null;

  return (
    <div className="border-b border-gold/30 bg-gradient-to-r from-gold/10 via-gold/5 to-transparent">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 text-xs sm:px-6">
        <div className="flex min-w-0 items-center gap-2 text-foreground/90">
          <Sparkles className="h-3.5 w-3.5 flex-shrink-0 text-gold" />
          <span className="truncate">
            <strong className="font-semibold text-gold">Free preview</strong>
            <span className="mx-1.5 opacity-50">•</span>
            Full access through {formatDate(FREE_PREVIEW_UNTIL)} — no payment required.
          </span>
        </div>
        <button
          type="button"
          onClick={() => {
            try {
              localStorage.setItem(STORAGE_KEY, "1");
            } catch {
              /* ignore */
            }
            setHidden(true);
          }}
          className="flex-shrink-0 rounded-full p-1 text-muted-foreground transition-colors hover:bg-background/60 hover:text-foreground"
          aria-label="Dismiss"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
