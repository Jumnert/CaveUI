"use client";

import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

export type MinimapItem = {
  title: string;
  url: string;
};

// Fixed row pitch so the sliding indicator can be positioned purely from the active index
// (no DOM measurement / setState-in-effect needed).
const ROW_REM = 1.75; // h-7

/**
 * A compact, animated minimap of a page's sections. A primary accent bar smoothly slides
 * to the active section as you scroll; clicking a row smooth-scrolls to it.
 */
export function ComponentMinimap({
  items,
  className,
}: {
  items: MinimapItem[];
  className?: string;
}) {
  const ids = useMemo(() => items.map((i) => i.url.replace("#", "")), [items]);
  const active = useActiveSection(ids);
  const activeIndex = items.findIndex((i) => i.url === `#${active}`);

  if (!items.length) return null;

  return (
    <nav aria-label="On this page" className={cn("flex flex-col", className)}>
      <div className="relative">
        {/* Sliding active indicator */}
        <span
          aria-hidden
          className="absolute left-0 h-7 w-0.5 rounded-full bg-primary transition-[transform,opacity] duration-300 ease-out"
          style={{
            transform: `translateY(${Math.max(activeIndex, 0) * ROW_REM}rem)`,
            opacity: activeIndex >= 0 ? 1 : 0,
          }}
        />

        {items.map((item) => {
          const isActive = item.url === `#${active}`;
          return (
            <a
              key={item.url}
              href={item.url}
              onClick={handleItemClick}
              data-active={isActive}
              className="group flex h-7 items-center gap-3 pl-4 text-muted-foreground transition-colors hover:text-foreground data-active:text-foreground"
            >
              <span className="h-px w-4 shrink-0 rounded-full bg-border transition-all duration-200 group-hover:bg-foreground/50 group-data-[active=true]:w-6 group-data-[active=true]:bg-foreground" />
              <span className="truncate text-xs">{item.title}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}

function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "0% 0% -70% 0%", threshold: 0.5 },
    );

    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}

function handleItemClick(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  const url = e.currentTarget.getAttribute("href") ?? "";
  history.pushState(null, "", url);
  document.getElementById(url.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
}
