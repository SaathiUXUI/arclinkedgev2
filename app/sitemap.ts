import type { MetadataRoute } from "next";
import { getAllBlogSlugs } from "@/lib/blogs";
import { getAllProjectSlugs } from "@/lib/projects";

const SITE_URL = "https://www.arclinkedge.com";
const LAST_MODIFIED = new Date("2026-05-12");

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = [
    { url: SITE_URL, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${SITE_URL}/services`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${SITE_URL}/about`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${SITE_URL}/work`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${SITE_URL}/blog`, priority: 0.7, changeFrequency: "daily" as const },
    { url: `${SITE_URL}/careers`, priority: 0.6, changeFrequency: "monthly" as const },
    { url: `${SITE_URL}/hire`, priority: 0.85, changeFrequency: "monthly" as const },
    { url: `${SITE_URL}/process`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${SITE_URL}/contact`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${SITE_URL}/privacy`, priority: 0.3, changeFrequency: "yearly" as const },
    { url: `${SITE_URL}/terms`, priority: 0.3, changeFrequency: "yearly" as const },
    { url: `${SITE_URL}/cookies`, priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const servicePages = [
    "web-development",
    "mobile-app-development",
    "ui-ux-design",
    "saas-development",
    "ecommerce",
    "cloud-devops",
    "api-integration",
    "ai-automation",
    "digital-marketing",
  ].map((slug) => ({
    url: `${SITE_URL}/services/${slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
    lastModified: LAST_MODIFIED,
  }));

  const hirePages = [
    "web-developer",
    "mobile-app-developer",
    "ui-ux-designer",
    "saas-developer",
    "ecommerce-developer",
    "devops-engineer",
    "api-developer",
    "ai-specialist",
    "seo-specialist",
  ].map((slug) => ({
    url: `${SITE_URL}/hire/${slug}`,
    priority: 0.85,
    changeFrequency: "monthly" as const,
    lastModified: LAST_MODIFIED,
  }));

  const blogPages = (await getAllBlogSlugs()).map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    priority: 0.6,
    changeFrequency: "monthly" as const,
    lastModified: LAST_MODIFIED,
  }));

  const workPages = (await getAllProjectSlugs()).map((slug) => ({
    url: `${SITE_URL}/work/${slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
    lastModified: LAST_MODIFIED,
  }));

  return [
    ...staticPages.map((p) => ({ ...p, lastModified: LAST_MODIFIED })),
    ...servicePages,
    ...hirePages,
    ...blogPages,
    ...workPages,
  ];
}
