import * as Sentry from '@sentry/cloudflare'

let initialized = false

export function initSentry() {
  if (initialized) return
  initialized = true

  const dsn = process.env.SENTRY_DSN
  if (!dsn) return

  Sentry.init({
    dsn,
    environment: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    tracesSampleRate: 0.2,
    sendDefaultPii: false,
  })
}

export { Sentry }
