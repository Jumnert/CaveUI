import {
  CreditCard,
  Loader,
  type LucideIcon,
  MousePointerClick,
  Sparkles,
  Tag,
  TextCursorInput,
  ToggleRight,
} from "lucide-react";
import type { CategorySlug, Variant } from "./types";
import { badges } from "./badges";
import { buttons } from "./buttons";
import { cards } from "./cards";
import { icons } from "./icons";
import { inputs } from "./inputs";
import { loaders } from "./loaders";
import { toggles } from "./toggles";

export type CategoryMeta = {
  slug: CategorySlug;
  name: string;
  description: string;
  icon: LucideIcon;
};

/** All variants keyed by category. */
export const registry: Record<CategorySlug, Variant[]> = {
  buttons,
  cards,
  inputs,
  badges,
  toggles,
  loaders,
  icons,
};

export const categories: CategoryMeta[] = [
  { slug: "buttons", name: "Buttons", description: "Actions in every emphasis, state and animation.", icon: MousePointerClick },
  { slug: "cards", name: "Cards", description: "Surfaces for grouping content.", icon: CreditCard },
  { slug: "inputs", name: "Inputs", description: "Text fields, search, password and more.", icon: TextCursorInput },
  { slug: "badges", name: "Badges", description: "Status, counts and labels.", icon: Tag },
  { slug: "toggles", name: "Toggles", description: "Switches and segmented controls.", icon: ToggleRight },
  { slug: "loaders", name: "Loaders", description: "Spinners, bars, skeletons and dots.", icon: Loader },
  { slug: "icons", name: "Icons", description: "Animated icons ready for Compose.", icon: Sparkles },
];

export const getCategory = (slug: string): CategoryMeta | undefined =>
  categories.find((c) => c.slug === slug);

export const getVariants = (slug: string): Variant[] => registry[slug as CategorySlug] ?? [];

export const getVariant = (slug: string, id: string): Variant | undefined =>
  getVariants(slug).find((v) => v.id === id);

/** Params for generateStaticParams on /components/[category]. */
export const categoryParams = (): { category: string }[] =>
  categories.map((c) => ({ category: c.slug }));

/** Params for generateStaticParams on /components/[category]/[id]. */
export const variantParams = (): { category: string; id: string }[] =>
  categories.flatMap((c) => getVariants(c.slug).map((v) => ({ category: c.slug, id: v.id })));

export const totalVariants = (): number =>
  categories.reduce((n, c) => n + getVariants(c.slug).length, 0);
