import PageHeader from "@/components/layout/PageHeader";
import { siteContent } from "@/lib/data/content";
import Link from "next/link";

export default function ParaComitesPage() {
  return (
    <>
      <PageHeader 
        title={siteContent.comites.title}
        description={siteContent.comites.subtitle}
        breadcrumb={[{ label: "Para Comités", href: "/para-comites" }]}
      />
      
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand-amber font-bold uppercase tracking-widest text-xs mb-4 block">
                Solidez Operativa
              </span>
              <h2 className="text-3xl md:text-4xl text-brand-navy font-bold mb-6">
                Le entregamos el control real de su edificio.
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Sabemos que el principal reto de un comité es la falta de información clara y la dependencia de proveedores poco confiables. Nuestra gestión elimina esas dudas.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Cuentas auditables con sustentos digitales mensuales.",
                  "Supervisión directa de proveedores en campo.",
                  "Reportes de gestión claros, sin tecnicismos innecesarios.",
                  "Atención a emergencias operativas con tiempos de respuesta reales."
                ].map((item, i) => (
                  <li key={i} className="flex font-semibold text-brand-navy space-x-3">
                    <svg className="w-6 h-6 text-brand-amber flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link 
                href="/contacto" 
                className="inline-block bg-brand-navy text-white px-8 py-4 rounded-sm font-bold hover:bg-brand-navy/90 transition-all shadow-md"
              >
                Solicitar Evaluación de Gestión
              </Link>
            </div>
            
            <div className="bg-brand-gray p-8 md:p-12 rounded-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-brand-navy mb-6">Trazabilidad Total</h3>
              <p className="text-gray-500 mb-8 text-sm italic">
                "No solo gestionamos, evidenciamos. Cada sol gastado tiene un respaldo claro y accesible para el consejo."
              </p>
              <div className="space-y-6">
                <div className="flex space-x-4">
                  <div className="bg-brand-navy text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-brand-navy">Presupuesto Ejecutado</h4>
                    <p className="text-gray-500 text-sm">Control estricto de los ingresos y egresos frente al presupuesto aprobado.</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="bg-brand-navy text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-brand-navy">Historial de Mantenimiento</h4>
                    <p className="text-gray-500 text-sm">Registro detallado de preventivos y correctivos realizados en el edificio.</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="bg-brand-navy text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-brand-navy">Visibilidad al Residente</h4>
                    <p className="text-gray-500 text-sm">Comunicación transparente que reduce los conflictos por falta de información.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
