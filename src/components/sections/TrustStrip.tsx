"use client";

export default function TrustStrip() {
  return (
    <section className="bg-brand-gray py-12 border-y border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 animate-fade-in-up">
          {/* Item 1 */}
          <div className="flex items-center gap-5">
            <span className="text-5xl md:text-6xl font-montserrat font-black text-brand-amber">16</span>
            <div className="h-12 w-px bg-brand-navy/10 hidden md:block"></div>
            <div className="flex flex-col">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-navy/60">Edificios</span>
              <span className="text-sm font-bold text-brand-navy leading-tight">Bajo gestión actual</span>
            </div>
          </div>
          
          <div className="h-px w-24 bg-brand-navy/10 md:hidden"></div>

          {/* Item 2 */}
          <div className="flex items-center gap-5">
            <span className="text-5xl md:text-6xl font-montserrat font-black text-brand-amber">+8</span>
            <div className="h-12 w-px bg-brand-navy/10 hidden md:block"></div>
            <div className="flex flex-col">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-navy/60">Años</span>
              <span className="text-sm font-bold text-brand-navy leading-tight">De trayectoria real</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
