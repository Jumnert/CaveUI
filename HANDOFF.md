# caveui — Session Handoff

Snapshot of work done on the **caveui** docs site (`web/`) so another session can pick up.

## Project

- **caveui** = shadcn-style, copy-paste **Jetpack Compose** component catalog, built **on top of Material 3**.
- Monorepo: `library/` (Kotlin/Gradle lib, only `CaveButton.kt` exists), `sample/` (Android demo), `web/` (Next.js 16 + Tailwind v4 + shadcn docs site, **static export** `output: "export"`).
- Repo: `https://github.com/Jumnert/CaveUI` · Domain: `https://ui.jumnert.dev`

## Working in `web/`

```bash
cd web
npm run dev      # localhost:3000
npm run lint     # eslint (strict: react-hooks/set-state-in-effect is an ERROR)
npm run build    # static export to web/out/  (227 pages currently)
```

- `npm run lint` is piped through `tail` in checks — **read the output**, exit code is unreliable.
- Lint rule `react-hooks/set-state-in-effect` is enforced → use `useSyncExternalStore` for
  localStorage/DOM-derived state (see `usePackageManager`, `useIsMobile`, `ThemeToggle`).
- `usePathname()` does NOT resolve the route at static-export prerender time — do not use it to
  conditionally render server content (caused a footer bug; solved by per-page rendering).

## Key files

- `web/src/lib/registry/` — component catalog data. One file per category (`buttons`, `cards`,
  `inputs`, `badges`, `toggles`, `loaders`, `icons`). Each `Variant` = `{ id, name, category, code (Kotlin string), preview (React node) }`.
- `web/src/lib/docs.ts` — content for the doc "Sections" pages.
- `web/src/app/` — routes: `/`, `/components`, `/components/[category]`, `/components/[category]/[id]`,
  `/docs/[slug]`, `/blocks`.
- `web/src/components/site/` — site chrome (sidebar, search, footer, code blocks, android frame, etc.).
- `web/src/app/globals.css` — design tokens (amber on warm stone), incl. `--code` tokens and the
  AnimatedThemeToggler view-transition CSS.

## What was done this session

1. **Sidebar** → animated `LineNav` (`ui/line-nav.tsx`) with a **Sections** group (Introduction,
   Components, Installation, Theming, CLI, RTL, Skills, MCP Server, Registry, Forms, Changelog) over a
   **Components** (categories) group. Shared via `site/sidebar-shell.tsx`. Active state from URL.
2. **Docs pages** created for all Sections (`lib/docs.ts` + `app/docs/[slug]/page.tsx`, data-driven, prev/next footer).
3. **Install / copy code block**:
   - Replaced custom switcher: added shadcn-style `CodeBlockCommand` (`site/code-block-command.tsx`) with
     `convertNpmCommand` — but it is **no longer used in install** (kept for reuse).
   - Install is now **M3-first**: `InstallTabs` (`site/install-tabs.tsx`) shows components are copy-paste
     Compose on Material 3 (no caveui dependency / no Gradle dep / no npx). Just the Compose-BOM + material3 prerequisite.
4. **ShareMenu** (`site/share-menu.tsx`, shadcn dropdown-menu + sonner) on detail page header.
5. **Theme**: code blocks are now theme-aware via `--code` / `--code-foreground` tokens.
   Theme toggle → MagicUI `AnimatedThemeToggler` (`ui/animated-theme-toggler.tsx`, View Transitions; adapted
   to `useSyncExternalStore`, lint-clean).
6. **Search**: shadcn `command` palette `SearchCommand` (`site/search-command.tsx`, ⌘K) in nav — searches
   pages/docs/categories/components. (Fixed: shadcn `CommandDialog` was missing the `<Command>` wrapper.)
7. **Nav**: logo + Home/Docs/Components/Blocks links (`text-[15px]`); right side = Search (`sm:w-64`) │
   GitHub icon │ ThemeToggle with shadcn `Separator` dividers. Star count was added then **removed** per request.
8. **Android mockup**: every component preview renders inside the MagicUI **Android** device frame
   (`ui/android.tsx` + `site/android-frame.tsx`) on detail page (h-600) and gallery tiles (h-360). Screen is a
   flat white/dark fill (no rounded overlay bg).
9. **Hero** (`watermelon-ui/cta-2.tsx`): enlarged (text-5xl→8xl, Instrument Serif), removed hardcoded
   "Ship with confidence." → headline is `headingLine1` + optional italic highlight ("Copy-paste Compose *components.*").
10. **Home** (`app/page.tsx`): announcement bar (index-only, flush under nav, `watermelon-ui/announcement-4.tsx`),
    reordered so **"A taste of the library"** comes **before** Integrations ("By developers, for developers").
11. **Footer**: moved out of root layout into `site/site-footer.tsx`; rendered ONLY on home, docs, blocks.
    **No footer anywhere under `/components/*`** (index, category, detail).
12. **Component detail page**: footer removed; after **Usage** there's a bottom prev/next nav
    (`< PrevName` / `NextName >`).
13. **M3 correctness in code samples** (big one):
    - `inputs.tsx` + login card: `CaveTextField` → M3 `OutlinedTextField` (composable-lambda params,
      `OutlinedTextFieldDefaults.colors`, IconButton trailing, etc.).
    - All `CaveButton` (buttons.tsx, cards.tsx, inputs.tsx) → M3 `Button` family (`Button`,
      `FilledTonalButton`, `OutlinedButton`, `TextButton`, `OutlinedIconButton`) with customizations.

## OPEN / TODO

- **Convert remaining `Cave*` wrappers in code samples to M3** for full consistency (user leaning yes):
  - `CaveCard` → `Card` (M3)  · `CaveBadge`/`CaveBadgeVariant` → `Badge` / `AssistChip`
  - `CaveSwitch` → `Switch`  · `CaveSegmented` → `SingleChoiceSegmentedButtonRow`
  - leftover custom helpers: `CaveOtpBox`, `CaveFilePickerField`, `CaveTagsField` (no direct M3 equiv — decide).
  - Files: `web/src/lib/registry/{cards,badges,toggles}.tsx` (+ scan `loaders.tsx`, `icons.tsx`).
- **`/docs/cli` page** still describes an `npx caveui add` CLI — now inconsistent with the M3/copy-paste
  install story. Either rewrite it (Gradle/Manual) or remove the CLI entry from the sidebar Sections.
- `lib/registry/types.ts` still exports `installCommand` (`npx caveui@latest add`) — unused now; update or remove.
- Unused-but-kept: `site/code-block-command.tsx` (+ `convertNpmCommand`) — reuse or delete.
- Install snippet uses example versions (`compose-bom:2025.06.00`) — adjust when real.

## Conventions / gotchas

- Components are **copy-paste, built on Material 3** — code samples must show **M3 components customized**
  (e.g. `Button`, `OutlinedTextField`), never invented `Cave*` text-field/button names.
- Static export: client browser APIs must be guarded; build-time fetches OK but bake at build.
- Verify every change with `npm run lint` AND `npm run build` (read output, not exit code).
