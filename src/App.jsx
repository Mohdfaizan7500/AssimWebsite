import { Route, Routes, useLocation } from 'react-router-dom';
import { AlertCircle, Loader2 } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Quote from './pages/Quote';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';
import { useContent } from './context/ContentContext.jsx';

function LoadingScreen() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-surface">
      <Loader2 className="h-8 w-8 animate-spin text-orange-500" aria-hidden="true" />
      <p className="text-sm font-medium text-muted">Loading site content...</p>
    </div>
  );
}

function ErrorScreen({ message, onRetry }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-surface px-6 text-center">
      <AlertCircle className="h-9 w-9 text-orange-500" aria-hidden="true" />
      <h1 className="text-xl font-bold text-navy-800">We could not load the website</h1>
      <p className="max-w-md text-sm text-muted">
        {message || 'The backend API did not respond.'} Make sure the backend server is running
        and reachable, then try again.
      </p>
      <button type="button" onClick={onRetry} className="btn-primary mt-2">
        Try Again
      </button>
    </div>
  );
}

export default function App() {
  const { pathname } = useLocation();
  const { status, error, reload } = useContent();
  const isHome = pathname === '/';

  if (status === 'loading') return <LoadingScreen />;
  if (status === 'error') return <ErrorScreen message={error?.message} onRetry={reload} />;

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:rounded-md focus:bg-navy-800 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>

      <Navbar />
      <ScrollToTop />

      <main id="main-content" className={`flex-1 ${isHome ? '' : 'pt-16 lg:pt-[7.5rem]'}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
