// Quick validation panel: shows which library entries match the active module's
// vocabFocus, and which fall through to "Core". Drop into any tab to confirm
// the filter is working as expected.

import { useMemo, useState } from "react";
import { ChevronDown, ChevronRight, CheckCircle2, Circle } from "lucide-react";
import { useApp } from "@/state/app-state";
import { useLibrary, type LibraryEntry } from "@/state/library-state";
import { getModule } from "@/data/modules";
import { matchesFocus, partitionByFocus } from "@/lib/module-filter";

function entryHaystack(e: LibraryEntry): string {
  const titleBlob = `${e.title} ${e.subtitle ?? ""}`;
  const sentenceBlob = (e.chapters
    ? e.chapters.flatMap((c) => c.sentences)
    : e.sentences
  )
    .slice(0, 6)
    .map((s) => `${s.en} ${s.target}`)
    .join(" ");
  return `${titleBlob} ${sentenceBlob}`;
}

function matchedKeywords(e: LibraryEntry, focus: string[]): string[] {
  const hay = entryHaystack(e).toLowerCase();
  return focus.filter((kw) => {
    const k = kw.trim().toLowerCase();
    return !!k && hay.includes(k);
  });
}

interface Props {
  /** Where this is rendered, for the heading label (e.g. "Reader"). */
  surface: string;
  /** Optional extra className for outer wrapper. */
  className?: string;
}

export function ModuleMatchPanel({ surface, className }: Props) {
  const { state: appState } = useApp();
  const { state: libState } = useLibrary();
  const [open, setOpen] = useState(false);

  const activeModule = getModule(appState.activeModuleId);
  const focus = activeModule?.vocabFocus ?? null;

  const { inModule, core } = useMemo(
    () => partitionByFocus(libState.entries, focus, entryHaystack),
    [libState.entries, focus],
  );

  // Render even with no active module so users can confirm "filter is off".
  return (
    <section
      className={
        "rounded-2xl border border-gold/30 bg-card/40 backdrop-blur " +
        (className ?? "")
      }
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
      >
        <div className="flex items-center gap-2">
          {open ? (
            <ChevronDown className="h-3.5 w-3.5 text-gold" />
          ) : (
            <ChevronRight className="h-3.5 w-3.5 text-gold" />
          )}
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold">
            ◈ Filter check · {surface}
          </span>
          {activeModule ? (
            <span className="text-xs text-foreground/80">
              {activeModule.emoji} {activeModule.name}
              <span className="ml-2 text-muted-foreground">
                {inModule.length}/{libState.entries.length} match
              </span>
            </span>
          ) : (
            <span className="text-xs text-muted-foreground">
              No active module — filter inactive
            </span>
          )}
        </div>
      </button>

      {open && (
        <div className="border-t border-border/60 px-4 py-3">
          {!activeModule ? (
            <p className="text-xs text-muted-foreground">
              Pick a module from the top nav to see which library items match.
            </p>
          ) : (
            <>
              <div className="mb-3 flex flex-wrap gap-1.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Focus keywords:
                </span>
                {activeModule.vocabFocus.map((kw) => (
                  <span
                    key={kw}
                    className="rounded-full border border-gold/40 bg-gold/10 px-2 py-0.5 font-mono text-[10px] text-gold"
                  >
                    {kw}
                  </span>
                ))}
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                <div>
                  <p className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-gold">
                    ◈ In module ({inModule.length})
                  </p>
                  {inModule.length === 0 ? (
                    <p className="text-xs italic text-muted-foreground">
                      No library items match these keywords yet.
                    </p>
                  ) : (
                    <ul className="space-y-1.5">
                      {inModule.map((e) => {
                        const kws = matchedKeywords(e, focus!);
                        return (
                          <li
                            key={e.id}
                            className="flex items-start gap-2 rounded-lg border border-gold/30 bg-gold/5 px-2.5 py-1.5"
                          >
                            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
                            <div className="min-w-0 flex-1">
                              <div className="truncate text-xs font-medium text-foreground">
                                {e.title}
                              </div>
                              {kws.length > 0 && (
                                <div className="mt-0.5 flex flex-wrap gap-1">
                                  {kws.map((k) => (
                                    <span
                                      key={k}
                                      className="rounded bg-gold/15 px-1.5 py-0.5 font-mono text-[9px] text-gold"
                                    >
                                      {k}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>

                <div>
                  <p className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Core ({core.length})
                  </p>
                  {core.length === 0 ? (
                    <p className="text-xs italic text-muted-foreground">
                      Every item matched the module.
                    </p>
                  ) : (
                    <ul className="space-y-1">
                      {core.map((e) => (
                        <li
                          key={e.id}
                          className="flex items-start gap-2 rounded-lg border border-border/60 bg-background/30 px-2.5 py-1.5"
                        >
                          <Circle className="mt-0.5 h-3 w-3 shrink-0 text-muted-foreground" />
                          <span className="truncate text-xs text-foreground/80">
                            {e.title}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </section>
  );
}
