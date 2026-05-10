"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    let x = 0, y = 0;
    let dotX = 0, dotY = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      dot.style.transform = `translate(${x - 4}px, ${y - 4}px)`;
    };

    const loop = () => {
      dotX += (x - dotX) * 0.12;
      dotY += (y - dotY) * 0.12;
      cursor.style.transform = `translate(${dotX - 20}px, ${dotY - 20}px)`;
      raf = requestAnimationFrame(loop);
    };

    const onEnterLink = () => {
      cursor.style.width = "50px";
      cursor.style.height = "50px";
      cursor.style.borderColor = "#0052FF";
      cursor.style.backgroundColor = "rgba(0,82,255,0.08)";
    };

    const onLeaveLink = () => {
      cursor.style.width = "40px";
      cursor.style.height = "40px";
      cursor.style.borderColor = "rgba(245,245,247,0.2)";
      cursor.style.backgroundColor = "transparent";
    };

    document.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);

    const links = document.querySelectorAll("a, button");
    links.forEach((el) => {
      el.addEventListener("mouseenter", onEnterLink);
      el.addEventListener("mouseleave", onLeaveLink);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      links.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterLink);
        el.removeEventListener("mouseleave", onLeaveLink);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[9999] rounded-full pointer-events-none transition-[width,height,border-color,background-color] duration-150"
        style={{
          width: "40px",
          height: "40px",
          border: "1px solid rgba(245,245,247,0.2)",
          mixBlendMode: "difference",
        }}
        aria-hidden="true"
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] w-2 h-2 rounded-full pointer-events-none"
        style={{ backgroundColor: "#0052FF" }}
        aria-hidden="true"
      />
    </>
  );
}
