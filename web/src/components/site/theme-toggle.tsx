"use client";

import { useCallback, useRef, useState, useSyncExternalStore } from "react";
import { createPortal, flushSync } from "react-dom";
import { motion } from "motion/react";
import { Moon, Sun } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { AppleHelloCaveui } from "@/components/site/apple-hello-caveui";
import { cn } from "@/lib/utils";

type Mode = "light" | "dark";
type Splash = { mode: Mode; seq: number } | null;

const REVEAL_DURATION = 550; // ms — the circle-from-center reveal

// Live-read the `.dark` class on <html> (no setState-in-effect — lint-safe).
function subscribeHtmlTheme(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

// Client-only flag for the portal, without setState-in-effect.
function subscribeNoop() {
  return () => {};
}

/**
 * Header theme toggle with a two-stage transition:
 *  1. A centered "Caveui" splash draws itself (Apple-Hello handwriting).
 *  2. A circle-from-center View Transitions reveal flips light/dark and wipes
 *     the splash away, unveiling the newly themed page.
 * Honors prefers-reduced-motion (instant switch, no splash / no reveal).
 */
export function ThemeToggle() {
  const isDark = useSyncExternalStore(
    subscribeHtmlTheme,
    () => document.documentElement.classList.contains("dark"),
    () => false,
  );
  const mounted = useSyncExternalStore(
    subscribeNoop,
    () => true,
    () => false,
  );

  const [splash, setSplash] = useState<Splash>(null);
  const seqRef = useRef(0);

  // Apply + persist a theme. Used inside the View Transition snapshot callback.
  const applyTheme = useCallback((mode: Mode) => {
    document.documentElement.classList.toggle("dark", mode === "dark");
    try {
      localStorage.setItem("theme", mode);
    } catch {
      /* localStorage unavailable */
    }
  }, []);

  // Stage 2: circle-from-center reveal that flips the theme and removes the splash.
  const revealTheme = useCallback(
    (mode: Mode, seq: number) => {
      if (seq !== seqRef.current) return;

      const applyAndDismiss = () => {
        applyTheme(mode);
        setSplash(null);
      };

      if (typeof document.startViewTransition !== "function") {
        applyAndDismiss();
        return;
      }

      const w = window.visualViewport?.width ?? window.innerWidth;
      const h = window.visualViewport?.height ?? window.innerHeight;
      const cx = w / 2;
      const cy = h / 2;
      const maxRadius = Math.hypot(w / 2, h / 2);
      const clipPath = [
        `circle(0px at ${cx}px ${cy}px)`,
        `circle(${maxRadius}px at ${cx}px ${cy}px)`,
      ];

      const root = document.documentElement;
      root.dataset.magicuiThemeVt = "active";
      root.style.setProperty(
        "--magicui-theme-toggle-vt-duration",
        `${REVEAL_DURATION}ms`,
      );
      const cleanup = () => {
        delete root.dataset.magicuiThemeVt;
        root.style.removeProperty("--magicui-theme-toggle-vt-duration");
      };

      const transition = document.startViewTransition(() =>
        flushSync(applyAndDismiss),
      );
      if (typeof transition?.finished?.finally === "function") {
        transition.finished.finally(cleanup);
      } else {
        cleanup();
      }
      transition?.ready?.then?.(() => {
        document.documentElement.animate(
          { clipPath },
          {
            duration: REVEAL_DURATION,
            easing: "ease-in-out",
            fill: "forwards",
            pseudoElement: "::view-transition-new(root)",
          },
        );
      });
    },
    [applyTheme],
  );

  const toggle = useCallback(() => {
    const next: Mode = isDark ? "light" : "dark";

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      applyTheme(next);
      return;
    }

    // Stage 1: show the splash in the CURRENT theme; flip happens at reveal.
    const seq = ++seqRef.current;
    setSplash({ mode: next, seq });
    // Safety fallback if the draw's onAnimationComplete never fires.
    window.setTimeout(() => revealTheme(next, seq), 3000);
  }, [isDark, applyTheme, revealTheme]);

  return (
    <>
      <button
        type="button"
        onClick={toggle}
        className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
        aria-label="Toggle theme"
      >
        {isDark ? <Sun /> : <Moon />}
        <span className="sr-only">Toggle theme</span>
      </button>

      {mounted &&
        splash &&
        createPortal(
          <motion.div
            key={splash.seq}
            className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            aria-hidden
          >
            <motion.div
              className="flex flex-col items-center gap-5"
              initial={{ scale: 0.85, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <AppleHelloCaveui
                durationScale={0.5}
                className="h-28 text-primary sm:h-40"
                onAnimationComplete={() => revealTheme(splash.mode, splash.seq)}
              />
              <motion.div
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.3 }}
              >
                {splash.mode === "dark" ? (
                  <Moon className="size-4" />
                ) : (
                  <Sun className="size-4" />
                )}
                <span>{splash.mode === "dark" ? "Dark mode" : "Light mode"}</span>
              </motion.div>
            </motion.div>
          </motion.div>,
          document.body,
        )}
    </>
  );
}
