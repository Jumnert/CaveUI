import Link from "next/link";
import type { Variant } from "@/lib/registry/types";

/**
 * A showcase tile in a category gallery: the live component preview + name, linking to the
 * detail page (where it's shown inside the Android device frame). Hover is a subtle
 * border/background change — no elevation.
 */
export function PreviewCard({ variant }: { variant: Variant }) {
  return (
    <Link
      href={`/components/${variant.category}/${variant.id}/`}
      data-showcase
      className="group flex flex-col overflow-hidden rounded-xl border bg-card transition-colors hover:border-primary/50 hover:bg-accent/30"
    >
      <div className="flex min-h-[200px] flex-1 flex-wrap items-center justify-center gap-3 p-8">
        {variant.preview}
      </div>
      <div className="flex items-center justify-between border-t px-4 py-2.5">
        <span className="text-sm font-medium">{variant.name}</span>
        <span className="text-xs text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
          View →
        </span>
      </div>
    </Link>
  );
}
