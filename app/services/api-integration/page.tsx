import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Check, Clock, Code2, Gauge, Layers, Search, ShieldCheck, Sparkles, Zap, Network, Webhook } from "lucide-react";
import Navbar from "@/components/sections/Navbar";

import Footer from "@/components/sections/Footer";
import BackToTop from "@/components/ui/BackToTop";
import SharedInsidePageSections from "@/components/sections/SharedInsidePageSections";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Button";
import { getProjectImagesByCategory, getBrandLogos, getSanityTestimonials } from "@/sanity/lib/api";
import SectionLabel from "@/components/ui/SectionLabel";

const SITE_URL = "https://www.arclinkedge.com";
const PAGE_URL = `${SITE_URL}/services/api-integration`;

export const metadata: Metadata = {
  title: "API Integration Services in New York, London, Dubai & Bangalore | Custom Workflows",
  description:
    "Expert API integration services in New York, London, Dubai & Bangalore. We connect your software stack, automate workflows, and build secure REST and GraphQL APIs.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "API integration services New York, London, Dubai & Bangalore",
    "custom API development",
    "workflow automation India",
    "REST API development",
    "third-party integrations",
    "Zapier alternatives",
  ],
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "API Integration Services in New York, London, Dubai & Bangalore | Arclink Edge",
    description:
      "Stop doing manual data entry. We connect your disparate software systems to automate workflows and unlock business efficiency.",
    siteName: "Arclink Edge",
    images: [
      {
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Arclink Edge API Integration services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "API Integration Services in New York, London, Dubai & Bangalore | Arclink Edge",
    description:
      "Expert API integration services in New York, London, Dubai & Bangalore. We connect your software stack and automate workflows.",
    images: [`${SITE_URL}/opengraph-image`],
  },
};

const heroStats = [
  { value: "50+", label: "APIs Integrated" },
  { value: "10K+", label: "Hours saved manually" },
  { value: "1-2", label: "Week delivery" },
];

const painPoints = [
  "Your team wastes hours every week manually copying data between different software platforms.",
  "Your existing Zapier or Make.com automations are breaking constantly and getting too expensive.",
  "You need to connect legacy software to modern cloud applications but don't know how.",
  "You want to build a public API for your own SaaS product to allow partners to connect.",
];

const outcomes = [
  {
    icon: Zap,
    title: "Eliminate manual data entry",
    description: "Systems that talk to each other automatically, freeing your team to focus on high-value work.",
  },
  {
    icon: Network,
    title: "Real-time synchronization",
    description: "Ensure that customer data, inventory, and financials are always up-to-date across all your platforms.",
  },
  {
    icon: ShieldCheck,
    title: "Secure, reliable connections",
    description: "Replacing fragile Zapier setups with robust, custom-coded webhooks that handle errors gracefully.",
  },
  {
    icon: Layers,
    title: "Scalable architecture",
    description: "APIs built to handle thousands of requests per second without slowing down your core applications.",
  },
];

const deliverables = [
  {
    label: "Foundation",
    title: "API Strategy & Architecture",
    description: "Mapping data flows and choosing between REST, GraphQL, or Webhooks.",
    items: ["Data Mapping", "REST vs GraphQL", "Security"],
  },
  {
    label: "Development",
    title: "Custom API Build",
    description: "Building secure, documented APIs using Node.js or Python to expose your data.",
    items: ["Node.js APIs", "Authentication", "Rate Limiting"],
  },
  {
    label: "Connectivity",
    title: "Third-Party Integration",
    description: "Connecting CRMs, payment gateways, ERPs, and marketing tools securely.",
    items: ["Stripe", "Salesforce", "Custom APIs"],
  },
  {
    label: "Scale",
    title: "Webhooks & Automation",
    description: "Creating real-time event listeners to trigger complex workflows instantly.",
    items: ["Webhooks", "Queues", "Error Handling"],
  },
];

const process = [
  {
    step: "01",
    phase: "Audit",
    icon: Search,
    duration: "3 Days",
    title: "Data mapping & audit",
    signal: "Understanding the flow",
    description: "We map out exactly what data needs to move, where it needs to go, and the API documentation of the tools involved.",
    chips: ["Data Mapping", "API Docs", "Feasibility"],
  },
  {
    step: "02",
    phase: "Design",
    icon: Layers,
    duration: "4 Days",
    title: "Architecture & security",
    signal: "Planning the connection",
    description: "We design the middleware, define the authentication methods (OAuth, API keys), and plan error-handling scenarios.",
    chips: ["Middleware", "OAuth", "Architecture"],
  },
  {
    step: "03",
    phase: "Build",
    icon: Code2,
    duration: "1-3 Weeks",
    title: "Development & webhooks",
    signal: "Writing the logic",
    description: "We build the custom integration, set up webhooks for real-time updates, and implement rate-limiting protections.",
    chips: ["Node.js", "Webhooks", "Logic"],
  },
  {
    step: "04",
    phase: "Test",
    icon: Zap,
    duration: "4 Days",
    title: "Load testing & QA",
    signal: "Ensuring reliability",
    description: "We run staging tests, simulate API failures, and verify that data transforms correctly across platforms.",
    chips: ["QA", "Load Testing", "Error Handling"],
  },
  {
    step: "05",
    phase: "Deploy",
    icon: ShieldCheck,
    duration: "2 Days",
    title: "Go-live & monitoring",
    signal: "Switching it on",
    description: "We deploy the integration and set up logging/monitoring to automatically alert us if an endpoint fails.",
    chips: ["Deployment", "Logging", "Monitoring"],
  },
];

const categorizedTech = [
  {
    title: "API Frameworks",
    exp: "5+",
    items: ["Node.js", "Express", "NestJS", "FastAPI"],
  },
  {
    title: "Protocols & Styles",
    exp: "5+",
    items: ["RESTful", "GraphQL", "Webhooks", "gRPC"],
  },
  {
    title: "Auth & Security",
    exp: "4+",
    items: ["OAuth 2.0", "JWT", "API Keys", "CORS"],
  },
];

const additionalTech = [
  {
    title: "Queues & Async",
    items: ["Redis", "RabbitMQ", "AWS SQS", "Kafka"],
  },
  {
    title: "No-Code & Low-Code",
    items: ["Zapier", "Make.com", "n8n", "Tray.io"],
  },
  {
    title: "Documentation",
    items: ["Swagger", "Postman", "Stoplight"],
  },
];

const techIcons: Record<string, string> = {
  "Node.js": "/tools/nodejs.svg",
  "AWS SQS": "/tools/aws.svg",
  // Map others to available icons or fallback to text
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
    title: "Custom Integration Build",
    badge: "Fastest path",
    bestFor: "Connecting two specific software systems",
    timeline: "2-4 weeks",
    output: "Reliable, automated data bridge",
    description: "A fixed-scope project to build a custom middleware application that connects two or more APIs to automate a specific business workflow.",
  },
  {
    title: "Public API Development",
    badge: "Deep build",
    bestFor: "SaaS companies opening their platform",
    timeline: "4-8 weeks",
    output: "Secure, documented public API",
    description: "We build, secure, and document a public-facing REST or GraphQL API for your product so your customers can build their own integrations.",
  },
  {
    title: "No-Code Automation Setup",
    badge: "Quick Win",
    bestFor: "Startups needing rapid, affordable automations",
    timeline: "1-2 weeks",
    output: "Complex workflows built on Make or Zapier",
    description: "For workflows that don't require custom code, we architect robust, error-handled automations using platforms like Make.com or n8n.",
  },
];

const faqs = [
  {
    question: "Why build a custom integration instead of using Zapier?",
    answer:
      "Zapier is great for simple tasks, but it gets expensive at scale and struggles with complex data transformations, two-way syncing, and robust error handling. Custom integrations are cheaper at scale and far more reliable.",
  },
  {
    question: "Can you connect a legacy system that doesn't have a modern API?",
    answer:
      "Often, yes. If the legacy system has SOAP endpoints, direct database access, or can export CSVs to an FTP server, we can build a modern REST wrapper around it.",
  },
  {
    question: "What is the difference between REST and GraphQL?",
    answer:
      "REST is the standard method where you hit specific URLs to get specific data. GraphQL allows the client to ask for exactly the data they need in a single request, making it highly efficient for complex frontend applications.",
  },
  {
    question: "How do you handle API security?",
    answer:
      "We implement strict authentication (OAuth 2.0 or JWTs), rate limiting to prevent abuse, payload validation, and IP whitelisting where necessary.",
  },
  {
    question: "Do you write documentation for the APIs you build?",
    answer:
      "Yes. For custom public or internal APIs, we generate interactive documentation using Swagger/OpenAPI specifications so your developers know exactly how to use it.",
  },
  {
    question: "What happens if a third-party API goes down?",
    answer:
      "We build integrations with resilient queues (like Redis or SQS) and exponential backoff retry logic. If an external API is down, we hold the data safely and try again later, ensuring no data is lost.",
  },
];

function HeroProjectColumn({ sanityImages }: { sanityImages?: string[] }) {
  const displayImages = sanityImages && sanityImages.length > 0 ? sanityImages : heroProjectImages;
  return (
    <div
      className="relative h-[430px] w-full overflow-visible border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl sm:h-[520px] lg:h-full lg:min-h-0 lg:justify-self-end"
      aria-label="Arclink Edge API Integration project previews"
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
                    alt={`Arclink Edge integration preview ${index + 1}`}
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
      { "@type": "ListItem", position: 3, name: "API Integration", item: PAGE_URL },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${PAGE_URL}#service`,
    name: "API Integration Services",
    serviceType: "API Development & Integration",
    url: PAGE_URL,
    description:
      "Expert API integration services in New York, London, Dubai & Bangalore. We connect your software stack, automate workflows, and build secure REST and GraphQL APIs.",
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

export default async function ApiIntegrationPage() {
  const [sanityImages, sanityLogos, sanityTestimonials] = await Promise.all([
    getProjectImagesByCategory("api-integration"),
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
              <SectionLabel>API Integration Services</SectionLabel>
              <h1
                className="max-w-5xl type-legacy-019"
              >
                Connecting your tools. Automating your business.
              </h1>
              <p className="mt-8 max-w-2xl text-white/62 type-b1 type-legacy-020">
                Stop wasting time on manual data entry. We build secure, reliable API connections and webhooks that synchronize your software stack, turning fragmented tools into one powerful engine.
              </p>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <PrimaryButton href="/contact" icon={ArrowUpRight}>Start an API Project</PrimaryButton>
                  <SecondaryButton href="/hire/api-developer" icon={ArrowUpRight}>Hire Dedicated API Developer</SecondaryButton>
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
                  A clear framework for connectivity.
                </h2>
              </div>
              <p className="max-w-2xl text-white/54 lg:justify-self-end type-b3 type-legacy-023">
                We combine deep technical understanding of API protocols with rigorous error-handling to ensure data flows reliably.
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
            title: "Modern protocols. Secure connections.",
            description: "We build scalable middleware and custom integrations using the fastest and most secure technologies available.",
            categories: categorizedTech,
            additionalLabel: "Additional Capabilities",
            additionalTitle: "Everything needed to handle millions of requests safely.",
            additionalCategories: additionalTech,
            icons: techIcons,
          }}
          beforeOutcomes={
            <section className="px-6 py-20 lg:px-12 lg:py-28">
              <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[0.85fr_1.15fr]">
                <div>
                  <SectionLabel>What We Fix</SectionLabel>
                  <h2 className="type-legacy-069">
                    We stop data silos and manual entry.
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
                    Scan the integration scope in seconds.
                  </h2>
                </div>
                <p className="mt-6 lg:mt-0 max-w-xl text-white/52 type-b3 type-legacy-023">
                  Clear deliverables across API design, third-party connections, data sync, and security protocols.
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
