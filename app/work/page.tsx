import type { Metadata } from "next";
import WorkContent from "./WorkContent";

export const metadata: Metadata = {
  title: "Our Work & Case Studies | Arclink Edge",
  description: "Explore our portfolio of premium web applications, mobile apps, and UI/UX design case studies. See how we drive business growth through engineering.",
  keywords: [
    "portfolio",
    "case studies",
    "web development projects",
    "UI/UX portfolio",
    "SaaS case studies",
    "Arclink Edge work"
  ],
  alternates: { canonical: "https://arclinkedge.com/work" },
};

import { getBrandLogos, getSanityTestimonials, getProjects } from "@/sanity/lib/api";

export default async function WorkPage() {
  const [sanityLogos, sanityTestimonials, sanityProjects] = await Promise.all([
    getBrandLogos(),
    getSanityTestimonials(),
    getProjects(),
  ]);
  return <WorkContent sanityLogos={sanityLogos} sanityTestimonials={sanityTestimonials} sanityProjects={sanityProjects} />;
}
