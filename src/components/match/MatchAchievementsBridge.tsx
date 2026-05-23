import { useEffect, useRef } from "react";
import { toast } from "sonner";
import { useApp } from "@/state/app-state";
import { RANK_COLOR, RANK_ORDER, useMatch, type RankTier } from "@/state/match-state";

/**
 * Watches Language Match state and dispatches the 11 LM achievements
 * into the main app-state achievements list. Lives at the root so it's
 * always mounted regardless of the active tab.
 *
 * Also fires a rank-tinted toast on each unlock.
 */
const RANK_ACHIEVEMENT: Partial<Record<RankTier, string>> = {
  Silver: "Silver Tongue 🥈",
  Gold: "Golden Word 🥇",
  Platinum: "Platinum Standard 💎",
  Diamond: "Beyond Diamond 💠",
  Champion: "Undisputed 🏆",
  Unreal: "UNREAL 🌟",
};

export function MatchAchievementsBridge() {
  const { state, dispatch } = useApp();
  const m = useMatch();
  const lastSeen = useRef<Set<string>>(new Set());

  useEffect(() => {
    const unlocks: { title: string; tier?: RankTier }[] = [];

    if (m.matchesPlayed >= 1) unlocks.push({ title: "First Blood ⚔️" });
    if (m.wins >= 1) unlocks.push({ title: "Victorious 🏆" });
    if (m.longestWinStreak >= 3) unlocks.push({ title: "On a Roll 🔥" });
    if (m.resilientUnlocked) unlocks.push({ title: "Resilient 💪" });
    if (m.longestRound >= 7) unlocks.push({ title: "The Long Game 🕰️" });

    // Rank-tier achievements based on highest tier ever reached.
    const highestIdx = RANK_ORDER.indexOf(m.highestTier);
    for (const [tier, title] of Object.entries(RANK_ACHIEVEMENT) as [RankTier, string][]) {
      if (RANK_ORDER.indexOf(tier) <= highestIdx) {
        unlocks.push({ title, tier });
      }
    }

    for (const u of unlocks) {
      if (state.achievements.includes(u.title)) continue;
      if (lastSeen.current.has(u.title)) continue;
      lastSeen.current.add(u.title);
      dispatch({ type: "ADD_ACHIEVEMENT", payload: u.title });

      const color = u.tier ? RANK_COLOR[u.tier] : undefined;
      toast(u.title, {
        description: "Achievement Unlocked!",
        className: "achievement-toast",
        style: color
          ? {
              borderColor: `${color}aa`,
              boxShadow: `0 12px 40px -12px ${color}80`,
            }
          : undefined,
      });
    }
  }, [
    m.matchesPlayed,
    m.wins,
    m.longestWinStreak,
    m.resilientUnlocked,
    m.longestRound,
    m.highestTier,
    state.achievements,
    dispatch,
  ]);

  return null;
}
