import type { ReactNode } from "react";

/** Category slugs used in routes: /components/[category]. */
export type CategorySlug =
  | "buttons"
  | "cards"
  | "inputs"
  | "badges"
  | "toggles"
  | "loaders"
  | "icons"
  | "checks"
  | "choices"
  | "hints"
  | "avatars"
  | "disclosures"
  | "sliders"
  | "selects"
  | "overlays"
  | "navigation"
  | "feedback"
  | "menus"
  | "pickers"
  | "charts"
  | "command";

/**
 * One catalog entry. `preview` is the live (shadcn/Tailwind) rendering shown in the
 * gallery and detail page; `code` is the Kotlin/Compose source users copy. The install
 * command is derived from the id (`npx caveui add <id>`).
 */
export type Variant = {
  id: string;
  name: string;
  category: CategorySlug;
  description?: string;
  tags?: string[];
  /** Kotlin / Jetpack Compose source. */
  code: string;
  /** Live preview node (rendered with shadcn + Tailwind). */
  preview: ReactNode;
};

export type Category = {
  slug: CategorySlug;
  name: string;
  description: string;
};

/** The install command shown on a detail page. */
export const installCommand = (id: string) => `npx caveui@latest add ${id}`;
