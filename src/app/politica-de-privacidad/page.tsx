import PageHeader from "@/components/layout/PageHeader";

export default function PrivacidadPage() {
  return (
    <>
      <PageHeader 
        title="Política de Privacidad"
        breadcrumb={[{ label: "Privacidad", href: "/politica-de-privacidad" }]}
      />
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white p-10 md:p-16 rounded-[22px] border border-[#E1E8F0] shadow-trust animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="prose prose-slate max-w-none space-y-12">
              <div className="group">
                <h2 className="text-2xl font-bold text-brand-navy mb-5 flex items-center gap-4 tracking-tight">
                  <span className="w-8 h-8 bg-brand-gray rounded-[8px] flex items-center justify-center text-brand-amber text-xs font-bold">1</span>
                  Introducción
                </h2>
                <p className="text-gray-500 leading-relaxed font-medium opacity-80 pl-12">
                  En Grupo Hernandez, valoramos su privacidad. Esta política explica cómo recopilamos y usamos sus datos personales cuando utiliza nuestro sitio web institucional para solicitar evaluaciones de gestión.
                </p>
              </div>

              <div className="group">
                <h2 className="text-2xl font-bold text-brand-navy mb-5 flex items-center gap-4 tracking-tight">
                  <span className="w-8 h-8 bg-brand-gray rounded-[8px] flex items-center justify-center text-brand-amber text-xs font-bold">2</span>
                  Datos Recopilados
                </h2>
                <p className="text-gray-500 leading-relaxed font-medium opacity-80 pl-12">
                  De acuerdo con la transparencia operativa que nos caracteriza, solo recopilamos información que usted nos proporciona voluntariamente a través de nuestro formulario de contacto (Nombre, Email, Teléfono, Edificio).
                </p>
              </div>

              <div className="group">
                <h2 className="text-2xl font-bold text-brand-navy mb-5 flex items-center gap-4 tracking-tight">
                  <span className="w-8 h-8 bg-brand-gray rounded-[8px] flex items-center justify-center text-brand-amber text-xs font-bold">3</span>
                  Uso de la Información
                </h2>
                <p className="text-gray-500 leading-relaxed font-medium opacity-80 pl-12">
                  Sus datos se utilizarán exclusivamente para responder a sus consultas y proporcionarle la propuesta de administración solicitada. No compartimos sus datos con terceros bajo ninguna circunstancia comercial.
                </p>
              </div>

              <div className="group">
                <h2 className="text-2xl font-bold text-brand-navy mb-5 flex items-center gap-4 tracking-tight">
                  <span className="w-8 h-8 bg-brand-gray rounded-[8px] flex items-center justify-center text-brand-amber text-xs font-bold">4</span>
                  Derechos del Titular
                </h2>
                <p className="text-gray-500 leading-relaxed font-medium opacity-80 pl-12">
                  De acuerdo a la Ley No. 29733 (Ley de Protección de Datos Personales en Perú), usted puede solicitar el acceso, rectificación o cancelación de sus datos enviando un requerimiento formal a nuestro correo institucional coordinado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
