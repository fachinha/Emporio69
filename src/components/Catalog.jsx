import React, { useState, useMemo } from 'react';
import { Search, MessageCircle, Wine, ChevronDown } from 'lucide-react';
import { CATEGORIES, WINE_VARIETIES, PRODUCTS } from '../data/catalogData';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [selectedWineVariety, setSelectedWineVariety] = useState('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(15);

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    setVisibleCount(15);
    if (catId !== 'vinos') {
      setSelectedWineVariety('todos');
    }
  };

  const handleWineVarietyChange = (varId) => {
    setSelectedWineVariety(varId);
    setVisibleCount(15);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setVisibleCount(15);
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCategory = activeCategory === 'todos' || item.category === activeCategory;
      const matchesWineVariety = 
        activeCategory !== 'vinos' || 
        selectedWineVariety === 'todos' || 
        item.variety === selectedWineVariety;
      const matchesSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.aroma.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.variety && item.variety.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.tag && item.tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesWineVariety && matchesSearch;
    });
  }, [activeCategory, selectedWineVariety, searchQuery]);

  const displayedProducts = useMemo(() => {
    if (searchQuery.trim().length > 0) {
      return filteredProducts;
    }
    return filteredProducts.slice(0, visibleCount);
  }, [filteredProducts, visibleCount, searchQuery]);

  const hasMore = searchQuery.trim().length === 0 && filteredProducts.length > visibleCount;

  return (
    <section id="catalogo" className="relative py-24 sm:py-28 bg-[#0E1726]/60 border-t border-[#C89D54]/15">
      
      {/* Background accents */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-[#C89D54]/5 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#F4F4F6] tracking-tight mb-4">
            Catálogo <span className="text-gold-gradient">Seleccionado</span>
          </h2>

          <p className="text-sm sm:text-base text-[#9BA3B0] font-sans leading-relaxed">
            Habanos de las vegas cubanas más veneradas, destilados de guarda, vinos de autor, tabacos aromáticos y piezas de precisión orfebril. Conservación óptima garantizada.
          </p>
        </div>

        {/* Categories Control Hub (Visible Grid/Wrap without hidden horizontal scrolling) */}
        <div className="my-8 p-4 sm:p-6 rounded-3xl bg-[#111C2D]/90 border border-[#C89D54]/25 shadow-[0_16px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl flex flex-col items-center">
          
          {/* Main Category Buttons (Clean Wrap, 100% visible) */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 w-full">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-4 sm:px-5 py-2.5 rounded-full font-montserrat text-xs tracking-wider uppercase font-semibold transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? 'bg-gold-gradient text-[#0A111C] shadow-gold-glow scale-[1.03] font-bold'
                      : 'bg-[#0A111C]/70 text-[#9BA3B0] border border-[#C89D54]/20 hover:border-[#DFB76C]/60 hover:text-white hover:bg-[#0A111C]'
                  }`}
                >
                  {cat.id === 'vinos' && <Wine className="w-3.5 h-3.5" />}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Expandable Wine Varieties Section (Appears when Vinos is selected) */}
          {activeCategory === 'vinos' && (
            <div className="w-full pt-5 mt-5 border-t border-[#C89D54]/20 flex flex-col items-center gap-3 animate-[heroEntranceFadeUp_0.4s_ease-out]">
              <div className="flex items-center gap-2 text-xs font-montserrat text-[#DFB76C] uppercase tracking-[0.2em] font-semibold">
                <Wine className="w-4 h-4 text-[#DFB76C]" />
                <span>Varietales en Cava: Malbec, Cabernet, Franc & Pinot Noir</span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
                {WINE_VARIETIES.map((variety) => {
                  const isVarActive = selectedWineVariety === variety.id;
                  return (
                    <button
                      key={variety.id}
                      onClick={() => handleWineVarietyChange(variety.id)}
                      className={`px-4 py-1.5 rounded-full text-xs font-montserrat tracking-wider uppercase transition-all duration-300 ${
                        isVarActive
                          ? 'bg-[#DFB76C] text-[#0A111C] font-bold shadow-[0_0_15px_rgba(223,183,108,0.4)] scale-105'
                          : 'bg-[#0A111C]/80 text-[#9BA3B0] border border-[#C89D54]/25 hover:border-[#DFB76C]/60 hover:text-white'
                      }`}
                    >
                      {variety.label}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Search Bar Placed Below the Categories Selector */}
          <div className="mt-5 w-full max-w-lg relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C89D54]" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Buscar vitola, etiqueta, cepa o aroma..."
              className="w-full pl-11 pr-10 py-3 rounded-full bg-[#0A111C]/90 border border-[#C89D54]/30 text-xs sm:text-sm text-[#F4F4F6] placeholder-[#9BA3B0]/60 focus:outline-none focus:border-[#DFB76C] focus:ring-1 focus:ring-[#DFB76C] transition-all font-sans shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => { setSearchQuery(''); setVisibleCount(15); }}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#9BA3B0] hover:text-white px-2 py-0.5 rounded-full bg-white/10"
              >
                ✕
              </button>
            )}
          </div>

        </div>


        {/* Products Grid */}
        {displayedProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-6">
              {displayedProducts.map((product) => (
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

            {/* Load More Button */}
            {hasMore && (
              <div className="mt-14 flex justify-center">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 15)}
                  className="btn-gold-kiur group cursor-pointer flex items-center gap-3.5 tracking-wider"
                >
                  <span>Ver Más Productos</span>
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#0A111C] border border-[#C89D54]/50 text-[#DFB76C] font-semibold tracking-normal shadow-inner">
                    +{filteredProducts.length - visibleCount} restantes
                  </span>
                  <div className="btn-icon-wrapper btn-icon-down w-7 h-7 rounded-full bg-[#0A111C] text-[#DFB76C] flex items-center justify-center transition-transform duration-300 group-hover:translate-y-1">
                    <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16 p-8 rounded-2xl glass-card">
            <p className="font-serif text-xl text-[#F4F4F6] mb-2">No se encontraron productos coincidentes</p>
            <p className="text-xs text-[#9BA3B0] font-sans mb-4">Intenta ajustar tu búsqueda o explorar otra categoría.</p>
            <button
              onClick={() => { setActiveCategory('todos'); setSelectedWineVariety('todos'); setSearchQuery(''); setVisibleCount(15); }}
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

