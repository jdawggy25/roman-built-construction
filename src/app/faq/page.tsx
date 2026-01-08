import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CTASection from "@/components/CTASection";
import { FAQ_CATEGORIES, BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Construction FAQ | Roman Built Construction",
  description: `Find answers to common questions about construction services, pricing, timelines, permits, and more. San Diego general contractor. Call ${BUSINESS.phoneFormatted}.`,
  openGraph: {
    title: "Construction FAQ | Roman Built Construction",
    description: "Answers to frequently asked questions about our construction services in San Diego.",
  },
};

// Generate FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_CATEGORIES.flatMap(category =>
    category.questions.map(q => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer
      }
    }))
  )
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-[var(--charcoal)] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Find answers to common questions about our construction services, process, pricing, and more.
          </p>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="bg-[var(--cream)] py-6 sticky top-[120px] z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {FAQ_CATEGORIES.map((category) => (
              <a
                key={category.category}
                href={`#${category.category.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-4 py-2 bg-white rounded-full text-sm font-medium text-[var(--charcoal)] hover:bg-[var(--soft-black)] hover:text-white transition-colors"
              >
                {category.category}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto px-4">
          {FAQ_CATEGORIES.map((category) => (
            <div
              key={category.category}
              id={category.category.toLowerCase().replace(/\s+/g, '-')}
              className="mb-12 scroll-mt-48"
            >
              <h2 className="text-2xl font-bold text-[var(--charcoal)] mb-6 pb-2 border-b-2 border-[var(--bronze)]">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, index) => (
                  <div key={index} className="card">
                    <h3 className="font-semibold text-[var(--charcoal)] mb-3 text-lg">
                      {faq.question}
                    </h3>
                    <p className="text-[var(--warm-gray)] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="bg-[var(--cream)] py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[var(--charcoal)] mb-4">
            Still Have Questions?
          </h2>
          <p className="text-[var(--warm-gray)] mb-8">
            Can&apos;t find the answer you&apos;re looking for? Our team is here to help. Contact us and we&apos;ll be happy to answer any questions about your specific project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary inline-flex items-center justify-center gap-2">
              Contact Us
              <ArrowRight size={18} />
            </Link>
            <a
              href={BUSINESS.phoneTel}
              className="btn-secondary inline-flex items-center justify-center"
            >
              Call {BUSINESS.phoneFormatted}
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
