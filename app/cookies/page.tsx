import type { Metadata } from "next";
import Navbar from "../../components/sections/Navbar";
import Footer from "../../components/sections/Footer";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Learn how Arclink Edge uses essential, performance, functional and third-party cookies to run the website, understand traffic and improve your experience.",
  alternates: { canonical: "https://www.arclinkedge.com/cookies" },
  openGraph: {
    type: "website",
    url: "https://www.arclinkedge.com/cookies",
    title: "Arclink Edge Cookie Policy",
    description: "How Arclink Edge uses cookies for essential site behavior, performance measurement and experience improvements.",
    siteName: "Arclink Edge",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arclink Edge Cookie Policy",
    description: "How Arclink Edge uses cookies across the website.",
    images: ["/opengraph-image"],
  },
};

export default function CookiePolicyPage() {
  const lastUpdated = "May 10, 2026";

  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen bg-[#000000] text-[#F5F5F7] pt-32 pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <header className="mb-16">
            <h1 
              className="text-5xl md:text-7xl font-medium mb-6" 
              style={{ fontFamily: "var(--font-inter-tight)", letterSpacing: "-0.05em" }}
            >
              Cookie <span className="text-[#0052FF]">Policy</span>
            </h1>
            <p className="text-white/50 text-sm">Last Updated: {lastUpdated}</p>
          </header>

          <div className="space-y-12 text-white/80 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: "var(--font-inter-tight)" }}>1. What Are Cookies?</h2>
              <p>
                Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: "var(--font-inter-tight)" }}>2. How We Use Cookies</h2>
              <p>
                We use cookies for several reasons:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Essential Cookies:</strong> These are necessary for the website to function and cannot be switched off.</li>
                <li><strong>Performance Cookies:</strong> These allow us to count visits and traffic sources so we can measure and improve the performance of our site.</li>
                <li><strong>Functional Cookies:</strong> These enable the website to provide enhanced functionality and personalization.</li>
                <li><strong>Targeting Cookies:</strong> These may be set through our site by our advertising partners to build a profile of your interests.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: "var(--font-inter-tight)" }}>3. Third-Party Cookies</h2>
              <p>
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the service, deliver advertisements on and through the service, and so on. This includes services like Google Analytics and Cal.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: "var(--font-inter-tight)" }}>4. Managing Cookies</h2>
              <p>
                Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit <a href="https://www.aboutcookies.org" target="_blank" rel="noopener" className="text-[#0052FF] underline">www.aboutcookies.org</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: "var(--font-inter-tight)" }}>5. Changes to This Policy</h2>
              <p>
                We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: "var(--font-inter-tight)" }}>6. Contact Us</h2>
              <p>
                If you have any questions about our use of cookies, please contact us at info@arclinkedge.com.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
