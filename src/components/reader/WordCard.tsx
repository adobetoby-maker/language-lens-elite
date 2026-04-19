import { useEffect, useRef, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { X, Volume2, MessageCircle, Sparkle } from "lucide-react";
import { lookupWord, type WordCardData } from "@/server/word-lookup.functions";
import { useSpeech } from "@/state/speech-state";
import { useTutor } from "@/state/tutor-state";
import { useApp, type Language } from "@/state/app-state";
import { configureUtterance } from "@/lib/voices";

const LOCALE: Record<Language, string> = {
  Spanish: "es-ES",
  French: "fr-FR",
  German: "de-DE",
  Italian: "it-IT",
  Japanese: "ja-JP",
  Portuguese: "pt-PT",
};

const CARD_W = 360;
const CARD_H = 460;

export interface WordCardRequest {
  word: string;
  sentence: string;
  language: Language;
  x: number;
  y: number;
}

export function WordCard({
  request,
  onClose,
  onXp,
}: {
  request: WordCardRequest;
  onClose: () => void;
  onXp: (n: number) => void;
}) {
  const lookup = useServerFn(lookupWord);
  const { setLastWord } = useSpeech();
  const tutor = useTutor();
  const { dispatch } = useApp();
  const [card, setCard] = useState<WordCardData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  // Smart positioning so the card never overflows the viewport
  const pos = (() => {
    const pad = 12;
    const vw = typeof window !== "undefined" ? window.innerWidth : 1024;
    const vh = typeof window !== "undefined" ? window.innerHeight : 768;
    let left = request.x + 16;
    let top = request.y + 16;
    if (left + CARD_W + pad > vw) left = Math.max(pad, request.x - CARD_W - 16);
    if (top + CARD_H + pad > vh) top = Math.max(pad, request.y - CARD_H - 16);
    left = Math.max(pad, Math.min(left, vw - CARD_W - pad));
    top = Math.max(pad, Math.min(top, vh - CARD_H - pad));
    return { left, top };
  })();

  // XP flash on open + record last clicked word + count toward "First Word!" achievement
  useEffect(() => {
    onXp(2);
    setLastWord(request.word);
    dispatch({ type: "INC_COUNTER", payload: "wordsLookedUp" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [request.word, request.x, request.y]);

  // Click-away + Esc
  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    // delay so the originating click doesn't immediately close it
    const t = setTimeout(() => document.addEventListener("mousedown", onDoc), 0);
    document.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(t);
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  // Fetch card
  useEffect(() => {
    let active = true;
    setLoading(true);
    setCard(null);
    setError(null);
    lookup({
      data: {
        word: request.word,
        sentence: request.sentence,
        language: request.language,
      },
    })
      .then((res) => {
        if (!active) return;
        if (res.error) setError(res.error);
        else setCard(res.card);
      })
      .catch((e) => active && setError(e?.message ?? "Lookup failed"))
      .finally(() => active && setLoading(false));
    return () => {
      active = false;
    };
  }, [request.word, request.sentence, request.language, lookup]);

  const speak = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    const text = card?.headword ?? request.word;
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = LOCALE[request.language];
    utter.rate = 0.9;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utter);
  };

  return (
    <div
      ref={ref}
      role="dialog"
      style={{
        position: "fixed",
        left: pos.left,
        top: pos.top,
        width: CARD_W,
      }}
      className="word-card-pop z-50 overflow-hidden rounded-2xl border border-gold/50 bg-card/85 shadow-luxe backdrop-blur-2xl"
    >
      {/* Gold sheen header */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

      {/* XP flash */}
      <div className="xp-flash pointer-events-none absolute right-3 top-3 inline-flex items-center gap-1 rounded-full border border-gold/40 bg-gold/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-gold">
        <Sparkle className="h-3 w-3" fill="currentColor" /> +2 XP
      </div>

      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute left-3 top-3 inline-flex h-6 w-6 items-center justify-center rounded-full border border-border/60 bg-background/40 text-muted-foreground transition-colors hover:border-gold/60 hover:text-gold"
      >
        <X className="h-3 w-3" />
      </button>

      <div className="px-5 pb-5 pt-12">
        {loading && <CardSkeleton />}

        {!loading && error && (
          <div className="py-6 text-center font-mono text-xs uppercase tracking-[0.18em] text-destructive">
            {error}
          </div>
        )}

        {!loading && card && (
          <>
            <h3 className="font-display text-3xl font-bold leading-tight tracking-tight">
              {card.headword}
            </h3>
            <div className="mt-1 flex items-center gap-2">
              <span className="font-mono text-xs text-gold">{card.phonetic}</span>
              <span className="inline-flex items-center rounded-full border border-border/70 bg-background/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                {card.partOfSpeech}
              </span>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-foreground/90">
              {card.baseDefinition}
            </p>

            <div className="my-4 flex items-center gap-3">
              <div className="h-px flex-1 bg-border/70" />
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                ✦
              </span>
              <div className="h-px flex-1 bg-border/70" />
            </div>

            <div className="rounded-xl border border-gold/30 bg-gold/[0.07] p-3">
              <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.22em] text-gold">
                📌 In this sentence
              </div>
              <p className="text-[13px] leading-relaxed text-foreground/90">
                {card.conjugationNote}
              </p>
            </div>

            <div className="mt-4">
              <p className="font-display text-base italic text-foreground">
                "{card.exampleSentence}"
              </p>
              <p className="mt-1 font-mono text-[11px] text-muted-foreground">
                {card.exampleTranslation}
              </p>
            </div>

            <div className="mt-5 flex items-center gap-2 border-t border-border/60 pt-4">
              <button
                onClick={speak}
                className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background/40 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/90 transition-colors hover:border-gold/60 hover:text-gold"
              >
                <Volume2 className="h-3 w-3" /> Pronounce
              </button>
              <button
                onClick={() => {
                  tutor.prefill(
                    `Can you explain more about the word "${card.headword}" and how it's used in this sentence?\n\n"${request.sentence}"`,
                  );
                  onClose();
                }}
                className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background/40 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/90 transition-colors hover:border-gold/60 hover:text-gold"
              >
                <MessageCircle className="h-3 w-3" /> Ask Tutor
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function CardSkeleton() {
  return (
    <div className="space-y-3">
      <div className="shimmer h-8 w-2/3 rounded-md" />
      <div className="shimmer h-3 w-1/3 rounded" />
      <div className="shimmer h-3 w-full rounded" />
      <div className="shimmer h-3 w-5/6 rounded" />
      <div className="shimmer mt-4 h-20 w-full rounded-xl" />
      <div className="shimmer h-3 w-4/6 rounded" />
      <div className="shimmer h-3 w-3/6 rounded" />
    </div>
  );
}
