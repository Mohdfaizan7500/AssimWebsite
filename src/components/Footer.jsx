import { Link } from 'react-router-dom';
import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import Logo from './Logo';
import SocialIcon from './SocialIcon';
import { useContent } from '../context/ContentContext.jsx';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Our Projects', to: '/projects' },
  { label: 'Our Team', to: '/team' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'Request a Quote', to: '/quote' },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  const { site, services } = useContent();
  const year = currentYear;

  return (
    <footer className="bg-navy-900 text-white/75">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:py-16">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo light />
          <p className="mt-5 text-sm leading-relaxed">{site.intro}</p>
          <div className="mt-5 flex items-center gap-3">
            {site.socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${site.name} on ${social.name}`}
                className="flex h-9 w-9 items-center justify-center rounded-md bg-white/5 text-white/80 transition-colors hover:bg-orange-500 hover:text-white"
              >
                <SocialIcon name={social.icon} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Quick links">
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
            Quick Links
          </h2>
          <ul className="mt-5 space-y-2.5 text-sm">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="inline-flex items-center gap-2 transition-colors hover:text-orange-400"
                >
                  <span className="h-1 w-1 rounded-full bg-orange-500" aria-hidden="true" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Our services">
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
            Our Services
          </h2>
          <ul className="mt-5 space-y-2.5 text-sm">
            {services.slice(0, 6).map((service) => (
              <li key={service.slug}>
                <Link
                  to={`/services#${service.slug}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-orange-400"
                >
                  <span className="h-1 w-1 rounded-full bg-orange-500" aria-hidden="true" />
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
            Contact
          </h2>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" aria-hidden="true" />
              <span>
                {site.contact.addressLine1}
                <br />
                {site.contact.addressLine2}
                <br />
                {site.contact.city}, {site.contact.region} {site.contact.postalCode}
                <br />
                {site.contact.country}
              </span>
            </li>
            <li>
              <a
                href={site.contact.phoneHref}
                className="flex gap-3 transition-colors hover:text-orange-400"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" aria-hidden="true" />
                {site.contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={site.contact.emailHref}
                className="flex gap-3 break-all transition-colors hover:text-orange-400"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" aria-hidden="true" />
                {site.contact.email}
              </a>
            </li>
            <li>
              <a
                href={site.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 transition-colors hover:text-orange-400"
              >
                <MessageCircle
                  className="mt-0.5 h-4 w-4 shrink-0 text-orange-500"
                  aria-hidden="true"
                />
                WhatsApp: {site.contact.whatsappDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" aria-hidden="true" />
              <span>
                {site.contact.hours.map((slot) => (
                  <span key={slot.day} className="block">
                    {slot.day}: {slot.time}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-5 text-xs sm:flex-row">
          <p>
            &copy; {year} {site.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link to="/privacy" className="transition-colors hover:text-orange-400">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-orange-400">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
        <div className="container-x pb-6 text-center text-[0.7rem] leading-relaxed text-white/40">
          Demo website. Contact details, statistics and projects are sample content for
          demonstration and should be replaced with verified company information.
        </div>
      </div>
    </footer>
  );
}
