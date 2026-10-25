const API_BASE = (import.meta.env.VITE_API_URL || '/api').replace(/\/+$/, '');

async function request(path, options = {}) {
  let response;
  try {
    response = await fetch(`${API_BASE}${path}`, {
      headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
      ...options,
    });
  } catch {
    throw new Error('Unable to reach the server. Please check your connection.');
  }

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    const error = new Error(data?.error || `Request failed with status ${response.status}`);
    error.status = response.status;
    error.details = data?.details;
    throw error;
  }

  return data;
}

/** Full bootstrap payload used to hydrate the app in a single request. */
export const getContent = () => request('/content');

export const getSite = () => request('/site');
export const getImages = () => request('/images');
export const getHeroSlides = () => request('/hero-slides');
export const getFormOptions = () => request('/form-options');
export const getCategories = () => request('/categories');

export const getServices = () => request('/services');
export const getService = (slug) => request(`/services/${encodeURIComponent(slug)}`);

export const getProjects = (params = {}) => {
  const query = new URLSearchParams(
    Object.entries(params).filter(([, value]) => value !== undefined && value !== null)
  ).toString();
  return request(`/projects${query ? `?${query}` : ''}`);
};
export const getProject = (slug) => request(`/projects/${encodeURIComponent(slug)}`);
export const getRelatedProjects = (slug, limit = 3) =>
  request(`/projects/${encodeURIComponent(slug)}/related?limit=${limit}`);

export const getTeam = () => request('/team');
export const getTeamMember = (slug) => request(`/team/${encodeURIComponent(slug)}`);

export const getTestimonials = () => request('/testimonials');

export const submitContact = (payload) =>
  request('/contact', { method: 'POST', body: JSON.stringify(payload) });

export const submitQuote = (payload) =>
  request('/quote', { method: 'POST', body: JSON.stringify(payload) });

export { API_BASE };
