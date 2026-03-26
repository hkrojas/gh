"use client";

import PageHeader from "@/components/layout/PageHeader";
import Link from "next/link";
import { siteContent } from "@/lib/data/content";

export default function ParaComitesPage() {
  return (
    <main>
      <PageHeader 
        title={siteContent.comites.title}
        description={siteContent.comites.subtitle}
        breadcrumb={[{ label: "Para Comités", href: "/para-comites" }]}
      />
      
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16 animate-fade-in-up">
            <span className="text-brand-amber font-bold uppercase tracking-widest text-xs mb-4 block">
              Solidez Operativa
            </span>
            <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-brand-navy mb-6">
              Le entregamos el control real de su edificio.
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              Sabemos que el principal reto de un comité es la falta de información clara y la dependencia de proveedores poco confiables. Nuestra gestión elimina esas dudas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Transparencia Total", 
                desc: "Acceso ilimitado a estados financieros y documentos del edificio para el comité.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              { 
                title: "Control Operativo", 
                desc: "Supervisión diaria de personal y proveedores externos con reportes de avance.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                )
              },
              { 
                title: "Asesoría Legal", 
                desc: "Acompañamiento en la toma de decisiones críticas y cumplimiento de normativas.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                )
              },
            ].map((benefit, idx) => (
              <div 
                key={idx} 
                className="bg-white p-10 border border-gray-100 shadow-premium rounded-sm hover:shadow-hover transition-all duration-300 animate-fade-in-up" 
                style={{ animationDelay: `${0.1 * (idx + 1)}s` }}
              >
                <div className="w-16 h-16 bg-brand-gray text-brand-navy rounded-sm flex items-center justify-center mb-8">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-4">{benefit.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-brand-gray">
        <div className="container mx-auto px-4">
          <div className="bg-brand-navy p-12 md:p-20 rounded-sm text-white relative overflow-hidden animate-fade-in-up">
            <div className="absolute top-0 right-0 w-1/4 h-full bg-brand-amber opacity-10 skew-x-[-15deg] translate-x-1/2"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-montserrat font-bold mb-8">
                ¿Listo para ordenar la gestión de su edificio?
              </h2>
              <p className="text-xl text-white/70 mb-12">
                Coordinemos una reunión para presentarle nuestro plan de trabajo detallado y una evaluación sin costo.
              </p>
              <Link href="/contacto" className="btn-premium !bg-brand-amber !text-brand-navy">
                Solicitar Propuesta Comercial
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
