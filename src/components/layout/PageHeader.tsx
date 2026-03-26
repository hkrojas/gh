import Link from "next/link";

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumb?: { label: string; href: string }[];
}

export default function PageHeader({ title, description, breadcrumb }: PageHeaderProps) {
  return (
    <section className="bg-brand-navy pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto px-4">
        {breadcrumb && (
          <nav className="flex items-center space-x-2 text-white/50 text-xs font-bold uppercase tracking-widest mb-6">
            <Link href="/" className="hover:text-brand-amber transition-colors">Inicio</Link>
            {breadcrumb.map((item, index) => (
              <span key={index} className="flex items-center space-x-2">
                <span>/</span>
                <Link href={item.href} className="hover:text-brand-amber transition-colors">
                  {item.label}
                </Link>
              </span>
            ))}
          </nav>
        )}
        <h1 className="text-3xl md:text-5xl text-white font-bold leading-tight mb-4 max-w-4xl">
          {title}
        </h1>
        {description && (
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
