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
      
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Info Col */}
            <div>
              <h2 className="text-3xl font-bold text-brand-navy mb-8">Canales Directos</h2>
              <p className="text-gray-500 mb-12 leading-relaxed">
                Si es miembro de un Comité de Vigilancia o Junta Directiva, podemos coordinar una reunión presencial o virtual para presentarle nuestra propuesta operativa.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-brand-gray rounded-sm flex items-center justify-center text-brand-navy">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy">Correo Electrónico</h4>
                    <p className="text-brand-amber font-semibold">{siteContent.global.contactEmail}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-brand-gray rounded-sm flex items-center justify-center text-brand-navy">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy">Teléfono Central</h4>
                    <p className="text-brand-amber font-semibold">{siteContent.global.contactPhone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-brand-gray rounded-sm flex items-center justify-center text-brand-navy">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy">Horario de Oficina</h4>
                    <p className="text-gray-500 text-sm">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 p-8 bg-brand-navy text-white rounded-sm">
                <h4 className="font-bold text-xl mb-4">¿Es usted Residente?</h4>
                <p className="text-white/60 text-sm mb-6">
                  Para reportes de incidencias o envío de constancias, por favor utilice el canal preferente de atención al residente para una gestión más rápida.
                </p>
                <a href="/atencion-al-residente" className="text-brand-amber font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  Ir a Atención al Residente
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Form Col */}
            <div>
              <div className="bg-white p-2 md:p-8 border border-gray-100 shadow-xl rounded-sm">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
