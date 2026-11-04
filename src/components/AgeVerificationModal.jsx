import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';

export default function AgeVerificationModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [denied, setDenied] = useState(false);

  useEffect(() => {
    const isVerified = sessionStorage.getItem('emporio69_age_verified');
    if (!isVerified) {
      // Show non-invasively after a brief moment
      const timer = setTimeout(() => setIsVisible(true), 600);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConfirm = () => {
    sessionStorage.setItem('emporio69_age_verified', 'true');
    setIsVisible(false);
  };

  const handleDeny = () => {
    setDenied(true);
  };

  if (!isVisible) return null;

  return (
    <aside 
      aria-label="Verificación de edad legal"
      className="fixed bottom-5 left-4 right-4 sm:left-1/2 sm:-translate-x-1/2 sm:w-auto max-w-xl z-50 animate-fade-in pointer-events-auto"
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6 px-5 py-3.5 rounded-2xl bg-[#0E1726]/90 backdrop-blur-xl border border-[#C89D54]/30 shadow-[0_12px_40px_rgba(0,0,0,0.7)] text-left">
        
        {/* Left message & Badge */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <span className="flex-shrink-0 px-2 py-0.5 rounded-full bg-[#C89D54]/15 border border-[#C89D54]/40 text-[10px] font-montserrat font-bold text-[#DFB76C] tracking-wider">
            +18
          </span>
          <p className="text-xs text-[#9BA3B0] font-sans leading-tight">
            {!denied ? (
              <>
                Sitio exclusivo para mayores de edad. <br className="hidden sm:inline" />
                <span className="text-[#F4F4F6]">Ritual del Buen Vivir</span> con responsabilidad.
              </>
            ) : (
              <span className="text-red-300">
                Acceso restringido a menores según Ley 26.687.
              </span>
            )}
          </p>
        </div>

        {/* Action Buttons */}
        {!denied ? (
          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
            <button
              onClick={handleConfirm}
              className="px-4 py-2 rounded-full bg-gold-gradient hover:bg-gold-gradient-hover text-[#0A111C] font-montserrat font-bold text-[11px] tracking-wider uppercase transition-all duration-300 hover:shadow-gold-glow flex-shrink-0"
            >
              Ingresar (+18)
            </button>
            <button
              onClick={handleDeny}
              className="px-3 py-2 text-[11px] font-montserrat uppercase tracking-wider text-[#9BA3B0] hover:text-[#F4F4F6] transition-colors flex-shrink-0"
            >
              Soy menor
            </button>
          </div>
        ) : (
          <button
            onClick={() => window.location.href = 'https://www.google.com'}
            className="px-4 py-1.5 rounded-full bg-red-900/60 text-red-200 text-xs font-montserrat uppercase transition"
          >
            Salir
          </button>
        )}

      </div>
    </aside>
  );
}
