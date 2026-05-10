"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie } from "lucide-react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookie-consent");
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Cookie consent"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 md:left-auto md:right-8 md:bottom-8 md:max-w-md z-50 p-8"
          style={{
            backgroundColor: "#0A0A0A",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
            borderRadius: 0,
          }}
        >
          <div className="flex flex-col gap-6">
            <div className="flex-1 min-w-0">
              <p className="text-base font-semibold mb-2" style={{ color: "#F5F5F7", fontFamily: "var(--font-inter-tight)" }}>
                We use cookies
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(245,245,247,0.55)", fontFamily: "var(--font-inter)", letterSpacing: "-0.01em" }}>
                We use cookies to enhance your experience. By continuing, you agree to our{" "}
                <a href="/cookies" className="underline font-medium" style={{ color: "#0052FF" }}>
                  Cookie Policy
                </a>
                .
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={accept}
                className="px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-200"
                style={{ backgroundColor: "#0052FF", color: "#fff", borderRadius: 0 }}
              >
                Accept all
              </button>
              <button
                onClick={decline}
                className="px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-200"
                style={{
                  border: "1px solid rgba(255,255,255,0.18)",
                  color: "rgba(245,245,247,0.75)",
                  backgroundColor: "transparent",
                  borderRadius: 0,
                }}
              >
                Decline
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
