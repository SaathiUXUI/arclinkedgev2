import { ArrowRight, ArrowUpRight, type LucideProps } from "lucide-react";

type CommonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  icon?: React.ComponentType<LucideProps>;
  iconPosition?: "left" | "right";
  imgSrc?: string;
  imgAlt?: string;
  target?: string;
  rel?: string;
};

export function PrimaryButton({ href, children, className = "", onClick, icon: Icon = ArrowRight, target, rel }: CommonProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      target={target}
      rel={rel}
      className={`group relative inline-flex overflow-hidden text-sm font-semibold bg-white text-[#050A18] hover:bg-[#EBEBEB] hover:scale-[1.02] active:bg-white active:scale-100 transition-[background-color,transform] duration-300 ease-out ${className}`}
      style={{ borderRadius: 0, fontFamily: "var(--font-inter-tight)" }}
    >
      {/* Default layer */}
      <span
        className="flex w-full items-center justify-center gap-2 transition-transform duration-300 ease-out group-hover:-translate-y-full group-focus:-translate-y-full group-active:-translate-y-full"
        style={{ padding: "0.85rem 1.9rem" }}
      >
        {children}
        <Icon size={15} aria-hidden="true" />
      </span>
      {/* Hover layer — enters from bottom-left diagonally */}
      <span
        className="absolute inset-0 flex w-full translate-y-full items-center justify-center gap-2 transition-transform duration-300 ease-out group-hover:translate-y-0 group-focus:translate-y-0 group-active:translate-y-0"
        style={{ padding: "0.85rem 1.9rem" }}
      >
        {children}
        <Icon
          size={15}
          aria-hidden="true"
          className="-translate-x-2 transition-transform duration-[400ms] ease-out group-hover:translate-x-0 group-focus:translate-x-0 group-active:translate-x-0"
        />
      </span>
    </a>
  );
}

export function SecondaryButton({ 
  href, 
  children, 
  className = "", 
  onClick, 
  icon: Icon = ArrowRight,
  imgSrc,
  imgAlt = "",
  target,
  rel
}: CommonProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      target={target}
      rel={rel}
      className={`group relative inline-flex overflow-hidden text-sm font-semibold bg-transparent text-[#F5F5F7] hover:bg-white/[0.07] hover:scale-[1.02] active:bg-transparent active:scale-100 transition-[background-color,transform] duration-300 ease-out ${className}`}
      style={{ border: "1px solid rgba(255,255,255,0.22)", borderRadius: 0, fontFamily: "var(--font-inter-tight)" }}
    >
      {/* Default layer */}
      <span
        className="flex w-full items-center justify-center gap-2 transition-transform duration-300 ease-out group-hover:-translate-y-full group-focus:-translate-y-full group-active:-translate-y-full"
        style={{ padding: "0.85rem 1.9rem" }}
      >
        {children}
        {imgSrc ? (
          <img src={imgSrc} alt={imgAlt} style={{ width: "16px", height: "16px" }} aria-hidden="true" />
        ) : (
          <Icon size={15} aria-hidden="true" />
        )}
      </span>
      {/* Hover layer */}
      <span
        className="absolute inset-0 flex w-full translate-y-full items-center justify-center gap-2 transition-transform duration-300 ease-out group-hover:translate-y-0 group-focus:translate-y-0 group-active:translate-y-0"
        style={{ padding: "0.85rem 1.9rem" }}
      >
        {children}
        {imgSrc ? (
          <img 
            src={imgSrc} 
            alt={imgAlt} 
            style={{ width: "16px", height: "16px" }} 
            className="-translate-x-2 transition-transform duration-[400ms] ease-out group-hover:translate-x-0 group-focus:translate-x-0 group-active:translate-x-0" 
            aria-hidden="true" 
          />
        ) : (
          <Icon
            size={15}
            aria-hidden="true"
            className="-translate-x-2 transition-transform duration-[400ms] ease-out group-hover:translate-x-0 group-focus:translate-x-0 group-active:translate-x-0"
          />
        )}
      </span>
    </a>
  );
}

export function NavButton({ href, children, className = "", onClick, target, rel }: CommonProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      target={target}
      rel={rel}
      className={`group relative inline-flex overflow-hidden text-sm font-semibold bg-white text-[#050A18] hover:bg-[#EBEBEB] hover:scale-[1.02] active:bg-white active:scale-100 transition-[background-color,transform] duration-300 ease-out ${className}`}
      style={{ borderRadius: 0, fontFamily: "var(--font-inter-tight)" }}
    >
      {/* Default layer */}
      <span
        className="flex w-full items-center justify-center gap-2 transition-transform duration-300 ease-out group-hover:-translate-y-full group-focus:-translate-y-full group-active:-translate-y-full"
        style={{ padding: "0.6rem 1.4rem" }}
      >
        {children}
        <ArrowRight size={14} aria-hidden="true" />
      </span>
      {/* Hover layer */}
      <span
        className="absolute inset-0 flex w-full translate-y-full items-center justify-center gap-2 transition-transform duration-300 ease-out group-hover:translate-y-0 group-focus:translate-y-0 group-active:translate-y-0"
        style={{ padding: "0.6rem 1.4rem" }}
      >
        {children}
        <ArrowRight
          size={14}
          aria-hidden="true"
          className="-translate-x-2 transition-transform duration-[400ms] ease-out group-hover:translate-x-0 group-focus:translate-x-0 group-active:translate-x-0"
        />
      </span>
    </a>
  );
}

export function SecondaryNavButton({ 
  href, 
  children, 
  className = "", 
  onClick, 
  icon: Icon = ArrowRight,
  imgSrc,
  imgAlt = "",
  target,
  rel
}: CommonProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      target={target}
      rel={rel}
      className={`group relative inline-flex overflow-hidden text-sm font-semibold bg-transparent text-[#F5F5F7] hover:bg-white/[0.07] hover:scale-[1.02] active:bg-transparent active:scale-100 transition-[background-color,transform] duration-300 ease-out ${className}`}
      style={{ border: "1px solid rgba(255,255,255,0.22)", borderRadius: 0, fontFamily: "var(--font-inter-tight)" }}
    >
      {/* Default layer */}
      <span
        className="flex w-full items-center justify-center gap-2 transition-transform duration-300 ease-out group-hover:-translate-y-full group-focus:-translate-y-full group-active:-translate-y-full"
        style={{ padding: "0.6rem 1.4rem" }}
      >
        {children}
        {imgSrc ? (
          <img src={imgSrc} alt={imgAlt} style={{ width: "14px", height: "14px" }} aria-hidden="true" />
        ) : (
          <Icon size={14} aria-hidden="true" />
        )}
      </span>
      {/* Hover layer */}
      <span
        className="absolute inset-0 flex w-full translate-y-full items-center justify-center gap-2 transition-transform duration-300 ease-out group-hover:translate-y-0 group-focus:translate-y-0 group-active:translate-y-0"
        style={{ padding: "0.6rem 1.4rem" }}
      >
        {children}
        {imgSrc ? (
          <img 
            src={imgSrc} 
            alt={imgAlt} 
            style={{ width: "14px", height: "14px" }} 
            className="-translate-x-2 transition-transform duration-[400ms] ease-out group-hover:translate-x-0 group-focus:translate-x-0 group-active:translate-x-0" 
            aria-hidden="true" 
          />
        ) : (
          <Icon
            size={14}
            aria-hidden="true"
            className="-translate-x-2 transition-transform duration-[400ms] ease-out group-hover:translate-x-0 group-focus:translate-x-0 group-active:translate-x-0"
          />
        )}
      </span>
    </a>
  );
}

export function TextButton({
  href,
  children,
  className = "",
  onClick,
  icon: Icon = ArrowRight,
  iconPosition = "right",
  target,
  rel,
}: CommonProps) {
  const isLeft = iconPosition === "left";
  
  return (
    <a
      href={href}
      onClick={onClick}
      target={target}
      rel={rel}
      className={`group relative inline-flex overflow-hidden text-sm font-medium transition-colors duration-200 ${className}`}
      style={{ color: "rgba(245,245,247,0.72)", fontFamily: "var(--font-inter-tight)" }}
    >
      <span className="flex items-center justify-center gap-2 transition-transform duration-300 ease-out group-hover:-translate-y-full group-focus:-translate-y-full group-active:-translate-y-full">
        {isLeft && <Icon size={14} aria-hidden="true" />}
        {children}
        {!isLeft && <Icon size={14} aria-hidden="true" />}
      </span>
      <span
        className="absolute inset-0 flex translate-y-full items-center justify-center gap-2 transition-transform duration-300 ease-out group-hover:translate-y-0 group-focus:translate-y-0 group-active:translate-y-0"
        style={{ color: "#F5F5F7" }}
      >
        {isLeft && (
          <Icon
            size={14}
            aria-hidden="true"
            className="translate-x-2 transition-transform duration-[400ms] ease-out group-hover:translate-x-0 group-focus:translate-x-0 group-active:translate-x-0"
          />
        )}
        {children}
        {!isLeft && (
          <Icon
            size={14}
            aria-hidden="true"
            className="-translate-x-2 transition-transform duration-[400ms] ease-out group-hover:translate-x-0 group-focus:translate-x-0 group-active:translate-x-0"
          />
        )}
      </span>
    </a>
  );
}
