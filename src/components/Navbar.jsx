import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Mail, Menu, Phone, X } from 'lucide-react';
import Logo from './Logo';
import SocialIcon from './SocialIcon';
import { site } from '../data/site';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Our Projects', to: '/projects' },
  { label: 'Our Team', to: '/team' },
  { label: 'Contact Us', to: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const overlay = isHome && !scrolled && !open;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`hidden overflow-hidden border-b border-white/10 bg-navy-900 text-white/80 transition-all duration-300 lg:block ${
          scrolled ? 'lg:h-0 lg:border-transparent' : 'lg:h-10'
        }`}
      >
        <div className="container-x flex h-10 items-center justify-between text-xs">
          <div className="flex items-center gap-6">
            <a
              href={site.contact.phoneHref}
              className="flex items-center gap-2 transition-colors hover:text-orange-400"
            >
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              {site.contact.phoneDisplay}
            </a>
            <a
              href={site.contact.emailHref}
              className="flex items-center gap-2 transition-colors hover:text-orange-400"
            >
              <Mail className="h-3.5 w-3.5" aria-hidden="true" />
              {site.contact.email}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/50">Follow us</span>
            {site.socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="transition-colors hover:text-orange-400"
              >
                <SocialIcon name={social.icon} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <nav
        aria-label="Main navigation"
        className={`transition-all duration-300 ${
          overlay
            ? 'bg-transparent'
            : 'bg-white shadow-[0_6px_24px_-12px_rgba(20,43,69,0.28)]'
        }`}
      >
        <div className="container-x flex h-16 items-center justify-between gap-4 lg:h-20">
          <Logo light={overlay} onClick={() => setOpen(false)} />

          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `relative rounded-md px-3.5 py-2 text-sm font-semibold transition-colors ${
                      isActive
                        ? 'text-orange-500'
                        : overlay
                          ? 'text-white/90 hover:text-orange-400'
                          : 'text-navy-700 hover:text-orange-500'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      <span
                        className={`absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-orange-500 transition-transform duration-300 ${
                          isActive ? 'scale-x-100' : 'scale-x-0'
                        }`}
                        aria-hidden="true"
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Link to="/quote" className="btn-primary hidden lg:inline-flex">
              Get a Free Quote
            </Link>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className={`inline-flex h-11 w-11 items-center justify-center rounded-md border transition-colors lg:hidden ${
                overlay
                  ? 'border-white/40 text-white hover:bg-white/10'
                  : 'border-navy-200 text-navy-800 hover:bg-navy-50'
              }`}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-navy-100 bg-white transition-[max-height,opacity] duration-300 ease-out lg:hidden ${
          open ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-x flex max-h-[calc(80vh-4rem)] flex-col overflow-y-auto py-4">
          <ul className="flex flex-col divide-y divide-navy-50">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `flex items-center justify-between py-3.5 text-base font-semibold transition-colors ${
                      isActive ? 'text-orange-500' : 'text-navy-800'
                    }`
                  }
                >
                  {link.label}
                  <span aria-hidden="true" className="text-muted">
                    &rarr;
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-col gap-3">
            <Link to="/quote" className="btn-primary w-full">
              Get a Free Quote
            </Link>
            <a href={site.contact.phoneHref} className="btn-ghost w-full">
              <Phone className="h-4 w-4" aria-hidden="true" />
              {site.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
