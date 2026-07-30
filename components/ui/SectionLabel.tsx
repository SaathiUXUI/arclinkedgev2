"use client";

import React from "react";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <p
      className={[`mb-5 inline-flex w-fit max-w-max self-start border border-[#D0F504]/28 bg-[#D0F504]/[0.06] px-3 py-2 text-[#D0F504] shadow-[0_0_26px_rgba(208,245,4,0.08)] type-label ${className}`, "type-legacy-184"].filter(Boolean).join(" ")}
    >
      {children}
    </p>
  );
}
