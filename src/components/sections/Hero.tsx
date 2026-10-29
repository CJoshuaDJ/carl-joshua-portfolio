import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDownRight, FileText, Github, Linkedin } from 'lucide-react'
import heroPortraitDark from '../../assets/hero-portrait-dark.png'
import heroPortraitLight from '../../assets/hero-portrait.png'
import { profile } from '../../data/content'
import { useTheme } from '../../hooks/useTheme'
import { Button } from '../ui/Button'

export function Hero() {
  const { theme } = useTheme()
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-20 sm:pt-24 md:pt-28"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[1.1fr_0.9fr] items-center gap-4 px-4 pb-12 sm:min-h-[calc(100svh-6rem)] sm:gap-8 sm:px-6 sm:pb-16 lg:grid-cols-[1fr_0.95fr] lg:gap-12 lg:px-8 lg:pb-20">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 min-w-0"
        >
          <p className="text-[9px] font-semibold tracking-[0.16em] text-accent-500 uppercase sm:text-[11px] sm:tracking-[0.3em]">
            <span className="sm:hidden">Portfolio</span>
            <span className="hidden sm:inline">Portfolio · {profile.title}</span>
          </p>

          <h1
            id="hero-heading"
            className="mt-2 font-display text-[clamp(1.5rem,5.5vw,5.75rem)] leading-[1.08] font-semibold tracking-tight text-ink-100 sm:mt-5"
          >
            Carl Joshua
            <span className="mt-0.5 block text-accent-500 sm:mt-1">
              De Jesus
            </span>
          </h1>

          <p className="mt-3 max-w-md text-xs leading-relaxed text-ink-300 sm:mt-7 sm:text-base sm:text-lg">
            <span className="sm:hidden">
              Junior software engineer building web apps with React and
              TypeScript — clean UI, APIs, and software that holds up in real
              use.
            </span>
            <span className="hidden sm:inline">{profile.intro}</span>
          </p>

          <div className="mt-4 flex flex-col gap-2 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-3">
            <Button
              href="#projects"
              className="min-h-10 px-3 py-2 text-xs sm:min-h-0 sm:px-6 sm:py-3.5 sm:text-sm"
            >
              View projects
              <ArrowDownRight size={14} aria-hidden />
            </Button>
            <Button
              href="#contact"
              variant="secondary"
              className="min-h-10 px-3 py-2 text-xs sm:min-h-0 sm:px-6 sm:py-3.5 sm:text-sm"
            >
              Contact me
            </Button>
          </div>

          <ul
            className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 sm:mt-8 sm:gap-5"
            aria-label="Social links"
          >
            <li>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="tap-target inline-flex items-center gap-1.5 text-xs font-medium text-ink-300 transition-colors hover:text-accent-500 active:text-accent-500 sm:gap-2 sm:text-sm"
              >
                <Github size={14} aria-hidden />
                GitHub
              </a>
            </li>
            <li>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="tap-target inline-flex items-center gap-1.5 text-xs font-medium text-ink-300 transition-colors hover:text-accent-500 active:text-accent-500 sm:gap-2 sm:text-sm"
              >
                <Linkedin size={14} aria-hidden />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={profile.links.resume}
                download
                className="tap-target inline-flex items-center gap-1.5 text-xs font-medium text-ink-300 transition-colors hover:text-accent-500 active:text-accent-500 sm:gap-2 sm:text-sm"
              >
                <FileText size={14} aria-hidden />
                Resume
              </a>
            </li>
          </ul>

          <p className="mt-4 text-[10px] tracking-wide text-ink-400 sm:mt-8 sm:text-xs sm:tracking-[0.18em] sm:uppercase">
            {profile.availability}
            <span className="mx-1.5 text-accent-500">·</span>
            <span className="hidden sm:inline">
              Toggle theme to see the look change
            </span>
            <span className="sm:hidden">Theme changes outfit</span>
          </p>
        </motion.div>

        <motion.aside
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{
            duration: 0.85,
            delay: reduceMotion ? 0 : 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative min-w-0 self-center"
          aria-label="Profile portrait"
        >
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-1.5 border border-accent-500/35 sm:-inset-3 md:-inset-4"
            />
            <div
              aria-hidden
              className="absolute top-3 -right-1 hidden h-16 w-16 border border-edge sm:top-4 sm:-right-2 sm:block sm:h-24 sm:w-24 lg:-right-4"
            />

            <div className="group/portrait relative overflow-hidden bg-surface-850">
              <div className="relative aspect-4/5 overflow-hidden">
                <img
                  src={heroPortraitDark}
                  alt=""
                  aria-hidden={theme !== 'dark'}
                  className={`absolute inset-0 h-full w-full object-cover object-[center_18%] transition-all duration-700 ease-out motion-safe:group-hover/portrait:scale-[1.035] ${
                    theme === 'dark'
                      ? 'opacity-100'
                      : 'pointer-events-none opacity-0'
                  }`}
                />
                <img
                  src={heroPortraitLight}
                  alt={`${profile.name} — professional portrait`}
                  className={`absolute inset-0 h-full w-full object-cover object-[center_18%] transition-all duration-700 ease-out motion-safe:group-hover/portrait:scale-[1.035] ${
                    theme === 'light'
                      ? 'opacity-100'
                      : 'pointer-events-none opacity-0'
                  }`}
                />
              </div>
            </div>

            <div className="mt-2 hidden items-end justify-between gap-4 border-t border-edge pt-4 sm:mt-4 sm:flex">
              <div className="min-w-0">
                <p className="font-display text-lg font-semibold tracking-tight text-ink-100">
                  Featured portrait
                </p>
                <p className="mt-1 text-xs tracking-wide text-ink-400 uppercase">
                  Outfit shifts with light / dark
                </p>
              </div>
              <p className="shrink-0 font-display text-3xl font-semibold text-accent-500">
                {theme === 'dark' ? '01' : '02'}
              </p>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  )
}
