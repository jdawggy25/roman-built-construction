'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { BUSINESS, SERVICES } from '@/lib/constants';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="bg-[var(--warm-white)] shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-[var(--soft-black)] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <span className="text-white/80">Licensed & Insured General Contractor</span>
          <a href={BUSINESS.phoneTel} className="flex items-center gap-2 hover:text-white/60 transition-colors">
            <Phone size={14} />
            {BUSINESS.phoneFormatted}
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-11 h-11 bg-[var(--soft-black)] rounded flex items-center justify-center">
              <span className="text-white font-semibold text-lg tracking-tight">RB</span>
            </div>
            <div>
              <span className="font-semibold text-lg text-[var(--charcoal)] tracking-tight">Roman Built</span>
              <span className="block text-xs text-[var(--medium-gray)] tracking-wide uppercase">Construction</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-[var(--dark-gray)] hover:text-[var(--charcoal)] transition-colors text-sm font-medium tracking-wide">
              Home
            </Link>
            <Link href="/about" className="text-[var(--dark-gray)] hover:text-[var(--charcoal)] transition-colors text-sm font-medium tracking-wide">
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-[var(--dark-gray)] hover:text-[var(--charcoal)] transition-colors text-sm font-medium tracking-wide"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Services
                <ChevronDown size={14} />
              </button>
              <div
                className={`absolute top-full left-0 w-64 bg-white shadow-lg rounded py-2 mt-2 transition-all duration-200 border border-[var(--sand)] ${isServicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <Link href="/services" className="block px-4 py-2 text-[var(--charcoal)] hover:bg-[var(--cream)] text-sm font-medium">
                  All Services
                </Link>
                <div className="border-t border-[var(--sand)] my-1"></div>
                {SERVICES.map((service) => (
                  <Link
                    key={service.id}
                    href={service.slug}
                    className="block px-4 py-2 text-[var(--medium-gray)] hover:bg-[var(--cream)] hover:text-[var(--charcoal)] text-sm"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/portfolio" className="text-[var(--dark-gray)] hover:text-[var(--charcoal)] transition-colors text-sm font-medium tracking-wide">
              Portfolio
            </Link>
            <Link href="/service-areas" className="text-[var(--dark-gray)] hover:text-[var(--charcoal)] transition-colors text-sm font-medium tracking-wide">
              Areas
            </Link>
            <Link href="/testimonials" className="text-[var(--dark-gray)] hover:text-[var(--charcoal)] transition-colors text-sm font-medium tracking-wide">
              Reviews
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/free-estimate"
              className="btn-primary text-sm"
            >
              Free Estimate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-[var(--sand)]">
            <div className="flex flex-col gap-1 pt-4">
              <Link href="/" className="py-3 text-[var(--charcoal)] font-medium" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link href="/about" className="py-3 text-[var(--charcoal)] font-medium" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link href="/services" className="py-3 text-[var(--charcoal)] font-medium" onClick={() => setIsMenuOpen(false)}>
                Services
              </Link>
              <div className="pl-4 flex flex-col gap-1 border-l-2 border-[var(--sand)] ml-2">
                {SERVICES.map((service) => (
                  <Link
                    key={service.id}
                    href={service.slug}
                    className="py-2 text-[var(--medium-gray)] text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              <Link href="/portfolio" className="py-3 text-[var(--charcoal)] font-medium" onClick={() => setIsMenuOpen(false)}>
                Portfolio
              </Link>
              <Link href="/service-areas" className="py-3 text-[var(--charcoal)] font-medium" onClick={() => setIsMenuOpen(false)}>
                Service Areas
              </Link>
              <Link href="/testimonials" className="py-3 text-[var(--charcoal)] font-medium" onClick={() => setIsMenuOpen(false)}>
                Reviews
              </Link>
              <Link href="/contact" className="py-3 text-[var(--charcoal)] font-medium" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
              <div className="mt-4 space-y-3">
                <Link
                  href="/free-estimate"
                  className="btn-primary block text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Free Estimate
                </Link>
                <a
                  href={BUSINESS.phoneTel}
                  className="btn-secondary block text-center flex items-center justify-center gap-2"
                >
                  <Phone size={18} />
                  {BUSINESS.phoneFormatted}
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
