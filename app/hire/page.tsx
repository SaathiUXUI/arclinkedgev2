import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import SharedInsidePageSections from "@/components/sections/SharedInsidePageSections";
import BackToTop from "@/components/ui/BackToTop";
import CookieBanner from "@/components/ui/CookieBanner";
import SectionLabel from "@/components/ui/SectionLabel";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Button";
import { getBrandLogos, getSanityTestimonials } from "@/sanity/lib/api";

const SITE_URL = "https://www.arclinkedge.com";
const PAGE_URL = `${SITE_URL}/hire`;

export const metadata: Metadata = {
  title: "Hire Dedicated Developers & Designers | Arclink Edge",
  description:
    "Scale your team with dedicated, pre-vetted senior developers and designers. Access top technical talent for web, mobile, AI, and cloud projects without recruitment overheads.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "hire dedicated developers India",
    "hire dedicated web developer",
    "hire dedicated app developer",
    "hire dedicated ui ux designer",
    "hire dedicated ai team",
    "staff augmentation New York, Bangalore, Delhi & Mumbai",
    "dedicated development team India",
  ],
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Hire Dedicated Developers & Designers | Arclink Edge",
    description:
      "Scale your team with dedicated, pre-vetted senior developers and designers. Access top technical talent for web, mobile, AI, and cloud projects without recruitment overheads.",
    siteName: "Arclink Edge",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Dedicated Developers & Designers | Arclink Edge",
    description:
      "Scale your team with dedicated, pre-vetted senior developers and designers. Access top technical talent for web, mobile, AI, and cloud projects without recruitment overheads.",
    images: ["/opengraph-image"],
  },
};

const hireOptions = [
  {
    id: "web-developers",
    title: "Hire Dedicated Web Developer",
    keywords: "Next.js, TypeScript, Node.js, PostgreSQL",
    description: "Build scalable web applications with senior full-stack experts. Expert in modern frameworks, clean architecture and performance-first development.",
    gradient: "from-[#0052FF]/24 via-white/[0.04] to-transparent",
    href: "/hire/web-developer",
  },
  {
    id: "mobile-app-developers",
    title: "Hire Dedicated Mobile App Developer",
    keywords: "Flutter, React Native, iOS, Android",
    description: "Native-feeling mobile apps, onboarding flows, authentication UX, API integrations and scalable app architecture.",
    gradient: "from-[#22C55E]/22 via-white/[0.04] to-transparent",
    href: "/hire/mobile-app-developer",
  },
  {
    id: "ui-ux-designers",
    title: "Hire Dedicated UI/UX Designer",
    keywords: "Figma, SaaS UX, app design, design systems",
    description: "Product design for SaaS dashboards, fintech apps, e-commerce UX, user flows, prototypes and developer handoff.",
    gradient: "from-[#D0F504]/18 via-white/[0.04] to-transparent",
    href: "/hire/ui-ux-designer",
  },
  {
    id: "saas-developers",
    title: "Hire Dedicated SaaS Developer",
    keywords: "MVP, dashboards, billing, subscriptions",
    description: "B2B SaaS products with auth, roles, dashboards, APIs, database structure, onboarding and scalable modules.",
    gradient: "from-[#7C3AED]/24 via-white/[0.04] to-transparent",
    href: "/hire/saas-developer",
  },
  {
    id: "ecommerce-developers",
    title: "Hire Dedicated E-commerce Developer",
    keywords: "Shopify, WooCommerce, checkout UX, CRO",
    description: "High-converting stores, product discovery, checkout optimization, payment flows and technical SEO foundations.",
    gradient: "from-[#F97316]/22 via-white/[0.04] to-transparent",
    href: "/hire/ecommerce-developer",
  },
  {
    id: "devops-engineers",
    title: "Hire Dedicated DevOps Engineer",
    keywords: "AWS, Docker, CI/CD, monitoring",
    description: "Production deployments, infrastructure audits, CI/CD pipelines, containerization, uptime monitoring and scaling support.",
    gradient: "from-[#38BDF8]/22 via-white/[0.04] to-transparent",
    href: "/hire/devops-engineer",
  },
  {
    id: "api-developers",
    title: "Hire Dedicated API Developer",
    keywords: "REST APIs, GraphQL, payments, automation",
    description: "Secure API integrations, workflow automation, payment gateways, CRM connections, third-party tools and backend logic.",
    gradient: "from-[#06B6D4]/20 via-white/[0.04] to-transparent",
    href: "/hire/api-developer",
  },
  {
    id: "ai-automation-specialists",
    title: "Hire Dedicated AI Specialist",
    keywords: "AI workflows, chatbots, LLM tools, operations",
    description: "AI assistants, automation systems, internal tools, support workflows, lead qualification and productivity systems.",
    gradient: "from-[#A855F7]/22 via-white/[0.04] to-transparent",
    href: "/hire/ai-specialist",
  },
  {
    id: "seo-growth-specialists",
    title: "Hire Dedicated SEO Specialist",
    keywords: "Technical SEO, metadata, schema, content, CRO",
    description: "Technical SEO, keyword mapping, content clusters, analytics setup, landing page optimization and search growth systems.",
    gradient: "from-[#F43F5E]/20 via-white/[0.04] to-transparent",
    href: "/hire/seo-specialist",
  },
];

const phaseCoverage = [
  "Market research, competitor analysis and user-flow planning for SaaS, fintech, e-commerce and AI products.",
  "UI/UX design systems with Figma auto layout, typography scales, 8-point spacing, accessible forms and WCAG-aware contrast.",
  "Frontend development with Next.js, React, Tailwind CSS, responsive navbars, component architecture and animation discipline.",
  "Backend architecture with Node.js, REST APIs, GraphQL decisions, authentication, sessions, API security and scalable data models.",
  "Database, cloud and DevOps support across PostgreSQL, MongoDB, indexing, Vercel, AWS, CDN caching, Docker and CI/CD.",
  "Technical SEO with sitemaps, robots, canonical tags, Open Graph, schema markup, Search Console fixes and content clusters.",
  "Performance optimization for LCP, CLS, INP, image loading, JavaScript splitting, Core Web Vitals and production monitoring.",
  "Security, QA and launch support across OWASP basics, SSL, secure headers, responsive testing, rich results testing and analytics.",
];

const faqs = [
  {
    question: "How do you vet your developers and designers?",
    answer: "Every specialist goes through a rigorous technical, portfolio, and communication assessment. We only hire top-tier talent with proven experience delivering production-ready systems."
  },
  {
    question: "Can I hire a developer on a part-time basis?",
    answer: "Our standard engagement is full-time dedicated resources to ensure deep focus on your project, but we can offer specialized retainers depending on your needs."
  },
  {
    question: "How quickly can a dedicated specialist start?",
    answer: "Once we finalize your requirements, we can typically deploy the right technical talent to start working on your project within 24 to 48 hours."
  },
  {
    question: "Will they integrate with my existing team?",
    answer: "Absolutely. Our specialists are trained to seamlessly integrate into your workflow, participate in your daily standups, and communicate via your preferred channels (Slack, Jira, Teams)."
  }
];

export default async function HirePage() {
  const [sanityLogos, sanityTestimonials] = await Promise.all([
    getBrandLogos(),
    getSanityTestimonials(),
  ]);

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Hire", item: PAGE_URL },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Hire Dedicated Developers, Designers and Digital Product Specialists",
      serviceType: "Dedicated Digital Product Team",
      url: PAGE_URL,
      provider: { "@id": `${SITE_URL}/#organization`, name: "Arclink Edge" },
      areaServed: ["India", "United States", "United Kingdom", "United Arab Emirates"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Hire Arclink Edge Specialists",
        itemListElement: hireOptions.map((item) => ({
          "@type": "Offer",
          name: item.title,
          description: item.description,
          url: `${PAGE_URL}#${item.id}`,
        })),
      },
    },
    {
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
    },
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <Navbar />
      <main id="main-content" className="overflow-x-clip bg-black text-[#F5F5F7]">
        <section className="relative overflow-hidden px-6 pb-20 pt-32 lg:px-12 lg:pb-28 lg:pt-44">
          <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_bottom,#000_0%,#030713_34%,#071436_64%,#000_100%)]" />
          <div aria-hidden="true" className="absolute left-[-18%] top-[18%] h-[34rem] w-[34rem] rounded-full bg-[#0052FF]/22 blur-[160px]" />
          <div aria-hidden="true" className="absolute right-[-18%] bottom-[-12%] h-[28rem] w-[28rem] rounded-full bg-[#D0F504]/10 blur-[150px]" />

          <div className="relative z-10 mx-auto max-w-[1600px]">
            <SectionLabel>On-demand Talent</SectionLabel>
            <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_0.42fr] lg:items-end">
              <div>
                <h1 className="max-w-6xl text-5xl font-medium leading-[0.96] md:text-7xl lg:text-8xl" style={{ fontFamily: "var(--font-inter-tight)", letterSpacing: "-0.075em" }}>
                  Hire Dedicated Talent. Scale Faster.
                </h1>
                <div className="mt-10 flex flex-wrap gap-3">
                  <PrimaryButton href="#hire-menu" icon={ArrowUpRight}>Start Hiring</PrimaryButton>
                  <SecondaryButton href="/services" icon={ArrowUpRight}>Explore Services</SecondaryButton>
                </div>
              </div>
              <p className="max-w-xl text-base leading-relaxed text-white/62 md:text-lg">
                Access pre-vetted senior developers and designers ready to join your dedicated workflow. Skip the recruitment hassle and interview the best technical minds in 24 hours.
              </p>
            </div>
          </div>
        </section>

        <section id="hire-menu" className="px-6 py-20 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-[1600px]">
            <div className="mb-12 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
              <div>
                <SectionLabel>Hire Menu</SectionLabel>
                <h2 className="mt-4 text-4xl font-medium leading-none md:text-6xl" style={{ fontFamily: "var(--font-inter-tight)", letterSpacing: "-0.065em" }}>
                  Every specialist mapped to a real service.
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-white/52 lg:justify-self-end">
                These are not random roles. Each option connects to an actual delivery capability across research, UI/UX, frontend, backend, cloud, SEO, security, QA and post-launch growth.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {hireOptions.map((item, index) => (
                <Link
                  id={item.id}
                  key={item.id}
                  href={item.href}
                  className={`group relative min-h-[330px] overflow-hidden border border-white/[0.07] bg-gradient-to-br ${item.gradient} p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04] lg:p-8`}
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/0 to-transparent transition-all duration-500 group-hover:via-white/80" />
                  <div className="absolute -right-14 -top-14 h-44 w-44 rounded-full bg-white/0 blur-[70px] transition-colors duration-500 group-hover:bg-white/12" />
                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-start justify-between gap-5">
                      <span className="text-sm font-medium text-white/42">{String(index + 1).padStart(2, "0")}</span>
                      <ArrowUpRight className="text-white/50 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white" size={22} />
                    </div>
                    <div className="mt-auto pt-16">
                      <p className="mb-4 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#D0F504]" style={{ fontFamily: "var(--font-inter-tight)" }}>
                        {item.keywords}
                      </p>
                      <h3 className="text-3xl font-medium text-white md:text-4xl" style={{ fontFamily: "var(--font-inter-tight)", letterSpacing: "-0.055em" }}>
                        {item.title}
                      </h3>
                      <p className="mt-5 text-sm leading-relaxed text-white/62">{item.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <SharedInsidePageSections
          sanityLogos={sanityLogos}
          sanityTestimonials={sanityTestimonials}
          faqs={faqs}
          beforeOutcomes={
            <section key="hire-phase-coverage" className="px-6 py-20 lg:px-12 lg:py-28">
              <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[0.82fr_1.18fr]">
                <div>
                  <SectionLabel>Coverage</SectionLabel>
                  <h2 className="mt-4 text-4xl font-medium leading-none md:text-6xl" style={{ fontFamily: "var(--font-inter-tight)", letterSpacing: "-0.065em" }}>
                    From research to post-launch growth.
                  </h2>
                </div>
                <div className="grid gap-3">
                  {phaseCoverage.map((item) => (
                    <div key={item} className="flex items-start gap-4 border border-white/[0.06] bg-black/30 p-4">
                      <CheckCircle2 className="mt-0.5 shrink-0 text-[#D0F504]" size={18} />
                      <p className="text-sm leading-relaxed text-white/70">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          }
        >
          <section key="hire-next-links" className="relative overflow-hidden px-6 py-12 lg:px-12 lg:py-16">
            <div aria-hidden="true" className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 mx-auto max-w-[1600px]">
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  { title: "Compare all services", href: "/services", label: "View services", desc: "See our full range of technical capabilities." },
                  { title: "See delivery process", href: "/process", label: "View process", desc: "Learn how we ship premium products." },
                  { title: "Join Arclink Edge", href: "/careers", label: "View careers", desc: "Grow your career with our expert team." },
                ].map((item) => (
                  <Link 
                    key={item.href} 
                    href={item.href} 
                    className="group relative flex flex-col justify-between overflow-hidden border border-white/[0.06] bg-white/[0.02] p-8 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.04]"
                  >
                    {/* Hover Glow */}
                    <div className="absolute -right-20 -top-20 h-40 w-40 bg-white/0 blur-[60px] transition-colors duration-500 group-hover:bg-white/10" />
                    
                    <div className="relative z-10">
                      <h3 className="text-3xl font-medium text-white md:text-4xl" style={{ fontFamily: "var(--font-inter-tight)", letterSpacing: "-0.05em" }}>
                        {item.title}
                      </h3>
                      <p className="mt-4 max-w-[240px] text-sm leading-relaxed text-white/42 group-hover:text-white/60 transition-colors duration-500">
                        {item.desc}
                      </p>
                    </div>

                    <div className="relative z-10 mt-12 border-t border-white/[0.06] pt-6">
                      <div className="relative inline-flex overflow-hidden text-sm font-medium transition-colors duration-200" style={{ color: "rgba(245,245,247,0.72)", fontFamily: "var(--font-inter-tight)" }}>
                        <span className="flex items-center gap-2 transition-transform duration-300 ease-out group-hover:-translate-y-full">
                          {item.label} <ArrowUpRight size={14} />
                        </span>
                        <span
                          className="absolute inset-0 flex translate-y-full items-center gap-2 transition-transform duration-300 ease-out group-hover:translate-y-0"
                          style={{ color: "#D0F504" }}
                        >
                          {item.label} <ArrowUpRight size={14} />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </SharedInsidePageSections>
      </main>
      <Footer />
      <BackToTop />
      <CookieBanner />
    </>
  );
}
