export function ClickableText({
  text,
  onWordClick,
}: {
  text: string;
  onWordClick: (word: string) => void;
}) {
  // Split keeping punctuation/spaces as separators
  const tokens = text.split(/(\s+)/);
  return (
    <>
      {tokens.map((tok, i) => {
        if (/^\s+$/.test(tok)) return <span key={i}>{tok}</span>;
        // Strip leading/trailing punctuation for the click payload
        const clean = tok.replace(/^[¿¡«"'(\[]+|[.,;:!?»"')\]]+$/g, "");
        if (!clean) return <span key={i}>{tok}</span>;
        return (
          <span
            key={i}
            onClick={() => onWordClick(clean)}
            className="cursor-pointer rounded transition-colors hover:text-gold hover:[text-decoration:underline] hover:[text-decoration-color:var(--color-gold)] hover:[text-decoration-thickness:1px] hover:[text-underline-offset:4px]"
          >
            {tok}
          </span>
        );
      })}
    </>
  );
}
