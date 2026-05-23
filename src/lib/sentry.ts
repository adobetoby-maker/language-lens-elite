// @sentry/cloudflare requires the withSentry worker entry wrapper which can't
// be wired with @lovable.dev/vite-tanstack-config. This stub preserves the
// captureException call-sites while keeping the module bundleable in all envs.
type SentryLike = { captureException: (e: unknown) => void };

export function initSentry() {
  // no-op until withSentry wrapper is wired at the worker entry
}

export const Sentry: SentryLike = {
  captureException: (e: unknown) => {
    console.error("[sentry]", e);
  },
};
