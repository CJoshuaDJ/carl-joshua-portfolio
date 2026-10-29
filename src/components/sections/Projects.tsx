import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import { profile, projects } from '../../data/content'
import { Section } from '../layout/Section'
import { Button } from '../ui/Button'
import { SectionHeading } from '../ui/SectionHeading'

export function Projects() {
  const reduceMotion = useReducedMotion()

  return (
    <Section id="projects" ariaLabelledBy="projects-heading">
      <SectionHeading
        id="projects-heading"
        index="04"
        eyebrow="Projects"
        title="Selected work"
        description="Public apps that show how I build, integrate, and ship — with live demos and source on GitHub."
        align="split"
      />

      <ul>
        {projects.map((project, index) => (
          <motion.li
            key={project.name}
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="group border-t border-edge py-10 transition-colors duration-300 last:border-b hover:bg-muted-fill/40 active:bg-muted-fill/50 md:py-12"
          >
            <article
              className={`grid gap-8 md:items-end ${
                index % 2 === 0
                  ? 'md:grid-cols-[1.2fr_0.8fr]'
                  : 'md:grid-cols-[0.8fr_1.2fr]'
              }`}
            >
              <div className={index % 2 === 1 ? 'md:order-2' : undefined}>
                <p className="text-[11px] font-semibold tracking-[0.24em] text-accent-500 uppercase">
                  Project {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink-100 transition-colors duration-300 group-hover:text-accent-400 sm:text-5xl lg:text-6xl">
                  {project.name}
                </h3>
                <p className="mt-5 max-w-xl text-sm leading-relaxed text-ink-300 sm:text-base">
                  {project.description}
                </p>
                <p className="mt-4 text-sm text-ink-400">{project.role}</p>
              </div>

              <div className={index % 2 === 1 ? 'md:order-1' : undefined}>
                <p className="text-xs leading-relaxed tracking-wide text-ink-400 uppercase">
                  {project.technologies.join(' · ')}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    variant="secondary"
                    className="min-h-10 px-4 py-2.5 text-xs"
                  >
                    <Github size={14} aria-hidden />
                    GitHub
                  </Button>
                  {project.demo ? (
                    <Button
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="min-h-10 px-4 py-2.5 text-xs"
                    >
                      Live demo
                      <ArrowUpRight size={14} aria-hidden />
                    </Button>
                  ) : null}
                </div>
              </div>
            </article>
          </motion.li>
        ))}
      </ul>

      <p className="mt-8 text-sm text-ink-400">
        More experiments and updates live on{' '}
        <a
          href={profile.links.github}
          target="_blank"
          rel="noreferrer"
          className="font-medium text-ink-100 underline decoration-edge underline-offset-4 transition-colors hover:text-accent-500 hover:decoration-accent-500 active:text-accent-500"
        >
          GitHub
        </a>
        .
      </p>
    </Section>
  )
}
