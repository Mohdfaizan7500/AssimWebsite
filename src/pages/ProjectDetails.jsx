import { Link, useParams } from 'react-router-dom';
import {
  ArrowRight,
  Building2,
  CalendarDays,
  CheckCircle2,
  Hammer,
  MapPin,
  Maximize,
  Ruler,
  Users,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import Reveal from '../components/Reveal';
import Gallery from '../components/Gallery';
import ProjectCard from '../components/ProjectCard';
import CTABanner from '../components/CTABanner';
import NotFound from './NotFound';
import { useContent } from '../context/ContentContext.jsx';
import { useSEO } from '../hooks/useSEO';

export default function ProjectDetails() {
  const { slug } = useParams();
  const { getProjectBySlug, getRelatedProjects } = useContent();
  const project = getProjectBySlug(slug);

  useSEO({
    title: project
      ? `${project.name} | AMD Engineer Solution`
      : 'Project Not Found | AMD Engineer Solution',
    description: project?.short,
    image: project?.cover,
  });

  if (!project) {
    return <NotFound />;
  }

  const related = getRelatedProjects(slug, 3);

  const facts = [
    { icon: Building2, label: 'Category', value: project.category },
    { icon: MapPin, label: 'Location', value: project.location },
    { icon: CalendarDays, label: 'Completed', value: String(project.year) },
    { icon: Hammer, label: 'Project Type', value: project.type },
    { icon: Maximize, label: 'Area', value: project.area },
    { icon: Ruler, label: 'Duration', value: project.duration },
    { icon: Users, label: 'Client', value: project.client },
  ];

  return (
    <>
      <PageHero
        title={project.name}
        description={project.short}
        image={project.cover}
        alt={`${project.name} — ${project.category} project in ${project.location}`}
        breadcrumbs={[{ label: 'Our Projects', to: '/projects' }, { label: project.name }]}
      />

      <section className="bg-navy-800">
        <div className="container-x grid grid-cols-2 gap-px overflow-hidden sm:grid-cols-3 lg:grid-cols-7">
          {facts.map((fact) => (
            <div key={fact.label} className="px-4 py-6 text-center lg:px-3">
              <fact.icon className="mx-auto h-5 w-5 text-orange-400" aria-hidden="true" />
              <p className="mt-3 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-white/55">
                {fact.label}
              </p>
              <p className="mt-1 text-sm font-semibold text-white">{fact.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-3 lg:gap-14">
          <div className="lg:col-span-2">
            <Reveal>
              <h2 className="text-2xl font-bold text-navy-800 sm:text-3xl">
                Project Overview
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                {project.overview}
              </p>
            </Reveal>

            <Reveal className="mt-10">
              <h2 className="text-2xl font-bold text-navy-800 sm:text-3xl">Scope of Work</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {project.scopeOfWork.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-ink">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-orange-500"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="mt-10">
              <h2 className="text-2xl font-bold text-navy-800 sm:text-3xl">
                Construction Details
              </h2>
              <ul className="mt-5 space-y-3">
                {project.constructionDetails.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-lg border border-navy-100 bg-surface px-4 py-3 text-sm text-ink"
                  >
                    <Building2
                      className="mt-0.5 h-4 w-4 shrink-0 text-orange-500"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <aside className="card sticky top-24 p-6">
              <h2 className="text-lg font-bold text-navy-800">Interested in similar work?</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Our engineers can review your site and requirements, then prepare a tailored
                proposal for your project.
              </p>
              <Link to="/contact" className="btn-primary mt-5 w-full">
                Discuss a Similar Project
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link to="/quote" className="btn-ghost mt-3 w-full">
                Request a Free Quote
              </Link>

              <div className="mt-6 border-t border-navy-100 pt-5">
                <h3 className="text-sm font-bold uppercase tracking-wide text-navy-800">
                  Key Highlights
                </h3>
                <ul className="mt-3 space-y-2.5">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2.5 text-sm text-ink">
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-orange-500"
                        aria-hidden="true"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-x">
          <Reveal>
            <SectionTitle
              align="left"
              eyebrow="Project Gallery"
              title="Images from this project"
              description="Click any image to view it in the accessible enlarged viewer."
            />
          </Reveal>
          <Reveal delay={80} className="mt-10">
            <Gallery images={project.gallery} title={project.name} />
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <Reveal>
            <SectionTitle
              eyebrow="Engineering In Practice"
              title="Project Challenges & Solutions"
              description="How our team addressed the key technical challenges on this project."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {project.challenges.map((item, index) => (
              <Reveal key={item.challenge} delay={index * 80}>
                <article className="card h-full overflow-hidden">
                  <div className="border-l-4 border-orange-500 bg-surface px-6 py-5">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
                      Challenge {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-2 text-base font-bold text-navy-800">
                      {item.challenge}
                    </h3>
                  </div>
                  <div className="px-6 py-5">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-navy-500">
                      Our Solution
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.solution}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-x">
          <Reveal>
            <SectionTitle
              eyebrow="More Work"
              title="Related projects"
              description="Explore other projects from our portfolio."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item, index) => (
              <Reveal key={item.slug} delay={index * 80}>
                <ProjectCard project={item} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/projects" className="btn-navy">
              View All Projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start a Project Like This?"
        description="Speak with AMD Engineer Solution about your site, scope and budget — we will guide you from concept to construction."
        buttonLabel="Request a Free Quote"
      />
    </>
  );
}