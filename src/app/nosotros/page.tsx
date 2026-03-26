import PageHeader from "@/components/layout/PageHeader";

export default function NosotrosPage() {
  return (
    <>
      <PageHeader 
        title="Más de 8 años construyendo confianza."
        description="Nuestra trayectoria se basa en el cumplimiento de promesas y la solidez técnica en la administración de propiedades."
        breadcrumb={[{ label: "Nosotros", href: "/nosotros" }]}
      />
      
      <section className="section-spacing bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 animate-fade-in-up">
              <div className="aspect-[4/5] bg-brand-navy relative rounded-sm overflow-hidden shadow-premium group">
                <div className="absolute inset-0 bg-brand-navy opacity-40 group-hover:opacity-20 transition-opacity duration-700"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white/10 font-black uppercase tracking-[1em] text-center px-12 rotate-90 whitespace-nowrap">
                  GRUPO HERNANDEZ • EST. 2016
                </div>
                {/* Decorative Elements */}
                <div className="absolute bottom-0 left-0 w-24 h-1 bg-brand-amber"></div>
                <div className="absolute bottom-8 left-8 text-white/80 font-montserrat font-bold text-lg">
                  Trayectoria y Solidez
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="space-y-4">
                <span className="text-brand-amber font-bold uppercase tracking-widest text-xs">Nuestra Trayectoria</span>
                <h2 className="text-3xl md:text-5xl text-brand-navy font-montserrat font-bold leading-tight">Un equipo dedicado a la operatividad real.</h2>
              </div>
              
              <div className="space-y-6 text-gray-500 text-lg leading-relaxed">
                <p>
                  Grupo Hernandez nació con un objetivo claro: profesionalizar la administración de edificios en el Perú mediante procesos auditables y una atención presencial constante.
                </p>
                <p className="text-base text-gray-400">
                  Entendemos que un edificio no es solo una estructura, sino el patrimonio de muchas familias. Por ello, nuestra gestión no se limita a recibir pagos, sino a supervisar diligentemente cada engranaje del condominio.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-12 pt-10 border-t border-gray-100">
                <div className="group">
                  <div className="text-5xl font-black text-brand-navy mb-2 font-montserrat group-hover:text-brand-amber transition-colors">2016</div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-amber">Año de Fundación</div>
                </div>
                <div className="group">
                  <div className="text-5xl font-black text-brand-navy mb-2 font-montserrat group-hover:text-brand-amber transition-colors">16+</div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-amber">Edificios bajo gestión</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-gray py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-24 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-brand-navy mb-6">Valores que guían nuestra operación</h2>
            <div className="w-20 h-1 bg-brand-amber mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { t: "Transparencia", d: "Sustento financiero detallado y trazable para máxima confianza de los comités." },
              { t: "Puntualidad", d: "Rigurosidad absoluta en mantenimientos técnicos y obligaciones administrativas." },
              { t: "Compromiso", d: "Firme presencia física en el edificio para asegurar que el orden se mantenga." }
            ].map((v, i) => (
              <div 
                key={i} 
                className="bg-white p-12 rounded-sm shadow-premium border border-gray-100 hover:shadow-hover transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${0.1 * i}s` }}
              >
                <div className="w-16 h-16 bg-brand-navy rounded-sm flex items-center justify-center mb-10 text-brand-amber text-xl font-black shadow-lg">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h4 className="text-2xl font-bold text-brand-navy mb-4 font-montserrat">{v.t}</h4>
                <p className="text-gray-500 leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
