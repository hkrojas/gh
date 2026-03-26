import PageHeader from "@/components/layout/PageHeader";

export default function PrivacidadPage() {
  return (
    <>
      <PageHeader 
        title="Política de Privacidad"
        breadcrumb={[{ label: "Privacidad", href: "/politica-de-privacidad" }]}
      />
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-slate max-w-none space-y-8 text-gray-600">
            <div>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">1. Introducción</h2>
              <p>En Grupo Hernandez, valoramos su privacidad. Esta política explica cómo recopilamos y usamos sus datos personales cuando utiliza nuestro sitio web.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">2. Datos Recopilados</h2>
              <p>Solo recopilamos información que usted nos proporciona voluntariamente a través de nuestro formulario de contacto (Nombre, Email, Teléfono).</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">3. Uso de la Información</h2>
              <p>Sus datos se utilizarán exclusivamente para responder a sus consultas y proporcionarle la evaluación de gestión solicitada. No compartimos sus datos con terceros.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">4. Derechos del Titular</h2>
              <p>De acuerdo a la Ley No. 29733 (Ley de Protección de Datos Personales en Perú), usted puede solicitar el acceso, rectificación o cancelación de sus datos comunicándose a nuestro correo institucional.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
