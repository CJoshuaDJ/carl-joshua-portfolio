import { motion, useReducedMotion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { certifications } from '../../data/content'
import { Section } from '../layout/Section'
import { CredlyBadge } from '../ui/CredlyBadge'
import { SectionHeading } from '../ui/SectionHeading'

export function Certifications() {
  const reduceMotion = useReducedMotion()

  return (
    <Section id="certifications" ariaLabelledBy="certifications-heading">
      <SectionHeading
        id="certifications-heading"
        index="05"
        eyebrow="Certifications"
        title="Networking & cybersecurity credentials"
        description="Verified certifications in cybersecurity and networking that strengthen how I approach secure, reliable systems."
        align="split"
      />

      <ul className="grid gap-5 md:grid-cols-2 md:gap-6">
        {certifications.map((cert, index) => (
          <motion.li
            key={cert.name}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            className="group flex h-full flex-col border border-edge bg-surface-900/40 transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/50 hover:bg-surface-850"
          >
            <div className="border-b border-edge px-6 py-5 sm:px-7">
              <p className="text-[11px] font-semibold tracking-[0.24em] text-accent-500 uppercase">
                {String(index + 1).padStart(2, '0')} · {cert.issuer}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-ink-100 transition-colors group-hover:text-accent-400 sm:text-2xl">
                {cert.name}
              </h3>
            </div>

            <div className="flex flex-1 flex-col items-center justify-between gap-5 px-6 py-8 sm:px-7">
              {cert.credlyBadgeId ? (
                <CredlyBadge
                  badgeId={cert.credlyBadgeId}
                  className="w-full"
                />
              ) : null}
              {cert.credlyUrl ? (
                <a
                  href={cert.credlyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-ink-100 underline decoration-edge underline-offset-4 transition-colors hover:text-accent-500 hover:decoration-accent-500"
                >
                  Verify on Credly
                  <ExternalLink
                    size={14}
                    aria-hidden
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              ) : null}
            </div>
          </motion.li>
        ))}
      </ul>
    </Section>
  )
}
