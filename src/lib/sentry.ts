import * as Sentry from '@sentry/cloudflare'

let initialized = false

export function initSentry() {
  if (initialized) return
  initialized = true

  const dsn = process.env.SENTRY_DSN
  if (!dsn) return

  // @sentry/cloudflare is initialized via the `withSentry` worker wrapper at
  // the entry point, not via a top-level `init` call. We keep this as a
  // no-op so callers can still trigger lazy setup safely, and we re-export
  // `Sentry` for `captureException` usage in route handlers.
  void dsn
}

export { Sentry }
