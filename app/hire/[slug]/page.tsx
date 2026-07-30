import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check, Clock, ShieldCheck, Users } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import SectionLabel from "@/components/ui/SectionLabel";
import HiringForm from "./HiringForm";
import PricingCard from "./PricingCard";
import BackToTop from "@/components/ui/BackToTop";
import SharedInsidePageSections from "@/components/sections/SharedInsidePageSections";
import Footer from "@/components/sections/Footer";
import { getBrandLogos, getSanityTestimonials } from "@/sanity/lib/api";

const SITE_URL = "https://www.arclinkedge.com";

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
  faqs: { question: string; answer: string }[];
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
    faqs: [
      { question: "How do you vet your dedicated web developers?", answer: "Our developers go through a 5-stage vetting process including algorithmic tests, live coding sessions, and project-based evaluations to ensure senior-level proficiency." },
      { question: "Can I scale my team up or down?", answer: "Yes, our engagement model is flexible. You can add more developers or scale down with a 30-day notice period to match your product roadmap." },
      { question: "How does communication work?", answer: "The developer works in your time zone and joins your Slack, Discord, or Jira. They function as a natural extension of your internal team." },
      { question: "Do I get full ownership of the source code?", answer: "Absolutely. Once the project is completed or at milestones, all IP rights and source code access are transferred to you." },
      { question: "How do you handle technical debt?", answer: "Our developers follow strict clean code principles and TDD (Test Driven Development) to minimize debt and ensure long-term maintainability." },
      { question: "What is the typical onboarding time?", answer: "We can usually have a dedicated web developer integrated into your workflow within 48 to 72 hours after finalizing requirements." }
    ]
  },
  "mobile-app-developer": {
    title: "Hire Dedicated Mobile App Developer",
    role: "App Architecture Expert",
    description: "Native-feeling performance for iOS and Android. High-velocity app development with senior Flutter and React Native experts.",
    skills: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "App Store Optimization"],
    hourlyRate: "$24 - $32",
    monthlyRate: "$3,800 - $5,000",
    features: ["Fully Dedicated Resource", "UI/UX Awareness", "End-to-end Deployment", "Weekly Technical Audits", "Managed Management"],
    faqs: [
      { question: "Do your developers handle both iOS and Android?", answer: "Yes, our specialists in Flutter and React Native build high-performance apps for both platforms from a single codebase." },
      { question: "Will the developer help with App Store submissions?", answer: "Absolutely. Our mobile developers manage the entire release process, including metadata optimization and submission to Apple App Store and Google Play Store." },
      { question: "How do you ensure app performance?", answer: "We implement rigorous performance monitoring, memory leak testing, and native optimization to ensure your app feels fast and responsive." },
      { question: "Can you help with app monetization strategies?", answer: "Yes, our developers have experience integrating in-app purchases, subscriptions (Stripe/RevenueCat), and ad networks." },
      { question: "Do you provide post-launch support for OS updates?", answer: "Yes, we offer maintenance retainers to ensure your app remains compatible with the latest iOS and Android versions." },
      { question: "How do you handle offline functionality?", answer: "We use local database solutions like Hive or SQLite along with robust sync logic to ensure a seamless experience without internet." }
    ]
  },
  "ui-ux-designer": {
    title: "Hire Dedicated UI/UX Designer",
    role: "Product Design Expert",
    description: "Transform complex ideas into intuitive, high-conversion designs. Dedicated designers expert in SaaS, App, and Fintech UX.",
    skills: ["Figma", "SaaS UX", "Design Systems", "Prototyping", "User Research", "Visual Design"],
    hourlyRate: "$20 - $28",
    monthlyRate: "$3,200 - $4,500",
    features: ["Design System Management", "Unlimited Revisions", "Collaborative Figma Workflow", "Developer Handoff Support"],
    faqs: [
      { question: "What is the design process?", answer: "Our designers work in Figma, providing daily updates. We follow a research-driven approach to ensure every pixel serves a business goal." },
      { question: "Do you provide developer handoff?", answer: "Yes, we provide complete design systems and interactive prototypes, ensuring a seamless transition from design to development." },
      { question: "Can the designer work with my existing brand?", answer: "Of course. Our designers are experts at adapting to existing brand guidelines while introducing modern UX improvements." },
      { question: "Do you conduct user testing?", answer: "Yes, we create high-fidelity prototypes and can facilitate user testing sessions to validate UX decisions before development starts." },
      { question: "How do you handle design revisions?", answer: "We operate on an iterative model. We provide daily updates in Figma and incorporate your feedback in real-time." },
      { question: "What deliverables can I expect?", answer: "You receive full Figma source files, interactive prototypes, a style guide/design system, and ready-to-code assets." }
    ]
  },
  "saas-developer": {
    title: "Hire Dedicated SaaS Developer",
    role: "SaaS Product Engineer",
    description: "Specialized in multi-tenant architectures, subscription billing, and complex dashboards for B2B/B2C SaaS products.",
    skills: ["Next.js", "Stripe API", "Auth0/Clerk", "Serverless", "Prisma", "System Design"],
    hourlyRate: "$24 - $34",
    monthlyRate: "$3,800 - $5,400",
    features: ["SaaS Best Practices", "Scalable Multi-tenancy", "Security-first Approach", "Managed Infrastructure Oversight"],
    faqs: [
      { question: "How do you handle multi-tenant security?", answer: "We implement robust data isolation at the database level and secure authentication flows to ensure total privacy for every tenant." },
      { question: "Can you integrate subscription billing?", answer: "Yes, we are experts in Stripe, Chargebee, and Paddle integrations for complex subscription models and metered billing." },
      { question: "Do you help with SaaS infrastructure?", answer: "We optimize serverless architectures and database performance to keep your SaaS fast and cost-effective as you scale." },
      { question: "How do you handle feature flags?", answer: "We implement feature flagging systems like LaunchDarkly or custom solutions to manage progressive rollouts and A/B testing." },
      { question: "Can you build custom analytics dashboards?", answer: "Yes, we build high-performance dashboards with real-time data visualization using tools like Recharts or D3.js." },
      { question: "What is your approach to API-first development?", answer: "We build robust, documented APIs (REST/GraphQL) first, ensuring your SaaS can easily support mobile apps or 3rd party integrations later." }
    ]
  },
  "ecommerce-developer": {
    title: "Hire Dedicated E-commerce Developer",
    role: "Conversion Expert",
    description: "Build high-converting online stores. Expert in Shopify custom themes, headless commerce, and performance optimization.",
    skills: ["Shopify", "Liquid", "Headless Commerce", "WooCommerce", "Technical SEO", "Speed Optimization"],
    hourlyRate: "$20 - $28",
    monthlyRate: "$3,200 - $4,500",
    features: ["CRO Focused Development", "Payment Gateway Security", "Inventory Sync Logic", "24/7 Priority Support"],
    faqs: [
      { question: "Do you build custom Shopify themes?", answer: "Yes, we specialize in high-performance, custom-coded Shopify themes that outrank and out-convert generic templates." },
      { question: "What is your approach to Headless Commerce?", answer: "We use Hydrogen or Next.js with Shopify's Storefront API to create lightning-fast shopping experiences." },
      { question: "How do you optimize for conversions?", answer: "We implement A/B testing infrastructure, fast-loading product pages, and frictionless checkout flows." },
      { question: "Can you handle complex shipping and tax logic?", answer: "Yes, we integrate with 3rd party logistics (3PL) and automated tax calculation tools to simplify your operations." },
      { question: "Do you provide migration services?", answer: "Yes, we safely migrate data, customers, and SEO equity from platforms like Magento or WooCommerce to Shopify." },
      { question: "How do you ensure store security?", answer: "We follow PCI-DSS compliance standards and implement robust security patches for non-hosted platforms like WooCommerce." }
    ]
  },
  "devops-engineer": {
    title: "Hire Dedicated DevOps Engineer",
    role: "Infrastructure Expert",
    description: "Automate your deployments and optimize your cloud costs. Senior engineers for AWS, Docker, and Kubernetes management.",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD Pipelines", "Terraform", "Monitoring"],
    hourlyRate: "$26 - $38",
    monthlyRate: "$4,200 - $6,000",
    features: ["99.9% Uptime Guarantee", "Cloud Cost Optimization", "Zero-downtime Deployments", "Security Hardening"],
    faqs: [
      { question: "How can you reduce my cloud costs?", answer: "We audit your infrastructure to identify idle resources, optimize instance types, and implement auto-scaling to match demand." },
      { question: "Do you handle zero-downtime deployments?", answer: "Yes, we set up robust CI/CD pipelines with blue-green or canary deployment strategies to ensure 100% availability." },
      { question: "How do you secure the infrastructure?", answer: "We implement VPC isolation, IAM least-privilege policies, and automated security scanning for all your cloud resources." },
      { question: "Do you provide 24/7 monitoring?", answer: "Yes, we set up advanced observability with Datadog, New Relic, or Prometheus to alert us of any issues before they impact users." },
      { question: "Can you migrate us to the cloud?", answer: "Yes, we handle seamless migrations from on-premise servers to AWS, Google Cloud, or Azure with minimal downtime." },
      { question: "What is Infrastructure as Code (IaC)?", answer: "We use Terraform or Pulumi to define your infrastructure in code, ensuring reproducible and version-controlled environments." }
    ]
  },
  "api-developer": {
    title: "Hire Dedicated API Developer",
    role: "Integration Specialist",
    description: "Secure and scalable backend systems. Expert in REST, GraphQL, and complex third-party software integrations.",
    skills: ["Node.js", "Python", "GraphQL", "REST APIs", "Microservices", "API Security"],
    hourlyRate: "$22 - $30",
    monthlyRate: "$3,500 - $4,800",
    features: ["Secure Data Flow", "Scalable Microservices", "Automated API Docs", "System Synchronization"],
    faqs: [
      { question: "Do you specialize in GraphQL or REST?", answer: "Our developers are proficient in both, choosing the best architecture based on your data complexity and performance needs." },
      { question: "How do you handle API documentation?", answer: "We provide automated, interactive documentation using Swagger or Postman, ensuring your frontend team can integrate with ease." },
      { question: "Can you handle complex 3rd party integrations?", answer: "Yes, from legacy systems to modern SaaS APIs, we ensure seamless data synchronization across your tech stack." },
      { question: "How do you ensure API security?", answer: "We implement OAuth2, JWT, rate limiting, and input validation to protect your systems from common vulnerabilities." },
      { question: "Do you build microservices?", answer: "Yes, we design and implement microservices architectures using Docker and Kubernetes for maximum scalability." },
      { question: "How do you handle API versioning?", answer: "We follow industry best practices for versioning to ensure backward compatibility for your existing users while deploying new features." }
    ]
  },
  "ai-specialist": {
    title: "Hire Dedicated AI Specialist",
    role: "AI/LLM Engineer",
    description: "Integrate intelligence into your product. Expert in LLMs, custom AI agents, and workflow automation with OpenAI/Claude.",
    skills: ["OpenAI API", "LangChain", "Vector DBs", "Python", "Automation", "Machine Learning"],
    hourlyRate: "$28 - $40",
    monthlyRate: "$4,500 - $6,400",
    features: ["Custom AI Agent Logic", "RAG Implementation", "Prompt Engineering", "Data Privacy First AI"],
    faqs: [
      { question: "Can you build a custom AI chatbot for my data?", answer: "Yes, we specialize in RAG (Retrieval-Augmented Generation) systems that allow AI to answer questions based on your specific private data." },
      { question: "How do you keep LLM costs low?", answer: "We use techniques like semantic caching, prompt compression, and selecting the right model (e.g., GPT-4o vs GPT-3.5) for each task." },
      { question: "Do you help with prompt engineering?", answer: "Absolutely. We iteratively optimize prompts to ensure high accuracy and consistent output from the AI models." },
      { question: "Can you fine-tune models?", answer: "Yes, we can fine-tune open-source models like Llama-3 or Mistral for specific tasks to achieve better performance than generic APIs." },
      { question: "How do you ensure AI data privacy?", answer: "We implement secure data pipelines and can deploy models locally or in private clouds to ensure your data never leaves your infrastructure." },
      { question: "Can you automate business workflows with AI?", answer: "Yes, we build AI agents that can browse the web, interact with your internal tools, and automate repetitive cognitive tasks." }
    ]
  },
  "seo-specialist": {
    title: "Hire Dedicated SEO Specialist",
    role: "Search Growth Expert",
    description: "Drive organic revenue with technical SEO and content clusters. Specialized in ranking competitive keywords and optimizing Core Web Vitals.",
    skills: ["Technical SEO", "Keyword Research", "Content Strategy", "Google Search Console", "Schema Markup", "Analytics"],
    hourlyRate: "$16 - $24",
    monthlyRate: "$2,500 - $3,800",
    features: ["Weekly Ranking Reports", "Competitor Gap Analysis", "Technical Audit & Fixes", "Content Quality Oversight"],
    faqs: [
      { question: "How long does it take to see SEO results?", answer: "While SEO is a long-term game, we typically see significant technical improvements within 4 weeks and ranking growth within 3-6 months." },
      { question: "Do you handle technical SEO fixes?", answer: "Yes, our SEO specialists work directly with developers to fix Core Web Vitals, site architecture, and schema markup issues." },
      { question: "How do you measure success?", answer: "We focus on bottom-line metrics like organic traffic growth, conversion rate optimization, and search engine visibility for target keywords." },
      { question: "Do you provide content strategy?", answer: "Yes, we perform deep keyword research and provide content briefs designed to outrank your competitors." },
      { question: "Can you recover my site from a penalty?", answer: "Yes, we audit your backlink profile and content to identify and resolve issues that led to manual or algorithmic penalties." },
      { question: "What is your approach to link building?", answer: "We focus on high-quality, relevant white-hat link building through digital PR and outreach, avoiding spammy tactics." }
    ]
  },
};

// Aliases for plural slugs to ensure /hire/developers also works
talentRegistry["web-developers"] = talentRegistry["web-developer"];
talentRegistry["mobile-app-developers"] = talentRegistry["mobile-app-developer"];
talentRegistry["ui-ux-designers"] = talentRegistry["ui-ux-designer"];
talentRegistry["saas-developers"] = talentRegistry["saas-developer"];
talentRegistry["ecommerce-developers"] = talentRegistry["ecommerce-developer"];
talentRegistry["devops-engineers"] = talentRegistry["devops-engineer"];
talentRegistry["api-developers"] = talentRegistry["api-developer"];
talentRegistry["ai-specialists"] = talentRegistry["ai-specialist"];
talentRegistry["seo-specialists"] = talentRegistry["seo-specialist"];
talentRegistry["developers"] = talentRegistry["web-developer"];
talentRegistry["designers"] = talentRegistry["ui-ux-designer"];


export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = talentRegistry[slug];
  if (!data) {
    return {
      title: "Talent Profile Not Found",
      robots: { index: false, follow: false },
    };
  }

  const pageUrl = `${SITE_URL}/hire/${slug}`;

  return {
    title: data.title,
    description: data.description,
    alternates: { canonical: pageUrl },
    openGraph: {
      type: "website",
      url: pageUrl,
      title: data.title,
      description: data.description,
      siteName: "Arclink Edge",
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: ["/opengraph-image"],
    },
  };
}

export default async function DedicatedHiringPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [data, sanityLogos, sanityTestimonials] = await Promise.all([
    talentRegistry[slug],
    getBrandLogos(),
    getSanityTestimonials(),
  ]);

  if (!data) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: data.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
      <main id="main-content" className="min-h-screen bg-black text-[#F5F5F7]">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-6 pt-32 lg:px-12 lg:pt-40">
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#0052FF/15_0%,transparent_50%)]" />
          <div className="relative z-10 mx-auto max-w-[1600px]">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <SectionLabel>Dedicated {data.role}</SectionLabel>
                <h1 
                  className="mt-6 type-legacy-019"
                >
                  {data.title}.
                </h1>
                <p className="mt-8 max-w-2xl text-white/60 type-b1 type-legacy-036">
                  {data.description}
                </p>
                
                <div className="mt-12 flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 border border-white/10 bg-white/[0.03] px-4 py-2.5 backdrop-blur-md transition-colors hover:border-white/20 hover:bg-white/[0.06]">
                    <Users className="h-4 w-4 text-[#0052FF]" />
                    <span className="text-white/80 type-label type-legacy-037">Pre-vetted Talent</span>
                  </div>
                  <div className="flex items-center gap-2 border border-white/10 bg-white/[0.03] px-4 py-2.5 backdrop-blur-md transition-colors hover:border-white/20 hover:bg-white/[0.06]">
                    <Clock className="h-4 w-4 text-[#0052FF]" />
                    <span className="text-white/80 type-label type-legacy-037">Interview in 24h</span>
                  </div>
                  <div className="flex items-center gap-2 border border-white/10 bg-white/[0.03] px-4 py-2.5 backdrop-blur-md transition-colors hover:border-white/20 hover:bg-white/[0.06]">
                    <ShieldCheck className="h-4 w-4 text-[#0052FF]" />
                    <span className="text-white/80 type-label type-legacy-037">Managed Quality</span>
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
                <h2 className="type-legacy-038">Core Technical Stack</h2>
                <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {data.skills.map((skill) => (
                    <div
                      key={skill}
                      className="group relative flex w-full items-center gap-5 overflow-hidden border border-white/[0.04] bg-[#0A0A0F]/40 p-4 backdrop-blur-[16px]"
                    >
                      <div
                        className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center transition-transform duration-500 group-hover:scale-110 type-b3 type-legacy-039"
                        style={{ backgroundColor: "rgba(0,82,255,0.06)", color: "#0052FF", border: "1px solid rgba(0,82,255,0.15)" }}
                      >
                        {techIcons[skill] ? (
                          <Image src={techIcons[skill]} alt={skill} width={24} height={24} className="object-contain" />
                        ) : (
                          skill.slice(0, 2).toUpperCase()
                        )}
                      </div>
                      <h3 className="relative z-10 type-legacy-040" style={{ color: "#F5F5F7" }}>{skill}</h3>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <SectionLabel>Inclusions</SectionLabel>
                <h2 className="type-legacy-038">What&apos;s included?</h2>
                <ul className="mt-10 space-y-0">
                  {data.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-4 border-b border-white/[0.06] py-5">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#0052FF]/20 bg-[#0052FF]/5">
                        <Check className="h-4 w-4 text-[#0052FF]" />
                      </div>
                      <span className="text-white/70 type-b2 type-legacy-041">{feature}</span>
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
              <h2 className="mt-4 type-legacy-021">
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
                      className="absolute left-6 top-8 select-none text-white/[0.055] transition-colors duration-500 group-hover:text-white/[0.11] type-display type-legacy-042"
                    >
                      {item.step}
                    </span>
                    <div className="absolute inset-x-7 bottom-8 z-10">
                      <h3
                        className="text-[#F5F5F7] transition-transform duration-500 group-hover:-translate-y-1 type-legacy-043"
                      >
                        {item.title}
                      </h3>
                      <p className="mt-4 text-white/50 type-b3 type-legacy-023">{item.desc}</p>
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
              <h2 className="mt-6 mb-8 type-legacy-044">
                Schedule an <br />Interview.
              </h2>
              <p className="text-white/40 max-w-sm type-legacy-007">
                Submit your requirements and our technical manager will contact you within 24 hours with a tailored response.
              </p>
            </div>
            <div className="bg-white/[0.02] border border-white/5 p-8 md:p-12">
              <HiringForm role={data.role} />
            </div>
          </div>
        </section>

        <SharedInsidePageSections 
          faqs={data.faqs} 
          sanityLogos={sanityLogos}
          sanityTestimonials={sanityTestimonials}
        />


        <Footer />
      </main>
      <BackToTop />
    </>
  );
}
