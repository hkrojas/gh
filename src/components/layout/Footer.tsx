import Link from "next/link";
import Image from "next/image";
import { siteContent } from "@/lib/data/content";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/logo-trans.png"
                alt="Grupo Hernandez Logo"
                width={200}
                height={60}
                className="brightness-0 invert h-12 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Especialistas en administración de edificios en Lima. Orden,
              control y solvencia operativa desde hace más de 8 años.
            </p>
          </div>

          {/* Navigation Col */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-6">Navegación</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link href="/para-comites" className="hover:text-brand-amber transition-colors">
                  Para Comités
                </Link>
              </li>
              <li>
                <Link href="/nuestra-gestion" className="hover:text-brand-amber transition-colors">
                  Nuestra Gestión
                </Link>
              </li>
              <li>
                <Link href="/edificios-administrados" className="hover:text-brand-amber transition-colors">
                  Edificios Administrados
                </Link>
              </li>
              <li>
                <Link href="/atencion-al-residente" className="hover:text-brand-amber transition-colors">
                  Atención al Residente
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="hover:text-brand-amber transition-colors">
                  Nosotros
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-6">Contacto</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-brand-amber mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Lima, Perú</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-brand-amber mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{siteContent.global.contactPhone}</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-brand-amber mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="break-all">{siteContent.global.contactEmail}</span>
              </li>
            </ul>
          </div>

          {/* Legal / Complaints */}
          <div className="space-y-8">
            <div>
              <h4 className="font-montserrat font-bold text-lg mb-6">Legal</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li>
                  <Link href="/politica-de-privacidad" className="hover:text-brand-amber transition-colors">
                    Política de Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="/terminos-y-condiciones" className="hover:text-brand-amber transition-colors">
                    Términos y Condiciones
                  </Link>
                </li>
              </ul>
            </div>
            <Link 
              href="/libro-de-reclamaciones" 
              className="inline-flex items-center space-x-3 bg-white/5 border border-white/10 p-3 rounded-sm hover:bg-white/10 transition-colors"
            >
              <Image 
                src="/logo-trans.png" // Placeholder indicator for book
                alt="Libro de Reclamaciones"
                width={30}
                height={30}
                className="opacity-50"
              />
              <span className="text-xs font-bold uppercase tracking-wider">Libro de<br />Reclamaciones</span>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {currentYear} Grupo Hernandez. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="hover:text-gray-300">Presencia en Lima</span>
            <span className="hover:text-gray-300">Solidez Operativa Real</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
