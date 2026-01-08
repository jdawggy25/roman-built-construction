import { Metadata } from "next";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import { TESTIMONIALS, BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Client Reviews | Roman Built Construction Testimonials",
  description: `Read reviews from satisfied Roman Built Construction clients throughout San Diego. 5-star rated general contractor. Call ${BUSINESS.phoneFormatted}.`,
  openGraph: {
    title: "Client Reviews | Roman Built Construction Testimonials",
    description: "See what our clients say about working with Roman Built Construction.",
  },
};

// Review Schema
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: BUSINESS.name,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: String(TESTIMONIALS.length),
    bestRating: "5",
    worstRating: "1"
  },
  review: TESTIMONIALS.map(t => ({
    "@type": "Review",
    author: {
      "@type": "Person",
      name: t.name
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(t.rating),
      bestRating: "5"
    },
    reviewBody: t.text,
    datePublished: t.date
  }))
};

export default function TestimonialsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-[var(--charcoal)] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Clients Say
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Don&apos;t just take our word for it – hear from homeowners and businesses throughout San Diego who&apos;ve trusted Roman Built Construction with their projects.
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className="fill-[var(--bronze)] text-[var(--bronze)]" />
              ))}
            </div>
            <span className="text-white text-lg">5.0 Rating</span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[var(--cream)] py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-[var(--bronze)]">500+</p>
              <p className="text-[var(--warm-gray)]">Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[var(--bronze)]">5.0</p>
              <p className="text-[var(--warm-gray)]">Average Rating</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[var(--bronze)]">98%</p>
              <p className="text-[var(--warm-gray)]">Would Recommend</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[var(--bronze)]">10+</p>
              <p className="text-[var(--warm-gray)]">Years in Business</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Review Platforms */}
      <section className="bg-[var(--light-taupe)] py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[var(--charcoal)] mb-4">
            Find Us On Review Platforms
          </h2>
          <p className="text-[var(--warm-gray)] mb-8">
            Check out more reviews on popular platforms and see why San Diego homeowners trust Roman Built Construction.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {["Google", "Yelp", "Houzz", "HomeAdvisor", "BBB"].map((platform) => (
              <span
                key={platform}
                className="px-6 py-3 bg-white rounded-lg shadow-sm text-[var(--charcoal)] font-medium"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Leave a Review */}
      <section className="section bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[var(--charcoal)] mb-4">
            Are You a Past Client?
          </h2>
          <p className="text-[var(--warm-gray)] mb-8">
            We&apos;d love to hear about your experience! Your feedback helps us improve and helps other homeowners find quality construction services.
          </p>
          <a
            href="https://g.page/r/romanbuiltconstruction/review"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            Leave a Google Review
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Become Our Next Success Story?"
        subtitle="Contact us today for a free consultation and see why our clients rave about Roman Built Construction."
      />
    </>
  );
}
