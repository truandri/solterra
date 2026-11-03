import React, { useState, useMemo } from 'react';
import { 
  Filter, 
  X, 
  Search, 
  SlidersHorizontal, 
  Leaf, 
  Grid3X3, 
  LayoutList, 
  RotateCcw,
  Check
} from 'lucide-react';
import { PRODUCTS, CATEGORIES_CONFIG, CERTIFICATIONS_LIST } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { CategoryType, EcoCertification, AudienceType } from '../types';
import { useCart } from '../context/CartContext';

interface ProductsPageProps {
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ 
  selectedCategory, 
  setSelectedCategory 
}) => {
  const { formatPrice } = useCart();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCerts, setSelectedCerts] = useState<EcoCertification[]>([]);
  const [selectedAudiences, setSelectedAudiences] = useState<AudienceType[]>([]);
  const [maxPrice, setMaxPrice] = useState<number>(350);
  const [sortBy, setSortBy] = useState<'featured' | 'ecoScore' | 'priceAsc' | 'priceDesc' | 'rating'>('featured');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const audiences: AudienceType[] = [
    'Outdoor Explorers',
    'Adventure Travellers',
    'Beach & Coastal',
    'Festival Goers',
    'Everyday Urban',
    'Gift Buyers'
  ];

  const toggleCert = (cert: EcoCertification) => {
    setSelectedCerts((prev) =>
      prev.includes(cert) ? prev.filter((c) => c !== cert) : [...prev, cert]
    );
  };

  const toggleAudience = (aud: AudienceType) => {
    setSelectedAudiences((prev) =>
      prev.includes(aud) ? prev.filter((a) => a !== aud) : [...prev, aud]
    );
  };

  const clearAllFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setSelectedCerts([]);
    setSelectedAudiences([]);
    setMaxPrice(350);
    setSortBy('featured');
  };

  const hasActiveFilters =
    selectedCategory !== 'all' ||
    searchQuery.trim() !== '' ||
    selectedCerts.length > 0 ||
    selectedAudiences.length > 0 ||
    maxPrice < 350;

  // Filter and Sort Pipeline
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      // Price filter
      if (product.price > maxPrice) {
        return false;
      }
      // Certifications filter (AND / match any selected)
      if (selectedCerts.length > 0) {
        const matchesAnyCert = selectedCerts.some((c) => product.certifications.includes(c));
        if (!matchesAnyCert) return false;
      }
      // Audience filter
      if (selectedAudiences.length > 0) {
        const matchesAnyAudience = selectedAudiences.some((a) => product.audience.includes(a));
        if (!matchesAnyAudience) return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesBrand = product.brand.toLowerCase().includes(q);
        const matchesTagline = product.tagline.toLowerCase().includes(q);
        const matchesMaterial = product.materials.some((m) => m.toLowerCase().includes(q));
        if (!matchesName && !matchesBrand && !matchesTagline && !matchesMaterial) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'ecoScore') return b.ecoScore - a.ecoScore;
      if (sortBy === 'priceAsc') return a.price - b.price;
      if (sortBy === 'priceDesc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      // Default: featured (bestsellers first)
      return (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0);
    });
  }, [selectedCategory, maxPrice, selectedCerts, selectedAudiences, searchQuery, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Top Banner / Marketplace Header */}
      <div className="bg-[#023047] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl border border-[#219ebc]/30">
        <div className="max-w-2xl relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffb703]/20 text-[#ffb703] text-xs font-bold uppercase tracking-wider">
            <Leaf className="w-3.5 h-3.5" />
            <span>Radically Audited Sustainability</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-['Outfit']">
            The Solterra Marketplace
          </h1>
          <p className="text-sm sm:text-base text-[#8ecae6] leading-relaxed">
            Every product adheres to the Solterra 5-Pillar Maker Charter: zero toxic petroleum phthalates, repairable hardware, circular trade-in eligibility, and carbon-neutral distribution.
          </p>
        </div>

        {/* Decorative circle */}
        <div className="absolute right-0 top-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-[#219ebc]/20 blur-3xl pointer-events-none"></div>
      </div>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Desktop Sidebar Filters */}
        <aside className="hidden lg:block lg:col-span-3 bg-white rounded-3xl p-6 border border-[#023047]/10 shadow-sm space-y-6 sticky top-28">
          <div className="flex items-center justify-between border-b border-[#023047]/10 pb-4">
            <h3 className="font-extrabold text-base text-[#023047] font-['Outfit'] flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-[#219ebc]" />
              <span>Filters</span>
            </h3>
            {hasActiveFilters && (
              <button
                onClick={clearAllFilters}
                className="text-xs text-[#fb8500] font-bold hover:underline flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset All</span>
              </button>
            )}
          </div>

          {/* Categories Filter */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-[#023047]/60">
              Category
            </label>
            <div className="space-y-1">
              {CATEGORIES_CONFIG.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition-colors flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#023047] text-white shadow-sm'
                        : 'text-[#023047]/80 hover:bg-[#FAF8F5]'
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${isSelected ? 'bg-white/20 text-white' : 'bg-black/5 text-[#023047]/60'}`}>
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Price Range Slider */}
          <div className="space-y-2 pt-4 border-t border-[#023047]/10">
            <div className="flex justify-between items-center text-xs font-bold text-[#023047]">
              <span>Max Price</span>
              <span className="font-mono text-[#fb8500]">{formatPrice(maxPrice)}</span>
            </div>
            <input
              type="range"
              min="30"
              max="350"
              step="5"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-[#fb8500] cursor-pointer h-2 bg-[#023047]/10 rounded-lg"
            />
            <div className="flex justify-between text-[10px] text-[#023047]/50">
              <span>{formatPrice(30)}</span>
              <span>{formatPrice(350)}</span>
            </div>
          </div>

          {/* Eco Certifications Multi-select */}
          <div className="space-y-2.5 pt-4 border-t border-[#023047]/10">
            <label className="text-xs font-bold uppercase tracking-wider text-[#023047]/60">
              Verified Certifications
            </label>
            <div className="space-y-1.5">
              {CERTIFICATIONS_LIST.map((cert) => {
                const active = selectedCerts.includes(cert as EcoCertification);
                return (
                  <label
                    key={cert}
                    className="flex items-center gap-2.5 text-xs text-[#023047] cursor-pointer hover:text-[#219ebc]"
                  >
                    <input
                      type="checkbox"
                      checked={active}
                      onChange={() => toggleCert(cert as EcoCertification)}
                      className="rounded accent-[#023047] w-3.5 h-3.5"
                    />
                    <span>{cert}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Target Audience / Use-Case */}
          <div className="space-y-2.5 pt-4 border-t border-[#023047]/10">
            <label className="text-xs font-bold uppercase tracking-wider text-[#023047]/60">
              Target Activity & Audience
            </label>
            <div className="space-y-1.5">
              {audiences.map((aud) => {
                const active = selectedAudiences.includes(aud);
                return (
                  <label
                    key={aud}
                    className="flex items-center gap-2.5 text-xs text-[#023047] cursor-pointer hover:text-[#219ebc]"
                  >
                    <input
                      type="checkbox"
                      checked={active}
                      onChange={() => toggleAudience(aud)}
                      className="rounded accent-[#023047] w-3.5 h-3.5"
                    />
                    <span>{aud}</span>
                  </label>
                );
              })}
            </div>
          </div>
        </aside>

        {/* Main Products Area */}
        <div className="lg:col-span-9 space-y-6">
          {/* Controls Bar: Search & Sort */}
          <div className="bg-white rounded-2xl p-4 border border-[#023047]/10 shadow-sm flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
            {/* Search within catalog */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#023047]/40 absolute left-3.5 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products by material, brand, or feature..."
                className="w-full pl-9 pr-8 py-2 rounded-xl bg-[#FAF8F5] border border-[#023047]/10 text-xs text-[#023047] focus:outline-none focus:ring-1 focus:ring-[#219ebc]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2.5 text-[#023047]/40 hover:text-[#023047]"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Mobile Filter Toggle & Sort Select */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={() => setIsMobileFilterOpen(true)}
                className="lg:hidden px-3.5 py-2 rounded-xl bg-[#FAF8F5] border border-[#023047]/15 text-xs font-bold text-[#023047] flex items-center gap-1.5"
              >
                <Filter className="w-3.5 h-3.5 text-[#219ebc]" />
                <span>Filters {hasActiveFilters && '•'}</span>
              </button>

              <div className="flex items-center gap-1.5 text-xs">
                <span className="text-[#023047]/60 hidden sm:inline">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-3 py-2 rounded-xl bg-[#FAF8F5] border border-[#023047]/15 text-xs font-semibold text-[#023047] focus:outline-none focus:ring-1 focus:ring-[#219ebc]"
                >
                  <option value="featured">Featured Curated</option>
                  <option value="ecoScore">Highest Eco Score (99-90)</option>
                  <option value="priceAsc">Price: Low to High</option>
                  <option value="priceDesc">Price: High to Low</option>
                  <option value="rating">Customer Rating</option>
                </select>
              </div>
            </div>
          </div>

          {/* Filter Status & Active Chips */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
            <span className="text-[#023047]/70 font-semibold">
              Showing <strong>{filteredProducts.length}</strong> sustainable products
            </span>

            {hasActiveFilters && (
              <div className="flex flex-wrap items-center gap-1.5">
                {selectedCategory !== 'all' && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#023047] text-white text-[11px] font-bold">
                    <span>{CATEGORIES_CONFIG.find((c) => c.id === selectedCategory)?.name}</span>
                    <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedCategory('all')} />
                  </span>
                )}
                {selectedCerts.map((c) => (
                  <span key={c} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#219ebc]/15 text-[#023047] text-[11px] font-semibold border border-[#219ebc]/20">
                    <span>{c}</span>
                    <X className="w-3 h-3 cursor-pointer" onClick={() => toggleCert(c)} />
                  </span>
                ))}
                {selectedAudiences.map((a) => (
                  <span key={a} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#fb8500]/15 text-[#fb8500] text-[11px] font-semibold border border-[#fb8500]/20">
                    <span>{a}</span>
                    <X className="w-3 h-3 cursor-pointer" onClick={() => toggleAudience(a)} />
                  </span>
                ))}
                <button
                  onClick={clearAllFilters}
                  className="text-xs text-red-600 hover:underline font-bold ml-1"
                >
                  Clear all
                </button>
              </div>
            )}
          </div>

          {/* Products Grid */}
          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-[#023047]/10 space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-[#023047]/5 flex items-center justify-center text-[#219ebc] mx-auto">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg text-[#023047] font-['Outfit']">
                No matching eco-gear found
              </h3>
              <p className="text-xs text-[#023047]/60 max-w-sm mx-auto">
                Try loosening your filters or searching for alternative materials like bio-acetate, upcycled sailcloth, or organic hemp.
              </p>
              <button
                onClick={clearAllFilters}
                className="px-6 py-2.5 rounded-xl bg-[#023047] text-white text-xs font-bold hover:bg-[#219ebc] transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            onClick={() => setIsMobileFilterOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          ></div>
          <div className="relative w-full max-w-xs bg-[#FAF8F5] h-full shadow-2xl p-6 overflow-y-auto space-y-6 z-10 animate-slideLeft">
            <div className="flex items-center justify-between border-b border-[#023047]/10 pb-4">
              <h3 className="font-bold text-base text-[#023047]">Filters & Categories</h3>
              <button onClick={() => setIsMobileFilterOpen(false)}>
                <X className="w-5 h-5 text-[#023047]" />
              </button>
            </div>

            {/* Mobile Categories */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-[#023047]/60">Categories</label>
              <div className="space-y-1">
                {CATEGORIES_CONFIG.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      setIsMobileFilterOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold flex justify-between ${
                      selectedCategory === cat.id
                        ? 'bg-[#023047] text-white'
                        : 'text-[#023047] hover:bg-black/5'
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span>{cat.count}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Price */}
            <div className="space-y-2 pt-4 border-t border-[#023047]/10">
              <div className="flex justify-between text-xs font-bold text-[#023047]">
                <span>Max Price</span>
                <span>{formatPrice(maxPrice)}</span>
              </div>
              <input
                type="range"
                min="30"
                max="350"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[#fb8500]"
              />
            </div>

            {/* Mobile Done button */}
            <button
              onClick={() => setIsMobileFilterOpen(false)}
              className="w-full py-3 rounded-xl bg-[#023047] text-white text-xs font-bold"
            >
              Show {filteredProducts.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
