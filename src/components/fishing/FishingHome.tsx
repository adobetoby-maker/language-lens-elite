import { useState } from "react";
import { useApp } from "@/state/app-state";
import { ModuleStudyGuide } from "@/components/modules/ModuleStudyGuide";

type SubTab = "guide" | "boat" | "species" | "culture" | "travel";

const SUB_TABS: { id: SubTab; label: string; emoji: string }[] = [
  { id: "guide", label: "Study Guide", emoji: "📋" },
  { id: "boat", label: "On the Boat", emoji: "⛵" },
  { id: "species", label: "Species", emoji: "🐟" },
  { id: "culture", label: "Culture", emoji: "🌊" },
  { id: "travel", label: "At the Dock", emoji: "🗺️" },
];

// ─── Boat Commands ──────────────────────────────────────────────────────────

const BOAT_COMMANDS: Array<{ en: string; translations: Record<string, string> }> = [
  {
    en: "Fish on! / There it goes!",
    translations: {
      Spanish: "¡Ahí va!",
      Portuguese: "Peixe na linha!",
      French: "Touche ! / Ça mord !",
      German: "Fisch an! / Da ist einer!",
      Italian: "Abboccato! / Eccolo!",
      Japanese: "ヒットした！",
      Korean: "물었다! / 히트!",
    },
  },
  {
    en: "Set the hook! Hit it!",
    translations: {
      Spanish: "¡Pégale!",
      Portuguese: "Ferrar! / Puxa!",
      French: "Ferrez ! / Frappez !",
      German: "Anschlagen! Hau rein!",
      Italian: "Allampa! / Colpisci!",
      Japanese: "合わせて！",
      Korean: "챔질! 맞춰!",
    },
  },
  {
    en: "Keep reeling! Don't stop!",
    translations: {
      Spanish: "¡Dale, dale!",
      Portuguese: "Continua! / Não para!",
      French: "Moulinez ! / Continuez !",
      German: "Weiter einholen! Nicht aufhören!",
      Italian: "Mulinella! Non fermarti!",
      Japanese: "巻き続けて！止まるな！",
      Korean: "계속 감아! 멈추지 마!",
    },
  },
  {
    en: "Let it run! Ease the drag!",
    translations: {
      Spanish: "¡Suéltalo! / ¡Afloja el freno!",
      Portuguese: "Deixa correr! / Afrouxa o freio!",
      French: "Laissez filer ! / Desserrez le frein !",
      German: "Laufen lassen! Bremse lockern!",
      Italian: "Lascialo andare! Allenta il freno!",
      Japanese: "走らせて！ドラグを緩めて！",
      Korean: "달리게 해! 드래그 풀어!",
    },
  },
  {
    en: "To the right / To the left",
    translations: {
      Spanish: "A la derecha / A la izquierda",
      Portuguese: "Para a direita / Para a esquerda",
      French: "À droite / À gauche",
      German: "Nach rechts / Nach links",
      Italian: "A destra / A sinistra",
      Japanese: "右へ / 左へ",
      Korean: "오른쪽 / 왼쪽",
    },
  },
  {
    en: "Watch the line!",
    translations: {
      Spanish: "¡Cuidado con la línea!",
      Portuguese: "Cuidado com a linha!",
      French: "Attention à la ligne !",
      German: "Achtung, die Schnur!",
      Italian: "Attenzione alla lenza!",
      Japanese: "ラインに気をつけて！",
      Korean: "라인 조심해!",
    },
  },
  {
    en: "Do you see the birds?",
    translations: {
      Spanish: "¿Ves los pájaros?",
      Portuguese: "Você vê os pássaros?",
      French: "Vous voyez les oiseaux ?",
      German: "Siehst du die Vögel?",
      Italian: "Vedi gli uccelli?",
      Japanese: "鳥が見えますか？",
      Korean: "새들 보여요?",
    },
  },
  {
    en: "The fish is jumping!",
    translations: {
      Spanish: "¡El pez está saltando!",
      Portuguese: "O peixe está pulando!",
      French: "Le poisson saute !",
      German: "Der Fisch springt!",
      Italian: "Il pesce sta saltando!",
      Japanese: "魚がジャンプしてる！",
      Korean: "물고기가 점프하고 있어!",
    },
  },
  {
    en: "How much does it weigh?",
    translations: {
      Spanish: "¿Cuánto pesa?",
      Portuguese: "Quanto pesa?",
      French: "Combien pèse-t-il ?",
      German: "Wie viel wiegt er?",
      Italian: "Quanto pesa?",
      Japanese: "何キロありますか？",
      Korean: "몇 킬로예요?",
    },
  },
  {
    en: "What a beautiful fish!",
    translations: {
      Spanish: "¡Qué hermoso!",
      Portuguese: "Que peixe lindo!",
      French: "Quel beau poisson !",
      German: "Was für ein schöner Fisch!",
      Italian: "Che pesce magnifico!",
      Japanese: "なんて美しい魚！",
      Korean: "정말 아름다운 물고기야!",
    },
  },
  {
    en: "Tight lines! Good luck!",
    translations: {
      Spanish: "¡Buena pesca! / ¡Buena suerte!",
      Portuguese: "Boa pesca! / Boa sorte!",
      French: "Bonne pêche ! / Bonne chance !",
      German: "Petri Heil! / Viel Glück!",
      Italian: "Buona pesca! / Buona fortuna!",
      Japanese: "釣れますように！頑張って！",
      Korean: "잘 잡으세요! 행운을 빌어요!",
    },
  },
];

// ─── Species Names ──────────────────────────────────────────────────────────

const SPECIES: Array<{
  en: string;
  note: string;
  translations: Record<string, string>;
}> = [
  {
    en: "Roosterfish",
    note: "The icon of Cabo Pulmo — named for its dramatic dorsal spines",
    translations: {
      Spanish: "Pez gallo",
      Portuguese: "Peixe-galo",
      French: "Poisson coq",
      German: "Hahnenfisch",
      Italian: "Pesce gallo",
      Japanese: "ルースターフィッシュ",
      Korean: "루스터피시",
    },
  },
  {
    en: "Blue Marlin",
    note: "Offshore prize — up to 500+ lbs in the Sea of Cortez",
    translations: {
      Spanish: "Marlín azul",
      Portuguese: "Marlim azul",
      French: "Marlin bleu",
      German: "Blauer Marlin",
      Italian: "Marlin blu",
      Japanese: "クロカジキ",
      Korean: "블루 말린",
    },
  },
  {
    en: "Sailfish",
    note: "Named for the enormous dorsal sail — one of the ocean's fastest swimmers",
    translations: {
      Spanish: "Pez vela",
      Portuguese: "Peixe-vela",
      French: "Voilier",
      German: "Fächerfisch / Segelmarlin",
      Italian: "Pesce vela",
      Japanese: "バショウカジキ",
      Korean: "돛새치",
    },
  },
  {
    en: "Dorado / Mahi-Mahi",
    note: "Golden fish on fly — excellent table fare",
    translations: {
      Spanish: "Dorado",
      Portuguese: "Dourado / Mahi-mahi",
      French: "Dorade coryphène",
      German: "Goldmakrele / Mahi-Mahi",
      Italian: "Lampuga / Mahi-mahi",
      Japanese: "シイラ",
      Korean: "도라도 / 만새기",
    },
  },
  {
    en: "Yellowfin Tuna",
    note: "Can reach 200+ lbs offshore — schooling fish on the banks",
    translations: {
      Spanish: "Atún de aleta amarilla / Atún",
      Portuguese: "Atum-de-barbatana-amarela",
      French: "Thon à nageoires jaunes",
      German: "Gelbflossen-Thunfisch",
      Italian: "Tonno pinna gialla",
      Japanese: "キハダマグロ",
      Korean: "황다랑어",
    },
  },
  {
    en: "Wahoo / Peto",
    note: "The fastest fish in the ocean — up to 60 mph; called 'peto' in Baja",
    translations: {
      Spanish: "Wahoo / Peto",
      Portuguese: "Wahoo / Cavala-da-índia",
      French: "Thazard-bâtard",
      German: "Wahoo",
      Italian: "Wahoo",
      Japanese: "カマスサワラ",
      Korean: "와후",
    },
  },
  {
    en: "Jack Crevalle",
    note: "Pound for pound one of the hardest fighters on light tackle",
    translations: {
      Spanish: "Jurel",
      Portuguese: "Xaréu",
      French: "Carangue crevalle",
      German: "Großaugen-Stachelmakrele",
      Italian: "Carangide crevalle",
      Japanese: "ギンガメアジ",
      Korean: "잭 크레밸리",
    },
  },
  {
    en: "Snapper",
    note: "General term — multiple inshore species on rocky points",
    translations: {
      Spanish: "Pargo",
      Portuguese: "Pargo",
      French: "Vivaneau",
      German: "Schnapper",
      Italian: "Lutianide / Pargo",
      Japanese: "フエダイ",
      Korean: "도미류",
    },
  },
  {
    en: "Sierra Mackerel",
    note: "Fast, toothy inshore species — great on light tackle",
    translations: {
      Spanish: "Sierra",
      Portuguese: "Serra",
      French: "Maquereau sierra",
      German: "Sierra-Makrele",
      Italian: "Sgombro sierra",
      Japanese: "シエラマカレル",
      Korean: "시에라 고등어",
    },
  },
  {
    en: "Striped Marlin",
    note: "Common in spring, spectacular jumper on light tackle",
    translations: {
      Spanish: "Marlín rayado",
      Portuguese: "Marlim-listrado",
      French: "Marlin rayé",
      German: "Gestreifter Marlin",
      Italian: "Marlin striato",
      Japanese: "マカジキ",
      Korean: "줄무늬 말린",
    },
  },
];

// ─── Cultural Notes ─────────────────────────────────────────────────────────

const CULTURE_NOTES = [
  {
    heading: "¡Ahí va! — The Universal Strike Call",
    body: "In Mexico, '¡Ahí va!' (literally 'there it goes') is the exclamation that fires the moment a fish strikes. You'll hear it before you feel the hit. React immediately — in Baja, the captain calls it and the mate expects you to already be reaching for the rod.",
    langs: ["Spanish"],
  },
  {
    heading: "The Panga and Its Crew",
    body: "La panga is the fiberglass skiff that works the inshore and nearshore waters of Mexico. Every crew is typically a captain (el capitán) and a mate (el marinero). Addressing them by name and greeting them properly — 'Buenos días, ¿cómo están?' — sets the tone for the whole day.",
    langs: ["Spanish"],
  },
  {
    heading: "La propina — The Tip as Livelihood",
    body: "In Mexican fishing culture, the base charter fee goes to the boat operation. The tip (la propina) is what the captain and mate take home. '$50–100 USD for a full day' is not a guideline — it is a meaningful contribution to their family's income. This is the single most important cultural gesture of a fishing trip in Baja.",
    langs: ["Spanish"],
  },
  {
    heading: "Suéltalo — The Release Ethic",
    body: "'¡Suéltalo!' means 'let it go / release it.' Catch-and-release for billfish is the standard on the East Cape — marlin and sailfish are almost never kept. When the captain calls 'suéltalo' it is not a request. It is the right call and the culture of responsible fishing here.",
    langs: ["Spanish"],
  },
  {
    heading: "Los pájaros — The Bird Signal",
    body: "When your captain says '¿Ves los pájaros?' — 'do you see the birds?' — he is watching for frigatebirds and blue-footed boobies diving. Birds diving means baitfish being driven to the surface, which means larger predators below. This is how captains find fish before you see them on the surface.",
    langs: ["Spanish"],
  },
  {
    heading: "Agua azul vs. agua verde",
    body: "'Agua azul' (blue water) is offshore pelagic water — warm, deep, clear, where marlin, wahoo, and tuna live. 'Agua verde' (green water) is productive inshore water — cooler, nutrient-rich, where roosterfish and snapper concentrate. Your captain reads color breaks constantly; these are his landmarks.",
    langs: ["Spanish"],
  },
];

// ─── Dock Travel Phrases ────────────────────────────────────────────────────

const TRAVEL_PHRASES: Array<{ en: string; translations: Record<string, string> }> = [
  {
    en: "Good morning — what time do we leave?",
    translations: {
      Spanish: "Buenos días — ¿a qué hora salimos?",
      Portuguese: "Bom dia — a que horas saímos?",
      French: "Bonjour — à quelle heure on part ?",
      German: "Guten Morgen — um wie viel Uhr fahren wir los?",
      Italian: "Buongiorno — a che ora partiamo?",
      Japanese: "おはようございます — 何時に出発しますか？",
      Korean: "좋은 아침이에요 — 몇 시에 출발해요?",
    },
  },
  {
    en: "Where is the best fishing today?",
    translations: {
      Spanish: "¿Dónde está el mejor pescado hoy?",
      Portuguese: "Onde está o melhor peixe hoje?",
      French: "Où est le meilleur poisson aujourd'hui ?",
      German: "Wo fischt es sich heute am besten?",
      Italian: "Dove si pesca meglio oggi?",
      Japanese: "今日はどこが一番釣れますか？",
      Korean: "오늘 어디가 제일 잘 잡혀요?",
    },
  },
  {
    en: "I am prone to seasickness.",
    translations: {
      Spanish: "Me mareo en el mar fácilmente.",
      Portuguese: "Eu enjoo no mar facilmente.",
      French: "J'ai facilement le mal de mer.",
      German: "Ich werde leicht seekrank.",
      Italian: "Mi viene facilmente il mal di mare.",
      Japanese: "船酔いしやすいです。",
      Korean: "저는 배멀미를 잘 해요.",
    },
  },
  {
    en: "Can I use my own fly?",
    translations: {
      Spanish: "¿Puedo usar mi propia mosca?",
      Portuguese: "Posso usar minha própria isca artificial?",
      French: "Puis-je utiliser ma propre mouche ?",
      German: "Darf ich meine eigene Fliege benutzen?",
      Italian: "Posso usare la mia mosca?",
      Japanese: "自分のフライを使ってもいいですか？",
      Korean: "제 플라이를 써도 되나요?",
    },
  },
  {
    en: "How far offshore are we going?",
    translations: {
      Spanish: "¿A cuánto mar adentro vamos?",
      Portuguese: "Quão longe ao mar vamos?",
      French: "On va jusqu'à quelle distance au large ?",
      German: "Wie weit fahren wir raus?",
      Italian: "Quanto andiamo al largo?",
      Japanese: "どのくらい沖まで行きますか？",
      Korean: "얼마나 먼 바다로 나가요?",
    },
  },
  {
    en: "Thank you — it was an incredible day.",
    translations: {
      Spanish: "Muchas gracias — fue un día increíble.",
      Portuguese: "Muito obrigado — foi um dia incrível.",
      French: "Merci beaucoup — c'était une journée incroyable.",
      German: "Vielen Dank — es war ein unglaublicher Tag.",
      Italian: "Grazie mille — è stata una giornata incredibile.",
      Japanese: "ありがとうございました — 信じられない一日でした。",
      Korean: "정말 감사해요 — 믿을 수 없는 하루였어요.",
    },
  },
];

// ─── Component ──────────────────────────────────────────────────────────────

export function FishingHome() {
  const { state } = useApp();
  const lang = state.selectedLanguage;
  const [sub, setSub] = useState<SubTab>("guide");

  return (
    <div className="flex h-full flex-col overflow-hidden">
      {/* Header */}
      <div className="border-b border-border/60 bg-card/30 px-6 py-4 backdrop-blur shrink-0">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-2xl">🎣</span>
          <div>
            <h2 className="text-sm font-bold text-white">Sport Fishing</h2>
            <p className="text-xs text-white/40">
              Boat Commands · Species · Culture · Dock Phrases · Study Guide
            </p>
          </div>
        </div>
        <div className="flex gap-1 overflow-x-auto scrollbar-none">
          {SUB_TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setSub(t.id)}
              className={`shrink-0 flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg transition-colors ${
                sub === t.id
                  ? "bg-[#0a9e78]/15 text-[#0fd99c] border border-[#0fd99c]/30"
                  : "text-white/40 hover:text-white/70 hover:bg-white/[0.04]"
              }`}
            >
              <span>{t.emoji}</span>
              <span>{t.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto min-h-0">
        {sub === "guide" && (
          <ModuleStudyGuide />
        )}

        {sub === "boat" && (
          <div className="p-6 space-y-3 max-w-3xl">
            <p className="text-xs text-white/40 mb-4 leading-relaxed">
              Commands used by captains and mates in {lang}. React to these the moment you hear them.
            </p>
            {BOAT_COMMANDS.map((cmd) => (
              <div
                key={cmd.en}
                className="bg-card/40 border border-border/60 rounded-lg p-4 grid grid-cols-1 sm:grid-cols-2 gap-2"
              >
                <div className="text-white/50 text-xs leading-snug">{cmd.en}</div>
                <div className="text-[#0fd99c] font-semibold text-sm">
                  {cmd.translations[lang] ?? cmd.translations["Spanish"] ?? cmd.en}
                </div>
              </div>
            ))}
          </div>
        )}

        {sub === "species" && (
          <div className="p-6 space-y-3 max-w-3xl">
            <p className="text-xs text-white/40 mb-4 leading-relaxed">
              Target species names in {lang}. Learning to name the fish earns instant respect from your crew.
            </p>
            {SPECIES.map((sp) => (
              <div
                key={sp.en}
                className="bg-card/40 border border-border/60 rounded-lg p-4"
              >
                <div className="flex items-start justify-between gap-4 mb-1">
                  <div className="text-white font-semibold text-sm">{sp.en}</div>
                  <div className="text-[#0fd99c] font-bold text-sm shrink-0">
                    {sp.translations[lang] ?? sp.translations["Spanish"] ?? sp.en}
                  </div>
                </div>
                <p className="text-white/35 text-xs leading-relaxed">{sp.note}</p>
              </div>
            ))}
          </div>
        )}

        {sub === "culture" && (
          <div className="p-6 space-y-4 max-w-3xl">
            <p className="text-xs text-white/40 mb-4 leading-relaxed">
              Cultural context makes the difference between a tourist and an angler the crew respects.
            </p>
            {CULTURE_NOTES.map((note) => (
              <div
                key={note.heading}
                className="bg-card/40 border border-border/60 rounded-lg p-5"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0fd99c] shrink-0" />
                  <h3 className="text-white font-semibold text-sm">{note.heading}</h3>
                </div>
                <p className="text-white/55 text-xs leading-relaxed">{note.body}</p>
              </div>
            ))}
          </div>
        )}

        {sub === "travel" && (
          <div className="p-6 space-y-3 max-w-3xl">
            <p className="text-xs text-white/40 mb-4 leading-relaxed">
              Phrases for arrival, departure, and connecting with your fishing crew in {lang}.
            </p>
            {TRAVEL_PHRASES.map((phrase) => (
              <div
                key={phrase.en}
                className="bg-card/40 border border-border/60 rounded-lg p-4 grid grid-cols-1 sm:grid-cols-2 gap-2"
              >
                <div className="text-white/50 text-xs leading-snug">{phrase.en}</div>
                <div className="text-[#0fd99c] font-semibold text-sm">
                  {phrase.translations[lang] ?? phrase.translations["Spanish"] ?? phrase.en}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
