import PageHeader from "@/components/layout/PageHeader";
import BuildingGrid from "@/components/sections/BuildingGrid";

export default function EdificiosPage() {
  return (
    <>
      <PageHeader 
        title="Nuestra Presencia Operativa Actual"
        description="Conozca algunos de los edificios y condominios que confían su administración en nosotros."
        breadcrumb={[{ label: "Edificios Administrados", href: "/edificios-administrados" }]}
      />
      
      <section className="py-24 bg-[#EEF3F8]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="max-w-xl">
              <span className="text-brand-amber font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Evidencia de Gestión</span>
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-brand-navy mb-6 tracking-tight">Portafolio Operativo Actual</h2>
              <p className="text-gray-500 leading-relaxed font-medium opacity-80">
                Administramos desde edificios residenciales boutique hasta condominios de alta densidad, manteniendo siempre el mismo estándar de orden y solvencia operativa real.
              </p>
            </div>
            <div className="bg-white px-8 py-6 border border-[#E1E8F0] rounded-[22px] font-bold text-brand-navy shadow-trust flex items-center gap-5 group hover:shadow-premium transition-all">
              <span className="text-brand-amber text-4xl group-hover:scale-110 transition-transform">16</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] leading-tight opacity-40">Edificios<br />Gestionados</span>
            </div>
          </div>

          <BuildingGrid />
        </div>
      </section>

      <section className="py-24 bg-white border-t border-[#E1E8F0]">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-brand-navy mb-8 tracking-tight">¿Desea que su edificio sea parte de nuestra gestión?</h2>
            <p className="text-lg text-gray-500 mb-12 font-medium opacity-80 leading-relaxed">
              Realizamos una auditoría técnica y operativa detallada de su administración actual para proponerle un plan de regularización y mejora inmediata.
            </p>
            <a href="/contacto" className="btn-premium !bg-brand-amber !text-brand-navy shadow-button hover:scale-105 active:scale-95 transition-all">
              Solicitar Evaluación de Gestión
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
