import type { LucideIcon } from "lucide-react";

export function EmptyState({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="fade-in flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <div className="relative mb-8">
        <div className="absolute inset-0 -m-6 rounded-full bg-gold/10 blur-2xl" />
        <div className="relative inline-flex h-24 w-24 items-center justify-center rounded-full border border-gold/30 bg-card/60 backdrop-blur">
          <Icon className="h-10 w-10 text-gold" strokeWidth={1.4} />
        </div>
      </div>
      <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
        {title}
      </h2>
      <div className="my-5 h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
      <p className="max-w-md font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
