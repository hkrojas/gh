import PageHeader from "@/components/layout/PageHeader";

export default function ReclamacionesPage() {
  return (
    <>
      <PageHeader 
        title="Libro de Reclamaciones Virtual"
        description="En cumplimiento con el Código de Protección y Defensa del Consumidor, ponemos a su disposición este canal institucional para la atención formal de sus requerimientos."
        breadcrumb={[{ label: "Reclamaciones", href: "/libro-de-reclamaciones" }]}
      />
      <section className="py-24 bg-bg-main overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white p-12 md:p-20 rounded-[32px] border border-border-soft shadow-premium animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="mb-14 border-b border-border-tenue pb-12">
              <span className="text-brand-amber font-bold uppercase tracking-[0.3em] text-[11px] mb-4 block">Protección al Consumidor</span>
              <h2 className="text-3xl font-bold text-brand-navy mb-6 font-montserrat tracking-tight">Hoja de Reclamación</h2>
              <p className="text-[15px] text-text-secondary leading-relaxed font-medium opacity-90">
                Este formulario es exclusivo para la presentación de quejas o reclamos relacionados con el servicio de administración inmobiliaria prestado por **Grupo Hernandez**, conforme a la normativa vigente en Perú.
              </p>
            </div>
            
            <form className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-navy/70 pl-1">Identificación (DNI / RUC)</label>
                  <input required type="text" placeholder="Número de Documento" className="w-full bg-bg-surface-soft border border-border-soft p-5 rounded-[18px] text-sm focus:outline-none focus:border-brand-amber focus:ring-4 focus:ring-brand-amber/5 transition-all shadow-sm" />
                </div>
                <div className="space-y-3">
                  <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-navy/70 pl-1">Nombre Completo / Razón Social</label>
                  <input required type="text" placeholder="Titular del Servicio" className="w-full bg-bg-surface-soft border border-border-soft p-5 rounded-[18px] text-sm focus:outline-none focus:border-brand-amber focus:ring-4 focus:ring-brand-amber/5 transition-all shadow-sm" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-navy/70 pl-1">Correo Electrónico</label>
                  <input required type="email" placeholder="Para notificaciones legales" className="w-full bg-bg-surface-soft border border-border-soft p-5 rounded-[18px] text-sm focus:outline-none focus:border-brand-amber focus:ring-4 focus:ring-brand-amber/5 transition-all shadow-sm" />
                </div>
                <div className="space-y-3">
                  <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-navy/70 pl-1">Teléfono de Contacto</label>
                  <input required type="tel" placeholder="Número Celular o Fijo" className="w-full bg-bg-surface-soft border border-border-soft p-5 rounded-[18px] text-sm focus:outline-none focus:border-brand-amber focus:ring-4 focus:ring-brand-amber/5 transition-all shadow-sm" />
                </div>
              </div>
              
              <div className="space-y-6">
                <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-navy/70 pl-1">Tipo de Requerimiento</label>
                <div className="flex gap-12 pl-1">
                  <label className="flex items-center gap-4 text-sm font-bold text-brand-navy cursor-pointer group">
                    <input type="radio" name="tipo" value="queja" className="w-6 h-6 accent-brand-amber" /> 
                    <span className="group-hover:text-brand-amber transition-colors text-base">Queja</span>
                  </label>
                  <label className="flex items-center gap-4 text-sm font-bold text-brand-navy cursor-pointer group">
                    <input type="radio" name="tipo" value="reclamo" className="w-6 h-6 accent-brand-amber" /> 
                    <span className="group-hover:text-brand-amber transition-colors text-base">Reclamo</span>
                  </label>
                </div>
                <div className="space-y-3 pt-6">
                  <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-navy/70 pl-1">Detalle del Sustento</label>
                  <textarea required rows={8} placeholder="Describa los hechos de la manera más detallada posible para una correcta evaluación operativa..." className="w-full bg-bg-surface-soft border border-border-soft p-6 rounded-[22px] text-sm focus:outline-none focus:border-brand-amber focus:ring-4 focus:ring-brand-amber/5 transition-all resize-none shadow-sm"></textarea>
                </div>
              </div>

              <div className="pt-8">
                <button type="submit" className="btn-premium !w-full md:!w-auto !px-16 !py-6 shadow-button text-lg">
                  Registrar Reclamación
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
