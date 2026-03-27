import Link from "next/link";
import Image from "next/image";

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumb?: { label: string; href: string }[];
  bgImage?: string;
}

export default function PageHeader({ title, description, breadcrumb, bgImage = "/images/hero-grupo-hernandez.jpg" }: PageHeaderProps) {
  return (
    <section className="relative bg-brand-navy pt-32 pb-16 md:pt-36 md:pb-20 overflow-hidden">
      {/* Background Image with Deep Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt={title}
          fill
          priority
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,25,48,0.96)_0%,rgba(10,25,48,0.9)_100%)]"></div>
      </div>
      
      {/* Decorative Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-brand-amber opacity-[0.04] skew-x-[-20deg] translate-x-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          {/* Breadcrumb */}
          {breadcrumb && (
            <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-brand-amber mb-6">
              <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
              {breadcrumb.map((item, idx) => (
                <span key={idx} className="flex items-center gap-2">
                  <span className="opacity-30 text-white">/</span>
                  <Link href={item.href} className="text-white hover:text-white transition-all underline decoration-brand-amber underline-offset-4">
                    {item.label}
                  </Link>
                </span>
              ))}
            </nav>
          )}

          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6 leading-tight tracking-tight">
            {title}
          </h1>
          {description && (
            <p className="text-lg md:text-xl text-white max-w-2xl leading-relaxed font-semibold">
              {description}
            </p>
          )}
          
          <div className="mt-8 h-1 w-24 bg-brand-amber rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
