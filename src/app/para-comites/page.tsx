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
      
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <span className="text-brand-amber font-bold uppercase tracking-[0.3em] text-[11px] mb-6 block">
              Solidez Operativa
            </span>
            <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-brand-navy mb-8 leading-[1.15]">
              Le entregamos el control real de su edificio.
            </h2>
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-medium opacity-80">
              Sabemos que el principal reto de un comité es la falta de información verificable. Nuestra gestión elimina la incertidumbre mediante procesos de control y transparencia integral.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Transparencia Integral", 
                desc: "Acceso verificado a estados financieros y documentos administrativos, con reportes detallados y sustento técnico.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              { 
                title: "Control Operativo", 
                desc: "Supervisión técnica en campo de personal y proveedores externos, asegurando el cumplimiento de estándares de calidad.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                )
              },
              { 
                title: "Asesoría Técnica", 
                desc: "Acompañamiento especializado en la toma de decisiones estratégicas y cumplimiento riguroso de normativas vigentes.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                )
              },
            ].map((benefit, idx) => (
              <div 
                key={idx} 
                className="group bg-white p-12 border border-[#E1E8F0] shadow-trust rounded-[28px] hover:shadow-premium transition-all duration-520 animate-in fade-in slide-in-from-bottom-8" 
                style={{ animationDelay: `${0.1 * (idx + 1)}s`, animationFillMode: 'both' }}
              >
                <div className="w-16 h-16 bg-brand-gray text-brand-navy rounded-[18px] flex items-center justify-center mb-10 group-hover:bg-brand-amber transition-all duration-520">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-5 tracking-tight group-hover:text-brand-amber transition-colors">{benefit.title}</h3>
                <p className="text-gray-500 leading-relaxed text-[15px] font-medium opacity-80">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#EEF3F8]">
        <div className="container mx-auto px-4">
          <div className="bg-brand-navy p-12 md:p-24 rounded-[32px] md:rounded-[40px] text-white relative overflow-hidden shadow-trust animate-in fade-in zoom-in-95 duration-700">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-amber opacity-[0.03] skew-x-[-25deg] translate-x-1/2"></div>
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-white opacity-[0.02] rounded-full blur-[100px]"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <span className="inline-block text-brand-amber font-bold uppercase tracking-[0.3em] text-[11px] mb-8">Gestión Prioritaria</span>
              <h2 className="text-3xl md:text-5xl font-montserrat font-bold mb-10 leading-tight tracking-tight">
                ¿Listo para ordenar la gestión de su edificio?
              </h2>
              <p className="text-lg md:text-xl text-white/50 mb-14 font-medium leading-relaxed">
                Coordinemos una reunión estratégica para presentarle nuestro modelo de trabajo y una evaluación operativa sin costo.
              </p>
              <Link href="/contacto" className="btn-premium !bg-brand-amber !text-brand-navy shadow-button hover:scale-105 active:scale-95 transition-all">
                Solicitar Propuesta Comercial
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
