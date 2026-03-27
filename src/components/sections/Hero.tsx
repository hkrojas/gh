import { siteContent } from "@/lib/data/content";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[700px] lg:h-[90vh] flex items-center overflow-hidden bg-brand-navy pt-[100px] pb-[80px]">
      {/* Institutional Navy Gradient V8 */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(135deg,#071423_0%,#0A1930_60%,#10284A_100%)]">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(197,160,33,0.06)_0%,transparent_40%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.03)_0%,transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Column: Content (58%) */}
          <div className="w-full lg:w-[58%]">
            <div className="reveal-on-scroll active space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-1000">
              <div className="inline-block px-4 py-1.5 bg-brand-amber/10 border border-brand-amber/20 rounded-full">
                <span className="text-brand-amber font-bold text-xs uppercase tracking-[0.2em]">Autoridad y Solidez Administrativa</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-bold text-white leading-[1.1]">
                Gestión operativa con <br />
                <span className="text-brand-amber">solidez institucional</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/84 font-medium max-w-xl leading-relaxed">
                Transformamos la administración de edificios en una experiencia de orden, transparencia y eficiencia integral para juntas directivas y residentes.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 pt-4">
                <Link 
                  href="/contacto" 
                  className="btn-premium group"
                >
                  {siteContent.global.ctaMaster}
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link 
                  href="/nuestra-gestion" 
                  className="px-8 py-3 rounded-[14px] font-bold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center"
                >
                  Propuesta de Gestión
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Institutional Panel (42%) */}
          <div className="w-full lg:w-[42%] hidden lg:block animate-in fade-in zoom-in-95 duration-1000 delay-300">
            <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-[28px] p-9 shadow-premium relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-amber opacity-5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
              
              <div className="relative z-10 space-y-8">
                <div className="flex items-center justify-between border-b border-white/10 pb-6">
                  <span className="text-white font-bold tracking-tight text-lg">Estado Operativo</span>
                  <span className="text-brand-amber text-xs font-bold uppercase py-1 px-3 bg-brand-amber/10 rounded-full">Actualizado</span>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-5 bg-white/5 rounded-2xl border border-white/5">
                    <p className="text-[11px] uppercase tracking-wider text-white/50 mb-2">Mantenimiento</p>
                    <p className="text-2xl font-bold text-white">98.4%</p>
                    <div className="w-full h-1.5 bg-white/10 mt-3 rounded-full overflow-hidden">
                      <div className="w-[98.4%] h-full bg-green-500/80"></div>
                    </div>
                  </div>
                  <div className="p-5 bg-white/5 rounded-2xl border border-white/5">
                    <p className="text-[11px] uppercase tracking-wider text-white/50 mb-2">Recaudación</p>
                    <p className="text-2xl font-bold text-white">96.2%</p>
                    <div className="w-full h-1.5 bg-white/10 mt-3 rounded-full overflow-hidden">
                      <div className="w-[96.2%] h-full bg-brand-amber/80"></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/5">
                  {[
                    "Transparencia en Reportes Financieros",
                    "Respuesta Operativa Ágil",
                    "Optimización de Presupuestos"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 text-[15px] text-white/80">
                      <div className="w-5 h-5 rounded-full bg-brand-amber/20 flex items-center justify-center">
                        <svg className="w-3.5 h-3.5 text-brand-amber" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
