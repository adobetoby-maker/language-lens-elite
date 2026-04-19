import { GraduationCap, LayoutDashboard } from "lucide-react";
import { useApp } from "@/state/app-state";
import { EmptyState } from "./EmptyState";
import { ParallelReader } from "./reader/ParallelReader";
import { GrammarStudio } from "./grammar/GrammarStudio";
import { SpeakLearn } from "./speak/SpeakLearn";

export function TabShell() {
  const { state } = useApp();

  switch (state.currentTab) {
    case "reader":
      return <ParallelReader />;
    case "grammar":
      return <GrammarStudio />;
    case "speak":
      return <SpeakLearn />;
    case "dashboard":
      return (
        <EmptyState
          icon={LayoutDashboard}
          title="Your Dashboard"
          description="Progress, streaks and achievements at a glance"
        />
      );
  }
  // unreachable, keep tsc happy
  return <EmptyState icon={GraduationCap} title="" description="" />;
}
