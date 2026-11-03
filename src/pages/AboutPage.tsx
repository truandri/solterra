import React from 'react';
import { 
  Sun, 
  Leaf, 
  Compass, 
  ShieldCheck, 
  Heart, 
  Trees, 
  CheckCircle2, 
  ArrowRight,
  Globe,
  Award,
  Users
} from 'lucide-react';
import { BRANDS } from '../data/brands';

// ES Module imports for bundled expedition and team assets
import aboutExpeditionImg from '../assets/images/about-expedition.svg';
import avatarJulian from '../assets/team/avatar-julian.svg';
import avatarMaya from '../assets/team/avatar-maya.svg';
import avatarFinnigan from '../assets/team/avatar-finnigan.svg';

interface AboutPageProps {
  setCurrentTab: (tab: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ setCurrentTab }) => {
  const team = [
    {
      name: 'Dr. Julian Thorne',
      role: 'Co-Founder & Marine Impact Lead',
      bio: 'Former Great Barrier Reef coral researcher obsessed with eradicating microplastic shed from outdoor sportswear.',
      image: avatarJulian
    },
    {
      name: 'Maya Henderson',
      role: 'Co-Founder & Head of Curation',
      bio: 'Tasmanian alpine guide and circular materials engineer. She has tested gear in 40+ countries under torrential conditions.',
      image: avatarMaya
    },
    {
      name: 'Finnigan O’Reilly',
      role: 'Director of the Solterra Loop Lab',
      bio: 'Master gear restoration craftsman ensuring every bag, zipper, and polarized hinge enjoys decades of backcountry life.',
      image: avatarFinnigan
    }
  ];

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Narrative */}
      <section className="bg-gradient-to-b from-[#F4EFEA] via-[#FAF8F5] to-white pt-12 pb-20 border-b border-[#023047]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#023047] text-white text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sun className="w-3.5 h-3.5 text-[#ffb703]" />
            <span>The Solterra Origin Story</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-[#023047] font-['Outfit'] tracking-tight">
            Built for Adventure. <br />
            <span className="text-[#219ebc]">Rooted in Responsibility.</span>
          </h1>

          <p className="text-base sm:text-xl text-[#023047]/80 leading-relaxed">
            Solterra was born on the wind-swept headlands of Byron Bay and the rugged alpine trails of Australia. We exist to solve a modern paradox: outdoor enthusiasts love nature, yet conventional outdoor gear floods ecosystems with petroleum plastics and forever chemicals.
          </p>
        </div>
      </section>

      {/* Value Proposition & Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-[#023047]/10 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#fb8500]">
              Our North Star
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#023047] font-['Outfit']">
              Premium Outdoor Gear Without the Ecological Tax
            </h2>
            <p className="text-sm sm:text-base text-[#023047]/80 leading-relaxed">
              We envision an outdoor lifestyle economy where functional design, aesthetic refinement, and radical environmental stewardship coexist without compromise.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-[#219ebc]/15 text-[#219ebc] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#023047]">Zero Petroleum Eyewear Mandate</h4>
                  <p className="text-xs text-[#023047]/70">
                    Eliminating injection-molded plastic sunglasses in favor of plant-based bio-acetate and rescued ghost fishing nets.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-[#fb8500]/15 text-[#fb8500] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#023047]">Upcycled Sailcloth & Marine Textiles</h4>
                  <p className="text-xs text-[#023047]/70">
                    Transforming high-tenacity racing sails into heirloom expedition duffels and travel cubes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/15 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#023047]">1% For The Wild Partnership</h4>
                  <p className="text-xs text-[#023047]/70">
                    Direct funding of Australian native bushfire forest regeneration and Great Barrier Reef coral restoration.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
              <img
                src={aboutExpeditionImg}
                alt="Solterra expedition founders in ocean kayaks"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#023047]/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white text-xs">
                <span className="font-bold">Field testing off Wilsons Promontory, Victoria</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 5-Pillar Maker Charter */}
      <section className="bg-[#023047] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ffb703]">
              Quality Assurance
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit']">
              The 5-Pillar Solterra Maker Charter
            </h2>
            <p className="text-sm text-[#8ecae6]">
              Every independent maker and lifestyle brand on Solterra agrees to comply with our non-negotiable auditing protocol:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="text-2xl font-black text-[#ffb703] font-['Outfit']">01</div>
              <h3 className="font-bold text-base text-white">Zero Single-Use Plastics</h3>
              <p className="text-xs text-[#8ecae6] leading-relaxed">
                100% plastic-free packaging from factory to customer doorstep. All mailers are compostable cornstarch or recycled FSC cardboard.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="text-2xl font-black text-[#219ebc] font-['Outfit']">02</div>
              <h3 className="font-bold text-base text-white">Verified Bio-Materiality</h3>
              <p className="text-xs text-[#8ecae6] leading-relaxed">
                Substitution of virgin synthetics with plant bio-acetate, non-mulesed wool, organic hemp, or certified recycled ocean plastics.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="text-2xl font-black text-[#fb8500] font-['Outfit']">03</div>
              <h3 className="font-bold text-base text-white">Living Wage Guarantee</h3>
              <p className="text-xs text-[#8ecae6] leading-relaxed">
                Strict labor audit verifying ethical wages, transparent artisan contracts, and safe working conditions across all supplier tiers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="text-2xl font-black text-emerald-400 font-['Outfit']">04</div>
              <h3 className="font-bold text-base text-white">Repairability & Warranty</h3>
              <p className="text-xs text-[#8ecae6] leading-relaxed">
                Modular construction that permits screw replacement, patch kits, and circular trade-in via our Solterra Loop program.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="text-2xl font-black text-[#8ecae6] font-['Outfit']">05</div>
              <h3 className="font-bold text-base text-white">Carbon-Offset Delivery</h3>
              <p className="text-xs text-[#8ecae6] leading-relaxed">
                End-to-end freight emissions calculated and offset through verified Australian biodiversity and mangrove regeneration credits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Curators Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#219ebc]">
            People Behind Solterra
          </span>
          <h2 className="text-3xl font-extrabold text-[#023047] font-['Outfit']">
            Meet Our Curators & Environmental Stewards
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-3xl border border-[#023047]/10 p-6 shadow-sm hover:shadow-lg transition-all text-center space-y-4"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover mx-auto border-2 border-[#219ebc]"
              />
              <div>
                <h3 className="font-bold text-lg text-[#023047] font-['Outfit']">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-[#fb8500] uppercase tracking-wider">
                  {member.role}
                </p>
              </div>
              <p className="text-xs text-[#023047]/70 leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#023047] to-[#034262] text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-[#219ebc]/30">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold font-['Outfit']">
              Ready to Upgrade Your Outdoor Essentials?
            </h3>
            <p className="text-xs sm:text-sm text-[#8ecae6] max-w-xl">
              Experience the difference of Italian plant bio-acetate eyewear and upcycled racing sail bags on your next trip.
            </p>
          </div>
          <button
            onClick={() => setCurrentTab('products')}
            className="px-8 py-4 rounded-xl bg-[#fb8500] hover:bg-[#ffb703] text-[#023047] font-extrabold text-sm tracking-wide transition-all shadow-md flex items-center gap-2"
          >
            <span>Explore The Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
