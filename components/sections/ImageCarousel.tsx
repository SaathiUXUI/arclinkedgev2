"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const defaultCarouselImages = [
  "/projects/Cortex.jpg",
  "/projects/ExynosData.jpg",
  "/projects/NovaPay.jpg",
  "/projects/draftai.jpg",
  "/projects/ivf.jpg",
  "/projects/neuralmind.jpg",
  "/projects/novira.jpg",
  "/projects/quickboard.jpg"
];

export default function ImageCarousel({ sanityImages }: { sanityImages?: string[] }) {
  const finalImages = sanityImages && sanityImages.length > 0 ? sanityImages : defaultCarouselImages;
  const midPoint = Math.ceil(finalImages.length / 2);
  const col1 = finalImages.slice(0, midPoint);
  const col2 = finalImages.slice(midPoint);

  return (
    <section className="relative overflow-hidden bg-[#000000] py-16 lg:py-24" aria-labelledby="carousel-heading">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 mb-16 text-center">
        <motion.h2 
          id="carousel-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-medium"
          style={{ fontFamily: "var(--font-inter-tight)", color: "#F5F5F7", letterSpacing: "-0.04em" }}
        >
          Crafted with Precision
        </motion.h2>
      </div>

      {/* Main Framed Container Wrapper */}
      <div className="w-full px-4 md:px-8 max-w-[2000px] mx-auto">
        <div className="relative w-full border border-[rgba(255,255,255,0.08)] bg-[#030303]">
          
          {/* 4 Corner Rectangles ON the border */}
          <div className="absolute top-0 left-0 w-2 h-2 bg-[#D1D1D6] -translate-x-1/2 -translate-y-1/2 z-20" />
          <div className="absolute top-0 right-0 w-2 h-2 bg-[#D1D1D6] translate-x-1/2 -translate-y-1/2 z-20" />
          <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#D1D1D6] -translate-x-1/2 translate-y-1/2 z-20" />
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#D1D1D6] translate-x-1/2 translate-y-1/2 z-20" />

          <div className="relative w-full h-[70vh] min-h-[500px] md:h-[80vh] overflow-hidden flex gap-4 md:gap-8 p-4 md:p-8">
            {/* Fade Overlays (Top & Bottom) */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#030303] to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030303] to-transparent z-10 pointer-events-none" />

            {/* Column 1 (Scrolls Up) */}
            <div className="flex-1 overflow-hidden relative" style={{ margin: "-2rem 0" }}>
              <div className="flex flex-col animate-marquee-up absolute inset-x-0 top-0 pt-8">
                {[0, 1].map((set) => (
                  <div key={`col1-set-${set}`} className="flex flex-col gap-4 md:gap-8 pb-4 md:pb-8 shrink-0">
                    {/* Mobile: Show all images */}
                    {finalImages.map((src, idx) => (
                      <div 
                        key={`mobile-${set}-${idx}`} 
                        className="md:hidden relative w-full shrink-0 overflow-hidden" 
                        style={{ aspectRatio: "16/9", borderRadius: 0 }}
                      >
                        <Image src={src} alt="Arclink Edge Work" fill className="object-cover transition-transform duration-700 hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                      </div>
                    ))}
                    {/* Desktop: Show col1 */}
                    {col1.map((src, idx) => (
                      <div 
                        key={`col1-${set}-${idx}`} 
                        className="hidden md:block relative w-full shrink-0 overflow-hidden" 
                        style={{ aspectRatio: "16/9", borderRadius: 0 }}
                      >
                        <Image src={src} alt="Arclink Edge Work" fill className="object-cover transition-transform duration-700 hover:scale-105" sizes="(max-width: 768px) 50vw, 33vw" />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2 (Scrolls Down) */}
            <div className="hidden md:block flex-1 overflow-hidden relative" style={{ margin: "-2rem 0" }}>
              <div className="flex flex-col animate-marquee-down absolute inset-x-0 top-0 pt-8">
                {[0, 1].map((set) => (
                  <div key={`col2-set-${set}`} className="flex flex-col gap-4 md:gap-8 pb-4 md:pb-8 shrink-0">
                    {col2.map((src, idx) => (
                      <div 
                        key={`col2-${set}-${idx}`} 
                        className="relative w-full shrink-0 overflow-hidden" 
                        style={{ aspectRatio: "16/9", borderRadius: 0 }}
                      >
                        <Image src={src} alt="Arclink Edge Work" fill className="object-cover transition-transform duration-700 hover:scale-105" sizes="(max-width: 768px) 50vw, 33vw" />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes marquee-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes marquee-down {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .animate-marquee-up {
          animation: marquee-up 40s linear infinite;
        }
        .animate-marquee-down {
          animation: marquee-down 25s linear infinite;
        }
        @media (min-width: 768px) {
          .animate-marquee-up { animation-duration: 20s; }
        }
        .animate-marquee-up:hover, .animate-marquee-down:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee-up, .animate-marquee-down { animation: none; overflow-y: auto; scroll-behavior: smooth; }
        }
      `}</style>
    </section>
  );
}
