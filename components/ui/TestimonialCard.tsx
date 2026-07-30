"use client";

import Image from "next/image";
import { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export default function TestimonialCard({ testimonial: t, className = "" }: TestimonialCardProps) {
  return (
    <div
      className={`w-full max-w-[400px] md:max-w-[450px] shrink-0 border border-[rgba(255,255,255,0.08)] bg-[rgba(10,10,10,0.6)] backdrop-blur-2xl flex flex-col justify-between p-8 md:p-10 transition-colors duration-500 hover:bg-[rgba(15,15,15,0.8)] shadow-2xl ${className}`}
      style={{ borderRadius: 0 }}
    >
      {/* Top: Quote */}
      <div>
        <svg className="w-8 h-8 mb-6 text-[#D0F505]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-[#F5F5F7]/90 type-b1 type-legacy-191">
          &quot;{t.quote}&quot;
        </p>
      </div>

      {/* Divider */}
      <div className="mt-10 mb-8">
        <hr className="border-t border-[rgba(255,255,255,0.08)]" />
      </div>

      {/* Bottom: Footer */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 relative overflow-hidden bg-[#1F1F23]" style={{ borderRadius: 0 }}>
            {t.avatar ? (
              <Image 
                src={t.avatar} 
                alt={t.name} 
                fill 
                className="object-cover" 
              />
            ) : (
              <span className="flex h-full w-full items-center justify-center bg-[#2A2A30] text-[#F5F5F7] type-b3 type-legacy-192">
                {t.name.split(' ').map(n => n[0]).join('').toUpperCase()}
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <span className="text-[#F5F5F7] type-legacy-172">{t.name}</span>
            <span className="text-[#8E8E93] type-label type-legacy-180">{t.role}</span>
          </div>
        </div>

        {/* Right side: Company */}
        <p className="hidden text-[#0052FF] sm:block type-label type-legacy-193">
          {t.company}
        </p>
      </div>
    </div>
  );
}
