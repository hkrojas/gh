import Link from "next/link";
import { siteContent } from "@/lib/data/content";

export default function SplitUX() {
  return (
    <section className="bg-white">
      <div className="flex flex-col lg:flex-row min-h-[500px]">
        {/* Committees Path */}
        <Link 
          href="/para-comites" 
          className="group relative flex-1 bg-brand-navy flex flex-col justify-center p-8 md:p-16 overflow-hidden transition-all duration-500 hover:flex-[1.2]"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
            <svg className="w-48 h-48 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
            </svg>
          </div>
          
          <div className="relative z-10 max-w-md">
            <span className="text-brand-amber font-bold uppercase tracking-widest text-xs mb-4 block">
              Propietarios y Juntas Directivas
            </span>
            <h2 className="text-3xl md:text-4xl text-white font-bold mb-4">
              ¿Busca una gestión con solidez operativa?
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Le entregamos el control de su edificio con informes claros, cuentas auditables y supervisión real de proveedores.
            </p>
            <div className="inline-flex items-center text-brand-amber font-bold gap-2 group-hover:gap-4 transition-all">
              Ver beneficios para Comités
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </Link>

        {/* Residents Path */}
        <Link 
          href="/atencion-al-residente" 
          className="group relative flex-1 bg-brand-amber flex flex-col justify-center p-8 md:p-16 overflow-hidden transition-all duration-500 hover:flex-[1.2]"
        >
          <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:scale-110 transition-transform duration-700">
            <svg className="w-48 h-48 text-brand-navy" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
            </svg>
          </div>

          <div className="relative z-10 max-w-md">
            <span className="text-brand-navy font-bold uppercase tracking-widest text-xs mb-4 block">
              Residentes y Arrendatarios
            </span>
            <h2 className="text-3xl md:text-4xl text-brand-navy font-bold mb-4">
              ¿Necesita ayuda con su departamento?
            </h2>
            <p className="text-brand-navy/70 mb-8 leading-relaxed">
              Envíe sus constancias de pago, reporte incidencias o solicite documentos de manera rápida y sin complicaciones.
            </p>
            <div className="inline-flex items-center text-brand-navy font-bold gap-2 group-hover:gap-4 transition-all">
              Ir al Portal del Residente
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
