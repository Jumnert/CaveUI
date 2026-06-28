"use client";

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Header theme toggle: an animated View Transitions reveal (MagicUI AnimatedThemeToggler)
 * styled to match the ghost icon buttons in the nav. Uncontrolled — it toggles the `.dark`
 * class on <html> and persists the choice to localStorage (read by the no-flash script).
 */
export function ThemeToggle() {
  return (
    <AnimatedThemeToggler
      variant="circle"
      className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
      aria-label="Toggle theme"
    />
  );
}
