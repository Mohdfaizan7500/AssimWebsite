import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

export default function NotFound() {
  useSEO({
    title: 'Page Not Found | AMD Engineer Solution',
    description: 'The page you are looking for could not be found.',
  });

  return (
    <section className="flex min-h-[70vh] items-center bg-surface">
      <div className="container-x text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-navy-800 text-orange-400">
          <Compass className="h-8 w-8" aria-hidden="true" />
        </span>
        <p className="mt-6 font-display text-6xl font-extrabold text-navy-800 sm:text-7xl">
          404
        </p>
        <h1 className="mt-3 text-2xl font-bold text-navy-800 sm:text-3xl">
          This page could not be found
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted sm:text-base">
          The page you are looking for may have been moved or no longer exists. Let&apos;s get
          you back on solid ground.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn-primary">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Home
          </Link>
          <Link to="/projects" className="btn-navy">
            Browse Projects
          </Link>
        </div>
      </div>
    </section>
  );
}