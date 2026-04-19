export function ClickableText({
  text,
  onWordClick,
}: {
  text: string;
  onWordClick: (word: string, sentence: string, x: number, y: number) => void;
}) {
  const tokens = text.split(/(\s+)/);
  return (
    <>
      {tokens.map((tok, i) => {
        if (/^\s+$/.test(tok)) return <span key={i}>{tok}</span>;
        const clean = tok.replace(/^[¿¡«"'(\[]+|[.,;:!?»"')\]]+$/g, "");
        if (!clean) return <span key={i}>{tok}</span>;
        return (
          <span
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
              onWordClick(clean, text, r.left + r.width / 2, r.bottom);
            }}
            className="cursor-pointer rounded transition-colors hover:text-gold hover:[text-decoration:underline] hover:[text-decoration-color:var(--color-gold)] hover:[text-decoration-thickness:1px] hover:[text-underline-offset:4px]"
          >
            {tok}
          </span>
        );
      })}
    </>
  );
}
