import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { initSentry, Sentry } from "../lib/sentry";
initSentry();

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  url: string;
  pubDate: string; // ISO string
  source: string;
  sport: "soccer" | "baseball" | "general";
  teamMentions: string[];
}

interface RssItem {
  title: string;
  link: string;
  description: string;
  pubDate: string;
}

// ---------------------------------------------------------------------------
// RSS feed sources
// ---------------------------------------------------------------------------

const FEEDS: Record<"soccer" | "baseball" | "general", string[]> = {
  soccer: [
    "https://feeds.bbci.co.uk/sport/football/rss.xml",
    "https://www.theguardian.com/football/rss",
  ],
  baseball: [
    "https://feeds.feedburner.com/baseballprospectus",
  ],
  general: [
    "https://feeds.bbci.co.uk/sport/rss.xml",
  ],
};

const SOURCE_NAMES: Record<string, string> = {
  "feeds.bbci.co.uk": "BBC Sport",
  "www.theguardian.com": "The Guardian",
  "feeds.feedburner.com": "Baseball Prospectus",
};

// ---------------------------------------------------------------------------
// Common soccer/baseball clubs and national teams for mention extraction
// ---------------------------------------------------------------------------

const SOCCER_TEAMS = [
  "Arsenal", "Aston Villa", "Chelsea", "Everton", "Liverpool",
  "Manchester City", "Manchester United", "Newcastle", "Tottenham",
  "West Ham", "Barcelona", "Real Madrid", "Atletico Madrid", "Sevilla",
  "Juventus", "AC Milan", "Inter Milan", "Napoli", "Bayern Munich",
  "Borussia Dortmund", "PSG", "Paris Saint-Germain",
  "Ajax", "Porto", "Benfica", "Celtic", "Rangers",
  "England", "Spain", "France", "Germany", "Italy", "Brazil",
  "Argentina", "Portugal", "Netherlands", "USA", "Mexico",
];

const BASEBALL_TEAMS = [
  "Yankees", "Red Sox", "Dodgers", "Giants", "Cubs",
  "Cardinals", "Mets", "Astros", "Braves", "Padres",
  "Phillies", "Mariners", "Blue Jays", "Tigers", "Angels",
  "Rays", "Orioles", "Royals", "White Sox", "Twins",
  "Brewers", "Pirates", "Reds", "Rockies", "Diamondbacks",
  "Athletics", "Rangers", "Marlins", "Nationals",
];

// ---------------------------------------------------------------------------
// XML / RSS parsing helpers (no DOMParser in Cloudflare Workers)
// ---------------------------------------------------------------------------

function extractTagContent(xml: string, tag: string): string {
  // Handle <tag>content</tag> and <tag><![CDATA[content]]></tag>
  const cdataRe = new RegExp(`<${tag}[^>]*>\\s*<!\\[CDATA\\[([\\s\\S]*?)\\]\\]>\\s*</${tag}>`, "i");
  const plainRe = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, "i");
  const cdataMatch = cdataRe.exec(xml);
  if (cdataMatch) return cdataMatch[1].trim();
  const plainMatch = plainRe.exec(xml);
  if (plainMatch) return plainMatch[1].replace(/<[^>]+>/g, "").trim();
  return "";
}

function parseRssItems(xml: string): RssItem[] {
  const items: RssItem[] = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match: RegExpExecArray | null;
  while ((match = itemRegex.exec(xml)) !== null) {
    const block = match[1];
    const title = extractTagContent(block, "title");
    const link = extractTagContent(block, "link") || extractTagContent(block, "guid");
    const description = extractTagContent(block, "description");
    const pubDate = extractTagContent(block, "pubDate") || extractTagContent(block, "dc:date");
    if (title) {
      items.push({ title, link, description, pubDate });
    }
  }
  return items;
}

function simpleHash(str: string): string {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (Math.imul(31, h) + str.charCodeAt(i)) | 0;
  }
  return Math.abs(h).toString(36);
}

function extractTeamMentions(title: string, sport: "soccer" | "baseball" | "general"): string[] {
  const pool = sport === "baseball" ? BASEBALL_TEAMS : SOCCER_TEAMS;
  return pool.filter((team) =>
    title.toLowerCase().includes(team.toLowerCase()),
  );
}

function hostnameFrom(url: string): string {
  try {
    return new URL(url).hostname;
  } catch {
    return url;
  }
}

function toIso(pubDate: string): string {
  if (!pubDate) return new Date(0).toISOString();
  try {
    return new Date(pubDate).toISOString();
  } catch {
    return new Date(0).toISOString();
  }
}

// ---------------------------------------------------------------------------
// Static seed for baseball (fallback when feed is unreachable)
// ---------------------------------------------------------------------------

const BASEBALL_SEED: NewsArticle[] = [
  {
    id: "seed-bb-1",
    title: "MLB Power Rankings: Who's hot heading into the second half",
    summary: "A look at which teams are surging and which are fading as we approach the all-star break.",
    url: "https://www.mlb.com/news",
    pubDate: new Date().toISOString(),
    source: "MLB",
    sport: "baseball",
    teamMentions: [],
  },
  {
    id: "seed-bb-2",
    title: "Top pitching performances of the week",
    summary: "Five starters stood out this week with dominant outings across both leagues.",
    url: "https://www.mlb.com/news",
    pubDate: new Date().toISOString(),
    source: "MLB",
    sport: "baseball",
    teamMentions: [],
  },
  {
    id: "seed-bb-3",
    title: "Rookie watch: breakout stars making their mark in 2026",
    summary: "Several first-year players are turning heads with impressive early-season statistics.",
    url: "https://www.mlb.com/news",
    pubDate: new Date().toISOString(),
    source: "MLB",
    sport: "baseball",
    teamMentions: [],
  },
];

// ---------------------------------------------------------------------------
// Fetch and parse one feed URL
// ---------------------------------------------------------------------------

async function fetchFeed(
  url: string,
  sport: "soccer" | "baseball" | "general",
): Promise<NewsArticle[]> {
  const res = await fetch(url, {
    headers: { "User-Agent": "LanguageThreshold/1.0 (+https://app.languagethreshold.com)" },
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} from ${url}`);
  const xml = await res.text();
  const items = parseRssItems(xml);
  const host = hostnameFrom(url);
  const sourceName = SOURCE_NAMES[host] ?? host;

  return items.map((item) => ({
    id: simpleHash(item.title + item.link),
    title: item.title,
    summary: item.description.slice(0, 200),
    url: item.link,
    pubDate: toIso(item.pubDate),
    source: sourceName,
    sport,
    teamMentions: extractTeamMentions(item.title, sport),
  }));
}

// ---------------------------------------------------------------------------
// Request validation
// ---------------------------------------------------------------------------

const BodySchema = z.object({
  sport: z.enum(["soccer", "baseball", "general"]),
  favoriteTeam: z.string().max(80).nullable().optional(),
});

// ---------------------------------------------------------------------------
// Route handler
// ---------------------------------------------------------------------------

export const Route = createFileRoute("/api/sports-news")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let payload: z.infer<typeof BodySchema>;
        try {
          payload = BodySchema.parse(await request.json());
        } catch (e) {
          return new Response(
            JSON.stringify({ error: e instanceof Error ? e.message : "Invalid input" }),
            { status: 400, headers: { "Content-Type": "application/json" } },
          );
        }

        const feedUrls = FEEDS[payload.sport];
        let articles: NewsArticle[] = [];
        const errors: string[] = [];

        // Fetch all feeds for the sport in parallel, tolerating individual failures
        const results = await Promise.allSettled(
          feedUrls.map((url) => fetchFeed(url, payload.sport)),
        );

        for (const result of results) {
          if (result.status === "fulfilled") {
            articles = articles.concat(result.value);
          } else {
            const msg = result.reason instanceof Error ? result.reason.message : String(result.reason);
            errors.push(msg);
            Sentry.captureException(result.reason);
          }
        }

        // If baseball returned nothing, fall back to seed data
        if (payload.sport === "baseball" && articles.length === 0) {
          articles = [...BASEBALL_SEED];
        }

        if (articles.length === 0 && errors.length > 0) {
          return new Response(
            JSON.stringify({ articles: [], error: "News feeds unavailable — try again later." }),
            { status: 200, headers: { "Content-Type": "application/json" } },
          );
        }

        // Deduplicate by id
        const seen = new Set<string>();
        articles = articles.filter((a) => {
          if (seen.has(a.id)) return false;
          seen.add(a.id);
          return true;
        });

        // Sort by pubDate descending
        articles.sort(
          (a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime(),
        );

        // Promote favorite-team articles to the top
        const favTeam = payload.favoriteTeam?.trim().toLowerCase();
        if (favTeam) {
          const matching = articles.filter((a) =>
            a.title.toLowerCase().includes(favTeam) ||
            a.teamMentions.some((t) => t.toLowerCase().includes(favTeam)),
          );
          const rest = articles.filter(
            (a) =>
              !a.title.toLowerCase().includes(favTeam) &&
              !a.teamMentions.some((t) => t.toLowerCase().includes(favTeam)),
          );
          articles = [...matching, ...rest];
        }

        // Cap at 10
        articles = articles.slice(0, 10);

        return new Response(JSON.stringify({ articles }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      },
    },
  },
});
