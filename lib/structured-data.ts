const SITE_URL = "https://arclinkedge.com";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Arclink Edge",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo.png`,
    width: 200,
    height: 60,
  },
  description:
    "Arclink Edge is a premium IT agency based in Ahmedabad, India specializing in web development, mobile apps, UI/UX design, and SaaS development.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ahmedabad",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "380001",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-98248-38067",
    contactType: "customer service",
    email: "hello@arclinkedge.com",
    availableLanguage: ["English", "Hindi", "Gujarati"],
  },
  sameAs: [
    "https://www.linkedin.com/company/arclink-edge",
    "https://www.instagram.com/arclinkedge",
    "https://twitter.com/arclinkedge",
    "https://www.behance.net/arclinkedge",
  ],
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  name: "Arclink Edge",
  image: `${SITE_URL}/og-image.png`,
  url: SITE_URL,
  telephone: "+91-98248-38067",
  email: "hello@arclinkedge.com",
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ahmedabad",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "380001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 23.0225,
    longitude: 72.5714,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Arclink Edge",
  description: "Premium IT agency in Ahmedabad offering web, mobile, and SaaS development",
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/search?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
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
  areaServed: { "@type": "Country", name: "India" },
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: SITE_URL,
  },
}));
