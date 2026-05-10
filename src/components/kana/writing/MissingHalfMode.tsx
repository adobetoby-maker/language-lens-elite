import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";
import { CharacterCanvas, type CharacterCanvasRef } from "./CharacterCanvas";
import { renderGuideToCanvas, scoreDrawing, type ScoreResult } from "./scoring";
import { type CharGroup } from "./curriculum";

type Phase = "showing" | "fading" | "drawing" | "scored";

const SHOW_DURATION = 3000;
const FADE_DURATION = 1000;
const CANVAS_SIZE = 300;

function CountdownRing({ seconds, total }: { seconds: number; total: number }) {
  const r = 20;
  const circ = 2 * Math.PI * r;
  const progress = seconds / total;
  return (
    <svg width={52} height={52} className="rotate-[-90deg]">
      <circle
        cx={26}
        cy={26}
        r={r}
        fill="none"
        stroke="currentColor"
        strokeWidth={3}
        className="text-border"
      />
      <circle
        cx={26}
        cy={26}
        r={r}
        fill="none"
        stroke="currentColor"
        strokeWidth={3}
        strokeDasharray={circ}
        strokeDashoffset={circ * (1 - progress)}
        className="text-gold transition-all duration-1000"
        strokeLinecap="round"
      />
      <text
        x={26}
        y={26}
        textAnchor="middle"
        dominantBaseline="central"
        className="rotate-90 fill-foreground text-sm font-bold"
        style={{ transform: "rotate(90deg)", transformOrigin: "26px 26px", fontSize: 14 }}
      >
        {seconds}
      </text>
    </svg>
  );
}

interface Props {
  group: CharGroup;
}

export function MissingHalfMode({ group }: Props) {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("showing");
  const [countdown, setCountdown] = useState(3);
  const [rightAlpha, setRightAlpha] = useState(0.85);
  const [result, setResult] = useState<ScoreResult | null>(null);
  const [scores, setScores] = useState<(ScoreResult | null)[]>(
    Array(group.chars.length).fill(null),
  );

  const canvasRef = useRef<CharacterCanvasRef>(null);
  const fadeGuideRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const showStartRef = useRef(0);
  const fadeStartRef = useRef(0);

  const char = group.chars[index];

  // Render the fade-overlay guide canvas (used during 'showing' and 'fading' phases)
  const renderFadeGuide = useCallback(
    (alpha: number) => {
      const canvas = fadeGuideRef.current;
      if (!canvas) return;
      renderGuideToCanvas(canvas, char, 0.12, alpha);
    },
    [char],
  );

  // Animation loop for SHOWING → FADING → DRAWING
  useEffect(() => {
    setPhase("showing");
    setCountdown(3);
    setRightAlpha(0.85);
    setResult(null);
    canvasRef.current?.clear();
    showStartRef.current = performance.now();
    renderFadeGuide(0.85);

    const countdownTimer = setInterval(() => {
      setCountdown((c) => Math.max(0, c - 1));
    }, 1000);

    const tick = (now: number) => {
      const elapsed = now - showStartRef.current;

      if (elapsed < SHOW_DURATION) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      clearInterval(countdownTimer);

      // Start fading
      if (fadeStartRef.current === 0) {
        fadeStartRef.current = now;
      }
      const fadeElapsed = now - fadeStartRef.current;
      const alpha = Math.max(0, 0.85 * (1 - fadeElapsed / FADE_DURATION));
      setRightAlpha(alpha);
      renderFadeGuide(alpha);

      if (fadeElapsed < FADE_DURATION) {
        setPhase("fading");
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setPhase("drawing");
        fadeStartRef.current = 0;
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafRef.current);
      clearInterval(countdownTimer);
      fadeStartRef.current = 0;
    };
  }, [index, char, renderFadeGuide]);

  const handleCheck = () => {
    const canvas = canvasRef.current?.getCanvas();
    if (!canvas) return;
    const res = scoreDrawing(canvas, char, { rightHalfOnly: true });
    setResult(res);
    setScores((prev) => {
      const next = [...prev];
      next[index] = res;
      return next;
    });
    setPhase("scored");
  };

  const handleNext = () => {
    setIndex((i) => (i + 1) % group.chars.length);
  };

  return (
    <div className="flex flex-col gap-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Complete the missing half
          </p>
          <div className="mt-0.5 flex items-baseline gap-2">
            <span className="font-display text-3xl font-semibold">{char}</span>
            <span className="font-mono text-sm text-muted-foreground">{group.romaji[index]}</span>
          </div>
        </div>
        <div className="flex gap-1">
          {group.chars.map((c, i) => (
            <div
              key={c}
              className={`h-2 w-2 rounded-full transition-colors ${
                i === index
                  ? "bg-gold"
                  : scores[i]
                    ? scores[i]!.stars >= 2
                      ? "bg-green-500"
                      : "bg-amber-400"
                    : "bg-border"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Phase instruction */}
      <div className="flex items-center gap-3 rounded-xl border border-border/40 bg-card/50 px-4 py-2.5">
        {phase === "showing" && (
          <>
            <CountdownRing seconds={countdown} total={3} />
            <p className="text-sm text-muted-foreground">
              Study the character — it will fade in <strong>{countdown}s</strong>
            </p>
          </>
        )}
        {phase === "fading" && (
          <p className="text-sm text-muted-foreground">
            The right half is fading… get ready to draw it!
          </p>
        )}
        {phase === "drawing" && (
          <p className="text-sm text-muted-foreground">
            Draw the <strong>right half</strong> from memory. The left half is your guide.
          </p>
        )}
        {phase === "scored" && result && (
          <div className="flex w-full items-center justify-between">
            <div>
              <p className="text-2xl font-bold">{result.score}%</p>
              <p className="text-xs text-muted-foreground">{result.label}</p>
            </div>
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
          </div>
        )}
      </div>

      {/* Canvas stack */}
      <div
        className="relative w-full rounded-2xl overflow-hidden border border-blue-200/40 shadow-sm"
        style={{ maxWidth: 360, aspectRatio: "1" }}
      >
        {/* Fade-controlled guide canvas (showing + fading phases) */}
        <canvas
          ref={fadeGuideRef}
          width={CANVAS_SIZE}
          height={CANVAS_SIZE}
          className="absolute inset-0 w-full h-full"
          style={{ background: "#fafaf7" }}
        />
        {/* Drawing canvas — only show right-half guide after fade */}
        <CharacterCanvas
          ref={canvasRef}
          guideChar={phase === "drawing" || phase === "scored" ? char : undefined}
          guideAlpha={0}
          rightGuideAlpha={phase === "drawing" || phase === "scored" ? 0 : undefined}
          brushColor="#1a1a2e"
          brushSize={4}
          disabled={phase !== "drawing"}
          onStrokeEnd={undefined}
        />
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        {phase === "drawing" && canvasRef.current?.hasStrokes() && (
          <button
            onClick={handleCheck}
            className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2 text-sm font-semibold text-black transition-opacity hover:opacity-90"
          >
            Check answer
          </button>
        )}
        {phase === "scored" && (
          <button
            onClick={handleNext}
            className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2 text-sm font-semibold text-black transition-opacity hover:opacity-90"
          >
            Next <ChevronRight className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}
