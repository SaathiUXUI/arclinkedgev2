import type { MetadataRoute } from "next";

const SITE_URL = "https://arclinkedge.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    { url: SITE_URL, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${SITE_URL}/about`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${SITE_URL}/work`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${SITE_URL}/blog`, priority: 0.7, changeFrequency: "daily" as const },
    { url: `${SITE_URL}/careers`, priority: 0.6, changeFrequency: "weekly" as const },
    { url: `${SITE_URL}/contact`, priority: 0.9, changeFrequency: "monthly" as const },
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
    lastModified: now,
  }));

  return [
    ...staticPages.map((p) => ({ ...p, lastModified: now })),
    ...servicePages,
  ];
}
