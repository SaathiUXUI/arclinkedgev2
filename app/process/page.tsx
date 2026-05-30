import type { Metadata } from "next";
import ProcessContent from "./ProcessContent";

export const metadata: Metadata = {
  title: "Software Development Process & Methodology",
  description: "Discover our strategic 9-phase software development process. From discovery to launch, we use a battle-tested methodology to build high-performance digital products.",
  keywords: [
    "software development process",
    "product development methodology India",
    "agile web development New York, London, Dubai & Bangalore",
    "UX design process",
    "SaaS development lifecycle",
    "Arclink Edge process"
  ],
  alternates: { canonical: "https://www.arclinkedge.com/process" },
  openGraph: {
    type: "website",
    url: "https://www.arclinkedge.com/process",
    title: "Arclink Edge Software Development Process",
    description: "See the 9-phase product development methodology Arclink Edge uses to plan, design, build, test and launch digital products.",
    siteName: "Arclink Edge",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arclink Edge Software Development Process",
    description: "See how Arclink Edge plans, designs, builds, tests and launches digital products.",
    images: ["/opengraph-image"],
  },
};

import { getBrandLogos, getSanityTestimonials } from "@/sanity/lib/api";

export default async function ProcessPage() {
  const [sanityLogos, sanityTestimonials] = await Promise.all([
    getBrandLogos(),
    getSanityTestimonials(),
  ]);
  const processSteps = [
    {
      step: "01",
      title: "Discovery & Client Onboarding",
      description: "We start by understanding your vision, business goals, and detailed project requirements to set a strong foundation."
    },
    {
      step: "02",
      title: "Scope Definition",
      description: "We craft a clear and structured scope of work outlining features, deliverables, timelines, and execution strategy."
    },
    {
      step: "03",
      title: "Scope Approval",
      description: "Once the scope is reviewed and approved, we immediately initiate the design process."
    },
    {
      step: "04",
      title: "UI/UX Design",
      description: "We design intuitive user experiences through wireframes or high-fidelity UI designs within a week."
    },
    {
      step: "05",
      title: "Design Sign-off",
      description: "Final design approval ensures everything aligns perfectly with your expectations before development begins."
    },
    {
      step: "06",
      title: "Technical Planning (SRS)",
      description: "We prepare a detailed Software Requirement Specification covering APIs, integrations, and system architecture."
    },
    {
      step: "07",
      title: "Development",
      description: "Our team builds scalable frontend and backend systems, with timelines based on project complexity."
    },
    {
      step: "08",
      title: "Quality Assurance",
      description: "We rigorously test the product, fix bugs, and optimize performance to ensure a seamless user experience."
    },
    {
      step: "09",
      title: "Deployment & Launch",
      description: "After final validation, we deploy your product live — ready for users and business growth."
    }
  ];

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Arclink Edge Product Development Process",
    "description": "Our systematic 9-phase approach to building world-class digital products.",
    "step": processSteps.map((phase, i) => ({
      "@type": "HowToStep",
      "position": i + 1,
      "name": phase.title,
      "text": phase.description,
      "url": `https://www.arclinkedge.com/process#phase-${phase.step}`
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <ProcessContent sanityLogos={sanityLogos} sanityTestimonials={sanityTestimonials} />
    </>
  );
}
