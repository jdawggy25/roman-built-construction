import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { SERVICES, BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Construction Services | Roman Built Construction",
  description: `Comprehensive general contracting services in San Diego. Kitchen remodeling, bathroom renovations, room additions, custom homes, commercial construction & more. Call ${BUSINESS.phoneFormatted}.`,
  openGraph: {
    title: "Construction Services | Roman Built Construction",
    description: "Full-service general contractor in San Diego. Residential and commercial construction services.",
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[var(--charcoal)] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Comprehensive General Contracting Services
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            From minor renovations to major construction projects, Roman Built Construction has the expertise to bring your vision to life.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--charcoal)] mb-4">
              Our Construction Process
            </h2>
            <p className="text-lg text-[var(--warm-gray)] max-w-2xl mx-auto">
              Every project follows our proven process to ensure quality results and a smooth experience.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Free on-site consultation to discuss your project, assess the space, and understand your goals."
              },
              {
                step: "02",
                title: "Design & Planning",
                description: "Detailed plans, material selections, and a comprehensive estimate with clear pricing."
              },
              {
                step: "03",
                title: "Construction",
                description: "Expert execution with skilled craftsmen, quality materials, and regular progress updates."
              },
              {
                step: "04",
                title: "Final Walkthrough",
                description: "Thorough inspection, punch list completion, and ensuring your complete satisfaction."
              }
            ].map((phase, index) => (
              <div key={index} className="card text-center">
                <div className="text-5xl font-bold text-[var(--sand)] mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-[var(--charcoal)] mb-2">
                  {phase.title}
                </h3>
                <p className="text-[var(--warm-gray)]">
                  {phase.description}
                </p>
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
                Why Choose Roman Built?
              </h2>
              <ul className="space-y-4">
                {[
                  "Licensed, bonded & fully insured",
                  "10+ years of construction experience",
                  "Transparent pricing with detailed estimates",
                  "Dedicated project manager for every job",
                  "Quality materials from trusted suppliers",
                  "Clean, respectful work environment",
                  "On-time completion commitment",
                  "Comprehensive warranties included"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-[var(--bronze)] flex-shrink-0" size={20} />
                    <span className="text-[var(--charcoal)]">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/free-estimate" className="btn-primary inline-flex items-center gap-2">
                  Get Your Free Estimate
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            <div className="bg-[var(--cream)] p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-[var(--charcoal)] mb-4">
                Not Sure What You Need?
              </h3>
              <p className="text-[var(--warm-gray)] mb-6">
                We&apos;re happy to discuss your project and help you determine the best approach. Schedule a free consultation and we&apos;ll:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Assess your space and needs",
                  "Discuss design options",
                  "Explain the process and timeline",
                  "Provide a detailed estimate"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-[var(--charcoal)]">
                    <CheckCircle className="text-[var(--bronze)] flex-shrink-0" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-secondary inline-flex items-center gap-2">
                Schedule Consultation
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
