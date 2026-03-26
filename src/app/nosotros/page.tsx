import PageHeader from "@/components/layout/PageHeader";

export default function NosotrosPage() {
  return (
    <>
      <PageHeader 
        title="Más de 8 años construyendo confianza."
        description="Nuestra trayectoria se basa en el cumplimiento de promesas y la solidez técnica en la administración de propiedades."
        breadcrumb={[{ label: "Nosotros", href: "/nosotros" }]}
      />
      
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-square bg-brand-gray relative rounded-sm overflow-hidden">
                {/* Image placeholder */}
                <div className="absolute inset-0 flex items-center justify-center text-brand-navy/20 font-bold uppercase tracking-widest text-center px-12">
                  Imagen Institucional: Equipo Grupo Hernandez
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-6">
              <span className="text-brand-amber font-bold uppercase tracking-widest text-xs">Nuestra Trayectoria</span>
              <h2 className="text-3xl md:text-4xl text-brand-navy font-bold">Un equipo dedicado a la operatividad real.</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Grupo Hernandez nació con un objetivo claro: profesionalizar la administración de edificios en el Perú mediante procesos auditables y una atención presencial constante.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Entendemos que un edificio no es solo una estructura, sino el patrimonio de muchas familias. Por ello, nuestra gestión no se limita a recibir pagos, sino a supervisar que cada engranaje del condominio funcione correctamente.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div>
                  <div className="text-3xl font-bold text-brand-navy mb-1">2016</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-brand-amber">Año de Fundación</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-navy mb-1">16+</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-brand-amber">Edificios bajo gestión</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-gray py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-navy mb-6">Valores que guían nuestra operación</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { t: "Transparencia", d: "Información financiera clara y accesible para los comités de vigilancia." },
              { t: "Puntualidad", d: "Cumplimiento estricto de cronogramas de mantenimiento y pagos." },
              { t: "Compromiso", d: "Presencia real en el edificio para resolver problemas en el lugar." }
            ].map((v, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-white border border-brand-amber/30 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-amber font-bold">
                  {i + 1}
                </div>
                <h4 className="text-xl font-bold text-brand-navy mb-4">{v.t}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
