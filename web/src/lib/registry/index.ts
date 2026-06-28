import {
  BarChart3,
  Calendar,
  ChevronDown,
  CircleDot,
  CheckCheck,
  Command as CommandIcon,
  Compass,
  CreditCard,
  Layers,
  ListFilter,
  Loader,
  type LucideIcon,
  Menu,
  MessageCircle,
  MessageSquare,
  MousePointerClick,
  SlidersHorizontal,
  Sparkles,
  Tag,
  TextCursorInput,
  ToggleRight,
  User,
} from "lucide-react";
import type { CategorySlug, Variant } from "./types";
import { avatars } from "./avatars";
import { badges } from "./badges";
import { buttons } from "./buttons";
import { cards } from "./cards";
import { charts } from "./charts";
import { checks } from "./checks";
import { choices } from "./choices";
import { command } from "./command";
import { disclosures } from "./disclosures";
import { feedback } from "./feedback";
import { hints } from "./hints";
import { icons } from "./icons";
import { inputs } from "./inputs";
import { loaders } from "./loaders";
import { menus } from "./menus";
import { navigation } from "./navigation";
import { overlays } from "./overlays";
import { pickers } from "./pickers";
import { selects } from "./selects";
import { sliders } from "./sliders";
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
  checks,
  choices,
  hints,
  avatars,
  disclosures,
  sliders,
  selects,
  overlays,
  navigation,
  feedback,
  menus,
  pickers,
  charts,
  command,
};

export const categories: CategoryMeta[] = [
  { slug: "buttons", name: "Buttons", description: "Actions in every emphasis, state and animation.", icon: MousePointerClick },
  { slug: "cards", name: "Cards", description: "Surfaces for grouping content.", icon: CreditCard },
  { slug: "inputs", name: "Inputs", description: "Text fields, search, password and more.", icon: TextCursorInput },
  { slug: "badges", name: "Badges", description: "Status, counts and labels.", icon: Tag },
  { slug: "toggles", name: "Toggles", description: "Switches and segmented controls.", icon: ToggleRight },
  { slug: "loaders", name: "Loaders", description: "Spinners, bars, skeletons and dots.", icon: Loader },
  { slug: "icons", name: "Icons", description: "Animated icons ready for Compose.", icon: Sparkles },
  { slug: "checks", name: "Checks", description: "Checkboxes with satisfying check & fill animations.", icon: CheckCheck },
  { slug: "choices", name: "Choices", description: "Radio groups and segmented selectors.", icon: CircleDot },
  { slug: "hints", name: "Hints", description: "Tooltips and popovers that fade into place.", icon: MessageCircle },
  { slug: "avatars", name: "Avatars", description: "Avatars with rings, status and stacks.", icon: User },
  { slug: "disclosures", name: "Disclosures", description: "Accordions and collapsibles.", icon: ChevronDown },
  { slug: "sliders", name: "Sliders", description: "Value sliders, ranges and steppers.", icon: SlidersHorizontal },
  { slug: "selects", name: "Selects", description: "Selects, comboboxes and dropdown pickers.", icon: ListFilter },
  { slug: "overlays", name: "Overlays", description: "Dialogs, drawers, sheets and popovers.", icon: Layers },
  { slug: "navigation", name: "Navigation", description: "Nav bars, tabs, breadcrumbs and pagination.", icon: Compass },
  { slug: "feedback", name: "Feedback", description: "Alerts, toasts, progress and empty states.", icon: MessageSquare },
  { slug: "menus", name: "Menus", description: "Dropdown, context and menu bars.", icon: Menu },
  { slug: "pickers", name: "Pickers", description: "Calendars and date pickers.", icon: Calendar },
  { slug: "charts", name: "Charts", description: "Animated bars, lines and sparklines.", icon: BarChart3 },
  { slug: "command", name: "Command", description: "Command palette and quick search.", icon: CommandIcon },
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
