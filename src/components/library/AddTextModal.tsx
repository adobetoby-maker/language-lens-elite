import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Loader2, Sparkle } from "lucide-react";
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
  const [error, setError] = useState<string | null>(null);

  const reset = () => {
    setTitle("");
    setText("");
    setError(null);
    setLoading(false);
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
          <DialogTitle className="font-display text-2xl">Add Your Own Text</DialogTitle>
          <DialogDescription className="font-mono text-[11px] uppercase tracking-[0.18em]">
            We'll translate &amp; align it to {state.selectedLanguage}
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
            <Textarea
              placeholder="Paste any passage in English or your target language…"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="min-h-[200px] font-display text-base"
            />
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
