import { useState } from "react";
import { useApp } from "@/state/app-state";

interface Command {
  en: string;
  callerRole: "climber" | "belayer" | "both";
  translations: Record<string, string>;
  notes?: Record<string, string>;
}

const COMMANDS: Command[] = [
  {
    en: "On belay?",
    callerRole: "climber",
    translations: {
      Spanish: "¿Asegurado?",
      Portuguese: "Na segurança?",
      French: "Tu m'assures ?",
      German: "Sichern?",
      Italian: "In sicura?",
      Japanese: "ビレイOK？",
      Korean: "빌레이?",
    },
  },
  {
    en: "Belay on.",
    callerRole: "belayer",
    translations: {
      Spanish: "Asegurado.",
      Portuguese: "Segurança pronta.",
      French: "Tu es assuré.",
      German: "Gesichert.",
      Italian: "In sicura.",
      Japanese: "ビレイOK。",
      Korean: "빌레이 OK.",
    },
  },
  {
    en: "Climbing?",
    callerRole: "climber",
    translations: {
      Spanish: "¿Escalando?",
      Portuguese: "Escalando?",
      French: "Je grimpe ?",
      German: "Klettern?",
      Italian: "Arrampico?",
      Japanese: "クライミング？",
      Korean: "등반해도 돼?",
    },
  },
  {
    en: "Climb on.",
    callerRole: "belayer",
    translations: {
      Spanish: "Adelante.",
      Portuguese: "Pode subir.",
      French: "C'est parti.",
      German: "Kletter.",
      Italian: "Vai.",
      Japanese: "どうぞ。",
      Korean: "올라가.",
    },
  },
  {
    en: "Slack!",
    callerRole: "climber",
    translations: {
      Spanish: "¡Cuerda!",
      Portuguese: "Corda!",
      French: "Mou !",
      German: "Seil geben!",
      Italian: "Lasca!",
      Japanese: "ロープ！",
      Korean: "줄 풀어!",
    },
    notes: { Spanish: "Give me more rope to clip", Portuguese: "Preciso de corda para clipar" },
  },
  {
    en: "Take!",
    callerRole: "climber",
    translations: {
      Spanish: "¡Tensa!",
      Portuguese: "Toma!",
      French: "Tiens !",
      German: "Nehmen!",
      Italian: "Tieni!",
      Japanese: "テイク！",
      Korean: "잡아!",
    },
    notes: {
      Spanish: "Pull the rope tight — I'm resting",
      Portuguese: "Puxa a corda — vou descansar",
    },
  },
  {
    en: "Watch me!",
    callerRole: "climber",
    translations: {
      Spanish: "¡Atento!",
      Portuguese: "Presta atenção!",
      French: "Attention !",
      German: "Aufpassen!",
      Italian: "Attenzione!",
      Japanese: "見て！",
      Korean: "집중해!",
    },
    notes: {
      Spanish: "I'm about to try something hard",
      Portuguese: "Vou tentar um passo difícil",
    },
  },
  {
    en: "Falling!",
    callerRole: "climber",
    translations: {
      Spanish: "¡Cayendo!",
      Portuguese: "Caindo!",
      French: "Je chute !",
      German: "Sturz!",
      Italian: "Cadendo!",
      Japanese: "落ちます！",
      Korean: "떨어진다!",
    },
  },
  {
    en: "Off belay.",
    callerRole: "climber",
    translations: {
      Spanish: "Seguro libre.",
      Portuguese: "Fora da segurança.",
      French: "Dévache.",
      German: "Sicherung weg.",
      Italian: "Fuori sicura.",
      Japanese: "ビレイ解除。",
      Korean: "빌레이 해제.",
    },
  },
  {
    en: "Safe.",
    callerRole: "climber",
    translations: {
      Spanish: "Seguro.",
      Portuguese: "Seguro.",
      French: "En sécurité.",
      German: "Ich bin sicher.",
      Italian: "Sono sicuro.",
      Japanese: "安全。",
      Korean: "안전.",
    },
  },
  {
    en: "Rock!",
    callerRole: "both",
    translations: {
      Spanish: "¡Piedra!",
      Portuguese: "Pedra!",
      French: "Caillou !",
      German: "Stein!",
      Italian: "Sasso!",
      Japanese: "落石！",
      Korean: "낙석!",
    },
    notes: {
      Spanish: "Warn anyone below of falling rock",
      Portuguese: "Avisa quem está abaixo de pedra caindo",
    },
  },
  {
    en: "Lower me.",
    callerRole: "climber",
    translations: {
      Spanish: "Bájame.",
      Portuguese: "Me desce.",
      French: "Descends-moi.",
      German: "Lass mich ab.",
      Italian: "Calami.",
      Japanese: "降ろして。",
      Korean: "내려줘.",
    },
  },
];

const ROLE_COLORS = {
  climber: {
    bg: "bg-sky-500/10",
    border: "border-sky-500/20",
    label: "Climber",
    dot: "bg-sky-400",
  },
  belayer: {
    bg: "bg-[#E8A020]/10",
    border: "border-[#E8A020]/20",
    label: "Belayer",
    dot: "bg-[#E8A020]",
  },
  both: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    label: "Either",
    dot: "bg-purple-400",
  },
};

export function CommandCards() {
  const { state } = useApp();
  const lang = state.selectedLanguage;
  const [reveal, setReveal] = useState<Set<string>>(new Set());
  const [filter, setFilter] = useState<"all" | "climber" | "belayer">("all");

  const visible = COMMANDS.filter(
    (c) => filter === "all" || c.callerRole === filter || c.callerRole === "both",
  );

  const toggle = (en: string) =>
    setReveal((prev) => {
      const next = new Set(prev);
      next.has(en) ? next.delete(en) : next.add(en);
      return next;
    });

  return (
    <div className="space-y-5">
      <div>
        <h3 className="text-lg font-bold text-white mb-1">Partner Commands</h3>
        <p className="text-white/40 text-sm">
          The 12 commands every climber needs before leaving the gym.
        </p>
      </div>

      {/* Role filter */}
      <div className="flex gap-2">
        {(["all", "climber", "belayer"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`text-xs px-3 py-1.5 rounded-full border transition-colors capitalize ${filter === f ? "bg-white/10 border-white/20 text-white" : "border-white/[0.06] text-white/40 hover:text-white/60"}`}
          >
            {f === "all" ? "All" : f === "climber" ? "Climber calls" : "Belayer calls"}
          </button>
        ))}
      </div>

      <div className="space-y-2">
        {visible.map((cmd) => {
          const colors = ROLE_COLORS[cmd.callerRole];
          const translation = cmd.translations[lang] ?? cmd.translations["Spanish"];
          const note = cmd.notes?.[lang] ?? cmd.notes?.["Spanish"];
          const isRevealed = reveal.has(cmd.en);

          return (
            <button
              key={cmd.en}
              onClick={() => toggle(cmd.en)}
              className={`w-full text-left rounded-xl border p-4 transition-all ${colors.bg} ${colors.border} hover:brightness-110`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${colors.dot}`} />
                    <span className="text-[10px] uppercase tracking-wider text-white/30">
                      {colors.label}
                    </span>
                  </div>
                  <p className="text-white font-semibold text-base">{cmd.en}</p>
                  {isRevealed && <p className="text-white/80 text-sm mt-1">{translation}</p>}
                  {isRevealed && note && (
                    <p className="text-white/40 text-xs mt-1 italic">{note}</p>
                  )}
                </div>
                <span className="text-white/30 text-xs mt-1 shrink-0">
                  {isRevealed ? "▲" : "▼"}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Simulate call-response drill prompt */}
      <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5">
        <p className="text-xs uppercase tracking-wider text-white/30 mb-2">Drill Tip</p>
        <p className="text-sm text-white/60">
          Practice these in order — climber calls first, belayer responds. Run the full sequence
          from <span className="text-white">&ldquo;On belay?&rdquo;</span> to{" "}
          <span className="text-white">&ldquo;Off belay.&rdquo;</span> before every climb until
          it&rsquo;s automatic.
        </p>
      </div>
    </div>
  );
}
