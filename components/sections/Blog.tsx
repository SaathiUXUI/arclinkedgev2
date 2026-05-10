"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";
import { blogPosts as defaultBlogPosts } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import { useState } from "react";
import HeadingReveal from "@/components/ui/HeadingReveal";
import { TextButton } from "@/components/ui/Button";
import type { BlogPost } from "@/types";

// Sub-component for individual card to track mouse state locally
function BlogCard({ post, index }: { post: any; index: number }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <Link href={post.href} className="block outline-none" aria-label={`View details of ${post.title}`}>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative flex flex-col md:flex-row items-center gap-6 md:gap-10 p-4 transition-all duration-300 border border-transparent hover:bg-[rgba(255,255,255,0.02)] hover:border-[rgba(255,255,255,0.05)] cursor-pointer"
        style={{ borderRadius: 0 }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseMove={handleMouseMove}
      >
        {/* Custom Follow Cursor Tooltip */}
        <motion.div
          className="absolute pointer-events-none z-50 px-2 py-1 flex items-center justify-center whitespace-nowrap"
          animate={{
            x: mousePos.x - 50, // Center offset
            y: mousePos.y - 100, // Strictly above cursor
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
          <span className="text-[10px] uppercase tracking-widest font-medium text-white drop-shadow-md">
            View Details
          </span>
        </motion.div>

        {/* Left Side: Image */}
        <div
          className="relative overflow-hidden w-full md:w-[320px] shrink-0"
          style={{ aspectRatio: "16/9", borderRadius: 0 }}
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 320px"
            loading="lazy"
          />
          {/* Category tag */}
          <div className="absolute top-3 left-3">
            <span
              className="text-[10px] uppercase tracking-wider px-2.5 py-1 font-semibold backdrop-blur-md bg-black/50"
              style={{ color: "#fff", borderRadius: 0 }}
            >
              {post.category}
            </span>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="flex-1 flex flex-col justify-center py-2 w-full">

          {/* Meta data */}
          <div className="flex items-center gap-4 mb-4 text-xs font-medium uppercase tracking-wider" style={{ color: "#8E8E93" }}>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} aria-hidden="true" />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </span>
            <span className="w-1 h-1 bg-[#333] rounded-full" />
            <span className="flex items-center gap-1.5">
              <Clock size={14} aria-hidden="true" />
              {post.readTime}
            </span>
          </div>

          {/* Title */}
          <h3
            className="text-xl md:text-2xl font-medium mb-3 leading-snug transition-colors duration-300 group-hover:text-[#0052FF]"
            style={{
              fontFamily: "var(--font-inter-tight)",
              color: "#F5F5F7",
              letterSpacing: "-0.01em",
            }}
          >
            {post.title}
          </h3>

          {/* Description */}
          {post.description && (
            <p className="text-sm leading-relaxed text-[#8E8E93] max-w-3xl line-clamp-2">
              {post.description}
            </p>
          )}

        </div>
      </motion.article>
    </Link>
  );
}

export default function Blog({ sanityBlogs }: { sanityBlogs?: any[] }) {
  const displayPosts = sanityBlogs && sanityBlogs.length > 0 ? sanityBlogs : defaultBlogPosts;
  return (
    <section
      id="blog"
      className="py-24 lg:py-40 bg-[#000000] relative overflow-hidden"
      aria-labelledby="blog-heading"
    >
      {/* Background Blur Elements - Seamless at 0.2 Opacity */}
      <div
        className="absolute -right-[15%] top-0 w-[45%] h-[60%] rounded-full pointer-events-none opacity-[0.2] mix-blend-screen"
        style={{
          background: "radial-gradient(circle, #0052FF 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -left-[10%] bottom-[10%] w-[40%] h-[50%] rounded-full pointer-events-none opacity-[0.2] mix-blend-screen"
        style={{
          background: "radial-gradient(circle, #D0F504 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute left-[30%] top-[20%] w-[25%] h-[30%] rounded-full pointer-events-none opacity-[0.1] mix-blend-screen"
        style={{
          background: "radial-gradient(circle, #0052FF 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute right-[20%] bottom-0 w-[30%] h-[40%] rounded-full pointer-events-none opacity-[0.1] mix-blend-screen"
        style={{
          background: "radial-gradient(circle, #D0F504 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
        aria-hidden="true"
      />

      <div
        className="mx-auto max-w-[1600px] relative z-10"
        style={{ paddingLeft: "clamp(16px,5vw,80px)", paddingRight: "clamp(16px,5vw,80px)" }}
      >
        {/* Header */}
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <HeadingReveal
              id="blog-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-medium"
              style={{
                fontFamily: "var(--font-inter-tight)",
                color: "#F5F5F7",
                letterSpacing: "-0.03em",
              }}
            >
              Latest insights
            </HeadingReveal>
          </div>

          <div>
            <TextButton href="/blog" icon={ArrowUpRight}>
              View all articles
            </TextButton>
          </div>
        </div>

        {/* Cards List */}
        <div className="flex flex-col gap-4">
          {displayPosts.map((post: any, i: number) => (
            <BlogCard key={post.id} post={post} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
