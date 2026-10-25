import { Link } from 'react-router-dom';

function Mark({ className = '' }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="AMD Engineer Solution logo"
    >
      <rect width="64" height="64" rx="14" className="fill-navy-800" />
      <path
        d="M14 44V30l10-8 10 8v14"
        fill="none"
        stroke="#F28C28"
        strokeWidth="4"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M34 44V24l8-6 8 6v20"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="4"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path d="M10 48h44" stroke="#F28C28" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export default function Logo({ light = false, className = '', onClick }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="AMD Engineer Solution — go to homepage"
      className={`group flex items-center gap-3 ${className}`}
    >
      <Mark className="h-10 w-10 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5" />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-lg font-extrabold tracking-tight ${
            light ? 'text-white' : 'text-navy-800'
          }`}
        >
          AMD <span className="text-orange-500">Engineer</span>
        </span>
        <span
          className={`mt-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.28em] ${
            light ? 'text-white/70' : 'text-muted'
          }`}
        >
          Solution
        </span>
      </span>
    </Link>
  );
}
