import type { LibrarySeed } from "./_types";

export const TRANSPORT_AGRI_SEEDS: LibrarySeed[] = [
  // ── AUTO MECHANIC ──────────────────────────────────────────────────────────

  {
    id: "seed-es-mechanic-brake",
    title: "Frenos y Sistema de Frenado",
    subtitle: "Brake repair order — customer advisory",
    language: "Spanish",
    targetLabel: "Español",
    flag: "🇲🇽",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "The brake pads on the front axle are down to two millimeters — well below the safe limit.",
        target: "Las balatas del eje delantero tienen solo dos milímetros — muy por debajo del límite seguro.",
      },
      {
        en: "I need to turn the rotors if they're within spec, or replace them if they're under minimum thickness.",
        target: "Necesito tornear los discos si están dentro de especificación, o reemplazarlos si están por debajo del espesor mínimo.",
      },
      {
        en: "We also found brake fluid that's dark and contaminated — a flush is strongly recommended.",
        target: "También encontramos líquido de frenos oscuro y contaminado — se recomienda un cambio completo.",
      },
      {
        en: "The rear calipers are seized and not releasing evenly, which is causing premature pad wear.",
        target: "Las pinzas traseras están agarrotadas y no sueltan de manera uniforme, lo que provoca desgaste prematuro de las balatas.",
      },
      {
        en: "I'm writing up the repair order now — parts and labor come to about $380.",
        target: "Estoy haciendo la orden de trabajo ahora — partes y mano de obra suman aproximadamente $380.",
      },
      {
        en: "We carry OEM-equivalent pads, or I can source factory parts if you prefer.",
        target: "Tenemos balatas equivalentes OEM, o puedo conseguir piezas originales si lo prefiere.",
      },
      {
        en: "The job will take about two hours once the parts arrive — I can have you out by noon.",
        target: "El trabajo tomará unas dos horas una vez que lleguen las piezas — puedo tenerlo listo antes del mediodía.",
      },
      {
        en: "After the brake job, I'll do a road test to confirm proper pedal feel and stopping distance.",
        target: "Después del trabajo de frenos, haré una prueba de carretera para confirmar el tacto del pedal y la distancia de frenado.",
      },
      {
        en: "Do you want me to also check the parking brake cable while it's all apart?",
        target: "¿Quiere que también revise el cable del freno de mano mientras está todo desmontado?",
      },
    ],
  },
  {
    id: "seed-fr-mechanic-engine",
    title: "Diagnostic Moteur",
    subtitle: "Engine diagnostic — check engine light",
    language: "French",
    targetLabel: "Français",
    flag: "🇫🇷",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "I plugged in the scan tool and pulled three fault codes — two are active, one is pending.",
        target: "J'ai branché l'outil de diagnostic et récupéré trois codes de défaut — deux sont actifs, un est en attente.",
      },
      {
        en: "The primary code is a P0301 — a misfire on cylinder one.",
        target: "Le code principal est un P0301 — un raté d'allumage sur le cylindre un.",
      },
      {
        en: "We'll start by replacing the coil pack and spark plug on that cylinder before going further.",
        target: "On commencera par remplacer la bobine d'allumage et la bougie sur ce cylindre avant d'aller plus loin.",
      },
      {
        en: "If the misfire comes back after that, we'll need to do a compression and leak-down test.",
        target: "Si le raté revient après ça, il faudra faire un test de compression et de perte de charge.",
      },
      {
        en: "There's also a code for the oxygen sensor downstream of the catalytic converter.",
        target: "Il y a aussi un code pour la sonde lambda en aval du catalyseur.",
      },
      {
        en: "The O2 sensor reading is lazy — it's not cycling the way it should.",
        target: "La lecture de la sonde O2 est lente — elle ne cycle pas comme elle le devrait.",
      },
      {
        en: "I recommend addressing the misfire first, then clearing codes and retesting the sensor.",
        target: "Je recommande de traiter d'abord le raté d'allumage, puis d'effacer les codes et de retester la sonde.",
      },
      {
        en: "Total estimate for both repairs is around €290 with parts and one hour of labor.",
        target: "L'estimation totale pour les deux réparations est d'environ 290 € avec les pièces et une heure de main-d'œuvre.",
      },
    ],
  },
  {
    id: "seed-de-mechanic-transmission",
    title: "Getriebeservice",
    subtitle: "Transmission service — fluid and diagnostic",
    language: "German",
    targetLabel: "Deutsch",
    flag: "🇩🇪",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "The automatic transmission fluid is dark brown and smells burnt — it needs an immediate change.",
        target: "Das Automatikgetriebeöl ist dunkelbraun und riecht verbrannt — es muss sofort gewechselt werden.",
      },
      {
        en: "When was the last time the transmission service was performed?",
        target: "Wann wurde das Getriebe zuletzt gewartet?",
      },
      {
        en: "We'll drop the pan, clean the magnet, replace the filter, and refill with the correct spec fluid.",
        target: "Wir nehmen die Ölwanne ab, reinigen den Magneten, wechseln den Filter und füllen mit dem richtigen Spezifikationsöl auf.",
      },
      {
        en: "The solenoid pack is showing wear — I'd like to do a pressure test to confirm before recommending replacement.",
        target: "Das Magnetventilpaket zeigt Verschleiß — ich möchte einen Drucktest durchführen, bevor ich einen Austausch empfehle.",
      },
      {
        en: "Torque converter lockup hesitation is often the first sign of solenoid problems.",
        target: "Zögerlichkeit beim Einrasten des Drehmomentwandlers ist oft das erste Anzeichen von Magnetventilproblemen.",
      },
      {
        en: "The repair order will document every step, including fluid type, quantity, and torque specs.",
        target: "Der Reparaturauftrag wird jeden Schritt dokumentieren, einschließlich Öltyp, Menge und Anzugsmomente.",
      },
      {
        en: "After service, I'll test drive it through all shift points to verify smooth operation.",
        target: "Nach der Wartung mache ich eine Probefahrt durch alle Schaltpunkte, um den reibungslosen Betrieb zu überprüfen.",
      },
      {
        en: "If the hesitation persists after service, we may be looking at a valve body rebuild.",
        target: "Wenn das Zögern nach der Wartung weiterbesteht, müssen wir möglicherweise den Ventilkörper überholen.",
      },
      {
        en: "Total for the transmission service is €185, including labor and OEM-spec ATF.",
        target: "Die Getriebeinspektion kostet insgesamt 185 €, einschließlich Arbeit und OEM-spezifischem Automatikgetriebeöl.",
      },
    ],
  },
  {
    id: "seed-it-mechanic-alignment",
    title: "Assetto e Allineamento",
    subtitle: "Wheel alignment and tire rotation",
    language: "Italian",
    targetLabel: "Italiano",
    flag: "🇮🇹",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "Your front tires are worn unevenly on the inside edge — that's a classic sign of negative camber.",
        target: "I tuoi pneumatici anteriori sono usurati in modo non uniforme sul bordo interno — è un segnale classico di campanatura negativa.",
      },
      {
        en: "Before we do new tires, let's get an alignment to find out how far out of spec you are.",
        target: "Prima di montare gomme nuove, facciamo un assetto per capire quanto siete fuori specifica.",
      },
      {
        en: "I'll put it on the alignment rack and take a baseline reading on all four corners.",
        target: "Lo metterò sulla plancia di assetto e prenderò una lettura di base su tutti e quattro gli angoli.",
      },
      {
        en: "The caster and toe values are adjustable, but camber on this model requires an aftermarket kit.",
        target: "I valori di caster e convergenza sono regolabili, ma la campanatura su questo modello richiede un kit aftermarket.",
      },
      {
        en: "I'm also going to rotate the tires front to rear while we have it in the air.",
        target: "Farò anche la rotazione dei pneumatici da davanti a dietro mentre è sollevata.",
      },
      {
        en: "After alignment, your steering wheel should sit perfectly centered at highway speed.",
        target: "Dopo l'assetto, il volante dovrebbe stare perfettamente centrato alla velocità autostradale.",
      },
      {
        en: "The torque spec on the lug nuts is 110 foot-pounds — I always verify with a torque wrench.",
        target: "Il valore di coppia per i dadi delle ruote è 150 Nm — verifico sempre con una chiave dinamometrica.",
      },
      {
        en: "Full four-wheel alignment and tire rotation will be about €95.",
        target: "L'assetto completo a quattro ruote e la rotazione pneumatici costeranno circa 95 €.",
      },
    ],
  },
  {
    id: "seed-ja-mechanic-diagnostic",
    title: "車両診断作業",
    subtitle: "OBD diagnostic session — workshop floor",
    language: "Japanese",
    targetLabel: "日本語",
    flag: "🇯🇵",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "I'll connect the OBD-II scanner first to see what fault codes are stored in the ECU.",
        target: "まずOBD-IIスキャナーを接続して、ECUに記録されている故障コードを確認します。",
      },
      {
        en: "There are two codes: a P0420 for catalytic converter efficiency, and a P0171 for lean fuel trim.",
        target: "コードが2つあります：触媒コンバーターの効率に関するP0420と、燃料トリムが薄いP0171です。",
      },
      {
        en: "The lean condition could be caused by a vacuum leak, a dirty MAF sensor, or a weak fuel pump.",
        target: "希薄な状態は、バキュームリーク、MAFセンサーの汚れ、または燃料ポンプの劣化が原因の可能性があります。",
      },
      {
        en: "Let me spray carburetor cleaner around the intake manifold gaskets to check for vacuum leaks.",
        target: "インテークマニホールドガスケット周辺にキャブレタークリーナーを吹き付けてバキュームリークを確認します。",
      },
      {
        en: "Found it — the intake boot between the MAF sensor and throttle body has a crack.",
        target: "見つかりました。MAFセンサーとスロットルボディの間のインテークブーツにひびが入っています。",
      },
      {
        en: "Replacing that boot should fix the lean code and may also resolve the P0420 indirectly.",
        target: "そのブーツを交換すれば希薄コードが直り、P0420も間接的に解消される可能性があります。",
      },
      {
        en: "After the repair, I'll clear the codes and run the vehicle through a full drive cycle to confirm.",
        target: "修理後、コードをクリアして、確認のためにドライブサイクルを完全に実施します。",
      },
      {
        en: "Parts and labor for the intake boot will be approximately ¥12,000.",
        target: "インテークブーツの部品代と工賃は合計約12,000円になります。",
      },
    ],
  },
  {
    id: "seed-pt-mechanic-oilchange",
    title: "Troca de Óleo e Revisão",
    subtitle: "Oil change and multi-point inspection",
    language: "Portuguese",
    targetLabel: "Português",
    flag: "🇧🇷",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "The oil on the dipstick is black and gritty — you're about 2,000 kilometers overdue for a change.",
        target: "O óleo na vareta está preto e sujo — você está com cerca de 2.000 quilômetros de atraso para a troca.",
      },
      {
        en: "What oil spec does your vehicle call for — 5W-30 or 5W-40?",
        target: "Qual especificação de óleo seu veículo exige — 5W-30 ou 5W-40?",
      },
      {
        en: "I'll also replace the oil filter and do a complete multi-point inspection while it's on the lift.",
        target: "Também vou trocar o filtro de óleo e fazer uma inspeção completa de múltiplos pontos enquanto está no elevador.",
      },
      {
        en: "Your air filter is very dirty — it's restricting airflow and affecting fuel economy.",
        target: "Seu filtro de ar está muito sujo — está restringindo o fluxo de ar e afetando a economia de combustível.",
      },
      {
        en: "The serpentine belt shows surface cracking — it's not critical yet, but worth noting.",
        target: "A correia serpentina mostra rachaduras superficiais — ainda não é crítico, mas vale registrar.",
      },
      {
        en: "Coolant level is good, but the color is orange-brown, which means it's due for a flush.",
        target: "O nível do líquido de arrefecimento está bom, mas a cor está alaranjada e marrom, o que indica que precisa de troca.",
      },
      {
        en: "I'll print the full inspection report so you can see everything we checked today.",
        target: "Vou imprimir o relatório completo de inspeção para que você veja tudo que verificamos hoje.",
      },
      {
        en: "Oil change, filter, and the inspection comes to R$180 — takes about 45 minutes.",
        target: "A troca de óleo, filtro e a inspeção ficam em R$180 — leva cerca de 45 minutos.",
      },
    ],
  },

  // ── TRUCK DRIVER ───────────────────────────────────────────────────────────

  {
    id: "seed-es-truck-logbook",
    title: "Bitácora y Cumplimiento DOT",
    subtitle: "Logbook hours — weigh station conversation",
    language: "Spanish",
    targetLabel: "Español",
    flag: "🇲🇽",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "Pull over to the scale — I need to verify your gross vehicle weight and axle weights.",
        target: "Orílese a la báscula — necesito verificar su peso bruto vehicular y el peso por eje.",
      },
      {
        en: "You're at 79,800 pounds gross — that's just under the 80,000-pound federal limit.",
        target: "Pesa 79,800 libras brutas — justo por debajo del límite federal de 80,000 libras.",
      },
      {
        en: "Let me see your logbook and your last two days of hours of service.",
        target: "Déjeme ver su bitácora y sus últimas dos jornadas de horas de servicio.",
      },
      {
        en: "According to your log, you've used 9 of your 11 allowed driving hours today.",
        target: "Según su bitácora, ha utilizado 9 de sus 11 horas de conducción permitidas hoy.",
      },
      {
        en: "Make sure your 30-minute rest break is properly noted — inspectors look for that.",
        target: "Asegúrese de que su descanso de 30 minutos esté correctamente anotado — los inspectores lo revisan.",
      },
      {
        en: "Your manifest matches the bill of lading — load looks good from a paperwork standpoint.",
        target: "Su manifiesto coincide con el conocimiento de embarque — la carga está bien desde el punto de vista documental.",
      },
      {
        en: "I need to verify your hazmat placard matches what's listed on the shipping papers.",
        target: "Necesito verificar que su placa de materiales peligrosos coincida con lo indicado en los documentos de envío.",
      },
      {
        en: "You're cleared to go — have a safe run and watch for construction on I-80 eastbound.",
        target: "Está autorizado para continuar — tenga un viaje seguro y preste atención a la obra en la I-80 en dirección este.",
      },
      {
        en: "Next weigh station is about 90 miles out — keep your paperwork accessible.",
        target: "La siguiente báscula está a unos 90 millas — tenga su documentación a la mano.",
      },
    ],
  },
  {
    id: "seed-fr-truck-dispatch",
    title: "Communication Dispatching",
    subtitle: "Dispatch radio — delivery coordination",
    language: "French",
    targetLabel: "Français",
    flag: "🇫🇷",
    section: "culture",
    available: true,
    level: "B1",
    sentences: [
      {
        en: "Dispatch, this is unit 47 — I'm loaded and leaving the yard, heading for the Lyon depot.",
        target: "Dispatch, ici le véhicule 47 — je suis chargé et je quitte le dépôt, direction Lyon.",
      },
      {
        en: "Roger that, 47 — your delivery window at Lyon is between 14h00 and 16h00.",
        target: "Reçu, 47 — votre créneau de livraison à Lyon est entre 14h00 et 16h00.",
      },
      {
        en: "I've got a weight of 24 tonnes on the trailer — all sealed and strapped to spec.",
        target: "J'ai 24 tonnes sur la remorque — tout est scellé et arrimé selon les normes.",
      },
      {
        en: "There's a traffic jam on the A6 — I'm rerouting via the A7 to avoid a 45-minute delay.",
        target: "Il y a un bouchon sur l'A6 — je dévie par l'A7 pour éviter 45 minutes de retard.",
      },
      {
        en: "Copy that — update your ETA in the tracking system and notify the receiver.",
        target: "Reçu — mettez à jour votre ETA dans le système de suivi et avertissez le destinataire.",
      },
      {
        en: "I'm stopping at the rest area near Vienne — I need my mandatory 45-minute break.",
        target: "Je m'arrête à l'aire de repos près de Vienne — j'ai besoin de ma pause obligatoire de 45 minutes.",
      },
      {
        en: "Can you confirm the dock number at Lyon? The manifest says dock 7 but the receiver said dock 12.",
        target: "Pouvez-vous confirmer le numéro de quai à Lyon ? Le manifeste indique le quai 7 mais le destinataire a dit le quai 12.",
      },
      {
        en: "I'll call the Lyon dock directly to confirm — stand by on channel 9.",
        target: "Je vais appeler directement le quai de Lyon pour confirmer — restez sur le canal 9.",
      },
    ],
  },
  {
    id: "seed-de-truck-border",
    title: "Grenzübergang und Zoll",
    subtitle: "Border crossing — customs documentation",
    language: "German",
    targetLabel: "Deutsch",
    flag: "🇩🇪",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "Please have your CMR waybill, customs declaration, and driver's license ready.",
        target: "Bitte halten Sie Ihren CMR-Frachtbrief, die Zollerklärung und Ihren Führerschein bereit.",
      },
      {
        en: "What are you hauling, and what is the declared customs value of the load?",
        target: "Was transportieren Sie, und was ist der angemeldete Zollwert der Ladung?",
      },
      {
        en: "The load is 18 pallets of automotive parts — total declared value is €42,000.",
        target: "Die Ladung besteht aus 18 Paletten Kfz-Teilen — der Gesamtdeklarationswert beträgt 42.000 €.",
      },
      {
        en: "Pull around to bay 3 — we need to do a physical inspection of the cargo.",
        target: "Fahren Sie bitte zu Halle 3 — wir müssen eine physische Kontrolle der Ladung durchführen.",
      },
      {
        en: "The seals on the trailer match the numbers on the transit document — everything checks out.",
        target: "Die Plomben am Auflieger stimmen mit den Nummern auf dem Versandpapier überein — alles ist in Ordnung.",
      },
      {
        en: "Your cabotage permit is valid for two more days — make sure you exit Germany before it expires.",
        target: "Ihre Kabotage-Genehmigung ist noch zwei Tage gültig — stellen Sie sicher, dass Sie Deutschland vor dem Ablauf verlassen.",
      },
      {
        en: "The toll transponder for German autobahns must be activated before you proceed.",
        target: "Das Mautgerät für deutsche Autobahnen muss aktiviert sein, bevor Sie weiterfahren.",
      },
      {
        en: "You're cleared — proceed to the exit lane. Safe travels.",
        target: "Sie sind freigegeben — fahren Sie zur Ausfahrt. Gute Fahrt.",
      },
    ],
  },
  {
    id: "seed-it-truck-loading",
    title: "Carico e Documenti di Trasporto",
    subtitle: "Loading dock — manifest verification",
    language: "Italian",
    targetLabel: "Italiano",
    flag: "🇮🇹",
    section: "culture",
    available: true,
    level: "B1",
    sentences: [
      {
        en: "Back the truck up to dock number 4 — we'll start loading in about 20 minutes.",
        target: "Fate retromarcia fino alla banchina numero 4 — iniziamo a caricare tra circa 20 minuti.",
      },
      {
        en: "I need you to sign the bill of lading before we release the load.",
        target: "Ho bisogno che firmi la bolla di accompagnamento prima di rilasciare il carico.",
      },
      {
        en: "The manifest says 240 cases of olive oil — make sure the pallet count matches before you leave.",
        target: "Il manifesto indica 240 casse di olio d'oliva — assicurati che il conteggio dei pallet corrisponda prima di partire.",
      },
      {
        en: "The stretch wrap on pallet 3 is damaged — we need to rewrap it before loading.",
        target: "Il film estensibile sul pallet 3 è danneggiato — dobbiamo avvolgerlo di nuovo prima del carico.",
      },
      {
        en: "What's the maximum load height for your trailer? We need to know before we stack.",
        target: "Qual è l'altezza massima del carico per il tuo rimorchio? Dobbiamo saperlo prima di impilare.",
      },
      {
        en: "Temperature in the reefer unit is set to 4 degrees Celsius — confirm on your end.",
        target: "La temperatura nell'unità refrigerante è impostata a 4 gradi Celsius — conferma dalla tua parte.",
      },
      {
        en: "Total weight loaded is 19.4 tonnes — you are well within your axle weight limits.",
        target: "Il peso totale caricato è 19,4 tonnellate — sei ampiamente entro i limiti di peso per asse.",
      },
      {
        en: "Here's your delivery receipt — keep a copy and leave the original at the destination.",
        target: "Ecco la tua ricevuta di consegna — tieni una copia e lascia l'originale alla destinazione.",
      },
    ],
  },
  {
    id: "seed-ja-truck-route",
    title: "ルート計画と運行管理",
    subtitle: "Route planning — dispatch and delivery",
    language: "Japanese",
    targetLabel: "日本語",
    flag: "🇯🇵",
    section: "culture",
    available: true,
    level: "B1",
    sentences: [
      {
        en: "Today's route has three stops — first delivery is in Osaka, then Kobe, then back to the depot.",
        target: "本日のルートは3箇所です。最初の納品は大阪、次に神戸、そして車庫に戻ります。",
      },
      {
        en: "Make sure your tachograph is running from the moment you leave the yard.",
        target: "車庫を出た瞬間からタコグラフが作動していることを確認してください。",
      },
      {
        en: "The load is 8 tonnes of refrigerated food — keep the reefer at minus 18 degrees throughout.",
        target: "積み荷は8トンの冷凍食品です。配送中は常に冷凍庫をマイナス18度に保ってください。",
      },
      {
        en: "There is a height restriction of 3.8 meters on the Kobe delivery route — use the alternate road.",
        target: "神戸への配送ルートには3.8メートルの高さ制限があります。迂回路を使用してください。",
      },
      {
        en: "Call the receiver 30 minutes before arrival so they can open the unloading bay.",
        target: "到着30分前に荷受人に連絡して、荷降ろし場を開けてもらえるようにしてください。",
      },
      {
        en: "If the receiver is not there when you arrive, contact dispatch immediately.",
        target: "到着時に荷受人がいない場合は、すぐに配車担当に連絡してください。",
      },
      {
        en: "After unloading, get the delivery note stamped and signed — do not leave without it.",
        target: "荷降ろし後、納品書にスタンプと署名をもらってください。なしで離れないこと。",
      },
      {
        en: "Your driving hours today must not exceed 9 hours — log every rest stop.",
        target: "本日の運転時間は9時間を超えてはなりません。すべての休憩を記録してください。",
      },
    ],
  },
  {
    id: "seed-pt-truck-cbradio",
    title: "CB Radio e Comunicação na Estrada",
    subtitle: "CB radio talk — road communication",
    language: "Portuguese",
    targetLabel: "Português",
    flag: "🇧🇷",
    section: "culture",
    available: true,
    level: "B1",
    sentences: [
      {
        en: "Hey driver, what's the road condition ahead on the BR-116 toward Curitiba?",
        target: "Ei motorista, como está a estrada à frente na BR-116 em direção a Curitiba?",
      },
      {
        en: "It's all clear until kilometer 320 — there's a weighing station at 340, though.",
        target: "Tá tranquilo até o quilômetro 320 — tem uma balança no 340, porém.",
      },
      {
        en: "Copy that — what's the gross weight limit at that station?",
        target: "Entendido — qual é o limite de peso bruto nessa balança?",
      },
      {
        en: "It's the standard 74 tonnes for a full combination truck — you should be fine.",
        target: "É o padrão de 74 toneladas para um conjunto completo — você deve estar bem.",
      },
      {
        en: "There's a fuel stop with a truck park at kilometer 355 if you need to rest.",
        target: "Tem um posto de combustível com pátio de caminhões no quilômetro 355 se precisar descansar.",
      },
      {
        en: "Watch out — there's a pothole that'll eat your front axle near kilometer 290.",
        target: "Cuidado — tem uma cratera que come o seu eixo dianteiro perto do quilômetro 290.",
      },
      {
        en: "Thanks for the tip, brother. Any police presence on the route today?",
        target: "Valeu a dica, irmão. Tem presença policial na rota hoje?",
      },
      {
        en: "Nothing between here and Curitiba — smooth run all the way. Good luck.",
        target: "Nada entre aqui e Curitiba — viagem tranquila até o fim. Boa sorte.",
      },
      {
        en: "I'll return the favor on the way back — I'll be on this channel all day.",
        target: "Vou retribuir na volta — fico neste canal o dia todo.",
      },
    ],
  },

  // ── CONSTRUCTION FOREMAN ───────────────────────────────────────────────────

  {
    id: "seed-es-construction-blueprint",
    title: "Revisión de Planos con el Subcontratista",
    subtitle: "Blueprint review — subcontractor coordination",
    language: "Spanish",
    targetLabel: "Español",
    flag: "🇲🇽",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "Gather around the blueprints — we need to go over the foundation layout before your crew starts.",
        target: "Júntense alrededor de los planos — necesitamos repasar el diseño de la cimentación antes de que su cuadrilla comience.",
      },
      {
        en: "The structural engineer revised the rebar schedule — the updated drawings are what we're working from today.",
        target: "El ingeniero estructural revisó el plan de varilla — los planos actualizados son con los que trabajamos hoy.",
      },
      {
        en: "On sheet A3, the footing depth along the north wall changes from 18 inches to 24 inches.",
        target: "En la hoja A3, la profundidad del cimiento a lo largo de la pared norte cambia de 18 pulgadas a 24 pulgadas.",
      },
      {
        en: "Do NOT use the old drawings — I saw someone with a revision-1 set this morning and that's a problem.",
        target: "NO usen los planos anteriores — vi a alguien con un juego de revisión-1 esta mañana y eso es un problema.",
      },
      {
        en: "The electrical subcontractor needs to coordinate conduit sleeves before the slab is poured.",
        target: "El subcontratista eléctrico necesita coordinar los tubos conduit antes de que se vierta la losa.",
      },
      {
        en: "What is your crew's pour date? We need to confirm with the ready-mix plant 48 hours in advance.",
        target: "¿Cuál es la fecha de colado de su cuadrilla? Necesitamos confirmar con la planta de concreto con 48 horas de anticipación.",
      },
      {
        en: "The permit card stays on the fence post until the building inspector closes it out.",
        target: "La tarjeta del permiso se queda en el poste de la cerca hasta que el inspector de edificación la cierre.",
      },
      {
        en: "If you hit any underground utilities during excavation, stop immediately and call the line locating service.",
        target: "Si encuentran servicios subterráneos durante la excavación, deténganse de inmediato y llamen al servicio de localización de líneas.",
      },
      {
        en: "Any questions on the blueprint before we break up and get to work?",
        target: "¿Alguna pregunta sobre los planos antes de separarnos y ponernos a trabajar?",
      },
    ],
  },
  {
    id: "seed-fr-construction-inspection",
    title: "Préparation à l'Inspection",
    subtitle: "Inspection readiness — site walk",
    language: "French",
    targetLabel: "Français",
    flag: "🇫🇷",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "The building inspector arrives at 8:00 — I need all crews to have their areas clean and accessible.",
        target: "L'inspecteur du bâtiment arrive à 8h00 — j'ai besoin que toutes les équipes aient leurs zones propres et accessibles.",
      },
      {
        en: "The rough framing inspection covers floor, wall, and roof framing — everything must be visible.",
        target: "L'inspection du gros œuvre porte sur le plancher, les murs et la charpente — tout doit être visible.",
      },
      {
        en: "Make sure all temporary bracing is still in place — the inspector will check lateral stability.",
        target: "Assurez-vous que tous les étrésillons temporaires sont encore en place — l'inspecteur vérifiera la stabilité latérale.",
      },
      {
        en: "The permit must be posted on the exterior fence — is it still there after last night's wind?",
        target: "Le permis doit être affiché sur la clôture extérieure — est-il encore là après le vent d'hier soir ?",
      },
      {
        en: "Subcontractors: your work areas need to be clear of debris before the inspector walks through.",
        target: "Sous-traitants : vos zones de travail doivent être dégagées des débris avant le passage de l'inspecteur.",
      },
      {
        en: "If the inspector finds a deficiency, we stop work in that section until it's corrected and re-inspected.",
        target: "Si l'inspecteur constate une déficience, nous arrêtons le travail dans cette section jusqu'à correction et nouvelle inspection.",
      },
      {
        en: "The schedule shows we need this inspection passed by Thursday to stay on track for the concrete pour.",
        target: "Le calendrier montre que nous devons passer cette inspection avant jeudi pour respecter le programme du coulage de béton.",
      },
      {
        en: "Any questions about what the inspector is looking for? I've done 40 of these — ask me now.",
        target: "Des questions sur ce que l'inspecteur cherche ? J'en ai fait 40 — posez vos questions maintenant.",
      },
    ],
  },
  {
    id: "seed-de-construction-schedule",
    title: "Terminplanung und Nachunternehmer",
    subtitle: "Schedule coordination — subcontractors",
    language: "German",
    targetLabel: "Deutsch",
    flag: "🇩🇪",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "We are currently three days behind schedule on the foundation work — we need to make that up.",
        target: "Wir liegen derzeit drei Tage hinter dem Zeitplan bei den Fundamentarbeiten — das müssen wir aufholen.",
      },
      {
        en: "The concrete subcontractor cannot begin until the formwork is completed and inspected.",
        target: "Der Betonsubunternehmer kann nicht beginnen, bis die Schalung fertiggestellt und abgenommen ist.",
      },
      {
        en: "I need your crew to work an extra two hours tomorrow to keep the formwork on schedule.",
        target: "Ich brauche Ihre Mannschaft, um morgen zwei Stunden länger zu arbeiten, damit die Schalung im Zeitplan bleibt.",
      },
      {
        en: "The electrical crew is coming on Tuesday — the rough framing must be done before they arrive.",
        target: "Die Elektromannschaft kommt am Dienstag — der Rohbau muss fertig sein, bevor sie ankommen.",
      },
      {
        en: "If we fall further behind, the penalty clause in the contract becomes active on day 10.",
        target: "Wenn wir weiter zurückfallen, tritt die Vertragsstrafe am 10. Tag in Kraft.",
      },
      {
        en: "Update the project schedule in the site binder every day — the GC reviews it each morning.",
        target: "Aktualisieren Sie den Projektzeitplan täglich im Baustellenordner — der Generalunternehmer überprüft ihn jeden Morgen.",
      },
      {
        en: "Material deliveries for the week are: rebar Tuesday, formwork panels Wednesday, concrete Friday.",
        target: "Materiallieferungen für die Woche: Bewehrungsstahl Dienstag, Schalungsplatten Mittwoch, Beton Freitag.",
      },
      {
        en: "Any subcontractor who needs a schedule change must submit a written request by end of day.",
        target: "Jeder Nachunternehmer, der eine Terminänderung benötigt, muss bis Tagesende einen schriftlichen Antrag einreichen.",
      },
      {
        en: "Let's meet again at 3:00 PM to assess progress and adjust tomorrow's assignments.",
        target: "Treffen wir uns wieder um 15:00 Uhr, um den Fortschritt zu bewerten und die Aufgaben für morgen anzupassen.",
      },
    ],
  },
  {
    id: "seed-it-construction-permit",
    title: "Permessi e Conformità di Cantiere",
    subtitle: "Permit and site compliance",
    language: "Italian",
    targetLabel: "Italiano",
    flag: "🇮🇹",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "The building permit was just approved — we can start demolition on Monday morning.",
        target: "Il permesso edilizio è stato approvato — possiamo iniziare la demolizione lunedì mattina.",
      },
      {
        en: "Keep the permit posted on the exterior hoarding — the municipality can stop the job if it's missing.",
        target: "Tieni il permesso esposto sul pannello esterno — il comune può fermare i lavori se manca.",
      },
      {
        en: "We need to notify the utility companies 72 hours before we start any underground excavation.",
        target: "Dobbiamo notificare le aziende di servizi 72 ore prima di iniziare qualsiasi scavo sotterraneo.",
      },
      {
        en: "The structural engineer must sign off on the rebar placement before we pour the slab.",
        target: "L'ingegnere strutturale deve approvare il posizionamento del ferro prima che coleiamo la soletta.",
      },
      {
        en: "There is an asbestos survey requirement before any demolition work on the east wing.",
        target: "È richiesta una perizia amianto prima di qualsiasi lavoro di demolizione sull'ala est.",
      },
      {
        en: "All workers must have their competence cards on them during the inspection.",
        target: "Tutti i lavoratori devono avere con sé il tesserino di idoneità durante l'ispezione.",
      },
      {
        en: "Safety coordinator: I need the risk assessment document updated before Friday.",
        target: "Coordinatore della sicurezza: ho bisogno del documento di valutazione dei rischi aggiornato entro venerdì.",
      },
      {
        en: "Any change to the scope of work that affects structure or fire safety needs a permit amendment.",
        target: "Qualsiasi modifica al progetto che riguardi la struttura o la sicurezza antincendio richiede una variante al permesso.",
      },
    ],
  },
  {
    id: "seed-ja-construction-crew",
    title: "現場クルー管理",
    subtitle: "Crew briefing — deadline and safety",
    language: "Japanese",
    targetLabel: "日本語",
    flag: "🇯🇵",
    section: "culture",
    available: true,
    level: "B1",
    sentences: [
      {
        en: "Listen up — we have a hard deadline of Friday for the concrete pour, so every crew member needs to be focused.",
        target: "よく聞いてください。金曜日のコンクリート打設に絶対的な締め切りがあります。全員が集中する必要があります。",
      },
      {
        en: "Today we finish the rebar placement on the east foundation wall — no exceptions.",
        target: "今日は東側基礎壁の鉄筋設置を完了します。例外はありません。",
      },
      {
        en: "The scaffold must be inspected before any worker steps on it — foreman signs off, no shortcuts.",
        target: "足場は作業員が乗る前に必ず点検してください。現場監督が承認します。近道はなしです。",
      },
      {
        en: "Subcontractor for electrical conduit arrives at 10 AM — make sure they have clear access to the west wall.",
        target: "電気配管の下請け業者は午前10時に到着します。西側の壁への通路が確保されているようにしてください。",
      },
      {
        en: "Blueprints are in the site office — if you are unsure about a dimension, check them before you cut.",
        target: "設計図は現場事務所にあります。寸法が不明な場合は切断前に確認してください。",
      },
      {
        en: "Hard hats, safety boots, and hi-vis vests are mandatory on this site at all times.",
        target: "このサイトでは常に安全ヘルメット、安全靴、高視認性ベストが必須です。",
      },
      {
        en: "Report any unsafe condition to me immediately — do not wait until end of day.",
        target: "安全でない状況は直ちに私に報告してください。終業まで待たないこと。",
      },
      {
        en: "Let's have a brief at 3:30 PM to check progress and plan tomorrow's work.",
        target: "午後3時半に進捗確認と明日の作業計画のためのブリーフィングを行います。",
      },
    ],
  },
  {
    id: "seed-pt-construction-safety",
    title: "Segurança e Coordenação de Obra",
    subtitle: "Safety coordination — site meeting",
    language: "Portuguese",
    targetLabel: "Português",
    flag: "🇧🇷",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "Before we start, I need to run through the DDS — daily safety dialogue — for today's tasks.",
        target: "Antes de começar, preciso fazer o DDS — diálogo diário de segurança — para as tarefas de hoje.",
      },
      {
        en: "We're working at heights today — everyone on the scaffold must be tied off at 100%.",
        target: "Hoje trabalhamos em altura — todos no andaime precisam estar com 100% de ancoragem.",
      },
      {
        en: "The subcontractor for plumbing roughed-in needs to coordinate with the framing crew on the second floor.",
        target: "O subempreiteiro de encanamento de instalação precisa coordenar com a equipe de estrutura no segundo andar.",
      },
      {
        en: "Any worker without PPE will be removed from the site immediately — no exceptions.",
        target: "Qualquer trabalhador sem EPI será removido da obra imediatamente — sem exceções.",
      },
      {
        en: "The concrete pour is scheduled for Thursday at 6 AM — make sure the rebar is ready the night before.",
        target: "A concretagem está programada para quinta-feira às 6h — garanta que o ferreiro esteja pronto na noite anterior.",
      },
      {
        en: "We have a deadline penalty clause — every day past Friday costs the company R$5,000.",
        target: "Temos uma cláusula de multa por prazo — cada dia após sexta-feira custa R$5.000 à empresa.",
      },
      {
        en: "The municipal inspector will be here at 2 PM — all permits and inspection logs must be visible.",
        target: "O fiscal municipal estará aqui às 14h — todos os alvarás e registros de vistoria devem estar visíveis.",
      },
      {
        en: "Any questions? Good — let's get to work and make this a clean, safe day on the job.",
        target: "Alguma pergunta? Ótimo — vamos trabalhar e fazer deste dia um dia limpo e seguro na obra.",
      },
    ],
  },

  // ── DAIRY FARMER ──────────────────────────────────────────────────────────

  {
    id: "seed-es-dairy-milking",
    title: "Protocolo de Ordeña",
    subtitle: "Milking parlor — mastitis protocol",
    language: "Spanish",
    targetLabel: "Español",
    flag: "🇲🇽",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "Before milking, do a fore-strip on each quarter and check for clots or discoloration.",
        target: "Antes de ordeñar, haz una prueba previa en cada cuarto y revisa si hay coágulos o decoloración.",
      },
      {
        en: "If you see stringy or flaky milk, flag that cow and pull a sample for the California Mastitis Test.",
        target: "Si ves leche fibrosa o con escamas, marca esa vaca y toma una muestra para la prueba de mastitis de California.",
      },
      {
        en: "All cows positive on CMT go into the hospital pen — do not add their milk to the bulk tank.",
        target: "Todas las vacas positivas en CMT van al corral de hospital — no agreguen su leche al tanque de almacenamiento.",
      },
      {
        en: "Teat dip after every cow — pre-dip, dry with a clean towel, then attach the unit.",
        target: "Sella los pezones después de cada vaca — predipping, seca con una toalla limpia y luego coloca la unidad.",
      },
      {
        en: "The milking unit vacuum should be set at 42 kPa — check the gauge at the start of each shift.",
        target: "El vacío de la unidad de ordeño debe estar a 42 kPa — revisa el manómetro al inicio de cada turno.",
      },
      {
        en: "Average milking time per cow should be between 4 and 6 minutes — anything longer may indicate problems.",
        target: "El tiempo promedio de ordeño por vaca debe ser entre 4 y 6 minutos — cualquier tiempo mayor puede indicar problemas.",
      },
      {
        en: "Record milk weight for each cow in the herd management system after every milking.",
        target: "Registra el peso de leche de cada vaca en el sistema de gestión de hato después de cada ordeño.",
      },
      {
        en: "We're targeting a somatic cell count below 200,000 — the last test was 185,000, so keep it up.",
        target: "Estamos apuntando a un conteo de células somáticas por debajo de 200,000 — el último fue 185,000, así que sigan así.",
      },
    ],
  },
  {
    id: "seed-fr-dairy-feed",
    title: "Gestion de l'Alimentation du Troupeau",
    subtitle: "Feed management — ration and nutrition",
    language: "French",
    targetLabel: "Français",
    flag: "🇫🇷",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "The nutritionist revised the total mixed ration — the new formula increases corn silage by 2 kilos per cow.",
        target: "La nutritionniste a révisé la ration totale mélangée — la nouvelle formule augmente l'ensilage de maïs de 2 kilos par vache.",
      },
      {
        en: "Make sure the TMR mixer runs for at least 12 minutes to get a consistent blend.",
        target: "Assurez-vous que le mélangeur TMR tourne au moins 12 minutes pour obtenir un mélange homogène.",
      },
      {
        en: "The dry cows get a different ration — do not mix them with the lactating herd at the feed bunk.",
        target: "Les vaches taries ont une ration différente — ne les mélangez pas avec le troupeau en lactation à l'auge.",
      },
      {
        en: "Fresh heifers need extra attention the first 30 days — watch their dry matter intake closely.",
        target: "Les génisses fraîches nécessitent une attention particulière les 30 premiers jours — surveillez de près leur consommation de matière sèche.",
      },
      {
        en: "The pasture grass is going to seed — time to cut and bale the back fields this week.",
        target: "L'herbe des pâtures monte en graine — il est temps de couper et botteler les champs du fond cette semaine.",
      },
      {
        en: "Grain price is up — the nutritionist will look at substituting distillers grains to keep feed cost down.",
        target: "Le prix des céréales a augmenté — la nutritionniste va étudier la substitution par des drêches de distillerie pour réduire le coût alimentaire.",
      },
      {
        en: "Log every feed delivery in the farm record book — include date, supplier, quantity, and lot number.",
        target: "Consignez chaque livraison d'aliments dans le registre de la ferme — incluez la date, le fournisseur, la quantité et le numéro de lot.",
      },
      {
        en: "During the heat wave, push feed twice daily to keep intake up — cows go off feed in the heat.",
        target: "Pendant la canicule, poussez l'alimentation deux fois par jour pour maintenir la consommation — les vaches réduisent leur prise alimentaire par la chaleur.",
      },
    ],
  },
  {
    id: "seed-de-dairy-herd",
    title: "Herdengesundheit und Tierarzt",
    subtitle: "Herd health — veterinary communication",
    language: "German",
    targetLabel: "Deutsch",
    flag: "🇩🇪",
    section: "culture",
    available: true,
    level: "C1",
    sentences: [
      {
        en: "We have a cow down in pen 7 — she's been off feed since this morning and her temperature is 40.4°C.",
        target: "Wir haben eine liegende Kuh in Box 7 — sie frisst seit heute Morgen nichts mehr und hat 40,4°C Temperatur.",
      },
      {
        en: "Her rumen sounds are reduced on the left flank — I suspect left displacement of the abomasum.",
        target: "Ihre Pansengeräusche sind auf der linken Flanke reduziert — ich vermute eine linksseitige Labmagenverlagerung.",
      },
      {
        en: "Can you come out today? She's in early lactation and production has already dropped significantly.",
        target: "Können Sie heute kommen? Sie befindet sich in der frühen Laktation und die Milchleistung ist bereits deutlich gesunken.",
      },
      {
        en: "I also have four heifers ready for their pre-breeding reproductive exams.",
        target: "Ich habe auch vier Färsen bereit für ihre Reproduktionsuntersuchungen vor der Belegung.",
      },
      {
        en: "The vaccination schedule for the dry cows is due this week — BVD, IBR, and leptospirosis boosters.",
        target: "Der Impfplan für die trockenstehenden Kühe ist diese Woche fällig — BVD-, IBR- und Leptospirose-Auffrischungen.",
      },
      {
        en: "We've had three cases of digital dermatitis in the past month — I'd like to start a footbath program.",
        target: "Wir hatten im letzten Monat drei Fälle von Mortellaro — ich möchte ein Klauenbadprogramm einführen.",
      },
      {
        en: "Please write the withdrawal time on the milk discard card so nobody adds the treated cow to the tank.",
        target: "Bitte schreiben Sie die Wartezeit auf die Milchabgabekarte, damit niemand die behandelte Kuh in den Tank gibt.",
      },
      {
        en: "The bulk tank somatic cell count was 240,000 last pickup — we need to find the problem cows.",
        target: "Der somatische Zellgehalt des Sammeltanks lag beim letzten Abtransport bei 240.000 — wir müssen die Problemkühe finden.",
      },
    ],
  },
  {
    id: "seed-it-dairy-production",
    title: "Produzione e Qualità del Latte",
    subtitle: "Milk production — bulk tank and quality",
    language: "Italian",
    targetLabel: "Italiano",
    flag: "🇮🇹",
    section: "culture",
    available: true,
    level: "B1",
    sentences: [
      {
        en: "The milk hauler is coming at 5 AM — make sure the bulk tank is at 4 degrees Celsius.",
        target: "Il camion del latte arriva alle 5 — assicurati che il serbatoio del latte sia a 4 gradi Celsius.",
      },
      {
        en: "Check the tank agitator is running — milk must be stirred to stay at a uniform temperature.",
        target: "Controlla che l'agitatore del serbatoio funzioni — il latte deve essere agitato per mantenere una temperatura uniforme.",
      },
      {
        en: "The sampler will take a bacteria count and fat test — our last result was 3.8% fat, which is excellent.",
        target: "Il campionatore farà un conteggio batterico e un test del grasso — il nostro ultimo risultato era 3,8% di grasso, ottimo.",
      },
      {
        en: "Any cow treated with antibiotics must be milked last and her milk discarded for the withdrawal period.",
        target: "Qualsiasi vacca trattata con antibiotici deve essere munte per ultima e il suo latte scartato per il periodo di sospensione.",
      },
      {
        en: "The calf born last night is strong and nursing well — record her birth weight and tag number.",
        target: "Il vitello nato ieri notte è forte e si nutre bene — registra il suo peso alla nascita e il numero del tag.",
      },
      {
        en: "Colostrum from first-milking cows must be fed within 2 hours of calving for maximum immunity.",
        target: "Il colostro delle vacche al primo parto deve essere somministrato entro 2 ore dal parto per la massima immunità.",
      },
      {
        en: "We are producing 28 liters per cow per day this week — that's two liters above our target.",
        target: "Questa settimana produciamo 28 litri per vacca al giorno — due litri sopra il nostro obiettivo.",
      },
      {
        en: "The dairy cooperative will pay a quality premium if our SCC stays below 200,000 this quarter.",
        target: "La cooperativa lattiero-casearia pagherà un premio qualità se il nostro SCC rimane sotto 200.000 questo trimestre.",
      },
    ],
  },
  {
    id: "seed-ja-dairy-barn",
    title: "牛舎管理と搾乳",
    subtitle: "Barn management — milking and calf care",
    language: "Japanese",
    targetLabel: "日本語",
    flag: "🇯🇵",
    section: "culture",
    available: true,
    level: "B1",
    sentences: [
      {
        en: "Morning milking starts at 4:30 AM — all parlor equipment must be rinsed and ready before then.",
        target: "朝の搾乳は4時30分に始まります。その前にすべての搾乳施設の機器を洗浄して準備しておいてください。",
      },
      {
        en: "Pre-dip every teat, wipe dry with a clean individual cloth, then attach the milking unit.",
        target: "各乳頭を前搾り消毒し、清潔な個別タオルで拭き取り、搾乳ユニットを取り付けてください。",
      },
      {
        en: "Cow number 47 has been showing a drop in milk production — check her temperature before milking.",
        target: "47番の牛は産乳量が低下しています。搾乳前に体温を確認してください。",
      },
      {
        en: "Three calves were born this week — each one needs colostrum within the first two hours of life.",
        target: "今週3頭の子牛が生まれました。それぞれ生後2時間以内に初乳を与える必要があります。",
      },
      {
        en: "Clean and sanitize the calf barn stalls before moving any new calves in.",
        target: "新しい子牛を移動させる前に、子牛舎の牛房を清掃・消毒してください。",
      },
      {
        en: "The milk truck comes every other day — the bulk tank must be kept at 4 degrees Celsius.",
        target: "牛乳タンク車は2日おきに来ます。バルクタンクは4度に保つ必要があります。",
      },
      {
        en: "Vaccinations for the heifer group are scheduled for Tuesday — have the vet records ready.",
        target: "育成牛グループのワクチン接種は火曜日に予定されています。獣医の記録を準備しておいてください。",
      },
      {
        en: "Any cow with a swollen quarter needs to be reported to the herd manager immediately.",
        target: "乳房の一部が腫れている牛はすぐに農場管理者に報告してください。",
      },
    ],
  },
  {
    id: "seed-pt-dairy-pasture",
    title: "Pastagem e Manejo do Rebanho",
    subtitle: "Pasture rotation and herd management",
    language: "Portuguese",
    targetLabel: "Português",
    flag: "🇧🇷",
    section: "culture",
    available: true,
    level: "B1",
    sentences: [
      {
        en: "The front pasture is overgrazed — we need to move the herd to the east paddock today.",
        target: "O pasto da frente está superpastejado — precisamos mover o rebanho para o piquete leste hoje.",
      },
      {
        en: "Check all the electric fence lines before opening the gate — we had a short circuit last week.",
        target: "Verifique todas as linhas de cerca elétrica antes de abrir o portão — tivemos um curto-circuito semana passada.",
      },
      {
        en: "Water troughs in the east paddock need to be cleaned and refilled before the herd moves in.",
        target: "Os bebedouros do piquete leste precisam ser limpos e reabastecidos antes da chegada do rebanho.",
      },
      {
        en: "We have 85 lactating cows and 20 dry cows — keep them in separate pastures.",
        target: "Temos 85 vacas em lactação e 20 vacas secas — mantenha-as em piquetes separados.",
      },
      {
        en: "The pasture recovery period is 35 days — mark the entry date on the paddock board.",
        target: "O período de descanso do pasto é de 35 dias — marque a data de entrada no quadro do piquete.",
      },
      {
        en: "We should apply nitrogen fertilizer to the resting paddocks to accelerate regrowth.",
        target: "Devemos aplicar adubo nitrogenado nos piquetes em descanso para acelerar a rebrota.",
      },
      {
        en: "A calf got separated from its mother last night — do a head count and check the fences.",
        target: "Um bezerro se separou da mãe ontem à noite — faça a contagem e verifique as cercas.",
      },
      {
        en: "Breed identification and ear tag records must be updated every time an animal moves paddocks.",
        target: "Os registros de identificação racial e brinco devem ser atualizados toda vez que um animal mudar de piquete.",
      },
    ],
  },

  // ── RANCH COWBOY ──────────────────────────────────────────────────────────

  {
    id: "seed-es-ranch-roundup",
    title: "Rodeo y Manejo de Ganado",
    subtitle: "Cattle roundup — sorting and branding",
    language: "Spanish",
    targetLabel: "Español",
    flag: "🇲🇽",
    section: "culture",
    available: true,
    level: "B1",
    sentences: [
      {
        en: "We're gathering the south pasture today — I want everyone on horseback by sunup.",
        target: "Hoy juntamos el potrero sur — quiero a todos a caballo al amanecer.",
      },
      {
        en: "Split into two groups — one pushes from the creek, the other swings wide around the cedar breaks.",
        target: "Dividanse en dos grupos — uno empuja desde el arroyo, el otro rodea por los encinos.",
      },
      {
        en: "Don't rush the cattle — slow and steady gets them to the corral without stress.",
        target: "No apresuren al ganado — despacio y sin prisa los lleva al corral sin estresarlos.",
      },
      {
        en: "Once they're penned, we'll sort the calves for branding and the cows for preg-check.",
        target: "Una vez encerrados, separamos los becerros para herrar y las vacas para revisión de preñez.",
      },
      {
        en: "Have the branding iron hot and the vaccine syringes filled before the first calf goes in the chute.",
        target: "Ten el fierro bien caliente y las jeringas de vacuna listas antes de que entre el primer becerro al brete.",
      },
      {
        en: "Brand goes on the left hip — two-inch brand, clean contact, and hold for three seconds.",
        target: "La marca va en la anca izquierda — fierro de dos pulgadas, buen contacto, y sostén tres segundos.",
      },
      {
        en: "Tag every calf with the ranch number in the right ear and the birth year code in the left.",
        target: "Ponle arete a cada becerro con el número del rancho en la oreja derecha y el código del año en la izquierda.",
      },
      {
        en: "Any calf that looks off, flag it and we'll have the vet look at it before you turn it out.",
        target: "Cualquier becerro que se vea mal, márcalo y que el veterinario lo revise antes de soltarlo.",
      },
      {
        en: "Good work today, boys — let's get the horses put up and check on the water troughs before dark.",
        target: "Buen trabajo hoy, muchachos — guardemos los caballos y revisemos los bebederos antes de que anochezca.",
      },
    ],
  },
  {
    id: "seed-fr-ranch-fence",
    title: "Réparation de Clôtures et Gestion de Pâturage",
    subtitle: "Fence repair and pasture work",
    language: "French",
    targetLabel: "Français",
    flag: "🇫🇷",
    section: "culture",
    available: true,
    level: "B1",
    sentences: [
      {
        en: "The cattle got out on the north fence line last night — we need to find the break and fix it today.",
        target: "Le bétail s'est échappé sur la ligne de clôture nord cette nuit — il faut trouver la brèche et la réparer aujourd'hui.",
      },
      {
        en: "Load the truck with fence posts, wire, staples, and the post driver before we head out.",
        target: "Chargez le camion avec des poteaux, du fil de fer, des agrafes et le marteau de poteau avant qu'on parte.",
      },
      {
        en: "The wire is down in three sections near the creek — looks like a bull pushed through.",
        target: "Le fil est tombé en trois endroits près du ruisseau — on dirait qu'un taureau a forcé le passage.",
      },
      {
        en: "Splice the wire with a good tight fence knot — I don't want that section giving way again.",
        target: "Épissez le fil avec un bon nœud de clôture bien serré — je ne veux pas que cette section cède à nouveau.",
      },
      {
        en: "Set the corner post first, then work the line posts at 10-foot spacing back toward the gate.",
        target: "Posez d'abord le poteau d'angle, puis travaillez les poteaux de ligne à 3 mètres d'intervalle vers la porte.",
      },
      {
        en: "While you're out there, check the water trough in the north pasture — it's been low all week.",
        target: "Pendant que vous êtes là-bas, vérifiez l'abreuvoir dans le pâturage nord — il est bas toute la semaine.",
      },
      {
        en: "Move the herd to the south pasture until the fence is repaired and tested.",
        target: "Déplacez le troupeau vers le pâturage sud jusqu'à ce que la clôture soit réparée et testée.",
      },
      {
        en: "Keep an eye on the new calves while you ride the fence — it's easy to miss one hiding in the brush.",
        target: "Gardez un œil sur les nouveaux veaux pendant que vous parcourez la clôture — on en oublie facilement un caché dans les broussailles.",
      },
    ],
  },
  {
    id: "seed-de-ranch-cattle",
    title: "Viehhandel und Herdenverwaltung",
    subtitle: "Cattle sale — buyer negotiation",
    language: "German",
    targetLabel: "Deutsch",
    flag: "🇩🇪",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "I've got 40 steers ready for market — they're averaging 580 kilos on the hoof.",
        target: "Ich habe 40 Mastbullen marktreif — sie bringen durchschnittlich 580 Kilo auf dem Huf.",
      },
      {
        en: "What's your price per kilo for slaughter weight? I saw the market was at €2.80 last week.",
        target: "Was ist Ihr Preis pro Kilo Schlachtgewicht? Ich sah, dass der Markt letzte Woche bei 2,80 € lag.",
      },
      {
        en: "These cattle are all certified beef breed, vaccinated, and grass-finished for the last 90 days.",
        target: "Dieses Vieh ist alles zertifizierte Fleischrasse, geimpft und die letzten 90 Tage auf der Weide ausgemästet.",
      },
      {
        en: "I can arrange delivery to your yard by Thursday if we agree on a price today.",
        target: "Ich kann die Lieferung bis Donnerstag zu Ihrem Hof arrangieren, wenn wir uns heute auf einen Preis einigen.",
      },
      {
        en: "The transport permit and ear tag records are all in order — ready for inspection.",
        target: "Die Transportgenehmigung und die Ohrmarkendokumentation sind alle in Ordnung — bereit zur Überprüfung.",
      },
      {
        en: "I'll need a signed bill of sale and the movement document before the cattle leave the ranch.",
        target: "Ich benötige einen unterzeichneten Kaufvertrag und das Verbringungsdokument, bevor das Vieh den Hof verlässt.",
      },
      {
        en: "If you take the whole lot of 40, I'll sharpen my pencil on the per-kilo price.",
        target: "Wenn Sie die ganze Partie von 40 Stück nehmen, mache ich beim Kilopreis ein besseres Angebot.",
      },
      {
        en: "Deal — I'll have my transport driver call you in the morning to arrange the loading time.",
        target: "Einverstanden — mein Transporter wird Sie morgen früh anrufen, um die Ladezeit zu vereinbaren.",
      },
    ],
  },
  {
    id: "seed-it-ranch-grazing",
    title: "Pascolo e Gestione della Mandria",
    subtitle: "Grazing management — moving the herd",
    language: "Italian",
    targetLabel: "Italiano",
    flag: "🇮🇹",
    section: "culture",
    available: true,
    level: "B1",
    sentences: [
      {
        en: "The north pasture grass is down to 5 centimeters — time to rotate the herd to the east field.",
        target: "L'erba del pascolo nord è scesa a 5 centimetri — è ora di spostare la mandria nel campo est.",
      },
      {
        en: "Open the gate and drive them slowly — don't let the lead cows get too far ahead of the herd.",
        target: "Apri il cancello e spingi lentamente — non lasciare che le vacche di testa si allontanino troppo dal resto.",
      },
      {
        en: "Make sure the saddle girth is tight before you start — we've got rough terrain ahead.",
        target: "Assicurati che la cinghia della sella sia stretta prima di iniziare — davanti abbiamo terreno accidentato.",
      },
      {
        en: "The young bull escaped through the creek fence — we need to locate him before nightfall.",
        target: "Il giovane toro è scappato attraverso la recinzione del torrente — dobbiamo trovarlo prima del tramonto.",
      },
      {
        en: "Check the watering trough in the east field before you arrive with the herd.",
        target: "Controlla l'abbeveratoio nel campo est prima di arrivare con la mandria.",
      },
      {
        en: "Those three heifers need to be sorted out — they go into the separate pen for breeding next week.",
        target: "Quelle tre manze devono essere separate — andranno nel recinto separato per la monta la settimana prossima.",
      },
      {
        en: "Brand inspection certificates need to be updated before we can sell any animals at market.",
        target: "I certificati di ispezione del marchio devono essere aggiornati prima di poter vendere animali al mercato.",
      },
      {
        en: "After we move the herd, check the old pasture for any calves that got left behind.",
        target: "Dopo aver spostato la mandria, controlla il vecchio pascolo per eventuali vitelli rimasti indietro.",
      },
    ],
  },
  {
    id: "seed-ja-ranch-corral",
    title: "牧場の囲い管理",
    subtitle: "Corral work — sorting and veterinary prep",
    language: "Japanese",
    targetLabel: "日本語",
    flag: "🇯🇵",
    section: "culture",
    available: true,
    level: "B1",
    sentences: [
      {
        en: "Drive the herd into the main corral — we need to sort out the calves for weaning today.",
        target: "群れをメインの囲いに追い込んでください。今日は離乳のために子牛を選別する必要があります。",
      },
      {
        en: "Use the sorting alley to separate the spring calves from the cows before we work them.",
        target: "春の子牛を母牛から分けるために、作業前に選別通路を使ってください。",
      },
      {
        en: "Make sure the head gate is set correctly before the first animal enters the chute.",
        target: "最初の動物が通路に入る前に、ヘッドゲートが正しく設定されているか確認してください。",
      },
      {
        en: "Each calf gets an ear tag, a booster vaccination, and a de-wormer shot before it's turned out.",
        target: "各子牛は放牧される前に耳標、追加ワクチン接種、駆虫注射を受けます。",
      },
      {
        en: "The rope is coiled wrong — if you throw it like that you'll never make a clean catch.",
        target: "ロープの巻き方が間違っています。そんな投げ方では綺麗にかからないでしょう。",
      },
      {
        en: "After working the calves, check the fence line on the west side — cattle were pushing on it yesterday.",
        target: "子牛の作業が終わったら、西側のフェンスラインを確認してください。昨日牛が押し付けていました。",
      },
      {
        en: "Water the horses and put them in the shade before midday — it is going to be a hot one.",
        target: "正午前に馬に水を与えて日陰に入れてください。今日はとても暑くなります。",
      },
      {
        en: "Good work today — the herd looks healthy and the calves are gaining weight ahead of schedule.",
        target: "今日はよく頑張りました。群れは健康そうで、子牛たちは予定より早く体重が増えています。",
      },
    ],
  },
  {
    id: "seed-pt-ranch-range",
    title: "Manejo de Gado na Pastagem",
    subtitle: "Range management — cattle and saddle work",
    language: "Portuguese",
    targetLabel: "Português",
    flag: "🇧🇷",
    section: "culture",
    available: true,
    level: "B1",
    sentences: [
      {
        en: "We're moving the cattle to the back pasture today — saddle up and be ready to ride by 6 AM.",
        target: "Hoje vamos mover o gado para o pasto dos fundos — ensile e esteja pronto para montar às 6h.",
      },
      {
        en: "The herd has about 180 head — we need three riders on each side to keep them together.",
        target: "O rebanho tem cerca de 180 cabeças — precisamos de três peões de cada lado para mantê-los juntos.",
      },
      {
        en: "Watch for the bull at the back of the herd — he's been aggressive this week.",
        target: "Fique de olho no touro na parte traseira do rebanho — ele está agressivo essa semana.",
      },
      {
        en: "The back pasture water tank needs the float valve replaced before we move them in.",
        target: "O tanque de água do pasto dos fundos precisa da válvula de boia trocada antes de movê-los para lá.",
      },
      {
        en: "Branding day is next Saturday — we'll need the chute oiled and the irons ready.",
        target: "O dia de marcação é no próximo sábado — precisamos do brete lubrificado e os ferros prontos.",
      },
      {
        en: "Keep the young steers separate from the breeding cows — they're going to a different pasture.",
        target: "Mantenha os novilhos jovens separados das vacas de cria — eles vão para um pasto diferente.",
      },
      {
        en: "After the move, do a head count against the register — I want to know if anyone is missing.",
        target: "Depois da movimentação, faça uma contagem contra o registro — quero saber se falta algum.",
      },
      {
        en: "Good work — let's check the fence on the south boundary before we unsaddle.",
        target: "Bom trabalho — vamos verificar a cerca no limite sul antes de tirmar a sela.",
      },
    ],
  },

  // ── MEATPACKING / BUTCHER ─────────────────────────────────────────────────

  {
    id: "seed-es-butcher-sanitation",
    title: "Sanidad e Higiene en la Planta",
    subtitle: "Sanitation protocol — floor supervisor",
    language: "Spanish",
    targetLabel: "Español",
    flag: "🇲🇽",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "Before the first carcass enters the floor, all surfaces must be sanitized and dry.",
        target: "Antes de que entre la primera canal al piso, todas las superficies deben estar desinfectadas y secas.",
      },
      {
        en: "Your knife must be sterilized in the hot water cabinet between every carcass — no exceptions.",
        target: "Tu cuchillo debe esterilizarse en el gabinete de agua caliente entre cada canal — sin excepciones.",
      },
      {
        en: "If you nick the intestine on the evisceration line, stop and call the USDA inspector immediately.",
        target: "Si perforase el intestino en la línea de evisceración, para y llama al inspector del USDA de inmediato.",
      },
      {
        en: "Contaminated carcasses go to the retain rail — they do not move forward until QA clears them.",
        target: "Las canales contaminadas van al riel de retención — no avanzan hasta que control de calidad las libere.",
      },
      {
        en: "Keep your apron, gloves, and sleeves clean throughout the shift — change them if they get contaminated.",
        target: "Mantén tu mandil, guantes y mangas limpios durante todo el turno — cámbialos si se contaminan.",
      },
      {
        en: "Cold storage temperature must stay between 0 and 4 degrees Celsius — log it every two hours.",
        target: "La temperatura del almacén frío debe mantenerse entre 0 y 4 grados Celsius — regístrala cada dos horas.",
      },
      {
        en: "The USDA inspector is making rounds today — keep your work area clean and your paperwork current.",
        target: "El inspector del USDA está haciendo rondas hoy — mantén tu área de trabajo limpia y tu documentación al día.",
      },
      {
        en: "If you see a safety hazard, stop work and report it before anyone gets injured.",
        target: "Si ves un peligro de seguridad, detén el trabajo e infórmalo antes de que alguien se lastime.",
      },
    ],
  },
  {
    id: "seed-fr-butcher-cuts",
    title: "Spécifications de Découpe",
    subtitle: "Cut specs — custom order fulfillment",
    language: "French",
    targetLabel: "Français",
    flag: "🇫🇷",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "The restaurant order calls for 40 kilos of faux-filet cut to 2.5 centimeters.",
        target: "La commande du restaurant demande 40 kilos de faux-filet taillé à 2,5 centimètres.",
      },
      {
        en: "Start with the loin section — separate the faux-filet from the entrecôte before you portion.",
        target: "Commencez par la section du faux-filet — séparez le faux-filet de l'entrecôte avant de portionner.",
      },
      {
        en: "Trim the fat cap to 5 millimeters — the client specifically requested lean presentation.",
        target: "Taillez la couverture de gras à 5 millimètres — le client a expressément demandé une présentation maigre.",
      },
      {
        en: "The butcher's yield on a whole sirloin is about 70% after bone and trim — plan accordingly.",
        target: "Le rendement boucher d'un aloyau entier est d'environ 70 % après os et parure — planifiez en conséquence.",
      },
      {
        en: "Label every tray with the cut name, weight, date, and lot number before it goes to cold storage.",
        target: "Étiquetez chaque barquette avec le nom de la découpe, le poids, la date et le numéro de lot avant de l'envoyer en chambre froide.",
      },
      {
        en: "The primal arrived this morning — it needs to rest at 2°C for 48 hours before we break it down.",
        target: "Le morceau primaire est arrivé ce matin — il doit reposer à 2°C pendant 48 heures avant qu'on le découpe.",
      },
      {
        en: "If the weight comes in under the order spec, we'll need to make up the difference from the reserve stock.",
        target: "Si le poids est inférieur à la spécification de la commande, il faudra combler la différence avec le stock de réserve.",
      },
      {
        en: "The trimmings and fat go to the grind pile — they'll be processed into 80/20 ground beef tomorrow.",
        target: "Les parures et les graisses vont à la pile de hachage — elles seront transformées en bœuf haché 80/20 demain.",
      },
    ],
  },
  {
    id: "seed-de-butcher-usda",
    title: "USDA-Prüfung und Qualitätssicherung",
    subtitle: "Quality control — inspection compliance",
    language: "German",
    targetLabel: "Deutsch",
    flag: "🇩🇪",
    section: "culture",
    available: true,
    level: "C1",
    sentences: [
      {
        en: "The federal inspector has placed a hold on the lot 7 product — do not ship until the hold is lifted.",
        target: "Der Bundesinspektor hat Lot 7 zurückgehalten — nicht versenden, bis die Sperre aufgehoben ist.",
      },
      {
        en: "The temperature deviation alarm went off in cold storage room 3 — we need to pull the logger data.",
        target: "Der Temperaturabweichungsalarm in Kühlraum 3 hat ausgelöst — wir müssen die Logger-Daten abrufen.",
      },
      {
        en: "Product affected by the deviation must be placed on hold pending a food safety assessment.",
        target: "Von der Abweichung betroffenes Produkt muss bis zur Lebensmittelsicherheitsbewertung gesperrt werden.",
      },
      {
        en: "Sanitation records for the past 72 hours need to be pulled for the inspector's review.",
        target: "Die Hygieneprotokolle der letzten 72 Stunden müssen für die Inspektion herausgezogen werden.",
      },
      {
        en: "Every carcass that passes the ante-mortem and post-mortem inspection gets a USDA stamp.",
        target: "Jeder Schlachtkörper, der die Ante- und Post-mortem-Untersuchung besteht, erhält einen USDA-Stempel.",
      },
      {
        en: "If the inspector condemns a carcass, it must be disposed of following the prescribed protocol — nothing goes to the grind.",
        target: "Wenn der Inspektor einen Schlachtkörper verwirft, muss er nach dem vorgeschriebenen Protokoll entsorgt werden — nichts davon kommt ins Hack.",
      },
      {
        en: "Update the HACCP log before the end of every shift — it must be signed by the QA supervisor.",
        target: "Aktualisieren Sie das HACCP-Protokoll vor Ende jeder Schicht — es muss vom QS-Vorgesetzten unterzeichnet werden.",
      },
      {
        en: "Corrective action for the cold storage deviation must be documented within 24 hours.",
        target: "Die Korrekturmaßnahme für die Kühlraumabweichung muss innerhalb von 24 Stunden dokumentiert werden.",
      },
    ],
  },
  {
    id: "seed-it-butcher-processing",
    title: "Lavorazione e Confezionamento",
    subtitle: "Processing floor — packaging and cold chain",
    language: "Italian",
    targetLabel: "Italiano",
    flag: "🇮🇹",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "We're starting with the hindquarters today — round, rump, and sirloin primal separation first.",
        target: "Oggi iniziamo con i quarti posteriori — prima separazione del girello, dello scamone e del controfiletto.",
      },
      {
        en: "Use the boning knife for the round section — the heavy knife will tear the muscle tissue.",
        target: "Usa il coltello da disosso per la parte del girello — il coltello pesante strapperà il tessuto muscolare.",
      },
      {
        en: "All packaging must show the cut name, net weight, pack date, and use-by date.",
        target: "Tutta la confezione deve mostrare il nome del taglio, il peso netto, la data di confezionamento e la data di scadenza.",
      },
      {
        en: "The vacuum sealer needs to be recalibrated — the last three packs had air pockets.",
        target: "Il sigillatrice sottovuoto deve essere ricalibrata — gli ultimi tre pacchi avevano bolle d'aria.",
      },
      {
        en: "Ground product must reach an internal temperature of 71 degrees Celsius during cooking — make sure it's on the label.",
        target: "Il prodotto macinato deve raggiungere una temperatura interna di 71 gradi Celsius durante la cottura — assicurati che sia sull'etichetta.",
      },
      {
        en: "The retail tray orders need to be in the cold storage van by 3 PM for the morning delivery run.",
        target: "Gli ordini per i vassoi al dettaglio devono essere nel furgone frigorifero entro le 15:00 per la consegna mattutina.",
      },
      {
        en: "Never leave raw product at room temperature for more than 30 minutes — cold chain is everything.",
        target: "Non lasciare mai il prodotto crudo a temperatura ambiente per più di 30 minuti — la catena del freddo è tutto.",
      },
      {
        en: "Today's yield on the hindquarter lot was 68% — slightly below target, review your trim waste.",
        target: "La resa di oggi sul lotto dei quarti posteriori è stata del 68% — leggermente sotto il target, rivedi gli scarti di rifinitura.",
      },
    ],
  },
  {
    id: "seed-ja-butcher-floor",
    title: "精肉処理フロアの管理",
    subtitle: "Meatpacking floor — knife safety and sanitation",
    language: "Japanese",
    targetLabel: "日本語",
    flag: "🇯🇵",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "Knife safety is the number one priority — keep the blade away from your body at all times.",
        target: "ナイフの安全が最優先事項です。常に刃を体から離しておいてください。",
      },
      {
        en: "Sanitize your knife in the hot water cabinet between every carcass — no shortcuts.",
        target: "各枝肉の間に熱湯消毒キャビネットでナイフを殺菌してください。近道はなしです。",
      },
      {
        en: "The USDA inspector is on the floor this morning — keep your workstation clean and organized.",
        target: "今朝はUSDA検査官がフロアにいます。作業ステーションを清潔に整理しておいてください。",
      },
      {
        en: "Any product that contacts the floor must be placed in the contamination bin — never back on the line.",
        target: "床に触れた製品は汚染ビンに入れてください。ラインには戻さないこと。",
      },
      {
        en: "Today we are breaking down the loin primal into striploin and tenderloin portions.",
        target: "今日はロイン部位をストリップロインとテンダーロインに分割します。",
      },
      {
        en: "Trim the silverskin cleanly — the retail spec allows no more than 2 millimeters of connective tissue.",
        target: "シルバースキンを綺麗にトリミングしてください。小売規格では結合組織が2ミリメートルを超えてはなりません。",
      },
      {
        en: "Cold storage must stay between 0 and 4 degrees — check the thermometer log every two hours.",
        target: "冷蔵庫は0〜4度に保たなければなりません。2時間ごとに温度計のログを確認してください。",
      },
      {
        en: "New employees must complete the knife safety training before they handle any cutting tools.",
        target: "新入社員は切断工具を扱う前にナイフ安全訓練を完了しなければなりません。",
      },
      {
        en: "At end of shift, clean and oil your boning knife before returning it to the rack.",
        target: "シフト終了時に、ラックに戻す前に骨抜きナイフを清掃して油を塗ってください。",
      },
    ],
  },
  {
    id: "seed-pt-butcher-primal",
    title: "Cortes Primários e Especificações",
    subtitle: "Primal cuts — order specification",
    language: "Portuguese",
    targetLabel: "Português",
    flag: "🇧🇷",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "Today's production order calls for 200 kilos of picanha and 150 kilos of fraldinha.",
        target: "O pedido de produção de hoje exige 200 quilos de picanha e 150 quilos de fraldinha.",
      },
      {
        en: "Start by breaking down the hindquarter — separate the rump cap before you trim the fat.",
        target: "Comece desmembrando o quarto traseiro — separe o coxão de cima antes de aparar a gordura.",
      },
      {
        en: "The fat cap on picanha must be kept at exactly 1 centimeter — that is the restaurant spec.",
        target: "A capa de gordura da picanha deve ser mantida em exatamente 1 centímetro — essa é a especificação do restaurante.",
      },
      {
        en: "Weigh each piece on the calibrated scale and label it before it goes into cold storage.",
        target: "Pese cada peça na balança calibrada e rotule antes de colocar no armazenamento a frio.",
      },
      {
        en: "The SIF seal must be on every package that leaves this facility — no exceptions.",
        target: "O selo SIF deve estar em cada embalagem que sai desta instalação — sem exceções.",
      },
      {
        en: "Any trim with sinew or excess connective tissue goes to the grinding bin — not the retail tray.",
        target: "Qualquer apara com tendão ou tecido conjuntivo excessivo vai para o moedor — não para a bandeja de varejo.",
      },
      {
        en: "Cold chain temperature log must be filled out every two hours and signed by the QA technician.",
        target: "O registro de temperatura da cadeia fria deve ser preenchido a cada duas horas e assinado pelo técnico de qualidade.",
      },
      {
        en: "Report any equipment malfunction immediately — a dull blade or a faulty vacuum sealer affects yield and safety.",
        target: "Relate qualquer mau funcionamento de equipamento imediatamente — uma lâmina cega ou seladora com defeito afeta o rendimento e a segurança.",
      },
    ],
  },

  // ── NEW ENTRIES — LEVEL GAP COVERAGE ──────────────────────────────────────

  {
    id: "seed-es-truck-pretrip",
    title: "Inspección Pre-Viaje",
    subtitle: "Pre-trip inspection — daily checklist",
    language: "Spanish",
    targetLabel: "Español",
    flag: "🇲🇽",
    section: "culture",
    available: true,
    level: "A2",
    sentences: [
      {
        en: "I check the tires every morning.",
        target: "Reviso las llantas cada mañana.",
      },
      {
        en: "The brakes work well today.",
        target: "Los frenos funcionan bien hoy.",
      },
      {
        en: "I look at the lights and the mirrors.",
        target: "Reviso las luces y los espejos.",
      },
      {
        en: "The oil level is good.",
        target: "El nivel de aceite está bien.",
      },
      {
        en: "I sign the inspection sheet.",
        target: "Firmo la hoja de inspección.",
      },
      {
        en: "The fifth wheel is clean and greased.",
        target: "La quinta rueda está limpia y engrasada.",
      },
      {
        en: "Everything looks safe — I am ready to roll.",
        target: "Todo se ve seguro — estoy listo para salir.",
      },
      {
        en: "I check the air pressure on the trailer.",
        target: "Reviso la presión de aire del remolque.",
      },
      {
        en: "The horn and the windshield wipers work.",
        target: "El claxon y los limpiaparabrisas funcionan.",
      },
    ],
  },
  {
    id: "seed-pt-truck-tarping",
    title: "Lonando a Carga",
    subtitle: "Load tarping — securing freight",
    language: "Portuguese",
    targetLabel: "Português",
    flag: "🇧🇷",
    section: "culture",
    available: true,
    level: "A2",
    sentences: [
      {
        en: "We need to tarp the load before we leave.",
        target: "Precisamos lonar a carga antes de sair.",
      },
      {
        en: "Throw the tarp over the front of the load.",
        target: "Jogue a lona sobre a frente da carga.",
      },
      {
        en: "Pull the tarp tight on both sides.",
        target: "Puxe a lona firme dos dois lados.",
      },
      {
        en: "Use the rubber straps to hold it down.",
        target: "Use as catracas de borracha para segurar.",
      },
      {
        en: "Check that the corners are well covered.",
        target: "Verifique se os cantos estão bem cobertos.",
      },
      {
        en: "The wind is strong today — tie it well.",
        target: "O vento está forte hoje — amarre bem.",
      },
      {
        en: "Walk around the truck and check every strap.",
        target: "Caminhe ao redor do caminhão e verifique cada cinta.",
      },
      {
        en: "The load is ready — let's hit the road.",
        target: "A carga está pronta — vamos pegar a estrada.",
      },
    ],
  },
  {
    id: "seed-es-dispatch-route",
    title: "Asignación de Ruta",
    subtitle: "Dispatch — route assignment call",
    language: "Spanish",
    targetLabel: "Español",
    flag: "🇲🇽",
    section: "culture",
    available: true,
    level: "B1",
    sentences: [
      {
        en: "Good morning, fletero — I have your route assignment for today.",
        target: "Buenos días, fletero — tengo tu asignación de ruta para hoy.",
      },
      {
        en: "You'll pick up at the Monterrey warehouse and deliver to three stops in Saltillo.",
        target: "Vas a cargar en la bodega de Monterrey y entregar en tres paradas en Saltillo.",
      },
      {
        en: "The first stop has a delivery window from 10 to 12.",
        target: "La primera parada tiene una ventana de entrega de 10 a 12.",
      },
      {
        en: "Make sure to call the customer 30 minutes before you arrive.",
        target: "Asegúrate de llamar al cliente 30 minutos antes de llegar.",
      },
      {
        en: "The bill of lading is in the cab — don't forget to get it signed.",
        target: "La carta de porte está en la cabina — no olvides hacerla firmar.",
      },
      {
        en: "If you have any problem on the road, call dispatch on the radio.",
        target: "Si tienes algún problema en el camino, llama a despacho por el radio.",
      },
      {
        en: "Fuel up before you leave the yard — there are no good stops on this route.",
        target: "Carga combustible antes de salir del patio — no hay buenas paradas en esta ruta.",
      },
      {
        en: "When you finish, send me the signed delivery receipts by photo.",
        target: "Cuando termines, mándame los comprobantes firmados por foto.",
      },
      {
        en: "Have a safe trip and watch out for the construction on the highway.",
        target: "Buen viaje y cuidado con la obra en la carretera.",
      },
    ],
  },
  {
    id: "seed-it-agri-irrigation",
    title: "Programmazione dell'Irrigazione",
    subtitle: "Irrigation schedule — drip system",
    language: "Italian",
    targetLabel: "Italiano",
    flag: "🇮🇹",
    section: "culture",
    available: true,
    level: "B1",
    sentences: [
      {
        en: "We need to set up the drip irrigation in the tomato field this morning.",
        target: "Dobbiamo predisporre l'irrigazione a goccia nel campo di pomodori stamattina.",
      },
      {
        en: "Open the main valve and check that the pressure stays at 2 bar.",
        target: "Apri la valvola principale e controlla che la pressione resti a 2 bar.",
      },
      {
        en: "Each plant should receive about 4 liters of water per day.",
        target: "Ogni pianta dovrebbe ricevere circa 4 litri d'acqua al giorno.",
      },
      {
        en: "Walk the rows and look for clogged drippers — change them right away.",
        target: "Cammina lungo i filari e cerca i gocciolatori intasati — cambiali subito.",
      },
      {
        en: "The fertigation tank is ready — we add the liquid fertilizer here.",
        target: "Il serbatoio di fertirrigazione è pronto — aggiungiamo il concime liquido qui.",
      },
      {
        en: "Set the timer to start at 5 in the morning, before the heat.",
        target: "Imposta il timer per partire alle 5 del mattino, prima del caldo.",
      },
      {
        en: "If you see standing water, close the line — there's a leak somewhere.",
        target: "Se vedi acqua ferma, chiudi la linea — c'è una perdita da qualche parte.",
      },
      {
        en: "Keep the soil moisture meter readings in the field log every day.",
        target: "Annota le letture del tensiometro nel registro di campo ogni giorno.",
      },
      {
        en: "Tomorrow we move the lines to the pepper field for the next rotation.",
        target: "Domani spostiamo le linee al campo di peperoni per la prossima rotazione.",
      },
    ],
  },
  {
    id: "seed-ja-agri-grainelevator",
    title: "穀物倉庫での会話",
    subtitle: "Grain elevator — delivery dialog",
    language: "Japanese",
    targetLabel: "日本語",
    flag: "🇯🇵",
    section: "culture",
    available: true,
    level: "B1",
    sentences: [
      {
        en: "Good morning — I'm bringing in soybeans from the north field.",
        target: "おはようございます。北の畑から大豆を持ってきました。",
      },
      {
        en: "Pull onto the scale and we'll weigh the truck loaded.",
        target: "計量台に乗ってください。積んだ状態でトラックを計量します。",
      },
      {
        en: "We need a moisture sample before we can unload.",
        target: "荷下ろしの前に水分サンプルが必要です。",
      },
      {
        en: "The moisture is 14 percent — that's within our acceptance range.",
        target: "水分は14パーセントです。受け入れ範囲内です。",
      },
      {
        en: "Back the truck up to bin number three to dump.",
        target: "3番ビンまでトラックをバックしてください。",
      },
      {
        en: "Today's price is 580 yen per kilogram for grade one.",
        target: "本日の価格は1等級でキロあたり580円です。",
      },
      {
        en: "After unloading, we weigh the empty truck for the net weight.",
        target: "荷下ろし後、正味重量のために空のトラックを計量します。",
      },
      {
        en: "Here is your weight ticket — take it to the office for payment.",
        target: "計量伝票です。お支払いのために事務所へお持ちください。",
      },
    ],
  },
  {
    id: "seed-fr-dispatch-apology",
    title: "Appel d'Excuses pour Retard de Livraison",
    subtitle: "Late delivery apology — customer service call",
    language: "French",
    targetLabel: "Français",
    flag: "🇫🇷",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "Hello, this is Marc from the dispatch office — I'm calling to apologize for today's delay.",
        target: "Bonjour, c'est Marc du bureau de répartition — je vous appelle pour m'excuser du retard d'aujourd'hui.",
      },
      {
        en: "Our driver was held up by a serious accident on the A6 motorway near Beaune.",
        target: "Notre chauffeur a été retenu par un grave accident sur l'autoroute A6 près de Beaune.",
      },
      {
        en: "The estimated time of arrival has slipped from 14h00 to approximately 17h30.",
        target: "L'heure d'arrivée prévue est passée de 14h00 à environ 17h30.",
      },
      {
        en: "I understand this affects your unloading crew and your downstream production schedule.",
        target: "Je comprends que cela affecte votre équipe de déchargement et votre planning de production en aval.",
      },
      {
        en: "We can offer a credit on the freight invoice to compensate for the inconvenience.",
        target: "Nous pouvons vous accorder un avoir sur la facture de transport pour compenser le désagrément.",
      },
      {
        en: "Going forward, we'll be rerouting all loads through the A39 to avoid that bottleneck.",
        target: "À l'avenir, nous redirigerons toutes les expéditions par l'A39 pour éviter ce goulot d'étranglement.",
      },
      {
        en: "I'll send you a detailed incident report and updated tracking link within the hour.",
        target: "Je vous enverrai un rapport d'incident détaillé et un lien de suivi mis à jour dans l'heure.",
      },
      {
        en: "Please confirm whether your dock will still be staffed when the driver arrives this evening.",
        target: "Pourriez-vous confirmer si votre quai sera encore en service à l'arrivée du chauffeur ce soir ?",
      },
      {
        en: "Once again, please accept our sincere apologies — we value your business and will do better.",
        target: "Encore une fois, veuillez accepter nos sincères excuses — nous tenons à votre clientèle et nous ferons mieux.",
      },
    ],
  },
  {
    id: "seed-de-agri-pesticide",
    title: "Pflanzenschutzmittel-Anwendung",
    subtitle: "Pesticide handling — application protocol",
    language: "German",
    targetLabel: "Deutsch",
    flag: "🇩🇪",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "Before mixing the spray, put on the full protective suit, nitrile gloves, and respirator mask.",
        target: "Vor dem Anmischen der Spritzbrühe ziehen Sie den kompletten Schutzanzug, Nitrilhandschuhe und die Atemschutzmaske an.",
      },
      {
        en: "Read the product label carefully — the dosage rate for this fungicide is 1.2 liters per hectare.",
        target: "Lesen Sie das Produktetikett sorgfältig — die Aufwandmenge für dieses Fungizid beträgt 1,2 Liter pro Hektar.",
      },
      {
        en: "Calibrate the sprayer before each application to ensure even coverage.",
        target: "Kalibrieren Sie die Spritze vor jeder Anwendung, um eine gleichmäßige Ausbringung zu gewährleisten.",
      },
      {
        en: "Do not spray when wind speeds exceed 5 meters per second — drift onto neighboring fields is a violation.",
        target: "Nicht spritzen, wenn die Windgeschwindigkeit 5 Meter pro Sekunde übersteigt — Abdrift auf Nachbarflächen ist ein Verstoß.",
      },
      {
        en: "Maintain the legally required buffer zone of 5 meters from any surface water.",
        target: "Halten Sie den gesetzlich vorgeschriebenen Abstand von 5 Metern zu jedem Oberflächengewässer ein.",
      },
      {
        en: "Record the application in the field passport: product, batch, dose, weather, and operator.",
        target: "Tragen Sie die Anwendung in das Feldhandbuch ein: Produkt, Charge, Dosierung, Wetterlage und Anwender.",
      },
      {
        en: "Observe the pre-harvest interval strictly — for this product it is 21 days.",
        target: "Beachten Sie die Wartezeit bis zur Ernte strikt — für dieses Mittel beträgt sie 21 Tage.",
      },
      {
        en: "Triple-rinse the empty container and return it to the authorized collection point.",
        target: "Spülen Sie den leeren Kanister dreimal aus und bringen Sie ihn zur zugelassenen Sammelstelle.",
      },
      {
        en: "After spraying, decontaminate yourself thoroughly before re-entering the farmhouse.",
        target: "Nach dem Spritzen gründlich dekontaminieren, bevor Sie das Wohnhaus wieder betreten.",
      },
    ],
  },
  {
    id: "seed-es-agri-extension",
    title: "Conferencia de Extensión Agrícola",
    subtitle: "Ag extension lecture — soil microbiology",
    language: "Spanish",
    targetLabel: "Español",
    flag: "🇲🇽",
    section: "culture",
    available: true,
    level: "C1",
    sentences: [
      {
        en: "The microbial communities in the rhizosphere mediate nutrient uptake far beyond what conventional fertilization models capture.",
        target: "Las comunidades microbianas de la rizosfera median la absorción de nutrientes mucho más allá de lo que los modelos de fertilización convencionales contemplan.",
      },
      {
        en: "Mycorrhizal fungi establish symbiotic relationships with the root system, dramatically extending the plant's effective surface area for water and phosphorus uptake.",
        target: "Los hongos micorrízicos establecen relaciones simbióticas con el sistema radicular, ampliando notablemente la superficie efectiva de la planta para la absorción de agua y fósforo.",
      },
      {
        en: "Excessive tillage disrupts hyphal networks and accelerates the mineralization of soil organic carbon, releasing it as atmospheric CO2.",
        target: "La labranza excesiva interrumpe las redes hifales y acelera la mineralización del carbono orgánico del suelo, liberándolo como CO2 atmosférico.",
      },
      {
        en: "Cover cropping with leguminous species fixes atmospheric nitrogen and provides a green-manure substrate that feeds the microbiome between commercial cycles.",
        target: "La siembra de cultivos de cobertura con especies leguminosas fija nitrógeno atmosférico y aporta un sustrato de abono verde que alimenta el microbioma entre los ciclos comerciales.",
      },
      {
        en: "Recent metagenomic studies suggest that bacterial diversity correlates more strongly with long-term yield stability than with peak productivity in any single season.",
        target: "Estudios metagenómicos recientes sugieren que la diversidad bacteriana se correlaciona más fuertemente con la estabilidad del rendimiento a largo plazo que con la productividad máxima de una sola temporada.",
      },
      {
        en: "Producers transitioning toward regenerative protocols typically observe a three- to five-year recovery period before microbial indicators reach baseline.",
        target: "Los productores que transitan hacia protocolos regenerativos suelen observar un período de recuperación de tres a cinco años antes de que los indicadores microbianos alcancen su línea base.",
      },
      {
        en: "Compost teas inoculated with locally adapted strains can accelerate this transition, but their efficacy depends on rigorous quality control during fermentation.",
        target: "Los tés de compost inoculados con cepas adaptadas localmente pueden acelerar esta transición, pero su eficacia depende de un riguroso control de calidad durante la fermentación.",
      },
      {
        en: "From an agronomic standpoint, soil should be managed as a living ecosystem rather than as an inert substrate to which inputs are simply applied.",
        target: "Desde el punto de vista agronómico, el suelo debe gestionarse como un ecosistema vivo y no como un sustrato inerte al que simplemente se aplican insumos.",
      },
      {
        en: "Extension agents must therefore translate these complex biological dynamics into management practices that producers can adopt within their economic constraints.",
        target: "Los agentes de extensión deben, por tanto, traducir estas dinámicas biológicas complejas en prácticas de manejo que los productores puedan adoptar dentro de sus limitaciones económicas.",
      },
    ],
  },
];
