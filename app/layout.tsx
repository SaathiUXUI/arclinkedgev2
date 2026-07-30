import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight, Fraunces } from "next/font/google";
import Script from "next/script";
import ViewportAnimationController from "@/components/ui/ViewportAnimationController";
import "./globals.css";
import {
  organizationSchema,
  websiteSchema,
  breadcrumbSchema,
  servicesSchema,
} from "@/lib/structured-data";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  adjustFontFallback: false,
  weight: ["400", "500", "600"],
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
  adjustFontFallback: false,
  weight: ["400", "500", "600", "700", "800"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  adjustFontFallback: false,
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
      "Arclink Edge — Fully Remote IT Agency | Web, Mobile & SaaS Development",
    template: "%s | Arclink Edge",
  },
  description:
    "Arclink Edge is a fully remote premium IT agency serving clients in New York, London, Dubai, Bangalore, Ahmedabad, and worldwide without passing physical-office overhead into project bills.",
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
      "Arclink Edge — Fully Remote IT Agency | Web, Mobile & SaaS Development",
    description:
      "We build world-class web, mobile, SaaS, and UI/UX products as a fully remote team, so client budgets stay focused on delivery instead of physical-office overhead.",
    images: [
      {
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Arclink Edge — Fully Remote Premium IT Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@arclinkedge",
    creator: "@arclinkedge",
    title: "Arclink Edge — Fully Remote Premium IT Agency",
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
    websiteSchema,
    breadcrumbSchema,
    ...servicesSchema,
  ];

  return (
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable} ${fraunces.variable} scroll-smooth`}
    >
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
        {/* Google Analytics GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MF08KH4SY0"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MF08KH4SY0');
          `}
        </Script>
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <div className="grain-overlay" aria-hidden="true" />
        {children}
        <ViewportAnimationController />
      </body>
    </html>
  );
}
