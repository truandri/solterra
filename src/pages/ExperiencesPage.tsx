import React, { useState } from 'react';
import { 
  Compass, 
  MapPin, 
  Calendar, 
  Users, 
  CheckCircle2, 
  Star, 
  Leaf, 
  ArrowRight,
  ShieldCheck,
  Check,
  X
} from 'lucide-react';
import { EXPERIENCES } from '../data/experiences';
import { useCart } from '../context/CartContext';
import { Experience } from '../types';

export const ExperiencesPage: React.FC = () => {
  const { formatPrice } = useCart();
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    name: 'Sarah Jenkins',
    email: 'sarah.adventurer@example.com',
    partySize: '2 Explorers',
    date: '2026-11-20',
    dietaryNotes: 'Plant-based meals preferred'
  });

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingConfirmed(true);
    setTimeout(() => {
      setBookingConfirmed(false);
      setSelectedExp(null);
    }, 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#023047] text-white text-xs font-bold uppercase tracking-wider">
          <Compass className="w-3.5 h-3.5 text-[#ffb703]" />
          <span>Curated Low-Impact Expeditions</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-[#023047] font-['Outfit']">
          Authentic Australian Eco-Adventures
        </h1>
        <p className="text-sm sm:text-base text-[#023047]/70 leading-relaxed">
          Step into the wild alongside certified marine ecologists and bushcraft educators. Every expedition is 100% single-use plastic free and carbon-neutralized.
        </p>
      </div>

      {/* Experiences Grid */}
      <div className="space-y-8">
        {EXPERIENCES.map((exp) => (
          <div
            key={exp.id}
            className="bg-white rounded-3xl border border-[#023047]/10 overflow-hidden shadow-lg hover:shadow-xl transition-all grid grid-cols-1 lg:grid-cols-12"
          >
            <div className="lg:col-span-6 aspect-[16/10] lg:aspect-auto overflow-hidden bg-[#F4EFEA] relative">
              <img
                src={exp.image}
                alt={exp.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-3 py-1 rounded-lg text-xs font-bold bg-[#023047] text-white shadow-sm flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#ffb703]" />
                  <span>{exp.location.split(',')[0]}</span>
                </span>
                <span className="px-3 py-1 rounded-lg text-xs font-bold bg-[#8ecae6] text-[#023047] shadow-sm flex items-center gap-1">
                  <Leaf className="w-3 h-3 text-[#023047]" />
                  <span>{exp.ecoRating}/100 Eco Score</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3 text-xs text-[#023047]/70">
                  <span className="font-bold text-[#fb8500]">{exp.duration}</span>
                  <span>•</span>
                  <span>{exp.difficulty} Difficulty</span>
                  <span>•</span>
                  <span>{exp.groupSize}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-[#023047] font-['Outfit']">
                  {exp.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#023047]/80 leading-relaxed">
                  {exp.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold text-[#023047] uppercase tracking-wider">
                    Conservation Highlights:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-[#023047]/80">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Price & CTA */}
              <div className="pt-6 border-t border-[#023047]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-[#023047]/60">Starting from</span>
                  <div className="text-2xl font-black text-[#023047] font-['Outfit']">
                    {formatPrice(exp.price)} <span className="text-xs font-normal text-[#023047]/60">/ explorer</span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedExp(exp)}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#023047] hover:bg-[#219ebc] text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>Reserve Expedition</span>
                  <ArrowRight className="w-4 h-4 text-[#ffb703]" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Modal */}
      {selectedExp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            onClick={() => setSelectedExp(null)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          ></div>

          <div className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#023047]/10 z-10 animate-scaleUp space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-bold uppercase text-[#fb8500]">
                  Reserve Eco-Experience
                </span>
                <h3 className="text-xl font-black text-[#023047] font-['Outfit']">
                  {selectedExp.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedExp(null)}
                className="p-1.5 text-[#023047]/60 hover:text-[#023047]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {bookingConfirmed ? (
              <div className="p-6 bg-emerald-50 rounded-2xl text-center space-y-2 border border-emerald-200">
                <Check className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-emerald-900 text-base">Expedition Reserved!</h4>
                <p className="text-xs text-emerald-800">
                  Our wilderness coordinator has dispatched trip notes and gear packing check-lists to your email.
                </p>
              </div>
            ) : (
              <form onSubmit={handleBook} className="space-y-4">
                <div>
                  <label className="text-[11px] font-bold text-[#023047]/70 uppercase">Explorer Name</label>
                  <input
                    type="text"
                    required
                    value={bookingForm.name}
                    onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                    className="w-full mt-1 px-3 py-2.5 rounded-xl border border-[#023047]/20 text-xs focus:outline-none focus:ring-1 focus:ring-[#219ebc]"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-[#023047]/70 uppercase">Email Address</label>
                  <input
                    type="email"
                    required
                    value={bookingForm.email}
                    onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                    className="w-full mt-1 px-3 py-2.5 rounded-xl border border-[#023047]/20 text-xs focus:outline-none focus:ring-1 focus:ring-[#219ebc]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-bold text-[#023047]/70 uppercase">Party Size</label>
                    <select
                      value={bookingForm.partySize}
                      onChange={(e) => setBookingForm({ ...bookingForm, partySize: e.target.value })}
                      className="w-full mt-1 px-3 py-2.5 rounded-xl border border-[#023047]/20 text-xs focus:outline-none focus:ring-1 focus:ring-[#219ebc]"
                    >
                      <option>1 Explorer</option>
                      <option>2 Explorers</option>
                      <option>4 Explorers</option>
                      <option>Small Group (6-8)</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-[#023047]/70 uppercase">Preferred Date</label>
                    <input
                      type="date"
                      required
                      value={bookingForm.date}
                      onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                      className="w-full mt-1 px-3 py-2.5 rounded-xl border border-[#023047]/20 text-xs focus:outline-none focus:ring-1 focus:ring-[#219ebc]"
                    />
                  </div>
                </div>

                <div className="p-3 bg-[#FAF8F5] rounded-xl text-[11px] text-[#023047]/70 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Free cancellation up to 14 days prior. 100% carbon-offset guaranteed.</span>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#023047] hover:bg-[#219ebc] text-white text-xs font-bold transition-all shadow-md"
                >
                  Confirm Reservation ({formatPrice(selectedExp.price)})
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
