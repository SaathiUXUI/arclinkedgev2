"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppWidget() {
  const phone = "919824838067";
  const message = "Hi, I found Arclink Edge and I'd like to discuss a project!";
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.4 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-200"
      style={{ backgroundColor: "#25D366", color: "#fff" }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "scale(1.1)";
        el.style.boxShadow = "0 8px 30px rgba(37,211,102,0.4)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "scale(1)";
        el.style.boxShadow = "0 4px 14px rgba(0,0,0,0.3)";
      }}
    >
      <MessageCircle size={24} aria-hidden="true" />
    </motion.a>
  );
}
