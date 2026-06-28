"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * GSAP animations for the home page. Renders nothing — targets elements by `data-*`:
 *  - [data-hero-item]   : staggered entrance for the hero copy
 *  - [data-hero-phones] : the phone cluster rising/scaling in
 *  - [data-reveal]      : sections that fade/slide up as they scroll into view (ScrollTrigger)
 *
 * `gsap.from` only sets the hidden start state once JS runs, so without JS everything stays
 * visible. Disabled under prefers-reduced-motion; all tweens are reverted on unmount.
 */
export function HomeAnimations() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      // Hero entrance timeline.
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from("[data-hero-item]", { opacity: 0, y: 20, duration: 0.7, stagger: 0.09 })
        .from(
          "[data-hero-phones]",
          { opacity: 0, y: 48, scale: 0.94, duration: 0.9 },
          "-=0.45",
        );

      // Sections reveal on scroll.
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 30,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });
    });

    // Recalculate trigger positions once fonts/images settle.
    const refresh = requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      cancelAnimationFrame(refresh);
      ctx.revert();
    };
  }, []);

  return null;
}
