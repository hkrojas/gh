"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { siteContent } from "@/lib/data/content";

const navLinks = [
  { name: "Para Comités", href: "/para-comites" },
  { name: "Nuestra Gestión", href: "/nuestra-gestion" },
  { name: "Edificios", href: "/edificios-administrados" },
  { name: "Atención al Residente", href: "/atencion-al-residente" },
  { name: "Nosotros", href: "/nosotros" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex items-center bg-brand-navy ${
        isScrolled 
          ? "shadow-premium border-b border-white/10 h-[72px]" 
          : "h-[84px]"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/logo-trans.png"
            alt="Grupo Hernandez"
            width={190}
            height={64}
            className="h-10 w-auto md:h-12 transition-transform duration-300 group-hover:scale-[1.01]"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-white/90 hover:text-white text-[15px] font-medium transition-colors py-2 group/nav"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-amber transition-all duration-300 group-hover/nav:w-full"></span>
            </Link>
          ))}
          <Link
            href="/contacto"
            className="btn-premium !py-3 !px-7 !text-[15px]"
          >
            {siteContent.global.ctaMaster}
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-brand-navy-deep border-t border-white/10 shadow-premium py-10 px-6 flex flex-col space-y-6 animate-in fade-in slide-in-from-top-4 duration-320 ease-out">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/95 font-semibold text-xl py-4 border-b border-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="btn-premium w-full mt-6 py-4 text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            {siteContent.global.ctaMaster}
          </Link>
        </div>
      )}
    </header>
  );
}
