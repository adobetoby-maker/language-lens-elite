import { lazy, type ComponentType } from "react";
import type { TabKey } from "@/state/app-state";

/**
 * Each tab is rendered only when active, so we lazy-load every tab component
 * via `React.lazy` + dynamic `import()`. This keeps the initial bundle small —
 * Reader (epubjs), Missionary (leaflet), and the rest of the heavy tabs ship
 * as separate chunks that load on first activation.
 *
 * Components are exported as named functions (not default), so each lazy
 * loader maps the named export to the `{ default }` shape `lazy` expects.
 */
const ParallelReader = lazy(() =>
  import("./reader/ParallelReader").then((m) => ({ default: m.ParallelReader }))
);
const GrammarStudio = lazy(() =>
  import("./grammar/GrammarStudio").then((m) => ({ default: m.GrammarStudio }))
);
const SpeakLearn = lazy(() =>
  import("./speak/SpeakLearn").then((m) => ({ default: m.SpeakLearn }))
);
const Dashboard = lazy(() =>
  import("./dashboard/Dashboard").then((m) => ({ default: m.Dashboard }))
);
const MissionaryDiscussions = lazy(() =>
  import("./missionary/MissionaryDiscussions").then((m) => ({
    default: m.MissionaryDiscussions,
  }))
);
const MissionaryHome = lazy(() =>
  import("./missionary/MissionaryHome").then((m) => ({ default: m.MissionaryHome }))
);
const OrthopedicsHome = lazy(() =>
  import("./orthopedics/OrthopedicsHome").then((m) => ({ default: m.OrthopedicsHome }))
);
const AnatomyQuizPanel = lazy(() =>
  import("./anatomy/AnatomyQuizPanel").then((m) => ({ default: m.AnatomyQuizPanel }))
);
const ModulesPage = lazy(() =>
  import("./modules/ModulesPage").then((m) => ({ default: m.ModulesPage }))
);
const KanaPad = lazy(() =>
  import("./kana/KanaPad").then((m) => ({ default: m.KanaPad }))
);
const ConjugationGame = lazy(() =>
  import("./conjugation/ConjugationGame").then((m) => ({ default: m.ConjugationGame }))
);

/**
 * Exhaustive map of every TabKey -> component.
 *
 * TypeScript's `Record<TabKey, ...>` enforces that adding a new TabKey
 * without registering its component is a compile error, and any import
 * path here that does not resolve fails the dev/build step immediately
 * (instead of crashing at runtime when the user clicks the tab).
 */
export const TAB_COMPONENTS: Record<TabKey, ComponentType> = {
  missionary: MissionaryHome,
  orthopedics: OrthopedicsHome,
  reader: ParallelReader,
  grammar: GrammarStudio,
  speak: SpeakLearn,
  discussions: MissionaryDiscussions,
  dashboard: Dashboard,
  anatomy: AnatomyQuizPanel,
  modules: ModulesPage,
  kana: KanaPad,
  conjugation: ConjugationGame,
};

if (import.meta.env.DEV) {
  for (const [key, Component] of Object.entries(TAB_COMPONENTS)) {
    if (typeof Component !== "function" && typeof Component !== "object") {
      // eslint-disable-next-line no-console
      console.error(`[tab-registry] Tab "${key}" did not resolve to a component.`);
    }
  }
}
