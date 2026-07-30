"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import Cal, { getCalApi } from "@calcom/embed-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import SectionLabel from "@/components/ui/SectionLabel";
import BackToTop from "@/components/ui/BackToTop";
import CookieBanner from "@/components/ui/CookieBanner";
import Contact from "@/components/sections/Contact";
import { useEffect } from "react";

export default function ContactContent() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
        styles: { branding: { brandColor: "#0052FF" } },
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, []);

  return (
    <main id="main-content" className="bg-black text-[#F5F5F7] min-h-screen overflow-x-clip selection:bg-[#0052FF] selection:text-white">
      <Navbar />

      {/* Hero Section with Cal.com */}
      <section className="relative px-6 pt-32 pb-20 lg:px-12 lg:pt-48 lg:pb-32">
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_bottom,#000_0%,#030713_34%,#071436_64%,#000_100%)] opacity-50" />

        <div className="relative z-10 mx-auto max-w-[1600px]">
          <SectionLabel>Connect With Us</SectionLabel>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mt-8 mb-16 lg:mb-20 gap-8">
            <div>
              <h1
                className="text-6xl md:text-7xl lg:text-9xl font-medium"
                style={{ fontFamily: "var(--font-inter-tight)", letterSpacing: "-0.05em", lineHeight: 1 }}
              >
                Book a call.
              </h1>
            </div>
            <div>
              <p className="text-xl md:text-2xl text-white/50 max-w-md leading-relaxed" style={{ letterSpacing: "-0.02em" }}>
                Skip the back-and-forth. Pick a time that works for you and let&apos;s discuss how Arclink Edge can accelerate your digital growth.
              </p>
            </div>
          </div>

          {/* Cal.com Embed - Full Width Below Heading */}
          <div className="relative">
            <div className="w-full min-h-[600px] lg:min-h-[700px] overflow-hidden">
              <Cal
                calLink="arclinkedge/project-scope-call"
                style={{ width: "100%", height: "100%", overflow: "scroll" }}
                config={{ layout: "month_view", theme: "dark" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="px-6 py-24 lg:px-12 lg:py-40 relative z-10 border-t border-white/5 bg-white/[0.01]">
        <div className="mx-auto max-w-[1600px] grid lg:grid-cols-[0.4fr_1fr] gap-20">
          <div>
            <SectionLabel>Inquiry Form</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-medium mt-6 mb-8 tracking-[-0.02em] md:tracking-[-0.04em]" style={{ fontFamily: "var(--font-inter-tight)" }}>
              Prefer to send <br /> a message?
            </h2>
            <p className="text-white/40 max-w-sm leading-relaxed mb-12">
              Fill out the form and our team will get back to you within 24 hours with a tailored response to your project needs.
            </p>

            <div className="space-y-6 pt-8 border-t border-white/10">
              <a href="mailto:hello@arclinkedge.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 flex items-center justify-center border border-white/10 group-hover:bg-white group-hover:text-black transition-all">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-1 font-bold">Email Us</p>
                  <p className="text-lg font-medium">hello@arclinkedge.com</p>
                </div>
              </a>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-white/10 group-hover:bg-white group-hover:text-black transition-all">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-1 font-bold">Call Us</p>
                  <div className="flex flex-col gap-2">
                    <a href="tel:+12164184653" className="text-lg font-medium hover:text-[#0052FF] transition-colors flex items-center gap-2">
                      <img src="/flags/us.svg" alt="US Flag" className="w-5 h-3.5 object-cover rounded-[1px]" />
                      +1 (216) 418-4653
                    </a>
                    <a href="tel:+919824838067" className="text-lg font-medium hover:text-[#0052FF] transition-colors flex items-center gap-2">
                      <img src="/flags/in.svg" alt="India Flag" className="w-5 h-3.5 object-cover rounded-[1px]" />
                      +91 98248 38067
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-white/10 group-hover:bg-white group-hover:text-black transition-all">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-1 font-bold">Office Address</p>
                  <p className="text-lg font-medium leading-relaxed">
                    New York <span className="text-white/30 text-xs px-1 inline-block align-middle">•</span> London <span className="text-white/30 text-xs px-1 inline-block align-middle">•</span> Dubai <span className="text-white/30 text-xs px-1 inline-block align-middle">•</span> Bangalore <span className="text-white/30 text-xs px-1 inline-block align-middle">•</span> Ahmedabad
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white/[0.02] border border-white/5 p-8 md:p-12">
            <Contact isInternalPage={true} />
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
      <CookieBanner />
    </main>
  );
}
