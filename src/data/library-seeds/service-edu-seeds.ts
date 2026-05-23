import type { LibrarySeed } from "./_types";

export const SERVICE_EDU_SEEDS: LibrarySeed[] = [
  // ── Restaurant & Hospitality ─────────────────────────────────────────────
  // Spanish — kitchen/back-of-house: morning prep & mise en place
  {
    id: "seed-es-restaurant-prep",
    title: "Cocina: Mise en Place y Preparación",
    subtitle: "Restaurant & Hospitality · morning prep & back-of-house setup",
    language: "Spanish",
    targetLabel: "Español",
    flag: "🇲🇽",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "Before service starts, every station must be fully stocked and clean — no exceptions.",
        target:
          "Antes de que empiece el servicio, cada estación debe estar completamente surtida y limpia, sin excepciones.",
      },
      {
        en: "I need you to brunoise the onions and mince the garlic — we need twelve portions ready before eleven.",
        target:
          "Necesito que cortes las cebollas en brunoise y piques el ajo; necesitamos doce porciones listas antes de las once.",
      },
      {
        en: "Check the walk-in cooler and pull everything we need for tonight's specials — mark the dates on every container.",
        target:
          "Revisa el refrigerador de cámara y saca todo lo que necesitamos para los especiales de esta noche; anota las fechas en cada recipiente.",
      },
      {
        en: "The stock pot has been going since six this morning — taste it and adjust the seasoning before you reduce it.",
        target:
          "La olla de caldo lleva cocinándose desde las seis de la mañana; pruébalo y ajusta la sazón antes de reducirlo.",
      },
      {
        en: "We are low on the roasted peppers — can you roast two trays right now and get them cooling before the lunch rush?",
        target:
          "Nos estamos quedando sin pimientos asados; ¿puedes asar dos charolas ahora mismo y dejarlas enfriar antes de la hora pico del almuerzo?",
      },
      {
        en: "Label every prepped item with the name, today's date, and your initials — health inspector could walk in any day.",
        target:
          "Etiqueta cada ingrediente preparado con el nombre, la fecha de hoy y tus iniciales; el inspector de salud podría aparecer cualquier día.",
      },
      {
        en: "Knife skills matter — if you are having trouble with the julienne, ask me to show you the correct technique.",
        target:
          "Las habilidades con el cuchillo son importantes; si tienes problemas con el julienne, pídeme que te muestre la técnica correcta.",
      },
      {
        en: "The sauté station needs more clarified butter and a full set of mise en place before you do anything else.",
        target:
          "La estación de salteado necesita más mantequilla clarificada y un mise en place completo antes de hacer cualquier otra cosa.",
      },
      {
        en: "When you finish your prep, clean your cutting board, sanitize the surface, and help the garde manger station.",
        target:
          "Cuando termines tu preparación, limpia tu tabla de cortar, sanitiza la superficie y ayuda a la estación de garde manger.",
      },
    ],
  },

  // French — restaurant
  {
    id: "seed-fr-restaurant-service",
    title: "Restaurant : Service en Salle",
    subtitle: "Restaurant & Hospitality · front-of-house table service in French",
    language: "French",
    targetLabel: "Français",
    flag: "🇫🇷",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "Good evening and welcome. Do you have a reservation, or would you like to be seated in the open area?",
        target:
          "Bonsoir et bienvenue. Avez-vous une réservation, ou souhaitez-vous vous installer dans la zone libre ?",
      },
      {
        en: "Tonight's specials are a pan-seared duck breast with cherry reduction and a grilled sea bass with fennel.",
        target:
          "Les plats du soir sont un magret de canard poêlé avec une réduction de cerises et un bar grillé au fenouil.",
      },
      {
        en: "May I start you with something to drink? We have a selection of local wines and craft cocktails.",
        target:
          "Puis-je vous proposer quelque chose à boire pour commencer ? Nous avons une sélection de vins locaux et de cocktails artisanaux.",
      },
      {
        en: "I apologize — that dish is no longer available tonight. May I suggest the lamb, which is excellent?",
        target:
          "Je suis désolé — ce plat n'est plus disponible ce soir. Puis-je vous suggérer l'agneau, qui est excellent ?",
      },
      {
        en: "Do any of your guests have food allergies or dietary restrictions I should let the kitchen know about?",
        target:
          "Certains de vos convives ont-ils des allergies alimentaires ou des restrictions dont je dois informer la cuisine ?",
      },
      {
        en: "Your order will be out shortly — the kitchen is plating it right now.",
        target:
          "Votre commande sera prête dans un instant — la cuisine est en train de la dresser.",
      },
      {
        en: "I noticed you have not touched your main course — is everything to your liking, or can I bring you something else?",
        target:
          "J'ai remarqué que vous n'avez pas touché à votre plat principal — est-ce que tout vous convient, ou puis-je vous apporter autre chose ?",
      },
      {
        en: "Can I offer you a dessert or a coffee? Our tarte tatin tonight is made with caramelized Normandy apples.",
        target:
          "Puis-je vous proposer un dessert ou un café ? Notre tarte tatin du soir est préparée avec des pommes caramélisées de Normandie.",
      },
      {
        en: "Here is your bill — the service charge is included, but additional gratuities are always appreciated.",
        target:
          "Voici votre addition — le service est compris, mais un pourboire supplémentaire est toujours apprécié.",
      },
    ],
  },

  // German — restaurant
  {
    id: "seed-de-restaurant-hospitality",
    title: "Restaurant: Gästebetreuung und Service",
    subtitle: "Restaurant & Hospitality · formal dining service in German",
    language: "German",
    targetLabel: "Deutsch",
    flag: "🇩🇪",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "Good evening. Welcome to our restaurant. Do you have a reservation, or are you dining as a walk-in tonight?",
        target:
          "Guten Abend. Willkommen in unserem Restaurant. Haben Sie eine Reservierung, oder sind Sie heute Abend ohne Voranmeldung hier?",
      },
      {
        en: "Your table is ready. Please follow me — I will bring you the menus right away.",
        target:
          "Ihr Tisch ist bereit. Bitte folgen Sie mir — ich bringe Ihnen sofort die Speisekarten.",
      },
      {
        en: "Tonight's specials include a venison ragout with red cabbage and our seasonal asparagus soup.",
        target:
          "Zu den heutigen Tagesgerichten gehören ein Wildragout mit Rotkohl und unsere saisonale Spargelsuppe.",
      },
      {
        en: "Do you have any food allergies or intolerances we should be aware of when preparing your meal?",
        target:
          "Haben Sie Lebensmittelallergien oder Unverträglichkeiten, die wir bei der Zubereitung Ihres Gerichts berücksichtigen sollen?",
      },
      {
        en: "May I recommend our house Riesling with the fish — it pairs exceptionally well.",
        target:
          "Darf ich unseren Haus-Riesling zum Fisch empfehlen? Er passt außerordentlich gut dazu.",
      },
      {
        en: "I am so sorry for the delay — the kitchen is handling a large party and your order is next to go out.",
        target:
          "Es tut mir sehr leid wegen der Verzögerung — die Küche betreut gerade eine große Gesellschaft, und Ihre Bestellung kommt als nächstes.",
      },
      {
        en: "Is everything to your satisfaction, or can I bring you anything else?",
        target: "Ist alles zu Ihrer Zufriedenheit, oder darf ich Ihnen noch etwas bringen?",
      },
      {
        en: "For dessert, may I suggest our Black Forest cake or the cheese selection with regional specialties?",
        target:
          "Als Dessert darf ich Ihnen unsere Schwarzwälder Kirschtorte oder die Käseauswahl mit regionalen Spezialitäten empfehlen?",
      },
      {
        en: "Here is your receipt. Thank you for your visit — we hope to welcome you again soon.",
        target:
          "Hier ist Ihre Rechnung. Vielen Dank für Ihren Besuch — wir hoffen, Sie bald wieder begrüßen zu dürfen.",
      },
    ],
  },

  // Italian — restaurant
  {
    id: "seed-it-restaurant-trattoria",
    title: "Trattoria: Servizio al Tavolo",
    subtitle: "Restaurant & Hospitality · Italian trattoria table service",
    language: "Italian",
    targetLabel: "Italiano",
    flag: "🇮🇹",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "Good evening and welcome! Do you have a reservation, or shall I find you a table?",
        target: "Buona sera e benvenuti! Avete una prenotazione, o devo trovarvi un tavolo?",
      },
      {
        en: "Tonight's antipasto selection includes prosciutto e melone, bruschetta al pomodoro, and fresh burrata.",
        target:
          "La selezione di antipasti di stasera include prosciutto e melone, bruschetta al pomodoro e burrata fresca.",
      },
      {
        en: "As a first course I can recommend the tagliatelle al ragù — it is made fresh this morning.",
        target:
          "Come primo piatto vi consiglio le tagliatelle al ragù — sono fatte fresche stamattina.",
      },
      {
        en: "Do any of your guests have allergies? Some of our dishes contain gluten, shellfish, or nuts.",
        target:
          "Qualcuno dei vostri ospiti ha allergie? Alcuni dei nostri piatti contengono glutine, crostacei o frutta secca.",
      },
      {
        en: "We have an excellent local Chianti Classico that goes beautifully with the bistecca.",
        target:
          "Abbiamo un ottimo Chianti Classico locale che si abbina perfettamente alla bistecca.",
      },
      {
        en: "I apologize — we have run out of the branzino tonight. The grilled swordfish is just as fresh and very popular.",
        target:
          "Mi scuso — stasera abbiamo terminato il branzino. Il pesce spada alla griglia è altrettanto fresco e molto apprezzato.",
      },
      {
        en: "Would you like still or sparkling water? And can I bring some bread while you decide?",
        target: "Preferite acqua naturale o frizzante? E posso portarvi del pane mentre decidete?",
      },
      {
        en: "For dessert, the tiramisù is our house specialty — made fresh daily with real mascarpone.",
        target:
          "Per il dolce, il tiramisù è la specialità della casa — preparato ogni giorno con vero mascarpone.",
      },
      {
        en: "Thank you for dining with us this evening. It was our pleasure to serve you.",
        target: "Grazie per aver cenato con noi stasera. È stato un piacere servirvi.",
      },
    ],
  },

  // Japanese — restaurant
  {
    id: "seed-ja-restaurant-izakaya",
    title: "居酒屋:接客と注文対応",
    subtitle: "Restaurant & Hospitality · izakaya service and ordering",
    language: "Japanese",
    targetLabel: "日本語",
    flag: "🇯🇵",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "Welcome! How many guests are in your party tonight?",
        target: "いらっしゃいませ！本日は何名様でしょうか？",
      },
      {
        en: "We have a counter seating and private booth areas — do you have a preference?",
        target: "カウンター席と個室がございますが、ご希望はありますか？",
      },
      {
        en: "Tonight's chef's specials are grilled yellowtail with ponzu, seasonal vegetable tempura, and sashimi of the day.",
        target:
          "本日のシェフのおすすめは、鰤の塩焼きポン酢、季節野菜の天ぷら、そして本日の刺身盛り合わせです。",
      },
      {
        en: "Do you have any allergies or foods you cannot eat? Please let us know and we will adjust accordingly.",
        target:
          "アレルギーや食べられないものはございますか？おっしゃっていただければ対応いたします。",
      },
      {
        en: "Shall I start with drinks? We have draft beer, sake, shochu, and non-alcoholic options.",
        target:
          "お飲み物からお持ちしましょうか？生ビール、日本酒、焼酎、ソフトドリンクもございます。",
      },
      {
        en: "I'm very sorry — the tonkotsu ramen is sold out for tonight. The shoyu ramen is also excellent.",
        target:
          "大変申し訳ありませんが、本日の豚骨ラーメンは売り切れとなりました。醤油ラーメンもとても美味しいのでおすすめです。",
      },
      {
        en: "Your order is ready — please enjoy. Feel free to call us if you need anything.",
        target:
          "お料理がお揃いになりました。ごゆっくりどうぞ。何かございましたらお気軽にお呼びください。",
      },
      {
        en: "Can I bring you another round of drinks, or shall I start clearing the empty dishes?",
        target:
          "お飲み物のおかわりをお持ちしましょうか、それともお空きのお皿をお下げしましょうか？",
      },
      {
        en: "Thank you so much for coming tonight. Please come back and visit us again.",
        target: "本日はご来店いただきありがとうございました。またのお越しをお待ちしております。",
      },
    ],
  },

  // Portuguese — restaurant
  {
    id: "seed-pt-restaurant-churrascaria",
    title: "Churrascaria: Atendimento e Serviço",
    subtitle: "Restaurant & Hospitality · Brazilian churrascaria service",
    language: "Portuguese",
    targetLabel: "Português",
    flag: "🇧🇷",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "Good evening! Welcome. Do you have a reservation or are you dining in as a walk-in?",
        target: "Boa noite! Bem-vindos. Vocês têm reserva ou estão chegando sem hora marcada?",
      },
      {
        en: "At our churrascaria, the service is rodízio — the passadors will come to your table with different cuts of meat throughout the meal.",
        target:
          "No nosso restaurante o serviço é rodízio — os passadores virão à sua mesa com cortes diferentes de carne durante toda a refeição.",
      },
      {
        en: "The salad bar and hot buffet are included in the prix fixe — please help yourselves.",
        target:
          "A salada e o buffet quente estão incluídos no preço fixo — por favor, sirvam-se à vontade.",
      },
      {
        en: "The green card means you are ready for more meat, and the red card means you would like to pause.",
        target:
          "O cartão verde significa que você está pronto para mais carne, e o cartão vermelho significa que deseja uma pausa.",
      },
      {
        en: "Do you have any dietary restrictions or food allergies? Some of our marinades contain gluten.",
        target:
          "Vocês têm alguma restrição alimentar ou alergia? Algumas das nossas marinadas contêm glúten.",
      },
      {
        en: "Tonight we have picanha, fraldinha, costela, and the house special — garlic lamb chops.",
        target:
          "Esta noite temos picanha, fraldinha, costela e o especial da casa — costeletas de cordeiro ao alho.",
      },
      {
        en: "Can I bring you a caipirinha or a fresh juice while you settle in?",
        target: "Posso trazer uma caipirinha ou um suco natural enquanto vocês se acomodam?",
      },
      {
        en: "For dessert, may I suggest our passion fruit mousse or the traditional pudim de leite?",
        target:
          "Para a sobremesa, posso sugerir a mousse de maracujá ou o tradicional pudim de leite?",
      },
      {
        en: "Thank you for dining with us tonight — it was a pleasure to have you here.",
        target: "Obrigado por jantar conosco esta noite — foi um prazer tê-los aqui.",
      },
    ],
  },

  // ── Legal & Immigration ──────────────────────────────────────────────────
  // Spanish — legal immigration: asylum intake
  {
    id: "seed-es-legal-asylum",
    title: "Ley de Inmigración: Entrevista de Asilo",
    subtitle: "Legal & Immigration · asylum intake interview in Spanish",
    language: "Spanish",
    targetLabel: "Español",
    flag: "🇲🇽",
    section: "culture",
    available: true,
    level: "C1",
    sentences: [
      {
        en: "Thank you for coming in today. Everything you share with me is confidential and protected by attorney-client privilege.",
        target:
          "Gracias por venir hoy. Todo lo que comparta conmigo es confidencial y está protegido por el privilegio abogado-cliente.",
      },
      {
        en: "To apply for asylum in the United States, you must show that you have been persecuted — or have a well-founded fear of persecution — based on race, religion, nationality, political opinion, or membership in a particular social group.",
        target:
          "Para solicitar asilo en los Estados Unidos, debe demostrar que ha sido perseguido, o que tiene un temor fundado de persecución, por motivos de raza, religión, nacionalidad, opinión política o pertenencia a un grupo social determinado.",
      },
      {
        en: "Can you tell me, in your own words, why you left your country and why you cannot return?",
        target:
          "¿Puede contarme, en sus propias palabras, por qué salió de su país y por qué no puede regresar?",
      },
      {
        en: "The one-year filing deadline is critical — asylum applications must be filed within one year of arriving in the United States.",
        target:
          "El plazo de presentación de un año es crucial; las solicitudes de asilo deben presentarse dentro del año siguiente a la llegada a los Estados Unidos.",
      },
      {
        en: "To support your case, we will need any evidence you have: police reports, medical records, photographs, witness statements, or news articles.",
        target:
          "Para respaldar su caso, necesitaremos cualquier evidencia que tenga: informes policiales, expedientes médicos, fotografías, declaraciones de testigos o artículos periodísticos.",
      },
      {
        en: "USCIS will schedule an interview with an asylum officer — I will prepare you for the questions they are likely to ask.",
        target:
          "El USCIS programará una entrevista con un oficial de asilo; yo lo prepararé para las preguntas que probablemente le harán.",
      },
      {
        en: "If your asylum case is denied, you have the right to appeal before the Board of Immigration Appeals.",
        target:
          "Si su solicitud de asilo es denegada, tiene derecho a apelar ante la Junta de Apelaciones de Inmigración.",
      },
      {
        en: "While your case is pending, you may be eligible for an Employment Authorization Document after 180 days.",
        target:
          "Mientras su caso está pendiente, puede ser elegible para un Documento de Autorización de Empleo después de 180 días.",
      },
      {
        en: "Do you have any family members who entered with you or who are currently in danger in your home country?",
        target:
          "¿Tiene familiares que hayan entrado con usted o que actualmente estén en peligro en su país de origen?",
      },
    ],
  },

  // French — legal immigration
  {
    id: "seed-fr-legal-visa",
    title: "Immigration : Consultation Visa et Séjour",
    subtitle: "Legal & Immigration · visa and residence consultation in French",
    language: "French",
    targetLabel: "Français",
    flag: "🇫🇷",
    section: "culture",
    available: true,
    level: "C1",
    sentences: [
      {
        en: "Thank you for coming in. I understand you are seeking advice about your immigration status in the United States.",
        target:
          "Merci de votre visite. Je comprends que vous souhaitez des conseils sur votre statut d'immigration aux États-Unis.",
      },
      {
        en: "Can you tell me when you first entered the United States and on what type of visa?",
        target:
          "Pouvez-vous me dire quand vous êtes entré aux États-Unis pour la première fois et avec quel type de visa ?",
      },
      {
        en: "A tourist visa, or B-2 visa, allows a stay of up to six months and cannot be used for employment.",
        target:
          "Un visa touristique, ou visa B-2, autorise un séjour allant jusqu'à six mois et ne peut pas être utilisé à des fins professionnelles.",
      },
      {
        en: "If your authorized period of admission has expired, you are considered to be out of status, which can affect future visa applications.",
        target:
          "Si votre période d'admission autorisée a expiré, vous êtes considéré en situation irrégulière, ce qui peut affecter vos futures demandes de visa.",
      },
      {
        en: "Your employer can sponsor you for an H-1B visa if your position qualifies as a specialty occupation.",
        target:
          "Votre employeur peut vous parrainer pour un visa H-1B si votre poste est qualifié d'occupation spécialisée.",
      },
      {
        en: "To file a petition with USCIS, we will need your passport, your I-94 arrival record, tax returns, and a letter from your employer.",
        target:
          "Pour déposer une pétition auprès de l'USCIS, nous aurons besoin de votre passeport, de votre enregistrement d'entrée I-94, de vos déclarations fiscales et d'une lettre de votre employeur.",
      },
      {
        en: "Processing times at USCIS can range from several months to over a year — I will advise you to request premium processing if time is critical.",
        target:
          "Les délais de traitement à l'USCIS peuvent aller de plusieurs mois à plus d'un an — je vous conseillerai de demander un traitement accéléré si le temps est critique.",
      },
      {
        en: "If your petition is approved, you will receive a notice and can then apply for your visa at a U.S. consulate.",
        target:
          "Si votre pétition est approuvée, vous recevrez une notification et pourrez ensuite demander votre visa auprès d'un consulat américain.",
      },
      {
        en: "Do you have any questions about what I have explained, or is there anything you would like me to clarify?",
        target:
          "Avez-vous des questions sur ce que j'ai expliqué, ou y a-t-il quelque chose que vous souhaiteriez que je clarifie ?",
      },
    ],
  },

  // German — legal immigration
  {
    id: "seed-de-legal-petition",
    title: "Einwanderungsrecht: Mandantengespräch",
    subtitle: "Legal & Immigration · client intake and petition guidance in German",
    language: "German",
    targetLabel: "Deutsch",
    flag: "🇩🇪",
    section: "culture",
    available: true,
    level: "C1",
    sentences: [
      {
        en: "Good morning. Please have a seat. Everything discussed today is covered by attorney-client privilege.",
        target:
          "Guten Morgen. Bitte nehmen Sie Platz. Alles, was wir heute besprechen, unterliegt der anwaltlichen Schweigepflicht.",
      },
      {
        en: "I understand you are in the United States on a student visa and wish to explore options for remaining here after your studies.",
        target:
          "Ich verstehe, dass Sie sich mit einem Studentenvisum in den Vereinigten Staaten aufhalten und Möglichkeiten prüfen möchten, nach Ihrem Studium hier zu bleiben.",
      },
      {
        en: "A green card, or permanent resident card, grants you the right to live and work permanently in the United States.",
        target:
          "Eine Green Card, also eine Daueraufenthaltsgenehmigung, gewährt Ihnen das Recht, dauerhaft in den Vereinigten Staaten zu leben und zu arbeiten.",
      },
      {
        en: "There are several paths to a green card: employment-based, family-based, the diversity visa lottery, or refugee and asylum status.",
        target:
          "Es gibt verschiedene Wege zur Green Card: über Beschäftigung, Familienzusammenführung, die Diversity-Visa-Lotterie oder den Flüchtlings- und Asylstatus.",
      },
      {
        en: "For an employment-based green card, your employer must file an I-140 petition with USCIS on your behalf.",
        target:
          "Für eine beschäftigungsbasierte Green Card muss Ihr Arbeitgeber in Ihrem Namen eine I-140-Petition beim USCIS einreichen.",
      },
      {
        en: "The USCIS case number will allow us to track the status of your petition online at any time.",
        target:
          "Die USCIS-Aktennummer ermöglicht es uns, den Status Ihrer Petition jederzeit online zu verfolgen.",
      },
      {
        en: "If a hearing is scheduled, I will accompany you and represent your interests before the immigration judge.",
        target:
          "Sollte eine Anhörung angesetzt werden, werde ich Sie begleiten und Ihre Interessen vor dem Einwanderungsrichter vertreten.",
      },
      {
        en: "Deportation proceedings can be initiated if you violate the terms of your visa — it is essential that you do not overstay.",
        target:
          "Ein Abschiebungsverfahren kann eingeleitet werden, wenn Sie gegen die Bedingungen Ihres Visums verstoßen — es ist unbedingt erforderlich, dass Sie Ihren erlaubten Aufenthalt nicht überschreiten.",
      },
      {
        en: "I will send you a checklist of all the documents we need to compile before we file. Please do not sign anything without consulting me first.",
        target:
          "Ich werde Ihnen eine Checkliste mit allen Dokumenten zusenden, die wir vor der Einreichung zusammenstellen müssen. Bitte unterschreiben Sie nichts, ohne mich vorher zu konsultieren.",
      },
    ],
  },

  // Italian — legal immigration
  {
    id: "seed-it-legal-green-card",
    title: "Immigrazione: Colloquio con il Cliente",
    subtitle: "Legal & Immigration · Italian client consultation on green card",
    language: "Italian",
    targetLabel: "Italiano",
    flag: "🇮🇹",
    section: "culture",
    available: true,
    level: "C1",
    sentences: [
      {
        en: "Welcome. Please sit down. Before we begin, I want to explain that our conversation is completely confidential.",
        target:
          "Benvenuto. Si accomodi. Prima di iniziare, voglio spiegarle che la nostra conversazione è completamente riservata.",
      },
      {
        en: "Can you describe your current immigration status and how long you have been in the United States?",
        target:
          "Può descrivermi il suo attuale status immigratorio e da quanto tempo si trova negli Stati Uniti?",
      },
      {
        en: "A green card grants permanent residency, which means you can live and work in the United States indefinitely.",
        target:
          "La Green Card concede la residenza permanente, il che significa che può vivere e lavorare negli Stati Uniti a tempo indeterminato.",
      },
      {
        en: "USCIS requires that you provide documentation of your entry, your current address, and any prior immigration violations.",
        target:
          "Il USCIS richiede che lei fornisca documentazione del suo ingresso, del suo indirizzo attuale e di eventuali precedenti violazioni immigratorie.",
      },
      {
        en: "If you have a U.S. citizen or permanent resident spouse, they can file a petition on your behalf.",
        target:
          "Se ha un coniuge cittadino americano o residente permanente, questi può presentare una petizione a suo nome.",
      },
      {
        en: "The naturalization process requires five years of permanent residency, continuous physical presence, and passing an English and civics test.",
        target:
          "Il processo di naturalizzazione richiede cinque anni di residenza permanente, presenza fisica continuativa e il superamento di un esame di inglese e di educazione civica.",
      },
      {
        en: "Missing your hearing date is extremely serious — it can result in a deportation order issued in absentia.",
        target:
          "Non presentarsi alla data dell'udienza è estremamente grave — può comportare un'ordinanza di deportazione emessa in contumacia.",
      },
      {
        en: "I recommend you bring your passport, all prior visa stamps, your I-94 record, and any court documents to our next meeting.",
        target:
          "Le raccomando di portare il passaporto, tutti i timbri visto precedenti, il registro I-94 e tutti i documenti giudiziari al nostro prossimo incontro.",
      },
      {
        en: "Do you have any questions so far? I want to make sure you fully understand the process before we proceed.",
        target:
          "Ha domande finora? Voglio assicurarmi che abbia compreso appieno il processo prima di procedere.",
      },
    ],
  },

  // Japanese — legal immigration
  {
    id: "seed-ja-legal-deportation",
    title: "移民法:在留資格と強制送還の相談",
    subtitle: "Legal & Immigration · immigration status and removal defense in Japanese",
    language: "Japanese",
    targetLabel: "日本語",
    flag: "🇯🇵",
    section: "culture",
    available: true,
    level: "C1",
    sentences: [
      {
        en: "Thank you for coming in today. Please take a seat. Everything you share here is protected by attorney-client privilege.",
        target:
          "本日はお越しいただきありがとうございます。どうぞおかけください。ここでお話しいただく内容はすべて弁護士・依頼人間の秘匿特権により保護されています。",
      },
      {
        en: "Can you tell me what type of visa you currently hold and when it expires?",
        target: "現在お持ちのビザの種類と、その有効期限を教えていただけますか？",
      },
      {
        en: "If your authorized period of stay has expired, you are considered to be unlawfully present in the United States.",
        target:
          "許可された在留期間が過ぎている場合、あなたはアメリカ合衆国に不法滞在していると見なされます。",
      },
      {
        en: "USCIS has the authority to initiate removal proceedings if you violate the conditions of your visa.",
        target: "USCISは、ビザの条件に違反した場合に強制送還手続きを開始する権限を持っています。",
      },
      {
        en: "You have the right to a hearing before an immigration judge before any removal order becomes final.",
        target: "強制送還命令が確定する前に、移民裁判官による審問を受ける権利があります。",
      },
      {
        en: "If you entered the country fearing persecution, you may be eligible to apply for asylum or withholding of removal.",
        target:
          "迫害を恐れて入国した場合、難民申請または強制送還の停止を申請できる場合があります。",
      },
      {
        en: "I will need to review your I-94 arrival record, any correspondence from USCIS, and all prior immigration documents.",
        target:
          "I-94入国記録、USCISからのすべての書簡、および以前のすべての移民関連書類を確認する必要があります。",
      },
      {
        en: "Cancellation of removal may be available if you have been a lawful permanent resident for at least five years.",
        target:
          "少なくとも5年間の適法な永住者としての地位がある場合、強制送還の取り消しが適用される場合があります。",
      },
      {
        en: "Do not travel outside the United States while your case is pending — re-entry could be denied.",
        target:
          "手続きが係属中は米国外への渡航を控えてください。再入国が拒否される場合があります。",
      },
    ],
  },

  // Portuguese — legal immigration
  {
    id: "seed-pt-legal-uscis",
    title: "Imigração: Consulta Jurídica e USCIS",
    subtitle: "Legal & Immigration · USCIS petition and documentation consultation in Portuguese",
    language: "Portuguese",
    targetLabel: "Português",
    flag: "🇧🇷",
    section: "culture",
    available: true,
    level: "C1",
    sentences: [
      {
        en: "Good morning. Please come in and have a seat. I am glad you made it in today.",
        target: "Bom dia. Por favor, entre e sente-se. Fico feliz que tenha conseguido vir hoje.",
      },
      {
        en: "I understand you are concerned about your immigration status. Can you tell me how and when you entered the United States?",
        target:
          "Entendo que você está preocupado com seu status imigratório. Pode me contar como e quando entrou nos Estados Unidos?",
      },
      {
        en: "If you entered without inspection, you may still have legal options depending on your family relationships and length of stay.",
        target:
          "Se você entrou sem inspeção, ainda pode ter opções legais dependendo de seus vínculos familiares e tempo de permanência.",
      },
      {
        en: "An affidavit of support is required to show that your sponsor has sufficient income to prevent you from becoming a public charge.",
        target:
          "Uma declaração de suporte financeiro é necessária para comprovar que seu patrocinador tem renda suficiente para que você não se torne um ônus para o governo.",
      },
      {
        en: "USCIS will require your birth certificate, marriage certificate if applicable, passport, and two passport photos.",
        target:
          "O USCIS exigirá sua certidão de nascimento, certidão de casamento se aplicável, passaporte e duas fotos para passaporte.",
      },
      {
        en: "The biometrics appointment is mandatory — USCIS will take your fingerprints and photograph for background check purposes.",
        target:
          "O agendamento de biometria é obrigatório — o USCIS coletará suas impressões digitais e foto para fins de verificação de antecedentes.",
      },
      {
        en: "If your petition is approved, you will receive a notice of approval and instructions for the next steps in the process.",
        target:
          "Se sua petição for aprovada, você receberá um aviso de aprovação e instruções sobre os próximos passos no processo.",
      },
      {
        en: "A deportation order can be appealed, but the window to file is short — usually thirty days from the date of the order.",
        target:
          "Uma ordem de deportação pode ser apelada, mas o prazo para protocolar é curto — geralmente trinta dias a partir da data da ordem.",
      },
      {
        en: "I will follow up with you as soon as we receive a response from USCIS. Please keep my office informed if you change your address.",
        target:
          "Entrarei em contato assim que recebermos uma resposta do USCIS. Por favor, informe meu escritório caso você mude de endereço.",
      },
    ],
  },

  // ── K–12 Classroom ───────────────────────────────────────────────────────
  // Spanish — k12: IEP meeting with parent
  {
    id: "seed-es-k12-iep",
    title: "K-12: Reunión del IEP con los Padres",
    subtitle: "K–12 Classroom · IEP meeting and special education planning in Spanish",
    language: "Spanish",
    targetLabel: "Español",
    flag: "🇲🇽",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "Thank you for coming today, Mrs. Ramirez. We appreciate you taking time to be here for Miguel's IEP meeting.",
        target:
          "Gracias por venir hoy, señora Ramírez. Le agradecemos que se haya tomado el tiempo para asistir a la reunión del IEP de Miguel.",
      },
      {
        en: "An IEP, or Individualized Education Program, is a written plan that outlines the special services and supports your child will receive.",
        target:
          "Un IEP, o Programa de Educación Individualizada, es un plan escrito que describe los servicios especiales y apoyos que recibirá su hijo.",
      },
      {
        en: "Based on the evaluation, Miguel qualifies for speech therapy twice a week and extended time on tests.",
        target:
          "Según la evaluación, Miguel califica para recibir terapia del habla dos veces por semana y tiempo adicional en los exámenes.",
      },
      {
        en: "We also recommend that he sit at the front of the classroom to minimize distractions during instruction.",
        target:
          "También recomendamos que se siente al frente del salón de clases para minimizar las distracciones durante la instrucción.",
      },
      {
        en: "As a parent, you are a full member of the IEP team and your input and signature are required before we can implement the plan.",
        target:
          "Como padre de familia, usted es un miembro pleno del equipo del IEP, y su aportación y firma son necesarias antes de que podamos implementar el plan.",
      },
      {
        en: "We will review the IEP at least once a year, but you can request a meeting at any time if you have concerns.",
        target:
          "Revisaremos el IEP al menos una vez al año, pero puede solicitar una reunión en cualquier momento si tiene inquietudes.",
      },
      {
        en: "Do you have any questions about the goals we have written for Miguel this year?",
        target:
          "¿Tiene alguna pregunta sobre los objetivos que hemos redactado para Miguel este año?",
      },
      {
        en: "If at any point you disagree with the IEP, you have the right to request mediation or file a complaint with the state education department.",
        target:
          "Si en algún momento no está de acuerdo con el IEP, tiene derecho a solicitar mediación o presentar una queja ante el departamento de educación estatal.",
      },
      {
        en: "We are all working toward the same goal — making sure Miguel has every opportunity to succeed.",
        target:
          "Todos trabajamos hacia el mismo objetivo: asegurarnos de que Miguel tenga todas las oportunidades para tener éxito.",
      },
    ],
  },

  // French — k12: field trip
  {
    id: "seed-fr-k12-field-trip",
    title: "K–12 : Sortie Scolaire — Communication",
    subtitle:
      "K–12 Classroom · organizing a field trip and communicating with students and parents",
    language: "French",
    targetLabel: "Français",
    flag: "🇫🇷",
    section: "culture",
    available: true,
    level: "B1",
    sentences: [
      {
        en: "Class, I have exciting news — next month we are going on a field trip to the natural history museum.",
        target:
          "Classe, j'ai une bonne nouvelle — le mois prochain, nous allons faire une sortie scolaire au musée d'histoire naturelle.",
      },
      {
        en: "Please bring home this permission slip and have your parent or guardian sign it by Friday.",
        target:
          "Veuillez rapporter ce formulaire d'autorisation à la maison et le faire signer par votre parent ou tuteur avant vendredi.",
      },
      {
        en: "The bus will depart from the front of the school at eight-thirty sharp — please do not be late.",
        target:
          "Le car partira devant l'école à huit heures et demie précises — veuillez ne pas être en retard.",
      },
      {
        en: "You will need to bring a packed lunch, a water bottle, and comfortable shoes — we will be walking for most of the day.",
        target:
          "Vous devrez apporter un déjeuner préparé, une bouteille d'eau et des chaussures confortables — nous marcherons pendant la majeure partie de la journée.",
      },
      {
        en: "We will be split into three groups — please stay with your assigned chaperone at all times.",
        target:
          "Nous serons répartis en trois groupes — restez avec votre accompagnateur désigné à tout moment.",
      },
      {
        en: "At the museum, you will observe exhibits on prehistoric life, climate, and geology that connect directly to our current science unit.",
        target:
          "Au musée, vous observerez des expositions sur la préhistoire, le climat et la géologie qui sont directement liées à notre unité de sciences actuelle.",
      },
      {
        en: "I will send a letter home to parents with the full itinerary, emergency contact procedures, and arrival time.",
        target:
          "J'enverrai une lettre aux parents avec le programme complet, les procédures d'urgence et l'heure d'arrivée.",
      },
      {
        en: "Students with medical needs or allergies must inform me before the trip so I can coordinate with the nurse.",
        target:
          "Les élèves ayant des besoins médicaux ou des allergies doivent m'en informer avant la sortie afin que je puisse coordonner avec l'infirmière.",
      },
      {
        en: "This trip is a privilege — students who have had three or more unexcused absences will need a separate conversation before attending.",
        target:
          "Cette sortie est un privilège — les élèves ayant eu trois absences non justifiées ou plus devront avoir une conversation séparée avant d'y participer.",
      },
    ],
  },

  // German — k12
  {
    id: "seed-de-k12-classroom",
    title: "Schule: Unterricht und Klassenführung",
    subtitle: "K–12 Classroom · classroom management and instruction in German",
    language: "German",
    targetLabel: "Deutsch",
    flag: "🇩🇪",
    section: "culture",
    available: true,
    level: "B1",
    sentences: [
      {
        en: "Good morning, class. Please take your seats and take out your exercise books.",
        target: "Guten Morgen, Klasse. Bitte setzen Sie sich und nehmen Sie Ihre Hefte heraus.",
      },
      {
        en: "Today we will continue with our unit on the Weimar Republic — please open your textbook to page forty-seven.",
        target:
          "Heute fahren wir mit unserer Einheit zur Weimarer Republik fort — bitte schlagen Sie Ihr Lehrbuch auf Seite siebenundvierzig auf.",
      },
      {
        en: "Who can summarize what we discussed in last Thursday's lesson? Raise your hand if you remember.",
        target:
          "Wer kann zusammenfassen, was wir in der Stunde letzten Donnerstag besprochen haben? Heben Sie die Hand, wenn Sie sich erinnern.",
      },
      {
        en: "Your essays are due at the beginning of class on Wednesday — late submissions will be penalized one grade level.",
        target:
          "Ihre Aufsätze müssen zu Beginn der Stunde am Mittwoch abgegeben werden — verspätete Abgaben werden um eine Note abgewertet.",
      },
      {
        en: "Lucas, please stop talking while your classmate is speaking — everyone deserves to be heard.",
        target:
          "Lucas, hören Sie bitte auf zu reden, während Ihr Mitschüler spricht — jeder verdient es, gehört zu werden.",
      },
      {
        en: "I will pair you up for today's group activity — the goal is to compare and contrast two primary source documents.",
        target:
          "Ich werde Sie für die heutige Gruppenarbeit einteilen — das Ziel ist es, zwei Primärquellen zu vergleichen und gegenüberzustellen.",
      },
      {
        en: "If you are struggling with the material, please come see me after class or arrange a tutoring session.",
        target:
          "Wenn Sie Schwierigkeiten mit dem Stoff haben, kommen Sie bitte nach der Stunde zu mir oder vereinbaren Sie eine Nachhilfestunde.",
      },
      {
        en: "Your mid-term grade will include participation, your essay, and the written exam at the end of the month.",
        target:
          "Ihre Zwischennote setzt sich aus Beteiligung, Ihrem Aufsatz und der schriftlichen Prüfung am Ende des Monats zusammen.",
      },
      {
        en: "Before we finish, are there any questions about the assignment or the topics covered today?",
        target:
          "Bevor wir schließen — gibt es Fragen zur Aufgabe oder zu den heute behandelten Themen?",
      },
    ],
  },

  // Italian — k12
  {
    id: "seed-it-k12-lesson",
    title: "Scuola: Gestione della Classe e Lezione",
    subtitle: "K–12 Classroom · lesson delivery and student engagement in Italian",
    language: "Italian",
    targetLabel: "Italiano",
    flag: "🇮🇹",
    section: "culture",
    available: true,
    level: "B1",
    sentences: [
      {
        en: "Good morning, class. Please settle down and take out your notebooks — we are starting right away.",
        target:
          "Buongiorno, ragazzi. Per favore sistematevi e tirate fuori i quaderni — cominciamo subito.",
      },
      {
        en: "Today's lesson is on the Italian Risorgimento — we will look at the roles of Garibaldi, Mazzini, and Cavour.",
        target:
          "La lezione di oggi riguarda il Risorgimento italiano — esamineremo i ruoli di Garibaldi, Mazzini e Cavour.",
      },
      {
        en: "For homework, you need to read chapter nine and answer the questions at the end of the chapter.",
        target:
          "Per i compiti a casa dovete leggere il capitolo nove e rispondere alle domande alla fine del capitolo.",
      },
      {
        en: "Marco, could you please read the first paragraph aloud for the class?",
        target: "Marco, potresti leggere il primo paragrafo ad alta voce per la classe?",
      },
      {
        en: "Excellent answer, Sofia. Can you expand on that and explain why the unification was significant for ordinary citizens?",
        target:
          "Ottima risposta, Sofia. Puoi approfondire e spiegare perché l'unificazione fu significativa per i cittadini comuni?",
      },
      {
        en: "I will be distributing the graded tests from last week — please review my comments and come to me with any questions.",
        target:
          "Distribuirò i test corretti della settimana scorsa — vi prego di leggere i miei commenti e di venire da me se avete domande.",
      },
      {
        en: "The written exam is in three weeks. I will provide a study guide at the end of this week.",
        target:
          "L'esame scritto è tra tre settimane. Fornirò una guida allo studio entro la fine di questa settimana.",
      },
      {
        en: "If anyone is struggling with the material, please let me know — we can arrange extra support during the lunch break.",
        target:
          "Se qualcuno ha difficoltà con il materiale, fatemi sapere — possiamo organizzare un supporto aggiuntivo durante la pausa pranzo.",
      },
      {
        en: "Before the bell, make sure your name and class section are written on every assignment you hand in.",
        target:
          "Prima del suono della campanella, assicuratevi che il vostro nome e la sezione siano scritti su ogni compito che consegnate.",
      },
    ],
  },

  // Japanese — k12
  {
    id: "seed-ja-k12-assignment",
    title: "K-12:授業管理と課題説明",
    subtitle: "K–12 Classroom · lesson management and assignment guidance in Japanese",
    language: "Japanese",
    targetLabel: "日本語",
    flag: "🇯🇵",
    section: "culture",
    available: true,
    level: "B1",
    sentences: [
      {
        en: "Good morning, everyone. Please take your seats and open your textbooks to page fifty-three.",
        target:
          "おはようございます、みなさん。席についてください。教科書の53ページを開いてください。",
      },
      {
        en: "Today we are going to learn about the water cycle and how precipitation connects to evaporation.",
        target: "今日は水の循環と、降水がどのように蒸発と関連しているかについて学びます。",
      },
      {
        en: "I want everyone to work quietly on the worksheet for the next ten minutes — we will review the answers together afterward.",
        target:
          "次の10分間は全員静かにプリントに取り組んでください。その後、一緒に答え合わせをします。",
      },
      {
        en: "Keita, please put your phone away. I have asked you three times already.",
        target: "けいた君、スマートフォンをしまってください。もう3回お願いしましたよ。",
      },
      {
        en: "Raise your hand if you have finished question three — I want to check in before we move on.",
        target: "問題3が終わった人は手を挙げてください。次に進む前に確認したいと思います。",
      },
      {
        en: "Your science report is due on Friday. Make sure to include an introduction, a results section, and a conclusion.",
        target:
          "理科のレポートは金曜日が提出期限です。序論、結果のセクション、結論を必ず含めてください。",
      },
      {
        en: "If you are absent on the due date, you must submit your work by email on the same day — no exceptions.",
        target:
          "提出期限の日に欠席した場合は、当日中にメールで提出してください。例外はありません。",
      },
      {
        en: "I will be sending home progress reports next week — please share them with your parents and have a parent or guardian sign them.",
        target: "来週、通知表を配布します。ご両親に見せ、保護者に署名をもらってください。",
      },
      {
        en: "Before we end class, does anyone have questions about today's lesson or the upcoming assignment?",
        target: "授業を終える前に、今日の授業や今後の課題について質問はありますか？",
      },
    ],
  },

  // Portuguese — k12
  {
    id: "seed-pt-k12-curriculum",
    title: "Escola: Currículo e Comunicação com Pais",
    subtitle: "K–12 Classroom · curriculum planning and parent communication in Portuguese",
    language: "Portuguese",
    targetLabel: "Português",
    flag: "🇧🇷",
    section: "culture",
    available: true,
    level: "B1",
    sentences: [
      {
        en: "Good afternoon, class. Please settle down and put your phones away before we begin.",
        target:
          "Boa tarde, turma. Por favor se acalmem e guardem os celulares antes de começarmos.",
      },
      {
        en: "This semester we will cover three major units: ecology, genetics, and the human body systems.",
        target:
          "Neste semestre vamos abordar três unidades principais: ecologia, genética e os sistemas do corpo humano.",
      },
      {
        en: "For each unit there will be a project, a quiz, and a written exam — participation in class also counts for your grade.",
        target:
          "Em cada unidade haverá um projeto, um teste rápido e uma prova escrita — a participação em aula também conta para a nota.",
      },
      {
        en: "Luana, your assignment is two days late. Come speak with me after class so we can figure out a plan.",
        target:
          "Luana, sua tarefa está dois dias atrasada. Venha falar comigo depois da aula para que possamos traçar um plano.",
      },
      {
        en: "At the parent-teacher conference next month, I will discuss each student's progress, strengths, and areas that need support.",
        target:
          "Na reunião de pais e professores do mês que vem, discutirei o progresso de cada aluno, seus pontos fortes e as áreas que precisam de apoio.",
      },
      {
        en: "Students with an IEP or 504 plan will receive the accommodations outlined in their documents — please remind me at the start of any test.",
        target:
          "Alunos com um PEI ou plano 504 receberão os acomodamentos descritos em seus documentos — por favor, me lembrem no início de qualquer avaliação.",
      },
      {
        en: "Your reading log is due every Monday morning — please record the title, author, and at least three sentences about what you read.",
        target:
          "Seu diário de leitura deve ser entregue toda segunda-feira de manhã — registre o título, o autor e pelo menos três frases sobre o que leu.",
      },
      {
        en: "I encourage all students to visit the school library at least once a week — reading outside of class makes a real difference.",
        target:
          "Encorajo todos os alunos a visitarem a biblioteca escolar pelo menos uma vez por semana — a leitura fora da sala de aula faz uma diferença real.",
      },
      {
        en: "If you are going through something difficult at home, please know that the school counselor is available and everything is kept confidential.",
        target:
          "Se você está passando por um momento difícil em casa, saiba que o orientador escolar está disponível e tudo é mantido em sigilo.",
      },
    ],
  },

  // ── New entries: easier scenarios (A1–B2) ────────────────────────────────

  // A1 — Spanish — store directions (retail)
  {
    id: "seed-es-retail-directions",
    title: "Tienda: ¿Dónde Está?",
    subtitle: "Retail · simple store directions and product locations",
    language: "Spanish",
    targetLabel: "Español",
    flag: "🇲🇽",
    section: "culture",
    available: true,
    level: "A1",
    sentences: [
      { en: "Hello! Can I help you?", target: "¡Hola! ¿Puedo ayudarle?" },
      { en: "Where is the milk?", target: "¿Dónde está la leche?" },
      { en: "It is in the back of the store.", target: "Está al fondo de la tienda." },
      { en: "Where is the bread?", target: "¿Dónde está el pan?" },
      { en: "The bread is on aisle three.", target: "El pan está en el pasillo tres." },
      { en: "Do you have apples?", target: "¿Tiene manzanas?" },
      { en: "Yes, the fruit is over there.", target: "Sí, la fruta está allí." },
      { en: "Where is the bathroom?", target: "¿Dónde está el baño?" },
      { en: "It is next to the entrance.", target: "Está al lado de la entrada." },
      { en: "Thank you very much!", target: "¡Muchas gracias!" },
    ],
  },

  // A1 — Japanese — classroom commands (K-12)
  {
    id: "seed-ja-k12-commands",
    title: "教室の指示:基本のフレーズ",
    subtitle: "K–12 Classroom · simple classroom commands for young learners",
    language: "Japanese",
    targetLabel: "日本語",
    flag: "🇯🇵",
    section: "culture",
    available: true,
    level: "A1",
    sentences: [
      { en: "Good morning, everyone.", target: "おはようございます、みなさん。" },
      { en: "Please sit down.", target: "座ってください。" },
      { en: "Open your book.", target: "本を開いてください。" },
      { en: "Look at the board.", target: "黒板を見てください。" },
      { en: "Listen carefully.", target: "よく聞いてください。" },
      { en: "Repeat after me.", target: "私の後について言ってください。" },
      { en: "Raise your hand, please.", target: "手を挙げてください。" },
      { en: "Be quiet, please.", target: "静かにしてください。" },
      { en: "Very good!", target: "とても上手ですね！" },
      { en: "See you tomorrow.", target: "また明日。" },
    ],
  },

  // A2 — French — hotel check-in
  {
    id: "seed-fr-hotel-checkin",
    title: "Hôtel : Arrivée et Enregistrement",
    subtitle: "Hotel · simple check-in conversation in French",
    language: "French",
    targetLabel: "Français",
    flag: "🇫🇷",
    section: "culture",
    available: true,
    level: "A2",
    sentences: [
      { en: "Good evening. I have a reservation.", target: "Bonsoir. J'ai une réservation." },
      {
        en: "What is your last name, please?",
        target: "Quel est votre nom de famille, s'il vous plaît ?",
      },
      { en: "My name is Martin. M-A-R-T-I-N.", target: "Je m'appelle Martin. M-A-R-T-I-N." },
      {
        en: "I see your reservation. Two nights, one room.",
        target: "Je vois votre réservation. Deux nuits, une chambre.",
      },
      {
        en: "May I see your passport, please?",
        target: "Puis-je voir votre passeport, s'il vous plaît ?",
      },
      { en: "Here it is.", target: "Le voici." },
      {
        en: "Your room is on the third floor, number 312.",
        target: "Votre chambre est au troisième étage, numéro 312.",
      },
      {
        en: "Breakfast is served from seven to ten.",
        target: "Le petit-déjeuner est servi de sept heures à dix heures.",
      },
      {
        en: "What time do I need to check out?",
        target: "À quelle heure dois-je libérer la chambre ?",
      },
      {
        en: "Before eleven o'clock, please. Have a nice stay!",
        target: "Avant onze heures, s'il vous plaît. Bon séjour !",
      },
    ],
  },

  // A2 — Italian — taking a restaurant order
  {
    id: "seed-it-restaurant-order",
    title: "Ristorante: Prendere l'Ordine",
    subtitle: "Restaurant · simple ordering conversation in Italian",
    language: "Italian",
    targetLabel: "Italiano",
    flag: "🇮🇹",
    section: "culture",
    available: true,
    level: "A2",
    sentences: [
      {
        en: "Good evening! Are you ready to order?",
        target: "Buona sera! Siete pronti per ordinare?",
      },
      { en: "Yes, I would like the pizza margherita.", target: "Sì, vorrei la pizza margherita." },
      { en: "And for you, sir?", target: "E per lei, signore?" },
      {
        en: "I will have the spaghetti carbonara, please.",
        target: "Prendo gli spaghetti alla carbonara, per favore.",
      },
      { en: "Anything to drink?", target: "Qualcosa da bere?" },
      {
        en: "A bottle of water and one glass of red wine.",
        target: "Una bottiglia d'acqua e un bicchiere di vino rosso.",
      },
      { en: "Sparkling or still water?", target: "Acqua frizzante o naturale?" },
      { en: "Still, please.", target: "Naturale, per favore." },
      { en: "Would you like bread?", target: "Volete del pane?" },
      { en: "Yes, thank you. That is everything for now.", target: "Sì, grazie. Per ora è tutto." },
    ],
  },

  // A2 — Portuguese — retail returns
  {
    id: "seed-pt-retail-return",
    title: "Loja: Trocas e Devoluções",
    subtitle: "Retail · returning a product at a store in Portuguese",
    language: "Portuguese",
    targetLabel: "Português",
    flag: "🇧🇷",
    section: "culture",
    available: true,
    level: "A2",
    sentences: [
      {
        en: "Hello, I would like to return this shirt.",
        target: "Olá, eu gostaria de devolver esta camisa.",
      },
      { en: "Of course. Do you have the receipt?", target: "Claro. Você tem o recibo?" },
      { en: "Yes, here it is.", target: "Sim, aqui está." },
      { en: "What is the problem with the shirt?", target: "Qual é o problema com a camisa?" },
      { en: "It is too small for me.", target: "Está pequena demais para mim." },
      {
        en: "Would you like a different size or your money back?",
        target: "Você quer um tamanho diferente ou o dinheiro de volta?",
      },
      {
        en: "I would like a larger size, please.",
        target: "Eu quero um tamanho maior, por favor.",
      },
      { en: "We have a medium and a large in stock.", target: "Temos médio e grande em estoque." },
      { en: "I will take the large one.", target: "Vou levar o grande." },
      { en: "Perfect. Have a nice day!", target: "Perfeito. Tenha um bom dia!" },
    ],
  },

  // B1 — German — wine pairing recommendation (restaurant)
  {
    id: "seed-de-restaurant-wine",
    title: "Restaurant: Weinempfehlung",
    subtitle: "Restaurant · sommelier recommends wine pairings in German",
    language: "German",
    targetLabel: "Deutsch",
    flag: "🇩🇪",
    section: "culture",
    available: true,
    level: "B1",
    sentences: [
      {
        en: "Have you decided on your meal yet?",
        target: "Haben Sie sich schon für ein Gericht entschieden?",
      },
      {
        en: "Yes, I will have the steak and my wife the salmon.",
        target: "Ja, ich nehme das Steak und meine Frau den Lachs.",
      },
      {
        en: "May I suggest a wine to go with your meal?",
        target: "Darf ich einen Wein zu Ihrem Essen empfehlen?",
      },
      { en: "That would be very helpful, thank you.", target: "Das wäre sehr hilfreich, danke." },
      {
        en: "For the steak, a full-bodied red wine works very well.",
        target: "Zum Steak passt ein kräftiger Rotwein sehr gut.",
      },
      {
        en: "We have a nice Spätburgunder from the Pfalz region.",
        target: "Wir haben einen schönen Spätburgunder aus der Pfalz.",
      },
      {
        en: "And for the salmon, I recommend a dry white wine.",
        target: "Und zum Lachs empfehle ich einen trockenen Weißwein.",
      },
      {
        en: "Our Riesling from the Mosel is a popular choice.",
        target: "Unser Riesling von der Mosel ist eine beliebte Wahl.",
      },
      {
        en: "Could we order both wines by the glass?",
        target: "Könnten wir beide Weine glasweise bestellen?",
      },
      {
        en: "Of course. I will bring them right away.",
        target: "Selbstverständlich. Ich bringe sie sofort.",
      },
    ],
  },

  // B1 — Spanish — ESL grammar explanation
  {
    id: "seed-es-edu-grammar",
    title: "Clase de Español: Explicación de Gramática",
    subtitle: "ESL/Adult Education · teacher explains grammar to students in Spanish",
    language: "Spanish",
    targetLabel: "Español",
    flag: "🇲🇽",
    section: "culture",
    available: true,
    level: "B1",
    sentences: [
      {
        en: "Today we are going to study the difference between 'ser' and 'estar'.",
        target: "Hoy vamos a estudiar la diferencia entre 'ser' y 'estar'.",
      },
      {
        en: "Both verbs translate to 'to be' in English, but they are used differently.",
        target: "Ambos verbos se traducen como 'to be' en inglés, pero se usan de forma diferente.",
      },
      {
        en: "We use 'ser' for permanent qualities, like nationality or profession.",
        target: "Usamos 'ser' para cualidades permanentes, como la nacionalidad o la profesión.",
      },
      {
        en: "For example: 'She is a doctor' — 'Ella es médica'.",
        target: "Por ejemplo: 'She is a doctor' — 'Ella es médica'.",
      },
      {
        en: "We use 'estar' for temporary states or locations.",
        target: "Usamos 'estar' para estados temporales o ubicaciones.",
      },
      {
        en: "For example: 'I am tired today' — 'Estoy cansado hoy'.",
        target: "Por ejemplo: 'I am tired today' — 'Estoy cansado hoy'.",
      },
      {
        en: "Does anyone have a question so far?",
        target: "¿Alguien tiene una pregunta hasta aquí?",
      },
      {
        en: "Yes — what about feelings? Are they 'ser' or 'estar'?",
        target: "Sí — ¿qué pasa con los sentimientos? ¿Se usa 'ser' o 'estar'?",
      },
      {
        en: "Excellent question. Feelings are usually temporary, so we use 'estar'.",
        target:
          "Excelente pregunta. Los sentimientos suelen ser temporales, así que usamos 'estar'.",
      },
      {
        en: "Now please open your books and try the exercises on page twenty.",
        target: "Ahora, por favor, abran sus libros e intenten los ejercicios de la página veinte.",
      },
    ],
  },

  // B1 — French — university office hours
  {
    id: "seed-fr-edu-office-hours",
    title: "Université : Heures de Permanence",
    subtitle: "University · student visiting professor's office hours in French",
    language: "French",
    targetLabel: "Français",
    flag: "🇫🇷",
    section: "culture",
    available: true,
    level: "B1",
    sentences: [
      {
        en: "Hello professor, do you have a moment to talk?",
        target: "Bonjour madame, avez-vous un moment pour discuter ?",
      },
      {
        en: "Of course, please come in and sit down.",
        target: "Bien sûr, entrez et asseyez-vous, s'il vous plaît.",
      },
      {
        en: "I am having difficulty with the last essay topic.",
        target: "J'ai des difficultés avec le sujet de la dernière dissertation.",
      },
      {
        en: "Can you tell me what part is unclear?",
        target: "Pouvez-vous me dire quelle partie n'est pas claire ?",
      },
      {
        en: "I do not understand what 'critical analysis' means in this context.",
        target: "Je ne comprends pas ce que 'analyse critique' signifie dans ce contexte.",
      },
      {
        en: "It means you must evaluate the arguments, not just summarize them.",
        target: "Cela veut dire que vous devez évaluer les arguments, pas seulement les résumer.",
      },
      {
        en: "Should I give my own opinion in the essay?",
        target: "Dois-je donner mon propre avis dans la dissertation ?",
      },
      {
        en: "Yes, but you must support your opinion with evidence from the texts.",
        target: "Oui, mais vous devez appuyer votre opinion avec des preuves tirées des textes.",
      },
      { en: "When is the deadline exactly?", target: "Quand est la date limite exactement ?" },
      {
        en: "Friday at midnight. Send me a draft if you want feedback before then.",
        target:
          "Vendredi à minuit. Envoyez-moi un brouillon si vous voulez des commentaires avant.",
      },
    ],
  },

  // B2 — German — upset hotel guest
  {
    id: "seed-de-hotel-complaint",
    title: "Hotel: Beschwerde eines Gastes",
    subtitle: "Hotel · handling a guest complaint about the room in German",
    language: "German",
    targetLabel: "Deutsch",
    flag: "🇩🇪",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "Good evening, I am very disappointed with the room you gave us.",
        target: "Guten Abend, ich bin sehr enttäuscht über das Zimmer, das Sie uns gegeben haben.",
      },
      {
        en: "I am so sorry to hear that. Could you tell me exactly what the problem is?",
        target:
          "Es tut mir sehr leid, das zu hören. Könnten Sie mir genau sagen, was das Problem ist?",
      },
      {
        en: "The air conditioning does not work and there is noise from the street all night.",
        target:
          "Die Klimaanlage funktioniert nicht, und es ist die ganze Nacht Lärm von der Straße zu hören.",
      },
      {
        en: "I completely understand your frustration — that is not the experience we want for our guests.",
        target:
          "Ich verstehe Ihren Ärger vollkommen — das ist nicht die Erfahrung, die wir unseren Gästen bieten möchten.",
      },
      {
        en: "We booked this hotel because the website promised a quiet, comfortable stay.",
        target:
          "Wir haben dieses Hotel gebucht, weil die Website einen ruhigen und komfortablen Aufenthalt versprochen hat.",
      },
      {
        en: "Let me see what other rooms are available right now and I will move you immediately.",
        target:
          "Lassen Sie mich nachsehen, welche anderen Zimmer gerade verfügbar sind, und ich verlege Sie sofort.",
      },
      {
        en: "I would also like to offer you a complimentary breakfast and a discount on your stay.",
        target:
          "Ich möchte Ihnen außerdem ein kostenloses Frühstück und einen Rabatt auf Ihren Aufenthalt anbieten.",
      },
      {
        en: "We have a quieter suite available on the top floor that I think you will prefer.",
        target:
          "Wir haben eine ruhigere Suite im obersten Stockwerk frei, die Ihnen meiner Meinung nach besser gefallen wird.",
      },
      {
        en: "Thank you — that would be much better. We appreciate you taking this seriously.",
        target: "Danke — das wäre viel besser. Wir schätzen es, dass Sie das ernst nehmen.",
      },
      {
        en: "Again, I sincerely apologize. Please let me know if there is anything else I can do.",
        target:
          "Nochmals, ich entschuldige mich aufrichtig. Bitte sagen Sie mir Bescheid, falls ich noch etwas tun kann.",
      },
    ],
  },

  // B2 — Italian — parent-teacher meeting
  {
    id: "seed-it-edu-parent-teacher",
    title: "Scuola: Colloquio Genitori-Insegnanti",
    subtitle: "K–12 Classroom · parent-teacher conference about a student's progress in Italian",
    language: "Italian",
    targetLabel: "Italiano",
    flag: "🇮🇹",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "Thank you for coming in today. I wanted to talk about Giulia's progress this term.",
        target:
          "Grazie per essere venuti oggi. Volevo parlare dei progressi di Giulia in questo trimestre.",
      },
      {
        en: "We are happy to be here. How is she doing in class?",
        target: "Siamo contenti di essere qui. Come sta andando in classe?",
      },
      {
        en: "Academically she is doing very well, especially in mathematics and science.",
        target:
          "Dal punto di vista accademico sta andando molto bene, soprattutto in matematica e scienze.",
      },
      {
        en: "However, I have noticed she is quite shy and rarely participates in discussions.",
        target:
          "Tuttavia, ho notato che è piuttosto timida e raramente partecipa alle discussioni.",
      },
      {
        en: "We have noticed the same thing at home — she is afraid of saying the wrong answer.",
        target:
          "Abbiamo notato la stessa cosa anche a casa — ha paura di dare la risposta sbagliata.",
      },
      {
        en: "I would like to suggest a few small group activities to help build her confidence.",
        target:
          "Vorrei proporre alcune attività in piccoli gruppi per aiutarla a costruire la sua fiducia.",
      },
      {
        en: "That sounds like a good idea. Is there anything we can do at home to support her?",
        target: "Mi sembra una buona idea. C'è qualcosa che possiamo fare a casa per sostenerla?",
      },
      {
        en: "Encourage her to share her opinions during dinner and praise her effort, not just the result.",
        target:
          "Incoraggiatela a condividere le sue opinioni durante la cena e lodate il suo impegno, non solo il risultato.",
      },
      {
        en: "We will start doing that. Should we schedule another meeting later in the year?",
        target: "Inizieremo a farlo. Dovremmo fissare un altro incontro più avanti nell'anno?",
      },
      {
        en: "Yes, let us meet again in three months to see how she is progressing.",
        target: "Sì, rivediamoci tra tre mesi per vedere come sta progredendo.",
      },
    ],
  },

  // Korean — café barista taking an order (A2)
  {
    id: "seed-ko-service-cafe-order",
    title: "Café: Taking a Customer's Order",
    subtitle: "Friendly barista interaction in a Korean café",
    language: "Korean",
    targetLabel: "한국어",
    flag: "🇰🇷",
    section: "culture",
    available: true,
    level: "A2",
    sentences: [
      { en: "Welcome! What can I get for you today?", target: "어서 오세요! 오늘 뭐 드릴까요?" },
      {
        en: "I would like one iced Americano and one hot latte, please.",
        target: "아이스 아메리카노 한 잔하고 따뜻한 라떼 한 잔 주세요.",
      },
      {
        en: "Would you like the Americano as a regular or a large size?",
        target: "아메리카노는 보통 사이즈로 드릴까요, 큰 사이즈로 드릴까요?",
      },
      {
        en: "Large, please. And can I have less ice in it?",
        target: "큰 사이즈로요. 그리고 얼음은 좀 적게 넣어 주세요.",
      },
      {
        en: "Sure. For the latte, would you like regular milk or oat milk?",
        target: "네, 알겠습니다. 라떼는 일반 우유로 드릴까요, 귀리 우유로 드릴까요?",
      },
      {
        en: "Oat milk, please. Is there an extra charge for that?",
        target: "귀리 우유로 부탁드려요. 추가 요금이 있나요?",
      },
      {
        en: "Yes, it is five hundred won extra. The total is eleven thousand won.",
        target: "네, 오백 원 추가됩니다. 총 만 천 원입니다.",
      },
      {
        en: "Will you have it here or to take away?",
        target: "매장에서 드시고 가실 건가요, 포장이세요?",
      },
      {
        en: "To take away, please. Can I get a carrier?",
        target: "포장해 주세요. 캐리어 하나 받을 수 있을까요?",
      },
      {
        en: "Of course. Your drinks will be ready in about three minutes.",
        target: "물론이죠. 음료는 삼 분쯤 후에 준비됩니다.",
      },
    ],
  },

  // Korean — university office hours conversation (B2)
  {
    id: "seed-ko-edu-office-hours",
    title: "University Office Hours: Thesis Topic",
    subtitle: "Graduate student meeting with a Korean professor",
    language: "Korean",
    targetLabel: "한국어",
    flag: "🇰🇷",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "Professor, thank you for taking the time to meet with me during your office hours.",
        target: "교수님, 면담 시간에 시간을 내 주셔서 감사합니다.",
      },
      {
        en: "Of course. I read the proposal you sent last week — please tell me what your central question is.",
        target:
          "별말씀을요. 지난주에 보내 주신 연구 제안서를 읽어 봤습니다. 중심 연구 질문이 무엇인지 말씀해 보세요.",
      },
      {
        en: "I would like to investigate how social media use is influencing the political participation of Korean college students.",
        target:
          "한국 대학생들의 정치 참여에 소셜 미디어 사용이 어떻게 영향을 미치는지 연구하고 싶습니다.",
      },
      {
        en: "It is a worthwhile topic, but the scope is still too broad for a master's thesis.",
        target: "가치 있는 주제이지만, 석사 논문으로는 아직 범위가 너무 넓습니다.",
      },
      {
        en: "I suggest you narrow it down to a specific platform and a specific kind of political behavior.",
        target: "특정 플랫폼과 특정 종류의 정치적 행동으로 범위를 좁혀 보시기를 권합니다.",
      },
      {
        en: "I was thinking of focusing on YouTube and on offline protest participation rather than online opinions.",
        target:
          "온라인 의견보다는 유튜브와 오프라인 시위 참여에 초점을 맞추려고 생각하고 있었습니다.",
      },
      {
        en: "That is a much more manageable design, and there is enough existing literature to build on.",
        target: "그게 훨씬 다루기 쉬운 설계이고, 토대로 삼을 만한 선행 연구도 충분합니다.",
      },
      {
        en: "For your methodology, will you use a survey, in-depth interviews, or both?",
        target: "연구 방법으로는 설문 조사, 심층 인터뷰, 아니면 둘 다 사용하실 건가요?",
      },
      {
        en: "I plan to use a survey of about three hundred students and follow-up interviews with twelve of them.",
        target:
          "약 삼백 명의 학생을 대상으로 설문 조사를 하고 그중 열두 명과 후속 인터뷰를 진행할 계획입니다.",
      },
      {
        en: "Good. Submit a revised proposal in two weeks, and we will meet again to refine the interview guide.",
        target:
          "좋습니다. 이 주 안에 수정된 제안서를 제출해 주시면, 다시 만나서 인터뷰 가이드를 다듬어 봅시다.",
      },
    ],
  },
];
