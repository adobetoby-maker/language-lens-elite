import { useState } from "react";
import { BookOpen, Sparkles } from "lucide-react";
import { MissionaryQuickStart } from "@/components/grammar/MissionaryQuickStart";
import { MissionaryLessonReader } from "@/components/missionary/MissionaryLessonReader";
import { ModuleStudyGuide } from "@/components/modules/ModuleStudyGuide";

type MissionaryView = "quickstart" | "lessons";

/**
 * Dedicated tab for the LDS Missionary module. The Quick Start (mission map,
 * family package, commitment phrases) and the deep PMG Lesson Manual share a
 * single slot — toggle between them with the segmented tab control.
 */
export function MissionaryHome() {
  const [view, setView] = useState<MissionaryView>("quickstart");

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
      <ModuleStudyGuide />
      <div
        role="tablist"
        aria-label="Missionary section"
        className="mb-5 inline-flex rounded-full border border-gold/30 bg-card/40 p-1"
      >
        <TabButton
          active={view === "quickstart"}
          onClick={() => setView("quickstart")}
          icon={<Sparkles className="h-3.5 w-3.5" />}
          label="Quick Start"
        />
        <TabButton
          active={view === "lessons"}
          onClick={() => setView("lessons")}
          icon={<BookOpen className="h-3.5 w-3.5" />}
          label="Lesson Manual"
        />
      </div>

      {view === "quickstart" ? <MissionaryQuickStart /> : <MissionaryLessonReader />}
    </div>
  );
}

function TabButton({
  active,
  onClick,
  icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] transition-colors ${
        active
          ? "bg-gold/20 text-gold"
          : "text-muted-foreground hover:text-foreground"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}
