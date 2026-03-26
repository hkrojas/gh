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
      
      <section className="section-spacing bg-brand-gray">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold text-brand-navy mb-4">Portafolio de Gestión</h2>
              <p className="text-gray-500 leading-relaxed">
                Administramos desde edificios residenciales boutique hasta grandes condominios, manteniendo siempre el mismo estándar de orden y solvencia operativa.
              </p>
            </div>
            <div className="bg-white p-4 border border-gray-100 rounded-sm font-bold text-brand-navy text-sm shadow-sm">
              <span className="text-brand-amber text-lg">16</span> Edificios actualmente gestionados
            </div>
          </div>

          <BuildingGrid />
        </div>
      </section>

      <section className="bg-white py-20 border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-brand-navy mb-6">¿Desea que su edificio sea parte de nuestra gestión?</h2>
          <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
            Realizamos una evaluación técnica y operativa de su actual administración para proponerle un plan de mejora inmediata.
          </p>
          <a href="/contacto" className="inline-block bg-brand-amber text-brand-navy px-10 py-4 rounded-sm font-bold shadow-lg hover:brightness-110 transition-all">
            Solicitar Evaluación sin compromiso
          </a>
        </div>
      </section>
    </>
  );
}
