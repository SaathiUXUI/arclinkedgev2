import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import BackToTop from "@/components/ui/BackToTop";
import CookieBanner from "@/components/ui/CookieBanner";
import SectionLabel from "@/components/ui/SectionLabel";
import { services } from "@/lib/data";

const PAGE_URL = "https://www.arclinkedge.com/services";

export const metadata: Metadata = {
  title: "IT Services in New York, London, Dubai & Bangalore for Web, Mobile & SaaS Products",
  description:
    "Explore Arclink Edge services in New York, London, Dubai & Bangalore, including web development, mobile app development, UI/UX design, SaaS development, e-commerce, cloud, APIs, AI automation, SEO and hireable specialists.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Arclink Edge IT Services in New York, London, Dubai & Bangalore",
    description:
      "Web, mobile, SaaS, UI/UX, e-commerce, cloud, API, AI automation, SEO and hireable specialists for growing B2B brands.",
    siteName: "Arclink Edge",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arclink Edge IT Services in New York, London, Dubai & Bangalore",
    description:
      "Explore Arclink Edge web, mobile, SaaS, UI/UX, e-commerce, cloud, API, AI automation, SEO and hire options.",
    images: ["/opengraph-image"],
  },
};

const hireOptions = [
  {
    title: "Hire Web Developers",
    description: "React, Next.js, TypeScript and Tailwind developers for SEO-ready websites, dashboards and custom web apps.",
    href: "/hire#web-developers",
    gradient: "from-[#0052FF]/28 via-white/[0.04] to-transparent",
  },
  {
    title: "Hire Mobile App Developers",
    description: "Flutter and React Native developers for iOS, Android, onboarding, APIs and scalable mobile app experiences.",
    href: "/hire#mobile-app-developers",
    gradient: "from-[#22C55E]/22 via-white/[0.04] to-transparent",
  },
  {
    title: "Hire UI/UX Designers",
    description: "Figma product designers for SaaS dashboards, mobile app UX, fintech UI, e-commerce UX and design systems.",
    href: "/hire#ui-ux-designers",
    gradient: "from-[#D0F504]/18 via-white/[0.04] to-transparent",
  },
  {
    title: "Hire SaaS Developers",
    description: "Product engineers for MVPs, billing, auth, dashboards, tenant logic, database planning and SaaS architecture.",
    href: "/hire#saas-developers",
    gradient: "from-[#7C3AED]/24 via-white/[0.04] to-transparent",
  },
  {
    title: "Hire E-commerce Developers",
    description: "Storefront, checkout, payment, product discovery, conversion optimization and technical SEO specialists.",
    href: "/hire#ecommerce-developers",
    gradient: "from-[#F97316]/22 via-white/[0.04] to-transparent",
  },
  {
    title: "Hire DevOps Engineers",
    description: "AWS, Docker, CI/CD, CDN caching, monitoring, deployment security and production infrastructure support.",
    href: "/hire#devops-engineers",
    gradient: "from-[#38BDF8]/22 via-white/[0.04] to-transparent",
  },
  {
    title: "Hire API Developers",
    description: "REST, GraphQL, payment gateways, CRM integrations, secure backend workflows and automation connections.",
    href: "/hire#api-developers",
    gradient: "from-[#06B6D4]/20 via-white/[0.04] to-transparent",
  },
  {
    title: "Hire AI Automation Specialists",
    description: "LLM tools, chatbots, internal workflows, support automation, lead qualification and productivity systems.",
    href: "/hire#ai-automation-specialists",
    gradient: "from-[#A855F7]/22 via-white/[0.04] to-transparent",
  },
  {
    title: "Hire SEO & Growth Specialists",
    description: "Technical SEO, metadata, schema, content clusters, Search Console fixes, analytics and CRO support.",
    href: "/hire#seo-growth-specialists",
    gradient: "from-[#F43F5E]/20 via-white/[0.04] to-transparent",
  },
];

export default function ServicesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.arclinkedge.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: PAGE_URL },
    ],
  };

  return (
    <main id="main-content" className="bg-black text-[#F5F5F7] min-h-screen overflow-x-clip selection:bg-[#0052FF] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />

      <section className="relative overflow-hidden px-6 pb-20 pt-32 lg:px-12 lg:pb-28 lg:pt-44">
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_bottom,#000_0%,#030713_34%,#071436_64%,#000_100%)]" />
        <div aria-hidden="true" className="absolute left-[-18%] top-[18%] h-[34rem] w-[34rem] rounded-full bg-[#0052FF]/22 blur-[160px]" />
        <div aria-hidden="true" className="absolute right-[-18%] bottom-[-12%] h-[28rem] w-[28rem] rounded-full bg-[#D0F504]/10 blur-[150px]" />

        <div className="relative z-10 mx-auto max-w-[1600px]">
          <SectionLabel>Services</SectionLabel>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_0.42fr] lg:items-end">
            <h1
              className="max-w-5xl text-5xl font-medium leading-[1.05] tracking-[-0.04em] md:leading-[0.96] md:tracking-[-0.075em] md:text-7xl lg:text-8xl"
              style={{ fontFamily: "var(--font-inter-tight)" }}
            >
              IT services in New York, London, Dubai & Bangalore for web, mobile and SaaS growth.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-white/62 md:text-lg">
              Strategy, design, development, automation and growth support for teams that need a polished digital product, a reliable technical partner, or hireable specialists.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24 lg:pb-36">
        <div className="grid grid-cols-1 border-t border-white/10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link
              key={service.id}
              href={service.href}
              className="group relative min-h-[260px] border-b border-white/10 p-6 transition-colors duration-300 hover:bg-white/[0.03] md:border-r md:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0 lg:p-9"
            >
              <div className="flex h-full flex-col justify-between gap-10">
                <div className="flex items-start justify-between gap-5">
                  <span className="text-sm font-medium text-white/35">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <ArrowUpRight className="text-white/45 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#D0F504]" size={22} />
                </div>
                <div>
                  <h2
                    className="text-3xl font-medium text-white md:text-4xl tracking-[-0.02em] md:tracking-[-0.055em]"
                    style={{ fontFamily: "var(--font-inter-tight)" }}
                  >
                    {service.title}
                  </h2>
                  <p className="mt-5 max-w-md text-sm leading-relaxed text-white/58">
                    {service.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-12 lg:pb-36">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <SectionLabel>Hire</SectionLabel>
              <h2 className="mt-4 text-4xl font-medium leading-none md:text-6xl tracking-[-0.02em] md:tracking-[-0.065em]" style={{ fontFamily: "var(--font-inter-tight)" }}>
                Hire specialists from the same service stack.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-white/52 lg:justify-self-end">
              Choose a dedicated specialist or a small team across research, UI/UX, frontend, backend, database, cloud, SEO, performance, security, testing and post-launch growth.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {hireOptions.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative min-h-[270px] overflow-hidden border border-white/[0.07] bg-gradient-to-br ${item.gradient} p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 lg:p-8`}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/0 to-transparent transition-all duration-500 group-hover:via-white/80" />
                <div className="absolute -right-14 -top-14 h-44 w-44 rounded-full bg-white/0 blur-[70px] transition-colors duration-500 group-hover:bg-white/12" />
                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-start justify-between gap-5">
                    <span className="text-sm font-medium text-white/42">{String(index + 1).padStart(2, "0")}</span>
                    <ArrowUpRight className="text-white/50 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white" size={22} />
                  </div>
                  <div className="mt-auto pt-12">
                    <h3 className="text-2xl font-medium text-white md:text-3xl tracking-[-0.015em] md:tracking-[-0.05em]" style={{ fontFamily: "var(--font-inter-tight)" }}>
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

      <Footer />
      <BackToTop />
      <CookieBanner />
    </main>
  );
}
