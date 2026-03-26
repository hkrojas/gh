import PageHeader from "@/components/layout/PageHeader";

export default function TerminosPage() {
  return (
    <>
      <PageHeader 
        title="Términos y Condiciones"
        breadcrumb={[{ label: "Términos", href: "/terminos-y-condiciones" }]}
      />
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-slate max-w-none space-y-8 text-gray-600">
            <div>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">1. Definiciones</h2>
              <p>Este sitio web es de carácter informativo y busca presentar los servicios de administración de edificios de Grupo Hernandez.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">2. Uso del Sitio</h2>
              <p>El usuario se compromete a utilizar el sitio y sus servicios de conformidad con la ley, la moral y las buenas costumbres.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">3. Cotizaciones y Evaluaciones</h2>
              <p>Toda evaluación de gestión o cotización enviada a través de este sitio es referencial y está sujeta a una inspección técnica y administrativa presencial obligatoria.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">4. Propiedad Intelectual</h2>
              <p>Todo el contenido, diseños, logotipos y textos son propiedad exclusiva de Grupo Hernandez.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
