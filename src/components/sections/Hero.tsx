import { siteContent } from "@/lib/data/content";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-brand-navy">
      {/* Background with darker gradient overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/hero-building.jpg"
          alt="Edificio moderno en Lima administrado por Grupo Hernandez"
          fill
          className="object-cover opacity-60 scale-105 animate-pulse-slow"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-1.5 bg-brand-amber/10 border border-brand-amber/20 rounded-full mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <span className="text-brand-amber font-bold text-xs uppercase tracking-[0.2em]">Más de 8 años de trayectoria</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-montserrat font-bold text-white leading-[1.1] mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Solidez operativa en la <br />
            <span className="text-brand-amber">gestión de su edificio</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 font-medium mb-12 max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            {siteContent.home.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-5 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Link 
              href="/contacto" 
              className="btn-premium group flex items-center justify-center gap-3"
            >
              {siteContent.global.ctaMaster}
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
