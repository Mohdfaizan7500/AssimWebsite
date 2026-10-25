export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
  className = '',
}) {
  const alignment =
    align === 'left' ? 'text-left items-start' : 'text-center items-center mx-auto';

  return (
    <div className={`flex max-w-3xl flex-col ${alignment} ${className}`}>
      {eyebrow && (
        <span className="eyebrow">
          <span className="h-px w-8 bg-orange-500" aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-4 text-3xl leading-tight sm:text-4xl lg:text-[2.6rem] ${
          light ? 'text-white' : 'text-navy-800'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? 'text-white/80' : 'text-muted'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
