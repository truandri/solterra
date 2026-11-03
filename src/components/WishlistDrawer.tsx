import React from 'react';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const WishlistDrawer: React.FC = () => {
  const { 
    isWishlistOpen, 
    setIsWishlistOpen, 
    wishlist, 
    toggleWishlist, 
    addToCart, 
    formatPrice, 
    setSelectedProduct 
  } = useCart();

  if (!isWishlistOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div 
        onClick={() => setIsWishlistOpen(false)}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      ></div>

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF8F5] shadow-2xl flex flex-col border-l border-[#023047]/10 animate-slideLeft">
          {/* Header */}
          <div className="p-6 bg-white border-b border-[#023047]/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-[#fb8500] fill-current" />
              <h2 className="text-lg font-extrabold text-[#023047] font-['Outfit']">
                Saved Wishlist ({wishlist.length})
              </h2>
            </div>
            <button
              onClick={() => setIsWishlistOpen(false)}
              className="p-2 rounded-xl text-[#023047]/60 hover:text-[#023047] hover:bg-[#FAF8F5] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {wishlist.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-[#023047]/5 flex items-center justify-center text-[#fb8500]">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-[#023047] text-lg font-['Outfit']">Your wishlist is empty</h3>
                <p className="text-xs text-[#023047]/60 max-w-xs">
                  Save your favorite sustainable gear, bio-acetate sunglasses, and travel accessories by tapping the heart icon.
                </p>
                <button
                  onClick={() => setIsWishlistOpen(false)}
                  className="px-6 py-2.5 rounded-xl bg-[#023047] text-white text-xs font-bold hover:bg-[#219ebc] transition-colors"
                >
                  Browse Marketplace
                </button>
              </div>
            ) : (
              wishlist.map((product) => (
                <div
                  key={product.id}
                  className="flex gap-4 p-3.5 bg-white rounded-2xl border border-[#023047]/10 shadow-sm"
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-20 h-20 rounded-xl object-cover bg-[#F4EFEA] shrink-0 cursor-pointer"
                    onClick={() => {
                      setIsWishlistOpen(false);
                      setSelectedProduct(product);
                    }}
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <span className="text-[10px] font-bold uppercase text-[#219ebc]">
                          {product.brand}
                        </span>
                        <button
                          onClick={() => toggleWishlist(product)}
                          className="text-[#023047]/40 hover:text-red-500 transition-colors"
                          title="Remove"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <h4 
                        onClick={() => {
                          setIsWishlistOpen(false);
                          setSelectedProduct(product);
                        }}
                        className="text-xs font-bold text-[#023047] line-clamp-1 cursor-pointer hover:text-[#219ebc]"
                      >
                        {product.name}
                      </h4>
                      <p className="text-[11px] font-bold text-[#023047] mt-0.5">
                        {formatPrice(product.price)}
                      </p>
                    </div>

                    <div className="flex justify-end mt-2">
                      <button
                        onClick={() => {
                          addToCart(product, 1);
                          toggleWishlist(product);
                        }}
                        className="px-3 py-1.5 rounded-lg bg-[#023047] text-white text-xs font-bold hover:bg-[#219ebc] transition-colors flex items-center gap-1.5"
                      >
                        <ShoppingBag className="w-3.5 h-3.5 text-[#ffb703]" />
                        <span>Move to Bag</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
