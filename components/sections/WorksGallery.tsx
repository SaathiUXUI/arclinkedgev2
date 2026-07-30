import Image from "next/image";

const defaultProjects = [
  { image: "/projects/ivf.jpg", endPos: { x: "-38vw", y: "-32vh", rotate: -12 } },
  { image: "/projects/NovaPay.jpg", endPos: { x: "38vw", y: "-25vh", rotate: 10 } },
  { image: "/projects/novira.jpg", endPos: { x: "-40vw", y: "30vh", rotate: 15 } },
  { image: "/projects/quickboard.jpg", endPos: { x: "38vw", y: "30vh", rotate: -10 } },
];

function DoodleWord({ children }: { children: string }) {
  return (
    <span
      className="relative inline-block whitespace-nowrap px-[0.16em] mx-[0.04em]"
      style={{ isolation: "isolate" }}
    >
      <span className="relative z-10">{children}</span>
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[1.55em] w-[calc(100%+0.6em)] -translate-x-1/2 -translate-y-1/2 overflow-visible"
        viewBox="0 0 220 120"
        fill="none"
        preserveAspectRatio="none"
      >
        <ellipse
          className="doodle-stroke"
          cx="110"
          cy="60"
          rx="98"
          ry="42"
          stroke="#D0F504"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.95"
          transform="rotate(-7 110 60)"
        />
      </svg>
    </span>
  );
}

export default function WorksGallery({ sanityImages }: { sanityImages?: string[] }) {
  const displayProjects = defaultProjects.map((proj, index) => {
    if (sanityImages && sanityImages[index]) {
      return { ...proj, image: sanityImages[index] };
    }
    return proj;
  });

  return (
    <section
      id="work"
      className="relative bg-[#000000]"
      style={{ height: "700vh" }}
    >
      <div
        className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden"
      >
        {/* Subtle Depth Glow */}
        <div className="absolute w-[80vw] h-[80vw] bg-[#0052FF]/5 filter blur-[200px] rounded-full pointer-events-none z-0" />

        {/* Center Paragraph (Mid Z-Index) */}
        <div className="relative z-10 px-6 max-w-5xl text-center pointer-events-none">
          <p
            className="text-[#F5F5F7] type-legacy-161"
            style={{ maxWidth: "920px", margin: "0 auto", textShadow: "0 0 50px rgba(0,0,0,1)" }}
          >
            <span className="md:hidden">
              <span className="block overflow-hidden">
                <span className="gallery-line block">Presenting our finest <DoodleWord>work</DoodleWord>,</span>
              </span>
              <span className="block overflow-hidden">
                <span className="gallery-line block">crafted with precision and</span>
              </span>
              <span className="block overflow-hidden">
                <span className="gallery-line block">designed to scale for</span>
              </span>
              <span className="block overflow-hidden">
                <span className="gallery-line block">the next <DoodleWord>generation</DoodleWord></span>
              </span>
              <span className="block overflow-hidden">
                <span className="gallery-line block">of digital leaders globally.</span>
              </span>
            </span>

            <span className="hidden md:block">
              <span className="block overflow-hidden">
                <span className="gallery-line block">
                  Presenting our finest <DoodleWord>work</DoodleWord>, crafted with
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="gallery-line block">precision and designed to</span>
              </span>
              <span className="block overflow-hidden">
                <span className="gallery-line block">
                  scale for the next <DoodleWord>generation</DoodleWord> of digital
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="gallery-line block">leaders globally.</span>
              </span>
            </span>
          </p>
        </div>

        {/* Floating Images Container */}
        <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none" style={{ perspective: "2000px" }}>
          {displayProjects.map((project, i) => (
            <div
              key={i}
              className="floating-item absolute w-[88vw] md:w-[68vw] lg:w-[54vw]"
              style={{ willChange: "transform, opacity, z-index" }}
            >
              <div className="gallery-card-float relative aspect-[16/9] overflow-hidden border border-white/10 shadow-[0_60px_120px_rgba(0,0,0,0.8)] bg-[#141416]">
                <Image
                  src={project.image}
                  alt="Work Example"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={i < 2}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
