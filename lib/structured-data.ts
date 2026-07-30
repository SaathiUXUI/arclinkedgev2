const SITE_URL = "https://www.arclinkedge.com";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Arclink Edge",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo/aeglossy.png`,
    width: 200,
    height: 60,
  },
  description:
    "Arclink Edge is a fully remote premium global IT agency specializing in web development, mobile apps, UI/UX design, and SaaS development without passing physical-office overhead into client bills.",
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "India" },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+1-216-418-4653",
      contactType: "sales",
      email: "hello@arclinkedge.com",
      availableLanguage: ["English"],
      areaServed: ["US", "GB", "AE"]
    },
    {
      "@type": "ContactPoint",
      telephone: "+91-98248-38067",
      contactType: "customer service",
      email: "hello@arclinkedge.com",
      availableLanguage: ["English", "Hindi"],
      areaServed: ["IN"]
    }
  ],
  sameAs: [
    "https://www.linkedin.com/company/arclink-edge",
    "https://www.instagram.com/arclinkedge",
    "https://twitter.com/arclinkedge",
    "https://www.behance.net/arclinkedge",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Arclink Edge",
  description: "Fully remote premium IT agency serving global clients with web, mobile, SaaS, and UI/UX development",
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
  ],
};

export const servicesSchema = [
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "SaaS Development",
  "E-commerce Solutions",
  "Cloud & DevOps",
].map((service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: service,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "India" }
  ],
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: SITE_URL,
  },
}));
