import dynamic from "next/dynamic";
import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Check, Clock, Code2, Gauge, Layers, Search, ShieldCheck, Sparkles, Zap, Cpu, Bot } from "lucide-react";
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
const PAGE_URL = `${SITE_URL}/services/ai-automation`;

export const metadata: Metadata = {
  title: "AI & Automation Services in New York, London, Dubai & Bangalore | LLMs & Chatbots",
  description:
    "Expert AI & Automation services in New York, London, Dubai & Bangalore. We build custom LLM applications, AI chatbots, and process automations that save your team thousands of hours.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "AI development company New York, London, Dubai & Bangalore",
    "custom LLM development",
    "AI chatbots India",
    "business process automation",
    "OpenAI API integration",
    "AI automation agency",
  ],
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "AI & Automation Services in New York, London, Dubai & Bangalore | Arclink Edge",
    description:
      "Stop doing repetitive tasks. We build AI agents, custom chatbots, and automate business processes using modern LLMs to increase your operational efficiency.",
    siteName: "Arclink Edge",
    images: [
      {
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Arclink Edge AI and Automation services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI & Automation Services in New York, London, Dubai & Bangalore | Arclink Edge",
    description:
      "Expert AI & Automation services in New York, London, Dubai & Bangalore. We build custom LLM applications and AI chatbots.",
    images: [`${SITE_URL}/opengraph-image`],
  },
};

const heroStats = [
  { value: "10K+", label: "Hours saved annually" },
  { value: "30+", label: "AI Models deployed" },
  { value: "2-4", label: "Week MVP delivery" },
];

const painPoints = [
  "Your team is buried in repetitive administrative tasks like data entry and customer support routing.",
  "You want to leverage AI in your product but don't know how to securely integrate OpenAI or Claude.",
  "Your customer support costs are skyrocketing because humans are answering basic FAQs.",
  "You have massive amounts of internal documentation but finding information takes hours.",
];

const outcomes = [
  {
    icon: Cpu,
    title: "Drastic cost reduction",
    description: "Automate repetitive tasks so your team can focus on high-value, creative work that grows the business.",
  },
  {
    icon: Bot,
    title: "24/7 Customer Support",
    description: "Intelligent AI agents trained on your specific data that resolve up to 80% of customer queries instantly.",
  },
  {
    icon: Search,
    title: "Instant knowledge retrieval",
    description: "Internal AI tools that search through thousands of PDFs and documents to find exact answers in seconds.",
  },
  {
    icon: Zap,
    title: "Product differentiation",
    description: "Embed cutting-edge AI features directly into your SaaS or mobile app to stay ahead of the competition.",
  },
];

const deliverables = [
  {
    label: "Customer Support",
    title: "AI Support Chatbots",
    description: "Chatbots trained on your Help Center and PDFs to answer customer questions automatically.",
    items: ["Vector DBs", "RAG Setup", "Intercom Sync"],
  },
  {
    label: "Operations",
    title: "Internal AI Agents",
    description: "Tools for your employees to query internal databases, summarize meetings, or draft emails.",
    items: ["Internal Tools", "Data Processing", "Slack Bots"],
  },
  {
    label: "Product",
    title: "LLM Integration",
    description: "Integrating GPT-4 or Claude APIs into your existing software to add smart features.",
    items: ["OpenAI API", "Prompt Eng.", "Feature Build"],
  },
  {
    label: "Efficiency",
    title: "Process Automation",
    description: "Connecting tools using AI to automate complex workflows like invoice processing.",
    items: ["OCR", "Make/n8n", "Workflow Logic"],
  },
];

const process = [
  {
    step: "01",
    phase: "Identify",
    icon: Search,
    duration: "1 Week",
    title: "Process audit & AI feasibility",
    signal: "Finding the ROI",
    description: "We audit your daily operations to identify repetitive tasks that have the highest ROI for AI automation.",
    chips: ["Process Audit", "ROI Calculation", "Feasibility"],
  },
  {
    step: "02",
    phase: "Design",
    icon: Layers,
    duration: "1 Week",
    title: "Data pipeline & logic",
    signal: "Structuring the brain",
    description: "We map out how the AI will access your data, designing the vector database architecture and prompt strategies.",
    chips: ["Data Prep", "Vector DB", "Prompts"],
  },
  {
    step: "03",
    phase: "Build",
    icon: Cpu,
    duration: "2-3 Weeks",
    title: "Model integration & RAG",
    signal: "Coding the AI",
    description: "We integrate LLMs, set up Retrieval-Augmented Generation (RAG) so the AI knows your data, and build the interface.",
    chips: ["OpenAI/Anthropic", "RAG", "Python/Node"],
  },
  {
    step: "04",
    phase: "Train",
    icon: Code2,
    duration: "1 Week",
    title: "Testing & hallucination fixes",
    signal: "Ensuring accuracy",
    description: "We rigorously test the AI to ensure it provides accurate answers, adjusting prompts to prevent 'hallucinations'.",
    chips: ["Testing", "Prompt Tuning", "Guardrails"],
  },
  {
    step: "05",
    phase: "Deploy",
    icon: ShieldCheck,
    duration: "Ongoing",
    title: "Launch & monitoring",
    signal: "Going live",
    description: "We deploy the automation, monitor API costs, and continuously refine the AI based on real user interactions.",
    chips: ["Deployment", "Cost Tracking", "Refinement"],
  },
];

const categorizedTech = [
  {
    title: "AI Models & APIs",
    exp: "3+",
    items: ["OpenAI (GPT-4)", "Anthropic (Claude)", "Gemini", "Llama 3"],
  },
  {
    title: "Frameworks & Langchain",
    exp: "2+",
    items: ["LangChain", "LlamaIndex", "Vercel AI SDK", "Python"],
  },
  {
    title: "Vector Databases",
    exp: "2+",
    items: ["Pinecone", "Weaviate", "Supabase (pgvector)", "Qdrant"],
  },
];

const additionalTech = [
  {
    title: "Voice & Vision",
    items: ["ElevenLabs", "Whisper", "Vision API", "Stable Diffusion"],
  },
  {
    title: "Automation Platforms",
    items: ["Make.com", "n8n", "Zapier", "Activepieces"],
  },
  {
    title: "Frontend Integration",
    items: ["React", "Next.js", "Streamlit", "Gradio"],
  },
];

const techIcons: Record<string, string> = {
  "Python": "/tools/python.svg", // assuming exists or fallback
  "React": "/tools/reactjs.svg",
  "Next.js": "/tools/nextjs.svg",
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
    title: "AI Chatbot Implementation",
    badge: "Fastest path",
    bestFor: "Customer support or internal knowledge bases",
    timeline: "2-4 weeks",
    output: "Custom chatbot trained on your data",
    description: "We securely process your PDFs, website, and Help Center into a vector database to deploy an accurate, intelligent AI agent.",
  },
  {
    title: "Product AI Integration",
    badge: "Deep build",
    bestFor: "SaaS companies adding AI features",
    timeline: "4-8 weeks",
    output: "Smart features embedded in your app",
    description: "We integrate LLM capabilities directly into your existing software infrastructure, handling the APIs, prompt engineering, and UI.",
  },
  {
    title: "Workflow Automation",
    badge: "ROI Focused",
    bestFor: "Operations teams with heavy manual processes",
    timeline: "3-6 weeks",
    output: "Automated data pipelines and AI processing",
    description: "We combine API integrations with AI (like OCR for invoices or text summarization) to completely automate a manual business process.",
  },
];

const faqs = [
  {
    question: "Is our company data secure when using AI?",
    answer:
      "Yes. We strictly use enterprise APIs (like OpenAI's API) which have explicit policies stating they do NOT use your API data to train their public models. Your private data remains private.",
  },
  {
    question: "What is RAG (Retrieval-Augmented Generation)?",
    answer:
      "RAG is a technique where we connect an AI model (like ChatGPT) to your private database. When a user asks a question, the system searches your database first, then gives those facts to the AI to generate a highly accurate answer.",
  },
  {
    question: "Can AI completely replace my customer support team?",
    answer:
      "No, and it shouldn't. AI excels at handling the repetitive 80% of tier-1 support queries (password resets, policy questions, order status). This frees your human agents to handle complex, high-value customer interactions.",
  },
  {
    question: "How much do the AI APIs cost to run?",
    answer:
      "API costs have plummeted. For a typical mid-sized business chatbot, API costs usually range from $20 to $100 per month, depending on usage—a fraction of the cost of manual labor.",
  },
  {
    question: "Do you build custom machine learning models from scratch?",
    answer:
      "Usually, no. For 95% of business use cases, utilizing and fine-tuning existing foundation models (like GPT-4 or Llama) is vastly faster, cheaper, and more effective than training a model from scratch.",
  },
  {
    question: "How do you stop the AI from making things up (hallucinating)?",
    answer:
      "We use strict prompt engineering, lower the model's 'temperature' (creativity), and implement RAG to force the AI to only cite facts retrieved from your approved documents.",
  },
];

function HeroProjectColumn({ sanityImages }: { sanityImages?: string[] }) {
  const displayImages = sanityImages && sanityImages.length > 0 ? sanityImages : heroProjectImages;
  return (
    <div
      className="relative h-[430px] w-full overflow-visible border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl sm:h-[520px] lg:h-full lg:min-h-0 lg:justify-self-end"
      aria-label="Arclink Edge AI project previews"
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
                    alt={`Arclink Edge AI automation preview ${index + 1}`}
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
      { "@type": "ListItem", position: 3, name: "AI & Automation", item: PAGE_URL },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${PAGE_URL}#service`,
    name: "AI & Automation Services",
    serviceType: "AI Development",
    url: PAGE_URL,
    description:
      "Expert AI & Automation services in New York, London, Dubai & Bangalore. We build custom LLM applications, AI chatbots, and process automations that save your team thousands of hours.",
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

export default async function AIAutomationPage() {
  const [sanityImages, sanityLogos, sanityTestimonials] = await Promise.all([
    getProjectImagesByCategory("ai-automation"),
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
              <SectionLabel>AI & Automation Services</SectionLabel>
              <h1
                className="max-w-5xl text-5xl font-medium leading-[1.05] tracking-[-0.04em] md:leading-[0.96] md:tracking-[-0.075em] md:text-7xl lg:text-8xl"
                style={{ fontFamily: "var(--font-inter-tight)" }}
              >
                Work smarter. Let AI handle the busywork.
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/62 md:text-lg">
                We design and integrate custom AI agents, LLM features, and smart automations that slash operational costs, boost productivity, and give your business an unfair advantage.
              </p>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <PrimaryButton href="/contact" icon={ArrowUpRight}>Start an AI Project</PrimaryButton>
                  <SecondaryButton href="/hire/ai-specialist" icon={ArrowUpRight}>Hire Dedicated AI Specialist</SecondaryButton>
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
                  A secure framework for AI integration.
                </h2>
              </div>
              <p className="max-w-2xl text-sm leading-relaxed text-white/54 lg:justify-self-end">
                We combine business logic with cutting-edge LLM engineering to ensure your AI acts reliably, securely, and accurately.
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
            title: "The AI engineering stack.",
            description: "We leverage the most advanced foundation models, vector databases, and orchestration frameworks to build intelligent systems.",
            categories: categorizedTech,
            additionalLabel: "Additional Capabilities",
            additionalTitle: "Everything needed to automate and interact.",
            additionalCategories: additionalTech,
            icons: techIcons,
          }}
          beforeOutcomes={
            <section className="px-6 py-20 lg:px-12 lg:py-28">
              <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[0.85fr_1.15fr]">
                <div>
                  <SectionLabel>What We Fix</SectionLabel>
                  <h2 className="text-4xl font-medium leading-[1.1] tracking-[-0.02em] md:leading-none md:tracking-[-0.065em] md:text-6xl" style={{ fontFamily: "var(--font-inter-tight)" }}>
                    Manual processes are slowing you down.
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
                    Scan the AI scope in seconds.
                  </h2>
                </div>
                <p className="mt-6 lg:mt-0 max-w-xl text-sm leading-relaxed text-white/52">
                  Clear deliverables across LLM integration, workflow automation, custom AI models, and deployment.
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
