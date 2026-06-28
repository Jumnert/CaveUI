import Link from "next/link";
import type { Variant } from "@/lib/registry/types";
import { cn } from "@/lib/utils";

function MarqueeCard({ v }: { v: Variant }) {
  return (
    <Link
      href={`/components/${v.category}/${v.id}/`}
      title={v.name}
      className="flex h-28 w-56 shrink-0 items-center justify-center overflow-hidden rounded-xl border bg-card p-4 transition-colors hover:border-primary/50 hover:bg-accent/30"
    >
      <div className="pointer-events-none flex scale-90 items-center justify-center">
        {v.preview}
      </div>
    </Link>
  );
}

function MarqueeRow({ items, reverse }: { items: Variant[]; reverse?: boolean }) {
  return (
    <div className="group flex overflow-hidden">
      <div
        className={cn(
          "flex w-max shrink-0 gap-4 pr-4",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
          "group-hover:[animation-play-state:paused]",
        )}
      >
        {/* Duplicated so the loop is seamless (animation translates exactly one copy). */}
        {[...items, ...items].map((v, i) => (
          <MarqueeCard key={`${v.category}-${v.id}-${i}`} v={v} />
        ))}
      </div>
    </div>
  );
}

/** Three rows of components scrolling in alternating directions, with blurred edges. */
export function ComponentMarquee({ rows }: { rows: Variant[][] }) {
  return (
    <div className="relative">
      <div className="flex flex-col gap-4">
        {rows.map((items, i) => (
          <MarqueeRow key={i} items={items} reverse={i % 2 === 1} />
        ))}
      </div>

      {/* Blurred fade on each end */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent backdrop-blur-sm [mask-image:linear-gradient(to_right,black_35%,transparent)] sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent backdrop-blur-sm [mask-image:linear-gradient(to_left,black_35%,transparent)] sm:w-24" />
    </div>
  );
}
