import React, { useState } from 'react';
import { 
  X, 
  Heart, 
  ShoppingBag, 
  Check, 
  Star, 
  Leaf, 
  ShieldCheck, 
  RotateCcw, 
  Truck, 
  Droplet, 
  Trees, 
  Wind,
  Share2
} from 'lucide-react';
import { useCart } from '../context/CartContext';

export const ProductDetailModal: React.FC = () => {
  const { 
    selectedProduct, 
    setSelectedProduct, 
    addToCart, 
    formatPrice, 
    toggleWishlist, 
    isInWishlist 
  } = useCart();

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | undefined>(
    selectedProduct?.colors?.[0]?.name
  );
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'overview' | 'materials' | 'impact' | 'care'>('overview');
  const [copiedLink, setCopiedLink] = useState(false);
  const [added, setAdded] = useState(false);

  if (!selectedProduct) return null;

  const isWishlisted = isInWishlist(selectedProduct.id);

  const handleAddToCart = () => {
    addToCart(selectedProduct, quantity, selectedColor);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={() => setSelectedProduct(null)} 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      ></div>

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-3xl max-w-4xl w-full shadow-2xl border border-[#023047]/10 overflow-hidden z-10 max-h-[92vh] flex flex-col my-auto animate-scaleUp">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#023047]/10 bg-[#FAF8F5]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#219ebc]">
              {selectedProduct.brand}
            </span>
            <span className="text-[#023047]/30">•</span>
            <span className="text-xs text-[#023047]/60">{selectedProduct.brandLocation}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-xl text-[#023047]/70 hover:text-[#023047] hover:bg-black/5 transition-colors"
              title="Share link"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setSelectedProduct(null)}
              className="p-2 rounded-xl text-[#023047]/70 hover:text-[#023047] hover:bg-black/5 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left: Gallery Stage */}
            <div className="space-y-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#F4EFEA] border border-[#023047]/10">
                <img
                  src={selectedProduct.images[activeImageIndex] || selectedProduct.images[0]}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-[#8ecae6] text-[#023047] shadow-sm">
                    <Leaf className="w-3.5 h-3.5" />
                    <span>{selectedProduct.ecoScore}/100 Solterra Score</span>
                  </span>
                </div>
              </div>

              {selectedProduct.images.length > 1 && (
                <div className="flex gap-3">
                  {selectedProduct.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                        activeImageIndex === idx
                          ? 'border-[#023047] ring-2 ring-[#023047]/20'
                          : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Eco Impact Metric Cards */}
              <div className="grid grid-cols-2 gap-2.5 pt-2">
                <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#023047]/10 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#219ebc]/15 text-[#219ebc] flex items-center justify-center shrink-0">
                    <Droplet className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#023047]">
                      {selectedProduct.impactMetrics.plasticBottlesSaved} Bottles
                    </div>
                    <div className="text-[10px] text-[#023047]/60">Plastic Diverted</div>
                  </div>
                </div>

                <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#023047]/10 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#fb8500]/15 text-[#fb8500] flex items-center justify-center shrink-0">
                    <Wind className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#023047]">
                      {selectedProduct.impactMetrics.co2SavedKg} kg CO₂e
                    </div>
                    <div className="text-[10px] text-[#023047]/60">Emissions Prevented</div>
                  </div>
                </div>

                <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#023047]/10 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/15 text-emerald-700 flex items-center justify-center shrink-0">
                    <Trees className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#023047]">
                      {selectedProduct.impactMetrics.treesPlanted} Native Trees
                    </div>
                    <div className="text-[10px] text-[#023047]/60">Planted per Purchase</div>
                  </div>
                </div>

                <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#023047]/10 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#8ecae6]/30 text-[#023047] flex items-center justify-center shrink-0">
                    <Droplet className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#023047]">
                      {selectedProduct.impactMetrics.waterSavedLiters} L Water
                    </div>
                    <div className="text-[10px] text-[#023047]/60">Conserved in Production</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Info & Purchase Controls */}
            <div className="flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                {/* Title & Ratings */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#023047] font-['Outfit']">
                    {selectedProduct.name}
                  </h2>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center gap-1 text-sm font-bold text-[#023047]">
                      <Star className="w-4 h-4 fill-[#ffb703] text-[#ffb703]" />
                      <span>{selectedProduct.rating}</span>
                      <span className="text-xs font-normal text-[#023047]/60">
                        ({selectedProduct.reviewsCount} verified reviews)
                      </span>
                    </div>
                    <span className="text-[#023047]/20">•</span>
                    <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      In Stock & Ready to Ship
                    </span>
                  </div>
                </div>

                {/* Price Display */}
                <div className="flex items-baseline gap-3 py-1">
                  <span className="text-3xl font-black text-[#023047] font-['Outfit']">
                    {formatPrice(selectedProduct.price)}
                  </span>
                  {selectedProduct.originalPrice && (
                    <span className="text-base text-[#023047]/40 line-through">
                      {formatPrice(selectedProduct.originalPrice)}
                    </span>
                  )}
                  <span className="text-xs text-[#219ebc] font-semibold bg-[#219ebc]/10 px-2 py-0.5 rounded">
                    Includes Carbon Offset & 1% Wild Donation
                  </span>
                </div>

                <p className="text-sm text-[#023047]/80 leading-relaxed">
                  {selectedProduct.description}
                </p>

                {/* Color Variants */}
                {selectedProduct.colors && selectedProduct.colors.length > 0 && (
                  <div className="space-y-2 pt-1">
                    <label className="text-xs font-bold text-[#023047] uppercase tracking-wider">
                      Color Variant: <span className="text-[#fb8500] font-semibold">{selectedColor}</span>
                    </label>
                    <div className="flex gap-2">
                      {selectedProduct.colors.map((c) => (
                        <button
                          key={c.name}
                          onClick={() => setSelectedColor(c.name)}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
                            selectedColor === c.name
                              ? 'border-[#023047] bg-[#023047] text-white shadow-sm'
                              : 'border-[#023047]/20 bg-white text-[#023047] hover:border-[#023047]'
                          }`}
                        >
                          <span
                            className="w-3.5 h-3.5 rounded-full border border-white/40"
                            style={{ backgroundColor: c.hex }}
                          ></span>
                          <span>{c.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Eco Certification Badges */}
                <div className="pt-2">
                  <label className="text-xs font-bold text-[#023047]/60 uppercase tracking-wider block mb-2">
                    Verified Sustainability Credentials
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProduct.certifications.map((cert) => (
                      <span
                        key={cert}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[#219ebc]/10 text-[#023047] border border-[#219ebc]/20"
                      >
                        ✓ {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quantity & Action Buttons */}
              <div className="space-y-4 pt-4 border-t border-[#023047]/10">
                <div className="flex items-center gap-3">
                  {/* Quantity selector */}
                  <div className="flex items-center border border-[#023047]/20 rounded-xl bg-white p-1">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-8 h-8 rounded-lg hover:bg-[#FAF8F5] text-[#023047] font-bold flex items-center justify-center transition-colors"
                    >
                      -
                    </button>
                    <span className="w-10 text-center font-bold text-sm text-[#023047]">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-8 h-8 rounded-lg hover:bg-[#FAF8F5] text-[#023047] font-bold flex items-center justify-center transition-colors"
                    >
                      +
                    </button>
                  </div>

                  {/* Add to Cart button */}
                  <button
                    onClick={handleAddToCart}
                    disabled={added}
                    className={`flex-1 py-3.5 px-6 rounded-xl font-bold text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2 ${
                      added
                        ? 'bg-emerald-600 text-white'
                        : 'bg-[#023047] hover:bg-[#219ebc] text-white hover:shadow-lg'
                    }`}
                  >
                    {added ? (
                      <>
                        <Check className="w-5 h-5 text-white" />
                        <span>Added to Explorer Cart!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-5 h-5 text-[#ffb703]" />
                        <span>Add to Cart • {formatPrice(selectedProduct.price * quantity)}</span>
                      </>
                    )}
                  </button>

                  {/* Wishlist toggle */}
                  <button
                    onClick={() => toggleWishlist(selectedProduct)}
                    className={`p-3.5 rounded-xl border transition-all ${
                      isWishlisted
                        ? 'border-[#fb8500] bg-[#fb8500] text-white'
                        : 'border-[#023047]/20 bg-white text-[#023047] hover:border-[#fb8500] hover:text-[#fb8500]'
                    }`}
                    title={isWishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
                  >
                    <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                  </button>
                </div>

                {/* Delivery & Assurance Guarantees */}
                <div className="grid grid-cols-3 gap-2 text-center text-[11px] text-[#023047]/70 pt-2">
                  <div className="flex flex-col items-center gap-1 p-2 rounded-xl bg-[#FAF8F5]">
                    <Truck className="w-4 h-4 text-[#219ebc]" />
                    <span>Free Shipping &gt; $80</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 p-2 rounded-xl bg-[#FAF8F5]">
                    <RotateCcw className="w-4 h-4 text-[#fb8500]" />
                    <span>30-Day Free Returns</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 p-2 rounded-xl bg-[#FAF8F5]">
                    <ShieldCheck className="w-4 h-4 text-[#ffb703]" />
                    <span>Solterra Loop Warranty</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Deep Tabs Section */}
          <div className="pt-6 border-t border-[#023047]/10">
            <div className="flex border-b border-[#023047]/10 space-x-6 text-sm font-bold">
              <button
                onClick={() => setActiveTab('overview')}
                className={`pb-3 relative transition-colors ${
                  activeTab === 'overview'
                    ? 'text-[#023047] border-b-2 border-[#fb8500]'
                    : 'text-[#023047]/60 hover:text-[#023047]'
                }`}
              >
                Features & Design
              </button>
              <button
                onClick={() => setActiveTab('materials')}
                className={`pb-3 relative transition-colors ${
                  activeTab === 'materials'
                    ? 'text-[#023047] border-b-2 border-[#fb8500]'
                    : 'text-[#023047]/60 hover:text-[#023047]'
                }`}
              >
                Materials & Provenance
              </button>
              <button
                onClick={() => setActiveTab('care')}
                className={`pb-3 relative transition-colors ${
                  activeTab === 'care'
                    ? 'text-[#023047] border-b-2 border-[#fb8500]'
                    : 'text-[#023047]/60 hover:text-[#023047]'
                }`}
              >
                Care & Longevity
              </button>
              <button
                onClick={() => setActiveTab('impact')}
                className={`pb-3 relative transition-colors ${
                  activeTab === 'impact'
                    ? 'text-[#023047] border-b-2 border-[#fb8500]'
                    : 'text-[#023047]/60 hover:text-[#023047]'
                }`}
              >
                The Maker’s Story
              </button>
            </div>

            <div className="py-6 text-sm text-[#023047]/80 leading-relaxed">
              {activeTab === 'overview' && (
                <div className="space-y-4">
                  <h4 className="font-bold text-[#023047] text-base">Key Technical Specifications:</h4>
                  <ul className="space-y-2">
                    {selectedProduct.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#219ebc] mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 'materials' && (
                <div className="space-y-4">
                  <h4 className="font-bold text-[#023047] text-base">Ethically Audited Materials:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProduct.materials.map((mat, idx) => (
                      <div key={idx} className="p-3 bg-[#FAF8F5] rounded-xl border border-[#023047]/10 flex items-center gap-2.5">
                        <Leaf className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span className="font-medium text-xs text-[#023047]">{mat}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-[#023047]/60 pt-2">
                    Every batch is certified non-toxic and tested against chemical leachate in freshwater and marine environments.
                  </p>
                </div>
              )}

              {activeTab === 'care' && (
                <div className="space-y-3 bg-[#FAF8F5] p-5 rounded-2xl border border-[#023047]/10">
                  <h4 className="font-bold text-[#023047] text-base flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#fb8500]" />
                    Product Longevity & Care Instructions
                  </h4>
                  <p>{selectedProduct.careGuide}</p>
                  <div className="p-3 bg-white rounded-xl text-xs text-[#023047]/70 border border-[#023047]/10">
                    <strong>Solterra Loop Guarantee:</strong> When this item reaches the end of its life, return it to any Solterra hub for a $20 credit. We will disassemble and recycle or repair it in our circular loop.
                  </div>
                </div>
              )}

              {activeTab === 'impact' && (
                <div className="space-y-3">
                  <h4 className="font-bold text-[#023047] text-base">About {selectedProduct.brand}</h4>
                  <p>{selectedProduct.story}</p>
                  <div className="p-4 bg-[#219ebc]/10 rounded-2xl border border-[#219ebc]/20 text-xs text-[#023047] flex items-center gap-3">
                    <span className="text-xl">🌊</span>
                    <span>Crafted responsibly in <strong>{selectedProduct.brandLocation}</strong> adhering to the Solterra Fair Wage & Low Impact Standard.</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
