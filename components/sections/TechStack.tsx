"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { techStack } from "@/lib/data";
import HeadingReveal from "@/components/ui/HeadingReveal";

const techIcons: Record<string, string> = {
  "React": "/tools/reactjs.svg",
  "Next.js": "/tools/nextjs.svg",
  "Node.js": "/tools/nodejs.svg",
  "AWS": "/tools/aws.svg",
  "Figma": "/tools/figma.svg",
  "Firebase": "/tools/firebase.svg",
  "PHP": "/tools/php.svg",
  "Supabase": "/tools/supabase.svg",
  "Vercel": "/tools/vercel.svg"
};

// Group techStack by category for organized rendering
const categorizedTech = [
  {
    title: "Front-end Development",
    items: techStack.filter(t => t.category === "frontend"),
    exp: "5+"
  },
  {
    title: "Back-end & API",
    items: techStack.filter(t => t.category === "backend" || t.category === "api" || t.category === "language"),
    exp: "4+"
  },
  {
    title: "Mobile App Development",
    items: techStack.filter(t => t.category === "mobile"),
    exp: "3+"
  },
  {
    title: "Database & Cloud",
    items: techStack.filter(t => t.category === "database" || t.category === "cloud" || t.category === "devops"),
    exp: "4+"
  },
  {
    title: "UI/UX Design",
    items: techStack.filter(t => t.category === "design"),
    exp: "6+"
  }
];

export default function TechStack() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="technology"
      className="relative overflow-hidden bg-[#000000] py-24 lg:py-32"
      aria-labelledby="tech-heading"
    >
      {/* Background glowing ellipses matching Case Studies */}
      <div
        className="absolute top-[20%] -left-[15%] w-[40vw] h-[60vh] rounded-full pointer-events-none opacity-[0.15]"
        style={{ backgroundColor: "#0052FF", filter: "blur(150px)", zIndex: 0 }}
      />
      <div
        className="absolute bottom-[10%] -right-[15%] w-[40vw] h-[70vh] rounded-full pointer-events-none opacity-[0.15]"
        style={{ backgroundColor: "#0052FF", filter: "blur(160px)", zIndex: 0 }}
      />

      <div
        className="relative z-10 mx-auto max-w-[1600px]"
        style={{ paddingLeft: "clamp(16px,5vw,80px)", paddingRight: "clamp(16px,5vw,80px)" }}
      >
        {/* Header matching Case Studies */}
        <div className="mb-16 md:mb-24">
          <HeadingReveal
            id="tech-heading"
            style={{
              fontFamily: "var(--font-inter-tight)",
              fontSize: "clamp(3.2rem,8vw,6.8rem)",
              fontWeight: 500,
              lineHeight: 0.95,
              letterSpacing: "-0.07em",
              color: "#F5F5F7",
            }}
          >
            Technologies we master
          </HeadingReveal>
          <p
            className="mt-6 max-w-xl"
            style={{ fontSize: "18px", lineHeight: 1.6, letterSpacing: "-0.02em", color: "rgba(245,245,247,0.52)" }}
          >
            A comprehensive stack of modern tools, frameworks, and infrastructure we use to build scalable digital products.
          </p>
        </div>

        {/* Categorized Tech Layout */}
        <div className="flex flex-col gap-20">
          {categorizedTech.map((category, catIdx) => (
            <div key={category.title}>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-8 text-2xl md:text-3xl font-medium tracking-tight"
                style={{ color: "#F5F5F7", fontFamily: "var(--font-inter-tight)" }}
              >
                {category.title}
              </motion.h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.items.map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="group cursor-default relative w-full overflow-hidden flex items-center gap-5"
                    style={{
                      borderRadius: 0,
                      backgroundColor: "rgba(10, 10, 15, 0.4)",
                      backdropFilter: "blur(16px)",
                      WebkitBackdropFilter: "blur(16px)",
                      border: "1px solid rgba(255, 255, 255, 0.04)",
                      padding: "16px",
                    }}
                  >
                    {/* Left: Logo Chip */}
                    <div
                      className="w-12 h-12 shrink-0 rounded-none flex items-center justify-center text-sm font-bold transition-transform duration-500 group-hover:scale-110"
                      style={{
                        backgroundColor: "rgba(0,82,255,0.06)",
                        color: "#0052FF",
                        border: "1px solid rgba(0,82,255,0.15)",
                        letterSpacing: "0.05em"
                      }}
                    >
                      {techIcons[tech.name] ? (
                        <Image src={techIcons[tech.name]} alt={tech.name} width={24} height={24} className="object-contain" />
                      ) : (
                        tech.name.slice(0, 2).toUpperCase()
                      )}
                    </div>

                    {/* Right: Name & Experience */}
                    <div className="flex flex-col justify-center">
                      <h4
                        className="text-md font-medium mb-1"
                        style={{ color: "#F5F5F7", letterSpacing: "-0.02em" }}
                      >
                        {tech.name}
                      </h4>
                      <p className="flex items-center gap-1.5" style={{ fontSize: "0.85rem", fontWeight: 600, color: "#22C55E" }}>
                        {category.exp}{" "}
                        <span style={{ color: "rgba(245,245,247,0.4)", fontWeight: 400 }}>Years Exp.</span>
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
