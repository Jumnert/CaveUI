"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type BlockItem = {
  id: string;
  name: string;
  category: string;
  /** Should be an <AndroidFrame scaled> node so it receives --phone-scale. */
  preview: ReactNode;
};

/**
 * Measures the rendered width of a single tile and returns the CSS scale factor
 * so a 380px-wide phone (360px screen) fills the tile exactly.
 */
function ScaledTile({ children, href, name }: { children: ReactNode; href: string; name: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (!ref.current) return;
    const update = () => {
      if (!ref.current) return;
      // The phone SVG is 380px wide. Scale so it fills the tile.
      const tileW = ref.current.offsetWidth;
      setScale(tileW / 380);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  return (
    <Link href={href} className="group flex flex-col items-start gap-3">
      <div
        ref={ref}
        className="w-full transition-transform duration-300 group-hover:-translate-y-1.5"
        style={{ "--phone-scale": scale } as React.CSSProperties}
      >
        {children}
      </div>
      <p className="inline-flex items-center gap-1 text-sm font-semibold text-foreground">
        {name}
        <ArrowRight className="size-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
      </p>
    </Link>
  );
}

/**
 * Blocks gallery: category tabs + a responsive grid of scaled phone previews.
 * Phones are always authored at native resolution and CSS-scaled down — no reflow,
 * no tiny-text, no broken layouts at thumbnail size.
 */
export function BlocksBrowser({ items, tabs }: { items: BlockItem[]; tabs: string[] }) {
  const [active, setActive] = useState("All");
  const allTabs = ["All", ...tabs];
  const shown = active === "All" ? items : items.filter((b) => b.category === active);

  return (
    <div>
      {/* Category tabs */}
      <div className="mb-8 flex flex-wrap items-center gap-1.5">
        {allTabs.map((t) => {
          const count = t === "All" ? items.length : items.filter((b) => b.category === t).length;
          return (
            <button
              key={t}
              type="button"
              onClick={() => setActive(t)}
              aria-pressed={active === t}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors",
                active === t
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              {t}
              <span
                className={cn(
                  "tabular-nums text-xs",
                  active === t ? "text-background/70" : "text-muted-foreground/70",
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/*
       * Grid: 2 cols mobile → 3 cols sm → 4 cols lg → 5 cols xl
       * Wider gap so phones have breathing room. Re-keys per tab for stagger replay.
       */}
      <div
        key={active}
        className="stagger-children grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        {shown.map((b) => (
          <ScaledTile key={b.id} href={`/blocks/${b.id}/`} name={b.name}>
            {b.preview}
          </ScaledTile>
        ))}
      </div>
    </div>
  );
}
