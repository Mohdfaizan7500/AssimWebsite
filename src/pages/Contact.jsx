import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import Reveal from '../components/Reveal';
import ContactForm from '../components/ContactForm';
import SocialIcon from '../components/SocialIcon';
import { site } from '../data/site';
import { useSEO } from '../hooks/useSEO';
import IMAGES from '../data/images';

export default function Contact() {
  useSEO(site.seo.contact);
  const { contact } = site;

  const details = [
    {
      icon: MapPin,
      label: 'Office Address',
      content: (
        <>
          {contact.addressLine1}
          <br />
          {contact.addressLine2}
          <br />
          {contact.city}, {contact.region} {contact.postalCode}
          <br />
          {contact.country}
        </>
      ),
    },
    {
      icon: Phone,
      label: 'Phone',
      content: (
        <a href={contact.phoneHref} className="transition-colors hover:text-orange-600">
          {contact.phoneDisplay}
        </a>
      ),
    },
    {
      icon: Mail,
      label: 'Email',
      content: (
        <a
          href={contact.emailHref}
          className="break-all transition-colors hover:text-orange-600"
        >
          {contact.email}
        </a>
      ),
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      content: (
        <a
          href={contact.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-orange-600"
        >
          {contact.whatsappDisplay}
        </a>
      ),
    },
  ];

  return (
    <>
      <PageHero
        title="Contact Us"
        description="Tell us about your project and our team will get back to you with clear, practical guidance."
        image={IMAGES.contactBanner}
        alt="Modern office interior of an engineering company"
        breadcrumbs={[{ label: 'Contact Us' }]}
      />

      <section className="section bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-5 lg:gap-14">
          <Reveal className="lg:col-span-3">
            <SectionTitle
              align="left"
              eyebrow="Get in Touch"
              title="Send us a message"
              description="Complete the form below and a member of our engineering team will respond shortly."
            />
            <div className="mt-8">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-2">
            <div className="card h-full p-6 sm:p-7">
              <h2 className="text-lg font-bold text-navy-800">Company Information</h2>
              <ul className="mt-6 space-y-5">
                {details.map((detail) => (
                  <li key={detail.label} className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-orange-600">
                      <detail.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted">
                        {detail.label}
                      </p>
                      <div className="mt-1 text-sm text-ink">{detail.content}</div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-7 border-t border-navy-100 pt-6">
                <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-navy-800">
                  <Clock className="h-4 w-4 text-orange-500" aria-hidden="true" />
                  Business Hours
                </h3>
                <ul className="mt-3 space-y-2 text-sm">
                  {contact.hours.map((slot) => (
                    <li key={slot.day} className="flex justify-between gap-4 text-muted">
                      <span>{slot.day}</span>
                      <span className="font-semibold text-ink">{slot.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 border-t border-navy-100 pt-6">
                <h3 className="text-sm font-bold uppercase tracking-wide text-navy-800">
                  Follow Us
                </h3>
                <div className="mt-3 flex items-center gap-3">
                  {site.socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${site.name} on ${social.name}`}
                      className="flex h-10 w-10 items-center justify-center rounded-md bg-surface text-navy-700 transition-colors hover:bg-orange-500 hover:text-white"
                    >
                      <SocialIcon name={social.icon} className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>

              <a
                href={contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-7 w-full"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="map-heading" className="bg-surface pb-16">
        <div className="container-x">
          <h2 id="map-heading" className="sr-only">
            Office location map
          </h2>
          <div className="overflow-hidden rounded-2xl border border-navy-100 shadow-soft">
            <iframe
              title={`Map showing the location of ${site.name}`}
              src={contact.mapEmbed}
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full border-0"
            />
          </div>
          <p className="mt-4 text-center text-xs text-muted">
            Map location is a placeholder. Replace the embedded address with the company&apos;s
            verified office location.
          </p>
        </div>
      </section>
    </>
  );
}