"use client";

import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/lib/data/content";

export default function SplitUX() {
  return (
    <div className="bg-bg-main">
      {/* Section 1: Differentiation - White Background */}
      <section className="section-spacing bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24 animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
            {/* Image Column */}
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/3] rounded-[22px] overflow-hidden shadow-premium group">
                <Image
                  src="/images/edificio-ref-01.jpg"
                  alt="Gestión operativa de edificios en Lima"
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-navy/5 group-hover:bg-transparent transition-colors duration-500 ease-out"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-brand-navy/80 backdrop-blur-sm text-white text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-sm border border-white/10 shadow-lg">
                    Imagen Referencial
                  </span>
                </div>
              </div>
            </div>

            {/* Text Column */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="inline-block px-3 py-1 bg-bg-alt border-l-4 border-brand-amber">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-navy/60">Enfoque Institucional</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-brand-navy leading-tight tracking-tight">
                {siteContent.home.differentiation.title}
              </h2>
              
              <p className="text-lg text-text-secondary leading-relaxed max-w-xl font-medium opacity-80">
                {siteContent.home.differentiation.description}
              </p>

              <div className="pt-6">
                <Link href="/nuestra-gestion" className="btn-premium !inline-flex hover:shadow-trust transition-all duration-300 ease-out">
                  Nuestra Gestión
                  <svg className="w-5 h-5 transition-transform duration-300 ease-out translate-x-1 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Residents - Alternating Background #EEF3F8 */}
      <section className="bg-bg-alt section-spacing">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16 md:gap-24 animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
             {/* Image Column */}
             <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/3] rounded-[22px] overflow-hidden shadow-premium group">
                <Image
                  src="/images/edificio-ref-02.jpg"
                  alt="Atención al Residente Grupo Hernandez"
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-navy/5 group-hover:bg-transparent transition-colors duration-500 ease-out"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-brand-navy/80 backdrop-blur-sm text-white text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-sm border border-white/10 shadow-lg">
                    Imagen Referencial
                  </span>
                </div>
              </div>
            </div>

            {/* Text Column */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="inline-block px-3 py-1 bg-white border-l-4 border-brand-amber">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-navy/60">Atención Directa</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-brand-navy leading-tight tracking-tight">
                {siteContent.residentes.title}
              </h2>
              
              <p className="text-lg text-text-secondary leading-relaxed max-w-xl font-medium opacity-80">
                {siteContent.residentes.subtitle}
              </p>

              <div className="pt-6">
                <Link href="/atencion-al-residente" className="btn-premium !bg-brand-navy !text-white hover:bg-brand-navy-light !inline-flex transition-all duration-300 ease-out">
                  Canales de Atención
                  <svg className="w-5 h-5 transition-transform duration-300 ease-out translate-x-1 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
