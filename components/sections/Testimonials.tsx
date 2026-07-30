"use client";

import { testimonials as defaultTestimonials } from "@/lib/data";
import HeadingReveal from "@/components/ui/HeadingReveal";
import TestimonialCard from "@/components/ui/TestimonialCard";
import type { Testimonial } from "@/types";

export default function Testimonials({ sanityTestimonials }: { sanityTestimonials?: Testimonial[] }) {
  const displayTestimonials =
    sanityTestimonials && sanityTestimonials.length > 0
      ? sanityTestimonials
      : defaultTestimonials;
  const carouselTestimonials = [...displayTestimonials, ...displayTestimonials];

  return (
    <section
      className="relative overflow-hidden bg-[#000000] py-24 lg:py-32"
      aria-labelledby="testimonials-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0052FF]/10 blur-[140px]"
      />

      <div
        className="relative z-10 mx-auto max-w-[1600px]"
        style={{
          paddingLeft: "clamp(16px,5vw,80px)",
          paddingRight: "clamp(16px,5vw,80px)",
        }}
      >
        <div className="mb-16 md:mb-24">
          <HeadingReveal
            id="testimonials-heading"
            style={{
              fontFamily: "var(--font-inter-tight)",
              fontSize: "clamp(3.2rem,8vw,6.8rem)",
              fontWeight: 500,
              lineHeight: 0.95,
              letterSpacing: "-0.07em",
              color: "#F5F5F7",
            }}
          >
            Trust from B2B brands and startups
          </HeadingReveal>
          <p
            className="mt-6 max-w-xl"
            style={{
              fontSize: "18px",
              lineHeight: 1.6,
              letterSpacing: "-0.02em",
              color: "rgba(245,245,247,0.52)",
            }}
          >
            Real feedback from the teams we have helped design, build, and scale ambitious digital products.
          </p>
        </div>
      </div>

      <div className="relative z-10 flex overflow-hidden">
        <div className="testimonial-carousel flex w-max gap-6 px-6">
          {carouselTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.id}-${index}`}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes testimonial-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .testimonial-carousel {
          animation: testimonial-marquee 25s linear infinite;
        }

        .testimonial-carousel:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .testimonial-carousel {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
