import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  type ReactNode,
} from "react";
import { LIBRARY as PRELOADED, type LibraryText, type SentencePair } from "@/data/library";
import { PREACH_MY_GOSPEL_CHAPTERS } from "@/data/preach-my-gospel";
import { LDS_SCRIPTURES } from "@/data/lds-scriptures";
import type { Language } from "./app-state";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "./auth-state";
import { toast } from "sonner";

export type LibrarySection = "missionary" | "classic" | "culture" | "custom";

export interface BookChapter {
  title: string;
  sentences: SentencePair[];
}

export interface LibraryEntry extends LibraryText {
  section: LibrarySection;
  flag: string;
  available: boolean;
  chapters?: BookChapter[];
  createdAt?: number;
}

interface LibraryState {
  entries: LibraryEntry[];
  selectedId: string;
  generating: boolean;
}

type Action =
  | { type: "ADD_ENTRY"; payload: LibraryEntry }
  | { type: "SELECT"; payload: string }
  | { type: "SET_GENERATING"; payload: boolean }
  | { type: "REPLACE_BY_ID"; payload: LibraryEntry }
  | { type: "REMOVE_ENTRY"; payload: string }
  | { type: "SET_CUSTOM_ENTRIES"; payload: LibraryEntry[] };

const FLAG_BY_LANGUAGE: Record<Language, string> = {
  Spanish: "🇪🇸",
  French: "🇫🇷",
  German: "🇩🇪",
  Italian: "🇮🇹",
  Japanese: "🇯🇵",
  Korean: "🇰🇷",
  Portuguese: "🇧🇷",
};

const CLASSIC_STUBS: LibraryEntry[] = [
  {
    id: "classic-quixote",
    title: "Don Quixote — Ch. 1",
    subtitle: "Miguel de Cervantes",
    language: "Spanish",
    targetLabel: "Español",
    sentences: PRELOADED[0].sentences,
    section: "classic",
    flag: "🇪🇸",
    available: true,
  },
  {
    id: "classic-petit-prince",
    title: "Le Petit Prince",
    subtitle: "Antoine de Saint-Exupéry",
    language: "French",
    targetLabel: "Français",
    sentences: [],
    section: "classic",
    flag: "🇫🇷",
    available: false,
  },
  {
    id: "classic-verwandlung",
    title: "Die Verwandlung",
    subtitle: "Franz Kafka",
    language: "German",
    targetLabel: "Deutsch",
    sentences: [],
    section: "classic",
    flag: "🇩🇪",
    available: false,
  },
  {
    id: "classic-pinocchio",
    title: "Le avventure di Pinocchio",
    subtitle: "Carlo Collodi",
    language: "Italian",
    targetLabel: "Italiano",
    sentences: [],
    section: "classic",
    flag: "🇮🇹",
    available: false,
  },
];

const CULTURE_SEED: LibraryEntry = {
  id: "culture-espana-seed",
  title: "Culture: España",
  subtitle: "A short cultural reading",
  language: "Spanish",
  targetLabel: "Español",
  sentences: PRELOADED[1].sentences,
  section: "culture",
  flag: "🇪🇸",
  available: true,
};

const CULTURE_EXTRA: LibraryEntry[] = [
  {
    id: "culture-it-piccolo-principe",
    title: "Il Piccolo Principe — Capitolo I",
    subtitle: "Antoine de Saint-Exupéry (trad. italiana)",
    language: "Italian",
    targetLabel: "Italiano",
    section: "culture",
    flag: "🇮🇹",
    available: true,
    sentences: [
      { en: "Once when I was six years old I saw a magnificent picture in a book about the primeval forest, called 'True Stories from Nature.'", target: "Una volta, quando avevo sei anni, vidi un magnifico disegno in un libro sulla foresta vergine che si chiamava «Storie Vissute della Natura»." },
      { en: "It showed a boa constrictor in the act of swallowing an animal.", target: "Rappresentava un serpente boa nell'atto di inghiottire un animale." },
      { en: "I pondered deeply, then, over the adventures of the jungle, and after some work with a coloured pencil I succeeded in making my first drawing.", target: "Riflettei a lungo sulle avventure della giungla e a mia volta riuscii a tracciare, con una matita colorata, il mio primo disegno." },
      { en: "I showed my masterpiece to the grown-ups, and asked them whether the drawing frightened them.", target: "Mostrai il mio capolavoro alle persone grandi e chiesi loro se il disegno faceva paura." },
      { en: "They answered: 'Frighten? Why should anyone be frightened by a hat?'", target: "Mi risposero: «Paura? Perché mai uno dovrebbe avere paura di un cappello?»." },
      { en: "My drawing was not a picture of a hat. It was a picture of a boa constrictor digesting an elephant.", target: "Il mio disegno non era il disegno di un cappello. Era il disegno di un boa che digeriva un elefante." },
    ],
  },
  {
    id: "culture-it-calvino-marcovaldo",
    title: "Marcovaldo — Funghi in città",
    subtitle: "Italo Calvino",
    language: "Italian",
    targetLabel: "Italiano",
    section: "culture",
    flag: "🇮🇹",
    available: true,
    sentences: [
      { en: "The wind, coming to the city from far away, brings it unusual gifts, noticed only by a few sensitive souls, like sufferers from hay fever.", target: "Il vento, venendo in città da lontano, le porta doni inconsueti, di cui s'accorgono solo poche anime sensibili, come gli allergici ai pollini." },
      { en: "One day, on the strip of grass at a tram stop, Marcovaldo's eye fell on something strange.", target: "Un giorno, sulla striscia d'aiola d'un corso cittadino, dove finiva la linea d'un tram, Marcovaldo vide, scendendo dal tram, qualcosa di strano." },
      { en: "Mushrooms — real mushrooms — were sprouting right there at the heart of the city.", target: "Dei funghi, veri funghi, stavano spuntando proprio lì, nel cuore della città." },
      { en: "It seemed to Marcovaldo that the grey, wretched world surrounding him had suddenly become generous with hidden riches.", target: "A Marcovaldo parve che il mondo grigio e misero che lo circondava diventasse a un tratto generoso di ricchezze nascoste." },
      { en: "He returned home with a basket full and the look of a man who has discovered a treasure that the city had reserved only for him.", target: "Tornò a casa con la cesta colma e l'aria di chi ha scoperto un tesoro che la città aveva riservato soltanto per lui." },
    ],
  },
  {
    id: "culture-ja-tsuru-no-ongaeshi",
    title: "鶴の恩返し — The Crane's Return of a Favor",
    subtitle: "Japanese folk tale",
    language: "Japanese",
    targetLabel: "日本語",
    section: "culture",
    flag: "🇯🇵",
    available: true,
    sentences: [
      { en: "Long, long ago, in a small village, there lived a kind old man and his wife.", target: "むかしむかし、ある小さな村に、心の優しいおじいさんとおばあさんが住んでいました。" },
      { en: "One snowy day, the old man found a crane caught in a trap and quietly set it free.", target: "ある雪の降る日、おじいさんは罠にかかった一羽の鶴を見つけ、そっと逃がしてあげました。" },
      { en: "That night, a young woman knocked on the door and asked to stay until the storm passed.", target: "その夜、一人の若い娘が戸を叩き、嵐が過ぎるまで泊めてほしいと頼みました。" },
      { en: "She wove a beautiful cloth in a closed room, asking only that no one peek inside.", target: "娘は閉めきった部屋で美しい布を織り、「決して中をのぞかないでください」とだけ頼みました。" },
      { en: "Unable to resist, the old woman peeked, and saw a crane plucking its own feathers to weave.", target: "我慢できなくなったおばあさんがのぞくと、一羽の鶴が自分の羽を抜いて布を織っていました。" },
      { en: "Discovered, the crane bowed once and flew silently into the snowy sky, never to return.", target: "見られてしまった鶴は、一度お辞儀をして、雪の空へと静かに飛び去り、二度と戻りませんでした。" },
    ],
  },
  {
    id: "culture-ja-murakami-kaze",
    title: "風の歌を聴け — In the Style of Murakami",
    subtitle: "Inspired by Haruki Murakami",
    language: "Japanese",
    targetLabel: "日本語",
    section: "culture",
    flag: "🇯🇵",
    available: true,
    sentences: [
      { en: "There is no such thing as perfect writing, just as there is no such thing as perfect despair.", target: "完璧な文章などといったものは存在しない。完璧な絶望が存在しないようにね。" },
      { en: "On a quiet afternoon, I sat at the counter of a small bar and listened to an old jazz record.", target: "静かな午後、僕は小さなバーのカウンターに座り、古いジャズのレコードに耳を澄ませていた。" },
      { en: "The bartender wiped a glass without saying a word, as if time itself had been politely asked to wait.", target: "バーテンダーは何も言わずにグラスを拭いていた。まるで時間そのものに「少し待ってくれ」と頼んだみたいに。" },
      { en: "Outside the window, a thin rain was falling, and somewhere a cat was crying.", target: "窓の外では細い雨が降っていて、どこかで猫が鳴いていた。" },
      { en: "I thought about her — about the way she used to laugh, and about the things I had never managed to say.", target: "僕は彼女のことを考えていた。あの笑い方のこと、そして、ついに言えなかった言葉のことを。" },
      { en: "The wind passed through the street, carrying away the smell of rain and a small piece of my heart.", target: "風が通りを抜けていき、雨のにおいと、僕の心のほんの小さなかけらを連れ去っていった。" },
    ],
  },
  {
    id: "culture-ko-heungbu-nolbu",
    title: "흥부와 놀부 — Heungbu and Nolbu",
    subtitle: "Korean folk tale",
    language: "Korean",
    targetLabel: "한국어",
    section: "culture",
    flag: "🇰🇷",
    available: true,
    sentences: [
      { en: "Long, long ago there lived two brothers, Nolbu the elder and Heungbu the younger.", target: "옛날 옛적에 놀부라는 형과 흥부라는 동생, 두 형제가 살고 있었습니다." },
      { en: "Nolbu was greedy and cruel, but Heungbu was kind and gentle to everyone.", target: "놀부는 욕심이 많고 마음씨가 사나웠지만, 흥부는 누구에게나 친절하고 마음씨가 고왔습니다." },
      { en: "When their father died, Nolbu took all the wealth and drove Heungbu out of the house.", target: "아버지가 돌아가시자, 놀부는 모든 재산을 차지하고 흥부를 집에서 쫓아냈습니다." },
      { en: "One spring day, Heungbu mended the broken leg of a swallow with great care.", target: "어느 봄날, 흥부는 다리가 부러진 제비를 정성껏 치료해 주었습니다." },
      { en: "The next year the swallow returned and dropped a single gourd seed at his door.", target: "다음 해 봄, 제비가 돌아와 흥부의 집 앞에 박씨 하나를 떨어뜨렸습니다." },
      { en: "From the gourds that grew, gold and treasures poured out, and Heungbu became rich.", target: "그 박이 자라 열매를 가르자 금과 보물이 쏟아져 나왔고, 흥부는 부자가 되었습니다." },
    ],
  },
  {
    id: "culture-ko-seoul-cafe",
    title: "서울의 어느 카페에서 — At a Café in Seoul",
    subtitle: "A modern slice of Seoul",
    language: "Korean",
    targetLabel: "한국어",
    section: "culture",
    flag: "🇰🇷",
    available: true,
    sentences: [
      { en: "It was a quiet afternoon in a small café in Seochon, with autumn light falling through the window.", target: "서촌의 작은 카페, 창문으로 가을 햇살이 들어오는 조용한 오후였습니다." },
      { en: "She ordered a warm latte and opened a worn notebook on the wooden table.", target: "그녀는 따뜻한 라떼를 주문하고, 나무 탁자 위에 낡은 노트를 펼쳤습니다." },
      { en: "Outside, students were laughing on their way home, their backpacks bouncing lightly.", target: "밖에서는 학생들이 가방을 흔들며 집으로 가는 길에 웃고 있었습니다." },
      { en: "She thought about the trip to Jeju she had been planning for years.", target: "그녀는 몇 년 동안 계획해 온 제주 여행에 대해 생각했습니다." },
      { en: "Tonight, she would finally write the first sentence of her novel.", target: "오늘 밤, 그녀는 마침내 자신의 소설의 첫 문장을 쓸 것입니다." },
    ],
  },
];

// Preach My Gospel — surfaced when the LDS Missionary module is active.
// Single library entry with multiple chapters drawn from PMG (2023).
const PREACH_MY_GOSPEL_SEED: LibraryEntry = {
  id: "missionary-preach-my-gospel",
  title: "Preach My Gospel",
  subtitle: "A Guide to Missionary Service · The Church of Jesus Christ of Latter-day Saints",
  language: "Spanish",
  targetLabel: "Español",
  section: "missionary",
  flag: "✝️",
  available: true,
  sentences: PREACH_MY_GOSPEL_CHAPTERS[0].sentences,
  chapters: PREACH_MY_GOSPEL_CHAPTERS.map((c) => ({
    title: c.title,
    sentences: c.sentences,
  })),
};

const LDS_SCRIPTURE_SEEDS: LibraryEntry[] = LDS_SCRIPTURES.map((book) => ({
  id: book.id,
  title: book.title,
  subtitle: book.subtitle,
  language: "Spanish",
  targetLabel: "Español",
  section: "missionary",
  flag: book.flag,
  available: true,
  sentences: book.chapters[0].sentences,
  chapters: book.chapters.map((c) => ({ title: c.title, sentences: c.sentences })),
}));

const SEEDS: LibraryEntry[] = [
  PREACH_MY_GOSPEL_SEED,
  ...LDS_SCRIPTURE_SEEDS,
  ...CLASSIC_STUBS,
  CULTURE_SEED,
  ...CULTURE_EXTRA,
];

const initial: LibraryState = {
  entries: SEEDS,
  selectedId: "classic-quixote",
  generating: false,
};

function reducer(state: LibraryState, action: Action): LibraryState {
  switch (action.type) {
    case "ADD_ENTRY":
      return { ...state, entries: [action.payload, ...state.entries] };
    case "REPLACE_BY_ID": {
      const exists = state.entries.some((e) => e.id === action.payload.id);
      const entries = exists
        ? state.entries.map((e) => (e.id === action.payload.id ? action.payload : e))
        : [action.payload, ...state.entries];
      return { ...state, entries };
    }
    case "REMOVE_ENTRY": {
      const entries = state.entries.filter((e) => e.id !== action.payload);
      const selectedId =
        state.selectedId === action.payload
          ? entries.find((e) => e.available)?.id ?? entries[0]?.id ?? ""
          : state.selectedId;
      return { ...state, entries, selectedId };
    }
    case "SET_CUSTOM_ENTRIES": {
      // Replace all custom entries; keep seeds untouched.
      const nonCustom = state.entries.filter((e) => e.section !== "custom");
      return { ...state, entries: [...action.payload, ...nonCustom] };
    }
    case "SELECT":
      return { ...state, selectedId: action.payload };
    case "SET_GENERATING":
      return { ...state, generating: action.payload };
    default:
      return state;
  }
}

const STORAGE_KEY = "lingualens.library.custom.v1";

interface LibraryContextValue {
  state: LibraryState;
  dispatch: React.Dispatch<Action>;
  selected: LibraryEntry;
  flagFor: (l: Language) => string;
  /** Add a new custom book (persists to Cloud if signed in, else localStorage). */
  addCustomEntry: (entry: LibraryEntry) => Promise<void>;
  /** Remove a custom book. */
  removeCustomEntry: (id: string) => Promise<void>;
  syncing: boolean;
}

const Ctx = createContext<LibraryContextValue | null>(null);

interface DbRow {
  id: string;
  title: string;
  subtitle: string;
  language: string;
  target_label: string;
  flag: string;
  section: string;
  available: boolean;
  chapters: BookChapter[];
  created_at: string;
}

function rowToEntry(row: DbRow): LibraryEntry {
  const chapters = Array.isArray(row.chapters) ? row.chapters : [];
  return {
    id: row.id,
    title: row.title,
    subtitle: row.subtitle ?? "",
    language: row.language as Language,
    targetLabel: row.target_label,
    flag: row.flag || "📖",
    section: (row.section as LibrarySection) ?? "custom",
    available: row.available,
    chapters: chapters.length > 0 ? chapters : undefined,
    sentences: chapters[0]?.sentences ?? [],
    createdAt: row.created_at ? new Date(row.created_at).getTime() : Date.now(),
  };
}

function entryToInsert(entry: LibraryEntry, userId: string) {
  const chapters: BookChapter[] =
    entry.chapters && entry.chapters.length > 0
      ? entry.chapters
      : [{ title: entry.title, sentences: entry.sentences }];
  return {
    user_id: userId,
    title: entry.title,
    subtitle: entry.subtitle ?? "",
    language: entry.language,
    target_label: entry.targetLabel,
    flag: entry.flag,
    section: entry.section,
    available: entry.available,
    // Supabase typegen treats jsonb as `Json`. Our shape is JSON-serializable.
    chapters: chapters as unknown as never,
  };
}

export function LibraryProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initial);
  const { user, loading: authLoading } = useAuth();
  const syncingRef = useRef(false);
  const migratedRef = useRef<string | null>(null);

  // Hydrate from localStorage when signed out (or while auth resolving)
  useEffect(() => {
    if (authLoading) return;
    if (user) return;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? (JSON.parse(raw) as LibraryEntry[]) : [];
      dispatch({
        type: "SET_CUSTOM_ENTRIES",
        payload: Array.isArray(parsed) ? parsed : [],
      });
    } catch {
      dispatch({ type: "SET_CUSTOM_ENTRIES", payload: [] });
    }
  }, [user, authLoading]);

  // When the user signs in: migrate any localStorage books to Cloud, then load Cloud books.
  useEffect(() => {
    if (!user) return;
    if (migratedRef.current === user.id) return;
    migratedRef.current = user.id;

    let cancelled = false;
    (async () => {
      syncingRef.current = true;
      try {
        // 1. Migrate any local books up to cloud
        let localBooks: LibraryEntry[] = [];
        try {
          const raw = localStorage.getItem(STORAGE_KEY);
          localBooks = raw ? (JSON.parse(raw) as LibraryEntry[]) : [];
        } catch {
          /* ignore */
        }

        if (Array.isArray(localBooks) && localBooks.length > 0) {
          const inserts = localBooks.map((e) => entryToInsert(e, user.id));
          const { error } = await supabase.from("library_books").insert(inserts);
          if (!error) {
            localStorage.removeItem(STORAGE_KEY);
            toast.success(
              `Synced ${localBooks.length} book${localBooks.length === 1 ? "" : "s"} to your account`,
            );
          } else {
            console.error("Migration failed:", error);
          }
        }

        // 2. Load all cloud books
        const { data, error } = await supabase
          .from("library_books")
          .select("*")
          .order("created_at", { ascending: false });

        if (cancelled) return;
        if (error) {
          console.error("Failed to load cloud library:", error);
          toast.error("Couldn't load your library from the cloud.");
          return;
        }
        const entries = (data ?? []).map((r) => rowToEntry(r as unknown as DbRow));
        dispatch({ type: "SET_CUSTOM_ENTRIES", payload: entries });
      } finally {
        syncingRef.current = false;
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [user]);

  // Reset migration tracker on sign-out so a future sign-in re-runs migration
  useEffect(() => {
    if (!user) migratedRef.current = null;
  }, [user]);

  // Persist to localStorage only when signed OUT
  useEffect(() => {
    if (user) return;
    try {
      const customs = state.entries.filter((e) => e.section === "custom");
      localStorage.setItem(STORAGE_KEY, JSON.stringify(customs));
    } catch {
      /* quota exceeded — ignore */
    }
  }, [state.entries, user]);

  const addCustomEntry = useCallback(
    async (entry: LibraryEntry) => {
      if (!user) {
        // Local-only path
        dispatch({ type: "ADD_ENTRY", payload: entry });
        dispatch({ type: "SELECT", payload: entry.id });
        return;
      }
      // Cloud path: insert and use the DB-generated id
      const insert = entryToInsert(entry, user.id);
      const { data, error } = await supabase
        .from("library_books")
        .insert(insert)
        .select("*")
        .single();
      if (error || !data) {
        console.error("Cloud insert failed:", error);
        toast.error("Couldn't save book to cloud. Saved locally for now.");
        dispatch({ type: "ADD_ENTRY", payload: entry });
        dispatch({ type: "SELECT", payload: entry.id });
        return;
      }
      const saved = rowToEntry(data as unknown as DbRow);
      dispatch({ type: "ADD_ENTRY", payload: saved });
      dispatch({ type: "SELECT", payload: saved.id });
    },
    [user],
  );

  const removeCustomEntry = useCallback(
    async (id: string) => {
      // Optimistic
      dispatch({ type: "REMOVE_ENTRY", payload: id });
      if (!user) return;
      const { error } = await supabase.from("library_books").delete().eq("id", id);
      if (error) {
        console.error("Delete failed:", error);
        toast.error("Couldn't delete from cloud. Try again.");
      }
    },
    [user],
  );

  const selected = useMemo(
    () =>
      state.entries.find((e) => e.id === state.selectedId && e.available) ??
      state.entries.find((e) => e.available) ??
      state.entries[0],
    [state.entries, state.selectedId],
  );

  useEffect(() => {
    const cur = state.entries.find((e) => e.id === state.selectedId);
    if (!cur || !cur.available) {
      const fallback = state.entries.find((e) => e.available);
      if (fallback) dispatch({ type: "SELECT", payload: fallback.id });
    }
  }, [state.entries, state.selectedId]);

  return (
    <Ctx.Provider
      value={{
        state,
        dispatch,
        selected,
        flagFor: (l) => FLAG_BY_LANGUAGE[l],
        addCustomEntry,
        removeCustomEntry,
        syncing: syncingRef.current,
      }}
    >
      {children}
    </Ctx.Provider>
  );
}

export function useLibrary() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useLibrary must be used inside LibraryProvider");
  return c;
}

export function flagFor(l: Language): string {
  return FLAG_BY_LANGUAGE[l];
}

export function wordCount(sentences: { en?: string; target?: string }[] | string[]): number {
  if (sentences.length === 0) return 0;
  if (typeof sentences[0] === "string") {
    return (sentences as string[]).reduce((n, s) => n + s.split(/\s+/).filter(Boolean).length, 0);
  }
  return (sentences as { target: string }[]).reduce(
    (n, s) => n + (s.target ?? "").split(/\s+/).filter(Boolean).length,
    0,
  );
}
