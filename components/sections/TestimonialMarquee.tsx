"use client";

import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import TestimonialCard from "@/components/ui/TestimonialCard";
import SectionLabel from "@/components/ui/SectionLabel";

export default function TestimonialMarquee({ sanityTestimonials }: { sanityTestimonials?: any[] }) {
  const displayTestimonials = sanityTestimonials && sanityTestimonials.length > 0 ? sanityTestimonials : testimonials;
  const allTestimonials = [...displayTestimonials, ...displayTestimonials];

  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
       {/* Background Glow */}
       <div aria-hidden="true" className="absolute left-1/2 top-1/2 h-[30rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0052FF]/10 blur-[140px]" />
      
      <div className="relative z-10 mx-auto mb-16 max-w-[1600px] px-6 lg:px-12">
        <SectionLabel>Testimonials</SectionLabel>
        <h2 className="text-4xl font-medium leading-none md:text-6xl" style={{ fontFamily: "var(--font-inter-tight)", letterSpacing: "-0.065em" }}>
          Trust from B2B brands and startups.
        </h2>
      </div>

      <div className="relative z-10 flex overflow-hidden">
        <div className="flex w-max animate-marquee-horizontal gap-6 px-6">
          {allTestimonials.map((t, i) => (
            <TestimonialCard key={`${t.id}-${i}`} testimonial={t} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-horizontal {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee-horizontal {
          animation: marquee-horizontal 25s linear infinite;
        }

        .animate-marquee-horizontal:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-marquee-horizontal {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
