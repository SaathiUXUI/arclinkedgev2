import type { Metadata } from "next";
import Navbar from "../../components/sections/Navbar";
import Footer from "../../components/sections/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Arclink Edge",
  description: "Learn how Arclink Edge collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
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
              Privacy <span className="text-[#0052FF]">Policy</span>
            </h1>
            <p className="text-white/50 text-sm">Last Updated: {lastUpdated}</p>
          </header>

          <div className="space-y-12 text-white/80 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: "var(--font-inter-tight)" }}>1. Information We Collect</h2>
              <p>
                We collect information that you provide directly to us, such as when you fill out a contact form, request a quote, or communicate with us. This may include your name, email address, phone number, and project details.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: "var(--font-inter-tight)" }}>2. How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Provide, maintain, and improve our services.</li>
                <li>Respond to your inquiries and provide customer support.</li>
                <li>Send you technical notices, updates, and administrative messages.</li>
                <li>Communicate with you about products, services, and promotions.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: "var(--font-inter-tight)" }}>3. Data Protection</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, loss, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: "var(--font-inter-tight)" }}>4. Third-Party Services</h2>
              <p>
                Our website may contain links to third-party services (like Cal.com for scheduling or WhatsApp for communication). These services have their own privacy policies, and we are not responsible for their practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: "var(--font-inter-tight)" }}>5. Cookies</h2>
              <p>
                We use cookies to enhance your experience on our website. You can control cookie settings through your browser, but disabling them may affect website functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: "var(--font-inter-tight)" }}>6. Your Rights</h2>
              <p>
                Depending on your location, you may have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at info@arclinkedge.com.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
