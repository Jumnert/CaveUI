# Block Pages — Authoring Guide

How to add a **block** to caveui. A *block* is a **full-screen Jetpack Compose composition**
— a complete screen or flow (Login, Chat, Chatbot, Onboarding, Paywall, Dashboard, …) built
**from caveui components on top of Material 3**. A component is a widget; a block is the
whole screen you'd actually ship.

> Read [`DESIGN.md`](./DESIGN.md) first — every rule there (Material 3 only, no `Cave*`
> wrappers, color freedom, verify on Android, quality bar) applies to blocks too, at screen scale.

---

## ⚠️ Golden rules for blocks

- **Real, runnable `@Composable` screen.** It must compile and render on Android — a full
  `Scaffold`/`Column` screen a dev can drop into a `NavHost` destination, not a fragment.
- **Compose it from caveui components + Material 3.** Reuse the catalog (buttons, inputs,
  cards, …) so blocks feel consistent; don't re-invent primitives.
- **One screen, one job.** A block is a complete, opinionated screen — login, not "a form field".
- **State is hoisted and obvious.** Use a small `data class` / `State` + callbacks; no business
  logic, no networking — stub with `onSubmit: () -> Unit` etc.
- **Looks great in light + dark**, handles different screen sizes, and is accessible
  (content descriptions, focus order, touch targets ≥ 48dp).
- **Quality bar:** if it's a trivial single-card screen a dev throws together in a minute,
  it's not a block. Make it comprehensive and genuinely copyable.

---

## 🎯 Quality bar — READ TWICE (most agents fail here)

The default failure mode is a flat, generic screen — one centered card, no hierarchy, the
whole thing tinted amber. **Don't ship that.** A block must look like a screenshot from a
real, well-designed app.

**Banned (auto-reject):**
- a lone centered card / a form with no visual hierarchy;
- everything in one accent color (mono-amber slop);
- lorem-ipsum with no real structure (app bar, sections, spacing, a focal point);
- a screen a developer throws together in two minutes.

**Required:**
- real screen scaffolding (top bar / `Scaffold` / clearly grouped sections),
- depth, spacing and a clear focal point;
- relevant states (empty / loading / error where it matters);
- polished in **light + dark**; prefer **fewer, excellent** blocks over filler.

## 🎨 Color — not everything is amber

A block does **not** have to use the caveui brand (`primary`). Give each screen the palette
that fits its purpose — a finance dashboard's greens, a chat app's blue bubbles, a paywall's
gradient, a calm neutral settings screen. **Vary accents across blocks** so the gallery
doesn't look mono-amber. Only keep neutral **surfaces / text / borders** on
`MaterialTheme.colorScheme.*` so light and dark still work.

## 🧪 Anti-slop — see ANTISLOP.md

The full bar lives in **[`ANTISLOP.md`](./ANTISLOP.md)** (bans, em-dash ban, color/type/layout/
motion/copy rules, the "AI made that" test). Read it. What blocks fail most, specifically:

- **Full states, not just the happy path** - loading skeletons, empty, error, pressed feedback.
  A login with no error state or a feed with no empty state is incomplete.
- **One accent + one radius scale, locked** per screen; vary the accent *between* blocks
  (chat blue, finance emerald, paywall amber), never *within* one.
- **Real, audited content** - no "John Doe", no `99.99%`, no "Acme", no filler verbs.
- **No gradient-icon-tiles / candy gradients / gradient text / fake screenshots / scroll cues.**
- **Light + dark both**, motion motivated and reduced-motion safe.

> Polishing an existing block? Invoke `/impeccable polish <target>` (skills in `.agents/skills/`).

---

## Block anatomy (the detail page)

Mirror the component page so the experience is consistent:

1. **Title + description** — the block `name` and a one-line summary.
2. **Preview** — the screen rendered **inside the Android device mockup** (`AndroidFrame`);
   a full screen fills the phone, so this is the centrepiece.
3. **Installation** — same note as components: copy-paste Compose on Material 3, no caveui dep.
4. **Usage** — the full Kotlin screen `@Composable` in a `CodeBlock`, plus a short note on the
   caveui components it uses.
5. **Prev / next** + minimap (`#preview`, `#installation`, `#usage`).

---

## Verify on Android (required)

1. Build the screen for real in the sample app
   (`sample/src/main/java/io/caveui/sample/`), wrapped in `CaveTheme { }`.
2. Add **light + dark `@Preview`s** at device size
   (`@Preview(showSystemUi = true)` + `uiMode = UI_MODE_NIGHT_YES`).
3. `./gradlew :library:assembleDebug :sample:assembleDebug` must pass.
4. Only then paste the verified Kotlin into the block's `code`.

---

## Where blocks live

Today the Blocks index (`src/app/blocks/page.tsx`) lists the planned screens as scaffolded
cards (tagged **Soon**). To make a block real, an agent should:

1. Create a blocks registry (mirror `src/lib/registry`): `src/lib/blocks/<id>.tsx` exporting a
   `Block` (`{ id, name, description, code, preview }`), aggregated in `src/lib/blocks/index.ts`.
2. Add a `/blocks/[id]` route that renders the block detail page (reuse `AndroidFrame`,
   `InstallTabs`, `CodeBlock`, `ComponentMinimap`).
3. Replace that block's card on the index with a link to its page (drop the **Soon** tag).

Keep the index list as the roadmap; promote a card to a real page only when the block clears
the quality bar and is verified on Android.

---

## Starter set (scaffolded — "Soon")

**App screens:** Auth · Onboarding · Chatbot · Chat · Dashboard · Settings · Profile ·
Search · Feed · Notification · File upload · Error/Empty.

**Marketing sections:** Hero · CTA · Feature · Pricing · Stats · Testimonials · Team · FAQ ·
Integrations · Newsletter · Announcement · Blog · Career · Contact · Footer · Navigation · Widget.

Each should feel like a screenshot from a well-designed real app — copy it, swap the data,
ship it.
