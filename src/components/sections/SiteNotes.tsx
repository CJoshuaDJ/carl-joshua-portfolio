import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import { siteNotes } from '../../data/content'
import { Section } from '../layout/Section'
import { Button } from '../ui/Button'
import { SectionHeading } from '../ui/SectionHeading'

export function SiteNotes() {
  const reduceMotion = useReducedMotion()

  return (
    <Section id="this-site" ariaLabelledBy="this-site-heading">
      <SectionHeading
        id="this-site-heading"
        index="06"
        eyebrow="This site"
        title="How this portfolio was built"
        description="Purpose, process, and the tech stack behind the page you’re on."
        align="split"
      />

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.45 }}
        className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14"
      >
        <div className="space-y-5">
          <p className="text-[11px] font-semibold tracking-[0.24em] text-accent-500 uppercase">
            Purpose
          </p>
          {siteNotes.purpose.map((paragraph) => (
            <p
              key={paragraph}
              className="text-base leading-relaxed text-ink-300 sm:text-lg"
            >
              {paragraph}
            </p>
          ))}

          <ul className="space-y-3 border-t border-edge pt-6">
            {siteNotes.highlights.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-relaxed text-ink-300 sm:text-base"
              >
                <span
                  aria-hidden
                  className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent-500"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="pt-2">
            <Button
              href={siteNotes.repo}
              target="_blank"
              rel="noreferrer"
              variant="secondary"
              className="min-h-10"
            >
              <Github size={16} aria-hidden />
              View portfolio source
              <ArrowUpRight size={14} aria-hidden />
            </Button>
          </div>
        </div>

        <div className="border border-edge bg-surface-900/40 p-6 sm:p-8">
          <p className="text-[11px] font-semibold tracking-[0.24em] text-accent-500 uppercase">
            Tech stack
          </p>
          <ul className="mt-5 divide-y divide-edge">
            {siteNotes.stack.map((item) => (
              <li
                key={item.name}
                className="flex flex-col gap-1 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <span className="font-display text-lg font-semibold tracking-tight text-ink-100">
                  {item.name}
                </span>
                <span className="text-sm text-ink-400 sm:text-right">
                  {item.detail}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </Section>
  )
}
