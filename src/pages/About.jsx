import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Target, Eye, ShieldCheck, HardHat } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import Reveal from '../components/Reveal';
import SmartImage from '../components/SmartImage';
import Icon from '../components/Icon';
import CTABanner from '../components/CTABanner';
import { site } from '../data/site';
import { useSEO } from '../hooks/useSEO';
import IMAGES from '../data/images';

const safetyPractices = [
  'Documented method statements and risk assessments before work starts',
  'Mandatory personal protective equipment on all active sites',
  'Regular toolbox talks and safety inductions for every worker',
  'Routine site inspections and incident reporting procedures',
  'Material testing and quality verification at key construction stages',
];

const qualityPractices = [
  'Designs checked against the governing structural codes',
  'Setting-out and dimensional checks before concrete pours',
  'Concrete cube testing and compaction testing records',
  'Snag lists and inspection sign-off before handover',
];

export default function About() {
  useSEO(site.seo.about);

  return (
    <>
      <PageHero
        title="About AMD Engineer Solution"
        description="A civil engineering and construction firm built on technical expertise, transparent communication and dependable delivery."
        image={IMAGES.aboutMain}
        alt="Engineers collaborating on a construction project"
        breadcrumbs={[{ label: 'About Us' }]}
      />

      <section className="section bg-white">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionTitle
              align="left"
              eyebrow="Who We Are"
              title="Engineering structures that stand the test of time."
              description="AMD Engineer Solution began as a small civil engineering consultancy and has grown into a full-service construction partner. Today our team plans, designs, estimates and builds residential, commercial and infrastructure projects for clients who value quality and clarity."
            />
            <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">
              We believe good engineering is invisible in the best way: structures that
              perform, budgets that hold and schedules that are met. Our approach pairs
              rigorous technical work with straightforward communication, so clients always
              know where their project stands.
            </p>
            <Link to="/contact" className="btn-navy mt-8">
              Contact Our Team
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
          <Reveal delay={100} className="grid grid-cols-2 gap-4">
            <SmartImage
              src={IMAGES.aboutSecondary}
              alt="Site engineers discussing construction progress"
              className="aspect-[3/4] w-full rounded-2xl shadow-card"
            />
            <SmartImage
              src={IMAGES.ctaBanner}
              alt="Structural work underway on a construction site"
              className="mt-8 aspect-[3/4] w-full rounded-2xl shadow-card"
            />
          </Reveal>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-x grid gap-6 md:grid-cols-2">
          <Reveal>
            <article className="card h-full p-7 hover:shadow-card-hover">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500 text-white">
                <Target className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-5 text-xl font-bold text-navy-800">Our Mission</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                {site.mission}
              </p>
            </article>
          </Reveal>
          <Reveal delay={100}>
            <article className="card h-full p-7 hover:shadow-card-hover">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-800 text-orange-400">
                <Eye className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-5 text-xl font-bold text-navy-800">Our Vision</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                {site.vision}
              </p>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <Reveal>
            <SectionTitle
              eyebrow="Core Values"
              title="The principles behind every project"
              description="These values guide how we design, build and communicate on every job."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {site.values.map((value, index) => (
              <Reveal key={value.title} delay={(index % 3) * 80}>
                <div className="card h-full p-6 hover:-translate-y-1 hover:shadow-card-hover">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-50 text-orange-600">
                    <Icon name={value.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-navy-800">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-navy-800">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionTitle
              light
              align="left"
              eyebrow="Engineering Capabilities"
              title="Technical depth across the full project lifecycle"
              description="Our in-house team covers design, analysis, estimating and site management, so your project stays coordinated from start to finish."
            />
          </Reveal>
          <Reveal delay={100}>
            <ul className="grid gap-3.5 sm:grid-cols-1">
              {site.capabilities.map((capability) => (
                <li key={capability} className="flex items-start gap-3 text-sm text-white/80">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-orange-400"
                    aria-hidden="true"
                  />
                  {capability}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="card h-full p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500 text-white">
                <ShieldCheck className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-5 text-xl font-bold text-navy-800">
                Quality Assurance &amp; Safety
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Quality and safety are planned into our work, not inspected in afterwards. We
                follow documented procedures at every stage to protect both the structure and
                the people building it.
              </p>
              <ul className="mt-6 space-y-3">
                {safetyPractices.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-ink">
                    <HardHat
                      className="mt-0.5 h-4 w-4 shrink-0 text-orange-500"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card h-full p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-800 text-orange-400">
                <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-5 text-xl font-bold text-navy-800">
                Documented Construction Quality
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                We keep a verifiable quality record for each project, giving clients confidence
                that the finished structure meets the agreed specification.
              </p>
              <ul className="mt-6 space-y-3">
                {qualityPractices.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-ink">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-orange-500"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <SmartImage
                src={IMAGES.heroTwo}
                alt="Engineers reviewing drawings on an active construction site"
                className="mt-6 aspect-video w-full rounded-lg"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-x">
          <Reveal>
            <SectionTitle
              eyebrow="Company Achievements"
              title="Milestones on our journey"
              description="A few of the milestones that reflect our growth and track record."
            />
          </Reveal>
          <ol className="mt-12 space-y-6 border-l-2 border-navy-100 pl-6 sm:pl-8">
            {site.achievements.map((item, index) => (
              <Reveal as="li" key={item.title} delay={index * 70} className="relative">
                <span
                  className="absolute -left-[2.1rem] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-orange-500 bg-white sm:-left-[2.6rem]"
                  aria-hidden="true"
                />
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-orange-500">
                  {item.year}
                </span>
                <h3 className="mt-1.5 text-lg font-bold text-navy-800">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <Reveal>
            <SectionTitle
              eyebrow="Our Team"
              title="Engineers, architects and project managers"
              description="A dedicated team with the technical skills and site experience to deliver your project."
            />
          </Reveal>
          <Reveal delay={100} className="mt-10">
            <SmartImage
              src={IMAGES.teamHero}
              alt="AMD Engineer Solution engineering team in a project meeting"
              className="aspect-[21/9] w-full rounded-2xl shadow-card"
            />
          </Reveal>
          <div className="mt-10 text-center">
            <Link to="/team" className="btn-navy">
              Meet Our Full Team
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        title="Partner With a Team That Builds With Confidence."
        description="Talk to our engineers about your project and get clear, practical guidance from the very first conversation."
        buttonLabel="Contact Our Team"
        buttonTo="/contact"
      />
    </>
  );
}