# ANTISLOP — the caveui design bar

The single source of truth for "does this look AI-made?". Every component (`DESIGN.md`) and
block (`BLOCKS.md`) must clear this. Distilled from the **impeccable** and **design-taste-frontend**
skills and adapted for **Android / Jetpack Compose** (web-only items dropped: Tailwind/RSC/Next,
picsum, design-system package matrix, scroll-hijack, Apple liquid-glass, Core Web Vitals).

> Written with hyphens only. **There are zero em-dashes in this file on purpose** (see the ban).

---

## The one test

If someone could glance at it and say **"AI made that"** - or guess the whole look from the
category name alone - it failed. Rework until both are false.

---

## Absolute bans (rewrite on sight)

- **Gradient text** (gradient behind clipped text). One solid color; emphasize with weight/size.
- **Gradient-filled icon tiles** + **multi-stop "candy" gradients**. Flatten to a solid, or ONE
  restrained 2-stop gradient with a real reason (a premium CTA).
- **Neon / outer glows** by default. Use inner borders or a tinted shadow.
- **Glassmorphism by default**. Rare and purposeful, or none.
- **Side-stripe borders** (thick colored `border-left/right` accent). Full border, tint, or icon.
- **Identical card grids** and **nested cards**. Cards are the lazy answer; group with dividers/space.
- **Eyebrow over every section** (tiny uppercase tracked kicker) and **`01 / 02 / 03` section
  numbers**. Occasional brand voice is fine; on everything it is AI grammar.
- **Box/div "fake screenshots"**. Show the real component/screen.
- **Decorative status dots**, **scroll cues** ("Scroll v"), **version labels** ("v0.6 / BETA"),
  **locale/weather strips** - unless the content genuinely calls for it.
- **Text that overflows** its container at any size.
- **Pure `#000` / `#fff`**. Use the theme near-black / near-white so depth survives.

## 🚫 EM-DASH BAN (non-negotiable)

**Zero `—`, and `–` as a separator, anywhere visible** - headlines, labels, body, captions,
button text, content descriptions, alt text. It is the #1 AI tell. Use a regular hyphen `-`, a
comma, or two sentences. Ranges use a hyphen (`2018-2026`, `$40-80`).

---

## Color

- **One accent per surface, locked.** No drifting warm to cool, no stray blue CTA on an amber
  screen. Neutral base from `MaterialTheme.colorScheme.*` + one high-contrast accent.
- Color is **free per component/block** (emerald success, blue chat, amber Pro) - just consistent
  *within* that one surface, and varied *between* surfaces.
- **No AI purple/violet glow** as a reflex. Neutral bases (zinc/slate/stone equivalents) with a
  singular high-contrast accent (emerald, electric blue, deep rose, burnt orange).
- Contrast: body >= 4.5:1, large text >= 3:1. No washed light-gray body on a tinted near-white;
  gray on a colored surface looks dead - use a darker shade of that hue.
- Tint shadows toward the surface hue, never pure black.

## Typography

- Hierarchy via **weight + color + spacing**, not raw giant sizes. No oversized screaming H1.
- **Serif is not the "creative" default.** Default to a clean sans (`MaterialTheme.typography`);
  serif only when the brand is genuinely editorial / heritage and you can say why.
- Emphasize with **italic/bold of the same family**, never a random serif dropped into a sans line.

## Layout & shape

- **Cards only when elevation conveys real hierarchy**; otherwise dividers/space. Never nest cards.
- **One corner-radius scale**, applied everywhere (e.g. pill buttons / 16dp cards / 8dp inputs).
- No "three identical cards" filler. Vary the composition; avoid centered-everything.

## States (the #1 thing agents skip)

Ship the full cycle, not just the happy path:
- **Loading** -> skeletons shaped like the final content, not a lone `CircularProgressIndicator`.
- **Empty** -> composed, with the next action.
- **Error** -> inline for fields, `Snackbar` for transient.
- **Pressed** -> tactile feedback (slight scale / elevation via `interactionSource`).

## Motion

- **Motivated only**: each animation communicates hierarchy, sequence, feedback, or a state
  change. "Looks cool" is not a reason. Not every element loops.
- Ease-out for entrances (no gratuitous bounce/elastic); spring for tactile press.
- **Reduced motion is mandatory** - gate or soften infinite/parallax/physics.
- Avoid the *uniform reflex* (one identical entrance applied to everything). Reveals enhance an
  already-visible default; never gate visibility on a transition.

## Copy & content tells (audit every visible string)

- **No generic names** ("John Doe", "Sarah Chan") -> realistic, locale-appropriate.
- **No fake-perfect numbers** (`99.99%`, `50%`, `1,234,567`) -> organic, labelled mock, or real.
- **No startup-slop brand names** ("Acme", "Nexus", "SmartFlow", "Cloudly").
- **No filler verbs** ("Elevate", "Seamless", "Unleash", "Next-Gen", "Revolutionize") -> concrete.
- Re-read every string before shipping; replace broken, hallucinated, or fake-poetic copy with a
  plain functional line.

## Icons & theme

- **One icon family** per surface (previews use lucide; Compose code uses Material Icons),
  consistent stroke weight. Never hand-draw icon SVG paths.
- **Light and dark both**, WCAG AA in both, one theme per surface (no inverted section mid-scroll).

---

## Installed skills (use for real design passes)

In `.agents/skills/` (and `.kiro/skills/`). Invoke when a task is genuinely a design job:

- **impeccable** - audit / polish / critique / bolder / animate, etc. (`/impeccable <cmd> <target>`).
- **design-taste-frontend** - brief inference + dials + anti-slop (this file is its distilled, Compose-ported core).
- **redesign-existing-projects** - audit-first redesign of an existing surface.
- **minimalist-ui**, **high-end-visual-design**, **industrial-brutalist-ui** - aesthetic directions.
- **full-output-enforcement** - when an agent ships half-finished work.

This file is the always-on checklist; the skills are the deep-dive tools.
