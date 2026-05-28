import type { MorphForm } from './types'

const SIZE_CLASSES = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-xl',
} as const

/**
 * Renders a verb form as stem·ending with:
 * - stem in foreground color
 * - dot in muted gold (decorative separator)
 * - ending in gold (the key morpheme)
 * - italic note for irregular forms
 */
export function MorphDisplay({
  form,
  size = 'md',
}: {
  form: MorphForm
  size?: 'sm' | 'md' | 'lg'
}) {
  const sizeClass = SIZE_CLASSES[size]

  return (
    <span className={`inline-flex items-baseline gap-0 font-mono ${sizeClass}`}>
      <span style={{ color: 'var(--foreground)' }}>{form.stem}</span>
      <span
        style={{ color: 'var(--gold)', opacity: 0.45 }}
        aria-hidden
        className="mx-[1px] select-none"
      >
        ·
      </span>
      <span style={{ color: 'var(--gold)' }}>{form.ending}</span>
      {form.irregular && (
        <span
          className="ml-1.5 font-sans italic"
          style={{ color: 'var(--muted-foreground)', fontSize: '0.72em' }}
        >
          {form.irregularNote ?? 'irreg.'}
        </span>
      )}
    </span>
  )
}
