export type CategoryType = 
  | 'all' 
  | 'eyewear' 
  | 'travel-essentials' 
  | 'outdoor-gear' 
  | 'coastal-sun' 
  | 'apparel';

export type EcoCertification = 
  | 'Fair Trade' 
  | '1% For The Planet' 
  | 'B-Corp Certified' 
  | 'Ocean Plastic Recycled' 
  | 'GOTS Organic' 
  | 'Biodegradable' 
  | 'Climate Neutral';

export type AudienceType = 
  | 'Outdoor Explorers' 
  | 'Adventure Travellers' 
  | 'Coastal & Beach' 
  | 'Beach & Coastal'
  | 'Festival Goers' 
  | 'Everyday Urban' 
  | 'Gift Buyers';

export interface ProductImpact {
  plasticBottlesSaved: number;
  co2SavedKg: number;
  waterSavedLiters: number;
  treesPlanted: number;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  brandLocation: string;
  tagline: string;
  price: number; // in AUD
  originalPrice?: number;
  category: CategoryType;
  audience: AudienceType[];
  rating: number;
  reviewsCount: number;
  ecoScore: number; // e.g. 94 - 99
  ecoBadges: string[];
  certifications: EcoCertification[];
  impactMetrics: ProductImpact;
  materials: string[];
  description: string;
  story: string;
  features: string[];
  careGuide: string;
  images: string[];
  inStock: boolean;
  isBestseller?: boolean;
  isNew?: boolean;
  colors?: { name: string; hex: string }[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
}

export type Currency = 'AUD' | 'USD' | 'EUR' | 'GBP';

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: 'Travel Inspiration' | 'Sustainable Choices' | 'Sun Protection' | 'Gear Care & Longevity' | 'Brand Spotlight' | 'Outdoor Skills';
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  readTime: string;
  date: string;
  coverImage: string;
  tags: string[];
  keyTakeaways: string[];
  relatedProductIds?: string[];
}

export interface BrandPartner {
  id: string;
  name: string;
  location: string;
  story: string;
  foundingYear: number;
  specialty: string;
  certifications: string[];
  impactHighlight: string;
  image: string;
}

export interface Experience {
  id: string;
  title: string;
  location: string;
  duration: string;
  difficulty: 'Gentle' | 'Moderate' | 'Challenging';
  groupSize: string;
  price: number;
  image: string;
  ecoRating: number;
  highlights: string[];
  description: string;
  included: string[];
}
