import { Flame, Star, Medal } from "lucide-react";
import { useApp } from "@/state/app-state";

export function StatusBar() {
  const { state } = useApp();

  const items = [
    { icon: Flame, label: "Streak", value: `${state.streak} days`, accent: true },
    { icon: Star, label: "XP", value: state.xp.toString() },
    { icon: Medal, label: "Level", value: state.level },
  ];

  return (
    <div className="border-b border-border/50 bg-card/40">
      <div className="mx-auto flex max-w-7xl items-center justify-end gap-8 px-6 py-3">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <item.icon
              className={`h-3.5 w-3.5 ${item.accent ? "text-gold" : "text-gold/80"}`}
              strokeWidth={1.8}
            />
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              {item.label}
            </span>
            <span className="font-mono text-xs font-medium text-foreground">
              {item.value}
            </span>
            {i < items.length - 1 && (
              <span className="ml-6 h-3 w-px bg-border/70" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
