import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";
import CTASection from "./CTASection";
import { BUSINESS, SERVICES } from "@/lib/constants";
import { SERVICE_DETAILS, ServiceSlug } from "@/lib/service-content";

interface ServicePageTemplateProps {
  slug: ServiceSlug;
}

export default function ServicePageTemplate({ slug }: ServicePageTemplateProps) {
  const service = SERVICE_DETAILS[slug];
  const serviceInfo = SERVICES.find(s => s.id === slug);

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceInfo?.name,
    provider: {
      "@type": "LocalBusiness",
      name: BUSINESS.name,
      telephone: BUSINESS.phone
    },
    areaServed: {
      "@type": "City",
      name: "San Diego"
    },
    description: service.intro
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center">
        <Image
          src={service.heroImage}
          alt={service.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--charcoal)]/80 to-[var(--charcoal)]/40" />
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <nav className="text-sm text-white/70 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-white">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{serviceInfo?.name}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {service.title}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            {service.intro}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href="/free-estimate" className="btn-primary inline-flex items-center justify-center gap-2">
              Get Free Estimate
              <ArrowRight size={18} />
            </Link>
            <a href={BUSINESS.phoneTel} className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors">
              <Phone size={18} />
              {BUSINESS.phoneFormatted}
            </a>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[var(--charcoal)] mb-6">
                What We Offer
              </h2>
              <ul className="space-y-3">
                {service.services.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-[var(--bronze)] flex-shrink-0" size={20} />
                    <span className="text-[var(--charcoal)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {service.gallery.slice(0, 4).map((img, index) => (
                <div key={index} className="relative h-40 rounded-lg overflow-hidden">
                  <Image
                    src={img}
                    alt={`${serviceInfo?.name} project ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[var(--charcoal)] mb-12 text-center">
            Our Process
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {service.process.map((step, index) => (
              <div key={index} className="card text-center relative">
                <div className="w-10 h-10 bg-[var(--soft-black)] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-[var(--charcoal)] mb-2">{step.title}</h3>
                <p className="text-sm text-[var(--warm-gray)]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[var(--charcoal)] mb-6">
                Why Choose Roman Built for Your {serviceInfo?.name}?
              </h2>
              <ul className="space-y-4">
                {[
                  "Licensed, bonded & insured contractor",
                  "10+ years of experience in San Diego",
                  "Transparent pricing with no hidden fees",
                  "Quality materials from trusted suppliers",
                  "Dedicated project manager",
                  "Comprehensive warranties",
                  "Clean, respectful work environment",
                  "On-time project completion"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-[var(--bronze)] flex-shrink-0" size={20} />
                    <span className="text-[var(--charcoal)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[var(--soft-black)] p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="mb-6 text-white/90">
                Contact us today for a free consultation and detailed estimate for your {serviceInfo?.name.toLowerCase()} project.
              </p>
              <Link href="/free-estimate" className="inline-flex items-center gap-2 bg-white text-[var(--charcoal)] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Request Free Estimate
                <ArrowRight size={18} />
              </Link>
              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-sm text-white/70 mb-2">Or call us directly:</p>
                <a href={BUSINESS.phoneTel} className="text-2xl font-bold hover:underline">
                  {BUSINESS.phoneFormatted}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-[var(--light-taupe)]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[var(--charcoal)] mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {service.faqs.map((faq, index) => (
              <div key={index} className="card">
                <h3 className="font-semibold text-[var(--charcoal)] mb-2">
                  {faq.question}
                </h3>
                <p className="text-[var(--warm-gray)]">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[var(--charcoal)] mb-8 text-center">
            Related Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.filter(s => s.id !== slug).slice(0, 3).map((relatedService) => (
              <Link key={relatedService.id} href={relatedService.slug} className="card group">
                <div className="relative h-40 -mx-6 -mt-6 mb-4 overflow-hidden rounded-t-lg">
                  <Image
                    src={relatedService.image}
                    alt={relatedService.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold text-[var(--charcoal)] group-hover:text-[var(--bronze)] transition-colors">
                  {relatedService.name}
                </h3>
                <p className="text-sm text-[var(--warm-gray)] mt-1">
                  {relatedService.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
