export const metadata = {
  title: "All Services | Arclink Edge",
  description: "Explore all the digital services offered by Arclink Edge.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#000000] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <h1 
          className="text-4xl font-medium text-[#F5F5F7] mb-8"
          style={{ fontFamily: "var(--font-inter-tight)", letterSpacing: "-0.04em" }}
        >
          All Services
        </h1>
        <p className="text-[#F5F5F7]/60">
          This is a blank page for all services. UI will be added later.
        </p>
      </div>
    </main>
  );
}
