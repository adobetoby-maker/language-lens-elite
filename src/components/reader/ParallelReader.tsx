import { useEffect, useRef, useState } from "react";
import { Library, Type, Languages } from "lucide-react";
import { toast } from "sonner";
import { useApp } from "@/state/app-state";
import { useLibrary } from "@/state/library-state";
import { useNotes } from "@/state/notes-state";
import { useSpeech } from "@/state/speech-state";
import { AnnotatedSentence } from "./AnnotatedSentence";
import { FuriganaText, type FuriganaScript } from "./FuriganaText";
import { HangulText } from "./HangulText";
import { WordCard, type WordCardRequest } from "./WordCard";
import { SelectionMenu, type SelectionInfo } from "./SelectionMenu";
import { NoteBubble } from "./NoteBubble";
import { NotesPanel } from "./NotesPanel";
import { ReadAloudToolbar } from "./ReadAloudToolbar";
import { MiniPlayer } from "./MiniPlayer";
import { LibraryDrawer } from "@/components/library/LibraryDrawer";
import { useCultureGenerator } from "@/components/library/useCultureGenerator";

type TextSize = "S" | "M" | "L";

/**
 * Furigana display modes (also reused for Korean romaja):
 *  - "off"     : no readings shown
 *  - "above"   : tiny reading floats above the character (default; line height stays)
 *  - "inline"  : reading sits directly ON TOP of the character as a faint overlay,
 *                so the original sentence rhythm is preserved 1:1.
 */
type FuriganaMode = "off" | "above" | "inline";

const FURIGANA_KEY = "lingualens.reader.furigana.v1";
const FURIGANA_SCRIPT_KEY = "lingualens.reader.furigana.script.v1";
const ROMAJA_KEY = "lingualens.reader.romaja.v1";

const SIZE_CLASS: Record<TextSize, string> = {
  S: "text-[15px] leading-[1.85]",
  M: "text-[17px] leading-[1.85]",
  L: "text-[20px] leading-[1.9]",
};



export function ParallelReader() {
  const { state, dispatch } = useApp();
  const { selected, state: lib } = useLibrary();
  const { add: addAnnotation, forText } = useNotes();
  const { activeSentenceIndex, speakSentence, speakSentences } = useSpeech();
  const [size, setSize] = useState<TextSize>("M");
  const [syncScroll, setSyncScroll] = useState(true);
  const [furiganaMode, setFuriganaMode] = useState<FuriganaMode>("above");
  const [furiganaScript, setFuriganaScript] = useState<FuriganaScript>("hiragana");
  const [romajaMode, setRomajaMode] = useState<FuriganaMode>("above");

  // Hydrate + persist furigana / romaja preferences
  useEffect(() => {
    try {
      const raw = localStorage.getItem(FURIGANA_KEY);
      if (raw === "off" || raw === "above" || raw === "inline") {
        setFuriganaMode(raw);
      }
      const rawScript = localStorage.getItem(FURIGANA_SCRIPT_KEY);
      if (rawScript === "hiragana" || rawScript === "romaji") {
        setFuriganaScript(rawScript);
      }
      const rawRomaja = localStorage.getItem(ROMAJA_KEY);
      if (rawRomaja === "off" || rawRomaja === "above" || rawRomaja === "inline") {
        setRomajaMode(rawRomaja);
      }
    } catch {
      /* ignore */
    }
  }, []);
  useEffect(() => {
    try {
      localStorage.setItem(FURIGANA_KEY, furiganaMode);
    } catch {
      /* ignore */
    }
  }, [furiganaMode]);
  useEffect(() => {
    try {
      localStorage.setItem(FURIGANA_SCRIPT_KEY, furiganaScript);
    } catch {
      /* ignore */
    }
  }, [furiganaScript]);
  useEffect(() => {
    try {
      localStorage.setItem(ROMAJA_KEY, romajaMode);
    } catch {
      /* ignore */
    }
  }, [romajaMode]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [wordReq, setWordReq] = useState<WordCardRequest | null>(null);
  const [selection, setSelection] = useState<SelectionInfo | null>(null);
  const [noteBubble, setNoteBubble] = useState<SelectionInfo | null>(null);

  useCultureGenerator();

  // Track Culture Series exposure for the "Culture Buff 🌍" achievement
  useEffect(() => {
    if (selected.section === "culture" && selected.available) {
      dispatch({ type: "MARK_CULTURE_READ", payload: selected.id });
    }
  }, [selected.id, selected.section, selected.available, dispatch]);

  // Award Culture Buff once every culture entry for the active language has been opened
  useEffect(() => {
    const cultureForLang = lib.entries.filter(
      (e) => e.section === "culture" && e.available && e.language === state.selectedLanguage,
    );
    if (cultureForLang.length === 0) return;
    const allRead = cultureForLang.every((e) => state.cultureRead.includes(e.id));
    if (allRead && !state.achievements.includes("Culture Buff 🌍")) {
      dispatch({ type: "ADD_ACHIEVEMENT", payload: "Culture Buff 🌍" });
    }
  }, [lib.entries, state.cultureRead, state.achievements, state.selectedLanguage, dispatch]);

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
    dispatch({ type: "INC_COUNTER", payload: "notesSaved" });
    toast("✦ Note saved", { description: "+5 XP" });
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

  // Find sentence index in the right pane closest to current scroll position
  const findNearestSentence = (): number => {
    const container = rightRef.current;
    if (!container) return 0;
    const paragraphs = Array.from(
      container.querySelectorAll<HTMLElement>("p[data-sentence-index]"),
    );
    if (paragraphs.length === 0) return 0;
    const containerTop = container.getBoundingClientRect().top;
    const targetY = containerTop + 80; // bias just below the sticky header
    let bestIdx = 0;
    let bestDist = Infinity;
    for (const p of paragraphs) {
      const rect = p.getBoundingClientRect();
      const dist = Math.abs(rect.top - targetY);
      if (dist < bestDist) {
        bestDist = dist;
        bestIdx = Number(p.dataset.sentenceIndex);
      }
    }
    return bestIdx;
  };

  // All sentences currently visible in the right pane (for paragraph mode)
  const findVisibleSentences = (): number[] => {
    const container = rightRef.current;
    if (!container) return [];
    const cRect = container.getBoundingClientRect();
    const paragraphs = Array.from(
      container.querySelectorAll<HTMLElement>("p[data-sentence-index]"),
    );
    const visible: number[] = [];
    for (const p of paragraphs) {
      const r = p.getBoundingClientRect();
      const top = Math.max(r.top, cRect.top);
      const bottom = Math.min(r.bottom, cRect.bottom);
      if (bottom - top > 16) visible.push(Number(p.dataset.sentenceIndex));
    }
    return visible.length ? visible : [findNearestSentence()];
  };

  const handleSpeakSentence = () => {
    const idx = findNearestSentence();
    const sentence = selected.sentences[idx];
    if (!sentence) return;
    speakSentence(sentence.target, idx);
  };

  const handleSpeakParagraph = () => {
    const indices = findVisibleSentences();
    const queue = indices
      .map((i) => ({ text: selected.sentences[i]?.target ?? "", index: i }))
      .filter((q) => q.text);
    if (queue.length === 0) return;
    speakSentences(queue);
  };

  // Auto-scroll BOTH panes to keep the active sentence in view
  useEffect(() => {
    if (activeSentenceIndex < 0) return;
    [leftRef, rightRef].forEach((r) => {
      const c = r.current;
      if (!c) return;
      const el = c.querySelector(
        `p[data-sentence-index="${activeSentenceIndex}"]`,
      ) as HTMLElement | null;
      if (!el) return;
      const cRect = c.getBoundingClientRect();
      const eRect = el.getBoundingClientRect();
      if (eRect.top < cRect.top + 60 || eRect.bottom > cRect.bottom - 30) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  }, [activeSentenceIndex]);

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
          {selected.language === "Japanese" && (
            <div className="flex items-center gap-2">
              <Languages className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                Furigana
              </span>
              <div className="flex overflow-hidden rounded-full border border-border/70">
                {(
                  [
                    { v: "off", label: "Off" },
                    { v: "above", label: "Above" },
                    { v: "inline", label: "On" },
                  ] as { v: FuriganaMode; label: string }[]
                ).map(({ v, label }) => (
                  <button
                    key={v}
                    onClick={() => setFuriganaMode(v)}
                    data-active={furiganaMode === v}
                    title={
                      v === "off"
                        ? "Hide readings"
                        : v === "above"
                          ? "Tiny hiragana above kanji"
                          : "Reading sits directly on the kanji"
                    }
                    className="px-3 py-1 font-mono text-[11px] tracking-widest text-muted-foreground transition-colors data-[active=true]:bg-gold data-[active=true]:text-midnight"
                  >
                    {label}
                  </button>
                ))}
              </div>
              {furiganaMode !== "off" && (
                <div className="flex overflow-hidden rounded-full border border-border/70">
                  {(
                    [
                      { v: "hiragana", label: "あ" },
                      { v: "romaji", label: "A" },
                    ] as { v: FuriganaScript; label: string }[]
                  ).map(({ v, label }) => (
                    <button
                      key={v}
                      onClick={() => setFuriganaScript(v)}
                      data-active={furiganaScript === v}
                      title={v === "hiragana" ? "Show kana readings" : "Show romaji (Hepburn)"}
                      className="px-3 py-1 font-mono text-[11px] tracking-widest text-muted-foreground transition-colors data-[active=true]:bg-gold data-[active=true]:text-midnight"
                    >
                      {label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
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
        </div>
      </div>

      {/* Read Aloud toolbar — sits above the reader, biased to the target pane */}
      <ReadAloudToolbar
        onSpeakSentence={handleSpeakSentence}
        onSpeakParagraph={handleSpeakParagraph}
      />

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
                activeSentenceIndex={activeSentenceIndex}
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
                {selected.targetLabel}
              </span>
              <span className="font-display text-xs italic text-muted-foreground">target</span>
            </div>
            <div ref={rightRef} className="custom-scroll h-[62vh] overflow-y-auto px-7 py-8">
              <Pane
                pane="right"
                sentences={selected.sentences.map((s) => s.target)}
                size={size}
                annotations={annotations}
                activeSentenceIndex={activeSentenceIndex}
                onWordClick={handleWord}
                accent
                furiganaMode={
                  selected.language === "Japanese" ? furiganaMode : "off"
                }
                furiganaScript={furiganaScript}
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

      <MiniPlayer />
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
  activeSentenceIndex,
  onWordClick,
  accent,
  furiganaMode = "off",
  furiganaScript = "hiragana",
}: {
  pane: "left" | "right";
  sentences: string[];
  size: TextSize;
  annotations: ReturnType<typeof useNotes>["annotations"];
  activeSentenceIndex: number;
  onWordClick: (w: string, sentence: string, x: number, y: number) => void;
  accent?: boolean;
  /** Furigana display mode for Japanese target text. */
  furiganaMode?: FuriganaMode;
  /** Which script to render in the ruby labels. */
  furiganaScript?: FuriganaScript;
}) {
  const showFurigana = furiganaMode !== "off";
  return (
    <div
      className={`font-display ${SIZE_CLASS[size]} ${accent ? "text-foreground" : "text-foreground/90"}`}
    >
      {sentences.map((s, i) => {
        const sentenceAnns = annotations.filter(
          (a) => a.pane === pane && a.sentenceIndex === i,
        );
        const isActive = activeSentenceIndex === i;
        return (
          <p
            key={i}
            data-sentence-index={i}
            data-pane={pane}
            data-speaking={isActive || undefined}
            className={`mb-6 -mx-2 rounded-md border-l-2 px-2 transition-colors ${
              isActive
                ? "border-gold bg-gold/15"
                : "border-transparent hover:border-gold/40"
            } ${furiganaMode === "above" ? "furigana-line" : ""}`}
          >
            {showFurigana && sentenceAnns.length === 0 ? (
              // Fast path: no annotations on this sentence — render with furigana.
              // Once the user adds notes/highlights we fall back to the annotated
              // renderer (without ruby) for that sentence; readings stay cached.
              <FuriganaText
                text={s}
                fullSentence={s}
                onWordClick={onWordClick}
                mode={furiganaMode === "inline" ? "inline" : "above"}
                script={furiganaScript}
              />
            ) : (
              <AnnotatedSentence
                text={s}
                annotations={sentenceAnns}
                onWordClick={onWordClick}
              />
            )}
          </p>
        );
      })}
    </div>
  );
}
