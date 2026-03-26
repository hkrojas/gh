import PageHeader from "@/components/layout/PageHeader";

export default function ReclamacionesPage() {
  return (
    <>
      <PageHeader 
        title="Libro de Reclamaciones Virtual"
        description="Conforme a lo establecido en el Código de Protección y Defensa del Consumidor, ponemos a su disposición nuestro libro de reclamaciones virtual."
        breadcrumb={[{ label: "Reclamaciones", href: "/libro-de-reclamaciones" }]}
      />
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-brand-gray p-8 md:p-12 border border-gray-100 rounded-sm">
            <p className="text-sm text-gray-500 mb-8 italic">
              Este formulario es exclusivo para presentar quejas o reclamos sobre el servicio administrativo prestado por Grupo Hernandez.
            </p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input required type="text" placeholder="DNI / RUC" className="w-full bg-white border border-gray-200 p-4 rounded-sm text-sm" />
                <input required type="text" placeholder="Nombre Completo" className="w-full bg-white border border-gray-200 p-4 rounded-sm text-sm" />
              </div>
              <input required type="email" placeholder="Correo Electrónico" className="w-full bg-white border border-gray-200 p-4 rounded-sm text-sm" />
              <input required type="tel" placeholder="Teléfono de Contacto" className="w-full bg-white border border-gray-200 p-4 rounded-sm text-sm" />
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 text-sm font-bold text-brand-navy">
                    <input type="radio" name="tipo" value="queja" /> Queja
                  </label>
                  <label className="flex items-center gap-2 text-sm font-bold text-brand-navy">
                    <input type="radio" name="tipo" value="reclamo" /> Reclamo
                  </label>
                </div>
                <textarea required rows={5} placeholder="Detalle de su reclamo o queja..." className="w-full bg-white border border-gray-200 p-4 rounded-sm text-sm"></textarea>
              </div>

              <button type="submit" className="bg-brand-navy text-white px-8 py-4 rounded-sm font-bold w-full md:w-auto">
                Enviar Hoja de Reclamación
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
