import type { ComponentType } from "react";
import type { TabKey } from "@/state/app-state";

import { ParallelReader } from "./reader/ParallelReader";
import { GrammarStudio } from "./grammar/GrammarStudio";
import { SpeakLearn } from "./speak/SpeakLearn";
import { Dashboard } from "./dashboard/Dashboard";
import { MissionaryDiscussions } from "./missionary/MissionaryDiscussions";
import { MissionaryHome } from "./missionary/MissionaryHome";
import { OrthopedicsHome } from "./orthopedics/OrthopedicsHome";
import { AnatomyQuizPanel } from "./anatomy/AnatomyQuizPanel";
import { ModulesPage } from "./modules/ModulesPage";
import { KanaPad } from "./kana/KanaPad";

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
};

if (import.meta.env.DEV) {
  for (const [key, Component] of Object.entries(TAB_COMPONENTS)) {
    if (typeof Component !== "function" && typeof Component !== "object") {
      // eslint-disable-next-line no-console
      console.error(`[tab-registry] Tab "${key}" did not resolve to a component.`);
    }
  }
}
