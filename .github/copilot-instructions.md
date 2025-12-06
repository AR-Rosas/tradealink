# AI Coding Agent Instructions

Purpose: Equip AI agents to quickly and safely contribute to this Nuxt 4 + Nuxt UI project powering the Tradealink landing page and free tools directory.

## Architecture & Key Files
- Nuxt 4 app directory with auto-imports. Global shell at `app/app.vue` using `UApp`, `UHeader`, `UMain`, `UFooter`; SEO via `useHead` + `useSeoMeta`.
- Styling via `assets/css/main.css` and Nuxt UI theme in `app/app.config.ts` (`ui.colors.primary='green'`, `neutral='slate'`). Tailwind is provided by `@nuxt/ui`.
- Content: `@nuxt/content` with a validated schema in `content.config.ts` (zod). Markdown lives under `content/directory/*.md` and is queried via `queryCollection('directory')`.
- Routing & SSG: `nuxt.config.ts` prerenders `/`, `/directory`, and `/directory/**` via `routeRules`.
- Scripts: `pnpm dev`, `pnpm build`, `pnpm preview`, `pnpm lint`, `pnpm typecheck`. Postinstall runs `nuxt prepare`.

## Product Flows (Concrete Patterns)
- Pricing page (`app/pages/index.vue`): Tally popups open with `window.Tally.openPopup('jaeo4J'|'q45GQg', { onSubmit: () => window.location.href = 'https://whop.com' })`. The Tally embed script is injected via `useHead`.
- Directory unlock (`app/pages/directory/index.vue`): Popup `xXVMRk` unlocks access by setting localStorage key `tradealink-directory-unlocked`. UI state reflects unlock with `useState('directory-unlocked')` and sorted listing from `queryCollection('directory').all()`.
- Category page (`app/pages/directory/[slug].vue`): Fetches a single entry by slug, sets SEO meta, renders metadata badges, optional hero image, and markdown body via `<ContentRenderer :value="category" />`.

## Conventions to Follow
- Vue SFCs use `<script setup>` + PascalCase filenames in `app/components/`.
- Prefer Nuxt UI props (`color`, `variant`, `size`) and `UIcon` shorthand (e.g., `i-lucide-arrow-right`). Icons come from `@iconify-json/lucide` and `@iconify-json/simple-icons`.
- Global styles live in `assets/css/main.css`. Avoid per-component `<style>` unless strictly scoped.
- Keep changes minimal and localized. Do not restructure `app/` or bypass Nuxt UI for covered primitives.
- ESLint stylistic rules: `braceStyle: '1tbs'`, `commaDangle: 'never'` (see `nuxt.config.ts`). Run `pnpm lint` + `pnpm typecheck` before submitting.

## Integration Notes
- `better-sqlite3` is installed for `@nuxt/content` with `experimental.sqliteConnector='native'`. No manual DB setup is needed.
- SEO: Add `useSeoMeta` in top-level pages/components; avoid manual `<head>` markup.
- If adding new static pages, extend `routeRules` in `nuxt.config.ts` to prerender.

## Safe Changes Checklist
1) Builds: `pnpm build` succeeds; `pnpm preview` runs.
2) Lint & Types: `pnpm lint` and `pnpm typecheck` pass.
3) UI Consistency: Use Nuxt UI components/slots; preserve theme.
4) Content Schema: New markdown under `content/directory/` must satisfy `content.config.ts` fields.
5) Directory Flow: Preserve localStorage gate `tradealink-directory-unlocked` and Tally IDs unless intentionally changed.

## Quick Examples
- Add a pre-rendered route:
  - Edit `nuxt.config.ts` routeRules: `'/features': { prerender: true }`.
- New component: create `app/components/FeatureCard.vue` using `<UCard>`, `UIcon`, and props; rely on auto-imported Nuxt UI.

What not to do: switch package managers, introduce alternative UI libraries for covered primitives, add global side effects outside `app/app.vue`, or speculative test scaffolding.
