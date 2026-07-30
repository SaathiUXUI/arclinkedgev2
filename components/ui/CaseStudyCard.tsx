"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/types";

interface CaseStudyCardProps {
  study: CaseStudy;
  i: number;
  headingLevel?: "h2" | "h3";
}

export default function CaseStudyCard({
  study,
  i,
  headingLevel = "h3",
}: CaseStudyCardProps) {
  const HeadingTag = headingLevel;
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <Link href={study.href || `/work/${study.id}`} className="block">
      <motion.article
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.72, delay: (i % 2) * 0.1, ease: [0.21, 0.45, 0.32, 0.9] }}
        className="group relative cursor-pointer flex flex-col gap-6"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseMove={handleMouseMove}
      >
        {/* Custom Follow Cursor Tooltip */}
        <motion.div
          className="absolute pointer-events-none z-50 px-2 py-1 flex items-center justify-center whitespace-nowrap"
          animate={{
            x: mousePos.x - 50, // Center offset
            y: mousePos.y - 20, // Strictly above cursor
            opacity: isHovering ? 1 : 0,
            scale: isHovering ? 1 : 0.8
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.10)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: 0,
          }}
        >
          <span className="text-white drop-shadow-md type-label type-legacy-165">
            View Details
          </span>
        </motion.div>

        {/* Image Container */}
        <div
          className="relative w-full overflow-hidden"
          style={{ aspectRatio: "16/9", borderRadius: 0 }}
        >
          {study.image ? (
            <Image
              src={study.image}
              alt={`${study.title} — ${study.client} case study by Arclink Edge`}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading={i < 2 ? "eager" : "lazy"}
            />
          ) : (
            <div className="w-full h-full bg-[#1F1F23] flex items-center justify-center text-white/10 type-b1 type-legacy-166">
              <span>Project Preview</span>
            </div>
          )}
        </div>

        {/* Text content below image */}
        <div className="relative flex flex-col justify-end">
          {/* Arrow icon */}
          <div className="absolute bottom-0 right-0 opacity-0 translate-x-[-15px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-[0.21,0.45,0.32,0.9]">
            <ArrowUpRight size={24} color="#F5F5F7" />
          </div>

          <HeadingTag
            className="mb-1.5 type-legacy-167"
            style={{ color: "#F5F5F7" }}
          >
            {study.title}
          </HeadingTag>

          {(study.metric || study.metricLabel) && (
            <p className="flex items-center gap-2 type-legacy-168" style={{ color: "#22C55E" }}>
              {study.metric}{" "}
              <span className="type-legacy-169" style={{ color: "rgba(245,245,247,0.4)" }}>{study.metricLabel}</span>
            </p>
          )}
        </div>
      </motion.article>
    </Link>
  );
}
