import type { CSSProperties, ReactNode } from "react";

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
  return (
    <div
      className={wrapperClassName}
      style={{
        overflow: "visible",
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
