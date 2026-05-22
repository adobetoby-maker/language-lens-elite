---
project: language-lens-elite
category: language-learning-app
deploy: cloudflare-workers
lifecycle: active
last_verified: 2026-05-21
deployment_url: https://language-lens-elite.worker-bee.app
---

# LinguaLens (language-lens-elite)

Multi-language learning platform: parallel reader, flashcards, grammar, speaking, matchmaking, leaderboard.

See `~/.claude/categories/language-learning-app.md` for shared patterns.
**CRITICAL DEVIATION: This is NOT Next.js.**

---

## Deviations from Category

- **TanStack Start** (React Router v7 + Vite + Cloudflare Workers) — NOT Next.js App Router
- **`@cloudflare/vite-plugin`** — Vite dev server runs in CF Workers runtime
- **No `app/` directory** — routes live in `src/routes/`
- **Two separate tier systems** — XP tier ≠ rank tier (see Vocabulary)
- **Server functions** via TanStack Start (not Next.js Server Actions or Route Handlers)
- **Lazy-proxy Supabase** — uses `import.meta.env.VITE_*` + process.env fallback for SSR

## Before Touching

Read `src/components/tab-registry.ts` (TabKey exhaustiveness map — ADR-0011) and `src/state/app-state.tsx` (XP tier system — separate from rank tier in match-state.tsx).

---

## Commands

| Command | What it does |
|---|---|
| `npm run dev` | Vite dev server (CF Workers runtime) — use `-H 0.0.0.0` equivalent if needed |
| `npm run build` | production build |
| `npm run lint` | ESLint |
| `npm run format` | Prettier |
| `npx tsc --noEmit` | type check — run after any tab addition (ADR-0011) |

---

## Architecture

### Provider Stack — Order Is Critical

All providers stack at root route (`src/routes/index.tsx`) in this exact order:
```
AuthProvider → AppProvider → LibraryProvider → NotesProvider → GrammarProvider
→ SpeechProvider → SpeakProvider → TutorProvider → MatchProvider → LeaderboardProvider
```
Do NOT reorder. Inner providers may depend on outer ones.

### State Architecture (`src/state/`)

Each domain has its own context provider — no global store.

| File | Owns |
|---|---|
| `app-state.tsx` | XP, XP tier, streak, achievements, active tab, language/level — persisted to Supabase profiles |
| `auth-state.tsx` | Supabase session |
| `match-state.tsx` | Multiplayer matchmaking + rank tier (SEPARATE from XP tier) |
| `grammar-state.tsx` | Grammar exercises |
| `speak-state.tsx` | Speaking practice |
| `library-state.tsx` | Content library |
| `notes-state.tsx` | User notes |
| `tutor-state.tsx` | AI tutor sessions |
| `leaderboard-state.tsx` | Leaderboard data |
| `speech-state.tsx` | Speech recognition |

### Tab System — Dual Update Required (ADR-0011)

`src/components/tab-registry.ts` maps `TabKey → ComponentType` using `Record<TabKey, ComponentType>`.

Adding a tab requires updating BOTH:
1. `TabKey` union type in `src/state/app-state.tsx`
2. `TAB_COMPONENTS` map in `src/components/tab-registry.ts`

TypeScript enforces exhaustiveness on TAB_COMPONENTS but NOT on TabKey additions. Missing step 2 causes runtime crash on tab click — no build error.

Current tabs: Reader, Kana Pad, Grammar, Speak, Discussions, Library, Notes, Tutor, Match, Leaderboard, Dashboard

### Server Functions (NOT Next.js)

AI features run server-side via TanStack Start server functions:
- `src/routes/api.tutor.ts` — AI tutor (Anthropic SDK + Zod)
- `src/routes/api.speak.ts` — speaking feedback
- `src/routes/api.discussion.ts` — discussion AI
- `src/fns/kana-convert.functions.ts` — kanji conversion (Claude Haiku)

### Supabase Client

`src/integrations/supabase/client.ts` — lazy-proxy pattern.
Uses `import.meta.env.VITE_SUPABASE_URL` / `VITE_SUPABASE_PUBLISHABLE_KEY` with `process.env` fallback for SSR.

### Reader (`ParallelReader.tsx`)

Dual-pane parallel text. Furigana toggle: `"off"` / `"above"` / `"inline"` — persisted to localStorage.
Keys: `lingualens.reader.furigana.v1` / `lingualens.reader.romaja.v1`

---

## Env Vars

```
VITE_SUPABASE_URL
VITE_SUPABASE_PUBLISHABLE_KEY
VITE_SUPABASE_PROJECT_ID
ANTHROPIC_API_KEY              # server functions: tutor, speak, discussion, kana
```

---

## Vocabulary

- "XP tier" = learner progression tier: Beginner🌱 → Apprentice📖 → Scholar🎓 → Linguist🗣️ → Maestro✦ — computed from XP in app-state.tsx
- "Rank tier" = multiplayer matchmaking rank: Bronze → Silver → Gold → Platinum → Diamond → Champion → Unreal — stored in match-state.tsx — SEPARATE from XP tier
- "Tab" = a feature panel registered in tab-registry.ts (requires dual update — ADR-0011)
- "Server function" = TanStack Start server-side function (NOT a Next.js API route)
- "KanaPad" = Romaji ↔ Hiragana ↔ Katakana ↔ Kanji converter at TabKey "kana"

---

## Decision Defaults

| User says / context | Default action |
|---|---|
| "add a tab" | Dual update: app-state.tsx TabKey + tab-registry.ts TAB_COMPONENTS — ADR-0011 |
| "add an AI feature" | Create server function in src/routes/api.[name].ts |
| "XP not updating" | Check app-state.tsx ADD_XP dispatch + Supabase profiles table |
| "rank tier broken" | Check match-state.tsx — separate from XP tier |
| "furigana not persisting" | Check localStorage keys in ParallelReader.tsx |
| "API route" | This is TanStack Start — use server functions, not Next.js Route Handlers |
| "build failing on CF" | Check @cloudflare/vite-plugin compatibility — not all Node APIs available |

---

## Failure Patterns

- Adding TabKey without updating TAB_COMPONENTS → runtime crash on tab click, no build error (ADR-0011)
- Confusing XP tier with rank tier → wrong state updated, silent wrong behavior
- Using Next.js App Router patterns (app/ directory, Route Handlers) → doesn't exist here
- Using process.env directly for Supabase keys (client-side) → undefined in Vite; use import.meta.env.VITE_*
- Importing Node.js APIs not available in CF Workers runtime → build passes, CF deploy fails

---

## Delegation Matrix

| Decision | Default |
|---|---|
| Add tab, game, feature | Just do it — follow dual update (ADR-0011) |
| Add server function | Just do it |
| Add language support | Just do it — confirm tokenizer handles new script |
| Provider order changes | Ask — ordering has implicit dependencies |
| Supabase schema changes | Just do it — document here |
| Multiplayer matchmaking logic | Just do it with full context of match-state.tsx |

---

## Output Contract

1. List files changed (path:line for key changes)
2. If tab added: confirm both TabKey AND TAB_COMPONENTS were updated
3. Run `npx tsc --noEmit` — confirm zero errors before declaring done
4. State what was deferred
5. Suggest next step — don't take it without being asked
