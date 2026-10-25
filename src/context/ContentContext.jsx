import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { getContent } from '../services/api';

const EMPTY = {
  site: null,
  images: {},
  heroSlides: [],
  formOptions: { contactServices: [], quoteProjectTypes: [], budgetRanges: [] },
  categories: ['All'],
  services: [],
  projects: [],
  team: [],
  testimonials: [],
};

const ContentContext = createContext(null);

export function ContentProvider({ children }) {
  const [content, setContent] = useState(EMPTY);
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState(null);

  const load = useCallback(async () => {
    setStatus('loading');
    setError(null);
    try {
      const data = await getContent();
      setContent({ ...EMPTY, ...data });
      setStatus('ready');
    } catch (err) {
      setError(err);
      setStatus('error');
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const value = useMemo(() => {
    const projects = content.projects || [];

    const getProjectBySlug = (slug) =>
      projects.find((project) => project.slug === slug) || null;

    const getRelatedProjects = (slug, limit = 3) => {
      const current = getProjectBySlug(slug);
      const others = projects.filter((project) => project.slug !== slug);
      if (!current) return others.slice(0, limit);
      const sameCategory = others.filter(
        (project) => project.category === current.category
      );
      const rest = others.filter((project) => project.category !== current.category);
      return [...sameCategory, ...rest].slice(0, limit);
    };

    return {
      ...content,
      status,
      error,
      reload: load,
      featuredProjects: projects.slice(0, 6),
      getProjectBySlug,
      getRelatedProjects,
    };
  }, [content, status, error, load]);

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
}

export function useContent() {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider.');
  }
  return context;
}

export default ContentContext;
