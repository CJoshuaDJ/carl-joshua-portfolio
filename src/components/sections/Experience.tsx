import { motion, useReducedMotion } from 'framer-motion'
import { experiences } from '../../data/content'
import { Section } from '../layout/Section'
import { SectionHeading } from '../ui/SectionHeading'

export function Experience() {
  const reduceMotion = useReducedMotion()

  return (
    <Section id="experience" ariaLabelledBy="experience-heading">
      <SectionHeading
        id="experience-heading"
        index="03"
        eyebrow="Experience"
        title="Software engineering experience"
        description="Roles focused on building software and validating it — from implementation to release quality."
        align="split"
      />

      <ol>
        {experiences.map((item, index) => (
          <motion.li
            key={`${item.company}-${item.role}`}
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="group border-t border-edge py-10 transition-colors duration-300 last:border-b hover:bg-muted-fill/30 md:py-14"
          >
            <article className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
              <div>
                <p className="font-display text-6xl leading-none text-accent-500 transition-transform duration-300 group-hover:translate-x-1">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-6 font-display text-3xl leading-tight font-semibold tracking-tight text-ink-100 transition-colors group-hover:text-accent-400 sm:text-4xl">
                  {item.role}
                </h3>
                <p className="mt-3 text-lg font-medium text-ink-200">
                  {item.company}
                </p>
                {item.period ? (
                  <p className="mt-2 text-sm tracking-wide text-ink-400 uppercase">
                    {item.period}
                  </p>
                ) : null}
              </div>

              <div>
                <p className="text-base leading-relaxed text-ink-300 sm:text-lg">
                  {item.summary}
                </p>
                <ul className="mt-7 space-y-4">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 text-sm leading-relaxed text-ink-300 sm:text-base"
                    >
                      <span
                        aria-hidden
                        className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent-500"
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </motion.li>
        ))}
      </ol>
    </Section>
  )
}
