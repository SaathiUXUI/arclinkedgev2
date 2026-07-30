"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Clock, Globe, Target } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import SectionLabel from "@/components/ui/SectionLabel";
import SharedInsidePageSections from "@/components/sections/SharedInsidePageSections";
import BackToTop from "@/components/ui/BackToTop";
import CookieBanner from "@/components/ui/CookieBanner";
import { TextButton } from "@/components/ui/Button";

interface ProjectContentProps {
  project: {
    title: string;
    client: string;
    categories: string[];
    metric: string;
    metricLabel: string;
    image: string;
    overview: string;
    challenge: string;
    solution: string;
    results: string[];
    techStack: string[];
    year: string;
    role: string;
    gallery: string[];
  };
  sanityLogos?: any[];
  sanityTestimonials?: any[];
}

const faqs = [
  {
    question: "Do you offer the same level of service for startups as you do for enterprise clients?",
    answer: "Absolutely. We apply the same 'Rapid Precision' methodology to every project, whether it's an MVP for a funded startup or a complex system overhaul for an enterprise client."
  },
  {
    question: "How do you measure the success of a project?",
    answer: "We define clear KPIs during the Discovery phase—ranging from improved conversion rates and faster load times to higher user engagement and reduced technical debt."
  },
  {
    question: "Can you take over an existing project mid-development?",
    answer: "Yes, we often help clients audit, rescue, and scale existing products that are suffering from technical debt, poor UX, or performance issues."
  },
  {
    question: "What is your tech stack for these types of projects?",
    answer: "While we are stack-agnostic, we specialize in Next.js, React, Node.js, and Flutter for robust, high-performance applications."
  }
];

export default function ProjectContent({ project, sanityLogos, sanityTestimonials }: ProjectContentProps) {
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

      {/* 1. Hero Section */}
      <section className="relative px-6 pt-32 pb-20 lg:px-12 lg:pt-48 lg:pb-32">
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_bottom,#000_0%,#030713_34%,#071436_64%,#000_100%)]" />
        
        <div className="relative z-10 mx-auto max-w-[1600px]">
          <TextButton 
            href="/work" 
            className="mb-12"
            icon={ArrowLeft}
            iconPosition="left"
          >
            Back to Work
          </TextButton>

          <div className="grid lg:grid-cols-[1fr_0.4fr] gap-12 lg:gap-20 items-end">
            <div>
              <SectionLabel>{project.categories.join(" • ")}</SectionLabel>
              <h1 
                className="text-5xl md:text-7xl lg:text-9xl font-medium leading-[1.05] tracking-[-0.04em] md:leading-[0.92] md:tracking-[-0.075em] mt-8"
                style={{ fontFamily: "var(--font-inter-tight)" }}
              >
                {project.title}
              </h1>
            </div>
            <div className="pb-4">
              <p 
                className="text-xl md:text-2xl text-white/60 leading-relaxed max-w-md"
                style={{ fontFamily: "var(--font-inter-tight)", letterSpacing: "-0.02em" }}
              >
                {project.overview}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Project Metadata Bar */}
      <section className="relative z-10 px-6 lg:px-12 border-y border-white/[0.06] bg-white/[0.01] backdrop-blur-xl">
        <div className="mx-auto max-w-[1600px] grid grid-cols-2 md:grid-cols-4">
          {[
            { label: "Client", value: project.client },
            { label: "Year", value: project.year },
            { label: "Role", value: project.role },
            { label: "Industry", value: project.categories[0] },
          ].map((item, idx) => (
            <div 
              key={idx} 
              className={`
                py-8 px-4 md:px-10 border-white/[0.06]
                ${idx % 2 === 0 ? "border-r pl-0" : "pr-0"} 
                ${idx < 2 ? "border-b md:border-b-0" : ""}
                ${idx !== 3 ? "md:border-r" : "md:border-r-0"}
                ${idx === 0 ? "md:pl-0" : ""}
                ${idx === 2 ? "md:pl-10" : ""}
              `}
            >
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold mb-2" style={{ fontFamily: "var(--font-inter-tight)" }}>
                {item.label}
              </p>
              <p className="text-lg font-medium text-white/90">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Hero Image / Mockup */}
      <section className="px-6 lg:px-12 py-20 lg:py-32 relative z-10">
        <div className="mx-auto max-w-[1600px]">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[16/9] w-full overflow-hidden border border-white/[0.08] bg-white/[0.03]"
          >
            <Image 
              src={project.image} 
              alt={project.title} 
              fill 
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* 4. Challenge & Solution */}
      <section className="px-6 py-20 lg:px-12 lg:py-40 relative z-10 overflow-hidden">
        <div aria-hidden="true" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#0052FF]/05 blur-[160px] rounded-full pointer-events-none" />
        
        <div className="mx-auto max-w-[1600px] grid lg:grid-cols-2 gap-24 lg:gap-40">
          <div>
            <SectionLabel>The Challenge</SectionLabel>
            <h2 
              className="text-4xl md:text-6xl font-medium leading-[1.1] mt-8 mb-10 tracking-[-0.02em] md:tracking-[-0.065em]"
              style={{ fontFamily: "var(--font-inter-tight)" }}
            >
              Turning complexity into <br />
              <span className="italic font-normal" style={{ fontFamily: "var(--font-fraunces)" }}>clarity</span>.
            </h2>
            <div className="space-y-6 text-lg text-white/60 leading-relaxed">
              <p>{project.challenge}</p>
            </div>
          </div>

          <div>
            <SectionLabel>Our Solution</SectionLabel>
            <h2 
              className="text-4xl md:text-6xl font-medium leading-[1.1] mt-8 mb-10 tracking-[-0.02em] md:tracking-[-0.065em]"
              style={{ fontFamily: "var(--font-inter-tight)" }}
            >
              Engineering the <br />
              <span className="text-[#D0F504]">advantage</span>.
            </h2>
            <div className="space-y-6 text-lg text-white/60 leading-relaxed">
              <p>{project.solution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Key Metrics / Impact */}
      <section className="px-6 py-20 lg:px-12 lg:py-32 relative z-10 bg-white/[0.02] border-y border-white/[0.06]">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid md:grid-cols-3 gap-12 lg:gap-24">
            <div className="md:col-span-1">
              <SectionLabel>Impact</SectionLabel>
              <h2 className="text-4xl font-medium mt-6 tracking-[-0.02em] md:tracking-[-0.05em]" style={{ fontFamily: "var(--font-inter-tight)" }}>
                Real numbers. <br />Real growth.
              </h2>
            </div>
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-12 lg:gap-20">
              <div className="space-y-4">
                <p className="text-7xl lg:text-8xl font-medium text-[#D0F504]" style={{ fontFamily: "var(--font-inter-tight)", letterSpacing: "-0.05em" }}>
                  {project.metric}
                </p>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/40">
                  {project.metricLabel}
                </p>
                <p className="text-white/60 leading-relaxed">
                  A significant leap in user engagement achieved through optimized interface logic.
                </p>
              </div>
              <div className="grid gap-6">
                {project.results.map((result, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-5 border border-white/[0.04] bg-white/[0.01]">
                    <CheckCircle2 size={20} className="text-[#D0F504] shrink-0 mt-1" />
                    <p className="text-sm font-medium text-white/80">{result}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Contact & Related (Shared Bottom Stack) */}
      <SharedInsidePageSections sanityLogos={sanityLogos} sanityTestimonials={sanityTestimonials} faqs={faqs} />

      <Footer />
      <BackToTop />
      <CookieBanner />
    </main>
  );
}
