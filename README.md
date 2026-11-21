# Karim Tamer — Portfolio

Personal portfolio for a Flutter developer and NTI instructor, built as a
fast, accessible, content-driven Next.js application.

## Stack

- **Next.js 16** (App Router, static prerendering)
- **React 19**
- **TypeScript** (strict)
- **Tailwind CSS v4** (token-based design system)
- **next-themes** (dark-first theming with OS-preference fallback)
- **Lucide React** (icons)

## Architecture

```text
src/
├── app/                  # Routes only
│   ├── page.tsx          # Homepage: hero, proof, work, experience,
│   │                     # teaching, about, contact
│   ├── projects/         # Full project archive index
│   ├── work/[slug]/      # Per-project detail pages + OG image generation
│   └── api/contact/      # Retired contact endpoint (HTTP 410)
├── components/
│   ├── sections/         # One component per homepage section
│   ├── case-study/       # Detail-page building blocks
│   ├── shared/           # Reusable domain primitives
│   └── layout/           # Navigation, footer, theme
├── data/                 # Single source of truth for all site content
└── types/                # Shared TypeScript contracts
```

Content is fully data-driven: `src/data/registry.ts` is the single registry
for all projects (flagship systems, selected personal work, NTI curriculum).
Homepage previews, the project archive, detail pages, sitemap entries, and
derived counts all consume this registry — no duplicated facts.

## Routes

- `/` — curated homepage (four flagship projects + More Projects index)
- `/work/<slug>` — one detail page per registered project
- `/projects` — complete project archive

Legacy `/projects/<slug>` URLs permanently redirect to `/work/<slug>`.

## Images

All media lives in `public/images` (WEBP). Every image renders through
`next/image` with explicit `sizes`; only above-the-fold assets use
`priority`. Portrait screenshots render uncropped at a capped width;
landscape composites use a balanced 3:2 mask. See
`src/components/shared/media-figure.tsx`.

## Development

```bash
npm install
npm run dev        # local development server
```

## Production

```bash
npm run lint       # ESLint
npx tsc --noEmit   # type check
npm run build      # optimized production build
npm start          # serve the production build
```

## Contact data / environment

The contact form submits directly from the browser to the Web3Forms endpoint.
Its `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` is a public form access key, not a
server secret. Copy `.env.example` to `.env.local` and set your Web3Forms
access key there.

For Vercel, configure `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in the project's
environment variables for the deployments that need it, then redeploy.
Changes to `NEXT_PUBLIC_*` variables are included in the browser bundle at
build time. Do not use this variable for any other secret credentials.
