// Client-side extraction of text from PDF and EPUB files.
// Returns { title, text } or throws an Error with a friendly message.

export interface ExtractedBook {
  title: string;
  text: string;
}

const MAX_CHARS = 7500; // server translate cap is 8000

function clip(text: string): string {
  const t = text.replace(/\s+/g, " ").trim();
  return t.length > MAX_CHARS ? t.slice(0, MAX_CHARS) : t;
}

export async function extractFromFile(file: File): Promise<ExtractedBook> {
  const name = file.name.replace(/\.[^.]+$/, "");
  const lower = file.name.toLowerCase();

  if (lower.endsWith(".pdf")) {
    return { title: name, text: clip(await extractPdf(file)) };
  }
  if (lower.endsWith(".epub")) {
    return { title: name, text: clip(await extractEpub(file)) };
  }
  if (lower.endsWith(".txt") || file.type.startsWith("text/")) {
    return { title: name, text: clip(await file.text()) };
  }
  throw new Error("Unsupported file. Use PDF, EPUB, or TXT.");
}

async function extractPdf(file: File): Promise<string> {
  const pdfjs = await import("pdfjs-dist");
  // Use the legacy worker via a Vite ?url import — worker file is bundled.
  const workerUrl = (await import("pdfjs-dist/build/pdf.worker.min.mjs?url")).default;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (pdfjs as any).GlobalWorkerOptions.workerSrc = workerUrl;

  const buf = await file.arrayBuffer();
  const doc = await pdfjs.getDocument({ data: buf }).promise;

  const maxPages = Math.min(doc.numPages, 40);
  let out = "";
  for (let i = 1; i <= maxPages; i++) {
    const page = await doc.getPage(i);
    const content = await page.getTextContent();
    const pageText = content.items
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .map((it: any) => (typeof it.str === "string" ? it.str : ""))
      .join(" ");
    out += pageText + "\n";
    if (out.length > MAX_CHARS * 1.2) break;
  }
  if (!out.trim()) throw new Error("Couldn't read text from this PDF (it may be scanned images).");
  return out;
}

async function extractEpub(file: File): Promise<string> {
  const ePubMod = await import("epubjs");
  const ePub = ePubMod.default;
  const buf = await file.arrayBuffer();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const book: any = ePub(buf);
  await book.ready;

  const spineItems: unknown[] = book.spine?.spineItems ?? [];
  let out = "";
  for (const item of spineItems) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const it: any = item;
    try {
      const doc = await it.load(book.load.bind(book));
      const text =
        (doc?.body?.textContent as string | undefined) ??
        (doc?.documentElement?.textContent as string | undefined) ??
        "";
      out += text + "\n";
      it.unload?.();
      if (out.length > MAX_CHARS * 1.2) break;
    } catch {
      /* skip chapter */
    }
  }
  if (!out.trim()) throw new Error("Couldn't read text from this EPUB.");
  return out;
}
