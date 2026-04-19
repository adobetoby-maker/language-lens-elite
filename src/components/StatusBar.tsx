import { Flame, Star, Medal } from "lucide-react";
import { useApp } from "@/state/app-state";
import { CountUp } from "./CountUp";

export function StatusBar() {
  const { state } = useApp();
  const fiery = state.streak > 1;

  return (
    <div className="border-b border-border/50 bg-card/40">
      <div className="mx-auto flex max-w-7xl items-center justify-end gap-8 px-6 py-3">
        {/* Streak */}
        <div className="flex items-center gap-2.5">
          <Flame
            className={`h-3.5 w-3.5 ${fiery ? "text-gold" : "text-gold/80"}`}
            strokeWidth={1.8}
          />
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            Streak
          </span>
          <span
            className={`font-mono text-xs ${
              fiery ? "font-bold text-gold" : "font-medium text-foreground"
            }`}
          >
            {state.streak} day{state.streak === 1 ? "" : "s"}
          </span>
        </div>
        <span className="h-3 w-px bg-border/70" />

        {/* XP */}
        <div className="flex items-center gap-2.5">
          <Star className="h-3.5 w-3.5 text-gold/80" strokeWidth={1.8} />
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            XP
          </span>
          <CountUp
            value={state.xp}
            className="font-mono text-xs font-medium text-foreground"
          />
        </div>
        <span className="h-3 w-px bg-border/70" />

        {/* Level */}
        <div className="flex items-center gap-2.5">
          <Medal className="h-3.5 w-3.5 text-gold/80" strokeWidth={1.8} />
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            Level
          </span>
          <span className="font-mono text-xs font-medium text-foreground">
            {state.tier}
          </span>
        </div>
      </div>
    </div>
  );
}
