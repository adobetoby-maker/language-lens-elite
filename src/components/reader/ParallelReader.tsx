import { useEffect, useRef, useState } from "react";
import { Volume2, Library, Type } from "lucide-react";
import { toast } from "sonner";
import { useApp } from "@/state/app-state";
import { useLibrary } from "@/state/library-state";
import { useNotes } from "@/state/notes-state";
import { AnnotatedSentence } from "./AnnotatedSentence";
import { WordCard, type WordCardRequest } from "./WordCard";
import { SelectionMenu, type SelectionInfo } from "./SelectionMenu";
import { NoteBubble } from "./NoteBubble";
import { NotesPanel } from "./NotesPanel";
import { LibraryDrawer } from "@/components/library/LibraryDrawer";
import { useCultureGenerator } from "@/components/library/useCultureGenerator";

type TextSize = "S" | "M" | "L";

const SIZE_CLASS: Record<TextSize, string> = {
  S: "text-[15px] leading-[1.85]",
  M: "text-[17px] leading-[1.85]",
  L: "text-[20px] leading-[1.9]",
};

const ACHIEVEMENT_DEEP_READER = "Deep Reader 📚";

export function ParallelReader() {
  const { state, dispatch } = useApp();
  const { selected, state: lib } = useLibrary();
  const { add: addAnnotation, forText } = useNotes();
  const [size, setSize] = useState<TextSize>("M");
  const [syncScroll, setSyncScroll] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [wordReq, setWordReq] = useState<WordCardRequest | null>(null);
  const [selection, setSelection] = useState<SelectionInfo | null>(null);
  const [noteBubble, setNoteBubble] = useState<SelectionInfo | null>(null);

  useCultureGenerator();

  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const isSyncing = useRef(false);

  useEffect(() => {
    const left = leftRef.current;
    const right = rightRef.current;
    if (!left || !right) return;

    const onLeft = () => {
      if (!syncScroll || isSyncing.current) return;
      isSyncing.current = true;
      const ratio = left.scrollTop / Math.max(1, left.scrollHeight - left.clientHeight);
      right.scrollTop = ratio * (right.scrollHeight - right.clientHeight);
      requestAnimationFrame(() => (isSyncing.current = false));
    };
    const onRight = () => {
      if (!syncScroll || isSyncing.current) return;
      isSyncing.current = true;
      const ratio = right.scrollTop / Math.max(1, right.scrollHeight - right.clientHeight);
      left.scrollTop = ratio * (left.scrollHeight - left.clientHeight);
      requestAnimationFrame(() => (isSyncing.current = false));
    };

    left.addEventListener("scroll", onLeft, { passive: true });
    right.addEventListener("scroll", onRight, { passive: true });
    return () => {
      left.removeEventListener("scroll", onLeft);
      right.removeEventListener("scroll", onRight);
    };
  }, [syncScroll, selected.id]);

  // Capture selection from either pane
  useEffect(() => {
    function handleMouseUp(e: MouseEvent) {
      // Ignore if clicking on selection menu / bubble (their buttons preventDefault)
      const sel = window.getSelection();
      if (!sel || sel.isCollapsed) {
        setSelection(null);
        return;
      }
      const text = sel.toString().trim();
      if (text.length < 2) {
        setSelection(null);
        return;
      }
      const range = sel.getRangeAt(0);
      const node =
        range.startContainer.nodeType === Node.ELEMENT_NODE
          ? (range.startContainer as Element)
          : range.startContainer.parentElement;
      const paragraph = node?.closest("p[data-sentence-index]") as HTMLElement | null;
      if (!paragraph) {
        setSelection(null);
        return;
      }
      const pane = paragraph.dataset.pane as "left" | "right" | undefined;
      const idxStr = paragraph.dataset.sentenceIndex;
      if (!pane || idxStr === undefined) {
        setSelection(null);
        return;
      }
      const rect = range.getBoundingClientRect();
      setSelection({
        text,
        pane,
        sentenceIndex: Number(idxStr),
        x: rect.left + rect.width / 2,
        y: rect.top,
      });
      void e;
    }

    function handleMouseDown(e: MouseEvent) {
      // close selection menu when clicking elsewhere (not menu itself)
      const target = e.target as HTMLElement;
      if (target.closest("[data-selection-ui]")) return;
      setSelection(null);
    }

    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mousedown", handleMouseDown);
    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  const annotations = forText(selected.id);

  const checkAchievement = (newCount: number) => {
    if (newCount === 5 && !state.achievements.includes(ACHIEVEMENT_DEEP_READER)) {
      dispatch({ type: "ADD_ACHIEVEMENT", payload: ACHIEVEMENT_DEEP_READER });
      toast("✦ Achievement unlocked", {
        description: `Deep Reader 📚 — 5 notes saved`,
      });
    }
  };

  const handleHighlight = (s: SelectionInfo) => {
    addAnnotation({
      textId: selected.id,
      pane: s.pane,
      sentenceIndex: s.sentenceIndex,
      selectedText: s.text,
    });
    setSelection(null);
    window.getSelection()?.removeAllRanges();
    toast("🌟 Highlighted", { description: `“${truncate(s.text)}”` });
  };

  const openNoteBubble = (s: SelectionInfo) => {
    setNoteBubble(s);
    setSelection(null);
  };

  const handleSaveNote = (text: string) => {
    if (!noteBubble || !text) return;
    addAnnotation({
      textId: selected.id,
      pane: noteBubble.pane,
      sentenceIndex: noteBubble.sentenceIndex,
      selectedText: noteBubble.text,
      noteText: text,
    });
    dispatch({ type: "ADD_XP", payload: 5 });
    const newNoteCount = annotations.filter((a) => a.noteText).length + 1;
    toast("✦ Note saved", { description: "+5 XP" });
    checkAchievement(newNoteCount);
    setNoteBubble(null);
    window.getSelection()?.removeAllRanges();
  };

  const handleGoTo = (pane: "left" | "right", sentenceIndex: number) => {
    const container = pane === "left" ? leftRef.current : rightRef.current;
    if (!container) return;
    const el = container.querySelector(
      `p[data-sentence-index="${sentenceIndex}"]`,
    ) as HTMLElement | null;
    el?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleWord = (word: string, sentence: string, x: number, y: number) => {
    setWordReq({ word, sentence, language: state.selectedLanguage, x, y });
  };

  const targetLabel = selected.targetLabel;

  return (
    <div className="fade-in mx-auto w-full max-w-6xl">
      {/* Library bar */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border/60 bg-card/50 px-5 py-3 backdrop-blur">
        <button
          onClick={() => setDrawerOpen(true)}
          className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-4 py-1.5 font-display text-sm italic text-foreground transition-colors hover:border-gold/60"
        >
          <Library className="h-3.5 w-3.5 text-gold" />
          <span className="text-gold">✦</span>
          {selected.title}
        </button>
        <div className="flex items-center gap-2">
          {lib.generating && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-gold">
              ✦ Generating Culture Series…
            </span>
          )}
          <button
            onClick={() => setDrawerOpen(true)}
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/5 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-gold hover:bg-gold/15"
          >
            Open Library
          </button>
        </div>
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
          <div className="relative">
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border/50 bg-card/80 px-6 py-3 backdrop-blur">
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                English
              </span>
              <span className="font-display text-xs italic text-muted-foreground">native</span>
            </div>
            <div ref={leftRef} className="custom-scroll h-[62vh] overflow-y-auto px-7 py-8">
              <Pane
                pane="left"
                sentences={selected.sentences.map((s) => s.en)}
                size={size}
                annotations={annotations}
                onWordClick={handleWord}
              />
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px md:block">
            <div className="h-full w-full bg-gradient-to-b from-transparent via-gold/60 to-transparent" />
          </div>

          <div className="relative border-t border-border/50 md:border-l-0 md:border-t-0">
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border/50 bg-card/80 px-6 py-3 backdrop-blur">
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-gold">
                {targetLabel}
              </span>
              <span className="font-display text-xs italic text-muted-foreground">target</span>
            </div>
            <div ref={rightRef} className="custom-scroll h-[62vh] overflow-y-auto px-7 py-8">
              <Pane
                pane="right"
                sentences={selected.sentences.map((s) => s.target)}
                size={size}
                annotations={annotations}
                onWordClick={handleWord}
                accent
              />
            </div>
          </div>
        </div>
      </div>

      <LibraryDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />

      <NotesPanel textId={selected.id} onGoTo={handleGoTo} />

      <div data-selection-ui>
        <SelectionMenu
          selection={selection}
          onHighlight={handleHighlight}
          onAddNote={openNoteBubble}
        />
      </div>

      {noteBubble && (
        <div data-selection-ui>
          <NoteBubble
            x={noteBubble.x}
            y={noteBubble.y}
            selectedText={noteBubble.text}
            onSave={handleSaveNote}
            onCancel={() => setNoteBubble(null)}
          />
        </div>
      )}

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

function truncate(s: string, n = 60) {
  return s.length > n ? s.slice(0, n - 1) + "…" : s;
}

function Pane({
  pane,
  sentences,
  size,
  annotations,
  onWordClick,
  accent,
}: {
  pane: "left" | "right";
  sentences: string[];
  size: TextSize;
  annotations: ReturnType<typeof useNotes>["annotations"];
  onWordClick: (w: string, sentence: string, x: number, y: number) => void;
  accent?: boolean;
}) {
  return (
    <div
      className={`font-display ${SIZE_CLASS[size]} ${accent ? "text-foreground" : "text-foreground/90"}`}
    >
      {sentences.map((s, i) => {
        const sentenceAnns = annotations.filter(
          (a) => a.pane === pane && a.sentenceIndex === i,
        );
        return (
          <p
            key={i}
            data-sentence-index={i}
            data-pane={pane}
            className="mb-6 border-l-2 border-transparent pl-3 transition-colors hover:border-gold/40"
          >
            <AnnotatedSentence
              text={s}
              annotations={sentenceAnns}
              onWordClick={onWordClick}
            />
          </p>
        );
      })}
    </div>
  );
}
