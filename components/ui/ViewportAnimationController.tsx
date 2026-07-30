"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ViewportAnimationController() {
  const pathname = usePathname();

  useEffect(() => {
    const animatedTracks = Array.from(
      document.querySelectorAll<HTMLElement>("[data-pause-offscreen]"),
    );

    if (animatedTracks.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            element.setAttribute("data-animation-visible", "true");
          } else {
            element.removeAttribute("data-animation-visible");
          }
        });
      },
      { rootMargin: "160px 0px", threshold: 0 },
    );

    animatedTracks.forEach((track) => observer.observe(track));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
