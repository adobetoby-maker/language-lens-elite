import { GraduationCap } from "lucide-react";
import { useApp } from "@/state/app-state";
import { EmptyState } from "./EmptyState";
import { ParallelReader } from "./reader/ParallelReader";
import { GrammarStudio } from "./grammar/GrammarStudio";
import { SpeakLearn } from "./speak/SpeakLearn";
import { Dashboard } from "./dashboard/Dashboard";
import { MissionaryDiscussions } from "./missionary/MissionaryDiscussions";

export function TabShell() {
  const { state } = useApp();

  switch (state.currentTab) {
    case "reader":
      return <ParallelReader />;
    case "grammar":
      return <GrammarStudio />;
    case "speak":
      return <SpeakLearn />;
    case "discussions":
      return <MissionaryDiscussions />;
    case "dashboard":
      return <Dashboard />;
  }
  return <EmptyState icon={GraduationCap} title="" description="" />;
}
