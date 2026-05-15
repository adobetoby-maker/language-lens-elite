import { useApp } from "@/state/app-state";

interface Phrase {
  en: string;
  translations: Record<string, string>;
  category: "emergency" | "pain" | "describe" | "hospital";
}

const PHRASES: Phrase[] = [
  // Emergency
  { en: "I need help.", category: "emergency", translations: { Spanish: "Necesito ayuda.", Portuguese: "Preciso de ajuda.", French: "J'ai besoin d'aide.", German: "Ich brauche Hilfe.", Italian: "Ho bisogno di aiuto.", Japanese: "助けが必要です。", Korean: "도움이 필요해요." } },
  { en: "Call emergency services.", category: "emergency", translations: { Spanish: "Llama a emergencias.", Portuguese: "Chame o socorro.", French: "Appelez les secours.", German: "Rufen Sie den Notarzt.", Italian: "Chiama i soccorsi.", Japanese: "救急を呼んでください。", Korean: "응급 서비스를 불러주세요." } },
  { en: "There has been a fall.", category: "emergency", translations: { Spanish: "Hubo una caída.", Portuguese: "Houve uma queda.", French: "Il y a eu une chute.", German: "Es gab einen Sturz.", Italian: "C'è stata una caduta.", Japanese: "墜落がありました。", Korean: "추락 사고가 있었습니다." } },
  { en: "We are at [location / crag name].", category: "emergency", translations: { Spanish: "Estamos en [ubicación / nombre del sector].", Portuguese: "Estamos em [localização / nome da pedra].", French: "Nous sommes à [lieu / nom de la falaise].", German: "Wir sind bei [Ort / Felsname].", Italian: "Siamo a [posizione / nome della falesia].", Japanese: "[場所/クライミングエリア名]にいます。", Korean: "[위치/암장 이름]에 있습니다." } },

  // Pain & location
  { en: "Where does it hurt?", category: "pain", translations: { Spanish: "¿Dónde te duele?", Portuguese: "Onde dói?", French: "Où as-tu mal ?", German: "Wo tut es weh?", Italian: "Dove ti fa male?", Japanese: "どこが痛いですか？", Korean: "어디가 아파요?" } },
  { en: "It hurts here.", category: "pain", translations: { Spanish: "Me duele aquí.", Portuguese: "Dói aqui.", French: "Ça fait mal ici.", German: "Hier tut es weh.", Italian: "Fa male qui.", Japanese: "ここが痛いです。", Korean: "여기가 아파요." } },
  { en: "My finger / wrist / shoulder hurts.", category: "pain", translations: { Spanish: "Me duele el dedo / la muñeca / el hombro.", Portuguese: "Me dói o dedo / o pulso / o ombro.", French: "J'ai mal au doigt / au poignet / à l'épaule.", German: "Mein Finger / Handgelenk / Schulter tut weh.", Italian: "Mi fa male il dito / il polso / la spalla.", Japanese: "指/手首/肩が痛いです。", Korean: "손가락/손목/어깨가 아파요." } },
  { en: "The pain is sharp / dull / constant.", category: "pain", translations: { Spanish: "El dolor es agudo / sordo / constante.", Portuguese: "A dor é aguda / surda / constante.", French: "La douleur est aiguë / sourde / constante.", German: "Der Schmerz ist scharf / dumpf / anhaltend.", Italian: "Il dolore è acuto / sordo / costante.", Japanese: "痛みは鋭い/鈍い/持続的です。", Korean: "통증이 날카롭다/둔하다/지속적이다." } },

  // Describe injury
  { en: "I fell and hurt my ankle.", category: "describe", translations: { Spanish: "Me caí y me lastimé el tobillo.", Portuguese: "Caí e machuquei o tornozelo.", French: "Je suis tombé et je me suis blessé à la cheville.", German: "Ich bin gestürzt und habe mich am Knöchel verletzt.", Italian: "Sono caduto e mi sono fatto male alla caviglia.", Japanese: "転んで足首を痛めました。", Korean: "떨어져서 발목을 다쳤어요." } },
  { en: "I can't move my arm / leg.", category: "describe", translations: { Spanish: "No puedo mover el brazo / la pierna.", Portuguese: "Não consigo mover o braço / a perna.", French: "Je ne peux pas bouger le bras / la jambe.", German: "Ich kann meinen Arm / mein Bein nicht bewegen.", Italian: "Non riesco a muovere il braccio / la gamba.", Japanese: "腕/足が動かせません。", Korean: "팔/다리를 움직일 수 없어요." } },
  { en: "I think I have a broken bone.", category: "describe", translations: { Spanish: "Creo que tengo un hueso roto.", Portuguese: "Acho que tenho um osso fraturado.", French: "Je crois que j'ai un os cassé.", German: "Ich glaube, ich habe einen Knochenbruch.", Italian: "Credo di avere un osso rotto.", Japanese: "骨折したと思います。", Korean: "뼈가 부러진 것 같아요." } },
  { en: "I am allergic to [medication].", category: "describe", translations: { Spanish: "Soy alérgico/a a [medicamento].", Portuguese: "Sou alérgico/a a [medicamento].", French: "Je suis allergique à [médicament].", German: "Ich bin allergisch gegen [Medikament].", Italian: "Sono allergico/a a [farmaco].", Japanese: "[薬]にアレルギーがあります。", Korean: "[약]에 알레르기가 있어요." } },

  // Hospital / clinic
  { en: "Is there a hospital nearby?", category: "hospital", translations: { Spanish: "¿Hay un hospital cerca?", Portuguese: "Há hospital perto?", French: "Y a-t-il un hôpital à proximité ?", German: "Gibt es ein Krankenhaus in der Nähe?", Italian: "C'è un ospedale vicino?", Japanese: "近くに病院はありますか？", Korean: "근처에 병원이 있나요?" } },
  { en: "I need a doctor.", category: "hospital", translations: { Spanish: "Necesito un médico.", Portuguese: "Preciso de um médico.", French: "J'ai besoin d'un médecin.", German: "Ich brauche einen Arzt.", Italian: "Ho bisogno di un medico.", Japanese: "医者が必要です。", Korean: "의사가 필요해요." } },
  { en: "Do you have travel insurance?", category: "hospital", translations: { Spanish: "¿Tienes seguro de viaje?", Portuguese: "Você tem seguro viagem?", French: "Tu as une assurance voyage ?", German: "Haben Sie eine Reiseversicherung?", Italian: "Hai un'assicurazione di viaggio?", Japanese: "旅行保険はありますか？", Korean: "여행 보험이 있나요?" } },
];

const CAT_LABELS: Record<Phrase["category"], string> = {
  emergency: "Emergency",
  pain: "Locating Pain",
  describe: "Describing the Injury",
  hospital: "At the Clinic",
};

const CAT_COLORS: Record<Phrase["category"], string> = {
  emergency: "text-red-400 bg-red-400/10 border-red-400/20",
  pain: "text-amber-400 bg-amber-400/10 border-amber-400/20",
  describe: "text-sky-400 bg-sky-400/10 border-sky-400/20",
  hospital: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
};

export function ClimbingMedical() {
  const { state } = useApp();
  const lang = state.selectedLanguage;

  const categories = (["emergency", "pain", "describe", "hospital"] as const);

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-bold text-white mb-1">Medical & Emergency Phrases</h3>
        <p className="text-white/40 text-sm">
          Calling for help, locating pain, describing injuries, and navigating a clinic abroad.
          Shared vocabulary with the Orthopedics module.
        </p>
      </div>

      {categories.map(cat => {
        const catPhrases = PHRASES.filter(p => p.category === cat);
        return (
          <div key={cat}>
            <div className={`inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full border mb-4 ${CAT_COLORS[cat]}`}>
              {cat === "emergency" && "🚨"}
              {cat === "pain" && "🤕"}
              {cat === "describe" && "📋"}
              {cat === "hospital" && "🏥"}
              {CAT_LABELS[cat]}
            </div>
            <div className="space-y-2">
              {catPhrases.map((phrase, i) => {
                const translation = phrase.translations[lang] ?? phrase.translations["Spanish"];
                return (
                  <div key={i} className="bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3">
                    <p className="text-white text-sm font-medium">{phrase.en}</p>
                    <p className="text-white/60 text-sm mt-1">{translation}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      <div className="bg-[#E8A020]/5 border border-[#E8A020]/20 rounded-xl p-4 text-sm text-white/60">
        <span className="text-[#E8A020] font-semibold">Tip: </span>
        Save a photo of the emergency phrases in the local language before you approach the crag.
        Cell service is often unavailable at the base.
      </div>
    </div>
  );
}
