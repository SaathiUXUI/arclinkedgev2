"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import SectionLabel from "@/components/ui/SectionLabel";
import BackToTop from "@/components/ui/BackToTop";
import Contact from "@/components/sections/Contact";

const CalScheduler = dynamic(() => import("@/components/ui/CalScheduler"), {
  ssr: false,
  loading: () => (
    <div className="flex min-h-[600px] w-full items-center justify-center bg-white/[0.02] lg:min-h-[700px]">
      <p className="text-white/20 type-loading-text">Loading scheduler...</p>
    </div>
  ),
});

export default function ContactContent() {
  return (
    <main id="main-content" className="bg-black text-[#F5F5F7] min-h-screen overflow-x-clip selection:bg-[#0052FF] selection:text-white">
      <Navbar />

      <section className="relative px-6 pt-32 pb-20 lg:px-12 lg:pt-48 lg:pb-32">
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_bottom,#000_0%,#030713_34%,#071436_64%,#000_100%)] opacity-50" />

        <div className="relative z-10 mx-auto max-w-[1600px]">
          <SectionLabel>Connect With Us</SectionLabel>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mt-8 mb-16 lg:mb-20 gap-8">
            <h1 className="type-contact-page-title">Book a call.</h1>
            <p className="text-white/50 max-w-md type-contact-page-intro">
              Pick a time that works for you. Our fully remote model keeps your budget focused on the product—not physical-office overhead.
            </p>
          </div>

          <div className="relative">
            <div className="w-full min-h-[600px] lg:min-h-[700px] overflow-hidden">
              <CalScheduler />
            </div>
          </div>
        </div>
      </section>

      <Contact showScheduler={false} />

      <Footer />
      <BackToTop />
    </main>
  );
}
