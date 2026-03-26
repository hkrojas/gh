import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import SplitUX from "@/components/sections/SplitUX";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <SplitUX />
      
      {/* Solidez Operativa Section */}
      <section className="py-32 bg-[#EEF3F8]">
        <div className="container mx-auto px-4">
          <div className="bg-brand-navy p-12 md:p-24 rounded-[32px] text-white relative overflow-hidden shadow-trust animate-in fade-in zoom-in-95 duration-700">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-1/4 h-full bg-brand-amber opacity-[0.03] skew-x-[-15deg] translate-x-1/2"></div>
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-white opacity-[0.02] rounded-full blur-3xl"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <span className="inline-block text-brand-amber font-bold uppercase tracking-[0.4em] text-[10px] mb-8">Nuestra Promesa</span>
              <h2 className="text-3xl md:text-5xl font-montserrat font-bold mb-10 leading-[1.15] tracking-tight">
                Solidez operativa en cada detalle de su patrimonio.
              </h2>
              <p className="text-white/50 text-lg md:text-xl font-medium leading-relaxed mb-14 opacity-80">
                Nuestra gestión no es solo administrativa; es una supervisión técnica auditable y constante para que su única preocupación sea disfrutar de su propiedad con total tranquilidad institucional.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a href="/nuestra-gestion" className="btn-premium !bg-white !text-brand-navy hover:scale-105 active:scale-95 transition-all">
                  Ver Metodología
                </a>
                <a href="/contacto" className="btn-premium !bg-brand-amber !text-brand-navy hover:scale-105 active:scale-95 transition-all">
                  Solicitar Evaluación
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
