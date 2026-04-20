import { createFileRoute } from "@tanstack/react-router";
import { type ReactNode, useState } from "react";
import { Toaster } from "sonner";
import { AppProvider, useApp } from "@/state/app-state";
import { LibraryProvider } from "@/state/library-state";
import { NotesProvider } from "@/state/notes-state";
import { GrammarProvider } from "@/state/grammar-state";
import { SpeechProvider } from "@/state/speech-state";
import { SpeakProvider } from "@/state/speak-state";
import { TutorProvider } from "@/state/tutor-state";
import { MatchProvider } from "@/state/match-state";
import { LeaderboardProvider } from "@/state/leaderboard-state";
import { TopNav } from "@/components/TopNav";
import { StatusBar } from "@/components/StatusBar";
import { TabShell } from "@/components/TabShell";
import { TutorPanel } from "@/components/tutor/TutorPanel";
import { LevelUpOverlay } from "@/components/LevelUpOverlay";
import { CefrCompletionBridge } from "@/components/CefrCompletionBridge";
import { MatchmakingOverlay } from "@/components/match/MatchmakingOverlay";
import { MatchAchievementsBridge } from "@/components/match/MatchAchievementsBridge";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "LinguaLens — A Premium Language Learning Experience" },
      {
        name: "description",
        content:
          "LinguaLens is an editorial, immersive way to learn Spanish, French, German, Italian, Japanese, Korean and Portuguese.",
      },
    ],
  }),
});

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
  return (
    <AppProvider>
      <MatchProvider>
        <LeaderboardProvider>
        <LibraryProvider>
          <NotesProvider>
            <GrammarProvider>
              <SpeechBridge>
                <SpeakBridge>
                  <TutorProvider>
                    <div className="min-h-screen bg-background text-foreground">
                      <TopNav onOpenMatch={() => setMatchOpen(true)} />
                      <StatusBar />
                      <main className="mx-auto max-w-7xl px-6 py-12">
                        <TabShell />
                      </main>
                    </div>
                    <TutorPanel />
                    <LevelUpOverlay />
                    <CefrCompletionBridge />
                    <MatchmakingOverlay open={matchOpen} onClose={() => setMatchOpen(false)} />
                    <MatchAchievementsBridge />
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
    </AppProvider>
  );
}
