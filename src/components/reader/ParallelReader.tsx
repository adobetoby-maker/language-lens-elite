import { useEffect, useRef, useState } from "react";
import { Volume2, Plus, Type } from "lucide-react";
import { LIBRARY } from "@/data/library";
import { useApp } from "@/state/app-state";
import { ClickableText } from "./ClickableText";
import { WordCard, type WordCardRequest } from "./WordCard";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

type TextSize = "S" | "M" | "L";

const SIZE_CLASS: Record<TextSize, string> = {
  S: "text-[15px] leading-[1.85]",
  M: "text-[17px] leading-[1.85]",
  L: "text-[20px] leading-[1.9]",
};

export function ParallelReader() {
  const { state, dispatch } = useApp();
  const [textId, setTextId] = useState(LIBRARY[0].id);
  const [size, setSize] = useState<TextSize>("M");
  const [syncScroll, setSyncScroll] = useState(true);
  const [addOpen, setAddOpen] = useState(false);
  const [wordReq, setWordReq] = useState<WordCardRequest | null>(null);

  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const isSyncing = useRef(false);

  const text = LIBRARY.find((t) => t.id === textId) ?? LIBRARY[0];

  useEffect(() => {
    const left = leftRef.current;
    const right = rightRef.current;
    if (!left || !right) return;

    const onLeft = () => {
      if (!syncScroll || isSyncing.current) return;
      isSyncing.current = true;
      const ratio =
        left.scrollTop / Math.max(1, left.scrollHeight - left.clientHeight);
      right.scrollTop = ratio * (right.scrollHeight - right.clientHeight);
      requestAnimationFrame(() => (isSyncing.current = false));
    };
    const onRight = () => {
      if (!syncScroll || isSyncing.current) return;
      isSyncing.current = true;
      const ratio =
        right.scrollTop / Math.max(1, right.scrollHeight - right.clientHeight);
      left.scrollTop = ratio * (left.scrollHeight - left.clientHeight);
      requestAnimationFrame(() => (isSyncing.current = false));
    };

    left.addEventListener("scroll", onLeft, { passive: true });
    right.addEventListener("scroll", onRight, { passive: true });
    return () => {
      left.removeEventListener("scroll", onLeft);
      right.removeEventListener("scroll", onRight);
    };
  }, [syncScroll, textId]);

  const handleWord = (word: string, sentence: string, x: number, y: number) => {
    setWordReq({ word, sentence, language: state.selectedLanguage, x, y });
  };

  const targetLabel =
    state.selectedLanguage === "Spanish" ? "Español" : state.selectedLanguage;

  return (
    <div className="fade-in mx-auto w-full max-w-6xl">
      {/* Library picker */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border/60 bg-card/50 px-5 py-3 backdrop-blur">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            Library
          </span>
          <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-4 py-1.5 font-display text-sm italic text-foreground transition-colors hover:border-gold/60">
              <span className="text-gold">✦</span>
              {text.title}
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="min-w-[260px]">
              {LIBRARY.map((t) => (
                <DropdownMenuItem
                  key={t.id}
                  onSelect={() => setTextId(t.id)}
                  className="flex flex-col items-start gap-0.5 py-2"
                >
                  <span className="font-display text-sm">{t.title}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    {t.subtitle}
                  </span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <button
          onClick={() => setAddOpen(true)}
          className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/5 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-gold transition-all hover:bg-gold/15"
        >
          <Plus className="h-3.5 w-3.5" /> Add Your Own Text
        </button>
      </div>

      {/* Toolbar */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 px-1">
        <div className="flex items-center gap-2">
          <Type className="h-3.5 w-3.5 text-muted-foreground" />
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            Size
          </span>
          <div className="flex overflow-hidden rounded-full border border-border/70">
            {(["S", "M", "L"] as TextSize[]).map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                data-active={size === s}
                className="px-3 py-1 font-mono text-[11px] tracking-widest text-muted-foreground transition-colors data-[active=true]:bg-gold data-[active=true]:text-midnight"
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <label className="flex cursor-pointer items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Sync Scroll
            </span>
            <button
              type="button"
              role="switch"
              aria-checked={syncScroll}
              onClick={() => setSyncScroll((v) => !v)}
              className="relative h-5 w-10 rounded-full border border-border/70 bg-muted transition-colors data-[on=true]:bg-gold"
              data-on={syncScroll}
            >
              <span
                className="absolute top-0.5 h-4 w-4 rounded-full bg-background transition-transform"
                style={{ transform: syncScroll ? "translateX(22px)" : "translateX(2px)" }}
              />
            </button>
          </label>

          <button
            onClick={() => console.log("[LinguaLens] read aloud (coming soon)")}
            className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:border-gold/60 hover:text-gold"
          >
            <Volume2 className="h-3.5 w-3.5" /> Read Aloud
          </button>
        </div>
      </div>

      {/* Reader */}
      <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/40 shadow-luxe backdrop-blur">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* LEFT - English */}
          <div className="relative">
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border/50 bg-card/80 px-6 py-3 backdrop-blur">
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                English
              </span>
              <span className="font-display text-xs italic text-muted-foreground">
                native
              </span>
            </div>
            <div
              ref={leftRef}
              className="custom-scroll h-[62vh] overflow-y-auto px-7 py-8"
            >
              <Pane
                sentences={text.sentences.map((s) => s.en)}
                size={size}
                onWordClick={handleWord}
              />
            </div>
          </div>

          {/* Gold divider */}
          <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px md:block">
            <div className="h-full w-full bg-gradient-to-b from-transparent via-gold/60 to-transparent" />
          </div>

          {/* RIGHT - Target */}
          <div className="relative border-t border-border/50 md:border-l-0 md:border-t-0">
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border/50 bg-card/80 px-6 py-3 backdrop-blur">
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-gold">
                {targetLabel}
              </span>
              <span className="font-display text-xs italic text-muted-foreground">
                target
              </span>
            </div>
            <div
              ref={rightRef}
              className="custom-scroll h-[62vh] overflow-y-auto px-7 py-8"
            >
              <Pane
                sentences={text.sentences.map((s) => s.target)}
                size={size}
                onWordClick={handleWord}
                accent
              />
            </div>
          </div>
        </div>
      </div>

      {/* Add-your-own modal */}
      <Dialog open={addOpen} onOpenChange={setAddOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">
              Add Your Own Text
            </DialogTitle>
            <DialogDescription className="font-mono text-[11px] uppercase tracking-[0.18em]">
              Paste a passage — translation &amp; alignment coming soon
            </DialogDescription>
          </DialogHeader>
          <Textarea
            placeholder="Paste any passage in English or your target language…"
            className="min-h-[180px] font-display text-base"
          />
          <DialogFooter>
            <Button variant="ghost" onClick={() => setAddOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={() => setAddOpen(false)}
              className="bg-gold text-midnight hover:bg-gold/90"
            >
              Save (soon)
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {wordReq && (
        <WordCard
          request={wordReq}
          onClose={() => setWordReq(null)}
          onXp={(n) => dispatch({ type: "ADD_XP", payload: n })}
        />
      )}
    </div>
  );
}

function Pane({
  sentences,
  size,
  onWordClick,
  accent,
}: {
  sentences: string[];
  size: TextSize;
  onWordClick: (w: string) => void;
  accent?: boolean;
}) {
  return (
    <div
      className={`font-display ${SIZE_CLASS[size]} ${accent ? "text-foreground" : "text-foreground/90"}`}
    >
      {sentences.map((s, i) => (
        <p
          key={i}
          data-sentence-index={i}
          className="mb-6 border-l-2 border-transparent pl-3 transition-colors hover:border-gold/40"
        >
          <ClickableText text={s} onWordClick={onWordClick} />
        </p>
      ))}
    </div>
  );
}
