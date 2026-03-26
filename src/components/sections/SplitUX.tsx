"use client";

import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/lib/data/content";

export default function SplitUX() {
  return (
    <div className="bg-white">
      {/* Section 1: Differentiation */}
      <section className="section-spacing overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
            {/* Image Column */}
            <div className="w-full lg:w-1/2 animate-fade-in-up">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-premium group">
                <Image
                  src="/img/split-management.jpg"
                  alt="Gestión operativa de edificios en Lima"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
            </div>

            {/* Text Column */}
            <div className="w-full lg:w-1/2 space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="inline-block px-3 py-1 bg-brand-gray border-l-4 border-brand-amber">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-navy/60">Enfoque Operativo</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-brand-navy leading-tight">
                {siteContent.home.differentiation.title}
              </h2>
              
              <p className="text-lg text-gray-500 leading-relaxed">
                {siteContent.home.differentiation.description}
              </p>

              <div className="pt-4">
                <Link href="/para-comites" className="btn-premium">
                  Ver Solución para Comités
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Residents (Interactive Cards Style) */}
      <section className="bg-brand-gray section-spacing">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16 md:gap-24">
             {/* Image Column */}
             <div className="w-full lg:w-1/2 animate-fade-in-up">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-premium group">
                <Image
                  src="/img/resident-support.jpg"
                  alt="Atención al Residente Grupo Hernandez"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
            </div>

            {/* Text Column */}
            <div className="w-full lg:w-1/2 space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="inline-block px-3 py-1 bg-white border-l-4 border-brand-amber">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-navy/60">Servicio al Usuario</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-brand-navy leading-tight">
                {siteContent.residentes.title}
              </h2>
              
              <p className="text-lg text-gray-500 leading-relaxed">
                {siteContent.residentes.subtitle}
              </p>

              <div className="pt-4">
                <Link href="/atencion-al-residente" className="btn-premium !bg-brand-amber !text-brand-navy">
                  Canales de Atención
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
