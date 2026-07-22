# Sudeepa Kolli — Portfolio

A personal portfolio site for Sudeepa Kolli — AI product manager, strategist,
and builder — built with Next.js (App Router), TypeScript, Tailwind CSS, and
Motion for React. Design and content are original; layout rhythm and
motion language are inspired by mohitsingh.cloud (see
`docs/implementation-plan.md` for the full breakdown of what was recreated
vs. intentionally changed).

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** for styling, with a small custom design-token set
  (`tailwind.config.ts`)
- **Motion for React** (`motion/react`) for scroll reveals, hover states,
  the theme toggle, mobile menu, and the signature "SwaraWave" motif
- Self-hosted variable fonts via `@fontsource` (Fraunces, Inter, IBM Plex
  Mono) — no runtime dependency on Google Fonts
- Deploys cleanly to **Vercel** with zero configuration

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

### Other commands

```bash
npm run build   # production build
npm run start   # run the production build locally
npm run lint    # ESLint
npx tsc --noEmit   # type-check only
```

## Editing content

All editable content lives in `src/data/` as plain TypeScript objects —
no JSX or layout logic to worry about.

| File | Controls |
| --- | --- |
| `src/data/profile.ts` | Hero copy, positioning, about/interests section, SEO metadata |
| `src/data/projects.ts` | The Projects section — add/remove/edit projects |
| `src/data/writing.ts` | The Writing section — add/remove/edit articles, essays, threads |
| `src/data/socials.ts` | Contact/social links shown in the header, hero, and footer |

### Adding a project

Add an object to the `projects` array in `src/data/projects.ts`:

```ts
{
  slug: "my-project",
  title: "My Project",
  shortDescription: "One sentence for the card.",
  longDescription: "The expanded paragraph shown on 'Read more'.",
  status: "Live", // "Live" | "Building" | "Archived" | "Concept"
  image: "/projects/my-project.png", // add the file to /public/projects
  tags: ["AI", "Consumer"],
  liveUrl: "https://example.com",
  githubUrl: "https://github.com/you/my-project",
}
```

Project images live in `/public/projects/`. The four included files
(`placeholder-*.svg`) are original placeholder illustrations — swap them
for real screenshots or product shots at any resolution (16:10-ish works
best) and update the `image` path.

### Adding a writing entry

Add an object to the `writing` array in `src/data/writing.ts`. Use `"#"`
as a placeholder `externalUrl` until the piece is published somewhere.

### Emphasis markers in the hero copy

In `profile.ts`, wrap any phrase in `{{double braces}}` to have it
rendered with the animated highlight treatment, e.g.
`"I care about {{product strategy}} and {{AI}}."`

## Light / dark mode

- Toggle lives in the header (sun/moon button).
- Preference is stored in `localStorage` under the key `sk-theme` and
  falls back to the OS-level `prefers-color-scheme` on first visit.
- An inline script in `src/app/layout.tsx` (`src/lib/theme-script.ts`)
  applies the theme class before React hydrates, so there's no flash of
  the wrong theme.

## Accessibility & motion

- All interactive elements are reachable and usable via keyboard, with a
  visible focus ring (`:focus-visible`).
- No interaction depends solely on `:hover` — hover states are additive.
- Touch targets are ≥44px tall.
- `prefers-reduced-motion` is respected globally (see `globals.css`) and
  individual Motion components additionally check
  `useReducedMotion()` before animating.

## File structure

```
src/
  app/
    layout.tsx        # root layout, fonts, theme script, metadata
    page.tsx           # assembles all sections
    globals.css        # Tailwind layers + base tokens
    icon.svg            # favicon
  components/
    site-header.tsx     # nav + mobile menu + theme toggle
    theme-toggle.tsx
    theme-provider.tsx
    hero.tsx
    projects-section.tsx
    project-card.tsx
    writing-section.tsx
    writing-row.tsx
    about-section.tsx
    contact-section.tsx
    site-footer.tsx
    section-heading.tsx
    animated-text.tsx   # emphasis + scroll-reveal helpers
    swara-wave.tsx        # signature SVG motif
    social-links.tsx
    container.tsx
  data/
    profile.ts
    projects.ts
    writing.ts
    socials.ts
  lib/
    theme-script.ts
public/
  projects/              # project preview images (placeholders included)
docs/
  implementation-plan.md   # reference inspection + design plan
```

## Deploying to Vercel

1. Push this repository to GitHub (or another Git provider).
2. Import it in Vercel — framework preset "Next.js" is auto-detected.
3. No environment variables are required for the base site.
4. Deploy.

## Placeholders to replace before going live

- `src/data/socials.ts` — every entry is a placeholder (`isPlaceholder: true`)
  except the email format; replace `href` values with real LinkedIn, X,
  GitHub, and résumé links, and confirm the email address.
- `src/data/writing.ts` — every `externalUrl` is `"#"`; point these at the
  real published pieces (or your own blog/Substack/Medium/X thread URLs).
- `src/data/projects.ts` — `liveUrl` / `githubUrl` are `undefined` for all
  four projects; add real links as they become available. The card
  gracefully shows "Links coming soon" until then.
- `/public/projects/placeholder-*.svg` — swap for real project screenshots.
- `app.metadataBase` in `src/app/layout.tsx` uses a placeholder domain
  (`https://sudeepakolli.com`) — update to the real deployed domain.
- Open Graph / social preview image — none is set up yet; add one at
  `/public/og-image.png` and reference it in `metadata.openGraph.images`
  if you want rich social link previews.

## Differences from the reference site (mohitsingh.cloud)

- No Education or Work Experience / "Story So Far" timeline section.
- No Earth graphic, location visualization, or animated clock in the
  footer — replaced with a single-line footer (name, tagline, year,
  socials).
- No visit counter, RSS feed, or sitemap link in the footer.
- Added a dedicated Writing section (not present on the reference site).
- Added a short About/Interests section in place of a dev "tools I use"
  list.
- Entirely original palette, type system, and the "SwaraWave" signature
  motif — no visual assets, code, or branding were copied.

## Known limitations

- Project preview images are placeholder SVGs — replace with real
  screenshots for production use.
- The Writing section links to `"#"` until real articles are published.
- No CMS/backend — all content is static TypeScript data, rebuilt at
  deploy time. This is intentional for easy editing, but means content
  changes require a redeploy.
- No blog/article detail pages — the Writing section is designed to link
  out to externally hosted writing rather than host long-form content
  itself.
