import Link from "next/link";
import Image from "next/image";
import { siteContent } from "@/lib/data/content";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy-deep text-white pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Col */}
          <div className="space-y-8">
            <Link href="/" className="inline-block group">
              <Image
                src="/logo-trans.png"
                alt="Grupo Hernandez"
                width={200}
                height={64}
                className="brightness-0 invert h-12 w-auto transition-transform group-hover:scale-[1.02]"
              />
            </Link>
            <p className="text-white/50 text-[13px] leading-relaxed max-w-xs font-medium">
              Especialistas en administración de edificios de alta complejidad. Solidez operativa y transparencia integral en Lima Metropolitana.
            </p>
            <div className="flex gap-4">
              <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-amber transition-all cursor-pointer text-white/40 hover:text-brand-navy group">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </div>
            </div>
          </div>

          {/* Navigation Col */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-amber mb-9">Estructura</h4>
            <ul className="space-y-5 text-sm font-medium">
              {[
                { name: "Para Comités", href: "/para-comites" },
                { name: "Nuestra Gestión", href: "/nuestra-gestion" },
                { name: "Edificios Administrados", href: "/edificios-administrados" },
                { name: "Atención al Residente", href: "/atencion-al-residente" },
                { name: "Nosotros", href: "/nosotros" }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-white/50 hover:text-white transition-all flex items-center gap-3 group">
                    <span className="w-0 h-px bg-brand-amber group-hover:w-4 transition-all"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-amber mb-9">Contacto Central</h4>
            <ul className="space-y-6 text-[13.5px]">
              <li className="flex items-start gap-4 group">
                <div className="mt-1 text-brand-amber group-hover:scale-110 transition-transform">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-white/70 group-hover:text-white transition-colors">Lima Metropolitana, Perú</span>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="mt-1 text-brand-amber group-hover:scale-110 transition-transform">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-white/70 group-hover:text-white transition-colors">{siteContent.global.contactPhone}</span>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="mt-1 text-brand-amber group-hover:scale-110 transition-transform">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-white/70 group-hover:text-white transition-colors break-all">{siteContent.global.contactEmail}</span>
              </li>
            </ul>
          </div>

          {/* Legal / Complaints */}
          <div className="space-y-12">
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-amber mb-9">Credenciales</h4>
              <ul className="space-y-5 text-[12px] font-medium">
                <li>
                  <Link href="/politica-de-privacidad" className="text-white/40 hover:text-white transition-colors">Política de Privacidad</Link>
                </li>
              </ul>
            </div>
            
            <Link 
              href="/libro-de-reclamaciones" 
              className="inline-flex items-center gap-5 bg-white/5 border border-white/10 p-5 rounded-[18px] hover:bg-white/10 transition-all duration-320 group"
            >
              <div className="w-11 h-11 bg-brand-amber/10 rounded-[12px] flex items-center justify-center text-brand-amber group-hover:bg-brand-amber group-hover:text-brand-navy transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] leading-tight text-white/70 group-hover:text-white transition-colors">
                Libro de<br />Reclamaciones
              </span>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">
          <p>© {currentYear} Grupo Hernandez. Excelencia en Administración Integral.</p>
          <div className="flex gap-8 mt-6 md:mt-0">
            <span className="hover:text-brand-amber transition-colors cursor-default">Solidez Operativa Real</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
