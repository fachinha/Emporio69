import React from 'react';
import { Calendar, Users, MapPin, Check, MessageCircle, Sparkles, GlassWater } from 'lucide-react';
import { EXPERIENCES } from '../data/eventsData';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export default function RitualEvents() {
  return (
    <section id="experiencias" className="relative py-28 bg-[#0A111C] border-t border-[#C89D54]/15">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#C89D54]/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#F4F4F6] tracking-tight mb-4">
            Ritual de Copa & <span className="text-gold-gradient">Encuentros</span>
          </h2>

          <p className="text-sm sm:text-base text-[#9BA3B0] font-sans leading-relaxed">
            Nuestra tabaquería es el punto de encuentro de quienes comparten la pasión por el buen vivir. Organizamos veladas íntimas de cata, maridaje guiado y asesoramiento para sibaritas.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-14">
          {EXPERIENCES.map((exp, idx) => {
            const isFeatured = idx === 0; // Ritual de Copa featured
            return (
              <div
                key={exp.id}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-500 relative overflow-hidden ${
                  isFeatured 
                    ? 'bg-gradient-to-b from-[#18263D]/90 via-[#111C2D]/95 to-[#0A111C] border-2 border-[#DFB76C]/60 shadow-[0_0_40px_rgba(200,157,84,0.18)] scale-[1.02]' 
                    : 'glass-card glass-card-hover border-gold-subtle'
                }`}
              >
                {/* Top Badge */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#C89D54]/15 border border-[#C89D54]/30 text-[10px] font-montserrat uppercase tracking-[0.2em] text-[#DFB76C] font-semibold">
                      {exp.badge}
                    </span>
                    <span className="text-xs text-[#9BA3B0] flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-[#C89D54]" />
                      {exp.spots}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#F4F4F6] mb-1">
                    {exp.title}
                  </h3>

                  <p className="font-montserrat text-xs text-[#C89D54] tracking-wider uppercase mb-5">
                    {exp.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-[#9BA3B0] font-sans leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Program Features */}
                  <div className="space-y-2.5 mb-8">
                    {exp.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-[#F4F4F6]/90 font-sans">
                        <Check className="w-4 h-4 text-[#DFB76C] flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Metadata & CTA */}
                <div>
                  <div className="pt-4 border-t border-white/5 space-y-1.5 mb-6 text-xs text-[#9BA3B0]">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-[#C89D54]" />
                      <span>{exp.schedule}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#C89D54]" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <a
                    href={buildWhatsAppUrl(exp.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 px-5 rounded-full font-montserrat font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${
                      isFeatured
                        ? 'bg-gold-gradient text-[#0A111C] shadow-gold-glow hover:scale-[1.02]'
                        : 'bg-[#C89D54]/15 hover:bg-gold-gradient text-[#DFB76C] hover:text-[#0A111C] border border-[#C89D54]/40 hover:border-transparent'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Reservar Lugar por WhatsApp</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Private Club Manifesto Banner */}
        <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-r from-[#111C2D] via-[#18263D]/90 to-[#111C2D] border border-[#C89D54]/30 shadow-2xl">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="max-w-2xl">
              <span className="font-cursive text-2xl text-[#DFB76C] block mb-1">
                La experiencia Emporio 69
              </span>
              <h4 className="text-3xl sm:text-4xl font-serif font-bold text-[#F4F4F6] mb-3">
                ¿Deseas organizar una cata privada o regalo corporativo?
              </h4>
              <p className="text-sm text-[#9BA3B0] font-sans leading-relaxed">
                Diseñamos experiencias a medida para grupos selectos, empresas y aniversarios especiales en Bariloche y la región patagónica.
              </p>
            </div>

            <a
              href={buildWhatsAppUrl('¡Hola! Me gustaría cotizar una cata privada / evento corporativo a medida con Emporio 69.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 px-8 py-3.5 rounded-full bg-gold-gradient text-[#0A111C] font-montserrat font-bold text-xs sm:text-sm tracking-wider uppercase shadow-gold-glow hover:scale-105 transition-all"
            >
              Coordinar Encuentro Privado
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
