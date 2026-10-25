import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Phone,
} from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import StatsSection from '../components/StatsSection';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import TestimonialSlider from '../components/TestimonialSlider';
import CTABanner from '../components/CTABanner';
import Reveal from '../components/Reveal';
import SmartImage from '../components/SmartImage';
import Icon from '../components/Icon';
import { useContent } from '../context/ContentContext.jsx';
import { useSEO } from '../hooks/useSEO';

export default function Home() {
  const { site, services, featuredProjects, images } = useContent();
  useSEO(site.seo.home);

  return (
    <>
      <HeroSlider />
      <StatsSection />

      <section className="section bg-white">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative">
            <SmartImage
              src={images.aboutMain}
              alt="Civil engineer reviewing project drawings on a construction site"
              className="aspect-[4/3] w-full rounded-2xl shadow-card"
            />
            <div className="absolute -bottom-6 -right-4 hidden w-56 rounded-xl bg-orange-500 p-5 text-white shadow-card-hover sm:block lg:-right-8">
              <p className="font-display text-4xl font-extrabold">10+</p>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-white/85">
                Years of Engineering Experience
              </p>
            </div>
            <SmartImage
              src={images.aboutSecondary}
              alt="Construction workers coordinating activities on site"
              className="absolute -left-4 -top-4 hidden h-32 w-32 rounded-xl border-4 border-white shadow-card lg:block"
            />
          </Reveal>

          <Reveal delay={100}>
            <SectionTitle
              align="left"
              eyebrow="About AMD Engineer Solution"
              title="A civil engineering partner you can rely on."
              description="AMD Engineer Solution combines technical engineering expertise with disciplined construction management. From the first sketch to final handover, we build structures that are safe, durable and true to your brief."
            />
            <ul className="mt-7 space-y-3">
              {site.homeHighlights.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-ink sm:text-base">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-orange-500"
                    aria-hidden="true"
                  />
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/about" className="btn-navy">
                Learn More About Us
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a href={site.contact.phoneHref} className="btn-ghost">
                <Phone className="h-4 w-4" aria-hidden="true" />
                {site.contact.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-x">
          <Reveal>
            <SectionTitle
              eyebrow="Our Services"
              title="Complete civil engineering & construction services"
              description="From concept and structural design to construction, estimation and handover, we cover every stage of your project under one accountable team."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={(index % 3) * 80}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/services" className="btn-navy">
              View All Services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <Reveal>
            <SectionTitle
              eyebrow="Featured Projects"
              title="Selected work from our portfolio"
              description="A snapshot of the residential, commercial, industrial and infrastructure projects our team has delivered."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <Reveal key={project.slug} delay={(index % 3) * 80}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/projects" className="btn-primary">
              View All Projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-navy-800">
        <div className="container-x">
          <Reveal>
            <SectionTitle
              light
              eyebrow="Why Choose Us"
              title="Engineering strengths that protect your project"
              description="Our clients choose AMD Engineer Solution for dependable engineering, transparent pricing and disciplined delivery."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {site.whyChooseUs.map((item, index) => (
              <Reveal key={item.title} delay={(index % 3) * 80}>
                <div className="flex h-full flex-col rounded-xl border border-white/10 bg-white/[0.04] p-6 transition-colors duration-300 hover:border-orange-500/50 hover:bg-white/[0.07]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500 text-white">
                    <Icon name={item.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <Reveal>
            <SectionTitle
              eyebrow="Our Work Process"
              title="A clear path from idea to handover"
              description="Every project follows a disciplined four-step process that keeps quality high and surprises low."
            />
          </Reveal>
          <ol className="mt-14 grid gap-0 lg:grid-cols-4">
            {site.process.map((step, index) => (
              <Reveal as="li" key={step.step} delay={index * 90} className="relative">
                <div className="relative flex gap-5 lg:block">
                  <div className="flex flex-col items-center lg:items-start">
                    <span className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-orange-500 bg-white text-orange-500">
                      <Icon name={step.icon} className="h-7 w-7" />
                    </span>
                    {index < site.process.length - 1 && (
                      <span
                        className="absolute left-8 top-0 h-full w-px -translate-x-1/2 bg-navy-100 lg:left-8 lg:top-8 lg:h-px lg:w-full lg:translate-x-0"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <div className="pb-10 lg:mt-6 lg:pr-6 lg:pb-0">
                    <span className="text-xs font-bold tracking-[0.2em] text-orange-500">
                      STEP {step.step}
                    </span>
                    <h3 className="mt-2 text-lg font-bold text-navy-800">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-x">
          <Reveal>
            <SectionTitle
              eyebrow="Client Testimonials"
              title="What our clients say"
              description="Feedback from the homeowners, developers and businesses we have worked with."
            />
          </Reveal>
          <div className="mt-12">
            <TestimonialSlider />
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-muted">
            Testimonials are demonstration content for this sample website and should be
            replaced with verified client reviews.
          </p>
        </div>
      </section>

      <CTABanner />

      <section className="bg-white py-12">
        <div className="container-x flex flex-col items-center gap-4 text-center">
          <BadgeCheck className="h-8 w-8 text-orange-500" aria-hidden="true" />
          <p className="max-w-3xl text-sm text-muted">
            AMD Engineer Solution is a demonstration company website. All projects,
            statistics, testimonials and contact details are sample content intended to be
            replaced with verified company information.
          </p>
        </div>
      </section>
    </>
  );
}