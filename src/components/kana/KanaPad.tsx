import { useEffect, useRef, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Copy, RefreshCw, BookOpen, Sparkle } from "lucide-react";
import { toast } from "sonner";
import { toHiragana, toKatakana, hiraganaToKatakana, katakanaToHiragana } from "@/lib/romaji-to-kana";
import { convertKana, type KanaConvertResult } from "@/fns/kana-convert.functions";
import { useApp } from "@/state/app-state";

type Script = "romaji" | "hiragana" | "katakana" | "kanji";

const SCRIPT_LABELS: Record<Script, { label: string; hint: string; char: string }> = {
  romaji:   { label: "Romaji",   hint: "Type in English letters (ABCd)",   char: "A" },
  hiragana: { label: "Hiragana", hint: "Romaji auto-converts to hiragana", char: "あ" },
  katakana: { label: "Katakana", hint: "Romaji auto-converts to katakana", char: "ア" },
  kanji:    { label: "Kanji",    hint: "Type or paste hiragana/romaji, then convert with AI", char: "漢" },
};

const SCRIPTS: Script[] = ["romaji", "hiragana", "katakana", "kanji"];

const EXAMPLE_PHRASES = [
  { romaji: "konnichiwa", meaning: "Hello" },
  { romaji: "arigatou gozaimasu", meaning: "Thank you very much" },
  { romaji: "watashi wa nihongo wo benkyou shiteimasu", meaning: "I am studying Japanese" },
  { romaji: "kyou wa ii tenki desu ne", meaning: "The weather is nice today" },
  { romaji: "sumimasen doko desu ka", meaning: "Excuse me, where is it?" },
];

export function KanaPad() {
  const { state } = useApp();
  const convert = useServerFn(convertKana);
  const [script, setScript] = useState<Script>("romaji");
  const [input, setInput] = useState("");
  const [converted, setConverted] = useState("");
  const [aiResult, setAiResult] = useState<KanaConvertResult | null>(null);
  const [loading, setLoading] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Live client-side conversion for hiragana/katakana
  useEffect(() => {
    if (script === "romaji") {
      setConverted(input);
      setAiResult(null);
      return;
    }
    if (script === "hiragana") {
      setConverted(toHiragana(input));
      setAiResult(null);
      return;
    }
    if (script === "katakana") {
      setConverted(toKatakana(input));
      setAiResult(null);
      return;
    }
    // kanji: don't auto-convert — wait for user to click Convert
    setConverted(toHiragana(input)); // show hiragana as preview
  }, [input, script]);

  const handleAiConvert = async () => {
    if (!converted.trim() && !input.trim()) return;
    const source = converted.trim() || toHiragana(input);
    if (!source) return;
    setLoading(true);
    setAiResult(null);
    try {
      const res = await convert({
        data: {
          text: source,
          targetScript:
            script === "kanji"
              ? "kanji-mixed"
              : script === "katakana"
                ? "katakana"
                : "hiragana",
        },
      });
      if (res.error) {
        toast.error(res.error);
      } else if (res.result) {
        setAiResult(res.result);
      }
    } catch {
      toast.error("Conversion failed");
    } finally {
      setLoading(false);
    }
  };

  const displayText = aiResult?.output ?? converted;

  const copyDisplay = () => {
    if (!displayText) return;
    navigator.clipboard.writeText(displayText).then(() => toast("Copied!"));
  };

  const loadExample = (romaji: string) => {
    setInput(romaji);
    setAiResult(null);
    textareaRef.current?.focus();
  };

  const needsAi = script === "kanji";

  if (state.selectedLanguage !== "Japanese") {
    return (
      <div className="fade-in mx-auto flex max-w-2xl flex-col items-center justify-center gap-4 py-24 text-center">
        <span className="text-4xl">🇯🇵</span>
        <h2 className="font-display text-2xl font-semibold">Japanese Kana Pad</h2>
        <p className="text-sm text-muted-foreground">
          Switch your study language to <strong>Japanese</strong> in the top navigation to use this feature.
        </p>
      </div>
    );
  }

  return (
    <div className="fade-in mx-auto max-w-3xl space-y-6 py-4">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display text-2xl font-semibold tracking-tight">Japanese Kana Pad</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Type in romaji — see hiragana, katakana, or kanji output instantly.
          </p>
        </div>
        <Sparkle className="mt-1 h-6 w-6 text-gold" strokeWidth={1.4} fill="currentColor" />
      </div>

      {/* Script selector */}
      <div className="flex flex-wrap gap-2">
        {SCRIPTS.map((s) => {
          const { label, hint, char } = SCRIPT_LABELS[s];
          const active = script === s;
          return (
            <button
              key={s}
              onClick={() => { setScript(s); setAiResult(null); }}
              title={hint}
              data-active={active}
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-sm transition-all data-[active=true]:border-gold data-[active=true]:bg-gold/10 data-[active=true]:text-gold data-[active=false]:border-border/60 data-[active=false]:text-muted-foreground hover:border-gold/50"
            >
              <span className="text-base">{char}</span>
              {label}
            </button>
          );
        })}
      </div>
      <p className="text-xs text-muted-foreground">{SCRIPT_LABELS[script].hint}</p>

      {/* Input area */}
      <div className="rounded-2xl border border-border/60 bg-card/50 p-5">
        <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          Romaji Input
        </label>
        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => { setInput(e.target.value); setAiResult(null); }}
          rows={3}
          placeholder="Type romaji here, e.g. konnichiwa..."
          className="w-full resize-none rounded-xl border border-border/50 bg-background/40 px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-gold/60 focus:outline-none"
        />
      </div>

      {/* Output area */}
      <div className="rounded-2xl border border-gold/30 bg-gold/[0.04] p-5">
        <div className="mb-3 flex items-center justify-between">
          <label className="font-mono text-[10px] uppercase tracking-[0.22em] text-gold">
            {SCRIPT_LABELS[script].label} Output
          </label>
          <div className="flex items-center gap-2">
            {needsAi && (
              <button
                onClick={handleAiConvert}
                disabled={loading || !input.trim()}
                className="inline-flex items-center gap-1.5 rounded-full border border-gold/50 bg-gold/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-gold transition-colors hover:bg-gold/20 disabled:opacity-40"
              >
                {loading ? (
                  <RefreshCw className="h-3 w-3 animate-spin" />
                ) : (
                  <Sparkle className="h-3 w-3" />
                )}
                Convert with AI
              </button>
            )}
            {!needsAi && converted && (
              <button
                onClick={handleAiConvert}
                disabled={loading || !input.trim()}
                title="Verify with AI and get kanji breakdown"
                className="inline-flex items-center gap-1.5 rounded-full border border-border/50 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:border-gold/50 hover:text-gold disabled:opacity-40"
              >
                {loading ? <RefreshCw className="h-3 w-3 animate-spin" /> : <BookOpen className="h-3 w-3" />}
                Breakdown
              </button>
            )}
            {displayText && (
              <button
                onClick={copyDisplay}
                className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-border/50 bg-background/40 text-muted-foreground hover:border-gold/50 hover:text-gold"
                title="Copy to clipboard"
              >
                <Copy className="h-3 w-3" />
              </button>
            )}
          </div>
        </div>

        {/* Main output */}
        <div className="min-h-[4rem] rounded-xl border border-gold/20 bg-background/30 px-4 py-3">
          {displayText ? (
            <p className="font-display text-xl leading-relaxed tracking-wide text-foreground">
              {displayText}
            </p>
          ) : (
            <p className="text-sm text-muted-foreground/50">
              {script === "kanji" ? "Type romaji above, then click Convert with AI →" : "Start typing above…"}
            </p>
          )}
        </div>

        {/* Breakdown table */}
        {aiResult && aiResult.breakdown.length > 0 && (
          <div className="mt-4 space-y-2">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Word Breakdown
            </div>
            <div className="flex flex-wrap gap-2">
              {aiResult.breakdown.map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-border/60 bg-card/60 px-3 py-2 text-center"
                >
                  <div className="font-display text-lg leading-none">{item.original}</div>
                  <div className="mt-1 font-mono text-[10px] text-gold">{item.reading}</div>
                  <div className="mt-0.5 text-[11px] text-muted-foreground">{item.meaning}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Live hiragana/katakana comparison (when in kanji mode, show both) */}
      {script === "kanji" && input && (
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Hiragana", text: toHiragana(input), char: "あ" },
            { label: "Katakana", text: toKatakana(input), char: "ア" },
          ].map(({ label, text, char }) => (
            <div key={label} className="rounded-2xl border border-border/60 bg-card/40 p-4">
              <div className="mb-2 flex items-center gap-2">
                <span className="font-display text-base text-gold">{char}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
              </div>
              <p className="font-display text-base leading-relaxed text-foreground/80">{text}</p>
            </div>
          ))}
        </div>
      )}

      {/* Example phrases */}
      <div>
        <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          Example Phrases
        </div>
        <div className="flex flex-wrap gap-2">
          {EXAMPLE_PHRASES.map((ex) => (
            <button
              key={ex.romaji}
              onClick={() => loadExample(ex.romaji)}
              className="rounded-full border border-border/60 bg-card/40 px-3 py-1.5 text-left transition-colors hover:border-gold/50"
            >
              <span className="block font-mono text-[10px] text-muted-foreground">{ex.romaji}</span>
              <span className="block font-mono text-[9px] text-muted-foreground/70">{ex.meaning}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
