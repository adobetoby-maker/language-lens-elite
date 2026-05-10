# Handoff

## State
Pushed `cf5ce16` (Sentence Builder game + Games Hub tab) to `origin/main`. Build clean. Three games now: Match (vocab battle), Conjugation (5-Q drills, Sonnet 4.6 + LRU), Sentence Builder (5-Q tap-to-order, Sonnet 4.6 + LRU). All share 5-question/per-(language,level)-leaderboard pattern persisted to localStorage. Games Hub aggregates them with cross-game grand totals.

KanaPad got a major expansion from the parallel instance — new `kana/writing/` folder (TraceMode, MissingHalfMode, PenPalMode, CharacterCanvas, curriculum, scoring) makes it a two-mode app (Converter + iPad-style Writing Practice). Audited only — left untouched.

## Next
1. **Sentry contamination cleanup**: untracked `next.config.mjs`, `sentry.{edge,server}.config.ts`, `src/instrumentation.ts`, `src/pages/` were added by Sentry wizard run in wrong directory (org="anderton-and-associates-group", uses @sentry/nextjs but this is TanStack Start). Either delete or properly integrate `@sentry/cloudflare` only. Currently produces 2 tsc errors but Vite build ignores them.
2. **Cloudflare deploy still blocked** — token `cfut_Bm7d…` lacks `Workers Scripts: Edit` scope. User must add it in CF dashboard or recreate via "Edit Cloudflare Workers" template.
3. **Lazy-load library seeds** (~600 kB still in main bundle, 2.02 MB) — needs LibraryProvider refactor to async initial state.

## Context
- Another Claude instance is doing UI Spanish translation + KanaPad writing modes — DO NOT translate user-facing strings or touch `src/components/kana/`.
- Game leaderboards keyed by `${Language}-${1|2|3}` in localStorage:
  - `lingualens.conjugation.leaderboard.v1`
  - `lingualens.sentenceBuild.leaderboard.v1`
- Match game has career stats (wins, losses, longestWinStreak) at the MATCH level — no per-question accuracy. GamesHub projects this into the unified shape.
- GamesHub → Match overlay opens via `window.dispatchEvent(new CustomEvent("lingualens:open-match"))`; route listens for it.
- All 3 game generators use Sonnet 4.6; reading/word-lookup uses Sonnet 4.6; everything else still Haiku.
