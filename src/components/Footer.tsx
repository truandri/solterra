import React, { useState } from 'react';
import { 
  Sun, 
  Leaf, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Compass, 
  Recycle, 
  Heart,
  Instagram,
  Facebook,
  Twitter,
  Mail,
  MapPin
} from 'lucide-react';

interface FooterProps {
  setCurrentTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentTab }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const navigateTo = (tab: string) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#023047] text-[#FAF8F5] pt-16 pb-12 border-t border-[#219ebc]/30">
      {/* Newsletter & Brand Statement Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#034262] to-[#023047] rounded-3xl p-8 sm:p-12 border border-[#219ebc]/30 shadow-2xl relative overflow-hidden mb-16">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-[#219ebc]/10 blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-[#fb8500]/10 blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffb703]/20 border border-[#ffb703]/30 text-[#ffb703] text-xs font-bold uppercase tracking-wider">
                <Sun className="w-3.5 h-3.5" />
                <span>Join the Solterra Explorer Collective</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-['Outfit'] text-white">
                Roam Freely. Tread Lightly.
              </h3>
              <p className="text-[#8ecae6] text-sm sm:text-base leading-relaxed max-w-xl">
                Subscribe for $15 off your first expedition gear order, early access to limited artisan runs, and our free quarterly <span className="text-white font-medium">Leave No Trace Travel Journal</span>.
              </p>
            </div>

            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="bg-[#219ebc]/20 border border-[#8ecae6]/40 rounded-2xl p-6 text-center space-y-2 animate-fadeIn">
                  <div className="w-12 h-12 bg-[#ffb703] text-[#023047] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-white text-lg">Welcome to the Collective!</h4>
                  <p className="text-xs text-[#8ecae6]">
                    Your code <strong>SOLTERRA10</strong> is active. We sent your digital travel guide to your inbox.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your explorer email address..."
                      required
                      className="flex-1 px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#ffb703]"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3.5 rounded-xl bg-[#fb8500] hover:bg-[#ffb703] text-[#023047] font-bold text-sm tracking-wide transition-all flex items-center justify-center gap-2 shadow-lg"
                    >
                      <span>Join</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-[11px] text-[#8ecae6]/70 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#ffb703]" />
                    <span>Zero spam. Only trail stories, gear care wisdom & responsible impact updates.</span>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Sitemap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#219ebc] flex items-center justify-center text-[#ffb703]">
                <Sun className="w-6 h-6" />
              </div>
              <span className="font-extrabold text-2xl tracking-wider uppercase font-['Outfit']">
                SOLTERRA
              </span>
            </div>
            <p className="text-sm text-[#8ecae6] leading-relaxed max-w-sm">
              The premier eco-friendly outdoor lifestyle marketplace connecting conscious adventurers with verified sustainable brands, polarized eco eyewear, and low-impact travel essentials.
            </p>
            <div className="flex items-center gap-4 pt-2 text-[#8ecae6]">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-[#219ebc] hover:text-white transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-[#219ebc] hover:text-white transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-[#219ebc] hover:text-white transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="mailto:hello@solterra.eco" className="p-2 rounded-lg bg-white/5 hover:bg-[#219ebc] hover:text-white transition-all">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 1: Marketplace Sitemap */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-[#ffb703]" />
              Marketplace
            </h4>
            <ul className="space-y-2.5 text-xs text-[#8ecae6]">
              <li>
                <button onClick={() => navigateTo('products')} className="hover:text-white transition-colors">
                  All Sustainable Gear
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('products')} className="hover:text-white transition-colors">
                  Bio-Acetate Eyewear
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('products')} className="hover:text-white transition-colors">
                  Upcycled Travel Essentials
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('products')} className="hover:text-white transition-colors">
                  Solar & Camp Tech
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('products')} className="hover:text-white transition-colors">
                  Reef-Safe Sun & Coastal
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('experiences')} className="hover:text-white transition-colors">
                  Eco Outdoor Experiences
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Solterra Values & Impact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-1.5">
              <Leaf className="w-4 h-4 text-[#8ecae6]" />
              Responsibility
            </h4>
            <ul className="space-y-2.5 text-xs text-[#8ecae6]">
              <li>
                <button onClick={() => navigateTo('sustainability')} className="hover:text-white transition-colors">
                  The Solterra Impact Pledge
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('sustainability')} className="hover:text-white transition-colors">
                  Solterra Loop (Gear Circularity)
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('sustainability')} className="hover:text-white transition-colors">
                  Materials Index (Bio-Acetate to ECONYL)
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('sustainability')} className="hover:text-white transition-colors">
                  Brand Ethical Audit Rubric
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('about')} className="hover:text-white transition-colors">
                  Our 5-Pillar Maker Charter
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Company & Stories */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-1.5">
              <Heart className="w-4 h-4 text-[#fb8500]" />
              Connect
            </h4>
            <ul className="space-y-2.5 text-xs text-[#8ecae6]">
              <li>
                <button onClick={() => navigateTo('about')} className="hover:text-white transition-colors">
                  About Solterra
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('blog')} className="hover:text-white transition-colors">
                  Journal & Trail Stories
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('contact')} className="hover:text-white transition-colors">
                  Become an Ethical Brand Partner
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('contact')} className="hover:text-white transition-colors">
                  Customer Care & Warranty
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('contact')} className="hover:text-white transition-colors">
                  FAQ & Shipping Guide
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Certifications Badge Bar */}
        <div className="py-8 border-b border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-[#8ecae6]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#ffb703]" />
            <span className="font-semibold text-white">Verified Sustainable Certifications:</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs font-medium">
            <span className="px-3 py-1 rounded-full bg-white/10 text-white">1% For The Planet</span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-white">B-Corp Audited Standards</span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-white">Ocean Plastic Repurposed</span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-white">Fair Trade Certified</span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-white">GOTS Organic Fibres</span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-white">Zero Single-Use Plastic Packing</span>
          </div>
        </div>

        {/* Traditional Custodians Acknowledgement & Legal */}
        <div className="pt-8 text-xs text-[#8ecae6]/70 space-y-4">
          <p className="leading-relaxed text-center sm:text-left">
            Solterra acknowledges the Traditional Custodians of country throughout Australia and their continuing connection to land, sea, waters, and community. We pay our deep respects to Elders past, present, and emerging.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <p>© {new Date().getFullYear()} Solterra Outdoor Marketplace Pty Ltd. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <span className="hover:text-white cursor-pointer" onClick={() => navigateTo('sustainability')}>Privacy Policy</span>
              <span className="hover:text-white cursor-pointer" onClick={() => navigateTo('sustainability')}>Terms of Service</span>
              <span className="hover:text-white cursor-pointer" onClick={() => navigateTo('contact')}>Ethical Supply Chain Disclosure</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
