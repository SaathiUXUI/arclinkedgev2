import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us | Arclink Edge - Start Your Project",
  description: "Get in touch with Arclink Edge. Whether you have a project in mind or just want to say hi, we're here to help you build premium digital products.",
  keywords: ["contact arclink edge", "hire developers ahmedabad", "software development inquiry", "project estimation IT"],
  alternates: { canonical: "https://arclinkedge.com/contact" },
};

export default function ContactPage() {
  return <ContactContent />;
}
