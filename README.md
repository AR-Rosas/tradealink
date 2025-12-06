# Tradealink — $1,500 Nuxt Studio Web Development + Free Tools Directory

[![Nuxt UI](https://img.shields.io/badge/Built%20with-Nuxt%20UI-00DC82?logo=nuxt&labelColor=020420)](https://ui.nuxt.com)

Tradealink offers a focused, fixed-price engagement: $1,500 for one Nuxt Studio web development task. We design, build, and ship a production-ready page or feature in Nuxt with Nuxt Studio. You also get access to our internal agency resources (tools, templates, flows, docs). The site includes a curated, free tools directory gated by a simple “trade a link” submission.

## Key Features

- Single fixed-price offer: $1,500 for one task using Nuxt Studio
- Tally popup for intake with Whop redirect
- “Trade a link” unlock flow for the free tools directory
- Curated directory as link-based pages powered by `@nuxt/content`
- Mobile-first UI built on `@nuxt/ui` components and Iconify icons

## Features

- Offering: One task — Nuxt Studio Web Development ($1,500 flat)
- Smooth Scroll: “Start Now” scrolls to pricing for quicker conversion.
- Tally Intake: Single popup with `onSubmit` → Whop redirect (ID: `q45GQg`).
- Directory Unlock: Tally popup (`xXVMRk`) with localStorage gate (`tradealink-directory-unlocked`) to reveal the full directory.
- Compact Directory UI: Alphabetically sorted, mobile-first list of categories with succinct descriptions.
- SEO & Meta: `useHead` + `useSeoMeta` applied at app and page levels.
- Prerendered Routes: `/`, `/directory`, and `/directory/**` for fast static delivery.
- Content Schema: Validated via zod in `content.config.ts` for consistency across directory pages.
- Icons: Iconify-powered icons (Lucide, Simple Icons) via `UIcon` shorthand like `i-lucide-arrow-right`.

## Quick Start

Use pnpm with Windows PowerShell (v5.1):

```powershell
pnpm install
pnpm run dev
```

Common scripts:

```powershell
pnpm typecheck
pnpm lint
pnpm build
pnpm preview
```

## User Flow

- Book the $1,500 task on the landing page (`app/pages/index.vue`).
- A Tally popup collects details; on submission, the app redirects to Whop for checkout.
- We kick off in Nuxt Studio, align content structure, then build and ship.
- The directory can be unlocked by sharing a free tool via the Tally popup; once submitted, the UI persists unlock state in localStorage.

## Directory Categories (Examples)

Markdown pages live in `content/directory/` and include link-based sections:

- AI and Automation (`ai-and-automation.md`)
- Business Ops (`business-ops.md`)
- Career & Freelance (`career-and-freelance.md`)
- Document Utilities (`document-utilities.md`)
- Learning & Research (`learning-and-research.md`)
- Payment Gateway (`payment-gateway.md`)
- Remote Desktop Tools (`remote-desktop-tools.md`)
- Web Hosting (`web-hosting.md`)
- Forms (`forms.md`)
- CMS (`cms.md`)
- Low-code Platform (`low-code-platform.md`)
- OSINT (`osint.md`)
- Marketing (`marketing.md`)
- Subreddits to Market Product (`subreddits-to-market-product.md`)
- Education & Career Development (`education-and-career-development.md`)
- Web Development (`web-development.md`)
- Web Design (`web-design.md`)

## About

Tradealink is a focused, global-friendly service for shipping a production-ready Nuxt page or feature quickly and correctly, using Nuxt Studio for content authoring. We provide access to our internal resources (tools, templates, flows, docs) with every engagement.

### How We Work

- Intake: Book via Tally; we gather the essentials.
- Kickoff: Wire Nuxt Studio for content authoring and map sections.
- Build: Implement with Nuxt + Nuxt UI, SEO, route rules, and prerender.
- Handoff: Deliverables + access to internal resources.

### Guarantees

- Fixed price: $1,500 flat.
- No extra accounts; Whop handles secure access.

### Accessibility & Performance

- Mobile-first design using Nuxt UI primitives.
- Pre-rendered static routes for quick loads.
- Minimal external scripts beyond Tally.

## Tech Stack

- Nuxt 4 (app directory) + TypeScript
- `@nuxt/ui` for layout and components (auto-imported)
- `@nuxt/content` with a validated content schema (`content.config.ts`)
- Iconify JSON packages for icons (Lucide, Simple Icons)

## Safe Changes Checklist

Before pushing a change, verify:

- Builds: `pnpm build` succeeds; `pnpm preview` runs locally.
- Lint & Types: `pnpm lint` and `pnpm typecheck` pass (stylistic rules include `braceStyle: '1tbs'`, `commaDangle: 'never'`).
- UI Consistency: Prefer Nuxt UI primitives (`UApp`, `UHeader`, `UMain`, `UFooter`, `UCard`, etc.) and props (`color`, `variant`, `size`). Keep theme colors from `app/app.config.ts` (`ui.colors.primary='green'`, `neutral='slate'`).
- Content Schema: Any new markdown under `content/directory/` satisfies `content.config.ts` (zod) fields.
- Directory Flow: Preserve localStorage gate `tradealink-directory-unlocked` and Tally IDs unless intentionally changed.

## App Structure

```
app/
  app.vue                 # Global shell: UApp, UHeader, UMain, UFooter
  app.config.ts           # Nuxt UI theme (primary/neutral colors)
  assets/css/main.css     # Global stylesheet
  components/             # Auto-imported Vue components
  layouts/                # Page layouts (default, landing)
  pages/
    index.vue             # Landing page with pricing + Tally popups
    directory/
      index.vue           # Directory unlock + compact category list
      [slug].vue          # Category detail (renders markdown body)
      data.ts             # Any directory-related helpers
content/
  directory/*.md          # Link-based directory pages (categories)
content.config.ts         # @nuxt/content schema (validated with zod)
nuxt.config.ts            # Modules, CSS, route rules (prerender)
```

### Architecture Highlights

- Global shell at `app/app.vue` using `UApp`, `UHeader`, `UMain`, `UFooter`.
- Styling via `assets/css/main.css` and Nuxt UI theme in `app/app.config.ts`.
- Content powered by `@nuxt/content`; markdown lives under `content/**`, queried via `queryCollection`.
- Routing & SSG: `nuxt.config.ts` prerenders `/`, `/directory`, and `/directory/**` via `routeRules`.

## Directory Content Model

Defined in `content.config.ts` as a `page` collection sourced from `content/directory/*.md`.

Required frontmatter fields:

```yaml
slug: string
title: string
description: string
category: string
date: YYYY-MM-DD (coerced)
tags: string[] (optional, defaults to [])
heroImage: url (optional)
readingTime: number (optional)
author: { name: string; role?: string; avatar?: url } (optional)
```

Each markdown file then contains link sections. Example:

```md
---
slug: web-design
title: Web Design Resources
description: Free tools for UI design, assets, and performance-friendly images.
category: Design
date: 2025-11-27
tags: [Design, UI]
---

## Design Tools

- [Figma](https://www.figma.com/)
- [Penpot](https://penpot.app/)
```

## Landing Page (Pricing + Popup)

- Located at `app/pages/index.vue`.
- “Start Now” scrolls to pricing.
- One tier opens a Tally popup and redirects to Whop on submit:
  - Nuxt Studio Web Development (One Task): `q45GQg`
- The Tally embed script is injected with `useHead`; `window.Tally` is typed in TS.

## Free Tools Directory (Unlock Flow)

- Index: `app/pages/directory/index.vue`.
- Gated by a simple Tally popup form (ID `xXVMRk`). On submit, access is unlocked via `localStorage` key `tradealink-directory-unlocked`.
- Once unlocked, users see a compact, mobile-first list of categories sorted alphabetically by title.
- Category pages use `app/pages/directory/[slug].vue` to render metadata and the markdown body via `<ContentRenderer>`.

Nuxt Content runs with `experimental.sqliteConnector='native'` via `better-sqlite3`. No manual DB setup is needed.

## Routing & Prerendering

`nuxt.config.ts` pre-renders the landing page and directory routes for fast static delivery:

```ts
routeRules: {
  '/': { prerender: true },
  '/directory': { prerender: true },
  '/directory/**': { prerender: true }
}
```

To prerender additional static pages (e.g., features):

```ts
// nuxt.config.ts
routeRules: {
  '/features': { prerender: true }
}
```

## Development

Install dependencies:

```powershell
pnpm install
```

Start dev server (http://localhost:3000):

```powershell
pnpm run dev
```

Type check and lint:

```powershell
pnpm typecheck
pnpm lint
```

Build and preview production:

```powershell
pnpm build
pnpm preview
```

## Conventions

- Prefer Nuxt UI props (color, variant, size) over custom utility classes.
- Use `<script setup>` with Composition API; components in `app/components/` use PascalCase filenames.
- Add new directory categories as markdown under `content/directory/` with required frontmatter.
- ESLint stylistic rules: `braceStyle: '1tbs'`, `commaDangle: 'never'`.

Vue SFCs should use `<script setup>` and PascalCase filenames in `app/components/`. Prefer `UIcon` shorthand (e.g., `i-lucide-arrow-right`). Avoid global side effects outside `app/app.vue`.

## Roadmap

- Add search/filter to `/directory` for faster discovery.
- Add breadcrumbs and badges on category pages for better navigation.
- Wire product-specific Whop URLs per tier and pass tier/email as query params.
- Expand the Vault section with a preview or samples.

## Contributing

PRs welcome. Please:

- Run `pnpm typecheck` and `pnpm lint` before submitting.
- Follow Nuxt UI component patterns and content schema.
- Keep changes minimal, focused, and stylistically consistent.

## Customization Notes

## YAML-Driven Pages

Marketing pages and the blog hero are fully content-driven via `@nuxt/content` with YAML frontmatter:

- Landing: `content/pages/index.md`
- Vault: `content/pages/vault.md`
- White-Label Platform: `content/pages/white-label-platform.md`
- Blog Index Hero: `content/pages/blog.md`

Pages query the `pages` collection and bind fields like `hero.title`, `hero.description`, and `sections.*`:

```ts
// Example in a page component
const { data: page } = await useAsyncData('landing-page', () =>
  queryCollection('pages')
    .where('slug', '=', 'index')
    .first()
)
```

Common section structures:

```yaml
hero:
  title: string
  description: string
sections:
  whatWeDo:
    title: string
    description: string
    tasks: string[]
  howItWorks:
    title: string
    steps:
      - { title: string, description: string }
  pricing:
    title: string
    tiers:
      - { name: string, price: string, blurb: string, examples: string[], tallyFormId: string }
    includes: string[]
  vault:
    title: string
    intro: string
    details: string
    items: string[]
  directory:
    title: string
    intro: string
    categories: string[]
  affiliate:
    title: string
    intro: string
    perks: string[]
  faq:
    title: string
    items:
      - { label: string, content: string }
```

Bind conservatively with optional chaining and light casting when needed:

```vue
<UPageSection
  :title="(page.sections as any)?.pricing?.title"
>
  <!-- render pricing tiers from YAML -->
</UPageSection>
```

## Blog

Blog posts live under `content/blog/*.md` and are listed on `/blog`. The blog index hero pulls from `content/pages/blog.md`.

## Studio

This project currently edits content via markdown/YAML. If you decide to re-enable in-app Studio later, add `nuxt-studio` and its config to `nuxt.config.ts`. Otherwise, keep editing via files.

## Route Rules

Alongside prerendering, `/pages` is redirected to `/` to avoid content-generated path warnings:

```ts
routeRules: {
  '/': { prerender: true },
  '/pages': { redirect: '/' },
  '/directory': { prerender: true },
  '/directory/**': { prerender: true },
  '/white-label-platform': { prerender: true },
  '/blog': { prerender: true },
  '/blog/**': { prerender: true }
}
```

- Update site branding and header/footer links in `app/app.vue`.
- Adjust theme colors in `app/app.config.ts`.
- Replace Tally form IDs and Whop redirect logic in `app/pages/index.vue` and `app/pages/directory/index.vue` as needed.

### Tally + Whop Integration Notes

- Pricing page (`app/pages/index.vue`): Tally popup opens with `window.Tally.openPopup('q45GQg', { onSubmit: () => window.location.href = 'https://whop.com' })`. The Tally embed script is injected via `useHead`.
- Directory unlock (`app/pages/directory/index.vue`): Popup `xXVMRk` unlocks access by setting localStorage key `tradealink-directory-unlocked`. UI state reflects unlock with `useState('directory-unlocked')` and sorted listing from `queryCollection('directory').all()`.

---

Questions or improvements welcome. PRs encouraged.
