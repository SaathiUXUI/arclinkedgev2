"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Button";
import HeadingReveal from "@/components/ui/HeadingReveal";
import { REMOTE_WORK_SHORT } from "@/lib/company";

const WORDS = ["incredible?", "scalable?", "seamless?", "impactful?", "memorable?"];

export default function CTASection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % WORDS.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="cta"
      className="defer-render relative overflow-hidden bg-[#000000]"
      style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
      aria-labelledby="cta-heading"
    >
      <div className="relative z-10 w-full mx-auto px-0">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden px-5 py-24 sm:px-8 md:px-12 lg:px-20 lg:py-32"
          style={{
            borderRadius: 0,
            background: "linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.02) 100%)",
            backdropFilter: "blur(30px)",
            WebkitBackdropFilter: "blur(30px)",
          }}
        >

          {/* Glass Layer */}
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
            }}
          />

          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <HeadingReveal
              id="cta-heading"
              wrapperClassName="mb-8"
              className="type-legacy-095"
              style={{ color: "#F5F5F7" }}
            >
              <span className="block">Ready to build</span>
              <span className="mx-auto mt-1 inline-flex max-w-full items-baseline justify-center whitespace-nowrap type-legacy-096">
                <span>something</span>
                <span className="relative ml-[0.16em] inline-block h-[1.55em] overflow-hidden pr-[0.22em] align-[-0.24em] text-[#0052FF]">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={WORDS[index]}
                      initial={{ y: "105%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: "-105%", opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="block whitespace-nowrap py-[0.12em] will-change-transform type-legacy-097"
                    >
                      {WORDS[index]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </span>
            </HeadingReveal>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[#F7F5F78A] max-w-2xl mx-auto mb-12 type-b2 type-legacy-098"
            >
              From a bold idea to a polished product — we&apos;re your full-stack partner from discovery to launch. {REMOTE_WORK_SHORT} Your investment goes into the product and the results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 w-full"
            >
              <PrimaryButton href="/contact" className="w-full sm:w-auto">
                Start Your Project
              </PrimaryButton>
              <SecondaryButton
                href="https://wa.me/919824838067?text=Hello!%20I%20have%20a%20project%20in%20mind.%20Are%20you%20available%20for%20a%20quick%20chat%3F"
                imgSrc="/logo/whatsapp.svg"
                imgAlt="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                Talk on WhatsApp
              </SecondaryButton>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
