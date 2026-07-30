import { blogPosts } from "@/lib/data";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import SectionLabel from "@/components/ui/SectionLabel";
import SharedInsidePageSections from "@/components/sections/SharedInsidePageSections";
import BackToTop from "@/components/ui/BackToTop";
import CookieBanner from "@/components/ui/CookieBanner";
import BlogCard from "@/components/ui/BlogCard";
import type { BlogPost, Testimonial } from "@/types";

const faqs = [
  {
    question: "How often do you publish new articles?",
    answer: "We aim to publish 2-3 high-quality, deep-dive articles per month focusing on software engineering, product design, and digital growth strategies."
  },
  {
    question: "Can I request a specific topic to be covered?",
    answer: "Yes, we welcome suggestions from our readers and clients. If there is a specific technical or strategic topic you want us to cover, feel free to reach out."
  },
  {
    question: "Do you accept guest posts?",
    answer: "Currently, all content on the Arclink Edge blog is authored by our in-house engineering and design experts to maintain our high standard of technical accuracy."
  }
];

type BlogContentProps = {
  sanityLogos?: { name: string; src: string | null }[];
  sanityBlogs?: BlogPost[];
  sanityTestimonials?: Testimonial[];
};

export default function BlogContent({
  sanityLogos,
  sanityBlogs,
  sanityTestimonials,
}: BlogContentProps) {
  const displayBlogs = sanityBlogs && sanityBlogs.length > 0 ? sanityBlogs : blogPosts;

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

      <section className="relative px-6 pt-32 pb-20 lg:px-12 lg:pt-48 lg:pb-32">
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_bottom,#000_0%,#030713_34%,#071436_64%,#000_100%)]" />
        
        <div className="relative z-10 mx-auto max-w-[1600px]">
          <SectionLabel>Insights & Strategy</SectionLabel>
          <div className="grid lg:grid-cols-[1fr_0.4fr] gap-12 lg:gap-20 items-end mt-8">
            <div>
              <h1 
                className="text-5xl md:text-7xl lg:text-9xl font-medium leading-[1.05] tracking-[-0.04em] md:leading-[0.92] md:tracking-[-0.075em]"
                style={{ fontFamily: "var(--font-inter-tight)" }}
              >
                Our Blog.
              </h1>
            </div>
            <div className="pb-4">
              <p className="text-xl md:text-2xl text-white/60 leading-relaxed max-w-md" style={{ fontFamily: "var(--font-inter)", letterSpacing: "-0.02em" }}>
                Thought leadership, technical deep-dives, and product strategy from the Arclink Edge team.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-12 lg:pb-40 relative z-10">
        <div className="mx-auto max-w-[1600px]">
          <ol className="grid list-none gap-5 md:grid-cols-2 xl:grid-cols-3">
            {displayBlogs.map((post: BlogPost) => (
              <li key={post.id} className="h-full">
                <BlogCard post={post} headingLevel="h2" />
              </li>
            ))}
          </ol>
        </div>
      </section>

      <SharedInsidePageSections sanityLogos={sanityLogos} sanityTestimonials={sanityTestimonials} faqs={faqs} />
      <Footer />
      <BackToTop />
      <CookieBanner />
    </main>
  );
}
