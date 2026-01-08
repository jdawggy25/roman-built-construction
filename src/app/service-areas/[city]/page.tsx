import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, CheckCircle, ArrowRight, Phone, Star } from "lucide-react";
import CTASection from "@/components/CTASection";
import { SERVICE_AREAS, SERVICES, BUSINESS } from "@/lib/constants";

// City-specific data with unique content
const cityData: Record<string, {
  description: string;
  neighborhoods?: string[];
  highlights: string[];
  image: string;
}> = {
  "san-diego": {
    description: "As San Diego's trusted general contractor, Roman Built Construction has been serving homeowners and businesses throughout America's Finest City. From Downtown high-rises to suburban homes, we bring quality craftsmanship to every project.",
    neighborhoods: ["Downtown", "North Park", "Hillcrest", "South Park", "Golden Hill", "Normal Heights", "University Heights", "Mission Hills"],
    highlights: ["Historic home renovation specialists", "ADU construction experts", "Commercial tenant improvements"],
    image: "https://images.unsplash.com/photo-1538964173425-93884d739296?w=800&q=80"
  },
  "chula-vista": {
    description: "Roman Built Construction proudly serves Chula Vista, San Diego County's second-largest city. From Eastlake to Otay Ranch, we help families create their dream homes with quality construction and remodeling services.",
    neighborhoods: ["Eastlake", "Otay Ranch", "Rancho Del Rey", "Rolling Hills Ranch", "Terra Nova"],
    highlights: ["New home construction", "Master-planned community experience", "Modern home additions"],
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
  },
  "oceanside": {
    description: "Serving Oceanside's coastal community with expert construction services. Whether you're updating a beach cottage or building a modern coastal home, Roman Built Construction delivers exceptional results.",
    neighborhoods: ["Downtown Oceanside", "Fire Mountain", "South Oceanside", "Mira Costa"],
    highlights: ["Coastal construction expertise", "Salt-air resistant materials", "Beach home renovations"],
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80"
  },
  "escondido": {
    description: "Roman Built Construction is proud to serve Escondido and the surrounding North County inland communities. Our team understands the unique construction needs of this diverse area.",
    neighborhoods: ["Downtown Escondido", "Hidden Meadows", "San Pasqual Valley", "Felicita"],
    highlights: ["Ranch property construction", "Wine country estates", "Historic downtown renovations"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
  },
  "carlsbad": {
    description: "From the Village to Bressi Ranch, Roman Built Construction provides premium construction services throughout Carlsbad. We understand the high standards of this coastal community.",
    neighborhoods: ["Carlsbad Village", "La Costa", "Bressi Ranch", "Aviara", "Calavera Hills"],
    highlights: ["Luxury home remodeling", "Resort-style outdoor living", "High-end kitchen renovations"],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
  },
  "el-cajon": {
    description: "Roman Built Construction serves El Cajon and the East County region with reliable, quality construction services. From historic homes to modern builds, we're your local contractor.",
    neighborhoods: ["Downtown El Cajon", "Granite Hills", "Fletcher Hills", "Rancho San Diego"],
    highlights: ["East County expertise", "Affordable remodeling options", "Energy-efficient upgrades"],
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80"
  },
  "vista": {
    description: "Serving Vista homeowners with exceptional construction and remodeling services. Our team brings expertise and dedication to every project in this growing North County community.",
    neighborhoods: ["Downtown Vista", "Shadowridge", "Breeze Hill", "Vista Village"],
    highlights: ["Growing community specialists", "Modern home updates", "ADU and guest house construction"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
  },
  "san-marcos": {
    description: "Roman Built Construction proudly serves San Marcos, from Lake San Marcos to Twin Oaks Valley. We help homeowners create beautiful, functional spaces in this vibrant community.",
    neighborhoods: ["Lake San Marcos", "Twin Oaks Valley", "San Elijo Hills", "Rancho Santa Fe Road"],
    highlights: ["Lakefront property experience", "University area development", "Family home additions"],
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
  },
  "encinitas": {
    description: "From Leucadia to Cardiff-by-the-Sea, Roman Built Construction serves Encinitas with coastal construction expertise. We understand the unique character of this beach community.",
    neighborhoods: ["Leucadia", "Cardiff-by-the-Sea", "Olivenhain", "New Encinitas"],
    highlights: ["Beachside home renovations", "Sustainable construction", "Indoor-outdoor living spaces"],
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80"
  },
  "national-city": {
    description: "Roman Built Construction provides quality construction services to National City homeowners and businesses. We're committed to helping this community grow with excellent craftsmanship.",
    neighborhoods: ["Downtown National City", "Paradise Hills", "Lincoln Acres"],
    highlights: ["Affordable home improvements", "Commercial renovations", "Multi-family construction"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
  },
  "la-mesa": {
    description: "Serving La Mesa, the Jewel of the Hills, with premium construction services. Roman Built Construction helps homeowners enhance their properties in this charming East County city.",
    neighborhoods: ["Downtown La Mesa", "Mt. Helix", "Lake Murray", "Casa de Oro"],
    highlights: ["Historic home specialists", "Mt. Helix luxury homes", "Craftsman renovations"],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
  },
  "santee": {
    description: "Roman Built Construction serves Santee families with quality construction and remodeling. From starter homes to dream renovations, we bring expertise to every project.",
    neighborhoods: ["West Santee", "Carlton Hills", "Carlton Oaks", "Magnolia"],
    highlights: ["Family-friendly renovations", "Garage conversions", "Backyard transformations"],
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80"
  },
  "poway": {
    description: "The City in the Country deserves country-quality craftsmanship. Roman Built Construction serves Poway with construction services that match the community's high standards.",
    neighborhoods: ["Old Poway", "Green Valley", "Poway Business Park", "Stone Canyon"],
    highlights: ["Estate home construction", "Horse property facilities", "Custom home building"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
  },
  "la-jolla": {
    description: "Roman Built Construction provides luxury construction services to La Jolla's discerning homeowners. From oceanfront estates to village condos, we deliver exceptional quality.",
    neighborhoods: ["La Jolla Shores", "La Jolla Village", "Bird Rock", "Windansea", "Muirlands"],
    highlights: ["Luxury oceanfront construction", "High-end kitchen and bath", "Seamless indoor-outdoor living"],
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80"
  },
  "del-mar": {
    description: "Serving Del Mar's prestigious coastal community with premium construction services. Roman Built Construction understands the refined taste of Del Mar homeowners.",
    neighborhoods: ["Del Mar Village", "Del Mar Heights", "Del Mar Mesa", "Carmel Valley"],
    highlights: ["Coastal luxury specialists", "Equestrian facilities", "Resort-style renovations"],
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80"
  },
  "coronado": {
    description: "Roman Built Construction serves Coronado Island with construction services befitting this unique community. From historic Victorians to modern builds, we deliver excellence.",
    neighborhoods: ["Coronado Village", "Coronado Cays", "Coronado Shores"],
    highlights: ["Historic preservation", "Island-specific permits expertise", "Navy housing renovations"],
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
  },
  "imperial-beach": {
    description: "Roman Built Construction serves Imperial Beach with quality construction services. We help homeowners maximize their coastal properties with expert craftsmanship.",
    neighborhoods: ["Downtown IB", "Seacoast", "Imperial Beach South"],
    highlights: ["Beach home renovations", "Coastal weatherproofing", "Small space maximization"],
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80"
  },
  "pacific-beach": {
    description: "From beach cottages to modern condos, Roman Built Construction serves Pacific Beach with construction expertise. We understand the unique needs of this active coastal community.",
    neighborhoods: ["North PB", "Crown Point", "South Pacific Beach", "Kate Sessions"],
    highlights: ["Beach property specialists", "Rental property improvements", "Modern coastal design"],
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80"
  },
  "mission-beach": {
    description: "Roman Built Construction serves Mission Beach with specialized coastal construction services. We help property owners maintain and improve their beachfront investments.",
    neighborhoods: ["North Mission Beach", "South Mission Beach", "Mission Bay"],
    highlights: ["Beachfront construction", "Vacation rental upgrades", "Compact space solutions"],
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80"
  },
  "point-loma": {
    description: "Serving Point Loma's historic peninsula with quality construction services. Roman Built Construction helps homeowners preserve and enhance their Point Loma properties.",
    neighborhoods: ["Ocean Beach", "Sunset Cliffs", "Liberty Station", "La Playa", "Loma Portal"],
    highlights: ["Historic home renovations", "Ocean view additions", "Mid-century modern updates"],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
  },
  "rancho-bernardo": {
    description: "Roman Built Construction serves Rancho Bernardo with premium construction services. We help homeowners in this master-planned community maintain and improve their properties.",
    neighborhoods: ["Westwood", "High Country West", "Bernardo Heights", "Oaks North"],
    highlights: ["Master-planned community experience", "Golf course property renovations", "Senior living modifications"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
  },
  "scripps-ranch": {
    description: "Serving Scripps Ranch families with quality construction and remodeling. Roman Built Construction understands the high standards of this desirable community.",
    neighborhoods: ["Scripps Highland", "Scripps Miramar Ranch", "Scripps Lake"],
    highlights: ["Family home additions", "Home office construction", "Pool and outdoor living"],
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
  },
  "mira-mesa": {
    description: "Roman Built Construction proudly serves Mira Mesa, one of San Diego's largest communities. We help homeowners improve their properties with quality craftsmanship.",
    neighborhoods: ["Mira Mesa North", "Mira Mesa South", "Sorrento Valley adjacent"],
    highlights: ["Affordable home improvements", "ADU specialists", "Modern kitchen updates"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
  },
  "clairemont": {
    description: "Serving Clairemont's established neighborhoods with quality construction services. Roman Built Construction helps homeowners update and enhance their mid-century homes.",
    neighborhoods: ["Clairemont Mesa", "Bay Ho", "Bay Park", "Morena"],
    highlights: ["Mid-century home renovations", "Garage conversions", "Kitchen and bath updates"],
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80"
  },
  "kearny-mesa": {
    description: "Roman Built Construction serves Kearny Mesa's residential and commercial properties. We bring expertise to both home renovations and business improvements.",
    neighborhoods: ["Kearny Mesa residential", "Serra Mesa", "Tierrasanta adjacent"],
    highlights: ["Commercial build-outs", "Residential renovations", "Mixed-use projects"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
  }
};

// Generate static params for all cities
export async function generateStaticParams() {
  return SERVICE_AREAS.cities.map((city) => ({
    city: city.toLowerCase().replace(/\s+/g, '-'),
  }));
}

// Generate metadata for each city
export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const cityName = SERVICE_AREAS.cities.find(
    c => c.toLowerCase().replace(/\s+/g, '-') === city
  ) || city;

  return {
    title: `General Contractor in ${cityName} | Roman Built Construction`,
    description: `Looking for a reliable general contractor in ${cityName}? Roman Built Construction offers kitchen remodeling, bathroom renovations, room additions & more. Call ${BUSINESS.phoneFormatted} for a free estimate.`,
    openGraph: {
      title: `General Contractor in ${cityName} | Roman Built Construction`,
      description: `Quality construction services in ${cityName}, CA. Kitchen remodeling, bathroom renovations, room additions, and more.`,
    },
  };
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const citySlug = city;
  const cityName = SERVICE_AREAS.cities.find(
    c => c.toLowerCase().replace(/\s+/g, '-') === citySlug
  ) || citySlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  const data = cityData[citySlug] || {
    description: `Roman Built Construction is proud to serve ${cityName} with comprehensive construction services. From kitchen remodels to custom home builds, we bring quality craftsmanship to every project.`,
    highlights: ["Full-service general contracting", "Quality craftsmanship", "Local expertise"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
  };

  // Schema markup for local business
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: BUSINESS.name,
    telephone: BUSINESS.phone,
    url: `https://romanbuiltconstruction.com/service-areas/${citySlug}`,
    areaServed: {
      "@type": "City",
      name: cityName,
      containedInPlace: {
        "@type": "State",
        name: "California"
      }
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: cityName,
      addressRegion: "CA",
      addressCountry: "US"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <Image
          src={data.image}
          alt={`Construction services in ${cityName}`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--soft-black)]/90 via-[var(--soft-black)]/70 to-[var(--soft-black)]/50" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-white/80 mb-4">
              <MapPin size={18} />
              <span className="text-sm font-medium uppercase tracking-wider">Serving {cityName}, CA</span>
            </div>
            <h1
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              style={{ color: '#FFFFFF', textShadow: '0 2px 12px rgba(0,0,0,0.8)' }}
            >
              General Contractor in {cityName}
            </h1>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              {data.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/free-estimate" className="btn-primary inline-flex items-center justify-center gap-2">
                Get Free Estimate
                <ArrowRight size={18} />
              </Link>
              <a
                href={BUSINESS.phoneTel}
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white px-6 py-3 rounded font-medium hover:bg-white/20 transition-colors"
              >
                <Phone size={18} />
                {BUSINESS.phoneFormatted}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-[var(--cream)] py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6">
            {data.highlights.map((highlight, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle size={18} className="text-[var(--bronze)]" />
                <span className="text-[var(--charcoal)] font-medium">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services in This Area */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--charcoal)] mb-4">
              Our Services in {cityName}
            </h2>
            <p className="text-[var(--warm-gray)] max-w-2xl mx-auto">
              Roman Built Construction offers comprehensive construction and remodeling services to homeowners and businesses in {cityName}.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                href={service.slug}
                className="card group hover:shadow-lg transition-shadow"
              >
                <div className="relative h-40 -mx-6 -mt-6 mb-4 overflow-hidden rounded-t-lg">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-lg font-semibold text-[var(--charcoal)] mb-2 group-hover:text-[var(--bronze)] transition-colors">
                  {service.name}
                </h3>
                <p className="text-sm text-[var(--warm-gray)] mb-4">
                  {service.shortDescription}
                </p>
                <span className="inline-flex items-center gap-2 text-[var(--bronze)] text-sm font-medium">
                  Learn More <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      {data.neighborhoods && data.neighborhoods.length > 0 && (
        <section className="section bg-[var(--cream)]">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[var(--charcoal)] mb-8 text-center">
              {cityName} Neighborhoods We Serve
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {data.neighborhoods.map((neighborhood) => (
                <span
                  key={neighborhood}
                  className="px-4 py-2 bg-white rounded-full text-[var(--charcoal)] text-sm font-medium shadow-sm"
                >
                  {neighborhood}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[var(--charcoal)] mb-6">
                Why {cityName} Homeowners Choose Roman Built
              </h2>
              <ul className="space-y-4">
                {[
                  {
                    title: "Local Knowledge",
                    description: `We understand ${cityName}'s unique building codes, permit requirements, and neighborhood characteristics.`
                  },
                  {
                    title: "Proven Track Record",
                    description: "500+ successful projects completed throughout San Diego County with 5-star reviews."
                  },
                  {
                    title: "Licensed & Insured",
                    description: "Fully licensed, bonded, and insured general contractor for your peace of mind."
                  },
                  {
                    title: "Transparent Pricing",
                    description: "Detailed estimates with no hidden fees. We respect your budget and timeline."
                  },
                  {
                    title: "Quality Craftsmanship",
                    description: "Expert workmanship using premium materials that stand the test of time."
                  }
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle className="text-[var(--bronze)] flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold text-[var(--charcoal)]">{item.title}</h3>
                      <p className="text-[var(--warm-gray)] text-sm">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[var(--soft-black)] p-8 rounded-lg text-white">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-[var(--bronze)] text-[var(--bronze)]" />
                ))}
              </div>
              <p className="text-2xl font-bold mb-2">5.0 Rating</p>
              <p className="text-white/80 mb-6">Based on 47+ reviews from satisfied customers throughout San Diego County</p>
              <Link href="/testimonials" className="inline-flex items-center gap-2 text-[var(--bronze)] font-medium hover:underline">
                Read Reviews <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-[var(--cream)] py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[var(--charcoal)] mb-6 text-center">
            Serving {cityName} and Surrounding Areas
          </h2>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(cityName + ', CA')}&zoom=12`}
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${cityName} Service Area Map`}
            />
          </div>
        </div>
      </section>

      {/* Other Cities */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[var(--charcoal)] mb-6 text-center">
            Also Serving These San Diego Areas
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {SERVICE_AREAS.cities
              .filter(c => c.toLowerCase().replace(/\s+/g, '-') !== citySlug)
              .slice(0, 12)
              .map((otherCity) => {
                const slug = otherCity.toLowerCase().replace(/\s+/g, '-');
                return (
                  <Link
                    key={otherCity}
                    href={`/service-areas/${slug}`}
                    className="px-3 py-1.5 bg-[var(--cream)] rounded text-sm text-[var(--charcoal)] hover:bg-[var(--light-taupe)] hover:text-[var(--bronze)] transition-colors"
                  >
                    {otherCity}
                  </Link>
                );
              })}
            <Link
              href="/service-areas"
              className="px-3 py-1.5 bg-[var(--soft-black)] text-white rounded text-sm font-medium hover:bg-[var(--charcoal)] transition-colors"
            >
              View All Areas →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title={`Ready to Start Your ${cityName} Project?`}
        subtitle={`Get a free estimate for your construction or remodeling project in ${cityName}. Our team is ready to help bring your vision to life.`}
      />
    </>
  );
}
