import { useEffect } from "react";
import { useApp } from "@/state/app-state";
import { useGrammar } from "@/state/grammar-state";

/**
 * Watches grammar state and dispatches MARK_CEFR_COMPLETE when every lesson
 * in a level (for the currently selected language) is marked complete.
 * Renders nothing.
 */
export function CefrCompletionBridge() {
  const { state, dispatch } = useApp();
  const { state: grammar } = useGrammar();

  useEffect(() => {
    if (!grammar.hydrated) return;
    const langStore = grammar.store[state.selectedLanguage];
    if (!langStore) return;
    for (const [levelKey, level] of Object.entries(langStore)) {
      if (!level || level.lessons.length === 0) continue;
      const allDone = level.lessons.every((l) => level.completed[l.id]);
      if (!allDone) continue;
      const tag = `${state.selectedLanguage}:${levelKey}`;
      if (!state.cefrLevelsCompleted.includes(tag)) {
        dispatch({ type: "MARK_CEFR_COMPLETE", payload: tag });
      }
    }
  }, [
    grammar.hydrated,
    grammar.store,
    state.selectedLanguage,
    state.cefrLevelsCompleted,
    dispatch,
  ]);

  return null;
}
