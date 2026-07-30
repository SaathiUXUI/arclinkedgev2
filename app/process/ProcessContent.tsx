"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Search, Palette, Code2, ShieldCheck, Rocket, Zap, Users, Sparkles } from "lucide-react";

import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import BackToTop from "@/components/ui/BackToTop";
import SectionLabel from "@/components/ui/SectionLabel";
import SharedInsidePageSections from "@/components/sections/SharedInsidePageSections";
import type { Testimonial } from "@/types";

interface ProcessContentProps {
  sanityLogos?: { name: string; src: string | null }[];
  sanityTestimonials?: Testimonial[];
}

const processDetails = [
  {
    step: "01",
    title: "Discovery & Client Onboarding",
    subtitle: "Setting the Foundation",
    icon: Search,
    color: "#0052FF",
    description: "We start by understanding your vision, business goals, and detailed project requirements to set a strong foundation.",
    details: [
      "Stakeholder Vision Mapping",
      "Business Goal Alignment",
      "Detailed Requirement Gathering",
      "Client Communication Setup"
    ],
    tools: ["Notion", "Slack", "Google Meet"]
  },
  {
    step: "02",
    title: "Scope Definition",
    subtitle: "Strategic Blueprinting",
    icon: Users,
    color: "#D0F504",
    description: "We craft a clear and structured scope of work outlining features, deliverables, timelines, and execution strategy.",
    details: [
      "Feature Prioritization Matrix",
      "Milestone-based Roadmap",
      "Execution Strategy Design",
      "Resource Allocation Plan"
    ],
    tools: ["Whimsical", "Miro", "Jira"]
  },
  {
    step: "03",
    title: "Scope Approval",
    subtitle: "Final Validation",
    icon: ShieldCheck,
    color: "#0052FF",
    description: "Once the scope is reviewed and approved, we immediately initiate the design process.",
    details: [
      "Timeline Confirmation",
      "Budget & Resource Sign-off",
      "Risk Mitigation Planning",
      "Project Kickoff Protocol"
    ],
    tools: ["DocuSign", "Notion", "Slack"]
  },
  {
    step: "04",
    title: "UI/UX Design",
    subtitle: "Visual & UX Excellence",
    icon: Palette,
    color: "#D0F504",
    description: "We design intuitive user experiences through wireframes (if required) or high-fidelity UI designs within a week.",
    details: [
      "Information Architecture",
      "Low-Fidelity Wireframing",
      "High-Fidelity UI Design",
      "Interactive UX Prototypes"
    ],
    tools: ["Figma", "FigJam", "Adobe CC"]
  },
  {
    step: "05",
    title: "Design Sign-off",
    subtitle: "Aesthetic Alignment",
    icon: Sparkles,
    color: "#0052FF",
    description: "Final design approval ensures everything aligns perfectly with your expectations before development begins.",
    details: [
      "Design Critique Sessions",
      "Prototype User Testing",
      "Visual Identity Approval",
      "Development Handoff Prep"
    ],
    tools: ["Figma", "Loom", "Slack"]
  },
  {
    step: "06",
    title: "Technical Planning (SRS)",
    subtitle: "Engineering Architecture",
    icon: Code2,
    color: "#D0F504",
    description: "We prepare a detailed Software Requirement Specification covering APIs, integrations, and system architecture.",
    details: [
      "System Architecture Design",
      "Database Schema Mapping",
      "API Integration Strategy",
      "Technical Debt Prevention"
    ],
    tools: ["Draw.io", "Postman", "Notion"]
  },
  {
    step: "07",
    title: "Development",
    subtitle: "Industrial-Grade Engineering",
    icon: Zap,
    color: "#0052FF",
    description: "Our team builds scalable frontend and backend systems, with timelines based on project complexity.",
    details: [
      "Clean Code Implementation",
      "Backend Logic Engineering",
      "Frontend State Management",
      "API & Service Integration"
    ],
    tools: ["Next.js", "GitHub", "Vercel", "Supabase"]
  },
  {
    step: "08",
    title: "Quality Assurance & Optimization",
    subtitle: "Bulletproof Testing",
    icon: ShieldCheck,
    color: "#D0F504",
    description: "We rigorously test the product, fix bugs, and optimize performance to ensure a seamless user experience.",
    details: [
      "Cross-browser Testing",
      "Mobile Device Validation",
      "Performance Benchmarking",
      "Security & Edge Case Audit"
    ],
    tools: ["Sentry", "PostHog", "BrowserStack"]
  },
  {
    step: "09",
    title: "Deployment & Launch",
    subtitle: "Market Entry",
    icon: Rocket,
    color: "#0052FF",
    description: "After final validation, we deploy your product live — ready for users and business growth.",
    details: [
      "Production Server Setup",
      "Domain & SSL Configuration",
      "Live Performance Monitoring",
      "Post-Launch Support Plan"
    ],
    tools: ["AWS", "Vercel", "Google Cloud"]
  }
];

const faqs = [
  {
    question: "How long does your typical process take?",
    answer: "A standard project timeline from discovery to deployment takes around 6 to 12 weeks, depending on the complexity of the scope and deliverables."
  },
  {
    question: "What happens if we need to change the scope mid-project?",
    answer: "We employ an agile methodology. Significant scope changes go through a formal change request process to assess timeline and budget impacts before proceeding."
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Yes, we offer ongoing growth retainers and maintenance plans to monitor performance, fix any issues, and continuously iterate on the product."
  },
  {
    question: "How involved will our team need to be?",
    answer: "We require active participation during Discovery, Scope Definition, and Sign-off stages. During Development, we hold weekly syncs to keep you updated."
  }
];

function PhaseCard({ phase }: { phase: typeof processDetails[0] }) {
  const cardRef = useRef(null);
  
  return (
    <motion.div 
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className="relative grid lg:grid-cols-[0.4fr_1fr] gap-12 lg:gap-32 items-start py-24 lg:py-48 group"
    >
      <div 
        aria-hidden="true" 
        className="absolute left-[20%] top-[50%] -translate-y-1/2 h-[400px] w-[600px] rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-1000 blur-[120px]"
        style={{ backgroundColor: phase.color }}
      />

      <div className="lg:sticky lg:top-40 z-10">
        <div className="relative inline-block">
          <motion.span 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-white/[0.04] select-none type-display type-legacy-053"
          >
            {phase.step}
          </motion.span>
          
          <div className="absolute top-1/2 left-0 -translate-y-1/2">
            <div className="flex items-center gap-4 mb-2">
               <div className="h-[1px] w-12 bg-[#D0F504]" />
               <span className="text-[#D0F504] type-label type-legacy-054">Phase {phase.step}</span>
            </div>
            <p className="text-white/40 type-b1 type-editorial type-legacy-055">
              {phase.subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-6 mb-12">
          <div className="relative p-5 border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm group-hover:border-[#D0F504]/40 transition-colors duration-500">
            <phase.icon className="text-white group-hover:text-[#D0F504] transition-colors duration-500" size={32} strokeWidth={1.5} />
            <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t border-l border-[#D0F504] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <h2 
            className="type-legacy-056"
          >
            {phase.title}
          </h2>
        </div>

        <p className="text-white/60 max-w-3xl mb-16 type-b1 type-legacy-057">
          {phase.description}
        </p>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          <div className="space-y-4">
            <p className="text-white/30 type-label type-legacy-058">Key Deliverables</p>
            <ul className="space-y-5">
              {phase.details.map((detail, idx) => (
                <li key={idx} className="flex items-center gap-5 group/item">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#D0F504] group-hover/item:scale-150 transition-transform duration-300" />
                  <span className="text-white/80 group-hover/item:text-white transition-colors duration-300 type-b1 type-legacy-059">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <p className="text-white/30 type-label type-legacy-058">Stack & Workflow</p>
            <div className="flex flex-wrap gap-3">
              {phase.tools.map((tool) => (
                <span 
                  key={tool} 
                  className="px-5 py-2.5 border border-white/[0.06] bg-white/[0.02] text-white/50 hover:text-white hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 type-label type-legacy-060"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProcessContent({ sanityLogos, sanityTestimonials }: ProcessContentProps) {
  return (
    <main id="main-content" className="bg-black text-[#F5F5F7] overflow-x-clip selection:bg-[#D0F504] selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
      <Navbar />
      
      {/* Immersive Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center pt-32 lg:pt-20 pb-20 px-6 lg:px-12 overflow-hidden">
        {/* Deep Atmospheric Glows */}
        <div aria-hidden="true" className="pointer-events-none absolute left-[-10%] top-[-10%] h-[50vw] w-[50vw] rounded-full bg-[#0052FF]/10 blur-[120px]" />
        <div aria-hidden="true" className="pointer-events-none absolute right-[-5%] top-[20%] h-[40vw] w-[40vw] rounded-full bg-[#D0F504]/5 blur-[150px]" />
        
        <div className="relative z-10 max-w-[1600px] mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
            
            {/* Left Column: Text */}
            <div>
              <div>
                <SectionLabel>Our Process & Methodology</SectionLabel>
              </div>

              <h1 
                className="mt-10 max-w-5xl type-legacy-061"
              >
                <span className="block">Software Development</span>
                <span 
                  className="block ml-[0.1em] mt-2 text-white type-editorial type-legacy-062"
                >
                  Refined.
                </span>
              </h1>

              <div className="mt-12">
                <p className="max-w-xl text-white/60 type-b1 type-legacy-063">
                  We&apos;ve spent a decade refining a process that merges strategic design with industrial-grade engineering. No guesswork, just results.
                </p>
              </div>
            </div>

            {/* Right Column: Performant Animated SVG Flow */}
            <div className="relative hidden lg:block w-full h-[500px]">
              <svg className="w-full h-full" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Decorative Grid */}
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
                </pattern>
                <rect width="100%" height="100%" fill="url(#grid)" />
                
                {/* Circuit Nodes */}
                <circle cx="100" cy="100" r="4" fill="#0052FF" className="animate-pulse" />
                <circle cx="400" cy="150" r="4" fill="#0052FF" className="animate-pulse" />
                <circle cx="250" cy="400" r="4" fill="#D0F504" className="animate-pulse" />
                <circle cx="250" cy="250" r="8" fill="#0A0A0F" stroke="#D0F504" strokeWidth="2" />

                {/* Animated Flow Lines */}
                <path 
                  d="M100 100 L250 100 L250 250" 
                  stroke="url(#grad1)" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeDasharray="400"
                  className="animate-flow-line-1"
                />
                <path 
                  d="M400 150 L250 150 L250 250" 
                  stroke="url(#grad2)" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeDasharray="400"
                  className="animate-flow-line-2"
                />
                <path 
                  d="M250 250 L250 400" 
                  stroke="#D0F504" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeDasharray="200"
                  className="animate-flow-line-3"
                />

                {/* Gradients */}
                <defs>
                  <linearGradient id="grad1" x1="100" y1="100" x2="250" y2="250" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0052FF" stopOpacity="0" />
                    <stop offset="1" stopColor="#0052FF" />
                  </linearGradient>
                  <linearGradient id="grad2" x1="400" y1="150" x2="250" y2="250" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0052FF" stopOpacity="0" />
                    <stop offset="1" stopColor="#0052FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

          </div>
        </div>

        <style>{`
          @keyframes gradient-text {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient-text {
            animation: gradient-text 8s ease infinite;
          }

          @keyframes flow-line {
            0% { stroke-dashoffset: 400; }
            100% { stroke-dashoffset: 0; }
          }
          @keyframes flow-line-short {
            0% { stroke-dashoffset: 200; }
            100% { stroke-dashoffset: 0; }
          }
          .animate-flow-line-1 {
            animation: flow-line 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          }
          .animate-flow-line-2 {
            animation: flow-line 3.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
            animation-delay: 1s;
          }
          .animate-flow-line-3 {
            animation: flow-line-short 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
            animation-delay: 2s;
          }
        `}</style>
      </section>

      <section className="py-32 lg:py-56 px-6 lg:px-12 border-y border-white/[0.04] bg-white/[0.005]">
        <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div>
             <h2 
               className="mb-8 type-legacy-064"
             >
               A systematic approach to <br />
               <span className="text-[#D0F504]">unpredictable</span> markets.
             </h2>
             <p className="text-white/50 max-w-xl type-b1 type-legacy-065">
               In a world of constant change, our process remains your constant. We mitigate technical debt and design fatigue before they even start.
             </p>
          </div>

          <div className="grid gap-6">
            {[
              { title: "Risk Mitigation", desc: "We identify technical blockers in week 1, not week 10.", icon: ShieldCheck },
              { title: "Rapid Feedback", desc: "Live prototypes every 48 hours to ensure total alignment.", icon: Zap },
              { title: "Scale Ready", desc: "Every line of code is built for 100k+ concurrent users.", icon: Sparkles }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ x: 10 }}
                className="p-8 border border-white/[0.04] bg-white/[0.01] hover:bg-white/[0.02] transition-colors flex items-center gap-8 group"
              >
                <div className="p-3 bg-[#D0F504]/5 text-[#D0F504] group-hover:bg-[#D0F504] group-hover:text-black transition-colors duration-500">
                  <item.icon size={20} />
                </div>
                <div>
                  <h3 className="mb-2 type-legacy-066">{item.title}</h3>
                  <p className="text-white/40 type-b3 type-legacy-023">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 lg:px-12">


        <div className="max-w-[1600px] mx-auto">
          {processDetails.map((phase) => (
            <PhaseCard key={phase.step} phase={phase} />
          ))}
        </div>
      </section>

      <SharedInsidePageSections sanityLogos={sanityLogos} sanityTestimonials={sanityTestimonials} faqs={faqs} />
      
      <Footer />
      <BackToTop />
    </main>
  );
}
