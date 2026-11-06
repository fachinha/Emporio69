import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <>
      <section 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative min-h-[92vh] flex items-center pt-24 pb-12 overflow-hidden bg-[#0A111C]"
      >
        
        {/* Subtle Background Ambience */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Subtle golden ambient glow in center/right */}
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#C89D54]/8 rounded-full blur-[140px] pointer-events-none"></div>
          {/* Subtle deep night mist */}
          <div className="absolute -top-20 left-1/4 w-[400px] h-[300px] bg-gradient-to-r from-transparent via-[#DFB76C]/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* LEFT COLUMN: Minimalist Editorial Content (60% / 7 cols) with staggered load animations */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              
              {/* Elegant script accent above title */}
              <div className="mb-2 animate-hero-cursive">
                <span className="font-cursive text-2xl sm:text-3xl text-[#DFB76C] tracking-wide block">
                  Ritual de Buen Vivir
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-bold text-[#F4F4F6] tracking-tight leading-[0.9] mb-6 animate-hero-title">
                Emporio <span className="text-gold-gradient">69</span>
              </h1>

              {/* Resumed punchy minimalist description */}
              <p className="text-lg sm:text-xl text-[#9BA3B0] font-sans font-light leading-relaxed max-w-xl mb-10 animate-hero-subtitle">
                Habanos de guarda, destilados de autor y el placer de detener el tiempo en la Patagonia.
              </p>

              {/* KiurCode Style Golden CTA Button */}
              <div className="flex flex-wrap items-center gap-4 animate-hero-ctas">
                <a
                  href="#catalogo"
                  className="btn-gold-kiur group"
                >
                  <span>Explorar Catálogo</span>
                  <div className="btn-icon-wrapper w-7 h-7 rounded-full bg-[#0A111C] text-[#DFB76C] flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                </a>
              </div>

              {/* Minimalist Footnotes */}
              <div className="flex items-center gap-8 pt-12 mt-10 border-t border-[#C89D54]/15 animate-hero-stats">
                <div>
                  <p className="font-serif text-2xl text-[#DFB76C] font-bold">100%</p>
                  <p className="text-[10px] font-montserrat uppercase tracking-widest text-[#9BA3B0]">Habanos de Origen</p>
                </div>
                <div className="h-7 w-[1px] bg-white/10"></div>
                <div>
                  <p className="font-serif text-2xl text-[#DFB76C] font-bold">70% HR</p>
                  <p className="text-[10px] font-montserrat uppercase tracking-widest text-[#9BA3B0]">Guarda en Cedro</p>
                </div>
                <div className="h-7 w-[1px] bg-white/10"></div>
                <div>
                  <p className="font-serif text-2xl text-[#DFB76C] font-bold">Patagonia</p>
                  <p className="text-[10px] font-montserrat uppercase tracking-widest text-[#9BA3B0]">Cava & Salón</p>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Stage & 3D Sealed Luxury Cigar (40% / 5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative mt-10 lg:mt-0">
              
              {/* Minimalist Stage Container with entrance scale animation */}
              <div className="relative w-full max-w-lg aspect-square flex items-center justify-center perspective-[1200px] animate-hero-cigar-enter">
                
                {/* 3D Tilted Sealed Cigar in Physical Floating Space (Pure Cutout without circular background) */}
                <div 
                  className="relative z-20 w-full flex flex-col items-center animate-float-habano transition-transform duration-300 ease-out"
                  style={{
                    transform: `perspective(1000px) rotateY(${mousePos.x * 16}deg) rotateX(${-mousePos.y * 16}deg)`
                  }}
                >
                  <div className="relative w-full max-w-[420px] transition-transform duration-500">
                    <img 
                      src="/assets/cigar_pure_cutout.png" 
                      alt="Habano Sellado de Selección Especial Emporio 69" 
                      className="w-full h-auto object-contain filter drop-shadow-[0_25px_45px_rgba(0,0,0,0.95)] select-none pointer-events-none"
                    />
                  </div>

                  {/* Dynamic Diffuse Floor Shadow with subtle tilt perspective */}
                  <div 
                    className="w-48 sm:w-60 h-4 bg-black/90 rounded-full blur-lg -mt-4 animate-shadow-habano pointer-events-none transition-transform duration-300"
                    style={{
                      transform: `scale(${1 + mousePos.y * 0.2}) translateX(${mousePos.x * 12}px)`
                    }}
                  ></div>
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <a 
          href="#catalogo"
          aria-label="Ir al catálogo"
          className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center justify-center text-[#9BA3B0] hover:text-[#DFB76C] transition-colors"
        >
          <ChevronDown className="w-5 h-5 animate-bounce text-[#C89D54]/70" />
        </a>

      </section>

      {/* Editorial Marquee Ticker (Signature Negro Mercado Style) */}
      <div className="relative w-full overflow-hidden bg-[#111C2D] border-y border-[#C89D54]/25 py-3.5 select-none">
        <div className="flex w-max animate-marquee">
          <div className="flex items-center gap-8 whitespace-nowrap text-xs font-montserrat uppercase tracking-[0.28em] font-semibold text-[#DFB76C] pr-8">
            <span>Habanos de Guarda</span>
            <span className="text-[#C89D54]/40">✦</span>
            <span>Destilados Nobles</span>
            <span className="text-[#C89D54]/40">✦</span>
            <span>Ritual de Copa</span>
            <span className="text-[#C89D54]/40">✦</span>
            <span>Patagonia Argentina</span>
            <span className="text-[#C89D54]/40">✦</span>
            <span>Curaduría Exclusiva</span>
            <span className="text-[#C89D54]/40">✦</span>
            <span>Accesorios de Alta Precisión</span>
            <span className="text-[#C89D54]/40">✦</span>
          </div>
          <div className="flex items-center gap-8 whitespace-nowrap text-xs font-montserrat uppercase tracking-[0.28em] font-semibold text-[#DFB76C] pr-8">
            <span>Habanos de Guarda</span>
            <span className="text-[#C89D54]/40">✦</span>
            <span>Destilados Nobles</span>
            <span className="text-[#C89D54]/40">✦</span>
            <span>Ritual de Copa</span>
            <span className="text-[#C89D54]/40">✦</span>
            <span>Patagonia Argentina</span>
            <span className="text-[#C89D54]/40">✦</span>
            <span>Curaduría Exclusiva</span>
            <span className="text-[#C89D54]/40">✦</span>
            <span>Accesorios de Alta Precisión</span>
            <span className="text-[#C89D54]/40">✦</span>
          </div>
        </div>
      </div>
    </>
  );
}
