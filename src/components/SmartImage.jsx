import { useState } from 'react';
import { ImageOff } from 'lucide-react';

export default function SmartImage({
  src,
  alt,
  className = '',
  imgClassName = '',
  loading = 'lazy',
  ...props
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-navy-100 ${className}`}>
      {failed ? (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-navy-800 to-navy-600 px-4 text-center text-white/75">
          <ImageOff className="h-8 w-8 shrink-0" aria-hidden="true" />
          <span className="text-xs font-medium leading-snug">{alt}</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={loading}
          decoding="async"
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover ${imgClassName}`}
          {...props}
        />
      )}
    </div>
  );
}
