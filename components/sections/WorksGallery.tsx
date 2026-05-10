"use client";

import { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { PrimaryButton } from "@/components/ui/Button";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const defaultProjects = [
  { image: "/projects/ivf.jpg", endPos: { x: "-38vw", y: "-32vh", rotate: -12 } },
  { image: "/projects/NovaPay.jpg", endPos: { x: "38vw", y: "-25vh", rotate: 10 } },
  { image: "/projects/novira.jpg", endPos: { x: "-40vw", y: "30vh", rotate: 15 } },
  { image: "/projects/quickboard.jpg", endPos: { x: "38vw", y: "30vh", rotate: -10 } },
];

function DoodleWord({ children }: { children: string }) {
  return (
    <span
      className="relative inline-block whitespace-nowrap px-[0.16em] mx-[0.04em]"
      style={{ isolation: "isolate" }}
    >
      <span className="relative z-10">{children}</span>
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[1.55em] w-[calc(100%+0.6em)] -translate-x-1/2 -translate-y-1/2 overflow-visible"
        viewBox="0 0 220 120"
        fill="none"
        preserveAspectRatio="none"
      >
        <ellipse
          className="doodle-stroke"
          cx="110"
          cy="60"
          rx="98"
          ry="42"
          stroke="#D0F504"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.95"
          transform="rotate(-7 110 60)"
        />
      </svg>
    </span>
  );
}

export default function WorksGallery({ sanityImages }: { sanityImages?: string[] }) {
  const displayProjects = defaultProjects.map((proj, index) => {
    if (sanityImages && sanityImages[index]) {
      return { ...proj, image: sanityImages[index] };
    }
    return proj;
  });

  const sectionRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const copyRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || !stageRef.current) return;

    const ctx = gsap.context(() => {
      const items = itemsRef.current.filter(Boolean) as HTMLDivElement[];
      const lines = copyRef.current?.querySelectorAll(".gallery-line");
      const doodles = copyRef.current?.querySelectorAll<SVGGeometryElement>(".doodle-stroke");

      gsap.set(items, {
        autoAlpha: 0,
        scale: 0.6,
        yPercent: 120,
        x: "0vw",
        rotation: 0,
        zIndex: 10,
        transformOrigin: "50% 50%",
      });

      if (lines?.length) {
        gsap.set(lines, { yPercent: 110, opacity: 0 });
      }

      doodles?.forEach((doodle) => {
        const length = doodle.getTotalLength();
        gsap.set(doodle, {
          strokeDasharray: length,
          strokeDashoffset: length,
          opacity: 0,
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      if (lines?.length) {
        const copyTl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 72%",
            once: true,
          },
        });

        copyTl.to(lines, {
          yPercent: 0,
          opacity: 1,
          skewY: 0,
          duration: 1.05,
          ease: "power4.out",
          stagger: 0.1,
        });

        if (doodles?.length) {
          copyTl.to(
            doodles,
            {
              strokeDashoffset: 0,
              opacity: 0.95,
              duration: 0.65,
              ease: "power2.out",
              stagger: 0.08,
            },
            "-=0.05"
          );
        }
      }

      displayProjects.forEach((project, index) => {
        const item = itemsRef.current[index];
        if (!item) return;

        tl.to(item, {
          autoAlpha: 1,
          scale: 1.08,
          yPercent: 0,
          x: "0vw",
          rotation: 0,
          zIndex: 100 + index,
          duration: 1.4,
          ease: "power3.out",
        })
          .to(item, { duration: 0.35 })
          .to(
            item,
            {
              x: project.endPos.x,
              y: project.endPos.y,
              yPercent: 0,
              scale: 0.42,
              rotation: project.endPos.rotate,
              zIndex: 40 + index,
              duration: 1.8,
              ease: "expo.inOut",
            },
            "+=0.15"
          );
      });

      gsap.to(".gallery-card-float", {
        y: 12,
        duration: 4.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.6,
          from: "random",
        },
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative bg-[#000000]"
      style={{ height: "700vh" }}
    >
      <div
        ref={stageRef}
        className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden"
      >
        {/* Subtle Depth Glow */}
        <div className="absolute w-[80vw] h-[80vw] bg-[#0052FF]/5 filter blur-[200px] rounded-full pointer-events-none z-0" />

        {/* Center Paragraph (Mid Z-Index) */}
        <div ref={copyRef} className="relative z-10 px-6 max-w-5xl text-center pointer-events-none">
          <p
            className="text-[#F5F5F7]"
            style={{
              fontFamily: "var(--font-inter-tight)",
              fontSize: "clamp(1.9rem, 3.8vw, 3.2rem)",
              lineHeight: 1.3,
              fontWeight: 400,
              letterSpacing: "-0.03em",
              maxWidth: "920px",
              margin: "0 auto",
              textShadow: "0 0 50px rgba(0,0,0,1)",
            }}
          >
            <span className="md:hidden">
              <span className="block overflow-hidden">
                <span className="gallery-line block">Presenting our finest <DoodleWord>work</DoodleWord>,</span>
              </span>
              <span className="block overflow-hidden">
                <span className="gallery-line block">crafted with precision and</span>
              </span>
              <span className="block overflow-hidden">
                <span className="gallery-line block">designed to scale for</span>
              </span>
              <span className="block overflow-hidden">
                <span className="gallery-line block">the next <DoodleWord>generation</DoodleWord></span>
              </span>
              <span className="block overflow-hidden">
                <span className="gallery-line block">of digital leaders globally.</span>
              </span>
            </span>

            <span className="hidden md:block">
              <span className="block overflow-hidden">
                <span className="gallery-line block">
                  Presenting our finest <DoodleWord>work</DoodleWord>, crafted with
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="gallery-line block">precision and designed to</span>
              </span>
              <span className="block overflow-hidden">
                <span className="gallery-line block">
                  scale for the next <DoodleWord>generation</DoodleWord> of digital
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="gallery-line block">leaders globally.</span>
              </span>
            </span>
          </p>
        </div>

        {/* Floating Images Container */}
        <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none" style={{ perspective: "2000px" }}>
          {displayProjects.map((project, i) => (
            <div
              key={i}
              ref={(el) => {
                itemsRef.current[i] = el;
              }}
              className="floating-item absolute w-[88vw] md:w-[68vw] lg:w-[54vw]"
              style={{ willChange: "transform, opacity, z-index" }}
            >
              <div className="gallery-card-float relative aspect-[16/9] overflow-hidden border border-white/10 shadow-[0_60px_120px_rgba(0,0,0,0.8)] bg-[#141416]">
                <Image
                  src={project.image}
                  alt="Work Example"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={i < 2}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
