const steps = [
  {
    number: 1,
    day: "Day 1",
    title: "Discovery & Client Onboarding",
    description:
      "We start by understanding your vision, business goals, and detailed project requirements to set a strong foundation.",
  },
  {
    number: 2,
    day: "Day 2 – Day 4",
    title: "Scope Definition",
    description:
      "We craft a clear and structured scope of work outlining features, deliverables, timelines, and execution strategy.",
  },
  {
    number: 3,
    day: "Day 5",
    title: "Scope Approval",
    description:
      "Once the scope is reviewed and approved, we immediately initiate the design process.",
  },
  {
    number: 4,
    day: "Day 5 – Day 11",
    title: "UI/UX Design",
    description:
      "We design intuitive user experiences through wireframes or high-fidelity UI designs within a week.",
  },
  {
    number: 5,
    day: "Day 12",
    title: "Design Sign-off",
    description:
      "Final design approval ensures everything aligns perfectly with your expectations before development begins.",
  },
  {
    number: 6,
    day: "Day 13 – Day 16",
    title: "Technical Planning (SRS)",
    description:
      "We prepare a detailed Software Requirement Specification covering APIs, integrations, and system architecture.",
  },
  {
    number: 7,
    day: "Day 17 – 2 to 12 Weeks",
    title: "Development",
    description:
      "Our team builds scalable frontend and backend systems, with timelines based on project complexity.",
  },
  {
    number: 8,
    day: "3 – 7 Days",
    title: "Quality Assurance & Optimization",
    description:
      "We rigorously test the product, fix bugs, and optimize performance to ensure a seamless user experience.",
  },
  {
    number: 9,
    day: "Final Stage",
    title: "Deployment & Launch",
    description:
      "After final validation, we deploy your product live—ready for users and business growth.",
  },
];

const cardTheme = {
  top: "rgba(15,15,17,0.92)",
  body: "rgba(10,10,10,0.72)",
  text: "#F5F5F7",
  muted: "rgba(245,245,247,0.52)",
  number: "rgba(245,245,247,0.22)",
  accent: "#D0F505",
};

export default function HowWeWork() {
  return (
    <section
      id="process"
      className="defer-render relative overflow-hidden bg-[#000000] py-24 lg:py-32"
      aria-labelledby="how-we-work-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 42%, rgba(0,82,255,0.14) 0%, rgba(0,82,255,0.05) 24%, transparent 46%)," +
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
        <header className="mb-14 grid gap-6 lg:mb-20 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.42fr)] lg:items-end">
          <h2
            id="how-we-work-heading"
            className="type-legacy-113 type-landing-section-heading"
            style={{ color: "#F5F5F7" }}
          >
            How we work
          </h2>
          <p
            className="max-w-xl lg:justify-self-end type-legacy-094"
            style={{ color: "rgba(245,245,247,0.58)" }}
          >
            From the first call to a live product—our nine-step process keeps scope, timelines, and delivery clear.
          </p>
        </header>

        <ol className="grid list-none gap-4 md:grid-cols-2 xl:grid-cols-3">
          {steps.map((step) => {
            const theme = cardTheme;

            return (
              <li
                key={step.number}
                className="group flex min-h-[350px] flex-col gap-[2px]"
              >
                <div
                  className="flex min-h-[104px] items-end justify-between gap-5 border border-white/[0.08] px-6 py-5 backdrop-blur-2xl md:px-7"
                  style={{ backgroundColor: theme.top, color: theme.text }}
                >
                  <div>
                    <span
                      className="block type-label type-legacy-114"
                      style={{ color: theme.muted }}
                    >
                      Timeline
                    </span>
                    <p
                      className="mt-2 type-b1 type-legacy-115"
                    >
                      {step.day}
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="type-display type-legacy-116"
                    style={{ color: theme.number }}
                  >
                    {String(step.number).padStart(2, "0")}
                  </span>
                </div>

                <article
                  className="relative flex flex-1 flex-col overflow-hidden border border-white/[0.08] px-6 py-6 backdrop-blur-2xl md:px-7 md:py-7"
                  style={{ backgroundColor: theme.body, color: theme.text }}
                >
                  <div aria-hidden="true" className="h-[14px]" />

                  <div className="relative z-10 mt-auto pt-14">
                    <h3
                      className="type-legacy-117"
                    >
                      {step.title}
                    </h3>
                    <p
                      className="mt-3 max-w-sm type-b3 type-legacy-118"
                      style={{ color: theme.muted }}
                    >
                      {step.description}
                    </p>
                    <div
                      aria-hidden="true"
                      className="mt-6 h-[3px] w-10 transition-[width] duration-300 group-hover:w-20"
                      style={{ backgroundColor: theme.accent }}
                    />
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
