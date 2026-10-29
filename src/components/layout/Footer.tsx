import { profile } from '../../data/content'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-edge px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.28em] text-accent-500 uppercase">
            Portfolio · {year}
          </p>
          <p className="mt-3 font-display text-4xl tracking-tight text-ink-100">
            {profile.name}
          </p>
          <p className="mt-2 text-sm text-ink-400">{profile.title}</p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="text-ink-300 hover:text-accent-500"
          >
            GitHub
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-ink-300 hover:text-accent-500"
          >
            LinkedIn
          </a>
          <a href="#home" className="text-ink-300 hover:text-accent-500">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}
