import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { PORTFOLIO_PROJECTS, BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Work | Construction Projects by Roman Built Construction",
  description: `View our portfolio of completed construction projects in San Diego. Kitchen remodels, bathroom renovations, room additions, custom homes & more. Call ${BUSINESS.phoneFormatted}.`,
  openGraph: {
    title: "Our Work | Construction Projects by Roman Built Construction",
    description: "Browse our portfolio of quality construction projects throughout San Diego County.",
  },
};

const categories = ["All", "Kitchen Remodeling", "Bathroom Remodeling", "Room Additions", "Home Renovations", "Commercial Construction", "Custom Home Building", "Exterior Construction"];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[var(--charcoal)] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Roman Built Construction Project Gallery
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Browse our portfolio of completed projects throughout San Diego County. Each project showcases our commitment to quality craftsmanship.
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="bg-[var(--cream)] py-6 sticky top-[120px] z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "All"
                    ? "bg-[var(--soft-black)] text-white"
                    : "bg-white text-[var(--charcoal)] hover:bg-[var(--soft-black)] hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO_PROJECTS.map((project) => (
              <Link
                key={project.id}
                href={`/portfolio/${project.slug}`}
                className="group card overflow-hidden"
              >
                <div className="relative h-64 -mx-6 -mt-6 mb-4 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-4 left-4 right-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                    <span className="inline-block bg-[var(--soft-black)] text-white text-xs px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[var(--charcoal)] group-hover:text-[var(--bronze)] transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-[var(--warm-gray)] mb-2">
                  {project.location}
                </p>
                <p className="text-[var(--warm-gray)]">
                  {project.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* More Projects Coming */}
      <section className="bg-[var(--cream)] py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[var(--charcoal)] mb-4">
            More Projects Coming Soon
          </h2>
          <p className="text-[var(--warm-gray)] mb-6">
            We&apos;re constantly adding new projects to our portfolio. Want to see more examples of our work? Contact us and we&apos;ll be happy to share additional project photos and references.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Us for More Examples
          </Link>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Start Your Project?"
        subtitle="Let us add your project to our portfolio. Contact us today for a free consultation."
      />
    </>
  );
}
