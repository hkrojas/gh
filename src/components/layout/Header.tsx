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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-premium py-3 border-b border-gray-100" 
          : "bg-white py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/logo-trans.png"
            alt="Grupo Hernandez Logo"
            width={180}
            height={60}
            className="h-10 w-auto md:h-12 transition-transform duration-300 group-hover:scale-[1.02]"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link-premium text-sm tracking-tight"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="btn-premium !py-3 !text-sm"
          >
            {siteContent.global.ctaMaster}
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-brand-navy"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl py-6 px-4 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-brand-navy font-semibold text-lg py-2 border-b border-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="bg-brand-amber text-brand-navy px-6 py-4 rounded-sm font-bold text-center mt-4 shadow-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            {siteContent.global.ctaMaster}
          </Link>
        </div>
      )}
    </header>
  );
}
