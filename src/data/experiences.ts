import { Experience } from '../types';

// ES Module imports for sustainable experience assets
import expKayakImg from '../assets/experiences/exp-kayak.svg';
import expBlueMountainsImg from '../assets/experiences/exp-bluemountains.svg';
import expNingalooImg from '../assets/experiences/exp-ningaloo.svg';

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-01',
    title: 'Great Ocean Road Zero-Footprint Sea Kayak & Seal Colony Expedition',
    location: 'Apollo Bay, Victoria, Australia',
    duration: '3 Days / 2 Nights',
    difficulty: 'Moderate',
    groupSize: 'Max 8 Explorers',
    price: 680,
    ecoRating: 99,
    image: expKayakImg,
    description: 'Paddle crystalline coastal swell, explore ancient kelp forests, and observe wild Australian fur seals in a fully carbon-offset, Leave-No-Trace sea kayak journey with marine scientists.',
    highlights: [
      'Zero single-use plastics: organic camp meals cooked on bio-ethanol trail stoves',
      'Hands-on citizen science microplastic testing with marine biologists',
      'Basecamp at a 100% solar-powered coastal eco-lodge beneath eucalyptus canopies'
    ],
    included: [
      'High-performance sea kayaks & safety gear',
      'Solterra mineral reef-safe sun kit & bio-acetate polarized eyewear loaner',
      'All organic locally sourced meals and snacks',
      'Wilderness First Responder certified guides'
    ]
  },
  {
    id: 'exp-02',
    title: 'Blue Mountains Solar Basecamp & Star-Gazing Wilderness Masterclass',
    location: 'Katoomba & Wolgan Valley, NSW, Australia',
    duration: '2 Days / 1 Night',
    difficulty: 'Gentle',
    groupSize: 'Max 10 Explorers',
    price: 420,
    ecoRating: 98,
    image: expBlueMountainsImg,
    description: 'Learn off-grid wilderness survival skills, solar energy harvesting, and celestial navigation while camping under pristine Southern Cross skies on secluded sandstone escarpments.',
    highlights: [
      'Hands-on solar setup & lithium iron phosphate off-grid cooking tutorial',
      'Nocturnal wildlife spotlighting for endangered yellow-bellied gliders',
      'Bushcraft fire-free camp tea brewing and native botanical foraging workshop'
    ],
    included: [
      'Ultralight tent & organic merino sleep system',
      'Helios solar lantern for basecamp illumination',
      'Gourmet bush tucker evening feast and native tea tastings',
      'Astrophotography night clinic'
    ]
  },
  {
    id: 'exp-03',
    title: 'Ningaloo Reef Citizen Science & Whale Shark Swim Clinic',
    location: 'Exmouth, Western Australia',
    duration: '4 Days / 3 Nights',
    difficulty: 'Moderate',
    groupSize: 'Max 6 Explorers',
    price: 1150,
    ecoRating: 100,
    image: expNingalooImg,
    description: 'Immerse yourself in UNESCO World Heritage turquoise lagoons. Swim alongside majestic gentle whale sharks while contributing ID photo data directly to the global ocean research registry.',
    highlights: [
      'Eco-certified low-emission electric hybrid vessel with acoustic quiet motors',
      'Strict 5-meter ethical wildlife swim protocols certified by Marine Parks WA',
      '100% reef-safe mineral sunscreen provided on deck'
    ],
    included: [
      'Spotter aircraft guidance for ethical shark encounters',
      'Professional marine biologist lectures & photo ID upload',
      'Ocean-plastic recycled rashguards and high-spec snorkel sets',
      'Luxury eco-safari glamping in Cape Range National Park'
    ]
  }
];
