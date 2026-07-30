import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us — Fully Remote Global IT Agency",
  description: "Learn about Arclink Edge, a fully remote premium IT agency serving clients in New York, London, Dubai, Bangalore, Ahmedabad, and worldwide without passing physical-office overhead into project bills.",
  keywords: ["about arclink edge", "founder saathi rathod", "IT agency history", "software engineering team", "boutique agency india"],
  alternates: { canonical: "https://www.arclinkedge.com/about" },
  openGraph: {
    type: "website",
    url: "https://www.arclinkedge.com/about",
    title: "About Arclink Edge — Premium Digital Product Agency",
    description: "Discover our story, meet our founder, and see how we build high-performance digital products for B2B brands globally.",
    siteName: "Arclink Edge",
    images: [{ url: "https://www.arclinkedge.com/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Arclink Edge — Fully Remote Global IT Agency",
    description: "Meet the Arclink Edge team building premium digital products for ambitious brands.",
    images: ["/opengraph-image"],
  },
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
