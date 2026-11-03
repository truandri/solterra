import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Heart, 
  Search, 
  Menu, 
  X, 
  Leaf, 
  Sun, 
  Globe, 
  ShieldCheck,
  ChevronDown
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Currency } from '../types';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentTab, setCurrentTab }) => {
  const { 
    cartCount, 
    wishlist, 
    currency, 
    setCurrency, 
    setIsCartOpen, 
    setIsWishlistOpen, 
    setIsSearchOpen 
  } = useCart();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Marketplace' },
    { id: 'about', label: 'About Solterra' },
    { id: 'sustainability', label: 'Sustainability' },
    { id: 'blog', label: 'Journal & Stories' },
    { id: 'experiences', label: 'Experiences' },
    { id: 'contact', label: 'Contact & Partners' }
  ];

  const currencies: Currency[] = ['AUD', 'USD', 'EUR', 'GBP'];

  const handleNavClick = (id: string) => {
    setCurrentTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#023047]/10 transition-all">
      {/* Top Announcement Bar */}
      <div className="bg-[#023047] text-[#FAF8F5] text-xs py-2 px-4 font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="hidden sm:flex items-center gap-2 text-[#8ecae6]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#ffb703]" />
            <span>100% Carbon-Neutral Shipping & Free Returns across Australia</span>
          </div>
          <div className="mx-auto sm:mx-0 flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#ffb703] animate-pulse"></span>
            <span>1% of every order supports Australian Bushfire & Coral Recovery</span>
            <span className="hidden md:inline text-white/50">| Code <strong>SOLTERRA10</strong> for 10% off</span>
          </div>
          <div className="hidden md:flex items-center gap-3 text-xs text-white/80">
            <div className="relative">
              <button 
                onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
                className="flex items-center gap-1 hover:text-[#ffb703] transition-colors focus:outline-none"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{currency}</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              {currencyDropdownOpen && (
                <div className="absolute right-0 mt-2 py-1 w-24 bg-[#023047] border border-[#219ebc]/40 rounded-lg shadow-xl z-50">
                  {currencies.map((curr) => (
                    <button
                      key={curr}
                      onClick={() => {
                        setCurrency(curr);
                        setCurrencyDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1 text-xs hover:bg-[#219ebc]/20 transition-colors ${currency === curr ? 'text-[#ffb703] font-bold' : 'text-white'}`}
                    >
                      {curr}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="w-11 h-11 rounded-xl bg-[#023047] flex items-center justify-center text-[#ffb703] shadow-md group-hover:bg-[#219ebc] transition-all duration-300">
              <div className="relative">
                <Sun className="w-6 h-6 text-[#ffb703]" />
                <Leaf className="w-3.5 h-3.5 text-[#8ecae6] absolute -bottom-1 -right-1" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-2xl tracking-wider text-[#023047] uppercase font-['Outfit']">
                  SOLTERRA
                </span>
                <span className="inline-block px-1.5 py-0.5 rounded text-[10px] uppercase font-bold tracking-widest bg-[#ffb703]/20 text-[#fb8500]">
                  Eco
                </span>
              </div>
              <p className="text-[10px] tracking-widest uppercase font-semibold text-[#219ebc]">
                Outdoor Lifestyle Marketplace
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = currentTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 relative ${
                    isActive
                      ? 'text-[#023047] bg-[#219ebc]/15 font-bold'
                      : 'text-[#023047]/80 hover:text-[#023047] hover:bg-black/5'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#fb8500] rounded-full"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2.5 rounded-xl text-[#023047] hover:bg-[#219ebc]/15 hover:text-[#219ebc] transition-colors relative"
              title="Search products and articles"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist Button */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              className="p-2.5 rounded-xl text-[#023047] hover:bg-[#219ebc]/15 hover:text-[#219ebc] transition-colors relative"
              title="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-[#fb8500] text-white text-[10px] font-bold flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#023047] text-white hover:bg-[#219ebc] transition-all shadow-sm hover:shadow"
              title="Shopping Cart"
            >
              <div className="relative">
                <ShoppingBag className="w-4 h-4 text-[#ffb703]" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#fb8500] text-white text-[10px] font-bold flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="text-xs font-bold tracking-wide hidden sm:inline">
                Cart {cartCount > 0 && `(${cartCount})`}
              </span>
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-[#023047] hover:bg-black/5 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-[#023047]/10 px-4 pt-2 pb-6 space-y-2 shadow-lg animate-fadeIn">
          <div className="grid grid-cols-2 gap-2 mb-4 p-2 bg-[#F4EFEA] rounded-xl text-xs">
            <span className="text-[#023047]/70 font-medium">Selected Currency:</span>
            <div className="flex gap-2 justify-end">
              {currencies.map((curr) => (
                <button
                  key={curr}
                  onClick={() => setCurrency(curr)}
                  className={`px-2 py-0.5 rounded font-bold ${currency === curr ? 'bg-[#023047] text-white' : 'text-[#023047]'}`}
                >
                  {curr}
                </button>
              ))}
            </div>
          </div>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-colors flex items-center justify-between ${
                currentTab === link.id
                  ? 'bg-[#023047] text-white'
                  : 'text-[#023047] hover:bg-[#219ebc]/10'
              }`}
            >
              <span>{link.label}</span>
              {currentTab === link.id && <span className="w-2 h-2 rounded-full bg-[#ffb703]"></span>}
            </button>
          ))}
          <div className="pt-3 border-t border-[#023047]/10 flex justify-between items-center text-xs text-[#023047]/70">
            <span>🌿 100% Certified Eco Brands</span>
            <span>🇦🇺 Australian Owned</span>
          </div>
        </div>
      )}
    </header>
  );
};
