import { BrandPartner } from '../types';

// ES Module imports for brand visual assets
import brandOchreImg from '../assets/brands/brand-ochre.svg';
import brandDriftImg from '../assets/brands/brand-drift.svg';
import brandReefguardImg from '../assets/brands/brand-reefguard.svg';
import brandSolaraImg from '../assets/brands/brand-solara.svg';
import brandPacificImg from '../assets/brands/brand-pacific.svg';

export const BRANDS: BrandPartner[] = [
  {
    id: 'b-ochre',
    name: 'Ochre & Tide Eyewear',
    location: 'Byron Bay, NSW, Australia',
    foundingYear: 2021,
    specialty: 'Plant Bio-Acetate Polarized Eyewear & Bamboo Optics',
    certifications: ['1% For The Planet', 'Climate Neutral Certified'],
    impactHighlight: 'Diverted 8.4 tons of petroleum plastic from landfills using plant-based M49 cellulose.',
    story: 'Founded by coastal surfers and biologists, Ochre & Tide redefines premium optics by substituting petrochemical resins with organic plant seeds and certified wood pulp.',
    image: brandOchreImg
  },
  {
    id: 'b-drift',
    name: 'Drift & Tide Gear',
    location: 'Hobart, Tasmania, Australia',
    foundingYear: 2019,
    specialty: 'Upcycled High-Tenacity Racing Sail Travel Luggage',
    certifications: ['Fair Trade Certified', 'Solterra Loop Partner'],
    impactHighlight: 'Rescued over 16,000 square meters of competition Dacron & Kevlar sails.',
    story: 'Handcrafted in Tasmania’s historic maritime ports, Drift & Tide creates modular expedition duffels and bags engineered to endure saltwater, monsoons, and airline baggage handlers.',
    image: brandDriftImg
  },
  {
    id: 'b-reefguard',
    name: 'ReefGuard Optic Lab',
    location: 'Gold Coast, QLD, Australia',
    foundingYear: 2022,
    specialty: 'Ghost-Net Recycled Polymer Sunglasses & Trail Specs',
    certifications: ['B-Corp Certified', 'Ocean Plastic Recycled'],
    impactHighlight: 'Collected 14,200 kg of abandoned fishing gillnets across northern Australian reefs.',
    story: 'Working alongside Indigenous Ranger groups, ReefGuard converts toxic marine ghost nets into shatterproof polarized eyewear with zero virgin plastic.',
    image: brandReefguardImg
  },
  {
    id: 'b-solara',
    name: 'Solara Outdoor Engineering',
    location: 'Fremantle, WA, Australia',
    foundingYear: 2020,
    specialty: 'Clean Solar Camp Beacons, Storage & Off-Grid Living',
    certifications: ['1% For The Planet', 'B-Corp Pending'],
    impactHighlight: 'Provided over 1,200 solar camp kits to indigenous communities and regional search & rescue.',
    story: 'Harnessing the immense Western Australian sunshine, Solara creates collapsible, durable solar lighting that frees basecamp from single-use battery pollution.',
    image: brandSolaraImg
  },
  {
    id: 'b-pacific',
    name: 'Pacific BioThread',
    location: 'Byron Bay, NSW, Australia',
    foundingYear: 2018,
    specialty: 'Regenerative Industrial Hemp & Organic Apparel',
    certifications: ['GOTS Organic', 'Fair Trade Certified'],
    impactHighlight: '100% natural plant and mineral indigo dyeing with zero toxic wastewater discharge.',
    story: 'Dedicated to revitalizing heritage industrial hemp farming across Australia, crafting adventure apparel that grows softer with every salt dip.',
    image: brandPacificImg
  }
];
