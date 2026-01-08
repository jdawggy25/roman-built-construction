import { Metadata } from "next";
import { CheckCircle, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Free Construction Estimate | Roman Built Construction",
  description: `Request your free, no-obligation construction estimate from Roman Built Construction. San Diego's trusted general contractor for kitchen remodels, bathroom renovations, additions & more.`,
  openGraph: {
    title: "Free Construction Estimate | Roman Built Construction",
    description: `Get a free estimate for your construction project in San Diego. Call ${BUSINESS.phoneFormatted} or fill out our form.`,
  },
};

export default function FreeEstimatePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[var(--charcoal)] to-[var(--dark-gray)] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Request Your Free, No-Obligation Estimate
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Tell us about your project and we&apos;ll provide a detailed estimate within 24-48 hours.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* What to Expect */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-[var(--charcoal)] mb-6">
                What to Expect
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[var(--soft-black)] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--charcoal)]">Submit Your Request</h3>
                    <p className="text-sm text-[var(--warm-gray)]">
                      Fill out the form with your project details. The more information you provide, the more accurate our estimate will be.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[var(--soft-black)] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--charcoal)]">We&apos;ll Review & Contact You</h3>
                    <p className="text-sm text-[var(--warm-gray)]">
                      Our team will review your request and reach out within 24 hours to discuss your project and schedule a site visit if needed.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[var(--soft-black)] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--charcoal)]">Receive Your Detailed Estimate</h3>
                    <p className="text-sm text-[var(--warm-gray)]">
                      We&apos;ll provide a comprehensive estimate with clear pricing, timeline, and scope of work.
                    </p>
                  </div>
                </div>
              </div>

              {/* Promise Box */}
              <div className="mt-8 p-6 bg-[var(--cream)] rounded-lg">
                <h3 className="font-bold text-[var(--charcoal)] mb-4">Our Promise to You</h3>
                <ul className="space-y-3">
                  {[
                    "No pressure, no obligations",
                    "Transparent, detailed pricing",
                    "Response within 24 hours",
                    "Professional consultation",
                    "Honest recommendations"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-[var(--charcoal)]">
                      <CheckCircle className="text-[var(--bronze)] flex-shrink-0" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Phone CTA */}
              <div className="mt-8 p-6 bg-[var(--soft-black)] rounded-lg text-center">
                <p className="text-white mb-2">Prefer to talk?</p>
                <a
                  href={BUSINESS.phoneTel}
                  className="inline-flex items-center gap-2 text-white font-bold text-xl hover:underline"
                >
                  <Phone size={24} />
                  {BUSINESS.phoneFormatted}
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="card">
                <h2 className="text-2xl font-bold text-[var(--charcoal)] mb-2">
                  Tell Us About Your Project
                </h2>
                <p className="text-[var(--warm-gray)] mb-6">
                  Fill out the form below and we&apos;ll get back to you within 24 hours with a detailed estimate.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-[var(--light-taupe)] py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-[var(--bronze)]">500+</p>
              <p className="text-[var(--warm-gray)]">Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[var(--bronze)]">10+</p>
              <p className="text-[var(--warm-gray)]">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[var(--bronze)]">5.0</p>
              <p className="text-[var(--warm-gray)]">Star Rating</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[var(--bronze)]">100%</p>
              <p className="text-[var(--warm-gray)]">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
