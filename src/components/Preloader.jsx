import React, { useState, useEffect } from 'react';

export default function Preloader() {
  const [mounted, setMounted] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Start fading out after 950ms
    const timerFade = setTimeout(() => {
      setFading(true);
    }, 950);

    // Remove from DOM after transition completes
    const timerUnmount = setTimeout(() => {
      setMounted(false);
    }, 1750);

    return () => {
      clearTimeout(timerFade);
      clearTimeout(timerUnmount);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0A111C] transition-all duration-700 ease-out select-none ${
        fading ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100 pointer-events-auto scale-100'
      }`}
    >
      {/* Background ambient gold aura */}
      <div className="absolute w-72 h-72 bg-[#C89D54]/15 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>

      <div className="relative flex flex-col items-center">
        {/* Brand Logo with golden breathing effect */}
        <div className="relative mb-6">
          <img 
            src="/logo-transparent.png" 
            alt="Emporio 69" 
            className="h-20 sm:h-24 w-auto object-contain filter drop-shadow-[0_10px_25px_rgba(200,157,84,0.35)]"
          />
        </div>

        {/* Minimalist Subtitle */}
        <p className="font-montserrat text-[11px] sm:text-xs uppercase tracking-[0.35em] text-[#DFB76C] font-semibold mb-6">
          Tabaquería & Cava • Patagonia
        </p>

        {/* Subtle Luxury Gold Progress Line */}
        <div className="w-44 sm:w-56 h-[1.5px] bg-[#111C2D] overflow-hidden rounded-full relative">
          <div className="h-full bg-gradient-to-r from-[#B3843B] via-[#FFF0C2] to-[#DFB76C] w-full rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
