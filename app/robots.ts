import type { MetadataRoute } from "next";

const SITE_URL = "https://www.arclinkedge.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
          "/portal-secure-88/",
          "/studio/",
          "/arclink-admin/",
        ],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
