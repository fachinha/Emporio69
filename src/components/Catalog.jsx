import React, { useState, useMemo } from 'react';
import { Search, MessageCircle } from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../data/catalogData';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCategory = activeCategory === 'todos' || item.category === activeCategory;
      const matchesSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.aroma.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="catalogo" className="relative py-24 sm:py-28 bg-[#0E1726]/60 border-t border-[#C89D54]/15">
      
      {/* Background accents */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-[#C89D54]/5 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Clean Minimalist without badge) */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#F4F4F6] tracking-tight mb-4">
            Catálogo <span className="text-gold-gradient">Seleccionado</span>
          </h2>

          <p className="text-sm sm:text-base text-[#9BA3B0] font-sans leading-relaxed">
            Habanos de las vegas cubanas más veneradas, destilados de guarda, tabacos aromáticos y piezas de precisión orfebril. Cada producto cuenta con garantía de origen y conservación óptima en nuestro humidor de cedro.
          </p>
        </div>

        {/* Floating Category Selector Bar & Search (Generously Spaced & Polished) */}
        <div className="my-10 p-2 sm:p-3 rounded-2xl bg-[#111C2D]/90 border border-[#C89D54]/25 shadow-[0_12px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none px-1">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex-shrink-0 px-5 py-2.5 rounded-xl font-montserrat text-xs tracking-wider uppercase font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-gold-gradient text-[#0A111C] shadow-gold-glow scale-[1.02]'
                      : 'bg-[#0A111C]/60 text-[#9BA3B0] border border-white/5 hover:border-[#DFB76C]/40 hover:text-white hover:bg-[#0A111C]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72 px-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C89D54]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar vitola, origen, aroma..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0A111C]/90 border border-[#C89D54]/30 text-xs text-[#F4F4F6] placeholder-[#9BA3B0]/60 focus:outline-none focus:border-[#DFB76C] focus:ring-1 focus:ring-[#DFB76C] transition-all font-sans"
            />
          </div>

        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group relative rounded-2xl overflow-hidden glass-card glass-card-hover flex flex-col justify-between"
              >
                {/* Top Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0A111C]/90">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  />
                  
                  {/* Subtle Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111C2D] via-transparent to-transparent"></div>

                  {/* Origin Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A111C]/85 backdrop-blur-md border border-[#C89D54]/40 shadow-lg text-[11px] font-montserrat text-[#DFB76C] font-semibold">
                    <span>{product.originFlag}</span>
                    <span>{product.origin}</span>
                  </div>

                  {/* Tag / Category Badge */}
                  {product.tag && (
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-[#C89D54]/20 backdrop-blur-md border border-[#C89D54]/40 text-[10px] font-montserrat uppercase tracking-wider text-[#F4F4F6]">
                      {product.tag}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-[11px] font-montserrat uppercase tracking-[0.2em] text-[#C89D54] mb-1">
                      {product.vitola}
                    </p>
                    
                    <h3 className="font-serif text-2xl font-bold text-[#F4F4F6] group-hover:text-[#DFB76C] transition-colors mb-3">
                      {product.name}
                    </h3>

                    <div className="p-3 rounded-xl bg-[#0A111C]/60 border border-white/5 mb-6">
                      <p className="text-xs text-[#9BA3B0] font-sans leading-relaxed">
                        <strong className="text-[#DFB76C] font-normal">Notas: </strong>
                        {product.aroma}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer: Price/Tag & WhatsApp CTA */}
                  <div className="pt-4 border-t border-[#C89D54]/15 flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-montserrat uppercase tracking-wider text-[#9BA3B0] block">
                        Disponibilidad
                      </span>
                      <span className="text-xs font-semibold text-[#DFB76C]">
                        {product.price}
                      </span>
                    </div>

                    <a
                      href={buildWhatsAppUrl(product.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C89D54]/15 hover:bg-gold-gradient text-[#DFB76C] hover:text-[#0A111C] border border-[#C89D54]/40 hover:border-transparent font-montserrat font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-sm hover:shadow-gold-glow"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Consultar</span>
                    </a>
                  </div>

                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 p-8 rounded-2xl glass-card">
            <p className="font-serif text-xl text-[#F4F4F6] mb-2">No se encontraron productos coincidentes</p>
            <p className="text-xs text-[#9BA3B0] font-sans mb-4">Intenta ajustar tu búsqueda o explorar otra categoría.</p>
            <button
              onClick={() => { setActiveCategory('todos'); setSearchQuery(''); }}
              className="px-5 py-2 text-xs font-montserrat uppercase rounded-lg bg-gold-gradient text-[#0A111C] font-bold"
            >
              Ver Todo el Catálogo
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

