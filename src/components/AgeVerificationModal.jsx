import React, { useState, useEffect } from 'react';
import { ShieldAlert, AlertTriangle } from 'lucide-react';

export default function AgeVerificationModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [denied, setDenied] = useState(false);

  useEffect(() => {
    const isVerified = localStorage.getItem('emporio69_age_verified') || sessionStorage.getItem('emporio69_age_verified');
    if (!isVerified) {
      // Show immediately or after a slight tick for smooth mount
      const timer = setTimeout(() => setIsVisible(true), 250);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConfirm = () => {
    localStorage.setItem('emporio69_age_verified', 'true');
    sessionStorage.setItem('emporio69_age_verified', 'true');
    setIsVisible(false);
  };

  const handleDeny = () => {
    setDenied(true);
  };

  if (!isVisible) return null;

  return (
    <div 
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-gate-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0A111C]/92 backdrop-blur-md animate-fade-in"
    >
      <div className="relative w-full max-w-lg rounded-3xl bg-[#111C2D] border-2 border-[#C89D54]/50 p-6 sm:p-8 text-center shadow-[0_25px_70px_rgba(0,0,0,0.95)] overflow-hidden">
        
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#C89D54]/15 rounded-full blur-3xl pointer-events-none"></div>

        {!denied ? (
          <div className="relative z-10 flex flex-col items-center">
            
            {/* Prominent Golden +18 Shield Badge */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gold-gradient text-[#0A111C] flex items-center justify-center font-montserrat font-extrabold text-3xl sm:text-4xl shadow-gold-glow mb-5 select-none">
              +18
            </div>

            {/* Clear Heading */}
            <h2 id="age-gate-title" className="text-2xl sm:text-3xl font-serif font-bold text-[#F4F4F6] tracking-tight mb-3">
              Sitio Exclusivo para <span className="text-gold-gradient">Mayores de Edad</span>
            </h2>

            {/* Clear, High-Contrast Description */}
            <p className="text-sm sm:text-base text-[#D0D6E0] font-sans leading-relaxed mb-6 max-w-md">
              El acceso a este sitio y la adquisición de habanos, tabacos y destilados nobles están reservados únicamente a personas mayores de 18 años, conforme a la <strong className="text-[#DFB76C] font-semibold">Ley Nacional N° 26.687</strong>.
            </p>

            {/* Tap-Friendly Responsive Buttons */}
            <div className="w-full flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={handleConfirm}
                className="w-full py-3.5 px-6 rounded-full bg-gold-gradient hover:bg-gold-gradient-hover text-[#0A111C] font-montserrat font-extrabold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-gold-glow active:scale-98 flex-1"
              >
                Soy Mayor de 18 Años (Ingresar)
              </button>

              <button
                onClick={handleDeny}
                className="w-full sm:w-auto py-3 px-5 rounded-full border border-white/20 hover:border-white/40 text-[#9BA3B0] hover:text-white font-montserrat text-xs tracking-wider uppercase transition-colors"
              >
                Soy Menor de Edad
              </button>
            </div>

            <p className="mt-5 text-[11px] text-[#9BA3B0]/70 font-sans">
              El consumo de tabaco es perjudicial para la salud.
            </p>

          </div>
        ) : (
          <div className="relative z-10 flex flex-col items-center py-4">
            <div className="w-16 h-16 rounded-full bg-red-950/80 border border-red-500/40 text-red-400 flex items-center justify-center mb-4">
              <ShieldAlert className="w-8 h-8" />
            </div>

            <h3 className="text-xl sm:text-2xl font-serif font-bold text-red-300 mb-2">
              Acceso Restringido
            </h3>

            <p className="text-xs sm:text-sm text-[#D0D6E0] font-sans leading-relaxed max-w-sm mb-6">
              Por disposiciones legales y normativas de consumo responsable (Ley 26.687), debes ser mayor de 18 años para ingresar a Emporio 69.
            </p>

            <button
              onClick={() => window.location.href = 'https://www.google.com'}
              className="py-3 px-8 rounded-full bg-red-600 hover:bg-red-700 text-white font-montserrat font-bold text-xs uppercase tracking-wider transition"
            >
              Salir del Sitio
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

