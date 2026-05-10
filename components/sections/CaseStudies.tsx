"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/lib/data";
import HeadingReveal from "@/components/ui/HeadingReveal";
import { TextButton } from "@/components/ui/Button";
import CaseStudyCard from "@/components/ui/CaseStudyCard";
import { urlForImage } from "@/sanity/lib/image";

export default function CaseStudies({ sanityProjects }: { sanityProjects?: any[] }) {
  const displayStudies = (sanityProjects && sanityProjects.length > 0) 
    ? sanityProjects.map(p => ({
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
      }))
    : caseStudies;

  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="case-studies"
      className="relative overflow-hidden bg-[#000000] py-24 lg:py-32"
      aria-labelledby="case-studies-heading"
    >
      {/* Background glowing ellipses for the section */}
      <div
        className="absolute top-[20%] -left-[15%] w-[40vw] h-[60vh] rounded-full pointer-events-none opacity-[0.15]"
        style={{ backgroundColor: "#0052FF", filter: "blur(150px)", zIndex: 0 }}
      />
      <div
        className="absolute bottom-[10%] -right-[15%] w-[40vw] h-[70vh] rounded-full pointer-events-none opacity-[0.15]"
        style={{ backgroundColor: "#0052FF", filter: "blur(160px)", zIndex: 0 }}
      />

      {/* ── Content ── */}
      <div
        className="relative z-10 mx-auto max-w-[1600px]"
        style={{ paddingLeft: "clamp(16px,5vw,80px)", paddingRight: "clamp(16px,5vw,80px)" }}
      >
        {/* Header */}
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <HeadingReveal
              id="case-studies-heading"
              style={{
                fontFamily: "var(--font-inter-tight)",
                fontSize: "clamp(3.2rem,8vw,6.8rem)",
                fontWeight: 500,
                lineHeight: 0.95,
                letterSpacing: "-0.07em",
                color: "#F5F5F7",
              }}
            >
              Selected works
            </HeadingReveal>
            <p
              className="mt-4 max-w-lg"
              style={{ fontSize: "16px", lineHeight: 1.6, letterSpacing: "-0.02em", color: "rgba(245,245,247,0.52)" }}
            >
              A curated showcase of products we&apos;ve designed, built, and launched.
            </p>
          </div>
          <TextButton href="/work" icon={ArrowUpRight}>
            View all projects
          </TextButton>
        </div>

        {/* 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {displayStudies.slice(0, 4).map((study, i) => (
            <CaseStudyCard key={study.id} study={study} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
