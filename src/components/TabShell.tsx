import { Suspense } from "react";
import { GraduationCap, Loader2 } from "lucide-react";
import { useApp } from "@/state/app-state";
import { EmptyState } from "./EmptyState";
import { TAB_COMPONENTS } from "./tab-registry";

function TabFallback() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center">
      <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" aria-hidden />
      <span className="sr-only">Loading…</span>
    </div>
  );
}

export function TabShell() {
  const { state } = useApp();
  const Component = TAB_COMPONENTS[state.currentTab];
  if (Component) {
    return (
      <Suspense fallback={<TabFallback />}>
        <Component />
      </Suspense>
    );
  }
  return <EmptyState icon={GraduationCap} title="" description="" />;
}
