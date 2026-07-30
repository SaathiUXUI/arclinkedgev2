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
import { TextButton, PrimaryButton } from "@/components/ui/Button";
import { formatDate } from "@/lib/utils";
import { PortableText } from "@portabletext/react";

interface BlogDetailsProps {
  post: {
    title: string;
    description: string;
    category: string;
    date: string;
    readTime: string;
    image: string;
    content: any;
    author: {
      name: string;
      role: string;
      avatar: string;
    };
    tags: string[];
    ctaType?: string;
  };
  sanityLogos?: any[];
  sanityTestimonials?: any[];
}

const faqs = [
  {
    question: "Do you offer the services discussed in this article?",
    answer: "Yes! The insights we share on our blog are a direct reflection of the work we do for our clients. Whether it's web development, UI/UX design, or technical SEO, we can help."
  },
  {
    question: "How can I hire your team for my next project?",
    answer: "You can reach out to us via the Contact form or browse our 'Hire' section to find dedicated specialists for your specific project needs."
  },
  {
    question: "Can I share this article on my own website?",
    answer: "You are welcome to link to this article from your website or share it on social media. Please ensure you credit Arclink Edge as the original source."
  }
];

const ctaMapping: Record<string, { title: string; href: string }> = {
  'web-developer': { title: 'Hire Web Developers', href: '/hire/web-developer' },
  'mobile-app-developer': { title: 'Hire Mobile App Developers', href: '/hire/mobile-app-developer' },
  'ui-ux-designer': { title: 'Hire UI/UX Designers', href: '/hire/ui-ux-designer' },
  'saas-developer': { title: 'Hire SaaS Developers', href: '/hire/saas-developer' },
  'ecommerce-developer': { title: 'Hire E-commerce Developers', href: '/hire/ecommerce-developer' },
  'devops-engineer': { title: 'Hire DevOps Engineers', href: '/hire/devops-engineer' },
  'api-developer': { title: 'Hire API Developers', href: '/hire/api-developer' },
  'ai-specialist': { title: 'Hire AI Specialists', href: '/hire/ai-specialist' },
  'seo-specialist': { title: 'Hire SEO Specialists', href: '/hire/seo-specialist' },
};

export default function BlogDetails({ post, sanityLogos, sanityTestimonials }: BlogDetailsProps) {
  const articleContent = Array.isArray(post.content)
    ? post.content.filter((block) => {
        if (block?._type !== "block" || block?.style !== "h1") return true;

        const headingText = Array.isArray(block.children)
          ? block.children.map((child: { text?: string }) => child.text ?? "").join("")
          : "";

        return headingText.trim() !== post.title.trim();
      })
    : post.content;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.description,
          url: window.location.href,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <main id="main-content" className="bg-black text-[#F5F5F7] min-h-screen overflow-x-clip selection:bg-[#0052FF] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
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
            <div className="flex items-center gap-4 type-label type-legacy-009">
              <span className="text-[#D0F504] hover:text-white transition-colors cursor-default">{post.category}</span>
              <span className="w-1 h-1 bg-white/20 rounded-full" />
              <span className="text-white/40">{post.readTime}</span>
            </div>

            <h1 
              className="type-legacy-010"
            >
              {post.title}
            </h1>

            <p 
              className="text-white/60 type-b1 type-legacy-011"
            >
              {post.description}
            </p>

            <div className="flex items-center gap-4 pt-8 border-t border-white/10">
              <div className="relative w-12 h-12 overflow-hidden rounded-full border border-white/10">
                <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
              </div>
              <div>
                <p className="text-white type-b3 type-legacy-012">{post.author.name}</p>
                <p className="text-white/40 mt-0.5 type-label type-legacy-013">{post.author.role}</p>
              </div>
              <div className="ml-auto hidden sm:block">
                <time className="text-white/40 type-label type-legacy-014">{formatDate(post.date)}</time>
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
            className="relative aspect-[16/9] w-full overflow-hidden border border-white/10"
          >
            <Image src={post.image} alt={post.title} fill className="object-cover" priority />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="px-6 py-20 relative z-10 bg-black">
        <div className="mx-auto max-w-3xl">
          <article 
            className="type-prose max-w-none text-white/70 [&_h2]:text-white [&_h2]:mt-16 [&_h2]:mb-8 [&_h3]:text-white [&_h3]:mt-12 [&_h3]:mb-6 [&_p]:mb-8 [&_blockquote]:border-l-4 [&_blockquote]:border-[#D0F504] [&_blockquote]:bg-white/[0.03] [&_blockquote]:py-6 [&_blockquote]:px-8 [&_blockquote]:mb-10 [&_blockquote]:text-white/90 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-8 [&_ul]:space-y-3 [&_li]:pl-2 [&_strong]:text-white type-legacy-015"
          >
            {typeof articleContent === 'string' ? (
              <div dangerouslySetInnerHTML={{ __html: articleContent }} />
            ) : Array.isArray(articleContent) ? (
              <PortableText value={articleContent} />
            ) : null}
          </article>

          {/* CTA Section */}
          {post.ctaType && post.ctaType !== 'none' && ctaMapping[post.ctaType] && (
            <div className="mt-24 p-8 lg:p-12 bg-white/[0.02] border border-white/10 text-center">
              <h3 className="mb-6 type-legacy-016">
                Ready to scale your product?
              </h3>
              <p className="text-white/60 mb-10 max-w-xl mx-auto type-legacy-017">
                Our elite team is ready to help you build, design, and scale your next big idea with rapid precision.
              </p>
              <PrimaryButton href={ctaMapping[post.ctaType].href}>
                {ctaMapping[post.ctaType].title}
              </PrimaryButton>
            </div>
          )}

          {/* Tags & Share */}
          <div className="mt-24 pt-12 border-t border-white/10 flex flex-wrap items-center justify-between gap-8">
            <div className="flex flex-wrap gap-3">
              {post.tags.map(tag => (
                <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 text-white/40 hover:text-white hover:border-white/20 transition-all cursor-default type-label type-legacy-018">
                  #{tag}
                </span>
              ))}
            </div>
            <TextButton 
              onClick={handleShare}
              href="#"
              icon={Share2}
              iconPosition="left"
              className="cursor-pointer"
            >
              Share Article
            </TextButton>
          </div>
        </div>
      </section>

      <SharedInsidePageSections sanityLogos={sanityLogos} sanityTestimonials={sanityTestimonials} faqs={faqs} />
      <Footer />
      <BackToTop />
    </main>
  );
}
