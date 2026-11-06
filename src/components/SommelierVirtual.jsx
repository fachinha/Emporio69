import React, { useState } from 'react';
import { Wine, Sparkles, MessageCircle, Info, CheckCircle2, Clock, Award, ArrowUpRight } from 'lucide-react';
import { SPIRITS_PAIRINGS } from '../data/pairingsData';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export default function SommelierVirtual() {
  const [selectedId, setSelectedId] = useState('whisky');

  const currentPairing = SPIRITS_PAIRINGS.find(p => p.id === selectedId) || SPIRITS_PAIRINGS[0];

  return (
    <section id="sommelier" className="relative py-28 bg-[#0A111C] overflow-hidden border-t border-[#C89D54]/15">
      
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C89D54]/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#18263D]/30 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#F4F4F6] tracking-tight mb-4">
            El Sommelier <span className="text-gold-gradient">Virtual</span>
          </h2>

          <p className="text-sm sm:text-base text-[#9BA3B0] font-sans leading-relaxed">
            Inspirado en nuestras catas exclusivas de destilados. Selecciona tu bebida predilecta y descubre la vitola exacta cuyo tiro, notas aromáticas y fortaleza alcanzan la armonía absoluta.
          </p>
        </div>

        {/* Spirits Selection Bar / Pills */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-12 scrollbar-none justify-start md:justify-center">
          {SPIRITS_PAIRINGS.map((pairing) => {
            const isSelected = pairing.id === selectedId;
            return (
              <button
                key={pairing.id}
                onClick={() => setSelectedId(pairing.id)}
                className={`flex-shrink-0 px-5 py-2.5 rounded-full transition-all duration-300 font-montserrat text-xs tracking-wider uppercase font-semibold flex items-center gap-2 ${
                  isSelected
                    ? 'bg-gold-gradient text-[#0A111C] shadow-gold-glow scale-105'
                    : 'bg-[#111C2D]/70 text-[#9BA3B0] border border-[#C89D54]/20 hover:border-[#DFB76C]/60 hover:text-white'
                }`}
              >
                <Wine className={`w-3.5 h-3.5 ${isSelected ? 'text-[#0A111C]' : 'text-[#DFB76C]'}`} />
                <span>{pairing.spiritName.split('&')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Main Pairing Dynamic Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Spirit Profile (4 cols) */}
          <div className="lg:col-span-4 rounded-3xl p-8 glass-card flex flex-col justify-between border-gold-subtle relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C89D54]/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700"></div>

            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-[#C89D54]/15 border border-[#C89D54]/30 text-[10px] font-montserrat uppercase tracking-[0.2em] text-[#DFB76C] font-semibold mb-6">
                {currentPairing.spiritBadge}
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#F4F4F6] mb-2">
                {currentPairing.spiritName}
              </h3>
              
              <p className="font-montserrat text-xs text-[#C89D54] tracking-widest uppercase mb-6">
                {currentPairing.spiritCategory}
              </p>

              <div className="p-4 rounded-xl bg-[#0A111C]/60 border border-white/5 mb-6">
                <p className="text-xs text-[#9BA3B0] leading-relaxed italic font-sans">
                  "{currentPairing.spiritDescription}"
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-[#9BA3B0]">
                  <Sparkles className="w-3.5 h-3.5 text-[#DFB76C]" />
                  <span>Guarda en barrica seleccionada</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#9BA3B0]">
                  <Award className="w-3.5 h-3.5 text-[#DFB76C]" />
                  <span>Perfil sensorial validado por sommeliers</span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-white/5">
              <p className="text-[11px] font-montserrat uppercase tracking-wider text-[#9BA3B0] mb-1">
                Consejo de Servicio:
              </p>
              <p className="text-xs text-[#DFB76C] font-sans leading-relaxed">
                {currentPairing.recommendedCigar.sommelierTip}
              </p>
            </div>
          </div>

          {/* Right Column: Recommended Habano & Harmonization (8 cols) */}
          <div className="lg:col-span-8 rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-[#111C2D]/95 via-[#0E1726]/90 to-[#0A111C]/95 border border-[#C89D54]/35 shadow-[0_20px_50px_rgba(0,0,0,0.7)] flex flex-col justify-between relative">
            
            {/* Header info */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-[#C89D54]/15">
                <div>
                  <span className="text-[10px] font-montserrat uppercase tracking-[0.25em] text-[#DFB76C] font-bold">
                    Vitola Recomendada
                  </span>
                  <h4 className="text-3xl sm:text-4xl font-serif font-bold text-[#F4F4F6] mt-0.5">
                    {currentPairing.recommendedCigar.brand}{' '}
                    <span className="text-gold-gradient">{currentPairing.recommendedCigar.vitola}</span>
                  </h4>
                  <p className="text-xs text-[#9BA3B0] font-sans mt-1">
                    Origen: <span className="text-[#F4F4F6] font-medium">{currentPairing.recommendedCigar.origin}</span> • {currentPairing.recommendedCigar.lengthRing}
                  </p>
                </div>

                {/* Strength Meter (1 to 5 golden dots) */}
                <div className="flex flex-col items-start sm:items-end">
                  <span className="text-[10px] font-montserrat uppercase tracking-widest text-[#9BA3B0] mb-1.5">
                    Fortaleza: <strong className="text-[#DFB76C]">{currentPairing.recommendedCigar.strengthLabel}</strong>
                  </span>
                  <div className="flex items-center gap-1.5 p-2 rounded-xl bg-[#0A111C]/70 border border-[#C89D54]/25">
                    {[1, 2, 3, 4, 5].map((level) => {
                      const isActive = level <= currentPairing.recommendedCigar.strength;
                      return (
                        <div
                          key={level}
                          title={`Nivel ${level} de 5`}
                          className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                            isActive
                              ? 'bg-gold-gradient shadow-[0_0_8px_#C89D54]'
                              : 'bg-white/10 border border-white/15'
                          }`}
                        />
                      );
                    })}
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#9BA3B0] mt-2">
                    <Clock className="w-3 h-3 text-[#DFB76C]" />
                    <span>Fumada: {currentPairing.recommendedCigar.smokingTime}</span>
                  </div>
                </div>
              </div>

              {/* Tasting Notes Tags */}
              <div className="mb-8">
                <p className="text-xs font-montserrat uppercase tracking-widest text-[#9BA3B0] mb-3">
                  Notas Aromáticas & Sensoriales:
                </p>
                <div className="flex flex-wrap gap-2">
                  {currentPairing.recommendedCigar.tastingNotes.map((note) => (
                    <span
                      key={note}
                      className="px-3.5 py-1.5 rounded-lg bg-[#C89D54]/10 border border-[#C89D54]/30 text-xs font-sans text-[#F4F4F6] transition-colors hover:border-[#DFB76C] hover:bg-[#C89D54]/20"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              {/* Why this pairing works (Sommelier Explanation) */}
              <div className="p-6 rounded-2xl bg-[#0A111C]/80 border border-[#C89D54]/20 mb-8 relative">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#DFB76C] flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-serif text-lg font-bold text-[#DFB76C] mb-1">
                      ¿Por qué funciona este maridaje?
                    </h5>
                    <p className="text-sm text-[#9BA3B0] font-sans leading-relaxed">
                      {currentPairing.recommendedCigar.pairingRationale}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Action with prefilled parameters */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-white/5">
              <div className="flex items-center gap-2 text-xs text-[#9BA3B0]">
                <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                <span>Asesoramiento personalizado sin costo en local o envío</span>
              </div>

              <a
                href={buildWhatsAppUrl(currentPairing.recommendedCigar.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-between gap-4 pl-6 pr-2.5 py-2.5 rounded-full bg-gold-gradient text-[#0A111C] font-montserrat font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 hover:shadow-gold-glow hover:scale-[1.02]"
              >
                <span>Consultar disponibilidad</span>
                <div className="w-8 h-8 rounded-full bg-[#0A111C] text-[#DFB76C] flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
