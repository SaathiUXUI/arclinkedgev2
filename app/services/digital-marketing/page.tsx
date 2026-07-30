import dynamic from "next/dynamic";
import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Check, Clock, Code2, Gauge, Layers, Search, ShieldCheck, Sparkles, Zap, Megaphone, TrendingUp } from "lucide-react";
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
const PAGE_URL = `${SITE_URL}/services/digital-marketing`;

export const metadata: Metadata = {
  title: "Digital Marketing & SEO Services in New York, London, Dubai & Bangalore | Data-Driven Growth",
  description:
    "Data-driven digital marketing and SEO services in New York, London, Dubai & Bangalore. We combine technical SEO, content strategy, and performance ads to scale your revenue.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "digital marketing agency New York, London, Dubai & Bangalore",
    "SEO services India",
    "performance marketing",
    "B2B lead generation",
    "SaaS marketing agency",
    "Google Ads management",
  ],
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Digital Marketing & SEO Services in New York, London, Dubai & Bangalore | Arclink Edge",
    description:
      "Stop wasting ad spend on vanity metrics. We build data-driven SEO and performance marketing campaigns that actually generate qualified leads and revenue.",
    siteName: "Arclink Edge",
    images: [
      {
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Arclink Edge Digital Marketing services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing & SEO Services in New York, London, Dubai & Bangalore | Arclink Edge",
    description:
      "Data-driven digital marketing and SEO services in New York, London, Dubai & Bangalore. We combine technical SEO and performance ads to scale your revenue.",
    images: [`${SITE_URL}/opengraph-image`],
  },
};

const heroStats = [
  { value: "300%", label: "Avg ROI on Ad Spend" },
  { value: "Page 1", label: "Rankings achieved" },
  { value: "10x", label: "Organic traffic growth" },
];

const painPoints = [
  "You're burning cash on Google and Facebook Ads but not seeing a return on investment.",
  "Your website looks great but nobody can find it on Google because of poor technical SEO.",
  "You are getting traffic, but it's the wrong audience, leading to a terrible conversion rate.",
  "Your current marketing agency reports on 'impressions' instead of actual revenue generated.",
];

const outcomes = [
  {
    icon: TrendingUp,
    title: "Qualified lead generation",
    description: "Campaigns designed to attract high-intent buyers, not just random clicks.",
  },
  {
    icon: Search,
    title: "Organic search dominance",
    description: "Technical SEO and content strategies that rank you on Page 1 for your most profitable keywords.",
  },
  {
    icon: Zap,
    title: "Maximized ad ROI",
    description: "Data-backed performance marketing that lowers your Customer Acquisition Cost (CAC).",
  },
  {
    icon: ShieldCheck,
    title: "Transparent revenue tracking",
    description: "Proper analytics setup so you know exactly which campaigns are generating cash.",
  },
];

const deliverables = [
  {
    label: "Organic",
    title: "Technical SEO & Content",
    description: "Site audits, keyword mapping, schema markup, and high-quality blog content.",
    items: ["Technical SEO", "Backlinks", "Content Strategy"],
  },
  {
    label: "Paid",
    title: "Performance Ads",
    description: "Highly targeted campaigns across Google, LinkedIn, and Meta to drive immediate conversions.",
    items: ["Google Ads", "Meta Ads", "LinkedIn B2B"],
  },
  {
    label: "Data",
    title: "Analytics & Tracking",
    description: "Configuring GTM and GA4 to track the exact user journey from click to purchase.",
    items: ["GA4", "Tag Manager", "Conversion Tracking"],
  },
  {
    label: "Conversion",
    title: "Landing Page CRO",
    description: "Designing and A/B testing high-converting landing pages for your ad traffic.",
    items: ["A/B Testing", "Heatmaps", "Copywriting"],
  },
];

const process = [
  {
    step: "01",
    phase: "Audit",
    icon: Search,
    duration: "1 Week",
    title: "SEO audit & market research",
    signal: "Finding the baseline",
    description: "We audit your site's technical health, analyze competitors, and find the keywords your actual buyers are searching for.",
    chips: ["SEO Audit", "Competitors", "Keywords"],
  },
  {
    step: "02",
    phase: "Track",
    icon: Layers,
    duration: "1 Week",
    title: "Analytics setup & tracking",
    signal: "Measuring the truth",
    description: "We configure Google Tag Manager and GA4 so we can track exact conversions and revenue, not just traffic.",
    chips: ["GA4 Setup", "GTM", "Event Tracking"],
  },
  {
    step: "03",
    phase: "Optimize",
    icon: Code2,
    duration: "2 Weeks",
    title: "Technical fixes & landing pages",
    signal: "Fixing the foundation",
    description: "We fix site speed issues, implement schema markup, and design high-converting landing pages for our campaigns.",
    chips: ["Core Web Vitals", "Schema", "CRO"],
  },
  {
    step: "04",
    phase: "Launch",
    icon: Zap,
    duration: "Ongoing",
    title: "Ad campaigns & content creation",
    signal: "Driving traffic",
    description: "We launch targeted Google/Meta ads for immediate wins while simultaneously publishing SEO content for long-term growth.",
    chips: ["Google Ads", "Content Writing", "PR"],
  },
  {
    step: "05",
    phase: "Refine",
    icon: TrendingUp,
    duration: "Monthly",
    title: "A/B testing & scaling",
    signal: "Maximizing ROI",
    description: "We analyze the data weekly, pause losing ads, scale the winners, and continuously optimize the landing pages.",
    chips: ["A/B Testing", "Reporting", "Scaling"],
  },
];

const categorizedTech = [
  {
    title: "SEO & Content Tools",
    exp: "5+",
    items: ["Ahrefs", "SEMrush", "Screaming Frog", "SurferSEO"],
  },
  {
    title: "Analytics & Tracking",
    exp: "5+",
    items: ["Google Analytics 4", "Google Tag Manager", "Looker Studio", "Hotjar"],
  },
  {
    title: "Ad Platforms",
    exp: "4+",
    items: ["Google Ads", "Meta Ads", "LinkedIn Ads", "TikTok Ads"],
  },
];

const additionalTech = [
  {
    title: "CRM & Email",
    items: ["HubSpot", "ActiveCampaign", "Klaviyo", "Mailchimp"],
  },
  {
    title: "CRO & Testing",
    items: ["VWO", "Optimizely", "Unbounce", "Figma"],
  },
  {
    title: "Marketing Automation",
    items: ["Zapier", "Make", "Apollo.io", "Instantly"],
  },
];

const techIcons: Record<string, string> = {
  // Add generic icons for these if needed or rely on text fallback
  "Ahrefs": "/tools/ahrefs.svg",
  "Google Analytics 4": "/tools/google.svg",
  "Google Ads": "/tools/google.svg",
};

// ALL IMAGES
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
    title: "SEO & Organic Growth",
    badge: "Long-term ROI",
    bestFor: "Companies wanting sustainable, free traffic",
    timeline: "6+ months",
    output: "Page 1 rankings and organic leads",
    description: "A comprehensive strategy including deep technical SEO fixes, high-authority backlink building, and conversion-focused content writing.",
  },
  {
    title: "Performance Marketing",
    badge: "Immediate results",
    bestFor: "Brands needing leads or sales this month",
    timeline: "Monthly",
    output: "Positive ROAS from paid campaigns",
    description: "We design, write, and manage highly targeted Google and Meta ad campaigns focused entirely on lowering your acquisition cost.",
  },
  {
    title: "Full-Funnel Growth",
    badge: "Comprehensive",
    bestFor: "Scaling B2B and SaaS companies",
    timeline: "Monthly Retainer",
    output: "End-to-end marketing management",
    description: "We act as your outsourced CMO team, handling SEO, Paid Ads, Email automation, and Landing Page optimization to drive total revenue growth.",
  },
];

const faqs = [
  {
    question: "How long does it take to see results from SEO?",
    answer:
      "SEO is a long-term play. While we fix technical issues immediately, it typically takes 3 to 6 months to see significant improvements in keyword rankings and organic traffic, depending on the competitiveness of your industry.",
  },
  {
    question: "Do you guarantee first-page rankings on Google?",
    answer:
      "No reputable agency can guarantee a #1 ranking because Google's algorithm is entirely out of our control. However, we guarantee that we use proven, data-driven, 'white-hat' strategies that have successfully ranked dozens of our clients.",
  },
  {
    question: "What is the difference between SEO and Paid Ads (PPC)?",
    answer:
      "Paid Ads (Google/Meta) get you to the top immediately but you pay for every click. When you stop paying, the traffic stops. SEO takes longer to build, but once you rank, the traffic is free and highly sustainable.",
  },
  {
    question: "How do you track if the marketing is actually working?",
    answer:
      "We rely heavily on data. Before launching campaigns, we configure Google Analytics 4 and Tag Manager to track exact 'conversion events' (form fills, purchases, calls). We report on Cost Per Lead (CPL) and Return on Ad Spend (ROAS).",
  },
  {
    question: "Do you write the blog content for SEO?",
    answer:
      "Yes. We have specialized copywriters who create high-quality, technically accurate content designed to rank for specific search intent, rather than just stuffing keywords.",
  },
  {
    question: "What ad budget do I need to start?",
    answer:
      "We recommend a minimum ad spend of $1,500 - $3,000 per month (paid directly to Google/Meta) to generate enough data for the algorithms to optimize and to see a meaningful return on investment.",
  },
];

function HeroProjectColumn({ sanityImages }: { sanityImages?: string[] }) {
  const displayImages = sanityImages && sanityImages.length > 0 ? sanityImages : heroProjectImages;
  return (
    <div
      className="relative h-[430px] w-full overflow-visible border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl sm:h-[520px] lg:h-full lg:min-h-0 lg:justify-self-end"
      aria-label="Arclink Edge marketing project previews"
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
                    alt={`Arclink Edge digital marketing preview ${index + 1}`}
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
      { "@type": "ListItem", position: 3, name: "Digital Marketing & SEO", item: PAGE_URL },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${PAGE_URL}#service`,
    name: "Digital Marketing & SEO Services",
    serviceType: "Digital Marketing",
    url: PAGE_URL,
    description:
      "Data-driven digital marketing and SEO services in New York, London, Dubai & Bangalore. We combine technical SEO, content strategy, and performance ads to scale your revenue.",
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

export default async function DigitalMarketingPage() {
  const [sanityImages, sanityLogos, sanityTestimonials] = await Promise.all([
    getProjectImagesByCategory("digital-marketing"),
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
              <SectionLabel>Digital Marketing & SEO</SectionLabel>
              <h1
                className="max-w-5xl text-5xl font-medium leading-[1.05] tracking-[-0.04em] md:leading-[0.96] md:tracking-[-0.075em] md:text-7xl lg:text-8xl"
                style={{ fontFamily: "var(--font-inter-tight)" }}
              >
                Traffic is vanity. Revenue is sanity.
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/62 md:text-lg">
                Stop wasting money on marketing that doesn't convert. We engineer data-driven SEO strategies and performance ad campaigns designed specifically to lower your acquisition costs and increase qualified leads.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton href="/contact" icon={ArrowUpRight}>Start a Growth Project</PrimaryButton>
                <SecondaryButton href="/hire/seo-specialist" icon={ArrowUpRight}>Hire Dedicated SEO Specialist</SecondaryButton>
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
                  A scientific approach to scale.
                </h2>
              </div>
              <p className="max-w-2xl text-sm leading-relaxed text-white/54 lg:justify-self-end">
                We replace guesswork with rigorous testing, tracking every click to ensure your marketing budget generates measurable return.
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
            title: "The modern growth stack.",
            description: "We utilize industry-leading tools to audit, track, and optimize your marketing campaigns across every digital touchpoint.",
            categories: categorizedTech,
            additionalLabel: "Conversion Tools",
            additionalTitle: "Tools to turn more traffic into revenue.",
            additionalCategories: additionalTech,
            icons: techIcons,
          }}
          beforeOutcomes={
            <section className="px-6 py-20 lg:px-12 lg:py-28">
              <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[0.85fr_1.15fr]">
                <div>
                  <SectionLabel>What We Fix</SectionLabel>
                  <h2 className="text-4xl font-medium leading-[1.1] tracking-[-0.02em] md:leading-none md:tracking-[-0.065em] md:text-6xl" style={{ fontFamily: "var(--font-inter-tight)" }}>
                    We stop marketing waste.
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
                    Scan the growth scope in seconds.
                  </h2>
                </div>
                <p className="mt-6 lg:mt-0 max-w-xl text-sm leading-relaxed text-white/52">
                  Clear deliverables across SEO strategy, content systems, performance marketing, and analytics.
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
