"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { TextButton } from "@/components/ui/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "@/lib/data";

type ServiceShowcaseItem = {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

const imageMap: Record<string, { image: string; imageAlt: string }> = {
  "web-development": { image: "/projects/quickboard.jpg", imageAlt: "Web development preview showing a modern dashboard interface" },
  "mobile-app": { image: "/projects/ivf.jpg", imageAlt: "Mobile development preview displaying a healthcare product experience" },
  "ui-ux-design": { image: "/projects/novira.jpg", imageAlt: "UI and UX design preview showcasing a polished product interface" },
  "saas-development": { image: "/projects/NovaPay.jpg", imageAlt: "SaaS development preview with a fintech analytics interface" },
  "ecommerce": { image: "/projects/draftai.jpg", imageAlt: "E-commerce platform preview" },
  "cloud-devops": { image: "/projects/quickboard.jpg", imageAlt: "Cloud infrastructure preview" },
  "api-integration": { image: "/projects/NovaPay.jpg", imageAlt: "API integration preview" },
  "ai-automation": { image: "/projects/draftai.jpg", imageAlt: "AI and automation preview showing an intelligent workflow product" },
  "digital-marketing": { image: "/projects/novira.jpg", imageAlt: "Digital marketing campaign preview" },
};

export default function Services({ categoryImagesMap }: { categoryImagesMap?: Record<string, string> }) {
  const router = useRouter();
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  const displayServices = isExpanded ? services : services.slice(0, 5);
  const remainingServicesCount = Math.max(0, services.length - 5);

  useEffect(() => {
    queueMicrotask(() => setIsMobile(window.innerWidth < 1024));
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!headerRef.current) return;
    
    const lines = headerRef.current.querySelectorAll(".services-line");
    
    const ctx = gsap.context(() => {
      gsap.from(lines, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 88%",
        },
        y: "110%",
        skewY: 4,
        transformOrigin: "left bottom",
        duration: 1.1,
        ease: "power4.out",
        stagger: 0.1,
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#000000] py-24 lg:py-32"
      aria-labelledby="services-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-10rem] h-[80vw] w-[80vw] -translate-x-1/2 rounded-full bg-[#0052FF]/5 blur-[200px]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-14%] top-[12rem] h-[22rem] w-[22rem] rounded-full bg-[#0052FF]/18 mix-blend-screen blur-[120px] md:h-[28rem] md:w-[28rem]" />
        <div className="absolute left-[-10%] top-[60rem] h-[14rem] w-[16rem] rounded-full bg-white/10 mix-blend-screen blur-[100px] md:h-[18rem] md:w-[20rem]" />
        <div className="absolute left-[2%] top-[40rem] h-[8rem] w-[18rem] -rotate-[14deg] rounded-full bg-[#7FB2FF]/12 mix-blend-screen blur-[95px] md:w-[24rem]" />
        <div className="absolute right-[-14%] top-[10rem] h-[22rem] w-[22rem] rounded-full bg-white/12 mix-blend-screen blur-[120px] md:h-[28rem] md:w-[28rem]" />
        <div className="absolute right-[-10%] top-[70rem] h-[16rem] w-[18rem] rounded-full bg-[#0052FF]/16 mix-blend-screen blur-[110px] md:h-[20rem] md:w-[22rem]" />
        <div className="absolute right-[1%] top-[35rem] h-[8rem] w-[16rem] rotate-[12deg] rounded-full bg-white/8 mix-blend-screen blur-[90px] md:w-[22rem]" />
        <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-black via-black/70 to-transparent" />
      </div>

      <div
        className="relative z-10 mx-auto max-w-[1600px]"
        style={{
          paddingLeft: "clamp(16px, 5vw, 80px)",
          paddingRight: "clamp(16px, 5vw, 80px)",
        }}
      >
        <div ref={headerRef} className="mb-14 grid gap-8 xl:grid-cols-[minmax(0,1.3fr)_minmax(300px,0.7fr)] xl:items-end lg:mb-20">
          <div style={{ overflow: "hidden", paddingBottom: "0.08em" }}>
            <h2
              id="services-heading"
              className="services-line"
              style={{
                fontFamily: "var(--font-inter-tight)",
                fontSize: "clamp(3.2rem, 8vw, 6.8rem)",
                fontWeight: 500,
                lineHeight: 0.95,
                letterSpacing: "-0.07em",
                color: "#F5F5F7",
                willChange: "transform",
              }}
            >
              Our Services
            </h2>
          </div>

          <p
            className="max-w-xl xl:justify-self-end flex flex-col"
            style={{
              fontSize: "16px",
              lineHeight: 1.6,
              letterSpacing: "-0.02em",
              color: "rgba(245,245,247,0.62)",
            }}
          >
            <span className="md:hidden">
              <span className="block overflow-hidden">
                <span className="services-line block">
                  We craft high-impact digital experiences through strategic design, seamless development, mobile product thinking, and AI-ready systems that help serious businesses grow with clarity.
                </span>
              </span>
            </span>

            <span className="hidden md:block">
              <span className="block overflow-hidden">
                <span className="services-line block">We craft high-impact digital experiences through</span>
              </span>
              <span className="block overflow-hidden">
                <span className="services-line block">strategic design, seamless development, mobile</span>
              </span>
              <span className="block overflow-hidden">
                <span className="services-line block">product thinking, and AI-ready systems that</span>
              </span>
              <span className="block overflow-hidden">
                <span className="services-line block">help serious businesses grow with clarity.</span>
              </span>
            </span>
          </p>
        </div>

        <ol
          className="border-t border-white/12 list-none"
          onMouseLeave={() => setActiveServiceId(null)}
        >
          <AnimatePresence initial={false}>
            {displayServices.map((service, index) => {
              const isActive = activeServiceId === service.id;
              const number = (index + 1).toString().padStart(2, "0");
              const categorySlug = service.href.split('/').pop() || "";
              const sanityImage = categoryImagesMap && categoryImagesMap[categorySlug];
              const image = sanityImage || imageMap[service.id]?.image || "/projects/novira.jpg";
              const imageAlt = imageMap[service.id]?.imageAlt || "Service preview";

              return (
                <motion.li
                  key={service.id}
                  layout
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative border-b border-white/12 overflow-hidden"
                >
                  <article
                    onMouseEnter={() => {
                      if (!isMobile) setActiveServiceId(service.id);
                    }}
                    onClick={() => {
                      router.push(service.href);
                    }}
                    className="cursor-pointer"
                  >
                    <AnimatePresence>
                      {isActive && (
                        <motion.span
                          key={service.id}
                          aria-hidden="true"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="pointer-events-none absolute inset-x-0 top-0 h-4 overflow-hidden"
                        >
                          <span className="services-shine-line" />
                        </motion.span>
                      )}
                    </AnimatePresence>

                    <h3>
                      <div className="w-full py-7 text-left md:py-9">
                        <span className="flex items-start justify-between gap-4">
                          <span className="flex min-w-0 items-start gap-3 md:gap-5">
                            <span
                              className="min-w-0"
                              style={{
                                fontFamily: "var(--font-inter-tight)",
                                fontSize: "clamp(2rem, 4.4vw, 3.9rem)",
                                fontWeight: 500,
                                lineHeight: 0.94,
                                letterSpacing: "-0.06em",
                                color: "#F5F5F7",
                              }}
                            >
                              {service.title}
                            </span>
                            <span
                              className="pt-1 md:pt-2"
                              style={{
                                fontFamily: "var(--font-inter-tight)",
                                fontSize: "clamp(1.1rem, 1.45vw, 1.8rem)",
                                fontWeight: 500,
                                letterSpacing: "-0.04em",
                                color: "rgba(245,245,247,0.74)",
                              }}
                            >
                              {number}
                            </span>
                          </span>

                          <span
                            className="flex shrink-0 items-center justify-center pt-1"
                            style={{
                              transition: "transform 0.25s ease, opacity 0.25s ease",
                              transform: isActive ? "translateX(0)" : "translateX(-4px)",
                            }}
                          >
                            <ArrowUpRight
                              size={24}
                              strokeWidth={1.8}
                              style={{ color: "#F5F5F7", opacity: isActive ? 1 : 0.72 }}
                              aria-hidden="true"
                            />
                          </span>
                        </span>
                      </div>
                    </h3>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          layout={!isMobile}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: isMobile ? 0.3 : 0.42, ease: isMobile ? "easeOut" : [0.22, 1, 0.36, 1] }}
                          style={{ overflow: "hidden" }}
                        >
                          <div className="grid gap-7 pb-8 md:pb-10 xl:grid-cols-[minmax(280px,1fr)_minmax(320px,0.9fr)] xl:items-start xl:gap-10">
                            <div className="max-w-[34rem] pr-3">
                              <p
                                style={{
                                  fontSize: "14px",
                                  lineHeight: 1.65,
                                  color: "rgba(245,245,247,0.64)",
                                }}
                              >
                                {service.description}
                              </p>
                              <div className="mt-5" onClick={(event) => event.stopPropagation()}>
                                <TextButton href={service.href} icon={ArrowUpRight}>
                                  Explore {service.title}
                                </TextButton>
                              </div>
                            </div>

                            <motion.figure
                              initial={{ opacity: 0, y: 14, scale: 0.98 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: -14, scale: 0.98 }}
                              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                              className="relative justify-self-end overflow-hidden rounded-none border border-white/8 bg-[#111214] shadow-[0_28px_90px_rgba(0,0,0,0.42)]"
                              style={{ width: "100%", maxWidth: "460px" }}
                            >
                              <div className="relative aspect-[16/9]">
                                <Image
                                  src={image}
                                  alt={imageAlt}
                                  fill
                                  className="object-cover"
                                  sizes="(max-width: 1279px) 100vw, 46vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/48 via-transparent to-transparent" />
                              </div>
                            </motion.figure>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </article>
                </motion.li>
              );
            })}
          </AnimatePresence>

          <motion.li layout className="relative border-b border-white/12">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="block w-full group text-left"
              onMouseEnter={() => {
                if (!isMobile) setActiveServiceId("view-all");
              }}
            >
              <article>
                <AnimatePresence>
                  {activeServiceId === "view-all" && (
                    <motion.span
                      key="view-all"
                      aria-hidden="true"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="pointer-events-none absolute inset-x-0 top-0 h-4 overflow-hidden"
                    >
                      <span className="services-shine-line" />
                    </motion.span>
                  )}
                </AnimatePresence>

                <h3>
                  <div className="w-full py-7 text-left md:py-9">
                    <span className="flex items-start justify-between gap-4">
                      <span className="flex min-w-0 items-start gap-3 md:gap-5">
                        <span
                          className="min-w-0"
                          style={{
                            fontFamily: "var(--font-inter-tight)",
                            fontSize: "clamp(1.5rem, 3vw, 2.4rem)",
                            fontWeight: 500,
                            lineHeight: 0.94,
                            letterSpacing: "-0.04em",
                            color: "#F5F5F7",
                          }}
                        >
                          {isExpanded ? (
                            "View Less Services"
                          ) : (
                            <>View <span style={{ color: "#D0F504" }}>{`{${remainingServicesCount}}`}</span> More Services</>
                          )}
                        </span>
                      </span>

                      <span
                        className="flex shrink-0 items-center justify-center pt-1 transition-transform duration-250 ease-out group-hover:translate-x-[0px] -translate-x-[4px]"
                        style={{
                          transition: "transform 0.25s ease, opacity 0.25s ease",
                        }}
                      >
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <ArrowUpRight
                            size={24}
                            strokeWidth={1.8}
                            className="text-[#F5F5F7] opacity-70 group-hover:opacity-100 transition-opacity"
                            aria-hidden="true"
                            style={{ transform: isExpanded ? "rotate(90deg)" : "none" }}
                          />
                        </motion.div>
                      </span>
                    </span>
                  </div>
                </h3>
              </article>
            </button>
          </motion.li>
        </ol>
      </div>

      <style jsx>{`
        @keyframes services-shine-pass {
          0% {
            left: -16rem;
            opacity: 0;
          }
          8% {
            opacity: 1;
          }
          92% {
            opacity: 1;
          }
          100% {
            left: 100%;
            opacity: 0;
          }
        }

        .services-shine-line {
          position: absolute;
          top: 0;
          left: -16rem;
          width: 16rem;
          height: 1px;
          background: linear-gradient(
            to right,
            transparent 0%,
            rgba(255, 255, 255, 0.42) 20%,
            #ffffff 50%,
            rgba(255, 255, 255, 0.42) 80%,
            transparent 100%
          );
          animation: services-shine-pass 4.8s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .services-shine-line {
            animation: none;
            left: 0;
            opacity: 0.85;
          }
        }
      `}</style>
    </section>
  );
}
