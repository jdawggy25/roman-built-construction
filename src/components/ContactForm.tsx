'use client';

import { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { SERVICES } from '@/lib/constants';

interface FormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  projectAddress: string;
  message: string;
  budget: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    projectAddress: '',
    message: '',
    budget: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Simulate form submission
    // In production, replace with actual form handling (API route, email service, etc.)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        projectAddress: '',
        message: '',
        budget: ''
      });
    } catch {
      setError('Something went wrong. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="card text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-[var(--charcoal)] mb-2">Thank You!</h3>
        <p className="text-[var(--warm-gray)] mb-4">
          We&apos;ve received your request and will contact you within 24 hours.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="text-[var(--bronze)] font-medium hover:underline"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[var(--charcoal)] mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--warm-taupe)] focus:border-transparent outline-none transition-all"
            placeholder="John Smith"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[var(--charcoal)] mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--warm-taupe)] focus:border-transparent outline-none transition-all"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[var(--charcoal)] mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--warm-taupe)] focus:border-transparent outline-none transition-all"
            placeholder="(555) 123-4567"
          />
        </div>

        <div>
          <label htmlFor="projectType" className="block text-sm font-medium text-[var(--charcoal)] mb-2">
            Project Type *
          </label>
          <select
            id="projectType"
            name="projectType"
            required
            value={formData.projectType}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--warm-taupe)] focus:border-transparent outline-none transition-all bg-white"
          >
            <option value="">Select a project type</option>
            {SERVICES.map(service => (
              <option key={service.id} value={service.id}>
                {service.name}
              </option>
            ))}
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="projectAddress" className="block text-sm font-medium text-[var(--charcoal)] mb-2">
          Project Address
        </label>
        <input
          type="text"
          id="projectAddress"
          name="projectAddress"
          value={formData.projectAddress}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--warm-taupe)] focus:border-transparent outline-none transition-all"
          placeholder="123 Main St, San Diego, CA"
        />
      </div>

      <div>
        <label htmlFor="budget" className="block text-sm font-medium text-[var(--charcoal)] mb-2">
          Estimated Budget (Optional)
        </label>
        <select
          id="budget"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--warm-taupe)] focus:border-transparent outline-none transition-all bg-white"
        >
          <option value="">Select a budget range</option>
          <option value="under-25k">Under $25,000</option>
          <option value="25k-50k">$25,000 - $50,000</option>
          <option value="50k-100k">$50,000 - $100,000</option>
          <option value="100k-250k">$100,000 - $250,000</option>
          <option value="250k-500k">$250,000 - $500,000</option>
          <option value="over-500k">Over $500,000</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[var(--charcoal)] mb-2">
          Project Details *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--warm-taupe)] focus:border-transparent outline-none transition-all resize-none"
          placeholder="Tell us about your project: What would you like to accomplish? Any specific features or requirements? Timeline considerations?"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Send size={20} />
            Request Free Estimate
          </>
        )}
      </button>

      <p className="text-sm text-[var(--warm-gray)] text-center">
        By submitting this form, you agree to our{' '}
        <a href="/privacy-policy" className="text-[var(--bronze)] hover:underline">Privacy Policy</a>.
        We&apos;ll respond within 24 hours.
      </p>
    </form>
  );
}
