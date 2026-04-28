"use client";

import { useEffect } from "react";

export function useParallax(): void {
  useEffect(() => {
    const parallaxEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]")
    );
    const atmosphereEls = Array.from(
      document.querySelectorAll<HTMLElement>(".atmosphere:not(.atmosphere-dusk)")
    );

    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const sy = window.scrollY;

        parallaxEls.forEach((el) => {
          const rate = parseFloat(el.dataset.parallax ?? "0.1");
          el.style.transform = `translate3d(0, ${-sy * rate}px, 0)`;
        });

        atmosphereEls.forEach((el, i) => {
          const rate = 0.04 + (i % 3) * 0.025;
          el.style.transform = `translate3d(0, ${sy * rate * 0.3}px, 0)`;
        });

        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}
