import { Menu, X } from 'lucide-react'
import { useEffect, useId, useRef, useState } from 'react'
import { navLinks, profile } from '../../data/content'
import { ThemeToggle } from '../ui/ThemeToggle'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuId = useId()
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    window.addEventListener('keydown', onKeyDown)

    const firstLink = menuRef.current?.querySelector('a')
    firstLink?.focus()

    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? 'border-b border-edge bg-surface-950/92 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <a
          href="#home"
          className="tap-target flex items-baseline gap-2 rounded-sm"
        >
          <span className="font-display text-xl tracking-tight text-ink-100">
            {profile.name.split(' ')[0]}
          </span>
          <span className="text-[10px] font-semibold tracking-[0.22em] text-accent-500 uppercase">
            Portfolio
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover-link inline-flex px-3 py-2 text-sm text-ink-300"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="ml-2">
            <ThemeToggle />
          </li>
          <li>
            <a href="#contact" className="btn-primary ml-3 px-4 py-2 text-xs">
              Contact
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            ref={menuButtonRef}
            type="button"
            className="tap-target inline-flex h-10 w-10 items-center justify-center border border-edge text-ink-100 transition-colors hover:border-accent-500 hover:text-accent-500 active:bg-muted-fill"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
          </button>
        </div>
      </nav>

      {open ? (
        <div
          id={menuId}
          ref={menuRef}
          className="border-t border-edge bg-surface-950 px-4 py-5 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="tap-target flex px-2 py-3 text-base text-ink-200 transition-colors hover:text-accent-500 active:text-accent-500"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="btn-primary mt-3 w-full"
                onClick={() => setOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  )
}
