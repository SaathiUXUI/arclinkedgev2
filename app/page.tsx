import dynamic from "next/dynamic";
import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";

// Dynamic imports for below-the-fold components
const Services = dynamic(() => import("@/components/sections/Services"));
const AboutPreview = dynamic(() => import("@/components/sections/AboutPreview"));
const CaseStudies = dynamic(() => import("@/components/sections/CaseStudies"));
const HowWeWork = dynamic(() => import("@/components/sections/HowWeWork"));
const TechStack = dynamic(() => import("@/components/sections/TechStack"));
const ImageCarousel = dynamic(() => import("@/components/sections/ImageCarousel"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));
const Blog = dynamic(() => import("@/components/sections/Blog"));
const CTASection = dynamic(() => import("@/components/sections/CTASection"));
const Contact = dynamic(() => import("@/components/sections/Contact"));
const Footer = dynamic(() => import("@/components/sections/Footer"));
const BackToTop = dynamic(() => import("@/components/ui/BackToTop"));
const CookieBanner = dynamic(() => import("@/components/ui/CookieBanner"));

export const metadata: Metadata = {
  title: {
    absolute: "Arclink Edge - Fully Remote IT Agency | Web, Mobile & SaaS Development",
  },
  description:
    "Arclink Edge is a fully remote premium IT agency serving clients worldwide. No physical-office overhead is added to project bills, keeping budgets focused on web, mobile, SaaS, and UI/UX delivery.",
  alternates: { canonical: "https://www.arclinkedge.com" },
};

import { getProjectImagesByCategory, getBrandLogos, getFirstImagesPerCategory, getSanityTestimonials, getSanityBlogs, getProjects, getTeamMembers } from "@/sanity/lib/api";

export default async function HomePage() {
  const [sanityImages, sanityLogos, categoryImagesMap, sanityTestimonials, sanityBlogs, sanityProjects, sanityTeam] = await Promise.all([
    getProjectImagesByCategory(),
    getBrandLogos(),
    getFirstImagesPerCategory(),
    getSanityTestimonials(),
    getSanityBlogs(),
    getProjects(),
    getTeamMembers(),
  ]);

  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero sanityLogos={sanityLogos} />
        <Stats />
        <Services categoryImagesMap={categoryImagesMap} />
        <ImageCarousel sanityImages={sanityImages} />
        <HowWeWork />
        <CaseStudies />
        <TechStack />
        <Testimonials sanityTestimonials={sanityTestimonials} />
        <Blog sanityBlogs={sanityBlogs} />
        <AboutPreview sanityTeam={sanityTeam} />
        <Contact />
        <CTASection />
      </main>
      <Footer />
      <BackToTop />
      <CookieBanner />
    </>
  );
}
