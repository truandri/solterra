import React, { useState } from 'react';
import { 
  Leaf, 
  Recycle, 
  ShieldCheck, 
  Droplet, 
  Wind, 
  Trees, 
  Sun, 
  ArrowRight, 
  ChevronDown, 
  CheckCircle2,
  RefreshCw,
  Scale
} from 'lucide-react';

export const SustainabilityPage: React.FC = () => {
  const [activeMaterial, setActiveMaterial] = useState<string>('bio-acetate');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const materials = [
    {
      id: 'bio-acetate',
      name: 'Plant Bio-Acetate (M49)',
      category: 'Eyewear & Frames',
      impactVsTraditional: '100% Biodegradable • Zero Phthalates',
      description: 'Derived entirely from renewable cotton seeds and certified FSC wood pulp cellulose. Unlike petroleum injection-molded plastics, bio-acetate safely breaks down without shedding persistent microplastic toxicity into marine ecosystems.',
      usedIn: 'Aura Sunglasses & SolarPath Trail Eyewear'
    },
    {
      id: 'ghost-nets',
      name: 'Ghost-Net Recycled Polyamide',
      category: 'Optics & Hardware',
      impactVsTraditional: '78% Carbon Reduction vs Virgin Nylon',
      description: 'Commercial fishing nets drift for centuries as deadly ghost gear. Recovered alongside Indigenous coastal rangers, these high-tensile marine ropes are sanitized and pelletized into shatterproof flex-hinge frames.',
      usedIn: 'Kallista Navigators & Pack Visors'
    },
    {
      id: 'sailcloth',
      name: 'Upcycled Racing Dacron & Kevlar',
      category: 'Expedition Bags & Luggage',
      impactVsTraditional: 'Diverts 100% of Textile Landfill Mass',
      description: 'Retired high-performance yacht sails that have crossed thousands of nautical miles. Naturally UV-treated, saltwater-proof, and tear-resistant, offering heirloom longevity with distinctive sailing provenance.',
      usedIn: 'Nomad 35L Modular Duffels'
    },
    {
      id: 'non-nano-zinc',
      name: 'Non-Nano Zinc Oxide',
      category: 'Sun & Skin Protection',
      impactVsTraditional: 'Zero Coral Bleaching Harm',
      description: 'Mineral UV particles larger than 100 nanometers that cannot penetrate human pores or coral polyps. Provides 4 hours water-resistant broad spectrum barrier defense without chemical endocrine disruptors.',
      usedIn: 'Pure Sol Mineral SPF 50+ Sun Shield'
    },
    {
      id: 'industrial-hemp',
      name: 'Regenerative Industrial Hemp',
      category: 'Apparel & Accessories',
      impactVsTraditional: '4x Tensile Strength of Cotton • Zero Pesticides',
      description: 'Requires half the water of conventional cotton and naturally replenishes degraded soil nutrients. Naturally antibacterial, UV resistant, and softens with every saltwater wash.',
      usedIn: 'WildHemp Field Shorts & Solar Trail Caps'
    }
  ];

  const loopSteps = [
    {
      step: '01',
      title: 'Roam & Explore',
      description: 'Wear your gear through rain, salt spray, sand, and mountain granite. Our products are made to take a beating.'
    },
    {
      step: '02',
      title: 'Free In-House Repair',
      description: 'If a seam pulls, zipper sticks, or screw loosens, our Solterra Repair Lab fixes it with original materials free of charge.'
    },
    {
      step: '03',
      title: 'Loop Trade-In Credit',
      description: 'When you are ready for a change or the item reaches its functional end, return it for up to a $40 Solterra store voucher.'
    },
    {
      step: '04',
      title: 'Circular Regeneration',
      description: 'We deconstruct hardware, sanitize textiles, and mechanically melt or compost materials back into raw feedstock.'
    }
  ];

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#F4EFEA] via-[#FAF8F5] to-white pt-12 pb-20 border-b border-[#023047]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#023047] text-white text-xs font-bold uppercase tracking-wider shadow-sm">
            <Leaf className="w-3.5 h-3.5 text-emerald-400" />
            <span>Radical Transparency Hub</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-[#023047] font-['Outfit'] tracking-tight">
            Accountability Beyond <br />
            <span className="text-[#219ebc]">Marketing Buzzwords.</span>
          </h1>

          <p className="text-base sm:text-xl text-[#023047]/80 leading-relaxed">
            Sustainability without independent verification is greenwashing. Explore our open lifecycle audits, annual impact ledger, and the circular infrastructure powering Solterra.
          </p>
        </div>
      </section>

      {/* Annual Real-Time Transparency Metrics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#023047] text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-[#219ebc]/30 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#ffb703]">
                Fiscal 2025/2026 Audit
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-['Outfit'] mt-1">
                Solterra Annual Community Impact Ledger
              </h2>
            </div>
            <span className="text-xs bg-[#219ebc]/30 text-[#8ecae6] px-3 py-1.5 rounded-xl font-semibold border border-[#219ebc]/40 self-start sm:self-auto">
              Audited by GreenMetrics Australia
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 space-y-2">
              <div className="w-12 h-12 rounded-xl bg-[#219ebc]/20 text-[#8ecae6] flex items-center justify-center mx-auto">
                <Droplet className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl font-black text-white font-['Outfit']">
                28,450
              </div>
              <div className="text-xs font-bold text-[#8ecae6] uppercase tracking-wider">
                Plastic Bottles Diverted
              </div>
              <p className="text-[11px] text-white/50">
                Intercepted from marine coastal sweeps and ghost net recovery
              </p>
            </div>

            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 space-y-2">
              <div className="w-12 h-12 rounded-xl bg-[#fb8500]/20 text-[#fb8500] flex items-center justify-center mx-auto">
                <Wind className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl font-black text-white font-['Outfit']">
                142.4
              </div>
              <div className="text-xs font-bold text-[#fb8500] uppercase tracking-wider">
                Metric Tons CO₂e Offset
              </div>
              <p className="text-[11px] text-white/50">
                Gold Standard verified solar & mangrove coastal restoration
              </p>
            </div>

            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 space-y-2">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <Trees className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl font-black text-white font-['Outfit']">
                12,800
              </div>
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                Native Trees Seeded
              </div>
              <p className="text-[11px] text-white/50">
                In bushfire-impacted wildlife corridors across NSW & Victoria
              </p>
            </div>

            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 space-y-2">
              <div className="w-12 h-12 rounded-xl bg-[#ffb703]/20 text-[#ffb703] flex items-center justify-center mx-auto">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl font-black text-white font-['Outfit']">
                $85,000+
              </div>
              <div className="text-xs font-bold text-[#ffb703] uppercase tracking-wider">
                Donated via 1% For The Wild
              </div>
              <p className="text-[11px] text-white/50">
                Direct community grants for coral bleaching emergency rescue
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Materials Index */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#219ebc]">
            Materiality Index
          </span>
          <h2 className="text-3xl font-extrabold text-[#023047] font-['Outfit']">
            The Science of Low-Impact Substances
          </h2>
          <p className="text-xs sm:text-sm text-[#023047]/70">
            Select a core material below to understand its environmental chemistry, source provenance, and performance comparison.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Materials Selector Tabs */}
          <div className="lg:col-span-5 space-y-3">
            {materials.map((m) => {
              const active = activeMaterial === m.id;
              return (
                <button
                  key={m.id}
                  onClick={() => setActiveMaterial(m.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between ${
                    active
                      ? 'bg-[#023047] text-white border-[#023047] shadow-md'
                      : 'bg-white text-[#023047] border-[#023047]/10 hover:border-[#219ebc]'
                  }`}
                >
                  <div>
                    <h4 className="font-bold text-sm font-['Outfit']">{m.name}</h4>
                    <span className={`text-[11px] ${active ? 'text-[#8ecae6]' : 'text-[#023047]/60'}`}>
                      {m.category}
                    </span>
                  </div>
                  <ArrowRight className={`w-4 h-4 ${active ? 'text-[#ffb703]' : 'text-[#023047]/30'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Material Detail Panel */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-[#023047]/10 shadow-lg space-y-6">
            {(() => {
              const current = materials.find((m) => m.id === activeMaterial) || materials[0];
              return (
                <>
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#023047]/10 pb-4">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#fb8500]">
                        {current.category}
                      </span>
                      <h3 className="text-2xl font-black text-[#023047] font-['Outfit']">
                        {current.name}
                      </h3>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
                      {current.impactVsTraditional}
                    </span>
                  </div>

                  <p className="text-sm text-[#023047]/80 leading-relaxed">
                    {current.description}
                  </p>

                  <div className="p-4 bg-[#FAF8F5] rounded-2xl border border-[#023047]/10 space-y-2">
                    <div className="text-xs font-bold text-[#023047] uppercase tracking-wider">
                      Featured In Solterra Gear:
                    </div>
                    <div className="text-xs font-medium text-[#219ebc]">
                      {current.usedIn}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                    <div className="p-3 rounded-xl bg-[#219ebc]/10 border border-[#219ebc]/20">
                      <span className="font-bold text-[#023047] block mb-1">Testing Protocol</span>
                      <span className="text-[#023047]/70 text-[11px]">Leachate-free in salt & fresh aquatic tests</span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#fb8500]/10 border border-[#fb8500]/20">
                      <span className="font-bold text-[#023047] block mb-1">End of Life Path</span>
                      <span className="text-[#023047]/70 text-[11px]">100% Solterra Loop Closed Recyclability</span>
                    </div>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      </section>

      {/* Solterra Loop (Circular Economy) Showcase */}
      <section className="bg-[#FAF8F5] py-20 border-y border-[#023047]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fb8500]/15 text-[#fb8500] text-xs font-bold uppercase tracking-wider">
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Closed-Loop Gear Lifecycle</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#023047] font-['Outfit']">
              The Solterra Loop
            </h2>
            <p className="text-sm text-[#023047]/70 leading-relaxed">
              We assume lifetime responsibility for every item leaving our warehouse. Our circular trade-in program guarantees no Solterra gear ever languishes in landfill.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {loopSteps.map((s) => (
              <div
                key={s.step}
                className="bg-white p-6 rounded-3xl border border-[#023047]/10 shadow-sm space-y-4 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#023047] text-[#ffb703] flex items-center justify-center font-black text-lg font-['Outfit']">
                  {s.step}
                </div>
                <h3 className="font-bold text-base text-[#023047] font-['Outfit']">
                  {s.title}
                </h3>
                <p className="text-xs text-[#023047]/70 leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-3xl bg-[#023047] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 rounded-2xl bg-[#219ebc] text-white flex items-center justify-center shrink-0">
                <Recycle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-base font-['Outfit']">Have pre-loved gear ready for the Loop?</h4>
                <p className="text-xs text-[#8ecae6]">Print a free prepaid postal return label and claim your credit today.</p>
              </div>
            </div>
            <button className="px-6 py-3 rounded-xl bg-[#ffb703] hover:bg-[#fb8500] text-[#023047] font-bold text-xs transition-colors shrink-0">
              Start a Loop Return
            </button>
          </div>
        </div>
      </section>

      {/* How We Calculate The Eco Score */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#023047]/10 shadow-lg space-y-8">
          <div className="max-w-2xl space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-[#fb8500] uppercase tracking-wider">
              <Scale className="w-4 h-4" />
              <span>Independent Scoring Rubric</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#023047] font-['Outfit']">
              How the 1–100 Solterra Eco Score is Calculated
            </h2>
            <p className="text-xs sm:text-sm text-[#023047]/70">
              Products must score 90+ out of 100 to be admitted to our catalog.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-[#FAF8F5] rounded-2xl border border-[#023047]/10 space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-bold text-sm text-[#023047]">1. Material Integrity</span>
                <span className="font-mono text-xs font-bold text-[#219ebc]">40 Points</span>
              </div>
              <p className="text-xs text-[#023047]/70 leading-relaxed">
                Evaluates renewable origin, percentage of post-consumer waste, absence of PFAS/PFOS chemistry, and microplastic shed resistance.
              </p>
            </div>

            <div className="p-5 bg-[#FAF8F5] rounded-2xl border border-[#023047]/10 space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-bold text-sm text-[#023047]">2. Circularity & Longevity</span>
                <span className="font-mono text-xs font-bold text-[#fb8500]">35 Points</span>
              </div>
              <p className="text-xs text-[#023047]/70 leading-relaxed">
                Modular design, field repair accessibility, availability of replacement screws/lenses, and Solterra Loop take-back eligibility.
              </p>
            </div>

            <div className="p-5 bg-[#FAF8F5] rounded-2xl border border-[#023047]/10 space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-bold text-sm text-[#023047]">3. Ethical Supply Chain</span>
                <span className="font-mono text-xs font-bold text-emerald-700">25 Points</span>
              </div>
              <p className="text-xs text-[#023047]/70 leading-relaxed">
                Fair Trade or B-Corp certified labor, safe workshop conditions, living wages, and zero child/forced labor throughout the tiers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
