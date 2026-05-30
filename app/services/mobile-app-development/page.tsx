import dynamic from "next/dynamic";
import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Check, Clock, Code2, Gauge, Layers, Search, ShieldCheck, Sparkles, Zap, Smartphone } from "lucide-react";
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
const PAGE_URL = `${SITE_URL}/services/mobile-app-development`;

export const metadata: Metadata = {
  title: "Mobile App Development Services in New York, London, Dubai & Bangalore | iOS & Android Apps",
  description:
    "Custom iOS and Android app development services in New York, London, Dubai & Bangalore. We build fast, scalable, and native-feeling mobile apps using Flutter and React Native.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "mobile app development New York, London, Dubai & Bangalore",
    "iOS app development India",
    "Android app development agency",
    "Flutter app development",
    "React Native app development",
    "custom mobile apps",
    "cross-platform app development",
  ],
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Mobile App Development Services in New York, London, Dubai & Bangalore | Arclink Edge",
    description:
      "Native-feeling iOS and Android apps built for performance and user engagement. From MVP to scalable enterprise mobile solutions.",
    siteName: "Arclink Edge",
    images: [
      {
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Arclink Edge mobile app development services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development Services in New York, London, Dubai & Bangalore | Arclink Edge",
    description:
      "Custom iOS and Android app development services in New York, London, Dubai & Bangalore. We build fast, scalable, and native-feeling mobile apps.",
    images: [`${SITE_URL}/opengraph-image`],
  },
};

const heroStats = [
  { value: "30+", label: "Apps launched" },
  { value: "4.8", label: "App Store Avg" },
  { value: "3-4", label: "Week MVP starts" },
];

const painPoints = [
  "Your current app is slow, buggy, or drains user battery, leading to high uninstall rates.",
  "The app feels like a clunky web wrapper instead of a premium native experience.",
  "You are struggling to maintain two separate codebases for iOS and Android.",
  "Your app lacks proper offline support, push notifications, or real-time data sync.",
];

const outcomes = [
  {
    icon: Smartphone,
    title: "Native-level performance",
    description: "Smooth 60fps animations, optimized resource usage, and seamless transitions across iOS and Android.",
  },
  {
    icon: Search,
    title: "App Store Optimization",
    description: "Built with guidelines in mind, ensuring quick approval and better visibility on App Store and Google Play.",
  },
  {
    icon: Layers,
    title: "Scalable architecture",
    description: "Robust backend integrations, efficient local caching, and architecture designed to support millions of users.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable launch process",
    description: "TestFlight betas, rigorous QA across devices, and a structured submission and review process.",
  },
];

const deliverables = [
  {
    label: "App Design",
    title: "UI/UX & Prototypes",
    description: "Platform-specific interface designs and interactive prototypes for user testing.",
    items: ["iOS Guidelines", "Material Design", "Prototypes"],
  },
  {
    label: "App Build",
    title: "Mobile App System",
    description: "Cross-platform or native apps with offline support and local databases.",
    items: ["Flutter", "React Native", "Offline Mode"],
  },
  {
    label: "Business Engine",
    title: "Backend & APIs",
    description: "Secure APIs, real-time databases, push notifications, and authentication.",
    items: ["Push Notifications", "REST APIs", "WebSockets"],
  },
  {
    label: "Launch Quality",
    title: "Testing & Submission",
    description: "Device testing, App Store submission, and post-launch monitoring.",
    items: ["TestFlight", "App Store", "Crashlytics"],
  },
];

const process = [
  {
    step: "01",
    phase: "Research",
    icon: Search,
    duration: "4 Days",
    title: "Discovery & platform strategy",
    signal: "User context and feature mapping",
    description: "We analyze your audience, device preferences, core features, and monetization strategy before designing.",
    chips: ["User context", "Features", "Monetization"],
  },
  {
    step: "02",
    phase: "Structure",
    icon: Layers,
    duration: "7 Days",
    title: "App flow & wireframes",
    signal: "Navigation and user journeys",
    description: "We map out the app architecture, navigation patterns, and screen flows to ensure intuitive usage.",
    chips: ["App flow", "Navigation", "Wireframes"],
  },
  {
    step: "03",
    phase: "Design",
    icon: Sparkles,
    duration: "14 Days",
    title: "UI design & prototyping",
    signal: "Platform-specific aesthetics",
    description: "We create a premium interface that feels native to iOS and Android while maintaining your brand identity.",
    chips: ["UI design", "Interactions", "Native feel"],
  },
  {
    step: "04",
    phase: "Build",
    icon: Code2,
    duration: "25 Days",
    title: "Development & APIs",
    signal: "Frontend and backend connection",
    description: "We develop the app, integrate APIs, set up real-time databases, and implement push notifications.",
    chips: ["Flutter", "APIs", "Firebase"],
  },
  {
    step: "05",
    phase: "Launch",
    icon: ShieldCheck,
    duration: "30 Days",
    title: "QA, Beta & Store Submission",
    signal: "Tested and ready for stores",
    description: "We conduct device testing, distribute via TestFlight/Play Console, and handle the final store submission.",
    chips: ["QA Testing", "App Store", "Google Play"],
  },
];

const categorizedTech = [
  {
    title: "Mobile Frameworks",
    exp: "4+",
    items: ["Flutter", "React Native", "Swift", "Kotlin"],
  },
  {
    title: "Backend & Real-time",
    exp: "4+",
    items: ["Node.js", "Firebase", "Supabase", "GraphQL"],
  },
  {
    title: "Cloud & Infrastructure",
    exp: "4+",
    items: ["AWS", "Google Cloud", "Docker"],
  },
];

const additionalTech = [
  {
    title: "Design & Prototyping",
    items: ["Figma", "Framer", "Adobe XD"],
  },
  {
    title: "Testing & Analytics",
    items: ["Crashlytics", "Mixpanel", "AppsFlyer"],
  },
  {
    title: "Payments & Subscriptions",
    items: ["RevenueCat", "Stripe", "Razorpay", "Apple Pay", "Google Pay"],
  },
];

const techIcons: Record<string, string> = {
  "React Native": "/tools/reactjs.svg",
  "Node.js": "/tools/nodejs.svg",
  "Firebase": "/tools/firebase.svg",
  "Supabase": "/tools/supabase.svg",
  "AWS": "/tools/aws.svg",
  "Stripe": "/tools/stripe.svg",
  "Razorpay": "/tools/razorpay.svg",
  "Figma": "/tools/figma.svg",
  "Framer": "/tools/framer.svg",
  "Adobe XD": "/tools/xd.svg",
};

// ONLY MOBILE APP IMAGES
const heroProjectImages = [
  "/projects/ivf.jpg",
  "/projects/NovaPay.jpg",
  "/projects/ivf.jpg",
  "/projects/NovaPay.jpg",
];

const engagementModels = [
  {
    title: "MVP Sprint",
    badge: "Fastest path",
    bestFor: "Startups validating their app idea",
    timeline: "3-4 weeks",
    output: "Core feature app ready for beta users",
    description: "A focused development sprint to build and launch the core features of your mobile app to validate the market.",
  },
  {
    title: "Custom App Build",
    badge: "Deep build",
    bestFor: "Complex apps with custom features and hardware integrations",
    timeline: "Custom roadmap",
    output: "Scalable, feature-rich native app",
    description: "A comprehensive cross-platform or native app build including advanced animations, offline capabilities, and complex backend integrations.",
  },
  {
    title: "App Maintenance",
    badge: "Ongoing",
    bestFor: "Post-launch updates, bug fixes, and new OS compatibility",
    timeline: "Monthly",
    output: "Continuous performance optimization",
    description: "Ongoing support to keep your app compatible with the latest iOS and Android updates, add new features, and monitor crash analytics.",
  },
];

const faqs = [
  {
    question: "Do you build for both iOS and Android?",
    answer:
      "Yes. We typically use cross-platform frameworks like Flutter or React Native to build for both platforms simultaneously, saving time and budget while maintaining native-like performance.",
  },
  {
    question: "Will you help upload the app to the App Store and Google Play?",
    answer:
      "Yes, app store submission is part of our process. We handle the technical requirements, certificates, and submission guidelines for both Apple App Store and Google Play Store.",
  },
  {
    question: "How long does it take to build a mobile app?",
    answer:
      "A simple MVP can take 3-4 weeks. A standard business or consumer app takes 2-3 months. Complex apps with custom backend logic or hardware integrations will require a custom timeline.",
  },
  {
    question: "Do you provide backend development for the app?",
    answer:
      "Yes. We build the complete ecosystem, including the mobile frontend, the backend APIs, the database, and any necessary admin dashboards to manage your app's content and users.",
  },
  {
    question: "Who owns the code after the app is built?",
    answer:
      "You do. Once the project is completed and fully paid, we hand over all source code, assets, and intellectual property rights to you.",
  },
  {
    question: "Can you rescue an existing app project that is failing?",
    answer:
      "Yes. We can audit your current codebase, fix critical bugs, refactor the architecture for better scalability, and help get the project back on track.",
  },
];

function HeroProjectColumn({ sanityImages }: { sanityImages?: string[] }) {
  const displayImages = sanityImages && sanityImages.length > 0 ? sanityImages : heroProjectImages;
  return (
    <div
      className="relative h-[430px] w-full overflow-visible border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl sm:h-[520px] lg:h-full lg:min-h-0 lg:justify-self-end"
      aria-label="Arclink Edge mobile app development project previews"
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
                <div key={`${set}-${src}-${index}`} className="relative aspect-[16/9] sm:aspect-[16/9] w-full shrink-0 overflow-hidden bg-black/20">
                  <Image
                    src={src}
                    alt={`Arclink Edge mobile app project preview ${index + 1}`}
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
      { "@type": "ListItem", position: 3, name: "Mobile App Development", item: PAGE_URL },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${PAGE_URL}#service`,
    name: "Mobile App Development Services",
    serviceType: "Custom Mobile App Development",
    url: PAGE_URL,
    description:
      "Custom iOS and Android app development services using Flutter and React Native. We build fast, scalable mobile applications.",
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

export default async function MobileAppDevelopmentPage() {
  const [sanityImages, sanityLogos, sanityTestimonials] = await Promise.all([
    getProjectImagesByCategory("mobile-app-development"),
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
              <SectionLabel>Mobile App Development</SectionLabel>
              <h1
                className="max-w-5xl text-5xl font-medium leading-[1.05] tracking-[-0.04em] md:leading-[0.96] md:tracking-[-0.075em] md:text-7xl lg:text-8xl"
                style={{ fontFamily: "var(--font-inter-tight)" }}
              >
                Apps that people actually want to keep on their phones.
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/62 md:text-lg">
                We build native and cross-platform iOS and Android apps that don't just look good, but perform flawlessly. From startup MVPs to enterprise mobile solutions, we engineer apps that scale, retain users, and drive growth.
              </p>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <PrimaryButton href="/contact" icon={ArrowUpRight}>Start an App Project</PrimaryButton>
                  <SecondaryButton href="/hire/mobile-app-developer" icon={ArrowUpRight}>Hire Dedicated Mobile App Developer</SecondaryButton>
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
                  A clear build system from idea to store.
                </h2>
              </div>
              <p className="max-w-2xl text-sm leading-relaxed text-white/54 lg:justify-self-end">
                We combine product thinking, platform-specific design, and engineering discipline so your app is ready to dominate the App Store.
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

        <section className="relative overflow-visible px-6 py-20 lg:px-12 lg:py-28">
          <div aria-hidden="true" className="absolute left-[-15%] top-[20%] h-[60vh] w-[40vw] rounded-full bg-[#0052FF]/15 blur-[150px]" />
          <div aria-hidden="true" className="absolute bottom-[10%] right-[-15%] h-[70vh] w-[40vw] rounded-full bg-[#0052FF]/15 blur-[160px]" />
          <div className="relative z-10 mx-auto max-w-[1600px]">
            <div className="mb-16 max-w-5xl">
              <SectionLabel>Technology</SectionLabel>
              <h2 className="text-4xl font-medium leading-[1.1] tracking-[-0.02em] md:leading-none md:tracking-[-0.065em] md:text-6xl" style={{ fontFamily: "var(--font-inter-tight)" }}>
                Modern stack. Seamless performance.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/52">
                We use top-tier cross-platform and native technologies to ensure your app runs flawlessly on any device.
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
                  <SectionLabel>Additional Integrations</SectionLabel>
                  <h3
                    className="text-3xl font-medium leading-none text-[#F5F5F7] md:text-5xl tracking-[-0.015em] md:tracking-[-0.06em]"
                    style={{ fontFamily: "var(--font-inter-tight)" }}
                  >
                    We connect the tools your app needs to scale and monetize.
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
                  <h2 className="text-4xl font-medium leading-[1.1] tracking-[-0.02em] md:leading-none md:tracking-[-0.065em] md:text-6xl" style={{ fontFamily: "var(--font-inter-tight)" }}>
                    Bad apps get uninstalled. We build keepers.
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
                  Clear deliverables across app design, mobile development, backend APIs, testing, and store launch.
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
