type SectionHeadingProps = {
  id: string
  index: string
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'split'
}

export function SectionHeading({
  id,
  index,
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  if (align === 'split') {
    return (
      <div className="mb-12 grid gap-8 border-b border-edge pb-10 md:mb-16 md:grid-cols-[auto_1fr] md:items-end md:gap-12">
        <div className="font-display text-[4.5rem] leading-none tracking-tight text-accent-500 sm:text-[5.5rem]">
          {index}
        </div>
        <div>
          <p className="mb-3 text-[11px] font-semibold tracking-[0.28em] text-ink-400 uppercase">
            {eyebrow}
          </p>
          <h2
            id={id}
            className="max-w-3xl font-display text-3xl leading-[1.12] font-semibold tracking-tight text-ink-100 text-balance sm:text-4xl lg:text-5xl"
          >
            {title}
          </h2>
          {description ? (
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-300 sm:text-lg">
              {description}
            </p>
          ) : null}
        </div>
      </div>
    )
  }

  return (
    <div className="mb-12 border-b border-edge pb-10 md:mb-16">
      <div className="mb-4 flex items-baseline gap-4">
        <span className="font-display text-xl text-accent-500">{index}</span>
        <p className="text-[11px] font-semibold tracking-[0.28em] text-ink-400 uppercase">
          {eyebrow}
        </p>
      </div>
      <h2
        id={id}
        className="max-w-3xl font-display text-3xl leading-[1.12] font-semibold tracking-tight text-ink-100 text-balance sm:text-4xl lg:text-5xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-300 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}
