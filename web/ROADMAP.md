# caveui — Component Roadmap

How we grow the catalog. caveui is **not** a 1:1 clone of shadcn/ui — it's a curated,
**animated, copy-worthy** Jetpack Compose catalog. We cover the meaningful surface area,
grouped into caveui categories, and deliberately **skip trivial primitives**.

> Every addition must clear the bar in [`DESIGN.md`](./DESIGN.md): unique, polished,
> Material-3-based, verified to compile on Android. Prefer fewer excellent variants.

---

## Categories — status

### ✅ Shipped
- **Buttons**, **Cards**, **Inputs**, **Badges**, **Toggles**, **Loaders**, **Icons**,
  **Checks** (checkboxes), **Choices** (radio + segmented), **Hints** (tooltips).

### 🔜 Planned next (high value, animation-rich)
| caveui category | covers (shadcn) | notes |
| --- | --- | --- |
| **Avatars** | Avatar | rings, status dots, stacks, fallback morphs |
| **Disclosures** | Accordion, Collapsible | expand/collapse with measured height + chevron morph |
| **Sliders** | Slider | value bubble, gradient track, snap, range |
| **Selects** | Select, Combobox, Native Select | sheet/menu select with search + check |
| **Overlays** | Dialog, Alert Dialog, Drawer, Sheet, Popover | spring/slide enter, scrim |
| **Navigation** | Navigation bar/rail, Tabs, Breadcrumb, Pagination | sliding active indicator |
| **Feedback** | Alert, Toast (Sonner), Progress, Skeleton, Empty | enter/exit + shimmer |
| **Menus** | Dropdown Menu, Context Menu, Menubar | staggered item reveal |
| **Pickers** | Calendar, Date Picker | day selection, range sweep |
| **Charts** | Chart | animated bars/line draw-on, sparkline |
| **Sheets/Command** | Command | the ⌘K palette as a copyable component |
| **Avatars/Chips/Tags** | (Badge group) | already partly in Badges |

### 🧩 Folded into existing categories (extend, don't add)
- **Input OTP, Input Group, Textarea, Field, Search** → **Inputs**
- **Switch, Toggle, Toggle Group** → **Toggles**
- **Radio Group, Segmented** → **Choices**
- **Spinner, Progress, Skeleton** → **Loaders**
- **Tooltip, Hover Card, Popover** → **Hints**

### 🚫 Won't ship (trivial primitive or web-only — fails the quality bar)
- **Separator, Aspect Ratio, Label, Kbd, Scroll Area, Resizable, Direction, Typography,
  Item, Marker** — structural/trivial; a dev writes these in seconds. (Document them in
  `/docs` instead if useful, not as "components".)
- **Bubble, Message, Message Scroller, Attachment** — chat-specific; revisit only if we add
  a dedicated "Chat" kit.

---

## "Customize" angle (the navbutton idea)

The point isn't to re-publish a default `NavigationBar` — it's to ship **opinionated,
customized** versions worth copying: e.g. a nav bar with a **morphing pill indicator**, a
**bouncing icon on select**, or an **animated badge**. Same for every category: the default
M3 component is the *base*; the caveui entry is the *customization on top*.

---

## How to add a category (mechanical)

1. `src/lib/registry/types.ts` → add the slug to `CategorySlug`.
2. `src/lib/registry/<slug>.tsx` → export the `Variant[]` (see DESIGN.md).
3. `src/lib/registry/index.ts` → import it, add to `registry` + a `categories` meta entry (icon, name, description).
4. (optional) `src/components/site/category-art.tsx` → add an animated banner case for the index card.
5. It now appears automatically in the sidebar, `/components`, the gallery and detail pages.

Then fill it with components that clear the DESIGN.md quality bar — and only those.
