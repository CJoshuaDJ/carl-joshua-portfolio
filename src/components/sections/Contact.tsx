import { motion, useReducedMotion } from 'framer-motion'
import { Check, Copy, FileText, Github, Linkedin, Mail, Send } from 'lucide-react'
import { useState } from 'react'
import { profile } from '../../data/content'
import { Section } from '../layout/Section'
import { Button } from '../ui/Button'
import { SectionHeading } from '../ui/SectionHeading'

export function Contact() {
  const reduceMotion = useReducedMotion()
  const [copied, setCopied] = useState(false)
  const emailSubject = encodeURIComponent('Hello Carl — portfolio inquiry')
  const gmailComposeHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}&su=${emailSubject}`

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard may be blocked on some browsers.
    }
  }

  return (
    <Section id="contact" ariaLabelledBy="contact-heading">
      <SectionHeading
        id="contact-heading"
        index="07"
        eyebrow="Contact"
        title="Let’s build something worth shipping"
        description="Open to junior software engineering roles where I can build, ship, and grow with a product team."
        align="split"
      />

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.45 }}
        className="grid gap-12 border border-edge p-8 sm:p-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:p-14"
      >
        <div>
          <p className="text-[11px] font-semibold tracking-[0.28em] text-accent-500 uppercase">
            {profile.availability}
          </p>
          <p className="mt-5 max-w-xl font-display text-3xl leading-[1.08] font-semibold tracking-tight text-ink-100 text-balance sm:text-4xl lg:text-5xl">
            Hiring a junior software engineer for web and product work?
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-300">
            Reach out by email or LinkedIn. I am ready to contribute to real
            software projects, learn quickly, and grow with the team.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={gmailComposeHref} target="_blank" rel="noreferrer">
              <Send size={16} aria-hidden />
              Send an email
            </Button>
            <Button
              as="button"
              variant="secondary"
              onClick={() => void handleCopyEmail()}
              aria-label="Copy email address"
            >
              {copied ? <Check size={16} aria-hidden /> : <Copy size={16} aria-hidden />}
              {copied ? 'Copied' : 'Copy email'}
            </Button>
            <Button href={profile.links.resume} download variant="ghost">
              <FileText size={16} aria-hidden />
              Download resume
            </Button>
          </div>
        </div>

        <ul className="divide-y divide-edge border-y border-edge" aria-label="Contact methods">
          <li>
            <a
              href={gmailComposeHref}
              target="_blank"
              rel="noreferrer"
              className="group/link flex items-center gap-3 py-5 text-sm font-medium text-ink-200 transition-all duration-200 hover:translate-x-1 hover:text-accent-500"
            >
              <Mail size={18} className="text-accent-500" aria-hidden />
              <span>{profile.email}</span>
            </a>
          </li>
          <li>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 py-5 text-sm font-medium text-ink-200 transition-all duration-200 hover:translate-x-1 hover:text-accent-500"
            >
              <Linkedin size={18} className="text-accent-500" aria-hidden />
              <span>LinkedIn</span>
            </a>
          </li>
          <li>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 py-5 text-sm font-medium text-ink-200 transition-all duration-200 hover:translate-x-1 hover:text-accent-500"
            >
              <Github size={18} className="text-accent-500" aria-hidden />
              <span>GitHub</span>
            </a>
          </li>
        </ul>
      </motion.div>
    </Section>
  )
}
