import type { Metadata } from "next";
import WorkContent from "./WorkContent";

export const metadata: Metadata = {
  title: "Our Work & Case Studies",
  description: "Explore our portfolio of premium web applications, mobile apps, and UI/UX design case studies. See how we drive business growth through engineering.",
  keywords: [
    "portfolio",
    "case studies",
    "web development projects",
    "UI/UX portfolio",
    "SaaS case studies",
    "Arclink Edge work"
  ],
  alternates: { canonical: "https://www.arclinkedge.com/work" },
  openGraph: {
    type: "website",
    url: "https://www.arclinkedge.com/work",
    title: "Arclink Edge Work & Case Studies",
    description: "Explore premium web, mobile, SaaS and UI/UX case studies built by Arclink Edge.",
    siteName: "Arclink Edge",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arclink Edge Work & Case Studies",
    description: "Explore premium digital product case studies built by Arclink Edge.",
    images: ["/opengraph-image"],
  },
};

import { getBrandLogos, getSanityTestimonials, getProjects } from "@/sanity/lib/api";

export default async function WorkPage() {
  const [sanityLogos, sanityTestimonials, sanityProjects] = await Promise.all([
    getBrandLogos(),
    getSanityTestimonials(),
    getProjects(),
  ]);
  return <WorkContent sanityLogos={sanityLogos} sanityTestimonials={sanityTestimonials} />;
}
