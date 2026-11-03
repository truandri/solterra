import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Leaf, Compass, BookOpen } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';
import { ARTICLES } from '../data/articles';

interface QuickSearchModalProps {
  onNavigateTab: (tab: string) => void;
}

export const QuickSearchModal: React.FC<QuickSearchModalProps> = ({ onNavigateTab }) => {
  const { 
    isSearchOpen, 
    setIsSearchOpen, 
    setSelectedProduct, 
    setSelectedArticle, 
    formatPrice 
  } = useCart();

  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isSearchOpen]);

  // Keyboard shortcut ⌘K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setIsSearchOpen]);

  if (!isSearchOpen) return null;

  const trimmed = query.trim().toLowerCase();

  const filteredProducts = trimmed
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(trimmed) ||
          p.brand.toLowerCase().includes(trimmed) ||
          p.materials.some((m) => m.toLowerCase().includes(trimmed)) ||
          p.ecoBadges.some((b) => b.toLowerCase().includes(trimmed)) ||
          p.tagline.toLowerCase().includes(trimmed)
      ).slice(0, 5)
    : [];

  const filteredArticles = trimmed
    ? ARTICLES.filter(
        (a) =>
          a.title.toLowerCase().includes(trimmed) ||
          a.tags.some((t) => t.toLowerCase().includes(trimmed)) ||
          a.category.toLowerCase().includes(trimmed)
      ).slice(0, 3)
    : [];

  const handleProductSelect = (p: typeof PRODUCTS[0]) => {
    setIsSearchOpen(false);
    setSelectedProduct(p);
  };

  const handleArticleSelect = (a: typeof ARTICLES[0]) => {
    setIsSearchOpen(false);
    setSelectedArticle(a);
  };

  const popularSearches = [
    'Bio-Acetate Eyewear',
    'Upcycled Sailcloth Duffel',
    'Reef-Safe Sunscreen',
    'Solar Camp Lantern',
    'Merino Wool Travel',
    'Recycled Ghost Net'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6">
      <div 
        onClick={() => setIsSearchOpen(false)}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      ></div>

      <div className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-[#023047]/10 overflow-hidden z-10 animate-scaleUp">
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-[#023047]/10 flex items-center gap-3 bg-[#FAF8F5]">
          <Search className="w-5 h-5 text-[#219ebc]" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search sustainable gear, bio-acetate eyewear, trail stories, or materials..."
            className="flex-1 bg-transparent text-sm sm:text-base text-[#023047] placeholder-[#023047]/40 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-md text-[#023047]/40 hover:text-[#023047]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <span className="hidden sm:inline-block text-[10px] font-mono px-2 py-1 bg-black/5 rounded text-[#023047]/60">
            ESC
          </span>
        </div>

        {/* Results / Suggestions Container */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-6">
          {trimmed ? (
            <div className="space-y-6">
              {/* Products Section */}
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#219ebc] mb-3 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Marketplace Products ({filteredProducts.length})</span>
                </div>
                {filteredProducts.length === 0 ? (
                  <p className="text-xs text-[#023047]/50 italic">No matching gear found.</p>
                ) : (
                  <div className="space-y-2">
                    {filteredProducts.map((p) => (
                      <div
                        key={p.id}
                        onClick={() => handleProductSelect(p)}
                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#FAF8F5] transition-colors cursor-pointer group"
                      >
                        <img
                          src={p.images[0]}
                          alt={p.name}
                          className="w-12 h-12 rounded-lg object-cover bg-[#F4EFEA]"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs font-bold text-[#023047] group-hover:text-[#219ebc] truncate">
                            {p.name}
                          </h4>
                          <p className="text-[11px] text-[#023047]/60 truncate">
                            {p.brand} • {p.ecoBadges[0]}
                          </p>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-bold text-[#023047]">
                            {formatPrice(p.price)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Articles Section */}
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#fb8500] mb-3 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Journal Stories & Guides ({filteredArticles.length})</span>
                </div>
                {filteredArticles.length === 0 ? (
                  <p className="text-xs text-[#023047]/50 italic">No matching guides found.</p>
                ) : (
                  <div className="space-y-2">
                    {filteredArticles.map((a) => (
                      <div
                        key={a.id}
                        onClick={() => handleArticleSelect(a)}
                        className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#FAF8F5] transition-colors cursor-pointer group"
                      >
                        <div>
                          <h4 className="text-xs font-bold text-[#023047] group-hover:text-[#fb8500]">
                            {a.title}
                          </h4>
                          <span className="text-[10px] text-[#023047]/50">
                            {a.category} • {a.readTime}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#023047]/40 group-hover:text-[#fb8500] transition-colors" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* Default Popular Trends */
            <div className="space-y-4">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#023047]/60 mb-2.5">
                  Trending Ethical Searches
                </div>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="px-3 py-1.5 rounded-xl bg-[#FAF8F5] hover:bg-[#219ebc]/15 text-xs font-medium text-[#023047] border border-[#023047]/10 transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-[#8ecae6]/15 rounded-2xl border border-[#219ebc]/20 text-xs text-[#023047] flex items-center gap-3">
                <Leaf className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>
                  Every product listed on Solterra is audited for non-toxic materials, fair worker compensation, and zero single-use plastic packaging.
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
