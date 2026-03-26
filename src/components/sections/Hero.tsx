import { siteContent } from "@/lib/data/content";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image Placeholder / Real Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-brand-navy/30 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" // Generic institutional look
          alt="Gestión de Edificios"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl text-white font-bold leading-tight mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700">
            {siteContent.home.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            {siteContent.home.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-200">
            <Link
              href="/contacto"
              className="bg-brand-amber text-brand-navy px-8 py-4 rounded-sm font-bold text-lg hover:brightness-110 transition-all text-center shadow-lg"
            >
              {siteContent.home.hero.cta}
            </Link>
            <Link
              href="/nuestra-gestion"
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-sm font-bold text-lg hover:bg-white/20 transition-all text-center"
            >
              Ver nuestra metodología
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
