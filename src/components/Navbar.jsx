import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Catálogo', href: '#catalogo' },
    { label: 'Sommelier', href: '#sommelier' },
    { label: 'Ritual de Copa', href: '#experiencias' },
    { label: 'Nosotros', href: '#nosotros' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      {/* Top Legal Notice Bar (+18) */}
      <div className="w-full bg-[#070D16] border-b border-[#C89D54]/25 py-1.5 px-3 sm:px-4 text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-[10px] sm:text-xs font-montserrat tracking-wider">
          <span className="px-1.5 py-0.2 rounded bg-gradient-to-r from-[#DFB76C] to-[#C89D54] text-[#0A111C] font-extrabold text-[9px] sm:text-[10px] select-none">
            +18
          </span>
          <span className="text-[#F4F4F6] font-semibold">
            SITIO EXCLUSIVO PARA MAYORES DE EDAD
          </span>
          <span className="hidden sm:inline text-[#C89D54]/50">•</span>
          <span className="hidden sm:inline text-[#9BA3B0] font-normal">
            VENTA PROHIBIDA A MENORES (LEY 26.687)
          </span>
        </div>
      </div>

      {/* Main Navbar Bar */}
      <div 
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0A111C]/92 backdrop-blur-md py-2.5 sm:py-3 border-b border-[#C89D54]/15 shadow-[0_4px_30px_rgba(0,0,0,0.6)]' 
            : 'bg-[#0A111C]/40 backdrop-blur-sm py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand / Logo (Pure Transparent Badge without square/borders) */}
          <a href="#" className="flex items-center gap-3 group">
            <img 
              src="/logo-transparent.png" 
              alt="Emporio 69 - Tabaquería" 
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-montserrat uppercase tracking-[0.2em] text-[#9BA3B0] hover:text-[#DFB76C] transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#DFB76C] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#DFB76C] hover:text-white transition-colors"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A111C]/98 backdrop-blur-2xl border-b border-[#C89D54]/20 px-6 py-6 animate-fade-in shadow-2xl">
          <div className="flex flex-col gap-4">
            {/* Mobile +18 notice */}
            <div className="flex items-center gap-2 pb-3 border-b border-[#C89D54]/15 text-xs text-[#DFB76C] font-montserrat">
              <span className="px-1.5 py-0.5 rounded bg-gold-gradient text-[#0A111C] font-extrabold text-[10px]">
                +18
              </span>
              <span className="font-semibold uppercase tracking-wider text-[11px] text-[#F4F4F6]">
                Exclusivo mayores de 18 años (Ley 26.687)
              </span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-montserrat uppercase tracking-[0.2em] text-[#F4F4F6] hover:text-[#DFB76C] py-2 border-b border-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            
            <a
              href={buildWhatsAppUrl('¡Hola Emporio 69! Quisiera consultar por el catálogo desde mi móvil.')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-gold-gradient text-[#0A111C] font-montserrat font-bold text-xs tracking-wider uppercase shadow-gold-glow"
            >
              <MessageCircle className="w-4 h-4 fill-[#0A111C]" />
              <span>Consultar por WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
