# Project Guidelines

## Code Style
- Use TypeScript and React function components with named exports, matching existing patterns in `components/*.tsx`.
- Follow the existing Tailwind + shadcn/ui style. Prefer composing classes with `cn()` from `lib/utils.ts` when variants or conditional classes are involved.
- Keep section components presentational and focused; avoid introducing heavy business logic into `app/page.tsx`.
- Use semantic HTML sections with stable `id` anchors for navigation links.

## Architecture
- This is a Next.js App Router landing page app.
- `app/page.tsx` composes top-level sections in order: header, hero, institutions, about, contact, footer.
- `components/` contains page sections and shared wrappers.
- `components/ui/` contains reusable UI primitives (Radix-based shadcn/ui components).
- `lib/utils.ts` provides shared utility helpers (`cn`).

## Build and Test
- Install dependencies: `pnpm install`
- Run dev server: `pnpm dev`
- Build production app: `pnpm build`
- Run production server: `pnpm start`
- Lint: `pnpm lint`
- There is currently no dedicated test script; if adding tests, also add corresponding npm scripts.

## Conventions
- Preserve the existing section-driven page composition pattern in `app/page.tsx`.
- For interactive components, add `"use client"` only where needed.
- Prefer `lucide-react` icons and existing UI primitives before adding new dependencies.
- Keep styling in Tailwind utility classes and project CSS variables (`app/globals.css`) instead of ad hoc inline styles.

## Pitfalls
- `next.config.mjs` sets `typescript.ignoreBuildErrors = true`; type issues may not fail production builds. Treat TypeScript errors as real and resolve them before merging.
- `next.config.mjs` sets `images.unoptimized = true`; do not assume Next image optimization behavior.
- This repo is linked to v0. Keep changes consistent with current structure so future v0-driven updates remain easy to merge.
