import { useRef, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { BookUp, Loader2, Sparkle } from "lucide-react";
import { extractFromFile, type BookChunk } from "@/lib/extract-book";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { translateCustomText } from "@/fns/library.functions";
import { useLibrary, flagFor, type BookChapter } from "@/state/library-state";
import { useApp } from "@/state/app-state";

export function AddTextModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const { state, dispatch } = useApp();
  const { addCustomEntry } = useLibrary();
  const translate = useServerFn(translateCustomText);

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  // When set, this is the source-of-truth for translation (multi-chapter book).
  // When null, fall back to the pasted `text` field as a single chapter.
  const [chunks, setChunks] = useState<BookChunk[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState<{ done: number; total: number } | null>(null);
  type ChapterStatus = "pending" | "translating" | "done" | "error";
  const [chapterStatuses, setChapterStatuses] = useState<ChapterStatus[]>([]);
  const [extracting, setExtracting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const reset = () => {
    setTitle("");
    setText("");
    setChunks(null);
    setError(null);
    setLoading(false);
    setProgress(null);
    setChapterStatuses([]);
    setExtracting(false);
  };

  const onPickFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    e.target.value = "";
    if (!f) return;
    if (f.size > 50 * 1024 * 1024) {
      setError("File too large (max 50 MB).");
      return;
    }
    setError(null);
    setExtracting(true);
    try {
      const book = await extractFromFile(f);
      if (!title.trim()) setTitle(book.title);
      setChunks(book.chunks);
      // Show a small preview of the first chapter so the user can confirm
      setText(book.chunks[0]?.text.slice(0, 600) ?? "");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Couldn't read that file.");
    } finally {
      setExtracting(false);
    }
  };

  const submit = async () => {
    setError(null);
    // Decide what to translate: book chunks (file upload) or pasted text.
    const sourceChunks: BookChunk[] =
      chunks && chunks.length > 0 ? chunks : [{ title: "Full text", text: text.trim() }];

    if (sourceChunks[0].text.length < 10) {
      setError("Please paste or upload at least a few sentences.");
      return;
    }

    setLoading(true);
    setProgress({ done: 0, total: sourceChunks.length });
    setChapterStatuses(sourceChunks.map(() => "pending" as ChapterStatus));

    try {
      const results: (BookChapter | null)[] = new Array(sourceChunks.length).fill(null);
      let detected = "";
      let firstError: string | null = null;
      let doneCount = 0;
      const CONCURRENCY = 3;
      let cursor = 0;

      const worker = async () => {
        while (true) {
          const i = cursor++;
          if (i >= sourceChunks.length) return;
          const c = sourceChunks[i];
          setChapterStatuses((prev) => {
            const next = [...prev];
            next[i] = "translating";
            return next;
          });
          try {
            const res = await translate({
              data: {
                title: c.title,
                text: c.text,
                targetLanguage: state.selectedLanguage,
                nativeLanguage: state.nativeLanguage,
              },
            });
            if (res.error || !res.data) {
              if (!firstError) firstError = res.error ?? "translation failed";
              setChapterStatuses((prev) => {
                const next = [...prev];
                next[i] = "error";
                return next;
              });
            } else {
              if (!detected) detected = res.data.detectedLanguage;
              const len = Math.min(res.data.leftPaneText.length, res.data.rightPaneText.length);
              results[i] = {
                title: c.title,
                sentences: Array.from({ length: len }, (_, j) => ({
                  en: res.data!.leftPaneText[j],
                  target: res.data!.rightPaneText[j],
                })),
              };
              setChapterStatuses((prev) => {
                const next = [...prev];
                next[i] = "done";
                return next;
              });
            }
          } catch (e) {
            if (!firstError) firstError = e instanceof Error ? e.message : "translation failed";
            setChapterStatuses((prev) => {
              const next = [...prev];
              next[i] = "error";
              return next;
            });
          } finally {
            doneCount++;
            setProgress({ done: doneCount, total: sourceChunks.length });
          }
        }
      };

      await Promise.all(
        Array.from({ length: Math.min(CONCURRENCY, sourceChunks.length) }, () => worker()),
      );

      const chapters: BookChapter[] = results.filter((r): r is BookChapter => r !== null);

      if (chapters.length === 0) {
        setError(firstError ?? "Translation produced no chapters.");
        setLoading(false);
        setProgress(null);
        return;
      }
      if (firstError && chapters.length < sourceChunks.length) {
        setError(`${sourceChunks.length - chapters.length} chapter(s) failed: ${firstError}`);
      }

      if (chapters.length === 0) {
        setError("Translation produced no chapters.");
        setLoading(false);
        setProgress(null);
        return;
      }

      const id = `custom-${Date.now()}`;
      const isMulti = chapters.length > 1;
      await addCustomEntry({
        id,
        title: title.trim() || "Untitled",
        subtitle: isMulti
          ? `${chapters.length} chapters · ${detected || "detected"}`
          : `Detected: ${detected || "—"}`,
        language: state.selectedLanguage,
        targetLabel: state.selectedLanguage,
        sentences: chapters[0].sentences,
        chapters,
        section: "custom",
        flag: flagFor(state.selectedLanguage),
        available: true,
        createdAt: Date.now(),
      });
      dispatch({ type: "ADD_XP", payload: 15 });
      dispatch({ type: "INC_COUNTER", payload: "customTextsAdded" });
      onOpenChange(false);
      reset();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed.");
      setLoading(false);
      setProgress(null);
    }
  };

  const totalChars = chunks ? chunks.reduce((n, c) => n + c.text.length, 0) : text.length;
  const chapterCount = chunks?.length ?? 0;
  const canSubmit = (chunks ? chunks.length > 0 : text.trim().length >= 10) && !loading;

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        if (!loading) onOpenChange(v);
      }}
    >
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Add Text or Book</DialogTitle>
          <DialogDescription className="font-mono text-[11px] uppercase tracking-[0.18em]">
            Paste a passage or upload a PDF / EPUB / TXT — aligned to {state.selectedLanguage}
          </DialogDescription>
        </DialogHeader>

        {loading ? (
          <div className="flex flex-col items-center justify-center gap-3 py-8 text-center">
            <Loader2 className="h-6 w-6 animate-spin text-gold" />
            <p className="font-display text-lg italic">
              {progress && progress.total > 1
                ? `Translating ${progress.done} / ${progress.total} chapters…`
                : "Reading your text…"}
            </p>
            {progress && progress.total > 1 && (
              <div className="h-1.5 w-64 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full bg-gold transition-[width] duration-300"
                  style={{ width: `${(progress.done / progress.total) * 100}%` }}
                />
              </div>
            )}
            {chapterStatuses.length > 1 && (
              <div className="mt-2 flex max-h-40 max-w-full flex-wrap justify-center gap-1.5 overflow-y-auto px-2">
                {chapterStatuses.map((s, i) => {
                  const cls =
                    s === "done"
                      ? "bg-gold text-midnight border-gold"
                      : s === "translating"
                        ? "bg-gold/20 text-gold border-gold/60 animate-pulse"
                        : s === "error"
                          ? "bg-destructive/20 text-destructive border-destructive/60"
                          : "bg-muted text-muted-foreground border-border";
                  return (
                    <span
                      key={i}
                      title={`Chapter ${i + 1}: ${s}`}
                      className={`inline-flex h-6 min-w-[1.75rem] items-center justify-center rounded border px-1.5 font-mono text-[10px] ${cls}`}
                    >
                      {i + 1}
                    </span>
                  );
                })}
              </div>
            )}
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              3 chapters in parallel · pairing sentences
            </p>
          </div>
        ) : (
          <>
            <Input
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="font-display"
            />
            <div className="flex items-center gap-2">
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.epub,.txt,application/pdf,application/epub+zip,text/plain"
                onChange={onPickFile}
                className="hidden"
              />
              <Button
                type="button"
                variant="outline"
                onClick={() => fileInputRef.current?.click()}
                disabled={extracting}
                className="border-gold/40 text-gold hover:bg-gold/10"
              >
                {extracting ? (
                  <Loader2 className="mr-1 h-3.5 w-3.5 animate-spin" />
                ) : (
                  <BookUp className="mr-1 h-3.5 w-3.5" />
                )}
                {extracting ? "Reading file…" : "Upload PDF / EPUB / TXT"}
              </Button>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                or paste below
              </span>
            </div>
            <Textarea
              placeholder="Paste any passage in English or your target language…"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
                // Editing the textarea drops back to single-chapter mode.
                if (chunks) setChunks(null);
              }}
              className="min-h-[180px] font-display text-base"
            />
            {totalChars > 0 && (
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                {totalChars.toLocaleString()} characters
                {chapterCount > 1 ? ` · will be split into ${chapterCount} chapters` : " ready"}
              </p>
            )}
            {error && (
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-destructive">
                {error}
              </p>
            )}
            <DialogFooter>
              <Button variant="ghost" onClick={() => onOpenChange(false)}>
                Cancel
              </Button>
              <Button
                onClick={submit}
                disabled={!canSubmit}
                className="bg-gold text-midnight hover:bg-gold/90"
              >
                <Sparkle className="mr-1 h-3.5 w-3.5" fill="currentColor" />
                {chapterCount > 1
                  ? `Translate ${chapterCount} chapters (+15 XP)`
                  : "Translate & Add (+15 XP)"}
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
