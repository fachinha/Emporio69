import React from 'react';
import { Flame, Shield, HeartHandshake, Sparkles, Feather } from 'lucide-react';

export default function BrandStory() {
  const steps = [
    {
      num: '01',
      title: 'El Reposo en Cedro',
      desc: 'Nuestros habanos y puros descansan en humidores calibrados milimétricamente al 70% de humedad relativa y 18°C, preservando la elasticidad del capote y los aceites esenciales de la tripa.'
    },
    {
      num: '02',
      title: 'El Corte de Precisión',
      desc: 'Cada vitola exige una apertura exacta. Una guillotina doble afilada a nivel quirúrgico o un punzonador limpio garantiza un tiro balanceado, frío y sin desgarros.'
    },
    {
      num: '03',
      title: 'El Fuego Noble',
      desc: 'Rechazamos las combustiones químicas. Encendemos a fuego indirecto con viruta de cedro español o torch de llama azul pura, tostándo el pie con devoción y calma.'
    },
    {
      num: '04',
      title: 'La Pausa Compartida',
      desc: 'Fumar un habano no es consumir: es crear un santuario en el tiempo. El maridaje con destilados nobles corona un ritual que ennoblece la charla y el disfrute.'
    }
  ];

  return (
    <section id="ritual" className="relative py-28 bg-[#0E1726]/40 border-t border-[#C89D54]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C89D54]/30 bg-[#111C2D]/80 backdrop-blur-md mb-4">
            <Feather className="w-3.5 h-3.5 text-[#DFB76C]" />
            <span className="font-montserrat text-xs uppercase tracking-[0.25em] text-[#DFB76C] font-semibold">
              Manifiesto del Fumador
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#F4F4F6] tracking-tight mb-6">
            El Ritual del <span className="text-gold-gradient">Buen Vivir</span>
          </h2>

          <p className="text-base text-[#9BA3B0] font-sans leading-relaxed">
            Nacidos al pie de los Andes patagónicos, creemos que los mejores placeres del mundo no se apresuran. Se contemplan, se huelen y se disfrutan en soledad cómplice o con amigos leales.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step) => (
            <div 
              key={step.num}
              className="p-8 rounded-2xl glass-card glass-card-hover border-gold-subtle flex flex-col justify-between"
            >
              <div>
                <span className="font-serif text-4xl text-[#DFB76C]/40 font-bold block mb-4">
                  {step.num}
                </span>
                <h3 className="font-serif text-xl font-bold text-[#F4F4F6] mb-3">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#9BA3B0] font-sans leading-relaxed">
                  {step.desc}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DFB76C]"></span>
                <span className="text-[10px] font-montserrat uppercase tracking-widest text-[#9BA3B0]">
                  Cultura Emporio 69
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Cursive Signature Banner */}
        <div className="text-center pt-8 border-t border-[#C89D54]/10">
          <p className="font-cursive text-3xl sm:text-4xl text-[#DFB76C] drop-shadow-sm">
            "El tiempo detenido es el mayor de los tesoros."
          </p>
          <p className="text-[11px] font-montserrat uppercase tracking-[0.3em] text-[#9BA3B0] mt-2">
            Emporio 69 • Patagonia Argentina
          </p>
        </div>

      </div>
    </section>
  );
}
