// Business Information
export const BUSINESS = {
  name: "Roman Built Construction",
  owner: "Saud Carrillo",
  phone: "760-504-3349",
  phoneFormatted: "(760) 504-3349",
  phoneTel: "tel:7605043349",
  email: "info@romanbuiltconstruction.com", // Placeholder - update with real email
  address: {
    street: "San Diego", // Placeholder - update with real address
    city: "San Diego",
    state: "CA",
    zip: "92101", // Placeholder
    full: "San Diego, CA" // Placeholder
  },
  hours: {
    weekdays: "Monday - Friday: 7:00 AM - 6:00 PM",
    saturday: "Saturday: 8:00 AM - 4:00 PM",
    sunday: "Sunday: Closed"
  },
  license: "CSLB #XXXXXX", // Placeholder - update with real license
  founded: "2015", // Placeholder - update
  tagline: "Quality Construction You Can Trust",
  description: "Roman Built Construction is San Diego's trusted general contractor for residential and commercial construction projects. From kitchen remodels to custom home builds, we deliver exceptional craftsmanship and outstanding service."
};

// Service Areas - San Diego County
export const SERVICE_AREAS = {
  primary: "San Diego County",
  cities: [
    "San Diego",
    "Chula Vista",
    "Oceanside",
    "Escondido",
    "Carlsbad",
    "El Cajon",
    "Vista",
    "San Marcos",
    "Encinitas",
    "National City",
    "La Mesa",
    "Santee",
    "Poway",
    "La Jolla",
    "Del Mar",
    "Coronado",
    "Imperial Beach",
    "Pacific Beach",
    "Mission Beach",
    "Point Loma",
    "Rancho Bernardo",
    "Scripps Ranch",
    "Mira Mesa",
    "Clairemont",
    "Kearny Mesa"
  ]
};

// Services
export const SERVICES = [
  {
    id: "kitchen-remodeling",
    name: "Kitchen Remodeling",
    shortDescription: "Transform your kitchen with custom designs, quality materials, and expert craftsmanship.",
    icon: "ChefHat",
    slug: "/services/kitchen-remodeling",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
  },
  {
    id: "bathroom-remodeling",
    name: "Bathroom Remodeling",
    shortDescription: "Create your dream bathroom with modern fixtures, tile work, and functional design.",
    icon: "Bath",
    slug: "/services/bathroom-remodeling",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80"
  },
  {
    id: "room-additions",
    name: "Room Additions",
    shortDescription: "Expand your living space with seamless room additions, including ADUs and second stories.",
    icon: "Home",
    slug: "/services/room-additions",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
  },
  {
    id: "home-renovations",
    name: "Home Renovations",
    shortDescription: "Complete home transformations from whole-house remodels to interior renovations.",
    icon: "Hammer",
    slug: "/services/home-renovations",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
  },
  {
    id: "commercial-construction",
    name: "Commercial Construction",
    shortDescription: "Professional commercial construction including tenant improvements and office build-outs.",
    icon: "Building2",
    slug: "/services/commercial-construction",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
  },
  {
    id: "custom-home-building",
    name: "Custom Home Building",
    shortDescription: "Build your dream home from the ground up with our design-build services.",
    icon: "Castle",
    slug: "/services/custom-home-building",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
  },
  {
    id: "exterior-construction",
    name: "Exterior Construction",
    shortDescription: "Outdoor living spaces including patios, decks, outdoor kitchens, and hardscaping.",
    icon: "TreePine",
    slug: "/services/exterior-construction",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80"
  },
  {
    id: "structural-repairs",
    name: "Structural Repairs",
    shortDescription: "Foundation repair, load-bearing modifications, and earthquake retrofitting.",
    icon: "Construction",
    slug: "/services/structural-repairs",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
  },
  {
    id: "roofing",
    name: "Roofing Services",
    shortDescription: "Complete roofing services including replacement, repair, and new construction.",
    icon: "Warehouse",
    slug: "/services/roofing",
    image: "https://images.unsplash.com/photo-1632759145354-c94e0a466824?w=800&q=80"
  },
  {
    id: "concrete-masonry",
    name: "Concrete & Masonry",
    shortDescription: "Foundations, slabs, decorative concrete, and masonry work for any project.",
    icon: "Boxes",
    slug: "/services/concrete-masonry",
    image: "https://images.unsplash.com/photo-1590644365607-1c5a13a9a0fa?w=800&q=80"
  }
];

// Testimonials (Placeholder - replace with real testimonials)
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Michael R.",
    location: "La Jolla, CA",
    project: "Kitchen Remodel",
    rating: 5,
    text: "Roman Built Construction transformed our outdated kitchen into a modern masterpiece. Saud and his team were professional, punctual, and the quality of work exceeded our expectations. Highly recommend!",
    date: "2025-11-15"
  },
  {
    id: 2,
    name: "Jennifer & Mark T.",
    location: "Carlsbad, CA",
    project: "Room Addition",
    rating: 5,
    text: "We added a 500 sq ft family room and the process was seamless from start to finish. They handled all the permits, kept us informed throughout, and delivered on time and on budget.",
    date: "2025-10-22"
  },
  {
    id: 3,
    name: "Robert S.",
    location: "San Diego, CA",
    project: "Bathroom Renovation",
    rating: 5,
    text: "Our master bathroom renovation turned out beautifully. The tile work is stunning and the attention to detail is impressive. Roman Built is the real deal.",
    date: "2025-09-18"
  },
  {
    id: 4,
    name: "Sarah L.",
    location: "Encinitas, CA",
    project: "Whole House Remodel",
    rating: 5,
    text: "We gutted and remodeled our entire 1970s home. Roman Built managed everything from design to final inspection. The transformation is incredible and we couldn't be happier.",
    date: "2025-08-05"
  },
  {
    id: 5,
    name: "David & Lisa M.",
    location: "Poway, CA",
    project: "ADU Construction",
    rating: 5,
    text: "Built a beautiful ADU in our backyard for my mother-in-law. The team navigated the complex permitting process and built a quality structure. Professional service from day one.",
    date: "2025-07-12"
  },
  {
    id: 6,
    name: "Commercial Client",
    location: "San Marcos, CA",
    project: "Office Build-Out",
    rating: 5,
    text: "Roman Built completed our 3,000 sq ft office build-out ahead of schedule. Their commercial experience showed in how they managed the project and coordinated with our landlord.",
    date: "2025-06-28"
  }
];

// FAQ Data
export const FAQ_CATEGORIES = [
  {
    category: "General Services",
    questions: [
      {
        question: "What types of construction projects do you handle?",
        answer: "Roman Built Construction handles a wide range of residential and commercial projects including kitchen and bathroom remodels, room additions, whole-house renovations, ADU construction, custom home building, commercial tenant improvements, roofing, concrete work, and structural repairs."
      },
      {
        question: "Do you offer free estimates?",
        answer: "Yes! We offer free, no-obligation estimates for all projects. Contact us to schedule a consultation where we'll discuss your vision, assess the scope of work, and provide a detailed estimate."
      },
      {
        question: "What areas do you serve?",
        answer: "We serve all of San Diego County including San Diego, Chula Vista, Oceanside, Escondido, Carlsbad, El Cajon, La Jolla, Del Mar, Encinitas, Poway, and surrounding communities."
      },
      {
        question: "Are you licensed and insured?",
        answer: "Yes, Roman Built Construction is fully licensed by the California Contractors State License Board (CSLB), bonded, and carries comprehensive general liability and workers' compensation insurance for your protection."
      }
    ]
  },
  {
    category: "Pricing & Estimates",
    questions: [
      {
        question: "How much does a kitchen remodel cost?",
        answer: "Kitchen remodel costs in San Diego typically range from $25,000 to $75,000+ depending on the scope, materials, and finishes. A basic refresh might start around $15,000, while a full gut renovation with high-end finishes can exceed $100,000. We provide detailed estimates tailored to your specific project."
      },
      {
        question: "How much does a bathroom remodel cost?",
        answer: "Bathroom remodels in San Diego generally range from $15,000 to $50,000+. A powder room update might cost $8,000-$15,000, while a master bathroom renovation with premium finishes can range from $30,000 to $60,000 or more."
      },
      {
        question: "What factors affect the cost of my project?",
        answer: "Project costs are influenced by square footage, material selections, complexity of work, structural changes, permitting requirements, fixture and appliance choices, and current market conditions for labor and materials."
      },
      {
        question: "Do you require a deposit?",
        answer: "Yes, we typically require a deposit to secure your project on our schedule and order materials. The deposit amount varies based on project size, usually ranging from 10-30% of the total contract value."
      }
    ]
  },
  {
    category: "Timeline & Scheduling",
    questions: [
      {
        question: "How long does a kitchen remodel take?",
        answer: "A typical kitchen remodel takes 6-12 weeks depending on scope. A minor refresh might take 3-4 weeks, while a complete gut renovation with layout changes can take 12-16 weeks. We provide a detailed timeline during the estimation process."
      },
      {
        question: "How long does a bathroom remodel take?",
        answer: "Bathroom remodels typically take 3-6 weeks. A simple update might be completed in 2-3 weeks, while a master bathroom renovation can take 6-8 weeks, especially if it involves moving plumbing or electrical."
      },
      {
        question: "Can I live in my home during renovation?",
        answer: "In most cases, yes. For kitchen and bathroom remodels, we can often work in phases to maintain livability. For whole-house renovations, we'll discuss options including partial occupancy or temporary relocation depending on the scope of work."
      },
      {
        question: "How far out are you scheduling?",
        answer: "Our schedule varies throughout the year. Currently, we're typically booking projects 4-8 weeks out. Contact us early to secure your preferred start date, especially for larger projects."
      }
    ]
  },
  {
    category: "Permits & Inspections",
    questions: [
      {
        question: "Do I need permits for my project?",
        answer: "Most significant construction work in San Diego County requires permits. This includes structural changes, electrical work, plumbing modifications, HVAC changes, and additions. We handle all permit applications and coordinate inspections as part of our service."
      },
      {
        question: "Who handles the permit process?",
        answer: "Roman Built Construction manages the entire permit process for you. We prepare and submit applications, coordinate with the building department, schedule inspections, and ensure all work meets code requirements."
      },
      {
        question: "How long does the permit process take?",
        answer: "Permit timelines vary by project type and jurisdiction. Simple permits may be issued in 1-2 weeks, while more complex projects requiring plan check can take 4-8 weeks or longer. We factor permit timelines into our project schedules."
      }
    ]
  },
  {
    category: "Payment & Financing",
    questions: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept checks, bank transfers, and major credit cards. Payment schedules are typically structured as deposits, progress payments tied to project milestones, and final payment upon completion."
      },
      {
        question: "Do you offer financing options?",
        answer: "We can recommend financing partners who offer home improvement loans with competitive rates. Many clients also use home equity lines of credit (HELOCs) or cash-out refinancing for larger projects."
      },
      {
        question: "What is your payment schedule?",
        answer: "Payment schedules are outlined in our contracts and typically include an initial deposit, progress payments at key milestones (e.g., rough-in completion, finish work), and a final payment upon project completion and your satisfaction."
      }
    ]
  },
  {
    category: "Warranties & Guarantees",
    questions: [
      {
        question: "Do you offer a warranty on your work?",
        answer: "Yes, Roman Built Construction provides a comprehensive warranty on our workmanship. We also pass through manufacturer warranties on all products and materials we install. Specific warranty terms are detailed in our contracts."
      },
      {
        question: "What if I'm not satisfied with the work?",
        answer: "Your satisfaction is our priority. We maintain open communication throughout the project and conduct a detailed walkthrough upon completion. If any issues arise, we address them promptly as part of our commitment to quality."
      },
      {
        question: "Do you offer a guarantee on your estimates?",
        answer: "We provide detailed, transparent estimates and work hard to stick to quoted prices. Any potential changes to scope or cost are communicated and approved by you before proceeding. Our contracts clearly outline what's included."
      }
    ]
  }
];

// Portfolio Projects (Placeholder)
export const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    title: "Modern Kitchen Transformation",
    category: "Kitchen Remodeling",
    location: "La Jolla, CA",
    description: "Complete kitchen remodel featuring custom cabinetry, quartz countertops, and premium stainless steel appliances.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    slug: "modern-kitchen-la-jolla"
  },
  {
    id: 2,
    title: "Spa-Like Master Bathroom",
    category: "Bathroom Remodeling",
    location: "Carlsbad, CA",
    description: "Luxurious master bathroom renovation with walk-in shower, freestanding tub, and heated floors.",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
    slug: "spa-bathroom-carlsbad"
  },
  {
    id: 3,
    title: "Family Room Addition",
    category: "Room Additions",
    location: "Poway, CA",
    description: "500 sq ft family room addition with vaulted ceilings and seamless integration with existing home.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    slug: "family-room-poway"
  },
  {
    id: 4,
    title: "Complete Home Renovation",
    category: "Home Renovations",
    location: "Encinitas, CA",
    description: "Whole-house renovation of a 1970s home including updated floor plan, finishes, and systems.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    slug: "whole-house-encinitas"
  },
  {
    id: 5,
    title: "Office Build-Out",
    category: "Commercial Construction",
    location: "San Marcos, CA",
    description: "3,000 sq ft commercial office build-out with modern finishes and efficient layout.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    slug: "office-buildout-san-marcos"
  },
  {
    id: 6,
    title: "Custom Coastal Home",
    category: "Custom Home Building",
    location: "Del Mar, CA",
    description: "Custom-built coastal residence featuring ocean views and contemporary design.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    slug: "custom-home-del-mar"
  },
  {
    id: 7,
    title: "Outdoor Living Space",
    category: "Exterior Construction",
    location: "San Diego, CA",
    description: "Complete outdoor living area with covered patio, outdoor kitchen, and fire pit.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    slug: "outdoor-living-san-diego"
  },
  {
    id: 8,
    title: "ADU Guest House",
    category: "Room Additions",
    location: "Escondido, CA",
    description: "Detached 600 sq ft ADU featuring full kitchen, bathroom, and living area.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    slug: "adu-escondido"
  }
];

// Navigation Links
export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    children: SERVICES.map(s => ({ name: s.name, href: s.slug }))
  },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Service Areas", href: "/service-areas" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" }
];

// Social Media Links (Placeholder)
export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/romanbuiltconstruction",
  instagram: "https://instagram.com/romanbuiltconstruction",
  linkedin: "https://linkedin.com/company/romanbuiltconstruction",
  yelp: "https://yelp.com/biz/roman-built-construction-san-diego"
};
