import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { BUSINESS, SERVICES, SERVICE_AREAS } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--soft-black)] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[var(--bronze)] rounded flex items-center justify-center">
                <span className="text-white font-semibold">RB</span>
              </div>
              <div>
                <span className="font-semibold text-lg tracking-tight">Roman Built</span>
                <span className="block text-xs text-[var(--concrete)] tracking-wide uppercase">Construction</span>
              </div>
            </div>
            <p className="text-[var(--concrete)] text-sm leading-relaxed mb-6">
              San Diego&apos;s trusted general contractor for residential and commercial construction. Quality craftsmanship since {BUSINESS.founded}.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-6 text-[var(--greige)]">Services</h3>
            <ul className="space-y-3">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link href={service.slug} className="text-[var(--concrete)] hover:text-white transition-colors text-sm">
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-[var(--warm-taupe)] hover:text-white text-sm">
                  View All →
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-6 text-[var(--greige)]">Service Areas</h3>
            <ul className="space-y-3">
              {SERVICE_AREAS.cities.slice(0, 8).map((city) => (
                <li key={city} className="text-[var(--concrete)] text-sm">
                  {city}
                </li>
              ))}
              <li>
                <Link href="/service-areas" className="text-[var(--warm-taupe)] hover:text-white text-sm">
                  View All →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-6 text-[var(--greige)]">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href={BUSINESS.phoneTel} className="flex items-start gap-3 text-[var(--concrete)] hover:text-white transition-colors text-sm">
                  <Phone size={18} className="flex-shrink-0 mt-0.5 text-[var(--warm-taupe)]" />
                  <span>{BUSINESS.phoneFormatted}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${BUSINESS.email}`} className="flex items-start gap-3 text-[var(--concrete)] hover:text-white transition-colors text-sm">
                  <Mail size={18} className="flex-shrink-0 mt-0.5 text-[var(--warm-taupe)]" />
                  <span>{BUSINESS.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-[var(--concrete)] text-sm">
                <MapPin size={18} className="flex-shrink-0 mt-0.5 text-[var(--warm-taupe)]" />
                <span>{BUSINESS.address.full}</span>
              </li>
              <li className="flex items-start gap-3 text-[var(--concrete)] text-sm">
                <Clock size={18} className="flex-shrink-0 mt-0.5 text-[var(--warm-taupe)]" />
                <div className="space-y-1">
                  <p>{BUSINESS.hours.weekdays}</p>
                  <p>{BUSINESS.hours.saturday}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--dark-gray)]">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-[var(--medium-gray)] text-sm text-center md:text-left">
              <p>© {currentYear} {BUSINESS.name}. All rights reserved.</p>
              <p className="mt-1">{BUSINESS.license}</p>
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy-policy" className="text-[var(--medium-gray)] hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/terms-of-service" className="text-[var(--medium-gray)] hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="/contact" className="text-[var(--medium-gray)] hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
