import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Icon from './Icon';

export default function ServiceCard({ service }) {
  return (
    <article className="card group flex h-full flex-col p-6 hover:-translate-y-1 hover:border-orange-200 hover:shadow-card-hover">
      <span className="flex h-14 w-14 items-center justify-center rounded-lg bg-navy-800 text-orange-400 transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
        <Icon name={service.icon} className="h-6 w-6" />
      </span>
      <h3 className="mt-5 text-lg font-bold text-navy-800">{service.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{service.short}</p>
      <Link
        to={`/services#${service.slug}`}
        className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-orange-600 transition-colors hover:text-orange-700"
        aria-label={`Learn more about ${service.title}`}
      >
        Learn More
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </article>
  );
}