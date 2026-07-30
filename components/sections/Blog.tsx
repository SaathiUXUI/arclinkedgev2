import { ArrowUpRight } from "lucide-react";
import { blogPosts as defaultBlogPosts } from "@/lib/data";
import HeadingReveal from "@/components/ui/HeadingReveal";
import { SecondaryNavButton } from "@/components/ui/Button";
import BlogCard from "@/components/ui/BlogCard";
import type { BlogPost } from "@/types";

export default function Blog({ sanityBlogs }: { sanityBlogs?: BlogPost[] }) {
  const posts =
    sanityBlogs && sanityBlogs.length > 0 ? sanityBlogs : defaultBlogPosts;
  const latestPosts = posts.slice(0, 3);

  return (
    <section
      id="blog"
      className="relative overflow-hidden bg-[#000000] py-24 lg:py-32"
      aria-labelledby="blog-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 48%, rgba(0,82,255,0.1) 0%, rgba(0,82,255,0.03) 28%, transparent 54%)," +
            "linear-gradient(180deg, #000000 0%, #02040A 52%, #000000 100%)",
        }}
      />

      <div
        className="relative z-10 mx-auto max-w-[1600px]"
        style={{
          paddingLeft: "clamp(16px,5vw,80px)",
          paddingRight: "clamp(16px,5vw,80px)",
        }}
      >
        <header className="mb-14 lg:mb-20">
          <div>
            <HeadingReveal
              id="blog-heading"
              style={{
                fontFamily: "var(--font-inter-tight)",
                fontSize: "clamp(3.2rem,8vw,6.8rem)",
                fontWeight: 500,
                lineHeight: 0.95,
                letterSpacing: "-0.07em",
                color: "#F5F5F7",
              }}
            >
              Latest insights
            </HeadingReveal>
            <p className="mt-6 max-w-xl text-base leading-relaxed tracking-[-0.02em] text-white/52 md:text-lg">
              Practical perspectives on product design, engineering, AI, and digital growth.
            </p>
          </div>
        </header>

        <ol className="grid list-none gap-5 md:grid-cols-2 xl:grid-cols-3">
          {latestPosts.map((post) => (
            <li key={post.id} className="h-full">
              <BlogCard post={post} />
            </li>
          ))}
        </ol>

        <div className="mt-12 flex justify-center lg:mt-16">
          <SecondaryNavButton href="/blog" icon={ArrowUpRight}>
            View all articles
          </SecondaryNavButton>
        </div>
      </div>
    </section>
  );
}
