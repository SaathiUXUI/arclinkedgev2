"use client";

import { motion } from "framer-motion";

function TeamImage({
  src,
  alt,
  initials,
  className = "",
}: {
  src: string;
  alt: string;
  initials: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-[#0D0D0F] ${className}`}
      style={{
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center text-white/18 font-semibold text-4xl">
        {initials}
      </div>
      <img
        src={src}
        alt={alt}
        className="relative z-10 h-full w-full object-cover"
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
      />
    </div>
  );
}

export function TeamMemberCard({ member, index }: { member: any; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className="group overflow-hidden bg-[#08080A] transition-transform duration-300 hover:-translate-y-1"
      style={{
        borderRadius: 0,
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <TeamImage
        src={member.image || "/team/member-1.png"}
        alt={`${member.name}, ${member.role} at Arclink Edge`}
        initials={member.initials || "AE"}
        className="aspect-[4/3] w-full"
      />
      <div className="p-5 lg:p-7">
        <div className="mb-4 flex items-center justify-between gap-4">
          <p className="text-[10px] uppercase tracking-[0.18em] text-white/32 font-bold">{member.experience || "Expert"}</p>
          <span className="h-px flex-1 bg-white/10" />
        </div>
        <h3
          className="text-xl font-medium text-[#F5F5F7]"
          style={{ fontFamily: "var(--font-inter-tight)", letterSpacing: "-0.035em" }}
        >
          {member.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-white/54">{member.role}</p>
        {member.bio && (
          <p className="text-xs text-white/30 leading-relaxed italic border-t border-white/5 pt-4 mt-4 line-clamp-2">
            {member.bio}
          </p>
        )}
      </div>
    </motion.article>
  );
}

export function FounderCard({ founder }: { founder: any }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.21, 0.45, 0.32, 0.9] }}
      className="group relative overflow-hidden flex flex-col min-h-[520px]"
      style={{
        borderRadius: 0,
        border: "3px solid rgba(255,255,255,0.04)",
        background: "linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.02) 100%)",
        backdropFilter: "blur(30px)",
        WebkitBackdropFilter: "blur(30px)",
      }}
    >
      <div className="absolute bottom-0 -left-[10%] w-[55%] h-[30%] bg-[#0052FF] mix-blend-screen blur-[50px] opacity-90 transition-opacity duration-500 group-hover:opacity-100 z-0" />
      <div className="absolute bottom-0 -right-[10%] w-[55%] h-[20%] bg-[#0052FF] mix-blend-screen blur-[50px] opacity-90 transition-opacity duration-500 group-hover:opacity-100 z-0" />
      <div className="absolute bottom-0 left-[20%] right-[20%] h-[5%] bg-[#0052FF] mix-blend-screen blur-[40px] opacity-80 z-0" />
      <div className="absolute -bottom-2 left-[-10%] right-[-10%] w-[120%] h-[20%] bg-gradient-to-t from-white to-transparent mix-blend-screen blur-[24px] opacity-80 transition-opacity duration-500 group-hover:opacity-100 z-0" />
      <div
        className="absolute right-6 top-6 z-20 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#050A18] shadow-[0_12px_30px_rgba(208,245,4,0.18)]"
        style={{ backgroundColor: "#D0F504", fontFamily: "var(--font-inter-tight)" }}
      >
        Founder Profile
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none" style={{ backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }} />

      <div className="relative z-10 flex h-full flex-col p-6 lg:p-8">
        <TeamImage
          src={founder.image || "/founder.webp"}
          alt={`Founder of Arclink Edge - ${founder.name}`}
          initials={founder.initials || "SA"}
          className="aspect-[4/5] w-full"
        />
        <div className="mt-6">
          <h3
            className="mt-3 text-3xl font-medium text-[#F5F5F7]"
            style={{ fontFamily: "var(--font-inter-tight)", letterSpacing: "-0.04em", lineHeight: 1 }}
          >
            {founder.name}
          </h3>
          <p className="mt-2 text-sm text-white/54">{founder.role}</p>
        </div>
      </div>
    </motion.article>
  );
}
