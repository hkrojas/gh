import PageHeader from "@/components/layout/PageHeader";
import Image from "next/image";

export default function NosotrosPage() {
  return (
    <>
      <PageHeader 
        title="Nuestra Trayectoria"
        description="Más de 8 años profesionalizando la gestión de edificios en Lima mediante procesos técnicos y presencia real."
        breadcrumb={[{ label: "Nosotros", href: "/nosotros" }]}
        bgImage="/images/edificio-ref-03.jpg"
      />
      
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1 animate-in fade-in slide-in-from-left-8 duration-700">
              <div className="aspect-[4/5] relative rounded-[28px] overflow-hidden shadow-premium group">
                <Image
                  src="/images/edificio-ref-03.jpg"
                  alt="Trayectoria de Grupo Hernandez"
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-navy/30 group-hover:bg-brand-navy/10 transition-colors duration-700 ease-out"></div>
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-premium border border-white/20">
                    <span className="text-brand-amber text-xs font-bold uppercase tracking-[0.2em] mb-2 block">Imagen Referencial</span>
                    <p className="text-brand-navy font-montserrat font-bold text-xl leading-tight">Presencia real en los edificios que administramos.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-12 animate-in fade-in slide-in-from-right-8 duration-700" style={{ animationDelay: '0.2s' }}>
              <div className="space-y-6">
                <span className="text-brand-amber font-bold uppercase tracking-[0.3em] text-[10px]">Nuestra Trayectoria</span>
                <h2 className="text-3xl md:text-5xl text-brand-navy font-montserrat font-bold leading-[1.15] tracking-tight">Un equipo dedicado a la operatividad real en Lima.</h2>
              </div>
              
              <div className="space-y-8 text-gray-500 text-lg leading-relaxed font-medium opacity-80">
                <p>
                  Grupo Hernandez nació con un objetivo claro: profesionalizar la administración de edificios en el Perú mediante procesos auditables y una atención presencial constante.
                </p>
                <p className="text-base text-gray-400">
                  Entendemos que un edificio no es solo una estructura, sino el patrimonio de muchas familias. Por ello, nuestra gestión no se limita a recibir pagos, sino a supervisar diligentemente cada engranaje operativo del condominio.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-12 pt-12 border-t border-[#F0F4F8]">
                <div className="group">
                  <div className="text-5xl font-black text-brand-navy mb-4 font-montserrat group-hover:text-brand-amber transition-colors tracking-tighter">2016</div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-amber opacity-60">Año de Fundación</div>
                </div>
                <div className="group">
                  <div className="text-5xl font-black text-brand-navy mb-4 font-montserrat group-hover:text-brand-amber transition-colors tracking-tighter">16+</div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-amber opacity-60">Edificios bajo gestión</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#EEF3F8] py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-24 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <span className="text-brand-amber font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Nuestro Núcleo</span>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-brand-navy mb-8 tracking-tight">Valores que guían nuestra operación diaria</h2>
            <div className="w-20 h-1.5 bg-brand-amber mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { t: "Transparencia", d: "Sustento financiero detallado y trazable para máxima confianza de los comités y residentes." },
              { t: "Puntualidad", d: "Rigurosidad absoluta en cronogramas de mantenimientos técnicos y aportes administrativos." },
              { t: "Compromiso", d: "Firme presencia física en el edificio para asegurar que el orden institucional se mantenga." }
            ].map((v, i) => (
              <div 
                key={i} 
                className="bg-white p-12 rounded-[22px] shadow-trust border border-[#E1E8F0] hover:shadow-premium transition-all duration-500 animate-in fade-in slide-in-from-bottom-8"
                style={{ animationDelay: `${0.1 * i}s`, animationFillMode: 'both' }}
              >
                <div className="w-14 h-14 bg-brand-navy rounded-[14px] flex items-center justify-center mb-10 text-brand-amber text-xl font-bold shadow-button">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h4 className="text-2xl font-bold text-brand-navy mb-5 font-montserrat tracking-tight">{v.t}</h4>
                <p className="text-gray-500 leading-relaxed font-medium opacity-80 text-sm">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
