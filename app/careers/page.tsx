import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Code2, Palette } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import SharedInsidePageSections from "@/components/sections/SharedInsidePageSections";
import BackToTop from "@/components/ui/BackToTop";
import CookieBanner from "@/components/ui/CookieBanner";
import SectionLabel from "@/components/ui/SectionLabel";
import { PrimaryButton, SecondaryButton, TextButton } from "@/components/ui/Button";
import { getBrandLogos, getSanityTestimonials } from "@/sanity/lib/api";

const SITE_URL = "https://www.arclinkedge.com";
const PAGE_URL = `${SITE_URL}/careers`;

export const metadata: Metadata = {
  title: "Careers | Developer & UI UX Designer Roles",
  description:
    "Explore careers at Arclink Edge in New York, London, Dubai & Bangalore. Join our web development, mobile app, SaaS, UI/UX design, SEO, cloud and AI automation team.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Careers at Arclink Edge",
    description:
      "Join Arclink Edge as a developer, UI/UX designer, product thinker, marketer or operations teammate.",
    siteName: "Arclink Edge",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Arclink Edge",
    description:
      "Explore developer, designer, product, SEO and operations careers at Arclink Edge.",
    images: ["/opengraph-image"],
  },
};

const roles = [
  {
    title: "Frontend / Next.js Developer",
    description: "Build high-performance web products with Next.js, React, and TypeScript. Focus on performance, accessibility, and clean code.",
    tags: ["React", "Next.js", "TypeScript", "Performance"],
  },
  {
    title: "Flutter / Mobile App Developer",
    description: "Craft premium native-feeling mobile experiences for iOS and Android using Flutter and modern app architectures.",
    tags: ["Flutter", "iOS", "Android", "APIs"],
  },
  {
    title: "UI/UX Product Designer",
    description: "Design intuitive SaaS dashboards and digital product interfaces. Focus on design systems, user flows, and prototypes.",
    tags: ["Figma", "Design Systems", "SaaS UX", "Prototypes"],
  },
  {
    title: "SEO & Growth Strategist",
    description: "Drive search visibility and user growth through technical SEO, content clusters, and conversion rate optimization.",
    tags: ["Technical SEO", "Content", "Analytics", "CRO"],
  },
];

const values = [
  "Work on real web, mobile, SaaS, AI, e-commerce and dashboard products.",
  "Care about UI details, performance, accessibility and technical SEO.",
  "Own outcomes, communicate clearly and keep learning from every launch.",
  "Build with modern tools without ignoring fundamentals.",
];

const faqs = [
  {
    question: "Do you offer remote roles?",
    answer: "Yes, we support remote and hybrid work models depending on the specific role and team requirements."
  },
  {
    question: "What is the interview process like?",
    answer: "Our process typically involves an initial screening, a technical or portfolio review, and a final cultural fit interview with the core team."
  },
  {
    question: "Are there opportunities for junior developers?",
    answer: "We primarily look for experienced professionals, but exceptional junior talent with a strong portfolio and understanding of our core tech stack (Next.js, Flutter) are always welcome to apply."
  },
  {
    question: "What kind of projects will I work on?",
    answer: "You'll work on high-performance digital products for global B2B brands and ambitious startups across SaaS, AI, and E-commerce industries."
  },
  {
    question: "How do you handle team collaboration?",
    answer: "We use a combination of Slack for real-time chat, Jira for project management, and Zoom/Google Meet for weekly syncs and project deep-dives."
  },
  {
    question: "How do I apply?",
    answer: "You can apply directly via email to hello@arclinkedge.com with your resume, portfolio, and a brief introduction."
  }
];

export default async function CareersPage() {
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
        { "@type": "ListItem", position: 2, name: "Careers", item: PAGE_URL },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Careers at Arclink Edge",
      url: PAGE_URL,
      description:
        "Careers page for developer, UI/UX designer, SEO, growth and operations opportunities at Arclink Edge.",
      publisher: { "@id": `${SITE_URL}/#organization`, name: "Arclink Edge" },
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
          <div className="relative z-10 mx-auto max-w-[1600px]">
            <SectionLabel>Careers</SectionLabel>
            <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_0.42fr] lg:items-end">
              <div>
                <h1
                  className="max-w-6xl text-5xl font-medium leading-[1.05] tracking-[-0.04em] md:leading-[0.96] md:tracking-[-0.075em] md:text-7xl lg:text-8xl"
                  style={{ fontFamily: "var(--font-inter-tight)" }}
                >
                  Build digital products people remember.
                </h1>
                <div className="mt-10 flex flex-wrap gap-3">
                  <PrimaryButton href="mailto:hello@arclinkedge.com?subject=Career%20at%20Arclink%20Edge" icon={ArrowUpRight}>Apply Now</PrimaryButton>
                  <SecondaryButton href="/about" icon={ArrowUpRight}>Meet the Team</SecondaryButton>
                </div>
              </div>
              <p className="max-w-xl text-base leading-relaxed text-white/62 md:text-lg">
                We are always open to sharp developers, UI/UX designers, product thinkers, SEO strategists and builders who want to work on premium digital products.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-[1600px]">
            <div className="mb-12 max-w-4xl">
              <SectionLabel>Open Talent Areas</SectionLabel>
              <h2 className="mt-4 text-4xl font-medium leading-none md:text-6xl tracking-[-0.02em] md:tracking-[-0.065em]" style={{ fontFamily: "var(--font-inter-tight)" }}>
                Roles we keep an eye out for.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {roles.map((role) => (
                <Link
                  key={role.title}
                  href="mailto:hello@arclinkedge.com?subject=Career%20at%20Arclink%20Edge"
                  className="group relative flex min-h-[300px] flex-col justify-between overflow-hidden border border-white/[0.06] bg-[#0A0A0F]/40 p-8 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.04]"
                >
                  {/* Hover Glow */}
                  <div className="absolute -right-20 -top-20 h-40 w-40 bg-white/0 blur-[60px] transition-colors duration-500 group-hover:bg-white/10" />

                  <div className="relative z-10">
                    <h3 className="text-3xl font-medium text-white md:text-4xl tracking-[-0.015em] md:tracking-[-0.055em]" style={{ fontFamily: "var(--font-inter-tight)" }}>
                      {role.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-white/52 group-hover:text-white/70 transition-colors duration-500">
                      {role.description}
                    </p>
                    <div className="mt-8 flex flex-wrap gap-2">
                      {role.tags.map((tag) => (
                        <span key={tag} className="border border-white/[0.06] bg-black/30 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white/40">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="relative z-10 mt-10 border-t border-white/[0.06] pt-6">
                    <div className="group/btn relative inline-flex overflow-hidden text-sm font-medium transition-colors duration-200" style={{ color: "rgba(245,245,247,0.72)", fontFamily: "var(--font-inter-tight)" }}>
                      <span className="flex items-center justify-center gap-2 transition-transform duration-300 ease-out group-hover:-translate-y-full">
                        Apply for this role <ArrowUpRight size={14} />
                      </span>
                      <span
                        className="absolute inset-0 flex translate-y-full items-center justify-center gap-2 transition-transform duration-300 ease-out group-hover:translate-y-0"
                        style={{ color: "#D0F504" }}
                      >
                        Apply for this role <ArrowUpRight size={14} />
                      </span>
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
            <section key="careers-values" className="px-6 py-20 lg:px-12 lg:py-28">
              <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[0.82fr_1.18fr]">
                <div>
                  <SectionLabel>Culture</SectionLabel>
                  <h2 className="mt-4 text-4xl font-medium leading-none md:text-6xl tracking-[-0.02em] md:tracking-[-0.065em]" style={{ fontFamily: "var(--font-inter-tight)" }}>
                    Small team energy, serious product standards.
                  </h2>
                </div>
                <div className="grid gap-3">
                  {values.map((item) => (
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
          <section key="careers-hire-links" className="px-6 py-12 lg:px-12 lg:py-20 relative overflow-hidden">
            <div aria-hidden="true" className="absolute inset-0 bg-[#0A0A0F]/20" />
            <div className="mx-auto grid max-w-[1600px] gap-6 md:grid-cols-2 relative z-10">
              {[
                { 
                  title: "Looking to hire dedicated developers?", 
                  href: "/hire#web-developers", 
                  label: "Hire developers",
                  icon: Code2,
                  desc: "Scale your engineering team with pre-vetted React, Next.js, Node.js and Flutter experts ready to ship.",
                },
                { 
                  title: "Looking to hire expert designers?", 
                  href: "/hire#ui-ux-designers", 
                  label: "Hire designers",
                  icon: Palette,
                  desc: "Elevate your product experience with top-tier SaaS, Fintech, and eCommerce UI/UX product designers.",
                },
              ].map((item) => (
                <div 
                  key={item.title} 
                  className="group relative flex flex-col justify-between overflow-hidden border border-white/[0.06] bg-white/[0.02] p-8 lg:p-12 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.04]"
                >
                  <a href={item.href} className="absolute inset-0 z-0" aria-label={`Go to ${item.title}`} />
                  
                  {/* Hover Glow */}
                  <div className="absolute -right-20 -top-20 h-40 w-40 bg-white/0 blur-[60px] transition-colors duration-500 group-hover:bg-white/10 pointer-events-none" />
                  
                  <div className="relative z-10 pointer-events-none">
                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-none border border-white/[0.08] bg-black/50 text-white group-hover:text-[#D0F504] group-hover:border-[#D0F504]/30 transition-colors duration-500">
                      <item.icon size={20} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-3xl font-medium text-white md:text-4xl tracking-[-0.015em] md:tracking-[-0.045em]" style={{ fontFamily: "var(--font-inter-tight)" }}>
                      {item.title}
                    </h3>
                    <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50 group-hover:text-white/70 transition-colors duration-500">
                      {item.desc}
                    </p>
                  </div>
                  
                  <div className="relative z-10 mt-12 border-t border-white/[0.06] pt-6 flex">
                    <TextButton 
                      href={item.href} 
                      icon={ArrowUpRight} 
                      className="text-xs uppercase tracking-widest relative z-20"
                    >
                      {item.label}
                    </TextButton>
                  </div>
                </div>
              ))}
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
