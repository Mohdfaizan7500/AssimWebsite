import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useContent } from '../context/ContentContext.jsx';

export default function PageHero({
  title,
  description,
  image,
  alt = 'Construction and engineering background',
  breadcrumbs = [],
}) {
  const { images } = useContent();
  const heroImage = image || images.servicesHero;

  return (
    <section className="relative isolate overflow-hidden bg-navy-900">
      <img
        src={heroImage}
        alt={alt}
        loading="eager"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-navy-950/95 to-navy-900/70"
        aria-hidden="true"
      />
      <div className="container-x relative py-16 sm:py-20 lg:py-24">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-white/70">
            <li>
              <Link to="/" className="transition-colors hover:text-orange-400">
                Home
              </Link>
            </li>
            {breadcrumbs.map((crumb) => (
              <li key={crumb.label} className="flex items-center gap-1.5">
                <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                {crumb.to ? (
                  <Link to={crumb.to} className="transition-colors hover:text-orange-400">
                    {crumb.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-orange-400">
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="mt-5 max-w-3xl text-3xl font-extrabold leading-tight text-white text-shadow-hero sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}