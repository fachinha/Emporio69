import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';
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
    { label: 'El Ritual', href: '#ritual' },
    { label: 'Sommelier', href: '#sommelier' },
    { label: 'Catálogo', href: '#catalogo' },
    { label: 'Ritual de Copa', href: '#experiencias' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0A111C]/90 backdrop-blur-md py-3 border-b border-[#C89D54]/15 shadow-[0_4px_30px_rgba(0,0,0,0.6)]' 
          : 'bg-transparent py-5'
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

        {/* Right CTA Button (Pill Style inspired by Negro Mercado) */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={buildWhatsAppUrl('¡Hola Emporio 69! Quisiera consultar por el catálogo completo de habanos y destilados.')}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#C89D54]/50 hover:border-[#DFB76C] bg-[#111C2D]/60 hover:bg-[#C89D54]/15 text-[#F4F4F6] hover:text-[#DFB76C] font-montserrat font-bold text-xs tracking-wider uppercase transition-all duration-300"
          >
            <span>Consultar Catálogo</span>
            <div className="w-6 h-6 rounded-full bg-[#DFB76C] text-[#0A111C] flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#DFB76C] hover:text-white transition-colors"
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A111C]/98 backdrop-blur-2xl border-b border-[#C89D54]/20 px-6 py-6 animate-fade-in shadow-2xl">
          <div className="flex flex-col gap-4">
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
