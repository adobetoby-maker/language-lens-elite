import { createFileRoute } from "@tanstack/react-router";
import { type ReactNode, useEffect, useState } from "react";
import { Toaster } from "sonner";
import { AppProvider, useApp } from "@/state/app-state";
import { AuthProvider } from "@/state/auth-state";
import { LibraryProvider } from "@/state/library-state";
import { NotesProvider } from "@/state/notes-state";
import { GrammarProvider } from "@/state/grammar-state";
import { SpeechProvider } from "@/state/speech-state";
import { SpeakProvider } from "@/state/speak-state";
import { TutorProvider } from "@/state/tutor-state";
import { MatchProvider } from "@/state/match-state";
import { LeaderboardProvider } from "@/state/leaderboard-state";
import { ConjugationProvider } from "@/state/conjugation-state";
import { SentenceBuildProvider } from "@/state/sentence-build-state";
import { ListeningDrillProvider } from "@/state/listening-drill-state";
import { WordMatchProvider } from "@/state/word-match-state";
import { IdiomMasterProvider } from "@/state/idiom-master-state";
import { FalseFriendsProvider } from "@/state/false-friends-state";
import { DailyChallengeProvider } from "@/state/daily-challenge-state";
import { DailyChallengeBridge } from "@/components/games/DailyChallengeBridge";
import { TopNav } from "@/components/TopNav";
import { AppSidebar } from "@/components/AppSidebar";
import { FreePreviewBanner } from "@/components/FreePreviewBanner";
import { TabShell } from "@/components/TabShell";
import { TutorPanel } from "@/components/tutor/TutorPanel";
import { LevelUpOverlay } from "@/components/LevelUpOverlay";
import { CefrCompletionBridge } from "@/components/CefrCompletionBridge";
import { MatchmakingOverlay } from "@/components/match/MatchmakingOverlay";
import { MatchAchievementsBridge } from "@/components/match/MatchAchievementsBridge";
import { OnboardingWizard } from "@/components/onboarding/OnboardingWizard";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Language Threshold — A Premium Language Learning Experience" },
      { name: "description", content: "Language Threshold is an editorial, immersive way to learn Spanish, French, German, Italian, Japanese, Korean and Portuguese." },
    ],
  }),
});

function WizardGate() {
  const { state } = useApp();
  // Wait for localStorage to hydrate so we don't flash the wizard for returning users.
  if (!state.hydrated) return null;
  if (state.onboardingComplete) return null;
  return <OnboardingWizard />;
}

function SpeechBridge({ children }: { children: ReactNode }) {
  const { state, dispatch } = useApp();
  return (
    <SpeechProvider
      language={state.selectedLanguage}
      onXp={(n) => dispatch({ type: "ADD_XP", payload: n })}
      onAchievement={(name) => dispatch({ type: "ADD_ACHIEVEMENT", payload: name })}
      hasAchievement={(name) => state.achievements.includes(name)}
    >
      {children}
    </SpeechProvider>
  );
}

function SpeakBridge({ children }: { children: ReactNode }) {
  const { state } = useApp();
  return <SpeakProvider language={state.selectedLanguage}>{children}</SpeakProvider>;
}

function Index() {
  const [matchOpen, setMatchOpen] = useState(false);
  // Lets non-prop-connected children (e.g. GamesHub tab) open the overlay.
  useEffect(() => {
    const handler = () => setMatchOpen(true);
    window.addEventListener("lt:open-match", handler);
    return () => window.removeEventListener("lt:open-match", handler);
  }, []);
  return (
    <AppProvider>
      <AuthProvider>
        <MatchProvider>
          <LeaderboardProvider>
            <LibraryProvider>
              <NotesProvider>
                <GrammarProvider>
                  <SpeechBridge>
                    <SpeakBridge>
                      <TutorProvider>
                       <ConjugationProvider>
                        <SentenceBuildProvider>
                         <ListeningDrillProvider>
                          <WordMatchProvider>
                           <IdiomMasterProvider>
                            <FalseFriendsProvider>
                             <DailyChallengeProvider>
                        <div className="flex min-h-screen bg-background text-foreground">
                          {/* Left sidebar (desktop) + bottom nav (mobile) */}
                          <AppSidebar onOpenMatch={() => setMatchOpen(true)} />

                          {/* Main column */}
                          <div className="flex min-w-0 flex-1 flex-col">
                            <FreePreviewBanner />
                            <TopNav />
                            {/* Bottom padding always reserves room for the
                                fixed bottom nav, on every viewport. */}
                            <main className="flex-1 overflow-y-auto px-4 py-6 pb-[calc(4rem+env(safe-area-inset-bottom))] sm:px-6 sm:py-10">
                              <TabShell />
                            </main>
                          </div>
                        </div>

                        <WizardGate />
                        <TutorPanel />
                        <LevelUpOverlay />
                        <CefrCompletionBridge />
                        <MatchmakingOverlay open={matchOpen} onClose={() => setMatchOpen(false)} />
                        <MatchAchievementsBridge />
                        <DailyChallengeBridge />
                             </DailyChallengeProvider>
                            </FalseFriendsProvider>
                           </IdiomMasterProvider>
                          </WordMatchProvider>
                         </ListeningDrillProvider>
                        </SentenceBuildProvider>
                       </ConjugationProvider>
                      </TutorProvider>
                      <Toaster
                        theme="dark"
                        position="bottom-right"
                        toastOptions={{
                          style: {
                            background: "var(--card)",
                            color: "var(--foreground)",
                            border: "1px solid color-mix(in oklab, var(--gold) 40%, transparent)",
                          },
                        }}
                      />
                    </SpeakBridge>
                  </SpeechBridge>
                </GrammarProvider>
              </NotesProvider>
            </LibraryProvider>
          </LeaderboardProvider>
        </MatchProvider>
      </AuthProvider>
    </AppProvider>
  );
}
