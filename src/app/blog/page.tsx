import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import CTASection from "@/components/CTASection";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Construction Blog | Tips & Guides from Roman Built Construction",
  description: `Construction insights, home improvement tips, and guides from San Diego's trusted contractor. Expert advice for your next project. Call ${BUSINESS.phoneFormatted}.`,
  openGraph: {
    title: "Construction Blog | Tips & Guides from Roman Built Construction",
    description: "Construction insights and home improvement tips from San Diego's trusted contractor.",
  },
};

// Placeholder blog posts
const blogPosts = [
  {
    title: "How Much Does a Kitchen Remodel Cost in San Diego?",
    excerpt: "A comprehensive guide to kitchen remodel costs in the San Diego area, including factors that affect pricing and tips for budgeting your project.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    date: "Coming Soon",
    category: "Kitchen",
    slug: "kitchen-remodel-cost-san-diego"
  },
  {
    title: "ADU Construction Guide: What San Diego Homeowners Need to Know",
    excerpt: "Everything you need to know about building an ADU in San Diego, including permit requirements, costs, and design considerations.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    date: "Coming Soon",
    category: "ADU",
    slug: "adu-construction-guide-san-diego"
  },
  {
    title: "Choosing the Right General Contractor: A Homeowner's Guide",
    excerpt: "Tips for selecting a trustworthy general contractor for your next project, including what to look for and questions to ask.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    date: "Coming Soon",
    category: "Tips",
    slug: "choosing-general-contractor"
  },
  {
    title: "Bathroom Remodeling Trends for 2026",
    excerpt: "The latest bathroom design trends and features that are popular with San Diego homeowners this year.",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
    date: "Coming Soon",
    category: "Bathroom",
    slug: "bathroom-trends-2026"
  },
  {
    title: "Understanding the Permit Process for Home Renovations",
    excerpt: "A straightforward guide to the permit process in San Diego County, including what requires a permit and how to navigate the process.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    date: "Coming Soon",
    category: "Permits",
    slug: "permit-process-guide"
  },
  {
    title: "Room Addition vs. Moving: Which Is Right for You?",
    excerpt: "A practical comparison to help you decide whether to expand your current home or move to a new one.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    date: "Coming Soon",
    category: "Additions",
    slug: "room-addition-vs-moving"
  }
];

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[var(--charcoal)] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Construction Insights & Home Improvement Tips
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Expert advice, project guides, and industry insights from the Roman Built Construction team.
          </p>
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="bg-[var(--soft-black)] py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-white text-lg">
            Our blog is coming soon! Check back for helpful articles about construction and home improvement.
          </p>
        </div>
      </section>

      {/* Blog Posts Preview */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[var(--charcoal)] mb-8">
            Upcoming Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="card overflow-hidden opacity-75">
                <div className="relative h-48 -mx-6 -mt-6 mb-4">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[var(--soft-black)] text-white text-xs px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--warm-gray)] mb-2">
                  <Calendar size={14} />
                  <span>{post.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-[var(--charcoal)] mb-2">
                  {post.title}
                </h3>
                <p className="text-[var(--warm-gray)] text-sm">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-[var(--cream)] py-16">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[var(--charcoal)] mb-4">
            Get Notified When We Launch
          </h2>
          <p className="text-[var(--warm-gray)] mb-6">
            Want to be the first to read our construction guides and tips? Drop us a line and we&apos;ll let you know when new articles are published.
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
            Contact Us
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
