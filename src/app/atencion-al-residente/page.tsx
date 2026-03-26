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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            {residentServices.map((service, idx) => (
              <div 
                key={idx} 
                className="bg-white p-10 border border-gray-100 rounded-sm shadow-premium hover:shadow-hover transition-all duration-500 group animate-fade-in-up"
                style={{ animationDelay: `${0.1 * idx}s` }}
              >
                <div className="w-16 h-16 bg-brand-gray rounded-sm flex items-center justify-center text-brand-navy mb-8 group-hover:bg-brand-navy group-hover:text-brand-amber transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4 font-montserrat">{service.title}</h3>
                <p className="text-gray-500 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <div className="pt-6 border-t border-gray-50">
                  <button className="text-brand-navy font-black text-[10px] uppercase tracking-[0.2em] flex items-center gap-3 hover:text-brand-amber transition-colors group/btn">
                    Iniciar Gestión
                    <svg className="w-5 h-5 transition-transform group-hover/btn:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-center mb-16">
              <span className="text-brand-amber font-bold uppercase tracking-widest text-xs mb-4 block">Soporte y Consultas</span>
              <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-brand-navy">Preguntas Frecuentes</h2>
            </div>
            
            <div className="space-y-8">
              {faqs.residentes.map((faq, idx) => (
                <div key={idx} className="bg-brand-gray/50 p-8 rounded-sm group hover:bg-white hover:shadow-premium border border-transparent hover:border-gray-100 transition-all duration-300">
                  <h4 className="text-xl font-bold text-brand-navy mb-4 flex items-start gap-4 font-montserrat">
                    <span className="text-brand-amber text-sm mt-1">0{idx + 1}.</span>
                    {faq.question}
                  </h4>
                  <div className="pl-12">
                    <p className="text-gray-500 leading-relaxed text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-navy py-24 relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-amber opacity-5 skew-x-[15deg] translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl text-white font-montserrat font-bold mb-8">¿Necesita asistencia directa?</h2>
          <p className="text-white/50 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">Nuestros canales de atención coordinada están disponibles para resolver sus dudas y reportes con prontitud.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href={`mailto:${siteContent.global.contactEmail}`} 
              className="bg-white text-brand-navy px-10 py-5 rounded-sm font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-brand-amber hover:text-brand-navy transition-all duration-300"
            >
              Enviar Correo
            </a>
            <a 
              href="#" 
              className="bg-brand-amber text-brand-navy px-10 py-5 rounded-sm font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-white hover:text-brand-navy transition-all duration-300"
            >
              WhatsApp de Atención
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
