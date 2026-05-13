import dynamic from "next/dynamic";
import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Check, Clock, Code2, Gauge, Layers, Search, ShieldCheck, Sparkles, Zap, Palette, LayoutTemplate } from "lucide-react";
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
const PAGE_URL = `${SITE_URL}/services/ui-ux-design`;

export const metadata: Metadata = {
  title: "UI/UX Design Services in New York, Bangalore, Delhi & Mumbai | User-Centered Products",
  description:
    "Premium UI/UX design services in New York, Bangalore, Delhi & Mumbai. We design intuitive, beautiful interfaces that drive engagement, reduce churn, and increase conversions.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "UI/UX design services New York, Bangalore, Delhi & Mumbai",
    "user interface design company India",
    "user experience design agency",
    "SaaS product design",
    "website UI design",
    "mobile app UI design",
  ],
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "UI/UX Design Services in New York, Bangalore, Delhi & Mumbai | Arclink Edge",
    description:
      "Strategic UI/UX design that connects user needs with business goals. We build scalable design systems and premium digital experiences.",
    siteName: "Arclink Edge",
    images: [
      {
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Arclink Edge UI/UX design services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UI/UX Design Services in New York, Bangalore, Delhi & Mumbai | Arclink Edge",
    description:
      "Premium UI/UX design services in New York, Bangalore, Delhi & Mumbai. We design interfaces that increase user engagement and conversions.",
    images: [`${SITE_URL}/opengraph-image`],
  },
};

const heroStats = [
  { value: "40+", label: "Products designed" },
  { value: "2x", label: "Avg conversion lift" },
  { value: "2-3", label: "Week design start" },
];

const painPoints = [
  "Users abandon your product because the interface is confusing and hard to navigate.",
  "Your digital presence looks outdated compared to modern competitors.",
  "You suffer from low conversion rates despite high traffic due to poor user journeys.",
  "Development is constantly slowed down because there is no clear design system.",
];

const outcomes = [
  {
    icon: Palette,
    title: "Higher conversions",
    description: "Clear CTAs, intuitive flows, and persuasive visual design that guide users to take action.",
  },
  {
    icon: Search,
    title: "Reduced user churn",
    description: "Frictionless onboarding and logical architecture that keeps users engaged with your product longer.",
  },
  {
    icon: LayoutTemplate,
    title: "Faster development",
    description: "A comprehensive design system that allows developers to build faster with reusable components.",
  },
  {
    icon: ShieldCheck,
    title: "Stronger brand trust",
    description: "Premium, polished aesthetics that instantly communicate credibility and quality to your audience.",
  },
];

const deliverables = [
  {
    label: "Foundation",
    title: "User Research & UX",
    description: "Deep dive into user needs, personas, and complete journey mapping.",
    items: ["Personas", "User Journeys", "UX Audit"],
  },
  {
    label: "Structure",
    title: "Wireframes & Flows",
    description: "Low-fidelity layouts outlining the core architecture and navigation.",
    items: ["Wireframes", "Sitemaps", "User Flows"],
  },
  {
    label: "Aesthetics",
    title: "UI & Visual Design",
    description: "High-fidelity, pixel-perfect screens bringing your brand to life.",
    items: ["UI Screens", "Animations", "Prototypes"],
  },
  {
    label: "Scale",
    title: "Design System",
    description: "A centralized library of components, typography, and rules for developers.",
    items: ["Style Guides", "Components", "Tokens"],
  },
];

const process = [
  {
    step: "01",
    phase: "Discover",
    icon: Search,
    duration: "4 Days",
    title: "Research & UX strategy",
    signal: "Understanding the core problem",
    description: "We analyze your business goals, target audience, competitors, and current analytics to form a solid UX strategy.",
    chips: ["UX Research", "Competitor Audit", "Strategy"],
  },
  {
    step: "02",
    phase: "Wireframe",
    icon: Layers,
    duration: "7 Days",
    title: "Information architecture",
    signal: "Mapping the user journey",
    description: "We create sitemaps and low-fidelity wireframes to establish the structural foundation before adding visual elements.",
    chips: ["Wireframes", "Sitemap", "Flows"],
  },
  {
    step: "03",
    phase: "Design",
    icon: Palette,
    duration: "14 Days",
    title: "High-fidelity UI creation",
    signal: "Applying the brand identity",
    description: "We apply colors, typography, imagery, and styling to create a stunning, accessible, and premium interface.",
    chips: ["Visual Design", "UI Screens", "Accessibility"],
  },
  {
    step: "04",
    phase: "Prototype",
    icon: Zap,
    duration: "5 Days",
    title: "Interactive prototyping",
    signal: "Testing the experience",
    description: "We build clickable prototypes to simulate the real product experience and test interactions before development.",
    chips: ["Prototyping", "Micro-interactions", "Testing"],
  },
  {
    step: "05",
    phase: "Handoff",
    icon: Code2,
    duration: "3 Days",
    title: "Design system & handoff",
    signal: "Ready for engineering",
    description: "We finalize the design system and provide developers with clean, annotated files for a seamless implementation.",
    chips: ["Design System", "Assets", "Dev Handoff"],
  },
];

const categorizedTech = [
  {
    title: "UI Design & Systems",
    exp: "5+",
    items: ["Figma", "Sketch", "Adobe XD"],
  },
  {
    title: "Prototyping & Motion",
    exp: "4+",
    items: ["Framer", "Protopie", "Principle", "After Effects"],
  },
  {
    title: "Handoff & Collaboration",
    exp: "4+",
    items: ["Zeplin", "Storybook", "Zeroheight"],
  },
];

const additionalTech = [
  {
    title: "Research & Testing",
    items: ["Maze", "Hotjar", "Optimal Workshop"],
  },
  {
    title: "Whiteboarding",
    items: ["FigJam", "Miro", "Whimsical"],
  },
  {
    title: "Assets & Illustration",
    items: ["Illustrator", "Photoshop", "Spline 3D"],
  },
];

const techIcons: Record<string, string> = {
  "Figma": "/tools/figma.svg",
  "Framer": "/tools/framer.svg",
  "Adobe XD": "/tools/xd.svg",
  "Sketch": "/tools/sketch.svg",
};

// ALL IMAGES FOR UI/UX AND OTHER PAGES
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
    title: "UI/UX Audit",
    badge: "Fastest path",
    bestFor: "Existing products with low conversion rates",
    timeline: "1-2 weeks",
    output: "Actionable report and quick-win redesigns",
    description: "A comprehensive review of your existing platform to identify usability issues, conversion bottlenecks, and accessibility problems.",
  },
  {
    title: "Full Product Design",
    badge: "Deep build",
    bestFor: "New SaaS products, apps, or major redesigns",
    timeline: "Custom roadmap",
    output: "Complete UI designs and design system",
    description: "End-to-end product design starting from user research and wireframing, all the way to high-fidelity UI and developer handoff.",
  },
  {
    title: "Design Retainer",
    badge: "Ongoing",
    bestFor: "Scaling teams needing continuous design support",
    timeline: "Monthly",
    output: "Continuous design iterations and asset creation",
    description: "A dedicated monthly design capacity to help your team iterate on features, design marketing assets, and expand your design system.",
  },
];

const faqs = [
  {
    question: "Do you only do design, or can you build it too?",
    answer:
      "We do both! While we offer standalone UI/UX design services, Arclink Edge is a full-stack agency. We can seamlessly transition your approved designs into production using React, Next.js, or mobile frameworks.",
  },
  {
    question: "What is a Design System and why do I need one?",
    answer:
      "A design system is a collection of reusable components (buttons, inputs, typography) guided by clear standards. It ensures your product looks consistent as it grows and drastically speeds up the development process.",
  },
  {
    question: "How long does a UI/UX project typically take?",
    answer:
      "A standard website redesign might take 3-4 weeks. A complex SaaS dashboard or mobile app can take 6-8 weeks depending on the number of screens and the depth of user research required.",
  },
  {
    question: "Do you redesign existing products?",
    answer:
      "Yes. We frequently work with companies to modernize their legacy software, improve the user experience, and optimize their conversion funnels without losing their core functionality.",
  },
  {
    question: "What tools do you use for design?",
    answer:
      "Our primary design and prototyping tool is Figma, as it allows for real-time collaboration with clients and excellent developer handoff. We also use Framer and other tools for advanced prototyping.",
  },
  {
    question: "Will we own the design files?",
    answer:
      "Absolutely. Upon project completion and final payment, we hand over full ownership and access to all Figma files, assets, and design systems created for your project.",
  },
];

function HeroProjectColumn({ sanityImages }: { sanityImages?: string[] }) {
  const displayImages = sanityImages && sanityImages.length > 0 ? sanityImages : heroProjectImages;
  return (
    <div
      className="relative h-[430px] w-full overflow-visible border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl sm:h-[520px] lg:h-full lg:min-h-0 lg:justify-self-end"
      aria-label="Arclink Edge UI/UX design project previews"
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
                    alt={`Arclink Edge UI/UX design project preview ${index + 1}`}
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
      { "@type": "ListItem", position: 3, name: "UI/UX Design", item: PAGE_URL },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${PAGE_URL}#service`,
    name: "UI/UX Design Services",
    serviceType: "UI/UX Design",
    url: PAGE_URL,
    description:
      "Premium UI/UX design services in New York, Bangalore, Delhi & Mumbai. We design interfaces that are beautiful, intuitive, and built to increase user engagement.",
    provider: { "@id": `${SITE_URL}/#organization`, name: "Arclink Edge" },
    areaServed: [
      { "@type": "City", name: "New York, Bangalore, Delhi & Mumbai" },
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

export default async function UIUXDesignPage() {
  const sanityImages = await getProjectImagesByCategory("ui-ux-design");
  const sanityLogos = await getBrandLogos();
  const sanityTestimonials = await getSanityTestimonials();
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
              <SectionLabel>UI/UX Design Services</SectionLabel>
              <h1
                className="max-w-5xl text-5xl font-medium leading-[0.96] md:text-7xl lg:text-8xl"
                style={{ fontFamily: "var(--font-inter-tight)", letterSpacing: "-0.075em" }}
              >
                Interfaces that users love and competitors envy.
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/62 md:text-lg">
                Bad design kills conversions. We craft intuitive, visually stunning UI/UX designs that reduce friction, build trust, and turn your complex product into an effortless experience.
              </p>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <PrimaryButton href="/contact" icon={ArrowUpRight}>Start a Design Project</PrimaryButton>
                  <SecondaryButton href="/hire/ui-ux-designer" icon={ArrowUpRight}>Hire Dedicated UI/UX Designer</SecondaryButton>
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
                <h2 className="text-4xl font-medium leading-none md:text-6xl" style={{ fontFamily: "var(--font-inter-tight)", letterSpacing: "-0.065em" }}>
                  A clear design system from idea to handoff.
                </h2>
              </div>
              <p className="max-w-2xl text-sm leading-relaxed text-white/54 lg:justify-self-end">
                We combine user empathy, aesthetic precision, and structural logic to ensure your design isn't just pretty—it performs.
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
                          className="text-5xl font-medium leading-none text-[#F5F5F7] transition-transform duration-500 group-hover:-translate-y-1 md:text-6xl"
                          style={{ fontFamily: "var(--font-inter-tight)", letterSpacing: "-0.065em" }}
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

        <section className="relative overflow-visible px-6 py-20 lg:px-12 lg:py-28">
          <div aria-hidden="true" className="absolute left-[-15%] top-[20%] h-[60vh] w-[40vw] rounded-full bg-[#0052FF]/15 blur-[150px]" />
          <div aria-hidden="true" className="absolute bottom-[10%] right-[-15%] h-[70vh] w-[40vw] rounded-full bg-[#0052FF]/15 blur-[160px]" />
          <div className="relative z-10 mx-auto max-w-[1600px]">
            <div className="mb-16 max-w-5xl">
              <SectionLabel>Technology</SectionLabel>
              <h2 className="text-4xl font-medium leading-none md:text-6xl" style={{ fontFamily: "var(--font-inter-tight)", letterSpacing: "-0.065em" }}>
                Industry-standard design tools.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/52">
                We utilize the best design and prototyping software to create high-fidelity, production-ready interfaces.
              </p>
            </div>

            <div className="flex flex-col gap-16">
              {categorizedTech.map((category) => (
                <div key={category.title}>
                  <h3
                    className="mb-8 text-2xl font-medium tracking-tight text-[#F5F5F7] md:text-3xl"
                    style={{ fontFamily: "var(--font-inter-tight)" }}
                  >
                    {category.title}
                  </h3>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {category.items.map((tech) => (
                      <div
                        key={tech}
                        className="group relative flex w-full cursor-default items-center gap-5 overflow-hidden border border-white/[0.04] bg-[#0A0A0F]/40 p-4 backdrop-blur-[16px]"
                      >
                        <div
                          className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-none text-sm font-bold transition-transform duration-500 group-hover:scale-110"
                          style={{
                            backgroundColor: "rgba(0,82,255,0.06)",
                            color: "#0052FF",
                            border: "1px solid rgba(0,82,255,0.15)",
                            letterSpacing: "0.05em",
                          }}
                        >
                          {techIcons[tech] ? (
                            <Image src={techIcons[tech]} alt={tech} width={24} height={24} className="object-contain" />
                          ) : (
                            tech.slice(0, 2).toUpperCase()
                          )}
                        </div>

                        <div className="relative z-10 flex flex-col justify-center">
                          <h4 className="mb-1 text-base font-medium" style={{ color: "#F5F5F7", letterSpacing: "-0.02em" }}>
                            {tech}
                          </h4>
                          <p className="flex items-center gap-1.5 text-sm font-semibold text-[#22C55E]">
                            {category.exp} <span className="font-normal text-white/40">Years Exp.</span>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div>
                <div className="mb-8 max-w-3xl">
                  <SectionLabel>Additional Capabilities</SectionLabel>
                  <h3
                    className="text-3xl font-medium leading-none text-[#F5F5F7] md:text-5xl"
                    style={{ fontFamily: "var(--font-inter-tight)", letterSpacing: "-0.06em" }}
                  >
                    Everything needed to test, validate, and document.
                  </h3>
                </div>

                <div className="grid gap-x-12 gap-y-16 lg:grid-cols-3">
                  {additionalTech.map((category) => (
                    <div key={category.title}>
                      <h4
                        className="mb-8 text-xl font-medium text-[#F5F5F7]"
                        style={{ fontFamily: "var(--font-inter-tight)", letterSpacing: "-0.04em" }}
                      >
                        {category.title}
                      </h4>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {category.items.map((tech) => (
                          <div key={tech} className="flex items-center gap-3 border border-white/[0.06] bg-black/30 p-3">
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/[0.06] bg-white/[0.04]">
                              {techIcons[tech] ? (
                                <Image src={techIcons[tech]} alt={tech} width={20} height={20} className="object-contain" />
                              ) : (
                                <span className="text-[0.65rem] font-bold text-white/58">{tech.slice(0, 2).toUpperCase()}</span>
                              )}
                            </span>
                            <span className="text-sm font-medium text-white/70">{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <SharedInsidePageSections sanityLogos={sanityLogos} sanityTestimonials={sanityTestimonials} faqs={faqs}
          beforeOutcomes={
            <section className="px-6 py-20 lg:px-12 lg:py-28">
              <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[0.85fr_1.15fr]">
                <div>
                  <SectionLabel>What We Fix</SectionLabel>
                  <h2 className="text-4xl font-medium leading-none md:text-6xl" style={{ fontFamily: "var(--font-inter-tight)", letterSpacing: "-0.065em" }}>
                    Friction costs you money. We remove it.
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
                  <h2 className="text-4xl font-medium leading-none md:text-6xl" style={{ fontFamily: "var(--font-inter-tight)", letterSpacing: "-0.065em" }}>
                    Scan the design scope in seconds.
                  </h2>
                </div>
                <p className="mt-6 lg:mt-0 max-w-xl text-sm leading-relaxed text-white/52">
                  Clear deliverables across user research, wireframing, high-fidelity UI, and comprehensive design systems.
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

                      <h3 className="text-2xl font-medium leading-none text-[#F5F5F7]" style={{ fontFamily: "var(--font-inter-tight)", letterSpacing: "-0.05em" }}>
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
