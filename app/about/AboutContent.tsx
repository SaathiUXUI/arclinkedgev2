"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { team } from "@/lib/team";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import SectionLabel from "@/components/ui/SectionLabel";
import SharedInsidePageSections from "@/components/sections/SharedInsidePageSections";
import BackToTop from "@/components/ui/BackToTop";
import CookieBanner from "@/components/ui/CookieBanner";
import HeadingReveal from "@/components/ui/HeadingReveal";
import { FounderCard, TeamMemberCard } from "@/components/ui/TeamCards";


const teamMembers = [
  {
    name: team.founder.name,
    role: team.founder.role,
    experience: "6+ Years",
    image: team.founder.avatar,
    initials: "SA",
    bio: "Driving the vision and product strategy at Arclink Edge.",
  },
  {
    name: "Frontend Team",
    role: "React & Next.js Developers",
    experience: "5+ Years",
    image: "/team/member-1.png",
    initials: "FE",
    bio: "Building pixel-perfect, high-performance user interfaces.",
  },
  {
    name: "Backend Team",
    role: "API, SaaS & Cloud Engineers",
    experience: "6+ Years",
    image: "/team/member-2.png",
    initials: "BE",
    bio: "Engineering scalable, secure, and robust system architectures.",
  },
  {
    name: "Design Partners",
    role: "UI/UX & Brand Systems",
    experience: "10+ Years",
    image: "/team/member-3.png",
    initials: "UX",
    bio: "Crafting intuitive experiences that users love and businesses grow with.",
  }
];

function HeroProjectColumn({ sanityImages }: { sanityImages?: string[] }) {
  const heroProjectImages = [
    "/projects/Cortex.jpg",
    "/projects/ExynosData.jpg",
    "/projects/NovaPay.jpg",
    "/projects/draftai.jpg",
    "/projects/ivf.jpg",
    "/projects/neuralmind.jpg",
    "/projects/novira.jpg",
    "/projects/quickboard.jpg",
  ];
  const displayImages = sanityImages && sanityImages.length > 0 ? sanityImages : heroProjectImages;
  
  return (
    <div className="relative h-[400px] lg:h-full w-full overflow-hidden border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl">
      <div className="absolute left-0 top-0 z-20 h-2 w-2 -translate-x-1/2 -translate-y-1/2 bg-[#D1D1D6]" />
      <div className="absolute right-0 top-0 z-20 h-2 w-2 -translate-y-1/2 translate-x-1/2 bg-[#D1D1D6]" />
      <div className="absolute bottom-0 left-0 z-20 h-2 w-2 -translate-x-1/2 translate-y-1/2 bg-[#D1D1D6]" />
      <div className="absolute bottom-0 right-0 z-20 h-2 w-2 translate-x-1/2 translate-y-1/2 bg-[#D1D1D6]" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-black to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-black to-transparent" />

        <div className="absolute inset-x-0 top-0 flex animate-hero-project-column flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {[0, 1].map((set) => (
            <div key={`hero-project-set-${set}`} className="flex shrink-0 flex-col gap-4 pb-4 lg:gap-6 lg:pb-6">
              {displayImages.map((src, index) => (
                <div key={`${set}-${src}-${index}`} className="relative aspect-[16/9] w-full shrink-0 overflow-hidden bg-black/20">
                  <Image
                    src={src}
                    alt={`Arclink Edge product preview ${index + 1}`}
                    fill
                    className="object-cover object-top transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 46vw"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes hero-project-column {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-hero-project-column {
          animation: hero-project-column 45s linear infinite;
        }
        .animate-hero-project-column:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

const faqs = [
  {
    question: "Where is Arclink Edge located?",
    answer: "Arclink Edge is fully remote with no physical office. We serve clients across New York, London, Dubai, Bangalore, Ahmedabad, and worldwide without passing office overhead into project bills."
  },
  {
    question: "What makes Arclink Edge different from other agencies?",
    answer: "We focus on 'Rapid Precision'. We don't just write code; we bridge the gap between high-level design and hardcore engineering to deliver world-class digital products without cutting corners."
  },
  {
    question: "Who leads the team at Arclink Edge?",
    answer: "Our team is led by our founder who has extensive experience in product strategy and full-stack engineering, personally overseeing every major product launch to ensure excellence."
  },
  {
    question: "What industries do you work with?",
    answer: "We partner with ambitious startups and established B2B brands across various industries, focusing on SaaS, eCommerce, AI, and enterprise solutions."
  }
];

export default function AboutContent({ 
  sanityLogos, 
  sanityTestimonials,
  sanityTeam,
  sanityImages
}: { 
  sanityLogos?: any[]; 
  sanityTestimonials?: any[];
  sanityTeam?: any[];
  sanityImages?: string[];
}) {
  const displayFounder = sanityTeam?.find(m => m.category === 'founder') || teamMembers[0];
  const displayTeam = (sanityTeam && sanityTeam.length > 0) 
    ? sanityTeam.filter(m => m.category !== 'founder') 
    : teamMembers.slice(1);

  return (
    <main id="main-content" className="bg-black text-[#F5F5F7] min-h-screen overflow-x-clip selection:bg-[#0052FF] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative px-6 pt-32 pb-20 lg:px-12 lg:pt-48 lg:pb-32">
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_bottom,#000_0%,#030713_34%,#071436_64%,#000_100%)]" />
        
        <div className="relative z-10 mx-auto max-w-[1600px]">
          <SectionLabel>Our Story</SectionLabel>
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-end mt-8">
            <div>
              <h1 
                className="text-5xl md:text-7xl lg:text-9xl font-medium leading-[1.05] tracking-[-0.04em] md:leading-[0.92] md:tracking-[-0.075em]"
                style={{ fontFamily: "var(--font-inter-tight)" }}
              >
                Engineering <br /> <span className="text-white/20">Human Ambition.</span>
              </h1>
            </div>
            <div className="pb-4">
              <p className="text-xl md:text-2xl text-white/60 leading-relaxed max-w-md" style={{ letterSpacing: "-0.02em" }}>
                Arclink Edge is a fully remote premium boutique agency serving New York, London, Dubai, Bangalore, Ahmedabad, and global clients. We don&apos;t just write code; we build the future of your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="px-6 py-20 lg:px-12 lg:py-40 relative z-10 border-t border-white/5">
        <div className="mx-auto max-w-[1600px] grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl md:text-5xl font-medium mb-12 tracking-[-0.02em] md:tracking-[-0.04em]" style={{ fontFamily: "var(--font-inter-tight)" }}>
              Our Philosophy
            </h2>
            <div className="space-y-8 text-lg md:text-xl text-white/50 leading-relaxed">
              <p>
                We believe that in the digital age, speed is the ultimate currency. But speed without quality is a liability. That's why we focus on "Rapid Precision"—delivering world-class digital products in record time without cutting corners.
              </p>
              <p>
                Our remote-first team partners with ambitious startups and established B2B brands across the USA, UK, UAE, India, and worldwide. With no physical-office overhead added to your bill, more of your investment goes directly into strategy, design, engineering, and measurable outcomes.
              </p>
            </div>
          </div>
           <div className="relative min-h-[400px] lg:h-auto">
            <HeroProjectColumn sanityImages={sanityImages} />
          </div>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="px-6 py-20 lg:px-12 lg:py-40 relative z-10 bg-white/[0.02] border-y border-white/5">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid lg:grid-cols-[0.45fr_1fr] gap-12 lg:gap-24 items-start">
             <div>
                <FounderCard founder={displayFounder} />
             </div>
             <div>
                <SectionLabel>Meet the Founder</SectionLabel>
                <h3 className="text-4xl md:text-6xl font-medium mt-6 mb-8 tracking-[-0.015em] md:tracking-[-0.04em]" style={{ fontFamily: "var(--font-inter-tight)" }}>
                  A Vision for Precision.
                </h3>
                 <p className="text-xl md:text-3xl text-[#D0F504] mb-8 font-medium italic" style={{ fontFamily: "var(--font-fraunces)" }}>
                  "{displayFounder.bio || team.founder.bio}"
                </p>
                <div className="grid md:grid-cols-2 gap-12 text-white/50 leading-relaxed">
                   <p>
                       With over {displayFounder.experience || "6+ Years"} of experience in product strategy and full-stack engineering, {displayFounder.name} founded Arclink Edge with a simple mission: to bridge the gap between high-level design and hardcore engineering.
                   </p>
                   <p>
                      Today, he leads a team of elite developers and designers, personally overseeing every major product launch to ensure it meets our standard of excellence.
                   </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Values/Team Section */}
      <section className="px-6 py-20 lg:px-12 lg:py-40 relative z-10">
        <div className="mx-auto max-w-[1600px]">
          <h2 className="text-3xl md:text-5xl font-medium mb-20 tracking-[-0.02em] md:tracking-[-0.04em]" style={{ fontFamily: "var(--font-inter-tight)" }}>
            The Core Team
          </h2>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayTeam.map((member, i) => (
              <TeamMemberCard key={member.name} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      <SharedInsidePageSections sanityLogos={sanityLogos} sanityTestimonials={sanityTestimonials} faqs={faqs} />
      <Footer />
      <BackToTop />
      <CookieBanner />
    </main>
  );
}
