import { siteContent } from "@/lib/data/content";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[85vh] md:h-[95vh] flex items-center overflow-hidden bg-brand-navy">
      {/* Heavy Integration Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-grupo-hernandez.jpg"
          alt="Administración Institucional Grupo Hernandez"
          fill
          priority
          className="object-cover opacity-60 scale-105 animate-[ken-burns_20s_ease_infinite_alternate]"
        />
        {/* Sophisticated Layered Gradients */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#0A1930_0%,rgba(10,25,48,0.85)_40%,rgba(10,25,48,0.3)_100%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(197,160,33,0.12)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-brand-navy/20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl">
          <div className="space-y-10 animate-in fade-in slide-in-from-bottom-12 duration-1000 ease-out">
            <div className="inline-flex items-center gap-3 px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-sm">
              <span className="w-2 h-2 rounded-full bg-brand-amber animate-pulse"></span>
              <span className="text-white/90 font-bold text-[10px] uppercase tracking-[0.3em]">Operatividad Institucional</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-montserrat font-bold text-white leading-[0.95] tracking-tight">
              Solidez <br />
              <span className="text-brand-amber">Estructural</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/95 font-medium max-w-2xl leading-relaxed opacity-90">
              Administración técnica de edificios enfocada en la preservación del patrimonio y la transparencia operativa absoluta.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <Link 
                href="/contacto" 
                className="btn-premium group !py-5 !px-10 text-lg shadow-2xl"
              >
                {siteContent.global.ctaMaster}
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-2 duration-300 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link 
                href="/nuestra-gestion" 
                className="px-10 py-5 rounded-[4px] font-bold text-white bg-white/5 backdrop-blur-sm border border-white/20 hover:bg-white/10 transition-all duration-300 ease-out flex items-center justify-center text-lg tracking-wide"
              >
                Ver Metodología
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Technical Bottom Anchor */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-navy to-transparent z-10"></div>
    </section>
  );
}
