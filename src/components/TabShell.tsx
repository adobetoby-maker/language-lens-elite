import { GraduationCap, Mic, LayoutDashboard } from "lucide-react";
import { useApp } from "@/state/app-state";
import { EmptyState } from "./EmptyState";
import { ParallelReader } from "./reader/ParallelReader";
import { GrammarStudio } from "./grammar/GrammarStudio";

export function TabShell() {
  const { state } = useApp();

  switch (state.currentTab) {
    case "reader":
      return <ParallelReader />;
    case "grammar":
      return <GrammarStudio />;
    case "speak":
      return (
        <EmptyState
          icon={Mic}
          title="Speak & Learn"
          description="Train your tongue with guided conversations"
        />
      );
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
