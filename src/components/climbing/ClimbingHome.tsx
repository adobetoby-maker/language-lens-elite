import { useState } from "react";
import { useApp } from "@/state/app-state";
import { ModuleStudyGuide } from "@/components/modules/ModuleStudyGuide";
import { GearPhotoMatch } from "./GearPhotoMatch";
import { CommandCards } from "./CommandCards";
import { ClimbingMedical } from "./ClimbingMedical";

type SubTab = "guide" | "gear" | "commands" | "medical" | "travel";

const SUB_TABS: { id: SubTab; label: string; emoji: string }[] = [
  { id: "guide",    label: "Study Guide",  emoji: "📋" },
  { id: "gear",     label: "Gear Match",   emoji: "🔗" },
  { id: "commands", label: "Commands",     emoji: "📣" },
  { id: "medical",  label: "Medical",      emoji: "🩺" },
  { id: "travel",   label: "At the Crag",  emoji: "🗺️" },
];

const TRAVEL_PHRASES: Array<{ en: string; translations: Record<string, string> }> = [
  { en: "Where is the crag?", translations: { Spanish: "¿Dónde está el sector?", Portuguese: "Onde fica o paredão?", French: "Où est la falaise ?", German: "Wo ist der Fels?", Italian: "Dov'è la falesia?", Japanese: "岩場はどこですか？", Korean: "암장이 어디에 있나요?" } },
  { en: "How long is the approach?", translations: { Spanish: "¿Cuánto tiempo de aproximación?", Portuguese: "Quanto tempo de aproximação?", French: "Combien de temps d'approche ?", German: "Wie lang ist der Zustieg?", Italian: "Quanto è lunga l'avvicinamento?", Japanese: "アプローチはどのくらいかかりますか？", Korean: "어프로치가 얼마나 걸려요?" } },
  { en: "Is this route bolted?", translations: { Spanish: "¿Está equipada esta vía?", Portuguese: "Esta via tem grampos?", French: "Cette voie est-elle équipée ?", German: "Ist diese Route gebohrt?", Italian: "Questa via è attrezzata?", Japanese: "このルートはボルト打ちですか？", Korean: "이 루트는 볼트 루트인가요?" } },
  { en: "Can I rent gear here?", translations: { Spanish: "¿Puedo alquilar equipo aquí?", Portuguese: "Posso alugar equipamento aqui?", French: "Puis-je louer du matériel ici ?", German: "Kann ich hier Ausrüstung leihen?", Italian: "Posso noleggiare l'attrezzatura qui?", Japanese: "ここで装備を借りられますか？", Korean: "여기서 장비를 빌릴 수 있나요?" } },
  { en: "What is the grade of this route?", translations: { Spanish: "¿Cuál es el grado de esta vía?", Portuguese: "Qual é a graduação desta via?", French: "Quel est le grade de cette voie ?", German: "Was ist der Schwierigkeitsgrad dieser Route?", Italian: "Qual è il grado di questa via?", Japanese: "このルートのグレードは何ですか？", Korean: "이 루트의 등급이 뭐예요?" } },
  { en: "Are the bolts safe?", translations: { Spanish: "¿Los parabolts están en buen estado?", Portuguese: "Os grampos estão seguros?", French: "Les spits sont-ils en bon état ?", German: "Sind die Haken sicher?", Italian: "I fix sono sicuri?", Japanese: "ボルトは安全ですか？", Korean: "볼트가 안전한가요?" } },
  { en: "We need to descend before dark.", translations: { Spanish: "Necesitamos bajar antes de que oscurezca.", Portuguese: "Precisamos descer antes de escurecer.", French: "On doit descendre avant la nuit.", German: "Wir müssen vor dem Dunkelwerden absteigen.", Italian: "Dobbiamo scendere prima che faccia buio.", Japanese: "暗くなる前に下山しなければなりません。", Korean: "어두워지기 전에 내려가야 해요." } },
  { en: "Is there a local guide available?", translations: { Spanish: "¿Hay guía local disponible?", Portuguese: "Tem guia local disponível?", French: "Y a-t-il un guide local disponible ?", German: "Gibt es einen lokalen Führer?", Italian: "C'è una guida locale disponibile?", Japanese: "地元のガイドはいますか？", Korean: "현지 가이드가 있나요?" } },
  { en: "Where can I buy chalk?", translations: { Spanish: "¿Dónde puedo comprar magnesio?", Portuguese: "Onde posso comprar magnésio?", French: "Où puis-je acheter de la magnésie ?", German: "Wo kann ich Magnesia kaufen?", Italian: "Dove posso comprare la magnesite?", Japanese: "チョークはどこで買えますか？", Korean: "초크는 어디서 살 수 있나요?" } },
  { en: "Is there shade in the afternoon?", translations: { Spanish: "¿Hay sombra por la tarde?", Portuguese: "Tem sombra à tarde?", French: "Y a-t-il de l'ombre l'après-midi ?", German: "Gibt es nachmittags Schatten?", Italian: "C'è ombra nel pomeriggio?", Japanese: "午後は日陰がありますか？", Korean: "오후에 그늘이 있나요?" } },
];

const KNOT_STEPS: Array<{ step: number; en: string; translations: Record<string, string> }> = [
  { step: 1, en: "Thread the rope through both loops of your harness.", translations: { Spanish: "Pase la cuerda por los dos anillos del arnés.", Portuguese: "Passe a corda pelos dois anéis do arnês.", French: "Passez la corde dans les deux boucles du baudrier.", German: "Führen Sie das Seil durch beide Schlaufen des Klettergurts.", Italian: "Passa la corda attraverso entrambi gli anelli dell'imbrago.", Japanese: "ハーネスの両方のループにロープを通します。", Korean: "하네스의 두 고리에 로프를 통과시킵니다." } },
  { step: 2, en: "Make a loop — leaving about 60 cm of rope free.", translations: { Spanish: "Haz un bucle — dejando unos 60 cm de cuerda libre.", Portuguese: "Faça uma alça — deixando cerca de 60 cm de corda livre.", French: "Faites une boucle — en laissant environ 60 cm de corde libre.", German: "Machen Sie eine Schlaufe — und lassen Sie ca. 60 cm Seil frei.", Italian: "Fai un cappio — lasciando circa 60 cm di corda libera.", Japanese: "ループを作ります — 約60cmのロープを残します。", Korean: "루프를 만들고 약 60cm의 로프를 여유있게 남깁니다." } },
  { step: 3, en: "Pass the free end through the loop twice — forming a figure eight.", translations: { Spanish: "Pase el extremo libre por el bucle dos veces — formando un ocho.", Portuguese: "Passe a ponta livre pela alça duas vezes — formando um nó oito.", French: "Passez le bout libre dans la boucle deux fois — pour former un huit.", German: "Führen Sie das freie Ende zweimal durch die Schlaufe — um eine Acht zu formen.", Italian: "Passa l'estremità libera nel cappio due volte — formando un otto.", Japanese: "フリーエンドをループに2回通します — 8の字を作ります。", Korean: "자유 끝을 루프에 두 번 통과시킵니다 — 8자 모양을 만듭니다." } },
  { step: 4, en: "Retrace the eight back through both harness loops exactly.", translations: { Spanish: "Rehaz el ocho exactamente por los dos anillos del arnés.", Portuguese: "Refaça o oito pelos dois anéis do arnês exatamente.", French: "Refaites le huit exactement dans les deux boucles du baudrier.", German: "Verfolgen Sie die Acht genau durch beide Gurtschlaufen zurück.", Italian: "Ritracciate l'otto esattamente attraverso i due anelli dell'imbrago.", Japanese: "ハーネスの両ループを通って8の字を正確にたどり直します。", Korean: "하네스의 두 고리를 통해 8자를 정확히 되돌아갑니다." } },
  { step: 5, en: "Dress the knot — all strands parallel, no twists.", translations: { Spanish: "Ajusta el nudo — todas las partes paralelas, sin torsiones.", Portuguese: "Ajuste o nó — todas as partes paralelas, sem torções.", French: "Arrangez le nœud — tous les brins parallèles, sans torsion.", German: "Richten Sie den Knoten aus — alle Stränge parallel, keine Drehungen.", Italian: "Sistema il nodo — tutti i capi paralleli, senza torsioni.", Japanese: "結び目を整えます — すべてのストランドが平行で、ねじれがないように。", Korean: "매듭을 정리합니다 — 모든 가닥이 평행하고 비틀림이 없어야 합니다." } },
  { step: 6, en: "Leave a tail of at least 10 cm. Partner check.", translations: { Spanish: "Deja una cola de al menos 10 cm. Revisión de compañero.", Portuguese: "Deixe uma ponta de pelo menos 10 cm. Revisão do companheiro.", French: "Laissez une queue d'au moins 10 cm. Vérification avec le partenaire.", German: "Lassen Sie einen Schwanz von mindestens 10 cm. Partnercheck.", Italian: "Lascia una coda di almeno 10 cm. Controllo del compagno.", Japanese: "少なくとも10cmの末端を残します。パートナーチェック。", Korean: "최소 10cm의 끝을 남깁니다. 파트너 체크." } },
];

export function ClimbingHome() {
  const { state } = useApp();
  const lang = state.selectedLanguage;
  const [sub, setSub] = useState<SubTab>("guide");

  return (
    <div className="flex h-full flex-col overflow-hidden">
      {/* Header */}
      <div className="border-b border-border/60 bg-card/30 px-6 py-4 backdrop-blur shrink-0">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-2xl">🧗</span>
          <div>
            <h2 className="text-sm font-bold text-white">Rock Climbing</h2>
            <p className="text-xs text-white/40">Gear · Commands · Knots · Movement · Medical · Travel</p>
          </div>
        </div>
        {/* Sub-tabs */}
        <div className="flex gap-1 overflow-x-auto scrollbar-none">
          {SUB_TABS.map(t => (
            <button
              key={t.id}
              onClick={() => setSub(t.id)}
              className={`shrink-0 flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg transition-colors ${
                sub === t.id
                  ? "bg-[#E8A020]/15 text-[#E8A020] border border-[#E8A020]/30"
                  : "text-white/40 hover:text-white/70 hover:bg-white/[0.04]"
              }`}
            >
              <span>{t.emoji}</span>
              <span className="hidden sm:inline">{t.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        {sub === "guide" && (
          <ModuleStudyGuide />
        )}

        {sub === "gear" && (
          <div className="max-w-lg mx-auto">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-white mb-1">Gear Photo Match</h3>
              <p className="text-white/40 text-sm">
                Identify the gear in the photo — in {lang}.
              </p>
            </div>
            <GearPhotoMatch />
          </div>
        )}

        {sub === "commands" && (
          <div className="max-w-2xl mx-auto">
            <CommandCards />
          </div>
        )}

        {sub === "medical" && (
          <div className="max-w-2xl mx-auto">
            <ClimbingMedical />
          </div>
        )}

        {sub === "travel" && (
          <div className="max-w-2xl mx-auto space-y-8">
            {/* Knot instructions */}
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Tying the Figure-Eight</h3>
              <p className="text-white/40 text-sm mb-5">
                Step-by-step knot instructions in {lang} — for teaching or learning at the crag.
              </p>
              <div className="space-y-3">
                {KNOT_STEPS.map(s => (
                  <div key={s.step} className="flex gap-4 bg-white/[0.03] rounded-xl p-4 border border-white/[0.06]">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-[#E8A020]/20 border border-[#E8A020]/40 flex items-center justify-center text-[#E8A020] text-sm font-bold">
                      {s.step}
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">{s.en}</p>
                      <p className="text-white/60 text-sm mt-0.5">{s.translations[lang] ?? s.translations["Spanish"]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Crag phrases */}
            <div>
              <h3 className="text-lg font-bold text-white mb-1">At the Crag</h3>
              <p className="text-white/40 text-sm mb-5">
                Practical phrases for arrival, logistics, and communicating with locals.
              </p>
              <div className="space-y-2">
                {TRAVEL_PHRASES.map((p, i) => (
                  <div key={i} className="bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3">
                    <p className="text-white text-sm font-medium">{p.en}</p>
                    <p className="text-white/60 text-sm mt-0.5">{p.translations[lang] ?? p.translations["Spanish"]}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Destination guides */}
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-wider text-white/30 mb-3">Plan your trip</p>
              {[
                { label: 'Climbing in Brazil', color: '#E8A020', href: 'https://climbbrasil.com/learn', site: 'climbbrasil.com' },
                { label: 'Climbing in Kalymnos', color: '#1B74C8', href: 'https://climb-kalymnos.vercel.app/learn', site: 'climb-kalymnos' },
                { label: 'Climbing in Spain', color: '#C41E3A', href: 'https://climb-spain.vercel.app/learn', site: 'climb-spain' },
                { label: 'Climbing in Utah', color: '#D4721F', href: 'https://climb-utah.vercel.app/learn', site: 'climb-utah' },
              ].map(({ label, color, href, site }) => (
                <a
                  key={site}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3 hover:bg-white/[0.06] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: color }} />
                    <span className="text-sm text-white/70 group-hover:text-white/90 transition-colors">{label}</span>
                  </div>
                  <span className="text-xs text-white/30 group-hover:text-white/50 transition-colors shrink-0">phrase guide →</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
