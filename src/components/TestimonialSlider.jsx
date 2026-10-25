import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import SmartImage from './SmartImage';
import { testimonials } from '../data/testimonials';

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((next) => {
    setIndex((next + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (paused) return undefined;
    const timer = setTimeout(() => goTo(index + 1), 6000);
    return () => clearTimeout(timer);
  }, [index, paused, goTo]);

  const active = testimonials[index];

  return (
    <div
      className="relative mx-auto max-w-4xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Client testimonials"
    >
      <div className="card relative overflow-hidden p-7 sm:p-10">
        <Quote
          className="absolute -right-2 -top-2 h-24 w-24 text-navy-50"
          aria-hidden="true"
        />
        <div
          key={active.name}
          className="relative animate-fade-in"
          role="group"
          aria-roledescription="slide"
          aria-label={`Testimonial ${index + 1} of ${testimonials.length}`}
        >
          <div className="flex items-center gap-1 text-orange-500" aria-label={`${active.rating} out of 5 stars`}>
            {Array.from({ length: active.rating }).map((_, starIndex) => (
              <Star key={starIndex} className="h-4 w-4 fill-current" aria-hidden="true" />
            ))}
          </div>
          <blockquote className="mt-5 text-lg leading-relaxed text-ink sm:text-xl">
            &ldquo;{active.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-7 flex items-center gap-4">
            <SmartImage
              src={active.image}
              alt={`Portrait of ${active.name}`}
              className="h-14 w-14 shrink-0 rounded-full"
            />
            <div>
              <p className="font-bold text-navy-800">{active.name}</p>
              <p className="text-sm text-muted">
                {active.role} &middot; {active.projectType}
              </p>
            </div>
          </figcaption>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          aria-label="Previous testimonial"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-200 bg-white text-navy-800 transition-colors hover:border-orange-500 hover:bg-orange-500 hover:text-white"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-2">
          {testimonials.map((item, itemIndex) => (
            <button
              key={item.name}
              type="button"
              onClick={() => goTo(itemIndex)}
              aria-label={`Go to testimonial ${itemIndex + 1}`}
              aria-current={itemIndex === index}
              className={`h-2 rounded-full transition-all duration-300 ${
                itemIndex === index ? 'w-7 bg-orange-500' : 'w-2 bg-navy-200 hover:bg-navy-300'
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          aria-label="Next testimonial"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-200 bg-white text-navy-800 transition-colors hover:border-orange-500 hover:bg-orange-500 hover:text-white"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}