export const profile = {
  name: 'Carl Joshua De Jesus',
  title: 'Junior Software Engineer',
  subtitle: 'Web Developer',
  email: 'cjoshuadejesus27@gmail.com',
  availability: 'Open to opportunities',
  intro:
    'Junior software engineer focused on building web applications. I work with React and TypeScript to create clean, reliable interfaces, integrate with APIs, and help ship software that holds up in real use.',
  edge:
    'Comfortable across frontend, integration, and quality — with a practical foundation that includes cybersecurity and networking certifications.',
  about: [
    'I am an Information Technology graduate specializing in Web and Mobile Applications, with experience as a junior software engineer at Lightreach. My background includes both building software and validating it through QA, which helps me think about features from implementation through release.',
    'I care about clear UI, solid engineering habits, API integration, and collaborative delivery. I am looking for junior software engineering roles where I can contribute to production work and keep growing as an engineer.',
    'Alongside my engineering focus, I hold IT Specialist – Cybersecurity and Cisco CCNA credentials — useful context for building more thoughtful, reliable systems, not a separate career track.',
  ],
  links: {
    github: 'https://github.com/CJoshuaDJ',
    linkedin: 'https://www.linkedin.com/in/carl-joshua-de-jesus-96b89733b/',
    resume: '/resume.pdf',
  },
} as const

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'This site', href: '#this-site' },
  { label: 'Contact', href: '#contact' },
] as const

export const siteNotes = {
  purpose: [
    'This portfolio is a living product sample — not just a brochure. It presents my experience, projects, and credentials the way I would ship a real frontend: clear structure, responsive layout, and careful interaction details.',
    'I built it to help hiring teams quickly see how I think about UI, engineering habits, and delivery. Every project linked here is real work with public source and a live demo.',
  ],
  stack: [
    { name: 'React', detail: 'Component UI and client state' },
    { name: 'TypeScript', detail: 'Typed application code' },
    { name: 'Vite', detail: 'Fast local dev and production builds' },
    { name: 'Tailwind CSS', detail: 'Utility-first styling and theming' },
    { name: 'Framer Motion', detail: 'Section and interaction motion' },
    { name: 'Lucide React', detail: 'Icon system' },
    { name: 'Credly embeds', detail: 'Verified certification badges' },
    { name: 'Vercel', detail: 'Hosting and production deploys' },
  ],
  highlights: [
    'Light and dark themes with a portrait that changes outfit',
    'Accessible navigation patterns, skip link, and keyboard-friendly controls',
    'Selected work includes JobTrack and BugBoard with live demos',
  ],
  repo: 'https://github.com/CJoshuaDJ/carl-joshua-portfolio',
} as const

export const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    title: 'Backend & Data',
    skills: ['Node.js', 'REST APIs', 'Python', 'C#', 'Java', 'PHP', 'SQL', 'Supabase'],
  },
  {
    title: 'Languages & Fundamentals',
    skills: ['OOP', 'Java', 'C', 'C++', 'TypeScript', 'SQL'],
  },
  {
    title: 'Engineering & Delivery',
    skills: [
      'Responsive Web Development',
      'API Integration',
      'Software Testing',
      'Git',
      'GitHub',
      'Pull Requests & Code Review',
      'Cursor',
      'AI-Assisted Development',
    ],
  },
  {
    title: 'Additional',
    skills: [
      'Swift',
      'Android Studio',
      'Cybersecurity fundamentals',
      'Networking fundamentals (CCNA)',
    ],
  },
] as const

export const experiences = [
  {
    role: 'Junior Software Engineer',
    company: 'Lightreach',
    period: 'Oct 2025 – Apr 2026',
    summary:
      'Contributed to multiple client projects in a startup environment — including NetRanks, SetMaker, and Lightreach Compress — building and improving web applications across frontend, integrations, and collaborative delivery.',
    bullets: [
      'Developed, maintained, and improved web applications by building responsive UIs, implementing features, and integrating backend functionality with the team.',
      'On NetRanks: enhanced frontend development, maintained existing features, and refactored components to help organize and improve the codebase.',
      'On SetMaker: revamped the frontend interface, shipped new functionality, and worked on backend integrations for payments, subscriptions, and billing workflows.',
      'On Lightreach Compress: built the frontend interface, implemented responsive layouts and interactions, and tested UI behavior against mock backend APIs.',
      'Managed GitHub workflows across projects — creating and reviewing pull requests, handling branches and code changes, and supporting collaborative version control.',
      'Used AI-assisted development tools (Cursor, Claude, and ChatGPT) to speed up coding, debugging, refactoring, and troubleshooting.',
    ],
  },
  {
    role: 'IT Intern / Manual Software QA Tester',
    company: 'Go Negosyo',
    period: null as string | null,
    summary:
      'Supported IT operations and performed manual software quality assurance testing.',
    bullets: [
      'Performed manual software QA testing to validate application behavior before release.',
      'Identified issues and communicated findings to support a stronger quality process.',
      'Supported IT operations and day-to-day technical workflows during the internship.',
    ],
  },
] as const

export const projects: readonly {
  name: string
  description: string
  technologies: readonly string[]
  role: string
  github: string
  demo: string | null
}[] = [
  {
    name: 'JobTrack',
    description:
      'A personal job application tracker for organizing roles, statuses, notes, and next steps. Supports search, status filters, dashboard stats, and local browser storage.',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Lucide React'],
    role: 'Solo developer — designed and built the full frontend application, including CRUD flows, filtering, and UI polish.',
    github: 'https://github.com/CJoshuaDJ/job-application-tracker',
    demo: 'https://job-application-tracker-bay-psi.vercel.app',
  },
  {
    name: 'BugBoard',
    description:
      'A QA bug tracker with a kanban board for reporting, triaging, and resolving issues. Includes severity levels, reproduction details, search and filters, drag-and-drop status moves, and local browser storage.',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Lucide React'],
    role: 'Solo developer — designed and built the full frontend application, including kanban workflows, drag-and-drop triage, and editorial UI polish.',
    github: 'https://github.com/CJoshuaDJ/qa-bug-board',
    demo: 'https://qa-bug-board.vercel.app',
  },
]

export const certifications = [
  {
    name: 'IT Specialist – Cybersecurity',
    issuer: 'Certiport',
    credlyBadgeId: 'b0d04e65-0532-4d1a-bc1c-ec82ab4aa7b6',
    credlyUrl:
      'https://www.credly.com/badges/b0d04e65-0532-4d1a-bc1c-ec82ab4aa7b6',
  },
  {
    name: 'Cisco CCNA',
    issuer: 'Cisco',
    credlyBadgeId: 'd4e07381-dbae-4c85-ae82-f06b6d1ccf49',
    credlyUrl:
      'https://www.credly.com/badges/d4e07381-dbae-4c85-ae82-f06b6d1ccf49',
  },
] as const
