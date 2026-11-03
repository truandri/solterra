import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  CheckCircle2, 
  ChevronDown, 
  HelpCircle, 
  Sparkles,
  ShieldCheck,
  Building
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [activeFormTab, setActiveFormTab] = useState<'support' | 'partner'>('support');
  const [supportSubmitted, setSupportSubmitted] = useState(false);
  const [partnerSubmitted, setPartnerSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const [supportForm, setSupportForm] = useState({
    name: '',
    email: '',
    topic: 'Order & Shipping Status',
    message: ''
  });

  const [partnerForm, setPartnerForm] = useState({
    brandName: '',
    website: '',
    contactName: '',
    email: '',
    category: 'Eco Eyewear',
    materialsUsed: '',
    certifications: '1% For The Planet, Fair Trade',
    pitch: ''
  });

  const faqs = [
    {
      q: 'How does Solterra ensure every product is genuinely eco-friendly?',
      a: 'We conduct a stringent 5-pillar audit before onboarding any brand. Products must score at least 90/100 on our rubric, which evaluates renewable materiality (like bio-acetate and recycled ghost nets), absence of PFAS forever chemicals, living wage certifications, and zero single-use plastic packaging.'
    },
    {
      q: 'How does carbon-neutral shipping work across Australia & internationally?',
      a: 'All ground deliveries in Australian metro areas are fulfilled by electric vehicle postal networks. Remaining freight emissions are calculated and 100% offset through certified Australian native reforestation and tidal mangrove regeneration credits.'
    },
    {
      q: 'What is the "Solterra Loop" repair and trade-in guarantee?',
      a: 'We believe responsible brands must take responsibility for end-of-life impact. If your gear breaks, our in-house lab repairs it. When you are done with it, return it to us for up to a $40 store voucher—we will re-home, repair, or recycle the raw materials into new products.'
    },
    {
      q: 'Are your sunglasses 100% UV protective?',
      a: 'Yes. All Solterra eyewear—whether crafted from Italian bio-acetate or recycled commercial fishing nets—features certified Category 3 UV400 polarized optics offering 99.9% UVA/UVB and blue light suppression tested against harsh Australian sunlight conditions.'
    },
    {
      q: 'Do you offer returns if gear doesn’t fit my expedition needs?',
      a: 'We provide a 30-day trial period with free carbon-neutral return shipping on all unused apparel, bags, and eyewear in their original compostable packaging.'
    }
  ];

  const handleSupportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSupportSubmitted(true);
  };

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPartnerSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#023047] text-white text-xs font-bold uppercase tracking-wider">
          <Mail className="w-3.5 h-3.5 text-[#ffb703]" />
          <span>Connect With Solterra</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-[#023047] font-['Outfit']">
          We’re Here for the Journey
        </h1>
        <p className="text-sm sm:text-base text-[#023047]/70 leading-relaxed">
          Have an inquiry about an order, wish to book a repair, or represent an ethical outdoor maker seeking partnership? Reach out to our Australian team.
        </p>
      </div>

      {/* Main Grid: Form & Info */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Interactive Form Box */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#023047]/10 shadow-lg space-y-6">
          {/* Tab Selector */}
          <div className="flex bg-[#FAF8F5] p-1.5 rounded-2xl border border-[#023047]/10">
            <button
              onClick={() => setActiveFormTab('support')}
              className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeFormTab === 'support'
                  ? 'bg-[#023047] text-white shadow-sm'
                  : 'text-[#023047]/70 hover:text-[#023047]'
              }`}
            >
              Customer Care & Warranty
            </button>
            <button
              onClick={() => setActiveFormTab('partner')}
              className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeFormTab === 'partner'
                  ? 'bg-[#023047] text-white shadow-sm'
                  : 'text-[#023047]/70 hover:text-[#023047]'
              }`}
            >
              Become an Ethical Brand Partner
            </button>
          </div>

          {/* Customer Care Form */}
          {activeFormTab === 'support' && (
            <div>
              {supportSubmitted ? (
                <div className="p-8 bg-emerald-50 rounded-2xl text-center space-y-3 border border-emerald-200 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-emerald-950 font-['Outfit']">
                    Message Dispatched to Basecamp
                  </h3>
                  <p className="text-xs text-emerald-800 max-w-sm mx-auto">
                    Thank you, {supportForm.name || 'fellow explorer'}. Our customer care team responds to all inquiries within 12 business hours.
                  </p>
                  <button
                    onClick={() => setSupportSubmitted(false)}
                    className="text-xs font-bold text-emerald-900 underline mt-2"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSupportSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-bold text-[#023047]/70 uppercase">Your Name</label>
                      <input
                        type="text"
                        required
                        value={supportForm.name}
                        onChange={(e) => setSupportForm({ ...supportForm, name: e.target.value })}
                        placeholder="Finnigan Smith"
                        className="w-full mt-1 px-3 py-2.5 rounded-xl border border-[#023047]/20 text-xs focus:ring-1 focus:ring-[#219ebc] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-[#023047]/70 uppercase">Email Address</label>
                      <input
                        type="email"
                        required
                        value={supportForm.email}
                        onChange={(e) => setSupportForm({ ...supportForm, email: e.target.value })}
                        placeholder="finn@outdoors.com"
                        className="w-full mt-1 px-3 py-2.5 rounded-xl border border-[#023047]/20 text-xs focus:ring-1 focus:ring-[#219ebc] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-[#023047]/70 uppercase">Topic</label>
                    <select
                      value={supportForm.topic}
                      onChange={(e) => setSupportForm({ ...supportForm, topic: e.target.value })}
                      className="w-full mt-1 px-3 py-2.5 rounded-xl border border-[#023047]/20 text-xs focus:ring-1 focus:ring-[#219ebc] focus:outline-none"
                    >
                      <option>Order & Shipping Status</option>
                      <option>Solterra Loop Repair Intake</option>
                      <option>Eyewear Sizing & Lens Question</option>
                      <option>Press & Media Inquiries</option>
                      <option>General Feedback</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-[#023047]/70 uppercase">Your Message</label>
                    <textarea
                      rows={4}
                      required
                      value={supportForm.message}
                      onChange={(e) => setSupportForm({ ...supportForm, message: e.target.value })}
                      placeholder="How can we assist your expedition?"
                      className="w-full mt-1 px-3 py-2.5 rounded-xl border border-[#023047]/20 text-xs focus:ring-1 focus:ring-[#219ebc] focus:outline-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#023047] hover:bg-[#219ebc] text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Send Inquiry to Solterra</span>
                    <Send className="w-3.5 h-3.5 text-[#ffb703]" />
                  </button>
                </form>
              )}
            </div>
          )}

          {/* Partner Application Form */}
          {activeFormTab === 'partner' && (
            <div>
              {partnerSubmitted ? (
                <div className="p-8 bg-emerald-50 rounded-2xl text-center space-y-3 border border-emerald-200 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                    <Sparkles className="w-6 h-6 text-[#fb8500]" />
                  </div>
                  <h3 className="font-bold text-lg text-emerald-950 font-['Outfit']">
                    Brand Application Received!
                  </h3>
                  <p className="text-xs text-emerald-800 max-w-sm mx-auto">
                    Our curation board audits submissions every Tuesday. If your products meet our 5-pillar sustainability charter, we will arrange sample testing.
                  </p>
                  <button
                    onClick={() => setPartnerSubmitted(false)}
                    className="text-xs font-bold text-emerald-900 underline mt-2"
                  >
                    Submit another application
                  </button>
                </div>
              ) : (
                <form onSubmit={handlePartnerSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-bold text-[#023047]/70 uppercase">Brand Name</label>
                      <input
                        type="text"
                        required
                        value={partnerForm.brandName}
                        onChange={(e) => setPartnerForm({ ...partnerForm, brandName: e.target.value })}
                        placeholder="e.g. Pacific BioThread"
                        className="w-full mt-1 px-3 py-2.5 rounded-xl border border-[#023047]/20 text-xs focus:ring-1 focus:ring-[#219ebc] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-[#023047]/70 uppercase">Brand Website / Catalog</label>
                      <input
                        type="url"
                        required
                        value={partnerForm.website}
                        onChange={(e) => setPartnerForm({ ...partnerForm, website: e.target.value })}
                        placeholder="https://..."
                        className="w-full mt-1 px-3 py-2.5 rounded-xl border border-[#023047]/20 text-xs focus:ring-1 focus:ring-[#219ebc] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-bold text-[#023047]/70 uppercase">Contact Name</label>
                      <input
                        type="text"
                        required
                        value={partnerForm.contactName}
                        onChange={(e) => setPartnerForm({ ...partnerForm, contactName: e.target.value })}
                        placeholder="Founder / Lead Designer"
                        className="w-full mt-1 px-3 py-2.5 rounded-xl border border-[#023047]/20 text-xs focus:ring-1 focus:ring-[#219ebc] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-[#023047]/70 uppercase">Work Email</label>
                      <input
                        type="email"
                        required
                        value={partnerForm.email}
                        onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })}
                        placeholder="contact@brand.com"
                        className="w-full mt-1 px-3 py-2.5 rounded-xl border border-[#023047]/20 text-xs focus:ring-1 focus:ring-[#219ebc] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-[#023047]/70 uppercase">Primary Sustainable Materials Used</label>
                    <input
                      type="text"
                      required
                      value={partnerForm.materialsUsed}
                      onChange={(e) => setPartnerForm({ ...partnerForm, materialsUsed: e.target.value })}
                      placeholder="e.g. Bio-Acetate, Recycled Ocean Nylon, Upcycled Canvas, Hemp"
                      className="w-full mt-1 px-3 py-2.5 rounded-xl border border-[#023047]/20 text-xs focus:ring-1 focus:ring-[#219ebc] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-[#023047]/70 uppercase">Tell Us Your Sustainable Mission</label>
                    <textarea
                      rows={3}
                      required
                      value={partnerForm.pitch}
                      onChange={(e) => setPartnerForm({ ...partnerForm, pitch: e.target.value })}
                      placeholder="How does your production process eliminate waste or support conservation?"
                      className="w-full mt-1 px-3 py-2.5 rounded-xl border border-[#023047]/20 text-xs focus:ring-1 focus:ring-[#219ebc] focus:outline-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#fb8500] hover:bg-[#ffb703] text-[#023047] text-xs font-black tracking-wide transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Submit Brand for Solterra Audit</span>
                    <Sparkles className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          )}
        </div>

        {/* Right Info & Australian Community Hubs */}
        <div className="lg:col-span-5 space-y-6">
          {/* Basecamp Contact Card */}
          <div className="bg-[#023047] text-white rounded-3xl p-8 border border-[#219ebc]/30 space-y-6 shadow-xl">
            <h3 className="text-xl font-bold font-['Outfit'] flex items-center gap-2 text-white">
              <Building className="w-5 h-5 text-[#ffb703]" />
              <span>Solterra Head Basecamp</span>
            </h3>

            <div className="space-y-4 text-xs text-[#8ecae6]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#fb8500] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Byron Bay Flagship & Repair Lab</strong>
                  <span>14 Fletcher Street, Byron Bay NSW 2481, Australia</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#219ebc] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">General Inquiries</strong>
                  <span>hello@solterra.eco</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Explorer Line</strong>
                  <span>+61 (02) 8004 9281 (Mon–Fri 9am–5pm AEST)</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 text-[11px] text-[#8ecae6] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#ffb703]" />
              <span>100% Australian Owned & Certified B-Corp Pending</span>
            </div>
          </div>

          {/* Regional Hubs Box */}
          <div className="bg-white rounded-3xl p-6 border border-[#023047]/10 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#023047]">
              Solterra Drop-In Stockists & Loop Hubs
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-3 bg-[#FAF8F5] rounded-xl">
                <strong className="text-[#023047] block font-bold">Melbourne</strong>
                <span className="text-[#023047]/60 text-[11px]">Fitzroy Trail Collective</span>
              </div>
              <div className="p-3 bg-[#FAF8F5] rounded-xl">
                <strong className="text-[#023047] block font-bold">Sydney</strong>
                <span className="text-[#023047]/60 text-[11px]">Manly Beach Outpost</span>
              </div>
              <div className="p-3 bg-[#FAF8F5] rounded-xl">
                <strong className="text-[#023047] block font-bold">Hobart</strong>
                <span className="text-[#023047]/60 text-[11px]">Salamanca Port Gear</span>
              </div>
              <div className="p-3 bg-[#FAF8F5] rounded-xl">
                <strong className="text-[#023047] block font-bold">Perth</strong>
                <span className="text-[#023047]/60 text-[11px]">Fremantle Coastal Hub</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive FAQ Section */}
      <section className="bg-white rounded-3xl p-8 sm:p-12 border border-[#023047]/10 shadow-lg space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#fb8500] uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl font-extrabold text-[#023047] font-['Outfit']">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="border border-[#023047]/10 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full text-left p-5 bg-[#FAF8F5] hover:bg-[#F4EFEA] flex items-center justify-between font-bold text-sm text-[#023047] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#219ebc] transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="p-5 bg-white text-xs text-[#023047]/80 leading-relaxed border-t border-[#023047]/10">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
