import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, Currency, Article, Experience } from '../types';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number, selectedColor?: string) => void;
  removeFromCart: (productId: string, selectedColor?: string) => void;
  updateQuantity: (productId: string, quantity: number, selectedColor?: string) => void;
  clearCart: () => void;
  cartCount: number;
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  appliedPromo: string | null;
  applyPromo: (code: string) => { success: boolean; message: string };
  removePromo: () => void;
  
  // Wishlist
  wishlist: Product[];
  toggleWishlist: (product: Product) => void;
  isInWishlist: (productId: string) => boolean;
  
  // Currency
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  formatPrice: (amountInAUD: number) => string;
  
  // Eco Impact in Cart
  cartImpact: {
    bottles: number;
    co2: number;
    water: number;
    trees: number;
  };

  // Modals & Drawers
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isWishlistOpen: boolean;
  setIsWishlistOpen: (open: boolean) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
  selectedArticle: Article | null;
  setSelectedArticle: (article: Article | null) => void;
  selectedExperience: Experience | null;
  setSelectedExperience: (exp: Experience | null) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CURRENCY_RATES: Record<Currency, { rate: number; symbol: string; label: string }> = {
  AUD: { rate: 1.0, symbol: 'A$', label: 'AUD ($)' },
  USD: { rate: 0.66, symbol: '$', label: 'USD ($)' },
  EUR: { rate: 0.61, symbol: '€', label: 'EUR (€)' },
  GBP: { rate: 0.52, symbol: '£', label: 'GBP (£)' }
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('solterra_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('solterra_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [currency, setCurrency] = useState<Currency>('AUD');
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);
  const [promoDiscountRate, setPromoDiscountRate] = useState<number>(0);

  // Modals
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

  useEffect(() => {
    localStorage.setItem('solterra_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('solterra_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToCart = (product: Product, quantity = 1, selectedColor?: string) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedColor === selectedColor
      );
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity
        };
        return next;
      }
      return [...prev, { product, quantity, selectedColor: selectedColor || product.colors?.[0]?.name }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string, selectedColor?: string) => {
    setCart((prev) =>
      prev.filter((item) => !(item.product.id === productId && item.selectedColor === selectedColor))
    );
  };

  const updateQuantity = (productId: string, quantity: number, selectedColor?: string) => {
    if (quantity <= 0) {
      removeFromCart(productId, selectedColor);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId && item.selectedColor === selectedColor
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    setAppliedPromo(null);
    setPromoDiscountRate(0);
  };

  const toggleWishlist = (product: Product) => {
    setWishlist((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        return prev.filter((p) => p.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const isInWishlist = (productId: string) => wishlist.some((p) => p.id === productId);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  const discount = Math.round(subtotal * promoDiscountRate);

  // Free shipping threshold is $80 AUD
  const shipping = subtotal === 0 || subtotal >= 80 ? 0 : 12;

  const total = Math.max(0, subtotal - discount + shipping);

  const applyPromo = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'SOLTERRA10') {
      setAppliedPromo('SOLTERRA10');
      setPromoDiscountRate(0.10);
      return { success: true, message: '10% Explorer Welcome Discount Applied!' };
    }
    if (clean === 'REDUCE15' || clean === 'LEAVENOTRACE') {
      setAppliedPromo(clean);
      setPromoDiscountRate(0.15);
      return { success: true, message: '15% Eco Partner Discount Applied!' };
    }
    return { success: false, message: 'Invalid or expired code. Try "SOLTERRA10".' };
  };

  const removePromo = () => {
    setAppliedPromo(null);
    setPromoDiscountRate(0);
  };

  const formatPrice = (amountInAUD: number): string => {
    const config = CURRENCY_RATES[currency];
    const converted = amountInAUD * config.rate;
    return `${config.symbol}${Math.round(converted)}`;
  };

  const cartImpact = cart.reduce(
    (acc, item) => {
      const q = item.quantity;
      const m = item.product.impactMetrics;
      return {
        bottles: acc.bottles + m.plasticBottlesSaved * q,
        co2: Number((acc.co2 + m.co2SavedKg * q).toFixed(1)),
        water: acc.water + m.waterSavedLiters * q,
        trees: acc.trees + m.treesPlanted * q
      };
    },
    { bottles: 0, co2: 0, water: 0, trees: 0 }
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        subtotal,
        discount,
        shipping,
        total,
        appliedPromo,
        applyPromo,
        removePromo,
        wishlist,
        toggleWishlist,
        isInWishlist,
        currency,
        setCurrency,
        formatPrice,
        cartImpact,
        isCartOpen,
        setIsCartOpen,
        isWishlistOpen,
        setIsWishlistOpen,
        isSearchOpen,
        setIsSearchOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        selectedProduct,
        setSelectedProduct,
        selectedArticle,
        setSelectedArticle,
        selectedExperience,
        setSelectedExperience
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
