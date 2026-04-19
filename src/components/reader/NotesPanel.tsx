import { useState } from "react";
import { ChevronRight, Trash2, NotebookPen } from "lucide-react";
import { useNotes, type Annotation } from "@/state/notes-state";

export function NotesPanel({
  textId,
  onGoTo,
}: {
  textId: string;
  onGoTo: (pane: "left" | "right", sentenceIndex: number) => void;
}) {
  const { forText, remove } = useNotes();
  const [open, setOpen] = useState(false);
  const list = forText(textId).sort((a, b) => b.createdAt - a.createdAt);
  const noteCount = list.filter((a) => a.noteText).length;

  return (
    <>
      {/* Tab handle */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle notes panel"
        className="fixed right-0 top-1/2 z-30 -translate-y-1/2 rounded-l-2xl border border-r-0 border-gold/40 bg-card/90 px-2 py-4 shadow-luxe backdrop-blur transition-colors hover:bg-gold/10"
      >
        <div className="flex flex-col items-center gap-2">
          <NotebookPen className="h-4 w-4 text-gold" />
          <span className="rounded-full bg-gold px-1.5 py-0.5 font-mono text-[9px] font-semibold text-midnight">
            {list.length}
          </span>
          <ChevronRight
            className={`h-3 w-3 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
          />
        </div>
      </button>

      {/* Drawer */}
      <aside
        aria-hidden={!open}
        className={`fixed right-0 top-0 z-40 h-screen w-[360px] max-w-[88vw] transform border-l border-gold/30 bg-card/95 shadow-luxe backdrop-blur-xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border/60 px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="text-gold">✦</span>
            <h3 className="font-display text-lg italic text-foreground">Margin Notes</h3>
          </div>
          <span className="rounded-full border border-gold/40 bg-gold/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-gold">
            {noteCount} note{noteCount === 1 ? "" : "s"}
          </span>
        </div>

        <div className="custom-scroll h-[calc(100vh-66px)] overflow-y-auto px-4 py-4">
          {list.length === 0 ? (
            <div className="mt-16 px-6 text-center">
              <div className="mx-auto mb-3 text-3xl text-gold">✦</div>
              <p className="font-display text-sm italic text-muted-foreground">
                Select any text to add your first note
              </p>
            </div>
          ) : (
            <ul className="space-y-3">
              {list.map((a) => (
                <NoteCard key={a.id} ann={a} onGoTo={onGoTo} onRemove={() => remove(a.id)} />
              ))}
            </ul>
          )}
        </div>
      </aside>
    </>
  );
}

function NoteCard({
  ann,
  onGoTo,
  onRemove,
}: {
  ann: Annotation;
  onGoTo: (pane: "left" | "right", sentenceIndex: number) => void;
  onRemove: () => void;
}) {
  return (
    <li className="group rounded-xl border border-border/60 bg-background/40 p-3 transition-colors hover:border-gold/40">
      <div className="mb-2 rounded-md bg-gold/20 px-2 py-1.5 font-display text-[13px] italic leading-snug text-foreground">
        “{ann.selectedText}”
      </div>
      {ann.noteText ? (
        <p className="mb-2 whitespace-pre-wrap font-mono text-[11px] leading-relaxed text-foreground/80">
          {ann.noteText}
        </p>
      ) : (
        <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          Highlight only
        </p>
      )}
      <div className="flex items-center justify-between">
        <button
          onClick={() => onGoTo(ann.pane, ann.sentenceIndex)}
          className="font-mono text-[10px] uppercase tracking-[0.18em] text-gold hover:underline"
        >
          ↳ Go to {ann.pane === "left" ? "English" : "target"}
        </button>
        <button
          onClick={onRemove}
          aria-label="Delete note"
          className="rounded-full p-1.5 text-muted-foreground opacity-60 transition-colors hover:bg-destructive/15 hover:text-destructive group-hover:opacity-100"
        >
          <Trash2 className="h-3.5 w-3.5" />
        </button>
      </div>
    </li>
  );
}
