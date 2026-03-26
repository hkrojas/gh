import PageHeader from "@/components/layout/PageHeader";
import { siteContent } from "@/lib/data/content";
import { faqs } from "@/lib/data/faq";

const residentServices = [
  {
    title: "Reporte de Incidencias",
    description: "¿Algo no funciona en las áreas comunes? Infórmenos para gestionarlo de inmediato.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    title: "Constancia de No Adeudo",
    description: "Solicite sus documentos administrativos de manera rápida y digital.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Envío de Pago",
    description: "Confirme el pago de sus cuotas de mantenimiento adjuntando su comprobante.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function AtencionResidentePage() {
  return (
    <>
      <PageHeader 
        title={siteContent.residentes.title}
        description={siteContent.residentes.subtitle}
        breadcrumb={[{ label: "Atención al Residente", href: "/atencion-al-residente" }]}
      />
      
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {residentServices.map((service, idx) => (
              <div key={idx} className="bg-brand-gray p-8 border border-gray-100 rounded-sm hover:border-brand-amber transition-all group">
                <div className="text-brand-navy mb-6 group-hover:text-brand-amber transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>
                <button className="text-brand-navy font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                  Iniciar Gestión
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-navy mb-12 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-6">
              {faqs.residentes.map((faq, idx) => (
                <div key={idx} className="border-b border-gray-100 pb-6">
                  <h4 className="text-lg font-bold text-brand-navy mb-3 flex items-start gap-3">
                    <span className="text-brand-amber">Q.</span>
                    {faq.question}
                  </h4>
                  <p className="text-gray-600 pl-8 text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-navy py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl text-white font-bold mb-6">¿Necesita asistencia directa?</h2>
          <p className="text-white/60 mb-8">Nuestros canales de atención coordinada están disponibles para resolver sus dudas.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`mailto:${siteContent.global.contactEmail}`} className="bg-white text-brand-navy px-8 py-3 rounded-sm font-bold shadow-lg hover:bg-gray-100 transition-all">
              Enviar Correo
            </a>
            <a href="#" className="bg-brand-amber text-brand-navy px-8 py-3 rounded-sm font-bold shadow-lg hover:brightness-110 transition-all">
              WhatsApp de Atención
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
