import Image from "next/image";
import type { CSSProperties } from "react";
import { clientLogos } from "@/lib/data";

interface LogoMarqueeProps {
  variant?: "landing" | "service";
  sanityLogos?: { name: string; src: string | null }[];
}

export default function LogoMarquee({ variant = "landing", sanityLogos }: LogoMarqueeProps) {
  const logosToRepeat = sanityLogos && sanityLogos.length > 0 ? sanityLogos : clientLogos;
  
  // Ensure we have enough logos to fill the screen and loop smoothly
  const minItems = 15;
  const repeatCount = Math.max(1, Math.ceil(minItems / logosToRepeat.length));
  const baseLogos = Array(repeatCount).fill(logosToRepeat).flat();
  const doubled = [...baseLogos, ...baseLogos];
  const isService = variant === "service";
  const marqueeDuration = `${doubled.length * 1.8}s`;

  return (
    <section
      className={`defer-render py-6 md:py-14 overflow-hidden ${isService ? "border-y border-white/[0.05] bg-[#030303]" : ""}`}
      style={{ background: "transparent" }}
      aria-label="Trusted by industry leaders"
    >
      <h2
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          padding: 0,
          margin: "-1px",
          overflow: "hidden",
          clip: "rect(0,0,0,0)",
          whiteSpace: "nowrap",
          border: 0,
        }}
      >
        Trusted by leading brands
      </h2>

      <div
        className="relative overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        }}
      >
        <div
          className="marquee-track mobile-continuous-animation gap-9 md:gap-0"
          role="list"
          aria-label="Client logos"
          data-pause-offscreen
          style={{
            animationDuration: marqueeDuration,
            "--mobile-animation-duration": marqueeDuration,
          } as CSSProperties}
        >
          {doubled.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-center md:px-12 cursor-default select-none md:min-w-[180px]"
              role="listitem"
            >
              {item.src ? (
                <Image
                  src={item.src}
                  alt={item.name}
                  width={160}
                  height={60}
                  className="w-auto h-10 md:h-12"
                  style={{ 
                    objectFit: "contain", 
                    opacity: isService ? 0.4 : 0.5,
                    filter: isService ? "brightness(0) invert(1)" : "none" 
                  }}
                />
              ) : (
                <span
                  className="type-b1 type-legacy-120"
                  style={{ color: isService ? "rgba(255,255,255,0.4)" : "rgba(0,40,80,0.35)", whiteSpace: "nowrap" }}
                >
                  {item.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
