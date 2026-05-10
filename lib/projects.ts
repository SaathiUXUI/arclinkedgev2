import { caseStudies } from "./data";

export interface FullProject {
  id: string;
  slug: string;
  title: string;
  client: string;
  categories: string[];
  metric: string;
  metricLabel: string;
  image: string;
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
  techStack: string[];
  year: string;
  role: string;
  gallery: string[];
}

const detailedProjects: Record<string, Partial<FullProject>> = {
  "cortex-ai": {
    slug: "cortex-ai",
    overview: "Cortex unifies your analytics, dashboards, and team insights into one intelligent workspace — so you can act faster, not harder.",
    challenge: "Scaling complex data visualization while maintaining a clean, intuitive user experience for enterprise teams managing millions of data points across multiple platforms.",
    solution: "We engineered a unified command center with a focus on real-time data streaming and a sleek, high-contrast dashboard that prioritizes clarity and speed.",
    results: [
      "10.87% increase in conversion rate",
      "Unified 5+ disparate data sources into a single view",
      "Decision-making efficiency improved by 65%"
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Node.js"],
    year: "2024",
    role: "Lead Engineering & UI Design",
    gallery: ["/projects/Cortex.jpg"]
  },
  "exynos-data": {
    slug: "exynos-data",
    overview: "Exynos Data fuses real-time analytics with adaptive AI to surface patterns, predict outcomes, and automate decisions.",
    challenge: "Transforming raw, noisy data into an 'unfair advantage' for businesses through high-speed processing and intuitive AI modeling.",
    solution: "A state-of-the-art data platform built with a high-performance backend and a futuristic interface that brings complex insights to the forefront.",
    results: [
      "42% improvement in data accuracy",
      "Latency reduced to sub-10ms for real-time streams",
      "Automated 80% of routine data reporting tasks"
    ],
    techStack: ["React", "Python", "AI/ML Models", "Tailwind CSS", "WebSocket"],
    year: "2024",
    role: "UI/UX & Platform Engineering",
    gallery: ["/projects/ExynosData.jpg"]
  },
  "novapay": {
    slug: "novapay",
    overview: "Trade smarter with AI-driven insights that predict market trends and optimize portfolios in real-time.",
    challenge: "Developing a trading interface that is both powerful enough for professionals and accessible enough for new traders, while handling highly volatile data.",
    solution: "We built a reactive trading dashboard that uses machine learning to highlight key opportunities and mitigate risks automatically.",
    results: [
      "99.99% uptime during peak market volatility",
      "User portfolio performance improved by 15% on average",
      "Seamless integration with 10+ global exchanges"
    ],
    techStack: ["Next.js", "Financial APIs", "D3.js", "Supabase", "TypeScript"],
    year: "2024",
    role: "Full-Stack Development & Fintech Logic",
    gallery: ["/projects/NovaPay.jpg"]
  },
  "quickboard": {
    slug: "quickboard",
    overview: "An enterprise-grade SaaS dashboard that streamlines sales, tasks, and user management into one clean interface.",
    challenge: "Managing massive amounts of operational data without overwhelming the user, ensuring fast navigation between sales and task management.",
    solution: "A modular dashboard architecture with customizable widgets and a robust permission system that scales with the organization.",
    results: [
      "Managed over $35,450 in daily sales volume",
      "Improved task completion speed by 30%",
      "Reduced user onboarding time from 3 days to 4 hours"
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "Tailwind CSS", "Redux"],
    year: "2024",
    role: "Engineering & Architecture",
    gallery: ["/projects/quickboard.jpg"]
  },
  "novira-ai": {
    slug: "novira-ai",
    overview: "Think with AI. Automate with simplicity. Novira is a high-performance workspace for the modern age.",
    challenge: "Creating an environment where AI feels like a natural extension of the user's workflow rather than a separate tool.",
    solution: "We designed a minimalist, high-speed interface that puts AI suggestions and automation at the fingertips of the creator.",
    results: [
      "Streamlined workflows for 10,000+ early adopters",
      "Average user productivity increased by 40%",
      "User retention rate of 85% in the first quarter"
    ],
    techStack: ["Next.js", "OpenAI API", "Tailwind CSS", "Framer Motion", "Supabase"],
    year: "2024",
    role: "Full-Stack Development & AI Integration",
    gallery: ["/projects/novira.jpg"]
  },
  "drafted-ai": {
    slug: "drafted-ai",
    overview: "Drafted AI allows creators to write less and say more through intelligent context-aware writing assistance.",
    challenge: "Building a writing tool that maintains the author's unique voice while providing high-quality creative suggestions.",
    solution: "A sophisticated NLP-driven interface that analyzes writing style and provides non-intrusive, real-time enhancements.",
    results: [
      "80% time saved on drafting professional content",
      "Content quality scores improved by 50% for users",
      "Integrated with all major professional writing platforms"
    ],
    techStack: ["React", "NLP Models", "Node.js", "Tailwind CSS", "TypeScript"],
    year: "2024",
    role: "Engineering & Experience Design",
    gallery: ["/projects/draftai.jpg"]
  }
};

export async function getProjectBySlug(slug: string): Promise<FullProject | null> {
  const baseProject = caseStudies.find(cs => 
    cs.href === `/work/${slug}` || cs.href.endsWith(`/${slug}`)
  );
  
  const details = detailedProjects[slug];

  if (!baseProject || !details) return null;

  return {
    ...baseProject,
    ...details
  } as FullProject;
}

export async function getAllProjectSlugs() {
  return caseStudies.map(cs => cs.href.replace("/work/", ""));
}
