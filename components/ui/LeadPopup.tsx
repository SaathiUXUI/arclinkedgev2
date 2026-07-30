"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, CheckCircle2, Loader2, Mail, User, Building2, Shield, Phone, Globe, ChevronDown } from "lucide-react";
import { countries, type Country } from "@/lib/countries";
import { REMOTE_WORK_SHORT } from "@/lib/company";

export default function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Country typeahead state
  const [countryInput, setCountryInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [selectedPhoneDialCode, setSelectedPhoneDialCode] = useState("+91");

  const popupDelayTimer = useRef<NodeJS.Timeout | null>(null);
  const countryRef = useRef<HTMLDivElement>(null);

  // Refs for Enter-key focus navigation
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const countryInputRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);

  // Filtered suggestions based on what user typed
  const suggestions = countryInput.trim().length > 0
    ? countries.filter((c) =>
        c.name.toLowerCase().startsWith(countryInput.toLowerCase()) ||
        c.name.toLowerCase().includes(countryInput.toLowerCase())
      ).slice(0, 8)
    : countries.slice(0, 8); // show first 8 by default when focused

  // Click outside → close suggestions
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (countryRef.current && !countryRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Select a country from suggestions
  const selectCountry = (c: Country) => {
    setFormData((prev) => ({ ...prev, country: c.name }));
    setCountryInput(c.name);
    setSelectedPhoneDialCode(c.dialCode);
    setShowSuggestions(false);
    setHighlightedIndex(0);
    // Move to phone field
    setTimeout(() => phoneRef.current?.focus(), 50);
  };

  // Lock body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  // Popup trigger logic
  useEffect(() => {
    const lastInteraction = localStorage.getItem("lead-popup-interacted");
    if (lastInteraction) {
      const timeDiff = Date.now() - parseInt(lastInteraction, 10);
      const sevenDays = 7 * 24 * 60 * 60 * 1000;
      if (timeDiff < sevenDays) return;
    }

    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const scrollPercent = (window.scrollY / docHeight) * 100;
      if (scrollPercent >= 50) {
        openPopup();
        window.removeEventListener("scroll", handleScroll);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 15) {
        openPopup();
        document.removeEventListener("mouseleave", handleMouseLeave);
      }
    };

    const openPopup = () => {
      popupDelayTimer.current = setTimeout(() => setIsOpen(true), 500);
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (popupDelayTimer.current) clearTimeout(popupDelayTimer.current);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleClose = () => {
    localStorage.setItem("lead-popup-interacted", Date.now().toString());
    setIsOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Enter key → move to next field
  const handleEnterKey = (
    e: React.KeyboardEvent<HTMLInputElement>,
    nextRef: React.RefObject<HTMLInputElement | null>
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      nextRef.current?.focus();
    }
  };

  // Country input keyboard handling
  const handleCountryKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showSuggestions || suggestions.length === 0) {
      if (e.key === "Enter") {
        e.preventDefault();
        phoneRef.current?.focus();
      }
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((i) => Math.min(i + 1, suggestions.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (suggestions[highlightedIndex]) {
        selectCountry(suggestions[highlightedIndex]);
      }
    } else if (e.key === "Escape") {
      setShowSuggestions(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.country) {
      setErrorMessage("Please fill out all required fields.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          phone: `${selectedPhoneDialCode} ${formData.phone}`,
          source: "exit-intent-popup",
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        localStorage.setItem("lead-popup-interacted", Date.now().toString());
        setFormData({ name: "", email: "", phone: "", company: "", country: "" });
        setCountryInput("");
      } else {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
    } catch (err: any) {
      setErrorMessage(err.message || "Network error. Please check your connection.");
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            onWheel={(e) => e.stopPropagation()}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl overflow-visible bg-[#070B19] border border-white/10 shadow-[0_25px_70px_rgba(0,0,0,0.8)] p-8 md:p-10"
            style={{ borderRadius: 0 }}
          >
            {/* Corner Decorative Blur */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#0052FF] opacity-10 rounded-full blur-[60px] pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-1"
              aria-label="Close dialog"
            >
              <X className="w-6 h-6" />
            </button>

            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center py-8"
              >
                <div className="w-16 h-16 bg-[#0052FF]/10 text-[#0052FF] flex items-center justify-center rounded-full mb-6 border border-[#0052FF]/20">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: "#F5F5F7", fontFamily: "var(--font-inter-tight)", letterSpacing: "-0.02em" }}
                >
                  Audit Request Received!
                </h3>
                <p
                  className="text-sm leading-relaxed max-w-md"
                  style={{ color: "rgba(245,245,247,0.65)", fontFamily: "var(--font-inter)" }}
                >
                  Thank you for reaching out. Our engineering team will connect with you within 24 hours to schedule your audit call.
                </p>
                <button
                  onClick={handleClose}
                  className="mt-8 px-8 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-200"
                  style={{ backgroundColor: "#0052FF", color: "#FFFFFF", borderRadius: 0 }}
                >
                  Return to Website
                </button>
              </motion.div>
            ) : (
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center gap-1.5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-[#0052FF] via-[#0084FF] to-[#00C2FF] text-white shadow-[0_0_15px_rgba(0,82,255,0.4)]">
                    <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                    Limited Offer
                  </span>
                </div>
                <h3
                  className="text-2xl md:text-3xl font-medium tracking-tight mb-3"
                  style={{ color: "#F5F5F7", fontFamily: "var(--font-inter-tight)", letterSpacing: "-0.03em" }}
                >
                  Get a Free Tech &amp; UX Audit
                </h3>
                <p
                  className="text-sm md:text-base mb-8 leading-relaxed"
                  style={{ color: "rgba(245,245,247,0.6)", fontFamily: "var(--font-inter)" }}
                >
                  Want to scale your web, mobile or SaaS product? Get a complimentary 30-minute roadmap session with our lead engineers. <span className="text-[#D0F504]">{REMOTE_WORK_SHORT}</span>
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white/30">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        ref={nameRef}
                        type="text"
                        name="name"
                        required
                        placeholder="Your Full Name *"
                        value={formData.name}
                        onChange={handleInputChange}
                        onKeyDown={(e) => handleEnterKey(e, emailRef)}
                        className="w-full pl-11 pr-4 py-3.5 bg-white/[0.03] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#0052FF] focus:bg-white/[0.05] transition-all"
                        style={{ borderRadius: 0, fontFamily: "var(--font-inter)" }}
                      />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white/30">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        ref={emailRef}
                        type="email"
                        name="email"
                        required
                        placeholder="Business Email *"
                        value={formData.email}
                        onChange={handleInputChange}
                        onKeyDown={(e) => handleEnterKey(e, countryInputRef)}
                        className="w-full pl-11 pr-4 py-3.5 bg-white/[0.03] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#0052FF] focus:bg-white/[0.05] transition-all"
                        style={{ borderRadius: 0, fontFamily: "var(--font-inter)" }}
                      />
                    </div>
                  </div>

                  {/* Country (typeahead) & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    {/* Country Typeahead */}
                    <div className="relative" ref={countryRef}>
                      {/* Globe icon left */}
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white/30 z-10">
                        <Globe className="w-4 h-4" />
                      </div>
                      {/* ChevronDown icon right */}
                      <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-white/40 z-10">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                      <input
                        ref={countryInputRef}
                        type="text"
                        placeholder="Country *"
                        value={countryInput}
                        autoComplete="off"
                        onChange={(e) => {
                          const val = e.target.value;
                          setCountryInput(val);
                          setFormData((prev) => ({ ...prev, country: "" })); // clear until confirmed
                          setShowSuggestions(true);
                          setHighlightedIndex(0);
                        }}
                        onFocus={() => {
                          setShowSuggestions(true);
                          setHighlightedIndex(0);
                        }}
                        onKeyDown={handleCountryKeyDown}
                        className="w-full pl-11 pr-10 py-3.5 bg-white/[0.03] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#0052FF] focus:bg-white/[0.05] transition-all"
                        style={{ borderRadius: 0, fontFamily: "var(--font-inter)" }}
                      />

                      {/* Suggestions dropdown */}
                      <AnimatePresence>
                        {showSuggestions && suggestions.length > 0 && (
                          <motion.div
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            transition={{ duration: 0.15 }}
                            className="absolute top-full left-0 mt-1 w-full bg-[#070B19] border border-white/10 shadow-2xl z-[99999] overflow-hidden"
                            style={{ borderRadius: 0 }}
                          >
                            <div
                              className="max-h-48 overflow-y-auto py-1"
                              onWheel={(e) => e.stopPropagation()}
                            >
                              {suggestions.map((c, i) => (
                                <button
                                  key={c.code + c.name}
                                  type="button"
                                  onMouseDown={() => selectCountry(c)}
                                  onMouseEnter={() => setHighlightedIndex(i)}
                                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors ${
                                    i === highlightedIndex
                                      ? "bg-[#0052FF]/20 text-white"
                                      : "text-white/70 hover:bg-white/[0.05] hover:text-white"
                                  }`}
                                >
                                  <img
                                    src={`https://flagcdn.com/w20/${c.code.toLowerCase()}.png`}
                                    alt={c.name}
                                    className="w-5 h-3.5 object-cover flex-shrink-0"
                                  />
                                  <span className="flex-1">{c.name}</span>
                                  <span className="text-xs text-white/30">{c.dialCode}</span>
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Phone — editable dial code + number input */}
                    <div className="relative flex">
                      {/* Editable dial code */}
                      <input
                        type="text"
                        value={selectedPhoneDialCode}
                        onChange={(e) => setSelectedPhoneDialCode(e.target.value)}
                        className="w-16 text-center bg-white/[0.03] border border-r-0 border-white/10 text-white/80 text-xs font-semibold focus:outline-none focus:border-[#0052FF] focus:bg-white/[0.05] transition-all"
                        style={{ borderRadius: 0, fontFamily: "var(--font-inter)" }}
                      />
                      <input
                        ref={phoneRef}
                        type="tel"
                        name="phone"
                        required
                        placeholder="Phone Number *"
                        value={formData.phone}
                        onChange={handleInputChange}
                        onKeyDown={(e) => handleEnterKey(e, companyRef)}
                        className="flex-1 w-full px-4 py-3.5 bg-white/[0.03] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#0052FF] focus:bg-white/[0.05] transition-all"
                        style={{ borderRadius: 0, fontFamily: "var(--font-inter)" }}
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white/30">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <input
                      ref={companyRef}
                      type="text"
                      name="company"
                      placeholder="Company / Website URL (Optional)"
                      value={formData.company}
                      onChange={handleInputChange}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          handleSubmit(e as any);
                        }
                      }}
                      className="w-full pl-11 pr-4 py-3.5 bg-white/[0.03] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#0052FF] focus:bg-white/[0.05] transition-all"
                      style={{ borderRadius: 0, fontFamily: "var(--font-inter)" }}
                    />
                  </div>

                  {/* Error */}
                  {status === "error" && (
                    <p className="text-xs text-red-500 font-medium mt-1">{errorMessage}</p>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="group relative w-full inline-flex overflow-hidden text-xs font-bold uppercase tracking-wider bg-white text-[#050A18] hover:bg-[#EBEBEB] hover:scale-[1.01] active:bg-white active:scale-100 transition-[background-color,transform] duration-300 ease-out cursor-pointer mt-2 disabled:opacity-50"
                    style={{ borderRadius: 0, fontFamily: "var(--font-inter-tight)" }}
                  >
                    <span
                      className="flex w-full items-center justify-center gap-2 transition-transform duration-300 ease-out group-hover:-translate-y-full group-focus:-translate-y-full"
                      style={{ padding: "1rem 1.9rem" }}
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Analyzing Product Details...
                        </>
                      ) : (
                        "Claim Your Free Tech Audit"
                      )}
                    </span>
                    <span
                      className="absolute inset-0 flex w-full translate-y-full items-center justify-center gap-2 transition-transform duration-300 ease-out group-hover:translate-y-0 group-focus:translate-y-0"
                      style={{ padding: "1rem 1.9rem" }}
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Analyzing Product Details...
                        </>
                      ) : (
                        "Claim Your Free Tech Audit"
                      )}
                    </span>
                  </button>
                </form>

                {/* Footer */}
                <div className="flex items-center justify-center gap-1.5 mt-4 text-white/30">
                  <Shield className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500/20" />
                  <p className="text-[10px] uppercase tracking-wider">
                    No spam. 100% confidential. Your details are safe with us.
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
