import { processSteps } from "@/lib/data";

export default function Process() {
  return (
    <section
      id="process"
      className="py-24 lg:py-32"
      style={{ borderTop: "1px solid #1F1F23" }}
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-[1600px]" style={{ paddingLeft: "clamp(16px, 5vw, 80px)", paddingRight: "clamp(16px, 5vw, 80px)" }}>
        {/* Header */}
        <div className="mb-16">
          <p
            className="mb-4 type-label type-legacy-130"
            style={{ color: "#0052FF" }}
          >
            Process
          </p>
          <h2
            id="process-heading"
            className="type-legacy-131"
            style={{ color: "#F5F5F7" }}
          >
            How we work
          </h2>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block relative">
          {/* Connecting line */}
          <div className="absolute top-8 left-0 right-0 h-px" aria-hidden="true">
            <div
              className="h-full"
              style={{
                background: "linear-gradient(to right, transparent, #1F1F23 10%, #0052FF 50%, #1F1F23 90%, transparent)",
              }}
            />
          </div>

          <ol className="grid grid-cols-5 gap-4" role="list">
            {processSteps.map((step, i) => (
              <li
                key={step.number}
                className="relative pt-16"
              >
                {/* Circle on line */}
                <div
                  className="absolute top-5 left-0 w-6 h-6 rounded-full -translate-y-1/2 flex items-center justify-center"
                  style={{ backgroundColor: "#0A0A0B", border: "2px solid #0052FF" }}
                  aria-hidden="true"
                >
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#0052FF" }} />
                </div>

                <span
                  className="block mb-3 type-display type-legacy-132"
                  style={{ color: "rgba(0,82,255,0.15)" }}
                  aria-hidden="true"
                >
                  {step.number}
                </span>
                <h3
                  className="mb-2 type-legacy-133"
                  style={{ color: "#F5F5F7" }}
                >
                  {step.title}
                </h3>
                <p className="type-b3 type-legacy-023" style={{ color: "#8E8E93" }}>
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* Mobile: vertical timeline */}
        <ol className="lg:hidden flex flex-col gap-0" role="list">
          {processSteps.map((step, i) => (
            <li
              key={step.number}
              className="relative flex gap-6 pb-10"
            >
              {/* Vertical line */}
              {i < processSteps.length - 1 && (
                <div
                  className="absolute left-5 top-10 bottom-0 w-px"
                  style={{
                    background: "linear-gradient(to bottom, #0052FF, #1F1F23)",
                  }}
                  aria-hidden="true"
                />
              )}

              {/* Circle */}
              <div
                className="relative flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "rgba(0,82,255,0.1)", border: "1px solid #0052FF" }}
                aria-hidden="true"
              >
                <span className="type-label type-legacy-134" style={{ color: "#0052FF" }}>
                  {step.number}
                </span>
              </div>

              <div className="pt-1.5">
                <h3
                  className="mb-2 type-legacy-133"
                  style={{ color: "#F5F5F7" }}
                >
                  {step.title}
                </h3>
                <p className="type-b3 type-legacy-023" style={{ color: "#8E8E93" }}>
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
