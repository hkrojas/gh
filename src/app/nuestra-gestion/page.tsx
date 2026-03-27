import PageHeader from "@/components/layout/PageHeader";

const pillars = [
  {
    title: "Gestión Financiera",
    description: "Cuentas claras y reportes mensuales estructurados para su tranquilidad.",
    icon: "01",
  },
  {
    title: "Soporte Normativo",
    description: "Aseguramos el cumplimiento de las regulaciones municipales y de seguridad.",
    icon: "02",
  },
  {
    title: "Atención Operativa",
    description: "Supervisión de servicios y mantenimiento para el buen funcionamiento del edificio.",
    icon: "03",
  },
];

export default function GestionPage() {
  return (
    <>
      <PageHeader 
        title="Metodología de Gestión"
        description="Cómo aplicamos el orden y la claridad en la administración de su propiedad."
        breadcrumb={[{ label: "Nuestra Gestión", href: "/nuestra-gestion" }]}
      />
      
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-20 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
            <span className="text-brand-amber font-bold uppercase tracking-[0.3em] text-[11px] mb-6 block">Administración Institucional</span>
            <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-brand-navy mb-8 leading-tight">Procesos diseñados para el bienestar común.</h2>
            <p className="text-text-secondary leading-relaxed text-lg md:text-xl font-medium max-w-3xl mx-auto opacity-75">
              Implementamos un trabajo técnico basado en la supervisión constante y el reporte claro de cada acción administrativa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {pillars.map((pillar, idx) => (
              <div 
                key={pillar.icon} 
                className="group relative p-12 border border-border-soft shadow-premium rounded-[28px] bg-white hover:shadow-trust transition-all duration-500 ease-out animate-in fade-in slide-in-from-bottom-8"
                style={{ animationDelay: `${0.1 * idx}s`, animationFillMode: 'both' }}
              >
                <span className="absolute top-0 right-10 -translate-y-1/2 text-7xl font-black text-brand-navy/5 font-montserrat group-hover:text-brand-amber/10 transition-colors duration-500 ease-out">
                  {pillar.icon}
                </span>
                <div className="w-12 h-1.5 bg-brand-amber/40 mb-10 rounded-full group-hover:w-20 group-hover:bg-brand-amber transition-all duration-500 ease-out"></div>
                <h3 className="text-2xl font-bold text-brand-navy mb-5 tracking-tight group-hover:text-brand-amber transition-colors duration-300 ease-out">{pillar.title}</h3>
                <p className="text-text-secondary leading-relaxed font-medium text-[15px] opacity-85">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-navy py-28 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-brand-amber opacity-[0.02] skew-x-[-25deg] -translate-x-1/2"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-[0.03] rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 animate-in fade-in slide-in-from-left-8 duration-1000 ease-out">
              <span className="inline-block text-brand-amber font-bold uppercase tracking-[0.3em] text-[11px] mb-8">Nuestra Hoja de Ruta</span>
              <h2 className="text-3xl md:text-5xl font-montserrat font-bold mb-12 leading-[1.15] tracking-tight">El Camino hacia un Edificio en Orden</h2>
              <div className="space-y-12">
                {[
                  { t: "Diagnóstico Preventivo", d: "Revisamos el estado de las instalaciones y cuentas para establecer prioridades operativas." },
                  { t: "Estabilización Operativa", d: "Regularizamos mantenimientos y procesos críticos para asegurar la continuidad de los servicios." },
                  { t: "Gestión de Mantenimiento", d: "Supervisamos constantemente el funcionamiento del edificio con presencia técnica y reportes claros." }
                ].map((step, i) => (step.t && (
                  <div key={i} className="flex gap-8 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-[14px] border border-brand-amber/30 flex items-center justify-center text-brand-amber font-bold text-sm transition-all duration-300 ease-out group-hover:bg-brand-amber group-hover:text-brand-navy shadow-button">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-3 text-white group-hover:text-brand-amber transition-colors duration-300 ease-out tracking-tight">{step.t}</h4>
                      <p className="text-white/50 leading-relaxed text-[15px] font-medium">{step.d}</p>
                    </div>
                  </div>
                )))}
              </div>
            </div>
            
            <div className="lg:w-1/2 animate-in fade-in slide-in-from-right-8 duration-1000 ease-out" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white/[0.04] p-12 md:p-16 border border-white/10 rounded-[32px] md:rounded-[40px] backdrop-blur-md shadow-premium relative">
                <div className="absolute top-0 right-0 p-8">
                  <svg className="w-14 h-14 text-white/5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16L9.01705 16C7.91248 16 7.01705 16.8954 7.01705 18L7.01705 21L4.01705 21L4.01705 15C4.01705 13.8954 4.91248 13 6.01705 13L18.017 13C19.1216 13 20.017 13.8954 20.017 15L20.017 21L14.017 21Z" />
                    <path d="M12.017 11C14.2261 11 16.017 9.20914 16.017 7C16.017 4.79086 14.2261 3 12.017 3C9.80791 3 8.01705 4.79086 8.01705 7C8.01705 9.20914 9.80791 11 12.017 11Z" />
                  </svg>
                </div>
                <div className="inline-block px-4 py-2 bg-brand-amber/20 text-brand-amber text-[11px] font-bold uppercase tracking-[0.2em] mb-10 rounded-full border border-brand-amber/30">
                  Enfoque Administrativo
                </div>
                <h3 className="text-2xl md:text-4xl font-montserrat font-bold mb-8 tracking-tight">Compromiso con la Propiedad</h3>
                <p className="text-white/60 mb-12 leading-relaxed text-lg font-medium">
                  Nuestra meta es sostener el valor de su patrimonio mediante una administración técnica y transparente.
                </p>
                <div className="grid grid-cols-2 gap-10 border-t border-white/10 pt-12">
                  <div className="group">
                    <div className="text-brand-amber font-bold text-3xl mb-3 group-hover:translate-x-1 transition-transform duration-300 ease-out tracking-tighter">Informado</div>
                    <div className="text-white/30 text-[10px] font-bold uppercase tracking-[0.3em]">Gestión Clara</div>
                  </div>
                  <div className="group">
                    <div className="text-brand-amber font-bold text-3xl mb-3 group-hover:translate-x-1 transition-transform duration-300 ease-out tracking-tighter">Eficiente</div>
                    <div className="text-white/30 text-[10px] font-bold uppercase tracking-[0.3em]">Soporte Técnico</div>
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
