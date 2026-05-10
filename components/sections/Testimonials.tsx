"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import Image from "next/image";
import { testimonials as defaultTestimonials } from "@/lib/data";
import TestimonialCard from "@/components/ui/TestimonialCard";

export default function Testimonials({ sanityTestimonials }: { sanityTestimonials?: any[] }) {
  const displayTestimonials = (sanityTestimonials && sanityTestimonials.length > 0 ? sanityTestimonials : defaultTestimonials).slice(0, 6);
  const extendedTestimonials = displayTestimonials;

  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 1. Reveal Animation (Dot Expansion)
  // Starts expanding ONLY after the section sticks to the top (0 to 0.2 of the 300vh scroll)
  const clipSize = useTransform(scrollYProgress, [0, 0.2], [15, 150]);
  const clipPath = useMotionTemplate`circle(${clipSize}vw at 50% 50%)`;

  // 2. Cards Scroll Animation
  // Cards start moving up slightly before the dot finishes expanding (0.1) to reduce the empty gap
  const cardsY = useTransform(scrollYProgress, [0.1, 1], ["100vh", "-100%"]);

  return (
    <section
      ref={containerRef}
      className="relative bg-[#ffffff]"
      style={{ height: "500vh" }}
      aria-labelledby="testimonials-heading"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#ffffff]">

        {/* Expanding Dark Layer (The "Dot") */}
        <motion.div
          className="absolute inset-0 bg-[#000000] flex flex-col justify-center overflow-hidden"
          style={{ clipPath }}
        >

          {/* Background Giant Text (Infinite Marquee) */}
          <div className="absolute inset-0 flex flex-col justify-center pointer-events-none select-none z-0 overflow-hidden">
            <div className="flex w-max animate-marquee-text whitespace-nowrap items-center h-full">
              {[0, 1, 2, 3].map((set) => (
                <h1 key={`bg-text-${set}`} className="text-[14vw] font-black text-[#F5F5F7]/[0.54] uppercase tracking-tighter shrink-0 pr-16 leading-none">
                  REVIEW TESTIMONIALS
                </h1>
              ))}
            </div>
          </div>

          {/* Cards Track (Scrolls vertically overlapping the text) */}
          <motion.div
            style={{ y: cardsY }}
            className="absolute top-0 left-0 w-full flex flex-col gap-24 md:gap-32 px-6 lg:px-24 py-24 z-10"
          >
            {extendedTestimonials.map((t, i) => (
              <TestimonialCard 
                key={`${t.id}-${i}`} 
                testimonial={t} 
                className={i % 2 === 0 ? 'self-start' : 'self-end'}
              />
            ))}
          </motion.div>

        </motion.div>
      </div>
      <style>{`
        @keyframes marquee-text {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-text {
          animation: marquee-text 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
