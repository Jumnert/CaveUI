/**
 * Content for the top-level documentation "Sections" (everything in the sidebar that
 * isn't a component category). Data-driven so a single `/docs/[slug]` route renders them
 * all and `generateStaticParams` can pre-render every page for the static export.
 */

export type DocBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "code"; lang: string; code: string };

export type Doc = {
  slug: string;
  title: string;
  description: string;
  blocks: DocBlock[];
};

export const docs: Doc[] = [
  {
    slug: "introduction",
    title: "Introduction",
    description: "What caveui is and why it exists.",
    blocks: [
      {
        type: "p",
        text: "caveui is a community-driven catalog of beautiful, copy-friendly Jetpack Compose components. Inspired by shadcn/ui, uiverse and Tailwind UI — but for Android. There is no black box: every component is source you read, copy, and own.",
      },
      { type: "h2", text: "Principles" },
      {
        type: "ul",
        items: [
          "Built on Material 3 — you inherit dark mode, dynamic color, ripple and accessibility for free, with a custom design-token layer on top.",
          "Self-contained — one component lives in one folder, so you can read or copy it without understanding the whole library.",
          "Documented on the web — browse a live gallery with previews and copy-paste code, no account and no backend.",
          "MIT licensed — copy the code into your project and customize it freely.",
        ],
      },
      {
        type: "p",
        text: "Head to the Components section to browse the catalog, or read Installation to get a component into your project.",
      },
    ],
  },
  {
    slug: "installation",
    title: "Installation",
    description: "Get a caveui component into your Jetpack Compose project.",
    blocks: [
      {
        type: "p",
        text: "Maven publishing is coming soon. Today there are two ways to use a component: add it with the CLI, or copy the Kotlin from any component's detail page.",
      },
      { type: "h2", text: "Add with the CLI" },
      { type: "code", lang: "bash", code: "npx caveui@latest add button-gradient" },
      { type: "h2", text: "Wrap your app in CaveTheme" },
      {
        type: "code",
        lang: "kotlin",
        code: `import io.caveui.components.button.CaveButton
import io.caveui.theme.CaveTheme

CaveTheme {
    CaveButton(text = "Get started", onClick = { /* ... */ })
}`,
      },
      {
        type: "p",
        text: "CaveTheme builds on MaterialTheme, so dark mode and dynamic color work out of the box. See Theming for the available design tokens.",
      },
    ],
  },
  {
    slug: "theming",
    title: "Theming",
    description: "Design tokens: color, typography, shapes and spacing.",
    blocks: [
      {
        type: "p",
        text: "caveui is built on Material 3 with a thin design-token layer on top. Components never hard-code colors or sizes — they read from the theme so they adapt to light, dark and dynamic color automatically.",
      },
      { type: "h2", text: "Tokens" },
      {
        type: "ul",
        items: [
          "Color — MaterialTheme.colorScheme.* (primary, surface, onSurface, …).",
          "Shape — MaterialTheme.shapes.* for corner radii.",
          "Spacing — CaveTheme.spacing.* for consistent padding and gaps.",
          "Typography — MaterialTheme.typography.* for text styles.",
        ],
      },
      {
        type: "code",
        lang: "kotlin",
        code: `Surface(
    color = MaterialTheme.colorScheme.surface,
    shape = MaterialTheme.shapes.large,
) {
    Text(
        text = "Themed",
        style = MaterialTheme.typography.titleMedium,
        modifier = Modifier.padding(CaveTheme.spacing.md),
    )
}`,
      },
      {
        type: "p",
        text: "The docs site uses its own token set — an amber primary on a warm stone surface, with class-based dark mode — but the principle is the same: style from tokens, never hard-coded values.",
      },
    ],
  },
  {
    slug: "cli",
    title: "CLI",
    description: "Add components from the terminal with npx caveui.",
    blocks: [
      {
        type: "p",
        text: "Every component detail page shows an install command. The CLI copies the component's source into your project so you own and can edit it.",
      },
      { type: "h2", text: "Add a component" },
      { type: "code", lang: "bash", code: "npx caveui@latest add button-gradient" },
      { type: "h2", text: "Works with your package manager" },
      {
        type: "ul",
        items: [
          "npm — npx caveui@latest add <id>",
          "pnpm — pnpm dlx caveui@latest add <id>",
          "yarn — yarn dlx caveui@latest add <id>",
          "bun — bunx --bun caveui@latest add <id>",
        ],
      },
      {
        type: "p",
        text: "The package-manager switcher on each component page generates the right command for you — and remembers your preference.",
      },
    ],
  },
  {
    slug: "rtl",
    title: "RTL",
    description: "Right-to-left layout support in Jetpack Compose.",
    blocks: [
      {
        type: "p",
        text: "Compose mirrors layouts automatically based on the ambient layout direction. caveui components use start/end (not left/right) padding and alignment, so they flip correctly in RTL locales with no extra work.",
      },
      { type: "h2", text: "Preview a component in RTL" },
      {
        type: "code",
        lang: "kotlin",
        code: `import androidx.compose.ui.unit.LayoutDirection
import androidx.compose.ui.platform.LocalLayoutDirection

CompositionLocalProvider(LocalLayoutDirection provides LayoutDirection.Rtl) {
    CaveTheme {
        CaveButton(text = "ابدأ", onClick = {})
    }
}`,
      },
      {
        type: "p",
        text: "When you build a new component, always forward the modifier and use start/end padding so RTL keeps working for everyone.",
      },
    ],
  },
  {
    slug: "skills",
    title: "Skills",
    description: "Agent skills that scaffold and review caveui components.",
    blocks: [
      {
        type: "p",
        text: "Skills are reusable instructions an AI agent can follow to work in this repo — for example scaffolding a new component from the Button template, or reviewing a contribution against the six template rules.",
      },
      { type: "h2", text: "What a skill captures" },
      {
        type: "ul",
        items: [
          "The exact file layout for a component (library + sample section + docs page).",
          "The contract: KDoc, a small public API, enums for variants, sensible defaults, a forwarded modifier, and light + dark @Preview.",
          "The verification steps: ./gradlew assembleDebug and npm run build must both pass.",
        ],
      },
      {
        type: "p",
        text: "Because the workflow is captured as a skill, adding a component stays a single, well-defined pull request that anyone — human or agent — can follow.",
      },
    ],
  },
  {
    slug: "mcp-server",
    title: "MCP Server",
    description: "Expose the caveui registry to AI tools over MCP.",
    blocks: [
      {
        type: "p",
        text: "The Model Context Protocol (MCP) lets AI tools search and install components directly from a registry. Point your MCP-aware editor at caveui to browse the catalog and pull components without leaving your workflow.",
      },
      { type: "h2", text: "Configure your client" },
      {
        type: "code",
        lang: "json",
        code: `{
  "mcpServers": {
    "caveui": {
      "command": "npx",
      "args": ["-y", "caveui@latest", "mcp"]
    }
  }
}`,
      },
      {
        type: "ul",
        items: [
          "Search the catalog by name, category or tag.",
          "Read a component's Kotlin source and usage.",
          "Install a component into the current project.",
        ],
      },
    ],
  },
  {
    slug: "registry",
    title: "Registry",
    description: "How components are described and served to the gallery and CLI.",
    blocks: [
      {
        type: "p",
        text: "The registry is the single source of truth for the gallery, the detail pages and the install command. It lives in web/src/lib/registry, with one file per category (buttons, cards, inputs, …).",
      },
      { type: "h2", text: "A registry entry" },
      {
        type: "code",
        lang: "tsx",
        code: `export type Variant = {
  id: string;
  name: string;
  category: CategorySlug;
  description?: string;
  tags?: string[];
  /** Kotlin / Jetpack Compose source users copy. */
  code: string;
  /** Live preview node (rendered with shadcn + Tailwind). */
  preview: ReactNode;
};`,
      },
      {
        type: "p",
        text: "The install command is derived from the id (npx caveui@latest add <id>), and the web preview is an approximation — the Kotlin source is always the source of truth.",
      },
    ],
  },
  {
    slug: "forms",
    title: "Forms",
    description: "Compose forms with caveui inputs and buttons.",
    blocks: [
      {
        type: "p",
        text: "Combine caveui inputs with a CaveButton to build forms. State is hoisted with remember/mutableStateOf, and validation is just plain Kotlin — no form library required.",
      },
      {
        type: "code",
        lang: "kotlin",
        code: `var email by remember { mutableStateOf("") }
val isValid = email.contains("@")

Column(verticalArrangement = Arrangement.spacedBy(CaveTheme.spacing.md)) {
    OutlinedTextField(
        value = email,
        onValueChange = { email = it },
        label = { Text("Email") },
        isError = email.isNotEmpty() && !isValid,
        singleLine = true,
    )
    CaveButton(
        text = "Subscribe",
        onClick = { /* submit */ },
        enabled = isValid,
    )
}`,
      },
      {
        type: "p",
        text: "Browse the Inputs category for search fields, password inputs and more form-ready components.",
      },
    ],
  },
  {
    slug: "changelog",
    title: "Changelog",
    description: "Notable changes to caveui.",
    blocks: [
      { type: "h2", text: "Unreleased" },
      {
        type: "ul",
        items: [
          "Docs: animated LineNav sidebar with a Sections group and per-category Components group.",
          "Docs: CodeBlockCommand install block with a pnpm/yarn/npm/bun switcher, persisted preference and copy button.",
          "Docs: ShareMenu on component pages (copy link, X, LinkedIn, native share).",
          "Docs: AnimatedThemeToggler with a View Transitions reveal; code blocks now adapt to light and dark.",
        ],
      },
      { type: "h2", text: "0.1.0" },
      {
        type: "ul",
        items: [
          "Initial release: the CaveButton reference component and the static docs/gallery site.",
          "Material 3 theme with color, typography, shape and spacing tokens.",
        ],
      },
    ],
  },
];

export const getDoc = (slug: string): Doc | undefined => docs.find((d) => d.slug === slug);

export const docParams = (): { slug: string }[] => docs.map((d) => ({ slug: d.slug }));
