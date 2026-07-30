"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

/* ── Styled Dropdown (same as Contact.tsx) ── */
function StyledDropdown({
  label,
  options,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="space-y-2 relative group" ref={containerRef}>
      <label className="text-white/50 type-legacy-033">{label}</label>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-transparent border-b border-white/10 py-4 flex items-center justify-between cursor-pointer transition-all duration-300"
      >
        <span className={`${value ? "text-[#F5F5F7]" : isOpen ? "text-[#F5F5F7]" : "text-[#F5F5F7]/54"} transition-colors duration-300 type-b2`}>
          {value || placeholder}
        </span>
        <ChevronDown size={14} className={`text-white/50 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </div>

      {/* Hover Border Animation */}
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
              style={{ overscrollBehavior: "contain", WebkitOverflowScrolling: "touch" }}
            >
              {options.map((opt) => (
                <div
                  key={opt}
                  onClick={(e) => {
                    e.stopPropagation();
                    onChange(opt);
                    setIsOpen(false);
                  }}
                  className={[`px-5 py-3 transition-all duration-200 cursor-pointer type-b3 ${value === opt ? "bg-[#F5F5F7] text-[#050A18]" : "text-[#F5F5F7] hover:bg-white/[0.05]"}`, "type-legacy-028"].filter(Boolean).join(" ")}
                >
                  <span>{opt}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Submit Button (same style as Contact.tsx) ── */
function SubmitButton({ children, isSubmitting }: { children: React.ReactNode; isSubmitting?: boolean }) {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="group relative inline-flex w-full cursor-pointer overflow-hidden bg-[#F5F5F7] text-[#050A18] hover:bg-[#EBEBEB] hover:scale-[1.02] active:scale-100 transition-all duration-300 ease-out disabled:opacity-70 disabled:cursor-not-allowed type-legacy-034"
      style={{ borderRadius: 0 }}
    >
      <span
        className="flex w-full items-center justify-center gap-2 transition-transform duration-300 ease-out group-hover:-translate-y-full"
        style={{ padding: "1rem 2.5rem" }}
      >
        {children}
        <ArrowRight size={16} aria-hidden="true" />
      </span>
      <span
        className="absolute inset-0 flex w-full items-center justify-center gap-2 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0"
        style={{ padding: "1rem 2.5rem" }}
      >
        {children}
        <ArrowRight
          size={16}
          aria-hidden="true"
          className="-translate-x-2 transition-transform duration-[400ms] ease-out group-hover:translate-x-0"
        />
      </span>
    </button>
  );
}

/* ── Main Form ── */
export default function HiringForm({ role }: { role?: string }) {
  const [engagement, setEngagement] = useState("");
  const [duration, setDuration] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [requirements, setRequirements] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail?.engagement) {
        setEngagement(detail.engagement);
      }
    };
    window.addEventListener("hiring-prefill", handler);
    return () => window.removeEventListener("hiring-prefill", handler);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/hiring", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, engagement, duration, requirements, role }),
      });
      if (res.ok) {
        setSubmitted(true);
        setName(""); setEmail(""); setCompany(""); setEngagement(""); setDuration(""); setRequirements("");
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        const err = await res.json();
        alert(`Failed to send: ${err.error || "Unknown error"}`);
      }
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-20 px-8">
        <div className="flex h-16 w-16 items-center justify-center border border-[#0052FF]/20 bg-[#0052FF]/5 mb-6">
          <ArrowRight className="h-8 w-8 text-[#0052FF]" />
        </div>
        <h3 className="text-[#F5F5F7] mb-4 type-legacy-035">Request Sent!</h3>
        <p className="text-white/40 max-w-xs">We&apos;ve received your hiring inquiry and will get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <>
      <form className="space-y-8" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Name */}
          <div className="space-y-2 relative group">
            <label className="text-white/50 type-legacy-033">Your Name</label>
            <input
              type="text"
              placeholder="ex. John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full bg-transparent border-b border-white/10 group-hover:border-white/20 py-4 text-[#F5F5F7] placeholder:text-white/54 focus:border-white outline-none transition-all duration-300"
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
            <label className="text-white/50 type-legacy-033">Company Email</label>
            <input
              type="email"
              placeholder="example@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-transparent border-b border-white/10 group-hover:border-white/20 py-4 text-[#F5F5F7] placeholder:text-white/54 focus:border-white outline-none transition-all duration-300"
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
          <label className="text-white/50 type-legacy-033">Company Name</label>
          <input
            type="text"
            placeholder="ex. Arclink Edge"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full bg-transparent border-b border-white/10 group-hover:border-white/20 py-4 text-[#F5F5F7] placeholder:text-white/54 focus:border-white outline-none transition-all duration-300"
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
          {/* Engagement Model */}
          <StyledDropdown
            label="Engagement Model"
            placeholder="Select engagement type"
            options={["Monthly Dedicated (Full-time)", "Monthly Dedicated (Part-time)", "Hourly Retainer"]}
            value={engagement}
            onChange={setEngagement}
          />
          {/* Duration */}
          <StyledDropdown
            label="Duration"
            placeholder="Select duration"
            options={["3+ Months", "6+ Months", "Ongoing Partnership"]}
            value={duration}
            onChange={setDuration}
          />
        </div>

        {/* Message */}
        <div className="space-y-2 relative group">
          <label className="text-white/50 type-legacy-033">Requirements / Tech Stack</label>
          <textarea
            rows={4}
            placeholder="Tell us more about the developer skills you need..."
            value={requirements}
            onChange={(e) => setRequirements(e.target.value)}
            className="w-full bg-transparent border-b border-white/10 group-hover:border-white/20 py-4 text-[#F5F5F7] placeholder:text-white/54 focus:border-white outline-none transition-all duration-300 resize-none"
          />
          <motion.div
            className="absolute bottom-0 left-0 h-[2px] bg-white z-10"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ width: "100%", originX: 0 }}
          />
        </div>

        <div className="pt-4">
          <SubmitButton isSubmitting={isSubmitting}>{isSubmitting ? "Sending..." : "Submit Hiring Request"}</SubmitButton>
        </div>
      </form>

      <style>{`
        input:focus, select:focus, textarea:focus {
          outline: none !important;
          box-shadow: none !important;
        }
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus {
          -webkit-text-fill-color: #F5F5F7;
          -webkit-box-shadow: 0 0 0px 1000px #000000 inset;
          transition: background-color 5000s ease-in-out 0s;
        }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #000; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #222; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #333; }
      `}</style>
    </>
  );
}
