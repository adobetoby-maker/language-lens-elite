import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type RankTier =
  | "Bronze"
  | "Silver"
  | "Gold"
  | "Platinum"
  | "Diamond"
  | "Champion"
  | "Unreal";

export const RANK_ORDER: RankTier[] = [
  "Bronze",
  "Silver",
  "Gold",
  "Platinum",
  "Diamond",
  "Champion",
  "Unreal",
];

export const RANK_BADGE: Record<RankTier, string> = {
  Bronze: "🥉",
  Silver: "🥈",
  Gold: "🥇",
  Platinum: "💠",
  Diamond: "💎",
  Champion: "👑",
  Unreal: "✦",
};

/** Signature glow color (CSS color value). Unreal uses a special rainbow class. */
export const RANK_COLOR: Record<RankTier, string> = {
  Bronze: "#CD7F32",
  Silver: "#A8A9AD",
  Gold: "#C9A84C",
  Platinum: "#00CFCF",
  Diamond: "#A855F7",
  Champion: "#EF4444",
  Unreal: "#FFFFFF", // visual handled by .rank-glow-rainbow
};

export const RANK_TITLE: Record<RankTier, string> = {
  Bronze: "The Wandering Student",
  Silver: "The Apprentice Linguist",
  Gold: "The Eloquent Voyager",
  Platinum: "The Silver-Tongued Scholar",
  Diamond: "The Polyglot Virtuoso",
  Champion: "The Crowned Conversant",
  Unreal: "The Living Lexicon",
};

export const POINTS_PER_TIER = 100;

interface MatchState {
  tier: RankTier;
  points: number; // 0..POINTS_PER_TIER (within current tier)
}

interface MatchCtx extends MatchState {
  glowColor: string;
  badge: string;
  title: string;
  isMaxTier: boolean;
  addPoints: (n: number) => void;
  removePoints: (n: number) => void;
  reset: () => void;
}

const Ctx = createContext<MatchCtx | null>(null);
const STORAGE_KEY = "lingualens.match.v1";

const initialState: MatchState = { tier: "Bronze", points: 0 };

export function MatchProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<MatchState>(initialState);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<MatchState>;
        if (
          parsed &&
          typeof parsed.tier === "string" &&
          RANK_ORDER.includes(parsed.tier as RankTier) &&
          typeof parsed.points === "number"
        ) {
          setState({
            tier: parsed.tier as RankTier,
            points: Math.max(0, Math.min(POINTS_PER_TIER, parsed.points)),
          });
        }
      }
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* ignore */
    }
  }, [state, hydrated]);

  const addPoints = useCallback((n: number) => {
    if (n <= 0) return;
    setState((s) => {
      let points = s.points + n;
      let tierIdx = RANK_ORDER.indexOf(s.tier);
      while (points >= POINTS_PER_TIER && tierIdx < RANK_ORDER.length - 1) {
        points -= POINTS_PER_TIER;
        tierIdx += 1;
      }
      if (tierIdx === RANK_ORDER.length - 1) {
        points = Math.min(points, POINTS_PER_TIER);
      }
      return { tier: RANK_ORDER[tierIdx], points };
    });
  }, []);

  const removePoints = useCallback((n: number) => {
    if (n <= 0) return;
    setState((s) => {
      let points = s.points - n;
      let tierIdx = RANK_ORDER.indexOf(s.tier);
      while (points < 0 && tierIdx > 0) {
        tierIdx -= 1;
        points += POINTS_PER_TIER;
      }
      if (tierIdx === 0 && points < 0) points = 0;
      return { tier: RANK_ORDER[tierIdx], points };
    });
  }, []);

  const reset = useCallback(() => setState(initialState), []);

  const value = useMemo<MatchCtx>(
    () => ({
      tier: state.tier,
      points: state.points,
      glowColor: RANK_COLOR[state.tier],
      badge: RANK_BADGE[state.tier],
      title: RANK_TITLE[state.tier],
      isMaxTier: state.tier === "Unreal",
      addPoints,
      removePoints,
      reset,
    }),
    [state, addPoints, removePoints, reset],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useMatch() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useMatch must be used inside MatchProvider");
  return c;
}
