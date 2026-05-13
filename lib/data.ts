import type { Service, CaseStudy, Testimonial, BlogPost, Stat, ProcessStep } from "@/types";

export const services: Service[] = [
  {
    id: "web-development",
    icon: "Globe",
    title: "Web Development",
    description: "Your website is losing customers — we fix that with fast, modern web apps.",
    href: "/services/web-development",
  },
  {
    id: "mobile-app",
    icon: "Smartphone",
    title: "Mobile App Development",
    description: "Reach users on iOS & Android before your competitor does.",
    href: "/services/mobile-app-development",
  },
  {
    id: "ui-ux-design",
    icon: "Palette",
    title: "UI/UX Design",
    description: "Bad design kills conversions — we craft interfaces users actually love.",
    href: "/services/ui-ux-design",
  },
  {
    id: "saas-development",
    icon: "Layers",
    title: "SaaS Development",
    description: "Turn your idea into a revenue-generating SaaS product, end to end.",
    href: "/services/saas-development",
  },
  {
    id: "ecommerce",
    icon: "ShoppingCart",
    title: "E-commerce Solutions",
    description: "Stop losing sales — we build stores optimized to convert and scale.",
    href: "/services/ecommerce",
  },
  {
    id: "cloud-devops",
    icon: "Cloud",
    title: "Cloud & DevOps",
    description: "Slow deploys and downtime cost you money — we automate and fix that.",
    href: "/services/cloud-devops",
  },
  {
    id: "api-integration",
    icon: "Globe",
    title: "API Integration",
    description: "Connect your tools and automate workflows that waste your team's time.",
    href: "/services/api-integration",
  },
  {
    id: "ai-automation",
    icon: "Layers",
    title: "AI & Automation",
    description: "Your repetitive tasks are killing productivity — let AI handle them.",
    href: "/services/ai-automation",
  },
  {
    id: "digital-marketing",
    icon: "Globe",
    title: "Digital Marketing & SEO",
    description: "No traffic, no leads — we put your business in front of the right people.",
    href: "/services/digital-marketing",
  },
];

export const hireLinks = [
  {
    title: "Web Developers",
    description: "Expert React & Next.js engineers for high-performance web products.",
    href: "/hire/web-developer",
  },
  {
    title: "Mobile App Developers",
    description: "Native & cross-platform specialists for iOS and Android apps.",
    href: "/hire/mobile-app-developer",
  },
  {
    title: "UI/UX Designers",
    description: "Creative designers focused on user psychology and conversion.",
    href: "/hire/ui-ux-designer",
  },
  {
    title: "SaaS Developers",
    description: "Product engineers for multi-tenant architectures and billing.",
    href: "/hire/saas-developer",
  },
  {
    title: "E-commerce Developers",
    description: "Specialists in Shopify, custom carts, and headless commerce.",
    href: "/hire/ecommerce-developer",
  },
  {
    title: "DevOps Engineers",
    description: "Infrastructure experts for cloud automation and CI/CD.",
    href: "/hire/devops-engineer",
  },
  {
    title: "API Developers",
    description: "Backend specialists in REST, GraphQL, and microservices.",
    href: "/hire/api-developer",
  },
  {
    title: "AI Specialists",
    description: "LLM engineers for custom AI agents and workflow automation.",
    href: "/hire/ai-specialist",
  },
  {
    title: "SEO Specialists",
    description: "Search growth experts for rankings and Core Web Vitals.",
    href: "/hire/seo-specialist",
  },
];

export const stats: Stat[] = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 30, suffix: "+", label: "Happy Clients" },
  { value: 3, suffix: "+", label: "Years of Excellence" },
  { value: 15, suffix: "+", label: "Industries Served" },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "cortex-ai",
    title: "Cortex — The AI Command Center",
    client: "Cortex Analytics",
    categories: ["AI & Automation", "SaaS", "Fintech"],
    metric: "10.87%",
    metricLabel: "Conversion Rate",
    image: "/projects/Cortex.jpg",
    href: "/work/cortex-ai",
  },
  {
    id: "exynos-data",
    title: "Exynos — Next Level Intelligence",
    client: "Exynos Corp",
    categories: ["Data Science", "AI", "Enterprise"],
    metric: "+42%",
    metricLabel: "Accuracy Gain",
    image: "/projects/ExynosData.jpg",
    href: "/work/exynos-data",
  },
  {
    id: "novapay",
    title: "NovaPay — AI-Driven Trading",
    client: "NovaPay Finance",
    categories: ["Fintech", "AI", "Trading"],
    metric: "Real-time",
    metricLabel: "Market Insights",
    image: "/projects/NovaPay.jpg",
    href: "/work/novapay",
  },
  {
    id: "quickboard",
    title: "QuickBoard — Enterprise SaaS",
    client: "QuickBoard Inc",
    categories: ["SaaS", "Dashboard", "Management"],
    metric: "$35,450",
    metricLabel: "Sales Managed",
    image: "/projects/quickboard.jpg",
    href: "/work/quickboard",
  },
  {
    id: "novira-ai",
    title: "Novira — AI Workspace",
    client: "Novira Tech",
    categories: ["AI", "Workspace", "Automation"],
    metric: "Automated",
    metricLabel: "Workflows",
    image: "/projects/novira.jpg",
    href: "/work/novira-ai",
  },
  {
    id: "drafted-ai",
    title: "Drafted — AI Writing Assistant",
    client: "Drafted Inc",
    categories: ["AI", "Content", "SaaS"],
    metric: "80%",
    metricLabel: "Time Saved",
    image: "/projects/draftai.jpg",
    href: "/work/drafted-ai",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "We deep-dive into your business goals, audience, and competitive landscape to build a solid strategic foundation.",
  },
  {
    number: "02",
    title: "UX Research & Wireframes",
    description: "User research, information architecture, and low-fidelity wireframes that map the perfect product journey.",
  },
  {
    number: "03",
    title: "UI Design & Prototype",
    description: "Pixel-perfect, brand-aligned interfaces with interactive prototypes ready for real user validation.",
  },
  {
    number: "04",
    title: "Development & QA",
    description: "Clean, scalable code with rigorous testing across devices, browsers, and edge cases before launch.",
  },
  {
    number: "05",
    title: "Launch & Support",
    description: "Smooth deployment, performance monitoring, and continuous support so you're always ahead of the curve.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote: "Arclink Edge transformed our outdated platform into a world-class SaaS product in just 4 months. Their team's expertise and attention to detail is unmatched.",
    rating: 5,
    name: "Rahul Sharma",
    role: "CEO",
    company: "FinTrack Inc.",
    avatar: "https://ui-avatars.com/api/?name=Rahul+Sharma&background=0052FF&color=fff&size=80",
  },
  {
    id: "t2",
    quote: "The UI/UX work they delivered for our e-commerce platform directly resulted in a 3x increase in our conversion rate. Phenomenal design thinking.",
    rating: 5,
    name: "Priya Mehta",
    role: "Head of Product",
    company: "StyleHub Fashion",
    avatar: "https://ui-avatars.com/api/?name=Priya+Mehta&background=0052FF&color=fff&size=80",
  },
  {
    id: "t3",
    quote: "We launched our healthcare app in record time without compromising on quality. Arclink Edge is the partner every startup wishes they had from day one.",
    rating: 5,
    name: "Dr. Ankit Patel",
    role: "Founder",
    company: "MedConnect Health",
    avatar: "https://ui-avatars.com/api/?name=Ankit+Patel&background=0052FF&color=fff&size=80",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    title: "Why Your SaaS Product Needs a Design System Before Development Begins",
    description: "A comprehensive guide on how establishing a robust design system early can save hundreds of hours and ensure UI consistency across your entire application.",
    category: "Design",
    date: "2024-03-15",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
    href: "/blog/saas-design-system",
  },
  {
    id: "b2",
    title: "Flutter vs React Native in 2024: Which Should You Choose?",
    description: "An in-depth technical comparison of the two leading cross-platform frameworks, evaluating performance, developer experience, and long-term viability for your next startup.",
    category: "Mobile",
    date: "2024-03-08",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
    href: "/blog/flutter-vs-react-native",
  },
  {
    id: "b3",
    title: "The Real Cost of Bad UX: How Poor Design Kills Conversion Rates",
    description: "Analyzing real-world case studies to demonstrate how minor friction points in user journeys directly correlate to lost revenue and increased customer churn.",
    category: "UX",
    date: "2024-02-28",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&q=80",
    href: "/blog/cost-of-bad-ux",
  },
];

export const techStack = [
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Flutter", category: "mobile" },
  { name: "Node.js", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "TypeScript", category: "language" },
  { name: "AWS", category: "cloud" },
  { name: "Figma", category: "design" },
  { name: "MongoDB", category: "database" },
  { name: "PostgreSQL", category: "database" },
  { name: "Firebase", category: "cloud" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Docker", category: "devops" },
  { name: "GraphQL", category: "api" },
  { name: "Redis", category: "database" },
  { name: "Kubernetes", category: "devops" },
];

export const clientLogos: { name: string; src: string }[] = [
  { name: "FinTrack",     src: "" },
  { name: "StyleHub",     src: "" },
  { name: "MedConnect",   src: "" },
  { name: "BuildCo",      src: "" },
  { name: "EduPlatform",  src: "" },
  { name: "CloudBase",    src: "" },
  { name: "RetailX",      src: "" },
  { name: "DataSync",     src: "" },
];

export const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "Work", href: "/work" },
  { label: "Hire", href: "/hire" },
  { label: "Blogs", href: "/blog" },
  { label: "About", href: "/about" },
];
