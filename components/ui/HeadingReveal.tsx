"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type HeadingRevealProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  wrapperClassName?: string;
  wrapperStyle?: CSSProperties;
};

export default function HeadingReveal({
  id,
  children,
  className = "",
  style,
  wrapperClassName = "",
  wrapperStyle,
}: HeadingRevealProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!wrapperRef.current) return;

    const ctx = gsap.context(() => {
      if (wrapperRef.current) {
        wrapperRef.current.style.overflow = "hidden";
      }

      gsap.from(".heading-reveal-line", {
        scrollTrigger: { trigger: wrapperRef.current, start: "top 88%" },
        y: "110%",
        skewY: 4,
        transformOrigin: "left bottom",
        duration: 1.1,
        ease: "power4.out",
        onComplete: () => {
          if (wrapperRef.current) {
            wrapperRef.current.style.overflow = "visible";
          }
        },
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={wrapperClassName}
      style={{
        overflow: "hidden",
        paddingBottom: "0.35em",
        paddingRight: "0.25em",
        ...wrapperStyle,
      }}
    >
      <h2
        id={id}
        className={`heading-reveal-line ${className}`.trim()}
        style={{ display: "inline-block", ...style }}
      >
        {children}
      </h2>
    </div>
  );
}
