import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import SmartImage from './SmartImage';

export default function Gallery({ images = [], title = 'Project gallery' }) {
  const [openIndex, setOpenIndex] = useState(null);
  const dialogRef = useRef(null);
  const isOpen = openIndex !== null;

  const close = useCallback(() => setOpenIndex(null), []);
  const next = useCallback(
    () => setOpenIndex((current) => (current + 1) % images.length),
    [images.length]
  );
  const prev = useCallback(
    () => setOpenIndex((current) => (current - 1 + images.length) % images.length),
    [images.length]
  );

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowRight') next();
      if (event.key === 'ArrowLeft') prev();
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    dialogRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, close, next, prev]);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {images.map((image, index) => (
          <button
            key={`${image}-${index}`}
            type="button"
            onClick={() => setOpenIndex(index)}
            className="group relative overflow-hidden rounded-xl shadow-soft focus-visible:ring-2 focus-visible:ring-orange-500"
            aria-label={`Open image ${index + 1} of ${images.length} in gallery`}
          >
            <SmartImage
              src={image}
              alt={`${title} — image ${index + 1}`}
              className="aspect-[4/3] w-full"
              imgClassName="transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-navy-900/0 transition-colors duration-300 group-hover:bg-navy-900/20" />
          </button>
        ))}
      </div>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} — enlarged image viewer`}
          ref={dialogRef}
          tabIndex={-1}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-950/95 p-4 sm:p-8"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close image viewer"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              prev();
            }}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-orange-500 sm:left-6"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <figure
            className="max-h-full w-full max-w-4xl"
            onClick={(event) => event.stopPropagation()}
          >
            <SmartImage
              src={images[openIndex]}
              alt={`${title} — enlarged image ${openIndex + 1}`}
              className="max-h-[78vh] w-full rounded-lg"
              imgClassName="object-contain !h-auto max-h-[78vh]"
            />
            <figcaption className="mt-3 text-center text-sm text-white/70">
              {openIndex + 1} / {images.length}
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              next();
            }}
            aria-label="Next image"
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-orange-500 sm:right-6"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </>
  );
}