import { Article } from '../types';

// ES Module imports for article cover illustrations and team avatars
import artTravelEssentialsImg from '../assets/articles/art-travel-essentials.svg';
import artSunProtectionImg from '../assets/articles/art-sun-protection.svg';
import artGearLongevityImg from '../assets/articles/art-gear-longevity.svg';
import artBrandSpotlightImg from '../assets/articles/art-brand-spotlight.svg';
import artLeaveNoTraceImg from '../assets/articles/art-leave-no-trace.svg';
import artCoastalExpeditionsImg from '../assets/articles/art-coastal-expeditions.svg';

import avatarJulian from '../assets/team/avatar-julian.svg';
import avatarMaya from '../assets/team/avatar-maya.svg';
import avatarFinnigan from '../assets/team/avatar-finnigan.svg';
import avatarZara from '../assets/team/avatar-zara.svg';

export const ARTICLES: Article[] = [
  {
    id: 'art-01',
    title: 'The Modern Explorer’s Guide to Sustainable Travel Essentials',
    slug: 'modern-explorers-guide-sustainable-travel-essentials',
    category: 'Sustainable Choices',
    excerpt: 'How packing smarter, lighter, and strictly circular transforms both your journey and the wild places you visit.',
    readTime: '6 min read',
    date: 'March 14, 2026',
    author: {
      name: 'Maya Henderson',
      role: 'Head of Gear Research & Trail Guide',
      avatar: avatarMaya
    },
    coverImage: artTravelEssentialsImg,
    tags: ['sustainable travel essentials', 'minimalist packing', 'eco gear', 'leave no trace'],
    keyTakeaways: [
      'Prioritize multi-use materials like titanium utensils and merino cubes over disposable travel mini-items.',
      'Check the provenance: choose brands using circular upcycled sails and ocean plastics.',
      'Repair before replace: adopting modular travel bags with accessible spare parts reduces lifetime emissions by 70%.'
    ],
    content: `
When we set out into wilderness territories or vibrant coastal towns across Australia and the globe, we often inadvertently bring along a trailing wave of micro-waste: single-use plastic hotel toiletries, cheap emergency sunglasses that shatter on day three, and synthetic gear designed for planned obsolescence.

True sustainable travel is not about sacrifice or asceticism. It is about choosing heirloom craftsmanship—gear engineered so thoughtfully that a single duffel bag traverses alpine passes, red dirt road trips, and international overhead bins for a decade.

### 1. The Power of Upcycled Sailcloth & Marine Nylon
Every year, thousands of performance racing sails reach the end of their competitive lifespan. Made from dense Dacron, Kevlar, and Mylar, this fabric cannot biodegrade in municipal landfills, yet its tensile strength exceeds virgin backpack fabrics tenfold. When brands like Drift & Tide rescue these sails, they intercept high-grade industrial textiles before they ever enter waste streams.

### 2. Zero-Waste Hydration & Dining On The Go
Airport security bins remain a disheartening graveyard for plastic water bottles and disposable forks. By carrying an ultralight grade-5 titanium cutlery kit and an insulated flask, an active traveler offsets an average of 420 single-use plastic items every single year. Titanium is naturally antimicrobial, non-reactive with citrus or hot broths, and lasts generations.

### 3. The Low-Carbon Travel Footprint
Pack light: every additional kilogram of luggage increases aviation fuel burn and road vehicle consumption. Utilizing compressible non-mulesed merino wool travel cubes lets you streamline wardrobes into carry-on luggage only, granting true travel freedom.
    `,
    relatedProductIds: ['sol-trv-01', 'sol-trv-02', 'sol-trv-03']
  },
  {
    id: 'art-02',
    title: 'Sun Protection Without Reef Destruction: Understanding Non-Nano Zinc & Bio-Acetate Eyewear',
    slug: 'sun-protection-without-reef-destruction',
    category: 'Sun Protection',
    excerpt: 'Australian UV indices demand uncompromising solar defense. Here is how modern green chemistry protects your eyes and skin without bleaching coral reefs.',
    readTime: '5 min read',
    date: 'February 28, 2026',
    author: {
      name: 'Dr. Julian Thorne',
      role: 'Marine Ecologist & Solterra Impact Advisor',
      avatar: avatarJulian
    },
    coverImage: artSunProtectionImg,
    tags: ['sun protection awareness', 'eco-friendly eyewear', 'reef safe', 'UV400'],
    keyTakeaways: [
      'Chemical sunscreens (oxybenzone & octinoxate) induce viral infections in symbiotic zooxanthellae corals even at microscopic concentrations.',
      'Non-nano zinc oxide rests as a mineral mirror atop the skin, shielding against UVA/UVB without penetrating skin cells or coral polyps.',
      'Petroleum sunglasses shed persistent microplastics; plant-derived Italian bio-acetate provides optical clarity while degrading safely.'
    ],
    content: `
Across the Great Barrier Reef, Ningaloo, and coastal bays worldwide, over 14,000 tons of sunscreen wash into marine habitats each year. Chemical filters like oxybenzone, octinoxate, and homosalate act as endocrine disruptors for aquatic organisms, bleaching pristine coral colonies at water temperatures that corals would otherwise survive.

### Mineral Barriers vs Chemical Absorbers
True reef-safe sun care relies on Non-Nano Zinc Oxide. "Non-nano" indicates particle sizes larger than 100 nanometers—too large to be ingested by coral polyps or absorbed into the human bloodstream. Formulated with native Australian botanicals like Kakadu plum and cold-pressed jojoba, modern mineral creams rub in clear without sticky chalkiness.

### The Problem With Throwaway Sunglasses
Traditional injection-molded sunglasses are made from cheap petroleum polycarbonate mixed with toxic phthalates. When dropped into waves or broken on rocks, they fragment into microplastics that seabirds and fish mistake for food. Plant-derived Bio-Acetate (M49) uses cellulose derived from sustainably managed FSC wood pulp and cotton lint. When paired with Category 3 marine-polarized UV400 lenses, you receive hospital-grade retinal protection with a net-positive environmental footprint.
    `,
    relatedProductIds: ['sol-eye-01', 'sol-cst-01', 'sol-app-03']
  },
  {
    id: 'art-03',
    title: 'The Art of Gear Longevity: How to Care For, Wash, and Repair Outdoor Essentials',
    slug: 'art-of-gear-longevity-care-and-repair',
    category: 'Gear Care & Longevity',
    excerpt: 'The most sustainable jacket or pack is the one you already own. Master technical washing, seam sealing, and zipper maintenance.',
    readTime: '7 min read',
    date: 'January 22, 2026',
    author: {
      name: 'Finnigan O’Reilly',
      role: 'Solterra Repair Lab Lead Technician',
      avatar: avatarFinnigan
    },
    coverImage: artGearLongevityImg,
    tags: ['product care and longevity', 'gear repair', 'circular fashion', 'solterra loop'],
    keyTakeaways: [
      'Never wash technical waterproof apparel in standard household detergents with fabric softeners—they clog breathable membranes.',
      'Reactivate durable water repellency (DWR) with gentle low tumble-heat after washing.',
      'Clean zipper teeth with a toothbrush and beeswax lubricant to double the lifespan of expedition luggage.'
    ],
    content: `
In an era dominated by seasonal fast-outdoor drops, extending the lifespan of your outdoor gear by just 9 months reduces its combined carbon, water, and waste footprint by an astounding 20 to 30 percent.

At the Solterra Repair Lab, we inspect hundreds of pre-loved items returned through our **Solterra Loop** circular trade-in program. More than 85% of failures stem not from worn fabrics, but from simple neglect of zippers and incorrect washing habits.

### 1. Washing Waterproof Breathable Shells
Standard laundry detergents contain optical brighteners and perfumes that leave hydrophilic (water-attracting) chemical films on waterproof shells. Always use a dedicated PFC-free tech wash. Once clean, pop the jacket into a dryer on low heat for 20 minutes: heat re-aligns the microscopic fluorocarbon-free water-beading chains, restoring factory rain performance.

### 2. Caring For Plant-Based Bio-Acetate Eyewear
Bio-acetate is an organic polymer. Avoid leaving your sunglasses perched on car dashboards in blistering 45°C summer heat, as sustained thermal expansion can distort hand-shaped frame curves. Rinse salt water immediately under a cold tap and store inside your recycled cork case.
    `,
    relatedProductIds: ['sol-app-01', 'sol-eye-01', 'sol-trv-01']
  },
  {
    id: 'art-04',
    title: 'Ethical Brand Spotlight: How Byron Bay Craftsmen Are Transforming Ghost Nets Into Adventure Gear',
    slug: 'ethical-brand-spotlight-ghost-nets-adventure-gear',
    category: 'Brand Spotlight',
    excerpt: 'Go behind the scenes with ReefGuard and Ochre & Tide to see how abandoned commercial trawler nets are transformed into sleek outdoor lifestyle products.',
    readTime: '6 min read',
    date: 'January 10, 2026',
    author: {
      name: 'Zara Chen',
      role: 'Head of Brand Curation & Ethical Audits',
      avatar: avatarZara
    },
    coverImage: artBrandSpotlightImg,
    tags: ['ethical outdoor brands', 'ocean plastic recycled', 'maker spotlight', 'byron bay'],
    keyTakeaways: [
      'Commercial ghost fishing nets account for nearly 46% of total plastic mass in open ocean gyres.',
      'Collaborative beach sweeps with Indigenous coastal ranger networks create fair living wages in remote communities.',
      'Regenerated polyamide pellets retain the structural strength of virgin plastic while using 80% less fossil energy.'
    ],
    content: `
Along the sweeping headlands of Byron Bay and the remote shores of the Gulf of Carpentaria, a quiet revolution in outdoor manufacturing is underway.

Commercial monofilament and gill nets are engineered not to break under hundreds of kilograms of thrashing oceanic load. When lost or discarded at sea, these "ghost nets" drift autonomously for decades, entangling sea turtles, manta rays, and dugongs.

Through Solterra’s partnership with ReefGuard Optic Lab and local coastal clean-up collectives, recovered nets undergo sorting, high-pressure desalination, and mechanical pelletization. The outcome is a hyper-durable high-impact polymer with natural vibration damping—ideal for rugged eyewear frames and adventure cap visors.

"When our customers wear these navigators, they aren't wearing a recycled compromise," explains founder Liam Vance. "They are wearing a tactical piece of ocean recovery."
    `,
    relatedProductIds: ['sol-eye-02', 'sol-app-03', 'sol-cst-02']
  },
  {
    id: 'art-05',
    title: 'Leave No Trace 2.0: Crucial Outdoor Skills for the Next Generation of Hikers',
    slug: 'leave-no-trace-outdoor-skills-hikers',
    category: 'Outdoor Skills',
    excerpt: 'Beyond packing out your granola wrapper: campfire safety, soil biology preservation, and respectful backcountry travel.',
    readTime: '8 min read',
    date: 'December 18, 2025',
    author: {
      name: 'Maya Henderson',
      role: 'Head of Gear Research & Trail Guide',
      avatar: avatarMaya
    },
    coverImage: artLeaveNoTraceImg,
    tags: ['outdoor skills and education', 'leave no trace', 'bushwalking', 'adventure travel gear'],
    keyTakeaways: [
      'Stay strictly centered on designated trails to prevent severe erosion corridors on alpine and coastal dunes.',
      'Camp at least 60 meters (approx 70 adult paces) away from lakes and streams to protect wildlife access corridors.',
      'Switch from wood campfires to efficient solar beacons and gas stoves during high fire danger seasons.'
    ],
    content: `
As outdoor recreation surges in popularity, fragile ecosystems from the Blue Mountains to the Flinders Ranges are experiencing unprecedented pressures. Being an authentic outdoor enthusiast in the modern era requires elevating our environmental etiquette.

### 1. Campfire Culture in the Anthropocene
A roaring campfire has long been the romantic icon of basecamp. However, in fire-prone landscapes like Australia and the western Americas, gathering deadfall robs subterranean insects and reptiles of vital habitat. During dry summer cycles, ember drift creates devastating bushfire risks. Utilizing solar camp beacons like the Helios provides 300 lumens of ambient warm light with zero spark hazards.

### 2. Micro-Trash and Food Scraps
An orange peel takes up to 2 years to decompose in temperate climates and up to 5 years in arid desert soils. Apple cores and food waste disrupt wildlife foraging instincts. Everything packed in must be sealed in reusable bags and packed out.
    `,
    relatedProductIds: ['sol-gear-01', 'sol-trv-02', 'sol-app-01']
  },
  {
    id: 'art-06',
    title: 'Coastal Expeditions & Secret Swells: A Sustainable Guide to Australia’s Great Ocean Road',
    slug: 'coastal-expeditions-great-ocean-road',
    category: 'Travel Inspiration',
    excerpt: 'Breathtaking sea cliffs, rainforest waterfalls, and low-impact eco-stays along Victoria’s iconic coastal highway.',
    readTime: '6 min read',
    date: 'December 04, 2025',
    author: {
      name: 'Dr. Julian Thorne',
      role: 'Marine Ecologist & Solterra Impact Advisor',
      avatar: avatarJulian
    },
    coverImage: artCoastalExpeditionsImg,
    tags: ['travel accessories Australia', 'outdoor lifestyle brand', 'great ocean road', 'eco travel'],
    keyTakeaways: [
      'Travel during shoulder seasons (April-May or October-November) to reduce seasonal town water strain and road congestion.',
      'Support locally certified eco-accommodations that run on rooftop solar and rainwater collection.',
      'Always equip polarized eyewear with anti-reflective back-coating to spot marine wildlife beneath coastal swells.'
    ],
    content: `
Carved into towering limestone and sandstone cliffs, the Great Ocean Road remains one of the world's most dramatic maritime corridors. From Torquay’s legendary surf breaks to the misty fern gullies of the Otways, traveling this coast responsibly means treading lightly on sensitive coastal headlands.

Pack a sand-free recycled towel, your non-nano zinc mineral shield, and a modular upcycled duffel. Experience basecamps powered 100% by offshore wind and solar, dine at farm-to-table regenerative eateries in Apollo Bay, and marvel at Southern Right Whales breaching off Logans Beach.
    `,
    relatedProductIds: ['sol-cst-02', 'sol-eye-01', 'sol-trv-01']
  }
];
