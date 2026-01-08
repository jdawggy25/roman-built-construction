import Image from "next/image";
import Link from "next/link";
import { Phone, Shield, Award, Clock, CheckCircle, ArrowRight } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import { BUSINESS, SERVICES, TESTIMONIALS, SERVICE_AREAS } from "@/lib/constants";

// Schema markup for homepage
const schemaData = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: BUSINESS.name,
  image: "https://romanbuiltconstruction.com/og-image.jpg",
  "@id": "https://romanbuiltconstruction.com",
  url: "https://romanbuiltconstruction.com",
  telephone: BUSINESS.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Diego",
    addressRegion: "CA",
    addressCountry: "US"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 32.7157,
    longitude: -117.1611
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "16:00"
    }
  ],
  priceRange: "$$-$$$",
  areaServed: SERVICE_AREAS.cities.map(city => ({
    "@type": "City",
    name: city
  })),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "47"
  }
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[650px] md:min-h-[750px] flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
          alt="Beautiful custom home by Roman Built Construction"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--soft-black)]/90 via-[var(--soft-black)]/70 to-[var(--soft-black)]/30" />
        <div className="relative max-w-7xl mx-auto px-4 py-24">
          <div className="max-w-2xl">
            <p className="text-white/80 text-sm font-medium tracking-widest uppercase mb-6">
              Licensed General Contractor · San Diego
            </p>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-[1.1] tracking-tight"
              style={{ color: '#FFFFFF', textShadow: '0 2px 12px rgba(0,0,0,0.9)' }}
            >
              Crafting Exceptional Spaces in San Diego
            </h1>
            <p className="text-lg text-white/90 mb-10 leading-relaxed">
              From thoughtful renovations to custom home builds, we bring precision, quality, and care to every project throughout San Diego County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/free-estimate"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                Request Estimate
                <ArrowRight size={18} />
              </Link>
              <a
                href={BUSINESS.phoneTel}
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white px-8 py-4 rounded font-medium hover:bg-white/20 transition-colors"
              >
                <Phone size={18} />
                {BUSINESS.phoneFormatted}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-[var(--cream)] py-10 border-b border-[var(--sand)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center gap-3">
              <Shield className="text-[var(--bronze)]" size={28} />
              <span className="text-sm font-medium text-[var(--charcoal)]">Licensed & Bonded</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Award className="text-[var(--bronze)]" size={28} />
              <span className="text-sm font-medium text-[var(--charcoal)]">10+ Years Experience</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <CheckCircle className="text-[var(--bronze)]" size={28} />
              <span className="text-sm font-medium text-[var(--charcoal)]">Quality Guaranteed</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Clock className="text-[var(--bronze)]" size={28} />
              <span className="text-sm font-medium text-[var(--charcoal)]">On-Time Delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-[var(--warm-white)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[var(--bronze)] text-sm font-medium tracking-widest uppercase mb-4">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--charcoal)] mb-4 tracking-tight">
              Construction Services
            </h2>
            <p className="text-[var(--medium-gray)] max-w-2xl mx-auto">
              Comprehensive solutions for residential and commercial projects, delivered with precision and care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 6).map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
          <div className="text-center mt-14">
            <Link
              href="/services"
              className="btn-secondary inline-flex items-center gap-2"
            >
              View All Services
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[450px] md:h-[550px] rounded overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="Construction craftsmanship"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-[var(--bronze)] text-sm font-medium tracking-widest uppercase mb-4">About Us</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-[var(--charcoal)] mb-6 tracking-tight">
                Building with Integrity Since {BUSINESS.founded}
              </h2>
              <p className="text-[var(--medium-gray)] mb-4 leading-relaxed">
                Founded by Saud Carrillo, Roman Built Construction has earned its reputation through quality craftsmanship, transparent communication, and an unwavering commitment to client satisfaction.
              </p>
              <p className="text-[var(--medium-gray)] mb-8 leading-relaxed">
                We approach each project—whether a kitchen refresh or a custom home—with the same dedication to excellence and attention to detail.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Licensed, bonded, and fully insured",
                  "Transparent pricing with detailed estimates",
                  "Dedicated project management",
                  "Quality materials and expert craftsmanship"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-[var(--charcoal)]">
                    <CheckCircle className="text-[var(--bronze)] flex-shrink-0" size={18} />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/about" className="btn-primary inline-flex items-center gap-2">
                Learn More
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="section bg-[var(--warm-white)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[var(--bronze)] text-sm font-medium tracking-widest uppercase mb-4">Our Work</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--charcoal)] mb-4 tracking-tight">
              Recent Projects
            </h2>
            <p className="text-[var(--medium-gray)] max-w-2xl mx-auto">
              A selection of completed projects throughout San Diego County.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80", title: "Modern Kitchen Remodel", location: "La Jolla" },
              { src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80", title: "Master Bathroom", location: "Carlsbad" },
              { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80", title: "Family Room Addition", location: "Poway" },
              { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80", title: "Whole House Remodel", location: "Encinitas" },
              { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80", title: "Custom Home", location: "Del Mar" },
              { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80", title: "Outdoor Living", location: "San Diego" },
            ].map((project, index) => (
              <Link href="/portfolio" key={index} className="group relative h-72 rounded overflow-hidden">
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--soft-black)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-white font-medium">{project.title}</h3>
                  <p className="text-[var(--concrete)] text-sm">{project.location}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link href="/portfolio" className="btn-secondary inline-flex items-center gap-2">
              View Portfolio
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[var(--bronze)] text-sm font-medium tracking-widest uppercase mb-4">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--charcoal)] mb-4 tracking-tight">
              Client Experiences
            </h2>
            <p className="text-[var(--medium-gray)] max-w-2xl mx-auto">
              What our clients say about working with Roman Built Construction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.slice(0, 3).map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>
          <div className="text-center mt-14">
            <Link href="/testimonials" className="btn-secondary inline-flex items-center gap-2">
              Read More Reviews
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section bg-[var(--warm-white)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[var(--bronze)] text-sm font-medium tracking-widest uppercase mb-4">Service Areas</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--charcoal)] mb-4 tracking-tight">
              Serving San Diego County
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {SERVICE_AREAS.cities.slice(0, 15).map((city) => (
              <span
                key={city}
                className="px-4 py-2 bg-[var(--cream)] border border-[var(--sand)] rounded text-[var(--dark-gray)] text-sm"
              >
                {city}
              </span>
            ))}
            <Link
              href="/service-areas"
              className="px-4 py-2 bg-[var(--soft-black)] text-white rounded text-sm font-medium hover:bg-[var(--charcoal)] transition-colors"
            >
              All Areas →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
