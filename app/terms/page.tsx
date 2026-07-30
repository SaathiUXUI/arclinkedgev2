import type { Metadata } from "next";
import Navbar from "../../components/sections/Navbar";
import Footer from "../../components/sections/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Read the terms and conditions for using Arclink Edge services, including project scope, payments, intellectual property, liability and governing law.",
  alternates: { canonical: "https://www.arclinkedge.com/terms" },
  openGraph: {
    type: "website",
    url: "https://www.arclinkedge.com/terms",
    title: "Arclink Edge Terms & Conditions",
    description: "Terms covering Arclink Edge services, project agreements, payments, deliverables and legal responsibilities.",
    siteName: "Arclink Edge",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arclink Edge Terms & Conditions",
    description: "Terms covering Arclink Edge services, payments, deliverables and legal responsibilities.",
    images: ["/opengraph-image"],
  },
};

export default function TermsPage() {
  const lastUpdated = "May 10, 2026";

  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen bg-[#000000] text-[#F5F5F7] pt-32 pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <header className="mb-16">
            <h1 
              className="mb-6 type-legacy-027"
            >
              Terms & <span className="text-[#0052FF]">Conditions</span>
            </h1>
            <p className="text-white/50 type-b3 type-legacy-028">Last Updated: {lastUpdated}</p>
          </header>

          <div className="space-y-12 text-white/80 type-legacy-007">
            <section>
              <h2 className="text-white mb-4 type-legacy-029">1. Agreement to Terms</h2>
              <p>
                By accessing or using the services provided by Arclink Edge, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-white mb-4 type-legacy-029">2. Services Provided</h2>
              <p>
                Arclink Edge provides IT services, including but not limited to web development, mobile app development, SaaS solutions, and UI/UX design. The specific scope of work for any project will be outlined in a separate Statement of Work (SOW) or Service Agreement.
              </p>
            </section>

            <section>
              <h2 className="text-white mb-4 type-legacy-029">3. Intellectual Property</h2>
              <p>
                Unless otherwise agreed in writing, all materials created by Arclink Edge during the course of a project remain the intellectual property of Arclink Edge until full payment is received. Upon final payment, ownership of the final deliverables will be transferred to the client.
              </p>
            </section>

            <section>
              <h2 className="text-white mb-4 type-legacy-029">4. Payment Terms</h2>
              <p>
                Payment schedules will be defined in the project agreement. We typically require an upfront deposit to commence work. Late payments may result in project suspension or additional fees.
              </p>
            </section>

            <section>
              <h2 className="text-white mb-4 type-legacy-029">5. Limitation of Liability</h2>
              <p>
                Arclink Edge will not be liable for any indirect, incidental, or consequential damages arising out of the use or inability to use our services, including loss of profits or data.
              </p>
            </section>

            <section>
              <h2 className="text-white mb-4 type-legacy-029">6. Governing Law</h2>
              <p>
                These terms are governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in New York.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
