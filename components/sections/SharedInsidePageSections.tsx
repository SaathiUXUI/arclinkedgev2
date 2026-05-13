"use client";

import React from "react";
import Link from "next/link";
import { Search, Code2, ShieldCheck, Clock, Zap, ArrowUpRight, Gauge, Layers } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import TestimonialMarquee from "@/components/sections/TestimonialMarquee";
import LogoMarquee from "@/components/sections/LogoMarquee";
import Contact from "@/components/sections/Contact";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";

const industries = [
  "B2B services",
  "SaaS startups",
  "Fintech",
  "Healthcare",
  "Education",
  "E-commerce",
  "Real estate",
  "Local service businesses",
];

const edgeHighlights = [
  { label: "Before design", title: "Offer, audience and search intent mapped first" },
  { label: "During build", title: "Reusable components with a performance budget" },
  { label: "After launch", title: "Analytics, iteration and technical support stay connected" },
];

const engagementModels = [
  {
    title: "Launch Sprint",
    badge: "Fastest path",
    bestFor: "Landing pages, startup websites and campaign pages",
    timeline: "2-3 weeks",
    output: "Conversion-ready website or page system",
    description: "A focused web development sprint for new landing pages, startup websites and campaign pages that need to go live quickly.",
  },
  {
    title: "Custom Web App",
    badge: "Deep build",
    bestFor: "Dashboards, portals, SaaS modules and workflows",
    timeline: "Custom roadmap",
    output: "Scalable app architecture with integrations",
    description: "A custom React and Next.js web app build for dashboards, portals, SaaS modules and workflows that need planning, logic and integrations.",
  },
  {
    title: "Growth Retainer",
    badge: "Ongoing",
    bestFor: "New pages, SEO updates, speed fixes and product iteration",
    timeline: "Monthly",
    output: "Continuous improvements after launch",
    description: "Ongoing web development support for improvements, new pages, speed optimization, SEO updates and product iteration.",
  },
];

const outcomes = [
  {
    icon: Gauge,
    title: "Performance-first builds",
    description: "Lean pages, optimized assets, Core Web Vitals discipline and clean frontend architecture from day one.",
  },
  {
    icon: Search,
    title: "SEO-ready structure",
    description: "Metadata, schema, semantic headings, internal links and crawlable content built into the page system.",
  },
  {
    icon: Layers,
    title: "Scalable web apps",
    description: "Dashboards, SaaS modules, CMS-driven pages, APIs, authentication and product workflows that can grow.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable launch process",
    description: "QA, staging, deployment, analytics, security basics and post-launch support handled with care.",
  },
];

function CardHoverEffects() {
  return (
    <>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/0 to-transparent transition-all duration-500 group-hover:via-white/70" />
      <div className="absolute -right-10 -top-10 h-36 w-36 bg-white/0 blur-[60px] transition-colors duration-500 group-hover:bg-white/10" />
    </>
  );
}

interface SharedInsidePageSectionsProps {
  children?: React.ReactNode;
  beforeOutcomes?: React.ReactNode;
  sanityLogos?: { name: string; src: string | null }[];
  sanityTestimonials?: any[];
  faqs?: { question: string; answer: string }[];
}

export default function SharedInsidePageSections({ children, beforeOutcomes, sanityLogos, sanityTestimonials, faqs }: SharedInsidePageSectionsProps) {
  return (
    <>
      {/* 1. Testimonials */}
      <TestimonialMarquee sanityTestimonials={sanityTestimonials} />

      {/* Optional Before Outcomes */}
      {beforeOutcomes ? (
        <React.Fragment key="shared-before-outcomes">
          {beforeOutcomes}
        </React.Fragment>
      ) : null}

      {/* 2. Outcomes */}
      <section className="relative overflow-hidden px-6 py-20 lg:px-12 lg:py-28 z-10">
        <div aria-hidden="true" className="absolute inset-0 bg-[#030303]" />
        <div className="relative z-10 mx-auto max-w-[1600px]">
          <div className="mb-12 flex flex-col lg:flex-row justify-between lg:items-end gap-8">
            <div className="max-w-2xl">
              <SectionLabel>Outcomes</SectionLabel>
              <h2 className="text-4xl font-medium leading-none md:text-6xl mt-4" style={{ fontFamily: "var(--font-inter-tight)", letterSpacing: "-0.065em" }}>
                Built for users, search engines and future product growth.
              </h2>
            </div>
            <p className="mt-4 lg:mt-0 max-w-xl text-sm leading-relaxed text-white/54">
              We combine lean engineering with growth logic to ensure your product doesn't just launch, but thrives in the real world.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {outcomes.map(({ icon: Icon, title, description }) => (
              <article key={title} className="group relative overflow-hidden border border-white/[0.04] bg-[#0A0A0F]/40 p-6 transition-all duration-300 hover:border-white/[0.12] hover:bg-[#0A0A0F]/60">
                <CardHoverEffects />
                <div className="relative z-10">
                  <Icon className="mb-12 text-white/82" size={24} strokeWidth={1.6} aria-hidden="true" />
                  <h3 className="text-xl font-medium" style={{ fontFamily: "var(--font-inter-tight)", letterSpacing: "-0.04em" }}>{title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/54">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Optional Injected Content (like Deliverables) */}
      {children ? (
        <React.Fragment key="shared-injected-content">
          {children}
        </React.Fragment>
      ) : null}

      {/* 3. Why Arclink Edge */}
      <div className="mx-auto max-w-[1600px] px-6 py-20 lg:px-12 lg:py-28 relative z-10">
        <div className="border border-white/[0.06] bg-white/[0.01] backdrop-blur-[20px]">
          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-12 lg:gap-16">
            <div className="p-8 lg:p-16 border-b border-white/[0.04] lg:border-b-0 lg:border-r border-white/[0.04]">
              <div className="relative z-10 h-full flex flex-col">
                <SectionLabel>Why Arclink Edge</SectionLabel>
                <h2 className="text-4xl font-medium leading-none md:text-6xl mt-4" style={{ fontFamily: "var(--font-inter-tight)", letterSpacing: "-0.065em" }}>
                  Strategy, UI and engineering in one build.
                </h2>

                <div className="mt-auto pt-20">
                  <p className="mb-6 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-white/50" style={{ fontFamily: "var(--font-inter-tight)" }}>
                    Expertise across industries
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {industries.map((industry) => (
                      <span key={industry} className="border border-white/[0.06] bg-white/[0.02] px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.05em] text-white/50 transition-colors duration-300 hover:border-[#D0F504]/30 hover:text-[#D0F504]">
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 lg:p-16">
              <div className="relative z-10">
                <p className="mb-12 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-white/50" style={{ fontFamily: "var(--font-inter-tight)" }}>
                  How we drive results
                </p>
                <div className="space-y-16 lg:space-y-24">
                  {edgeHighlights.map((item, index) => {
                    const icons = [Search, Code2, ShieldCheck];
                    const Icon = icons[index];
                    return (
                      <article key={item.label} className="relative flex items-start gap-10 lg:gap-14">
                        <div className="relative flex flex-col items-center">
                          <div className="z-10 flex h-16 w-16 shrink-0 items-center justify-center border border-white/[0.08] bg-white/[0.03] text-[#D0F504]">
                            <Icon size={26} strokeWidth={1.5} />
                          </div>
                          {index !== edgeHighlights.length - 1 && (
                            <div className="absolute top-[72px] h-[calc(100%+64px)] lg:h-[calc(100%+96px)] w-[1.5px] bg-gradient-to-b from-[#D0F504]/40 via-[#D0F504]/10 to-transparent" />
                          )}
                        </div>
                        <div className="flex flex-col pt-2">
                          <span className="text-[0.62rem] font-bold uppercase tracking-[0.35em] text-[#D0F504]/90" style={{ fontFamily: "var(--font-inter-tight)" }}>
                            Phase {index + 1} &mdash; {item.label}
                          </span>
                          <h3 className="mt-1.5 text-xl font-medium leading-snug text-[#F5F5F7] md:text-2xl" style={{ fontFamily: "var(--font-inter-tight)", letterSpacing: "-0.035em" }}>
                            {item.title}
                          </h3>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Engagement Models */}
      <section className="px-6 py-20 lg:px-12 lg:py-28 relative z-10">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-12 flex flex-col lg:flex-row justify-between lg:items-end gap-8">
            <div className="max-w-2xl">
              <SectionLabel>Engagement Models</SectionLabel>
              <h2 className="text-4xl font-medium leading-none md:text-6xl mt-4" style={{ fontFamily: "var(--font-inter-tight)", letterSpacing: "-0.065em" }}>
                Pick the fastest path to value.
              </h2>
            </div>
            <p className="mt-6 lg:mt-0 max-w-xl text-sm leading-relaxed text-white/52">
              Each model is structured around a clear business need, so clients can choose without reading a long proposal first.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {engagementModels.map((model, index) => (
              <Link
                key={model.title}
                href="/contact"
                aria-label={`Discuss ${model.title}`}
                className="group relative block min-h-[480px] overflow-hidden border border-white/[0.04] bg-[#0A0A0F]/40 p-8 backdrop-blur-[16px] transition-all duration-300 hover:border-white/[0.12] hover:bg-[#0A0A0F]/60"
              >
                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-12">
                    <span className="inline-flex items-center gap-2 border border-[#D0F504]/20 bg-[#D0F504]/[0.06] px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#D0F504]">
                      <span className="h-1 w-1 rounded-full bg-[#D0F504] animate-pulse" />
                      {model.badge}
                    </span>
                    <h3 className="mt-6 text-4xl font-medium leading-[0.95] text-[#F5F5F7]" style={{ fontFamily: "var(--font-inter-tight)", letterSpacing: "-0.05em" }}>
                      {model.title}
                    </h3>
                  </div>

                  <div className="flex-1 space-y-10">
                    <div>
                      <p className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.15em] text-white/50" style={{ fontFamily: "var(--font-inter-tight)" }}>
                        Best for
                      </p>
                      <p className="text-xl font-medium leading-snug text-white/88" style={{ fontFamily: "var(--font-inter-tight)", letterSpacing: "-0.015em" }}>
                        {model.bestFor}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 border-t border-white/[0.05] pt-10">
                      <div className="space-y-2">
                        <p className="flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-white/50" style={{ fontFamily: "var(--font-inter-tight)" }}>
                          <Clock size={12} className="text-[#D0F504]/70" />
                          Timeline
                        </p>
                        <p className="text-sm font-semibold text-white/72">{model.timeline}</p>
                      </div>
                      <div className="space-y-2">
                        <p className="flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-white/50" style={{ fontFamily: "var(--font-inter-tight)" }}>
                          <Zap size={12} className="text-[#D0F504]/70" />
                          Output
                        </p>
                        <p className="text-sm font-semibold text-white/72">{model.output}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 flex items-center justify-between border-t border-white/[0.05] pt-8">
                    <span className="text-5xl font-semibold leading-none text-white/60" style={{ fontFamily: "var(--font-inter-tight)", letterSpacing: "-0.07em" }} aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors duration-200 group-hover:text-[#F5F5F7]"
                      style={{ fontFamily: "var(--font-inter-tight)" }}
                    >
                      Discuss this model
                      <ArrowUpRight size={14} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Logo Marquee */}
      <LogoMarquee variant="service" sanityLogos={sanityLogos} />

      {faqs && faqs.length > 0 && <FAQSection faqs={faqs} />}

      {/* 6. Contact & CTA */}
      <Contact />
      <CTASection />
    </>
  );
}
