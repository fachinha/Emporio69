import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export default function WhatsAppFloatingBtn() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      
      {/* Floating Tooltip Bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#0E1726]/95 border border-[#C89D54]/40 shadow-2xl backdrop-blur-md animate-fade-in">
          <div className="flex flex-col text-left">
            <span className="text-[11px] font-bold text-[#F4F4F6] font-montserrat tracking-wide">
              ¿Consultas o pedidos?
            </span>
            <span className="text-[10px] text-[#DFB76C] font-sans">
              Escríbenos directamente a WhatsApp
            </span>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#9BA3B0] hover:text-white p-0.5 rounded transition"
            aria-label="Cerrar sugerencia"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button with Gold Pulse Glow */}
      <a
        href={buildWhatsAppUrl('¡Hola! Me gustaría hacer una consulta sobre la tabaquería y el catálogo de Emporio 69.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir chat de WhatsApp de Emporio 69"
        className="relative group p-4 rounded-full bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.3)] hover:scale-110 transition-transform duration-300 flex items-center justify-center"
      >
        {/* Subtle Gold Outer Ring Pulse */}
        <span className="absolute -inset-1 rounded-full border-2 border-[#C89D54]/60 animate-ping pointer-events-none opacity-75"></span>
        <span className="absolute -inset-1.5 rounded-full border border-[#DFB76C]/40 animate-pulse pointer-events-none"></span>

        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
      </a>

    </div>
  );
}
