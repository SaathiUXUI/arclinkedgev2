import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us | Arclink Edge - Elite IT Agency in Ahmedabad",
  description: "Learn about Arclink Edge, a premium IT agency in Ahmedabad specializing in high-performance Web, Mobile & SaaS solutions. Meet our founder and elite team of engineering experts.",
  keywords: ["about arclink edge", "founder sathi", "IT agency ahmedabad history", "software engineering team", "boutique agency india"],
  alternates: { canonical: "https://arclinkedge.com/about" },
};

import { getBrandLogos, getSanityTestimonials, getTeamMembers, getProjectImagesByCategory } from "@/sanity/lib/api";

export default async function AboutPage() {
  const [sanityLogos, sanityTestimonials, sanityTeam, sanityImages] = await Promise.all([
    getBrandLogos(),
    getSanityTestimonials(),
    getTeamMembers(),
    getProjectImagesByCategory(),
  ]);
  return (
    <AboutContent 
      sanityLogos={sanityLogos} 
      sanityTestimonials={sanityTestimonials} 
      sanityTeam={sanityTeam}
      sanityImages={sanityImages}
    />
  );
}
