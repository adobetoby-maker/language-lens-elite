import { useMatch } from "@/state/match-state";
import { RankBadge } from "./RankBadge";

export function LanguageMatchButton({ onClick }: { onClick: () => void }) {
  const { tier, badge } = useMatch();

  return (
    <button
      onClick={onClick}
      aria-label="Open Language Match"
      className="group relative inline-flex items-center gap-2 rounded-full border border-gold/40 bg-card/60 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground transition-colors hover:border-gold hover:text-gold [&_.rank-glow]:!animate-none"
    >
      <RankBadge tier={tier} badge={badge} size="sm" />
      <span className="text-base leading-none">⚔️</span>
      <span>Language Match</span>
    </button>
  );
}
