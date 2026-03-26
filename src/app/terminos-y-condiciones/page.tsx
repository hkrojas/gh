import PageHeader from "@/components/layout/PageHeader";

export default function TerminosPage() {
  return (
    <>
      <PageHeader 
        title="Términos y Condiciones"
        breadcrumb={[{ label: "Términos", href: "/terminos-y-condiciones" }]}
      />
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white p-10 md:p-16 rounded-[22px] border border-[#E1E8F0] shadow-trust animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="prose prose-slate max-w-none space-y-12">
              <div className="group">
                <h2 className="text-2xl font-bold text-brand-navy mb-5 flex items-center gap-4 tracking-tight">
                  <span className="w-8 h-8 bg-brand-gray rounded-[8px] flex items-center justify-center text-brand-amber text-xs font-bold">1</span>
                  Definiciones
                </h2>
                <p className="text-gray-500 leading-relaxed font-medium opacity-80 pl-12">
                  Este sitio web es de acceso público y carácter informativo, destinado a presentar la trayectoria y servicios de administración de edificios de Grupo Hernandez en el mercado peruano.
                </p>
              </div>

              <div className="group">
                <h2 className="text-2xl font-bold text-brand-navy mb-5 flex items-center gap-4 tracking-tight">
                  <span className="w-8 h-8 bg-brand-gray rounded-[8px] flex items-center justify-center text-brand-amber text-xs font-bold">2</span>
                  Uso del Sitio
                </h2>
                <p className="text-gray-500 leading-relaxed font-medium opacity-80 pl-12">
                  El usuario se compromete a utilizar la plataforma web y los canales de contacto de conformidad con la ley, la ética corporativa y las buenas costumbres operativas.
                </p>
              </div>

              <div className="group">
                <h2 className="text-2xl font-bold text-brand-navy mb-5 flex items-center gap-4 tracking-tight">
                  <span className="w-8 h-8 bg-brand-gray rounded-[8px] flex items-center justify-center text-brand-amber text-xs font-bold">3</span>
                  Cotizaciones y Evaluaciones
                </h2>
                <p className="text-gray-500 leading-relaxed font-medium opacity-80 pl-12">
                  Toda evaluación de gestión iniciada a través de este sitio es referencial. Nuestra propuesta formal final está sujeta a una inspección técnica y administrativa presencial obligatoria en el inmueble.
                </p>
              </div>

              <div className="group">
                <h2 className="text-2xl font-bold text-brand-navy mb-5 flex items-center gap-4 tracking-tight">
                  <span className="w-8 h-8 bg-brand-gray rounded-[8px] flex items-center justify-center text-brand-amber text-xs font-bold">4</span>
                  Propiedad Intelectual
                </h2>
                <p className="text-gray-500 leading-relaxed font-medium opacity-80 pl-12">
                  Todo el contenido, diseños de interfaces, logotipos institucionales y textos son propiedad exclusiva de Grupo Hernandez y están protegidos por las leyes de derechos de autor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
