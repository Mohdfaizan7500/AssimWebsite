import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useContent } from '../context/ContentContext.jsx';

const AUTOPLAY_MS = 5000;

export default function HeroSlider() {
  const { heroSlides: slides } = useContent();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStart = useRef(null);
  const regionRef = useRef(null);

  const goTo = useCallback(
    (next) => {
      if (!slides.length) return;
      setIndex((next + slides.length) % slides.length);
    },
    [slides.length]
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (paused || !slides.length) return undefined;
    const timer = setTimeout(next, AUTOPLAY_MS);
    return () => clearTimeout(timer);
  }, [index, paused, next, slides.length]);

  useEffect(() => {
    const onVisibility = () => setPaused(document.hidden);
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  const onKeyDown = (event) => {
    if (event.key === 'ArrowRight') next();
    if (event.key === 'ArrowLeft') prev();
  };

  const onTouchStart = (event) => {
    touchStart.current = event.touches[0].clientX;
  };

  const onTouchEnd = (event) => {
    if (touchStart.current == null) return;
    const delta = event.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(delta) > 50) {
      if (delta < 0) next();
      else prev();
    }
    touchStart.current = null;
  };

  return (
    <section
      ref={regionRef}
      aria-roledescription="carousel"
      aria-label="Featured construction projects"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className="relative isolate h-[100svh] min-h-[520px] w-full overflow-hidden bg-navy-900"
    >
      {slides.map((slide, slideIndex) => {
        const active = slideIndex === index;
        return (
          <div
            key={slide.headline}
            role="group"
            aria-roledescription="slide"
            aria-label={`${slideIndex + 1} of ${slides.length}`}
            aria-hidden={!active}
            className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
              active ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              loading={slideIndex === 0 ? 'eager' : 'lazy'}
              fetchPriority={slideIndex === 0 ? 'high' : 'auto'}
              className={`h-full w-full object-cover ${active ? 'animate-ken-burns' : ''}`}
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-900/75 to-navy-900/40"
              aria-hidden="true"
            />
            <div className="absolute inset-0">
              <div className="container-x flex h-full items-center">
                <div
                  className={`max-w-2xl text-white transition-all duration-700 ${
                    active ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                  }`}
                >
                  <span className="eyebrow text-orange-400">
                    <span className="h-px w-10 bg-orange-500" aria-hidden="true" />
                    Civil Engineering &amp; Construction
                  </span>
                  <h1 className="mt-5 text-3xl font-extrabold leading-[1.1] text-white text-shadow-hero sm:text-5xl lg:text-6xl">
                    {slide.headline}
                  </h1>
                  <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 text-shadow-hero sm:text-lg">
                    {slide.description}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link to="/projects" className="btn-primary">
                      Explore Our Projects
                    </Link>
                    <Link to="/contact" className="btn-outline">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-orange-500 hover:border-orange-500 sm:flex"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-orange-500 hover:border-orange-500 sm:flex"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-6 left-0 right-0 z-20 flex items-center justify-center gap-2.5">
        {slides.map((slide, slideIndex) => (
          <button
            key={slide.headline}
            type="button"
            onClick={() => goTo(slideIndex)}
            aria-label={`Go to slide ${slideIndex + 1}`}
            aria-current={slideIndex === index}
            className={`h-2 rounded-full transition-all duration-300 ${
              slideIndex === index
                ? 'w-8 bg-orange-500'
                : 'w-2 bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  );
}