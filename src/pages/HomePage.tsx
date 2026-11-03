import React from 'react';
import { 
  ArrowRight, 
  Leaf, 
  ShieldCheck, 
  Compass, 
  Sun, 
  Glasses, 
  Luggage, 
  Tent, 
  Shirt, 
  Sparkles, 
  Star,
  CheckCircle2,
  Trees,
  Award
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { ARTICLES } from '../data/articles';
import { BRANDS } from '../data/brands';
import { ProductCard } from '../components/ProductCard';
import { EcoImpactCalculator } from '../components/EcoImpactCalculator';
import { useCart } from '../context/CartContext';

// ES Module imports for bundled hero assets
import heroCoastalImg from '../assets/images/hero-coastal.svg';
import auraSunglassesImg from '../assets/products/aura-sunglasses.svg';

interface HomePageProps {
  setCurrentTab: (tab: string) => void;
  setSelectedCategory: (cat: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setCurrentTab, setSelectedCategory }) => {
  const { setSelectedArticle } = useCart();

  const bestsellers = PRODUCTS.filter((p) => p.isBestseller).slice(0, 4);
  const featuredArticles = ARTICLES.slice(0, 3);

  const handleCategoryClick = (categorySlug: string) => {
    setSelectedCategory(categorySlug);
    setCurrentTab('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-20 pb-20">
      {/* Editorial Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F4EFEA] via-[#FAF8F5] to-white pt-10 sm:pt-16 pb-20 border-b border-[#023047]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#023047] text-white text-xs font-bold tracking-wider uppercase shadow-sm">
                <Sun className="w-3.5 h-3.5 text-[#ffb703]" />
                <span>The Ethical Outdoor Lifestyle Marketplace</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-black text-[#023047] font-['Outfit'] tracking-tight leading-[1.1]">
                Roam Freely. <br />
                <span className="text-[#219ebc]">Tread Lightly.</span>
              </h1>

              <p className="text-base sm:text-xl text-[#023047]/80 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Solterra connects conscious explorers with authentic sustainable brands. Discover bio-acetate eyewear, upcycled travel gear, reef-safe sun care, and low-impact outdoor essentials crafted for a lifetime of adventure.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setCurrentTab('products');
                  }}
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#023047] hover:bg-[#219ebc] text-white font-black text-sm tracking-wide transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2"
                >
                  <span>Explore Marketplace</span>
                  <ArrowRight className="w-4 h-4 text-[#ffb703]" />
                </button>

                <button
                  onClick={() => setCurrentTab('sustainability')}
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white hover:bg-[#FAF8F5] text-[#023047] border border-[#023047]/20 font-bold text-sm tracking-wide transition-all shadow-sm flex items-center justify-center gap-2"
                >
                  <Leaf className="w-4 h-4 text-emerald-600" />
                  <span>The Solterra Standard</span>
                </button>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 border-t border-[#023047]/10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#023047]/70">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#fb8500]" />
                  100% Certified Eco Materials
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#219ebc]" />
                  Zero Single-Use Plastic Packing
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  1% Donated to Australian Wildlife
                </span>
              </div>
            </div>

            {/* Right Hero Visual Collage */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Hero Photo */}
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative bg-[#023047]">
                  <img
                    src={heroCoastalImg}
                    alt="Adventurer exploring coastal headlands with Solterra gear"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#023047]/70 via-transparent to-transparent"></div>

                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#8ecae6] bg-black/40 px-2.5 py-1 rounded-md backdrop-blur-sm">
                      Byron Bay Coastal Trail, Australia
                    </span>
                    <h3 className="text-lg font-bold font-['Outfit']">
                      Engineered for the Sun, Salt, and High Country.
                    </h3>
                  </div>
                </div>

                {/* Floating Eyewear Card */}
                <div 
                  onClick={() => handleCategoryClick('eyewear')}
                  className="absolute -bottom-6 -left-6 sm:-left-8 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-[#023047]/10 flex items-center gap-3 cursor-pointer hover:border-[#fb8500] transition-all group max-w-xs"
                >
                  <img
                    src={auraSunglassesImg}
                    alt="Aura Bio-Acetate Eyewear"
                    className="w-14 h-14 rounded-xl object-cover bg-[#F4EFEA]"
                  />
                  <div>
                    <span className="text-[10px] font-bold text-[#fb8500] uppercase tracking-wider">
                      Featured Eyewear
                    </span>
                    <h4 className="text-xs font-bold text-[#023047] group-hover:text-[#219ebc] transition-colors">
                      Plant Bio-Acetate Polarized
                    </h4>
                    <p className="text-[10px] text-[#023047]/60">Zero petroleum plastics</p>
                  </div>
                </div>

                {/* Floating Eco Rating Pill */}
                <div className="absolute -top-4 -right-4 sm:-right-6 bg-[#023047] text-white p-3.5 rounded-2xl shadow-xl border border-[#ffb703]/40 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#ffb703] text-[#023047] flex items-center justify-center font-black text-xs">
                    98
                  </div>
                  <div className="text-left text-[11px] leading-tight">
                    <div className="font-bold text-[#ffb703]">Verified B-Corp</div>
                    <div className="text-[#8ecae6] text-[10px]">Standard Audited</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Curated Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#219ebc]">
            Curated Collections
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#023047] font-['Outfit']">
            Gear Built for Low-Impact Exploration
          </h2>
          <p className="text-sm text-[#023047]/70">
            From marine-grade bio-acetate sunglasses to upcycled yacht-sail bags and reef-safe sun armor.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {/* Category 1: Eyewear */}
          <div
            onClick={() => handleCategoryClick('eyewear')}
            className="group relative bg-white p-6 rounded-3xl border border-[#023047]/10 hover:border-[#fb8500] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#fb8500]/15 text-[#fb8500] flex items-center justify-center mb-4 group-hover:bg-[#fb8500] group-hover:text-white transition-colors">
                <Glasses className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-[#023047] text-base group-hover:text-[#fb8500] transition-colors">
                Eco Eyewear
              </h3>
              <p className="text-xs text-[#023047]/60 mt-1">
                Bio-acetate & recycled ghost nets with UV400 lenses.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#023047]/5 flex items-center justify-between text-xs font-bold text-[#fb8500]">
              <span>Explore</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Category 2: Travel Essentials */}
          <div
            onClick={() => handleCategoryClick('travel-essentials')}
            className="group relative bg-white p-6 rounded-3xl border border-[#023047]/10 hover:border-[#219ebc] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#219ebc]/15 text-[#219ebc] flex items-center justify-center mb-4 group-hover:bg-[#219ebc] group-hover:text-white transition-colors">
                <Luggage className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-[#023047] text-base group-hover:text-[#219ebc] transition-colors">
                Travel Essentials
              </h3>
              <p className="text-xs text-[#023047]/60 mt-1">
                Upcycled sailcloth duffels, titanium cutlery & merino cubes.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#023047]/5 flex items-center justify-between text-xs font-bold text-[#219ebc]">
              <span>Explore</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Category 3: Outdoor Gear */}
          <div
            onClick={() => handleCategoryClick('outdoor-gear')}
            className="group relative bg-white p-6 rounded-3xl border border-[#023047]/10 hover:border-[#023047] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#023047]/10 text-[#023047] flex items-center justify-center mb-4 group-hover:bg-[#023047] group-hover:text-white transition-colors">
                <Tent className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-[#023047] text-base group-hover:text-[#023047] transition-colors">
                Camp & Solar Tech
              </h3>
              <p className="text-xs text-[#023047]/60 mt-1">
                Collapsible solar lights, zero-waste camp cookware.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#023047]/5 flex items-center justify-between text-xs font-bold text-[#023047]">
              <span>Explore</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Category 4: Coastal & Sun Care */}
          <div
            onClick={() => handleCategoryClick('coastal-sun')}
            className="group relative bg-white p-6 rounded-3xl border border-[#023047]/10 hover:border-[#ffb703] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#ffb703]/20 text-[#023047] flex items-center justify-center mb-4 group-hover:bg-[#ffb703] group-hover:text-[#023047] transition-colors">
                <Sun className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-[#023047] text-base group-hover:text-[#fb8500] transition-colors">
                Reef-Safe Sun & Coastal
              </h3>
              <p className="text-xs text-[#023047]/60 mt-1">
                Non-nano zinc SPF 50+ & sand-free recycled towels.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#023047]/5 flex items-center justify-between text-xs font-bold text-[#fb8500]">
              <span>Explore</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Category 5: Apparel */}
          <div
            onClick={() => handleCategoryClick('apparel')}
            className="group relative bg-white p-6 rounded-3xl border border-[#023047]/10 hover:border-emerald-600 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer col-span-2 md:col-span-1"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 text-emerald-700 flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Shirt className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-[#023047] text-base group-hover:text-emerald-700 transition-colors">
                Apparel & Layers
              </h3>
              <p className="text-xs text-[#023047]/60 mt-1">
                PFAS-free storm anoraks, organic hemp expedition shorts.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#023047]/5 flex items-center justify-between text-xs font-bold text-emerald-700">
              <span>Explore</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* Bestsellers Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#fb8500] mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Trail & Ocean Tested</span>
            </div>
            <h2 className="text-3xl font-extrabold text-[#023047] font-['Outfit']">
              Solterra Bestsellers
            </h2>
          </div>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setCurrentTab('products');
            }}
            className="self-start sm:self-auto text-xs font-bold text-[#219ebc] hover:text-[#023047] flex items-center gap-1 transition-colors"
          >
            <span>View All Products ({PRODUCTS.length})</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Brand Value Pillars Section */}
      <section className="bg-[#023047] text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ffb703]">
              The Solterra Standard
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit']">
              Why Responsible Explorers Choose Solterra
            </h2>
            <p className="text-sm text-[#8ecae6] leading-relaxed">
              We vet every stitch, hinge, and lens coating. If an item cannot be repaired, recycled, or biodegraded safely, it is not listed on our marketplace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#ffb703] text-[#023047] flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-white font-['Outfit']">Adventure Proven</h3>
              <p className="text-xs text-[#8ecae6] leading-relaxed">
                Field-tested in Tasmania’s storms and Ningaloo’s salt glare. Superior durability that replaces seasonal obsolescence.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#219ebc] text-white flex items-center justify-center font-bold">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-white font-['Outfit']">Zero Petroleum Waste</h3>
              <p className="text-xs text-[#8ecae6] leading-relaxed">
                Prioritizing bio-acetate plant cellulose, organic industrial hemp, non-mulesed merino, and recovered ocean nets.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#fb8500] text-white flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-white font-['Outfit']">Solterra Loop Circularity</h3>
              <p className="text-xs text-[#8ecae6] leading-relaxed">
                Trade in any worn Solterra gear for store credit. We repair, re-home, or chemically regenerate fibers in a closed loop.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold">
                <Trees className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-white font-['Outfit']">1% For The Wild</h3>
              <p className="text-xs text-[#8ecae6] leading-relaxed">
                Every transaction donates 1% to Australian Bushfire habitat restoration and Great Barrier Reef coral bleaching rescue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Eco Calculator Embed */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <EcoImpactCalculator />
      </section>

      {/* Ethical Brand Spotlight Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#219ebc]">
              Maker Community
            </span>
            <h2 className="text-3xl font-extrabold text-[#023047] font-['Outfit'] mt-1">
              Ethical Brands We Spotlight
            </h2>
          </div>
          <button
            onClick={() => setCurrentTab('about')}
            className="self-start sm:self-auto text-xs font-bold text-[#fb8500] hover:underline flex items-center gap-1"
          >
            <span>Read The Maker Charter</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BRANDS.slice(0, 3).map((brand) => (
            <div
              key={brand.id}
              className="bg-white rounded-3xl border border-[#023047]/10 overflow-hidden shadow-sm hover:shadow-lg transition-all group"
            >
              <div className="aspect-[16/9] overflow-hidden bg-[#F4EFEA] relative">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#023047]/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-md backdrop-blur-sm">
                  {brand.location.split(',')[0]}
                </div>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="font-bold text-lg text-[#023047] group-hover:text-[#219ebc] transition-colors">
                  {brand.name}
                </h3>
                <p className="text-xs text-[#023047]/70 leading-relaxed">
                  {brand.story}
                </p>
                <div className="pt-3 border-t border-[#023047]/10 flex flex-wrap gap-1.5">
                  {brand.certifications.map((c) => (
                    <span
                      key={c}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-[#FAF8F5] text-[#023047]/80 font-semibold border border-[#023047]/10"
                    >
                      ✓ {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Journal & Outdoor Skills Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#fb8500]">
              Trail Wisdom & Education
            </span>
            <h2 className="text-3xl font-extrabold text-[#023047] font-['Outfit'] mt-1">
              From the Solterra Journal
            </h2>
          </div>
          <button
            onClick={() => setCurrentTab('blog')}
            className="self-start sm:self-auto text-xs font-bold text-[#219ebc] hover:text-[#023047] flex items-center gap-1 transition-colors"
          >
            <span>Read All Stories ({ARTICLES.length})</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredArticles.map((article) => (
            <div
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="bg-white rounded-3xl border border-[#023047]/10 overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer group flex flex-col"
            >
              <div className="aspect-[16/10] overflow-hidden bg-[#F4EFEA] relative">
                <img
                  src={article.coverImage}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-white/95 text-[#023047] shadow-sm">
                  {article.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-[11px] text-[#023047]/60 mb-2">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="font-bold text-[#023047] text-base group-hover:text-[#219ebc] transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-xs text-[#023047]/70 mt-2 line-clamp-2 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#023047]/10 flex items-center gap-3">
                  <img
                    src={article.author.avatar}
                    alt={article.author.name}
                    className="w-7 h-7 rounded-full object-cover"
                  />
                  <span className="text-xs font-semibold text-[#023047]">
                    {article.author.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
