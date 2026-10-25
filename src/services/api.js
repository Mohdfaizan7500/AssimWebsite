const API_BASE = import.meta.env.VITE_API_URL || '';

const latency = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function postForm(endpoint, payload) {
  if (!API_BASE) {
    await latency(1100);
    return { ok: true, simulated: true, data: payload };
  }

  const response = await fetch(`${API_BASE}${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json();
}

export const submitContact = (payload) => postForm('/contact', payload);

export const submitQuote = (payload) => postForm('/quote', payload);

export const isSimulated = () => !API_BASE;