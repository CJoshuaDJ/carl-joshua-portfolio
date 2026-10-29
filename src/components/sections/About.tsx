import { motion, useReducedMotion } from 'framer-motion'
import { profile } from '../../data/content'
import { Section } from '../layout/Section'
import { SectionHeading } from '../ui/SectionHeading'

export function About() {
  const reduceMotion = useReducedMotion()

  return (
    <Section id="about" ariaLabelledBy="about-heading">
      <SectionHeading
        id="about-heading"
        index="01"
        eyebrow="About"
        title="Software engineer first — adaptable, practical, ready to contribute"
        align="split"
      />

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16"
      >
        <p className="font-display text-2xl leading-[1.2] font-semibold tracking-tight text-ink-100 text-balance sm:text-3xl lg:text-4xl">
          I build software, integrate systems, and care about quality through
          release.
        </p>

        <div className="space-y-5">
          {profile.about.map((paragraph, i) => (
            <p
              key={paragraph}
              className={`leading-relaxed text-ink-300 ${
                i === 0 ? 'text-base sm:text-lg' : 'text-sm sm:text-base'
              }`}
            >
              {paragraph}
            </p>
          ))}
          <p className="border-t border-edge pt-5 text-sm text-ink-400">
            {profile.edge}
          </p>
        </div>
      </motion.div>
    </Section>
  )
}
