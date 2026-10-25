import { useState } from 'react';
import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-react';
import FormField from './FormField';
import { services } from '../data/services';
import { submitContact, isSimulated } from '../services/api';
import { email as emailRule, minLength, phone, required, validate } from '../utils/validation';

const initialValues = {
  fullName: '',
  email: '',
  mobile: '',
  service: '',
  location: '',
  budget: '',
  description: '',
};

const rules = {
  fullName: [required('Full name'), minLength(3, 'Full name')],
  email: [required('Email address'), emailRule()],
  mobile: [required('Mobile number'), phone()],
  service: [required('Service required')],
  location: [required('Project location')],
  budget: [required('Estimated budget')],
  description: [required('Project description'), minLength(15, 'Project description')],
};

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: '' }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate(values, rules);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus({
        state: 'error',
        message: 'Please correct the highlighted fields before submitting.',
      });
      return;
    }

    setStatus({ state: 'loading', message: 'Sending your message…' });

    try {
      await submitContact(values);
      setStatus({
        state: 'success',
        message: isSimulated()
          ? 'Thank you. This demo form was submitted successfully — no message was actually sent because no backend is connected.'
          : 'Thank you. Your message has been sent and our team will respond shortly.',
      });
      setValues(initialValues);
    } catch {
      setStatus({
        state: 'error',
        message:
          'Sorry, something went wrong and your message could not be sent. Please try again or call us directly.',
      });
    }
  };

  const isLoading = status.state === 'loading';

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField
          id="fullName"
          label="Full Name"
          required
          placeholder="e.g. Jordan Bennett"
          value={values.fullName}
          onChange={handleChange}
          error={errors.fullName}
          autoComplete="name"
        />
        <FormField
          id="email"
          label="Email Address"
          type="email"
          required
          placeholder="e.g. jordan@example.com"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
          autoComplete="email"
        />
        <FormField
          id="mobile"
          label="Mobile Number"
          type="tel"
          required
          placeholder="e.g. +1 555 000 0000"
          value={values.mobile}
          onChange={handleChange}
          error={errors.mobile}
          autoComplete="tel"
        />
        <FormField
          id="service"
          label="Service Required"
          as="select"
          required
          value={values.service}
          onChange={handleChange}
          error={errors.service}
          options={[
            { value: '', label: 'Select a service' },
            ...services.map((service) => ({ value: service.title, label: service.title })),
            { value: 'Other', label: 'Other / Not sure yet' },
          ]}
        />
        <FormField
          id="location"
          label="Project Location"
          required
          placeholder="City or area"
          value={values.location}
          onChange={handleChange}
          error={errors.location}
        />
        <FormField
          id="budget"
          label="Estimated Budget"
          as="select"
          required
          value={values.budget}
          onChange={handleChange}
          error={errors.budget}
          options={[
            { value: '', label: 'Select a budget range' },
            { value: 'Under 50,000', label: 'Under 50,000' },
            { value: '50,000 – 150,000', label: '50,000 – 150,000' },
            { value: '150,000 – 500,000', label: '150,000 – 500,000' },
            { value: '500,000 – 1,000,000', label: '500,000 – 1,000,000' },
            { value: 'Above 1,000,000', label: 'Above 1,000,000' },
            { value: 'Not decided yet', label: 'Not decided yet' },
          ]}
        />
      </div>

      <FormField
        id="description"
        label="Project Description"
        as="textarea"
        required
        placeholder="Tell us about your project, scope and timeline…"
        value={values.description}
        onChange={handleChange}
        error={errors.description}
        hint="A short summary helps us respond with accurate guidance."
      />

      <div className="flex flex-col gap-4">
        <button type="submit" className="btn-primary w-full sm:w-auto" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            <>
              <Send className="h-4 w-4" aria-hidden="true" />
              Send Message
            </>
          )}
        </button>

        <div aria-live="polite" aria-atomic="true">
          {status.state === 'success' && (
            <p className="flex items-start gap-2 rounded-md border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-800">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              {status.message}
            </p>
          )}
          {status.state === 'error' && (
            <p className="flex items-start gap-2 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              {status.message}
            </p>
          )}
        </div>
      </div>
    </form>
  );
}