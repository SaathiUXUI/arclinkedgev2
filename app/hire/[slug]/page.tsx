import dynamic from "next/dynamic";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowUpRight, ArrowRight, Check, Clock, ShieldCheck, Users } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import HiringForm from "./HiringForm";
import PricingCard from "./PricingCard";
import BackToTop from "@/components/ui/BackToTop";
import CookieBanner from "@/components/ui/CookieBanner";

const Footer = dynamic(() => import("@/components/sections/Footer"));

const techIcons: Record<string, string> = {
  "React": "/tools/reactjs.svg",
  "Next.js": "/tools/nextjs.svg",
  "Node.js": "/tools/nodejs.svg",
  "TypeScript": "/tools/typescript.svg",
  "Tailwind CSS": "/tools/tailwindcss.svg",
  "Flutter": "/tools/flutter.svg",
  "React Native": "/tools/reactjs.svg",
  "Swift": "/tools/swift.svg",
  "Kotlin": "/tools/kotlin.svg",
  "Firebase": "/tools/firebase.svg",
  "Figma": "/tools/figma.svg",
  "Stripe API": "/tools/stripe.svg",
  "Shopify": "/tools/shopify.svg",
  "WooCommerce": "/tools/woocommerce.svg",
  "AWS": "/tools/aws.svg",
  "Docker": "/tools/docker.svg",
  "Python": "/tools/python.svg",
  "PostgreSQL": "/tools/postgresql.svg",
  "GraphQL": "/tools/graphql.svg",
};

type TalentData = {
  title: string;
  role: string;
  description: string;
  skills: string[];
  hourlyRate: string;
  monthlyRate: string;
  features: string[];
};

const talentRegistry: Record<string, TalentData> = {
  "web-developer": {
    title: "Hire Dedicated Web Developer",
    role: "Full-stack Expert",
    description: "Scale your web product with a senior dedicated full-stack developer expert in Next.js, TypeScript, and high-performance backend systems.",
    skills: ["Next.js", "React", "Node.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    hourlyRate: "$22 - $30",
    monthlyRate: "$3,500 - $4,800",
    features: ["160 Hours / Month", "Direct Slack/Discord Access", "Arclink Managed Quality", "Daily Standups", "IP Protection"],
  },
  "mobile-app-developer": {
    title: "Hire Dedicated Mobile App Developer",
    role: "App Architecture Expert",
    description: "Native-feeling performance for iOS and Android. High-velocity app development with senior Flutter and React Native experts.",
    skills: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "App Store Optimization"],
    hourlyRate: "$24 - $32",
    monthlyRate: "$3,800 - $5,000",
    features: ["Fully Dedicated Resource", "UI/UX Awareness", "End-to-end Deployment", "Weekly Technical Audits", "Managed Management"],
  },
  "ui-ux-designer": {
    title: "Hire Dedicated UI/UX Designer",
    role: "Product Design Expert",
    description: "Transform complex ideas into intuitive, high-conversion designs. Dedicated designers expert in SaaS, App, and Fintech UX.",
    skills: ["Figma", "SaaS UX", "Design Systems", "Prototyping", "User Research", "Visual Design"],
    hourlyRate: "$20 - $28",
    monthlyRate: "$3,200 - $4,500",
    features: ["Design System Management", "Unlimited Revisions", "Collaborative Figma Workflow", "Developer Handoff Support"],
  },
  "saas-developer": {
    title: "Hire Dedicated SaaS Developer",
    role: "SaaS Product Engineer",
    description: "Specialized in multi-tenant architectures, subscription billing, and complex dashboards for B2B/B2C SaaS products.",
    skills: ["Next.js", "Stripe API", "Auth0/Clerk", "Serverless", "Prisma", "System Design"],
    hourlyRate: "$24 - $34",
    monthlyRate: "$3,800 - $5,400",
    features: ["SaaS Best Practices", "Scalable Multi-tenancy", "Security-first Approach", "Managed Infrastructure Oversight"],
  },
  "ecommerce-developer": {
    title: "Hire Dedicated E-commerce Developer",
    role: "Conversion Expert",
    description: "Build high-converting online stores. Expert in Shopify custom themes, headless commerce, and performance optimization.",
    skills: ["Shopify", "Liquid", "Headless Commerce", "WooCommerce", "Technical SEO", "Speed Optimization"],
    hourlyRate: "$20 - $28",
    monthlyRate: "$3,200 - $4,500",
    features: ["CRO Focused Development", "Payment Gateway Security", "Inventory Sync Logic", "24/7 Priority Support"],
  },
  "devops-engineer": {
    title: "Hire Dedicated DevOps Engineer",
    role: "Infrastructure Expert",
    description: "Automate your deployments and optimize your cloud costs. Senior engineers for AWS, Docker, and Kubernetes management.",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD Pipelines", "Terraform", "Monitoring"],
    hourlyRate: "$26 - $38",
    monthlyRate: "$4,200 - $6,000",
    features: ["99.9% Uptime Guarantee", "Cloud Cost Optimization", "Zero-downtime Deployments", "Security Hardening"],
  },
  "api-developer": {
    title: "Hire Dedicated API Developer",
    role: "Integration Specialist",
    description: "Secure and scalable backend systems. Expert in REST, GraphQL, and complex third-party software integrations.",
    skills: ["Node.js", "Python", "GraphQL", "REST APIs", "Microservices", "API Security"],
    hourlyRate: "$22 - $30",
    monthlyRate: "$3,500 - $4,800",
    features: ["Secure Data Flow", "Scalable Microservices", "Automated API Docs", "System Synchronization"],
  },
  "ai-specialist": {
    title: "Hire Dedicated AI Specialist",
    role: "AI/LLM Engineer",
    description: "Integrate intelligence into your product. Expert in LLMs, custom AI agents, and workflow automation with OpenAI/Claude.",
    skills: ["OpenAI API", "LangChain", "Vector DBs", "Python", "Automation", "Machine Learning"],
    hourlyRate: "$28 - $40",
    monthlyRate: "$4,500 - $6,400",
    features: ["Custom AI Agent Logic", "RAG Implementation", "Prompt Engineering", "Data Privacy First AI"],
  },
  "seo-specialist": {
    title: "Hire Dedicated SEO Specialist",
    role: "Search Growth Expert",
    description: "Drive organic revenue with technical SEO and content clusters. Specialized in ranking competitive keywords and optimizing Core Web Vitals.",
    skills: ["Technical SEO", "Keyword Research", "Content Strategy", "Google Search Console", "Schema Markup", "Analytics"],
    hourlyRate: "$16 - $24",
    monthlyRate: "$2,500 - $3,800",
    features: ["Weekly Ranking Reports", "Competitor Gap Analysis", "Technical Audit & Fixes", "Content Quality Oversight"],
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = talentRegistry[slug];
  if (!data) return { title: "Hire Dedicated Talent" };

  return {
    title: `${data.title} | Arclink Edge`,
    description: data.description,
  };
}

export default async function DedicatedHiringPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = talentRegistry[slug];

  if (!data) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        <h1 className="text-2xl">Talent Profile Not Found</h1>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-[#F5F5F7]">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-6 pt-32 lg:px-12 lg:pt-40">
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#0052FF/15_0%,transparent_50%)]" />
          <div className="relative z-10 mx-auto max-w-[1600px]">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <SectionLabel>Dedicated {data.role}</SectionLabel>
                <h1 
                  className="mt-6 text-5xl font-medium leading-[0.96] md:text-7xl lg:text-8xl"
                  style={{ fontFamily: "var(--font-inter-tight)", letterSpacing: "-0.075em" }}
                >
                  {data.title}.
                </h1>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl">
                  {data.description}
                </p>
                
                <div className="mt-12 flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 border border-white/10 bg-white/[0.03] px-4 py-2.5 backdrop-blur-md transition-colors hover:border-white/20 hover:bg-white/[0.06]">
                    <Users className="h-4 w-4 text-[#0052FF]" />
                    <span className="text-[0.68rem] font-semibold uppercase tracking-widest text-white/80">Pre-vetted Talent</span>
                  </div>
                  <div className="flex items-center gap-2 border border-white/10 bg-white/[0.03] px-4 py-2.5 backdrop-blur-md transition-colors hover:border-white/20 hover:bg-white/[0.06]">
                    <Clock className="h-4 w-4 text-[#0052FF]" />
                    <span className="text-[0.68rem] font-semibold uppercase tracking-widest text-white/80">Interview in 24h</span>
                  </div>
                  <div className="flex items-center gap-2 border border-white/10 bg-white/[0.03] px-4 py-2.5 backdrop-blur-md transition-colors hover:border-white/20 hover:bg-white/[0.06]">
                    <ShieldCheck className="h-4 w-4 text-[#0052FF]" />
                    <span className="text-[0.68rem] font-semibold uppercase tracking-widest text-white/80">Managed Quality</span>
                  </div>
                </div>
              </div>

              {/* Pricing Card */}
              <PricingCard monthlyRate={data.monthlyRate} hourlyRate={data.hourlyRate} />
            </div>
          </div>
        </section>

        {/* Tech Stack & Inclusions */}
        <section className="relative overflow-visible px-6 py-20 lg:px-12 lg:py-28">
          <div aria-hidden="true" className="absolute left-[-15%] top-[20%] h-[60vh] w-[40vw] rounded-full bg-[#0052FF]/15 blur-[150px]" />
          <div className="relative z-10 mx-auto max-w-[1600px]">
            <div className="grid gap-20 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <SectionLabel>Technology</SectionLabel>
                <h2 className="text-4xl font-medium leading-none md:text-5xl" style={{ fontFamily: "var(--font-inter-tight)", letterSpacing: "-0.065em" }}>Core Technical Stack</h2>
                <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {data.skills.map((skill) => (
                    <div
                      key={skill}
                      className="group relative flex w-full items-center gap-5 overflow-hidden border border-white/[0.04] bg-[#0A0A0F]/40 p-4 backdrop-blur-[16px]"
                    >
                      <div
                        className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center text-sm font-bold transition-transform duration-500 group-hover:scale-110"
                        style={{ backgroundColor: "rgba(0,82,255,0.06)", color: "#0052FF", border: "1px solid rgba(0,82,255,0.15)", letterSpacing: "0.05em" }}
                      >
                        {techIcons[skill] ? (
                          <Image src={techIcons[skill]} alt={skill} width={24} height={24} className="object-contain" />
                        ) : (
                          skill.slice(0, 2).toUpperCase()
                        )}
                      </div>
                      <h4 className="relative z-10 text-base font-medium" style={{ color: "#F5F5F7", letterSpacing: "-0.02em" }}>{skill}</h4>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <SectionLabel>Inclusions</SectionLabel>
                <h2 className="text-4xl font-medium leading-none md:text-5xl" style={{ fontFamily: "var(--font-inter-tight)", letterSpacing: "-0.065em" }}>What's included?</h2>
                <ul className="mt-10 space-y-0">
                  {data.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-4 border-b border-white/[0.06] py-5">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#0052FF]/20 bg-[#0052FF]/5">
                        <Check className="h-4 w-4 text-[#0052FF]" />
                      </div>
                      <span className="text-base font-medium text-white/70">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="relative overflow-visible border-y border-white/[0.06] bg-white/[0.015]">
          <div aria-hidden="true" className="absolute inset-0 bg-black" />
          <div aria-hidden="true" className="absolute inset-x-0 top-0 z-[1] h-40 bg-gradient-to-b from-black via-black/85 to-transparent" />
          <div aria-hidden="true" className="absolute inset-x-0 top-0 z-[1] h-40 bg-gradient-to-b from-transparent via-black/20 to-transparent" />
          <div className="relative z-10 mx-auto max-w-[1600px] py-24 lg:py-32">
            <div className="mb-16 px-6 lg:px-12">
              <SectionLabel>Managed Process</SectionLabel>
              <h2 className="mt-4 text-4xl font-medium leading-none md:text-6xl" style={{ fontFamily: "var(--font-inter-tight)", letterSpacing: "-0.065em" }}>
                From Inquiry to Onboarding.
              </h2>
            </div>
            
            <div className="relative mt-16 overflow-hidden border-y border-white/[0.06] bg-white/[0.015]">
              <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-4">
                {[
                  { step: "01", title: "Inquiry", desc: "Share your project requirements and tech stack needs." },
                  { step: "02", title: "Match", desc: "We shortlist the best technical match from our dedicated squad." },
                  { step: "03", title: "Interview", desc: "You conduct a direct technical interview with the developer." },
                  { step: "04", title: "Onboard", desc: "24-hour kickoff with dedicated Slack/Jira integration." },
                ].map((item) => (
                  <article
                    key={item.step}
                    className="group relative min-h-[390px] overflow-hidden border-b border-white/[0.06] px-7 py-8 transition-colors duration-500 md:min-h-[460px] md:border-r md:border-white/[0.06] md:last:border-r-0 lg:border-b-0"
                  >
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-[#0052FF] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 opacity-0 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-[0.25]"
                      style={{
                        backgroundImage:
                          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                      }}
                    />
                    <span
                      aria-hidden="true"
                      className="absolute left-6 top-8 select-none text-[8rem] font-semibold leading-none text-white/[0.055] transition-colors duration-500 group-hover:text-white/[0.11] md:text-[10rem]"
                      style={{ fontFamily: "var(--font-inter-tight)", letterSpacing: "-0.09em" }}
                    >
                      {item.step}
                    </span>
                    <div className="absolute inset-x-7 bottom-8 z-10">
                      <h3
                        className="text-5xl font-medium leading-none text-[#F5F5F7] transition-transform duration-500 group-hover:-translate-y-1 md:text-6xl"
                        style={{ fontFamily: "var(--font-inter-tight)", letterSpacing: "-0.065em" }}
                      >
                        {item.title}
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-white/50">{item.desc}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Hiring Form Section */}
        <section id="hiring-form" className="px-6 pb-24 pt-24 lg:px-12 lg:pb-40 lg:pt-40 relative z-10 border-t border-white/5 bg-white/[0.01]">
          <div aria-hidden="true" className="absolute left-[50%] top-[0%] h-[50vh] w-[40vw] -translate-x-1/2 rounded-full bg-[#0052FF]/10 blur-[150px]" />
          <div className="relative z-10 mx-auto max-w-[1600px] grid lg:grid-cols-[0.4fr_1fr] gap-20">
            <div>
              <SectionLabel>Inquiry Form</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-medium mt-6 mb-8" style={{ fontFamily: "var(--font-inter-tight)", letterSpacing: "-0.04em" }}>
                Schedule an <br />Interview.
              </h2>
              <p className="text-white/40 max-w-sm leading-relaxed">
                Submit your requirements and our technical manager will contact you within 24 hours with a tailored response.
              </p>
            </div>
            <div className="bg-white/[0.02] border border-white/5 px-8 pt-8 pb-4 md:px-12 md:pt-12 md:pb-6">
              <HiringForm role={data.role} />
            </div>
          </div>
        </section>

        <Footer />
      </main>
      <BackToTop />
      <CookieBanner />
    </>
  );
}
