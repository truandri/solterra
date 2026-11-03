import React, { useState } from 'react';
import { Heart, ShoppingBag, Eye, Star, Leaf, Check } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { 
    formatPrice, 
    addToCart, 
    toggleWishlist, 
    isInWishlist, 
    setSelectedProduct 
  } = useCart();

  const [isHovered, setIsHovered] = useState(false);
  const [justAdded, setJustAdded] = useState(false);
  const isWishlisted = isInWishlist(product.id);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1800);
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleWishlist(product);
  };

  const currentImage = isHovered && product.images[1] ? product.images[1] : product.images[0];

  return (
    <div 
      onClick={() => setSelectedProduct(product)}
      className="group bg-white rounded-2xl border border-[#023047]/10 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#219ebc]/40 transition-all duration-300 flex flex-col cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Stage */}
      <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden bg-[#F4EFEA]">
        <img
          src={currentImage}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Floating Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.isBestseller && (
            <span className="px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-[#023047] text-white shadow-sm">
              Bestseller
            </span>
          )}
          {product.isNew && (
            <span className="px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-[#fb8500] text-white shadow-sm">
              New Release
            </span>
          )}
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-bold bg-[#8ecae6]/90 backdrop-blur-sm text-[#023047] shadow-sm">
            <Leaf className="w-3 h-3 text-[#023047]" />
            <span>{product.ecoScore}/100 Eco Score</span>
          </span>
        </div>

        {/* Action Overlays */}
        <div className="absolute top-3 right-3 z-10">
          <button
            onClick={handleWishlistToggle}
            className={`p-2 rounded-full transition-all duration-200 shadow-md ${
              isWishlisted
                ? 'bg-[#fb8500] text-white'
                : 'bg-white/90 text-[#023047] hover:bg-white hover:text-[#fb8500]'
            }`}
            title={isWishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Quick View Button on Hover */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 hidden sm:block">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedProduct(product);
            }}
            className="w-full py-2 px-3 rounded-xl bg-white/95 backdrop-blur-sm text-[#023047] text-xs font-bold hover:bg-[#023047] hover:text-white transition-all shadow-md flex items-center justify-center gap-1.5"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View & Sustainability Specs</span>
          </button>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Brand & Origin */}
          <div className="flex items-center justify-between text-xs text-[#219ebc] font-semibold mb-1">
            <span>{product.brand}</span>
            <span className="text-[#023047]/50 text-[11px]">{product.brandLocation.split(',')[0]}</span>
          </div>

          {/* Title */}
          <h3 className="font-bold text-[#023047] text-base group-hover:text-[#219ebc] transition-colors line-clamp-1">
            {product.name}
          </h3>

          {/* Tagline / Subtitle */}
          <p className="text-xs text-[#023047]/70 mt-1 line-clamp-2 leading-relaxed">
            {product.tagline}
          </p>

          {/* Eco Badges Chips */}
          <div className="flex flex-wrap gap-1 mt-2.5">
            {product.ecoBadges.slice(0, 2).map((badge, idx) => (
              <span
                key={idx}
                className="text-[10px] px-2 py-0.5 rounded-full bg-[#FAF8F5] text-[#023047]/80 border border-[#023047]/10 font-medium"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Price & Add to Cart footer */}
        <div className="pt-4 mt-3 border-t border-[#023047]/10 flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg font-black text-[#023047] font-['Outfit']">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-[#023047]/40 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
            <div className="flex items-center gap-1 text-[11px] text-[#023047]/60">
              <Star className="w-3 h-3 fill-[#ffb703] text-[#ffb703]" />
              <span className="font-bold text-[#023047]">{product.rating}</span>
              <span>({product.reviewsCount})</span>
            </div>
          </div>

          <button
            onClick={handleQuickAdd}
            disabled={justAdded}
            className={`p-2.5 sm:px-3 sm:py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm ${
              justAdded
                ? 'bg-emerald-600 text-white'
                : 'bg-[#023047] text-white hover:bg-[#219ebc]'
            }`}
            title="Add to Cart"
          >
            {justAdded ? (
              <>
                <Check className="w-4 h-4" />
                <span className="hidden sm:inline">Added</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4 text-[#ffb703]" />
                <span className="hidden sm:inline">Add</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
