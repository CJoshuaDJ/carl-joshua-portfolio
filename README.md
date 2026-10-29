# Carl Joshua De Jesus — Portfolio

Modern developer portfolio built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and Lucide React.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:5173/

## Scripts

- `npm run dev` — start the Vite development server
- `npm run build` — typecheck and build for production
- `npm run preview` — preview the production build

## Customizing content

Update profile details, skills, experience, projects, certifications, and links in:

`src/data/content.ts`

### Resume download

Place your resume PDF at:

`public/resume.pdf`

The Hero and Contact “Resume” / “Download resume” buttons point to that file.

### Projects

The Projects section is currently an interim “personal projects in progress” state. When you have public personal projects, add them to the `projects` array in `src/data/content.ts` with real GitHub and demo URLs.
