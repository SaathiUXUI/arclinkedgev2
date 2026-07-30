"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import ImageCarousel from "@/components/sections/ImageCarousel";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Button";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#000000] flex flex-col">
      <Navbar />
      
      <main id="main-content" className="flex-1 pt-32 relative overflow-hidden">
        {/* Flipped Stats Gradient at the Top */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 right-0 pointer-events-none opacity-40"
          style={{
            height: "50vh",
            background: "linear-gradient(to bottom, #C8E0FF 0%, #0D6EFF 40%, #000000 100%)",
            filter: "blur(80px)",
            transform: "translateY(-20%)",
          }}
        />

        {/* Content Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center mb-24">
          <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1
              className="mb-4 type-legacy-051"
              style={{ color: "#F5F5F7", background: "linear-gradient(180deg, #F5F5F7 0%, rgba(245,245,247,0.3) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              404
            </h1>

            <p
              className="mb-6 type-display type-legacy-052"
              style={{ color: "#F5F5F7" }}
            >
              Lost in the Digital Edge.
            </p>

            <p className="mb-12 max-w-xl mx-auto type-b1 type-legacy-004" style={{ color: "rgba(245,245,247,0.6)" }}>
              The page you are looking for has been moved or doesn&apos;t exist. 
              Let&apos;s get you back to where the magic happens.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <PrimaryButton href="/" icon={null as any}>
                Go Home
              </PrimaryButton>
              <SecondaryButton 
                href="#" 
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  router.back();
                }}
                icon={ArrowLeft}
                iconPosition="left"
              >
                Go Back
              </SecondaryButton>
            </div>
          </div>
        </div>

        {/* Image Carousel (Crafted with Precision) */}
        <div className={`transition-all duration-1000 delay-300 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          <ImageCarousel />
        </div>
      </main>

      <Footer />
    </div>
  );
}
