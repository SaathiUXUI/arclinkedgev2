import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight, Fraunces } from "next/font/google";
import SmoothScroll from "@/components/ui/SmoothScroll";
import LeadPopup from "@/components/ui/LeadPopup";
import "./globals.css";
import {
  organizationSchema,
  localBusinessSchema,
  websiteSchema,
  breadcrumbSchema,
  servicesSchema,
} from "@/lib/structured-data";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const SITE_URL = "https://www.arclinkedge.com";

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Arclink Edge — Premium IT Agency in New York, London, Dubai & Bangalore | Web, Mobile & SaaS Development",
    template: "%s | Arclink Edge",
  },
  description:
    "Arclink Edge is a premium IT agency in New York, London, Dubai & Bangalore. We build world-class web apps, mobile apps, SaaS products & UI/UX design for ambitious B2B brands globally.",
  keywords: [
    "IT agency New York, London, Dubai & Bangalore",
    "web development company London",
    "mobile app developers New York, London, Dubai & Bangalore",
    "SaaS development UAE",
    "UI UX design agency London",
    "hire software developers UK",
    "Next.js development Dubai",
    "React development New York, London, Dubai & Bangalore",
    "custom software engineering Dubai",
  ],
  authors: [{ name: "Arclink Edge", url: SITE_URL }],
  creator: "Arclink Edge",
  publisher: "Arclink Edge",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Arclink Edge",
    title:
      "Arclink Edge — Premium IT Agency in New York, London, Dubai & Bangalore | Web, Mobile & SaaS Development",
    description:
      "We build world-class digital products — web apps, mobile apps, SaaS & UI/UX design for ambitious B2B brands. Based in New York, London, Dubai & Bangalore.",
    images: [
      {
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Arclink Edge — Premium IT Agency in New York, London, Dubai & Bangalore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@arclinkedge",
    creator: "@arclinkedge",
    title: "Arclink Edge — Premium IT Agency in New York, London, Dubai & Bangalore",
    description:
      "We build world-class digital products — web apps, mobile apps, SaaS & UI/UX design for ambitious B2B brands.",
    images: [`${SITE_URL}/opengraph-image`],
  },
  alternates: { canonical: SITE_URL },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdSchemas = [
    organizationSchema,
    localBusinessSchema,
    websiteSchema,
    breadcrumbSchema,
    ...servicesSchema,
  ];

  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable} ${fraunces.variable} scroll-smooth`}>
      <head>
        {jsonLdSchemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <div className="grain-overlay" aria-hidden="true" />
        <SmoothScroll>{children}</SmoothScroll>
        <LeadPopup />
      </body>
    </html>
  );
}
