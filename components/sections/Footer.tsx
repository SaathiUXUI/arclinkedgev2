"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MoveUpRight } from "lucide-react";
import { services as servicesData } from "@/lib/data";
import Image from "next/image";
import { REMOTE_WORK_LABEL, REMOTE_WORK_SHORT } from "@/lib/company";

import { NavButton, SecondaryNavButton } from "@/components/ui/Button";

const footerLinks = {
  explore: [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Process", href: "/process" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
  hire: [
    { label: "Web Developers", href: "/hire/web-developer" },
    { label: "Mobile App Developers", href: "/hire/mobile-app-developer" },
    { label: "UI/UX Designers", href: "/hire/ui-ux-designer" },
    { label: "SaaS Developers", href: "/hire/saas-developer" },
    { label: "E-commerce Developers", href: "/hire/ecommerce-developer" },
    { label: "DevOps Engineers", href: "/hire/devops-engineer" },
    { label: "API Developers", href: "/hire/api-developer" },
    { label: "AI Specialists", href: "/hire/ai-specialist" },
    { label: "SEO Specialists", href: "/hire/seo-specialist" },
  ],
};

const socials = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/arclinkedge",
    icon: "/social-media/linkedin.svg",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/arclinkedge",
    icon: "/social-media/instagram.svg",
  },
  {
    label: "Behance",
    href: "https://behance.net/arclinkedge",
    icon: "/social-media/behance.svg",
  },
  {
    label: "Dribbble",
    href: "https://dribbble.com/arclinkedge",
    icon: "/social-media/dribbble.svg",
  },
];

export default function Footer() {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  return (
    <footer className="bg-[#000000] overflow-hidden" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      <div className="w-full px-0">
        {/* Main Split Layout */}
        <div className="flex flex-col lg:flex-row gap-0 mb-0">

          {/* Left Block - Brand Card */}
          <div
            className="lg:w-[32%] px-4 py-10 lg:p-12 flex flex-col justify-between min-h-[480px] relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #0052FF 0%, #1A73FF 100%)",
              borderRadius: 0
            }}
          >
            {/* Finer Dark Noise Texture Layer */}
            <div
              className="absolute inset-0 opacity-[0.25] pointer-events-none mix-blend-multiply z-0"
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }}
            />
            <div>
              <Link href="/" className="inline-flex items-center gap-3 mb-8 group">
                <Image
                  src="/logo/aewhite.png"
                  alt="Arclink Edge Logo"
                  width={40}
                  height={40}
                  className="h-8 w-auto object-contain"
                />
                <span className="text-3xl font-bold tracking-tight text-white" style={{ fontFamily: "var(--font-inter-tight)" }}>
                  Arclink Edge
                </span>
              </Link>
              <p className="text-xl md:text-2xl text-white/90 leading-tight font-medium max-w-xs" style={{ fontFamily: "var(--font-inter-tight)", letterSpacing: "-0.02em" }}>
                Crafting premium digital products that scale, convert, and inspire.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] mb-4 font-bold" style={{ fontFamily: "var(--font-inter-tight)" }}>Stay in touch!</p>
                <div className="flex items-center gap-4">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 border border-white/10 flex items-center justify-center bg-black hover:bg-white transition-all duration-300 group"
                      style={{ borderRadius: 0 }}
                      onMouseEnter={() => setHoveredSocial(social.label)}
                      onMouseLeave={() => setHoveredSocial(null)}
                    >
                      <div className="relative w-5 h-5 transition-all duration-300">
                        <Image
                          src={social.icon}
                          alt={social.label}
                          fill
                          className="object-contain transition-all duration-300"
                          style={{
                            filter: hoveredSocial === social.label
                              ? "invert(19%) sepia(100%) saturate(3474%) hue-rotate(222deg) brightness(101%) contrast(106%)"
                              : "brightness(0) invert(1)",
                          }}
                        />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Block - Navigation & Newsletter */}
          <div className="lg:w-[68%] bg-[#141416] px-4 py-10 lg:p-12 flex flex-col justify-between border border-white/5" style={{ borderRadius: 0 }}>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 xl:gap-12">
              {/* Explore */}
              <div>
                <p className="text-[12px] uppercase tracking-[0.2em] text-white/60 font-bold mb-6 md:mb-8" style={{ fontFamily: "var(--font-inter-tight)" }}>Explore</p>
                <ul className="space-y-4">
                  {footerLinks.explore.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="group relative block overflow-hidden text-md text-white/70 hover:text-white transition-colors duration-300 font-regular"
                      >
                        <span className="relative flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-full">
                          <span className="h-full flex items-center py-0.5">{link.label}</span>
                          <span className="absolute top-full left-0 h-full flex items-center py-0.5">{link.label}</span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hire */}
              <div>
                <p className="text-[12px] uppercase tracking-[0.2em] text-white/60 font-bold mb-6 md:mb-8" style={{ fontFamily: "var(--font-inter-tight)" }}>Hire</p>
                <ul className="space-y-4">
                  {footerLinks.hire.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="group relative block overflow-hidden text-md text-white/70 hover:text-white transition-colors duration-300 font-regular"
                      >
                        <span className="relative flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-full">
                          <span className="h-full flex items-center py-0.5">{link.label}</span>
                          <span className="absolute top-full left-0 h-full flex items-center py-0.5">{link.label}</span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Connect */}
              <div className="space-y-8">
                <div>
                  <p className="text-[12px] uppercase tracking-[0.2em] text-white/60 font-bold mb-6 md:mb-8" style={{ fontFamily: "var(--font-inter-tight)" }}>Connect</p>
                  <div className="space-y-6">
                    {/* Email */}
                    <div className="flex items-center gap-4 group">
                      <div className="w-10 h-10 flex-shrink-0 border border-white/10 flex items-center justify-center bg-white/5 transition-colors duration-300 group-hover:bg-white group-hover:border-white">
                        <svg className="w-4 h-4 text-white group-hover:text-black transition-colors duration-300" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.1em] text-white/40 font-bold mb-0.5">Email Us</p>
                        <a href="mailto:hello@arclinkedge.com" className="text-white hover:text-[#0052FF] transition-colors duration-300 font-medium text-sm">hello@arclinkedge.com</a>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-4 group">
                      <div className="w-10 h-10 flex-shrink-0 border border-white/10 flex items-center justify-center bg-white/5 transition-colors duration-300 group-hover:bg-white group-hover:border-white">
                        <svg className="w-4 h-4 text-white group-hover:text-black transition-colors duration-300" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.1em] text-white/40 font-bold mb-0.5">Call Us</p>
                        <div className="flex flex-col gap-1.5">
                          <a href="tel:+12164184653" className="text-white hover:text-[#0052FF] transition-colors duration-300 font-medium text-sm flex items-center gap-2">
                            <img src="/flags/us.svg" alt="US Flag" className="w-5 h-3 object-cover rounded-[1px]" />
                            +1 (216) 418-4653
                          </a>
                          <a href="tel:+919824838067" className="text-white hover:text-[#0052FF] transition-colors duration-300 font-medium text-sm flex items-center gap-2">
                            <img src="/flags/in.svg" alt="India Flag" className="w-5 h-3 object-cover rounded-[1px]" />
                            +91 98248 38067
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Remote delivery */}
                    <div className="flex items-center gap-4 group">
                      <div className="w-10 h-10 flex-shrink-0 border border-white/10 flex items-center justify-center bg-white/5 transition-colors duration-300 group-hover:bg-white group-hover:border-white">
                        <svg className="w-4 h-4 text-white group-hover:text-black transition-colors duration-300" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 0 20 15.3 15.3 0 0 1 0-20Z" /></svg>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.1em] text-[#D0F504]/80 font-bold mb-0.5">{REMOTE_WORK_LABEL}</p>
                        <p className="max-w-xs text-white/68 font-medium text-sm leading-relaxed">
                          {REMOTE_WORK_SHORT}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Unified Services Block at the bottom */}
        <div className="mx-0 lg:mx-0 mt-0 bg-[#141416] border-t border-white/5">
          <div className="px-4 lg:px-12 py-12 border-b border-white/5">
            <h3 className="text-[12px] uppercase tracking-[0.2em] font-bold text-white/60" style={{ fontFamily: "var(--font-inter-tight)" }}>Services</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="group relative px-4 py-10 lg:p-10 border-b border-white/5 md:border-r last:border-b-0 lg:nth-child(3n):border-r-0 transition-all duration-500 overflow-hidden"
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.backgroundColor = "rgba(255,255,255,0.03)";
                  const glow = el.querySelector<HTMLElement>(".corner-glow");
                  if (glow) glow.style.opacity = "1";
                  const arrow = el.querySelector<HTMLElement>(".mega-arrow");
                  if (arrow) {
                    arrow.style.opacity = "1";
                    arrow.style.transform = "translateX(0)";
                  }
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.backgroundColor = "transparent";
                  const glow = el.querySelector<HTMLElement>(".corner-glow");
                  if (glow) glow.style.opacity = "0";
                  const arrow = el.querySelector<HTMLElement>(".mega-arrow");
                  if (arrow) {
                    arrow.style.opacity = "0";
                    arrow.style.transform = "translateX(-4px)";
                  }
                }}
              >
                {/* L-shaped corner glow from header */}
                <span
                  className="corner-glow"
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    pointerEvents: "none",
                    opacity: 0,
                    transition: "opacity 0.25s ease",
                  }}
                >
                  <span style={{ position: "absolute", top: 0, left: 0, width: "50%", height: "1px", background: "linear-gradient(to right, #FFFFFF, transparent)" }} />
                  <span style={{ position: "absolute", top: 0, left: 0, width: "1px", height: "50%", background: "linear-gradient(to bottom, #FFFFFF, transparent)" }} />
                  <span style={{ position: "absolute", top: "-4px", left: "-4px", width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#FFFFFF", filter: "blur(4px)" }} />
                </span>

                <div className="flex items-start justify-between mb-4 relative z-10">
                  <span className="text-lg font-medium text-white/90 group-hover:text-white transition-colors duration-300" style={{ fontFamily: "var(--font-inter-tight)" }}>{service.title}</span>
                  <span
                    className="mega-arrow"
                    style={{
                      opacity: 0,
                      transform: "translateX(-4px)",
                      transition: "all 0.25s ease",
                      color: "#FFFFFF",
                    }}
                  >
                    <MoveUpRight size={18} />
                  </span>
                </div>
                <p className="text-sm text-white/60 leading-relaxed group-hover:text-white/80 transition-colors duration-300 relative z-10">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar & Watermark */}
        <div className="pt-12 pb-12 relative px-4 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-white/60 text-sm font-medium mb-12">
            <p>© 2026 Arclink Edge. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-4">
              <SecondaryNavButton
                href="https://wa.me/919824838067?text=Hello!%20I%20have%20a%20project%20in%20mind.%20Are%20you%20available%20for%20a%20quick%20chat%3F"
                imgSrc="/logo/whatsapp.svg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Talk on WhatsApp
              </SecondaryNavButton>
              <NavButton href="/contact">
                Contact Us
              </NavButton>
            </div>
          </div>
        </div>
      </div>

      {/* Large Watermark - Moved outside max-w to prevent cutting */}
      <div className="flex justify-center pointer-events-none select-none mt-[-4vw] relative h-[20vw]">
        {/* Exact Asymmetric Bottom Glow transferred from CTA Section */}
        <div className="absolute bottom-0 -left-[10%] w-[55%] h-[35%] bg-[#0052FF] mix-blend-screen filter blur-[60px] opacity-100 z-0" />
        <div className="absolute bottom-0 -right-[10%] w-[55%] h-[25%] bg-[#0052FF] mix-blend-screen filter blur-[60px] opacity-100 z-0" />
        <div className="absolute bottom-0 left-[15%] right-[15%] w-[70%] h-[30%] bg-[#0052FF] mix-blend-screen filter blur-[50px] opacity-100 z-0 mx-auto" />

        {/* Intense Bottom White Glow transferred from CTA Section */}
        <div className="absolute -bottom-2 left-[-10%] right-[-10%] w-[120%] h-[25%] bg-gradient-to-t from-white to-transparent mix-blend-screen filter blur-[32px] opacity-100 z-0" />

        <span className="text-[19vw] font-medium leading-none whitespace-nowrap tracking-tighter relative z-10 opacity-[0.08]" style={{ fontFamily: "var(--font-inter-tight)" }} aria-hidden="true">
          Arclink Edge
        </span>
      </div>
    </footer>
  );
}
