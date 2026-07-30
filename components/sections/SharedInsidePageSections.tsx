import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Code2, ShieldCheck, Clock, Zap, ArrowUpRight, Gauge, Layers } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import TestimonialMarquee from "@/components/sections/TestimonialMarquee";
import LogoMarquee from "@/components/sections/LogoMarquee";
import Contact from "@/components/sections/Contact";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import type { Testimonial } from "@/types";

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
  sanityTestimonials?: Testimonial[];
  faqs?: { question: string; answer: string }[];
  technology?: SharedTechnologySectionProps;
}

interface TechnologyCategory {
  title: string;
  items: string[];
  exp?: string;
}

interface SharedTechnologySectionProps {
  title: string;
  description: string;
  categories: TechnologyCategory[];
  additionalLabel: string;
  additionalTitle: string;
  additionalCategories: TechnologyCategory[];
  icons: Record<string, string>;
}

function TechnologyRows({
  categories,
  icons,
  headingLevel,
}: {
  categories: TechnologyCategory[];
  icons: Record<string, string>;
  headingLevel: "primary" | "additional";
}) {
  return (
    <div className="space-y-4">
      {categories.map((category) => (
        <article
          key={category.title}
          className="grid border border-white/[0.08] bg-white/[0.018] lg:grid-cols-[minmax(340px,0.32fr)_minmax(0,1fr)]"
        >
          <header className="flex flex-col justify-start border-b border-white/[0.08] p-6 md:p-7 lg:border-b-0 lg:border-r">
            {headingLevel === "primary" ? (
              <h3
                className="text-[#F5F5F7] type-legacy-140"
              >
                {category.title}
              </h3>
            ) : (
              <h4
                className="text-[#F5F5F7] type-legacy-140"
              >
                {category.title}
              </h4>
            )}

            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-white/38 type-label type-legacy-014">
              <span>
                {category.items.length}{" "}
                {category.items.length === 1 ? "technology" : "technologies"}
              </span>
              {category.exp && (
                <>
                  <span aria-hidden="true" className="h-1 w-1 bg-[#0052FF]" />
                  <span>{category.exp} years</span>
                </>
              )}
            </div>
          </header>

          <ul
            className="grid list-none grid-cols-1 bg-[#09090B] sm:grid-cols-2 lg:grid-cols-4"
            aria-label={`${category.title} technologies`}
          >
            {category.items.map((tech) => (
              <li
                key={tech}
                className="group flex items-center gap-5 border-b border-r border-white/[0.06] bg-[#09090B] p-6 transition-colors duration-300 hover:bg-[#101014] md:p-7"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#0052FF]/20 bg-[#0052FF]/[0.07] text-[#5F96FF] type-b3 type-legacy-141">
                  {icons[tech] ? (
                    <Image
                      src={icons[tech]}
                      alt=""
                      width={28}
                      height={28}
                      className="h-7 w-7 object-contain"
                    />
                  ) : (
                    <span aria-hidden="true">
                      {tech.slice(0, 2).toUpperCase()}
                    </span>
                  )}
                </div>

                {headingLevel === "primary" ? (
                  <h4
                    className="text-[#F5F5F7] type-legacy-142"
                  >
                    {tech}
                  </h4>
                ) : (
                  <h5
                    className="text-[#F5F5F7] type-legacy-142"
                  >
                    {tech}
                  </h5>
                )}

              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

function SharedTechnologySection({
  title,
  description,
  categories,
  additionalLabel,
  additionalTitle,
  additionalCategories,
  icons,
}: SharedTechnologySectionProps) {
  return (
    <section className="defer-render relative overflow-hidden px-6 py-20 lg:px-12 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 42%, rgba(0,82,255,0.12) 0%, rgba(0,82,255,0.04) 26%, transparent 52%)," +
            "linear-gradient(180deg, #000000 0%, #02040A 52%, #000000 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1600px]">
        <div className="mb-16 max-w-5xl">
          <SectionLabel>Technology</SectionLabel>
          <h2
            className="type-legacy-069"
          >
            {title}
          </h2>
          <p className="mt-6 max-w-xl text-white/52 type-b2 type-legacy-073">
            {description}
          </p>
        </div>

        <TechnologyRows
          categories={categories}
          icons={icons}
          headingLevel="primary"
        />

        {additionalCategories.length > 0 && (
          <div className="mt-20">
            <div className="mb-10 max-w-3xl">
              <SectionLabel>{additionalLabel}</SectionLabel>
              <h3
                className="text-[#F5F5F7] type-legacy-069"
              >
                {additionalTitle}
              </h3>
            </div>

            <TechnologyRows
              categories={additionalCategories}
              icons={icons}
              headingLevel="additional"
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default function SharedInsidePageSections({ children, beforeOutcomes, sanityLogos, sanityTestimonials, faqs, technology }: SharedInsidePageSectionsProps) {
  return (
    <>
      {technology && <SharedTechnologySection {...technology} />}

      {/* 1. Testimonials */}
      <TestimonialMarquee sanityTestimonials={sanityTestimonials} />

      {/* Optional Before Outcomes */}
      {beforeOutcomes ? (
        <React.Fragment key="shared-before-outcomes">
          {beforeOutcomes}
        </React.Fragment>
      ) : null}

      {/* 2. Outcomes */}
      <section className="defer-render relative overflow-hidden px-6 py-20 lg:px-12 lg:py-28 z-10">
        <div aria-hidden="true" className="absolute inset-0 bg-[#030303]" />
        <div className="relative z-10 mx-auto max-w-[1600px]">
          <div className="mb-12 flex flex-col lg:flex-row justify-between lg:items-end gap-8">
            <div className="max-w-2xl">
              <SectionLabel>Outcomes</SectionLabel>
              <h2 className="mt-4 type-legacy-069">
                Built for users, search engines and future product growth.
              </h2>
            </div>
            <p className="mt-4 lg:mt-0 max-w-xl text-white/54 type-b3 type-legacy-023">
              We combine lean engineering with growth logic to ensure your product doesn&apos;t just launch, but thrives in the real world.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {outcomes.map(({ icon: Icon, title, description }) => (
              <article key={title} className="group relative overflow-hidden border border-white/[0.04] bg-[#0A0A0F]/40 p-6 transition-all duration-300 hover:border-white/[0.12] hover:bg-[#0A0A0F]/60">
                <CardHoverEffects />
                <div className="relative z-10">
                  <Icon className="mb-12 text-white/82" size={24} strokeWidth={1.6} aria-hidden="true" />
                  <h3 className="type-legacy-145">{title}</h3>
                  <p className="mt-4 text-white/54 type-b3 type-legacy-023">{description}</p>
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
            <div className="p-8 lg:p-16 border-b border-white/[0.04] lg:border-b-0 lg:border-r">
              <div className="relative z-10 h-full flex flex-col">
                <SectionLabel>Why Arclink Edge</SectionLabel>
                <h2 className="mt-4 type-legacy-069">
                  Strategy, UI and engineering in one build.
                </h2>

                <div className="mt-auto pt-20">
                  <p className="mb-6 text-white/50 type-label type-legacy-146">
                    Expertise across industries
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {industries.map((industry) => (
                      <span key={industry} className="border border-white/[0.06] bg-white/[0.02] px-4 py-2 text-white/50 transition-colors duration-300 hover:border-[#D0F504]/30 hover:text-[#D0F504] type-label type-legacy-147">
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 lg:p-16">
              <div className="relative z-10">
                <p className="mb-12 text-white/50 type-label type-legacy-146">
                  How we drive results
                </p>
                <div className="space-y-16 lg:space-y-24">
                  {edgeHighlights.map((item, index) => {
                    const icons = [Search, Code2, ShieldCheck];
                    const Icon = icons[index];
                    return (
                      <article key={item.label} className="relative flex items-start gap-6 lg:gap-14">
                        <div className="relative flex flex-col items-center">
                          <div className="z-10 flex h-11 w-11 shrink-0 items-center justify-center border border-white/[0.08] bg-white/[0.03] text-[#D0F504] lg:h-16 lg:w-16">
                            <Icon className="size-[18px] lg:size-[26px]" strokeWidth={1.5} />
                          </div>
                          {index !== edgeHighlights.length - 1 && (
                            <div className="absolute top-[50px] h-[calc(100%+64px)] lg:top-[72px] lg:h-[calc(100%+96px)] w-[1.5px] bg-gradient-to-b from-[#D0F504]/40 via-[#D0F504]/10 to-transparent" />
                          )}
                        </div>
                        <div className="flex flex-col pt-2">
                          <span className="text-[#D0F504]/90 type-label type-legacy-148">
                            Phase {index + 1} &mdash; {item.label}
                          </span>
                          <h3 className="mt-1.5 text-[#F5F5F7] type-legacy-149">
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
      <section className="defer-render px-6 py-20 lg:px-12 lg:py-28 relative z-10">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-12 flex flex-col lg:flex-row justify-between lg:items-end gap-8">
            <div className="max-w-2xl">
              <SectionLabel>Engagement Models</SectionLabel>
              <h2 className="mt-4 type-legacy-069">
                Pick the fastest path to value.
              </h2>
            </div>
            <p className="mt-6 lg:mt-0 max-w-xl text-white/52 type-b3 type-legacy-023">
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
                    <span className="inline-flex items-center gap-2 border border-[#D0F504]/20 bg-[#D0F504]/[0.06] px-2.5 py-1 text-[#D0F504] type-label type-legacy-150">
                      <span className="h-1 w-1 rounded-full bg-[#D0F504] animate-pulse" />
                      {model.badge}
                    </span>
                    <h3 className="mt-6 text-[#F5F5F7] type-legacy-151">
                      {model.title}
                    </h3>
                  </div>

                  <div className="flex-1 space-y-10">
                    <div>
                      <p className="mb-3 text-white/50 type-label type-legacy-152">
                        Best for
                      </p>
                      <p className="text-white/88 type-b1 type-legacy-153">
                        {model.bestFor}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 border-t border-white/[0.05] pt-10">
                      <div className="space-y-2">
                        <p className="flex items-center gap-2 text-white/50 type-label type-legacy-154">
                          <Clock size={12} className="text-[#D0F504]/70" />
                          Timeline
                        </p>
                        <p className="text-white/72 type-b3 type-legacy-012">{model.timeline}</p>
                      </div>
                      <div className="space-y-2">
                        <p className="flex items-center gap-2 text-white/50 type-label type-legacy-154">
                          <Zap size={12} className="text-[#D0F504]/70" />
                          Output
                        </p>
                        <p className="text-white/72 type-b3 type-legacy-012">{model.output}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 flex items-center justify-between border-t border-white/[0.05] pt-8">
                    <span className="text-white/60 type-display type-legacy-155" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="inline-flex items-center gap-2 text-white/60 transition-colors duration-200 group-hover:text-[#F5F5F7] type-b3 type-legacy-025"
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
