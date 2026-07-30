import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import AboutPreview from "@/components/sections/AboutPreview";
import CaseStudies from "@/components/sections/CaseStudies";
import HowWeWork from "@/components/sections/HowWeWork";
import TechStack from "@/components/sections/TechStack";
import ImageCarousel from "@/components/sections/ImageCarousel";
import Testimonials from "@/components/sections/Testimonials";
import Blog from "@/components/sections/Blog";
import CTASection from "@/components/sections/CTASection";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import BackToTop from "@/components/ui/BackToTop";

export const metadata: Metadata = {
  title: {
    absolute: "Arclink Edge - Fully Remote IT Agency | Web, Mobile & SaaS Development",
  },
  description:
    "Arclink Edge is a fully remote premium IT agency serving clients worldwide. No physical-office overhead is added to project bills, keeping budgets focused on web, mobile, SaaS, and UI/UX delivery.",
  alternates: { canonical: "https://www.arclinkedge.com" },
};

import { getProjectImagesByCategory, getBrandLogos, getFirstImagesPerCategory, getSanityTestimonials, getSanityBlogs, getTeamMembers } from "@/sanity/lib/api";

export default async function HomePage() {
  const [sanityImages, sanityLogos, categoryImagesMap, sanityTestimonials, sanityBlogs, sanityTeam] = await Promise.all([
    getProjectImagesByCategory(),
    getBrandLogos(),
    getFirstImagesPerCategory(),
    getSanityTestimonials(),
    getSanityBlogs(),
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
    </>
  );
}
