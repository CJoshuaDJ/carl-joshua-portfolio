import { motion, useReducedMotion } from 'framer-motion'
import { skillCategories } from '../../data/content'
import { Section } from '../layout/Section'
import { SectionHeading } from '../ui/SectionHeading'

export function Skills() {
  const reduceMotion = useReducedMotion()

  return (
    <Section id="skills" ariaLabelledBy="skills-heading">
      <SectionHeading
        id="skills-heading"
        index="02"
        eyebrow="Skills"
        title="A toolkit built for shipping software"
        description="Web and software engineering skills first, supported by university fundamentals, mobile coursework, and security credentials."
        align="split"
      />

      <ul className="grid gap-px bg-edge sm:grid-cols-2">
        {skillCategories.map((category, index) => {
          const isLastOdd =
            index === skillCategories.length - 1 &&
            skillCategories.length % 2 === 1

          return (
            <motion.li
              key={category.title}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className={`group bg-surface-950 p-7 transition-colors duration-300 hover:bg-surface-900 sm:p-8 ${
                isLastOdd ? 'sm:col-span-2' : ''
              }`}
            >
              <div className="mb-5 flex items-baseline justify-between gap-3">
                <h3 className="font-display text-2xl font-semibold tracking-tight text-ink-100 transition-colors group-hover:text-accent-400">
                  {category.title}
                </h3>
                <span className="text-sm text-accent-500">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="border border-edge px-3 py-1.5 text-sm text-ink-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-500/50 hover:text-ink-100"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.li>
          )
        })}
      </ul>
    </Section>
  )
}
