"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MoveUpRight, ChevronDown } from "lucide-react";
import { NavButton, SecondaryNavButton } from "@/components/ui/Button";
import { navLinks, services, hireLinks } from "@/lib/data";

export default function Navbar() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [hireMegaOpen, setHireMegaOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileHireOpen, setMobileHireOpen] = useState(false);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hireLeaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (leaveTimer.current) clearTimeout(leaveTimer.current);
    };
  }, []);

  useEffect(() => {
    const routes = Array.from(
      new Set([
        "/",
        "/hire",
        "/careers",
        ...navLinks.map((link) => link.href),
        ...services.map((service) => service.href),
      ])
    ).filter((href) => href.startsWith("/"));

    const prefetchRoutes = () => {
      routes.forEach((href) => router.prefetch(href));
    };

    const idleApi = window as unknown as {
      requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
      cancelIdleCallback?: (handle: number) => void;
    };
    const idleCallback = idleApi.requestIdleCallback?.(prefetchRoutes, { timeout: 2500 });
    const fallbackTimer = idleApi.requestIdleCallback
      ? null
      : window.setTimeout(prefetchRoutes, 1200);

    return () => {
      if (idleCallback !== undefined) idleApi.cancelIdleCallback?.(idleCallback);
      if (fallbackTimer) window.clearTimeout(fallbackTimer);
    };
  }, [router]);

  const prefetchRoute = useCallback(
    (href: string) => {
      if (href.startsWith("/")) router.prefetch(href);
    },
    [router]
  );

  const handleMegaEnter = useCallback(() => {
    if (leaveTimer.current) {
      clearTimeout(leaveTimer.current);
      leaveTimer.current = null;
    }
    setMegaOpen(true);
  }, []);

  const handleMegaLeave = useCallback(() => {
    leaveTimer.current = setTimeout(() => {
      setMegaOpen(false);
      leaveTimer.current = null;
    }, 150);
  }, []);

  const handleHireEnter = useCallback(() => {
    if (hireLeaveTimer.current) {
      clearTimeout(hireLeaveTimer.current);
      hireLeaveTimer.current = null;
    }
    setHireMegaOpen(true);
  }, []);

  const handleHireLeave = useCallback(() => {
    hireLeaveTimer.current = setTimeout(() => {
      setHireMegaOpen(false);
      hireLeaveTimer.current = null;
    }, 150);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backdropFilter: scrolled ? "blur(16px)" : "none",
          backgroundColor: scrolled ? "rgba(10,10,11,0.8)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(31,31,35,0.8)" : "1px solid transparent",
        }}
      >
        <nav
          className="px-4 lg:px-16 h-16 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-1 group"
            aria-label="Arclink Edge home"
            onClick={(e) => {
              setMegaOpen(false);
              if (window.location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <Image
              src="/logo/aewhite.png"
              alt="Arclink Edge Logo"
              width={32}
              height={32}
              className="h-7 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
              priority
            />
            <span
              className="type-b1 type-legacy-121"
              style={{ color: "#F5F5F7" }}
            >
              Arclink Edge
            </span>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-8 list-none" role="list">
            {navLinks.map((link) => (
              <li
                key={link.href}
                {...(link.label === "Services"
                  ? {
                    onMouseEnter: handleMegaEnter,
                    onMouseLeave: handleMegaLeave,
                    style: { position: "relative" as const },
                  }
                  : link.label === "Hire"
                    ? {
                      onMouseEnter: handleHireEnter,
                      onMouseLeave: handleHireLeave,
                      style: { position: "relative" as const },
                    }
                    : {})}
              >
                <Link
                  href={link.href}
                  onClick={() => setMegaOpen(false)}
                  onMouseEnter={() => prefetchRoute(link.href)}
                  onFocus={() => prefetchRoute(link.href)}
                  className="group relative inline-flex items-center gap-1 type-b3 type-legacy-122"
                  style={{ height: "64px" }}
                >
                  <span className="relative overflow-hidden inline-flex">
                    <span
                      className={`transition-transform duration-300 ease-out${(link.label === "Services" && megaOpen) || (link.label === "Hire" && hireMegaOpen) ? "-translate-y-full" : "group-hover:-translate-y-full"}`}
                      style={{ color: "#8E8E93" }}
                    >
                      {link.label}
                    </span>
                    <span
                      className={`absolute inset-0 flex items-center transition-transform duration-300 ease-out${(link.label === "Services" && megaOpen) || (link.label === "Hire" && hireMegaOpen) ? "translate-y-0" : "translate-y-full group-hover:translate-y-0"}`}
                      style={{ color: "#F5F5F7" }}
                    >
                      {link.label}
                    </span>
                  </span>

                  {(link.label === "Services" || link.label === "Hire") && (
                    <ChevronDown
                      size={16}
                      aria-hidden="true"
                      style={{
                        color: (link.label === "Services" && megaOpen) || (link.label === "Hire" && hireMegaOpen) ? "#F5F5F7" : "#8E8E93",
                        transform: (link.label === "Services" && megaOpen) || (link.label === "Hire" && hireMegaOpen) ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease, color 0.2s ease",
                        flexShrink: 0,
                      }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <SecondaryNavButton
              href="https://wa.me/919824838067?text=Hello!%20I%20have%20a%20project%20in%20mind.%20Are%20you%20available%20for%20a%20quick%20chat%3F"
              imgSrc="/logo/whatsapp.svg"
              imgAlt="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Talk on WhatsApp
            </SecondaryNavButton>
            <NavButton href="/contact">Contact Us</NavButton>
          </div>

          {/* Mobile/Tablet hamburger — 2 lines → X */}
          <button
            className="lg:hidden flex flex-col justify-center items-center gap-0"
            style={{ background: "none", border: "none", cursor: "pointer", width: "36px", height: "36px", padding: "8px", gap: "6px" }}
            onClick={() => { setMobileOpen(!mobileOpen); setMobileServicesOpen(false); }}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span style={{
              display: "block", width: "22px", height: "1.5px",
              backgroundColor: "#F5F5F7",
              transition: "transform 0.3s ease",
              transform: mobileOpen ? "translateY(3.75px) rotate(45deg)" : "none",
              transformOrigin: "center",
            }} />
            <span style={{
              display: "block", width: "22px", height: "1.5px",
              backgroundColor: "#F5F5F7",
              transition: "transform 0.3s ease",
              transform: mobileOpen ? "translateY(-3.75px) rotate(-45deg)" : "none",
              transformOrigin: "center",
            }} />
          </button>
        </nav>
      </header>

      {/* ── Services Mega Dropdown ── */}
      <AnimatePresence>
        {megaOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed left-0 right-0 z-40 hidden lg:block"
            style={{ top: "64px" }}
            onMouseEnter={handleMegaEnter}
            onMouseLeave={handleMegaLeave}
          >
            {/* Backdrop */}
            <div
              style={{
                backgroundColor: "rgba(8,8,10,0.92)",
                backdropFilter: "blur(32px)",
                WebkitBackdropFilter: "blur(32px)",
              }}
            >
              <div
                className="max-w-6xl mx-auto"
                style={{ padding: "2.5rem 4rem 3rem" }}
              >
                <p
                  className="type-label type-legacy-123"
                  style={{ color: "rgba(142,142,147,0.6)", marginBottom: "1.25rem", textAlign: "left", paddingLeft: "1.25rem" }}
                >
                  Services
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gap: "4px",
                  }}
                >
                  {services.map((service) => (
                    <Link
                      key={service.id}
                      href={service.href}
                      onClick={() => setMegaOpen(false)}
                      onFocus={() => prefetchRoute(service.href)}
                      className="mega-service-item"
                      style={{
                        display: "block",
                        position: "relative",
                        padding: "1.1rem 1.25rem",
                        textDecoration: "none",
                        transition: "all 0.25s ease",
                        overflow: "hidden",
                      }}
                      onMouseEnter={(e) => {
                        prefetchRoute(service.href);
                        const el = e.currentTarget;
                        el.style.backgroundColor = "rgba(255,255,255,0.04)";
                        const glow = el.querySelector<HTMLElement>(".corner-glow");
                        if (glow) glow.style.opacity = "1";
                        const arrow = el.querySelector<HTMLElement>(".mega-arrow");
                        if (arrow) {
                          arrow.style.opacity = "1";
                          arrow.style.transform = "translateX(0)";
                        }
                        const title = el.querySelector<HTMLElement>(".mega-title");
                        if (title) title.style.color = "#F5F5F7";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget;
                        el.style.backgroundColor = "transparent";
                        const glow = el.querySelector<HTMLElement>(".corner-glow");
                        if (glow) glow.style.opacity = "0";
                        const arrow = el.querySelector<HTMLElement>(".mega-arrow");
                        if (arrow) {
                          arrow.style.opacity = "0";
                          arrow.style.transform = "translateX(-4px)";
                        }
                        const title = el.querySelector<HTMLElement>(".mega-title");
                        if (title) title.style.color = "rgba(245,245,247,0.85)";
                      }}
                    >
                      {/* L-shaped corner glow (top + left border) */}
                      <span
                        className="corner-glow"
                        aria-hidden="true"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          pointerEvents: "none",
                          opacity: 0,
                          transition: "opacity 0.25s ease",
                        }}
                      >
                        {/* Top border */}
                        <span
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "50%",
                            height: "1px",
                            background: "linear-gradient(to right, #FFFFFF, transparent)",
                          }}
                        />
                        {/* Left border */}
                        <span
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "1px",
                            height: "50%",
                            background: "linear-gradient(to bottom, #FFFFFF, transparent)",
                          }}
                        />
                        {/* Corner glow dot */}
                        <span
                          style={{
                            position: "absolute",
                            top: "-4px",
                            left: "-4px",
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            backgroundColor: "#FFFFFF",
                            filter: "blur(4px)",
                          }}
                        />
                      </span>

                      <div className="flex items-start justify-between gap-3">
                        <div style={{ flex: 1 }}>
                          <span
                            className="mega-title type-legacy-124"
                            style={{ display: "block", color: "rgba(245,245,247,0.85)", marginBottom: "0.3rem", transition: "color 0.2s ease" }}
                          >
                            {service.title}
                          </span>
                          <span className="type-legacy-125"
                            style={{ display: "block", color: "rgba(142,142,147,0.7)" }}
                          >
                            {service.description}
                          </span>
                        </div>

                        {/* Arrow icon */}
                        <span
                          className="mega-arrow"
                          aria-hidden="true"
                          style={{
                            marginTop: "2px",
                            opacity: 0,
                            transform: "translateX(-4px)",
                            transition: "all 0.25s ease",
                            color: "#FFFFFF",
                            flexShrink: 0,
                          }}
                        >
                          <MoveUpRight size={16} />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Promo banner - Commented out as requested */}
              {/* <div
                style={{
                  backgroundColor: "#ffffff",
                  height: "160px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Banner content yahan aayega */}
              {/* </div> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Hire Mega Dropdown ── */}
      <AnimatePresence>
        {hireMegaOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed left-0 right-0 z-40 hidden lg:block"
            style={{ top: "64px" }}
            onMouseEnter={handleHireEnter}
            onMouseLeave={handleHireLeave}
          >
            <div
              style={{
                backgroundColor: "rgba(8,8,10,0.92)",
                backdropFilter: "blur(32px)",
                WebkitBackdropFilter: "blur(32px)",
              }}
            >
              <div
                className="max-w-6xl mx-auto"
                style={{ padding: "2.5rem 4rem 3rem" }}
              >
                <p
                  className="type-label type-legacy-123"
                  style={{ color: "rgba(142,142,147,0.6)", marginBottom: "1.25rem", textAlign: "left", paddingLeft: "1.25rem" }}
                >
                  Hire Experts
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gap: "4px",
                  }}
                >
                  {hireLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setHireMegaOpen(false)}
                      onFocus={() => prefetchRoute(item.href)}
                      className="mega-service-item"
                      style={{
                        display: "block",
                        position: "relative",
                        padding: "1.1rem 1.25rem",
                        textDecoration: "none",
                        transition: "all 0.25s ease",
                        overflow: "hidden",
                      }}
                      onMouseEnter={(e) => {
                        prefetchRoute(item.href);
                        const el = e.currentTarget;
                        el.style.backgroundColor = "rgba(255,255,255,0.04)";
                        const glow = el.querySelector<HTMLElement>(".corner-glow");
                        if (glow) glow.style.opacity = "1";
                        const arrow = el.querySelector<HTMLElement>(".mega-arrow");
                        if (arrow) {
                          arrow.style.opacity = "1";
                          arrow.style.transform = "translateX(0)";
                        }
                        const title = el.querySelector<HTMLElement>(".mega-title");
                        if (title) title.style.color = "#F5F5F7";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget;
                        el.style.backgroundColor = "transparent";
                        const glow = el.querySelector<HTMLElement>(".corner-glow");
                        if (glow) glow.style.opacity = "0";
                        const arrow = el.querySelector<HTMLElement>(".mega-arrow");
                        if (arrow) {
                          arrow.style.opacity = "0";
                          arrow.style.transform = "translateX(-4px)";
                        }
                        const title = el.querySelector<HTMLElement>(".mega-title");
                        if (title) title.style.color = "rgba(245,245,247,0.85)";
                      }}
                    >
                      <span
                        className="corner-glow"
                        aria-hidden="true"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          pointerEvents: "none",
                          opacity: 0,
                          transition: "opacity 0.25s ease",
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "50%",
                            height: "1px",
                            background: "linear-gradient(to right, #FFFFFF, transparent)",
                          }}
                        />
                        <span
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "1px",
                            height: "50%",
                            background: "linear-gradient(to bottom, #FFFFFF, transparent)",
                          }}
                        />
                        <span
                          style={{
                            position: "absolute",
                            top: "-4px",
                            left: "-4px",
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            backgroundColor: "#FFFFFF",
                            filter: "blur(4px)",
                          }}
                        />
                      </span>

                      <div className="flex items-start justify-between gap-3">
                        <div style={{ flex: 1 }}>
                          <span
                            className="mega-title type-legacy-124"
                            style={{ display: "block", color: "rgba(245,245,247,0.85)", marginBottom: "0.3rem", transition: "color 0.2s ease" }}
                          >
                            {item.title}
                          </span>
                          <span className="type-legacy-125"
                            style={{ display: "block", color: "rgba(142,142,147,0.7)" }}
                          >
                            {item.description}
                          </span>
                        </div>
                        <span
                          className="mega-arrow"
                          aria-hidden="true"
                          style={{
                            marginTop: "2px",
                            opacity: 0,
                            transform: "translateX(-4px)",
                            transition: "all 0.25s ease",
                            color: "#FFFFFF",
                            flexShrink: 0,
                          }}
                        >
                          <MoveUpRight size={16} />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed inset-0 z-50 flex flex-col lg:hidden"
              style={{
                backgroundColor: "rgba(8,8,12,0.9)",
                backdropFilter: "blur(28px) saturate(1.4)",
                WebkitBackdropFilter: "blur(28px) saturate(1.4)",
              }}
            >
              {/* Top bar */}
              <div
                className="flex items-center justify-between px-4"
                style={{ height: "64px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}
              >
                <Link
                  href="/"
                  onClick={(e) => {
                    setMobileOpen(false);
                    setMobileServicesOpen(false);
                    setMobileHireOpen(false);
                    if (window.location.pathname === "/") {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  className="flex items-center gap-1"
                  style={{ textDecoration: "none" }}
                >
                  <Image
                    src="/logo/aewhite.png"
                    alt="Arclink Edge Logo"
                    width={32}
                    height={32}
                    className="h-7 w-auto object-contain"
                    priority
                  />
                  <span
                    className="type-b1 type-legacy-126"
                    style={{ color: "#F5F5F7" }}
                  >
                    Arclink Edge
                  </span>
                </Link>
                <button
                  onClick={() => { setMobileOpen(false); setMobileServicesOpen(false); setMobileHireOpen(false); }}
                  aria-label="Close menu"
                  style={{ background: "none", border: "none", cursor: "pointer", width: "36px", height: "36px", padding: "8px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "6px" }}
                >
                  <span style={{ display: "block", width: "22px", height: "1.5px", backgroundColor: "#8E8E93", transform: "translateY(3.75px) rotate(45deg)", transformOrigin: "center" }} />
                  <span style={{ display: "block", width: "22px", height: "1.5px", backgroundColor: "#8E8E93", transform: "translateY(-3.75px) rotate(-45deg)", transformOrigin: "center" }} />
                </button>
              </div>

              {/* Nav links */}
              <nav aria-label="Mobile navigation" className="flex-1 overflow-y-auto px-4">
                <ul className="flex flex-col list-none" role="list">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.07 + 0.1, ease: "easeOut", duration: 0.4 }}
                      style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
                    >
                      {link.label === "Services" ? (
                        <>
                          <button
                            onClick={() => { setMobileServicesOpen((v) => !v); setMobileHireOpen(false); }}
                            className="w-full flex items-center justify-between py-5"
                            style={{ background: "none", border: "none", cursor: "pointer", padding: "1.25rem 0", textAlign: "left" }}
                          >
                            <span className="type-legacy-127"
                              style={{ color: "#F5F5F7" }}
                            >
                              {link.label}
                            </span>
                            <ChevronDown
                              size={24}
                              aria-hidden="true"
                              style={{
                                color: "#F5F5F7",
                                flexShrink: 0,
                                marginLeft: "1rem",
                                transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                                transition: "transform 0.3s ease",
                              }}
                            />
                          </button>

                          {/* Services accordion */}
                          <AnimatePresence initial={false}>
                            {mobileServicesOpen && (
                              <motion.div
                                key="mobile-services"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.32, ease: [0.25, 0.1, 0.25, 1] }}
                                style={{ overflow: "hidden" }}
                              >
                                <div style={{ paddingBottom: "0.5rem" }}>
                                  {services.map((service) => (
                                    <Link
                                      key={service.id}
                                      href={service.href}
                                      onClick={() => setMobileOpen(false)}
                                      onTouchStart={() => prefetchRoute(service.href)}
                                      style={{
                                        display: "block",
                                        padding: "0.6rem 0",
                                        textDecoration: "none",
                                        transition: "border-color 0.2s ease",
                                      }}
                                    >
                                      <span className="type-legacy-128"
                                        style={{ display: "block", color: "#F5F5F7", marginBottom: "0.2rem" }}
                                      >
                                        {service.title}
                                      </span>
                                      <span className="type-legacy-129"
                                        style={{ display: "block", color: "#8E8E93" }}
                                      >
                                        {service.description}
                                      </span>
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : link.label === "Hire" ? (
                        <>
                          <button
                            onClick={() => { setMobileHireOpen((v) => !v); setMobileServicesOpen(false); }}
                            className="w-full flex items-center justify-between py-5"
                            style={{ background: "none", border: "none", cursor: "pointer", padding: "1.25rem 0", textAlign: "left" }}
                          >
                            <span className="type-legacy-127"
                              style={{ color: "#F5F5F7" }}
                            >
                              {link.label}
                            </span>
                            <ChevronDown
                              size={24}
                              aria-hidden="true"
                              style={{
                                color: "#F5F5F7",
                                flexShrink: 0,
                                marginLeft: "1rem",
                                transform: mobileHireOpen ? "rotate(180deg)" : "rotate(0deg)",
                                transition: "transform 0.3s ease",
                              }}
                            />
                          </button>

                          {/* Hire accordion */}
                          <AnimatePresence initial={false}>
                            {mobileHireOpen && (
                              <motion.div
                                key="mobile-hire"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.32, ease: [0.25, 0.1, 0.25, 1] }}
                                style={{ overflow: "hidden" }}
                              >
                                <div style={{ paddingBottom: "0.5rem" }}>
                                  {hireLinks.map((item) => (
                                    <Link
                                      key={item.href}
                                      href={item.href}
                                      onClick={() => setMobileOpen(false)}
                                      onTouchStart={() => prefetchRoute(item.href)}
                                      style={{
                                        display: "block",
                                        padding: "0.6rem 0",
                                        textDecoration: "none",
                                        transition: "border-color 0.2s ease",
                                      }}
                                    >
                                      <span className="type-legacy-128"
                                        style={{ display: "block", color: "#F5F5F7", marginBottom: "0.2rem" }}
                                      >
                                        {item.title}
                                      </span>
                                      <span className="type-legacy-129"
                                        style={{ display: "block", color: "#8E8E93" }}
                                      >
                                        {item.description}
                                      </span>
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={link.href}
                          className="flex items-center py-5"
                          style={{ color: "#F5F5F7", textDecoration: "none" }}
                          onClick={() => setMobileOpen(false)}
                          onTouchStart={() => prefetchRoute(link.href)}
                        >
                          <span className="type-legacy-127"
                            style={{ color: "#F5F5F7" }}
                          >
                            {link.label}
                          </span>
                        </Link>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.07 + 0.15, ease: "easeOut", duration: 0.4 }}
                className="px-4 pb-10 pt-4 flex flex-col gap-3"
                style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
              >
                <SecondaryNavButton
                  href="https://wa.me/919824838067?text=Hello!%20I%20have%20a%20project%20in%20mind.%20Are%20you%20available%20for%20a%20quick%20chat%3F"
                  imgSrc="/logo/whatsapp.svg"
                  imgAlt="WhatsApp"
                  className="w-full justify-center"
                  onClick={() => setMobileOpen(false)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Talk on WhatsApp
                </SecondaryNavButton>
                <NavButton href="/contact" className="w-full justify-center" onClick={() => setMobileOpen(false)}>
                  Contact Us
                </NavButton>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
