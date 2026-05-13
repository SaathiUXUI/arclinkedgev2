import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects";
import { getBrandLogos, getSanityTestimonials } from "@/sanity/lib/api";
import ProjectContent from "./ProjectContent";

const SITE_URL = "https://www.arclinkedge.com";

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
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - ${project.client} | Case Study`,
    description: project.overview,
    alternates: { canonical: `${SITE_URL}/work/${slug}` },
    openGraph: {
      title: `${project.title} Case Study`,
      description: project.overview,
      url: `${SITE_URL}/work/${slug}`,
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

  const projectImage = project.image.startsWith("http")
    ? project.image
    : `${SITE_URL}${project.image}`;

  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: `${project.title} Case Study`,
    headline: project.title,
    description: project.overview,
    image: projectImage,
    datePublished: `${project.year}-01-01`,
    creator: { "@id": `${SITE_URL}/#organization`, name: "Arclink Edge" },
    mainEntityOfPage: `${SITE_URL}/work/${slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Work", item: `${SITE_URL}/work` },
      { "@type": "ListItem", position: 3, name: project.title, item: `${SITE_URL}/work/${slug}` },
    ],
  };

  return (
    <>
      {[caseStudySchema, breadcrumbSchema].map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <ProjectContent project={project} sanityLogos={sanityLogos} sanityTestimonials={sanityTestimonials} />
    </>
  );
}
