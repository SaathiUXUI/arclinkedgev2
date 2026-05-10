"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2, Tag } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import SectionLabel from "@/components/ui/SectionLabel";
import SharedInsidePageSections from "@/components/sections/SharedInsidePageSections";
import BackToTop from "@/components/ui/BackToTop";
import CookieBanner from "@/components/ui/CookieBanner";
import { TextButton } from "@/components/ui/Button";
import { formatDate } from "@/lib/utils";

interface BlogDetailsProps {
  post: {
    title: string;
    description: string;
    category: string;
    date: string;
    readTime: string;
    image: string;
    content: string;
    author: {
      name: string;
      role: string;
      avatar: string;
    };
    tags: string[];
  };
  sanityLogos?: any[];
  sanityTestimonials?: any[];
}

export default function BlogDetails({ post, sanityLogos, sanityTestimonials }: BlogDetailsProps) {
  return (
    <main className="bg-black text-[#F5F5F7] min-h-screen overflow-x-clip selection:bg-[#0052FF] selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative px-6 pt-32 pb-20 lg:px-12 lg:pt-48 lg:pb-32">
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_bottom,#000_0%,#030713_34%,#071436_64%,#000_100%)]" />
        
        <div className="relative z-10 mx-auto max-w-4xl">
          <TextButton 
            href="/blog" 
            className="mb-12"
            icon={ArrowLeft}
            iconPosition="left"
          >
            Back to Blog
          </TextButton>

          <div className="space-y-8">
            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-[#D0F504]">
              <span>{post.category}</span>
              <span className="w-1 h-1 bg-white/20 rounded-full" />
              <span className="text-white/40">{post.readTime}</span>
            </div>

            <h1 
              className="text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.1]"
              style={{ fontFamily: "var(--font-inter-tight)", letterSpacing: "-0.05em" }}
            >
              {post.title}
            </h1>

            <p 
              className="text-xl md:text-2xl text-white/60 leading-relaxed font-light"
              style={{ letterSpacing: "-0.02em" }}
            >
              {post.description}
            </p>

            <div className="flex items-center gap-6 pt-8 border-t border-white/10">
              <div className="relative w-12 h-12 overflow-hidden rounded-full border border-white/10">
                <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{post.author.name}</p>
                <p className="text-xs text-white/40 uppercase tracking-wider mt-0.5">{post.author.role}</p>
              </div>
              <div className="ml-auto hidden sm:block">
                <time className="text-xs text-white/40 uppercase tracking-widest">{formatDate(post.date)}</time>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Image */}
      <section className="px-6 lg:px-12 pb-20 relative z-10">
        <div className="mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[21/9] w-full overflow-hidden border border-white/10"
          >
            <Image src={post.image} alt={post.title} fill className="object-cover" priority />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="px-6 py-20 relative z-10 bg-black">
        <div className="mx-auto max-w-3xl">
          <article 
            className="max-w-none text-lg text-white/70 leading-relaxed
              [&_h2]:text-3xl [&_h2]:font-medium [&_h2]:text-white [&_h2]:mt-16 [&_h2]:mb-8 [&_h2]:tracking-tight
              [&_h3]:text-2xl [&_h3]:font-medium [&_h3]:text-white [&_h3]:mt-12 [&_h3]:mb-6
              [&_p]:mb-8 [&_p]:leading-relaxed
              [&_blockquote]:border-l-4 [&_blockquote]:border-[#D0F504] [&_blockquote]:bg-white/[0.03] [&_blockquote]:py-6 [&_blockquote]:px-8 [&_blockquote]:italic [&_blockquote]:mb-10 [&_blockquote]:text-white/90
              [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-8 [&_ul]:space-y-3
              [&_li]:pl-2
              [&_strong]:text-white [&_strong]:font-semibold"
            style={{ fontFamily: "var(--font-inter-tight)" }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags & Share */}
          <div className="mt-24 pt-12 border-t border-white/10 flex flex-wrap items-center justify-between gap-8">
            <div className="flex flex-wrap gap-3">
              {post.tags.map(tag => (
                <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 text-xs font-medium text-white/60 hover:text-[#D0F504] hover:border-[#D0F504] transition-all cursor-default">
                  #{tag}
                </span>
              ))}
            </div>
            <button className="flex items-center gap-2 text-sm font-medium text-white/40 hover:text-white transition-colors">
              <Share2 size={16} />
              Share Article
            </button>
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
