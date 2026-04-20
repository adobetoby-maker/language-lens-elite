import { useEffect, useState } from "react";
import { Highlighter, PenLine } from "lucide-react";

export interface SelectionInfo {
  text: string;
  pane: "left" | "right";
  sentenceIndex: number;
  x: number;
  y: number;
}

export function SelectionMenu({
  selection,
  onHighlight,
  onAddNote,
}: {
  selection: SelectionInfo | null;
  onHighlight: (s: SelectionInfo) => void;
  onAddNote: (s: SelectionInfo) => void;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!selection || !mounted) return null;

  const x = Math.min(Math.max(selection.x, 90), window.innerWidth - 90);
  const y = Math.max(selection.y - 8, 56);

  // Pointer-down handlers fire BEFORE the OS native selection callout dismisses
  // the selection on iOS, so the action can read the still-live selection.
  // We also block touch-callout/user-select on the menu so tapping it doesn't
  // disturb the underlying text selection.
  const trigger = (fn: (s: SelectionInfo) => void) => (e: React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    fn(selection);
  };

  return (
    <div
      className="pointer-events-auto fixed z-50 -translate-x-1/2 -translate-y-full select-none [-webkit-touch-callout:none] [-webkit-user-select:none]"
      style={{ left: x, top: y, animation: "cardPop 180ms cubic-bezier(.22,1,.36,1)" }}
    >
      <div className="flex items-center gap-1 rounded-full border border-gold/50 bg-card/95 p-1.5 shadow-luxe backdrop-blur">
        <button
          onPointerDown={trigger(onAddNote)}
          onMouseDown={(e) => e.preventDefault()}
          className="inline-flex min-h-11 items-center gap-1.5 rounded-full px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/85 transition-colors hover:bg-gold/15 hover:text-gold active:bg-gold/25 sm:min-h-0 sm:px-3 sm:py-1.5 sm:text-[10px] [touch-action:manipulation]"
        >
          <PenLine className="h-3.5 w-3.5 sm:h-3 sm:w-3" /> Add Note
        </button>
        <span className="h-5 w-px bg-border/70 sm:h-4" />
        <button
          onPointerDown={trigger(onHighlight)}
          onMouseDown={(e) => e.preventDefault()}
          className="inline-flex min-h-11 items-center gap-1.5 rounded-full px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/85 transition-colors hover:bg-gold/15 hover:text-gold active:bg-gold/25 sm:min-h-0 sm:px-3 sm:py-1.5 sm:text-[10px] [touch-action:manipulation]"
        >
          <Highlighter className="h-3.5 w-3.5 sm:h-3 sm:w-3" /> Highlight
        </button>
      </div>
    </div>
  );
}
