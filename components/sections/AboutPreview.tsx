"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeadingReveal from "@/components/ui/HeadingReveal";
import { team } from "@/lib/team";
import { FounderCard, TeamMemberCard } from "@/components/ui/TeamCards";

const teamMembers = [
  {
    name: team.founder.name,
    role: team.founder.role,
    experience: "6+ Years",
    image: team.founder.avatar,
    initials: "SA",
  },
  {
    name: "Frontend Team",
    role: "React & Next.js Developers",
    experience: "5+ Years",
    image: null,
    initials: "FE",
  },
  {
    name: "Backend Team",
    role: "API, SaaS & Cloud Engineers",
    experience: "6+ Years",
    image: null,
    initials: "BE",
  },
  {
    name: "Design Partners",
    role: "UI/UX & Brand Systems",
    experience: "10+ Years",
    image: null,
    initials: "UX",
  },
];

const aboutStats = [
  {
    value: 33,
    suffix: "+",
    label: "Projects Delivered",
  },
  {
    value: 16,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    value: 6,
    suffix: "+",
    label: "Years in Business",
  },
  {
    value: 10,
    suffix: "+",
    label: "Developers & Partners",
  },
];

function CountUp({ value, suffix = "", duration = 2 }: { value: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start: number | null = null;
    let raf: number;
    const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

    const step = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / (duration * 1000), 1);
      setDisplay(Math.round(easeOutQuart(progress) * value));

      if (progress < 1) {
        raf = requestAnimationFrame(step);
      }
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [isInView, value, duration]);

  return <span ref={ref}>{display}{suffix}</span>;
}

function DoodleWord({ children }: { children: React.ReactNode }) {
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const doodleRef = useRef<SVGEllipseElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!wrapperRef.current || !doodleRef.current) return;

    const doodle = doodleRef.current;
    const length = doodle.getTotalLength();

    const ctx = gsap.context(() => {
      gsap.set(doodle, {
        strokeDasharray: length,
        strokeDashoffset: length,
        opacity: 0,
      });

      gsap.to(doodle, {
        strokeDashoffset: 0,
        opacity: 0.95,
        duration: 0.65,
        delay: 1.05,
        ease: "power2.out",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top 82%",
          once: true,
        },
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <span
      ref={wrapperRef}
      className="relative inline-block whitespace-nowrap px-[0.16em] mx-[0.04em]"
      style={{ isolation: "isolate" }}
    >
      <span className="relative z-10">{children}</span>
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[1.55em] w-[calc(100%+0.6em)] -translate-x-1/2 -translate-y-1/2 overflow-visible"
        viewBox="0 0 220 120"
        fill="none"
        preserveAspectRatio="none"
      >
        <ellipse
          ref={doodleRef}
          cx="110"
          cy="60"
          rx="98"
          ry="42"
          stroke="#D0F504"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.95"
          transform="rotate(-7 110 60)"
        />
      </svg>
    </span>
  );
}

function AboutStatRow({ stat, index }: { stat: typeof aboutStats[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
      className="border-b border-white/10 py-5"
    >
      <p
        className="text-5xl md:text-6xl font-semibold leading-none text-[#F5F5F7]"
        style={{
          fontFamily: "var(--font-inter-tight)",
          letterSpacing: "-0.055em",
        }}
      >
        <CountUp value={stat.value} suffix={stat.suffix} />
      </p>
      <p className="mt-3 text-xs md:text-sm font-medium leading-snug text-white/54">
        {stat.label}
      </p>
    </motion.div>
  );
}

export default function AboutPreview({ sanityTeam }: { sanityTeam?: any[] }) {
  const displayFounder = sanityTeam?.find(m => m.category === 'founder') || teamMembers[0];
  const displayTeam = (sanityTeam && sanityTeam.length > 0) 
    ? sanityTeam.filter(m => m.category !== 'founder') 
    : teamMembers.slice(1);

  return (
    <section
      id="about-preview"
      className="relative overflow-hidden bg-[#000000] py-24 lg:py-32"
      aria-labelledby="about-preview-heading"
    >
      <div className="absolute top-[12%] -left-[18%] w-[42vw] h-[56vh] rounded-full bg-[#0052FF]/15 mix-blend-screen blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[8%] -right-[14%] w-[40vw] h-[52vh] rounded-full bg-[#D0F504]/10 mix-blend-screen blur-[150px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1600px]" style={{ paddingLeft: "clamp(16px, 5vw, 80px)", paddingRight: "clamp(16px, 5vw, 80px)" }}>
        <div className="grid grid-cols-1 lg:grid-cols-[0.68fr_1fr] gap-12 lg:gap-20 items-start">
          <div>
            <FounderCard founder={displayFounder} />
            <div className="mt-8 grid grid-cols-2 gap-x-8">
              {aboutStats.map((stat, index) => (
                <AboutStatRow key={stat.label} stat={stat} index={index} />
              ))}
            </div>
          </div>

          <div className="pt-4">
            <HeadingReveal
              id="about-preview-heading"
              className="text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.98]"
              style={{
                fontFamily: "var(--font-inter-tight)",
                color: "#F5F5F7",
                letterSpacing: "-0.065em",
              }}
            >
              A team of Elite <DoodleWord>Experts</DoodleWord>
            </HeadingReveal>

            <div className="mt-10 h-px w-full bg-white/10" />

            <div className="mt-8 max-w-4xl">
              <div className="space-y-5 text-sm md:text-base leading-relaxed text-white/54">
                <p>
                  We are a premium IT agency in Ahmedabad, India, specializing in custom web development, mobile app development, SaaS platforms, UI/UX design, API integration, cloud deployment, and digital product strategy for B2B brands.
                </p>
                <p>
                  Our team blends product thinking with modern engineering, helping startups and growing businesses launch fast, improve conversions, and build reliable software for customers across India, the USA, the UK, and the UAE.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <h3
                className="text-2xl md:text-3xl font-medium text-[#F5F5F7]"
                style={{ fontFamily: "var(--font-inter-tight)", letterSpacing: "-0.04em" }}
              >
                Developers and partners behind every launch
              </h3>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {displayTeam.map((member, index) => (
                  <TeamMemberCard key={member.name} member={member} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
