// English-as-target-language seed library.
// For Spanish/French/etc. native speakers learning English.
// `target` is English; `en` is also English (it's the same text — the LEFT
// pane is rendered in the learner's selected nativeLanguage via runtime AI
// lookups, so the seed `en` field just mirrors the target text).

import type { LibrarySeed } from "./_types";

export const ENGLISH_TARGET_SEEDS: LibrarySeed[] = [

  // ── A1: Hello at the Coffee Shop ────────────────────────────────────────────
  {
    id: "seed-en-coffee-shop-hello",
    title: "Hello at the Coffee Shop",
    subtitle: "Basic greetings and ordering — for English learners",
    language: "English",
    targetLabel: "English",
    flag: "🇬🇧",
    section: "culture",
    available: true,
    level: "A1",
    sentences: [
      { en: "Hi! Good morning. How are you today?", target: "Hi! Good morning. How are you today?" },
      { en: "I'm good, thanks. Can I have a small coffee, please?", target: "I'm good, thanks. Can I have a small coffee, please?" },
      { en: "Sure. Would you like milk or sugar with that?", target: "Sure. Would you like milk or sugar with that?" },
      { en: "Just milk, please. No sugar.", target: "Just milk, please. No sugar." },
      { en: "That will be three dollars and fifty cents.", target: "That will be three dollars and fifty cents." },
      { en: "Here you go. Can I pay with a card?", target: "Here you go. Can I pay with a card?" },
      { en: "Yes, the card reader is right here. Tap or insert.", target: "Yes, the card reader is right here. Tap or insert." },
      { en: "Thank you. Have a nice day!", target: "Thank you. Have a nice day!" },
      { en: "You too. See you next time!", target: "You too. See you next time!" },
    ],
  },

  // ── A1: Where is the Bathroom? ──────────────────────────────────────────────
  {
    id: "seed-en-where-is-bathroom",
    title: "Where is the Bathroom?",
    subtitle: "Everyday survival phrases — for English learners",
    language: "English",
    targetLabel: "English",
    flag: "🇬🇧",
    section: "culture",
    available: true,
    level: "A1",
    sentences: [
      { en: "Excuse me, where is the bathroom?", target: "Excuse me, where is the bathroom?" },
      { en: "It's down the hall on the right.", target: "It's down the hall on the right." },
      { en: "Sorry, can you say that again, please?", target: "Sorry, can you say that again, please?" },
      { en: "Of course. Walk straight, then turn right.", target: "Of course. Walk straight, then turn right." },
      { en: "Is it free, or do I need a key?", target: "Is it free, or do I need a key?" },
      { en: "It's free. The door is open.", target: "It's free. The door is open." },
      { en: "Thank you so much for your help.", target: "Thank you so much for your help." },
      { en: "You're welcome. Let me know if you need anything else.", target: "You're welcome. Let me know if you need anything else." },
    ],
  },

  // ── A2: Asking for Directions ───────────────────────────────────────────────
  {
    id: "seed-en-asking-directions",
    title: "Asking for Directions",
    subtitle: "Navigating a new city — for English learners",
    language: "English",
    targetLabel: "English",
    flag: "🇬🇧",
    section: "culture",
    available: true,
    level: "A2",
    sentences: [
      { en: "Excuse me, I'm looking for the train station. Is it far?", target: "Excuse me, I'm looking for the train station. Is it far?" },
      { en: "It's about a ten-minute walk from here.", target: "It's about a ten-minute walk from here." },
      { en: "Could you show me on my map, please?", target: "Could you show me on my map, please?" },
      { en: "Sure. Go straight for two blocks, then take a left at the bank.", target: "Sure. Go straight for two blocks, then take a left at the bank." },
      { en: "After the bank, you'll see a big park on your right.", target: "After the bank, you'll see a big park on your right." },
      { en: "The station is just past the park, across the street.", target: "The station is just past the park, across the street." },
      { en: "Is there a bus I can take instead of walking?", target: "Is there a bus I can take instead of walking?" },
      { en: "Yes — the number 14 bus stops right at the station.", target: "Yes — the number 14 bus stops right at the station." },
      { en: "Great, thank you. You've been really helpful.", target: "Great, thank you. You've been really helpful." },
      { en: "No problem. Have a safe trip!", target: "No problem. Have a safe trip!" },
    ],
  },

  // ── A2: At the Doctor's Office ──────────────────────────────────────────────
  {
    id: "seed-en-doctors-office",
    title: "At the Doctor's Office",
    subtitle: "Describing basic symptoms — for English learners",
    language: "English",
    targetLabel: "English",
    flag: "🇬🇧",
    section: "culture",
    available: true,
    level: "A2",
    sentences: [
      { en: "Hello, what brings you in today?", target: "Hello, what brings you in today?" },
      { en: "I haven't been feeling well for the past three days.", target: "I haven't been feeling well for the past three days." },
      { en: "Can you describe your symptoms for me?", target: "Can you describe your symptoms for me?" },
      { en: "I have a sore throat, a headache, and a small fever.", target: "I have a sore throat, a headache, and a small fever." },
      { en: "Are you coughing or having any trouble breathing?", target: "Are you coughing or having any trouble breathing?" },
      { en: "I cough a little, especially at night.", target: "I cough a little, especially at night." },
      { en: "Let me check your throat and listen to your lungs.", target: "Let me check your throat and listen to your lungs." },
      { en: "It looks like a common cold. Drink lots of water and rest.", target: "It looks like a common cold. Drink lots of water and rest." },
      { en: "If you don't feel better in a week, please come back.", target: "If you don't feel better in a week, please come back." },
      { en: "Thank you, doctor. I'll do that.", target: "Thank you, doctor. I'll do that." },
    ],
  },

  // ── B1: Renting an Apartment ────────────────────────────────────────────────
  {
    id: "seed-en-renting-apartment",
    title: "Renting an Apartment",
    subtitle: "Touring a place and discussing the lease — for English learners",
    language: "English",
    targetLabel: "English",
    flag: "🇬🇧",
    section: "culture",
    available: true,
    level: "B1",
    sentences: [
      { en: "Thanks for showing me the apartment today. It looks really nice.", target: "Thanks for showing me the apartment today. It looks really nice." },
      { en: "I'm glad you like it. The previous tenant lived here for five years.", target: "I'm glad you like it. The previous tenant lived here for five years." },
      { en: "Could you tell me how much the monthly rent is, including utilities?", target: "Could you tell me how much the monthly rent is, including utilities?" },
      { en: "Rent is twelve hundred dollars, and water is included. You pay your own electricity and internet.", target: "Rent is twelve hundred dollars, and water is included. You pay your own electricity and internet." },
      { en: "Is the security deposit one month or two months of rent?", target: "Is the security deposit one month or two months of rent?" },
      { en: "It's one month, returned within thirty days after you move out.", target: "It's one month, returned within thirty days after you move out." },
      { en: "Are pets allowed? I have a small, well-behaved cat.", target: "Are pets allowed? I have a small, well-behaved cat." },
      { en: "Yes, cats are fine — there is a small one-time pet fee of two hundred dollars.", target: "Yes, cats are fine — there is a small one-time pet fee of two hundred dollars." },
      { en: "How long is the lease, and can I renew it after the first year?", target: "How long is the lease, and can I renew it after the first year?" },
      { en: "It's a standard twelve-month lease, and renewal is usually available if your payments are on time.", target: "It's a standard twelve-month lease, and renewal is usually available if your payments are on time." },
      { en: "Perfect. I'd like to apply. What documents do you need from me?", target: "Perfect. I'd like to apply. What documents do you need from me?" },
    ],
  },

  // ── B1: Job Interview Basics ────────────────────────────────────────────────
  {
    id: "seed-en-job-interview-basics",
    title: "Job Interview Basics",
    subtitle: "First-round interview conversation — for English learners",
    language: "English",
    targetLabel: "English",
    flag: "🇬🇧",
    section: "culture",
    available: true,
    level: "B1",
    sentences: [
      { en: "Thank you for coming in today. Please, have a seat and make yourself comfortable.", target: "Thank you for coming in today. Please, have a seat and make yourself comfortable." },
      { en: "Thank you for the opportunity — I'm excited to learn more about the role.", target: "Thank you for the opportunity — I'm excited to learn more about the role." },
      { en: "Could you start by telling me a little bit about your background?", target: "Could you start by telling me a little bit about your background?" },
      { en: "Of course. I have three years of experience in customer service and a degree in business administration.", target: "Of course. I have three years of experience in customer service and a degree in business administration." },
      { en: "What attracted you to apply for a position at our company?", target: "What attracted you to apply for a position at our company?" },
      { en: "I really respect your focus on training and on promoting from within the team.", target: "I really respect your focus on training and on promoting from within the team." },
      { en: "Tell me about a difficult problem you solved at a previous job.", target: "Tell me about a difficult problem you solved at a previous job." },
      { en: "Once, our system went down right before a busy weekend, and I helped coordinate manual orders.", target: "Once, our system went down right before a busy weekend, and I helped coordinate manual orders." },
      { en: "What are your salary expectations for this position?", target: "What are your salary expectations for this position?" },
      { en: "Based on the market and my experience, I'm looking for something in the mid-fifties range.", target: "Based on the market and my experience, I'm looking for something in the mid-fifties range." },
      { en: "Do you have any questions for me about the role or the team?", target: "Do you have any questions for me about the role or the team?" },
      { en: "Yes — what does a typical first ninety days look like for someone in this position?", target: "Yes — what does a typical first ninety days look like for someone in this position?" },
    ],
  },

  // ── B2: Customer Service Call ───────────────────────────────────────────────
  {
    id: "seed-en-customer-service-call",
    title: "Customer Service Call",
    subtitle: "Resolving a billing dispute — for English learners",
    language: "English",
    targetLabel: "English",
    flag: "🇬🇧",
    section: "culture",
    available: true,
    level: "B2",
    sentences: [
      { en: "Thank you for calling — my name is Jordan. How can I help you today?", target: "Thank you for calling — my name is Jordan. How can I help you today?" },
      { en: "Hi Jordan. I'm calling because I was charged twice for the same order last month.", target: "Hi Jordan. I'm calling because I was charged twice for the same order last month." },
      { en: "I'm really sorry to hear that. Could you give me your account number so I can look into it?", target: "I'm really sorry to hear that. Could you give me your account number so I can look into it?" },
      { en: "It's seven-three-one-four-eight-two-zero, under the name Maria Lopez.", target: "It's seven-three-one-four-eight-two-zero, under the name Maria Lopez." },
      { en: "Thank you. I can see two identical charges on March twelfth — that's clearly an error on our side.", target: "Thank you. I can see two identical charges on March twelfth — that's clearly an error on our side." },
      { en: "I'd like to issue a full refund for the duplicate charge. Would that resolve the issue for you?", target: "I'd like to issue a full refund for the duplicate charge. Would that resolve the issue for you?" },
      { en: "Yes, that would be perfect. How long will the refund take to appear on my card?", target: "Yes, that would be perfect. How long will the refund take to appear on my card?" },
      { en: "Most refunds post within five to seven business days, depending on your bank.", target: "Most refunds post within five to seven business days, depending on your bank." },
      { en: "I'll also send you a confirmation email with the reference number for your records.", target: "I'll also send you a confirmation email with the reference number for your records." },
      { en: "Thanks for being so quick about this — I really appreciate it.", target: "Thanks for being so quick about this — I really appreciate it." },
      { en: "Of course — and I apologize again for the inconvenience. Is there anything else I can help with?", target: "Of course — and I apologize again for the inconvenience. Is there anything else I can help with?" },
    ],
  },

  // ── C1: Negotiating a Contract ──────────────────────────────────────────────
  {
    id: "seed-en-negotiating-contract",
    title: "Negotiating a Contract",
    subtitle: "Discussing terms with a vendor — for English learners",
    language: "English",
    targetLabel: "English",
    flag: "🇬🇧",
    section: "culture",
    available: true,
    level: "C1",
    sentences: [
      { en: "Thanks for sending over the revised draft — I've had a chance to review the key provisions.", target: "Thanks for sending over the revised draft — I've had a chance to review the key provisions." },
      { en: "Overall the structure works for us, but there are a few clauses I'd like to revisit before we sign.", target: "Overall the structure works for us, but there are a few clauses I'd like to revisit before we sign." },
      { en: "Of course — which sections in particular are you concerned about?", target: "Of course — which sections in particular are you concerned about?" },
      { en: "The termination clause requires ninety days' notice, but our standard internal policy is sixty.", target: "The termination clause requires ninety days' notice, but our standard internal policy is sixty." },
      { en: "We could meet in the middle at seventy-five days, provided the cancellation fee remains the same.", target: "We could meet in the middle at seventy-five days, provided the cancellation fee remains the same." },
      { en: "That's reasonable — we can accept seventy-five days if the indemnification cap stays at one year of fees.", target: "That's reasonable — we can accept seventy-five days if the indemnification cap stays at one year of fees." },
      { en: "We're also asking for stronger language around data ownership and the return of materials post-engagement.", target: "We're also asking for stronger language around data ownership and the return of materials post-engagement." },
      { en: "We can agree to that, as long as the return obligation is limited to documents produced under this agreement.", target: "We can agree to that, as long as the return obligation is limited to documents produced under this agreement." },
      { en: "Finally, the late-payment interest rate seems high — could we reduce it from one-point-five percent to one percent monthly?", target: "Finally, the late-payment interest rate seems high — could we reduce it from one-point-five percent to one percent monthly?" },
      { en: "We'll accept one percent if you agree to net-thirty payment terms instead of net-forty-five.", target: "We'll accept one percent if you agree to net-thirty payment terms instead of net-forty-five." },
      { en: "Done. I'll have our counsel mark up the document this week and send it back for final signatures.", target: "Done. I'll have our counsel mark up the document this week and send it back for final signatures." },
      { en: "Excellent. I think we've reached a fair arrangement on both sides — looking forward to working together.", target: "Excellent. I think we've reached a fair arrangement on both sides — looking forward to working together." },
    ],
  },
];
