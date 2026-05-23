import { useMemo } from "react";
import {
  Trophy,
  Flame,
  Award,
  Target,
  Users,
  Clock,
  AlertTriangle,
  Sparkle,
  Lock,
} from "lucide-react";
import { useConjugation } from "@/state/conjugation-state";
import { useSentenceBuild } from "@/state/sentence-build-state";
import { useListeningDrill } from "@/state/listening-drill-state";
import { useWordMatch } from "@/state/word-match-state";
import { useIdiomMaster } from "@/state/idiom-master-state";
import { useFalseFriends } from "@/state/false-friends-state";
import { useMatch } from "@/state/match-state";
import { useDailyChallenge } from "@/state/daily-challenge-state";

/**
 * Cross-game achievements — derived purely from existing leaderboards.
 *
 * Each badge has:
 *   - id, label, hint
 *   - icon
 *   - check: (stats) => { earned: boolean; progress: 0..1 }
 *
 * Render: 4-col grid (sm: 2-col), earned badges glow gold, unearned show
 * a Lock icon with progress %. Tooltip on hover gives the hint.
 */

interface RunStats {
  bestStreak: number;
  perfectRuns: number;
  totalCorrect: number;
  totalAttempts: number;
}

function aggLB(
  lb: Record<
    string,
    | { bestStreak: number; perfectRuns: number; totalCorrect: number; totalAttempts: number }
    | undefined
  >,
): RunStats {
  let s: RunStats = { bestStreak: 0, perfectRuns: 0, totalCorrect: 0, totalAttempts: 0 };
  for (const v of Object.values(lb)) {
    if (!v) continue;
    s.bestStreak = Math.max(s.bestStreak, v.bestStreak);
    s.perfectRuns += v.perfectRuns;
    s.totalCorrect += v.totalCorrect;
    s.totalAttempts += v.totalAttempts;
  }
  return s;
}

function languagesPlayedIn(
  lb: Record<string, { totalAttempts?: number } | undefined>,
): Set<string> {
  const langs = new Set<string>();
  for (const k of Object.keys(lb)) {
    const v = lb[k];
    if (v?.totalAttempts && v.totalAttempts > 0) {
      // key is `${Language}-${level}`; split off level
      const lang = k.split("-").slice(0, -1).join("-");
      langs.add(lang);
    }
  }
  return langs;
}

export function CrossGameAchievements() {
  const conj = useConjugation();
  const sb = useSentenceBuild();
  const listening = useListeningDrill();
  const wm = useWordMatch();
  const idiom = useIdiomMaster();
  const ff = useFalseFriends();
  const match = useMatch();
  const daily = useDailyChallenge();

  const summary = useMemo(() => {
    const conjAgg = aggLB(
      conj.state.leaderboard as Record<
        string,
        | { bestStreak: number; perfectRuns: number; totalCorrect: number; totalAttempts: number }
        | undefined
      >,
    );
    const sbAgg = aggLB(
      sb.state.leaderboard as Record<
        string,
        | { bestStreak: number; perfectRuns: number; totalCorrect: number; totalAttempts: number }
        | undefined
      >,
    );
    const listeningAgg = aggLB(
      listening.state.leaderboard as Record<
        string,
        | { bestStreak: number; perfectRuns: number; totalCorrect: number; totalAttempts: number }
        | undefined
      >,
    );
    const idiomAgg = aggLB(
      idiom.state.leaderboard as Record<
        string,
        | { bestStreak: number; perfectRuns: number; totalCorrect: number; totalAttempts: number }
        | undefined
      >,
    );
    const ffAgg = aggLB(
      ff.state.leaderboard as Record<
        string,
        | { bestStreak: number; perfectRuns: number; totalCorrect: number; totalAttempts: number }
        | undefined
      >,
    );

    // Word Match: bestTime, totalGames, perfectGames
    const wmLB = wm.state.leaderboard as Record<
      string,
      | {
          bestTimeMs?: number;
          bestFlips?: number;
          perfectGames?: number;
          totalGames?: number;
          totalCompleted?: number;
        }
      | undefined
    >;
    let wmBestTime = Infinity;
    let wmTotalGames = 0;
    let wmPerfect = 0;
    let wmTotalCompleted = 0;
    for (const v of Object.values(wmLB)) {
      if (!v) continue;
      if (v.bestTimeMs && v.bestTimeMs < wmBestTime) wmBestTime = v.bestTimeMs;
      wmTotalGames += v.totalGames ?? 0;
      wmPerfect += v.perfectGames ?? 0;
      wmTotalCompleted += v.totalCompleted ?? 0;
    }

    // False Friends: trap-IQ
    const ffLB = ff.state.leaderboard as Record<
      string,
      { trapsCaught?: number; trapsMissed?: number } | undefined
    >;
    let trapsCaught = 0;
    let trapsTotal = 0;
    for (const v of Object.values(ffLB)) {
      if (!v) continue;
      trapsCaught += v.trapsCaught ?? 0;
      trapsTotal += (v.trapsCaught ?? 0) + (v.trapsMissed ?? 0);
    }
    const trapIQ = trapsTotal === 0 ? 0 : trapsCaught / trapsTotal;

    // Languages touched across the 5-Q-run games + Word Match
    const allLangs = new Set<string>();
    languagesPlayedIn(
      conj.state.leaderboard as Record<string, { totalAttempts?: number } | undefined>,
    ).forEach((l) => allLangs.add(l));
    languagesPlayedIn(
      sb.state.leaderboard as Record<string, { totalAttempts?: number } | undefined>,
    ).forEach((l) => allLangs.add(l));
    languagesPlayedIn(
      listening.state.leaderboard as Record<string, { totalAttempts?: number } | undefined>,
    ).forEach((l) => allLangs.add(l));
    languagesPlayedIn(
      idiom.state.leaderboard as Record<string, { totalAttempts?: number } | undefined>,
    ).forEach((l) => allLangs.add(l));
    languagesPlayedIn(
      ff.state.leaderboard as Record<string, { totalAttempts?: number } | undefined>,
    ).forEach((l) => allLangs.add(l));
    for (const k of Object.keys(wmLB)) {
      const v = wmLB[k];
      if (v?.totalGames && v.totalGames > 0) {
        const lang = k.split("-").slice(0, -1).join("-");
        allLangs.add(lang);
      }
    }

    // Languages with at least one perfect run
    const perfectLangs = new Set<string>();
    const collectPerfectLangs = (lb: Record<string, { perfectRuns?: number } | undefined>) => {
      for (const k of Object.keys(lb)) {
        const v = lb[k];
        if (v?.perfectRuns && v.perfectRuns > 0) {
          const lang = k.split("-").slice(0, -1).join("-");
          perfectLangs.add(lang);
        }
      }
    };
    collectPerfectLangs(
      conj.state.leaderboard as Record<string, { perfectRuns?: number } | undefined>,
    );
    collectPerfectLangs(
      sb.state.leaderboard as Record<string, { perfectRuns?: number } | undefined>,
    );
    collectPerfectLangs(
      listening.state.leaderboard as Record<string, { perfectRuns?: number } | undefined>,
    );
    collectPerfectLangs(
      idiom.state.leaderboard as Record<string, { perfectRuns?: number } | undefined>,
    );
    collectPerfectLangs(
      ff.state.leaderboard as Record<string, { perfectRuns?: number } | undefined>,
    );

    // Distinct games played at least once
    const gamesPlayedCount = [
      conjAgg.totalAttempts > 0,
      sbAgg.totalAttempts > 0,
      listeningAgg.totalAttempts > 0,
      idiomAgg.totalAttempts > 0,
      ffAgg.totalAttempts > 0,
      wmTotalGames > 0,
      (match.matchesPlayed ?? 0) > 0,
    ].filter(Boolean).length;

    const totalAnswers =
      conjAgg.totalAttempts +
      sbAgg.totalAttempts +
      listeningAgg.totalAttempts +
      idiomAgg.totalAttempts +
      ffAgg.totalAttempts +
      wmTotalGames +
      (match.matchesPlayed ?? 0);
    const totalPerfectRuns =
      conjAgg.perfectRuns +
      sbAgg.perfectRuns +
      listeningAgg.perfectRuns +
      idiomAgg.perfectRuns +
      ffAgg.perfectRuns +
      wmPerfect +
      (match.wins ?? 0);
    const bestStreakAny = Math.max(
      conjAgg.bestStreak,
      sbAgg.bestStreak,
      listeningAgg.bestStreak,
      idiomAgg.bestStreak,
      ffAgg.bestStreak,
      match.longestWinStreak ?? 0,
    );

    return {
      totalAnswers,
      totalPerfectRuns,
      bestStreakAny,
      gamesPlayedCount,
      languageCount: allLangs.size,
      perfectLangsCount: perfectLangs.size,
      trapIQ,
      trapsTotal,
      wmBestTime,
      wmPerfect,
      dailyStreak: daily.data.currentStreak,
      dailyLongest: daily.data.longestStreak,
    };
  }, [
    conj.state.leaderboard,
    sb.state.leaderboard,
    listening.state.leaderboard,
    wm.state.leaderboard,
    idiom.state.leaderboard,
    ff.state.leaderboard,
    match,
    daily.data,
  ]);

  const badges = [
    {
      id: "centurion",
      label: "Centurion",
      icon: Trophy,
      hint: "Answer 100 questions across all games",
      target: 100,
      value: summary.totalAnswers,
    },
    {
      id: "millennial",
      label: "Millennial",
      icon: Trophy,
      hint: "Answer 1000 questions across all games",
      target: 1000,
      value: summary.totalAnswers,
    },
    {
      id: "ironclad",
      label: "Ironclad",
      icon: Flame,
      hint: "25+ best streak in any single game",
      target: 25,
      value: summary.bestStreakAny,
    },
    {
      id: "polyglot",
      label: "Polyglot",
      icon: Users,
      hint: "Perfect runs in 3+ different languages",
      target: 3,
      value: summary.perfectLangsCount,
    },
    {
      id: "multilingual",
      label: "Multilingual",
      icon: Users,
      hint: "Played at least once in 5+ languages",
      target: 5,
      value: summary.languageCount,
    },
    {
      id: "sampler",
      label: "Game Sampler",
      icon: Sparkle,
      hint: "Played at least once in 5+ games",
      target: 5,
      value: summary.gamesPlayedCount,
    },
    {
      id: "completionist",
      label: "Completionist",
      icon: Award,
      hint: "Played all 7 games at least once",
      target: 7,
      value: summary.gamesPlayedCount,
    },
    {
      id: "perfectionist",
      label: "Perfectionist",
      icon: Award,
      hint: "10 perfect 5/5 runs across any games",
      target: 10,
      value: summary.totalPerfectRuns,
    },
    {
      id: "trapMaster",
      label: "Trap Master",
      icon: AlertTriangle,
      hint: "Catch 90%+ of false-friend traps (min 20 traps seen)",
      target: 1,
      value: summary.trapsTotal >= 20 && summary.trapIQ >= 0.9 ? 1 : 0,
      // Show progress as % for partial credit when not yet eligible
      progressOverride: summary.trapsTotal < 20 ? summary.trapsTotal / 20 : summary.trapIQ,
    },
    {
      id: "speedster",
      label: "Speedster",
      icon: Clock,
      hint: "Word Match perfect game in under 30 seconds",
      target: 1,
      // Best time stored in ms; ≤ 30000 = earned. 0 means never finished.
      value: summary.wmBestTime > 0 && summary.wmBestTime <= 30_000 ? 1 : 0,
      progressOverride:
        summary.wmBestTime > 0 && summary.wmBestTime !== Infinity
          ? Math.min(1, 30_000 / summary.wmBestTime)
          : 0,
    },
    {
      id: "devotee",
      label: "Devotee",
      icon: Target,
      hint: "7-day daily challenge streak",
      target: 7,
      value: summary.dailyLongest,
    },
    {
      id: "habit",
      label: "Habit",
      icon: Target,
      hint: "100-day daily challenge streak",
      target: 100,
      value: summary.dailyLongest,
    },
  ];

  const earnedCount = badges.filter((b) => b.value >= b.target).length;

  return (
    <div className="rounded-2xl border border-border/60 bg-card/30 p-5">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Award className="h-3.5 w-3.5 text-gold" strokeWidth={1.6} />
          <h3 className="font-mono text-[10px] uppercase tracking-[0.28em] text-gold">
            Achievements
          </h3>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          {earnedCount} / {badges.length}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
        {badges.map((b) => {
          const earned = b.value >= b.target;
          const progress = earned ? 1 : (b.progressOverride ?? Math.min(1, b.value / b.target));
          return (
            <div
              key={b.id}
              title={b.hint}
              data-earned={earned}
              className="relative overflow-hidden rounded-xl border border-border/60 bg-background/40 p-2.5 transition-all data-[earned=true]:border-gold/60 data-[earned=true]:bg-gold/[0.08]"
            >
              <div className="flex items-center gap-2">
                {earned ? (
                  <b.icon className="h-3.5 w-3.5 shrink-0 text-gold" strokeWidth={1.7} />
                ) : (
                  <Lock className="h-3.5 w-3.5 shrink-0 text-muted-foreground" strokeWidth={1.6} />
                )}
                <span
                  className={`truncate font-mono text-[10px] uppercase tracking-[0.18em] ${earned ? "text-gold" : "text-muted-foreground"}`}
                >
                  {b.label}
                </span>
              </div>
              {!earned && (
                <div className="mt-1.5 h-0.5 w-full overflow-hidden rounded-full bg-border/40">
                  <div
                    className="h-full rounded-full bg-gold/60 transition-all"
                    style={{ width: `${Math.round(progress * 100)}%` }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
