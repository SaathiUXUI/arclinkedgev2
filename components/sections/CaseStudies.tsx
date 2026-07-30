import { ArrowUpRight } from "lucide-react";
import type { Image as SanityImage } from "sanity";
import { caseStudies } from "@/lib/data";
import HeadingReveal from "@/components/ui/HeadingReveal";
import { SecondaryNavButton } from "@/components/ui/Button";
import CaseStudyCard from "@/components/ui/CaseStudyCard";
import { urlForImage } from "@/sanity/lib/image";

interface SanityProject {
  _id: string;
  title: string;
  categories?: string[];
  images?: SanityImage[];
  slug?: { current?: string };
}

export default function CaseStudies({ sanityProjects }: { sanityProjects?: SanityProject[] }) {
  const displayStudies = (sanityProjects && sanityProjects.length > 0) 
    ? sanityProjects.map(p => ({
        id: p._id,
        title: p.title,
        client: "Confidential Client",
        categories: p.categories?.map((cat: string) => {
          const catMap: Record<string, string> = {
            'web-development': 'Web App',
            'mobile-app-development': 'Mobile App',
            'ui-ux-design': 'UI/UX',
            'saas-development': 'SaaS',
            'ecommerce': 'E-commerce',
            'ai-automation': 'AI & Automation'
          };
          return catMap[cat] || cat;
        }) || ["Product"],
        metric: "100%",
        metricLabel: "Performance",
        image: p.images?.[0] ? urlForImage(p.images[0])?.url() || "/projects/novira.jpg" : "/projects/novira.jpg",
        href: `/work/${p.slug?.current || p._id}`
      }))
    : caseStudies;

  return (
    <section
      id="case-studies"
      className="defer-render relative overflow-hidden bg-[#000000] py-24 lg:py-32"
      aria-labelledby="case-studies-heading"
    >
      {/* Background glowing ellipses for the section */}
      <div
        className="absolute top-[20%] -left-[15%] w-[40vw] h-[60vh] rounded-full pointer-events-none opacity-[0.15]"
        style={{ backgroundColor: "#0052FF", filter: "blur(150px)", zIndex: 0 }}
      />
      <div
        className="absolute bottom-[10%] -right-[15%] w-[40vw] h-[70vh] rounded-full pointer-events-none opacity-[0.15]"
        style={{ backgroundColor: "#0052FF", filter: "blur(160px)", zIndex: 0 }}
      />

      {/* ── Content ── */}
      <div
        className="relative z-10 mx-auto max-w-[1600px]"
        style={{ paddingLeft: "clamp(16px,5vw,80px)", paddingRight: "clamp(16px,5vw,80px)" }}
      >
        {/* Header */}
        <div className="mb-16">
          <div>
            <HeadingReveal className="type-legacy-092 type-landing-section-heading"
              id="case-studies-heading"
              style={{ color: "#F5F5F7" }}
            >
              Selected works
            </HeadingReveal>
            <p
              className="mt-4 max-w-lg type-legacy-094"
              style={{ color: "rgba(245,245,247,0.52)" }}
            >
              A curated showcase of products we&apos;ve designed, built, and launched.
            </p>
          </div>
        </div>

        {/* 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {displayStudies.slice(0, 4).map((study, i) => (
            <CaseStudyCard key={study.id} study={study} i={i} />
          ))}
        </div>

        <div className="mt-12 flex justify-center lg:mt-16">
          <SecondaryNavButton href="/work" icon={ArrowUpRight}>
            View all projects
          </SecondaryNavButton>
        </div>
      </div>
    </section>
  );
}
