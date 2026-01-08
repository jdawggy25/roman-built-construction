import { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { BUSINESS, SERVICE_AREAS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Roman Built Construction | Free Estimate Request",
  description: `Contact Roman Built Construction for your construction project in San Diego. Call ${BUSINESS.phoneFormatted} or fill out our form for a free estimate. Kitchen remodels, bathroom renovations, additions & more.`,
  openGraph: {
    title: "Contact Roman Built Construction | Free Estimate Request",
    description: `Get in touch with San Diego's trusted general contractor. Call ${BUSINESS.phoneFormatted} for a free estimate.`,
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[var(--charcoal)] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get Your Free Construction Estimate Today
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Ready to start your project? Contact us for a free, no-obligation consultation and estimate.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-[var(--charcoal)] mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                <a
                  href={BUSINESS.phoneTel}
                  className="flex items-start gap-4 p-4 bg-[var(--cream)] rounded-lg hover:bg-[var(--light-taupe)] transition-colors"
                >
                  <div className="w-12 h-12 bg-[var(--soft-black)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--charcoal)]">Phone</h3>
                    <p className="text-[var(--bronze)] font-medium">{BUSINESS.phoneFormatted}</p>
                    <p className="text-sm text-[var(--warm-gray)]">Call or text anytime</p>
                  </div>
                </a>

                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-start gap-4 p-4 bg-[var(--cream)] rounded-lg hover:bg-[var(--light-taupe)] transition-colors"
                >
                  <div className="w-12 h-12 bg-[var(--soft-black)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--charcoal)]">Email</h3>
                    <p className="text-[var(--bronze)] font-medium">{BUSINESS.email}</p>
                    <p className="text-sm text-[var(--warm-gray)]">We respond within 24 hours</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-[var(--cream)] rounded-lg">
                  <div className="w-12 h-12 bg-[var(--soft-black)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--charcoal)]">Service Area</h3>
                    <p className="text-[var(--warm-gray)]">{BUSINESS.address.full}</p>
                    <p className="text-sm text-[var(--warm-gray)]">Serving all of {SERVICE_AREAS.primary}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-[var(--cream)] rounded-lg">
                  <div className="w-12 h-12 bg-[var(--soft-black)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--charcoal)]">Business Hours</h3>
                    <p className="text-[var(--warm-gray)] text-sm">{BUSINESS.hours.weekdays}</p>
                    <p className="text-[var(--warm-gray)] text-sm">{BUSINESS.hours.saturday}</p>
                    <p className="text-[var(--warm-gray)] text-sm">{BUSINESS.hours.sunday}</p>
                  </div>
                </div>
              </div>

              {/* License Info */}
              <div className="mt-8 p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-[var(--charcoal)] mb-2">Licensing Information</h3>
                <p className="text-sm text-[var(--warm-gray)]">
                  {BUSINESS.license}<br />
                  Licensed, Bonded & Insured
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card">
                <h2 className="text-2xl font-bold text-[var(--charcoal)] mb-6">
                  Request a Free Estimate
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-[var(--cream)] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[var(--charcoal)] mb-6 text-center">
            Our Service Area
          </h2>
          <div className="bg-gray-300 rounded-lg h-[400px] flex items-center justify-center">
            <p className="text-[var(--warm-gray)]">
              [Map placeholder - Integrate Google Maps API]
            </p>
          </div>
          <div className="mt-8 text-center">
            <p className="text-[var(--warm-gray)] mb-4">
              We proudly serve homeowners and businesses throughout San Diego County:
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {SERVICE_AREAS.cities.map((city) => (
                <span
                  key={city}
                  className="px-3 py-1 bg-white rounded-full text-sm text-[var(--charcoal)]"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
