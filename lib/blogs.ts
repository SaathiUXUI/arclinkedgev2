import { blogPosts } from "./data";
import { team } from "./team";

export interface FullBlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tags: string[];
}

const detailedBlogs: Record<string, Partial<FullBlogPost>> = {
  "saas-design-system": {
    slug: "saas-design-system",
    author: team.founder,
    tags: ["Design", "SaaS", "Engineering"],
    content: `
      <h2>The Foundation of Scalability</h2>
      <p>In the fast-paced world of SaaS, the ability to iterate quickly without breaking consistency is the ultimate competitive advantage. This is where a robust design system comes into play. It's not just a set of UI components; it's a shared language between designers and developers.</p>
      
      <h3>Why Design Systems Matter</h3>
      <p>A well-implemented design system ensures that every button, form field, and navigation element behaves predictably across the entire application. This reduces cognitive load for users and eliminates "CSS debt" for developers.</p>
      
      <blockquote>
        "Consistency is the true foundation of trust in user interfaces."
      </blockquote>

      <h3>Key Components of a SaaS Design System</h3>
      <ul>
        <li><strong>Atomic Tokens:</strong> Colors, spacing, and typography that form the DNA of your brand.</li>
        <li><strong>Component Library:</strong> Reusable React/Next.js components built with accessibility in mind.</li>
        <li><strong>Documentation:</strong> Guidelines on when and how to use specific patterns.</li>
      </ul>

      <h3>Measuring the Impact</h3>
      <p>We've found that teams using a standardized design system ship features up to 40% faster and report significantly higher user satisfaction scores.</p>
    `
  },
  "flutter-vs-react-native": {
    slug: "flutter-vs-react-native",
    author: {
      name: "Ankit Patel",
      role: "Lead Mobile Developer",
      avatar: "https://ui-avatars.com/api/?name=Ankit+Patel&background=0052FF&color=fff&size=80",
    },
    tags: ["Mobile", "Flutter", "React Native"],
    content: `
      <h2>Choosing the Right Framework for 2024</h2>
      <p>The debate between Flutter and React Native is as old as the frameworks themselves. However, in 2024, the choice depends more on your team's existing expertise and the specific performance requirements of your app.</p>
      
      <h3>Flutter: The Performance King</h3>
      <p>Flutter's Skia engine allows for high-performance graphics and smooth 60fps animations. It's ideal for apps that require custom, complex UI designs that need to look identical on iOS and Android.</p>
      
      <h3>React Native: The Ecosystem Giant</h3>
      <p>If your team is already proficient in React, the learning curve for React Native is minimal. The vast ecosystem of libraries and the ease of hiring developers make it a strong choice for rapid prototyping and business-logic heavy apps.</p>
      
      <h3>Conclusion</h3>
      <p>Both frameworks have matured significantly. At Arclink Edge, we choose Flutter for high-fidelity consumer apps and React Native for internal business tools and enterprise solutions.</p>
    `
  },
  "cost-of-bad-ux": {
    slug: "cost-of-bad-ux",
    author: {
      name: "Priya Mehta",
      role: "Head of UX",
      avatar: "https://ui-avatars.com/api/?name=Priya+Mehta&background=0052FF&color=fff&size=80",
    },
    tags: ["UX", "Business", "ROI"],
    content: `
      <h2>UX is Not Just Aesthetic</h2>
      <p>Bad UX is expensive. Every time a user gets frustrated and leaves your site, you lose potential revenue. In fact, research shows that every $1 invested in UX brings $100 in return.</p>
      
      <h3>The Friction Problem</h3>
      <p>Friction points—like a confusing checkout flow or slow-loading pages—directly impact conversion rates. We've seen businesses lose up to 30% of their leads simply because of poor navigation.</p>
      
      <h3>How We Fix It</h3>
      <p>By conducting thorough user research and heat-map analysis, we identify where users are dropping off and re-engineer those flows to be as seamless as possible.</p>
      
      <h3>ROI of Good UX</h3>
      <p>Investing in UX design isn't just about making things look pretty; it's about optimizing your business for growth.</p>
    `
  }
};

export async function getBlogBySlug(slug: string): Promise<FullBlogPost | null> {
  const basePost = blogPosts.find(bp => bp.href === `/blog/${slug}`);
  const details = detailedBlogs[slug];

  if (!basePost || !details) return null;

  return {
    ...basePost,
    ...details
  } as FullBlogPost;
}

export async function getAllBlogSlugs() {
  return blogPosts.map(bp => bp.href.replace("/blog/", ""));
}
