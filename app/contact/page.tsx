import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us - Start Your Project",
  description: "Get in touch with Arclink Edge. Whether you have a project in mind or just want to say hi, we're here to help you build premium digital products.",
  keywords: ["contact arclink edge", "hire developers ahmedabad", "software development inquiry", "project estimation IT"],
  alternates: { canonical: "https://www.arclinkedge.com/contact" },
  openGraph: {
    type: "website",
    url: "https://www.arclinkedge.com/contact",
    title: "Contact Arclink Edge - Start Your Project",
    description: "Talk to Arclink Edge about web apps, mobile apps, SaaS platforms, UI/UX design and digital growth projects.",
    siteName: "Arclink Edge",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Arclink Edge - Start Your Project",
    description: "Start a project with Arclink Edge, a premium IT agency in New York, Bangalore, Delhi & Mumbai.",
    images: ["/opengraph-image"],
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
