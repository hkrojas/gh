import { siteContent } from "@/lib/data/content";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[750px] lg:h-[95vh] flex items-center overflow-hidden bg-brand-navy pt-[100px] pb-[80px]">
      {/* Integrated Brand Image Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-grupo-hernandez.jpg"
          alt="Grupo Hernandez Hero"
          fill
          priority
          className="object-cover opacity-40"
        />
        {/* Navy Gradient Overlay for Text Legibility and Visual Strength */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#071423_0%,#0A1930_45%,rgba(16,40,74,0.3)_100%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(197,160,33,0.08)_0%,transparent_40%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
            <div className="inline-block px-4 py-2 bg-brand-amber/15 border border-brand-amber/30 rounded-full">
              <span className="text-brand-amber font-bold text-xs uppercase tracking-[0.25em]">Gestión Inmobiliaria de Alto Nivel</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-montserrat font-bold text-white leading-[1.05] tracking-tight">
              Solidez operativa <br />
              <span className="text-brand-amber">institucional</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl leading-relaxed">
              Transformamos la administración de edificios en una experiencia de orden, 
              presupuestos claros y eficiencia operativa sostenible.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <Link 
                href="/contacto" 
                className="btn-premium group text-lg"
              >
                {siteContent.global.ctaMaster}
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-2 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link 
                href="/nuestra-gestion" 
                className="px-10 py-4 rounded-[14px] font-bold text-white bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300 ease-out flex items-center justify-center text-lg shadow-premium"
              >
                Propuesta de Gestión
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Visual Anchor Bar */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-brand-navy to-transparent z-10"></div>
    </section>
  );
}
