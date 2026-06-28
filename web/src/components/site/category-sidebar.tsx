"use client";

import { usePathname } from "next/navigation";
import { categories } from "@/lib/registry";
import { LineNav, type LineNavItem } from "@/components/ui/line-nav";

/** Top-level doc sections. "Components" is the gallery; the rest are /docs pages. */
const SECTIONS: LineNavItem[] = [
  { title: "Introduction", href: "/docs/introduction/" },
  { title: "Components", href: "/components/" },
  { title: "Installation", href: "/docs/installation/" },
  { title: "Theming", href: "/docs/theming/" },
  { title: "CLI", href: "/docs/cli/" },
  { title: "RTL", href: "/docs/rtl/" },
  { title: "Skills", href: "/docs/skills/" },
  { title: "MCP Server", href: "/docs/mcp-server/" },
  { title: "Registry", href: "/docs/registry/" },
  { title: "Forms", href: "/docs/forms/" },
  { title: "Changelog", href: "/docs/changelog/" },
];

/** Docs sidebar: a "Sections" LineNav over a "Components" LineNav (active derived from the URL). */
export function CategorySidebar() {
  const pathname = usePathname();

  const componentItems: LineNavItem[] = categories.map((c) => ({
    title: c.name,
    href: `/components/${c.slug}/`,
  }));

  const activeCategory = categories.find((c) => pathname.startsWith(`/components/${c.slug}`));
  const activeComponentHref = activeCategory ? `/components/${activeCategory.slug}/` : undefined;
  // Highlight the matching Sections entry: "Components" on any /components route, or the
  // current /docs page otherwise.
  const activeSectionHref = SECTIONS.find((s) => {
    const base = s.href.replace(/\/$/, "");
    return pathname === base || pathname.startsWith(`${base}/`);
  })?.href;

  return (
    <aside className="hidden w-56 shrink-0 lg:block">
      <div className="sticky top-20 space-y-6">
        <div>
          <p className="px-3.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Sections
          </p>
          <LineNav
            className="px-3.5"
            items={SECTIONS}
            activeHref={activeSectionHref}
            scrollActiveIntoView={false}
          />
        </div>

        <div>
          <p className="px-3.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Components
          </p>
          <LineNav
            className="px-3.5"
            items={componentItems}
            activeHref={activeComponentHref}
            scrollActiveIntoView={false}
          />
        </div>
      </div>
    </aside>
  );
}
