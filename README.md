<div align="center">

# 🪨 caveui

**Beautiful, copy-friendly Jetpack Compose components — built by the community.**

Inspired by [shadcn/ui](https://ui.shadcn.com), [uiverse](https://uiverse.io), and Tailwind UI,
but for **Android Jetpack Compose**. Open source. No black boxes. Easy to contribute.

</div>

---

## What is this?

caveui is a growing collection of polished, ready-to-use Jetpack Compose components
(buttons, cards, inputs, and more). Every component is:

- **Built on Material 3** for free dark mode, dynamic color, and typography — with a custom design-token layer on top for components that need a from-scratch look.
- **Self-contained** — one component lives in one folder, so you can read it, copy it, or improve it without understanding the whole library.
- **Documented on the web** — browse a live gallery with previews and copy-paste code at the docs site (no account, no backend).

## Repository layout

This is a monorepo with two worlds: the **Android library** (Kotlin/Gradle) and the **docs website** (Next.js).

```
caveui/
├── library/        # The published Compose library (the components live here)
│   └── src/main/java/io/caveui/
│       ├── theme/          # Design tokens: color, typography, shapes, spacing
│       └── components/     # One folder per component (button, card, ...)
├── sample/         # Android demo app — the test bed for every component
├── web/            # Next.js + Tailwind + MDX static docs/gallery site (no backend)
├── CONTRIBUTING.md # How to add a component (start here if you want to help!)
└── README.md
```

## Quick start (using a component)

> Maven publishing is coming soon. For now, clone the repo and run the `sample` app in Android Studio to see everything in action.

```kotlin
import io.caveui.components.button.CaveButton
import io.caveui.theme.CaveTheme

CaveTheme {
    CaveButton(text = "Get started", onClick = { /* ... */ })
}
```

## Run the docs site locally

```bash
cd web
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to web/out/  (no backend)
npm run clean    # remove .next/ and out/ (run when switching dev <-> build)
```

The site is a **uiverse/shadcn-style gallery**: a landing page plus six component
categories (Buttons, Cards, Inputs, Badges & Chips, Toggles, Loaders), each with 10+
unique live variants, a light/dark toggle, and copy-paste code on every tile.

## Deploy the docs site

The site is a fully static export (`output: "export"`) — no server, no backend.

- **GitHub Pages:** push to `main`; the workflow in `.github/workflows/deploy-web.yml`
  builds `web/` and deploys `web/out/` to Pages. It sets `NEXT_PUBLIC_BASE_PATH` to the
  repo name automatically so assets resolve under `https://<user>.github.io/<repo>/`.
  (Enable Pages → Source: GitHub Actions in repo settings once.)
- **Netlify:** `netlify.toml` is preconfigured (base `web`, publish `out`). Import the
  repo and it builds with zero extra setup.
- **Vercel / any static host:** set the project root to `web/` and serve `web/out/`.
  For a custom domain or user/org Pages (served at the root), leave
  `NEXT_PUBLIC_BASE_PATH` unset.

## Contributing

caveui is **community-driven** — adding a component is a single, well-defined pull request.
Read [CONTRIBUTING.md](./CONTRIBUTING.md) for the exact step-by-step workflow. The `Button`
component is the reference template: copy its shape when you build a new one.

## License

[MIT](./LICENSE) © caveui contributors
