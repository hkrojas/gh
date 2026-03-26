import PageHeader from "@/components/layout/PageHeader";
import ContactForm from "@/components/sections/ContactForm";
import { siteContent } from "@/lib/data/content";

export default function ContactoPage() {
  return (
    <>
      <PageHeader 
        title="Solicite una Evaluación de su Edificio"
        description="Estamos listos para ayudarle a poner orden en su gestión. Déjenos sus datos y nos pondremos en contacto."
        breadcrumb={[{ label: "Contacto", href: "/contacto" }]}
      />
      
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Info Col */}
            <div className="animate-in fade-in slide-in-from-left-8 duration-700">
              <span className="text-brand-amber font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Atención Operativa</span>
              <h2 className="text-3xl md:text-5xl font-bold text-brand-navy mb-10 font-montserrat tracking-tight leading-tight">Canales Directos e Institucionales</h2>
              <p className="text-gray-500 mb-14 leading-relaxed font-medium opacity-80 text-lg">
                Si es miembro de un Comité de Vigilancia o Junta Directiva, podemos coordinar una reunión presencial o virtual para presentarle nuestra propuesta operativa detallada.
              </p>
              
              <div className="space-y-10">
                <div className="flex items-center gap-8 group">
                  <div className="w-16 h-16 bg-brand-gray rounded-[14px] flex items-center justify-center text-brand-navy group-hover:bg-brand-amber transition-all duration-500 shadow-sm">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy mb-1 tracking-tight">Correo Electrónico</h4>
                    <p className="text-brand-amber font-black tracking-tight">{siteContent.global.contactEmail}</p>
                  </div>
                </div>

                <div className="flex items-center gap-8 group">
                  <div className="w-16 h-16 bg-brand-gray rounded-[14px] flex items-center justify-center text-brand-navy group-hover:bg-brand-amber transition-all duration-500 shadow-sm">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy mb-1 tracking-tight">Teléfono Central</h4>
                    <p className="text-brand-amber font-black tracking-tight">{siteContent.global.contactPhone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-8 group">
                  <div className="w-16 h-16 bg-brand-gray rounded-[14px] flex items-center justify-center text-brand-navy group-hover:bg-brand-amber transition-all duration-500 shadow-sm">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy mb-1 tracking-tight">Horario de Oficina</h4>
                    <p className="text-gray-500 font-medium opacity-80">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-20 p-10 bg-brand-navy text-white rounded-[22px] shadow-trust relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-16 h-full bg-brand-amber/10 skew-x-[-20deg] translate-x-1/2"></div>
                <div className="relative z-10">
                  <h4 className="font-bold text-xl mb-4 font-montserrat tracking-tight">¿Es usted Residente?</h4>
                  <p className="text-white/50 text-sm mb-8 leading-relaxed font-medium">
                    Para reportes de incidencias o envío de constancias, por favor utilice el canal preferente de atención al residente para una respuesta inmediata.
                  </p>
                  <a href="/atencion-al-residente" className="text-brand-amber font-black text-[10px] uppercase tracking-[0.2em] flex items-center gap-3 hover:text-white transition-all group/link">
                    Ir a Atención al Residente
                    <svg className="w-5 h-5 transition-transform group-hover/link:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Form Col */}
            <div className="animate-in fade-in slide-in-from-right-8 duration-700" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white p-2 md:p-10 border border-[#E1E8F0] shadow-premium rounded-[28px]">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
