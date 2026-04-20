import { useRef, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { BookUp, Loader2, Sparkle } from "lucide-react";
import { extractFromFile } from "@/lib/extract-book";
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
import { translateCustomText } from "@/server/library.functions";
import { useLibrary, flagFor } from "@/state/library-state";
import { useApp } from "@/state/app-state";

export function AddTextModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const { state, dispatch } = useApp();
  const { dispatch: libDispatch } = useLibrary();
  const translate = useServerFn(translateCustomText);

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [extracting, setExtracting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const reset = () => {
    setTitle("");
    setText("");
    setError(null);
    setLoading(false);
    setExtracting(false);
  };

  const onPickFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    e.target.value = "";
    if (!f) return;
    if (f.size > 25 * 1024 * 1024) {
      setError("File too large (max 25 MB).");
      return;
    }
    setError(null);
    setExtracting(true);
    try {
      const book = await extractFromFile(f);
      if (!title.trim()) setTitle(book.title);
      setText(book.text);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Couldn't read that file.");
    } finally {
      setExtracting(false);
    }
  };

  const submit = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await translate({
        data: {
          title: title.trim() || "Untitled",
          text: text.trim(),
          targetLanguage: state.selectedLanguage,
          nativeLanguage: state.nativeLanguage,
        },
      });
      if (res.error || !res.data) {
        setError(res.error ?? "Failed to translate text.");
        setLoading(false);
        return;
      }
      const len = Math.min(res.data.leftPaneText.length, res.data.rightPaneText.length);
      const sentences = Array.from({ length: len }, (_, i) => ({
        en: res.data!.leftPaneText[i],
        target: res.data!.rightPaneText[i],
      }));
      const id = `custom-${Date.now()}`;
      libDispatch({
        type: "ADD_ENTRY",
        payload: {
          id,
          title: res.data.title || title.trim() || "Untitled",
          subtitle: `Detected: ${res.data.detectedLanguage}`,
          language: state.selectedLanguage,
          targetLabel: state.selectedLanguage,
          sentences,
          section: "custom",
          flag: flagFor(state.selectedLanguage),
          available: true,
        },
      });
      libDispatch({ type: "SELECT", payload: id });
      dispatch({ type: "ADD_XP", payload: 15 });
      dispatch({ type: "INC_COUNTER", payload: "customTextsAdded" });
      onOpenChange(false);
      reset();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed.");
      setLoading(false);
    }
  };

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
          <div className="flex flex-col items-center justify-center gap-3 py-10 text-center">
            <Loader2 className="h-6 w-6 animate-spin text-gold" />
            <p className="font-display text-lg italic">Reading your text…</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Detecting language &amp; pairing sentences
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
              onChange={(e) => setText(e.target.value)}
              className="min-h-[200px] font-display text-base"
            />
            {text.length > 0 && (
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                {text.length.toLocaleString()} characters ready
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
                disabled={text.trim().length < 10}
                className="bg-gold text-midnight hover:bg-gold/90"
              >
                <Sparkle className="mr-1 h-3.5 w-3.5" fill="currentColor" />
                Translate &amp; Add (+15 XP)
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
