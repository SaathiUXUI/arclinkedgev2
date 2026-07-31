import Image from "next/image";

export interface TechnologyCategory {
  title: string;
  items: string[];
  exp?: string;
}

interface TechnologyRowsProps {
  categories: TechnologyCategory[];
  icons: Record<string, string>;
  headingLevel?: "section" | "primary" | "additional";
  compact?: boolean;
}

export default function TechnologyRows({
  categories,
  icons,
  headingLevel = "primary",
  compact = false,
}: TechnologyRowsProps) {
  return (
    <div className="space-y-4">
      {categories.map((category) => (
        <article
          key={category.title}
          className={[
            "grid border border-white/[0.08] bg-white/[0.018]",
            compact
              ? "xl:grid-cols-[minmax(220px,0.34fr)_minmax(0,1fr)]"
              : "lg:grid-cols-[minmax(340px,0.32fr)_minmax(0,1fr)]",
          ].join(" ")}
        >
          <header
            className={[
              "flex flex-col justify-start border-b border-white/[0.08] p-6 md:p-7",
              compact
                ? "xl:border-b-0 xl:border-r"
                : "lg:border-b-0 lg:border-r",
            ].join(" ")}
          >
            {headingLevel === "section" ? (
              <h2 className="text-[#F5F5F7] type-legacy-140">
                {category.title}
              </h2>
            ) : headingLevel === "primary" ? (
              <h3 className="text-[#F5F5F7] type-legacy-140">
                {category.title}
              </h3>
            ) : (
              <h4 className="text-[#F5F5F7] type-legacy-140">
                {category.title}
              </h4>
            )}

            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-white/38 type-label type-legacy-014">
              <span>
                {category.items.length}{" "}
                {category.items.length === 1 ? "technology" : "technologies"}
              </span>
              {category.exp && (
                <>
                  <span aria-hidden="true" className="h-1 w-1 bg-[#0052FF]" />
                  <span>{category.exp} years</span>
                </>
              )}
            </div>
          </header>

          <ul
            className={[
              "grid list-none grid-cols-1 bg-[#09090B] sm:grid-cols-2",
              compact ? "" : "lg:grid-cols-4",
            ].join(" ")}
            aria-label={`${category.title} technologies`}
          >
            {category.items.map((tech) => (
              <li
                key={tech}
                className="group flex items-center gap-5 border-b border-r border-white/[0.06] bg-[#09090B] p-6 transition-colors duration-300 hover:bg-[#101014] md:p-7"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#0052FF]/20 bg-[#0052FF]/[0.07] text-[#5F96FF] type-b3 type-legacy-141">
                  {icons[tech] ? (
                    <Image
                      src={icons[tech]}
                      alt=""
                      width={28}
                      height={28}
                      className="h-7 w-7 object-contain"
                    />
                  ) : (
                    <span aria-hidden="true">
                      {tech.slice(0, 2).toUpperCase()}
                    </span>
                  )}
                </div>

                {headingLevel === "section" ? (
                  <h3 className="text-[#F5F5F7] type-legacy-142">{tech}</h3>
                ) : headingLevel === "primary" ? (
                  <h4 className="text-[#F5F5F7] type-legacy-142">{tech}</h4>
                ) : (
                  <h5 className="text-[#F5F5F7] type-legacy-142">{tech}</h5>
                )}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
