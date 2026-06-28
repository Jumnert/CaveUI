# caveui — Web Design System

The design tokens for the caveui docs site. Built on **shadcn/ui** + **Tailwind v4**,
with a warm stone surface and an amber primary. Fonts are self-hosted via `next/font`.

## Typography

| Role | Font | CSS variable | Tailwind utility | Usage |
| --- | --- | --- | --- | --- |
| **Display / hero** | **Instrument Serif** (400, + italic) | `--font-serif` → `--font-instrument-serif` | `font-serif` | Big hero headings. **This is the font used by the hero** (`cta-2` `CTASection`); the italic is used for the highlighted word. |
| Body / UI | Geist | `--font-sans` → `--font-geist-sans` | `font-sans` (default on `<html>`) | All UI text, paragraphs, buttons, nav. |
| Code | Geist Mono | `--font-mono` → `--font-geist-mono` | `font-mono` | Code blocks, install commands. |

```css
/* globals.css → @theme inline */
--font-sans: var(--font-geist-sans);
--font-mono: var(--font-geist-mono);
--font-serif: var(--font-instrument-serif), ui-serif, Georgia, serif;
```

```tsx
/* layout.tsx — all three are loaded via next/font and attached to <html> */
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});
```

**Pairing rationale:** Instrument Serif (elegant display serif) for headlines, Geist
(clean grotesque sans) for everything else — a high-contrast, modern pairing. Loading the
serif through `next/font` (self-hosted, no layout shift) makes the hero's `font-serif`
render a deliberate typeface instead of the browser default serif, so it integrates
seamlessly with the rest of the UI.

### Type scale (Tailwind)

- Hero: `text-4xl sm:text-5xl md:text-6xl font-serif font-normal tracking-tight`
- Section headings: `text-2xl sm:text-3xl font-bold tracking-tight`
- Body: `text-base` / muted: `text-muted-foreground`
- Eyebrow / labels: `text-xs uppercase tracking-widest`

## Color tokens

shadcn variables (oklch), light on `:root`, dark on `.dark`. Identity: **amber primary on
warm stone**.

| Token | Light | Dark | Tailwind |
| --- | --- | --- | --- |
| `--primary` | `oklch(0.62 0.16 52)` (amber) | `oklch(0.8 0.15 75)` | `bg-primary` / `text-primary` |
| `--background` | warm near-white | warm near-black | `bg-background` |
| `--foreground` | stone-900-ish | stone-100-ish | `text-foreground` |
| `--card` | white-warm | `oklch(0.2 …)` | `bg-card` |
| `--muted-foreground` | — | — | `text-muted-foreground` |
| `--border` | warm stone | `white/10%` | `border` |
| `--accent` | warm stone | — | `bg-accent` |
| `--ring` | amber | amber | focus ring |

Dark mode is **class-based** (`.dark` on `<html>`), toggled by `ThemeToggle` and persisted
to `localStorage` (with a no-flash inline script in `layout.tsx`).

## Radius

`--radius: 0.65rem` → `rounded-sm/md/lg/xl` derive from it. Cards/tiles use `rounded-xl`.

## Motion

Custom keyframes/utilities in `globals.css`: `animate-fade-up`, `stagger-children`
(grid entrance), `animate-shimmer`, `animate-indeterminate`, `animate-progress`,
`animate-spin/pulse/bounce/ping`. All gated by `prefers-reduced-motion`. Hover states are
subtle (border/background only) — no elevation.

## Buttons — canonical CTA (from the hero)

The hero (`cta-2` `CTASection`) button is the **canonical call-to-action style for the
whole site**. It's the shadcn `Button` (`size="lg"`, `rounded-md`) with an embossed
*inset-shadow* finish (`shadow-[inset_…]` + `text-shadow-2xs`) and an arrow that nudges
on hover. Reuse this for primary CTAs everywhere.

### Primary CTA

- **Component:** `<Button size="lg">` (shadcn) with a trailing `FiArrowRight` (`react-icons/fi`).
- **Label text (from the hero):** **"Browse components"** (component default: "Get started free").
- **className (verbatim):**

```
group w-full gap-2 rounded-md text-sm font-semibold shadow-[inset_0_0.5px_0px_rgba(255,255,255,0.5),inset_0_-0.5px_0px_rgba(0,0,0,0.3),inset_0_0.5px_10px_rgba(255,255,255,0.5),inset_0_-0.5px_4px_rgba(0,0,0,0.3)] text-shadow-2xs sm:w-auto
```

- **Icon (verbatim):**

```
<FiArrowRight className="text-base transition-all duration-200 group-hover:translate-x-1" />
```

### Secondary CTA

- **Component:** `<Button size="lg" variant="outline">`.
- **Label text (from the hero):** **"View on GitHub"** (component default: "See how it works").
- **className (verbatim):**

```
text-muted-foreground dark:text-muted hover:text-foreground w-full rounded-md border-none bg-linear-to-b from-zinc-100 to-zinc-50 text-sm font-medium shadow-[inset_0_0.5px_0px_rgba(255,255,255,0.2),inset_0_-0.5px_0px_rgba(0,0,0,0.1),inset_0_0.5px_4px_rgba(255,255,255,0.2),inset_0_-0.5px_4px_rgba(0,0,0,0.1)] transition-all text-shadow-2xs sm:w-auto
```

### Reusable snippet

```tsx
import { Button } from "@/components/ui/button";
import { FiArrowRight } from "react-icons/fi";

// Primary CTA — use everywhere
<Button
  size="lg"
  className="group gap-2 rounded-md text-sm font-semibold shadow-[inset_0_0.5px_0px_rgba(255,255,255,0.5),inset_0_-0.5px_0px_rgba(0,0,0,0.3),inset_0_0.5px_10px_rgba(255,255,255,0.5),inset_0_-0.5px_4px_rgba(0,0,0,0.3)] text-shadow-2xs"
>
  Browse components
  <FiArrowRight className="text-base transition-all duration-200 group-hover:translate-x-1" />
</Button>
```

> **Reuse tip:** keep these exact classes as the single source of truth. To stay DRY,
> export the primary string as a constant (e.g. `CTA_PRIMARY_CLASS`) or wrap it in a
> `<CtaButton>` and import it wherever a primary action appears (`w-full sm:w-auto` makes
> it full-width on mobile, auto on desktop).
