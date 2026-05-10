"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
      style={{ backgroundColor: "#0A0A0B" }}
    >
      {/* Glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(0,82,255,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10">
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-6"
          style={{ color: "#0052FF", letterSpacing: "0.15em" }}
        >
          404 Error
        </p>

        <h1
          className="font-extrabold mb-4"
          style={{
            fontFamily: "var(--font-inter-tight)",
            fontSize: "clamp(4rem, 15vw, 10rem)",
            color: "#F5F5F7",
            letterSpacing: "-0.04em",
            lineHeight: 1,
          }}
        >
          404
        </h1>

        <p
          className="text-xl font-semibold mb-4"
          style={{ fontFamily: "var(--font-inter-tight)", color: "#F5F5F7" }}
        >
          This page doesn&apos;t exist
        </p>
        <p className="text-base mb-10 max-w-sm" style={{ color: "#8E8E93" }}>
          Looks like you&apos;ve wandered off the map. Let&apos;s get you back on track.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/"
            className="px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-200"
            style={{ backgroundColor: "#0052FF", color: "#fff" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#0047DB";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px rgba(0,82,255,0.35)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#0052FF";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            Go Home
          </Link>
          <a
            href="#contact"
            className="px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-200"
            style={{
              border: "1px solid #1F1F23",
              color: "#F5F5F7",
              backgroundColor: "transparent",
            }}
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
