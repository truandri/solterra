import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  Tag, 
  Bookmark, 
  Share2, 
  Check, 
  Compass, 
  ShoppingBag,
  ArrowRight
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';

export const ArticleReaderModal: React.FC = () => {
  const { 
    selectedArticle, 
    setSelectedArticle, 
    setSelectedProduct, 
    formatPrice 
  } = useCart();

  const [bookmarked, setBookmarked] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!selectedArticle) return null;

  const relatedProducts = selectedArticle.relatedProductIds
    ? PRODUCTS.filter((p) => selectedArticle.relatedProductIds?.includes(p.id))
    : [];

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div 
        onClick={() => setSelectedArticle(null)}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      ></div>

      <div className="relative bg-white rounded-3xl max-w-3xl w-full shadow-2xl border border-[#023047]/10 overflow-hidden z-10 max-h-[92vh] flex flex-col my-auto animate-scaleUp">
        {/* Top Floating Controls */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#023047]/10 bg-[#FAF8F5]">
          <span className="px-3 py-1 rounded-full bg-[#fb8500]/15 text-[#fb8500] text-xs font-bold uppercase tracking-wider">
            {selectedArticle.category}
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setBookmarked(!bookmarked)}
              className={`p-2 rounded-xl transition-colors ${
                bookmarked
                  ? 'bg-[#023047] text-[#ffb703]'
                  : 'text-[#023047]/70 hover:bg-black/5 hover:text-[#023047]'
              }`}
              title="Bookmark story"
            >
              <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={handleShare}
              className="p-2 rounded-xl text-[#023047]/70 hover:bg-black/5 hover:text-[#023047] transition-colors"
              title="Share story"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setSelectedArticle(null)}
              className="p-2 rounded-xl text-[#023047]/70 hover:bg-black/5 hover:text-[#023047] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Story Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6">
          {/* Title & Metadata */}
          <div className="space-y-4">
            <h1 className="text-2xl sm:text-4xl font-black text-[#023047] font-['Outfit'] leading-tight">
              {selectedArticle.title}
            </h1>

            <div className="flex flex-wrap items-center justify-between gap-4 py-3 border-y border-[#023047]/10">
              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={selectedArticle.author.avatar}
                  alt={selectedArticle.author.name}
                  className="w-10 h-10 rounded-full object-cover border border-[#219ebc]"
                />
                <div>
                  <div className="text-xs font-bold text-[#023047]">
                    {selectedArticle.author.name}
                  </div>
                  <div className="text-[11px] text-[#023047]/60">
                    {selectedArticle.author.role}
                  </div>
                </div>
              </div>

              {/* Date & Read Time */}
              <div className="flex items-center gap-4 text-xs text-[#023047]/60">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {selectedArticle.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {selectedArticle.readTime}
                </span>
              </div>
            </div>
          </div>

          {/* Cover Image */}
          <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-[#F4EFEA]">
            <img
              src={selectedArticle.coverImage}
              alt={selectedArticle.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Key Takeaways Box */}
          <div className="bg-[#FAF8F5] p-5 sm:p-6 rounded-2xl border-l-4 border-[#219ebc] space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#023047] flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#219ebc]" />
              Explorer Key Takeaways
            </h4>
            <ul className="space-y-1.5 text-xs text-[#023047]/80">
              {selectedArticle.keyTakeaways.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#219ebc] font-bold">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Story Body */}
          <div className="prose max-w-none text-sm text-[#023047]/85 leading-relaxed space-y-4">
            {selectedArticle.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={idx} className="text-lg font-bold text-[#023047] pt-4 font-['Outfit']">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              return <p key={idx}>{paragraph}</p>;
            })}
          </div>

          {/* Tags */}
          <div className="pt-4 border-t border-[#023047]/10 flex flex-wrap gap-2 items-center">
            <Tag className="w-3.5 h-3.5 text-[#023047]/50" />
            {selectedArticle.tags.map((t) => (
              <span
                key={t}
                className="text-xs px-2.5 py-1 rounded-lg bg-[#FAF8F5] text-[#023047]/70 font-medium"
              >
                #{t}
              </span>
            ))}
          </div>

          {/* Featured Gear in this Guide */}
          {relatedProducts.length > 0 && (
            <div className="pt-6 border-t border-[#023047]/10 space-y-3">
              <h4 className="text-sm font-bold text-[#023047] uppercase tracking-wider">
                Tested Gear Featured in this Story:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {relatedProducts.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => {
                      setSelectedArticle(null);
                      setSelectedProduct(p);
                    }}
                    className="p-3 rounded-2xl bg-[#FAF8F5] border border-[#023047]/10 hover:border-[#219ebc] flex items-center justify-between cursor-pointer group transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={p.images[0]}
                        alt={p.name}
                        className="w-12 h-12 rounded-xl object-cover"
                      />
                      <div>
                        <div className="text-xs font-bold text-[#023047] group-hover:text-[#219ebc] line-clamp-1">
                          {p.name}
                        </div>
                        <div className="text-[11px] text-[#023047]/60">
                          {formatPrice(p.price)} • {p.ecoScore}/100 Eco Score
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#023047]/40 group-hover:text-[#219ebc] transition-colors shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
