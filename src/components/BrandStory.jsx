import React from 'react';
import { MapPin, Clock, ArrowUpRight, Sparkles, Compass } from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export default function BrandStory() {
  const stores = [
    {
      id: 'mitre',
      number: '01',
      name: 'Local Mitre',
      address: 'Mitre 295',
      city: 'San Carlos de Bariloche',
      schedule: '9:30 - 13:30 hs / 17:00 - 21:00 hs',
      badge: 'Cava Central & Humidor',
      description: 'Nuestra casa principal en el corazón comercial de Bariloche. Cava con humidor en cedro español a 70% HR, habanos de las mejores vegas y destilados de autor.',
      mapsUrl: 'https://maps.google.com/?q=Mitre+295,+San+Carlos+de+Bariloche'
    },
    {
      id: 'quaglia',
      number: '02',
      name: 'Local Quaglia',
      address: 'Quaglia 262',
      city: 'San Carlos de Bariloche',
      schedule: '17:00 - 21:00 hs',
      badge: 'Espacio Vespertino',
      description: 'Punto de encuentro selecto para el atardecer cordillerano. Vitolas de guarda, tabacos de pipa, accesorios de alta precisión y asesoramiento sommelier.',
      mapsUrl: 'https://maps.google.com/?q=Quaglia+262,+San+Carlos+de+Bariloche'
    }
  ];

  return (
    <section id="nosotros" className="relative py-28 bg-[#0E1726]/50 border-t border-[#C89D54]/15 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#C89D54]/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C89D54]/30 bg-[#111C2D]/80 backdrop-blur-md mb-4">
            <Compass className="w-3.5 h-3.5 text-[#DFB76C]" />
            <span className="font-montserrat text-xs uppercase tracking-[0.25em] text-[#DFB76C] font-semibold">
              Patagonia Argentina
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#F4F4F6] tracking-tight mb-4">
            Nosotros
          </h2>

          <p className="text-base text-[#9BA3B0] font-sans leading-relaxed">
            Nacidos al pie de los Andes patagónicos, rendimos culto al tiempo suspendido. 
            Contamos con dos espacios pensados para sibaritas y amantes del tabaco noble en San Carlos de Bariloche.
          </p>
        </div>

        {/* 2 Physical Stores Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {stores.map((store) => (
            <div 
              key={store.id}
              className="p-8 sm:p-10 rounded-3xl glass-card glass-card-hover border-gold-subtle flex flex-col justify-between relative group"
            >
              <div>
                {/* Top Badge & Number */}
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3.5 py-1 rounded-full bg-[#C89D54]/15 border border-[#C89D54]/30 text-[10px] font-montserrat uppercase tracking-[0.2em] text-[#DFB76C] font-semibold">
                    {store.badge}
                  </span>
                  <span className="font-serif text-3xl font-bold text-[#DFB76C]/30 group-hover:text-[#DFB76C]/60 transition-colors">
                    {store.number}
                  </span>
                </div>

                {/* Address & City */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-[#C89D54]/15 border border-[#C89D54]/30 text-[#DFB76C] mt-1 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F4F4F6] group-hover:text-[#DFB76C] transition-colors">
                      📍 {store.address}
                    </h3>
                    <p className="text-xs font-montserrat uppercase tracking-wider text-[#9BA3B0] mt-0.5">
                      {store.city}
                    </p>
                  </div>
                </div>

                {/* Schedule */}
                <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-[#0A111C]/60 border border-white/5 mb-6">
                  <Clock className="w-4 h-4 text-[#DFB76C] flex-shrink-0" />
                  <span className="text-xs font-montserrat font-medium text-[#F4F4F6]">
                    Horario: <strong className="text-[#DFB76C] font-semibold">{store.schedule}</strong>
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#9BA3B0] font-sans leading-relaxed mb-6">
                  {store.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-white/5 flex flex-wrap items-center gap-3">
                <a
                  href={store.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#C89D54]/40 hover:border-[#DFB76C] bg-transparent hover:bg-[#C89D54]/10 text-xs font-montserrat uppercase tracking-wider text-[#F4F4F6] hover:text-[#DFB76C] font-semibold transition-all"
                >
                  <span>Cómo llegar</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#DFB76C] transition-transform group-hover/btn:rotate-45" />
                </a>

                <a
                  href={buildWhatsAppUrl(`¡Hola! Quisiera consultar sobre la atención en el local de ${store.address} en Bariloche.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C89D54]/15 hover:bg-gold-gradient text-xs font-montserrat uppercase tracking-wider text-[#DFB76C] hover:text-[#0A111C] font-bold border border-[#C89D54]/30 hover:border-transparent transition-all"
                >
                  <span>Consultar por WhatsApp</span>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Instagram Follow Community Banner */}
        <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-r from-[#111C2D] via-[#18263D]/90 to-[#111C2D] border border-[#C89D54]/30 shadow-2xl mb-14">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="max-w-2xl flex flex-col md:flex-row items-center md:items-start gap-5">
              <div className="p-4 rounded-2xl bg-[#0A111C] border border-[#C89D54]/40 text-[#DFB76C] shadow-gold-glow flex-shrink-0">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </div>
              <div>
                <span className="font-cursive text-2xl text-[#DFB76C] block mb-1">
                  Comunidad Emporio 69
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#F4F4F6] mb-2">
                  Seguinos en Instagram
                </h3>
                <p className="text-xs sm:text-sm text-[#9BA3B0] font-sans leading-relaxed">
                  Conocé los nuevos ingresos de vitolas, partidas de colección, videos de encendido y las fechas de nuestros próximos encuentros de degustación.
                </p>
              </div>
            </div>

            <a
              href="https://www.instagram.com/emporio69tabaqueria/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-shrink-0 inline-flex items-center gap-3 pl-7 pr-3 py-3.5 rounded-full bg-gold-gradient text-[#0A111C] font-montserrat font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 hover:shadow-gold-glow hover:scale-[1.03]"
            >
              <span>@emporio69tabaqueria</span>
              <div className="w-8 h-8 rounded-full bg-[#0A111C] text-[#DFB76C] flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </div>
            </a>
          </div>
        </div>

        {/* Cursive Signature Banner */}
        <div className="text-center pt-6 border-t border-[#C89D54]/10">
          <p className="font-cursive text-3xl sm:text-4xl text-[#DFB76C] drop-shadow-sm">
            "El tiempo detenido es el mayor de los tesoros."
          </p>
          <p className="text-[11px] font-montserrat uppercase tracking-[0.3em] text-[#9BA3B0] mt-2">
            Emporio 69 • San Carlos de Bariloche, Patagonia Argentina
          </p>
        </div>

      </div>
    </section>
  );
}
