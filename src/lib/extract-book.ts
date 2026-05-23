// Client-side extraction of text from PDF and EPUB files.
// Returns the full text plus a list of chapter chunks suitable for translation
// (the server cap is 8,000 chars per request).

export interface BookChunk {
  title: string; // e.g. "Chapter 1" or detected EPUB chapter title
  text: string;
}

export interface ExtractedBook {
  title: string;
  chunks: BookChunk[];
}

const MAX_CHARS_PER_CHUNK = 6500; // safely under the 8,000 server cap
const HARD_TOTAL_CAP = 250_000; // ~250k chars across the whole book to keep things sane
const MAX_PDF_PAGES = 400;

function clean(text: string): string {
  return text
    .replace(/\u0000/g, "")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

/**
 * Split a long string into chunks <= MAX_CHARS_PER_CHUNK, breaking on
 * paragraph / sentence / word boundaries (in that order of preference).
 */
function splitIntoChunks(text: string): string[] {
  const t = clean(text).slice(0, HARD_TOTAL_CAP);
  if (t.length <= MAX_CHARS_PER_CHUNK) return [t];

  const out: string[] = [];
  let i = 0;
  while (i < t.length) {
    const end = Math.min(i + MAX_CHARS_PER_CHUNK, t.length);
    if (end >= t.length) {
      out.push(t.slice(i).trim());
      break;
    }
    const window = t.slice(i, end);
    // Prefer a paragraph break, then sentence end, then last whitespace
    const para = window.lastIndexOf("\n\n");
    const sent = Math.max(
      window.lastIndexOf(". "),
      window.lastIndexOf("! "),
      window.lastIndexOf("? "),
      window.lastIndexOf("。"),
      window.lastIndexOf("！"),
      window.lastIndexOf("？"),
    );
    const space = window.lastIndexOf(" ");
    let cut =
      para > MAX_CHARS_PER_CHUNK * 0.5
        ? para + 2
        : sent > MAX_CHARS_PER_CHUNK * 0.5
          ? sent + 2
          : space > MAX_CHARS_PER_CHUNK * 0.5
            ? space + 1
            : window.length;
    out.push(t.slice(i, i + cut).trim());
    i += cut;
  }
  return out.filter((s) => s.length > 0);
}

function chunksFromString(text: string): BookChunk[] {
  const parts = splitIntoChunks(text);
  if (parts.length === 1) return [{ title: "Full text", text: parts[0] }];
  return parts.map((p, i) => ({ title: `Chapter ${i + 1}`, text: p }));
}

function chunksFromTitledSections(sections: { title: string; text: string }[]): BookChunk[] {
  const out: BookChunk[] = [];
  for (const sec of sections) {
    const cleaned = clean(sec.text);
    if (!cleaned) continue;
    if (cleaned.length <= MAX_CHARS_PER_CHUNK) {
      out.push({ title: sec.title || `Chapter ${out.length + 1}`, text: cleaned });
    } else {
      // Sub-split a long chapter into multiple parts
      const parts = splitIntoChunks(cleaned);
      parts.forEach((p, i) =>
        out.push({
          title: parts.length > 1 ? `${sec.title} · Part ${i + 1}` : sec.title,
          text: p,
        }),
      );
    }
    // Honour the total-character cap across all chunks
    const totalSoFar = out.reduce((n, c) => n + c.text.length, 0);
    if (totalSoFar >= HARD_TOTAL_CAP) break;
  }
  if (out.length === 0) return [];
  return out;
}

export async function extractFromFile(file: File): Promise<ExtractedBook> {
  const name = file.name.replace(/\.[^.]+$/, "");
  const lower = file.name.toLowerCase();

  if (lower.endsWith(".pdf")) {
    const text = await extractPdf(file);
    return { title: name, chunks: chunksFromString(text) };
  }
  if (lower.endsWith(".epub")) {
    const sections = await extractEpubSections(file);
    const chunks =
      sections.length > 1
        ? chunksFromTitledSections(sections)
        : chunksFromString(sections.map((s) => s.text).join("\n\n"));
    return { title: name, chunks };
  }
  if (lower.endsWith(".txt") || file.type.startsWith("text/")) {
    const text = await file.text();
    return { title: name, chunks: chunksFromString(text) };
  }
  throw new Error("Unsupported file. Use PDF, EPUB, or TXT.");
}

async function extractPdf(file: File): Promise<string> {
  const pdfjs = await import("pdfjs-dist");
  const workerUrl = (await import("pdfjs-dist/build/pdf.worker.min.mjs?url")).default;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (pdfjs as any).GlobalWorkerOptions.workerSrc = workerUrl;

  const buf = await file.arrayBuffer();
  const doc = await pdfjs.getDocument({ data: buf }).promise;

  const maxPages = Math.min(doc.numPages, MAX_PDF_PAGES);
  let out = "";
  for (let i = 1; i <= maxPages; i++) {
    const page = await doc.getPage(i);
    const content = await page.getTextContent();
    const pageText = content.items
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .map((it: any) => (typeof it.str === "string" ? it.str : ""))
      .join(" ");
    out += pageText + "\n\n";
    if (out.length > HARD_TOTAL_CAP) break;
  }
  if (!out.trim()) throw new Error("Couldn't read text from this PDF (it may be scanned images).");
  return out;
}

async function extractEpubSections(file: File): Promise<{ title: string; text: string }[]> {
  const ePubMod = await import("epubjs");
  const ePub = ePubMod.default;
  const buf = await file.arrayBuffer();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const book: any = ePub(buf);
  await book.ready;

  // Map spine href → friendly title from the table of contents (when present)
  const titleByHref = new Map<string, string>();
  try {
    const nav = await book.loaded.navigation;
    const flatten = (items: unknown[]): void => {
      for (const raw of items ?? []) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const it: any = raw;
        if (it?.href && it?.label) {
          const key = String(it.href).split("#")[0];
          titleByHref.set(key, String(it.label).trim());
        }
        if (Array.isArray(it?.subitems) && it.subitems.length) flatten(it.subitems);
      }
    };
    flatten(nav?.toc ?? []);
  } catch {
    /* nav optional */
  }

  const spineItems: unknown[] = book.spine?.spineItems ?? [];
  const sections: { title: string; text: string }[] = [];
  let total = 0;
  let chapterNum = 0;
  for (const item of spineItems) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const it: any = item;
    try {
      const doc = await it.load(book.load.bind(book));
      const text =
        (doc?.body?.textContent as string | undefined) ??
        (doc?.documentElement?.textContent as string | undefined) ??
        "";
      const trimmed = clean(text);
      it.unload?.();
      if (trimmed.length < 80) continue; // skip cover / blank pages
      chapterNum += 1;
      const href = String(it.href ?? "").split("#")[0];
      const title = titleByHref.get(href) ?? `Chapter ${chapterNum}`;
      sections.push({ title, text: trimmed });
      total += trimmed.length;
      if (total > HARD_TOTAL_CAP) break;
    } catch {
      /* skip chapter */
    }
  }
  if (sections.length === 0) throw new Error("Couldn't read text from this EPUB.");
  return sections;
}
