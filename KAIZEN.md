# KAIZEN — Language Lens Elite
Continuous improvement log. Review on every session. Close items when fixed.
Live: language-lens-elite.worker-bee.app

---

## Open

### HIGH — Architecture
- [ ] **TabKey + TAB_COMPONENTS sync** — Any new tab must be added to BOTH `src/state/app-state.tsx` (TabKey union) AND `src/components/tab-registry.ts` (TAB_COMPONENTS map). One without the other causes a silent rendering failure. Add a runtime check or test that validates registry completeness. Found: CLAUDE.md failure pattern.
- [ ] **XP tier vs Rank tier confusion** — These are two separate progression systems (Beginner→Maestro XP, Bronze→Unreal rank). Verify UI clearly distinguishes them — no place where one is labeled as the other. Found: 2026-05-24 vocabulary review.

### MEDIUM — Content
- [ ] **LDS module content audit (9 modules)** — 9 LDS/missionary modules were deployed 2026-05-24. Verify all 9 have full vocabulary sets, not placeholder arrays. Found: 2026-05-24 deployment.
- [ ] **Swahili module content audit (25 modules)** — 25 modules deployed. Spot-check 3–5 for complete word lists and correct translations. Found: 2026-05-24 deployment.
- [ ] **medicalspanish monetization smoke test** — 5 components, 11 files integrated for monetization. Confirm paywall gate works on a fresh incognito session. Found: 2026-05-24 deployment.

### LOW — Performance
- [ ] **Bundle size** — TanStack Start + CF Workers. Run `npm run build` and check chunk sizes. Target: no single chunk > 500kB. Previous optimization: -216kB achieved (2026-05-12). Found: 2026-05-24 — not re-checked since.
- [ ] **SM-2 spaced repetition audit** — med-terminology SM-2 was completed. Verify the algorithm correctly advances cards and doesn't reset on error. Found: 2026-05-22 — not re-tested.

---

## Closed

| Date fixed | Item |
|---|---|
| 2026-05-24 | Swahili 25 modules + LDS 9 modules deployed |
| 2026-05-24 | medicalspanish.app monetization live (5 components, 11 files) |
| 2026-05-12 | Bundle -216kB perf optimization |
| 2026-05-12 | KanaPad + CEFR 283→376 expansion |
