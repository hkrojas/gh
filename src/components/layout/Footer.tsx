"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    empresa: [
      { name: "Edificios Administrados", href: "/edificios-administrados" },
      { name: "Para Comités", href: "/para-comites" },
      { name: "Nuestra Gestión", href: "/nuestra-gestion" },
      { name: "Nosotros", href: "/nosotros" },
    ],
    servicios: [
      { name: "Atención al Residente", href: "/atencion-al-residente" },
      { name: "Contacto Comercial", href: "/contacto" },
      { name: "Libro de Reclamaciones", href: "/libro-de-reclamaciones" },
    ],
  };

  return (
    <footer className="bg-brand-navy text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-8">
            <Link href="/" className="inline-block">
              <Image
                src="/logo-trans.png"
                alt="Grupo Hernandez"
                width={200}
                height={66}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-white/60 text-base leading-relaxed max-w-md font-medium">
              Administración institucional de edificios en Lima. Enfocados en la preservación del patrimonio mediante una gestión técnica, transparente y presencial.
            </p>
            <div className="flex gap-4">
               {/* Redes Sociales - Minimalista */}
               <div className="flex gap-4 pt-2">
                 <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white/40 hover:text-brand-amber hover:border-brand-amber transition-all cursor-pointer">
                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                 </div>
               </div>
            </div>
          </div>

          {/* Links Empresa */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-amber mb-8">Empresa</h4>
            <ul className="space-y-4">
              {links.empresa.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-white transition-colors font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Servicios */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-amber mb-8">Servicios</h4>
            <ul className="space-y-4">
              {links.servicios.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-white transition-colors font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-xs font-semibold tracking-wider">
            &copy; {currentYear} Grupo Hernandez. Todos los derechos reservados.
          </p>
          <div className="flex gap-10 text-white/30 text-[10px] font-bold uppercase tracking-widest">
            <Link href="/terminos-y-condiciones" className="hover:text-brand-amber transition-colors">Términos</Link>
            <Link href="/privacidad" className="hover:text-brand-amber transition-colors">Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
