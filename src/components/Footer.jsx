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
                href="https://www.instagram.com/emporio69tabaqueria/?hl=es"
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
                <a href="#catalogo" className="hover:text-[#DFB76C] transition-colors">
                  Catálogo Seleccionado
                </a>
              </li>
              <li>
                <a href="#sommelier" className="hover:text-[#DFB76C] transition-colors">
                  Sommelier de Maridaje
                </a>
              </li>
              <li>
                <a href="#experiencias" className="hover:text-[#DFB76C] transition-colors">
                  Ritual de Copa / Eventos
                </a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-[#DFB76C] transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/emporio69tabaqueria/?hl=es" 
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
              Nuestros Locales
            </h4>
            
            <ul className="space-y-3.5 text-xs font-sans">
              <li className="flex items-start gap-3 p-3 rounded-xl bg-[#111C2D]/50 border border-white/5">
                <MapPin className="w-4 h-4 text-[#DFB76C] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#F4F4F6] block font-montserrat text-xs">📍 Mitre 295</strong>
                  <span className="text-[#9BA3B0] text-[11px] block mt-0.5">
                    Horario: 9:30 - 13:30 hs / 17:00 - 21:00 hs
                  </span>
                  <span className="text-[#DFB76C]/70 text-[10px] uppercase font-montserrat tracking-wider">
                    San Carlos de Bariloche
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3 p-3 rounded-xl bg-[#111C2D]/50 border border-white/5">
                <MapPin className="w-4 h-4 text-[#DFB76C] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#F4F4F6] block font-montserrat text-xs">📍 Quaglia 262</strong>
                  <span className="text-[#9BA3B0] text-[11px] block mt-0.5">
                    Horario: 17:00 - 21:00 hs
                  </span>
                  <span className="text-[#DFB76C]/70 text-[10px] uppercase font-montserrat tracking-wider">
                    San Carlos de Bariloche
                  </span>
                </div>
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

        {/* Legal Adult Warning Banner (+18) */}
        <div className="my-10 p-5 sm:p-6 rounded-2xl bg-[#111C2D] border border-[#C89D54]/35 shadow-xl flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className="w-12 h-12 rounded-2xl bg-gold-gradient text-[#0A111C] font-montserrat font-extrabold text-lg flex items-center justify-center flex-shrink-0 shadow-gold-glow select-none">
              +18
            </span>
            <div>
              <h5 className="font-montserrat text-xs sm:text-sm uppercase tracking-wider font-bold text-[#F4F4F6]">
                Sitio Exclusivo para Mayores de 18 Años
              </h5>
              <p className="text-xs text-[#9BA3B0] font-sans mt-1 leading-relaxed max-w-2xl">
                La comercialización de tabaco, habanos y bebidas con graduación alcohólica está terminantemente prohibida a menores de edad (<strong className="text-[#DFB76C] font-medium">Ley Nacional N° 26.687</strong>). Fumar es perjudicial para la salud y causa adicción.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="px-3.5 py-1.5 rounded-full bg-[#0A111C] border border-[#C89D54]/30 text-[10px] font-montserrat uppercase tracking-widest text-[#DFB76C] font-semibold">
              Consumo Responsable
            </span>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9BA3B0] font-sans text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} Emporio 69 — Tabaquería & Ritual de Buen Vivir. Bariloche, Patagonia Argentina.
          </p>

          <p className="text-[11px] text-[#9BA3B0]/70">
            Todos los derechos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}
