export const isEmail = (value) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(value).trim());

export const isPhone = (value) =>
  String(value).replace(/[^\d]/g, '').length >= 7;

export const isRequired = (value) =>
  value !== undefined && value !== null && String(value).trim().length > 0;

export const validate = (values, rules) => {
  const errors = {};
  Object.entries(rules).forEach(([field, checks]) => {
    for (const check of checks) {
      const message = check(values[field], values);
      if (message) {
        errors[field] = message;
        break;
      }
    }
  });
  return errors;
};

export const required = (label) => (value) =>
  isRequired(value) ? '' : `${label} is required.`;

export const email = (label = 'Email address') => (value) =>
  !isRequired(value) || isEmail(value) ? '' : `Enter a valid ${label.toLowerCase()}.`;

export const phone = (label = 'Mobile number') => (value) =>
  !isRequired(value) || isPhone(value)
    ? ''
    : `Enter a valid ${label.toLowerCase()} (at least 7 digits).`;

export const minLength = (length, label) => (value) =>
  !isRequired(value) || String(value).trim().length >= length
    ? ''
    : `${label} should be at least ${length} characters.`;