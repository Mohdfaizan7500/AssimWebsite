import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import Reveal from '../components/Reveal';
import SmartImage from '../components/SmartImage';
import Icon from '../components/Icon';
import CTABanner from '../components/CTABanner';
import { services } from '../data/services';
import { site } from '../data/site';
import { useSEO } from '../hooks/useSEO';
import IMAGES from '../data/images';

export default function Services() {
  useSEO(site.seo.services);
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const target = document.getElementById(hash.slice(1));
    if (target) {
      requestAnimationFrame(() =>
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      );
    }
  }, [hash]);

  return (
    <>
      <PageHero
        title="Civil Engineering & Construction Services"
        description="A complete range of engineering, design, estimation and construction services delivered by one accountable team."
        image={IMAGES.servicesHero}
        alt="Construction site with engineers and structural work"
        breadcrumbs={[{ label: 'Services' }]}
      />

      <section className="section bg-white">
        <div className="container-x">
          <Reveal>
            <SectionTitle
              eyebrow="What We Offer"
              title="Solutions for every stage of construction"
              description="Whether you are planning a new building, upgrading an existing one or need expert engineering advice, we have a service designed for your needs."
            />
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <a
                key={service.slug}
                href={`#${service.slug}`}
                className="group flex items-center gap-3 rounded-lg border border-navy-100 bg-surface px-4 py-3 text-sm font-semibold text-navy-800 transition-colors hover:border-orange-300 hover:bg-white"
              >
                <Icon name={service.icon} className="h-4 w-4 text-orange-500" />
                <span className="flex-1">{service.title}</span>
                <ArrowRight className="h-4 w-4 text-muted transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-surface">
        {services.map((service, index) => {
          const reversed = index % 2 === 1;
          return (
            <section
              key={service.slug}
              id={service.slug}
              className="scroll-mt-24 border-b border-navy-100 py-14 lg:py-16"
            >
              <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
                <Reveal className={reversed ? 'lg:order-2' : ''}>
                  <SmartImage
                    src={service.image}
                    alt={`${service.title} project by AMD Engineer Solution`}
                    className="aspect-[4/3] w-full rounded-2xl shadow-card"
                  />
                </Reveal>

                <Reveal delay={80} className={reversed ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-800 text-orange-400">
                      <Icon name={service.icon} className="h-6 w-6" />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
                      Service {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h2 className="mt-5 text-2xl font-bold text-navy-800 sm:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                    {service.description}
                  </p>

                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wide text-navy-800">
                        Key Benefits
                      </h3>
                      <ul className="mt-3 space-y-2.5">
                        {service.benefits.map((benefit) => (
                          <li
                            key={benefit}
                            className="flex items-start gap-2.5 text-sm text-ink"
                          >
                            <CheckCircle2
                              className="mt-0.5 h-4 w-4 shrink-0 text-orange-500"
                              aria-hidden="true"
                            />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wide text-navy-800">
                        Typical Applications
                      </h3>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {service.applications.map((application) => (
                          <li
                            key={application}
                            className="rounded-full border border-navy-200 bg-white px-3 py-1 text-xs font-medium text-navy-700"
                          >
                            {application}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link to="/quote" className="btn-primary mt-7">
                    Request a Quote
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Reveal>
              </div>
            </section>
          );
        })}
      </div>

      <CTABanner
        title="Not Sure Which Service You Need?"
        description="Describe your project and our engineers will recommend the right approach and prepare a free quotation."
        buttonLabel="Request a Free Quote"
      />
    </>
  );
}