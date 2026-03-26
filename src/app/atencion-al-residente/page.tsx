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
      
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            {residentServices.map((service, idx) => (
              <div 
                key={idx} 
                className="bg-white p-10 border border-[#E1E8F0] rounded-[22px] shadow-trust hover:shadow-premium transition-all duration-500 group animate-in fade-in slide-in-from-bottom-8"
                style={{ animationDelay: `${0.1 * idx}s`, animationFillMode: 'both' }}
              >
                <div className="w-14 h-14 bg-brand-gray rounded-[14px] flex items-center justify-center text-brand-navy mb-10 group-hover:bg-brand-amber transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-5 tracking-tight">{service.title}</h3>
                <p className="text-gray-500 mb-10 leading-relaxed font-medium opacity-80 text-sm">
                  {service.description}
                </p>
                <div className="pt-8 border-t border-[#F0F4F8]">
                  <button className="text-brand-navy font-bold text-[10px] uppercase tracking-[0.2em] flex items-center gap-3 hover:text-brand-amber transition-colors group/btn">
                    Iniciar Gestión
                    <svg className="w-5 h-5 transition-transform group-hover/btn:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationDelay: '0.4s' }}>
            <div className="text-center mb-20">
              <span className="text-brand-amber font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Soporte y Consultas</span>
              <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-brand-navy tracking-tight">Preguntas Frecuentes</h2>
            </div>
            
            <div className="space-y-6">
              {faqs.residentes.map((faq, idx) => (
                <div key={idx} className="bg-white p-8 md:p-10 rounded-[22px] border border-[#E1E8F0] shadow-trust hover:shadow-premium transition-all duration-500 group">
                  <h4 className="text-xl font-bold text-brand-navy mb-4 flex items-start gap-6 leading-tight tracking-tight">
                    <span className="text-brand-amber font-black text-sm mt-1 opacity-40">0{idx + 1}</span>
                    {faq.question}
                  </h4>
                  <div className="pl-12 md:pl-16">
                    <p className="text-gray-500 leading-relaxed text-lg font-medium opacity-80">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#EEF3F8]">
        <div className="container mx-auto px-4">
          <div className="bg-brand-navy p-12 md:p-24 rounded-[28px] text-white relative overflow-hidden shadow-trust text-center animate-in fade-in zoom-in-95 duration-700">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-amber opacity-[0.05] skew-x-[-25deg] translate-x-1/2"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white opacity-[0.03] rounded-full blur-3xl"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="inline-block text-brand-amber font-bold uppercase tracking-[0.3em] text-[10px] mb-8">Asistencia Directa</span>
              <h2 className="text-3xl md:text-5xl font-montserrat font-bold mb-10 leading-tight tracking-tight">¿Necesita asistencia directa?</h2>
              <p className="text-white/50 mb-14 font-medium text-lg md:text-xl leading-relaxed">Nuestros canales de atención coordinada están disponibles para resolver sus dudas y reportes con prontitud operativa.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a 
                  href={`mailto:${siteContent.global.contactEmail}`} 
                  className="btn-premium !bg-white !text-brand-navy shadow-button hover:scale-105 active:scale-95 transition-all"
                >
                  Enviar Correo
                </a>
                <a 
                  href="#" 
                  className="btn-premium !bg-brand-amber !text-brand-navy shadow-button hover:scale-105 active:scale-95 transition-all"
                >
                  WhatsApp de Atención
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
