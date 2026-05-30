"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Button";
import LogoMarquee from "@/components/sections/LogoMarquee";

const services = ["UI/UX Design", "Web Development", "SaaS Products", "Fintech", "E-Commerce"];

interface ToolImage {
  name: string;
  src: string;
  rotate: number;
  glow: string;
}

const serviceTools: Record<string, ToolImage[]> = {
  "UI/UX Design": [
    { name: "Figma", src: "/tools/figma.svg", rotate: -16, glow: "rgba(242,78,30,0.5)" },
    { name: "Framer", src: "/tools/framer.svg", rotate: 2, glow: "rgba(0,85,255,0.5)" },
    { name: "Adobe XD", src: "/tools/xd.svg", rotate: 16, glow: "rgba(255,0,0,0.4)" },
  ],
  "Web Development": [
    { name: "React", src: "/tools/reactjs.svg", rotate: -13, glow: "rgba(97,218,251,0.5)" },
    { name: "Next.js", src: "/tools/nextjs.svg", rotate: 2, glow: "rgba(255,255,255,0.3)" },
    { name: "Node.js", src: "/tools/nodejs.svg", rotate: 11, glow: "rgba(104,160,99,0.5)" },
    { name: "PHP", src: "/tools/php.svg", rotate: -8, glow: "rgba(119,123,180,0.5)" },
    { name: "Angular", src: "/tools/angularjs.svg", rotate: 14, glow: "rgba(221,0,49,0.4)" },
  ],
  "SaaS Products": [
    { name: "AWS", src: "/tools/aws.svg", rotate: -15, glow: "rgba(255,153,0,0.5)" },
    { name: "Firebase", src: "/tools/firebase.svg", rotate: 2, glow: "rgba(255,196,0,0.5)" },
    { name: "Supabase", src: "/tools/supabase.svg", rotate: 14, glow: "rgba(62,207,142,0.5)" },
    { name: "Vercel", src: "/tools/vercel.svg", rotate: -8, glow: "rgba(255,255,255,0.3)" },
    { name: "Stripe", src: "/tools/stripe.svg", rotate: 10, glow: "rgba(99,91,255,0.5)" },
  ],
  "Fintech": [
    { name: "Stripe", src: "/tools/stripe.svg", rotate: -13, glow: "rgba(99,91,255,0.5)" },
    { name: "Razorpay", src: "/tools/razorpay.svg", rotate: 2, glow: "rgba(51,149,255,0.5)" },
    { name: "PayPal", src: "/tools/paypal.svg", rotate: 13, glow: "rgba(0,112,186,0.5)" },
    { name: "Cashfree", src: "/tools/cashfree.svg", rotate: -8, glow: "rgba(30,200,120,0.4)" },
  ],
  "E-Commerce": [
    { name: "Shopify", src: "/tools/shopify.svg", rotate: -13, glow: "rgba(150,191,72,0.5)" },
    { name: "WooCommerce", src: "/tools/woocommerce.svg", rotate: 2, glow: "rgba(150,88,138,0.5)" },
    { name: "Amazon", src: "/tools/amazon.svg", rotate: 13, glow: "rgba(255,153,0,0.5)" },
    { name: "Flipkart", src: "/tools/flipkart.svg", rotate: -8, glow: "rgba(40,116,240,0.5)" },
  ],
};

function ServiceChip({ service, index }: { service: string; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [canHover, setCanHover] = useState(false);
  const tools = serviceTools[service] ?? [];

  useEffect(() => {
    const checkHover = () => {
      const hasHover = window.matchMedia("(hover: hover)").matches;
      const isLarge = window.innerWidth >= 1024;
      setCanHover(hasHover && isLarge);
      if (!(hasHover && isLarge)) setHovered(false);
    };

    checkHover();
    window.addEventListener("resize", checkHover);
    return () => window.removeEventListener("resize", checkHover);
  }, []);

  return (
    <div
      style={{ position: "relative", display: "inline-block", zIndex: hovered ? 50 : "auto" }}
      onMouseEnter={() => canHover && setHovered(true)}
      onMouseLeave={() => canHover && setHovered(false)}
    >
      {/* Tooltip */}
      <AnimatePresence>
        {hovered && tools.length > 0 && (
          <div
            aria-hidden="true"
            className="hidden lg:block"
            style={{
              position: "absolute",
              bottom: "calc(100% + 12px)",
              left: "50%",
              transform: "translateX(-50%)",
              pointerEvents: "none",
              zIndex: 100,
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.96 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              style={{ position: "relative" }}
            >

              {/* Glass card — arrow baked in via clip-path so blur matches */}
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  backgroundColor: "rgba(12,16,40,0.78)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  padding: "14px 16px 22px",
                  whiteSpace: "nowrap" as const,
                  clipPath: "polygon(0% 0%, 100% 0%, 100% calc(100% - 8px), calc(50% + 9px) calc(100% - 8px), 50% 100%, calc(50% - 9px) calc(100% - 8px), 0% calc(100% - 8px))",
                }}
              >
                <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                  {tools.slice(0, 3).map((tool, i) => (
                    <motion.div
                      key={tool.name}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: 0.06 + i * 0.05, ease: "easeOut" }}
                      style={{
                        width: "46px",
                        height: "46px",
                        backgroundColor: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "10px",
                      }}
                    >
                      <Image
                        src={tool.src}
                        alt={tool.name}
                        width={24}
                        height={24}
                        style={{ objectFit: "contain" }}
                      />
                    </motion.div>
                  ))}
                  {tools.length > 3 && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: 0.21, ease: "easeOut" }}
                      style={{
                        width: "46px",
                        height: "46px",
                        backgroundColor: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "var(--font-inter-tight)",
                        fontWeight: 600,
                        fontSize: "0.75rem",
                        color: "rgba(255,255,255,0.7)",
                        letterSpacing: "0.02em",
                      }}
                    >
                      +{tools.length - 3}
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Chip */}
      <motion.span
        initial={{ opacity: 0, y: 8, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.35, delay: 0.55 + index * 0.08, ease: "easeOut" }}
        className="text-[0.75rem] md:text-[0.72rem]"
        style={{
          display: "inline-block",
          border: `1px solid ${hovered ? "#FFFFFF" : "rgba(255,255,255,0.4)"}`,
          padding: "0.3rem 0.75rem",
          fontFamily: "var(--font-inter-tight)",
          fontWeight: 500,
          letterSpacing: "0.08em",
          textTransform: "uppercase" as const,
          cursor: "pointer",
          transition: "background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
          backgroundColor: hovered ? "#FFFFFF" : "transparent",
          color: hovered ? "#050A18" : "rgba(245,245,247,0.9)",
          boxShadow: hovered
            ? "0 0 20px rgba(255,255,255,0.35), 0 0 40px rgba(255,255,255,0.15)"
            : "none",
        }}
      >
        {service}
      </motion.span>
    </div>
  );
}

export default function Hero({ sanityLogos }: { sanityLogos?: { name: string; src: string | null }[] }) {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!headingRef.current) return;
    const lines = headingRef.current.querySelectorAll<HTMLElement>(".hero-line");
    if (!lines.length) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.from(lines, {
        y: "110%",
        skewY: 4,
        transformOrigin: "left bottom",
        duration: 1.1,
        ease: "power4.out",
        stagger: 0.13,
        delay: 0.2,
      });
    }, headingRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="relative flex flex-col overflow-hidden"
      style={{ minHeight: "100svh", backgroundColor: "#000", paddingTop: "4rem", color: "#F5F5F7" }}
      aria-label="Hero section"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to bottom," +
            "#000000 0%," +
            "#000000 6%," +
            "#02050E 13%," +
            "#050C20 22%," +
            "#091535 31%," +
            "#0D2255 40%," +
            "#153388 50%," +
            "#1A55CC 60%," +
            "#4488EE 70%," +
            "#88AAFF 80%," +
            "#AACCFF 88%," +
            "#BBDAFF 94%," +
            "#C8E0FF 100%)",
        }}
      />

      {/* Animated glow */}
      <div className="absolute inset-0 hero-glow" aria-hidden="true" />

      {/* Noise overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          opacity: 0.18,
          mixBlendMode: "overlay",
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "180px",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Layout */}
      <div className="relative z-10 flex-1 flex flex-col justify-center gap-10 lg:gap-0 lg:justify-start px-4 lg:px-16 pb-6 lg:pb-8">

        {/* Heading */}
        <h1
          ref={headingRef}
          className="mb-0 lg:mb-12 pt-8 lg:pt-20"
          style={{
            position: "relative",
            fontFamily: "var(--font-inter-tight)",
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            fontWeight: 400,
            letterSpacing: "-0.03em",
            lineHeight: 1.3,
            color: "#F5F5F7",
          }}
        >
          <div style={{ overflow: "hidden" }}>
            <div className="hero-line">Top IT Agency for</div>
          </div>

          <div style={{ position: "relative" }}>
            <div style={{ overflow: "hidden" }}>
              <div className="hero-line">
                <span
                  style={{
                    fontFamily: "var(--font-fraunces)",
                    fontStyle: "italic",
                    fontWeight: 400,
                    letterSpacing: "-0.01em",
                  }}
                >
                  Web, Mobile &amp; SaaS.
                </span>
              </div>
            </div>
            <motion.svg
              viewBox="0 0 220 14"
              fill="none"
              aria-hidden="true"
              style={{
                position: "absolute",
                bottom: "-4px",
                left: 0,
                width: "clamp(120px, 12%, 200px)",
                height: 14,
                overflow: "visible",
              }}
            >
              <motion.path
                d="M2,9 C18,3 38,13 58,8 C78,3 98,13 118,8 C138,3 158,13 178,8 C198,3 212,11 218,8"
                stroke="#D0F601"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.9, delay: 1.1, ease: "easeOut" }}
              />
            </motion.svg>
          </div>

          <div style={{ overflow: "hidden" }}>
            <div className="hero-line">
              Delivered in{" "}
              <span style={{ position: "relative", display: "inline-block" }}>
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: "2px",
                    left: "-10px",
                    right: "-6px",
                    bottom: "-2px",
                    backgroundColor: "#D0F601",
                    transform: "none",
                    pointerEvents: "none",
                    zIndex: 0,
                  }}
                />
                <span
                  style={{
                    position: "relative",
                    zIndex: 1,
                    fontFamily: "var(--font-fraunces)",
                    fontStyle: "italic",
                    fontWeight: 400,
                    letterSpacing: "-0.01em",
                    color: "#050A18",
                  }}
                >
                  4–5 Weeks.
                </span>
              </span>
            </div>
          </div>
        </h1>

        {/* BOTTOM GROUP — mobile: chips stacked above para+CTA; desktop: single row */}
        <div className="flex flex-col lg:mt-auto">

          {/* Service chips — mobile only (desktop shows them in the bottom row) */}
          <div
            className="lg:hidden flex flex-wrap gap-2 mb-5"
            style={{ position: "relative", overflow: "visible" }}
          >
            {services.map((service, i) => (
              <ServiceChip key={service} service={service} index={i} />
            ))}
          </div>

          {/* BOTTOM — chips (desktop) + subtext+CTA */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:mt-auto">

            {/* Service chips — desktop only */}
            <div
              className="hidden lg:flex flex-wrap gap-2"
              style={{ position: "relative", overflow: "visible" }}
            >
              {services.map((service, i) => (
                <ServiceChip key={service} service={service} index={i} />
              ))}
            </div>

            {/* Subtext + CTA */}
            <div className="flex flex-col items-start" style={{ maxWidth: "420px" }}>
              <p
                className="text-base hero-fade-in"
                style={{
                  color: "rgba(200,210,230,0.7)",
                  lineHeight: 1.7,
                  marginBottom: "1.75rem",
                }}
              >
                Top-rated software development agency in New York, London, Dubai & Bangalore —
                delivering custom web apps, mobile apps (iOS &amp; Android), SaaS
                platforms &amp; UI/UX design for ambitious B2B brands globally.
              </p>

              <div className="hero-fade-in flex flex-col sm:flex-row flex-wrap gap-4 w-full" style={{ animationDelay: "0.4s" }}>
                <SecondaryButton href="/hire" icon={ArrowUpRight} className="w-full sm:w-auto">Hire a Dedicated Developer</SecondaryButton>
                <PrimaryButton href="/contact" icon={ArrowUpRight} className="w-full sm:w-auto">Book Now</PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative z-10">
        <LogoMarquee sanityLogos={sanityLogos} />
      </div>

      <style>{`
        @keyframes glowDrift {
          0%   { background-position: 40% 45%; opacity: 0.55; }
          33%  { background-position: 60% 52%; opacity: 0.75; }
          66%  { background-position: 45% 40%; opacity: 0.6;  }
          100% { background-position: 40% 45%; opacity: 0.55; }
        }

        .hero-glow {
          background: radial-gradient(ellipse 55% 30% at 50% 50%,
            rgba(30, 100, 180, 0.35) 0%,
            rgba(15, 60, 120, 0.15) 50%,
            transparent 80%);
          background-size: 160% 160%;
          animation: glowDrift 10s ease-in-out infinite;
        }

        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-fade-in {
          animation: heroFadeIn 0.5s ease-out 0.1s both;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-glow { animation: none; }
          .hero-fade-in { animation: none; }
        }

      `}</style>
    </section>
  );
}
