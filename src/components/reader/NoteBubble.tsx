import { useEffect, useRef, useState } from "react";

export function NoteBubble({
  x,
  y,
  selectedText,
  onSave,
  onCancel,
}: {
  x: number;
  y: number;
  selectedText: string;
  onSave: (note: string) => void;
  onCancel: () => void;
}) {
  const [val, setVal] = useState("");
  const taRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    taRef.current?.focus();
  }, []);

  const left = Math.min(Math.max(x, 170), window.innerWidth - 170);
  const top = Math.max(y - 8, 80);

  return (
    <div
      className="fixed z-50 -translate-x-1/2 -translate-y-full"
      style={{ left, top, animation: "cardPop 200ms cubic-bezier(.22,1,.36,1)" }}
    >
      <div className="w-80 rounded-2xl border border-gold/50 bg-card/95 p-4 shadow-luxe backdrop-blur">
        <div className="mb-2 line-clamp-2 rounded-md bg-gold/15 px-2 py-1 font-display text-xs italic text-foreground">
          “{selectedText}”
        </div>
        <textarea
          ref={taRef}
          value={val}
          onChange={(e) => setVal(e.target.value)}
          placeholder="Write a note in the margin…"
          className="h-20 w-full resize-none rounded-md border border-border/70 bg-background/60 px-3 py-2 font-mono text-[12px] text-foreground placeholder:text-muted-foreground/60 focus:border-gold/60 focus:outline-none"
        />
        <div className="mt-2 flex items-center justify-end gap-2">
          <button
            onClick={onCancel}
            className="rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave(val.trim())}
            disabled={!val.trim()}
            className="rounded-full bg-gold px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-midnight transition-opacity hover:opacity-90 disabled:opacity-40"
          >
            Save Note
          </button>
        </div>
      </div>
    </div>
  );
}
