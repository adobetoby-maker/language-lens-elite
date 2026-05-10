import { useState } from "react";
import { ArrowLeft, MessageSquare, Sparkles } from "lucide-react";
import { useApp } from "@/state/app-state";
import { useTutor } from "@/state/tutor-state";
import { ORTHO_AREAS, getOrthoArea, type OrthoArea } from "@/data/orthopedics-content";
import { ModuleStudyGuide } from "@/components/modules/ModuleStudyGuide";

const MODULE_ID = "orthopedics";

/**
 * Dedicated tab for the Orthopedics module. Surgeons pick a clinical area
 * (Clinic, OR, Doc-to-Doc, Radiology, ER → Ortho, Sports, Arthroplasty,
 * Trauma, Oncology) and get setting-specific phrases, vocab, and one-tap
 * AI roleplay prompts.
 */
export function OrthopedicsHome() {
  const { state, dispatch } = useApp();
  const tutor = useTutor();

  const assignedId = state.moduleAssignments[MODULE_ID] ?? null;
  const [openId, setOpenId] = useState<string | null>(assignedId);
  const openArea = getOrthoArea(openId);

  function pickArea(area: OrthoArea) {
    setOpenId(area.id);
    dispatch({
      type: "SET_MODULE_ASSIGNMENT",
      payload: { moduleId: MODULE_ID, assignmentId: area.id },
    });
  }

  function startRoleplay(area: OrthoArea, prompt: string) {
    // Make sure the tutor sends the right area context
    dispatch({
      type: "SET_MODULE_ASSIGNMENT",
      payload: { moduleId: MODULE_ID, assignmentId: area.id },
    });
    tutor.prefill(
      `Roleplay scenario — ${area.name}. I am ${area.learnerRole}; you are ${area.counterpart}. ` +
        `In ${state.selectedLanguage}, with a short English gloss in parentheses for each line. ` +
        `Begin the scene now: ${prompt}`,
    );
    tutor.setOpen(true);
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
      <header className="mb-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-gold">
          🦴 Orthopedics
        </p>
        <h1 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          Pick your clinical area
        </h1>
        <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
          Each area gives you setting-appropriate phrases, vocabulary, and an
          AI roleplay partner who plays the patient, colleague, or staff member
          you'd actually be talking to.
        </p>
      </header>

      {!openArea ? (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ORTHO_AREAS.map((area) => (
            <button
              key={area.id}
              onClick={() => pickArea(area)}
              className="group flex flex-col items-start gap-2 rounded-2xl border border-border/60 bg-card/40 p-5 text-left transition-all hover:border-gold/60 hover:bg-card/70"
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">{area.emoji}</span>
                <span className="font-display text-lg font-semibold">
                  {area.name}
                </span>
              </div>
              <p className="text-xs text-muted-foreground">{area.blurb}</p>
              <span className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-gold/80 group-hover:text-gold">
                Open →
              </span>
            </button>
          ))}
        </div>
      ) : (
        <AreaDetail
          area={openArea}
          onBack={() => setOpenId(null)}
          onRoleplay={(prompt) => startRoleplay(openArea, prompt)}
        />
      )}
    </div>
  );
}

function AreaDetail({
  area,
  onBack,
  onRoleplay,
}: {
  area: OrthoArea;
  onBack: () => void;
  onRoleplay: (prompt: string) => void;
}) {
  return (
    <div>
      <button
        onClick={onBack}
        className="mb-4 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" /> All areas
      </button>

      <div className="mb-6 rounded-2xl border border-gold/30 bg-card/40 p-5">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{area.emoji}</span>
          <div>
            <h2 className="font-display text-2xl font-semibold">{area.name}</h2>
            <p className="text-xs text-muted-foreground">{area.blurb}</p>
          </div>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <InfoRow label="You" value={area.learnerRole} />
          <InfoRow label="They" value={area.counterpart} />
          <InfoRow label="Tone" value={area.toneNote} />
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Phrases */}
        <section className="rounded-2xl border border-border/60 bg-card/40 p-5">
          <h3 className="mb-3 font-mono text-[11px] uppercase tracking-[0.22em] text-gold">
            Key phrases
          </h3>
          <ul className="space-y-2">
            {area.phrases.map((p, i) => (
              <li
                key={i}
                className="rounded-lg border border-border/40 bg-background/40 p-3"
              >
                <p className="text-sm text-foreground">{p.en}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  {p.intent}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Vocab + Practice */}
        <div className="space-y-6">
          <section className="rounded-2xl border border-border/60 bg-card/40 p-5">
            <h3 className="mb-3 font-mono text-[11px] uppercase tracking-[0.22em] text-gold">
              Vocabulary focus
            </h3>
            <div className="flex flex-wrap gap-2">
              {area.vocab.map((v) => (
                <span
                  key={v}
                  className="rounded-full border border-border/60 bg-background/40 px-3 py-1 font-mono text-[11px] text-foreground/80"
                >
                  {v}
                </span>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-gold/30 bg-card/40 p-5">
            <h3 className="mb-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-gold">
              <Sparkles className="h-3.5 w-3.5" /> Practice with AI
            </h3>
            <ul className="space-y-2">
              {area.challenges.map((c) => (
                <li key={c}>
                  <button
                    onClick={() => onRoleplay(c)}
                    className="group flex w-full items-start gap-2 rounded-lg border border-border/40 bg-background/40 p-3 text-left transition-all hover:border-gold/60 hover:bg-background/70"
                  >
                    <MessageSquare className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <span className="text-sm text-foreground group-hover:text-foreground">
                      {c}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </p>
      <p className="text-sm text-foreground">{value}</p>
    </div>
  );
}
