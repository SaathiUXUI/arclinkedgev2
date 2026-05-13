import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogBySlug, getAllBlogSlugs } from "@/lib/blogs";
import { getBrandLogos, getSanityTestimonials } from "@/sanity/lib/api";
import BlogDetails from "./BlogDetails";

const SITE_URL = "https://www.arclinkedge.com";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);
  
  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${post.title} | Blog`,
    description: post.description,
    alternates: { canonical: `${SITE_URL}/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE_URL}/blog/${slug}`,
      images: [post.image],
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
    },
  };
}

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const [sanityLogos, sanityTestimonials] = await Promise.all([
    getBrandLogos(),
    getSanityTestimonials(),
  ]);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: "Arclink Edge",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo/aeglossy.png`,
      },
    },
    mainEntityOfPage: `${SITE_URL}/blog/${slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${SITE_URL}/blog/${slug}` },
    ],
  };

  return (
    <>
      {[articleSchema, breadcrumbSchema].map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <BlogDetails post={post} sanityLogos={sanityLogos} sanityTestimonials={sanityTestimonials} />
    </>
  );
}
