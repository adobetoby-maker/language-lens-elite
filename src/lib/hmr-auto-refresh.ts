// Auto-recover the preview when the Vite HMR websocket dies.
//
// When the dev server idles for too long the Vite client can drop its socket
// (`vite connection lost`) and the preview goes blank with no automatic
// recovery. This module watches the HMR client and reloads the page once the
// connection has been gone for a short grace period, and also when the tab
// returns from being hidden after a long pause.

if (import.meta.hot) {
  let lostAt: number | null = null;
  let pollTimer: ReturnType<typeof setInterval> | null = null;
  const GRACE_MS = 4_000;

  const tryReload = () => {
    if (typeof window === "undefined") return;
    window.location.reload();
  };

  const startPolling = () => {
    if (pollTimer) return;
    pollTimer = setInterval(() => {
      if (lostAt && Date.now() - lostAt > GRACE_MS) {
        tryReload();
      }
    }, 1_000);
  };

  import.meta.hot.on("vite:ws:disconnect", () => {
    lostAt = Date.now();
    startPolling();
  });

  import.meta.hot.on("vite:ws:connect", () => {
    lostAt = null;
    if (pollTimer) {
      clearInterval(pollTimer);
      pollTimer = null;
    }
  });

  if (typeof document !== "undefined") {
    let hiddenAt: number | null = null;
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") {
        hiddenAt = Date.now();
      } else if (hiddenAt && Date.now() - hiddenAt > 30_000) {
        // Long idle — proactively check if HMR is still alive.
        hiddenAt = null;
        if (lostAt) tryReload();
      }
    });
  }
}

export {};
