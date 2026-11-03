import { Product } from '../types';

// ES Module Imports for all product assets so Vite bundles them into dist/assets/
import auraSunglassesImg from '../assets/products/aura-sunglasses.svg';
import auraDetailImg from '../assets/products/aura-sunglasses-detail.svg';
import kallistaSunglassesImg from '../assets/products/kallista-sunglasses.svg';
import sailclothDuffelImg from '../assets/products/sailcloth-duffel.svg';
import titaniumCutleryImg from '../assets/products/titanium-cutlery.svg';
import merinoCubesImg from '../assets/products/merino-cubes.svg';
import solarLanternImg from '../assets/products/solar-lantern.svg';
import climbingRopeLeashImg from '../assets/products/climbing-rope-leash.svg';
import mineralSunscreenImg from '../assets/products/mineral-sunscreen.svg';
import sandFreeTowelImg from '../assets/products/sand-free-towel.svg';
import stormAnorakImg from '../assets/products/storm-anorak.svg';
import hempShortsImg from '../assets/products/hemp-shorts.svg';
import hempCapImg from '../assets/products/hemp-cap.svg';

export const PRODUCTS: Product[] = [
  {
    id: 'sol-eye-01',
    name: 'Aura Bio-Acetate Polarized Sunglasses',
    brand: 'Ochre & Tide Eyewear',
    brandLocation: 'Byron Bay, Australia',
    tagline: 'Crafted from plant-derived Italian bio-acetate with glare-eliminating marine UV400 lenses.',
    price: 185,
    originalPrice: 220,
    category: 'eyewear',
    audience: ['Outdoor Explorers', 'Beach & Coastal', 'Festival Goers', 'Gift Buyers'],
    rating: 4.9,
    reviewsCount: 142,
    ecoScore: 98,
    ecoBadges: ['Plant Bio-Acetate', '100% Biodegradable Frame', '1% For The Planet'],
    certifications: ['1% For The Planet', 'Climate Neutral'],
    impactMetrics: {
      plasticBottlesSaved: 12,
      co2SavedKg: 4.8,
      waterSavedLiters: 45,
      treesPlanted: 2
    },
    materials: ['M49 Bio-based Acetate (cotton & wood pulp seeds)', 'Scratch-resistant CR-39 Polarized Lenses', 'Recycled brass hinges'],
    description: 'Designed under the relentless Australian sun, the Aura silhouette balances classic timeless contours with cutting-edge plant chemistry. Every pair is shaped by hand from biodegradable acetate that breaks down safely in compost without chemical microplastic residue.',
    story: 'Ochre & Tide was started by two marine biologists in Byron Bay who grew weary of finding cheap petroleum sunglasses washing up on protected reefs.',
    features: [
      'Category 3 UV400 polarized optics offering 99.9% blue light and sun glare suppression',
      'Ultra-comfortable lightweight ergonomic nose bridge for all-day trekking or surf checks',
      'Accompanied by a recycled cork protective case and microfiber cloth made from salvaged ocean nets',
      'Zero synthetic petroleum phthalates or toxic chemical plasticizers'
    ],
    careGuide: 'Rinse with fresh lukewarm water after salt spray exposure. Polish with the provided ocean-plastic microfiber pouch.',
    images: [
      auraSunglassesImg,
      auraDetailImg
    ],
    inStock: true,
    isBestseller: true,
    isNew: false,
    colors: [
      { name: 'Amber Tortoise', hex: '#fb8500' },
      { name: 'Ocean Abyssal', hex: '#023047' },
      { name: 'Sandstone Crystal', hex: '#E8E2D9' }
    ]
  },
  {
    id: 'sol-eye-02',
    name: 'Kallista Recycled Ghost-Net Navigators',
    brand: 'ReefGuard Optic Lab',
    brandLocation: 'Gold Coast, Australia',
    tagline: 'Ultralight, virtually indestructible sunglasses forged from recovered commercial fishing gillnets.',
    price: 165,
    category: 'eyewear',
    audience: ['Outdoor Explorers', 'Beach & Coastal', 'Adventure Travellers'],
    rating: 4.8,
    reviewsCount: 88,
    ecoScore: 99,
    ecoBadges: ['Ocean Plastic Recycled', 'Indestructible Flex', 'Closed-Loop Trade-In'],
    certifications: ['Ocean Plastic Recycled', 'B-Corp Certified'],
    impactMetrics: {
      plasticBottlesSaved: 28,
      co2SavedKg: 6.2,
      waterSavedLiters: 80,
      treesPlanted: 3
    },
    materials: ['100% Recycled Ocean Fishing Nets (Polyamide 6)', 'Triacetate Cellulose (TAC) Polarized Core', 'Stainless steel flex hinges'],
    description: 'Ghost fishing nets are the most lethal ocean hazard for marine life. ReefGuard transforms this high-strength marine nylon into ultra-resilient frames with flex-memory temples that never slip off your head during trail runs, kayaking, or coastal breezes.',
    story: 'Recovered directly in partnership with Indigenous coastal ranger networks across Northern Australia.',
    features: [
      'Floats momentarily if dropped in calm salt water',
      'Hydrophobic and oleophobic lens coating that repels sea spray and sunscreen smudges',
      'Lifetime hinge warranty with free replacement screws or Solterra Loop recycling'
    ],
    careGuide: 'Wash with mild soap and dry with clean soft cloth. Safe for heavy ocean sport use.',
    images: [
      kallistaSunglassesImg,
      auraDetailImg
    ],
    inStock: true,
    isBestseller: false,
    isNew: true,
    colors: [
      { name: 'Deep Pacific Matte', hex: '#219ebc' },
      { name: 'Carbon Black', hex: '#111827' }
    ]
  },
  {
    id: 'sol-trv-01',
    name: 'Nomad 35L Modular Upcycled Sailcloth Duffel',
    brand: 'Drift & Tide Gear',
    brandLocation: 'Hobart, Tasmania',
    tagline: 'Weatherproof expedition duffel made from retired yacht sails and recycled climbing harness webbing.',
    price: 245,
    originalPrice: 280,
    category: 'travel-essentials',
    audience: ['Adventure Travellers', 'Outdoor Explorers', 'Festival Goers'],
    rating: 5.0,
    reviewsCount: 96,
    ecoScore: 97,
    ecoBadges: ['Upcycled Racing Sails', 'Waterproof IPX6', 'Lifetime Repair'],
    certifications: ['Fair Trade', 'Climate Neutral'],
    impactMetrics: {
      plasticBottlesSaved: 42,
      co2SavedKg: 14.5,
      waterSavedLiters: 320,
      treesPlanted: 5
    },
    materials: ['Dacron & Kevlar Racing Sail Upcycled Canvas', '100% Recycled YKK AquaGuard Zippers', 'Upcycled aircraft aluminum buckles'],
    description: 'Built for Australian outback road trips, airline carry-on transit, and rainy alpine expeditions. Because every panel comes from genuine retired racing sails, no two bags in the world share the exact same stitching path or sail number.',
    story: 'Each duffel includes an etched brass tag noting the original vessel name, sail year, and nautical miles crossed.',
    features: [
      'Converts in 3 seconds from hand duffel to ergonomic backpack with stowable padded straps',
      'Separate waterproof ventilated compartment for dirty boots, damp wetsuits, or laundry',
      'Hidden passport and RFID travel tech pocket with magnetic weather flap',
      'Cabin-approved dimensions for all domestic & international airlines'
    ],
    careGuide: 'Spot clean with cool water and natural soap. Air dry in the shade.',
    images: [
      sailclothDuffelImg,
      auraDetailImg
    ],
    inStock: true,
    isBestseller: true,
    isNew: false,
    colors: [
      { name: 'Nautical White & Gold', hex: '#ffb703' },
      { name: 'Storm Grey Sail', hex: '#4B5563' }
    ]
  },
  {
    id: 'sol-trv-02',
    name: 'Aero Titanium Ultralight Camp & Travel Cutlery Set',
    brand: 'Wildcraft Labs',
    brandLocation: 'Melbourne, Australia',
    tagline: 'Precision laser-cut 100% recycled titanium utensil kit with organic hemp roll-up pouch.',
    price: 48,
    category: 'travel-essentials',
    audience: ['Adventure Travellers', 'Outdoor Explorers', 'Gift Buyers'],
    rating: 4.9,
    reviewsCount: 215,
    ecoScore: 96,
    ecoBadges: ['Zero-Waste Single Use', 'Recycled Aerospace Grade', 'Heirloom Longevity'],
    certifications: ['Fair Trade', 'Biodegradable'],
    impactMetrics: {
      plasticBottlesSaved: 18,
      co2SavedKg: 3.1,
      waterSavedLiters: 25,
      treesPlanted: 1
    },
    materials: ['Recycled Grade-5 Titanium', 'GOTS Certified Organic Hemp Pouch', 'Non-toxic beeswax thread'],
    description: 'Eliminate single-use plastic cutlery while traveling airports, food trucks, backcountry trails, and road trips. Weighs merely 46 grams, will never rust, warp, or impart metallic aftertastes.',
    story: 'Designed to outlast generations of travel. A single kit saves an estimated 1,800 disposable plastic forks over its lifetime.',
    features: [
      'Full set includes knife with functional serration, spoon, fork, and reusable titanium straw with cleaning brush',
      'Hemp pouch includes quick carabiner loop for clipping to packs',
      'Dishwasher safe and antimicrobial natural oxide layer'
    ],
    careGuide: 'Hand wash or dishwasher safe. Dry completely before re-rolling in hemp pouch.',
    images: [
      titaniumCutleryImg,
      auraDetailImg
    ],
    inStock: true,
    isBestseller: false,
    isNew: false
  },
  {
    id: 'sol-trv-03',
    name: 'Merino Cloud Compressible Travel Cubes (Set of 3)',
    brand: 'Alpine BioThread',
    brandLocation: 'Canberra, Australia',
    tagline: 'Ultralight packing cubes blending non-mulesed ethical Australian Merino wool with recycled ripstop mesh.',
    price: 79,
    category: 'travel-essentials',
    audience: ['Adventure Travellers', 'Gift Buyers', 'Everyday Urban'],
    rating: 4.8,
    reviewsCount: 74,
    ecoScore: 97,
    ecoBadges: ['Ethical Non-Mulesed Wool', 'Plastic-Free Odor Defense', 'GOTS Certified'],
    certifications: ['GOTS Organic', 'Fair Trade'],
    impactMetrics: {
      plasticBottlesSaved: 15,
      co2SavedKg: 5.4,
      waterSavedLiters: 110,
      treesPlanted: 2
    },
    materials: ['60% Ethical Australian Merino Wool', '40% Recycled PET Ripstop Grid', 'Self-repairing coil zippers'],
    description: 'Natural moisture-wicking and antibacterial merino fibers keep your travel clothes fresh in transit without odor buildup. Compresses packing volume by up to 45% effortlessly.',
    story: 'Sourced from regenerative sheep farms in the Snowy Mountains committed to holistic soil carbon sequestration.',
    features: [
      'Double compression zipper track lets you expand or slim down according to trip demands',
      'Breathable top window reveals contents without unzipping',
      'Includes Small (socks/underwear), Medium (shirts/shorts), Large (sweaters/trousers)'
    ],
    careGuide: 'Gentle wool wash or hand rinse in cool water. Lay flat to dry.',
    images: [
      merinoCubesImg,
      auraDetailImg
    ],
    inStock: true,
    isBestseller: false,
    isNew: true
  },
  {
    id: 'sol-gear-01',
    name: 'Helios Foldable Solar Camp Lantern & Power Bank',
    brand: 'Solara Outdoor Engineering',
    brandLocation: 'Perth, Australia',
    tagline: 'Sun-fueled collapsible silicone camp beacon that powers your phone while lighting basecamp.',
    price: 92,
    originalPrice: 110,
    category: 'outdoor-gear',
    audience: ['Outdoor Explorers', 'Festival Goers', 'Adventure Travellers'],
    rating: 4.9,
    reviewsCount: 168,
    ecoScore: 95,
    ecoBadges: ['100% Solar Self-Sustaining', 'Food-Grade Silicone', 'Zero Toxic Batteries'],
    certifications: ['1% For The Planet', 'Climate Neutral'],
    impactMetrics: {
      plasticBottlesSaved: 22,
      co2SavedKg: 9.8,
      waterSavedLiters: 65,
      treesPlanted: 3
    },
    materials: ['High-Efficiency Monocrystalline Silicon Panel', 'Food-Grade Recyclable Translucent Silicone', 'Cobalt-free LFP safe battery cell'],
    description: 'Crushes flat like a pancake for packing, pops up into an ambient 300-lumen warm beacon. Equipped with USB-C bi-directional charging to top off phones or cameras deep in the wilderness.',
    story: 'Solara is committed to universal off-grid clean illumination. For every 10 lanterns sold, one is donated to disaster relief and off-grid communities.',
    features: [
      'Warm sunset LED glow mode, daylight focus mode, and red night-vision preservation mode',
      'Integrated solar charging: 8 hours in sunlight equals 35 hours of soft ambient light',
      'IP67 waterproof and floatable in lake or ocean water'
    ],
    careGuide: 'Wipe solar crystal top clean with damp cloth to maximize solar photon absorption.',
    images: [
      solarLanternImg,
      auraDetailImg
    ],
    inStock: true,
    isBestseller: true,
    isNew: false
  },
  {
    id: 'sol-gear-02',
    name: 'TerraGrip Recycled Climbing Rope Dog Leash & Belt',
    brand: 'SummitCycle Goods',
    brandLocation: 'Blue Mountains, Australia',
    tagline: 'Hand-spliced heavy-duty utility strap crafted from retired dynamic rock climbing ropes.',
    price: 52,
    category: 'outdoor-gear',
    audience: ['Outdoor Explorers', 'Gift Buyers'],
    rating: 4.9,
    reviewsCount: 104,
    ecoScore: 98,
    ecoBadges: ['Upcycled Climbing Rope', 'Rated to 12kN', 'Handmade in Australia'],
    certifications: ['Fair Trade', 'Climate Neutral'],
    impactMetrics: {
      plasticBottlesSaved: 30,
      co2SavedKg: 7.2,
      waterSavedLiters: 90,
      treesPlanted: 2
    },
    materials: ['Upcycled Polyamide Climbing Rope', 'Solid aviation brass swivel snap', 'Double-sheathed core'],
    description: 'Climbing ropes must be retired for safety reasons long before the nylon degrades. SummitCycle rescues these vibrant, high-tensile cords from climbing gyms and alpine guides to create indestructible accessories.',
    story: 'Handcrafted in Katoomba, Blue Mountains by experienced local rock climbers.',
    features: [
      'Shock-absorbing dynamic give eases pulling impact on hikes',
      'Dual traffic-handle grips for crowded city transitions or rocky trails',
      'Reflective strand woven into core for nighttime visibility'
    ],
    careGuide: 'Machine wash in laundry bag with cold water, air dry.',
    images: [
      climbingRopeLeashImg,
      auraDetailImg
    ],
    inStock: true,
    isBestseller: false,
    isNew: true
  },
  {
    id: 'sol-cst-01',
    name: 'Pure Sol Mineral SPF 50+ Reef-Safe Sun Shield (150ml)',
    brand: 'Solterra Botanical Labs',
    brandLocation: 'Noosa Heads, Australia',
    tagline: 'Non-nano zinc oxide sunscreen infused with native Kakadu plum and Tasmanian mountain pepperberry.',
    price: 36,
    category: 'coastal-sun',
    audience: ['Beach & Coastal', 'Outdoor Explorers', 'Festival Goers', 'Adventure Travellers'],
    rating: 4.9,
    reviewsCount: 310,
    ecoScore: 99,
    ecoBadges: ['100% Reef-Safe', 'Non-Nano Zinc', 'Aluminium Recyclable Tube'],
    certifications: ['Biodegradable', '1% For The Planet', 'B-Corp Certified'],
    impactMetrics: {
      plasticBottlesSaved: 8,
      co2SavedKg: 2.4,
      waterSavedLiters: 15,
      treesPlanted: 1
    },
    materials: ['22.5% Non-Nano Zinc Oxide (Active)', 'Organic Kakadu Plum Extract (Vitamin C)', 'Cold-pressed Jojoba Seed Oil', 'Organic Beeswax'],
    description: 'Australia has the harshest UV conditions on earth. Pure Sol delivers 4 hours water-resistant broad-spectrum UVA/UVB barrier defense without oxybenzone, octinoxate, or chemical preservatives that bleach coral reefs and harm marine biodiversity.',
    story: 'Formulated in collaboration with marine ecologists at the Great Barrier Reef Legacy Foundation.',
    features: [
      'Zero white cast formula rubs invisible into all skin tones with a soft matte velvet finish',
      '4 hours water-resistant for surfing, swimming, and heavy perspiration',
      'Packed in an endlessly recyclable aluminium tube with FSC paper packaging'
    ],
    careGuide: 'Reapply every 2 hours or after 80 minutes of swimming or toweling off.',
    images: [
      mineralSunscreenImg,
      auraDetailImg
    ],
    inStock: true,
    isBestseller: true,
    isNew: false
  },
  {
    id: 'sol-cst-02',
    name: 'WanderWave Recycled Ocean Plastic Sand-Free Beach Towel',
    brand: 'Coast & Current',
    brandLocation: 'Margaret River, Australia',
    tagline: 'Ultra-absorbent, rapid-dry towel crafted from 28 recycled plastic bottles that repels sand like magic.',
    price: 58,
    category: 'coastal-sun',
    audience: ['Beach & Coastal', 'Festival Goers', 'Adventure Travellers'],
    rating: 4.8,
    reviewsCount: 195,
    ecoScore: 97,
    ecoBadges: ['28 Recycled Bottles', 'Sand-Repelling Weave', 'Dries 3x Faster'],
    certifications: ['Ocean Plastic Recycled', 'Fair Trade'],
    impactMetrics: {
      plasticBottlesSaved: 28,
      co2SavedKg: 5.8,
      waterSavedLiters: 140,
      treesPlanted: 2
    },
    materials: ['85% Recycled Post-Consumer PET Poly', '15% Recycled Polyamide', 'Water-based eco pigment inks'],
    description: 'One brisk shake and every grain of beach sand slides right off. Absorbs more than 1 liter of water yet rolls down smaller than a water bottle, making it the supreme coastal travel essential.',
    story: 'Custom printed with topographic contour maps of iconic Australian coastlines using non-toxic water-based inks.',
    features: [
      'Sand-free waffle weave technology prevents beach grit from tracking into cars or tents',
      'Hidden corner zippered stash pocket for hotel key, phone, or bio-acetate sunglasses',
      'Integrated hanging loop with snap closure'
    ],
    careGuide: 'Machine wash cold with eco detergent. Tumble dry low or sun dry in 20 minutes.',
    images: [
      sandFreeTowelImg,
      auraDetailImg
    ],
    inStock: true,
    isBestseller: true,
    isNew: false,
    colors: [
      { name: 'Sunburst Amber', hex: '#ffb703' },
      { name: 'Lagoon Cyan', hex: '#219ebc' },
      { name: 'Tidepool Navy', hex: '#023047' }
    ]
  },
  {
    id: 'sol-app-01',
    name: 'TerraShell Recycled Storm Anorak',
    brand: 'Outback & Alpine Co',
    brandLocation: 'Melbourne, Australia',
    tagline: 'Breathable 3-layer weatherproof expedition jacket constructed from 100% recycled nylon with PFAS-free DWR.',
    price: 295,
    originalPrice: 340,
    category: 'apparel',
    audience: ['Outdoor Explorers', 'Adventure Travellers'],
    rating: 4.9,
    reviewsCount: 82,
    ecoScore: 98,
    ecoBadges: ['PFAS-Free Waterproofing', '100% Recycled Nylon', 'Solterra Loop Eligible'],
    certifications: ['B-Corp Certified', 'Fair Trade', 'Climate Neutral'],
    impactMetrics: {
      plasticBottlesSaved: 36,
      co2SavedKg: 18.2,
      waterSavedLiters: 420,
      treesPlanted: 6
    },
    materials: ['100% Recycled High-Tenacity Ripstop Nylon', 'Plant-based hydrophobic bio-membrane', 'PFAS-Free Bionic-Finish® ECO'],
    description: 'Traditional waterproof shells coat toxic forever chemicals (PFAS/PFCs) that poison mountain waterways. TerraShell uses a groundbreaking bio-polymer membrane that shields you from driving sleet and coastal storms while breathing effortlessly on steep climbs.',
    story: 'Field-tested in the gale-force storms of Tasmania’s Cradle Mountain and the Flinders Ranges.',
    features: [
      '20,000mm hydrostatic head waterproof rating with 25,000g/m² breathability',
      'Underarm dual-direction pit zips for rapid heat dump on uphill pushes',
      'Helmet-compatible storm hood with 3-point cohaesive cord adjustment system',
      'Includes emergency field patch kit and lifetime repair coverage'
    ],
    careGuide: 'Wash with tech-wash detergent; tumble dry warm for 20 minutes to reactivate water repellency.',
    images: [
      stormAnorakImg,
      auraDetailImg
    ],
    inStock: true,
    isBestseller: true,
    isNew: false,
    colors: [
      { name: 'Terra Rust', hex: '#fb8500' },
      { name: 'Deep Pacific', hex: '#023047' },
      { name: 'Eucalyptus Sage', hex: '#2a6f5d' }
    ]
  },
  {
    id: 'sol-app-02',
    name: 'WildHemp Expedition Field Shorts',
    brand: 'Pacific BioThread',
    brandLocation: 'Byron Bay, Australia',
    tagline: 'Rugged, odor-resistant trail shorts woven from industrial hemp and organic fair-trade canvas.',
    price: 110,
    category: 'apparel',
    audience: ['Outdoor Explorers', 'Beach & Coastal', 'Festival Goers'],
    rating: 4.8,
    reviewsCount: 65,
    ecoScore: 96,
    ecoBadges: ['55% Industrial Hemp', 'GOTS Organic Cotton', 'Natural Plant Dye'],
    certifications: ['GOTS Organic', 'Fair Trade'],
    impactMetrics: {
      plasticBottlesSaved: 10,
      co2SavedKg: 4.2,
      waterSavedLiters: 280,
      treesPlanted: 2
    },
    materials: ['55% True Industrial Hemp', '45% GOTS Certified Organic Cotton', 'Corozo palm nut buttons'],
    description: 'Hemp fibers are 4 times stronger than cotton and require zero pesticides or synthetic irrigation to grow. These shorts soften into butter with every saltwater dip and mountain hike while resisting tears on sharp granite boulders.',
    story: 'Dyed using natural mineral clays and indigo extracts in a closed-loop zero-discharge facility.',
    features: [
      'Deep mesh pocket bags that drain water and sand instantly',
      'Reinforced gusseted crotch for unrestricted climbing and scrambling mobility',
      'Integrated web belt with anodized low-profile metal hook buckle'
    ],
    careGuide: 'Cold wash with gentle eco detergent. Hang dry.',
    images: [
      hempShortsImg,
      auraDetailImg
    ],
    inStock: true,
    isBestseller: false,
    isNew: true,
    colors: [
      { name: 'Desert Dune', hex: '#d4a373' },
      { name: 'Night Sky Navy', hex: '#023047' }
    ]
  },
  {
    id: 'sol-app-03',
    name: 'SolarPath 5-Panel Organic Hemp Trail Cap',
    brand: 'Ochre & Tide Eyewear',
    brandLocation: 'Byron Bay, Australia',
    tagline: 'Breathable UPF 50+ adventure cap with recycled fishing net brim and sweat-wicking bamboo browband.',
    price: 44,
    category: 'apparel',
    audience: ['Outdoor Explorers', 'Beach & Coastal', 'Festival Goers', 'Gift Buyers'],
    rating: 4.9,
    reviewsCount: 118,
    ecoScore: 98,
    ecoBadges: ['Recycled Net Visor', 'UPF 50+ Sun Guard', 'Organic Hemp Body'],
    certifications: ['Fair Trade', 'Ocean Plastic Recycled'],
    impactMetrics: {
      plasticBottlesSaved: 14,
      co2SavedKg: 2.1,
      waterSavedLiters: 60,
      treesPlanted: 1
    },
    materials: ['100% Organic Hemp Canvas', '100% Recycled Bureo NetPlus® Visor', 'Organic Bamboo Terry sweatband'],
    description: 'The definitive companion for sunny ridgeline hikes, beach days, and outdoor music festivals. The visor is formed from 100% recycled discarded fishing nets, holding its curve without cracking.',
    story: 'Designed to pair effortlessly with our bio-acetate sunglasses for comprehensive UV protection.',
    features: [
      'Flexible packable brim folds into pockets without losing its structural memory',
      'Breathable side eyelets keep air flowing during hot afternoon adventures',
      'Adjustable nylon webbing strap with quiet quick-release buckle'
    ],
    careGuide: 'Hand wash with mild soap in cold water, reshape and dry flat.',
    images: [
      hempCapImg,
      auraDetailImg
    ],
    inStock: true,
    isBestseller: true,
    isNew: false,
    colors: [
      { name: 'Solterra Navy & Ochre', hex: '#023047' },
      { name: 'Amber Clay', hex: '#fb8500' },
      { name: 'Sky Cyan', hex: '#8ecae6' }
    ]
  }
];

export const CATEGORIES_CONFIG = [
  { id: 'all', name: 'All Products', count: PRODUCTS.length, icon: 'Compass' },
  { id: 'eyewear', name: 'Eco Eyewear', count: PRODUCTS.filter(p => p.category === 'eyewear').length, icon: 'Glasses' },
  { id: 'travel-essentials', name: 'Travel Essentials', count: PRODUCTS.filter(p => p.category === 'travel-essentials').length, icon: 'Luggage' },
  { id: 'outdoor-gear', name: 'Outdoor Gear', count: PRODUCTS.filter(p => p.category === 'outdoor-gear').length, icon: 'Tent' },
  { id: 'coastal-sun', name: 'Coastal & Sun Care', count: PRODUCTS.filter(p => p.category === 'coastal-sun').length, icon: 'Sun' },
  { id: 'apparel', name: 'Apparel & Layers', count: PRODUCTS.filter(p => p.category === 'apparel').length, icon: 'Shirt' }
];

export const CERTIFICATIONS_LIST = [
  'Fair Trade',
  '1% For The Planet',
  'B-Corp Certified',
  'Ocean Plastic Recycled',
  'GOTS Organic',
  'Biodegradable',
  'Climate Neutral'
];
