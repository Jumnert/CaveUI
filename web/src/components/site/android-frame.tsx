import type { ReactNode } from "react";
import { Android } from "@/components/ui/android";
import { cn } from "@/lib/utils";

/**
 * Renders arbitrary preview content inside the Android device mockup. The phone keeps a
 * fixed 380:830 aspect ratio (set a height via `className`, e.g. h-[600px]); the content
 * is overlaid on the screen region of the SVG and clipped to the rounded screen.
 */
export function AndroidFrame({
  children,
  className,
  contentClassName,
}: {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
}) {
  return (
    <div className={cn("relative aspect-[380/830] shrink-0", className)}>
      <Android width={380} height={830} className="h-full w-full" />
      {/* Screen region of the SVG (clip rect: translate(9,14) 360x800 within a 380x830 viewBox). */}
      <div className="absolute top-[1.7%] right-[2.9%] bottom-[1.9%] left-[2.4%] overflow-hidden rounded-[9%]">
        <div
          className={cn(
            "flex h-full w-full flex-wrap items-center justify-center gap-3 overflow-hidden p-5",
            contentClassName,
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
