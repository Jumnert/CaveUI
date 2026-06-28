"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories, getVariants } from "@/lib/registry";
import { cn } from "@/lib/utils";

/** shadcn-style docs sidebar listing every category with a count + active highlight. */
export function CategorySidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-56 shrink-0 lg:block">
      <nav className="sticky top-20 space-y-1">
        <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Components
        </p>
        {categories.map((c) => {
          const href = `/components/${c.slug}`;
          const active = pathname.startsWith(href);
          const Icon = c.icon;
          return (
            <Link
              key={c.slug}
              href={`${href}/`}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                active
                  ? "bg-sidebar-accent font-medium text-sidebar-accent-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground",
              )}
            >
              <Icon className="size-4" />
              <span className="flex-1">{c.name}</span>
              <span className="text-xs text-muted-foreground">{getVariants(c.slug).length}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
