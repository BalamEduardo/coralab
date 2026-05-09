# Coralab Project Context

## What This Project Is

Coralab is a Spanish-language marketing landing page for a digital studio. The site presents Coralab as a studio for clear, practical web, product, UX/UI, and design-system work. It is mostly static and section-driven, with local brand assets, SEO metadata, social images, and a contact CTA.

## Current Stack

- Next.js `16.2.2`
- React `19.2.4`
- TypeScript
- Tailwind CSS v4 via `@tailwindcss/postcss`
- Framer Motion
- Lenis for smooth desktop wheel scrolling
- Lucide React icons
- npm with `package-lock.json`

Important: this is a newer Next.js version. Future sessions should read local docs in `node_modules/next/dist/docs/` before changing Next-specific code.

## Main Files And Folders

- `src/app/layout.tsx`: root HTML shell, global metadata, icons, Open Graph/Twitter metadata, schema.org JSON-LD, font class, and `LenisProvider`.
- `src/app/(marketing)/layout.tsx`: marketing layout wrapper, expected to render navbar/footer around the page.
- `src/app/(marketing)/page.tsx`: home page composition. It renders `Hero`, `FuncionSection`, `ServicesSection`, `ProcesoSection`, `WorkSection`, and `ContactSection`.
- `src/app/globals.css`: Tailwind v4 import, CSS design tokens, global styles, font utility classes, Lenis styles, and shared section helpers.
- `src/app/robots.ts`: robots metadata route for `https://coralab.dev`.
- `src/app/sitemap.ts`: sitemap metadata route.
- `src/app/opengraph-image.tsx`: generated 1200x630 Open Graph image using `next/og`.
- `src/app/twitter-image.tsx`: generated 1200x600 Twitter image using `next/og`.
- `src/components/sections/`: page sections and marketing layout pieces.
- `src/components/ui/`: reusable primitives such as `Button`, `Card`, `Container`, `Eyebrow`, `Input`, `Section`, and `TextLink`.
- `src/components/LenisProvider.tsx`: client-only smooth scroll setup. It disables Lenis for reduced motion and coarse pointers.
- `src/lib/fonts.ts`: Manrope via `next/font/google`, exposed as `--font-coralab-sans`.
- `src/lib/types.ts`: shared UI type unions.
- `src/lib/utils.ts`: minimal `cn` class join helper.
- `public/brand/`: Coralab logo, isotipo, and hero device mockup.
- `public/about/`: about imagery.
- `public/Project/`: project/case-study imagery.
- `output/`: generated screenshots and Playwright artifacts from prior visual work.

## Page Structure

The marketing home page is assembled from sections:

1. `Hero`: first viewport with Coralab positioning, CTA links, brand isotipo, and device mockup.
2. `FuncionSection`: problem/friction framing for unclear digital presence.
3. `ServicesSection`: service offering cards.
4. `ProcesoSection`: process steps.
5. `WorkSection`: case-study previews and testimonial.
6. `ContactSection`: contact CTA, email capture UI, mailto link, and dashboard-style preview.

Navigation anchors currently target page sections such as `/#funcion`, `/#servicios`, `/#proceso`, `/#casos`, and `/#contacto`.

## Design System Notes

- The palette is defined in `src/app/globals.css`: off-white background, white surface, black foreground, muted text, soft border, and coral accent.
- Tailwind theme tokens are exposed through `@theme inline`.
- Existing components favor small radii, thin borders, restrained shadows, large editorial headings, and direct Spanish copy.
- Icons come from `lucide-react`.
- The repo uses `&ntilde;`, `&aacute;`, and similar HTML entities in JSX in some places. Match nearby file style when editing copy.
- Some existing files show mojibake in terminal output for accented Spanish text. Inspect in an editor or preserve existing encoding when possible.

## Development Commands

```bash
npm install
npm run dev
npm run lint
npm run build
npm run start
```

Use `npm run lint` for normal code edits. Use `npm run build` when changes touch routing, metadata, Next config, generated image routes, fonts, or production behavior.

## Configuration Notes

- `next.config.ts` sets global security headers including CSP, frame denial, content type nosniff, referrer policy, permissions policy, and DNS prefetch.
- Current CSP only allows same-origin connections and images from self/data/blob. External scripts, analytics, APIs, or media require an intentional CSP update.
- `tsconfig.json` is strict, uses `moduleResolution: "bundler"`, React JSX runtime, and `@/*` path alias to `./src/*`.
- ESLint uses `eslint.config.mjs` with Next linting.

## Working Tree Warning

At the time this context file was created, the repository had many pre-existing staged/modified files and generated screenshots. Future sessions should assume those are user or prior-session changes and avoid reverting them unless the user explicitly asks.

## Safe Change Guidance

- For new sections, compose from `src/components/ui/` and export through `src/components/sections/index.ts` if needed.
- For new assets, put stable public assets under `public/` and render with `next/image`.
- For metadata or canonical URL changes, update `src/app/layout.tsx`, `src/app/sitemap.ts`, `src/app/robots.ts`, and social image routes together.
- For contact behavior, note that the current form is presentational: the button is `type="button"` and there is no submit handler or backend endpoint.
- Before introducing client-side behavior, check whether it can remain a server component. Add `"use client"` only when state, effects, event handlers, or browser APIs are necessary.
