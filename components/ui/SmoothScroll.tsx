"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith('/portal-secure-88');

  useEffect(() => {
    if (isStudio) return; // Disable Lenis on Sanity Studio to avoid breaking scroll

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      infinite: false,
    });

    // Scroll to top on route change
    lenis.scrollTo(0, { immediate: true });

    lenis.on("scroll", ScrollTrigger.update);

    let raf: number;

    function loop(time: number) {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    }

    raf = requestAnimationFrame(loop);

    return () => {
      lenis.off("scroll", ScrollTrigger.update);
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, [isStudio, pathname]);

  return <>{children}</>;
}
