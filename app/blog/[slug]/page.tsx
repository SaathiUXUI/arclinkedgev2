import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogBySlug, getAllBlogSlugs } from "@/lib/blogs";
import { getBrandLogos, getSanityTestimonials } from "@/sanity/lib/api";
import BlogDetails from "./BlogDetails";

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
      title: "Article Not Found | Arclink Edge",
    };
  }

  return {
    title: `${post.title} | Arclink Edge Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
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
  return <BlogDetails post={post} sanityLogos={sanityLogos} sanityTestimonials={sanityTestimonials} />;
}
