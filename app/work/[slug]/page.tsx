import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects";
import { getBrandLogos, getSanityTestimonials } from "@/sanity/lib/api";
import ProjectContent from "./ProjectContent";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  
  if (!project) {
    return {
      title: "Project Not Found | Arclink Edge",
    };
  }

  return {
    title: `${project.title} — ${project.client} | Case Study | Arclink Edge`,
    description: project.overview,
    openGraph: {
      title: `${project.title} Case Study`,
      description: project.overview,
      images: [project.image],
    },
  };
}

export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const [sanityLogos, sanityTestimonials] = await Promise.all([
    getBrandLogos(),
    getSanityTestimonials(),
  ]);
  return <ProjectContent project={project} sanityLogos={sanityLogos} sanityTestimonials={sanityTestimonials} />;
}
