import Image from "next/image";
import { techStack } from "@/lib/data";
import HeadingReveal from "@/components/ui/HeadingReveal";

const techIcons: Record<string, string> = {
  React: "/tools/reactjs.svg",
  "Next.js": "/tools/nextjs.svg",
  "Node.js": "/tools/nodejs.svg",
  AWS: "/tools/aws.svg",
  Figma: "/tools/figma.svg",
  Firebase: "/tools/firebase.svg",
  PHP: "/tools/php.svg",
  Supabase: "/tools/supabase.svg",
  Vercel: "/tools/vercel.svg",
};

const categorizedTech = [
  {
    title: "Front-end Development",
    items: techStack.filter((tech) => tech.category === "frontend"),
    experience: "5+ years",
  },
  {
    title: "Back-end & API",
    items: techStack.filter(
      (tech) =>
        tech.category === "backend" ||
        tech.category === "api" ||
        tech.category === "language",
    ),
    experience: "4+ years",
  },
  {
    title: "Mobile App Development",
    items: techStack.filter((tech) => tech.category === "mobile"),
    experience: "3+ years",
  },
  {
    title: "Database & Cloud",
    items: techStack.filter(
      (tech) =>
        tech.category === "database" ||
        tech.category === "cloud" ||
        tech.category === "devops",
    ),
    experience: "4+ years",
  },
  {
    title: "UI/UX Design",
    items: techStack.filter((tech) => tech.category === "design"),
    experience: "6+ years",
  },
];

export default function TechStack() {
  return (
    <section
      id="technology"
      className="defer-render relative overflow-hidden bg-[#000000] py-24 lg:py-32"
      aria-labelledby="tech-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 42%, rgba(0,82,255,0.12) 0%, rgba(0,82,255,0.04) 26%, transparent 52%)," +
            "linear-gradient(180deg, #000000 0%, #02040A 52%, #000000 100%)",
        }}
      />

      <div
        className="relative z-10 mx-auto max-w-[1600px]"
        style={{
          paddingLeft: "clamp(16px,5vw,80px)",
          paddingRight: "clamp(16px,5vw,80px)",
        }}
      >
        <header className="mb-16 md:mb-24">
          <HeadingReveal className="type-legacy-092 type-landing-section-heading"
            id="tech-heading"
            style={{ color: "#F5F5F7" }}
          >
            Technologies we master
          </HeadingReveal>
          <p
            className="mt-6 max-w-xl type-legacy-160"
            style={{ color: "rgba(245,245,247,0.52)" }}
          >
            A focused, production-ready stack for building and scaling modern digital products.
          </p>
        </header>

        <div className="space-y-4">
          {categorizedTech.map((category) => (
            <article
              key={category.title}
              className="grid border border-white/[0.08] bg-white/[0.018] lg:grid-cols-[minmax(340px,0.32fr)_minmax(0,1fr)]"
            >
              <header className="flex flex-col justify-start border-b border-white/[0.08] p-6 md:p-7 lg:border-b-0 lg:border-r">
                <div>
                  <h3
                    className="type-legacy-140"
                    style={{ color: "#F5F5F7" }}
                  >
                    {category.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-white/38 lg:mt-2 type-label type-legacy-014">
                    <span>
                      {category.items.length}{" "}
                      {category.items.length === 1 ? "technology" : "technologies"}
                    </span>
                    <span aria-hidden="true" className="h-1 w-1 bg-[#0052FF]" />
                    <span>{category.experience}</span>
                  </div>
                </div>
              </header>

              <ul
                className="grid list-none grid-cols-1 bg-[#09090B] sm:grid-cols-2 lg:grid-cols-4"
                aria-label={`${category.title} technologies`}
              >
                {category.items.map((tech) => (
                  <li
                    key={tech.name}
                    className="group flex items-center gap-5 border-b border-r border-white/[0.06] bg-[#09090B] p-6 transition-colors duration-300 hover:bg-[#101014] md:p-7"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#0052FF]/20 bg-[#0052FF]/[0.07] text-[#5F96FF] type-b3 type-legacy-141">
                      {techIcons[tech.name] ? (
                        <Image
                          src={techIcons[tech.name]}
                          alt=""
                          width={28}
                          height={28}
                          className="h-7 w-7 object-contain"
                        />
                      ) : (
                        <span aria-hidden="true">
                          {tech.name.slice(0, 2).toUpperCase()}
                        </span>
                      )}
                    </div>

                    <h4
                      className="text-[#F5F5F7] type-legacy-142"
                    >
                      {tech.name}
                    </h4>

                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
