// Lightweight, presentation-only matcher for the active module's vocabFocus.
// Returns true when ANY focus keyword appears (case-insensitive, word-ish)
// in the haystack. We deliberately keep this fuzzy/loose so seed content
// matches even if it doesn't contain the exact lemma.

export function matchesFocus(
  haystack: string | null | undefined,
  focus: string[] | null | undefined,
): boolean {
  if (!focus || focus.length === 0) return false;
  if (!haystack) return false;
  const hay = haystack.toLowerCase();
  return focus.some((kw) => {
    const k = kw.trim().toLowerCase();
    if (!k) return false;
    return hay.includes(k);
  });
}

/**
 * Partition a list into [inModule, core] given an active module's vocabFocus
 * and a function that flattens each item to a searchable string.
 * If focus is empty/null, returns [[], items] so callers can keep showing
 * everything as "Core".
 */
export function partitionByFocus<T>(
  items: T[],
  focus: string[] | null | undefined,
  toText: (item: T) => string,
): { inModule: T[]; core: T[] } {
  if (!focus || focus.length === 0) {
    return { inModule: [], core: items };
  }
  const inModule: T[] = [];
  const core: T[] = [];
  for (const it of items) {
    if (matchesFocus(toText(it), focus)) inModule.push(it);
    else core.push(it);
  }
  return { inModule, core };
}
