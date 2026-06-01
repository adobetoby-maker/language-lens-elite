import { Component, type ReactNode, Suspense } from "react";
import { GraduationCap, Loader2, RefreshCw } from "lucide-react";
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

interface ErrorState {
  hasError: boolean;
}

class TabErrorBoundary extends Component<{ children: ReactNode; tabKey: string }, ErrorState> {
  state: ErrorState = { hasError: false };

  static getDerivedStateFromError(): ErrorState {
    return { hasError: true };
  }

  componentDidUpdate(prevProps: { tabKey: string }) {
    // Reset error when tab changes so the next tab gets a clean slate
    if (prevProps.tabKey !== this.props.tabKey && this.state.hasError) {
      this.setState({ hasError: false });
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-[40vh] flex-col items-center justify-center gap-3 text-center px-6">
          <p className="text-sm text-muted-foreground">This section failed to load.</p>
          <button
            type="button"
            onClick={() => this.setState({ hasError: false })}
            className="flex items-center gap-1.5 rounded-lg border border-border/60 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <RefreshCw className="h-3.5 w-3.5" />
            Try again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export function TabShell() {
  const { state } = useApp();
  const Component = TAB_COMPONENTS[state.currentTab];
  if (Component) {
    return (
      <TabErrorBoundary tabKey={state.currentTab}>
        <Suspense fallback={<TabFallback />}>
          <Component />
        </Suspense>
      </TabErrorBoundary>
    );
  }
  return <EmptyState icon={GraduationCap} title="" description="" />;
}
