import { buildings } from "@/lib/data/buildings";
import { siteContent } from "@/lib/data/content";

export default function TrustStrip() {
  return (
    <section className="bg-brand-gray py-12 border-y border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <p className="text-brand-navy/60 uppercase tracking-[0.2em] text-xs font-bold mb-6">
            Solidez Operativa Comprobada
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-montserrat font-bold text-brand-navy">
                {buildings.length}
              </span>
              <span className="text-sm font-semibold text-brand-navy/80 mt-1">
                Edificios bajo gestión actual
              </span>
            </div>
            
            <div className="h-12 w-px bg-gray-200 hidden md:block" />

            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-montserrat font-bold text-brand-navy">
                +8
              </span>
              <span className="text-sm font-semibold text-brand-navy/80 mt-1">
                Años de experiencia real
              </span>
            </div>

            <div className="h-12 w-px bg-gray-200 hidden md:block" />

            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-montserrat font-bold text-brand-navy">
                100%
              </span>
              <span className="text-sm font-semibold text-brand-navy/80 mt-1">
                Trazabilidad en cuentas
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
