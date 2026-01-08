import Link from 'next/link';
import { Phone } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  variant?: 'primary' | 'secondary';
}

export default function CTASection({
  title = "Ready to Start Your Project?",
  subtitle = "Contact us today for a free, no-obligation estimate. Let's bring your vision to life.",
  variant = 'primary'
}: CTASectionProps) {
  const bgClass = variant === 'primary'
    ? 'bg-[var(--soft-black)]'
    : 'bg-[var(--charcoal)]';

  return (
    <section className={`${bgClass} py-20`}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight">
          {title}
        </h2>
        <p className="text-lg text-[var(--concrete)] mb-10 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/free-estimate"
            className="inline-flex items-center justify-center gap-2 bg-white text-[var(--charcoal)] px-8 py-4 rounded font-medium hover:bg-[var(--cream)] transition-colors"
          >
            Get Free Estimate
          </Link>
          <a
            href={BUSINESS.phoneTel}
            className="inline-flex items-center justify-center gap-2 bg-transparent border border-[var(--medium-gray)] text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"
          >
            <Phone size={18} />
            {BUSINESS.phoneFormatted}
          </a>
        </div>
      </div>
    </section>
  );
}
