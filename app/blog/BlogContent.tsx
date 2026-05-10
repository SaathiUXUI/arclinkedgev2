"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import SectionLabel from "@/components/ui/SectionLabel";
import SharedInsidePageSections from "@/components/sections/SharedInsidePageSections";
import BackToTop from "@/components/ui/BackToTop";
import CookieBanner from "@/components/ui/CookieBanner";
import type { BlogPost } from "@/types";

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
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
    <Link href={post.href} className="block outline-none">
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative flex flex-col md:flex-row items-center gap-6 md:gap-10 p-4 transition-all duration-300 border border-transparent hover:bg-[rgba(255,255,255,0.02)] hover:border-[rgba(255,255,255,0.05)] cursor-pointer"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseMove={handleMouseMove}
      >
        <motion.div
          className="absolute pointer-events-none z-50 px-2 py-1 flex items-center justify-center whitespace-nowrap"
          animate={{
            x: mousePos.x - 50,
            y: mousePos.y - 100,
            opacity: isHovering ? 1 : 0,
            scale: isHovering ? 1 : 0.8
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.10)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: 0,
          }}
        >
          <span className="text-[10px] uppercase tracking-widest font-medium text-white drop-shadow-md">
            View Details
          </span>
        </motion.div>

        <div className="relative overflow-hidden w-full md:w-[320px] shrink-0" style={{ aspectRatio: "16/9" }}>
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 font-semibold backdrop-blur-md bg-black/50 text-white" style={{ borderRadius: 0 }}>
              {post.category}
            </span>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center py-2 w-full">
          <div className="flex items-center gap-4 mb-4 text-xs font-medium uppercase tracking-wider text-[#8E8E93]">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              <time>{formatDate(post.date)}</time>
            </span>
            <span className="w-1 h-1 bg-[#333] rounded-full" />
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              {post.readTime}
            </span>
          </div>
          <h2 className="text-xl md:text-2xl font-medium mb-3 leading-snug" style={{ fontFamily: "var(--font-inter-tight)", color: "#F5F5F7" }}>
            {post.title}
          </h2>
          <p className="text-sm leading-relaxed text-[#8E8E93] max-w-3xl line-clamp-2">
            {post.description}
          </p>
        </div>
      </motion.article>
    </Link>
  );
}

export default function BlogContent({ sanityLogos, sanityBlogs, sanityTestimonials }: { sanityLogos?: any[]; sanityBlogs?: any[]; sanityTestimonials?: any[] }) {
  const displayBlogs = sanityBlogs && sanityBlogs.length > 0 ? sanityBlogs : blogPosts;

  return (
    <main className="bg-black text-[#F5F5F7] min-h-screen overflow-x-clip selection:bg-[#0052FF] selection:text-white">
      <Navbar />

      <section className="relative px-6 pt-32 pb-20 lg:px-12 lg:pt-48 lg:pb-32">
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_bottom,#000_0%,#030713_34%,#071436_64%,#000_100%)]" />
        
        <div className="relative z-10 mx-auto max-w-[1600px]">
          <SectionLabel>Insights & Strategy</SectionLabel>
          <div className="grid lg:grid-cols-[1fr_0.4fr] gap-12 lg:gap-20 items-end mt-8">
            <div>
              <h1 
                className="text-5xl md:text-7xl lg:text-9xl font-medium leading-[0.92]"
                style={{ fontFamily: "var(--font-inter-tight)", letterSpacing: "-0.075em" }}
              >
                Our Blog.
              </h1>
            </div>
            <div className="pb-4">
              <p className="text-xl md:text-2xl text-white/60 leading-relaxed max-w-md">
                Thought leadership, technical deep-dives, and product strategy from the Arclink Edge team.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-12 lg:pb-40 relative z-10">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col gap-6">
            {displayBlogs.map((post: any, i: number) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </div>
        </div>
      </section>

      <SharedInsidePageSections sanityLogos={sanityLogos} sanityTestimonials={sanityTestimonials} />
      <Footer />
      <BackToTop />
      <CookieBanner />
    </main>
  );
}
