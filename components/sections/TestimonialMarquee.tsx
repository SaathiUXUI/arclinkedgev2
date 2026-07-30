import { testimonials } from "@/lib/data";
import TestimonialCard from "@/components/ui/TestimonialCard";
import SectionLabel from "@/components/ui/SectionLabel";

export default function TestimonialMarquee({ sanityTestimonials }: { sanityTestimonials?: any[] }) {
  const displayTestimonials = sanityTestimonials && sanityTestimonials.length > 0 ? sanityTestimonials : testimonials;
  const allTestimonials = [...displayTestimonials, ...displayTestimonials];

  return (
    <section className="defer-render relative overflow-hidden py-20 lg:py-28">
       {/* Background Glow */}
       <div aria-hidden="true" className="absolute left-1/2 top-1/2 h-[30rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0052FF]/10 blur-[140px]" />
      
      <div className="relative z-10 mx-auto mb-16 max-w-[1600px] px-6 lg:px-12">
        <SectionLabel>Testimonials</SectionLabel>
        <h2 className="type-legacy-069">
          Trust from B2B brands and startups.
        </h2>
      </div>

      <div className="relative z-10 flex overflow-hidden">
        <div
          className="mobile-continuous-animation mobile-animation-25s flex w-max animate-marquee-horizontal gap-6 px-6"
          data-pause-offscreen
        >
          {allTestimonials.map((t, i) => (
            <TestimonialCard key={`${t.id}-${i}`} testimonial={t} />
          ))}
        </div>
      </div>

      <style>{`
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
