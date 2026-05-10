import { useRef, useState } from "react";
import { Pencil, ChevronRight, Mail } from "lucide-react";
import { CharacterCanvas, type CharacterCanvasRef } from "./CharacterCanvas";
import { PEN_PAL_PROMPTS } from "./curriculum";
import { type ScoreResult } from "./scoring";
import { toHiragana } from "@/lib/romaji-to-kana";

type Step = "select" | "practice" | "compose";

export function PenPalMode() {
  const [promptIndex, setPromptIndex] = useState(0);
  const [step, setStep] = useState<Step>("select");
  const [wordIndex, setWordIndex] = useState(0);
  const [wordScores, setWordScores] = useState<(ScoreResult | null)[]>([]);
  const [letterText, setLetterText] = useState("");
  const [result, setResult] = useState<ScoreResult | null>(null);
  const canvasRef = useRef<CharacterCanvasRef>(null);

  const prompt = PEN_PAL_PROMPTS[promptIndex];

  const startPractice = (idx: number) => {
    setPromptIndex(idx);
    setWordIndex(0);
    setWordScores(Array(PEN_PAL_PROMPTS[idx].practiceWords.length).fill(null));
    setResult(null);
    setLetterText("");
    setStep("practice");
  };

  const currentWord = prompt.practiceWords[wordIndex];

  const handleCheck = () => {
    if (!canvasRef.current?.hasStrokes()) return;
    const res = canvasRef.current.getScore(currentWord.kana);
    setResult(res);
    setWordScores((prev) => {
      const next = [...prev];
      next[wordIndex] = res;
      return next;
    });
  };

  const handleNextWord = () => {
    setResult(null);
    canvasRef.current?.clear();
    if (wordIndex + 1 < prompt.practiceWords.length) {
      setWordIndex(wordIndex + 1);
    } else {
      setStep("compose");
    }
  };

  // Auto-convert romaji → kana as user types
  const handleLetterInput = (raw: string) => {
    // Convert trailing romaji words to kana on each space/newline
    setLetterText(raw);
  };

  const displayLetter = toHiragana(letterText);

  if (step === "select") {
    return (
      <div className="flex flex-col gap-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Pen Pal writing practice
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Grab your iPad and write a letter. Choose your topic to get started.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {PEN_PAL_PROMPTS.map((p, i) => (
            <button
              key={p.id}
              onClick={() => startPractice(i)}
              className="flex items-start gap-3 rounded-2xl border border-border/60 bg-card/50 p-4 text-left transition-colors hover:border-gold/50 hover:bg-gold/[0.03]"
            >
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <div>
                <p className="font-semibold">{p.title}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  To {p.recipient} in {p.city}
                </p>
                <p className="mt-1 text-xs text-muted-foreground/70">{p.scenario}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (step === "practice") {
    return (
      <div className="flex flex-col gap-5">
        {/* Letter prompt */}
        <div className="rounded-2xl border border-gold/25 bg-gold/[0.04] p-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold">
            Letter to {prompt.recipient} · {prompt.city}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">{prompt.scenario}</p>
          <div className="mt-3 border-t border-border/30 pt-3">
            <p className="font-display text-base text-foreground">{prompt.starterKana}</p>
            <p className="mt-0.5 font-mono text-xs text-muted-foreground">
              {prompt.starterRomaji}…
            </p>
          </div>
        </div>

        {/* Practice words */}
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Practice key words first
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {prompt.practiceWords.map((w, i) => (
              <button
                key={w.kana}
                onClick={() => {
                  setWordIndex(i);
                  setResult(null);
                  canvasRef.current?.clear();
                }}
                className={`rounded-full border px-3 py-1.5 text-left transition-colors ${
                  i === wordIndex
                    ? "border-gold bg-gold/10 text-gold"
                    : wordScores[i]
                      ? "border-green-500/40 bg-green-500/10 text-green-600"
                      : "border-border/60 text-muted-foreground hover:border-gold/40"
                }`}
              >
                <span className="block font-display text-base leading-tight">{w.kana}</span>
                <span className="block font-mono text-[9px]">{w.meaning}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Canvas */}
        <div className="flex flex-col gap-3">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-2xl">{currentWord.kana}</span>
            <span className="font-mono text-xs text-muted-foreground">
              {currentWord.romaji} — {currentWord.meaning}
            </span>
          </div>
          <CharacterCanvas
            ref={canvasRef}
            guideChar={currentWord.kana}
            guideAlpha={0.12}
            onStrokeEnd={undefined}
          />
        </div>

        {/* Score */}
        {result && (
          <div className="flex items-center gap-4 rounded-xl border border-border/40 bg-card/50 px-4 py-3">
            <span className="text-2xl font-bold">{result.score}%</span>
            <div className="flex gap-1 text-lg">
              {[1, 2, 3].map((n) => (
                <span
                  key={n}
                  className={n <= result.stars ? "text-gold" : "text-muted-foreground/25"}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-sm text-muted-foreground">{result.label}</span>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-2">
          {!result && (
            <button
              onClick={handleCheck}
              disabled={!canvasRef.current?.hasStrokes()}
              className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2 text-sm font-semibold text-black transition-opacity hover:opacity-90 disabled:opacity-40"
            >
              <Pencil className="h-3.5 w-3.5" /> Check
            </button>
          )}
          {result && (
            <button
              onClick={handleNextWord}
              className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2 text-sm font-semibold text-black transition-opacity hover:opacity-90"
            >
              {wordIndex + 1 < prompt.practiceWords.length ? "Next word" : "Write my letter"}
              <ChevronRight className="h-4 w-4" />
            </button>
          )}
          <button
            onClick={() => setStep("select")}
            className="rounded-full border border-border/60 px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Back
          </button>
        </div>
      </div>
    );
  }

  // step === "compose"
  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-2xl border border-gold/25 bg-gold/[0.04] p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold">
          Your letter to {prompt.recipient}
        </p>
        <p className="mt-2 font-display text-base text-foreground">{prompt.starterKana}</p>
        <p className="mt-0.5 font-mono text-xs text-muted-foreground">{prompt.starterRomaji}…</p>
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          Type your letter (romaji auto-converts to kana)
        </label>
        <textarea
          value={letterText}
          onChange={(e) => handleLetterInput(e.target.value)}
          rows={5}
          placeholder="Type in romaji — e.g. watashi wa tanaka desu..."
          className="w-full resize-none rounded-xl border border-border/50 bg-background/40 px-4 py-3 font-mono text-sm placeholder:text-muted-foreground/40 focus:border-gold/50 focus:outline-none"
        />
        {letterText && (
          <div className="rounded-xl border border-gold/20 bg-gold/[0.03] px-4 py-3">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-gold/60">Kana</p>
            <p className="mt-1 font-display text-base leading-relaxed">{displayLetter}</p>
          </div>
        )}
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => {
            setStep("practice");
            setWordIndex(0);
            canvasRef.current?.clear();
          }}
          className="rounded-full border border-border/60 px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Back to words
        </button>
        <button
          onClick={() => setStep("select")}
          className="rounded-full border border-border/60 px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          New topic
        </button>
      </div>
    </div>
  );
}
