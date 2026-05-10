"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const steps = [
  {
    number: 1,
    day: "Day 1",
    title: "Discovery & Client Onboarding",
    description: "We start by understanding your vision, business goals, and detailed project requirements to set a strong foundation.",
  },
  {
    number: 2,
    day: "Day 2 – Day 4",
    title: "Scope Definition",
    description: "We craft a clear and structured scope of work outlining features, deliverables, timelines, and execution strategy.",
  },
  {
    number: 3,
    day: "Day 5",
    title: "Scope Approval",
    description: "Once the scope is reviewed and approved, we immediately initiate the design process.",
  },
  {
    number: 4,
    day: "Day 5 – Day 11",
    title: "UI/UX Design",
    description: "We design intuitive user experiences through wireframes (if required) or high-fidelity UI designs within a week.",
  },
  {
    number: 5,
    day: "Day 12",
    title: "Design Sign-off",
    description: "Final design approval ensures everything aligns perfectly with your expectations before development begins.",
  },
  {
    number: 6,
    day: "Day 13 – Day 16",
    title: "Technical Planning (SRS)",
    description: "We prepare a detailed Software Requirement Specification covering APIs, integrations, and system architecture.",
  },
  {
    number: 7,
    day: "Day 17 – 2 to 12 Weeks",
    title: "Development",
    description: "Our team builds scalable frontend and backend systems, with timelines based on project complexity.",
  },
  {
    number: 8,
    day: "3 – 7 Days",
    title: "Quality Assurance & Optimization",
    description: "We rigorously test the product, fix bugs, and optimize performance to ensure a seamless user experience.",
  },
  {
    number: 9,
    day: "Final Stage",
    title: "Deployment & Launch",
    description: "After final validation, we deploy your product live — ready for users and business growth.",
  },
];

export default function HowWeWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef  = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -70]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!headerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".hww-line", {
        scrollTrigger: { trigger: headerRef.current, start: "top 88%" },
        y: "110%", skewY: 4, transformOrigin: "left bottom",
        duration: 1.1, ease: "power4.out",
      });
    }, headerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={sectionRef} className="relative overflow-hidden bg-[#000000] py-24 lg:py-32">

      {/* Background — two blue clusters: top (01–03) and bottom (06–08) */}
      <div className="absolute inset-0 pointer-events-none bg-[#000000]">

        {/* ── TOP CLUSTER — large ambient glow covering steps 01–03 ── */}
        <motion.div
          animate={{ x: ["-6%", "8%", "-3%"], y: ["-5%", "10%", "-5%"] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-20%] top-[-15%] h-[130vh] w-[90vw] rounded-full bg-[#0052FF] opacity-[0.55] blur-[180px] mix-blend-screen"
        />
        <motion.div
          animate={{ x: ["0%", "10%", "-4%"], y: ["5%", "20%", "5%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-10%] top-[-5%] h-[110vh] w-[75vw] rounded-full bg-[#001A66] opacity-[0.80] blur-[160px] mix-blend-screen"
        />

        {/* ── BOTTOM CLUSTER — large ambient glow covering steps 06–08 ── */}
        <motion.div
          animate={{ x: ["6%", "-8%", "3%"], y: ["5%", "-10%", "5%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-20%] bottom-[-15%] h-[130vh] w-[90vw] rounded-full bg-[#0052FF] opacity-[0.50] blur-[180px] mix-blend-screen"
        />
        <motion.div
          animate={{ x: ["-4%", "8%", "0%"], y: ["-5%", "-20%", "-5%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-10%] bottom-[-5%] h-[110vh] w-[75vw] rounded-full bg-[#001A66] opacity-[0.75] blur-[160px] mix-blend-screen"
        />

        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-[0.05] mix-blend-overlay z-[2]"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }}
        />

        {/* Corrugated glass vertical stripes */}
        <div
          className="absolute inset-0 flex z-[1]"
          style={{ maskImage: "linear-gradient(to bottom,transparent,black 18%,black 84%,transparent)", WebkitMaskImage: "linear-gradient(to bottom,transparent,black 18%,black 84%,transparent)" }}
        >
          {Array.from({ length: 48 }).map((_, i) => (
            <div
              key={i}
              className="h-full flex-1"
              style={{
                background: "linear-gradient(90deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 12%, transparent 50%, rgba(0,0,0,0.08) 88%, rgba(0,0,0,0.18) 100%)",
                backdropFilter: "blur(38px) saturate(2.2) contrast(1.08)",
                WebkitBackdropFilter: "blur(38px) saturate(2.2) contrast(1.08)",
                borderLeft: "1px solid rgba(255,255,255,0.05)",
              }}
            />
          ))}
        </div>

        {/* Top fade — seamless blend with Services above */}
        <div className="absolute inset-x-0 top-0 h-[28%] bg-gradient-to-b from-black via-black/72 to-transparent z-[4]" />
        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-[16%] bg-gradient-to-t from-black to-transparent z-[4]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1600px]"
        style={{ paddingLeft: "clamp(16px,5vw,80px)", paddingRight: "clamp(16px,5vw,80px)" }}>

        {/* Heading */}
        <div ref={headerRef} className="mb-16 lg:mb-24">
          <div style={{ overflow: "hidden", paddingBottom: "0.08em" }}>
            <h2 className="hww-line"
              style={{ fontFamily: "var(--font-inter-tight)", fontSize: "clamp(3.2rem,8vw,6.8rem)", fontWeight: 500, lineHeight: 0.95, letterSpacing: "-0.07em", color: "#F5F5F7" }}>
              How we work
            </h2>
          </div>
          <div style={{ overflow: "hidden", marginTop: "1rem" }}>
            <p className="hww-line max-w-lg"
              style={{ fontSize: "16px", lineHeight: 1.6, letterSpacing: "-0.02em", color: "rgba(245,245,247,0.52)" }}>
              From first call to live product — our 8-step process built for clarity, speed, and zero surprises.
            </p>
          </div>
        </div>

        {/* Steps — one per row, alternating left/right, each appears individually on scroll */}
        <div className="flex flex-col gap-10 max-w-[1100px]">
          {steps.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.72, ease: [0.21, 0.45, 0.32, 0.9] }}
                className={`flex flex-row items-start gap-5 w-full md:max-w-[520px] ${!isLeft ? "md:self-end" : ""}`}
              >
                {/* ── Large number — left column, fades at bottom ── */}
                <div style={{ flexShrink: 0, flexGrow: 0, lineHeight: 1 }}>
                  <span
                    aria-hidden="true"
                    style={{
                      fontFamily: "var(--font-inter-tight)",
                      fontSize: "clamp(3.5rem, 6vw, 5.5rem)",
                      fontWeight: 700,
                      fontVariantNumeric: "tabular-nums",
                      letterSpacing: "-0.05em",
                      lineHeight: 0.85,
                      color: "#CFF403",
                      opacity: 0.22,
                      display: "block",
                      whiteSpace: "nowrap",
                      WebkitMaskImage: "linear-gradient(to bottom, black 35%, transparent 100%)",
                      maskImage: "linear-gradient(to bottom, black 35%, transparent 100%)",
                      userSelect: "none",
                    }}
                  >
                    {String(step.number).padStart(2, "0")}
                  </span>
                </div>

                {/* ── Content — right column ── */}
                <div className="flex flex-col gap-3 pt-1">
                  {/* Day badge */}
                  <span style={{ fontFamily: "var(--font-inter-tight)", fontSize: "0.68rem", fontWeight: 700, color: "#CFF403", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                    {step.day}
                  </span>

                  {/* Title */}
                  <h3 style={{ fontFamily: "var(--font-inter-tight)", fontSize: "clamp(1.15rem, 2vw, 1.55rem)", fontWeight: 500, color: "#F5F5F7", letterSpacing: "-0.045em", lineHeight: 1.08 }}>
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p style={{ fontSize: "0.86rem", lineHeight: 1.72, color: "rgba(245,245,247,0.46)", letterSpacing: "-0.01em" }}>
                    {step.description}
                  </p>

                  {/* Accent line */}
                  <div
                    className="mt-1 h-px w-10"
                    style={{ background: "linear-gradient(to right, rgba(207,244,3,0.4), transparent)" }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
