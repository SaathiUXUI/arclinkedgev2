import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Insights & Strategy Blog | Arclink Edge",
  description: "Read the latest thoughts on SaaS development, UI/UX design, and digital transformation from the experts at Arclink Edge.",
  keywords: ["blog", "SaaS strategy", "UI/UX design", "web development insights", "tech agency blog"],
  alternates: { canonical: "https://arclinkedge.com/blog" },
};

import { getBrandLogos, getSanityBlogs, getSanityTestimonials } from "@/sanity/lib/api";

export default async function BlogListingPage() {
  const [sanityLogos, sanityBlogs, sanityTestimonials] = await Promise.all([
    getBrandLogos(),
    getSanityBlogs(),
    getSanityTestimonials(),
  ]);
  return <BlogContent sanityLogos={sanityLogos} sanityBlogs={sanityBlogs} sanityTestimonials={sanityTestimonials} />;
}
