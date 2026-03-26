import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import SplitUX from "@/components/sections/SplitUX";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <SplitUX />
      
      {/* Additional sections like Methodology or Buildings can be added here */}
      <section className="bg-brand-gray section-spacing">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl text-brand-navy font-bold mb-6">
            Solidez operativa en cada detalle.
          </h2>
          <p className="text-lg text-brand-navy/70 max-w-3xl mx-auto mb-12">
            Nuestra gestión se basa en procesos claros y una supervisión constante para que su única preocupación sea disfrutar de su propiedad.
          </p>
        </div>
      </section>
    </>
  );
}
