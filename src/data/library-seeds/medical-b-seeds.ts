import type { LibrarySeed } from "./_types";

export const MEDICAL_B_SEEDS: LibrarySeed[] = [
  // ── EMERGENCY MEDICINE ───────────────────────────────────────────────────

  // Spanish — ER triage / trauma handoff
  {
    id: "seed-es-em-triage",
    title: "Medicina de Emergencias",
    subtitle: "Triaje y evaluación de trauma",
    language: "Spanish",
    targetLabel: "Español",
    flag: "🇲🇽",
    section: "culture",
    available: true,
    level: "C1",
    sentences: [
      {
        en: "I need you to assess this patient immediately — he arrived by ambulance with a penetrating chest wound.",
        target:
          "Necesito que evalúes a este paciente de inmediato — llegó en ambulancia con una herida penetrante en el pecho.",
      },
      {
        en: "What is your name? Can you tell me what happened to you?",
        target: "¿Cuál es su nombre? ¿Puede decirme qué le ocurrió?",
      },
      {
        en: "His airway is compromised — prepare for rapid sequence intubation now.",
        target:
          "La vía aérea está comprometida — preparen la intubación de secuencia rápida ahora.",
      },
      {
        en: "Blood pressure is 80 over 50 — this patient is in hemorrhagic shock.",
        target: "La presión arterial es 80 sobre 50 — este paciente está en choque hemorrágico.",
      },
      {
        en: "Open two large-bore IV lines and start a one-liter bolus of normal saline.",
        target:
          "Abran dos vías IV de grueso calibre e inicien un bolo de un litro de solución salina normal.",
      },
      {
        en: "I'm ordering a trauma panel — CBC, metabolic panel, type and cross, coagulation studies, and a portable chest X-ray.",
        target:
          "Estoy ordenando un panel de trauma: biometría hemática, panel metabólico, tipo y pruebas cruzadas, estudios de coagulación y una radiografía portátil de tórax.",
      },
      {
        en: "Call the trauma surgeon on call — this patient needs the OR within the hour.",
        target:
          "Llamen al cirujano de trauma de guardia — este paciente necesita el quirófano en menos de una hora.",
      },
      {
        en: "Can you feel pain here, in your abdomen? Does the pain radiate to your shoulder?",
        target: "¿Siente dolor aquí, en el abdomen? ¿El dolor se irradia hacia el hombro?",
      },
      {
        en: "We are going to stabilize you and take you to surgery. You are in good hands.",
        target: "Vamos a estabilizarlo y llevarlo a cirugía. Está en buenas manos.",
      },
      {
        en: "Nurse, monitor his oxygen saturation continuously and alert me if it drops below 92 percent.",
        target:
          "Enfermera, monitoree su saturación de oxígeno de forma continua y avíseme si cae por debajo del 92 por ciento.",
      },
    ],
  },

  // French — ER resuscitation / code
  {
    id: "seed-fr-em-resus",
    title: "Médecine d'Urgence",
    subtitle: "Réanimation et code",
    language: "French",
    targetLabel: "Français",
    flag: "🇫🇷",
    section: "culture",
    available: true,
    level: "C1",
    sentences: [
      {
        en: "We have a cardiac arrest — begin CPR immediately and call a code.",
        target:
          "Nous avons un arrêt cardiaque — commencez la RCP immédiatement et déclarez un code.",
      },
      {
        en: "The rhythm on the monitor shows ventricular fibrillation — charge the defibrillator to 200 joules.",
        target:
          "Le rythme sur le moniteur montre une fibrillation ventriculaire — chargez le défibrillateur à 200 joules.",
      },
      {
        en: "Everyone clear! Delivering the shock now.",
        target: "Tout le monde s'écarte ! Choc en cours.",
      },
      {
        en: "Resume compressions immediately after the shock — do not stop for more than five seconds.",
        target:
          "Reprenez les compressions immédiatement après le choc — ne vous arrêtez pas plus de cinq secondes.",
      },
      {
        en: "Give one milligram of epinephrine IV every three to five minutes.",
        target:
          "Administrez un milligramme d'épinéphrine par voie intraveineuse toutes les trois à cinq minutes.",
      },
      {
        en: "What time did the arrest occur? We need to document the timeline precisely.",
        target:
          "À quelle heure l'arrêt s'est-il produit ? Nous devons documenter la chronologie avec précision.",
      },
      {
        en: "We have return of spontaneous circulation — I can feel a pulse. Stop compressions.",
        target:
          "Nous avons une reprise de la circulation spontanée — je perçois un pouls. Arrêtez les compressions.",
      },
      {
        en: "Transfer this patient to the ICU for post-resuscitation care and therapeutic hypothermia protocol.",
        target:
          "Transférez ce patient en réanimation pour les soins post-réanimation et le protocole d'hypothermie thérapeutique.",
      },
      {
        en: "I need to speak with the family — please bring them to the family room.",
        target: "Je dois parler à la famille — veuillez les amener dans la salle familiale.",
      },
      {
        en: "Your family member's heart stopped and we worked very hard to bring it back. The next 24 hours will be critical.",
        target:
          "Le cœur de votre proche s'est arrêté et nous avons fait tout notre possible pour le relancer. Les 24 prochaines heures seront déterminantes.",
      },
    ],
  },

  // German — ER airway / shock management
  {
    id: "seed-de-em-airway",
    title: "Notaufnahme",
    subtitle: "Atemwegsmanagement und Schockversorgung",
    language: "German",
    targetLabel: "Deutsch",
    flag: "🇩🇪",
    section: "culture",
    available: true,
    level: "C1",
    sentences: [
      {
        en: "This patient's airway is at risk — I need suction, a laryngoscope, and an ETT size 7.5, please.",
        target:
          "Der Atemweg dieses Patienten ist gefährdet — ich benötige bitte Absaugung, ein Laryngoskop und einen Tubus Größe 7,5.",
      },
      {
        en: "Please pre-oxygenate with 100 percent oxygen for three minutes before we intubate.",
        target:
          "Bitte präoxygenieren Sie den Patienten drei Minuten lang mit 100 Prozent Sauerstoff, bevor wir intubieren.",
      },
      {
        en: "I am administering ketamine for sedation and rocuronium for paralysis.",
        target: "Ich verabreiche Ketamin zur Sedierung und Rocuronium zur Relaxierung.",
      },
      {
        en: "The tube is in — confirm placement with capnography and auscultation.",
        target: "Der Tubus liegt — bitte Lage mit Kapnografie und Auskultation bestätigen.",
      },
      {
        en: "His blood pressure remains critically low despite two liters of fluid. Initiate a norepinephrine infusion.",
        target:
          "Sein Blutdruck bleibt trotz zwei Litern Flüssigkeit kritisch niedrig. Bitte eine Norepinephrin-Infusion starten.",
      },
      {
        en: "Order an urgent CT of the chest, abdomen, and pelvis to identify the source of bleeding.",
        target:
          "Bitte eine dringende CT-Untersuchung von Thorax, Abdomen und Becken anordnen, um die Blutungsquelle zu finden.",
      },
      {
        en: "Activate the massive transfusion protocol — we need packed red cells, fresh frozen plasma, and platelets in a 1:1:1 ratio.",
        target:
          "Bitte das Massentransfusionsprotokoll aktivieren — wir benötigen Erythrozytenkonzentrat, gefrorenes Frischplasma und Thrombozyten im Verhältnis 1:1:1.",
      },
      {
        en: "Inform the interventional radiology team that we may need emergent embolization.",
        target:
          "Bitte das interventionell-radiologische Team informieren, dass möglicherweise eine Notfallembolisation erforderlich ist.",
      },
      {
        en: "Can you hear me? I am your doctor. You are in the emergency department. We are helping you.",
        target:
          "Können Sie mich hören? Ich bin Ihr Arzt. Sie befinden sich in der Notaufnahme. Wir helfen Ihnen.",
      },
      {
        en: "Document the time of intubation, the medications given, and the tube size in the chart.",
        target:
          "Bitte den Zeitpunkt der Intubation, die verabreichten Medikamente und die Tubusgröße in der Akte dokumentieren.",
      },
    ],
  },

  // Italian — ER critical care / stabilization
  {
    id: "seed-it-em-critical",
    title: "Pronto Soccorso",
    subtitle: "Stabilizzazione del paziente critico",
    language: "Italian",
    targetLabel: "Italiano",
    flag: "🇮🇹",
    section: "culture",
    available: true,
    level: "C1",
    sentences: [
      {
        en: "This patient is critically ill — I need everyone focused and quiet.",
        target:
          "Questo paziente è in condizioni critiche — ho bisogno che tutti siano concentrati e in silenzio.",
      },
      {
        en: "Start a secondary IV line — the first one is for fluids, the second is for medications.",
        target:
          "Aprire un secondo accesso venoso — il primo è per i liquidi, il secondo per i farmaci.",
      },
      {
        en: "His Glasgow Coma Scale score is 8 — we need to protect his airway.",
        target: "Il punteggio della Scala di Glasgow è 8 — dobbiamo proteggere le sue vie aeree.",
      },
      {
        en: "Apply a cervical collar — we cannot rule out a spinal injury until imaging is done.",
        target:
          "Applicare il collare cervicale — non possiamo escludere una lesione spinale finché non si eseguono le immagini.",
      },
      {
        en: "The ECG shows ST elevation in leads II, III, and aVF — this is an inferior MI. Call the cath lab.",
        target:
          "L'ECG mostra sopraslivellamento ST nelle derivazioni II, III e aVF — si tratta di un infarto inferiore. Chiamate il laboratorio di emodinamica.",
      },
      {
        en: "Give 325 milligrams of aspirin and 180 micrograms of ticagrelor now.",
        target: "Somministrare subito 325 milligrammi di aspirina e 180 microgrammi di ticagrelor.",
      },
      {
        en: "We are transferring you to the cardiac catheterization suite. Do you understand?",
        target: "La stiamo trasferendo alla sala di cateterismo cardiaco. Capisce?",
      },
      {
        en: "Please reassess vital signs every five minutes and report any change to me immediately.",
        target:
          "Rivalutare i parametri vitali ogni cinque minuti e riferirmi immediatamente qualsiasi variazione.",
      },
      {
        en: "The family is in the waiting room — please ask them to stay calm and tell them I will speak with them shortly.",
        target:
          "La famiglia è in sala d'attesa — si prega di dire loro di restare calmi e che parlerò con loro a breve.",
      },
    ],
  },

  // Japanese — ER triage / resuscitation
  {
    id: "seed-ja-em-triage",
    title: "救急医療",
    subtitle: "トリアージと蘇生処置",
    language: "Japanese",
    targetLabel: "日本語",
    flag: "🇯🇵",
    section: "culture",
    available: true,
    level: "C1",
    sentences: [
      {
        en: "This patient came in by ambulance with a chief complaint of chest pain and difficulty breathing.",
        target: "この患者は胸痛と呼吸困難を主訴として救急車で搬送されました。",
      },
      {
        en: "Triaged as Level 1 — please prepare the resuscitation room immediately.",
        target: "トリアージレベル1です。すぐに蘇生室の準備をしてください。",
      },
      {
        en: "What is your pain level on a scale of zero to ten?",
        target: "痛みは0から10のスケールでどのくらいですか？",
      },
      {
        en: "Attach the cardiac monitor, pulse oximeter, and automatic blood pressure cuff.",
        target: "心臓モニター、パルスオキシメーター、自動血圧計を装着してください。",
      },
      {
        en: "Oxygen saturation is 88 percent — apply a non-rebreather mask at 15 liters per minute.",
        target: "酸素飽和度が88％です。毎分15リットルでリザーバーマスクを装着してください。",
      },
      {
        en: "The 12-lead ECG shows new left bundle branch block — activate the STEMI protocol.",
        target:
          "12誘導心電図で新規の左脚ブロックが確認されました。STEMIプロトコルを起動してください。",
      },
      {
        en: "Do you have any allergies to medications? Are you taking any blood thinners?",
        target: "薬のアレルギーはありますか？血液をさらさらにする薬は服用していますか？",
      },
      {
        en: "We will need to perform an emergency procedure to open the blocked artery in your heart.",
        target: "心臓の詰まった血管を開通させるための緊急処置が必要です。",
      },
      {
        en: "Please sign the consent form. If you have any questions, ask me before we proceed.",
        target: "同意書にご署名ください。ご質問があれば、処置を始める前にお聞きください。",
      },
      {
        en: "Your family member is stable for now. The cardiologist is on their way.",
        target: "ご家族の方は今のところ安定しています。循環器科の医師が向かっています。",
      },
    ],
  },

  // Portuguese — ER shock / stabilization
  {
    id: "seed-pt-em-shock",
    title: "Medicina de Emergência",
    subtitle: "Choque e estabilização",
    language: "Portuguese",
    targetLabel: "Português",
    flag: "🇧🇷",
    section: "culture",
    available: true,
    level: "C1",
    sentences: [
      {
        en: "This patient is hypotensive and tachycardic — suspect septic shock. Start the sepsis bundle.",
        target:
          "Este paciente está hipotenso e taquicárdico — suspeita de choque séptico. Iniciar o bundle de sepse.",
      },
      {
        en: "Collect blood cultures from two sites before starting antibiotics.",
        target: "Coletar hemoculturas de dois sítios antes de iniciar antibióticos.",
      },
      {
        en: "Administer one liter of crystalloid bolus and reassess blood pressure in 30 minutes.",
        target:
          "Administrar um litro de bolus de cristaloide e reavaliar a pressão arterial em 30 minutos.",
      },
      {
        en: "Measure lactate — a level above two millimoles per liter confirms sepsis.",
        target: "Medir o lactato — um nível acima de dois milimoles por litro confirma sepse.",
      },
      {
        en: "Have you been feeling feverish, shivering, or confused in the last 24 hours?",
        target: "Você tem sentido febre, tremores ou confusão nas últimas 24 horas?",
      },
      {
        en: "Start broad-spectrum antibiotics within one hour of identifying sepsis.",
        target:
          "Iniciar antibióticos de amplo espectro dentro de uma hora após identificar a sepse.",
      },
      {
        en: "Insert a urinary catheter to monitor urine output — target at least 0.5 milliliters per kilogram per hour.",
        target:
          "Inserir sonda vesical para monitorar o débito urinário — meta de pelo menos 0,5 mililitros por quilograma por hora.",
      },
      {
        en: "The patient is not responding to fluids alone — begin norepinephrine infusion via central line.",
        target:
          "O paciente não está respondendo apenas com fluidos — iniciar infusão de norepinefrina por acesso venoso central.",
      },
      {
        en: "I need to speak with you about your condition. You have a serious infection in your blood.",
        target:
          "Preciso conversar com você sobre sua condição. Você tem uma infecção grave no sangue.",
      },
      {
        en: "We are admitting you to the ICU for close monitoring and continued treatment.",
        target: "Vamos admiti-lo na UTI para monitoramento intensivo e continuação do tratamento.",
      },
    ],
  },

  // ── NURSING ──────────────────────────────────────────────────────────────

  // Spanish — SBAR shift handoff
  {
    id: "seed-es-nursing-sbar",
    title: "Enfermería",
    subtitle: "Entrega de turno con SBAR",
    language: "Spanish",
    targetLabel: "Español",
    flag: "🇲🇽",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "I'm giving you a SBAR report on Mr. Ramírez in room 412 before I sign off.",
        target:
          "Te voy a dar el reporte SBAR del señor Ramírez en el cuarto 412 antes de que termines el turno.",
      },
      {
        en: "Situation: he is a 68-year-old male admitted three days ago for community-acquired pneumonia.",
        target:
          "Situación: es un hombre de 68 años admitido hace tres días por neumonía adquirida en la comunidad.",
      },
      {
        en: "Background: he has a history of type 2 diabetes and hypertension. He is a non-smoker.",
        target: "Antecedentes: tiene historial de diabetes tipo 2 e hipertensión. No fuma.",
      },
      {
        en: "Assessment: his oxygen saturation dropped to 91 percent on two liters this afternoon.",
        target:
          "Evaluación: su saturación de oxígeno bajó al 91 por ciento con dos litros esta tarde.",
      },
      {
        en: "I increased his oxygen to four liters and his saturation improved to 96 percent.",
        target: "Aumenté su oxígeno a cuatro litros y su saturación mejoró al 96 por ciento.",
      },
      {
        en: "Recommendation: please monitor his oxygen closely every two hours and notify the physician if saturation drops below 93 percent again.",
        target:
          "Recomendación: por favor monitorea su oxígeno cada dos horas y notifica al médico si la saturación vuelve a caer por debajo del 93 por ciento.",
      },
      {
        en: "His IV antibiotics are due at 2200 — the ceftriaxone is hanging in the medication room.",
        target:
          "Sus antibióticos IV están programados para las 22:00 — la ceftriaxona está en la sala de medicamentos.",
      },
      {
        en: "He has been refusing to eat since this morning. His wife brought food but he only took a few bites.",
        target:
          "Lleva desde esta mañana rechazando comer. Su esposa trajo comida pero solo dio unos bocados.",
      },
      {
        en: "His morning labs showed a blood glucose of 240 — the sliding scale insulin is ordered, please check his glucose before meals.",
        target:
          "Sus laboratorios de esta mañana mostraron una glucosa de 240 — hay insulina en escala deslizante ordenada, por favor revisa su glucosa antes de las comidas.",
      },
      {
        en: "Any questions before I go? I'll be available by phone until midnight.",
        target:
          "¿Tienes alguna pregunta antes de que me vaya? Estaré disponible por teléfono hasta la medianoche.",
      },
    ],
  },

  // French — medication administration / patient education
  {
    id: "seed-fr-nursing-medadmin",
    title: "Soins Infirmiers",
    subtitle: "Administration des médicaments",
    language: "French",
    targetLabel: "Français",
    flag: "🇫🇷",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "Good morning. I'm your nurse for today. Before I give you this medication, I need to verify your name and date of birth.",
        target:
          "Bonjour. Je suis votre infirmière pour aujourd'hui. Avant de vous donner ce médicament, je dois vérifier votre nom et votre date de naissance.",
      },
      {
        en: "This is metoprolol, a medication to slow your heart rate and lower your blood pressure.",
        target:
          "Voici le métoprolol, un médicament pour ralentir votre fréquence cardiaque et réduire votre tension artérielle.",
      },
      {
        en: "Have you taken this medication before? Do you have any known allergies?",
        target: "Avez-vous déjà pris ce médicament ? Avez-vous des allergies connues ?",
      },
      {
        en: "I'll check your heart rate before giving it — if it's below 60, I'll hold the dose and call the doctor.",
        target:
          "Je vais vérifier votre fréquence cardiaque avant de vous le donner — si elle est inférieure à 60, je suspendrai la dose et appellerai le médecin.",
      },
      {
        en: "Your heart rate is 72 — that's fine. I'm going to give you the tablet now.",
        target:
          "Votre fréquence cardiaque est de 72 — c'est bien. Je vais vous donner le comprimé maintenant.",
      },
      {
        en: "Common side effects include dizziness and fatigue, especially in the first few days.",
        target:
          "Les effets secondaires courants incluent des étourdissements et de la fatigue, surtout durant les premiers jours.",
      },
      {
        en: "Please call me immediately if you feel your heart racing, if you have trouble breathing, or if you feel very lightheaded.",
        target:
          "Veuillez m'appeler immédiatement si vous sentez votre cœur s'emballer, si vous avez du mal à respirer ou si vous vous sentez très étourdi.",
      },
      {
        en: "I'm also going to document this administration in your chart right now.",
        target:
          "Je vais également documenter cette administration dans votre dossier immédiatement.",
      },
      {
        en: "Do you have any questions about this medication or your treatment plan?",
        target: "Avez-vous des questions concernant ce médicament ou votre plan de traitement ?",
      },
      {
        en: "I'll be back in two hours to check on you and take your vital signs.",
        target: "Je reviendrai dans deux heures pour vous voir et prendre vos constantes vitales.",
      },
    ],
  },

  // German — IV placement / wound care
  {
    id: "seed-de-nursing-ivwound",
    title: "Krankenpflege",
    subtitle: "IV-Anlage und Wundversorgung",
    language: "German",
    targetLabel: "Deutsch",
    flag: "🇩🇪",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "Good morning. I need to place an IV line. May I look at your veins on both arms?",
        target:
          "Guten Morgen. Ich muss Ihnen einen venösen Zugang legen. Darf ich bitte die Venen an beiden Armen ansehen?",
      },
      {
        en: "Please make a fist — that will help the vein become more visible.",
        target:
          "Bitte ballen Sie die Hand zur Faust — das hilft, die Vene besser sichtbar zu machen.",
      },
      {
        en: "You will feel a small pinch. Try to hold still for a moment.",
        target: "Sie werden einen kleinen Stich spüren. Bitte halten Sie kurz still.",
      },
      {
        en: "The IV is in place and working well — I'll secure it with a dressing.",
        target:
          "Der Zugang liegt und funktioniert gut — ich befestige ihn jetzt mit einem Verband.",
      },
      {
        en: "Now I need to change the dressing on your surgical wound. This may be a little uncomfortable.",
        target:
          "Jetzt muss ich den Verband an Ihrer Operationswunde wechseln. Das könnte etwas unangenehm sein.",
      },
      {
        en: "The wound looks clean with no signs of redness, warmth, or discharge — that is a good sign.",
        target:
          "Die Wunde sieht sauber aus, ohne Zeichen von Rötung, Wärme oder Sekretion — das ist ein gutes Zeichen.",
      },
      {
        en: "I am applying an antiseptic solution and a sterile dressing.",
        target: "Ich trage jetzt eine antiseptische Lösung und einen sterilen Verband auf.",
      },
      {
        en: "Please do not touch or wet the wound. Keep it dry until your next dressing change.",
        target:
          "Bitte berühren oder befeuchten Sie die Wunde nicht. Halten Sie sie bis zum nächsten Verbandswechsel trocken.",
      },
      {
        en: "If you notice increased pain, swelling, warmth, or a bad smell from the wound, please inform me or the nursing team right away.",
        target:
          "Wenn Sie verstärkte Schmerzen, Schwellung, Wärme oder Geruch an der Wunde bemerken, informieren Sie mich oder das Pflegeteam bitte sofort.",
      },
    ],
  },

  // Italian — catheter care / vitals
  {
    id: "seed-it-nursing-vitals",
    title: "Assistenza Infermieristica",
    subtitle: "Parametri vitali e assistenza del catetere",
    language: "Italian",
    targetLabel: "Italiano",
    flag: "🇮🇹",
    section: "culture",
    available: true,
    level: "B1",
    sentences: [
      {
        en: "Good evening. I'm the night nurse. I'd like to take your vital signs now.",
        target:
          "Buonasera. Sono l'infermiera di notte. Vorrei rilevare adesso i suoi parametri vitali.",
      },
      {
        en: "Your blood pressure is 130 over 82 and your heart rate is 78 — both are within normal range.",
        target:
          "La pressione arteriosa è 130 su 82 e la frequenza cardiaca è 78 — entrambi rientrano nella norma.",
      },
      {
        en: "Your temperature is 37.8 degrees Celsius — slightly elevated. I will notify the doctor.",
        target: "La temperatura è di 37,8 gradi Celsius — leggermente elevata. Avviserò il medico.",
      },
      {
        en: "I also need to check your urinary catheter — make sure it is draining well.",
        target:
          "Devo anche controllare il suo catetere urinario — assicurarmi che dreni correttamente.",
      },
      {
        en: "The catheter is draining well. The urine appears clear and yellow — that is normal.",
        target: "Il catetere sta drenando bene. L'urina appare chiara e gialla — è normale.",
      },
      {
        en: "Do not pull on the catheter tube — this can cause irritation or injury.",
        target: "Non tiri il tubo del catetere — può causare irritazione o lesioni.",
      },
      {
        en: "Are you feeling any burning, pressure, or discomfort in your lower abdomen?",
        target: "Sente bruciore, pressione o fastidio nella parte bassa dell'addome?",
      },
      {
        en: "I will chart all of these findings in your medical record now.",
        target: "Documenterò tutti questi dati nella sua cartella clinica adesso.",
      },
      {
        en: "Is there anything you need before I check on the other patients? Are you comfortable?",
        target: "Ha bisogno di qualcosa prima che vada a controllare gli altri pazienti? È comodo?",
      },
      {
        en: "I'll be close by. Use the call button if you need anything during the night.",
        target:
          "Sarò nelle vicinanze. Usi il pulsante del campanello se ha bisogno di qualcosa durante la notte.",
      },
    ],
  },

  // Japanese — nursing shift report / charting
  {
    id: "seed-ja-nursing-sbar",
    title: "看護",
    subtitle: "申し送りとカルテ記録",
    language: "Japanese",
    targetLabel: "日本語",
    flag: "🇯🇵",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "I am handing off care for the patient in room 305. Let me give you the SBAR report.",
        target: "305号室の患者さんの引き継ぎをします。SBARで申し送ります。",
      },
      {
        en: "Situation: the patient is a 72-year-old woman admitted for a hip fracture after a fall at home.",
        target: "状況：患者は72歳の女性で、自宅での転倒による股関節骨折で入院中です。",
      },
      {
        en: "Background: she underwent total hip arthroplasty yesterday morning. She has a history of atrial fibrillation.",
        target: "背景：昨日の朝に人工股関節全置換術を受けました。心房細動の既往があります。",
      },
      {
        en: "Assessment: she is alert and oriented. Pain is controlled at 3 out of 10 with scheduled acetaminophen.",
        target:
          "評価：意識清明で見当識も保たれています。疼痛はアセトアミノフェンの定期投与で10点中3点に管理されています。",
      },
      {
        en: "She ambulated 10 meters with physical therapy this afternoon and tolerated it well.",
        target: "今日の午後、理学療法士と一緒に10メートルの歩行訓練を行い、良好に耐えました。",
      },
      {
        en: "Recommendation: please check her INR in the morning — she restarted warfarin after surgery.",
        target: "推薦：朝にPT-INRを確認してください。術後にワーファリンを再開しています。",
      },
      {
        en: "Her IV site needs to be assessed every four hours for signs of infiltration or phlebitis.",
        target: "IV挿入部位は4時間ごとに、液漏れや静脈炎の所見がないか確認してください。",
      },
      {
        en: "She asked about the discharge plan. Please coordinate with the social worker in the morning.",
        target:
          "患者さんから退院計画について質問がありました。朝にソーシャルワーカーと連携してください。",
      },
      {
        en: "I have documented all assessments and interventions in the electronic health record.",
        target: "すべてのアセスメントと処置は電子カルテに記録済みです。",
      },
    ],
  },

  // Portuguese — patient assessment / wound care education
  {
    id: "seed-pt-nursing-wound",
    title: "Enfermagem",
    subtitle: "Avaliação e cuidados com feridas",
    language: "Portuguese",
    targetLabel: "Português",
    flag: "🇧🇷",
    section: "culture",
    available: true,
    level: "B1",
    sentences: [
      {
        en: "Good morning. I'm here to do your morning assessment. How are you feeling today?",
        target: "Bom dia. Vim fazer sua avaliação matinal. Como você está se sentindo hoje?",
      },
      {
        en: "On a scale of zero to ten, how would you rate your pain right now?",
        target: "Em uma escala de zero a dez, como você avalia sua dor agora?",
      },
      {
        en: "I need to assess your wound before we start the dressing change. I will be gentle.",
        target: "Preciso avaliar sua ferida antes de trocar o curativo. Serei cuidadoso.",
      },
      {
        en: "The wound edges are well approximated and there is no sign of infection.",
        target: "As bordas da ferida estão bem aproximadas e não há sinal de infecção.",
      },
      {
        en: "I will clean the wound with saline solution and apply a new sterile dressing.",
        target: "Vou limpar a ferida com soro fisiológico e aplicar um curativo estéril novo.",
      },
      {
        en: "Before you are discharged, I will teach you how to change the dressing at home.",
        target: "Antes da alta, vou te ensinar como trocar o curativo em casa.",
      },
      {
        en: "Wash your hands thoroughly before and after touching the wound.",
        target: "Lave bem as mãos antes e depois de tocar na ferida.",
      },
      {
        en: "Contact your doctor if you see redness spreading around the wound, pus, or if you develop a fever above 38 degrees.",
        target:
          "Entre em contato com seu médico se notar vermelhidão ao redor da ferida, secreção purulenta ou se desenvolver febre acima de 38 graus.",
      },
      {
        en: "Do you have any questions about how to care for your wound at home?",
        target: "Você tem alguma dúvida sobre como cuidar da ferida em casa?",
      },
      {
        en: "I'll be back after lunch to check on you and administer your afternoon medications.",
        target:
          "Voltarei depois do almoço para verificar como você está e administrar seus medicamentos da tarde.",
      },
    ],
  },

  // ── ORTHOPEDICS ──────────────────────────────────────────────────────────

  // Spanish — fracture / post-op instructions
  {
    id: "seed-es-ortho-fracture",
    title: "Ortopedia",
    subtitle: "Fractura y cuidados postoperatorios",
    language: "Spanish",
    targetLabel: "Español",
    flag: "🇲🇽",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "I've reviewed your X-rays and you have a displaced fracture of the distal radius — what most people call a broken wrist.",
        target:
          "He revisado sus radiografías y tiene una fractura desplazada del radio distal — lo que la mayoría de las personas llama muñeca rota.",
      },
      {
        en: "We need to surgically realign the bone and fix it in place with a plate and screws.",
        target:
          "Necesitamos realinear el hueso quirúrgicamente y fijarlo con una placa y tornillos.",
      },
      {
        en: "The surgery takes about an hour and you will be under general anesthesia.",
        target: "La cirugía dura aproximadamente una hora y se realizará bajo anestesia general.",
      },
      {
        en: "After surgery, your wrist will be immobilized in a cast for six weeks.",
        target:
          "Después de la cirugía, su muñeca estará inmovilizada en un yeso durante seis semanas.",
      },
      {
        en: "Do not put any weight on the arm and keep the cast dry at all times.",
        target: "No aplique peso sobre el brazo y mantenga el yeso seco en todo momento.",
      },
      {
        en: "Elevate your hand above the level of your heart to reduce swelling — use a pillow when lying down.",
        target:
          "Eleve su mano por encima del nivel del corazón para reducir la inflamación — use una almohada cuando esté acostado.",
      },
      {
        en: "Physical therapy will begin after the cast is removed to restore range of motion and strength.",
        target:
          "La terapia física comenzará después de que se retire el yeso para recuperar el movimiento y la fuerza.",
      },
      {
        en: "Call us immediately if you develop numbness, tingling, increased pain, or if the fingers turn blue or white.",
        target:
          "Llámenos de inmediato si presenta entumecimiento, hormigueo, aumento del dolor o si los dedos se tornan azules o blancos.",
      },
      {
        en: "Full recovery typically takes three to six months, depending on how well you do with physical therapy.",
        target:
          "La recuperación total generalmente toma entre tres y seis meses, dependiendo de cómo progrese con la fisioterapia.",
      },
    ],
  },

  // French — joint replacement / rehabilitation
  {
    id: "seed-fr-ortho-joint",
    title: "Orthopédie",
    subtitle: "Arthroplastie et rééducation",
    language: "French",
    targetLabel: "Français",
    flag: "🇫🇷",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "Your X-rays show severe osteoarthritis of the knee — bone-on-bone contact in the medial compartment.",
        target:
          "Vos radiographies montrent une arthrose sévère du genou — un contact os contre os dans le compartiment médial.",
      },
      {
        en: "At this stage, I recommend a total knee replacement, also called a total knee arthroplasty.",
        target:
          "À ce stade, je vous recommande une prothèse totale de genou, également appelée arthroplastie totale du genou.",
      },
      {
        en: "We will replace the damaged joint surfaces with metal and plastic implants.",
        target:
          "Nous allons remplacer les surfaces articulaires endommagées par des implants métalliques et plastiques.",
      },
      {
        en: "Most patients are walking with a walker within 24 hours of surgery.",
        target:
          "La plupart des patients marchent avec un déambulateur dans les 24 heures suivant l'opération.",
      },
      {
        en: "Rehabilitation is essential — you will work with a physical therapist starting the day after surgery.",
        target:
          "La rééducation est essentielle — vous travaillerez avec un kinésithérapeute dès le lendemain de l'opération.",
      },
      {
        en: "The risks include infection, blood clots, and loosening of the implant over time.",
        target:
          "Les risques comprennent l'infection, les thromboses veineuses et le descellement de la prothèse à long terme.",
      },
      {
        en: "You will need to take a blood thinner for four to six weeks to prevent deep vein thrombosis.",
        target:
          "Vous devrez prendre un anticoagulant pendant quatre à six semaines pour prévenir la thrombose veineuse profonde.",
      },
      {
        en: "Avoid high-impact activities like running or jumping for the first year after surgery.",
        target:
          "Évitez les activités à fort impact comme la course ou les sauts pendant la première année après l'opération.",
      },
      {
        en: "Full recovery takes three to six months, but most patients return to normal daily activities within six weeks.",
        target:
          "La récupération complète prend trois à six mois, mais la plupart des patients reprennent leurs activités quotidiennes normales en six semaines.",
      },
      {
        en: "Do you have any questions about the procedure or what to expect during recovery?",
        target:
          "Avez-vous des questions sur l'intervention ou sur ce à quoi vous attendre pendant la récupération ?",
      },
    ],
  },

  // German — orthopedic post-op / implant
  {
    id: "seed-de-ortho-postop",
    title: "Orthopädie",
    subtitle: "Postoperative Betreuung nach Gelenkersatz",
    language: "German",
    targetLabel: "Deutsch",
    flag: "🇩🇪",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "Good morning. How are you feeling after your hip replacement surgery?",
        target: "Guten Morgen. Wie fühlen Sie sich nach der Hüftgelenksoperation?",
      },
      {
        en: "I would like to examine your hip and check the incision site.",
        target: "Ich möchte Ihre Hüfte untersuchen und die Wunde kontrollieren.",
      },
      {
        en: "The wound looks good — no signs of infection. The drainage from the drain is minimal and clear.",
        target:
          "Die Wunde sieht gut aus — keine Zeichen einer Infektion. Das Sekret aus der Drainage ist minimal und klar.",
      },
      {
        en: "Today we will remove the surgical drain. The procedure will take just a minute.",
        target: "Heute werden wir die chirurgische Drainage entfernen. Das dauert nur eine Minute.",
      },
      {
        en: "It is important that you do not cross your legs and do not bend your hip beyond 90 degrees for the first three months.",
        target:
          "Es ist wichtig, dass Sie die Beine in den ersten drei Monaten nicht überkreuzen und die Hüfte nicht über 90 Grad beugen.",
      },
      {
        en: "You should use the walker for the first two weeks and then transition to a cane as your strength improves.",
        target:
          "In den ersten zwei Wochen sollten Sie einen Rollator verwenden und dann auf einen Gehstock wechseln, wenn die Kraft zunimmt.",
      },
      {
        en: "Physical therapy will begin today. The physiotherapist will show you the correct exercises.",
        target:
          "Die Physiotherapie beginnt heute. Der Physiotherapeut wird Ihnen die richtigen Übungen zeigen.",
      },
      {
        en: "You will need to take the prescribed anticoagulant for 28 days to reduce the risk of blood clots.",
        target:
          "Sie müssen das verschriebene Gerinnungshemmer 28 Tage lang einnehmen, um das Risiko von Blutgerinnseln zu verringern.",
      },
      {
        en: "If you experience increased pain, swelling in the calf, or shortness of breath, please contact us immediately.",
        target:
          "Bei verstärkten Schmerzen, Schwellung der Wade oder Atemnot wenden Sie sich bitte sofort an uns.",
      },
      {
        en: "We expect to discharge you in two days — the case manager will coordinate your home physiotherapy.",
        target:
          "Wir planen, Sie in zwei Tagen zu entlassen — der Case Manager wird die ambulante Physiotherapie koordinieren.",
      },
    ],
  },

  // Italian — ligament injury / physical therapy
  {
    id: "seed-it-ortho-ligament",
    title: "Ortopedia",
    subtitle: "Lesione legamentosa e riabilitazione",
    language: "Italian",
    targetLabel: "Italiano",
    flag: "🇮🇹",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "I have reviewed your MRI. You have a complete tear of the anterior cruciate ligament.",
        target:
          "Ho esaminato la sua risonanza magnetica. Ha una rottura completa del legamento crociato anteriore.",
      },
      {
        en: "This injury rarely heals on its own in active patients — I recommend surgical reconstruction.",
        target:
          "Questa lesione raramente guarisce da sola nei pazienti attivi — raccomando una ricostruzione chirurgica.",
      },
      {
        en: "We will use a graft — either from your own patellar tendon or from a donor.",
        target: "Utilizzeremo un graft — dal suo tendine rotuleo o da donatore.",
      },
      {
        en: "Before surgery, we need to reduce the swelling — ice, elevation, and compression for two weeks.",
        target:
          "Prima dell'intervento dobbiamo ridurre il gonfiore — ghiaccio, elevazione e compressione per due settimane.",
      },
      {
        en: "The surgery is performed arthroscopically, through small incisions — recovery is faster than with open surgery.",
        target:
          "L'intervento viene eseguito in artroscopia, attraverso piccole incisioni — la ripresa è più rapida rispetto alla chirurgia aperta.",
      },
      {
        en: "Physical therapy starts the day after surgery and continues for nine to twelve months.",
        target:
          "La fisioterapia inizia il giorno dopo l'intervento e prosegue per nove-dodici mesi.",
      },
      {
        en: "Full return to sport is typically at nine months, provided you pass the functional tests.",
        target:
          "Il ritorno completo allo sport avviene di solito a nove mesi, a condizione che superi i test funzionali.",
      },
      {
        en: "You must not put full weight on the leg for the first two weeks after surgery.",
        target:
          "Non deve appoggiare il peso completo sulla gamba per le prime due settimane dopo l'intervento.",
      },
      {
        en: "Use the crutches as instructed and do not skip your physical therapy sessions.",
        target: "Usi le stampelle come indicato e non salti le sedute di fisioterapia.",
      },
    ],
  },

  // Japanese — orthopedic bone / cast care
  {
    id: "seed-ja-ortho-cast",
    title: "整形外科",
    subtitle: "骨折とギプスケア",
    language: "Japanese",
    targetLabel: "日本語",
    flag: "🇯🇵",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "Your X-ray shows a fracture of the fifth metatarsal — this is a common bone in the foot.",
        target:
          "レントゲンでは第5中足骨の骨折が確認されました。これは足の骨の中でよく折れる部位です。",
      },
      {
        en: "This type of fracture can often be treated without surgery, using a cast or a walking boot.",
        target:
          "このタイプの骨折は、手術をせずにギプスやウォーキングブーツで治療できることが多いです。",
      },
      {
        en: "I recommend a short leg cast for four to six weeks, with no weight bearing.",
        target: "下腿ギプスを4〜6週間装着し、患側には体重をかけないことをお勧めします。",
      },
      {
        en: "Keep the cast dry at all times. When bathing, use a plastic bag to cover it.",
        target: "ギプスは常に乾燥した状態に保ってください。入浴時はビニール袋で覆ってください。",
      },
      {
        en: "If you feel increased pain, numbness, or if your toes change color, contact us immediately.",
        target:
          "痛みが強くなったり、しびれが出たり、足の指の色が変わった場合は、すぐにご連絡ください。",
      },
      {
        en: "Use the crutches and avoid placing any weight on the affected foot.",
        target: "松葉杖を使用して、患側の足には体重をかけないようにしてください。",
      },
      {
        en: "We will take follow-up X-rays in three weeks to check that the bone is healing properly.",
        target: "3週間後に経過観察のレントゲンを撮り、骨が正常に癒合しているか確認します。",
      },
      {
        en: "After the cast is removed, you will need physical therapy to restore strength and flexibility.",
        target: "ギプスを外した後は、筋力と柔軟性を回復するためにリハビリが必要です。",
      },
      {
        en: "Do you have any questions about how to use the crutches safely?",
        target: "松葉杖の安全な使い方について何かご質問はありますか？",
      },
    ],
  },

  // Portuguese — orthopedic surgery / implant
  {
    id: "seed-pt-ortho-surgery",
    title: "Ortopedia",
    subtitle: "Cirurgia e implante ortopédico",
    language: "Portuguese",
    targetLabel: "Português",
    flag: "🇧🇷",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "Your imaging shows severe arthritis in the shoulder joint. I'd like to discuss your surgical options.",
        target:
          "Seu exame de imagem mostra artrite grave na articulação do ombro. Gostaria de discutir suas opções cirúrgicas.",
      },
      {
        en: "A total shoulder arthroplasty — shoulder replacement — would give you the best chance of pain relief and function.",
        target:
          "Uma artroplastia total do ombro — prótese de ombro — oferece a melhor chance de alívio da dor e recuperação funcional.",
      },
      {
        en: "The implant is made of a metal humeral stem and a plastic socket that replaces the glenoid.",
        target:
          "O implante é composto por uma haste umeral metálica e um componente plástico que substitui a glenóide.",
      },
      {
        en: "Surgery takes about two hours under general anesthesia and you will stay one night in the hospital.",
        target:
          "A cirurgia dura aproximadamente duas horas sob anestesia geral e você ficará uma noite no hospital.",
      },
      {
        en: "You will be in a sling for six weeks and begin gentle range-of-motion exercises immediately after surgery.",
        target:
          "Você ficará com uma tipoia por seis semanas e iniciará exercícios suaves de amplitude de movimento logo após a cirurgia.",
      },
      {
        en: "Physical therapy begins at two weeks and continues for four to six months.",
        target: "A fisioterapia começa em duas semanas e continua por quatro a seis meses.",
      },
      {
        en: "The main risks are infection, nerve injury, and implant loosening over time.",
        target:
          "Os principais riscos são infecção, lesão nervosa e afrouxamento da prótese ao longo do tempo.",
      },
      {
        en: "Most patients report significant pain reduction and return to daily activities within three months.",
        target:
          "A maioria dos pacientes relata redução significativa da dor e retorno às atividades diárias em três meses.",
      },
      {
        en: "Do you have any concerns about the surgery or the recovery process?",
        target: "Você tem alguma preocupação sobre a cirurgia ou o processo de recuperação?",
      },
    ],
  },

  // ── PAIN MANAGEMENT ──────────────────────────────────────────────────────

  // Spanish — nerve block procedure
  {
    id: "seed-es-pain-nerveblock",
    title: "Manejo del Dolor",
    subtitle: "Bloqueo nervioso y dolor crónico",
    language: "Spanish",
    targetLabel: "Español",
    flag: "🇲🇽",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "Based on your history and imaging, I believe you are a good candidate for a lumbar nerve root block.",
        target:
          "Según su historial y los estudios de imagen, creo que usted es un buen candidato para un bloqueo de raíz nerviosa lumbar.",
      },
      {
        en: "The procedure involves injecting a combination of local anesthetic and steroid near the affected nerve root.",
        target:
          "El procedimiento consiste en inyectar una combinación de anestésico local y esteroide cerca de la raíz nerviosa afectada.",
      },
      {
        en: "Many patients experience significant pain relief within two to three days after the injection.",
        target:
          "Muchos pacientes experimentan un alivio significativo del dolor dentro de dos a tres días después de la inyección.",
      },
      {
        en: "The procedure takes about 15 minutes and is performed under fluoroscopic guidance for precision and safety.",
        target:
          "El procedimiento dura aproximadamente 15 minutos y se realiza bajo guía fluoroscópica para mayor precisión y seguridad.",
      },
      {
        en: "You may feel temporary weakness or numbness in the leg for a few hours after the procedure.",
        target:
          "Puede sentir debilidad o entumecimiento temporal en la pierna durante algunas horas después del procedimiento.",
      },
      {
        en: "Do not drive yourself home — please arrange for someone to pick you up.",
        target: "No maneje de regreso a casa — por favor haga arreglos para que alguien lo recoja.",
      },
      {
        en: "We will ask you to rate your pain before and after the block to measure how effective it was.",
        target:
          "Le pediremos que califique su dolor antes y después del bloqueo para medir su efectividad.",
      },
      {
        en: "If the block provides good relief, we can repeat it up to three times per year.",
        target:
          "Si el bloqueo proporciona buen alivio, podemos repetirlo hasta tres veces por año.",
      },
      {
        en: "The nerve block is one part of your treatment — we will also continue physical therapy and your oral medications.",
        target:
          "El bloqueo nervioso es solo una parte de su tratamiento — también continuaremos con fisioterapia y sus medicamentos orales.",
      },
    ],
  },

  // French — chronic pain management plan
  {
    id: "seed-fr-pain-chronic",
    title: "Gestion de la Douleur",
    subtitle: "Douleur chronique et plan de traitement",
    language: "French",
    targetLabel: "Français",
    flag: "🇫🇷",
    section: "culture",
    available: true,
    level: "C1",
    sentences: [
      {
        en: "You have been dealing with chronic low back pain for over two years. I'd like to review your treatment plan.",
        target:
          "Vous souffrez de lombalgie chronique depuis plus de deux ans. J'aimerais revoir votre plan de traitement.",
      },
      {
        en: "Chronic pain is complex — it involves not just the physical injury but also how your nervous system processes pain signals.",
        target:
          "La douleur chronique est complexe — elle implique non seulement la lésion physique, mais aussi la façon dont votre système nerveux traite les signaux de douleur.",
      },
      {
        en: "I want to offer you a multimodal approach: combining medication, physical therapy, and pain psychology.",
        target:
          "Je souhaite vous proposer une approche multimodale : combinant médicaments, kinésithérapie et psychologie de la douleur.",
      },
      {
        en: "For the medication component, I'd like to start you on duloxetine — it treats both pain and the mood component of chronic pain.",
        target:
          "Pour le volet médicamenteux, je souhaite vous prescrire de la duloxétine — elle traite à la fois la douleur et la composante émotionnelle de la douleur chronique.",
      },
      {
        en: "Cognitive behavioral therapy for pain has very strong evidence — it retrains how the brain interprets pain signals.",
        target:
          "La thérapie cognitivo-comportementale pour la douleur a des preuves très solides — elle réapprend au cerveau à interpréter les signaux de douleur.",
      },
      {
        en: "I want to set realistic goals together. What would improved pain control allow you to do that you can't do now?",
        target:
          "Je veux définir des objectifs réalistes ensemble. Qu'est-ce qu'un meilleur contrôle de la douleur vous permettrait de faire que vous ne pouvez pas faire maintenant ?",
      },
      {
        en: "I will also order an MRI to make sure we haven't missed any structural changes since your last imaging.",
        target:
          "Je vais également prescrire une IRM pour m'assurer que nous n'avons pas manqué de changements structuraux depuis votre dernière imagerie.",
      },
      {
        en: "I will see you in four weeks to review how you are responding to the new medication.",
        target:
          "Je vous reverrai dans quatre semaines pour évaluer votre réponse au nouveau médicament.",
      },
      {
        en: "Please keep a pain diary — note the intensity, what makes it better or worse, and how it affects your daily activities.",
        target:
          "Veuillez tenir un journal de la douleur — notez l'intensité, ce qui la soulage ou l'aggrave, et son impact sur vos activités quotidiennes.",
      },
    ],
  },

  // German — opioid taper / treatment plan review
  {
    id: "seed-de-pain-opioid",
    title: "Schmerztherapie",
    subtitle: "Opioidtherapie und Behandlungsplan",
    language: "German",
    targetLabel: "Deutsch",
    flag: "🇩🇪",
    section: "culture",
    available: true,
    level: "C1",
    sentences: [
      {
        en: "I have reviewed your treatment record and I'd like to have an honest conversation about your opioid therapy.",
        target:
          "Ich habe Ihre Behandlungsakte überprüft und möchte ein offenes Gespräch über Ihre Opioidtherapie führen.",
      },
      {
        en: "You have been on a stable dose of oxycodone for 18 months. Your pain scores have not improved significantly.",
        target:
          "Sie erhalten seit 18 Monaten eine stabile Dosis Oxycodon. Ihre Schmerzwerte haben sich nicht wesentlich verbessert.",
      },
      {
        en: "This is a sign that we may need to reconsider the current approach and explore other options.",
        target:
          "Das deutet darauf hin, dass wir den aktuellen Ansatz überdenken und andere Optionen in Betracht ziehen sollten.",
      },
      {
        en: "I'd like to propose a slow, gradual taper of your opioid dose over the next six months.",
        target:
          "Ich möchte eine langsame, schrittweise Reduzierung Ihrer Opioiddosis über die nächsten sechs Monate vorschlagen.",
      },
      {
        en: "We will reduce the dose by no more than ten percent every two to four weeks, so your body has time to adjust.",
        target:
          "Wir werden die Dosis alle zwei bis vier Wochen um höchstens zehn Prozent reduzieren, damit sich Ihr Körper anpassen kann.",
      },
      {
        en: "During the taper, I will add physiotherapy and refer you to our pain psychologist.",
        target:
          "Während der Reduktion werde ich Physiotherapie hinzufügen und Sie an unsere Schmerzpsychologin überweisen.",
      },
      {
        en: "Research shows that patients who successfully taper often experience less pain over time, not more.",
        target:
          "Die Forschung zeigt, dass Patienten, die die Dosis erfolgreich reduzieren, langfristig häufig weniger Schmerzen haben, nicht mehr.",
      },
      {
        en: "I want you to know that I will be with you throughout this process and we will adjust the plan if needed.",
        target:
          "Ich möchte, dass Sie wissen, dass ich Sie durch diesen Prozess begleite und den Plan bei Bedarf anpassen werde.",
      },
      {
        en: "Do you have questions or concerns about this plan? I want to make sure you feel comfortable.",
        target:
          "Haben Sie Fragen oder Bedenken zu diesem Plan? Ich möchte sicherstellen, dass Sie sich wohl dabei fühlen.",
      },
      {
        en: "We will meet every four weeks during the taper to monitor your pain, function, and overall wellbeing.",
        target:
          "Wir treffen uns während der Reduktion alle vier Wochen, um Ihre Schmerzen, Funktion und Ihr allgemeines Wohlbefinden zu überwachen.",
      },
    ],
  },

  // Italian — analgesic use / pain assessment
  {
    id: "seed-it-pain-analgesic",
    title: "Terapia del Dolore",
    subtitle: "Valutazione e terapia analgesica",
    language: "Italian",
    targetLabel: "Italiano",
    flag: "🇮🇹",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "I'd like to do a comprehensive pain assessment before we discuss any changes to your treatment.",
        target:
          "Vorrei fare una valutazione completa del dolore prima di discutere eventuali modifiche al suo trattamento.",
      },
      {
        en: "On a scale of zero to ten, where zero is no pain and ten is the worst pain you can imagine, how is your pain today?",
        target:
          "Su una scala da zero a dieci, dove zero è nessun dolore e dieci è il dolore peggiore che riesce a immaginare, come valuta il suo dolore oggi?",
      },
      {
        en: "How would you describe the quality of the pain — burning, stabbing, aching, or electric?",
        target:
          "Come descriverebbe la qualità del dolore — bruciore, coltellata, dolore sordo o scosse elettriche?",
      },
      {
        en: "Does the pain radiate anywhere — down the leg, into the foot, or into the back?",
        target:
          "Il dolore si irradia da qualche parte — lungo la gamba, verso il piede o nella schiena?",
      },
      {
        en: "Your current analgesic regimen includes scheduled acetaminophen and an NSAID. How well is it controlling the pain?",
        target:
          "Il suo attuale regime analgesico include paracetamolo programmato e un FANS. Quanto bene sta controllando il dolore?",
      },
      {
        en: "For nerve-type pain like yours, I'd like to add a low-dose gabapentin to your regimen.",
        target:
          "Per un dolore di tipo neuropatico come il suo, vorrei aggiungere una bassa dose di gabapentin al suo schema terapeutico.",
      },
      {
        en: "Start with 300 milligrams at bedtime for one week, then we will increase gradually as needed.",
        target:
          "Cominci con 300 milligrammi alla sera per una settimana, poi aumenteremo gradualmente se necessario.",
      },
      {
        en: "Common side effects of gabapentin include dizziness and drowsiness, especially when you first start.",
        target:
          "Gli effetti collaterali comuni del gabapentin includono vertigini e sonnolenza, specialmente all'inizio.",
      },
      {
        en: "We will reassess your pain scores and function in three weeks. Please contact me if side effects become unmanageable.",
        target:
          "Rivaluteremo i suoi punteggi di dolore e la funzionalità tra tre settimane. La contatti se gli effetti collaterali diventassero difficili da gestire.",
      },
    ],
  },

  // Japanese — spinal cord stimulator discussion
  {
    id: "seed-ja-pain-scs",
    title: "疼痛管理",
    subtitle: "脊髄刺激療法の説明",
    language: "Japanese",
    targetLabel: "日本語",
    flag: "🇯🇵",
    section: "culture",
    available: true,
    level: "C1",
    sentences: [
      {
        en: "You have had chronic leg pain for three years despite multiple injections and physical therapy.",
        target:
          "複数回の神経ブロックと理学療法を行ってきましたが、3年間、慢性的な下肢の痛みが続いていますね。",
      },
      {
        en: "At this point, I'd like to discuss spinal cord stimulation as a next step in your treatment.",
        target: "この段階で、次の治療ステップとして脊髄刺激療法についてご説明したいと思います。",
      },
      {
        en: "Spinal cord stimulation works by sending mild electrical impulses to the spinal cord to interrupt pain signals.",
        target: "脊髄刺激療法は、脊髄に穏やかな電気刺激を送ることで痛みの信号を遮断する方法です。",
      },
      {
        en: "What makes this unique is that we do a trial period first — about one week — before any permanent implant.",
        target:
          "この治療の特徴は、永久的な植込みを行う前に約1週間のトライアル期間を設けることです。",
      },
      {
        en: "During the trial, temporary electrodes are placed in your back and connected to an external battery.",
        target: "トライアル中は、一時的な電極を背中に留置し、外部バッテリーに接続します。",
      },
      {
        en: "If your pain improves by at least 50 percent, we consider it a success and proceed to permanent implantation.",
        target: "痛みが50%以上改善すれば成功と判断し、永久的な植込みに進みます。",
      },
      {
        en: "The surgery for the permanent device takes about two hours and requires a short hospital stay.",
        target: "永久装置の手術は約2時間で、短期間の入院が必要です。",
      },
      {
        en: "Before we schedule the trial, you will need a psychological evaluation. This is standard and it helps improve outcomes.",
        target:
          "トライアルをスケジュールする前に、心理評価が必要です。これは標準的な手順で、治療成績の向上に役立ちます。",
      },
      {
        en: "Do you have any questions about this procedure or what to expect?",
        target: "この処置や今後の流れについて何かご質問はありますか？",
      },
    ],
  },

  // Portuguese — pain clinic visit / treatment plan
  {
    id: "seed-pt-pain-clinic",
    title: "Gerenciamento da Dor",
    subtitle: "Consulta na clínica de dor",
    language: "Portuguese",
    targetLabel: "Português",
    flag: "🇧🇷",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "Welcome to the pain clinic. I'd like to start by understanding your pain history in detail.",
        target:
          "Bem-vindo à clínica de dor. Gostaria de começar entendendo em detalhes o histórico da sua dor.",
      },
      {
        en: "How long have you been experiencing this pain? Where does it start and where does it travel?",
        target: "Há quanto tempo você tem essa dor? Onde ela começa e para onde ela irradia?",
      },
      {
        en: "What makes the pain better — rest, heat, movement, medication?",
        target: "O que melhora a dor — descanso, calor, movimento, medicação?",
      },
      {
        en: "Have you tried physical therapy, acupuncture, or other non-medication treatments in the past?",
        target:
          "Você já tentou fisioterapia, acupuntura ou outros tratamentos sem medicação no passado?",
      },
      {
        en: "Based on your assessment, I believe this is primarily neuropathic pain — pain from the nerve itself.",
        target:
          "Com base na sua avaliação, acredito que esta é principalmente uma dor neuropática — dor originada no próprio nervo.",
      },
      {
        en: "I'd like to start with a combination of a topical lidocaine patch and a low-dose tricyclic antidepressant.",
        target:
          "Gostaria de começar com uma combinação de adesivo tópico de lidocaína e um antidepressivo tricíclico em dose baixa.",
      },
      {
        en: "These medications work differently from traditional painkillers — they target the way nerves fire.",
        target:
          "Esses medicamentos funcionam de forma diferente dos analgésicos tradicionais — eles atuam na forma como os nervos disparam sinais.",
      },
      {
        en: "I am also referring you to a pain psychologist. Chronic pain affects mood and the mind affects pain — they are inseparable.",
        target:
          "Também estou encaminhando você para um psicólogo especializado em dor. A dor crônica afeta o humor e a mente afeta a dor — são inseparáveis.",
      },
      {
        en: "We will review your response to treatment in six weeks and adjust the plan as needed.",
        target:
          "Vamos revisar sua resposta ao tratamento em seis semanas e ajustar o plano conforme necessário.",
      },
      {
        en: "If the pain is not adequately controlled with these measures, interventional options like a nerve block may be appropriate.",
        target:
          "Se a dor não for controlada adequadamente com essas medidas, opções intervencionistas como um bloqueio nervoso podem ser indicadas.",
      },
    ],
  },

  // ── PHARMACY COUNSELING (NEW — A2/B1) ────────────────────────────────────

  // Spanish — pharmacy counseling for new prescription (A2)
  {
    id: "seed-es-medical-pharmacy-counsel",
    title: "Farmacia",
    subtitle: "Consejo sobre un nuevo medicamento",
    language: "Spanish",
    targetLabel: "Español",
    flag: "🇲🇽",
    section: "culture",
    available: true,
    level: "A2",
    sentences: [
      {
        en: "Hello. I have your prescription ready.",
        target: "Hola. Tengo su receta lista.",
      },
      {
        en: "Is this your first time taking this medicine?",
        target: "¿Es la primera vez que toma este medicamento?",
      },
      {
        en: "Take one pill every morning with food.",
        target: "Tome una pastilla cada mañana con comida.",
      },
      {
        en: "Do not take it on an empty stomach.",
        target: "No la tome con el estómago vacío.",
      },
      {
        en: "Drink a full glass of water with each dose.",
        target: "Tome un vaso lleno de agua con cada dosis.",
      },
      {
        en: "Some people feel sleepy or dizzy at first.",
        target: "Algunas personas se sienten somnolientas o mareadas al principio.",
      },
      {
        en: "Do not drive if you feel sleepy.",
        target: "No maneje si se siente somnoliento.",
      },
      {
        en: "Call your doctor if you have a rash or trouble breathing.",
        target: "Llame a su médico si tiene erupción o dificultad para respirar.",
      },
      {
        en: "Do you have any questions about your medicine?",
        target: "¿Tiene alguna pregunta sobre su medicamento?",
      },
    ],
  },

  // Portuguese — hospital admission workflow (B1)
  {
    id: "seed-pt-medical-admission",
    title: "Internação Hospitalar",
    subtitle: "Processo de admissão",
    language: "Portuguese",
    targetLabel: "Português",
    flag: "🇧🇷",
    section: "culture",
    available: true,
    level: "B1",
    sentences: [
      {
        en: "Welcome to the hospital. I'm going to help with your admission today.",
        target: "Bem-vindo ao hospital. Vou ajudar com sua admissão hoje.",
      },
      {
        en: "Please show me your ID and your insurance card.",
        target: "Por favor, mostre-me seu documento de identidade e seu cartão do convênio.",
      },
      {
        en: "I need to ask some questions about your medical history.",
        target: "Preciso fazer algumas perguntas sobre seu histórico médico.",
      },
      {
        en: "Do you take any medications regularly? Please list them all.",
        target: "Você toma algum medicamento regularmente? Por favor, liste todos.",
      },
      {
        en: "Are you allergic to any medications, foods, or latex?",
        target: "Você é alérgico a algum medicamento, alimento ou látex?",
      },
      {
        en: "Have you had any surgeries before? When was the last one?",
        target: "Você já fez alguma cirurgia antes? Quando foi a última?",
      },
      {
        en: "Your room is on the fourth floor, bed number two by the window.",
        target: "Seu quarto fica no quarto andar, leito número dois ao lado da janela.",
      },
      {
        en: "Please change into the gown and put your belongings in the locker.",
        target: "Por favor, troque para o avental e coloque seus pertences no armário.",
      },
      {
        en: "The nurse will be with you in a few minutes to check your vital signs.",
        target: "A enfermeira virá em alguns minutos para verificar seus sinais vitais.",
      },
      {
        en: "If you need anything, press the call button next to your bed.",
        target: "Se precisar de algo, aperte o botão de chamada ao lado da sua cama.",
      },
    ],
  },

  // French — pediatric encounter with parent (B1)
  {
    id: "seed-fr-medical-pediatric",
    title: "Pédiatrie",
    subtitle: "Consultation avec un parent",
    language: "French",
    targetLabel: "Français",
    flag: "🇫🇷",
    section: "culture",
    available: true,
    level: "B1",
    sentences: [
      {
        en: "Hello. What is your child's name and how old is she?",
        target: "Bonjour. Comment s'appelle votre enfant et quel âge a-t-elle ?",
      },
      {
        en: "What brings you in today? When did the symptoms start?",
        target: "Qu'est-ce qui vous amène aujourd'hui ? Quand les symptômes ont-ils commencé ?",
      },
      {
        en: "Has she had a fever? Did you measure her temperature at home?",
        target: "A-t-elle eu de la fièvre ? Avez-vous pris sa température à la maison ?",
      },
      {
        en: "Is she eating and drinking normally? Any vomiting or diarrhea?",
        target: "Mange-t-elle et boit-elle normalement ? Des vomissements ou de la diarrhée ?",
      },
      {
        en: "Are her vaccinations up to date? Do you have her health record?",
        target: "Ses vaccins sont-ils à jour ? Avez-vous son carnet de santé ?",
      },
      {
        en: "I'm going to listen to her chest and look in her ears and throat.",
        target: "Je vais écouter sa poitrine et regarder ses oreilles et sa gorge.",
      },
      {
        en: "She has a viral ear infection. It should get better in a few days.",
        target: "Elle a une otite virale. Cela devrait s'améliorer dans quelques jours.",
      },
      {
        en: "Give her children's paracetamol every six hours if she has pain or fever.",
        target:
          "Donnez-lui du paracétamol pédiatrique toutes les six heures si elle a mal ou de la fièvre.",
      },
      {
        en: "Make sure she drinks plenty of fluids and rests at home.",
        target: "Assurez-vous qu'elle boive beaucoup et qu'elle se repose à la maison.",
      },
      {
        en: "If the fever lasts more than three days or she becomes very tired, please come back.",
        target:
          "Si la fièvre dure plus de trois jours ou si elle devient très fatiguée, revenez nous voir.",
      },
    ],
  },

  // German — telehealth visit / chronic disease follow-up (B2)
  {
    id: "seed-de-medical-telehealth",
    title: "Telemedizin",
    subtitle: "Videosprechstunde bei chronischer Erkrankung",
    language: "German",
    targetLabel: "Deutsch",
    flag: "🇩🇪",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "Good morning. Can you see and hear me clearly through the video?",
        target: "Guten Morgen. Können Sie mich über das Video gut sehen und hören?",
      },
      {
        en: "Today we are following up on your diabetes and your blood pressure.",
        target: "Heute besprechen wir die Verlaufskontrolle Ihres Diabetes und Ihres Blutdrucks.",
      },
      {
        en: "Please share the blood sugar readings you have measured at home this week.",
        target:
          "Bitte teilen Sie mir die Blutzuckerwerte mit, die Sie diese Woche zu Hause gemessen haben.",
      },
      {
        en: "Your morning fasting values are still slightly above the target range.",
        target: "Ihre Nüchternwerte am Morgen liegen weiterhin leicht über dem Zielbereich.",
      },
      {
        en: "I would like to increase your metformin dose to one thousand milligrams twice a day.",
        target: "Ich möchte Ihre Metformindosis auf zweimal täglich tausend Milligramm erhöhen.",
      },
      {
        en: "Have you noticed any side effects, such as nausea or stomach discomfort?",
        target: "Haben Sie Nebenwirkungen wie Übelkeit oder Magenbeschwerden bemerkt?",
      },
      {
        en: "Please continue to take your blood pressure twice a day and keep a written record.",
        target:
          "Bitte messen Sie weiterhin zweimal täglich Ihren Blutdruck und führen Sie ein schriftliches Protokoll.",
      },
      {
        en: "I will send the new prescription electronically to your usual pharmacy this afternoon.",
        target: "Ich sende das neue Rezept heute Nachmittag elektronisch an Ihre Stammapotheke.",
      },
      {
        en: "We should repeat your HbA1c and kidney function tests in three months.",
        target:
          "Wir sollten in drei Monaten Ihren HbA1c-Wert und die Nierenfunktion erneut kontrollieren.",
      },
      {
        en: "If your blood sugar drops below 70, eat something sweet immediately and call us.",
        target:
          "Wenn Ihr Blutzucker unter 70 fällt, essen Sie sofort etwas Süßes und rufen Sie uns an.",
      },
    ],
  },

  // Italian — mental health intake (B2)
  {
    id: "seed-it-medical-mentalhealth",
    title: "Salute Mentale",
    subtitle: "Prima visita psichiatrica",
    language: "Italian",
    targetLabel: "Italiano",
    flag: "🇮🇹",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "Thank you for coming in today. Everything we discuss here is confidential.",
        target: "Grazie di essere venuto oggi. Tutto ciò di cui parliamo qui è riservato.",
      },
      {
        en: "Can you tell me, in your own words, what brought you to the clinic?",
        target: "Può raccontarmi, con parole sue, cosa l'ha portata in clinica?",
      },
      {
        en: "How long have you been feeling this way? Has it gotten worse recently?",
        target: "Da quanto tempo si sente così? È peggiorato di recente?",
      },
      {
        en: "How is your sleep — are you having trouble falling asleep or waking up early?",
        target: "Come dorme — ha difficoltà ad addormentarsi o si sveglia presto?",
      },
      {
        en: "How is your appetite, and have you noticed changes in your weight?",
        target: "Come va l'appetito e ha notato cambiamenti nel peso?",
      },
      {
        en: "Do you ever have thoughts of hurting yourself or of not wanting to be alive?",
        target: "Le capita mai di pensare di farsi del male o di non voler più vivere?",
      },
      {
        en: "Are you using alcohol, cannabis, or other substances to cope with these feelings?",
        target: "Sta usando alcol, cannabis o altre sostanze per gestire queste sensazioni?",
      },
      {
        en: "I would like to suggest a combined approach: medication and talk therapy.",
        target: "Vorrei proporle un approccio combinato: farmaci e psicoterapia.",
      },
      {
        en: "I am going to prescribe a low dose of an antidepressant to start, with weekly follow-up.",
        target:
          "Le prescriverò una bassa dose di antidepressivo per iniziare, con un controllo settimanale.",
      },
      {
        en: "If you have an emergency or feel unsafe, please call this 24-hour crisis line.",
        target:
          "In caso di emergenza o se non si sente al sicuro, chiami questo numero verde attivo 24 ore.",
      },
    ],
  },

  // Japanese — patient education for chronic disease (B1)
  {
    id: "seed-ja-medical-chronic-edu",
    title: "慢性疾患の患者教育",
    subtitle: "高血圧の生活指導",
    language: "Japanese",
    targetLabel: "日本語",
    flag: "🇯🇵",
    section: "culture",
    available: true,
    level: "B1",
    sentences: [
      {
        en: "Today I would like to talk with you about how to manage your high blood pressure at home.",
        target: "今日は、ご自宅での高血圧の管理方法についてお話ししたいと思います。",
      },
      {
        en: "Please measure your blood pressure twice a day, in the morning and at night.",
        target: "血圧は1日2回、朝と夜に測ってください。",
      },
      {
        en: "Sit quietly for five minutes before measuring, and write down the numbers.",
        target: "測定の前に5分間静かに座ってから測り、数値を記録してください。",
      },
      {
        en: "Try to reduce salt in your meals — less than six grams per day is the goal.",
        target: "食事の塩分を減らすようにしてください。1日6グラム未満が目標です。",
      },
      {
        en: "Walking 30 minutes a day, five days a week, is very helpful.",
        target: "週5日、1日30分のウォーキングがとても役立ちます。",
      },
      {
        en: "Please take your medicine at the same time every day, even if you feel well.",
        target: "体調が良くても、毎日同じ時間に薬を飲んでください。",
      },
      {
        en: "Do not stop the medicine on your own without talking to your doctor.",
        target: "医師に相談せずに、自分の判断で薬をやめないでください。",
      },
      {
        en: "If you have a headache, dizziness, or chest pain, please contact us right away.",
        target: "頭痛、めまい、胸の痛みがあれば、すぐにご連絡ください。",
      },
      {
        en: "Bring your blood pressure record to your next appointment in one month.",
        target: "1か月後の次回の診察に、血圧の記録をお持ちください。",
      },
    ],
  },

  // French — specialist case presentation (C1)
  {
    id: "seed-fr-medical-case-presentation",
    title: "Présentation de Cas Clinique",
    subtitle: "Consultation pluridisciplinaire en oncologie",
    language: "French",
    targetLabel: "Français",
    flag: "🇫🇷",
    section: "culture",
    available: true,
    level: "C1",
    sentences: [
      {
        en: "I am presenting Madame Laurent, a 58-year-old woman, for a multidisciplinary tumor board discussion.",
        target:
          "Je présente Madame Laurent, une femme de 58 ans, pour une discussion en réunion de concertation pluridisciplinaire.",
      },
      {
        en: "Her past medical history is significant for stage one breast cancer treated with lumpectomy and radiation in 2019.",
        target:
          "Ses antécédents notables comprennent un cancer du sein de stade I traité par tumorectomie et radiothérapie en 2019.",
      },
      {
        en: "She presented with progressive abdominal pain and a 12-kilogram weight loss over the past three months.",
        target:
          "Elle s'est présentée avec une douleur abdominale progressive et une perte de poids de 12 kilos sur les trois derniers mois.",
      },
      {
        en: "Imaging revealed a 4-centimeter pancreatic head mass with multiple hepatic metastases.",
        target:
          "L'imagerie a révélé une masse de 4 centimètres au niveau de la tête du pancréas avec de multiples métastases hépatiques.",
      },
      {
        en: "Endoscopic ultrasound-guided fine needle aspiration confirmed a moderately differentiated adenocarcinoma.",
        target:
          "La cytoponction guidée par échoendoscopie a confirmé un adénocarcinome modérément différencié.",
      },
      {
        en: "Molecular profiling is pending, but we have already requested testing for BRCA mutations and microsatellite instability.",
        target:
          "Le profilage moléculaire est en attente, mais nous avons déjà demandé une recherche de mutations BRCA et d'instabilité microsatellitaire.",
      },
      {
        en: "Given the metastatic disease, surgical resection is not currently indicated.",
        target:
          "Compte tenu de la maladie métastatique, la résection chirurgicale n'est pas actuellement indiquée.",
      },
      {
        en: "I propose initiating first-line FOLFIRINOX, with a reassessment after four cycles.",
        target:
          "Je propose d'initier un FOLFIRINOX en première ligne, avec une réévaluation après quatre cycles.",
      },
      {
        en: "We should also coordinate with palliative care early to address symptom management and goals of care.",
        target:
          "Nous devrions également coordonner précocement avec les soins palliatifs pour aborder la gestion symptomatique et les objectifs thérapeutiques.",
      },
      {
        en: "I welcome the team's input on the proposed regimen and on the timing of biliary drainage if needed.",
        target:
          "J'attends les commentaires de l'équipe sur le protocole proposé et sur le moment opportun pour un drainage biliaire si nécessaire.",
      },
    ],
  },
];
