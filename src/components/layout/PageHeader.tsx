import Link from "next/link";

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumb?: { label: string; href: string }[];
}

export default function PageHeader({ title, description, breadcrumb }: PageHeaderProps) {
  return (
    <section className="relative bg-brand-navy pt-40 pb-24 overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-amber opacity-5 skew-x-[-20deg] translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
        <div className="max-w-4xl animate-fade-in-up">
          {/* Breadcrumb */}
          {breadcrumb && (
            <nav className="flex items-center justify-center md:justify-start gap-2 text-xs font-bold uppercase tracking-widest text-brand-amber mb-6">
              <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
              {breadcrumb.map((item, idx) => (
                <span key={idx} className="flex items-center gap-2">
                  <span className="opacity-40 text-white">/</span>
                  <Link href={item.href} className="text-white/60 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </span>
              ))}
            </nav>
          )}

          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          {description && (
            <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
