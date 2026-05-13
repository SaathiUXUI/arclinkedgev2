import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Insights & Strategy Blog",
  description: "Read the latest thoughts on SaaS development, UI/UX design, and digital transformation from the experts at Arclink Edge.",
  keywords: ["blog", "SaaS strategy", "UI/UX design", "web development insights", "tech agency blog"],
  alternates: { canonical: "https://www.arclinkedge.com/blog" },
  openGraph: {
    type: "website",
    url: "https://www.arclinkedge.com/blog",
    title: "Arclink Edge Insights & Strategy Blog",
    description: "Read SaaS, UI/UX, web development and product strategy insights from the Arclink Edge team.",
    siteName: "Arclink Edge",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arclink Edge Insights & Strategy Blog",
    description: "SaaS, UI/UX, web development and product strategy insights from Arclink Edge.",
    images: ["/opengraph-image"],
  },
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
