import type { LibrarySeed } from "./_types";

/**
 * Korean (한국어) seeds for modules that lacked Korean coverage.
 * All passages use formal polite speech (존댓말) appropriate to professional contexts.
 */
export const KOREAN_MODULE_SEEDS: LibrarySeed[] = [
  // ── Orthopedics ─────────────────────────────────────────────────────────────
  {
    id: "seed-ko-ortho-fracture",
    title: "Orthopedics: Tibial Plateau Fracture",
    subtitle: "경골 고원 골절 설명 — 정형외과",
    language: "Korean",
    targetLabel: "한국어",
    flag: "🇰🇷",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "Good afternoon. I have reviewed your X-ray and I need to explain the results.",
        target: "안녕하세요. 엑스레이를 검토했으며 결과를 설명해 드려야 합니다.",
      },
      {
        en: "You have a fracture in the tibial plateau, which is the flat top surface of the shinbone.",
        target: "경골 고원, 즉 정강뼈 윗부분의 평평한 면에 골절이 있습니다.",
      },
      {
        en: "On your imaging I can see a compression fracture on the lateral side of the joint.",
        target: "영상에서 관절 외측에 압박 골절이 보입니다.",
      },
      {
        en: "This type of injury often results from a direct impact such as a car accident or a fall from height.",
        target:
          "이런 부상은 자동차 사고나 높은 곳에서의 낙상 같은 직접적인 충격으로 자주 발생합니다.",
      },
      {
        en: "You will need surgery to place a metal plate and screws to stabilize the bone.",
        target: "뼈를 안정시키기 위해 금속판과 나사를 삽입하는 수술이 필요합니다.",
      },
      {
        en: "After surgery, you must not bear weight on the leg for six to eight weeks.",
        target: "수술 후 6~8주 동안은 다리에 체중을 실어서는 안 됩니다.",
      },
      {
        en: "Physical therapy will begin two to three weeks after the operation to restore range of motion.",
        target: "운동 범위 회복을 위한 물리치료는 수술 2~3주 후에 시작됩니다.",
      },
      {
        en: "Full recovery typically takes four to six months depending on the severity of the fracture.",
        target: "골절의 심각도에 따라 완전한 회복은 보통 4~6개월이 걸립니다.",
      },
      {
        en: "Do you have any questions about the surgery or the recovery process?",
        target: "수술 또는 회복 과정에 대해 궁금한 점이 있으신가요?",
      },
      {
        en: "I will schedule the operation as soon as possible to prevent further damage to the joint.",
        target: "관절의 추가 손상을 방지하기 위해 가능한 한 빨리 수술 일정을 잡겠습니다.",
      },
    ],
  },

  // ── Framer ───────────────────────────────────────────────────────────────────
  {
    id: "seed-ko-framer-studs",
    title: "Framing: Material Order & Layout",
    subtitle: "골조 자재 주문 및 배치 — 목수",
    language: "Korean",
    targetLabel: "한국어",
    flag: "🇰🇷",
    section: "culture",
    available: true,
    level: "B1",
    sentences: [
      {
        en: "Good morning. We need to order framing materials for a two-story residential project.",
        target: "안녕하세요. 2층 주거용 프로젝트의 골조 자재를 주문해야 합니다.",
      },
      {
        en: "Please prepare 30 two-by-four studs, each eight feet long, for delivery by seven tomorrow.",
        target: "내일 7시까지 배달해 주실 8피트짜리 2×4 스터드 30개를 준비해 주세요.",
      },
      {
        en: "We also need 10 sheets of three-quarter-inch oriented strand board.",
        target: "3/4인치 구조용 합판(OSB) 10장도 필요합니다.",
      },
      {
        en: "The load-bearing wall must be framed before the rest of the crew arrives on site.",
        target: "나머지 작업반이 현장에 도착하기 전에 내력벽 골조 작업을 마쳐야 합니다.",
      },
      {
        en: "Make sure all studs are straight and free of large knots or warping.",
        target: "모든 스터드가 곧고 큰 옹이나 뒤틀림이 없는지 확인해 주세요.",
      },
      {
        en: "We will also need pressure-treated bottom plates for the sill line.",
        target: "토대 선에 사용할 방부 처리 밑깔도리도 필요합니다.",
      },
      {
        en: "Please check that the delivery truck can reach the site — the access road is narrow.",
        target: "배달 트럭이 현장에 접근할 수 있는지 확인해 주세요 — 진입로가 좁습니다.",
      },
      {
        en: "Once the exterior walls are plumb and braced, we will start on the roof framing.",
        target: "외벽이 수직으로 세워지고 버팀대가 설치되면 지붕 골조 작업을 시작하겠습니다.",
      },
      {
        en: "Can you give us a total cost including delivery fees and any applicable taxes?",
        target: "배달비와 해당 세금을 포함한 총 비용을 알려주시겠어요?",
      },
    ],
  },

  // ── Legal & Immigration ──────────────────────────────────────────────────────
  {
    id: "seed-ko-legal-petition",
    title: "Legal: Green Card Consultation",
    subtitle: "영주권 상담 — 이민 법률",
    language: "Korean",
    targetLabel: "한국어",
    flag: "🇰🇷",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "A green card, officially called a Permanent Resident Card, gives you the right to live and work in the US indefinitely.",
        target:
          "공식 명칭이 영주권 카드인 그린카드는 미국에서 무기한 거주하고 일할 수 있는 권리를 부여합니다.",
      },
      {
        en: "You can obtain a green card through family sponsorship, employment, or humanitarian protection.",
        target: "그린카드는 가족 후원, 취업, 또는 인도주의적 보호를 통해 취득할 수 있습니다.",
      },
      {
        en: "If a US citizen sponsors you as a spouse, the process typically takes one to two years.",
        target: "미국 시민권자가 배우자로 후원하는 경우, 절차는 보통 1~2년이 걸립니다.",
      },
      {
        en: "For employment-based green cards, the timeline depends heavily on your country of birth and the visa category.",
        target: "취업 기반 그린카드의 경우 출생국과 비자 카테고리에 따라 기간이 크게 달라집니다.",
      },
      {
        en: "You will need to file Form I-485 if you are already inside the United States and adjusting your status.",
        target: "미국 내에서 신분 조정을 하는 경우 I-485 양식을 제출해야 합니다.",
      },
      {
        en: "A biometrics appointment will be scheduled to collect your fingerprints and photograph.",
        target: "지문과 사진 수집을 위한 생체 인식 예약이 잡힐 것입니다.",
      },
      {
        en: "You may also be required to attend an in-person interview at your local USCIS field office.",
        target: "해당 지역 USCIS 현장 사무소에서 대면 인터뷰를 요구받을 수도 있습니다.",
      },
      {
        en: "Once approved, the green card is valid for ten years and must be renewed before it expires.",
        target: "승인되면 그린카드는 10년간 유효하며 만료 전에 갱신해야 합니다.",
      },
      {
        en: "After holding a green card for five years, most people become eligible to apply for US citizenship.",
        target: "그린카드를 5년간 보유한 후에는 대부분 미국 시민권을 신청할 자격이 생깁니다.",
      },
      {
        en: "Please bring all your immigration documents to your next appointment with our office.",
        target: "다음 사무소 방문 시 모든 이민 서류를 지참해 주세요.",
      },
    ],
  },

  // ── Plumber ──────────────────────────────────────────────────────────────────
  {
    id: "seed-ko-plumber-leak",
    title: "Plumbing: Low Water Pressure Diagnosis",
    subtitle: "낮은 수압 진단 — 배관",
    language: "Korean",
    targetLabel: "한국어",
    flag: "🇰🇷",
    section: "culture",
    available: true,
    level: "B1",
    sentences: [
      {
        en: "Hello, I am here to diagnose the low water pressure issue you reported.",
        target: "안녕하세요, 신고하신 낮은 수압 문제를 진단하러 왔습니다.",
      },
      {
        en: "After checking the pressure gauge at your main shutoff valve, I am reading only 28 PSI.",
        target: "주 차단 밸브에서 압력계를 확인한 결과 28 PSI밖에 나오지 않습니다.",
      },
      {
        en: "Normal household water pressure should be between 45 and 80 PSI.",
        target: "일반 가정의 수압은 45~80 PSI 사이여야 합니다.",
      },
      {
        en: "The most likely cause is a worn or clogged pressure regulator valve on the main line.",
        target: "가장 유력한 원인은 본관의 닳거나 막힌 압력 조절 밸브입니다.",
      },
      {
        en: "I also found significant mineral buildup inside your galvanized pipes, which restricts water flow.",
        target: "또한 아연 도금 배관 내부에 상당한 미네랄 침적물이 있어 수류가 제한되고 있습니다.",
      },
      {
        en: "I recommend replacing the pressure regulator and flushing the affected pipe sections today.",
        target: "오늘 압력 조절 밸브를 교체하고 문제 배관 구간을 세척하기를 권장합니다.",
      },
      {
        en: "This repair will require shutting off the main water supply for approximately one hour.",
        target: "이 수리를 위해 약 1시간 동안 주 수도를 차단해야 합니다.",
      },
      {
        en: "After the repair, pressure should be restored to a normal range of 60 to 70 PSI.",
        target: "수리 후 수압은 60~70 PSI의 정상 범위로 회복될 것입니다.",
      },
      {
        en: "I will provide a written estimate with itemized labor and parts before starting any work.",
        target: "작업 시작 전에 인건비와 부품이 항목별로 정리된 서면 견적서를 드리겠습니다.",
      },
    ],
  },

  // ── Drywall ──────────────────────────────────────────────────────────────────
  {
    id: "seed-ko-drywall-texture",
    title: "Drywall: Five Stages of Finish",
    subtitle: "석고보드 마감 5단계 — 드라이월",
    language: "Korean",
    targetLabel: "한국어",
    flag: "🇰🇷",
    section: "culture",
    available: true,
    level: "B1",
    sentences: [
      {
        en: "Let me walk you through the five stages of a professional drywall finish.",
        target: "전문 석고보드 마감의 5단계를 설명해 드리겠습니다.",
      },
      {
        en: "First, we hang the drywall sheets and fasten them to the studs with screws every 12 inches.",
        target: "먼저, 석고보드를 12인치 간격으로 나사로 스터드에 고정하여 걸어올립니다.",
      },
      {
        en: "Then we apply paper tape or mesh tape over every seam and screw dimple.",
        target: "그런 다음 모든 이음새와 나사 자국 위에 종이 테이프 또는 메쉬 테이프를 붙입니다.",
      },
      {
        en: "The first coat of joint compound buries the tape and begins to level the surface.",
        target: "첫 번째 충전재 코팅으로 테이프를 묻고 표면 평탄화를 시작합니다.",
      },
      {
        en: "After 24 hours of drying time, we sand lightly and apply a wider second coat.",
        target: "24시간 건조 후 가볍게 사포질하고 더 넓게 두 번째 코팅을 합니다.",
      },
      {
        en: "The third and final coat is feathered out to blend seamlessly into the surrounding wall.",
        target: "세 번째이자 마지막 코팅은 주변 벽과 자연스럽게 어우러지도록 넓게 펼쳐 바릅니다.",
      },
      {
        en: "Metal or plastic corner bead is installed on all outside corners to create a clean, durable edge.",
        target:
          "모든 외부 모서리에 깔끔하고 내구성 있는 엣지를 만들기 위해 금속 또는 플라스틱 코너 비드를 설치합니다.",
      },
      {
        en: "Once all coats are fully dry and sanded smooth, the surface is primed before painting.",
        target: "모든 코팅이 완전히 건조되고 매끄럽게 사포질되면, 페인트 전에 프라이머를 바릅니다.",
      },
      {
        en: "The full process from hanging to final coat typically takes four to five working days.",
        target: "설치부터 마지막 코팅까지의 전 과정은 보통 4~5 근무일이 걸립니다.",
      },
    ],
  },

  // ── Landscaper ───────────────────────────────────────────────────────────────
  {
    id: "seed-ko-landscaper-lawn",
    title: "Landscaping: Crew Briefing & Route",
    subtitle: "조경 작업반 브리핑 및 루트 — 조경",
    language: "Korean",
    targetLabel: "한국어",
    flag: "🇰🇷",
    section: "culture",
    available: true,
    level: "B1",
    sentences: [
      {
        en: "Good morning, everyone. Here is today's maintenance schedule.",
        target: "안녕하세요, 모두. 오늘 유지 관리 일정입니다.",
      },
      {
        en: "We start at the Johnson property at seven and need to finish by nine.",
        target: "존슨 부지에서 7시에 시작하여 9시까지 마쳐야 합니다.",
      },
      {
        en: "Miguel, take the riding mower and cut the front and back lawns at exactly three inches.",
        target: "미겔, 승용 잔디 깎기로 앞마당과 뒷마당을 정확히 3인치로 깎아주세요.",
      },
      {
        en: "Carlos, use the string trimmer to edge all walkways, fence lines, and landscape borders.",
        target: "카를로스, 줄 트리머로 모든 보행로, 울타리선, 조경 경계를 정리해 주세요.",
      },
      {
        en: "After mowing and edging, blow all clippings off the driveway, sidewalk, and patio.",
        target: "잔디 깎기와 엣지 작업 후 진입로, 보도, 파티오에서 모든 잔디 조각을 불어냅니다.",
      },
      {
        en: "Do not cut the grass shorter than three inches — it will burn in this heat.",
        target: "잔디를 3인치보다 짧게 깎지 마세요 — 이 더위에 타버립니다.",
      },
      {
        en: "At the Riverside office complex, we also need to trim the hedges along the main entrance.",
        target: "리버사이드 오피스 단지에서는 정문을 따라 있는 생울타리도 다듬어야 합니다.",
      },
      {
        en: "Check all irrigation heads and report any broken or misaligned ones to me immediately.",
        target: "모든 관개 헤드를 점검하고 고장나거나 비틀린 것은 즉시 저에게 보고하세요.",
      },
      {
        en: "We have six properties today, so stay on schedule — we break only after the route is done.",
        target: "오늘 6개 부지가 있으니 일정을 지키세요 — 루트를 마친 후에만 휴식합니다.",
      },
    ],
  },

  // ── Truck Driver ─────────────────────────────────────────────────────────────
  {
    id: "seed-ko-truck-border",
    title: "Trucking: Border Crossing Manifest",
    subtitle: "국경 통과 화물 목록 — 트럭 운전",
    language: "Korean",
    targetLabel: "한국어",
    flag: "🇰🇷",
    section: "culture",
    available: true,
    level: "B1",
    sentences: [
      {
        en: "Good afternoon. I have a commercial delivery crossing from the US into Canada.",
        target: "안녕하세요. 미국에서 캐나다로 넘어가는 상업 배달이 있습니다.",
      },
      {
        en: "Here is my bill of lading and the full load manifest for customs inspection.",
        target: "세관 검사를 위한 선하증권과 전체 화물 적하 목록입니다.",
      },
      {
        en: "The trailer carries 40,000 pounds of commercial auto parts bound for a warehouse in Ontario.",
        target:
          "트레일러에는 온타리오 창고로 향하는 상업용 자동차 부품 4만 파운드가 실려 있습니다.",
      },
      {
        en: "All goods are fully declared and I have the certificate of origin for each product line.",
        target: "모든 물품은 완전히 신고되었으며 각 제품 라인에 대한 원산지 증명서가 있습니다.",
      },
      {
        en: "My DOT number is on the cab door and all permits and registration are current.",
        target: "DOT 번호는 운전석 문에 있으며 모든 허가증과 등록은 유효합니다.",
      },
      {
        en: "There are no hazardous materials on this load.",
        target: "이 화물에는 위험 물질이 없습니다.",
      },
      {
        en: "My electronic hours-of-service log is current and I have not exceeded the daily driving limit.",
        target: "전자 운행 시간 기록은 최신 상태이며 일일 운전 시간 한도를 초과하지 않았습니다.",
      },
      {
        en: "The estimated delivery time at the consignee is tomorrow morning at eight o'clock.",
        target: "수하인 도착 예상 시간은 내일 아침 8시입니다.",
      },
      {
        en: "Is there anything else you need to complete the inspection and clear my truck through?",
        target: "검사를 완료하고 제 트럭을 통과시키는 데 필요한 다른 것이 있나요?",
      },
    ],
  },

  // ── Dairy Farmer ─────────────────────────────────────────────────────────────
  {
    id: "seed-ko-dairy-milking",
    title: "Dairy Farm: Mastitis Protocol Briefing",
    subtitle: "유방염 대응 프로토콜 — 낙농",
    language: "Korean",
    targetLabel: "한국어",
    flag: "🇰🇷",
    section: "culture",
    available: true,
    level: "B1",
    sentences: [
      {
        en: "Listen up, team. Cow number 42 has mastitis in the right rear quarter.",
        target: "모두 들어주세요. 42번 소의 오른쪽 뒷 유방에 유방염이 생겼습니다.",
      },
      {
        en: "She must be milked last in the group to prevent spreading the infection.",
        target: "감염 확산을 막기 위해 그 소는 그룹에서 가장 마지막에 착유해야 합니다.",
      },
      {
        en: "Before milking, strip the affected quarter three times and check the color and texture of the milk.",
        target: "착유 전에 문제 유방을 세 번 짜서 우유의 색과 질감을 확인하세요.",
      },
      {
        en: "Discard any milk showing clots or discoloration — do not let it enter the bulk tank.",
        target: "덩어리나 변색이 있는 우유는 폐기하세요 — 대형 탱크에 들어가지 않도록 하세요.",
      },
      {
        en: "She has been prescribed intramammary antibiotics — administer one tube per quarter after each milking.",
        target: "유방 내 항생제가 처방되었습니다 — 착유 후마다 유방 하나당 한 튜브씩 투여하세요.",
      },
      {
        en: "Wear gloves when handling her and replace them before touching any other cow.",
        target: "그 소를 다룰 때는 장갑을 끼고 다른 소를 만지기 전에 교체하세요.",
      },
      {
        en: "Her milk is under antibiotic withdrawal and must not be sold until the period is complete.",
        target:
          "그 소의 우유는 항생제 회수 기간 중에 있으며 기간이 끝날 때까지 판매할 수 없습니다.",
      },
      {
        en: "Record the treatment in the herd health log with today's date and the drug lot number.",
        target: "오늘 날짜와 약품 로트 번호를 기재하여 축우 건강 기록부에 처치 내용을 기록하세요.",
      },
      {
        en: "If the milk does not clear up within three days, we will call the veterinarian.",
        target: "3일 내에 우유가 정상으로 돌아오지 않으면 수의사에게 연락합니다.",
      },
    ],
  },

  // ── Ranch & Cowboy ───────────────────────────────────────────────────────────
  {
    id: "seed-ko-ranch-cattle",
    title: "Ranch: Moving Cattle to South Pasture",
    subtitle: "남쪽 목초지로 소 이동 — 목장",
    language: "Korean",
    targetLabel: "한국어",
    flag: "🇰🇷",
    section: "culture",
    available: true,
    level: "B1",
    sentences: [
      {
        en: "Alright everyone, this morning we are moving the whole herd to the south pasture.",
        target: "좋아요, 오늘 아침 소 떼 전체를 남쪽 목초지로 이동합니다.",
      },
      {
        en: "Juan and Pedro, you two ride the east flank and keep the herd away from the fence line.",
        target: "후안과 페드로, 두 사람은 동쪽 측면을 타고 소들이 울타리에서 멀어지게 하세요.",
      },
      {
        en: "I will ride point ahead and guide the lead cow toward the gate at the bottom of the hill.",
        target: "나는 앞에서 선두를 타며 언덕 아래 게이트 쪽으로 선두 소를 안내하겠습니다.",
      },
      {
        en: "Move slowly and stay quiet — we do not want the herd to scatter or get stressed.",
        target: "천천히 움직이고 조용히 하세요 — 소들이 흩어지거나 스트레스를 받으면 안 됩니다.",
      },
      {
        en: "The water troughs in the south pasture were filled yesterday so they are ready.",
        target: "남쪽 목초지의 물통은 어제 채워져 준비되어 있습니다.",
      },
      {
        en: "Once the herd is through the gate, close and chain it securely — no exceptions.",
        target: "소들이 게이트를 통과하면 잠그고 단단히 체인을 채우세요 — 예외는 없습니다.",
      },
      {
        en: "We have about 240 head today, so count them carefully as they pass through.",
        target: "오늘 약 240마리가 있으니, 통과할 때 신중하게 숫자를 세세요.",
      },
      {
        en: "If you spot any limping or sick cows, cut them out and pen them separately.",
        target: "절뚝거리거나 아픈 소가 보이면 분리해서 따로 우리에 넣으세요.",
      },
      {
        en: "We should have everyone in the south pasture by eight thirty at the latest.",
        target: "늦어도 8시 30분까지는 모두 남쪽 목초지에 있어야 합니다.",
      },
    ],
  },

  // ── Meatpacking & Butcher ────────────────────────────────────────────────────
  {
    id: "seed-ko-butcher-safety",
    title: "Meatpacking: Knife Safety & Sanitation",
    subtitle: "칼 안전 및 위생 교육 — 정육",
    language: "Korean",
    targetLabel: "한국어",
    flag: "🇰🇷",
    section: "culture",
    available: true,
    level: "B1",
    sentences: [
      {
        en: "Welcome to the floor. Before you touch anything, I will cover knife safety and sanitation rules.",
        target:
          "현장에 오신 것을 환영합니다. 어떤 것도 건드리기 전에 칼 안전과 위생 규칙을 설명하겠습니다.",
      },
      {
        en: "Always keep your knife in the scabbard whenever you are not actively cutting.",
        target: "칼을 사용하지 않을 때는 항상 칼집에 보관하세요.",
      },
      {
        en: "Cut away from your body and away from the person working next to you on the line.",
        target:
          "몸에서 멀어지는 방향으로, 그리고 옆에서 작업하는 사람으로부터 멀어지는 방향으로 잘라야 합니다.",
      },
      {
        en: "Your cut-resistant glove goes on the guide hand, not the hand holding the knife.",
        target: "내절 장갑은 칼을 잡는 손이 아니라 안내하는 손에 착용합니다.",
      },
      {
        en: "You must sanitize your knife in the 180-degree hot water cabinet every 30 minutes.",
        target: "30분마다 섭씨 82도의 온수 캐비닛에서 칼을 소독해야 합니다.",
      },
      {
        en: "If your knife drops to the floor, set it aside and get a sanitized replacement — do not continue using it.",
        target: "칼이 바닥에 떨어지면 옆에 두고 소독된 교체품을 가져오세요 — 계속 사용하지 마세요.",
      },
      {
        en: "Sharpen your blade with the steel at the start of each shift — a dull knife causes accidents.",
        target: "각 교대 시작 시 스틸로 칼날을 날카롭게 하세요 — 무딘 칼은 사고를 유발합니다.",
      },
      {
        en: "Report any cut, no matter how small, to the safety supervisor immediately.",
        target: "아무리 작은 상처라도 즉시 안전 감독관에게 보고하세요.",
      },
      {
        en: "All work surfaces must be sanitized after each break and when switching to a different product.",
        target: "모든 작업 표면은 각 휴식 후와 다른 제품으로 전환할 때 소독해야 합니다.",
      },
    ],
  },

  // ── International Travel ─────────────────────────────────────────────────────
  {
    id: "seed-ko-travel-pharmacy",
    title: "Travel: Finding a Pharmacy Abroad",
    subtitle: "해외 약국 찾기 — 국제 여행",
    language: "Korean",
    targetLabel: "한국어",
    flag: "🇰🇷",
    section: "culture",
    available: true,
    level: "A2",
    sentences: [
      {
        en: "Excuse me, could you help me? I need to find a pharmacy.",
        target: "실례합니다, 도와주실 수 있나요? 약국을 찾아야 합니다.",
      },
      {
        en: "My travel companion is feeling unwell and needs medication right away.",
        target: "함께 여행하는 친구가 몸이 좋지 않아 지금 바로 약이 필요합니다.",
      },
      {
        en: "Is there a pharmacy nearby that is open at this hour?",
        target: "지금 이 시간에 문을 연 가까운 약국이 있나요?",
      },
      {
        en: "Could you write down the address or show me on my map application?",
        target: "주소를 써 주시거나 지도 앱에서 보여주실 수 있나요?",
      },
      {
        en: "How far is it from here — can I walk or should I take a taxi?",
        target: "여기서 얼마나 먼가요 — 걸어갈 수 있나요 아니면 택시를 타야 하나요?",
      },
      {
        en: "I am also looking for a convenience store where I can buy bottled water.",
        target: "생수를 살 수 있는 편의점도 찾고 있습니다.",
      },
      {
        en: "Do most pharmacies here accept credit cards, or do I need to pay cash?",
        target: "여기 대부분의 약국에서 신용카드를 받나요, 아니면 현금으로 내야 하나요?",
      },
      {
        en: "Is there anything I should know about getting prescription medication in this country?",
        target: "이 나라에서 처방전 약을 구입하는 것에 대해 알아야 할 것이 있나요?",
      },
      {
        en: "Thank you so much for your help — you have been very kind.",
        target: "도움을 주셔서 정말 감사합니다 — 정말 친절하시군요.",
      },
    ],
  },

  // ── OB/GYN ───────────────────────────────────────────────────────────────────
  {
    id: "seed-ko-ob-gyn-prenatal",
    title: "OB/GYN: First Trimester Overview",
    subtitle: "임신 초기 3개월 안내 — 산부인과",
    language: "Korean",
    targetLabel: "한국어",
    flag: "🇰🇷",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "Congratulations on your pregnancy. Let me explain what to expect in the first trimester.",
        target:
          "임신을 축하드립니다. 임신 초기 3개월 동안 무엇을 기대할 수 있는지 설명해 드리겠습니다.",
      },
      {
        en: "Today's visit includes a complete blood count, blood type, and a panel of infectious disease screening tests.",
        target:
          "오늘 방문에는 전혈구 검사, 혈액형 검사, 그리고 감염 질환 선별 검사 패널이 포함됩니다.",
      },
      {
        en: "At eight to ten weeks, we will perform an ultrasound to confirm gestational age and check the heartbeat.",
        target: "8~10주에는 임신 주수를 확인하고 심박수를 확인하기 위해 초음파 검사를 실시합니다.",
      },
      {
        en: "Between 10 and 13 weeks, we offer first-trimester screening for chromosomal abnormalities including Down syndrome.",
        target:
          "10~13주 사이에 다운증후군을 포함한 염색체 이상에 대한 임신 초기 선별 검사를 제공합니다.",
      },
      {
        en: "Nausea and fatigue are very common in the first trimester and usually improve after week 14.",
        target: "구역질과 피로는 임신 초기에 매우 흔하며 보통 14주 이후에는 호전됩니다.",
      },
      {
        en: "Please take prenatal vitamins with folic acid every day if you have not started already.",
        target: "아직 시작하지 않으셨다면 매일 엽산이 포함된 임산부 비타민을 복용하세요.",
      },
      {
        en: "Avoid raw fish, high-mercury fish, and any unpasteurized dairy products throughout your pregnancy.",
        target:
          "임신 기간 내내 날 생선, 수은 함량이 높은 생선, 저온 살균되지 않은 유제품을 피하세요.",
      },
      {
        en: "Moderate exercise like walking and swimming is safe and beneficial during pregnancy.",
        target: "걷기와 수영 같은 적당한 운동은 임신 중에 안전하고 유익합니다.",
      },
      {
        en: "Call us immediately if you experience heavy bleeding, severe cramping, or high fever.",
        target: "심한 출혈, 심한 복통, 또는 고열이 있으면 즉시 연락해 주세요.",
      },
      {
        en: "Your next appointment will be at 12 weeks for the first-trimester screening and a detailed ultrasound.",
        target: "다음 방문은 임신 초기 선별 검사와 세부 초음파를 위해 12주에 있습니다.",
      },
    ],
  },

  // ── Pain Management ──────────────────────────────────────────────────────────
  {
    id: "seed-ko-pain-history",
    title: "Pain Management: Comprehensive Pain History",
    subtitle: "통증 병력 청취 — 통증 관리",
    language: "Korean",
    targetLabel: "한국어",
    flag: "🇰🇷",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "Hello, I am Dr. Kim, your pain management physician. I want to fully understand your pain today.",
        target:
          "안녕하세요, 저는 통증 관리 전문의 김 박사입니다. 오늘 귀하의 통증을 충분히 이해하고 싶습니다.",
      },
      {
        en: "On a scale of zero to ten, how would you rate your pain at this moment?",
        target: "0에서 10의 척도로, 지금 이 순간 통증을 어떻게 평가하시겠습니까?",
      },
      {
        en: "Where exactly is the pain located, and does it radiate or travel to another area?",
        target: "통증이 정확히 어디에 있으며, 다른 부위로 퍼지거나 이동하나요?",
      },
      {
        en: "How would you describe the quality of the pain — sharp, burning, aching, or throbbing?",
        target: "통증의 특성을 어떻게 묘사하시겠어요 — 날카로운, 타는 듯한, 욱신거리는 통증인가요?",
      },
      {
        en: "How long have you had this pain, and did it begin suddenly or come on gradually?",
        target: "이 통증이 얼마나 오래됐으며, 갑자기 시작됐나요 아니면 서서히 시작됐나요?",
      },
      {
        en: "What activities or positions make the pain worse, and what brings some relief?",
        target: "어떤 활동이나 자세가 통증을 악화시키며, 무엇이 어느 정도 완화를 가져오나요?",
      },
      {
        en: "Have you tried any medications for this pain, and how effective were they?",
        target: "이 통증을 위해 어떤 약을 써보셨나요? 얼마나 효과가 있었나요?",
      },
      {
        en: "How does the pain affect your sleep, your ability to work, and your daily activities?",
        target: "통증이 수면, 업무 능력, 일상 활동에 어떤 영향을 미치나요?",
      },
      {
        en: "I will review your imaging studies and prior treatment records before recommending a care plan.",
        target: "치료 계획을 권장하기 전에 영상 검사와 이전 치료 기록을 검토하겠습니다.",
      },
      {
        en: "My goal is to reduce your pain to a level where you can function and enjoy your daily life.",
        target:
          "제 목표는 귀하가 일상생활을 기능하고 즐길 수 있는 수준으로 통증을 줄이는 것입니다.",
      },
    ],
  },

  // ── General Surgery ──────────────────────────────────────────────────────────
  {
    id: "seed-ko-surgery-appendectomy",
    title: "General Surgery: Laparoscopic Appendectomy Consent",
    subtitle: "복강경 충수 절제술 동의 — 일반외과",
    language: "Korean",
    targetLabel: "한국어",
    flag: "🇰🇷",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      {
        en: "Hello, I am Dr. Park, your surgeon. Your CT scan shows acute appendicitis.",
        target:
          "안녕하세요, 저는 귀하의 외과 의사 박 박사입니다. CT 스캔에서 급성 충수염이 보입니다.",
      },
      {
        en: "I am recommending a laparoscopic appendectomy — a minimally invasive surgery to remove your appendix.",
        target: "최소 침습 방식의 복강경 충수 절제술을 권장합니다 — 충수를 제거하는 수술입니다.",
      },
      {
        en: "Instead of one large cut, we make three small incisions of about one centimeter each.",
        target: "큰 절개 하나 대신 각각 약 1센티미터의 작은 절개 세 개를 만듭니다.",
      },
      {
        en: "A small camera and instruments are inserted through these incisions to remove the appendix.",
        target: "이 절개를 통해 소형 카메라와 도구를 삽입하여 충수를 제거합니다.",
      },
      {
        en: "The procedure takes 30 to 45 minutes under general anesthesia.",
        target: "이 시술은 전신 마취 하에 30~45분이 걸립니다.",
      },
      {
        en: "Most patients go home the next day and return to light activities within one to two weeks.",
        target: "대부분의 환자는 다음날 퇴원하고 1~2주 내에 가벼운 활동으로 복귀합니다.",
      },
      {
        en: "Risks include bleeding, infection, and a small possibility of converting to open surgery.",
        target: "위험 요소로는 출혈, 감염, 그리고 개복 수술로 전환될 가능성이 있습니다.",
      },
      {
        en: "If we do not operate, the appendix could rupture, causing a life-threatening peritonitis.",
        target: "수술하지 않으면 충수가 파열되어 생명을 위협하는 복막염이 발생할 수 있습니다.",
      },
      {
        en: "Do you have any questions before I ask you to sign the surgical consent form?",
        target: "수술 동의서에 서명을 요청하기 전에 질문이 있으신가요?",
      },
      {
        en: "A nurse will explain all pre-operative instructions and what to expect after the surgery.",
        target:
          "간호사가 모든 수술 전 지침과 수술 후 무엇을 기대할 수 있는지 설명해 드릴 것입니다.",
      },
    ],
  },

  // ── Soccer ───────────────────────────────────────────────────────────────────
  {
    id: "seed-ko-soccer-match",
    title: "Soccer: On-Field Communication",
    subtitle: "축구 경기 중 의사소통 — 축구",
    language: "Korean",
    targetLabel: "한국어",
    flag: "🇰🇷",
    section: "culture",
    available: true,
    level: "B1",
    sentences: [
      {
        en: "I am open! Play it to me on the left side.",
        target: "저 비어 있어요! 왼쪽으로 패스해 주세요.",
      },
      {
        en: "Good touch! Now give it back and make your run behind the defense.",
        target: "좋은 터치! 이제 돌려주고 수비 뒤로 달려가세요.",
      },
      {
        en: "Hold the ball, hold it — I am overlapping on the right wing.",
        target: "공 잡아요, 잡아요 — 제가 오른쪽 윙으로 오버랩 달려갈게요.",
      },
      {
        en: "That is offside — stay level with the last defender!",
        target: "그건 오프사이드예요 — 마지막 수비수와 같은 선에 있으세요!",
      },
      {
        en: "Press! Do not let him turn with the ball!",
        target: "프레스! 공을 가진 채로 돌아서게 하지 마세요!",
      },
      {
        en: "Shoot! You have a clear shot from 20 meters — take it!",
        target: "슛해요! 20미터에서 깨끗한 슛 기회예요 — 쏘세요!",
      },
      {
        en: "Man on, man on — pass back or turn quickly!",
        target: "마크당해요 — 뒤로 패스하거나 빨리 돌아요!",
      },
      {
        en: "Great work — now drop back and help the midfield recover their shape.",
        target: "잘했어요 — 이제 내려와서 미드필드 진형 회복을 도우세요.",
      },
      {
        en: "Corner kick — everyone to the near and far post positions!",
        target: "코너킥 — 모두 니어 포스트와 파 포스트 자리로!",
      },
      {
        en: "Beautiful goal! That is exactly the passing combination we practiced.",
        target: "멋진 골이에요! 우리가 연습했던 그 패스 조합이에요.",
      },
    ],
  },

  // ── Hockey ───────────────────────────────────────────────────────────────────
  {
    id: "seed-ko-hockey-rink",
    title: "Hockey: Power Play Communication",
    subtitle: "파워플레이 상황 소통 — 아이스하키",
    language: "Korean",
    targetLabel: "한국어",
    flag: "🇰🇷",
    section: "culture",
    available: true,
    level: "B1",
    sentences: [
      {
        en: "Line change — power play unit one, get out there right now!",
        target: "라인 교체 — 파워플레이 1유닛, 지금 나가세요!",
      },
      {
        en: "Set up in the umbrella formation — point man at the top of the circles.",
        target: "우산 포메이션으로 자리 잡으세요 — 포인트 선수는 서클 상단에 위치하세요.",
      },
      {
        en: "We have 48 seconds left on this power play — make every shot count.",
        target: "이 파워플레이에 48초 남았습니다 — 모든 슛을 살리세요.",
      },
      {
        en: "The slot is wide open — point man, shoot low and hard.",
        target: "슬롯이 활짝 비었습니다 — 포인트 선수, 낮고 강하게 쏘세요.",
      },
      {
        en: "If the puck goes to the corner, one man battles while the others hold their positions.",
        target: "퍽이 코너로 가면 한 명만 싸우고 나머지는 자리를 지키세요.",
      },
      {
        en: "Do not try to pass through the middle — that is how they score on the short-handed break.",
        target: "가운데로 패스하려 하지 마세요 — 그러면 수적 열세 상황에서 역습당합니다.",
      },
      {
        en: "Move the puck quickly around the perimeter and look for a seam to the crease.",
        target: "퍽을 페리미터를 따라 빠르게 돌리고 크리즈로 향하는 틈새를 찾으세요.",
      },
      {
        en: "Great cycle! Now shoot — the goalie is out of position!",
        target: "훌륭한 사이클이에요! 이제 슛하세요 — 골키퍼가 자리를 벗어났어요!",
      },
      {
        en: "Good hustle out there. Regroup on the bench and we go again.",
        target: "열심히 뛰었어요. 벤치에서 다시 모이고 재도전합니다.",
      },
    ],
  },

  // ── Tennis ───────────────────────────────────────────────────────────────────
  {
    id: "seed-ko-tennis-court",
    title: "Tennis: Doubles Strategy & Match Talk",
    subtitle: "복식 전략 및 경기 대화 — 테니스",
    language: "Korean",
    targetLabel: "한국어",
    flag: "🇰🇷",
    section: "culture",
    available: true,
    level: "B1",
    sentences: [
      {
        en: "Before we start, let us go over our strategy for this doubles match.",
        target: "시작하기 전에 이 복식 매치 전략을 점검하겠습니다.",
      },
      {
        en: "Their right player has a strong forehand — serve wide to his backhand side.",
        target: "그들 오른쪽 선수는 포핸드가 강합니다 — 그의 백핸드 쪽으로 와이드 서브하세요.",
      },
      {
        en: "I will take the net position and look for short balls to volley into the open court.",
        target: "저는 네트 포지션을 잡고 열린 코트로 발리할 짧은 공을 노리겠습니다.",
      },
      {
        en: "When I poach, cover the alley immediately — do not stay in the center.",
        target: "제가 포치할 때 즉시 앨리를 커버하세요 — 가운데 있지 마세요.",
      },
      {
        en: "Start with a consistent return and build into the rally — do not go for a winner right away.",
        target: "안정된 리턴으로 시작하고 랠리를 쌓으세요 — 바로 위너를 노리지 마세요.",
      },
      {
        en: "On second serve, attack the return — push it deep or wrong-foot them.",
        target: "세컨드 서브에는 리턴을 공격하세요 — 깊이 보내거나 발 묶어 버리세요.",
      },
      {
        en: "Call 'mine' or 'yours' loudly every time one of us crosses to cover — no hesitation.",
        target:
          "우리 중 누군가 커버하러 넘어갈 때마다 크게 '내꺼' 또는 '네꺼'라고 외치세요 — 망설임 없이.",
      },
      {
        en: "Stay positive between points — one bad shot should not become three.",
        target: "포인트 사이에 긍정적으로 유지하세요 — 실수 하나가 세 개로 이어지면 안 됩니다.",
      },
      {
        en: "Win the first set and take all the momentum. Serve first, stay aggressive.",
        target:
          "첫 번째 세트를 따내고 모든 모멘텀을 가져오세요. 먼저 서브하고 적극적으로 유지하세요.",
      },
    ],
  },

  // ── Bowling ──────────────────────────────────────────────────────────────────
  {
    id: "seed-ko-bowling-lane",
    title: "Bowling: Scoring and Lane Basics",
    subtitle: "볼링 점수 계산과 레인 기초 — 볼링",
    language: "Korean",
    targetLabel: "한국어",
    flag: "🇰🇷",
    section: "culture",
    available: true,
    level: "A2",
    sentences: [
      {
        en: "Welcome to the bowling alley! Let me explain the scoring before we start.",
        target: "볼링장에 오신 것을 환영합니다! 시작하기 전에 점수 계산을 설명해 드리겠습니다.",
      },
      {
        en: "A game has ten frames, and you get up to two rolls per frame to knock down all ten pins.",
        target:
          "볼링 게임은 10프레임으로 구성되며, 10개의 핀을 모두 쓰러뜨리기 위해 각 프레임에 최대 2번 굴릴 수 있습니다.",
      },
      {
        en: "If you knock all 10 pins with the first ball, that is a strike and earns you bonus points.",
        target: "첫 번째 공으로 10개의 핀을 모두 쓰러뜨리면 스트라이크이며 보너스 점수를 얻습니다.",
      },
      {
        en: "A strike scores 10 points plus the total of your next two rolls as a bonus.",
        target: "스트라이크는 10점에 다음 두 번의 투구 합계가 보너스로 더해집니다.",
      },
      {
        en: "If you knock the remaining pins with the second ball, that is a spare.",
        target: "두 번째 공으로 나머지 핀을 모두 쓰러뜨리면 스페어입니다.",
      },
      {
        en: "A spare scores 10 points plus the total of your next one roll as a bonus.",
        target: "스페어는 10점에 다음 한 번의 투구 합계가 보너스로 더해집니다.",
      },
      {
        en: "Three strikes in a row is called a turkey — that is a great achievement!",
        target: "연속 스트라이크 세 번은 터키라고 합니다 — 정말 훌륭한 성과입니다!",
      },
      {
        en: "The maximum score in bowling is 300, achieved by rolling 12 consecutive strikes.",
        target: "볼링의 최고 점수는 300점이며, 연속 스트라이크 12번으로 달성합니다.",
      },
      {
        en: "Aim at the arrows on the lane, not the pins — that will improve your accuracy.",
        target: "핀이 아니라 레인의 화살표를 겨냥하세요 — 정확도가 향상됩니다.",
      },
    ],
  },

  // ── American Football ────────────────────────────────────────────────────────
  {
    id: "seed-ko-football-play",
    title: "American Football: Huddle Communication",
    subtitle: "허들 플레이 콜 — 미식축구",
    language: "Korean",
    targetLabel: "한국어",
    flag: "🇰🇷",
    section: "culture",
    available: true,
    level: "B1",
    sentences: [
      {
        en: "Listen up in the huddle. The play is '36 Power Right on two.'",
        target: "허들에서 잘 들어요. 플레이는 '36 파워 라이트, 둘에서 스냅'입니다.",
      },
      {
        en: "Right guard and right tackle, double-team the nose guard off the snap.",
        target: "오른쪽 가드와 오른쪽 태클, 스냅 후 노즈 가드를 이중 마크하세요.",
      },
      {
        en: "Fullback, lead through the six hole and kick out the linebacker.",
        target: "풀백, 6번 홀을 선도하며 라인배커를 밀어내세요.",
      },
      {
        en: "Tight end, chip the defensive end and release to the flat if the back is covered.",
        target: "타이트 엔드, 수비 엔드를 살짝 건드린 후 백이 마크되면 플랫으로 이동하세요.",
      },
      {
        en: "Wide receivers, run your routes to hold the safeties deep — you are the decoy.",
        target:
          "와이드 리시버들, 루트를 달려서 세이프티를 깊은 곳에 잡아두세요 — 여러분은 미끼입니다.",
      },
      {
        en: "If the linebacker blitzes, the slot receiver has the hot route on the quick slant.",
        target: "라인배커가 블리츠하면 슬롯 리시버가 퀵 슬랜트 핫 루트를 가집니다.",
      },
      {
        en: "Hold your blocks for a three count — give the runner time to find the hole.",
        target: "블록을 세 박자 유지하세요 — 러너가 홀을 찾을 시간을 주어야 합니다.",
      },
      {
        en: "On the audible signal 'Blue 42,' we switch from run to a quick pass.",
        target: "오디블 신호 '블루 42'에서 런에서 퀵 패스로 전환합니다.",
      },
      {
        en: "Execute your assignments and we will gain the first down. Break!",
        target: "각자 임무를 잘 수행하면 퍼스트 다운을 얻습니다. 브레이크!",
      },
    ],
  },

  // ── Lacrosse ─────────────────────────────────────────────────────────────────
  {
    id: "seed-ko-lacrosse-field",
    title: "Lacrosse: Fast Break Communication",
    subtitle: "패스트 브레이크 소통 — 라크로스",
    language: "Korean",
    targetLabel: "한국어",
    flag: "🇰🇷",
    section: "culture",
    available: true,
    level: "B1",
    sentences: [
      {
        en: "Fast break! Midfield, sprint up the field — do not stop!",
        target: "패스트 브레이크! 미드필드, 필드 위로 전력 질주하세요 — 멈추지 마세요!",
      },
      {
        en: "Ji-hoon, take the ball up the right side and draw the near defender.",
        target: "지훈, 오른쪽으로 공을 가지고 가서 가까운 수비수를 끌어당기세요.",
      },
      {
        en: "Min-jun, cut across the crease — if you are open, you receive the feed.",
        target: "민준, 크리즈를 가로질러 달리세요 — 비어있으면 패스를 받으세요.",
      },
      {
        en: "We have a three-on-two advantage — do not rush, use your numbers wisely.",
        target: "우리가 3대 2 우위입니다 — 서두르지 말고, 수적 우위를 현명하게 활용하세요.",
      },
      {
        en: "Wait for the goalie to commit before you release the shot.",
        target: "슛을 릴리즈하기 전에 골키퍼가 움직이길 기다리세요.",
      },
      {
        en: "Move the ball quickly, look for the open man, and keep your feet moving.",
        target: "공을 빠르게 움직이고, 열린 선수를 찾고, 계속 발을 움직이세요.",
      },
      {
        en: "Great cut! Now dodge hard — he cannot cover both of you at the same time.",
        target:
          "훌륭한 커팅이에요! 이제 강하게 도지하세요 — 그가 동시에 너희 둘을 막을 수는 없습니다.",
      },
      {
        en: "If the shot is blocked, crash the crease hard for the rebound.",
        target: "슛이 막히면 리바운드를 위해 크리즈로 강하게 달려들어요.",
      },
      {
        en: "Excellent goal! That is the ball movement we have been working on.",
        target: "훌륭한 골이에요! 우리가 계속 연습해 온 공 움직임이에요.",
      },
    ],
  },

  // ── Rugby ────────────────────────────────────────────────────────────────────
  {
    id: "seed-ko-rugby-pitch",
    title: "Rugby: Scrum Engagement & Set-Piece Call",
    subtitle: "스크럼 결합 및 세트피스 콜 — 럭비",
    language: "Korean",
    targetLabel: "한국어",
    flag: "🇰🇷",
    section: "culture",
    available: true,
    level: "B1",
    sentences: [
      {
        en: "Forwards, gather in. Here is the set-piece call for this scrum.",
        target: "포워드들, 모여요. 이 스크럼의 세트피스 콜입니다.",
      },
      {
        en: "Bind tight on the hips — not the jersey, on the shorts waistband.",
        target: "엉덩이에 단단히 결합하세요 — 유니폼이 아니라 반바지 허리 밴드에 잡으세요.",
      },
      {
        en: "On the referee's call 'crouch, bind, set' — we engage on 'set' and not before.",
        target: "심판의 '크라우치, 바인드, 셋' 콜에서 '셋'에 결합합니다 — 그 전에 하지 마세요.",
      },
      {
        en: "Number eight, when the ball comes in, hold one beat, then drive forward hard.",
        target: "넘버 에이트, 공이 들어오면 한 박자 기다렸다가 앞으로 강하게 밀어붙이세요.",
      },
      {
        en: "Scrum-half, feed the ball in when I give you the nod.",
        target: "스크럼하프, 내가 고개를 끄덕이면 공을 넣으세요.",
      },
      {
        en: "We are going for the push and pick at the base — do not release the ball early.",
        target: "베이스에서 밀어붙인 뒤 집을 것입니다 — 일찍 공을 놓지 마세요.",
      },
      {
        en: "Stay low and stay wide — anyone who stands up gives them a dominant platform.",
        target: "낮고 넓게 있으세요 — 일어서는 사람은 그들에게 우세한 기회를 줍니다.",
      },
      {
        en: "Win this scrum and we score; lose it and they kick for field position.",
        target: "이 스크럼을 이기면 우리가 득점하고, 지면 그들이 필드 포지션을 위해 킥합니다.",
      },
      {
        en: "Let us own this scrum. Crouch low — bind — set!",
        target: "이 스크럼을 지배합시다. 낮게 크라우치 — 바인드 — 셋!",
      },
    ],
  },
];
