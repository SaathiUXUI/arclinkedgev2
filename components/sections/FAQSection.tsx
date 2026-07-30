"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="defer-render px-6 py-20 lg:px-12 lg:py-28 relative z-10 bg-black border-y border-white/[0.06]">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <SectionLabel>FAQs</SectionLabel>
          <h2 className="mt-6 type-legacy-069">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`border transition-colors duration-300 ${isOpen ? 'border-white/20 bg-white/[0.03]' : 'border-white/[0.06] bg-transparent hover:border-white/10'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full cursor-pointer items-center justify-between p-6 text-left"
                >
                  <h3 className="text-[#F5F5F7] type-legacy-100">
                    {faq.question}
                  </h3>
                  <span className="flex-shrink-0 ml-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-white/50 transition-colors">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-white/60 type-b2 type-legacy-073">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
