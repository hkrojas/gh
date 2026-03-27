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
      
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-20 text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
            <span className="text-brand-amber font-bold uppercase tracking-[0.3em] text-[11px] mb-6 block">Metodología de Valor</span>
            <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-brand-navy mb-8 leading-tight">Procesos diseñados para su tranquilidad.</h2>
            <p className="text-gray-500 leading-relaxed text-lg md:text-xl font-medium max-w-3xl mx-auto opacity-80">
              Creemos en el trabajo técnico riguroso, la supervisión en campo y la transparencia integral en cada reporte de gestión.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <div 
                key={pillar.icon} 
                className="group relative p-12 border border-[#E1E8F0] shadow-trust rounded-[28px] bg-white hover:shadow-premium transition-all duration-520 animate-in fade-in slide-in-from-bottom-8"
                style={{ animationDelay: `${0.1 * idx}s`, animationFillMode: 'both' }}
              >
                <span className="absolute top-0 right-10 -translate-y-1/2 text-7xl font-black text-brand-amber/5 font-montserrat group-hover:text-brand-amber/10 transition-colors">
                  {pillar.icon}
                </span>
                <div className="w-12 h-1.5 bg-brand-amber mb-10 rounded-full group-hover:w-20 transition-all duration-520"></div>
                <h3 className="text-2xl font-bold text-brand-navy mb-5 tracking-tight group-hover:text-brand-amber transition-colors">{pillar.title}</h3>
                <p className="text-gray-500 leading-relaxed font-medium text-[15px] opacity-80">
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
            <div className="lg:w-1/2 animate-in fade-in slide-in-from-left-8 duration-700">
              <span className="inline-block text-brand-amber font-bold uppercase tracking-[0.3em] text-[11px] mb-8">Nuestra Hoja de Ruta</span>
              <h2 className="text-3xl md:text-5xl font-montserrat font-bold mb-12 leading-[1.15] tracking-tight">El Camino hacia un Edificio en Orden</h2>
              <div className="space-y-12">
                {[
                  { t: "Diagnóstico Inicial", d: "Auditamos con rigor el estado de las cuentas y la infraestructura para identificar riesgos y prioridades." },
                  { t: "Plan de Regularización", d: "Corregimos desviaciones en mantenimientos críticos y cumplimiento normativo para estabilizar la operación." },
                  { t: "Gestión de Estabilidad", d: "Mantenemos la solvencia operativa con supervisión técnica presencial y reportes de control detallados." }
                ].map((step, i) => (step.t && (
                  <div key={i} className="flex gap-8 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-[14px] border border-brand-amber/30 flex items-center justify-center text-brand-amber font-bold text-sm transition-all group-hover:bg-brand-amber group-hover:text-brand-navy shadow-button">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-3 text-white group-hover:text-brand-amber transition-colors tracking-tight">{step.t}</h4>
                      <p className="text-white/40 leading-relaxed text-[15px] font-medium">{step.d}</p>
                    </div>
                  </div>
                )))}
              </div>
            </div>
            
            <div className="lg:w-1/2 animate-in fade-in slide-in-from-right-8 duration-700" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white/[0.03] p-12 md:p-16 border border-white/10 rounded-[32px] md:rounded-[40px] backdrop-blur-md shadow-premium relative">
                <div className="absolute top-0 right-0 p-8">
                  <svg className="w-14 h-14 text-brand-amber/10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16L9.01705 16C7.91248 16 7.01705 16.8954 7.01705 18L7.01705 21L4.01705 21L4.01705 15C4.01705 13.8954 4.91248 13 6.01705 13L18.017 13C19.1216 13 20.017 13.8954 20.017 15L20.017 21L14.017 21Z" />
                    <path d="M12.017 11C14.2261 11 16.017 9.20914 16.017 7C16.017 4.79086 14.2261 3 12.017 3C9.80791 3 8.01705 4.79086 8.01705 7C8.01705 9.20914 9.80791 11 12.017 11Z" />
                  </svg>
                </div>
                <div className="inline-block px-4 py-1.5 bg-brand-amber text-brand-navy text-[11px] font-bold uppercase tracking-[0.2em] mb-10 rounded-full">
                  Garantía de Valor
                </div>
                <h3 className="text-2xl md:text-4xl font-montserrat font-bold mb-8 tracking-tight">Compromiso de Solvencia</h3>
                <p className="text-white/50 mb-12 leading-relaxed text-lg font-medium">
                  Nuestra vocación es revalorizar su propiedad mediante una gestión preventiva y eficiente de cada recurso disponible.
                </p>
                <div className="grid grid-cols-2 gap-10 border-t border-white/5 pt-12">
                  <div className="group">
                    <div className="text-brand-amber font-bold text-3xl mb-3 group-hover:translate-x-1 transition-transform tracking-tighter">Auditables</div>
                    <div className="text-white/20 text-[11px] font-bold uppercase tracking-[0.3em]">Cuentas Claras</div>
                  </div>
                  <div className="group">
                    <div className="text-brand-amber font-bold text-3xl mb-3 group-hover:translate-x-1 transition-transform tracking-tighter">Presenciales</div>
                    <div className="text-white/20 text-[11px] font-bold uppercase tracking-[0.3em]">Gestión en Campo</div>
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
