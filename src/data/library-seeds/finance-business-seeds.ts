import type { LibrarySeed } from "./_types";

export const FINANCE_BUSINESS_SEEDS: LibrarySeed[] = [
  // Spanish — A2 — Opening a bank account
  {
    id: "seed-es-finance-bank-account",
    title: "Bank: Opening a Checking Account",
    subtitle: "First visit to a Spanish-speaking bank branch",
    language: "Spanish",
    targetLabel: "Español",
    flag: "🇲🇽",
    section: "culture",
    available: true,
    level: "A2",
    sentences: [
      {
        en: "Good morning, I would like to open a checking account.",
        target: "Buenos días, me gustaría abrir una cuenta corriente.",
      },
      {
        en: "Of course. Do you have your ID and proof of address with you?",
        target: "Por supuesto. ¿Trae su identificación y un comprobante de domicilio?",
      },
      {
        en: "Yes, here is my passport and a utility bill.",
        target: "Sí, aquí tiene mi pasaporte y un recibo de servicios.",
      },
      {
        en: "Are you going to use the account for salary or only for personal use?",
        target: "¿Va a usar la cuenta para nómina o solo para uso personal?",
      },
      {
        en: "It is for personal use, but I would also like a debit card.",
        target: "Es para uso personal, pero también quisiera una tarjeta de débito.",
      },
      {
        en: "There is no monthly fee if you keep a minimum balance of one thousand pesos.",
        target: "No hay comisión mensual si mantiene un saldo mínimo de mil pesos.",
      },
      {
        en: "Please sign here and choose a four-digit PIN for your card.",
        target: "Firme aquí, por favor, y elija un PIN de cuatro dígitos para su tarjeta.",
      },
      {
        en: "Your card will arrive at your address in five business days.",
        target: "Su tarjeta llegará a su domicilio en cinco días hábiles.",
      },
      {
        en: "You can use the mobile app from today using this temporary code.",
        target: "Puede usar la aplicación móvil desde hoy con este código temporal.",
      },
      {
        en: "Thank you very much. Have a nice day!",
        target: "Muchas gracias. ¡Que tenga un buen día!",
      },
    ],
  },

  // Spanish — B1 — Salary negotiation
  {
    id: "seed-es-finance-salary-negotiation",
    title: "Salary Negotiation: Mid-Career Offer",
    subtitle: "Candidate negotiates a job offer in Spanish",
    language: "Spanish",
    targetLabel: "Español",
    flag: "🇲🇽",
    section: "culture",
    available: true,
    level: "B1",
    sentences: [
      {
        en: "Thank you very much for the offer. I am very interested in the role.",
        target: "Muchas gracias por la oferta. Me interesa mucho el puesto.",
      },
      {
        en: "Before accepting, I would like to talk about the salary.",
        target: "Antes de aceptar, me gustaría hablar del salario.",
      },
      {
        en: "The proposal is below the average for similar positions in the market.",
        target: "La propuesta está por debajo del promedio para puestos similares en el mercado.",
      },
      {
        en: "Based on my eight years of experience, I expected a number closer to ninety thousand annually.",
        target:
          "Con base en mis ocho años de experiencia, esperaba una cifra más cercana a los noventa mil anuales.",
      },
      {
        en: "I understand that the budget can be a limitation. Are there any benefits we can review?",
        target:
          "Entiendo que el presupuesto puede ser una limitación. ¿Hay algún beneficio que podamos revisar?",
      },
      {
        en: "I would also be open to discussing remote work or additional vacation days.",
        target:
          "También estaría abierto a hablar sobre trabajo remoto o días adicionales de vacaciones.",
      },
      {
        en: "We can offer you eighty-five thousand and a guaranteed bonus the first year.",
        target: "Podemos ofrecerle ochenta y cinco mil y un bono garantizado el primer año.",
      },
      {
        en: "We can also include three additional days of vacation.",
        target: "También podemos incluir tres días adicionales de vacaciones.",
      },
      {
        en: "That sounds good to me. Can you send me the new offer in writing?",
        target: "Eso me parece bien. ¿Me puede enviar la nueva oferta por escrito?",
      },
      {
        en: "Of course, you will receive it by email this afternoon.",
        target: "Por supuesto, la recibirá por correo electrónico esta tarde.",
      },
    ],
  },

  // Spanish — B2 — Tax filing help
  {
    id: "seed-es-finance-tax-filing",
    title: "Tax Advisor: Annual Tax Declaration",
    subtitle: "Self-employed taxpayer meeting an accountant in Spanish",
    language: "Spanish",
    targetLabel: "Español",
    flag: "🇲🇽",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "Good morning, I have been working as a freelancer for the first time and I need help with my tax return.",
        target:
          "Buenos días, este año he trabajado como autónoma por primera vez y necesito ayuda con mi declaración.",
      },
      {
        en: "Of course. To start, do you have all your invoices issued and your deductible expenses organized?",
        target:
          "Por supuesto. Para empezar, ¿tiene todas sus facturas emitidas y sus gastos deducibles organizados?",
      },
      {
        en: "I have everything in a spreadsheet, but I am not sure which expenses I can actually deduct.",
        target:
          "Tengo todo en una hoja de cálculo, pero no estoy segura de qué gastos puedo deducir realmente.",
      },
      {
        en: "In general, you can deduct equipment, professional software, and a portion of your office utilities.",
        target:
          "En general, puede deducir equipo, software profesional y una parte de los servicios de su oficina.",
      },
      {
        en: "I see that you also paid quarterly installments — that significantly reduces what you owe in the end.",
        target:
          "Veo que también pagó cuotas trimestrales — eso reduce significativamente lo que debe al final.",
      },
      {
        en: "Be careful, because some clients withheld income tax and others did not, and that affects the final calculation.",
        target:
          "Tenga cuidado, porque algunos clientes le retuvieron el ISR y otros no, y eso afecta el cálculo final.",
      },
      {
        en: "If you contributed to a private pension plan, we can also include that to lower the taxable base.",
        target:
          "Si aportó a un plan privado de pensiones, también podemos incluirlo para disminuir la base imponible.",
      },
      {
        en: "Based on what I see, you should receive a small refund instead of paying anything additional.",
        target:
          "Por lo que veo, debería recibir una pequeña devolución en lugar de pagar algo adicional.",
      },
      {
        en: "I will prepare the draft this week and we will review it together before submitting it to the tax authority.",
        target:
          "Prepararé el borrador esta semana y lo revisaremos juntos antes de presentarlo ante la autoridad fiscal.",
      },
    ],
  },

  // French — B2 — Mortgage application
  {
    id: "seed-fr-finance-mortgage",
    title: "Mortgage Application: First-Time Buyer",
    subtitle: "Couple meeting a French bank advisor about a home loan",
    language: "French",
    targetLabel: "Français",
    flag: "🇫🇷",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "Hello, we are here to discuss a mortgage to finance our first home.",
        target:
          "Bonjour, nous venons discuter d'un prêt immobilier pour financer notre première maison.",
      },
      {
        en: "Welcome. Can you tell me the price of the property and the amount of your contribution?",
        target: "Bienvenue. Pouvez-vous me dire le prix du bien et le montant de votre apport ?",
      },
      {
        en: "The price is three hundred and fifty thousand euros, and we have seventy thousand of personal contribution.",
        target:
          "Le prix est de trois cent cinquante mille euros, et nous disposons de soixante-dix mille d'apport personnel.",
      },
      {
        en: "Very good, that represents twenty percent, which is a solid file from our point of view.",
        target:
          "Très bien, cela représente vingt pour cent, ce qui constitue un dossier solide de notre point de vue.",
      },
      {
        en: "What are your combined net incomes per month, and do you have any current loans?",
        target: "Quels sont vos revenus nets cumulés par mois, et avez-vous des crédits en cours ?",
      },
      {
        en: "Together we earn five thousand five hundred euros net, and we have only one car loan ending next year.",
        target:
          "Ensemble nous gagnons cinq mille cinq cents euros nets, et nous n'avons qu'un crédit auto qui se termine l'année prochaine.",
      },
      {
        en: "We can offer you a fixed rate of three point seven percent over twenty-five years.",
        target:
          "Nous pouvons vous proposer un taux fixe de trois virgule sept pour cent sur vingt-cinq ans.",
      },
      {
        en: "The monthly payment, including borrower insurance, would be around fourteen hundred euros.",
        target:
          "La mensualité, assurance emprunteur comprise, serait d'environ mille quatre cents euros.",
      },
      {
        en: "I will need three years of tax notices, your last three pay slips, and the preliminary sales agreement.",
        target:
          "Il me faudra trois ans d'avis d'imposition, vos trois derniers bulletins de salaire et le compromis de vente.",
      },
      {
        en: "Once the file is complete, we typically obtain an answer in principle within two to three weeks.",
        target:
          "Une fois le dossier complet, nous obtenons généralement une réponse de principe sous deux à trois semaines.",
      },
    ],
  },

  // French — A2 — ATM problem
  {
    id: "seed-fr-finance-atm",
    title: "Bank Branch: ATM Problem",
    subtitle: "Customer reports a card issue in French",
    language: "French",
    targetLabel: "Français",
    flag: "🇫🇷",
    section: "culture",
    available: true,
    level: "A2",
    sentences: [
      {
        en: "Hello, the cash machine kept my card.",
        target: "Bonjour, le distributeur a gardé ma carte.",
      },
      {
        en: "I am sorry. When did this happen?",
        target: "Je suis désolée. Quand est-ce que cela s'est passé ?",
      },
      {
        en: "About ten minutes ago, in front of the bank.",
        target: "Il y a environ dix minutes, devant la banque.",
      },
      {
        en: "Can you give me your account number, please?",
        target: "Pouvez-vous me donner votre numéro de compte, s'il vous plaît ?",
      },
      {
        en: "Yes, here is my identification too.",
        target: "Oui, voici aussi ma pièce d'identité.",
      },
      {
        en: "I am going to block your card right now for security reasons.",
        target: "Je vais bloquer votre carte tout de suite par sécurité.",
      },
      {
        en: "You will receive a new card by mail in about a week.",
        target: "Vous recevrez une nouvelle carte par courrier dans environ une semaine.",
      },
      {
        en: "In the meantime, you can withdraw cash here at the counter.",
        target: "En attendant, vous pouvez retirer de l'argent ici au guichet.",
      },
    ],
  },

  // German — C1 — Quarterly business review
  {
    id: "seed-de-finance-qbr",
    title: "QBR: Quarterly Business Review",
    subtitle: "Senior leadership review of quarterly results in German",
    language: "German",
    targetLabel: "Deutsch",
    flag: "🇩🇪",
    section: "culture",
    available: true,
    level: "C1",
    sentences: [
      {
        en: "I would like to begin today's quarterly review with the deviations from our annual plan in the regional segments.",
        target:
          "Ich möchte die heutige Quartalsrückschau mit den Abweichungen vom Jahresplan in den regionalen Segmenten beginnen.",
      },
      {
        en: "Total turnover came in at four hundred and twelve million euros, which represents a year-over-year growth of seven point two percent.",
        target:
          "Der Gesamtumsatz beläuft sich auf vierhundertzwölf Millionen Euro, was einem Wachstum von sieben Komma zwei Prozent gegenüber dem Vorjahr entspricht.",
      },
      {
        en: "However, the operating margin shrank by one hundred and forty basis points, mainly due to higher logistics and energy costs.",
        target:
          "Die operative Marge ist allerdings um hundertvierzig Basispunkte geschrumpft, hauptsächlich wegen gestiegener Logistik- und Energiekosten.",
      },
      {
        en: "In the DACH region, we exceeded the budget by three percent, while the southern European region remained six percent below plan.",
        target:
          "Im DACH-Raum haben wir das Budget um drei Prozent übertroffen, während die südeuropäische Region sechs Prozent unter Plan blieb.",
      },
      {
        en: "The principal cause of underperformance is the delayed launch of the new product platform, which was originally planned for May.",
        target:
          "Die hauptsächliche Ursache der Unterperformance ist die verzögerte Markteinführung der neuen Produktplattform, die ursprünglich für Mai vorgesehen war.",
      },
      {
        en: "For the upcoming quarter we are forecasting a recovery, provided that the supply chain stabilizes as expected.",
        target:
          "Für das kommende Quartal prognostizieren wir eine Erholung, sofern sich die Lieferkette wie erwartet stabilisiert.",
      },
      {
        en: "Working capital deteriorated noticeably because of customer payment delays in the manufacturing segment.",
        target:
          "Das Working Capital hat sich aufgrund verzögerter Kundenzahlungen im Industriegeschäft spürbar verschlechtert.",
      },
      {
        en: "We are therefore considering tightening collection terms and adjusting our discount policy starting in the third quarter.",
        target:
          "Wir prüfen daher, ab dem dritten Quartal die Inkassobedingungen zu verschärfen und unsere Skontopolitik anzupassen.",
      },
      {
        en: "Finally, I would like to point out that, despite the headwinds, our cash position remains robust at one hundred and ninety million euros.",
        target:
          "Abschließend möchte ich darauf hinweisen, dass unsere Cash-Position trotz des Gegenwinds robust bei hundertneunzig Millionen Euro liegt.",
      },
    ],
  },

  // German — B1 — Discussing a household budget
  {
    id: "seed-de-finance-household-budget",
    title: "Household Budget: Couple's Monthly Review",
    subtitle: "Couple sitting down to review their finances in German",
    language: "German",
    targetLabel: "Deutsch",
    flag: "🇩🇪",
    section: "culture",
    available: true,
    level: "B1",
    sentences: [
      {
        en: "Let's go through the budget for last month before we plan the holiday.",
        target: "Lass uns das Budget vom letzten Monat durchgehen, bevor wir den Urlaub planen.",
      },
      {
        en: "Together we earned three thousand eight hundred euros net.",
        target: "Zusammen haben wir dreitausendachthundert Euro netto verdient.",
      },
      {
        en: "The rent and utility bills cost us nineteen hundred euros.",
        target: "Die Miete und die Nebenkosten haben uns neunzehnhundert Euro gekostet.",
      },
      {
        en: "Groceries and household expenses came to about six hundred fifty.",
        target: "Lebensmittel und Haushaltsausgaben lagen bei etwa sechshundertfünfzig.",
      },
      {
        en: "We also spent two hundred euros more than usual on dining out.",
        target: "Wir haben außerdem zweihundert Euro mehr als sonst für Essengehen ausgegeben.",
      },
      {
        en: "We should set ourselves a clear monthly limit for restaurants.",
        target: "Wir sollten uns ein klares monatliches Limit für Restaurants setzen.",
      },
      {
        en: "If we save four hundred euros a month, we will have enough for the holiday by August.",
        target:
          "Wenn wir vierhundert Euro pro Monat sparen, haben wir bis August genug für den Urlaub.",
      },
      {
        en: "I am also going to check the electricity contract — I think we are paying too much.",
        target: "Ich werde mir auch den Stromvertrag anschauen — ich glaube, wir zahlen zu viel.",
      },
      {
        en: "Good idea. Let's talk again about it next weekend.",
        target: "Gute Idee. Lass uns nächstes Wochenende noch einmal darüber sprechen.",
      },
    ],
  },

  // Italian — B2 — Investment advice
  {
    id: "seed-it-finance-investment",
    title: "Investment Advice: Long-Term Portfolio",
    subtitle: "Financial advisor reviews a young saver's portfolio in Italian",
    language: "Italian",
    targetLabel: "Italiano",
    flag: "🇮🇹",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "Thank you for coming. Today we will review your portfolio and discuss your medium- and long-term objectives.",
        target:
          "Grazie per essere venuta. Oggi rivedremo il suo portafoglio e discuteremo dei suoi obiettivi a medio e lungo termine.",
      },
      {
        en: "From the questionnaire I gather that your risk profile is moderately aggressive, with a horizon of twenty years.",
        target:
          "Dal questionario emerge che il suo profilo di rischio è moderatamente aggressivo, con un orizzonte di vent'anni.",
      },
      {
        en: "Your current allocation is too conservative for that horizon — you have only thirty percent in equities.",
        target:
          "L'allocazione attuale è troppo prudente per quell'orizzonte — ha solo il trenta per cento in azioni.",
      },
      {
        en: "I would recommend gradually shifting toward fifty-five percent equities, well diversified geographically.",
        target:
          "Le consiglierei di spostarsi gradualmente verso il cinquantacinque per cento azionario, ben diversificato geograficamente.",
      },
      {
        en: "We can implement this with low-cost ETFs to keep management fees under control.",
        target:
          "Possiamo realizzarlo con ETF a basso costo per tenere sotto controllo le commissioni di gestione.",
      },
      {
        en: "I also suggest a small allocation of five percent to inflation-linked bonds, given the current economic context.",
        target:
          "Le suggerisco anche una piccola allocazione del cinque per cento in obbligazioni indicizzate all'inflazione, dato il contesto economico attuale.",
      },
      {
        en: "It is essential not to react emotionally to market volatility — the historical return rewards those who stay invested.",
        target:
          "È fondamentale non reagire emotivamente alla volatilità di mercato — il rendimento storico premia chi rimane investito.",
      },
      {
        en: "I propose that we meet again every six months to rebalance and review any changes in your situation.",
        target:
          "Le propongo di rivederci ogni sei mesi per ribilanciare e per valutare eventuali cambiamenti nella sua situazione.",
      },
      {
        en: "If you agree, I will send you the formal proposal by email within three working days.",
        target:
          "Se è d'accordo, le invierò la proposta formale via email entro tre giorni lavorativi.",
      },
    ],
  },

  // Italian — A2 — Asking about an invoice
  {
    id: "seed-it-finance-invoice-question",
    title: "Customer Service: Invoice Question",
    subtitle: "Customer calls to ask about a bill in Italian",
    language: "Italian",
    targetLabel: "Italiano",
    flag: "🇮🇹",
    section: "culture",
    available: true,
    level: "A2",
    sentences: [
      {
        en: "Good morning, I have a question about my latest electricity bill.",
        target: "Buongiorno, ho una domanda sulla mia ultima bolletta della luce.",
      },
      {
        en: "Of course, can you give me your customer number, please?",
        target: "Certo, mi può dare il suo codice cliente, per favore?",
      },
      {
        en: "Yes, it is the number on top of the bill.",
        target: "Sì, è il numero in alto sulla bolletta.",
      },
      { en: "Thank you. What is your question?", target: "Grazie. Qual è la sua domanda?" },
      {
        en: "The amount this month is much higher than usual.",
        target: "L'importo di questo mese è molto più alto del solito.",
      },
      {
        en: "Let me check. I see a meter reading made on the spot.",
        target: "Mi faccia controllare. Vedo una lettura del contatore fatta sul posto.",
      },
      {
        en: "The previous bills were estimated, so this month we are correcting it.",
        target: "Le bollette precedenti erano stimate, quindi questo mese stiamo correggendo.",
      },
      {
        en: "If you wish, you can pay it in three monthly installments without interest.",
        target: "Se vuole, può pagarla in tre rate mensili senza interessi.",
      },
      { en: "Yes, please. That works well for me.", target: "Sì, grazie. Mi va bene così." },
    ],
  },

  // Japanese — B2 — Annual budget meeting
  {
    id: "seed-ja-finance-budget-meeting",
    title: "Annual Budget Meeting: Department Plan",
    subtitle: "Japanese department head presents the annual budget",
    language: "Japanese",
    targetLabel: "日本語",
    flag: "🇯🇵",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "Today I would like to present our department's budget proposal for the next fiscal year.",
        target: "本日は、来年度の当部門の予算案について御説明いたします。",
      },
      {
        en: "Total expenses are projected at one hundred and twenty million yen, three percent up year over year.",
        target: "総支出は一億二千万円を見込んでおり、前年比で三パーセントの増加となっております。",
      },
      {
        en: "The largest item is personnel cost, which accounts for about sixty percent of the total budget.",
        target: "最も大きな項目は人件費で、予算全体のおよそ六十パーセントを占めております。",
      },
      {
        en: "This year, we plan to hire three new mid-career engineers in stages.",
        target: "今年度は中途採用エンジニアを三名、段階的に増員する予定です。",
      },
      {
        en: "On the system investment side, the cloud migration project absorbs approximately twenty million yen.",
        target:
          "システム投資につきましては、クラウド移行プロジェクトに約二千万円を充てております。",
      },
      {
        en: "On the other hand, we have set a target of cutting domestic travel expenses by fifteen percent.",
        target: "一方で、国内出張費は十五パーセント削減することを目標として設定しております。",
      },
      {
        en: "By utilizing online meetings, we have already cut last year's travel expenses by ten percent.",
        target: "オンライン会議の活用により、昨年度の出張費はすでに一割削減しております。",
      },
      {
        en: "I would also like to ask for one off-budget item — a special training program for younger employees.",
        target:
          "予算外で一件、若手社員向けの特別研修プログラムについても御承認をお願いしたく存じます。",
      },
      {
        en: "I would appreciate it if you could review the materials and let me know any concerns by next Friday.",
        target:
          "御不明点がございましたら、来週金曜日までに資料を御確認のうえお知らせいただけますと幸いです。",
      },
    ],
  },

  // Japanese — A2 — Sending money at the post office
  {
    id: "seed-ja-finance-postal-transfer",
    title: "Post Office: Sending Money to Family",
    subtitle: "Customer making a domestic transfer in Japan",
    language: "Japanese",
    targetLabel: "日本語",
    flag: "🇯🇵",
    section: "culture",
    available: true,
    level: "A2",
    sentences: [
      {
        en: "Excuse me, I would like to send money to my family.",
        target: "すみません、家族にお金を送りたいです。",
      },
      {
        en: "Yes, certainly. Do you have the recipient's account number?",
        target: "はい、かしこまりました。送り先の口座番号はお持ちですか?",
      },
      { en: "Yes, here it is.", target: "はい、こちらです。" },
      { en: "How much would you like to send?", target: "いくら送りますか?" },
      { en: "Fifty thousand yen, please.", target: "五万円お願いします。" },
      {
        en: "There is a transfer fee of two hundred and twenty yen.",
        target: "振り込み手数料が二百二十円かかります。",
      },
      { en: "I see. I will pay in cash.", target: "わかりました。現金で支払います。" },
      {
        en: "It will arrive in the recipient's account today.",
        target: "今日中に相手の口座に届きます。",
      },
      { en: "Thank you very much. Have a nice day.", target: "ありがとうございます。よい一日を。" },
    ],
  },

  // Portuguese — B1 — Dispute on a credit card statement
  {
    id: "seed-pt-finance-credit-dispute",
    title: "Card Dispute: Unknown Charge",
    subtitle: "Customer calls to dispute a credit card transaction in Portuguese",
    language: "Portuguese",
    targetLabel: "Português",
    flag: "🇧🇷",
    section: "culture",
    available: true,
    level: "B1",
    sentences: [
      {
        en: "Good afternoon, I am calling because I do not recognize a charge on my statement.",
        target: "Boa tarde, estou ligando porque não reconheço uma cobrança no meu extrato.",
      },
      {
        en: "Of course, can you tell me the card number and the value of the transaction?",
        target: "Claro, você pode me informar o número do cartão e o valor da transação?",
      },
      {
        en: "It is a charge of three hundred and twenty reais on the fifteenth of last month.",
        target: "É uma cobrança de trezentos e vinte reais no dia quinze do mês passado.",
      },
      {
        en: "I see the transaction. It is from a website I have never used.",
        target: "Estou vendo a transação. É de um site que eu nunca usei.",
      },
      {
        en: "Have you lent the card to anyone or used a public computer recently?",
        target: "Você emprestou o cartão para alguém ou usou um computador público recentemente?",
      },
      {
        en: "No, I always use the card only on my personal phone.",
        target: "Não, eu sempre uso o cartão só no meu celular pessoal.",
      },
      {
        en: "We will block this card right now and issue a new one for you.",
        target: "Vamos bloquear este cartão agora mesmo e emitir um novo para você.",
      },
      {
        en: "I will also open a dispute, and the amount will be temporarily refunded within seven days.",
        target:
          "Eu também vou abrir uma contestação, e o valor será estornado temporariamente em até sete dias.",
      },
      {
        en: "If you want, you can register a police report to strengthen the case.",
        target:
          "Se você quiser, pode registrar um boletim de ocorrência para reforçar a contestação.",
      },
      {
        en: "Thank you. I will follow your guidance and call back with the report number.",
        target: "Obrigado. Vou seguir a sua orientação e ligar de volta com o número do boletim.",
      },
    ],
  },

  // Portuguese — B2 — Small business owner meeting accountant
  {
    id: "seed-pt-finance-cashflow-meeting",
    title: "Small Business: Cash Flow Review",
    subtitle: "Owner of a small shop reviews cash flow with an accountant in Portuguese",
    language: "Portuguese",
    targetLabel: "Português",
    flag: "🇧🇷",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "Good morning, I would like to review the company's cash flow over the last three months.",
        target: "Bom dia, gostaria de revisar o fluxo de caixa da empresa nos últimos três meses.",
      },
      {
        en: "Of course. Looking at the numbers, gross revenue grew twelve percent compared to the same period last year.",
        target:
          "Claro. Analisando os números, a receita bruta cresceu doze por cento em comparação ao mesmo período do ano passado.",
      },
      {
        en: "Even so, the net margin shrank because supplier costs increased significantly.",
        target:
          "Mesmo assim, a margem líquida encolheu porque os custos de fornecedores aumentaram bastante.",
      },
      {
        en: "I noticed that the average customer payment term has gone from twenty-eight to forty-two days.",
        target:
          "Notei que o prazo médio de pagamento dos clientes passou de vinte e oito para quarenta e dois dias.",
      },
      {
        en: "That is exactly what is putting pressure on cash flow at the end of the month.",
        target: "É justamente isso que está pressionando o caixa no fim do mês.",
      },
      {
        en: "I recommend offering a small discount for advance payment and reviewing limits for late payers.",
        target:
          "Eu recomendo oferecer um pequeno desconto para pagamento antecipado e revisar os limites para inadimplentes.",
      },
      {
        en: "We can also negotiate better terms with the two main suppliers, since the volume has increased.",
        target:
          "Também podemos negociar prazos melhores com os dois principais fornecedores, já que o volume aumentou.",
      },
      {
        en: "On the tax side, you can join the new simplified tax regime starting next quarter.",
        target:
          "Do lado tributário, você já pode aderir ao novo regime simplificado a partir do próximo trimestre.",
      },
      {
        en: "It would represent an annual saving estimated at around eighteen thousand reais.",
        target: "Isso representaria uma economia anual estimada em cerca de dezoito mil reais.",
      },
      {
        en: "I will prepare the complete plan and we can review it next week before any decision.",
        target:
          "Eu vou preparar o plano completo e podemos revisar na próxima semana antes de qualquer decisão.",
      },
    ],
  },

  // Korean — A2 — At the bank exchanging currency
  {
    id: "seed-ko-finance-currency-exchange",
    title: "Bank: Exchanging Foreign Currency",
    subtitle: "Tourist exchanging dollars for Korean won",
    language: "Korean",
    targetLabel: "한국어",
    flag: "🇰🇷",
    section: "culture",
    available: true,
    level: "A2",
    sentences: [
      {
        en: "Hello, I would like to exchange dollars for Korean won.",
        target: "안녕하세요, 달러를 원화로 바꾸고 싶어요.",
      },
      { en: "How much would you like to exchange?", target: "얼마나 바꾸시겠어요?" },
      { en: "I have five hundred dollars.", target: "오백 달러가 있어요." },
      {
        en: "Today's rate is one dollar to one thousand three hundred eighty won.",
        target: "오늘 환율은 일 달러에 천삼백팔십 원입니다.",
      },
      { en: "Can I see your passport, please?", target: "여권 좀 보여 주시겠어요?" },
      { en: "Yes, here it is.", target: "네, 여기 있어요." },
      {
        en: "How would you like the bills, in fifty thousand or ten thousand won notes?",
        target: "지폐는 오만 원권으로 드릴까요, 만 원권으로 드릴까요?",
      },
      {
        en: "Please give me half in fifty thousand and half in ten thousand notes.",
        target: "절반은 오만 원권으로, 절반은 만 원권으로 주세요.",
      },
      { en: "Please check whether the amount is correct.", target: "금액이 맞는지 확인해 주세요." },
      {
        en: "Thank you very much. Have a nice day!",
        target: "정말 감사합니다. 좋은 하루 보내세요!",
      },
    ],
  },

  // Korean — B2 — Job interview salary discussion
  {
    id: "seed-ko-finance-interview-salary",
    title: "Job Interview: Discussing Compensation",
    subtitle: "Candidate discusses salary expectations with HR in Korean",
    language: "Korean",
    targetLabel: "한국어",
    flag: "🇰🇷",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "Today I would like to discuss your overall compensation package in a bit more detail.",
        target: "오늘은 처우와 관련된 부분을 조금 더 구체적으로 말씀드리고자 합니다.",
      },
      {
        en: "What level of annual salary do you have in mind for this position?",
        target: "이 직무에 대해 어느 정도의 연봉 수준을 생각하고 계십니까?",
      },
      {
        en: "I am currently earning sixty-five million won, and given the responsibilities of this role, I would like to receive at least seventy-five million.",
        target:
          "현재 연봉은 6,500만 원이며, 이 직무의 책임 범위를 고려하면 최소 7,500만 원 정도를 희망합니다.",
      },
      {
        en: "The figure you mentioned is somewhat above the salary band we have prepared for this position.",
        target: "말씀하신 수치는 저희가 이 포지션에 준비한 연봉 밴드 상단을 다소 상회합니다.",
      },
      {
        en: "However, given your experience and skill set, I think we can move within the upper portion of the band.",
        target:
          "다만, 경력과 보유하신 역량을 감안하면 밴드 상단 범위 안에서 조율할 수 있을 것으로 보입니다.",
      },
      {
        en: "Beyond base salary, performance-based bonuses can amount to up to fifteen percent annually.",
        target: "기본급 외에도, 성과 기반 인센티브가 연간 최대 십오 퍼센트까지 추가됩니다.",
      },
      {
        en: "Stock options are also being prepared for grant in three-year vesting form.",
        target: "스톡옵션 역시 삼 년 베스팅 조건으로 부여를 검토하고 있습니다.",
      },
      {
        en: "I will check internally one more time and provide a final offer in writing within next week.",
        target:
          "내부적으로 한 번 더 검토한 후, 다음 주 안으로 최종 오퍼를 서면으로 보내 드리겠습니다.",
      },
      {
        en: "Please feel free to ask if you have any questions about the conditions discussed today.",
        target: "오늘 말씀드린 조건과 관련하여 궁금한 점이 있으시면 언제든 편하게 말씀해 주십시오.",
      },
    ],
  },
];
