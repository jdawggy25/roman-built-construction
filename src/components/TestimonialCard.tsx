import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  location: string;
  project: string;
  rating: number;
  text: string;
}

export default function TestimonialCard({ name, location, project, rating, text }: TestimonialCardProps) {
  return (
    <div className="card relative">
      <Quote className="absolute top-6 right-6 text-[var(--sand)]" size={32} />
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? 'fill-[var(--bronze)] text-[var(--bronze)]' : 'text-[var(--sand)]'}
          />
        ))}
      </div>
      <p className="text-[var(--dark-gray)] mb-6 leading-relaxed">
        &ldquo;{text}&rdquo;
      </p>
      <div className="border-t border-[var(--sand)] pt-4">
        <p className="font-medium text-[var(--charcoal)]">{name}</p>
        <p className="text-sm text-[var(--medium-gray)]">{project} · {location}</p>
      </div>
    </div>
  );
}
