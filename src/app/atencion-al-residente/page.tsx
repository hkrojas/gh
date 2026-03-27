import PageHeader from "@/components/layout/PageHeader";
import { siteContent } from "@/lib/data/content";
import { faqs } from "@/lib/data/faq";

const residentServices = [
  {
    title: "Reporte de Incidencias",
    description: "Informe sobre requerimientos de mantenimiento en áreas comunes para una gestión coordinada.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    title: "Constancia de No Adeudo",
    description: "Gestione la emisión de sus documentos administrativos de forma estructurada.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Registro de Pago",
    description: "Notifique el abono de sus cuotas mediante el envío de su comprobante digital.",
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
                className="bg-white p-12 border border-border-soft shadow-premium rounded-[28px] hover:shadow-trust transition-all duration-500 ease-out group animate-in fade-in slide-in-from-bottom-8"
                style={{ animationDelay: `${0.1 * idx}s`, animationFillMode: 'both' }}
              >
                <div className="w-16 h-16 bg-bg-alt rounded-[18px] flex items-center justify-center text-brand-navy mb-10 group-hover:bg-brand-amber transition-all duration-500 ease-out">
                  <div className="w-8 h-8 group-hover:scale-110 transition-transform duration-500 ease-out">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-5 tracking-tight group-hover:text-brand-amber transition-colors duration-300 ease-out">{service.title}</h3>
                <p className="text-text-secondary mb-10 leading-relaxed font-medium opacity-80 text-[15px]">
                  {service.description}
                </p>
                <div className="pt-8 border-t border-border-tenue">
                  <button className="text-brand-navy font-bold text-[11px] uppercase tracking-[0.2em] flex items-center gap-3 hover:text-brand-amber transition-all duration-300 ease-out group/btn">
                    Iniciar Gestión
                    <svg className="w-5 h-5 transition-transform group-hover/btn:translate-x-2 duration-300 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out" style={{ animationDelay: '0.4s' }}>
            <div className="text-center mb-20">
              <span className="text-brand-amber font-bold uppercase tracking-[0.3em] text-[11px] mb-6 block">Resolución de Consultas</span>
              <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-brand-navy tracking-tight">Preguntas Frecuentes</h2>
            </div>
            
            <div className="space-y-6">
              {faqs.residentes.map((faq, idx) => (
                <div key={idx} className="bg-white p-8 md:p-12 rounded-[28px] border border-border-soft shadow-premium hover:shadow-trust transition-all duration-500 ease-out group">
                  <h4 className="text-xl md:text-2xl font-bold text-brand-navy mb-5 flex items-start gap-6 leading-tight tracking-tight">
                    <span className="text-brand-amber font-black text-sm mt-1.5 opacity-40">0{idx + 1}</span>
                    {faq.question}
                  </h4>
                  <div className="pl-12 md:pl-16">
                    <p className="text-text-secondary leading-relaxed text-lg font-medium opacity-90">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg-alt/50">
        <div className="container mx-auto px-4">
          <div className="bg-brand-navy p-12 md:p-24 rounded-[32px] md:rounded-[40px] text-white relative overflow-hidden shadow-trust text-center animate-in fade-in zoom-in-95 duration-1000 ease-out">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-amber opacity-[0.03] skew-x-[-25deg] translate-x-1/2"></div>
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-white opacity-[0.02] rounded-full blur-[100px]"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="inline-block text-brand-amber font-bold uppercase tracking-[0.3em] text-[11px] mb-8">Administración Coordinada</span>
              <h2 className="text-3xl md:text-5xl font-montserrat font-bold mb-10 leading-tight tracking-tight">¿Necesita asistencia institucional?</h2>
              <p className="text-white/60 mb-14 font-medium text-lg md:text-xl leading-relaxed">Nuestros canales están disponibles para resolver requerimientos operativos de acuerdo a los tiempos y procesos de gestión establecidos.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a 
                  href={`mailto:${siteContent.global.contactEmail}`} 
                  className="btn-premium !bg-white !text-brand-navy shadow-button transition-all duration-300 ease-out"
                >
                  Canal de Correo
                </a>
                <a 
                  href={`tel:${siteContent.global.contactPhone}`} 
                  className="btn-premium !bg-brand-amber !text-brand-navy shadow-button transition-all duration-300 ease-out"
                >
                  Atención Telefónica
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
