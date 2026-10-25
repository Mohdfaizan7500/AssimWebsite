export default function FormField({
  id,
  label,
  type = 'text',
  as = 'input',
  required = false,
  error,
  options = [],
  hint,
  className = '',
  ...props
}) {
  const describedBy = [
    error ? `${id}-error` : null,
    hint ? `${id}-hint` : null,
  ]
    .filter(Boolean)
    .join(' ');

  const common = {
    id,
    name: id,
    'aria-invalid': Boolean(error),
    'aria-describedby': describedBy || undefined,
    'aria-required': required || undefined,
    className: `input ${error ? '!border-red-400 focus:!ring-red-400' : ''}`,
    ...props,
  };

  return (
    <div className={className}>
      <label htmlFor={id} className="label">
        {label}
        {required && (
          <span className="ml-1 text-orange-500" aria-hidden="true">
            *
          </span>
        )}
      </label>

      {as === 'textarea' ? (
        <textarea rows={4} {...common} />
      ) : as === 'select' ? (
        <select {...common}>
          {options.map((option) => {
            const value = typeof option === 'string' ? option : option.value;
            const text = typeof option === 'string' ? option : option.label;
            return (
              <option key={value} value={value}>
                {text}
              </option>
            );
          })}
        </select>
      ) : (
        <input type={type} {...common} />
      )}

      {hint && !error && (
        <p id={`${id}-hint`} className="mt-1.5 text-xs text-muted">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}