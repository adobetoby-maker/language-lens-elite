import { useState } from "react";
import { GraduationCap } from "lucide-react";
import { useApp } from "@/state/app-state";
import { useGrammar, type CefrLevel } from "@/state/grammar-state";
import { getModule } from "@/data/modules";
import type { LessonStub } from "@/fns/grammar.functions";
import { LevelSidebar } from "./LevelSidebar";
import { LessonView } from "./LessonView";
import { ModuleMatchPanel } from "@/components/modules/ModuleMatchPanel";

export function GrammarStudio() {
  const { state } = useApp();
  const { state: gState } = useGrammar();
  const [activeLevel, setActiveLevel] = useState<CefrLevel | null>(null);
  const [activeLesson, setActiveLesson] = useState<LessonStub | null>(null);

  const handleSelect = (level: CefrLevel, lesson: LessonStub) => {
    setActiveLevel(level);
    setActiveLesson(lesson);
  };

  return (
    <div className="fade-in mx-auto w-full max-w-7xl">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3 px-1">
        <div>
          <div className="mb-1 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-gold">
            <GraduationCap className="h-3.5 w-3.5" />
            Grammar Studio
          </div>
          <h1 className="font-display text-3xl text-foreground">
            A private tutor for {state.selectedLanguage}
          </h1>
          <p className="font-display text-sm italic text-muted-foreground">
            CEFR-aligned lessons, examples and quick quizzes
          </p>
        </div>
        {gState.badges.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {gState.badges.map((b) => (
              <span
                key={b}
                className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-gold"
              >
                {b}
              </span>
            ))}
          </div>
        )}
      </div>

      {(() => {
        const mod = getModule(state.activeModuleId);
        if (!mod) return null;
        return (
          <div className="mb-4 flex flex-wrap items-center gap-2 rounded-2xl border border-gold/40 bg-gold/10 px-4 py-2.5 text-xs">
            <span className="text-base leading-none">{mod.emoji}</span>
            <span className="font-mono uppercase tracking-[0.2em] text-gold">◈ Module focus</span>
            <span className="text-foreground/90">
              {mod.name} — lessons mentioning {mod.vocabFocus.slice(0, 4).join(", ")} float to the
              top.
            </span>
          </div>
        );
      })()}

      <ModuleMatchPanel surface="Grammar Studio" className="mb-4" />

      <div className="flex flex-col gap-5 md:flex-row">
        <LevelSidebar
          activeLevel={activeLevel}
          activeLessonId={activeLesson?.id ?? null}
          onSelect={handleSelect}
        />

        {activeLesson && activeLevel ? (
          <LessonView level={activeLevel} lesson={activeLesson} />
        ) : (
          <div className="flex flex-1 items-center justify-center rounded-2xl border border-dashed border-border/60 bg-card/30 p-16 text-center backdrop-blur">
            <div>
              <div className="mb-3 text-4xl text-gold">✦</div>
              <p className="font-display text-lg italic text-foreground">
                Choose a lesson to begin
              </p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                Open a CEFR level on the left
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
