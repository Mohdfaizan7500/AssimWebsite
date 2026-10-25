import { useState } from 'react';
import { AlertCircle, CheckCircle2, Loader2, FileText } from 'lucide-react';
import FormField from './FormField';
import { useContent } from '../context/ContentContext.jsx';
import { submitQuote } from '../services/api';
import { email as emailRule, minLength, phone, required, validate } from '../utils/validation';

const initialValues = {
  customerName: '',
  mobile: '',
  email: '',
  projectType: '',
  area: '',
  location: '',
  budget: '',
  startDate: '',
  requirements: '',
};

const rules = {
  customerName: [required('Customer name'), minLength(3, 'Customer name')],
  mobile: [required('Mobile number'), phone()],
  email: [required('Email address'), emailRule()],
  projectType: [required('Project type')],
  area: [required('Plot or construction area')],
  location: [required('Project location')],
  budget: [required('Estimated budget')],
  startDate: [required('Preferred start date')],
  requirements: [required('Additional requirements'), minLength(10, 'Additional requirements')],
};

export default function QuoteForm({ defaultProjectType = '' }) {
  const { formOptions } = useContent();
  const [values, setValues] = useState({
    ...initialValues,
    projectType: defaultProjectType,
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    if (errors[name]) setErrors((current) => ({ ...current, [name]: '' }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate(values, rules);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus({
        state: 'error',
        message: 'Please complete the highlighted fields to request your quotation.',
      });
      return;
    }

    setStatus({ state: 'loading', message: 'Submitting your request…' });

    try {
      await submitQuote(values);
      setStatus({
        state: 'success',
        message:
          'Thank you. Your quotation request has been received and our team will be in touch shortly.',
      });
      setValues({ ...initialValues, projectType: defaultProjectType });
    } catch {
      setStatus({
        state: 'error',
        message:
          'Sorry, we could not submit your request right now. Please try again or contact us by phone.',
      });
    }
  };

  const isLoading = status.state === 'loading';

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="card space-y-5 rounded-2xl p-6 shadow-card sm:p-8"
    >
      <div className="flex items-start gap-3 border-b border-navy-100 pb-5">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-orange-500/10 text-orange-600">
          <FileText className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <h2 className="text-lg font-bold text-navy-800">Free Project Quotation</h2>
          <p className="mt-1 text-sm text-muted">
            Share your project details and we will prepare a no-obligation quotation.
          </p>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField
          id="customerName"
          label="Customer Name"
          required
          placeholder="e.g. Jordan Bennett"
          value={values.customerName}
          onChange={handleChange}
          error={errors.customerName}
          autoComplete="name"
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
          id="projectType"
          label="Project Type"
          as="select"
          required
          value={values.projectType}
          onChange={handleChange}
          error={errors.projectType}
          options={[
            { value: '', label: 'Select project type' },
            ...formOptions.quoteProjectTypes.map((type) => ({ value: type, label: type })),
          ]}
        />
        <FormField
          id="area"
          label="Plot / Construction Area"
          required
          placeholder="e.g. 2,500 sq ft or 10 marla"
          value={values.area}
          onChange={handleChange}
          error={errors.area}
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
            ...formOptions.budgetRanges.map((range) => ({ value: range, label: range })),
          ]}
        />
        <FormField
          id="startDate"
          label="Preferred Start Date"
          type="date"
          required
          value={values.startDate}
          onChange={handleChange}
          error={errors.startDate}
        />
      </div>

      <FormField
        id="requirements"
        label="Additional Requirements"
        as="textarea"
        required
        placeholder="Describe any specific requirements, drawings available, or constraints…"
        value={values.requirements}
        onChange={handleChange}
        error={errors.requirements}
      />

      <div className="flex flex-col gap-4">
        <button type="submit" className="btn-primary w-full sm:w-auto" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Submitting…
            </>
          ) : (
            <>
              <FileText className="h-4 w-4" aria-hidden="true" />
              Request My Free Quotation
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