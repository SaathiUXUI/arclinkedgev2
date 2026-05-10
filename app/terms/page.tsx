import type { Metadata } from "next";
import Navbar from "../../components/sections/Navbar";
import Footer from "../../components/sections/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | Arclink Edge",
  description: "Read the terms and conditions of using Arclink Edge services.",
};

export default function TermsPage() {
  const lastUpdated = "May 10, 2026";

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#000000] text-[#F5F5F7] pt-32 pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <header className="mb-16">
            <h1 
              className="text-5xl md:text-7xl font-medium mb-6" 
              style={{ fontFamily: "var(--font-inter-tight)", letterSpacing: "-0.05em" }}
            >
              Terms & <span className="text-[#0052FF]">Conditions</span>
            </h1>
            <p className="text-white/50 text-sm">Last Updated: {lastUpdated}</p>
          </header>

          <div className="space-y-12 text-white/80 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: "var(--font-inter-tight)" }}>1. Agreement to Terms</h2>
              <p>
                By accessing or using the services provided by Arclink Edge, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: "var(--font-inter-tight)" }}>2. Services Provided</h2>
              <p>
                Arclink Edge provides IT services, including but not limited to web development, mobile app development, SaaS solutions, and UI/UX design. The specific scope of work for any project will be outlined in a separate Statement of Work (SOW) or Service Agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: "var(--font-inter-tight)" }}>3. Intellectual Property</h2>
              <p>
                Unless otherwise agreed in writing, all materials created by Arclink Edge during the course of a project remain the intellectual property of Arclink Edge until full payment is received. Upon final payment, ownership of the final deliverables will be transferred to the client.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: "var(--font-inter-tight)" }}>4. Payment Terms</h2>
              <p>
                Payment schedules will be defined in the project agreement. We typically require an upfront deposit to commence work. Late payments may result in project suspension or additional fees.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: "var(--font-inter-tight)" }}>5. Limitation of Liability</h2>
              <p>
                Arclink Edge will not be liable for any indirect, incidental, or consequential damages arising out of the use or inability to use our services, including loss of profits or data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: "var(--font-inter-tight)" }}>6. Governing Law</h2>
              <p>
                These terms are governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Ahmedabad, Gujarat.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
