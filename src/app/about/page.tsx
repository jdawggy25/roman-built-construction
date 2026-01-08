import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Award, Shield, Users, ArrowRight } from "lucide-react";
import CTASection from "@/components/CTASection";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Roman Built Construction | Licensed General Contractor",
  description: `Learn about Roman Built Construction, San Diego's trusted general contractor. Founded by Saud Carrillo, we deliver quality construction services with integrity and craftsmanship.`,
  openGraph: {
    title: "About Roman Built Construction | Licensed General Contractor",
    description: "San Diego's trusted general contractor. Quality craftsmanship, transparent communication, and customer satisfaction.",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-[var(--charcoal)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Roman Built Construction
            </h1>
            <p className="text-xl text-white/80">
              Building dreams into reality since {BUSINESS.founded}. We&apos;re San Diego&apos;s trusted partner for residential and commercial construction projects of all sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="Saud Carrillo - Owner of Roman Built Construction"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[var(--charcoal)] mb-6">
                Our Story
              </h2>
              <p className="text-[var(--warm-gray)] mb-4">
                Roman Built Construction was founded by Saud Carrillo with a simple mission: to deliver exceptional construction services with integrity, quality, and customer-focused service.
              </p>
              <p className="text-[var(--warm-gray)] mb-4">
                With over a decade of experience in the construction industry, Saud built Roman Built Construction on the foundation of honest communication, skilled craftsmanship, and a genuine commitment to exceeding client expectations.
              </p>
              <p className="text-[var(--warm-gray)] mb-6">
                Today, we&apos;ve grown into one of San Diego County&apos;s most trusted general contractors, handling everything from kitchen remodels to custom home builds. But no matter how much we grow, our commitment to personalized service and quality workmanship remains unchanged.
              </p>
              <div className="flex items-center gap-4 p-4 bg-[var(--cream)] rounded-lg">
                <div className="w-16 h-16 bg-[var(--soft-black)] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  SC
                </div>
                <div>
                  <p className="font-semibold text-[var(--charcoal)]">Saud Carrillo</p>
                  <p className="text-sm text-[var(--warm-gray)]">Founder & Owner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--charcoal)] mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-[var(--warm-gray)] max-w-2xl mx-auto">
              These principles guide everything we do at Roman Built Construction.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Integrity",
                description: "We do what we say we'll do. Honest communication and transparent pricing are non-negotiable."
              },
              {
                icon: Award,
                title: "Quality",
                description: "We never cut corners. Every project receives our full attention and commitment to excellence."
              },
              {
                icon: Users,
                title: "Service",
                description: "Your satisfaction is our priority. We treat every client like family and every home like our own."
              },
              {
                icon: CheckCircle,
                title: "Reliability",
                description: "We show up on time, meet deadlines, and deliver on our promises. You can count on us."
              }
            ].map((value, index) => (
              <div key={index} className="card text-center">
                <div className="w-16 h-16 bg-[var(--soft-black)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-[var(--charcoal)] mb-2">
                  {value.title}
                </h3>
                <p className="text-[var(--warm-gray)]">
                  {value.description}
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
                  {
                    title: "Licensed, Bonded & Insured",
                    description: "Full protection for your peace of mind. We're properly licensed by the California Contractors State License Board."
                  },
                  {
                    title: "Transparent Pricing",
                    description: "No hidden fees or surprise charges. We provide detailed estimates and stick to quoted prices."
                  },
                  {
                    title: "Expert Craftsmanship",
                    description: "Our skilled team brings years of experience and attention to detail to every project."
                  },
                  {
                    title: "Dedicated Project Management",
                    description: "One point of contact throughout your project. Clear communication and regular updates."
                  },
                  {
                    title: "Comprehensive Warranties",
                    description: "We stand behind our work with solid warranties on both labor and materials."
                  },
                  {
                    title: "Local Expertise",
                    description: "We know San Diego County inside and out – the codes, permits, and what works best in our climate."
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
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                alt="Quality construction by Roman Built"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section bg-[var(--light-taupe)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--charcoal)] mb-4">
              Our Process
            </h2>
            <p className="text-lg text-[var(--warm-gray)] max-w-2xl mx-auto">
              From initial consultation to final walkthrough, here&apos;s what to expect when you work with us.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Consultation",
                description: "We discuss your vision, assess your space, and understand your goals and budget."
              },
              {
                step: "2",
                title: "Planning & Design",
                description: "We create detailed plans, help with material selections, and provide a comprehensive estimate."
              },
              {
                step: "3",
                title: "Construction",
                description: "Our skilled team brings your project to life with quality workmanship and attention to detail."
              },
              {
                step: "4",
                title: "Completion",
                description: "We conduct a thorough walkthrough, address any details, and ensure your complete satisfaction."
              }
            ].map((phase, index) => (
              <div key={index} className="relative">
                <div className="card text-center h-full">
                  <div className="w-12 h-12 bg-[var(--soft-black)] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--charcoal)] mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-[var(--warm-gray)]">
                    {phase.description}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="text-[var(--sand)]" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--charcoal)] mb-4">
              Licenses & Credentials
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="card">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-[var(--charcoal)] mb-4">Licensing</h3>
                  <ul className="space-y-2 text-[var(--warm-gray)]">
                    <li>{BUSINESS.license}</li>
                    <li>California General Contractor (B License)</li>
                    <li>Bonded & Insured</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--charcoal)] mb-4">Insurance</h3>
                  <ul className="space-y-2 text-[var(--warm-gray)]">
                    <li>General Liability Insurance</li>
                    <li>Workers&apos; Compensation Insurance</li>
                    <li>Auto Liability Insurance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Get Started?"
        subtitle="Contact us today for a free consultation and estimate. Let's discuss how we can bring your vision to life."
      />
    </>
  );
}
