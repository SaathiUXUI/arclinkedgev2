"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm, useController } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle, ChevronDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Cal, { getCalApi } from "@calcom/embed-react";
import { contactSchema, type ContactFormData, budgetOptions, projectTypeOptions } from "@/lib/validations";
import HeadingReveal from "@/components/ui/HeadingReveal";

// Local Submit Button that mimics PrimaryButton styling
function SubmitButton({ isSubmitting, children }: { isSubmitting: boolean; children: React.ReactNode }) {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="group relative inline-flex overflow-hidden text-sm font-semibold bg-[#F5F5F7] text-[#050A18] hover:bg-[#EBEBEB] hover:scale-[1.02] active:scale-100 transition-all duration-300 ease-out disabled:opacity-70 disabled:cursor-not-allowed"
      style={{ borderRadius: 0, fontFamily: "var(--font-inter-tight)" }}
    >
      {/* Default layer */}
      <span
        className="flex items-center gap-2 transition-transform duration-300 ease-out group-hover:-translate-y-full"
        style={{ padding: "1rem 2.5rem" }}
      >
        {isSubmitting ? "Sending..." : children}
        {!isSubmitting && <ArrowRight size={16} aria-hidden="true" />}
      </span>
      {/* Hover layer */}
      <span
        className="absolute inset-0 flex items-center gap-2 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0"
        style={{ padding: "1rem 2.5rem" }}
      >
        {isSubmitting ? "Sending..." : children}
        {!isSubmitting && (
          <ArrowRight
            size={16}
            aria-hidden="true"
            className="-translate-x-2 transition-transform duration-[400ms] ease-out group-hover:translate-x-0"
          />
        )}
      </span>
    </button>
  );
}

function DoodleWord({ children }: { children: React.ReactNode }) {
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const doodleRef = useRef<SVGEllipseElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!wrapperRef.current || !doodleRef.current) return;

    const doodle = doodleRef.current;
    const length = doodle.getTotalLength();

    const ctx = gsap.context(() => {
      gsap.set(doodle, {
        strokeDasharray: length,
        strokeDashoffset: length,
        opacity: 0,
      });

      gsap.to(doodle, {
        strokeDashoffset: 0,
        opacity: 0.95,
        duration: 0.65,
        delay: 1.05,
        ease: "power2.out",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top 82%",
          once: true,
        },
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <span
      ref={wrapperRef}
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
          ref={doodleRef}
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

// Styled Custom Dropdown Component
function StyledDropdown({
  label,
  options,
  control,
  name,
  placeholder,
  error
}: {
  label: string;
  options: { label: string; value: string }[];
  control: any;
  name: string;
  placeholder: string;
  error?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { field } = useController({ name, control });

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find(opt => opt.value === field.value);

  return (
    <div className="space-y-2 relative group" ref={containerRef}>
      <label className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold">{label}</label>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-transparent border-b ${error ? "border-[#ef4444]" : "border-white/10"} py-4 flex items-center justify-between cursor-pointer transition-all duration-300`}
      >
        <span className={`${field.value ? "text-[#F5F5F7]" : "text-[#F5F5F7]/54"} text-md transition-colors duration-300`}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown size={14} className={`text-white/50 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </div>

      {/* Hover Border Animation: Left to Right */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-white z-20"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{ width: "100%", originX: 0 }}
      />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute z-[100] left-0 right-0 top-full mt-2 bg-[#0A0A0B] border border-white/10 shadow-2xl overflow-hidden"
            style={{ borderRadius: 0 }}
          >
            <div
              className="max-h-[240px] overflow-y-auto custom-scrollbar relative"
              data-lenis-prevent
              style={{
                overscrollBehavior: "contain",
                WebkitOverflowScrolling: "touch"
              }}
            >
              {options.map((opt) => (
                <div
                  key={opt.value}
                  onClick={(e) => {
                    e.stopPropagation();
                    field.onChange(opt.value);
                    setIsOpen(false);
                  }}
                  className={`px-5 py-3 text-sm transition-all duration-200 cursor-pointer ${field.value === opt.value ? "bg-[#F5F5F7] text-[#050A18]" : "text-[#F5F5F7] hover:bg-white/[0.05]"}`}
                >
                  {opt.label}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Contact({ isInternalPage = false }: { isInternalPage?: boolean }) {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
        styles: { branding: { brandColor: "#0052FF" } },
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section
      id="contact"
      className={`${isInternalPage ? "py-0 bg-transparent" : "py-24 lg:py-40 bg-[#000000]"} relative overflow-hidden`}
      aria-labelledby="contact-heading"
    >
      {/* Background Blur Elements - Seamless at 0.2 Opacity */}
      {!isInternalPage && (
        <>
          <div
            className="absolute -left-[10%] top-0 w-[45%] h-[55%] rounded-full pointer-events-none opacity-[0.2] mix-blend-screen"
            style={{
              background: "radial-gradient(circle, #0052FF 0%, transparent 70%)",
              filter: "blur(110px)",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute -right-[15%] bottom-0 w-[45%] h-[55%] rounded-full pointer-events-none opacity-[0.2] mix-blend-screen"
            style={{
              background: "radial-gradient(circle, #D0F504 0%, transparent 70%)",
              filter: "blur(110px)",
            }}
            aria-hidden="true"
          />
        </>
      )}

      {!isInternalPage && (
        <>
          <div
            className="absolute right-[20%] top-[10%] w-[20%] h-[25%] rounded-full pointer-events-none opacity-[0.1] mix-blend-screen"
            style={{
              background: "radial-gradient(circle, #0052FF 0%, transparent 70%)",
              filter: "blur(90px)",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute left-[20%] bottom-[20%] w-[20%] h-[25%] rounded-full pointer-events-none opacity-[0.08] mix-blend-screen"
            style={{
              background: "radial-gradient(circle, #D0F504 0%, transparent 70%)",
              filter: "blur(90px)",
            }}
            aria-hidden="true"
          />
        </>
      )}

      <div className={`${isInternalPage ? "px-0" : "mx-auto max-w-[1600px]"} relative z-10`} style={!isInternalPage ? { paddingLeft: "clamp(16px, 5vw, 80px)", paddingRight: "clamp(16px, 5vw, 80px)" } : {}}>
        {/* Cal.com Embed */}
        {!isInternalPage && (
          <div className="w-full min-h-[600px] overflow-hidden mb-24 lg:mb-32">
            <Cal
              calLink="arclinkedge/project-scope-call"
              style={{ width: "100%", height: "100%", overflow: "scroll" }}
              config={{ layout: "month_view", theme: "dark" }}
            />
          </div>
        )}

        <div className={`grid grid-cols-1 ${isInternalPage ? "lg:grid-cols-1" : "lg:grid-cols-2"} gap-20 lg:gap-32 items-start`}>

          {/* Left Column: Info */}
          {!isInternalPage && (
            <div className="flex flex-col justify-between h-full py-2">
            <div>
              <HeadingReveal
                id="contact-heading"
                wrapperClassName="mb-8"
                className="text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1]"
                style={{
                  fontFamily: "var(--font-inter-tight)",
                  color: "#F5F5F7",
                  letterSpacing: "-0.04em",
                }}
              >
                <span style={{ color: "rgba(245,245,247,0.55)" }}>Let&apos;s make your</span>
                <br />
                <span
                  style={{
                    fontFamily: "var(--font-fraunces)",
                    fontStyle: "italic",
                    fontWeight: 400,
                    letterSpacing: "-0.02em",
                  }}
                >
                  vision
                </span>{" "}
                <span style={{ color: "rgba(245,245,247,0.55)" }}>come</span>{" "}
                <DoodleWord>true</DoodleWord>
              </HeadingReveal>

              <p className="text-md md:text-md text-[#8E8E93] max-w-md leading-relaxed mb-16" style={{ letterSpacing: "-0.01em" }}>
                At Arclink Edge, we turn complex ideas into seamless digital experiences. Whether you&apos;re starting from scratch or scaling up, we&apos;re here to help.
              </p>
            </div>

            <div className="space-y-10 pt-10 lg:pt-0">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-2 font-semibold">Send us a message</p>
                <a
                  href="mailto:hello@arclinkedge.com"
                  className="text-2xl md:text-xl font-medium text-[#F5F5F7] hover:text-[#0052FF] transition-colors duration-300"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  hello@arclinkedge.com
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-4 font-semibold">Give us a call</p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group/phone">
                    <img src="/flags/in.svg" alt="India Flag" className="w-6 h-4 object-cover" />
                    <a
                      href="tel:+919824838067"
                      className="text-2xl md:text-xl font-medium text-[#F5F5F7] hover:text-[#0052FF] transition-colors duration-300"
                      style={{ letterSpacing: "-0.02em" }}
                    >
                      +91 98248-38067
                    </a>
                  </div>

                  <div className="flex items-center gap-4 group/phone">
                    <img src="/flags/us.svg" alt="USA Flag" className="w-6 h-4 object-cover" />
                    <a
                      href="tel:+12164184653"
                      className="text-2xl md:text-xl font-medium text-[#F5F5F7] hover:text-[#0052FF] transition-colors duration-300"
                      style={{ letterSpacing: "-0.02em" }}
                    >
                      +1 (216) 418-4653
                    </a>
                  </div>
                </div>
              </div>
              </div>
            </div>
          )}

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9], delay: 0.1 }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  className="flex flex-col items-center justify-center text-center py-20 px-8 border border-white/10"
                  style={{ backgroundColor: "rgba(255,255,255,0.02)" }}
                >
                  <CheckCircle size={64} className="text-[#0052FF] mb-6" />
                  <h3 className="text-3xl font-medium text-[#F5F5F7] mb-4">Message Sent!</h3>
                  <p className="text-[#8E8E93] max-w-xs">
                    We&apos;ve received your message and will get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form
                  key="form"
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-8"
                  noValidate
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Name */}
                    <div className="space-y-2 relative group">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold uppercase">Your Name</label>
                      <input
                        {...register("name")}
                        type="text"
                        placeholder="ex. John Doe"
                        className={`w-full bg-transparent border-b ${errors.name ? "border-[#ef4444]" : "border-white/10 group-hover:border-white/20"} py-4 text-[#F5F5F7] placeholder:text-white/54 focus:border-white outline-none focus:outline-none transition-all duration-300`}
                      />
                      <motion.div
                        className="absolute bottom-0 left-0 h-[2px] bg-white z-10"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        style={{ width: "100%", originX: 0 }}
                      />
                    </div>
                    {/* Email */}
                    <div className="space-y-2 relative group">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold uppercase">Your Email</label>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="example@youremail.com"
                        className={`w-full bg-transparent border-b ${errors.email ? "border-[#ef4444]" : "border-white/10 group-hover:border-white/20"} py-4 text-[#F5F5F7] placeholder:text-white/54 focus:border-white outline-none focus:outline-none transition-all duration-300`}
                      />
                      <motion.div
                        className="absolute bottom-0 left-0 h-[2px] bg-white z-10"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        style={{ width: "100%", originX: 0 }}
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div className="space-y-2 relative group">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold">Your Company Name</label>
                    <input
                      {...register("company")}
                      type="text"
                      placeholder="ex. Arclink Edge"
                      className={`w-full bg-transparent border-b ${errors.company ? "border-[#ef4444]" : "border-white/10 group-hover:border-white/20"} py-4 text-[#F5F5F7] placeholder:text-white/54 focus:border-white outline-none focus:outline-none transition-all duration-300`}
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 h-[2px] bg-white z-10"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      style={{ width: "100%", originX: 0 }}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Service */}
                    <StyledDropdown
                      label="Service"
                      name="projectType"
                      placeholder="Select a service"
                      options={projectTypeOptions}
                      control={control}
                      error={!!errors.projectType}
                    />
                    {/* Budget */}
                    <StyledDropdown
                      label="Budget"
                      name="budget"
                      placeholder="Select budget range"
                      options={budgetOptions}
                      control={control}
                      error={!!errors.budget}
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2 relative group">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold">Message</label>
                    <textarea
                      {...register("message")}
                      rows={4}
                      placeholder="Tell us more about your project here..."
                      className={`w-full bg-transparent border-b ${errors.message ? "border-[#ef4444]" : "border-white/10 group-hover:border-white/20"} py-4 text-[#F5F5F7] placeholder:text-white/54 focus:border-white outline-none focus:outline-none transition-all duration-300 resize-none`}
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 h-[2px] bg-white z-10"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      style={{ width: "100%", originX: 0 }}
                    />
                  </div>

                  <div className="pt-6">
                    <SubmitButton isSubmitting={isSubmitting}>
                      Send Message
                    </SubmitButton>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
      <style>{`
        input:focus, select:focus, textarea:focus {
          outline: none !important;
          box-shadow: none !important;
          ring: none !important;
        }
        /* Autofill background fix */
        input:-webkit-autofill,
        input:-webkit-autofill:hover, 
        input:-webkit-autofill:focus {
          -webkit-text-fill-color: #F5F5F7;
          -webkit-box-shadow: 0 0 0px 1000px #000000 inset;
          transition: background-color 5000s ease-in-out 0s;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #000;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #222;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #333;
        }
      `}</style>
    </section>
  );
}
