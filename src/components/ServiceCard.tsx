import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  name: string;
  shortDescription: string;
  slug: string;
  image: string;
}

export default function ServiceCard({ name, shortDescription, slug, image }: ServiceCardProps) {
  return (
    <Link href={slug} className="group">
      <div className="card overflow-hidden h-full flex flex-col p-0">
        <div className="relative h-52 overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--soft-black)]/60 to-transparent" />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-lg font-semibold text-[var(--charcoal)] mb-2 group-hover:text-[var(--bronze)] transition-colors">
            {name}
          </h3>
          <p className="text-[var(--medium-gray)] text-sm flex-grow leading-relaxed">
            {shortDescription}
          </p>
          <div className="mt-4 flex items-center gap-2 text-[var(--bronze)] text-sm font-medium">
            Learn More
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}
