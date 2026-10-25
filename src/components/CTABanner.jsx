import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import IMAGES from '../data/images';

export default function CTABanner({
  image = IMAGES.ctaBanner,
  alt = 'Construction engineers working on a structural project',
  title = "Let's Build Something Great Together.",
  description = 'Have a construction project in mind? Contact AMD Engineer Solution to discuss your requirements.',
  buttonLabel = 'Request a Free Quote',
  buttonTo = '/quote',
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={image}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/85 to-navy-800/70"
        aria-hidden="true"
      />
      <div className="container-x relative py-16 sm:py-20 lg:py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
            {title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
            {description}
          </p>
          <Link to={buttonTo} className="btn-primary mt-8">
            {buttonLabel}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}