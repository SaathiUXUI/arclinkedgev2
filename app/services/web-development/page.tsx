import dynamic from "next/dynamic";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Clock, Code2, Gauge, Layers, Search, ShieldCheck, Sparkles, Zap, Quote } from "lucide-react";
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
const PAGE_URL = `${SITE_URL}/services/web-development`;

export const metadata: Metadata = {
  title: "Web Development Services in New York, London, Dubai & Bangalore | Next.js & Custom Web Apps",
  description:
    "Custom web development services in New York, London, Dubai & Bangalore for B2B brands, startups and growing businesses. We build fast, SEO-friendly websites, web apps, dashboards and SaaS platforms.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "web development services New York, London, Dubai & Bangalore",
    "custom web development company India",
    "Next.js development agency",
    "React web app development",
    "website development company New York, London, Dubai & Bangalore",
    "B2B web development India",
    "SaaS web app development",
  ],
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Web Development Services in New York, London, Dubai & Bangalore | Arclink Edge",
    description:
      "Fast, scalable and SEO-friendly web development for serious businesses. Built with product thinking, modern engineering and conversion-focused design.",
    siteName: "Arclink Edge",
    images: [
      {
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Arclink Edge web development services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Services in New York, London, Dubai & Bangalore | Arclink Edge",
    description:
      "Custom websites, web apps and SaaS platforms built for speed, SEO, conversion and scale.",
    images: [`${SITE_URL}/opengraph-image`],
  },
};

const heroStats = [
  { value: "50+", label: "Projects delivered" },
  { value: "30+", label: "Clients supported" },
  { value: "2-3", label: "Week MVP starts" },
];

const painPoints = [
  "Your website looks good but does not convert visitors into qualified leads.",
  "Pages are slow, hard to update, or weak on technical SEO.",
  "Your product needs dashboards, portals, integrations, payments or a custom workflow.",
  "The current codebase is fragile, difficult to scale, and expensive to maintain.",
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

const deliverables = [
  {
    label: "Brand presence",
    title: "Marketing website",
    description: "Landing pages, service pages and lead capture flows built for trust and conversion.",
    items: ["Landing pages", "Service pages", "Forms"],
  },
  {
    label: "Product build",
    title: "Web app system",
    description: "React and Next.js apps with dashboards, customer portals and custom workflows.",
    items: ["Dashboards", "Portals", "Admin panels"],
  },
  {
    label: "Business engine",
    title: "CMS and integrations",
    description: "Editable Sanity content, APIs, payments and automation connected cleanly.",
    items: ["Sanity CMS", "API flows", "Payments"],
  },
  {
    label: "Launch quality",
    title: "Performance and support",
    description: "Speed, SEO, accessibility checks, deployment, monitoring and maintenance.",
    items: ["Core Web Vitals", "SEO checks", "Maintenance"],
  },
];

const process = [
  {
    step: "01",
    phase: "Research",
    icon: Search,
    duration: "3 Days",
    title: "Discovery & conversion strategy",
    signal: "Offer, audience and search intent",
    description: "We map your offer, audience, search intent, conversion goals and technical requirements before design begins.",
    chips: ["Goals", "Audience", "SEO intent"],
  },
  {
    step: "02",
    phase: "Structure",
    icon: Layers,
    duration: "7 Days",
    title: "UX, content structure & wireframes",
    signal: "Page flow and conversion path",
    description: "We define the page flow, sections, SEO headings, CTAs and user journeys so the site sells clearly.",
    chips: ["Sitemap", "Wireframes", "CTAs"],
  },
  {
    step: "03",
    phase: "Design",
    icon: Sparkles,
    duration: "14 Days",
    title: "Interface design & visual system",
    signal: "Premium UI system",
    description: "We create a premium interface aligned with your brand, using reusable components and responsive layouts.",
    chips: ["UI design", "Components", "Responsive"],
  },
  {
    step: "04",
    phase: "Build",
    icon: Code2,
    duration: "22 Days",
    title: "Development & integrations",
    signal: "Frontend, CMS and integrations",
    description: "We build with modern frontend, backend, CMS, forms, payments, analytics and third-party integrations as needed.",
    chips: ["Next.js", "CMS", "APIs"],
  },
  {
    step: "05",
    phase: "Launch",
    icon: ShieldCheck,
    duration: "30 Days",
    title: "QA, SEO checks & launch",
    signal: "Tested and ready to ship",
    description: "We test speed, responsiveness, forms, metadata, schema, accessibility basics and deployment before going live.",
    chips: ["QA", "SEO", "Deploy"],
  },
];

const categorizedTech = [
  {
    title: "Front-end Development",
    exp: "5+",
    items: ["Next.js", "React", "Angular", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Back-end & CMS",
    exp: "4+",
    items: ["Node.js", "PHP", "Sanity", "Firebase"],
  },
  {
    title: "Hosting & Infrastructure",
    exp: "4+",
    items: ["Vercel", "AWS"],
  },
];

const additionalTech = [
  {
    title: "Design & Prototyping",
    items: ["Figma", "Framer", "Adobe XD"],
  },
  {
    title: "E-commerce Platforms",
    items: ["Shopify", "WooCommerce"],
  },
  {
    title: "Payments & Marketplaces",
    items: ["Stripe", "Razorpay", "PayPal", "Cashfree", "Amazon", "Flipkart"],
  },
];

const techIcons: Record<string, string> = {
  "React": "/tools/reactjs.svg",
  "Next.js": "/tools/nextjs.svg",
  "Angular": "/tools/angularjs.svg",
  "Node.js": "/tools/nodejs.svg",
  "PHP": "/tools/php.svg",
  "AWS": "/tools/aws.svg",
  "Firebase": "/tools/firebase.svg",
  "Vercel": "/tools/vercel.svg",
  "Stripe": "/tools/stripe.svg",
  "Razorpay": "/tools/razorpay.svg",
  "PayPal": "/tools/paypal.svg",
  "Cashfree": "/tools/cashfree.svg",
  "Shopify": "/tools/shopify.svg",
  "WooCommerce": "/tools/woocommerce.svg",
  "Amazon": "/tools/amazon.svg",
  "Flipkart": "/tools/flipkart.svg",
  "Figma": "/tools/figma.svg",
  "Framer": "/tools/framer.svg",
  "Adobe XD": "/tools/xd.svg",
};

const heroProjectImages = [
  "/projects/Cortex.jpg",
  "/projects/ExynosData.jpg",
  "/projects/NovaPay.jpg",
  "/projects/draftai.jpg",
];

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

const comparison = [
  { label: "Strategy before design", arclink: true, basic: false },
  { label: "SEO structure planned upfront", arclink: true, basic: false },
  { label: "Performance budget", arclink: true, basic: false },
  { label: "Custom components", arclink: true, basic: false },
  { label: "Analytics and conversion tracking", arclink: true, basic: false },
  { label: "Scalable app architecture", arclink: true, basic: false },
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

const faqs = [
  {
    question: "How long does a custom web development project take?",
    answer:
      "A focused landing page or marketing website can start in 2-3 weeks. Larger web apps, SaaS dashboards or integration-heavy projects usually need a custom timeline after discovery.",
  },
  {
    question: "Do you build SEO-friendly websites?",
    answer:
      "Yes. We plan metadata, headings, internal links, schema, performance, image optimization and crawlable content as part of the build instead of treating SEO as an afterthought.",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Yes. We can audit your current website, identify performance and conversion issues, redesign key pages and rebuild the site on a cleaner modern stack.",
  },
  {
    question: "Do you work with Sanity CMS?",
    answer:
      "Yes. Sanity is a good choice when your team needs editable service pages, case studies, blogs, landing pages or team content without touching code.",
  },
  {
    question: "Can you build dashboards or SaaS web apps?",
    answer:
      "Yes. We build custom dashboards, admin panels, portals, subscriptions, API integrations and SaaS workflows using modern web technologies.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. We can support maintenance, speed improvements, new pages, bug fixes, analytics, SEO updates and product iterations after launch.",
  },
];

function HeroProjectColumn({ sanityImages }: { sanityImages?: string[] }) {
  const displayImages = sanityImages && sanityImages.length > 0 ? sanityImages : heroProjectImages;
  return (
    <div
      className="relative h-[430px] w-full overflow-visible border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl sm:h-[520px] lg:h-full lg:min-h-0 lg:justify-self-end"
      aria-label="Arclink Edge web development project previews"
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
                <div key={`${set}-${src}`} className="relative aspect-[16/9] w-full shrink-0 overflow-hidden">
                  <Image
                    src={src}
                    alt={`Arclink Edge custom web development project preview ${index + 1}`}
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
      { "@type": "ListItem", position: 3, name: "Web Development", item: PAGE_URL },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${PAGE_URL}#service`,
    name: "Web Development Services",
    serviceType: "Custom Web Development",
    url: PAGE_URL,
    description:
      "Custom web development services for websites, web apps, SaaS dashboards, portals and SEO-friendly digital products.",
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

export default async function WebDevelopmentPage() {
  const [sanityImages, sanityLogos, sanityTestimonials] = await Promise.all([
    getProjectImagesByCategory("web-development"),
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
              <SectionLabel>Web Development Services</SectionLabel>
              <h1
                className="max-w-5xl text-5xl font-medium leading-[1.05] tracking-[-0.04em] md:leading-[0.96] md:tracking-[-0.075em] md:text-7xl lg:text-8xl"
                style={{ fontFamily: "var(--font-inter-tight)" }}
              >
                Fast websites and web apps built to convert, scale and rank.
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/62 md:text-lg">
                Arclink Edge builds custom web development projects for B2B brands, startups and growing businesses in New York, London, Dubai & Bangalore and global markets. From marketing websites to SaaS dashboards, we ship clean, fast and conversion-focused digital products.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton href="/contact" icon={ArrowUpRight}>Start a Web Project</PrimaryButton>
                <SecondaryButton href="/hire/web-developer" icon={ArrowUpRight}>Hire Dedicated Web Developer</SecondaryButton>
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
                We combine product thinking, design precision and engineering discipline so your website is not just shipped, but ready to perform.
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
            title: "Modern stack. Cleaner handoff. Faster iteration.",
            description: "A focused stack of frameworks, infrastructure and content tools we use to build maintainable web products.",
            categories: categorizedTech,
            additionalLabel: "Additional Technologies",
            additionalTitle: "Beyond web development, we connect the tools your product may need.",
            additionalCategories: additionalTech,
            icons: techIcons,
          }}
          beforeOutcomes={
            <section className="px-6 py-20 lg:px-12 lg:py-28">
              <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[0.85fr_1.15fr]">
                <div>
                  <SectionLabel>What We Fix</SectionLabel>
                  <h2 className="text-4xl font-medium leading-[1.1] tracking-[-0.02em] md:leading-none md:tracking-[-0.065em] md:text-6xl" style={{ fontFamily: "var(--font-inter-tight)" }}>
                    Websites should create momentum, not friction.
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
                    Scan the build scope in seconds.
                  </h2>
                </div>
                <p className="mt-6 lg:mt-0 max-w-xl text-sm leading-relaxed text-white/52">
                  Clear deliverables across website design, custom web development, CMS, integrations, SEO and launch support.
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
