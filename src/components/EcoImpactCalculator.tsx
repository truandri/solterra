import React, { useState } from 'react';
import { Leaf, Droplet, Trees, Wind, RefreshCw, Compass } from 'lucide-react';

export const EcoImpactCalculator: React.FC = () => {
  const [tripsPerYear, setTripsPerYear] = useState<number>(6);
  const [usesBioGear, setUsesBioGear] = useState<boolean>(true);
  const [swappedSingleUse, setSwappedSingleUse] = useState<boolean>(true);
  const [gearRepairHabit, setGearRepairHabit] = useState<boolean>(true);

  // Calculations
  const bottlesSavedAnnual = tripsPerYear * (swappedSingleUse ? 36 : 8) + (usesBioGear ? 24 : 0);
  const co2PreventedKg = Math.round(tripsPerYear * (usesBioGear ? 18.5 : 4) + (gearRepairHabit ? 45 : 10));
  const waterConservedLiters = tripsPerYear * (usesBioGear ? 280 : 50) + (gearRepairHabit ? 600 : 0);
  const nativeTreesFunded = Math.round(co2PreventedKg / 25);

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#023047]/10 shadow-lg">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#023047]/10">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8ecae6]/20 text-[#023047] text-xs font-bold uppercase tracking-wider mb-2">
            <Leaf className="w-3.5 h-3.5 text-emerald-600" />
            <span>Interactive Explorer Calculator</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#023047] font-['Outfit']">
            Your Annual Outdoor Footprint Calculator
          </h3>
          <p className="text-xs sm:text-sm text-[#023047]/70 mt-1 max-w-xl">
            See how small, conscious swaps in travel gear, eyewear, and backcountry habits compound into tangible ecosystem protection.
          </p>
        </div>

        <button
          onClick={() => {
            setTripsPerYear(6);
            setUsesBioGear(true);
            setSwappedSingleUse(true);
            setGearRepairHabit(true);
          }}
          className="self-start md:self-center p-2 rounded-xl text-xs font-semibold text-[#023047]/60 hover:text-[#023047] flex items-center gap-1.5"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Reset</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Controls Column */}
        <div className="lg:col-span-6 space-y-6">
          {/* Slider: Trips per year */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#023047]">
                Outdoor Expeditions & Road Trips:
              </label>
              <span className="px-3 py-1 rounded-lg bg-[#023047] text-white text-xs font-mono font-bold">
                {tripsPerYear} journeys / year
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="24"
              value={tripsPerYear}
              onChange={(e) => setTripsPerYear(Number(e.target.value))}
              className="w-full accent-[#fb8500] cursor-pointer h-2 bg-[#023047]/10 rounded-lg"
            />
            <div className="flex justify-between text-[10px] text-[#023047]/50 mt-1">
              <span>Weekend Adventurer (1)</span>
              <span>Nomadic Explorer (24+)</span>
            </div>
          </div>

          {/* Toggle 1: Bio-Acetate & Upcycled Gear */}
          <div className="flex items-center justify-between p-3.5 bg-[#FAF8F5] rounded-2xl border border-[#023047]/10">
            <div>
              <div className="text-xs font-bold text-[#023047]">
                Upcycled Sails & Bio-Acetate Eyewear
              </div>
              <div className="text-[11px] text-[#023047]/60">
                Swapping petroleum plastics for plant cellulose & ocean nylon
              </div>
            </div>
            <button
              onClick={() => setUsesBioGear(!usesBioGear)}
              className={`w-12 h-6 rounded-full transition-colors p-0.5 flex items-center ${
                usesBioGear ? 'bg-[#023047] justify-end' : 'bg-gray-300 justify-start'
              }`}
            >
              <span className="w-5 h-5 rounded-full bg-white shadow-sm"></span>
            </button>
          </div>

          {/* Toggle 2: Zero single-use kit */}
          <div className="flex items-center justify-between p-3.5 bg-[#FAF8F5] rounded-2xl border border-[#023047]/10">
            <div>
              <div className="text-xs font-bold text-[#023047]">
                Reusable Titanium Travel Cutlery & Bottles
              </div>
              <div className="text-[11px] text-[#023047]/60">
                Eliminating disposable takeout forks, water bottles, and mini toiletries
              </div>
            </div>
            <button
              onClick={() => setSwappedSingleUse(!swappedSingleUse)}
              className={`w-12 h-6 rounded-full transition-colors p-0.5 flex items-center ${
                swappedSingleUse ? 'bg-[#023047] justify-end' : 'bg-gray-300 justify-start'
              }`}
            >
              <span className="w-5 h-5 rounded-full bg-white shadow-sm"></span>
            </button>
          </div>

          {/* Toggle 3: Repair before replace */}
          <div className="flex items-center justify-between p-3.5 bg-[#FAF8F5] rounded-2xl border border-[#023047]/10">
            <div>
              <div className="text-xs font-bold text-[#023047]">
                Solterra Loop Circular Repair Habit
              </div>
              <div className="text-[11px] text-[#023047]/60">
                Re-waterproofing shells and repairing zippers instead of buying fast gear
              </div>
            </div>
            <button
              onClick={() => setGearRepairHabit(!gearRepairHabit)}
              className={`w-12 h-6 rounded-full transition-colors p-0.5 flex items-center ${
                gearRepairHabit ? 'bg-[#023047] justify-end' : 'bg-gray-300 justify-start'
              }`}
            >
              <span className="w-5 h-5 rounded-full bg-white shadow-sm"></span>
            </button>
          </div>
        </div>

        {/* Output Metrics Column */}
        <div className="lg:col-span-6 bg-gradient-to-br from-[#023047] to-[#034262] text-white p-6 sm:p-8 rounded-3xl border border-[#219ebc]/40 space-y-6 shadow-xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8ecae6] flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-[#ffb703]" />
              Your Annual Net Environmental Dividend
            </span>
            <span className="text-[11px] bg-[#ffb703]/20 text-[#ffb703] px-2.5 py-0.5 rounded-full font-bold">
              Australian Wildlands
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-white/10 rounded-2xl">
              <div className="flex items-center gap-2 text-[#8ecae6] mb-1">
                <Droplet className="w-4 h-4" />
                <span className="text-[11px] uppercase tracking-wider font-semibold">Plastic Diverted</span>
              </div>
              <div className="text-3xl font-black font-['Outfit'] text-white">
                {bottlesSavedAnnual}
              </div>
              <div className="text-[10px] text-white/60 mt-0.5">single-use bottles eliminated</div>
            </div>

            <div className="p-4 bg-white/10 rounded-2xl">
              <div className="flex items-center gap-2 text-[#fb8500] mb-1">
                <Wind className="w-4 h-4" />
                <span className="text-[11px] uppercase tracking-wider font-semibold">CO₂ Emissions</span>
              </div>
              <div className="text-3xl font-black font-['Outfit'] text-white">
                {co2PreventedKg} kg
              </div>
              <div className="text-[10px] text-white/60 mt-0.5">net greenhouse gas prevented</div>
            </div>

            <div className="p-4 bg-white/10 rounded-2xl">
              <div className="flex items-center gap-2 text-emerald-400 mb-1">
                <Trees className="w-4 h-4" />
                <span className="text-[11px] uppercase tracking-wider font-semibold">Trees Equivalent</span>
              </div>
              <div className="text-3xl font-black font-['Outfit'] text-[#ffb703]">
                +{nativeTreesFunded}
              </div>
              <div className="text-[10px] text-white/60 mt-0.5">mature canopy absorption</div>
            </div>

            <div className="p-4 bg-white/10 rounded-2xl">
              <div className="flex items-center gap-2 text-[#8ecae6] mb-1">
                <Droplet className="w-4 h-4" />
                <span className="text-[11px] uppercase tracking-wider font-semibold">Water Saved</span>
              </div>
              <div className="text-3xl font-black font-['Outfit'] text-white">
                {waterConservedLiters.toLocaleString()} L
              </div>
              <div className="text-[10px] text-white/60 mt-0.5">clean watershed water preserved</div>
            </div>
          </div>

          <p className="text-xs text-[#8ecae6] leading-relaxed pt-2">
            Every dollar spent with Solterra makers funds native reforestation in bushfire-impacted Australian corridors and removes verified commercial ghost nets from our coastal reefs.
          </p>
        </div>
      </div>
    </div>
  );
};
