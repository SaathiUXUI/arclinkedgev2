import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Check, Clock, Code2, Gauge, Layers, Search, ShieldCheck, Sparkles, Zap, ShoppingCart, CreditCard } from "lucide-react";
import Navbar from "@/components/sections/Navbar";

import Footer from "@/components/sections/Footer";
import BackToTop from "@/components/ui/BackToTop";
import SharedInsidePageSections from "@/components/sections/SharedInsidePageSections";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Button";
import { getProjectImagesByCategory, getBrandLogos, getSanityTestimonials } from "@/sanity/lib/api";
import SectionLabel from "@/components/ui/SectionLabel";

const SITE_URL = "https://www.arclinkedge.com";
const PAGE_URL = `${SITE_URL}/services/ecommerce`;

export const metadata: Metadata = {
  title: "E-commerce Development Services in New York, London, Dubai & Bangalore | Custom Stores",
  description:
    "High-conversion e-commerce development in New York, London, Dubai & Bangalore. We build fast, secure online stores on Shopify, WooCommerce, and custom Next.js stacks.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "ecommerce development New York, London, Dubai & Bangalore",
    "Shopify development agency",
    "WooCommerce expert India",
    "custom ecommerce development",
    "headless commerce",
    "online store design",
  ],
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "E-commerce Development Services in New York, London, Dubai & Bangalore | Arclink Edge",
    description:
      "Stop losing sales to slow websites. We build performance-optimized, headless e-commerce stores designed to maximize your conversion rate.",
    siteName: "Arclink Edge",
    images: [
      {
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Arclink Edge e-commerce development services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "E-commerce Development Services in New York, London, Dubai & Bangalore | Arclink Edge",
    description:
      "High-conversion e-commerce development in New York, London, Dubai & Bangalore. We build fast, secure online stores.",
    images: [`${SITE_URL}/opengraph-image`],
  },
};

const heroStats = [
  { value: "$25M+", label: "Client revenue generated" },
  { value: "40%", label: "Avg conversion lift" },
  { value: "3-5", label: "Week store launch" },
];

const painPoints = [
  "Your current store is painfully slow, causing customers to abandon their carts before checkout.",
  "You rely on bloated, generic themes that don't reflect your premium brand identity.",
  "Inventory management and shipping integrations are a manual, error-prone nightmare.",
  "You're losing sales on mobile devices because the checkout flow is clunky.",
];

const outcomes = [
  {
    icon: Zap,
    title: "Lightning-fast load times",
    description: "Sub-second page loads using headless commerce or optimized Shopify architectures.",
  },
  {
    icon: ShoppingCart,
    title: "Frictionless checkout",
    description: "Streamlined, trusted payment flows designed specifically to reduce cart abandonment.",
  },
  {
    icon: Layers,
    title: "Automated operations",
    description: "Seamless connections to your ERP, CRM, and fulfillment centers to save you hours of manual work.",
  },
  {
    icon: CreditCard,
    title: "Scalable sales infrastructure",
    description: "Stores built to handle Black Friday traffic spikes without going offline.",
  },
];

const deliverables = [
  {
    label: "Platform",
    title: "Store Setup & Config",
    description: "Configuring Shopify, WooCommerce, or headless CMS with proper tax and shipping rules.",
    items: ["Shopify Plus", "WooCommerce", "Headless Setup"],
  },
  {
    label: "Aesthetics",
    title: "Custom Theme Design",
    description: "Brand-aligned UI/UX design focused on product discovery and easy checkout.",
    items: ["Figma UI", "Mobile-First", "Liquid/React"],
  },
  {
    label: "Functionality",
    title: "Custom App Integration",
    description: "Connecting reviews, loyalty programs, marketing tools, and custom features.",
    items: ["Klaviyo", "Yotpo", "Inventory Sync"],
  },
  {
    label: "Performance",
    title: "Speed & SEO Optimization",
    description: "Optimizing assets, caching, and technical SEO structure for product pages.",
    items: ["Core Web Vitals", "Schema", "Image CDN"],
  },
];

const process = [
  {
    step: "01",
    phase: "Strategy",
    icon: Search,
    duration: "1 Week",
    title: "Catalog & platform strategy",
    signal: "Choosing the right foundation",
    description: "We analyze your product catalog, operational needs, and growth goals to select between Shopify, Woo, or a custom build.",
    chips: ["Platform Choice", "Catalog Audit", "Logistics"],
  },
  {
    step: "02",
    phase: "Design",
    icon: Layers,
    duration: "2 Weeks",
    title: "Storefront UX design",
    signal: "Mapping the buyer journey",
    description: "We design high-converting product pages, collection layouts, and a frictionless cart experience.",
    chips: ["UX/UI", "Product Pages", "Cart Flow"],
  },
  {
    step: "03",
    phase: "Develop",
    icon: Code2,
    duration: "3-4 Weeks",
    title: "Theme build & setup",
    signal: "Engineering the store",
    description: "We develop a custom theme from scratch (no bloated templates) ensuring clean code and lightning-fast speed.",
    chips: ["Custom Theme", "Liquid/React", "Speed"],
  },
  {
    step: "04",
    phase: "Integrate",
    icon: Zap,
    duration: "1 Week",
    title: "Apps & payments sync",
    signal: "Connecting the business",
    description: "We integrate payment gateways, ERPs, email marketing (Klaviyo), and shipping providers.",
    chips: ["Payments", "Klaviyo", "Fulfillment"],
  },
  {
    step: "05",
    phase: "Launch",
    icon: ShieldCheck,
    duration: "1 Week",
    title: "Data migration & go-live",
    signal: "Opening for business",
    description: "We securely migrate your customer data and orders from your old platform and conduct end-to-end transaction testing.",
    chips: ["Migration", "QA Testing", "Launch"],
  },
];

const categorizedTech = [
  {
    title: "Platforms & CMS",
    exp: "5+",
    items: ["Shopify", "WooCommerce", "Sanity", "Magento"],
  },
  {
    title: "Headless & Frontend",
    exp: "4+",
    items: ["Next.js", "Hydrogen (Shopify)", "React", "Tailwind"],
  },
  {
    title: "Payments & Checkouts",
    exp: "5+",
    items: ["Stripe", "Razorpay", "PayPal", "Shop Pay"],
  },
];

const additionalTech = [
  {
    title: "Marketing & Retention",
    items: ["Klaviyo", "Mailchimp", "Yotpo", "Gorgias"],
  },
  {
    title: "Search & Discovery",
    items: ["Algolia", "SearchSpring", "Elasticsearch"],
  },
  {
    title: "Operations & ERP",
    items: ["ShipStation", "NetSuite", "Cin7"],
  },
];

const techIcons: Record<string, string> = {
  "Shopify": "/tools/shopify.svg",
  "WooCommerce": "/tools/woocommerce.svg",
  "Next.js": "/tools/nextjs.svg",
  "React": "/tools/reactjs.svg",
  "Stripe": "/tools/stripe.svg",
  "Razorpay": "/tools/razorpay.svg",
  "PayPal": "/tools/paypal.svg",
};

// ALL IMAGES FOR E-COMMERCE AND OTHER PAGES
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
    title: "Store Migration & Redesign",
    badge: "Fastest path",
    bestFor: "Existing stores looking to upgrade platforms",
    timeline: "4-6 weeks",
    output: "Modern, high-converting storefront",
    description: "A complete redesign of your store and a secure migration from outdated platforms (like Magento 1) to Shopify or WooCommerce.",
  },
  {
    title: "Headless E-commerce",
    badge: "Deep build",
    bestFor: "Brands needing absolute speed and custom UX",
    timeline: "Custom roadmap",
    output: "Ultra-fast Next.js/Shopify hybrid",
    description: "We decouple the frontend from the backend using Next.js and Shopify Hydrogen, providing unparalleled performance and design freedom.",
  },
  {
    title: "Growth & Optimization",
    badge: "Ongoing",
    bestFor: "Stores looking to increase their conversion rate",
    timeline: "Monthly",
    output: "Continuous A/B testing and updates",
    description: "Ongoing technical support to build new features, run A/B tests on product pages, and optimize your checkout funnel.",
  },
];

const faqs = [
  {
    question: "Do you recommend Shopify or WooCommerce?",
    answer:
      "It depends on your business. Shopify is incredible for ease of use, security, and ecosystem. WooCommerce (WordPress) is better if you need deep customizations, own your hosting, or have a tight budget for monthly app fees.",
  },
  {
    question: "What is headless e-commerce?",
    answer:
      "Headless commerce separates the frontend (what users see) from the backend (inventory/payments). We build the frontend with ultra-fast Next.js and use Shopify's API for the backend. It's the ultimate setup for speed and custom design.",
  },
  {
    question: "Can you integrate our existing ERP or POS system?",
    answer:
      "Yes. We frequently integrate e-commerce platforms with systems like NetSuite, Microsoft Dynamics, or custom APIs to keep inventory and pricing perfectly synced.",
  },
  {
    question: "How do you ensure the site won't crash during a sale?",
    answer:
      "If using Shopify, their infrastructure handles the load. If building a custom or headless stack, we use serverless edge deployments (like Vercel or AWS CloudFront) that automatically scale to handle massive traffic spikes.",
  },
  {
    question: "Will you help upload our products?",
    answer:
      "We handle the bulk migration of your products via CSV or API from your old store. For completely new stores, we guide you on how to upload products or can offer data-entry as an add-on service.",
  },
  {
    question: "Do you provide SEO for e-commerce?",
    answer:
      "We build a perfect technical SEO foundation: fast load times, correct schema markup for products (price, reviews, availability), canonical tags, and clean URL structures.",
  },
];

function HeroProjectColumn({ sanityImages }: { sanityImages?: string[] }) {
  const displayImages = sanityImages && sanityImages.length > 0 ? sanityImages : heroProjectImages;
  return (
    <div
      className="relative h-[430px] w-full overflow-visible border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl sm:h-[520px] lg:h-full lg:min-h-0 lg:justify-self-end"
      aria-label="Arclink Edge e-commerce project previews"
    >
      <div className="absolute left-0 top-0 z-20 h-2 w-2 -translate-x-1/2 -translate-y-1/2 bg-[#D1D1D6]" />
      <div className="absolute right-0 top-0 z-20 h-2 w-2 -translate-y-1/2 translate-x-1/2 bg-[#D1D1D6]" />
      <div className="absolute bottom-0 left-0 z-20 h-2 w-2 -translate-x-1/2 translate-y-1/2 bg-[#D1D1D6]" />
      <div className="absolute bottom-0 right-0 z-20 h-2 w-2 translate-x-1/2 translate-y-1/2 bg-[#D1D1D6]" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-[#030303] to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-[#030303] to-transparent" />

        <div
          className="mobile-continuous-animation mobile-animation-45s absolute inset-x-0 top-0 flex animate-hero-project-column flex-col gap-4 p-4 sm:gap-5 sm:p-5 lg:gap-6 lg:p-6"
          data-pause-offscreen
        >
          {[0, 1].map((set) => (
            <div key={`hero-project-set-${set}`} className="flex shrink-0 flex-col gap-4 pb-4 sm:gap-5 sm:pb-5 lg:gap-6 lg:pb-6">
              {displayImages.map((src, index) => (
                <div key={`${set}-${src}-${index}`} className="relative aspect-[16/9] w-full shrink-0 overflow-hidden bg-black/20">
                  <Image
                    src={src}
                    alt={`Arclink Edge e-commerce product preview ${index + 1}`}
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
              className="text-[#F5F5F7] type-display type-legacy-067"
            >
              {stat.value}
            </p>
            <p
              className="mt-5 max-w-[12rem] text-white/50 type-label type-legacy-068"
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
      { "@type": "ListItem", position: 3, name: "E-commerce Solutions", item: PAGE_URL },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${PAGE_URL}#service`,
    name: "E-commerce Development Services",
    serviceType: "E-commerce Development",
    url: PAGE_URL,
    description:
      "High-conversion e-commerce development in New York, London, Dubai & Bangalore. We build fast, secure online stores on Shopify, WooCommerce, and custom Next.js stacks.",
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

export default async function EcommercePage() {
  const [sanityImages, sanityLogos, sanityTestimonials] = await Promise.all([
    getProjectImagesByCategory("ecommerce"),
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
              <SectionLabel>E-commerce Solutions</SectionLabel>
              <h1
                className="max-w-5xl type-legacy-019"
              >
                Stores built for speed, scale, and sales.
              </h1>
              <p className="mt-8 max-w-2xl text-white/62 type-b1 type-legacy-020">
                Stop losing customers to slow load times and confusing checkouts. We design and build premium e-commerce experiences on Shopify, WooCommerce, and headless architectures that turn browsers into buyers.
              </p>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <PrimaryButton href="/contact" icon={ArrowUpRight}>Start an E-commerce Project</PrimaryButton>
                  <SecondaryButton href="/hire/ecommerce-developer" icon={ArrowUpRight}>Hire Dedicated E-commerce Developer</SecondaryButton>
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
                <h2 className="type-legacy-069">
                  A clear build system to drive revenue.
                </h2>
              </div>
              <p className="max-w-2xl text-white/54 lg:justify-self-end type-b3 type-legacy-023">
                We combine conversion rate optimization (CRO) principles with deep technical expertise to ensure your store performs flawlessly.
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
                        className="absolute left-6 top-8 select-none text-white/[0.055] transition-colors duration-500 group-hover:text-white/[0.11] type-display type-legacy-070"
                      >
                        {item.step}
                      </span>

                      <div className="absolute inset-x-7 bottom-8 z-10">
                        <div className="mb-6 flex translate-y-4 flex-wrap gap-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                          {item.chips.map((chip) => (
                            <span
                              key={chip}
                              className="bg-white/18 px-4 py-2 text-white type-label type-legacy-071"
                            >
                              {chip}
                            </span>
                          ))}
                        </div>

                        <h3
                          className="text-[#F5F5F7] transition-transform duration-500 group-hover:-translate-y-1 type-legacy-043"
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
            title: "Built on reliable commerce engines.",
            description: "We select the right platform for your scale, whether it's Shopify Plus for enterprise reliability or Next.js for headless speed.",
            categories: categorizedTech,
            additionalLabel: "Growth & Operations Tools",
            additionalTitle: "We integrate the tools that power your marketing and logistics.",
            additionalCategories: additionalTech,
            icons: techIcons,
          }}
          beforeOutcomes={
            <section className="px-6 py-20 lg:px-12 lg:py-28">
              <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[0.85fr_1.15fr]">
                <div>
                  <SectionLabel>What We Fix</SectionLabel>
                  <h2 className="type-legacy-069">
                    We stop your store from leaking money.
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
                        <p className="text-white/[0.06] transition-colors duration-300 group-hover:text-white/16 type-display type-legacy-072">
                          0{index + 1}
                        </p>
                        <p className="text-white/68 type-b2 type-legacy-073">{point}</p>
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
                  <h2 className="type-legacy-069">
                    Scan the store scope in seconds.
                  </h2>
                </div>
                <p className="mt-6 lg:mt-0 max-w-xl text-white/52 type-b3 type-legacy-023">
                  Clear deliverables across UX design, custom shop development, payments, and conversion optimization.
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
                        <span className="text-white/72 type-label type-legacy-031">
                          {item.label}
                        </span>
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-white/[0.06] text-white/42 type-label type-legacy-074">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <h3 className="text-[#F5F5F7] type-legacy-075">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-white/54 type-b3 type-legacy-023">{item.description}</p>

                      <div className="mt-auto flex flex-wrap gap-2 pt-8">
                        {item.items.map((deliverable) => (
                          <span key={deliverable} className="border border-white/[0.06] bg-black/30 px-3 py-1.5 text-white/62 type-label type-legacy-018">
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
    </>
  );
}
