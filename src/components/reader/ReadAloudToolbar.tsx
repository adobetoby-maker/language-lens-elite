import { Play, Square, Type, Rows3, Volume2 } from "lucide-react";
import { useSpeech } from "@/state/speech-state";

export function ReadAloudToolbar({
  onSpeakSentence,
  onSpeakParagraph,
}: {
  onSpeakSentence: () => void;
  onSpeakParagraph: () => void;
}) {
  const {
    rate,
    setRate,
    accent,
    setAccent,
    accentsForLanguage,
    speakWord,
    stop,
    playing,
  } = useSpeech();

  return (
    <div className="mb-3 flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-gold/30 bg-card/70 px-4 py-2 backdrop-blur">
      <div className="flex flex-wrap items-center gap-1.5">
        <Volume2 className="mr-1 h-3.5 w-3.5 text-gold" />
        <ToolBtn icon={<Type className="h-3 w-3" />} onClick={() => speakWord()}>
          Word
        </ToolBtn>
        <ToolBtn icon={<Play className="h-3 w-3" />} onClick={onSpeakSentence}>
          Sentence
        </ToolBtn>
        <ToolBtn icon={<Rows3 className="h-3 w-3" />} onClick={onSpeakParagraph}>
          Paragraph
        </ToolBtn>
        <button
          onClick={stop}
          disabled={!playing}
          className="inline-flex items-center gap-1.5 rounded-full border border-border/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:border-destructive/60 hover:text-destructive disabled:opacity-40"
        >
          <Square className="h-3 w-3" /> Stop
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <label className="flex items-center gap-2">
          <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
            Speed
          </span>
          <input
            type="range"
            min={0.5}
            max={2}
            step={0.1}
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="h-1 w-24 cursor-pointer accent-[var(--color-gold)]"
          />
          <span className="w-8 text-right font-mono text-[10px] text-gold">
            {rate.toFixed(1)}x
          </span>
        </label>

        <label className="flex items-center gap-2">
          <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
            Accent
          </span>
          <select
            value={accent}
            onChange={(e) => setAccent(e.target.value)}
            className="rounded-full border border-border/70 bg-background/60 px-2 py-0.5 font-mono text-[10px] text-foreground focus:border-gold/60 focus:outline-none"
          >
            {accentsForLanguage.map((a) => (
              <option key={a.code} value={a.code}>
                {a.label}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
}

function ToolBtn({
  icon,
  children,
  onClick,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-gold transition-colors hover:bg-gold/15"
    >
      {icon} ▶ {children}
    </button>
  );
}
