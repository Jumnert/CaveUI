# Component Pages — Authoring Guide

How a `/components/<category>/<id>` page is built, and how to add or edit one.

Component pages are **data-driven**: you don't write a page per component. Each component
is one `Variant` entry in the registry (`src/lib/registry/<category>.tsx`), and a single
dynamic route (`src/app/components/[category]/[id]/page.tsx`) renders every one of them at
build time. Add a `Variant` → a page exists at `/components/<category>/<id>/`.

> ### 🎯 Scope - build ONLY what the prompt asks
> Match the request exactly. Do not mass-produce.
> - "Add a card" / "make a gradient button" = **add ONE** new `Variant` (the one described) to
>   that category. Not five cards, not the whole category, not "a set".
> - Add **N** variants only when the prompt names N (e.g. "a primary, secondary and ghost button" = 3).
> - **Stay in the named category.** Don't touch other categories, other agents' files, or unrelated
>   code. One focused change per request.
> - Don't "fill" or "complete" a category unprompted. An empty/scaffolded category stays until
>   someone is asked to populate it.
> - If the count or category is genuinely ambiguous, **ask once**; otherwise build the single most
>   likely thing and stop.
> - Quality over quantity: one excellent component that clears the bar below beats ten filler ones.

> ### ⚠️ Golden rule (agents read this first)
> caveui is **Material 3, customized** — it is **not** a wrapper library. The `code` you
> author for every component **MUST** be real, custom Jetpack Compose Kotlin that uses
> **Material 3 primitives** (`Button`, `FilledTonalButton`, `OutlinedButton`, `TextButton`,
> `OutlinedTextField`, `Switch`, `Card`, `Badge`, …) and **customizes on top of them** via
> `Modifier`, `ButtonDefaults.*Colors(...)`, `shape`, `contentPadding`, brushes, etc.
> - ❌ Never invent `Cave*` components (no `CaveButton`, `CaveTextField`, …).
> - 🎨 **Color is free** — a component does **not** have to use the caveui amber/`primary`.
>   Pick whatever palette best fits the component (emerald for success, rose for a like,
>   a custom gradient, neon, etc.). Only take **neutral surfaces/text** from
>   `MaterialTheme.colorScheme.*` so it still adapts to light/dark.
> - ✅ Build on Material 3, customize on top. Keep the snippet minimal and runnable.

> ### 🎯 Quality bar — READ TWICE (most agents fail here)
> caveui is a curated **"uiverse for Jetpack"**. The default agent failure mode is shipping
> something *simple and safe*. **Don't.** Every entry must make a developer think
> *"I want that — and I wouldn't have bothered building it myself."*
>
> **Banned (auto-reject) — too trivial to ship:**
> - a default `Button` / `OutlinedTextField` / `Switch` / `Badge` with no real customization;
> - a single `Modifier.rotate()` / `.scale()` / `.alpha()` infinite loop ("it spins", "it pulses");
> - anything a dev writes in < 30 seconds, or a near-duplicate of an entry already in the category.
>
> **Required — what "good" looks like:**
> - A real **micro-interaction or composition**: state-driven morphs, draw-on/stroke animation,
>   spring/physics, sequenced/staggered motion, gesture & press feedback, multi-element choreography.
> - **Unique** — open the category file *first* and confirm the concept **and** the motion differ
>   from every existing entry. A new idea, not a re-skin or a different color.
> - Polished in **light + dark**, reduced-motion safe.
> - Prefer **fewer, excellent** entries over filler. If you can't make it great, **do not add it.**

---

## Page anatomy (top → bottom)

Every component page renders the same sections, in this exact order:

1. **Title + description** — a category badge + any tags, the component `name` as the
   `<h1>`, then the one-line `description`. (Top-right: Copy Page · Share · ‹ › prev/next.)
2. **Preview** — the live preview rendered **inside the Android device mockup**
   (`AndroidFrame`), on a bordered card. This is the hero visual of the page.
3. **Installation** — caveui is copy-paste on Material 3: a short note + the Material 3 /
   Compose BOM prerequisite. No caveui dependency.
4. **Usage** — the Kotlin/Compose source (`code`) in a copy-able `CodeBlock`.
5. **Prev / next** — links to the previous/next component in the category.
6. **Minimap** (xl+ only) — a sticky animated rail on the right that tracks the active
   section (`#preview`, `#installation`, `#usage`).

Keep this order. It's the contract every component page follows.

---

## The `Variant` (what you author)

`src/lib/registry/types.ts`:

```ts
export type Variant = {
  id: string;            // URL slug, unique within the category — e.g. "button-gradient"
  name: string;          // Title shown as the <h1> — e.g. "Gradient"
  category: CategorySlug;// "buttons" | "cards" | "inputs" | "badges" | "toggles" | "loaders" | "icons"
  description?: string;  // One-line SEO + on-page summary (see SEO below)
  tags?: string[];       // Optional pills, e.g. ["animated"]
  code: string;          // Real Material 3 Kotlin the user copies (Usage section)
  preview: ReactNode;    // Live shadcn/Tailwind approximation shown in the phone frame
};
```

Add the entry to the matching category array (e.g. `src/lib/registry/buttons.tsx`). That's it.

```tsx
{
  id: "button-gradient",
  name: "Gradient",
  category: "buttons",
  description: "A high-emphasis button with an amber-to-orange gradient fill.",
  tags: ["animated"],
  code: `Button(
    onClick = {},
    colors = ButtonDefaults.buttonColors(containerColor = Color.Transparent),
) { /* ... */ }`,
  preview: <Button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white">Get Pro</Button>,
}
```

---

## Writing each part

### 1. Title (`name`)
Short, human, title-case. The noun/variant only — the category is already shown as a badge
(use `"Gradient"`, not `"Gradient Button"`).

### 2. Description (`description`) — comprehensive but short
One sentence (~8–16 words). It is used **three ways**, so make it count:
- the on-page summary under the title,
- the `<title>`/meta description,
- the Open Graph/Twitter card description.

Rules:
- Lead with what it is, then the defining trait. *"A pill-shaped search field with a
  leading icon and clear button."*
- No marketing fluff, no trailing period gimmicks, no "This component…".
- Unique per component (don't reuse the same sentence across variants).

### 3. Preview (`preview`)
A React/Tailwind **approximation** of the component, shown inside the phone frame.
- It should read like a real screen element — center it; it sits on the device screen.
- Use shadcn/ui + Tailwind + theme tokens (`bg-card`, `text-foreground`, `bg-primary`, …)
  so it adapts to light/dark. Never hard-code raw hex unless it's intrinsic to the variant.
- The preview is a *visual only* — the source of truth is the Kotlin in `code`.

### 4. Installation
Don't author this per component — it's the same for all: caveui components are
copy-paste Compose built **on Material 3**, so there is **no caveui dependency**. The
Installation block (`InstallTabs`) states this and shows the Compose BOM + `material3`
prerequisite. Just make sure your `code` only uses Material 3 primitives (below).

### 5. Usage (`code`) — Material 3, customized
This is the Kotlin users copy. **Build on Material 3 — never invent `Cave*` wrappers.**
- Buttons → `Button`, `FilledTonalButton`, `OutlinedButton`, `TextButton`, `OutlinedIconButton`.
- Inputs → `OutlinedTextField` with composable-lambda params (`placeholder = { Text(...) }`,
  `leadingIcon = { Icon(...) }`, `supportingText = { Text(...) }`).
- Customize via `Modifier`, `ButtonDefaults.*Colors(...)`, `shape`, `contentPadding`, brushes, etc.
- Pull design values from the theme (`MaterialTheme.colorScheme.*`, `MaterialTheme.shapes.*`),
  not magic numbers, unless the effect requires it.
- **Color is the component's choice.** It does not need to match the caveui brand — use any
  accent palette that makes the component shine (`Color(0xFF16A34A)` for success, a `Brush`
  gradient, a neon, …). Just keep neutral **surfaces/text/borders** on theme tokens so the
  component still looks right in light and dark.
- Keep it to the minimal, runnable snippet that demonstrates the variant.
- **Keep lines short (~72–80 chars max).** The code block scrolls horizontally, so long
  lines overflow and read badly — break long calls onto multiple lines with trailing-comma
  named arguments instead of one long inline line.
- **Escape Kotlin string interpolation.** `code` is a JS template literal (backticks), so any
  Kotlin `"${'$'}{value}"` must be written as `\${value}` in the source — an unescaped `${...}`
  makes JS try to evaluate it and crashes the whole app at module load. Plain `$value` is fine.

```kotlin
// ❌ overflows
Button(onClick = {}, colors = ButtonDefaults.buttonColors(containerColor = MaterialTheme.colorScheme.error), shape = RoundedCornerShape(50)) { Text("Delete") }

// ✅ wrapped
Button(
    onClick = {},
    colors = ButtonDefaults.buttonColors(containerColor = MaterialTheme.colorScheme.error),
    shape = RoundedCornerShape(50),
) {
    Text("Delete")
}
```

---

## Make it real on Android — and prove it compiles

The `code` is the product: developers paste it into a real app. It **MUST compile and run on
Android**, not merely look plausible. The agent **verifies before adding the entry** — a
snippet that doesn't build is a failed task.

1. **Implement it for real.** No pseudo-code, no `/* ... */` placeholders, no `TODO`, no
   invented APIs. Every symbol must exist in Jetpack Compose / Material 3 and every import resolve.
2. **Run it in the sample app.** Drop the composable into
   `sample/src/main/java/io/caveui/sample/` inside `CaveTheme { }`.
3. **Add `@Preview`s — light AND dark** (`@Preview` + `@Preview(uiMode = UI_MODE_NIGHT_YES)`),
   and confirm they render in the Android Studio preview pane.
4. **Build:** `./gradlew :library:assembleDebug :sample:assembleDebug` must pass
   (Android SDK required; JDK 17–21).
5. Only then paste the **verified** Kotlin into the registry `code` (trim to the minimal runnable
   snippet; keep `import`s out of the snippet but make sure they exist).

### Compose correctness rules
- **Hoist state**: `var x by remember { mutableStateOf(...) }`; drive motion with
  `animateFloatAsState`, `rememberInfiniteTransition`, `updateTransition`, or `Animatable` —
  never hand-rolled timers/threads.
- Use the **real APIs**: `Modifier.graphicsLayer`, `Canvas`/`drawBehind` (`DrawScope`),
  `PathMeasure`, `Brush`, `Spring`/`tween`/`keyframes`, `AnimatedContent`, `AnimatedVisibility`.
- `contentDescription` on every `Icon`; tint from `LocalContentColor` / `colorScheme`.
- Gate or soften infinite animations for **reduced motion**.
- Annotate experimental APIs with the matching `@OptIn`; stay within the repo's `minSdk`.
- The snippet must be **self-contained and runnable** as a `@Composable` (params have sane
  defaults or are obvious), so a reader can paste and run it immediately.

---

## Anti-slop — see ANTISLOP.md

All anti-slop rules (the absolute bans, the em-dash ban, color/typography/layout/state/motion/copy
rules, and the "AI made that" test) live in **[`ANTISLOP.md`](./ANTISLOP.md)** so there is one
source of truth. **Read it before adding a component.** It is the bar this checklist enforces.

> For a real design pass invoke a skill: `/impeccable polish|critique|audit <target>` (the skills
> live in `.agents/skills/`).

---

## SEO + image (per component)

Every component page must be individually discoverable:

- **SEO text** — comes from `description` (see above). `generateMetadata` in
  `[id]/page.tsx` sets `title`, `description`, and `openGraph`/`twitter` from the `Variant`,
  so a good `description` is the whole job. Write a distinct one for every component.
- **Image** — each component should expose a social/preview image. Standard:
  - Put a square-ish screenshot at `public/og/<category>/<id>.png` (the component on the
    device screen looks best — match the on-page phone preview).
  - Reference it from `generateMetadata` via `openGraph.images` / `twitter.images`, e.g.
    `images: [`/og/${category}/${id}.png`]`. Fall back to the site default when absent.
  - On the page itself the live `AndroidFrame` preview *is* the visual; the OG image is for
    link unfurls (Google, X, Slack, etc.).

> If a component has no image yet, ship the page anyway — the description + live preview are
> enough — and add the OG image in a follow-up.

---

## Checklist for a new component

```
- [ ] Added a Variant to src/lib/registry/<category>.tsx (unique id within the category)
- [ ] name = short title-case noun (no category word)
- [ ] description = one distinct, SEO-friendly sentence
- [ ] UNIQUE: concept + motion differ from every existing entry in the category (not a re-skin)
- [ ] NOT trivial: passes the Quality bar (no plain spin/pulse/default component)
- [ ] preview = themed shadcn/Tailwind approximation (reads as a screen element)
- [ ] code = real, compilable Material 3 Kotlin — no Cave* wrappers, no pseudo-code/invented APIs
- [ ] verified on Android: dropped in the sample app, light + dark @Preview render
- [ ] ./gradlew :library:assembleDebug :sample:assembleDebug passes
- [ ] (recommended) OG image at public/og/<category>/<id>.png wired into metadata
- [ ] npm run lint && npm run build both pass
```
