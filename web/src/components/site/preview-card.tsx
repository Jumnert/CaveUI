import Link from "next/link";
import type { Variant } from "@/lib/registry/types";
import { AndroidFrame } from "./android-frame";

/**
 * A showcase tile in a category gallery: a live preview (inside an Android device mockup)
 * + name, linking to the detail page. No code is shown here (that lives on the detail
 * page). Hover is a subtle border/background change — no elevation.
 */
export function PreviewCard({ variant }: { variant: Variant }) {
  return (
    <Link
      href={`/components/${variant.category}/${variant.id}/`}
      data-showcase
      className="group flex flex-col overflow-hidden rounded-xl border bg-card transition-colors hover:border-primary/50 hover:bg-accent/30"
    >
      <div className="flex flex-1 items-center justify-center p-6">
        <AndroidFrame className="h-[360px]" contentClassName="p-4">
          {variant.preview}
        </AndroidFrame>
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
