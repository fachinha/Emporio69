import React from 'react';
import { MessageCircle, MapPin, Clock, Phone, Sparkles, Heart } from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export default function Footer() {
  return (
    <footer className="relative bg-[#060B12] text-[#9BA3B0] pt-20 pb-12 border-t border-[#C89D54]/20 overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#C89D54]/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3.5 mb-6">
              <img 
                src="/logo-transparent.png" 
                alt="Emporio 69" 
                className="h-14 w-auto object-contain"
              />
            </div>

            <p className="text-xs sm:text-sm text-[#9BA3B0] leading-relaxed max-w-sm mb-6 font-sans">
              Tabaquería de autor, puros de selección, destilados de guarda y accesorios de alta distinción. Un refugio para los amantes de las sobremesas eternas.
            </p>

            {/* Social Channels */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/emporio69tabaqueria/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#111C2D] border border-[#C89D54]/30 text-[#DFB76C] hover:text-white hover:border-[#DFB76C] hover:shadow-gold-glow transition-all"
                aria-label="Instagram de Emporio 69"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>

              <a
                href={buildWhatsAppUrl('¡Hola! Me contacto a través del pie de página de Emporio 69.')}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#111C2D] border border-[#C89D54]/30 text-[#25D366] hover:text-white hover:border-[#25D366] hover:shadow-[0_0_15px_rgba(37,211,102,0.3)] transition-all"
                aria-label="WhatsApp oficial de Emporio 69"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-lg font-bold text-[#F4F4F6] mb-5 tracking-wide">
              Navegación
            </h4>
            <ul className="space-y-3 text-xs font-montserrat uppercase tracking-wider">
              <li>
                <a href="#sommelier" className="hover:text-[#DFB76C] transition-colors">
                  Sommelier de Maridaje
                </a>
              </li>
              <li>
                <a href="#catalogo" className="hover:text-[#DFB76C] transition-colors">
                  Catálogo Seleccionado
                </a>
              </li>
              <li>
                <a href="#experiencias" className="hover:text-[#DFB76C] transition-colors">
                  Ritual de Copa / Eventos
                </a>
              </li>
              <li>
                <a href="#ritual" className="hover:text-[#DFB76C] transition-colors">
                  El Ritual del Buen Vivir
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/emporio69tabaqueria/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#DFB76C] transition-colors flex items-center gap-1.5"
                >
                  <span>@emporio69tabaqueria</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Contact (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="font-serif text-lg font-bold text-[#F4F4F6] mb-5 tracking-wide">
              Ubicación & Contacto
            </h4>
            
            <ul className="space-y-4 text-xs font-sans">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#DFB76C] flex-shrink-0 mt-0.5" />
                <span>
                  Patagonia Argentina • San Carlos de Bariloche & Región Cordillerana
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#DFB76C] flex-shrink-0" />
                <span>
                  Lunes a Sábados: 11:00 a 21:00 hs
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#DFB76C] flex-shrink-0" />
                <a 
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#DFB76C] transition-colors font-medium text-[#F4F4F6]"
                >
                  +54 9 294 477-8814 (WhatsApp Directo)
                </a>
              </li>
            </ul>

            <div className="mt-6 p-4 rounded-xl bg-[#111C2D]/60 border border-[#C89D54]/20">
              <p className="text-[11px] text-[#9BA3B0] leading-relaxed">
                📦 <strong>Envíos Nacionales:</strong> Despachos en cajas acolchadas con control de humedad para preservar la integridad del tabaco hasta su destino.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal Notice */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#9BA3B0]/70 font-sans text-center md:text-left">
          <p>
            © {new Date().getFullYear()} Emporio 69 — Tabaquería & Ritual de Buen Vivir. Todos los derechos reservados.
          </p>

          <p className="max-w-md text-[10px] text-[#9BA3B0]/50">
            Fumar causa adicción y enfermedades respiratorias. La venta de tabaco y bebidas con alcohol está prohibida a menores de 18 años (Ley 26.687).
          </p>
        </div>

      </div>
    </footer>
  );
}
