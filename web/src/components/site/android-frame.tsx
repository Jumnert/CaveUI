import type { ReactNode } from "react";
import { Android } from "@/components/ui/android";
import { cn } from "@/lib/utils";

/**
 * Renders arbitrary preview content inside the Android device mockup.
 *
 * Two usage modes:
 *
 * 1. **Detail page** (default) — pass a `height` class like `h-[600px]`.
 *    Content fills the screen region directly, sized to the container.
 *
 * 2. **Thumbnail / gallery** — pass `scaled` + a width.
 *    Content is authored at the phone's native 360×800 px screen size and
 *    CSS-scaled down to fit, so every pixel of the design stays sharp
 *    instead of reflow-wrapping at thumbnail width.
 *
 * @example Detail page
 * <AndroidFrame className="h-[600px]">{preview}</AndroidFrame>
 *
 * @example Gallery thumbnail
 * <AndroidFrame scaled className="w-[180px]" contentClassName="p-0">{preview}</AndroidFrame>
 */
export function AndroidFrame({
  children,
  className,
  contentClassName,
  scaled = false,
}: {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  /** When true, renders content at native 360×800 then CSS-scales it down. */
  scaled?: boolean;
}) {
  // Native screen dimensions inside the SVG viewBox.
  const SCREEN_W = 360;
  const SCREEN_H = 800;

  return (
    <div className={cn("relative aspect-[380/830] shrink-0", className)}>
      <Android width={380} height={830} className="h-full w-full" />

      {/*
       * Screen region: translate(9,14) in the 380×830 viewBox.
       * Percentages: left=9/380=2.37%, top=14/830=1.69%, right=(380-9-360)/380=2.89%, bottom=(830-14-800)/830=1.93%
       */}
      <div className="absolute top-[1.69%] right-[2.89%] bottom-[1.93%] left-[2.37%] overflow-hidden rounded-[9%]">
        {scaled ? (
          /*
           * Scaled mode: renders content at the native 360×800 screen size,
           * then CSS-transforms it down to fit.  The content is absolutely
           * positioned so it doesn't expand the outer aspect-ratio box.
           */
          <div
            className="absolute inset-0 overflow-hidden"
          >
            <div
              className="origin-top-left"
              style={{
                width: SCREEN_W,
                height: SCREEN_H,
                transform: `scale(var(--phone-scale, 1))`,
              }}
            >
              <div className={cn("h-full w-full overflow-hidden", contentClassName)}>
                {children}
              </div>
            </div>
          </div>
        ) : (
          <div
            className={cn(
              "flex h-full w-full flex-wrap items-center justify-center gap-3 overflow-hidden p-5",
              contentClassName,
            )}
          >
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
