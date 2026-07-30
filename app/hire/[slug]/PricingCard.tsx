"use client";

import { useState } from "react";
import { ArrowUpRight, Clock, Calendar, Globe, MessageSquare, Shield, Timer } from "lucide-react";

export default function PricingCard({
  monthlyRate,
  hourlyRate,
}: {
  monthlyRate: string;
  hourlyRate: string;
}) {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <div className="relative border border-white/10 bg-[#0A0A0F]/60 p-8 backdrop-blur-xl lg:p-10">
      <div className="absolute -right-20 -top-20 h-64 w-64 bg-[#0052FF]/10 blur-[80px]" />
      <div className="relative z-10">

        {/* Header row: title + toggle */}
        <div className="flex items-center justify-between mb-6">
          <h2
            className="type-legacy-045"
          >
            Pricing
          </h2>
          <div className="flex items-center gap-1 border border-white/10 bg-white/[0.03] p-1">
            <button
              onClick={() => setIsMonthly(true)}
              className={[`px-4 py-2 transition-all duration-300 cursor-pointer ${isMonthly ? "bg-[#F5F5F7] text-[#050A18]" : "text-white/50 hover:text-white/80"}`, "type-legacy-046"].filter(Boolean).join(" ")}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsMonthly(false)}
              className={[`px-4 py-2 transition-all duration-300 cursor-pointer ${!isMonthly ? "bg-[#F5F5F7] text-[#050A18]" : "text-white/50 hover:text-white/80"}`, "type-legacy-046"].filter(Boolean).join(" ")}
            >
              Hourly
            </button>
          </div>
        </div>

        {/* Separator replaces the inner card */}
        <hr className="border-white/[0.07] mb-6" />

        {/* Price Display — no inner card, flat layout */}
        <div className="pb-6">
          <span className="text-white/40 type-label type-legacy-047">
            {isMonthly ? "Dedicated Monthly" : "Hourly Retainer"}
          </span>

          {/*
            Responsive letter-spacing & line-height:
            - Mobile: tighter tracking (-0.025em), slightly looser leading (1.1)
              so long rate strings like "$3,500 - $4,800" don't overflow
            - Desktop (lg+): tighter tracking (-0.05em), compressed leading (0.95)
              for the large display size
          */}
          <p
            className="mt-3 text-[#F5F5F7] type-display type-legacy-048"
          >
            {isMonthly ? monthlyRate : hourlyRate}
            <span
              className="text-white/30 type-b1 type-legacy-049"
            >
              {isMonthly ? "/mo" : "/hr"}
            </span>
          </p>

          <p className="mt-3 text-white/50 type-b3 type-legacy-023">
            {isMonthly
              ? "160 hrs/month. Full-time dedication. Cancel anytime."
              : "Flexible hours. Ideal for support & part-time needs."}
          </p>
        </div>

        {/* Separator before key details */}
        <hr className="border-white/[0.07] mb-0" />

        {/* Key Details */}
        <ul className="space-y-0">
          {[
            { icon: Timer,        text: "6 hours daily · 10:00 AM - 5:00 PM IST" },
            { icon: Clock,        text: "Start within 24-48 hours" },
            { icon: Globe,        text: "IST timezone, flexible overlap" },
            { icon: MessageSquare,text: "Daily standups via Slack/Meet" },
            { icon: Calendar,     text: "Weekly progress reports" },
            { icon: Shield,       text: "NDA & IP protection included" },
          ].map((item) => (
            <li key={item.text} className="flex items-center gap-3 border-b border-white/[0.04] py-3.5">
              <item.icon className="h-4 w-4 shrink-0 text-[#0052FF]" />
              <span className="text-white/60 type-b3 type-legacy-028">{item.text}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-8">
          <button
            type="button"
            onClick={() => {
              const model = isMonthly ? "Monthly Dedicated (Full-time)" : "Hourly Retainer";
              window.dispatchEvent(new CustomEvent("hiring-prefill", { detail: { engagement: model } }));
              document.getElementById("hiring-form")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative inline-flex w-full cursor-pointer overflow-hidden bg-white text-[#050A18] hover:bg-[#EBEBEB] hover:scale-[1.02] active:bg-white active:scale-100 transition-[background-color,transform] duration-300 ease-out type-legacy-034"
            style={{ borderRadius: 0 }}
          >
            <span className="flex w-full items-center justify-center gap-2 transition-transform duration-300 ease-out group-hover:-translate-y-full" style={{ padding: "0.85rem 1.9rem" }}>
              Schedule Technical Interview
              <ArrowUpRight size={15} />
            </span>
            <span className="absolute inset-0 flex w-full translate-y-full items-center justify-center gap-2 transition-transform duration-300 ease-out group-hover:translate-y-0" style={{ padding: "0.85rem 1.9rem" }}>
              Schedule Technical Interview
              <ArrowUpRight size={15} className="-translate-x-2 transition-transform duration-[400ms] ease-out group-hover:translate-x-0" />
            </span>
          </button>
          <p className="mt-4 text-center text-white/25 type-label type-legacy-050">
            No upfront payment required
          </p>
        </div>

      </div>
    </div>
  );
}
