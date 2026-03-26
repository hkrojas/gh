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
          <div className="max-w-4xl mx-auto mb-20 text-center animate-fade-in-up">
            <span className="text-brand-amber font-bold uppercase tracking-widest text-xs mb-4 block">Metodología de Valor</span>
            <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-brand-navy mb-8">Procesos diseñados para su tranquilidad.</h2>
            <p className="text-gray-500 leading-relaxed text-lg">
              No creemos en soluciones mágicas ni en promesas de tecnología abstracta. Creemos en el trabajo bien hecho, la supervisión técnica en campo y la transparencia absoluta en las cuentas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <div 
                key={pillar.icon} 
                className="group relative p-12 border border-gray-100 rounded-sm bg-white shadow-premium hover:shadow-hover transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${0.1 * idx}s` }}
              >
                <span className="absolute top-0 right-10 -translate-y-1/2 text-7xl font-black text-brand-amber/10 font-montserrat group-hover:text-brand-amber/20 transition-colors">
                  {pillar.icon}
                </span>
                <div className="w-12 h-1 bg-brand-amber mb-8 group-hover:w-20 transition-all duration-500"></div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4 group-hover:text-brand-amber transition-colors">{pillar.title}</h3>
                <p className="text-gray-500 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-navy py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-brand-amber opacity-5 skew-x-[-15deg] -translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 animate-fade-in-up">
              <h2 className="text-3xl md:text-5xl font-montserrat font-bold mb-10">El Camino hacia un Edificio en Orden</h2>
              <div className="space-y-10">
                {[
                  { t: "Diagnóstico Inicial", d: "Auditamos detalladamente el estado actual de las cuentas y la infraestructura operativa." },
                  { t: "Plan de Regularización", d: "Corregimos desviaciones críticas en mantenimientos técnicos y cumplimiento legal." },
                  { t: "Gestión Basada en Orden", d: "Mantenemos la estabilidad operativa con reportes claros y supervisión activa diaria." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-sm border-2 border-brand-amber flex items-center justify-center text-brand-amber font-black text-sm transition-colors group-hover:bg-brand-amber group-hover:text-brand-navy">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2 text-white group-hover:text-brand-amber transition-colors">{step.t}</h4>
                      <p className="text-white/50 leading-relaxed">{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white/5 p-12 md:p-16 border border-white/10 rounded-sm backdrop-blur-sm shadow-premium">
                <div className="inline-block px-3 py-1 bg-brand-amber text-brand-navy text-[10px] font-black uppercase tracking-widest mb-8">
                  Garantía de Valor
                </div>
                <h3 className="text-2xl md:text-3xl font-montserrat font-bold mb-6">Compromiso de Solvencia</h3>
                <p className="text-white/60 mb-10 leading-relaxed text-lg">
                  Nuestra vocación no es solo administrar, sino revalorizar su propiedad mediante una gestión preventiva y eficiente de cada recurso.
                </p>
                <div className="grid grid-cols-2 gap-10">
                  <div className="group">
                    <div className="text-brand-amber font-black text-3xl mb-2 group-hover:scale-110 transition-transform origin-left">Auditables</div>
                    <div className="text-white/30 text-[10px] font-black uppercase tracking-[0.2em]">Información Real</div>
                  </div>
                  <div className="group">
                    <div className="text-brand-amber font-black text-3xl mb-2 group-hover:scale-110 transition-transform origin-left">Presenciales</div>
                    <div className="text-white/30 text-[10px] font-black uppercase tracking-[0.2em]">En su edificio</div>
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
