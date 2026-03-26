import PageHeader from "@/components/layout/PageHeader";

const pillars = [
  {
    title: "Orden Financiero",
    description: "Cuentas claras, reportes mensuales con sustento y trazabilidad total de cada sol invertido.",
    icon: "01",
  },
  {
    title: "Cumplimiento Legal",
    description: "Aseguramos que el edificio cumpla con todas las normativas municipales, de seguridad y laborales.",
    icon: "02",
  },
  {
    title: "Solidez Operativa",
    description: "Supervisión directa y constante de los servicios de limpieza, seguridad y mantenimiento técnico.",
    icon: "03",
  },
];

export default function GestionPage() {
  return (
    <>
      <PageHeader 
        title="Nuestra Metodología de Gestión"
        description="Cómo aplicamos el orden y la claridad en el día a día de su edificio."
        breadcrumb={[{ label: "Nuestra Gestión", href: "/nuestra-gestion" }]}
      />
      
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">Procesos diseñados para su tranquilidad.</h2>
            <p className="text-gray-500 leading-relaxed text-lg">
              No creemos en soluciones mágicas ni en promesas de tecnología abstracta. Creemos en el trabajo bien hecho, la supervisión en campo y la transparencia absoluta en las cuentas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {pillars.map((pillar) => (
              <div key={pillar.icon} className="relative p-8 pt-12 border border-gray-100 rounded-sm hover:shadow-lg transition-all">
                <span className="absolute top-0 left-8 -translate-y-1/2 text-5xl font-black text-brand-amber/20 font-montserrat">
                  {pillar.icon}
                </span>
                <h3 className="text-xl font-bold text-brand-navy mb-4">{pillar.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-navy py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-8">El Camino hacia un Edificio en Orden</h2>
              <div className="space-y-8">
                {[
                  { t: "Diagnóstico Inicial", d: "Auditamos el estado actual de las cuentas y la infraestructura." },
                  { t: "Plan de Regularización", d: "Corregimos desviaciones en mantenimientos y obligaciones legales." },
                  { t: "Gestión Estándar", d: "Mantenemos el orden operativo con reportes mensuales y supervisión activa." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full border border-brand-amber flex items-center justify-center text-brand-amber font-bold text-xs uppercase">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{step.t}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 bg-white/5 p-8 md:p-12 border border-white/10 rounded-sm">
              <h3 className="text-brand-amber font-bold mb-6">Garantía de Solvencia</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Nuestra vocación no es solo administrar, sino revalorizar su propiedad mediante una gestión preventiva y eficiente de los recursos del condominio.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-brand-amber font-bold text-2xl mb-1">Auditables</div>
                  <div className="text-gray-400 text-xs uppercase tracking-widest">Información Real</div>
                </div>
                <div>
                  <div className="text-brand-amber font-bold text-2xl mb-1">Presenciales</div>
                  <div className="text-gray-400 text-xs uppercase tracking-widest">En su edificio</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
