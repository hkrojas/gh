import { siteContent } from "@/lib/data/content";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[700px] lg:h-[85vh] flex items-center overflow-hidden bg-brand-navy pt-[96px] pb-[92px]">
      {/* Sophisticated Navy Gradient Background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(135deg,#071423_0%,#0A1930_52%,#12325A_100%)]">
        {/* Subtle Radial Highlights */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(197,160,33,0.05)_0%,transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.02)_0%,transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Column: Content (58%) */}
          <div className="w-full lg:w-[58%]">
            <div className="reveal-on-scroll active space-y-8">
              <div className="inline-block px-4 py-1.5 bg-brand-amber/10 border border-brand-amber/20 rounded-full animate-in fade-in slide-in-from-bottom-2 duration-700" style={{ animationDelay: '100ms' }}>
                <span className="text-brand-amber font-bold text-xs uppercase tracking-[0.2em]">Autoridad y Solidez Institucional</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-bold text-white leading-[1.1] animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: '200ms' }}>
                Solidez operativa en la <br />
                <span className="text-brand-amber">gestión de su edificio</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/84 font-medium max-w-xl leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-700" style={{ animationDelay: '300ms' }}>
                Transformamos la administración de edificios en una experiencia de control, claridad y eficiencia para juntas directivas y residentes.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 pt-4 animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationDelay: '400ms' }}>
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
                  Nuestra Gestión
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Institutional Panel (42%) */}
          <div className="w-full lg:w-[42%] hidden lg:block animate-in fade-in zoom-in-95 duration-1000 delay-500">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[28px] p-8 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-amber opacity-5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-white font-bold tracking-tight">Reporte de Gestión</span>
                  <span className="text-brand-amber text-xs font-bold uppercase">En Tiempo Real</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <p className="text-[10px] uppercase tracking-wider text-white/40 mb-1">Mantenimiento</p>
                    <p className="text-xl font-bold text-white">98.4%</p>
                    <div className="w-full h-1 bg-white/10 mt-2 rounded-full overflow-hidden">
                      <div className="w-[98%] h-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <p className="text-[10px] uppercase tracking-wider text-white/40 mb-1">Recaudación</p>
                    <p className="text-xl font-bold text-white">96.2%</p>
                    <div className="w-full h-1 bg-white/10 mt-2 rounded-full overflow-hidden">
                      <div className="w-[96%] h-full bg-brand-amber"></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-4">
                  {[
                    "Transparencia Financiera Total",
                    "Respuesta Operativa < 24h",
                    "Reducción de Costos Fijos"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-white/70">
                      <svg className="w-5 h-5 text-brand-amber" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
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
