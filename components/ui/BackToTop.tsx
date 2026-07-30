"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 group inline-flex overflow-hidden bg-[#0A0A0B] text-[#F5F5F7] hover:bg-white/[0.08] hover:backdrop-blur-md hover:scale-[1.02] active:scale-100 cursor-pointer transition-all duration-300 ease-out shadow-lg type-legacy-034"
          style={{ border: "1px solid rgba(255,255,255,0.22)", borderRadius: 0 }}
          aria-label="Back to top"
        >
          {/* Default layer */}
          <span
            className="flex items-center gap-2 transition-transform duration-300 ease-out group-hover:-translate-y-full"
            style={{ padding: "0.85rem 1.9rem" }}
          >
            Back to top
            <ArrowUp size={15} aria-hidden="true" />
          </span>
          {/* Hover layer */}
          <span
            className="absolute inset-0 flex items-center gap-2 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0"
            style={{ padding: "0.85rem 1.9rem" }}
          >
            Back to top
            <ArrowUp
              size={15}
              aria-hidden="true"
              className="translate-y-2 transition-transform duration-[400ms] ease-out group-hover:translate-y-0"
            />
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
