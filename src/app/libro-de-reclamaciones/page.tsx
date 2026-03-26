import PageHeader from "@/components/layout/PageHeader";

export default function ReclamacionesPage() {
  return (
    <>
      <PageHeader 
        title="Libro de Reclamaciones Virtual"
        description="Conforme a lo establecido en el Código de Protección y Defensa del Consumidor, ponemos a su disposición nuestro libro de reclamaciones virtual."
        breadcrumb={[{ label: "Reclamaciones", href: "/libro-de-reclamaciones" }]}
      />
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white p-10 md:p-16 rounded-[28px] border border-[#E1E8F0] shadow-trust animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="mb-12 border-b border-[#F0F4F8] pb-10">
              <span className="text-brand-amber font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Protección al Consumidor</span>
              <h2 className="text-2xl font-bold text-brand-navy mb-4 font-montserrat tracking-tight italic opacity-60">Hoja de Reclamación</h2>
              <p className="text-sm text-gray-500 leading-relaxed font-medium opacity-80 italic">
                Este formulario es exclusivo para presentar quejas o reclamos sobre el servicio administrativo prestado por Grupo Hernandez, conforme a la normativa vigente del Código de Protección y Defensa del Consumidor en Perú.
              </p>
            </div>
            
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-navy/60 pl-4">Identificación</label>
                  <input required type="text" placeholder="DNI / RUC" className="w-full bg-brand-gray/30 border border-[#E1E8F0] p-5 rounded-[14px] text-sm focus:outline-none focus:border-brand-amber focus:ring-4 focus:ring-brand-amber/5 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-navy/60 pl-4">Titular</label>
                  <input required type="text" placeholder="Nombre Completo" className="w-full bg-brand-gray/30 border border-[#E1E8F0] p-5 rounded-[14px] text-sm focus:outline-none focus:border-brand-amber focus:ring-4 focus:ring-brand-amber/5 transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-navy/60 pl-4">Email</label>
                  <input required type="email" placeholder="Correo Electrónico" className="w-full bg-brand-gray/30 border border-[#E1E8F0] p-5 rounded-[14px] text-sm focus:outline-none focus:border-brand-amber focus:ring-4 focus:ring-brand-amber/5 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-navy/60 pl-4">Teléfono</label>
                  <input required type="tel" placeholder="Número de Contacto" className="w-full bg-brand-gray/30 border border-[#E1E8F0] p-5 rounded-[14px] text-sm focus:outline-none focus:border-brand-amber focus:ring-4 focus:ring-brand-amber/5 transition-all" />
                </div>
              </div>
              
              <div className="space-y-4">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-navy/60 pl-4">Tipo de Incidencia</label>
                <div className="flex gap-8 pl-4">
                  <label className="flex items-center gap-3 text-sm font-bold text-brand-navy cursor-pointer group">
                    <input type="radio" name="tipo" value="queja" className="w-5 h-5 accent-brand-amber" /> 
                    <span className="group-hover:text-brand-amber transition-colors">Queja</span>
                  </label>
                  <label className="flex items-center gap-3 text-sm font-bold text-brand-navy cursor-pointer group">
                    <input type="radio" name="tipo" value="reclamo" className="w-5 h-5 accent-brand-amber" /> 
                    <span className="group-hover:text-brand-amber transition-colors">Reclamo</span>
                  </label>
                </div>
                <div className="space-y-2 pt-4">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-navy/60 pl-4">Detalle Operativo</label>
                  <textarea required rows={6} placeholder="Detalle de su reclamo o queja de manera pormenorizada..." className="w-full bg-brand-gray/30 border border-[#E1E8F0] p-5 rounded-[14px] text-sm focus:outline-none focus:border-brand-amber focus:ring-4 focus:ring-brand-amber/5 transition-all resize-none"></textarea>
                </div>
              </div>

              <div className="pt-6">
                <button type="submit" className="btn-premium !w-full md:!w-auto !px-12 !py-5 shadow-button">
                  Enviar Hoja de Reclamación
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
