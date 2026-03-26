import Link from "next/link";

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumb?: { label: string; href: string }[];
}

export default function PageHeader({ title, description, breadcrumb }: PageHeaderProps) {
  return (
    <section className="relative bg-brand-navy pt-44 pb-28 overflow-hidden">
      {/* Decorative Brand Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-amber opacity-[0.03] skew-x-[-25deg] translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-white opacity-[0.02] rounded-full blur-3xl -translate-x-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-700">
          {/* Breadcrumb - Subtle & Clean */}
          {breadcrumb && (
            <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-amber mb-8">
              <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
              {breadcrumb.map((item, idx) => (
                <span key={idx} className="flex items-center gap-2">
                  <span className="opacity-20 text-white">/</span>
                  <Link href={item.href} className="text-white/40 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </span>
              ))}
            </nav>
          )}

          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-white mb-6 leading-[1.15] tracking-tight">
            {title}
          </h1>
          {description && (
            <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed font-medium">
              {description}
            </p>
          )}
          
          <div className="mt-10 h-1.5 w-20 bg-brand-amber rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
