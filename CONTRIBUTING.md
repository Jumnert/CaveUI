# Contributing to caveui

Thanks for helping build caveui! 🪨 This project is **community-driven**: adding a
component should be a single, well-defined pull request that anyone can follow without
understanding the whole codebase. This guide is that recipe.

If anything here is unclear, open an issue — improving these docs is a valid contribution too.

---

## Ground rules

- **One component per pull request.** Keeps reviews fast and history clean.
- **The `Button` is the reference.** Every component copies the shape of
  [`CaveButton.kt`](./library/src/main/java/io/caveui/components/button/CaveButton.kt).
  When in doubt, do what Button does.
- **Build on Material 3 unless you have a reason not to.** You inherit dark mode,
  ripple, and accessibility for free. Reach for a from-scratch look only when M3
  genuinely can't express the design.
- **No new dependencies** without discussing in an issue first.

---

## What lives where

```
library/src/main/java/io/caveui/
├── theme/                    # design tokens — usually you just READ these
└── components/
    └── <component>/          # YOUR component goes in its own folder
        └── Cave<Name>.kt

sample/                       # the demo app — add a section showing your component
web/src/app/components/        # the docs site — add a page for your component
```

---

## The component template (the contract)

Every component file must follow the same six rules. `CaveButton.kt` documents them at
the top of the file — copy it and adapt:

1. **KDoc on the public composable.** A one-line summary, a short code example, and
   `@param` for every parameter. This is what shows up when people read the source.
2. **A small, explicit public API.** Don't leak internal helpers. Public surface =
   the composable + any enums it needs.
3. **Model variants/sizes as enums, not loose booleans.** `CaveButtonVariant` over
   `isPrimary: Boolean`. Booleans don't scale and read badly at the call site.
4. **Sensible defaults** so the simplest call site is one line:
   `CaveButton(text = "Hi", onClick = {})`.
5. **A `modifier: Modifier = Modifier` parameter**, placed right after the required
   params. Always forward it to the root element.
6. **At least one `@Preview`** — ideally light *and* dark. Mark previews `internal`
   and keep helper composables `private`.

Naming: components are prefixed `Cave` (`CaveButton`, `CaveCard`) and live in package
`io.caveui.components.<component>`.

---

## Step by step: add a component

Say you're adding a **Card**.

### 1. Create the component

```
library/src/main/java/io/caveui/components/card/CaveCard.kt
```

Copy `CaveButton.kt` into it, rename, and reshape to the six rules above. Pull design
values from the theme (`MaterialTheme.colorScheme.*`, `MaterialTheme.shapes.*`,
`CaveTheme.spacing.*`) — never hard-code colors or font sizes.

### 2. Show it in the sample app

Open [`sample/.../MainActivity.kt`](./sample/src/main/java/io/caveui/sample/MainActivity.kt)
and add a `ComponentSection` for your component, mirroring the Button sections. This is
the on-device test bed — run the `sample` app in Android Studio and make sure it looks
right in light and dark mode.

### 3. Verify the Android side

```bash
./gradlew :library:assembleDebug :sample:assembleDebug
```

> Requires the Android SDK (Android Studio sets this up). The first run also completes
> the Gradle wrapper. caveui targets JDK 17–21 for the build.

Confirm your `@Preview`s render in the Android Studio preview pane.

### 4. Add the docs page

Create an MDX page mirroring the Button's:

```
web/src/app/components/card/page.mdx
```

It should contain, in order:
- An `# <Name>` heading and a one-paragraph description.
- A `<PreviewFrame>` with a quick HTML approximation of the look (see
  `web/src/components/Preview.tsx` — add a small `CardPreview` if needed). Previews on
  the web are *approximations*; the source of truth is your Kotlin + a screenshot/GIF.
- `<CodeBlock code={`...`} />` snippets for **usage**, **variants**, and **states**.
- An **API** list of every parameter.

Then register it in the gallery grid in
[`web/src/app/page.tsx`](./web/src/app/page.tsx): change your component's `status` to
`"ready"` (or add a new entry).

### 5. Verify the web side

```bash
cd web
npm install
npm run build      # must succeed; emits the static site to web/out/
```

`npm run dev` lets you preview at http://localhost:3000 while you work.

---

## Submitting the pull request

1. Fork the repo and create a branch: `git checkout -b component/card`.
2. Commit the component, the sample section, and the docs page together.
3. Push and open a PR. In the description include:
   - A **screenshot or GIF** of the component running in the sample app (light + dark).
   - A note that `./gradlew assembleDebug` and `npm run build` both pass.
4. A maintainer reviews against the six template rules and merges. 🎉

---

## Checklist (paste this into your PR)

```
- [ ] Component lives in io.caveui.components.<name>/Cave<Name>.kt
- [ ] Follows the 6 template rules (KDoc, small API, enums, defaults, modifier, @Preview)
- [ ] Uses theme tokens — no hard-coded colors/sizes
- [ ] Added a section to the sample app and verified light + dark
- [ ] ./gradlew :library:assembleDebug :sample:assembleDebug passes
- [ ] Added web/src/app/components/<name>/page.mdx and registered it in page.tsx
- [ ] npm run build passes
- [ ] PR includes a screenshot/GIF
```

By contributing, you agree your work is released under the [MIT License](./LICENSE).
