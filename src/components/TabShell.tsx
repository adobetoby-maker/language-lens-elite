import { GraduationCap } from "lucide-react";
import { useApp } from "@/state/app-state";
import { EmptyState } from "./EmptyState";
import { TAB_COMPONENTS } from "./tab-registry";

export function TabShell() {
  const { state } = useApp();
  const Component = TAB_COMPONENTS[state.currentTab];
  if (Component) return <Component />;
  return <EmptyState icon={GraduationCap} title="" description="" />;
}
