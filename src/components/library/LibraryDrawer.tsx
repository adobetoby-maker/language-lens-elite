import { useState } from "react";
import { BookMarked, Globe2, NotebookPen, Plus, Sparkle, Swords, Trash2, Volume2, X, BookOpen } from "lucide-react";
import { useLibrary, wordCount, type LibraryEntry } from "@/state/library-state";
import { useMatch, type SavedVocabWord } from "@/state/match-state";
import { useApp, type Language } from "@/state/app-state";
import { getModule } from "@/data/modules";
import { partitionByFocus } from "@/lib/module-filter";
import { AddTextModal } from "./AddTextModal";

const SPEECH_LOCALE: Record<Language, string> = {
  Spanish: "es-ES",
  French: "fr-FR",
  German: "de-DE",
  Italian: "it-IT",
  Japanese: "ja-JP",
  Korean: "ko-KR",
  Portuguese: "pt-BR",
};

function entryHaystack(e: LibraryEntry): string {
  const titleBlob = `${e.title} ${e.subtitle ?? ""}`;
  // Sample some sentence text so seeded content matches keywords too.
  const sentenceBlob = (e.chapters
    ? e.chapters.flatMap((c) => c.sentences)
    : e.sentences
  )
    .slice(0, 6)
    .map((s) => `${s.en} ${s.target}`)
    .join(" ");
  return `${titleBlob} ${sentenceBlob}`;
}

export function LibraryDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { state, dispatch, removeCustomEntry } = useLibrary();
  const { state: appState } = useApp();
  const activeModule = getModule(appState.activeModuleId);
  const focus = activeModule?.vocabFocus ?? null;
  const [addOpen, setAddOpen] = useState(false);

  const grouped = {
    missionary: state.entries.filter((e) => e.section === "missionary"),
    classic: state.entries.filter((e) => e.section === "classic"),
    culture: state.entries.filter((e) => e.section === "culture"),
    custom: state.entries.filter((e) => e.section === "custom"),
  };
  const showMissionary = appState.activeModuleId === "lds-missionary";

  const select = (e: LibraryEntry) => {
    if (!e.available) return;
    dispatch({ type: "SELECT", payload: e.id });
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-midnight/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-r border-gold/30 bg-card/95 shadow-luxe backdrop-blur-2xl transition-transform duration-400 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
      >
        <div className="flex items-center justify-between border-b border-border/60 px-6 py-5">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-gold">
              ✦ Your Bookshelf
            </div>
            <h2 className="mt-1 font-display text-2xl font-semibold">Library</h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close library"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 text-foreground/80 hover:border-gold/60 hover:text-gold"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-center justify-between border-b border-border/40 px-6 py-3">
          {state.generating ? (
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-gold">
              <Sparkle className="h-3 w-3 animate-pulse" fill="currentColor" />
              Generating Culture Series…
            </span>
          ) : (
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              {state.entries.filter((e) => e.available).length} texts ready
            </span>
          )}
          <button
            onClick={() => setAddOpen(true)}
            className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-gold hover:bg-gold/15"
          >
            <Plus className="h-3 w-3" /> Add Text
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-5">
          {activeModule && (
            <div className="mb-4 rounded-lg border border-gold/30 bg-gold/[0.04] px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-gold">
              {activeModule.emoji} Filtering by {activeModule.name} · {focus?.length ?? 0} keywords
            </div>
          )}
          <Section
            icon={<BookMarked className="h-3.5 w-3.5" />}
            label="Classic Literature"
            entries={grouped.classic}
            onSelect={select}
            currentId={state.selectedId}
            focus={focus}
            moduleName={activeModule?.name ?? null}
          />
          <Section
            icon={<Globe2 className="h-3.5 w-3.5" />}
            label="Culture Series"
            entries={grouped.culture}
            onSelect={select}
            currentId={state.selectedId}
            emptyHint={state.generating ? "Crafting essays in your language…" : "Pick a language to generate."}
            focus={focus}
            moduleName={activeModule?.name ?? null}
          />
          <Section
            icon={<NotebookPen className="h-3.5 w-3.5" />}
            label="My Texts"
            entries={grouped.custom}
            onSelect={select}
            currentId={state.selectedId}
            emptyHint="Paste any passage to begin."
            onDelete={(id) => {
              if (window.confirm("Remove this book from your library?")) {
                void removeCustomEntry(id);
              }
            }}
            focus={focus}
            moduleName={activeModule?.name ?? null}
          />
          <BattleVocabularySection focus={focus} moduleName={activeModule?.name ?? null} />
        </div>
      </aside>

      <AddTextModal open={addOpen} onOpenChange={setAddOpen} />
    </>
  );
}

function BattleVocabularySection({
  focus,
  moduleName,
}: {
  focus: string[] | null;
  moduleName: string | null;
}) {
  const { savedVocab, removeVocabWord } = useMatch();
  const speak = (word: SavedVocabWord) => {
    try {
      const u = new SpeechSynthesisUtterance(word.word);
      u.lang = SPEECH_LOCALE[word.language];
      u.rate = 0.9;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(u);
    } catch {
      /* ignore */
    }
  };

  const { inModule, core } = partitionByFocus(
    savedVocab,
    focus,
    (w) => `${w.word} ${w.definition}`,
  );

  const renderCard = (w: SavedVocabWord) => (
    <div key={w.id} className="rounded-xl border border-gold/30 bg-gold/[0.04] p-3">
      <div className="flex items-start gap-3">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span className="truncate font-display text-base italic text-gold">{w.word}</span>
            <button
              onClick={() => speak(w)}
              aria-label={`Pronounce ${w.word}`}
              className="shrink-0 rounded-full border border-gold/40 bg-card/60 p-1 text-gold hover:bg-gold/15"
            >
              <Volume2 className="h-3 w-3" />
            </button>
          </div>
          <p className="mt-1 line-clamp-2 text-xs leading-snug text-foreground/80">
            {w.definition}
          </p>
          <div className="mt-1.5 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
            <span>{w.language}</span>
            <span>·</span>
            <span>{w.cefr}</span>
          </div>
        </div>
        <button
          onClick={() => removeVocabWord(w.id)}
          aria-label={`Remove ${w.word}`}
          className="shrink-0 rounded-full border border-border/60 p-1.5 text-muted-foreground hover:border-red-500/50 hover:text-red-300"
        >
          <Trash2 className="h-3 w-3" />
        </button>
      </div>
    </div>
  );

  return (
    <section className="mb-7">
      <div className="mb-3 flex items-center gap-2 px-1 text-gold">
        <Swords className="h-3.5 w-3.5" />
        <h3 className="font-mono text-[10px] uppercase tracking-[0.28em]">Battle Vocabulary</h3>
        <div className="ml-2 h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent" />
        {savedVocab.length > 0 && (
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
            {savedVocab.length}
          </span>
        )}
      </div>
      {savedVocab.length === 0 ? (
        <p className="px-1 font-mono text-[11px] text-muted-foreground">
          Save words from Language Match battles to collect them here.
        </p>
      ) : focus && moduleName ? (
        <div className="space-y-4">
          <div>
            <div className="mb-2 px-1 font-mono text-[9px] uppercase tracking-[0.22em] text-gold/80">
              ◈ In {moduleName} ({inModule.length})
            </div>
            {inModule.length === 0 ? (
              <p className="px-1 font-mono text-[11px] text-muted-foreground">
                No saved words match this module yet.
              </p>
            ) : (
              <div className="space-y-2">{inModule.map(renderCard)}</div>
            )}
          </div>
          {core.length > 0 && (
            <div>
              <div className="mb-2 px-1 font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
                Core ({core.length})
              </div>
              <div className="space-y-2">{core.map(renderCard)}</div>
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-2">{savedVocab.map(renderCard)}</div>
      )}
    </section>
  );
}

function Section({
  icon,
  label,
  entries,
  onSelect,
  currentId,
  emptyHint,
  onDelete,
  focus,
  moduleName,
}: {
  icon: React.ReactNode;
  label: string;
  entries: LibraryEntry[];
  onSelect: (e: LibraryEntry) => void;
  currentId: string;
  emptyHint?: string;
  onDelete?: (id: string) => void;
  focus: string[] | null;
  moduleName: string | null;
}) {
  const { inModule, core } = partitionByFocus(entries, focus, entryHaystack);

  const renderList = (list: LibraryEntry[]) => (
    <div className="space-y-2">
      {list.map((e) => (
        <BookCard
          key={e.id}
          entry={e}
          active={e.id === currentId}
          onSelect={() => onSelect(e)}
          onDelete={onDelete ? () => onDelete(e.id) : undefined}
        />
      ))}
    </div>
  );

  return (
    <section className="mb-7">
      <div className="mb-3 flex items-center gap-2 px-1 text-gold">
        {icon}
        <h3 className="font-mono text-[10px] uppercase tracking-[0.28em]">{label}</h3>
        <div className="ml-2 h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent" />
      </div>
      {entries.length === 0 ? (
        <p className="px-1 font-mono text-[11px] text-muted-foreground">
          {emptyHint ?? "Nothing here yet."}
        </p>
      ) : focus && moduleName ? (
        <div className="space-y-4">
          <div>
            <div className="mb-2 px-1 font-mono text-[9px] uppercase tracking-[0.22em] text-gold/80">
              ◈ In {moduleName} ({inModule.length})
            </div>
            {inModule.length === 0 ? (
              <p className="px-1 font-mono text-[11px] text-muted-foreground">
                Nothing in this section matches the module yet.
              </p>
            ) : (
              renderList(inModule)
            )}
          </div>
          {core.length > 0 && (
            <div>
              <div className="mb-2 px-1 font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
                Core ({core.length})
              </div>
              {renderList(core)}
            </div>
          )}
        </div>
      ) : (
        renderList(entries)
      )}
    </section>
  );
}

function BookCard({
  entry,
  active,
  onSelect,
  onDelete,
}: {
  entry: LibraryEntry;
  active: boolean;
  onSelect: () => void;
  onDelete?: () => void;
}) {
  const totalSentences =
    entry.chapters?.reduce((n, c) => n + c.sentences.length, 0) ?? entry.sentences.length;
  const allPairs = entry.chapters
    ? entry.chapters.flatMap((c) => c.sentences)
    : entry.sentences;
  const wc = wordCount(allPairs);
  const chapterCount = entry.chapters?.length ?? 0;
  return (
    <div
      data-active={active}
      className="group relative flex items-center gap-3 rounded-xl border border-border/60 bg-background/40 p-3 transition-all hover:border-gold/50 data-[active=true]:border-gold/70 data-[active=true]:bg-gold/[0.06]"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-border/60 bg-card/60 text-2xl">
        {entry.flag}
      </div>
      <div className="min-w-0 flex-1">
        <div className="truncate font-display text-base font-semibold">
          {entry.title}
        </div>
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          <span>{entry.language}</span>
          {entry.available ? (
            <>
              <span>·</span>
              <span>{wc} words</span>
              {chapterCount > 1 && (
                <>
                  <span>·</span>
                  <span className="text-gold">{chapterCount} ch · {totalSentences} sent.</span>
                </>
              )}
            </>
          ) : (
            <>
              <span>·</span>
              <span className="text-gold">{entry.subtitle === "Generating…" ? "generating…" : "coming soon"}</span>
            </>
          )}
        </div>
      </div>
      <button
        onClick={onSelect}
        disabled={!entry.available}
        className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-gold transition-colors hover:bg-gold/20 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Read
      </button>
      {onDelete && (
        <button
          onClick={onDelete}
          aria-label={`Delete ${entry.title}`}
          title="Remove from library"
          className="rounded-full border border-border/60 p-1.5 text-muted-foreground transition-colors hover:border-red-500/50 hover:text-red-300"
        >
          <Trash2 className="h-3 w-3" />
        </button>
      )}
    </div>
  );
}
