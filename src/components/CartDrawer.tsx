import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  ShoppingBag, 
  ArrowRight, 
  Leaf, 
  Truck, 
  CheckCircle2, 
  ShieldCheck,
  Tag
} from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartDrawer: React.FC = () => {
  const { 
    isCartOpen, 
    setIsCartOpen, 
    cart, 
    removeFromCart, 
    updateQuantity, 
    subtotal, 
    discount, 
    shipping, 
    total, 
    formatPrice, 
    appliedPromo, 
    applyPromo, 
    removePromo, 
    cartImpact,
    setIsCheckoutOpen 
  } = useCart();

  const [promoInput, setPromoInput] = useState('');
  const [promoFeedback, setPromoFeedback] = useState<{ success: boolean; message: string } | null>(null);

  if (!isCartOpen) return null;

  const freeShippingThreshold = 80;
  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
  const amountRemaining = Math.max(0, freeShippingThreshold - subtotal);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput.trim()) return;
    const res = applyPromo(promoInput);
    setPromoFeedback(res);
    if (res.success) {
      setPromoInput('');
    }
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={() => setIsCartOpen(false)}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      ></div>

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF8F5] shadow-2xl flex flex-col border-l border-[#023047]/10 animate-slideLeft">
          {/* Header */}
          <div className="p-6 bg-white border-b border-[#023047]/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#219ebc]" />
              <h2 className="text-lg font-extrabold text-[#023047] font-['Outfit']">
                Explorer Bag ({cart.reduce((a, b) => a + b.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-xl text-[#023047]/60 hover:text-[#023047] hover:bg-[#FAF8F5] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Meter */}
          <div className="bg-[#FAF8F5] px-6 py-3 border-b border-[#023047]/10">
            <div className="flex items-center justify-between text-xs font-semibold text-[#023047] mb-1.5">
              <span className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-[#fb8500]" />
                {amountRemaining === 0 ? (
                  <span className="text-emerald-700 font-bold">You unlocked Free Carbon-Neutral Shipping!</span>
                ) : (
                  <span>Add {formatPrice(amountRemaining)} for Free Carbon-Neutral Shipping</span>
                )}
              </span>
              <span className="font-mono text-xs">{progressPercent}%</span>
            </div>
            <div className="w-full bg-[#023047]/10 h-2 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-[#219ebc] to-[#fb8500] h-full transition-all duration-500 rounded-full"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-[#023047]/5 flex items-center justify-center text-[#219ebc]">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-[#023047] text-lg font-['Outfit']">Your bag is empty</h3>
                <p className="text-xs text-[#023047]/60 max-w-xs">
                  Pack your essentials for your next adventure. Explore our bio-acetate sunglasses and upcycled travel accessories.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-2.5 rounded-xl bg-[#023047] text-white text-xs font-bold hover:bg-[#219ebc] transition-colors"
                >
                  Explore Marketplace
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={`${item.product.id}-${item.selectedColor}`}
                  className="flex gap-4 p-3.5 bg-white rounded-2xl border border-[#023047]/10 shadow-sm"
                >
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-20 h-20 rounded-xl object-cover bg-[#F4EFEA] shrink-0"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <span className="text-[10px] font-bold uppercase text-[#219ebc]">
                          {item.product.brand}
                        </span>
                        <button
                          onClick={() => removeFromCart(item.product.id, item.selectedColor)}
                          className="text-[#023047]/40 hover:text-red-500 transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <h4 className="text-xs font-bold text-[#023047] line-clamp-1">
                        {item.product.name}
                      </h4>
                      {item.selectedColor && (
                        <p className="text-[10px] text-[#023047]/60">
                          Color: {item.selectedColor}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-[#023047]/20 rounded-lg bg-[#FAF8F5]">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1, item.selectedColor)}
                          className="w-6 h-6 text-xs font-bold hover:bg-black/5 rounded-l text-[#023047] flex items-center justify-center"
                        >
                          -
                        </button>
                        <span className="w-7 text-center text-xs font-bold text-[#023047]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1, item.selectedColor)}
                          className="w-6 h-6 text-xs font-bold hover:bg-black/5 rounded-r text-[#023047] flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>

                      <span className="text-sm font-extrabold text-[#023047]">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Eco Impact Ticker for this Cart */}
          {cart.length > 0 && (
            <div className="bg-[#219ebc]/10 border-t border-b border-[#219ebc]/20 p-4 mx-6 rounded-2xl mb-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#023047] mb-2">
                <Leaf className="w-4 h-4 text-emerald-600" />
                <span>Your Order’s Positive Environmental Return:</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                <div className="bg-white/80 p-2 rounded-xl">
                  <div className="font-extrabold text-[#023047] text-xs">
                    {cartImpact.bottles}
                  </div>
                  <div className="text-[#023047]/60">Bottles Diverted</div>
                </div>
                <div className="bg-white/80 p-2 rounded-xl">
                  <div className="font-extrabold text-[#023047] text-xs">
                    {cartImpact.co2} kg
                  </div>
                  <div className="text-[#023047]/60">CO₂e Neutralized</div>
                </div>
                <div className="bg-white/80 p-2 rounded-xl">
                  <div className="font-extrabold text-[#023047] text-xs">
                    +{cartImpact.trees}
                  </div>
                  <div className="text-[#023047]/60">Trees Planted</div>
                </div>
              </div>
            </div>
          )}

          {/* Promo Code & Order Summary */}
          {cart.length > 0 && (
            <div className="p-6 bg-white border-t border-[#023047]/10 space-y-4 shadow-lg">
              {/* Promo input */}
              <div>
                {appliedPromo ? (
                  <div className="flex items-center justify-between bg-emerald-50 border border-emerald-200 px-3 py-2 rounded-xl text-xs text-emerald-800">
                    <span className="flex items-center gap-1.5 font-bold">
                      <Tag className="w-3.5 h-3.5 text-emerald-600" />
                      Promo: {appliedPromo}
                    </span>
                    <button
                      onClick={removePromo}
                      className="text-xs font-semibold text-red-600 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyPromo} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Promo code (e.g. SOLTERRA10)"
                      value={promoInput}
                      onChange={(e) => setPromoInput(e.target.value)}
                      className="flex-1 px-3 py-2 rounded-xl border border-[#023047]/20 text-xs text-[#023047] focus:outline-none focus:ring-1 focus:ring-[#219ebc]"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-[#023047] text-white text-xs font-bold hover:bg-[#219ebc] transition-colors"
                    >
                      Apply
                    </button>
                  </form>
                )}
                {promoFeedback && !appliedPromo && (
                  <p className="text-[10px] text-red-600 mt-1">{promoFeedback.message}</p>
                )}
              </div>

              {/* Totals */}
              <div className="space-y-1.5 text-xs text-[#023047]">
                <div className="flex justify-between">
                  <span className="text-[#023047]/70">Subtotal</span>
                  <span className="font-bold">{formatPrice(subtotal)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-emerald-700">
                    <span>Explorer Discount</span>
                    <span className="font-bold">-{formatPrice(discount)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-[#023047]/70">Carbon-Neutral Delivery</span>
                  <span className="font-bold">
                    {shipping === 0 ? 'FREE' : formatPrice(shipping)}
                  </span>
                </div>
                <div className="pt-2 border-t border-[#023047]/10 flex justify-between text-base font-extrabold text-[#023047] font-['Outfit']">
                  <span>Total Due</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                className="w-full py-4 rounded-xl bg-[#fb8500] hover:bg-[#ffb703] text-[#023047] font-black text-sm tracking-wide transition-all shadow-md hover:shadow-xl flex items-center justify-center gap-2"
              >
                <span>Proceed to Carbon-Neutral Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-[#023047]/60">
                <ShieldCheck className="w-3.5 h-3.5 text-[#219ebc]" />
                <span>Encrypted 256-Bit SSL Checkout • Solterra 30-Day Guarantee</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
