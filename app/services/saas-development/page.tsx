import dynamic from "next/dynamic";
import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Check, Clock, Code2, Gauge, Layers, Search, ShieldCheck, Sparkles, Zap, Database, Server } from "lucide-react";
import Navbar from "@/components/sections/Navbar";

// Dynamic imports for shared/secondary sections
const Footer = dynamic(() => import("@/components/sections/Footer"));
const BackToTop = dynamic(() => import("@/components/ui/BackToTop"));
const CookieBanner = dynamic(() => import("@/components/ui/CookieBanner"));
const SharedInsidePageSections = dynamic(() => import("@/components/sections/SharedInsidePageSections"));
import { PrimaryButton, SecondaryButton } from "@/components/ui/Button";
import { getProjectImagesByCategory, getBrandLogos, getSanityTestimonials } from "@/sanity/lib/api";
import SectionLabel from "@/components/ui/SectionLabel";

const SITE_URL = "https://www.arclinkedge.com";
const PAGE_URL = `${SITE_URL}/services/saas-development`;

export const metadata: Metadata = {
  title: "SaaS Development Services in New York, London, Dubai & Bangalore | Custom B2B Products",
  description:
    "Custom SaaS development services in New York, London, Dubai & Bangalore. We build scalable, secure, and multi-tenant SaaS applications from MVP to enterprise scale.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "SaaS development services New York, London, Dubai & Bangalore",
    "B2B SaaS development India",
    "custom SaaS product development",
    "multi-tenant SaaS architecture",
    "SaaS MVP development",
    "SaaS app development company",
  ],
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "SaaS Development Services in New York, London, Dubai & Bangalore | Arclink Edge",
    description:
      "End-to-end SaaS development for B2B and B2C startups. We build secure, multi-tenant products designed to scale and generate recurring revenue.",
    siteName: "Arclink Edge",
    images: [
      {
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Arclink Edge SaaS development services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS Development Services in New York, London, Dubai & Bangalore | Arclink Edge",
    description:
      "Custom SaaS development services in New York, London, Dubai & Bangalore. We build scalable, secure, and multi-tenant SaaS applications.",
    images: [`${SITE_URL}/opengraph-image`],
  },
};

const heroStats = [
  { value: "15+", label: "SaaS Products" },
  { value: "$10M", label: "Client ARR generated" },
  { value: "6-8", label: "Week MVP starts" },
];

const painPoints = [
  "Your current architecture is not truly multi-tenant, causing data leaks or scaling nightmares.",
  "You need to launch an MVP quickly to secure funding, but offshore teams are too slow.",
  "Your SaaS looks outdated and struggles to convert free trials into paid subscriptions.",
  "Integration with complex third-party tools (Stripe, CRMs, APIs) is causing constant bugs.",
];

const outcomes = [
  {
    icon: Database,
    title: "Multi-tenant architecture",
    description: "Secure, isolated data structures allowing hundreds of companies to use your product simultaneously.",
  },
  {
    icon: Zap,
    title: "Rapid MVP launch",
    description: "Focusing on core value propositions first so you can validate the market and start generating revenue.",
  },
  {
    icon: Server,
    title: "Scalable cloud infrastructure",
    description: "AWS or Vercel setups designed to handle traffic spikes and massive database growth without crashing.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-grade security",
    description: "Role-based access control, encrypted data, and compliance-ready foundations.",
  },
];

const deliverables = [
  {
    label: "Foundation",
    title: "SaaS Architecture",
    description: "Database schemas, tenant isolation strategy, and serverless/microservices setup.",
    items: ["PostgreSQL/MongoDB", "AWS/Vercel", "Auth0"],
  },
  {
    label: "Frontend",
    title: "Admin & User Dashboards",
    description: "Complex tables, charts, reporting, and settings interfaces built with React.",
    items: ["Next.js", "TailwindCSS", "Data Viz"],
  },
  {
    label: "Monetization",
    title: "Billing & Subscriptions",
    description: "Complex tier-based, usage-based, or seat-based billing integrations.",
    items: ["Stripe", "RevenueCat", "Invoicing"],
  },
  {
    label: "Connectivity",
    title: "API & Integrations",
    description: "Webhooks, third-party software connections, and public APIs for your users.",
    items: ["REST APIs", "Webhooks", "Zapier"],
  },
];

const process = [
  {
    step: "01",
    phase: "Scope",
    icon: Search,
    duration: "1 Week",
    title: "MVP definition & architecture",
    signal: "Identifying the core loop",
    description: "We strip down your idea to the absolute essentials needed to provide value and charge money, defining the technical stack.",
    chips: ["MVP Scope", "Tech Stack", "DB Schema"],
  },
  {
    step: "02",
    phase: "Design",
    icon: Layers,
    duration: "2 Weeks",
    title: "Dashboard UI & UX flows",
    signal: "Designing the product",
    description: "We design intuitive user flows for onboarding, settings, and core actions, ensuring a premium software feel.",
    chips: ["UI Design", "Onboarding", "Dashboards"],
  },
  {
    step: "03",
    phase: "Build",
    icon: Code2,
    duration: "4-6 Weeks",
    title: "Core development & logic",
    signal: "Frontend and backend logic",
    description: "We build the core application, focusing on security, role-based permissions, and the primary user features.",
    chips: ["Next.js", "Node.js", "RBAC"],
  },
  {
    step: "04",
    phase: "Integrate",
    icon: Zap,
    duration: "2 Weeks",
    title: "Billing & third-party tools",
    signal: "Monetization and connectivity",
    description: "We wire up Stripe for subscriptions, send transactional emails, and connect necessary external APIs.",
    chips: ["Stripe Billing", "Emails", "Webhooks"],
  },
  {
    step: "05",
    phase: "Deploy",
    icon: ShieldCheck,
    duration: "1 Week",
    title: "Testing, security & launch",
    signal: "Ready for users",
    description: "We perform security checks, load testing, and deploy to production, setting up CI/CD for future updates.",
    chips: ["CI/CD", "Testing", "Production"],
  },
];

const categorizedTech = [
  {
    title: "Frontend & UI",
    exp: "5+",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend & APIs",
    exp: "4+",
    items: ["Node.js", "Express", "NestJS", "GraphQL"],
  },
  {
    title: "Databases & ORMs",
    exp: "4+",
    items: ["PostgreSQL", "MongoDB", "Prisma", "Redis"],
  },
];

const additionalTech = [
  {
    title: "Auth & Security",
    items: ["Auth0", "Clerk", "NextAuth", "Supabase Auth"],
  },
  {
    title: "Billing & Payments",
    items: ["Stripe Billing", "Paddle", "Lemon Squeezy"],
  },
  {
    title: "Infrastructure",
    items: ["AWS", "Vercel", "Docker", "GitHub Actions"],
  },
];

const techIcons: Record<string, string> = {
  "React": "/tools/reactjs.svg",
  "Next.js": "/tools/nextjs.svg",
  "Node.js": "/tools/nodejs.svg",
  "AWS": "/tools/aws.svg",
  "Vercel": "/tools/vercel.svg",
  "Stripe Billing": "/tools/stripe.svg",
  "Supabase Auth": "/tools/supabase.svg",
};

// ALL IMAGES FOR SaaS AND OTHER PAGES
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

const engagementModels = [
  {
    title: "SaaS MVP Build",
    badge: "Fastest path",
    bestFor: "Founders looking to launch and validate",
    timeline: "6-8 weeks",
    output: "Market-ready product with billing",
    description: "A rapid, focused build of your core software features, complete with authentication and subscription billing, ready for early adopters.",
  },
  {
    title: "Enterprise SaaS Scale",
    badge: "Deep build",
    bestFor: "Established SaaS scaling to millions of users",
    timeline: "Custom roadmap",
    output: "Highly scalable, secure architecture",
    description: "A complete overhaul or scale-up of your existing software, focusing on microservices, enterprise security, and complex integrations.",
  },
  {
    title: "Dedicated Product Team",
    badge: "Ongoing",
    bestFor: "Continuous feature delivery and maintenance",
    timeline: "Monthly",
    output: "Consistent product updates",
    description: "A dedicated team of engineers and designers acting as your technical arm to constantly iterate on the product based on user feedback.",
  },
];

const faqs = [
  {
    question: "Do you build multi-tenant architectures?",
    answer:
      "Yes. Multi-tenancy is the foundation of B2B SaaS. We ensure data is strictly isolated between your clients while maintaining a single scalable codebase.",
  },
  {
    question: "Can you handle complex subscription billing?",
    answer:
      "Absolutely. We have extensive experience integrating Stripe, Paddle, and other gateways for usage-based, per-seat, and tiered subscription models with pro-ration.",
  },
  {
    question: "What tech stack do you recommend for SaaS?",
    answer:
      "We strongly recommend the Next.js and Node.js ecosystem, paired with PostgreSQL and Prisma. This stack offers the best balance of developer speed, scalability, and performance.",
  },
  {
    question: "Do you provide DevOps and cloud hosting setup?",
    answer:
      "Yes. We configure AWS, Vercel, or Google Cloud, setting up CI/CD pipelines, automated database backups, and monitoring tools like Datadog or Sentry.",
  },
  {
    question: "Who owns the SaaS code?",
    answer:
      "You own 100% of the intellectual property and source code once the project is paid for. We do not hold your software hostage.",
  },
  {
    question: "Can you help migrate our existing SaaS from an old stack?",
    answer:
      "Yes. We can plan a phased migration to modernize your legacy application to a React/Next.js stack without causing downtime for your current users.",
  },
];

function HeroProjectColumn({ sanityImages }: { sanityImages?: string[] }) {
  const displayImages = sanityImages && sanityImages.length > 0 ? sanityImages : heroProjectImages;
  return (
    <div
      className="relative h-[430px] w-full overflow-visible border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl sm:h-[520px] lg:h-full lg:min-h-0 lg:justify-self-end"
      aria-label="Arclink Edge SaaS development project previews"
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
              {displayImages.map((src, index) => (
                <div key={`${set}-${src}-${index}`} className="relative aspect-[16/9] w-full shrink-0 overflow-hidden bg-black/20">
                  <Image
                    src={src}
                    alt={`Arclink Edge SaaS product preview ${index + 1}`}
                    fill
                    priority={set === 0 && (index === 0 || index === 1)}
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
    <div className="relative z-10 mx-auto mt-16 max-w-[1600px] border-y border-white/[0.06] lg:mt-20">
      <div className="grid divide-y divide-white/[0.06] sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:divide-white/[0.06]">
        {heroStats.map((stat) => (
          <div key={stat.label} className="group relative overflow-hidden px-1 py-7 sm:px-6 lg:py-9">
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

function CardHoverEffects() {
  return (
    <>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/0 to-transparent transition-all duration-500 group-hover:via-white/70" />
      <div className="absolute -right-10 -top-10 h-36 w-36 bg-white/0 blur-[60px] transition-colors duration-500 group-hover:bg-white/10" />
    </>
  );
}

function JsonLd() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: "SaaS Development", item: PAGE_URL },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${PAGE_URL}#service`,
    name: "SaaS Development Services",
    serviceType: "SaaS Development",
    url: PAGE_URL,
    description:
      "Custom SaaS development services in New York, London, Dubai & Bangalore. We build scalable, secure, and multi-tenant SaaS applications from MVP to enterprise scale.",
    provider: { "@id": `${SITE_URL}/#organization`, name: "Arclink Edge" },
    areaServed: [
      { "@type": "City", name: "New York, London, Dubai & Bangalore" },
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United Arab Emirates" },
    ],
    offers: engagementModels.map((model) => ({
      "@type": "Offer",
      name: model.title,
      description: model.description,
      availability: "https://schema.org/InStock",
    })),
  };

  const faqSchema = {
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
  };

  return (
    <>
      {[breadcrumbSchema, serviceSchema, faqSchema].map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

export default async function SaaSDevelopmentPage() {
  const [sanityImages, sanityLogos, sanityTestimonials] = await Promise.all([
    getProjectImagesByCategory("saas-development"),
    getBrandLogos(),
    getSanityTestimonials(),
  ]);
  return (
    <>
      <JsonLd />
      <Navbar />
      <main id="main-content" className="overflow-x-clip bg-black text-[#F5F5F7]">
        <section className="relative overflow-visible px-6 pb-20 pt-32 lg:px-12 lg:pb-28 lg:pt-40">
          <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_bottom,#000_0%,#030713_34%,#071436_64%,#000_100%)]" />
          <div aria-hidden="true" className="absolute left-[-18%] top-[14%] h-[36rem] w-[36rem] rounded-full bg-[#0052FF]/22 blur-[160px]" />

          <div className="relative z-10 mx-auto grid max-w-[1600px] items-stretch gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col justify-center">
              <SectionLabel>SaaS Development Services</SectionLabel>
              <h1
                className="max-w-5xl text-5xl font-medium leading-[1.05] tracking-[-0.04em] md:leading-[0.96] md:tracking-[-0.075em] md:text-7xl lg:text-8xl"
                style={{ fontFamily: "var(--font-inter-tight)" }}
              >
                Scalable software built for recurring revenue.
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/62 md:text-lg">
                We engineer custom B2B and B2C SaaS platforms. From secure multi-tenant architectures and complex dashboards to seamless Stripe integrations, we build products that users pay for.
              </p>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <PrimaryButton href="/contact" icon={ArrowUpRight}>Start a SaaS Project</PrimaryButton>
                  <SecondaryButton href="/hire/saas-developer" icon={ArrowUpRight}>Hire Dedicated SaaS Developer</SecondaryButton>
                </div>
            </div>

            <HeroProjectColumn sanityImages={sanityImages} />
          </div>

          <HeroStatsBand />
        </section>

        <section id="process" className="relative overflow-visible py-20 lg:py-28">
          <div aria-hidden="true" className="absolute inset-0 bg-black" />
          <div aria-hidden="true" className="absolute inset-x-0 top-0 z-[1] h-40 bg-gradient-to-b from-black via-black/85 to-transparent" />
          <div aria-hidden="true" className="absolute inset-x-0 top-0 z-[1] h-40 bg-gradient-to-b from-transparent via-black/20 to-transparent" />
          <div aria-hidden="true" className="absolute left-[-18%] top-[20%] h-[70vh] w-[52vw] rounded-full bg-[#0052FF]/18 blur-[170px]" />
          <div aria-hidden="true" className="absolute bottom-[-16%] right-[-18%] h-[75vh] w-[55vw] rounded-full bg-[#0052FF]/18 blur-[170px]" />
          <div className="relative z-10">
            <div className="mx-auto mb-12 grid max-w-[1600px] gap-8 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:px-12">
              <div>
                <SectionLabel>Process</SectionLabel>
                <h2 className="text-4xl font-medium leading-[1.1] tracking-[-0.02em] md:leading-none md:tracking-[-0.065em] md:text-6xl" style={{ fontFamily: "var(--font-inter-tight)" }}>
                  A clear build system from idea to launch.
                </h2>
              </div>
              <p className="max-w-2xl text-sm leading-relaxed text-white/54 lg:justify-self-end">
                We combine product strategy, dashboard UX, and robust cloud engineering so your SaaS is ready to scale from day one.
              </p>
            </div>
            <div className="relative mt-16 overflow-hidden border-y border-white/[0.06] bg-white/[0.015]">
              <div className="grid gap-0 md:grid-cols-2 xl:grid-cols-5">
                {process.map((item) => {
                  return (
                    <article
                      key={item.step}
                      className="group relative min-h-[390px] overflow-hidden border-b border-white/[0.06] px-7 py-8 transition-colors duration-500 md:min-h-[460px] md:border-r md:border-white/[0.06] md:last:border-r-0 xl:min-h-[520px] xl:border-b-0"
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
                        className="absolute left-6 top-8 select-none text-[8rem] font-semibold leading-none text-white/[0.055] transition-colors duration-500 group-hover:text-white/[0.11] md:text-[10rem] xl:text-[11rem]"
                        style={{ fontFamily: "var(--font-inter-tight)", letterSpacing: "-0.09em" }}
                      >
                        {item.step}
                      </span>

                      <div className="absolute inset-x-7 bottom-8 z-10">
                        <div className="mb-6 flex translate-y-4 flex-wrap gap-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                          {item.chips.map((chip) => (
                            <span
                              key={chip}
                              className="bg-white/18 px-4 py-2 text-[0.68rem] font-semibold text-white"
                            >
                              {chip}
                            </span>
                          ))}
                        </div>

                        <h3
                          className="text-5xl font-medium leading-none text-[#F5F5F7] transition-transform duration-500 group-hover:-translate-y-1 md:text-6xl tracking-[-0.015em] md:tracking-[-0.065em]"
                          style={{ fontFamily: "var(--font-inter-tight)" }}
                        >
                          {item.phase}
                        </h3>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>


        <SharedInsidePageSections sanityLogos={sanityLogos} sanityTestimonials={sanityTestimonials} faqs={faqs}
          technology={{
            title: "Enterprise-grade SaaS tech stack.",
            description: "We use modern, scalable technologies to ensure your SaaS product can handle rapid growth without performance bottlenecks.",
            categories: categorizedTech,
            additionalLabel: "SaaS Integrations",
            additionalTitle: "We connect the essential services your platform needs to operate.",
            additionalCategories: additionalTech,
            icons: techIcons,
          }}
          beforeOutcomes={
            <section className="px-6 py-20 lg:px-12 lg:py-28">
              <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[0.85fr_1.15fr]">
                <div>
                  <SectionLabel>What We Fix</SectionLabel>
                  <h2 className="text-4xl font-medium leading-[1.1] tracking-[-0.02em] md:leading-none md:tracking-[-0.065em] md:text-6xl" style={{ fontFamily: "var(--font-inter-tight)" }}>
                    Software shouldn't break when you get users.
                  </h2>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {painPoints.map((point, index) => (
                    <div
                      key={point}
                      className="group relative min-h-[210px] overflow-hidden border border-white/[0.04] bg-[#0A0A0F]/40 p-6 transition-all duration-300 hover:border-white/[0.12] hover:bg-[#0A0A0F]/60"
                    >
                      <CardHoverEffects />
                      <div className="relative z-10 flex h-full flex-col justify-between gap-10">
                        <p className="text-6xl font-semibold leading-none text-white/[0.06] transition-colors duration-300 group-hover:text-white/16" style={{ fontFamily: "var(--font-inter-tight)", letterSpacing: "-0.07em" }}>
                          0{index + 1}
                        </p>
                        <p className="text-base leading-relaxed text-white/68">{point}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          }
        >
          <section className="px-6 py-20 lg:px-12 lg:py-28">
            <div className="mx-auto max-w-[1600px]">
              <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-8">
                <div className="max-w-2xl">
                  <SectionLabel>Deliverables</SectionLabel>
                  <h2 className="text-4xl font-medium leading-[1.1] tracking-[-0.02em] md:leading-none md:tracking-[-0.065em] md:text-6xl" style={{ fontFamily: "var(--font-inter-tight)" }}>
                    Scan the engineering scope in seconds.
                  </h2>
                </div>
                <p className="mt-6 lg:mt-0 max-w-xl text-sm leading-relaxed text-white/52">
                  Clear deliverables across architecture, frontend dashboards, billing logic, and cloud deployment.
                </p>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {deliverables.map((item, index) => (
                  <article
                    key={item.title}
                    className="group relative min-h-[248px] overflow-hidden border border-white/[0.04] bg-[#0A0A0F]/40 p-5 transition-all duration-300 hover:border-white/[0.12] hover:bg-[#0A0A0F]/60"
                  >
                    <CardHoverEffects />
                    <div className="relative z-10 flex h-full flex-col">
                      <div className="mb-10 flex items-center justify-between gap-4">
                        <span className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-white/72" style={{ fontFamily: "var(--font-inter-tight)" }}>
                          {item.label}
                        </span>
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-white/[0.06] text-[0.72rem] font-bold text-white/42" style={{ fontFamily: "var(--font-inter-tight)" }}>
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <h3 className="text-2xl font-medium leading-none text-[#F5F5F7] tracking-[-0.015em] md:tracking-[-0.05em]" style={{ fontFamily: "var(--font-inter-tight)" }}>
                        {item.title}
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-white/54">{item.description}</p>

                      <div className="mt-auto flex flex-wrap gap-2 pt-8">
                        {item.items.map((deliverable) => (
                          <span key={deliverable} className="border border-white/[0.06] bg-black/30 px-3 py-1.5 text-xs font-medium text-white/62">
                            {deliverable}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </SharedInsidePageSections>

        <style>{`
          .faq-item input:checked + label .faq-plus {
            transform: translateX(-50%) rotate(90deg);
          }
        `}</style>
      </main>
      <Footer />
      <BackToTop />
      <CookieBanner />
    </>
  );
}
