"use client";

import type { ComponentProps } from "react";
import type { TargetAndTransition } from "motion/react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

// "Caveui" as a hand-written monoline, built the same way Apple's "Hello"
// screen works: the centerline (medial-axis skeleton) of the Caveat script
// font, traced into smooth strokes and drawn in writing order with a thick,
// round-capped pen. Baked in — no runtime font dependency (static-export safe).
type Stroke = { d: string; start: number; dur: number };

const STROKES: Stroke[] = [
  { d: "M263.0 304.0C257.0 308.8 243.2 324.0 227.0 333.0C210.8 342.0 179.0 354.0 166.0 358.0C153.0 362.0 154.5 358.8 149.0 357.0C143.5 355.2 137.5 354.8 133.0 347.0C128.5 339.2 123.5 325.2 122.0 310.0C120.5 294.8 121.7 272.0 124.0 256.0C126.3 240.0 131.0 227.3 136.0 214.0C141.0 200.7 143.5 192.7 154.0 176.0C164.5 159.3 183.7 130.7 199.0 114.0C214.3 97.3 233.8 82.2 246.0 76.0C258.2 69.8 266.3 71.3 272.0 77.0C277.7 82.7 280.0 99.8 280.0 110.0C280.0 120.2 276.0 129.2 272.0 138.0C268.0 146.8 258.7 158.8 256.0 163.0", start: 0.0, dur: 0.2763 },
  { d: "M411.0 260.0C408.0 261.2 401.7 260.0 393.0 267.0C384.3 274.0 369.2 293.3 359.0 302.0C348.8 310.7 340.2 316.2 332.0 319.0C323.8 321.8 314.0 322.5 310.0 319.0C306.0 315.5 302.7 311.7 308.0 298.0C313.3 284.3 330.3 253.2 342.0 237.0C353.7 220.8 368.0 206.7 378.0 201.0C388.0 195.3 395.2 198.8 402.0 203.0C408.8 207.2 416.2 222.2 419.0 226.0", start: 0.2383, dur: 0.152 },
  { d: "M411.0 260.0C412.3 254.7 417.7 233.3 419.0 228.0", start: 0.4245, dur: 0.0152 },
  { d: "M411.0 260.0C413.8 266.8 422.7 292.0 428.0 301.0C433.3 310.0 438.3 311.3 443.0 314.0C447.7 316.7 453.8 316.5 456.0 317.0", start: 0.4344, dur: 0.0366 },
  { d: "M500.0 210.0C503.0 223.7 513.5 276.5 518.0 292.0C522.5 307.5 525.5 301.2 527.0 303.0", start: 0.4675, dur: 0.0505 },
  { d: "M529.0 303.0C533.3 300.3 542.2 301.5 555.0 287.0C567.8 272.5 597.5 227.8 606.0 216.0", start: 0.5167, dur: 0.0558 },
  { d: "M649.0 248.0C647.7 249.3 643.0 248.5 641.0 256.0C639.0 263.5 637.0 283.7 637.0 293.0C637.0 302.3 638.7 307.0 641.0 312.0C643.3 317.0 646.3 320.2 651.0 323.0C655.7 325.8 663.5 328.3 669.0 329.0C674.5 329.7 675.7 331.2 684.0 327.0C692.3 322.8 713.2 307.8 719.0 304.0", start: 0.5674, dur: 0.076 },
  { d: "M651.0 248.0C656.2 249.3 672.5 255.8 682.0 256.0C691.5 256.2 700.7 253.5 708.0 249.0C715.3 244.5 723.2 236.2 726.0 229.0C728.8 221.8 727.8 211.3 725.0 206.0C722.2 200.7 716.0 197.7 709.0 197.0C702.0 196.3 692.2 196.3 683.0 202.0C673.8 207.7 659.5 223.5 654.0 231.0C648.5 238.5 650.7 244.3 650.0 247.0", start: 0.6371, dur: 0.1012 },
  { d: "M851.0 289.0C844.3 293.3 821.2 310.2 811.0 315.0C800.8 319.8 795.3 319.3 790.0 318.0C784.7 316.7 780.3 315.0 779.0 307.0C777.7 299.0 777.2 286.2 782.0 270.0C786.8 253.8 803.7 221.8 808.0 210.0C812.3 198.2 808.0 200.8 808.0 199.0", start: 0.7392, dur: 0.0974 },
  { d: "M880.0 203.0C875.3 217.2 856.7 273.8 852.0 288.0", start: 0.8507, dur: 0.0413 },
  { d: "M870.0 335.0C867.8 332.2 859.8 325.7 857.0 318.0C854.2 310.3 853.7 293.8 853.0 289.0", start: 0.8963, dur: 0.0238 },
  { d: "M949.0 228.0C949.3 229.3 955.0 222.0 951.0 236.0C947.0 250.0 929.0 295.5 925.0 312.0C921.0 328.5 926.7 331.2 927.0 335.0", start: 0.9108, dur: 0.0612 },
  { d: "M962.0 150.0C963.7 149.8 969.7 151.7 972.0 149.0C974.3 146.3 975.3 136.5 976.0 134.0", start: 0.9841, dur: 0.0127 },
];

const VIEWBOX = "94.2 46.2 910.7 339.7";
const STROKE_WIDTH = 26;
const LAST = STROKES.length - 1;

// Base timing (at durationScale = 1), pre-clamped at module scope so render
// stays free of impure calls. Each stroke is timed by its length; tiny strokes
// get a minimum so they don't flash by.
const BASE_TOTAL = 3.2;
const TIMINGS = STROKES.map((s) => {
  const duration = Math.max(s.dur * BASE_TOTAL, 0.12);
  return {
    duration,
    delay: s.start * BASE_TOTAL,
    opacityDur: Math.min(0.2, duration),
  };
});

const initialProps: TargetAndTransition = { pathLength: 0, opacity: 0 };
const animateProps: TargetAndTransition = { pathLength: 1, opacity: 1 };

export type AppleHelloCaveuiProps = Omit<
  ComponentProps<typeof motion.svg>,
  "durationScale" | "onAnimationComplete"
> & {
  /**
   * Scales the duration of the writing animation.
   * Values below 1 speed up, values above 1 slow down.
   * @defaultValue 1
   */
  durationScale?: number;
  /** Called when the full handwriting animation completes. */
  onAnimationComplete?: () => void;
};

export function AppleHelloCaveui({
  className,
  durationScale = 1,
  onAnimationComplete,
  ...props
}: AppleHelloCaveuiProps) {
  return (
    <motion.svg
      className={cn("h-24 w-auto", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={VIEWBOX}
      fill="none"
      stroke="currentColor"
      strokeWidth={STROKE_WIDTH}
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      <title>Caveui</title>
      {STROKES.map((s, i) => {
        const t = TIMINGS[i];
        const duration = t.duration * durationScale;
        const delay = t.delay * durationScale;
        return (
          <motion.path
            key={i}
            d={s.d}
            initial={initialProps}
            animate={animateProps}
            transition={{
              duration,
              delay,
              ease: "easeInOut",
              opacity: { duration: t.opacityDur * durationScale, delay },
            }}
            onAnimationComplete={i === LAST ? onAnimationComplete : undefined}
          />
        );
      })}
    </motion.svg>
  );
}
