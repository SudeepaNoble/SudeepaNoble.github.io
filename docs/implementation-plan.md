# Implementation Plan — Sudeepa Kolli Portfolio

## 1. Reference inspection (mohitsingh.cloud)

**Structure observed:**
- Minimal top bar (name + a single nav link), no heavy nav chrome.
- Text-first hero: a short greeting line, then a dense, personal, run-on
  paragraph that reads like a voice, not a bio — first-person, specific,
  slightly informal, confident. Freelance stats/proof woven into the
  paragraph itself with tiny inline logo chips.
- Aside line about hobbies with one word treated with emphasis/animation.
- A one-line CTA + row of social/contact links directly under the hero
  (no dedicated contact page for these).
- "Tools I use" section: short paragraph description of stack, "Show All"
  expandable.
- "Story So Far" (work timeline) — explicitly **excluded** per brief.
- Projects section: large media preview (image/video) per project,
  title + status pill ("building"/"Live"), short description, tag chips
  for stack, and Live/Github links. Cards feel editorial, not boxed grid.
- Footer: large decorative Earth/clock/time visualization — explicitly
  **excluded** per brief. Also had RSS/sitemap links and a visit counter.
- Overall motion: restrained scroll reveals, hover states on links/cards,
  no scroll-jacking, no heavy parallax.
- Typography: text-first design where the paragraph itself carries most
  of the visual weight; generous line-height; understated color use.

## 2. What will be recreated

- The **text-first hero** approach: an opening line + a personal,
  voice-driven paragraph that positions Sudeepa, rather than a big
  graphic hero.
- Inline emphasis on specific words/phrases (animated underline/highlight).
- Social links row directly below the hero.
- Editorial project cards with image, status, tags, live/GitHub links.
- Subtle scroll-reveal animation language and restrained hover states.
- A short "what I use / how I think" style aside (adapted into the About
  section instead of a tools list, per content priorities).

## 3. What will be changed or removed

- **No Education or Work Experience / "Story So Far" timeline** — removed
  entirely per brief.
- **No Earth/clock/time footer animation** — replaced with a one-line
  simple footer (name, tagline, year, socials).
- **No visit counter, no RSS/sitemap chrome.**
- Added a dedicated **Writing** section (articles/essays/threads) which
  the reference site does not have in this form.
- Added a dedicated, short **About / Interests** section (workouts,
  movies, Carnatic music, writing, exploring ideas) instead of a
  "tools I use" dev-stack section.
- Content is reframed entirely around AI product management, product
  strategy, tech consulting, entrepreneurship, and consumer products —
  not software-engineering freelance work.
- Design system, palette, typography, and the signature motion element
  are original (see below) — nothing is visually copied.

## 4. Design system (original direction)

- **Palette:** paper `#FAF7F0` / ink `#1B1812` in light mode; dusk
  `#131019` / bone `#F3EFE6` in dark mode. Two accents: `dusk violet
  #5B4B95` (primary — links, focus, active states) and `raga amber
  #E0A458` (secondary — tags, status pills, small highlights). This
  avoids the common cream+terracotta and pure-black+neon-accent AI
  defaults.
- **Type:** `Fraunces` (variable serif, expressive, used only for display
  headings) paired with `Inter` (body/UI) and `IBM Plex Mono` (dates,
  tags, small caps labels — a nod to structured/technical thinking).
- **Signature element:** a thin animated "swara wave" — a hand-tuned SVG
  sine-like phrase line that draws itself once on load in the hero and
  reappears as a quiet section divider. It reads simultaneously as a
  music phrase (Carnatic music) and a signal/waveform (product +
  technical thinking) — the throughline between her two worlds.
- **Motion:** framer/Motion for React — on-load hero reveal, scroll
  reveals (`whileInView`), link underline wipes, card hover lift +
  image scale, expandable project descriptions, an optional
  auto-scrolling marquee for the writing categories row. Everything
  respects `prefers-reduced-motion`.

## 5. Sections & components

**Sections:** Nav, Hero/Intro, Projects, Writing, About/Interests,
Contact, Footer.

**Reusable components:** `SiteHeader` (nav + theme toggle + mobile
menu), `ThemeToggle`, `AnimatedText` (word-level reveal/emphasis),
`SectionHeading` (eyebrow + title + swara-wave divider),
`ProjectCard` (expandable), `WritingRow`, `SocialLinks`, `SiteFooter`,
`SwaraWave` (SVG signature motif), `Container`.

**Data files:** `src/data/profile.ts`, `src/data/projects.ts`,
`src/data/writing.ts`, `src/data/socials.ts`.

## 6. Build order

1. Scaffold Next.js 14 (App Router) + TypeScript + Tailwind.
2. Static responsive layout with all sections, real content, no motion.
3. Theme system (next-themes-style, no-flash script, toggle in header).
4. Motion pass (Motion for React) — restrained, reduced-motion aware.
5. Responsive QA across the required breakpoints.
6. Lint, type-check, production build; fix all issues.
7. README with setup/editing instructions.
