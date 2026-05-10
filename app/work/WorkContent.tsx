"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import BackToTop from "@/components/ui/BackToTop";
import CookieBanner from "@/components/ui/CookieBanner";
import SectionLabel from "@/components/ui/SectionLabel";
import CaseStudyCard from "@/components/ui/CaseStudyCard";
import { urlForImage } from "@/sanity/lib/image";
import SharedInsidePageSections from "@/components/sections/SharedInsidePageSections";
import { caseStudies as defaultCaseStudies } from "@/lib/data";

const categories = ["All", "SaaS", "Web App", "Mobile App", "E-commerce"];

const heroProjectImages = [
  "/projects/Cortex.jpg",
  "/projects/ExynosData.jpg",
  "/projects/NovaPay.jpg",
  "/projects/draftai.jpg",
];

const heroStats = [
  { value: "50+", label: "Projects delivered" },
  { value: "30+", label: "SaaS Platforms" },
  { value: "10M+", label: "End users impacted" },
];

function HeroProjectColumn() {
  return (
    <div
      className="relative h-[430px] w-full overflow-visible border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl sm:h-[520px] lg:h-full lg:min-h-0 lg:justify-self-end"
      aria-label="Arclink Edge projects"
    >
      <div className="absolute left-0 top-0 z-20 h-2 w-2 -translate-x-1/2 -translate-y-1/2 bg-[#D1D1D6]" />
      <div className="absolute right-0 top-0 z-20 h-2 w-2 -translate-y-1/2 translate-x-1/2 bg-[#D1D1D6]" />
      <div className="absolute bottom-0 left-0 z-20 h-2 w-2 -translate-x-1/2 translate-y-1/2 bg-[#D1D1D6]" />
      <div className="absolute bottom-0 right-0 z-20 h-2 w-2 translate-x-1/2 translate-y-1/2 bg-[#D1D1D6]" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-[#030303] to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-[#030303] to-transparent" />

        <div className="absolute inset-x-0 top-0 flex animate-hero-project-column flex-col gap-4 p-4 sm:gap-5 sm:p-5 lg:gap-6 lg:p-6">
          {[0, 1].map((set) => (
            <div key={`hero-project-set-${set}`} className="flex shrink-0 flex-col gap-4 pb-4 sm:gap-5 sm:pb-5 lg:gap-6 lg:pb-6">
              {heroProjectImages.map((src, index) => (
                <div key={`${set}-${src}`} className="relative aspect-[16/10] w-full shrink-0 overflow-hidden">
                  <Image
                    src={src}
                    alt={`Arclink Edge project ${index + 1}`}
                    fill
                    priority={set === 0 && (index === 0 || index === 1)}
                    className="object-cover transition-transform duration-700 hover:scale-105"
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
          animation: hero-project-column 28s linear infinite;
        }
        .animate-hero-project-column:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-hero-project-column {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}

function HeroStatsBand() {
  return (
    <div className="relative z-10 mx-auto mt-16 max-w-[1600px] border-y border-white/[0.06] lg:mt-24">
      <div className="grid divide-y divide-white/[0.06] sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:divide-white/[0.06]">
        {heroStats.map((stat) => (
          <div key={stat.label} className="group relative overflow-hidden px-1 py-7 sm:px-6 lg:py-10">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D0F504]/0 to-transparent transition-all duration-500 group-hover:via-[#D0F504]/70" />
            <p
              className="text-[5.2rem] font-regular leading-[0.82] text-[#F5F5F7] sm:text-7xl lg:text-8xl xl:text-9xl"
              style={{ fontFamily: "var(--font-inter-tight)", letterSpacing: "-0.075em" }}
            >
              {stat.value}
            </p>
            <p
              className="mt-5 max-w-[12rem] text-xs font-bold uppercase leading-snug tracking-[0.16em] text-white/50"
              style={{ fontFamily: "var(--font-inter-tight)" }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function WorkContent({ 
  sanityLogos, 
  sanityTestimonials,
  sanityProjects 
}: { 
  sanityLogos?: any[]; 
  sanityTestimonials?: any[];
  sanityProjects?: any[];
}) {
  const [activeCategory, setActiveCategory] = useState("All");

  const displayStudies = useMemo(() => {
    if (!sanityProjects || sanityProjects.length === 0) return defaultCaseStudies;

    return sanityProjects.map(p => ({
      id: p._id,
      title: p.title,
      client: "Confidential Client",
      categories: p.categories?.map((cat: string) => {
        const catMap: Record<string, string> = {
          'web-development': 'Web App',
          'mobile-app-development': 'Mobile App',
          'ui-ux-design': 'UI/UX',
          'saas-development': 'SaaS',
          'ecommerce': 'E-commerce',
          'ai-automation': 'AI & Automation'
        };
        return catMap[cat] || cat;
      }) || ["Product"],
      metric: "100%",
      metricLabel: "Performance",
      image: p.images?.[0] ? urlForImage(p.images[0])?.url() || "/projects/novira.jpg" : "/projects/novira.jpg",
      href: `/work/${p.slug?.current || p._id}`
    }));
  }, [sanityProjects]);

  const filteredStudies = displayStudies.filter(
    (study) => activeCategory === "All" || study.categories.includes(activeCategory) || (activeCategory === "Web App" && study.categories.includes("Web Development"))
  );

  return (
    <main className="bg-black text-[#F5F5F7] min-h-screen overflow-x-clip selection:bg-[#0052FF] selection:text-white">
      <Navbar />

      {/* 1. Hero Section matching Web Development */}
      <section className="relative overflow-visible px-6 pb-20 pt-32 lg:px-12 lg:pb-28 lg:pt-40">
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_bottom,#000_0%,#030713_34%,#071436_64%,#000_100%)]" />
        <div aria-hidden="true" className="absolute left-[-18%] top-[14%] h-[36rem] w-[36rem] rounded-full bg-[#0052FF]/22 blur-[160px]" />

        <div className="relative z-10 mx-auto grid max-w-[1600px] items-stretch gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-center">
            <SectionLabel>Our Portfolio</SectionLabel>
            <h1
              className="max-w-5xl text-5xl font-medium leading-[0.96] md:text-7xl lg:text-8xl mt-6"
              style={{ fontFamily: "var(--font-inter-tight)", letterSpacing: "-0.075em" }}
            >
              Work we're proud of. Built to scale.
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/62 md:text-lg">
              Explore our curated selection of case studies. From enterprise SaaS platforms to consumer mobile apps, see how we engineer success with modern architecture and premium design.
            </p>
          </div>

          <HeroProjectColumn />
        </div>

        <HeroStatsBand />
      </section>

      {/* 2. Grid Section with standard CaseStudyCard */}
      <section className="py-12 px-6 lg:px-12 min-h-[60vh] relative z-10">
        <div className="max-w-[1600px] mx-auto">
          
          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-start gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-none text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat 
                    ? "bg-white text-black" 
                    : "bg-white/[0.03] text-white/60 hover:bg-white/[0.08] hover:text-white border border-white/[0.05]"
                }`}
                style={{ fontFamily: "var(--font-inter-tight)" }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            <AnimatePresence mode="popLayout">
              {filteredStudies.map((study, idx) => (
                <motion.div
                  key={study.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: idx * 0.05 }}
                >
                  <CaseStudyCard study={study} i={idx} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <SharedInsidePageSections sanityLogos={sanityLogos} sanityTestimonials={sanityTestimonials} />

      <Footer />
      <BackToTop />
      <CookieBanner />
    </main>
  );
}
