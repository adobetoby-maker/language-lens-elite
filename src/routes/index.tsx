import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { AppProvider } from "@/state/app-state";
import { LibraryProvider } from "@/state/library-state";
import { NotesProvider } from "@/state/notes-state";
import { TopNav } from "@/components/TopNav";
import { StatusBar } from "@/components/StatusBar";
import { TabShell } from "@/components/TabShell";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "LinguaLens — A Premium Language Learning Experience" },
      {
        name: "description",
        content:
          "LinguaLens is an editorial, immersive way to learn Spanish, French, German, Italian, Japanese and Portuguese.",
      },
    ],
  }),
});

function Index() {
  return (
    <AppProvider>
      <LibraryProvider>
        <NotesProvider>
          <div className="min-h-screen bg-background text-foreground">
            <TopNav />
            <StatusBar />
            <main className="mx-auto max-w-7xl px-6 py-12">
              <TabShell />
            </main>
          </div>
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
        </NotesProvider>
      </LibraryProvider>
    </AppProvider>
  );
}
