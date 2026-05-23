import type { LibrarySeed } from "./_types";

export const TECHNOLOGY_SEEDS: LibrarySeed[] = [
  // Spanish — A2 — Tech support call (basic)
  {
    id: "seed-es-tech-support-call",
    title: "Tech Support: Wi-Fi Won't Connect",
    subtitle: "First-line support agent helps a customer in Spanish",
    language: "Spanish",
    targetLabel: "Español",
    flag: "🇲🇽",
    section: "culture",
    available: true,
    level: "A2",
    sentences: [
      {
        en: "Good morning, thank you for calling tech support. How can I help you?",
        target: "Buenos días, gracias por llamar a soporte técnico. ¿En qué le puedo ayudar?",
      },
      {
        en: "Hello, my Wi-Fi is not working at home today.",
        target: "Hola, mi wifi no está funcionando en casa hoy.",
      },
      {
        en: "I am sorry to hear that. Can you tell me the model of your router?",
        target: "Lamento oír eso. ¿Me puede decir el modelo de su enrutador?",
      },
      {
        en: "It is the black box you sent me last year, but I do not see the model number.",
        target: "Es la caja negra que me enviaron el año pasado, pero no veo el número del modelo.",
      },
      {
        en: "No problem. Can you see the lights on the front of the router?",
        target: "No hay problema. ¿Puede ver las luces en la parte delantera del enrutador?",
      },
      {
        en: "Yes, the power light is green, but the internet light is red.",
        target: "Sí, la luz de encendido está verde, pero la luz de internet está roja.",
      },
      {
        en: "Please unplug the router, wait thirty seconds, and plug it back in.",
        target: "Por favor desconecte el enrutador, espere treinta segundos y vuelva a conectarlo.",
      },
      {
        en: "Okay, I am doing it now. The lights are turning on again.",
        target: "Bien, lo estoy haciendo ahora. Las luces se están encendiendo de nuevo.",
      },
      {
        en: "Now please wait two minutes and then try to connect with your phone.",
        target: "Ahora espere dos minutos y luego intente conectarse con su teléfono.",
      },
      {
        en: "It is working now! Thank you very much for your help.",
        target: "¡Ya está funcionando! Muchas gracias por su ayuda.",
      },
    ],
  },

  // Spanish — B1 — Onboarding a new engineer
  {
    id: "seed-es-tech-onboarding",
    title: "Onboarding: New Software Engineer",
    subtitle: "Tech lead welcomes a new hire on day one in Spanish",
    language: "Spanish",
    targetLabel: "Español",
    flag: "🇲🇽",
    section: "culture",
    available: true,
    level: "B1",
    sentences: [
      {
        en: "Welcome to the team! I am Marta, the tech lead of the platform group.",
        target: "¡Bienvenido al equipo! Soy Marta, la líder técnica del grupo de plataforma.",
      },
      {
        en: "Today we will set up your laptop and give you access to our main repositories.",
        target:
          "Hoy vamos a configurar tu portátil y darte acceso a nuestros repositorios principales.",
      },
      {
        en: "Please use this guide on Notion to install Docker, Node, and the database client.",
        target:
          "Por favor usa esta guía en Notion para instalar Docker, Node y el cliente de la base de datos.",
      },
      {
        en: "Our main backend is in Go, and the frontend is in React with TypeScript.",
        target: "Nuestro backend principal está en Go, y el frontend está en React con TypeScript.",
      },
      {
        en: "All deployments go through a CI/CD pipeline in GitHub Actions, never manually.",
        target:
          "Todos los despliegues pasan por una tubería de CI/CD en GitHub Actions, nunca de forma manual.",
      },
      {
        en: "For your first task, I would like you to fix a small bug labeled 'good first issue'.",
        target:
          "Para tu primera tarea, me gustaría que arreglaras un pequeño error etiquetado como 'good first issue'.",
      },
      {
        en: "We do code reviews on every pull request, and at least one approval is required.",
        target:
          "Hacemos revisión de código en cada pull request, y se requiere al menos una aprobación.",
      },
      {
        en: "We have a daily stand-up at ten in the morning over video call.",
        target: "Tenemos una reunión diaria a las diez de la mañana por videollamada.",
      },
      {
        en: "If you have any questions, do not hesitate to write me on Slack at any time.",
        target: "Si tienes alguna pregunta, no dudes en escribirme por Slack en cualquier momento.",
      },
      {
        en: "Take this first week slowly and focus on understanding how the system works.",
        target:
          "Tómate esta primera semana con calma y concéntrate en entender cómo funciona el sistema.",
      },
    ],
  },

  // Spanish — B2 — DevOps incident postmortem
  {
    id: "seed-es-tech-postmortem",
    title: "DevOps: Production Incident Postmortem",
    subtitle: "Blameless postmortem in Spanish after an outage",
    language: "Spanish",
    targetLabel: "Español",
    flag: "🇲🇽",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "Thank you all for joining this postmortem; remember that the goal is to learn, not to assign blame.",
        target:
          "Gracias a todos por asistir a este postmortem; recuerden que el objetivo es aprender, no repartir culpas.",
      },
      {
        en: "The incident began at 14:32 UTC, when the latency in the checkout service exceeded two seconds.",
        target:
          "El incidente comenzó a las 14:32 UTC, cuando la latencia en el servicio de checkout superó los dos segundos.",
      },
      {
        en: "The trigger was a database migration that locked an index in the orders table for fourteen minutes.",
        target:
          "El detonante fue una migración de base de datos que bloqueó un índice de la tabla de pedidos durante catorce minutos.",
      },
      {
        en: "Our automated alerts fired correctly, but the on-call engineer did not receive the page due to a misconfigured rotation.",
        target:
          "Nuestras alertas automatizadas se dispararon correctamente, pero el ingeniero de guardia no recibió el aviso por una rotación mal configurada.",
      },
      {
        en: "Total customer impact was twenty-eight minutes of degraded service and approximately twelve hundred failed transactions.",
        target:
          "El impacto total al cliente fue de veintiocho minutos de servicio degradado y aproximadamente mil doscientas transacciones fallidas.",
      },
      {
        en: "As immediate actions, we have already corrected the on-call rotation and added a dry-run step to migrations in staging.",
        target:
          "Como acciones inmediatas, ya hemos corregido la rotación de guardia y añadido un paso de simulacro a las migraciones en staging.",
      },
      {
        en: "In the medium term, we will implement online schema changes using a tool like gh-ost to avoid table locks.",
        target:
          "A medio plazo, implementaremos cambios de esquema en línea usando una herramienta como gh-ost para evitar bloqueos de tabla.",
      },
      {
        en: "We will also create a runbook for this type of incident and train the entire on-call team during the next sprint.",
        target:
          "También crearemos un runbook para este tipo de incidente y formaremos a todo el equipo de guardia durante el próximo sprint.",
      },
      {
        en: "Each action item has an owner and a deadline, and they will be tracked in this Jira epic.",
        target:
          "Cada elemento de acción tiene un responsable y una fecha límite, y serán seguidos en esta épica de Jira.",
      },
      {
        en: "Thank you to the response team for your professionalism — the recovery was clean and well documented.",
        target:
          "Gracias al equipo de respuesta por su profesionalismo — la recuperación fue limpia y bien documentada.",
      },
    ],
  },

  // French — B2 — Code review conversation
  {
    id: "seed-fr-tech-code-review",
    title: "Code Review: Pull Request Walkthrough",
    subtitle: "Senior engineer reviewing a PR in French",
    language: "French",
    targetLabel: "Français",
    flag: "🇫🇷",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "Overall this is a solid pull request, but I have a few comments before we can merge it.",
        target:
          "Globalement c'est une bonne pull request, mais j'ai quelques remarques avant qu'on puisse la fusionner.",
      },
      {
        en: "In the user service, you are catching a generic exception that hides any underlying error.",
        target:
          "Dans le service utilisateur, tu attrapes une exception générique qui masque toute erreur sous-jacente.",
      },
      {
        en: "I would prefer that you catch the specific exceptions and let any unexpected ones bubble up.",
        target:
          "Je préférerais que tu attrapes les exceptions spécifiques et que tu laisses remonter celles qui sont inattendues.",
      },
      {
        en: "The function 'processOrder' is becoming too long — it's well over a hundred lines.",
        target:
          "La fonction 'processOrder' devient trop longue — elle dépasse largement les cent lignes.",
      },
      {
        en: "Can you extract the validation logic into a separate function to improve readability?",
        target:
          "Peux-tu extraire la logique de validation dans une fonction séparée pour améliorer la lisibilité ?",
      },
      {
        en: "There are no unit tests for the new error handling, which is exactly the kind of code that needs them.",
        target:
          "Il n'y a pas de tests unitaires pour la nouvelle gestion d'erreurs, ce qui est exactement le genre de code qui en a besoin.",
      },
      {
        en: "I also noticed that the variable names in the loop are quite cryptic — what does 'tmp2' mean?",
        target:
          "J'ai aussi remarqué que les noms de variables dans la boucle sont assez cryptiques — qu'est-ce que 'tmp2' veut dire ?",
      },
      {
        en: "Once you address these points, push a new commit and tag me again for re-review.",
        target:
          "Une fois que tu auras traité ces points, pousse un nouveau commit et identifie-moi à nouveau pour la relecture.",
      },
      {
        en: "The architectural choice for the cache is excellent — congratulations, that part is well thought out.",
        target:
          "Le choix architectural pour le cache est excellent — bravo, cette partie est bien pensée.",
      },
    ],
  },

  // French — A2 — Resetting a password
  {
    id: "seed-fr-tech-password-reset",
    title: "Help Desk: Resetting a Password",
    subtitle: "Quick assistance call in French",
    language: "French",
    targetLabel: "Français",
    flag: "🇫🇷",
    section: "culture",
    available: true,
    level: "A2",
    sentences: [
      {
        en: "Hello, I cannot log in to my work email anymore.",
        target: "Bonjour, je n'arrive plus à me connecter à ma messagerie professionnelle.",
      },
      {
        en: "Hello, can you tell me the error message you see on screen?",
        target: "Bonjour, pouvez-vous me dire le message d'erreur que vous voyez à l'écran ?",
      },
      {
        en: "It says 'incorrect password' every time, even with the right password.",
        target: "Il dit « mot de passe incorrect » à chaque fois, même avec le bon mot de passe.",
      },
      {
        en: "Your account is probably locked. I am going to reset your password.",
        target:
          "Votre compte est probablement verrouillé. Je vais réinitialiser votre mot de passe.",
      },
      {
        en: "Could you give me your full name and your employee number?",
        target: "Pourriez-vous me donner votre nom complet et votre numéro d'employé ?",
      },
      {
        en: "I have just sent a reset link to your personal email address.",
        target:
          "Je viens d'envoyer un lien de réinitialisation à votre adresse e-mail personnelle.",
      },
      {
        en: "Click the link and choose a new password of at least twelve characters.",
        target:
          "Cliquez sur le lien et choisissez un nouveau mot de passe d'au moins douze caractères.",
      },
      {
        en: "Please do not use the same password as before.",
        target: "S'il vous plaît, n'utilisez pas le même mot de passe qu'avant.",
      },
      {
        en: "It is working now. Thank you very much for your help.",
        target: "Ça marche maintenant. Merci beaucoup pour votre aide.",
      },
    ],
  },

  // German — C1 — Software architecture meeting
  {
    id: "seed-de-tech-architecture-meeting",
    title: "Architecture Meeting: Microservices vs. Monolith",
    subtitle: "Technical leadership discussion in German",
    language: "German",
    targetLabel: "Deutsch",
    flag: "🇩🇪",
    section: "culture",
    available: true,
    level: "C1",
    sentences: [
      {
        en: "Before we make a final decision, we should explicitly weigh the operational costs of a microservice architecture against the alleged scalability advantages.",
        target:
          "Bevor wir eine endgültige Entscheidung treffen, sollten wir die betrieblichen Kosten einer Microservice-Architektur explizit gegen die behaupteten Skalierbarkeitsvorteile abwägen.",
      },
      {
        en: "The current monolith handles its load without significant problems, and our deployment pipeline is mature and well tested.",
        target:
          "Der aktuelle Monolith bewältigt seine Last ohne nennenswerte Probleme, und unsere Deployment-Pipeline ist ausgereift und gut erprobt.",
      },
      {
        en: "If we move toward microservices prematurely, we will have to invest considerably in service discovery, distributed tracing, and central authentication.",
        target:
          "Wenn wir uns voreilig in Richtung Microservices bewegen, müssen wir erheblich in Service-Discovery, verteiltes Tracing und zentrale Authentifizierung investieren.",
      },
      {
        en: "On the other hand, the planned international expansion will lead to clearly demarcated bounded contexts, which suit a service-oriented architecture much better.",
        target:
          "Andererseits wird die geplante internationale Expansion zu klar abgegrenzten Bounded Contexts führen, die einer serviceorientierten Architektur deutlich besser entsprechen.",
      },
      {
        en: "I propose a pragmatic interim solution — we extract two or three high-load domains as services and leave the rest in the monolith.",
        target:
          "Ich schlage eine pragmatische Zwischenlösung vor — wir extrahieren zwei bis drei hochbelastete Domänen als Services und belassen den Rest im Monolithen.",
      },
      {
        en: "This pattern is often called the strangler fig and minimizes risk during the migration.",
        target:
          "Dieses Muster wird oft als Strangler-Fig bezeichnet und minimiert das Risiko während der Migration.",
      },
      {
        en: "Critically, however, we need a clear contract definition between the services, ideally based on a versioned schema such as Protobuf or Avro.",
        target:
          "Entscheidend ist allerdings eine klare Vertragsdefinition zwischen den Diensten, idealerweise auf Basis eines versionierten Schemas wie Protobuf oder Avro.",
      },
      {
        en: "We should also acknowledge upfront that distributed transactions are barely manageable, and design our domains so that strict consistency is not required.",
        target:
          "Wir sollten auch von Anfang an akzeptieren, dass verteilte Transaktionen kaum beherrschbar sind, und unsere Domänen so schneiden, dass strenge Konsistenz nicht erforderlich ist.",
      },
      {
        en: "The platform team will write a detailed proposal in the next two weeks and present it as an architecture decision record.",
        target:
          "Das Plattformteam wird in den nächsten zwei Wochen einen detaillierten Vorschlag verfassen und ihn als Architecture Decision Record präsentieren.",
      },
    ],
  },

  // German — B1 — Sprint planning
  {
    id: "seed-de-tech-sprint-planning",
    title: "Sprint Planning: Two-Week Iteration",
    subtitle: "Scrum team planning meeting in German",
    language: "German",
    targetLabel: "Deutsch",
    flag: "🇩🇪",
    section: "culture",
    available: true,
    level: "B1",
    sentences: [
      {
        en: "Good morning everyone, let's begin the planning for sprint twenty-three.",
        target:
          "Guten Morgen zusammen, lasst uns mit der Planung für Sprint dreiundzwanzig beginnen.",
      },
      {
        en: "Our team capacity for these two weeks is forty story points.",
        target: "Unsere Teamkapazität für diese zwei Wochen beträgt vierzig Story Points.",
      },
      {
        en: "The product manager has prioritized the export feature and the speed improvements.",
        target:
          "Der Produktmanager hat das Export-Feature und die Geschwindigkeitsverbesserungen priorisiert.",
      },
      {
        en: "The first ticket is the CSV export — we estimated five points last week.",
        target:
          "Das erste Ticket ist der CSV-Export — wir haben letzte Woche fünf Punkte geschätzt.",
      },
      {
        en: "I think we should split that into two tickets — one for the backend and one for the user interface.",
        target:
          "Ich denke, wir sollten das in zwei Tickets aufteilen — eines für das Backend und eines für die Benutzeroberfläche.",
      },
      {
        en: "Good idea. Then the backend would be three points and the frontend two points.",
        target: "Gute Idee. Dann wäre das Backend drei Punkte und das Frontend zwei Punkte.",
      },
      {
        en: "Who would like to take the speed ticket? It needs experience with our caching layer.",
        target:
          "Wer möchte das Performance-Ticket übernehmen? Es braucht Erfahrung mit unserem Caching-Layer.",
      },
      {
        en: "I will take it together with Anna so we can do pair programming.",
        target: "Ich nehme es zusammen mit Anna, damit wir Pair Programming machen können.",
      },
      {
        en: "Let's also reserve four points for unforeseen bugs and support requests.",
        target: "Reservieren wir auch vier Punkte für unvorhergesehene Bugs und Support-Anfragen.",
      },
      {
        en: "Perfect — does anyone have any concerns before we close out the planning?",
        target: "Perfekt — hat noch jemand Bedenken, bevor wir die Planung abschließen?",
      },
    ],
  },

  // Italian — B2 — AI ethics discussion
  {
    id: "seed-it-tech-ai-ethics",
    title: "Panel: AI Ethics in the Workplace",
    subtitle: "Roundtable discussion in Italian about responsible AI",
    language: "Italian",
    targetLabel: "Italiano",
    flag: "🇮🇹",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "The fundamental question is not whether artificial intelligence will transform our work, but how we want to govern that transformation.",
        target:
          "La domanda fondamentale non è se l'intelligenza artificiale trasformerà il nostro lavoro, ma come vogliamo governare quella trasformazione.",
      },
      {
        en: "Many companies are deploying generative models without first defining clear guidelines on the use of personal data.",
        target:
          "Molte aziende stanno introducendo modelli generativi senza prima definire linee guida chiare sull'uso dei dati personali.",
      },
      {
        en: "Algorithmic bias is not a hypothetical problem — it has been documented for years in resume-screening systems.",
        target:
          "Il bias algoritmico non è un problema ipotetico — è stato documentato da anni nei sistemi di selezione dei curriculum.",
      },
      {
        en: "Transparency is essential, but it cannot be limited to a generic disclaimer at the bottom of the page.",
        target:
          "La trasparenza è essenziale, ma non può ridursi a un avviso generico in fondo alla pagina.",
      },
      {
        en: "The user must be able to understand why a decision was made and, if necessary, contest it.",
        target:
          "L'utente deve poter capire perché è stata presa una decisione e, all'occorrenza, contestarla.",
      },
      {
        en: "On the other hand, an excessively restrictive regulation risks pushing innovation toward less responsible actors.",
        target:
          "D'altra parte, una regolamentazione eccessivamente restrittiva rischia di spingere l'innovazione verso attori meno responsabili.",
      },
      {
        en: "We need to find a balance between safety, innovation and the right to information of the citizen.",
        target:
          "Dobbiamo trovare un equilibrio tra sicurezza, innovazione e diritto all'informazione del cittadino.",
      },
      {
        en: "An interesting first step would be to require independent audits for all systems used in the public sector.",
        target:
          "Un primo passo interessante sarebbe richiedere audit indipendenti per tutti i sistemi usati nel settore pubblico.",
      },
      {
        en: "Ultimately, ethical AI is not an engineering goal but a continuous social commitment.",
        target:
          "In definitiva, l'IA etica non è un obiettivo ingegneristico ma un impegno sociale continuo.",
      },
    ],
  },

  // Italian — A2 — Office app help
  {
    id: "seed-it-tech-office-help",
    title: "Office Help: Sharing a Document",
    subtitle: "Colleague helping a colleague in Italian",
    language: "Italian",
    targetLabel: "Italiano",
    flag: "🇮🇹",
    section: "culture",
    available: true,
    level: "A2",
    sentences: [
      {
        en: "Excuse me, do you have a minute? I cannot share my document.",
        target: "Scusa, hai un minuto? Non riesco a condividere il mio documento.",
      },
      {
        en: "Of course, with whom do you want to share it?",
        target: "Certo, con chi vuoi condividerlo?",
      },
      {
        en: "With Marco and Giulia, only to read it, not to change it.",
        target: "Con Marco e Giulia, solo per leggerlo, non per modificarlo.",
      },
      {
        en: "Click on the 'Share' button at the top right of the screen.",
        target: "Clicca sul pulsante 'Condividi' in alto a destra dello schermo.",
      },
      {
        en: "Now write the email addresses of your colleagues in the box.",
        target: "Adesso scrivi gli indirizzi email dei tuoi colleghi nel riquadro.",
      },
      {
        en: "On the right side, change 'Editor' to 'Reader' for both.",
        target: "Sul lato destro, cambia 'Editor' in 'Lettore' per entrambi.",
      },
      {
        en: "Now click 'Send' and they will receive an email with the link.",
        target: "Adesso clicca 'Invia' e riceveranno un'email con il link.",
      },
      {
        en: "Thanks a lot, it was much simpler than I thought.",
        target: "Grazie mille, è stato molto più semplice di quanto pensassi.",
      },
    ],
  },

  // Japanese — B2 — Bug triage meeting
  {
    id: "seed-ja-tech-bug-triage",
    title: "Bug Triage: Weekly Review",
    subtitle: "Japanese product team prioritizes incoming bugs",
    language: "Japanese",
    targetLabel: "日本語",
    flag: "🇯🇵",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "Let's begin the weekly bug triage. There are twenty-three new tickets to review today.",
        target:
          "週次バグトリアージを始めましょう。本日、確認すべき新規チケットが二十三件あります。",
      },
      {
        en: "First, the high-priority issue is the login failure occurring on certain Android devices.",
        target: "まず最優先の課題は、特定のAndroid端末で発生しているログイン失敗の不具合です。",
      },
      {
        en: "Looking at user reports, almost all the affected models are running OS version twelve or earlier.",
        target:
          "ユーザーからの報告を見ると、影響を受けている機種のほとんどがOSバージョン十二以前で動作しています。",
      },
      {
        en: "Could the QA team reproduce the issue locally and identify the root cause by tomorrow?",
        target:
          "QAチームのほうで、ローカルで再現していただき、明日までに根本原因を特定していただけますか?",
      },
      {
        en: "If reproduction is difficult, please ask sales to obtain logs from the affected customers.",
        target:
          "再現が難しい場合は、営業を通じて該当のお客様からログを取得するよう依頼してください。",
      },
      {
        en: "The next ticket is the report layout breaking when printed, but the number of affected users is low.",
        target:
          "次のチケットは、印刷時にレポートのレイアウトが崩れる件ですが、影響ユーザー数は限定的です。",
      },
      {
        en: "Given the impact, I think we should defer it to the next sprint rather than handle it this week.",
        target: "影響度を考えると、今週ではなく次のスプリントに送るのが妥当かと思います。",
      },
      {
        en: "On the other hand, we should fix the data export character-encoding bug in this sprint without fail.",
        target:
          "一方で、データエクスポートの文字化けの不具合は、今スプリント中に必ず修正すべきです。",
      },
      {
        en: "It involves not only the support burden but also the risk of damaging customer trust.",
        target: "サポート負荷だけでなく、お客様の信頼を損なうリスクにも関わってまいります。",
      },
    ],
  },

  // Japanese — A2 — Asking IT for help
  {
    id: "seed-ja-tech-it-help",
    title: "IT Helpdesk: My Computer Is Slow",
    subtitle: "Quick request to in-house IT in Japanese",
    language: "Japanese",
    targetLabel: "日本語",
    flag: "🇯🇵",
    section: "culture",
    available: true,
    level: "A2",
    sentences: [
      {
        en: "Excuse me, my computer has been very slow since this morning.",
        target: "すみません、朝からパソコンがとても遅いです。",
      },
      { en: "Did you restart it once today?", target: "今日、一度再起動しましたか?" },
      {
        en: "No, I have not restarted it for about a week.",
        target: "いいえ、一週間ぐらい再起動していません。",
      },
      {
        en: "Please save your files and restart it now.",
        target: "ファイルを保存してから、今すぐ再起動してください。",
      },
      {
        en: "Yes, I will do that. About how many minutes will it take?",
        target: "はい、そうします。どのぐらいの時間がかかりますか?",
      },
      {
        en: "About five minutes. Please call me again if it is still slow.",
        target: "五分ぐらいです。それでも遅い場合は、もう一度呼んでください。",
      },
      { en: "I understand. Thank you very much.", target: "わかりました。ありがとうございます。" },
      {
        en: "If you have time later, please update Windows as well.",
        target: "後で時間があれば、Windowsの更新もお願いします。",
      },
    ],
  },

  // Portuguese — B1 — Junior dev asking for help
  {
    id: "seed-pt-tech-junior-help",
    title: "Pair Programming: Junior Asks for Help",
    subtitle: "Junior developer in Brazil asks a senior in Portuguese",
    language: "Portuguese",
    targetLabel: "Português",
    flag: "🇧🇷",
    section: "culture",
    available: true,
    level: "B1",
    sentences: [
      {
        en: "Carlos, do you have ten minutes to look at this code with me?",
        target: "Carlos, você tem dez minutos para olhar esse código comigo?",
      },
      {
        en: "Sure, of course. What is the problem?",
        target: "Claro, com certeza. Qual é o problema?",
      },
      {
        en: "I am trying to call the users API, but the response always comes back empty.",
        target: "Estou tentando chamar a API de usuários, mas a resposta vem sempre vazia.",
      },
      {
        en: "Let me see the code. Are you sure you are using the correct base URL?",
        target: "Deixa eu ver o código. Tem certeza de que está usando a URL base correta?",
      },
      {
        en: "I think so, but it is possible that I am using the development environment.",
        target: "Acho que sim, mas é possível que eu esteja usando o ambiente de desenvolvimento.",
      },
      {
        en: "Open the browser console and check whether the request is returning a 401.",
        target: "Abre o console do navegador e vê se a requisição está retornando um 401.",
      },
      {
        en: "It really is — there is a 401 error, but the user is logged in.",
        target: "É verdade — tem um erro 401, mas o usuário está logado.",
      },
      {
        en: "The token must be expired. Try logging in again and run the test once more.",
        target:
          "O token deve estar expirado. Tenta fazer login de novo e roda o teste mais uma vez.",
      },
      {
        en: "It worked! Thanks a lot, I would never have figured it out alone.",
        target: "Funcionou! Muito obrigado, eu nunca teria descoberto sozinho.",
      },
      {
        en: "It is normal at the start. Always check the network tab first — it saves a lot of time.",
        target: "É normal no começo. Sempre olha primeiro a aba de rede — economiza muito tempo.",
      },
    ],
  },

  // Portuguese — B2 — Cybersecurity awareness training
  {
    id: "seed-pt-tech-security-training",
    title: "Security Training: Phishing Awareness",
    subtitle: "Annual cybersecurity training in Brazilian Portuguese",
    language: "Portuguese",
    targetLabel: "Português",
    flag: "🇧🇷",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "Today's training session focuses on identifying and reporting phishing attempts in your professional email.",
        target:
          "A sessão de treinamento de hoje foca em identificar e reportar tentativas de phishing no seu e-mail profissional.",
      },
      {
        en: "More than ninety percent of corporate breaches start with a single click on a malicious link.",
        target:
          "Mais de noventa por cento das violações corporativas começam com um único clique em um link malicioso.",
      },
      {
        en: "Always check the sender's address carefully — attackers often use a domain very similar to the real one.",
        target:
          "Verifique sempre o endereço do remetente com atenção — os atacantes costumam usar um domínio muito parecido com o verdadeiro.",
      },
      {
        en: "Be wary of any message that creates a sense of urgency or threatens to block your account.",
        target:
          "Desconfie de qualquer mensagem que crie um senso de urgência ou ameace bloquear a sua conta.",
      },
      {
        en: "Hover over a link before clicking to see the real URL displayed at the bottom of the screen.",
        target:
          "Passe o cursor sobre um link antes de clicar para ver a URL real exibida no canto inferior da tela.",
      },
      {
        en: "Even if a colleague sends you an unusual file, double-check via another channel before you open it.",
        target:
          "Mesmo que um colega lhe envie um arquivo incomum, confirme por outro canal antes de abri-lo.",
      },
      {
        en: "If you suspect an email is phishing, forward it to security@company.com and then delete it.",
        target:
          "Se você suspeitar que um e-mail é phishing, encaminhe-o para security@company.com e depois apague-o.",
      },
      {
        en: "Multi-factor authentication does not eliminate the risk, but it dramatically reduces the impact of a leaked password.",
        target:
          "A autenticação multifator não elimina o risco, mas reduz drasticamente o impacto de uma senha vazada.",
      },
      {
        en: "At the end of this training there is a short test, and your participation will be recorded in the HR system.",
        target:
          "No final deste treinamento há um pequeno teste, e a sua participação será registrada no sistema de RH.",
      },
    ],
  },

  // Korean — B1 — User accessibility feedback meeting
  {
    id: "seed-ko-tech-accessibility-review",
    title: "Product Review: Accessibility Feedback",
    subtitle: "Designer and engineer review accessibility issues in Korean",
    language: "Korean",
    targetLabel: "한국어",
    flag: "🇰🇷",
    section: "culture",
    available: true,
    level: "B1",
    sentences: [
      {
        en: "Thank you for joining today. Let's go through the accessibility test results from last week.",
        target: "오늘 참석해 주셔서 감사합니다. 지난주 접근성 테스트 결과를 함께 살펴보겠습니다.",
      },
      {
        en: "Overall the score went up, but there are still several issues with screen readers.",
        target: "전체 점수는 올라갔지만, 스크린 리더 관련 문제는 아직 몇 가지 남아 있습니다.",
      },
      {
        en: "On the login page, the password field does not have a proper label.",
        target: "로그인 페이지에서 비밀번호 입력란에 적절한 레이블이 없습니다.",
      },
      {
        en: "Because of that, screen readers just say 'edit text', and users get confused.",
        target:
          "그래서 스크린 리더가 단순히 '편집 텍스트'라고만 읽어 주어 사용자가 혼란스러워합니다.",
      },
      {
        en: "Also, the contrast on the gray buttons does not meet the WCAG AA standard.",
        target: "또한 회색 버튼의 명도 대비가 WCAG AA 기준을 충족하지 못하고 있습니다.",
      },
      {
        en: "I will update the design tokens this week so the contrast ratio reaches at least 4.5 to 1.",
        target:
          "이번 주에 디자인 토큰을 수정해서 명도 대비를 최소 4.5 대 1까지 맞추도록 하겠습니다.",
      },
      {
        en: "On the engineering side, we will add 'aria-label' attributes to all icon-only buttons.",
        target: "개발 쪽에서는 아이콘만 있는 모든 버튼에 'aria-label' 속성을 추가하겠습니다.",
      },
      {
        en: "Let's plan to do another test with real users next month.",
        target: "다음 달에 실제 사용자를 모시고 다시 한 번 테스트를 진행하는 것으로 계획합시다.",
      },
      {
        en: "Accessibility is not a one-time task — please consider it from the beginning of every feature.",
        target: "접근성은 일회성 작업이 아니므로, 모든 기능을 처음부터 고려해 주시기 바랍니다.",
      },
    ],
  },

  // Korean — C1 — Cloud migration strategy meeting
  {
    id: "seed-ko-tech-cloud-migration",
    title: "Cloud Migration Strategy Meeting",
    subtitle: "Korean enterprise IT leadership debates a multi-year migration plan",
    language: "Korean",
    targetLabel: "한국어",
    flag: "🇰🇷",
    section: "culture",
    available: true,
    level: "C1",
    sentences: [
      {
        en: "The plan we are considering today is a phased migration of our on-premises systems to a hybrid cloud environment over three years.",
        target:
          "오늘 검토하려는 안은 자사 온프레미스 시스템을 향후 삼 년에 걸쳐 하이브리드 클라우드 환경으로 단계적으로 이전하는 계획입니다.",
      },
      {
        en: "It is essential to first identify which workloads benefit most from the elasticity of the cloud, and which are better left in our own data center.",
        target:
          "먼저 클라우드의 탄력성으로부터 가장 큰 이점을 얻는 워크로드와 자사 데이터 센터에 남기는 편이 나은 워크로드를 식별하는 일이 필수적입니다.",
      },
      {
        en: "From a regulatory standpoint, the financial transaction system must comply with domestic data sovereignty obligations, so a public cloud is realistically difficult.",
        target:
          "규제 측면에서 금융 거래 시스템은 국내 데이터 주권 의무를 준수해야 하므로, 퍼블릭 클라우드 이전은 현실적으로 어렵습니다.",
      },
      {
        en: "On the other hand, web traffic varies dramatically by season, so introducing auto-scaling there can significantly reduce overall costs.",
        target:
          "반면 웹 트래픽은 계절에 따라 변동 폭이 매우 크므로, 그 영역에 오토 스케일링을 도입하면 전체 비용을 상당히 절감할 수 있습니다.",
      },
      {
        en: "What we should be most wary of is vendor lock-in — once you depend on a specific cloud provider's proprietary services, the cost of switching becomes extremely high.",
        target:
          "가장 경계해야 할 점은 벤더 종속성으로, 특정 클라우드 사업자의 독자적 서비스에 의존하기 시작하면 전환 비용이 매우 커집니다.",
      },
      {
        en: "We should therefore use Kubernetes-based containerization as a standard, and design with portability between providers in mind.",
        target:
          "따라서 쿠버네티스 기반 컨테이너화를 표준으로 삼고, 사업자 간 이식성을 염두에 두고 설계해야 합니다.",
      },
      {
        en: "Talent acquisition is also a major issue — without engineers experienced in cloud-native architecture, the migration cannot be completed on schedule.",
        target:
          "인재 확보 또한 큰 과제이며, 클라우드 네이티브 아키텍처 경험이 있는 엔지니어 없이는 이전을 일정대로 완료할 수 없습니다.",
      },
      {
        en: "I therefore propose that, in parallel with the migration, we plan a structured re-training program for our internal staff.",
        target:
          "따라서 이전 작업과 병행하여, 내부 인력에 대한 체계적인 재교육 프로그램을 계획할 것을 제안드립니다.",
      },
      {
        en: "If the leadership team approves this direction today, we will present a detailed cost-benefit analysis and risk assessment within two weeks.",
        target:
          "오늘 경영진께서 이 방향을 승인해 주신다면, 이 주 내로 상세한 비용 편익 분석과 리스크 평가를 제출하겠습니다.",
      },
    ],
  },
];
