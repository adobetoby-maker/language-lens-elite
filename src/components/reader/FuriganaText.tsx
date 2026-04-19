import { useEffect, useMemo, useRef, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { addFurigana } from "@/server/furigana.functions";

/**
 * Renders a Japanese sentence with furigana (small hiragana readings above kanji)
 * using native <ruby>/<rt> tags. Readings are fetched lazily from the server and
 * cached in localStorage so the same sentence is never requested twice.
 *
 * Layout: the small <rt> labels are absolutely positioned above the line via the
 * native ruby model and are sized to ~0.5em with line-height:1. As long as the
 * paragraph's line-height is >=1.7 (it is, throughout LinguaLens), the ruby tucks
 * into the existing leading and the sentence height does NOT grow.
 *
 * Words are tokenized by ruby/non-ruby boundary so each segment stays clickable.
 */

const CACHE_KEY = "lingualens.furigana.v1";
type Cache = Record<string, string>; // text -> html

let memCache: Cache | null = null;
function loadCache(): Cache {
  if (memCache) return memCache;
  try {
    const raw = typeof window !== "undefined" ? localStorage.getItem(CACHE_KEY) : null;
    memCache = raw ? (JSON.parse(raw) as Cache) : {};
  } catch {
    memCache = {};
  }
  return memCache;
}
function saveCache(cache: Cache) {
  memCache = cache;
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
  } catch {
    /* quota — ignore */
  }
}

interface Token {
  /** Plain text the user clicks (no ruby), used for word lookups. */
  text: string;
  /** Optional reading to render in <rt>. Undefined for non-kanji segments. */
  reading?: string;
}

/**
 * Parse the AI-returned HTML (only <ruby>/<rt> allowed) into safe tokens.
 * We deliberately do NOT use innerHTML — this prevents any XSS risk from the AI.
 */
function parseRuby(html: string): Token[] {
  const tokens: Token[] = [];
  // Greedy split on <ruby>…</ruby>
  const re = /<ruby>([\s\S]*?)<\/ruby>/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html)) !== null) {
    if (m.index > last) {
      tokens.push({ text: html.slice(last, m.index) });
    }
    const inner = m[1];
    // Inside <ruby> we expect: base text + <rt>reading</rt>
    const rtMatch = /<rt>([\s\S]*?)<\/rt>/.exec(inner);
    const reading = rtMatch ? rtMatch[1] : undefined;
    const base = inner.replace(/<rt>[\s\S]*?<\/rt>/g, "");
    tokens.push({ text: base, reading });
    last = m.index + m[0].length;
  }
  if (last < html.length) tokens.push({ text: html.slice(last) });
  return tokens;
}

const KANJI_RE = /[\u4E00-\u9FFF]/;

export function FuriganaText({
  text,
  onWordClick,
  fullSentence,
  mode = "above",
}: {
  text: string;
  /** Click handler — receives the clean clicked word, the full sentence, and screen coords. */
  onWordClick?: (word: string, sentence: string, x: number, y: number) => void;
  /** The full sentence to pass to onWordClick (defaults to `text`). */
  fullSentence?: string;
  /**
   * "above"  : tiny hiragana floats above the kanji (default).
   * "inline" : reading sits directly ON the kanji as a faint overlay (no extra leading).
   */
  mode?: "above" | "inline";
}) {
  const fetchFurigana = useServerFn(addFurigana);
  const [html, setHtml] = useState<string | null>(() => loadCache()[text] ?? null);
  const inFlight = useRef(false);
  const sentence = fullSentence ?? text;

  useEffect(() => {
    // Already cached or no kanji → nothing to do.
    const cached = loadCache()[text];
    if (cached) {
      setHtml(cached);
      return;
    }
    if (!KANJI_RE.test(text)) {
      setHtml(text);
      return;
    }
    if (inFlight.current) return;
    inFlight.current = true;

    let cancelled = false;
    (async () => {
      try {
        const res = await fetchFurigana({ data: { text } });
        if (cancelled) return;
        const out = res.data?.html ?? text;
        const cache = { ...loadCache(), [text]: out };
        saveCache(cache);
        setHtml(out);
      } catch {
        if (!cancelled) setHtml(text); // graceful fallback
      } finally {
        inFlight.current = false;
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [text, fetchFurigana]);

  const tokens = useMemo(() => (html ? parseRuby(html) : null), [html]);

  // While loading, show plain text so layout doesn't jump.
  if (!tokens) {
    return <ClickableSpan text={text} sentence={sentence} onWordClick={onWordClick} />;
  }

  return (
    <>
      {tokens.map((tok, i) => {
        if (tok.reading) {
          // Native <ruby> with a clickable base span. The <rt> uses
          // pointer-events:none (see styles.css) so clicks always land on the
          // base text, not the small reading above it.
          return (
            <ruby key={i} className="furigana-ruby">
              <span
                className="cursor-pointer rounded transition-colors hover:text-gold"
                onClick={
                  onWordClick
                    ? (e) => {
                        e.stopPropagation();
                        const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
                        onWordClick(
                          tok.text,
                          sentence,
                          r.left + r.width / 2,
                          r.bottom,
                        );
                      }
                    : undefined
                }
              >
                {tok.text}
              </span>
              <rt className="furigana-rt">{tok.reading}</rt>
            </ruby>
          );
        }
        return (
          <ClickableSpan
            key={i}
            text={tok.text}
            sentence={sentence}
            onWordClick={onWordClick}
          />
        );
      })}
    </>
  );
}

/**
 * Tokenize a non-ruby chunk for clicking. Japanese has no spaces, so we
 * fall back to per-character spans for kana; punctuation passes through.
 */
function ClickableSpan({
  text,
  sentence,
  onWordClick,
}: {
  text: string;
  sentence: string;
  onWordClick?: (w: string, s: string, x: number, y: number) => void;
}) {
  if (!onWordClick) return <>{text}</>;
  // Split on whitespace + punctuation boundaries; keep separators in output.
  const parts = text.split(/([\s。、！？「」『』・，．,.!?:;()[\]<>\"'])/);
  return (
    <>
      {parts.map((p, i) => {
        if (!p) return null;
        if (/^[\s。、！？「」『』・，．,.!?:;()[\]<>\"']$/.test(p)) {
          return <span key={i}>{p}</span>;
        }
        return (
          <span
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
              onWordClick(p, sentence, r.left + r.width / 2, r.bottom);
            }}
            className="cursor-pointer rounded transition-colors hover:text-gold"
          >
            {p}
          </span>
        );
      })}
    </>
  );
}
