import { useMatch } from "@/state/match-state";
import { RankBadge } from "./RankBadge";

export function LanguageMatchButton({ onClick }: { onClick: () => void }) {
  const { tier, badge } = useMatch();

  return (
    <button
      onClick={onClick}
      aria-label="Open Language Match"
      className="lm-btn group relative inline-flex items-center gap-2 rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground transition-transform"
    >
      {/* Rotating gold shimmer border */}
      <span aria-hidden className="lm-btn-border" />
      {/* Inner surface */}
      <span className="lm-btn-inner relative z-10 inline-flex items-center gap-2 rounded-full bg-card px-3.5 py-1.5">
        <RankBadge tier={tier} badge={badge} size="sm" />
        <span className="text-base leading-none">⚔️</span>
        <span>Language Match</span>
      </span>
    </button>
  );
}
