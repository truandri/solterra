import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  ShieldCheck, 
  Truck, 
  Leaf, 
  CreditCard, 
  Lock, 
  ArrowRight,
  Download,
  Trees
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useCart } from '../context/CartContext';

export const CheckoutModal: React.FC = () => {
  const { 
    isCheckoutOpen, 
    setIsCheckoutOpen, 
    cart, 
    total, 
    formatPrice, 
    clearCart, 
    cartImpact 
  } = useCart();

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [formData, setFormData] = useState({
    fullName: 'Liam Campbell',
    email: 'liam.explorer@example.com',
    address: '42 Lighthouse Road',
    city: 'Byron Bay',
    state: 'NSW',
    postcode: '2481',
    country: 'Australia',
    deliveryMethod: 'electric-standard',
    cardNumber: '•••• •••• •••• 4829',
    expiry: '09/28',
    cvv: '842'
  });
  const [orderNumber, setOrderNumber] = useState('');

  if (!isCheckoutOpen) return null;

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep((step + 1) as any);
    } else {
      // Place Order
      const newOrderNo = 'SOL-' + Math.floor(100000 + Math.random() * 900000);
      setOrderNumber(newOrderNo);
      setStep(4);
      clearCart();
      // Trigger confetti celebration
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#8ecae6', '#219ebc', '#023047', '#ffb703', '#fb8500']
        });
      } catch {
        // gracefully handle if window not available
      }
    }
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    setStep(1);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div 
        onClick={handleClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      ></div>

      <div className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-[#023047]/10 overflow-hidden z-10 my-auto animate-scaleUp">
        {/* Header */}
        <div className="p-6 bg-[#FAF8F5] border-b border-[#023047]/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#023047] text-[#ffb703] flex items-center justify-center">
              <Leaf className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-[#023047] font-['Outfit']">
                Solterra Carbon-Neutral Checkout
              </h3>
              <p className="text-[11px] text-[#219ebc] font-medium">
                {step < 4 ? `Step ${step} of 3: ${step === 1 ? 'Shipping Address' : step === 2 ? 'Low-Impact Delivery' : 'Secure Payment'}` : 'Order Confirmed!'}
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-2 rounded-xl text-[#023047]/60 hover:text-[#023047] hover:bg-black/5"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator */}
        {step < 4 && (
          <div className="grid grid-cols-3 bg-[#F4EFEA] border-b border-[#023047]/10 text-xs font-bold text-center">
            <div className={`py-2.5 transition-colors ${step >= 1 ? 'bg-[#023047] text-white' : 'text-[#023047]/50'}`}>
              1. Address
            </div>
            <div className={`py-2.5 transition-colors ${step >= 2 ? 'bg-[#023047] text-white' : 'text-[#023047]/50'}`}>
              2. Shipping
            </div>
            <div className={`py-2.5 transition-colors ${step >= 3 ? 'bg-[#023047] text-white' : 'text-[#023047]/50'}`}>
              3. Payment
            </div>
          </div>
        )}

        {/* Form Body */}
        <div className="p-6 sm:p-8">
          {step === 1 && (
            <form onSubmit={handleNextStep} className="space-y-4">
              <h4 className="font-bold text-[#023047] text-sm">Where should we deliver your adventure essentials?</h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-bold text-[#023047]/70 uppercase">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full mt-1 px-3 py-2.5 rounded-xl border border-[#023047]/20 text-xs focus:ring-1 focus:ring-[#219ebc] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-[#023047]/70 uppercase">Explorer Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full mt-1 px-3 py-2.5 rounded-xl border border-[#023047]/20 text-xs focus:ring-1 focus:ring-[#219ebc] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold text-[#023047]/70 uppercase">Street Address</label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full mt-1 px-3 py-2.5 rounded-xl border border-[#023047]/20 text-xs focus:ring-1 focus:ring-[#219ebc] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="text-[11px] font-bold text-[#023047]/70 uppercase">City / Suburb</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full mt-1 px-3 py-2.5 rounded-xl border border-[#023047]/20 text-xs focus:ring-1 focus:ring-[#219ebc] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-[#023047]/70 uppercase">State / Territory</label>
                  <input
                    type="text"
                    required
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full mt-1 px-3 py-2.5 rounded-xl border border-[#023047]/20 text-xs focus:ring-1 focus:ring-[#219ebc] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-[#023047]/70 uppercase">Postcode</label>
                  <input
                    type="text"
                    required
                    value={formData.postcode}
                    onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                    className="w-full mt-1 px-3 py-2.5 rounded-xl border border-[#023047]/20 text-xs focus:ring-1 focus:ring-[#219ebc] focus:outline-none"
                  />
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-[#023047] hover:bg-[#219ebc] text-white text-xs font-bold transition-all flex items-center gap-2"
                >
                  <span>Continue to Delivery Options</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleNextStep} className="space-y-4">
              <h4 className="font-bold text-[#023047] text-sm">Select Low-Impact Courier Method</h4>

              <div className="space-y-3">
                <label className="flex items-center gap-3 p-4 rounded-2xl border-2 border-[#023047] bg-[#FAF8F5] cursor-pointer">
                  <input
                    type="radio"
                    name="deliveryMethod"
                    checked={formData.deliveryMethod === 'electric-standard'}
                    onChange={() => setFormData({ ...formData, deliveryMethod: 'electric-standard' })}
                    className="accent-[#023047] w-4 h-4"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#023047] flex items-center gap-1.5">
                        <Truck className="w-4 h-4 text-emerald-600" />
                        100% Electric Vehicle Fleet & Carbon Offset Ground
                      </span>
                      <span className="text-xs font-bold text-emerald-700">Included (Free)</span>
                    </div>
                    <p className="text-[11px] text-[#023047]/60 mt-0.5">
                      Delivered via Australia Post EV delivery vans or regional zero-emission couriers in 3-5 business days. Packed in 100% biodegradable cornstarch compostable satchels.
                    </p>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-4 rounded-2xl border border-[#023047]/20 bg-white hover:border-[#219ebc] cursor-pointer">
                  <input
                    type="radio"
                    name="deliveryMethod"
                    checked={formData.deliveryMethod === 'electric-express'}
                    onChange={() => setFormData({ ...formData, deliveryMethod: 'electric-express' })}
                    className="accent-[#023047] w-4 h-4"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#023047] flex items-center gap-1.5">
                        <Truck className="w-4 h-4 text-[#fb8500]" />
                        Express Electric Air & Ground Priority (1-2 Days)
                      </span>
                      <span className="text-xs font-bold text-[#023047]">{formatPrice(15)}</span>
                    </div>
                    <p className="text-[11px] text-[#023047]/60 mt-0.5">
                      Double-offset carbon flight allocation with overnight delivery to major metro areas.
                    </p>
                  </div>
                </label>
              </div>

              <div className="pt-4 flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs text-[#023047]/70 hover:underline"
                >
                  Back to Address
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-[#023047] hover:bg-[#219ebc] text-white text-xs font-bold transition-all flex items-center gap-2"
                >
                  <span>Continue to Payment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <form onSubmit={handleNextStep} className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-[#023047] text-sm">Payment Details</h4>
                <div className="flex items-center gap-1 text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium">
                  <Lock className="w-3 h-3" />
                  <span>256-Bit SSL Encrypted</span>
                </div>
              </div>

              <div className="p-4 bg-[#FAF8F5] rounded-2xl border border-[#023047]/10 space-y-3">
                <div>
                  <label className="text-[11px] font-bold text-[#023047]/70 uppercase">Card Number</label>
                  <div className="relative mt-1">
                    <input
                      type="text"
                      required
                      value={formData.cardNumber}
                      onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-[#023047]/20 text-xs font-mono pl-9 focus:ring-1 focus:ring-[#219ebc] focus:outline-none"
                    />
                    <CreditCard className="w-4 h-4 text-[#023047]/40 absolute left-3 top-3" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-bold text-[#023047]/70 uppercase">Expiration (MM/YY)</label>
                    <input
                      type="text"
                      required
                      value={formData.expiry}
                      onChange={(e) => setFormData({ ...formData, expiry: e.target.value })}
                      className="w-full mt-1 px-3 py-2.5 rounded-xl border border-[#023047]/20 text-xs focus:ring-1 focus:ring-[#219ebc] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-[#023047]/70 uppercase">Security CVV</label>
                    <input
                      type="text"
                      required
                      value={formData.cvv}
                      onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                      className="w-full mt-1 px-3 py-2.5 rounded-xl border border-[#023047]/20 text-xs focus:ring-1 focus:ring-[#219ebc] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Order Impact Recap */}
              <div className="bg-[#8ecae6]/20 p-3 rounded-xl border border-[#219ebc]/30 flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 font-bold text-[#023047]">
                  <Leaf className="w-4 h-4 text-emerald-600" />
                  Order Impact Included
                </span>
                <span className="text-[#023047] font-semibold">
                  +{cartImpact.trees || 2} Trees Planted in Australia
                </span>
              </div>

              <div className="pt-4 flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="text-xs text-[#023047]/70 hover:underline"
                >
                  Back to Delivery
                </button>
                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-xl bg-[#fb8500] hover:bg-[#ffb703] text-[#023047] text-sm font-extrabold tracking-wide transition-all shadow-md flex items-center gap-2"
                >
                  <span>Authorize & Complete Order ({formatPrice(total)})</span>
                  <CheckCircle2 className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {step === 4 && (
            <div className="text-center py-6 space-y-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-3xl bg-[#023047] text-[#ffb703] flex items-center justify-center mx-auto shadow-xl">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                  Order Successfully Placed
                </span>
                <h3 className="text-2xl font-black text-[#023047] font-['Outfit'] mt-2">
                  Thank You For Exploring Responsibly, {formData.fullName.split(' ')[0]}!
                </h3>
                <p className="text-xs text-[#023047]/60 mt-1">
                  Order confirmation #{orderNumber} has been dispatched to <strong>{formData.email}</strong>.
                </p>
              </div>

              {/* Certificate & Impact Card */}
              <div className="bg-gradient-to-br from-[#023047] to-[#034262] text-white p-6 rounded-2xl text-left border border-[#219ebc]/40 space-y-4 shadow-xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <Trees className="w-5 h-5 text-[#ffb703]" />
                    <span className="font-bold text-xs uppercase tracking-wider text-[#8ecae6]">
                      Solterra Environmental Contribution Certificate
                    </span>
                  </div>
                  <span className="text-[10px] text-white/60">Verified Registry</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  <div className="bg-white/10 p-2.5 rounded-xl">
                    <div className="text-lg font-black text-[#ffb703]">
                      +{cartImpact.trees || 2}
                    </div>
                    <div className="text-[10px] text-white/70">Native Trees</div>
                  </div>
                  <div className="bg-white/10 p-2.5 rounded-xl">
                    <div className="text-lg font-black text-[#8ecae6]">
                      {cartImpact.bottles || 18}
                    </div>
                    <div className="text-[10px] text-white/70">Bottles Diverted</div>
                  </div>
                  <div className="bg-white/10 p-2.5 rounded-xl">
                    <div className="text-lg font-black text-white">
                      {cartImpact.co2 || 4.5} kg
                    </div>
                    <div className="text-[10px] text-white/70">CO₂ Offset</div>
                  </div>
                  <div className="bg-white/10 p-2.5 rounded-xl">
                    <div className="text-lg font-black text-[#fb8500]">
                      1%
                    </div>
                    <div className="text-[10px] text-white/70">Wild Donation</div>
                  </div>
                </div>

                <p className="text-[11px] text-[#8ecae6] leading-relaxed">
                  Your purchase directly financed Australian bushfire recovery planting with certified conservation biologists. A digital tree coordinates certificate is on its way to your inbox.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleClose}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#023047] text-white text-xs font-bold hover:bg-[#219ebc] transition-colors"
                >
                  Continue Exploring Solterra
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
