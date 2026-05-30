"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Seeded PRNG for deterministic box opacities (no hydration mismatch)
function lcg(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (Math.imul(1664525, s) + 1013904223) >>> 0;
    return s / 0x100000000;
  };
}
const CELL = 6, GAP = 1, PATTERN_COLS = 7, PATTERN_ROWS = 7;
const _rand = lcg(31);
const mosaicPatternBoxes = Array.from({ length: PATTERN_COLS * PATTERN_ROWS }, (_, i) => ({
  x: (i % PATTERN_COLS) * CELL + GAP,
  y: Math.floor(i / PATTERN_COLS) * CELL + GAP,
  op: _rand() * 0.02,
}));

const RESULTS = [
  {
    value: 33,
    suffix: "+",
    label: "Projects Delivered",
    description: "Across web, mobile & SaaS for clients in India, USA, UK & UAE",
  },
  {
    value: 16,
    suffix: "+",
    label: "Happy Clients",
    description: "Long-term partnerships built on delivering real results",
  },
  {
    value: 3,
    suffix: "+",
    label: "Years in Business",
    description: "Shipping quality products consistently since 2021",
  },
];

/** Animated count-up that triggers when the element scrolls into view */
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

function StatShape({ type, isHovered }: { type: "pentapod" | "quadpod" | "hexapod"; isHovered: boolean }) {
  const paths = {
    pentapod: "M96 28 L116 72 L164 78 L128 111 L138 158 L96 134 L54 158 L64 111 L28 78 L76 72 Z",
    quadpod: "M96 28 L140 52 L164 96 L140 140 L96 164 L52 140 L28 96 L52 52 Z",
    hexapod: "M96 24 L139 48 L164 92 L148 140 L96 166 L44 140 L28 92 L53 48 Z",
  };
  const color = type === "pentapod" ? "#0066FF" : type === "quadpod" ? "#00F0FF" : "#A200FF";

  return (
    <div
      className="w-40 h-40 md:w-48 md:h-48 relative z-20 pointer-events-none"
      style={{ marginLeft: "-1rem" }}
    >
      <motion.svg
        viewBox="0 0 192 192"
        aria-hidden="true"
        className="h-full w-full overflow-visible"
        initial={false}
        animate={{
          rotate: isHovered ? 10 : 0,
          y: isHovered ? -8 : 0,
          scale: isHovered ? 1.04 : 1,
        }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <defs>
          <radialGradient id={`stat-shape-fill-${type}`} cx="34%" cy="22%" r="78%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.92" />
            <stop offset="26%" stopColor={color} stopOpacity="0.95" />
            <stop offset="100%" stopColor={color} stopOpacity="0.34" />
          </radialGradient>
          <linearGradient id={`stat-shape-stroke-${type}`} x1="35" y1="28" x2="150" y2="160" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.88" />
            <stop offset="44%" stopColor={color} stopOpacity="0.82" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.22" />
          </linearGradient>
          <filter id={`stat-shape-glow-${type}`} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <motion.path
          d={paths[type]}
          fill={`url(#stat-shape-fill-${type})`}
          stroke={`url(#stat-shape-stroke-${type})`}
          strokeWidth="2.5"
          strokeLinejoin="round"
          filter={`url(#stat-shape-glow-${type})`}
          initial={{ pathLength: 0.72 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <path
          d={paths[type]}
          fill="none"
          stroke="#FFFFFF"
          strokeOpacity="0.22"
          strokeWidth="1"
          strokeLinejoin="round"
          transform="translate(-5 -6) scale(1.05)"
          style={{ transformOrigin: "96px 96px" }}
        />
      </motion.svg>
    </div>
  );
}

// Straight-line paths: trunk → horizontal bar → 3 vertical drops
// ViewBox 1200-wide; 3-col centers at 200, 600, 1000
// grad: "trunk" | "horiz-l" | "horiz-r" | "drop"
const SVG_PATHS = [
  { d: "M 600,0 L 600,160", delay: 0.25, dur: 0.70, gw: 12, sw: 3, grad: "trunk" },
  { d: "M 600,160 L 192,160", delay: 0.95, dur: 0.35, gw: 8, sw: 3, grad: "horiz-l" },
  { d: "M 600,160 L 1008,160", delay: 0.95, dur: 0.35, gw: 8, sw: 3, grad: "horiz-r" },
  { d: "M 192,160 L 192,320", delay: 1.30, dur: 0.70, gw: 6, sw: 3, grad: "drop" },
  { d: "M 600,160 L 600,320", delay: 1.37, dur: 0.70, gw: 6, sw: 3, grad: "drop" },
  { d: "M 1008,160 L 1008,320", delay: 1.44, dur: 0.70, gw: 6, sw: 3, grad: "drop" },
];


export default function Stats() {
  const [hoveredStatIndex, setHoveredStatIndex] = useState<number | null>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!headingRef.current) return;
    const lines = headingRef.current.querySelectorAll(".stats-line");

    const ctx = gsap.context(() => {
      gsap.from(lines, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 88%",
        },
        y: "110%",
        skewY: 4,
        transformOrigin: "left bottom",
        duration: 1.1,
        ease: "power4.out",
        stagger: 0.1,
      });
    }, headingRef);

    return () => ctx.revert();
  }, []);
  return (
    <section
      id="stats"
      className="relative overflow-hidden py-24 lg:py-32"
      aria-labelledby="stats-heading"
      style={{ backgroundColor: "#000000" }}
    >
      {/* Blurred gradient — picks up from hero's bottom color and fades to dark */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-8%",
          left: "-8%",
          right: "-8%",
          height: "60%",
          background:
            "linear-gradient(to bottom," +
            "#C8E0FF 0%," +
            "#8EC0FF 20%," +
            "#4A96FF 45%," +
            "#0D6EFF 70%," +
            "#000000 100%)",
          filter: "blur(72px)",
        }}
      />
      {/* Dark overlay — heavier at bottom so cards sit on pure dark */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom," +
            "rgba(0,0,0,0.1) 0%," +
            "rgba(0,0,0,0.4) 25%," +
            "rgba(0,0,0,0.7) 52%," +
            "rgba(0,0,0,0.92) 75%)",
        }}
      />
      {/* Mosaic box grid — individual boxes with varying opacity, fades via radial mask */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1500 720"
        preserveAspectRatio="xMidYMid slice"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 42%, transparent 60%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 42%, transparent 60%)",
        }}
      >
        <defs>
          <pattern
            id="stats-mosaic-pattern"
            x="0"
            y="0"
            width={PATTERN_COLS * CELL}
            height={PATTERN_ROWS * CELL}
            patternUnits="userSpaceOnUse"
          >
            {mosaicPatternBoxes.map((b, i) => (
              <rect key={i} x={b.x} y={b.y} width={CELL - GAP * 2} height={CELL - GAP * 2} fill="white" fillOpacity={b.op} />
            ))}
          </pattern>
        </defs>
        <rect width="1500" height="720" fill="url(#stats-mosaic-pattern)" />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Statement block */}
        <div
          className="text-center"
          style={{ maxWidth: "900px", margin: "0 auto 4rem" }}
        >
          <h2 id="stats-heading"
            ref={headingRef}
            style={{ fontFamily: "var(--font-inter-tight)",
              fontSize: "clamp(1.9rem, 3.8vw, 3.2rem)",
              fontWeight: 400,
              lineHeight: 1.3,
              color: "#F5F5F7" }} className="tracking-[-0.02em] md:tracking-[-0.03em]">
            <div style={{ overflow: "hidden" }}>
              <div className="stats-line">Build better digital products.</div>
            </div>
            <div style={{ overflow: "hidden" }}>
              <div className="stats-line">
                Custom web apps, mobile apps &amp; SaaS{" "}
                <br className="hidden md:block" />
                designed for scale, shipped in weeks.
              </div>
            </div>
          </h2>
        </div>

        {/* Results / Stats block */}
        <div id="about">

          {/* Logo box */}
          <div className="flex justify-center mb-16 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              style={{
                width: "72px",
                height: "72px",
                backgroundColor: "#0D0D0F",
                border: "1px solid #2A2A30",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                zIndex: 1,
                boxShadow: "0 0 32px rgba(0,82,255,0.18)",
              }}
            >
              <Image
                src="/logo/aewhite.png"
                alt="Arclink Edge"
                width={60}
                height={60}
                style={{ objectFit: "contain" }}
              />
            </motion.div>
          </div>

          {/* Tablet & Desktop: straight-line SVG */}
          <div className="hidden lg:block" style={{ marginTop: "-2px", marginBottom: "-6px" }}>
            <svg
              viewBox="0 0 1200 325"
              preserveAspectRatio="none"
              width="100%"
              height="325"
              fill="none"
            >
              <defs>
                <linearGradient id="trunk-fade" x1="0" y1="0" x2="0" y2="160" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="white" stopOpacity="0" />
                  <stop offset="100%" stopColor="white" stopOpacity="1" />
                </linearGradient>
                {/* Neon glow: wide blur (outer halo) + tight blur (inner glow) + source (sharp core) */}
                <filter id="neon-glow" filterUnits="userSpaceOnUse" x="-40" y="-40" width="1280" height="405">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* All lines — flat white, uniform opacity; trunk uses top-fade gradient */}
              {SVG_PATHS.map(({ d, delay, dur, sw }, i) => (
                <motion.path
                  key={`line-${i}`}
                  d={d}
                  stroke={i === 0 ? "url(#trunk-fade)" : "#FFFFFF"}
                  strokeWidth={sw}
                  strokeLinecap="round"
                  style={{ opacity: 0.15 }}
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: dur, delay, ease: "easeOut" }}
                />
              ))}


            </svg>
          </div>

          {/* Stat cards */}
          <div
            className="grid grid-cols-1 lg:grid-cols-3"
            style={{
              position: "relative",
              gap: "1.25rem",
            }}
          >
            {RESULTS.map((result, i) => (
              <motion.div
                key={result.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                onMouseEnter={() => setHoveredStatIndex(i)}
                onMouseLeave={() => setHoveredStatIndex(null)}
                className="group relative overflow-hidden flex flex-col items-start text-left"
                style={{
                  borderRadius: 0,
                  border: "3px solid rgba(255,255,255,0.04)",
                  background: "linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.02) 100%)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                }}
              >
                {/* Precise Asymmetric Weavy Glow */}
                {/* Left Side (moved 10% down: 40 -> 30) */}
                <div className="absolute bottom-0 -left-[10%] w-[55%] h-[30%] bg-[#0052FF] mix-blend-screen filter blur-[50px] opacity-90 transition-opacity duration-500 group-hover:opacity-100 z-0" />
                {/* Right Side (moved 10% down: 30 -> 20) */}
                <div className="absolute bottom-0 -right-[10%] w-[55%] h-[20%] bg-[#0052FF] mix-blend-screen filter blur-[50px] opacity-90 transition-opacity duration-500 group-hover:opacity-100 z-0" />
                {/* Center (moved 10% down: 15 -> 5) */}
                <div className="absolute bottom-0 left-[20%] right-[20%] h-[5%] bg-[#0052FF] mix-blend-screen filter blur-[40px] opacity-80 z-0" />

                {/* Intense Bottom White Glow (White fading into Blue) */}
                <div className="absolute -bottom-2 left-[-10%] right-[-10%] w-[120%] h-[20%] bg-gradient-to-t from-white to-transparent mix-blend-screen filter blur-[24px] opacity-80 transition-opacity duration-500 group-hover:opacity-100 z-0" />

                {/* Glass Layer — removed duplicate backdrop-filter for perf */}
                {/* Content restructured for specific spacing requirements */}
                <div className="relative z-10 w-full h-full flex flex-col p-6 lg:p-9">

                  {/* Container 1: Shape Only */}
                  <div className="flex-shrink-0" style={{ marginBottom: "3rem" }}>
                    <StatShape
                      type={i === 0 ? "pentapod" : i === 1 ? "quadpod" : "hexapod"}
                      isHovered={hoveredStatIndex === i}
                    />
                  </div>

                  {/* Container 2: Info (Numbers & Subtexts) */}
                  <div className="flex flex-col">
                    {/* Number Only Container */}
                    <div style={{ marginBottom: "1.5rem" }}>
                      <p
                        className="relative"
                        style={{
                          fontFamily: "var(--font-inter-tight)",
                          fontSize: "clamp(4.2rem, 6.5vw, 7.5rem)",
                          fontWeight: 600,
                          background: "linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(200, 220, 255, 0.8) 40%, rgba(255, 255, 255, 0.3) 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          filter: "drop-shadow(0px 10px 20px rgba(0, 82, 255, 0.3)) drop-shadow(0px 2px 4px rgba(255, 255, 255, 0.2))",
                          letterSpacing: "-0.04em",
                          lineHeight: 1,
                        }}
                      >
                        <CountUp value={result.value} suffix={result.suffix} />
                      </p>
                    </div>

                    {/* Subtexts Container (Heading & Subheading) */}
                    <div>
                      <p
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontSize: "clamp(1rem, 1.3vw, 1.2rem)",
                          fontWeight: 500,
                          color: "#F5F5F7",
                          letterSpacing: "-0.04em",
                          marginBottom: "0.35rem",
                        }}
                      >
                        {result.label}
                      </p>
                      <p style={{ fontSize: "clamp(0.9rem, 1.3vw, 1rem)", lineHeight: 1.6, color: "#f5f5f799" }}>
                        {result.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
