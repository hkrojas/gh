"use client";

export default function TrustStrip() {
  return (
    <div className="relative z-20 -mt-12 container mx-auto px-4">
      <div className="bg-white border border-border-soft rounded-[22px] shadow-trust p-6 md:p-8 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
        {/* Item 1 */}
        <div className="flex items-center gap-4 lg:justify-center group">
          <div className="w-12 h-12 bg-bg-main rounded-[14px] flex items-center justify-center text-brand-amber transition-colors group-hover:bg-brand-navy group-hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <div>
            <p className="text-2xl font-montserrat font-black text-brand-navy leading-none">16</p>
            <p className="text-[10px] uppercase tracking-widest text-text-secondary mt-1">Edificios administrados</p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex items-center gap-4 lg:justify-center group">
          <div className="w-12 h-12 bg-bg-main rounded-[14px] flex items-center justify-center text-brand-amber transition-colors group-hover:bg-brand-navy group-hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <p className="text-2xl font-montserrat font-black text-brand-navy leading-none">+8</p>
            <p className="text-[10px] uppercase tracking-widest text-text-secondary mt-1">Años de experiencia</p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex items-center gap-4 lg:justify-center group">
          <div className="w-12 h-12 bg-bg-main rounded-[14px] flex items-center justify-center text-brand-amber transition-colors group-hover:bg-brand-navy group-hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.040L3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622l-1-2.382z" />
            </svg>
          </div>
          <div>
            <p className="text-2xl font-montserrat font-black text-brand-navy leading-none">100%</p>
            <p className="text-[10px] uppercase tracking-widest text-text-secondary mt-1">Gestión Transparente</p>
          </div>
        </div>

        {/* Item 4 */}
        <div className="flex items-center gap-4 lg:justify-center group">
          <div className="w-12 h-12 bg-bg-main rounded-[14px] flex items-center justify-center text-brand-amber transition-colors group-hover:bg-brand-navy group-hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="text-2xl font-montserrat font-black text-brand-navy leading-none">24/7</p>
            <p className="text-[10px] uppercase tracking-widest text-text-secondary mt-1">Respuesta operativa</p>
          </div>
        </div>
      </div>
    </div>
  );
}
