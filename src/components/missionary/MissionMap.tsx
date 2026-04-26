import { lazy, Suspense, useEffect, useState } from "react";
import { Globe2, Loader2 } from "lucide-react";

// Lazy-load the Leaflet-powered inner map ONLY on the client.
// Leaflet touches `window` at import time and breaks SSR otherwise.
const MissionMapInner = lazy(() =>
  import("./MissionMapInner").then((m) => ({ default: m.MissionMapInner })),
);

interface Props {
  filterPinId?: string | null;
  highlightLastName?: string | null;
}

export function MissionMap(props: Props = {}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="mb-6 flex h-[460px] items-center justify-center overflow-hidden rounded-2xl border border-gold/40 bg-card/40">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Globe2 className="h-4 w-4 animate-pulse text-gold" />
          Loading mission map…
        </div>
      </section>
    );
  }

  return (
    <Suspense
      fallback={
        <section className="mb-6 flex h-[460px] items-center justify-center overflow-hidden rounded-2xl border border-gold/40 bg-card/40">
          <Loader2 className="h-4 w-4 animate-spin text-gold" />
        </section>
      }
    >
      <MissionMapInner {...props} />
    </Suspense>
  );
}
