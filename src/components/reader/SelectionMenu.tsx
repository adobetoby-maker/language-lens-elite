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

  return (
    <div
      className="pointer-events-auto fixed z-50 -translate-x-1/2 -translate-y-full"
      style={{ left: x, top: y, animation: "cardPop 180ms cubic-bezier(.22,1,.36,1)" }}
    >
      <div className="flex items-center gap-1 rounded-full border border-gold/50 bg-card/95 p-1 shadow-luxe backdrop-blur">
        <button
          onMouseDown={(e) => {
            e.preventDefault();
            onAddNote(selection);
          }}
          className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/85 transition-colors hover:bg-gold/15 hover:text-gold"
        >
          <PenLine className="h-3 w-3" /> Add Note
        </button>
        <span className="h-4 w-px bg-border/70" />
        <button
          onMouseDown={(e) => {
            e.preventDefault();
            onHighlight(selection);
          }}
          className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/85 transition-colors hover:bg-gold/15 hover:text-gold"
        >
          <Highlighter className="h-3 w-3" /> Highlight
        </button>
      </div>
    </div>
  );
}
