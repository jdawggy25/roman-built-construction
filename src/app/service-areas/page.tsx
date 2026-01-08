import { Metadata } from "next";
import Link from "next/link";
import { MapPin, CheckCircle, ArrowRight } from "lucide-react";
import CTASection from "@/components/CTASection";
import { SERVICE_AREAS, SERVICES, BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Service Areas | General Contractor Serving San Diego County",
  description: `Roman Built Construction serves all of San Diego County including ${SERVICE_AREAS.cities.slice(0, 5).join(", ")} and more. Call ${BUSINESS.phoneFormatted} for a free estimate.`,
  openGraph: {
    title: "Service Areas | General Contractor Serving San Diego County",
    description: "Quality construction services throughout San Diego County. See if we serve your area.",
  },
};

export default function ServiceAreasPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[var(--charcoal)] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Construction Services Throughout San Diego County
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            From the coast to the mountains, Roman Built Construction proudly serves homeowners and businesses throughout the San Diego region.
          </p>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="bg-[var(--cream)] py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gray-300 rounded-lg h-[400px] flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="text-[var(--bronze)] mx-auto mb-4" />
              <p className="text-[var(--warm-gray)]">
                [Interactive Service Area Map]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[var(--charcoal)] mb-8 text-center">
            Cities We Serve
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {SERVICE_AREAS.cities.map((city) => (
              <div
                key={city}
                className="flex items-center gap-2 p-4 bg-[var(--cream)] rounded-lg hover:bg-[var(--light-taupe)] transition-colors"
              >
                <MapPin size={18} className="text-[var(--bronze)] flex-shrink-0" />
                <span className="text-[var(--charcoal)] font-medium">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services by Area */}
      <section className="section bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[var(--charcoal)] mb-4 text-center">
            Services Available in All Areas
          </h2>
          <p className="text-[var(--warm-gray)] text-center mb-12 max-w-2xl mx-auto">
            No matter where you are in San Diego County, we offer our full range of construction services.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                href={service.slug}
                className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-lg transition-shadow group"
              >
                <CheckCircle className="text-[var(--bronze)] flex-shrink-0" size={24} />
                <span className="text-[var(--charcoal)] font-medium group-hover:text-[var(--bronze)] transition-colors">
                  {service.name}
                </span>
                <ArrowRight size={18} className="text-[var(--warm-gray)] ml-auto group-hover:text-[var(--bronze)] transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Local Matters */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[var(--charcoal)] mb-6">
                Why Choose a Local San Diego Contractor?
              </h2>
              <ul className="space-y-4">
                {[
                  {
                    title: "Local Building Code Expertise",
                    description: "We know San Diego's building codes and permit requirements inside and out."
                  },
                  {
                    title: "Climate-Appropriate Solutions",
                    description: "Materials and methods suited to our unique coastal and inland climate zones."
                  },
                  {
                    title: "Established Relationships",
                    description: "Strong relationships with local suppliers, inspectors, and subcontractors."
                  },
                  {
                    title: "Quick Response Times",
                    description: "We're nearby and can respond quickly to consultations and service calls."
                  },
                  {
                    title: "Community Investment",
                    description: "We live and work here too. Your community is our community."
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
            <div className="bg-[var(--light-taupe)] p-8 rounded-lg">
              <h3 className="text-xl font-bold text-[var(--charcoal)] mb-4">
                Not Sure If We Serve Your Area?
              </h3>
              <p className="text-[var(--warm-gray)] mb-6">
                Even if your city isn&apos;t listed, we may still be able to help. Contact us to discuss your project location.
              </p>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Contact Us
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
