import { useMemo, useState } from 'react';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import Reveal from '../components/Reveal';
import CTABanner from '../components/CTABanner';
import { categories, projects } from '../data/projects';
import { site } from '../data/site';
import { useSEO } from '../hooks/useSEO';
import IMAGES from '../data/images';

export default function Projects() {
  useSEO(site.seo.projects);
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = useMemo(
    () =>
      activeCategory === 'All'
        ? projects
        : projects.filter((project) => project.category === activeCategory),
    [activeCategory]
  );

  return (
    <>
      <PageHero
        title="Our Projects"
        description="Explore a selection of completed residential, commercial, industrial, infrastructure and renovation projects."
        image={IMAGES.projectsHero}
        alt="Completed commercial building project"
        breadcrumbs={[{ label: 'Our Projects' }]}
      />

      <section className="section bg-white">
        <div className="container-x">
          <Reveal>
            <SectionTitle
              eyebrow="Portfolio"
              title="Construction work we are proud of"
              description="Filter the gallery by project category to see the type of work most relevant to you."
            />
          </Reveal>

          <div
            className="mt-10 flex flex-wrap justify-center gap-2.5"
            role="group"
            aria-label="Filter projects by category"
          >
            {categories.map((category) => {
              const isActive = category === activeCategory;
              const count =
                category === 'All'
                  ? projects.length
                  : projects.filter((project) => project.category === category).length;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={isActive}
                  className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? 'border-orange-500 bg-orange-500 text-white shadow-soft'
                      : 'border-navy-200 bg-white text-navy-700 hover:border-orange-400 hover:text-orange-600'
                  }`}
                >
                  {category}
                  <span className={`ml-2 text-xs ${isActive ? 'text-white/80' : 'text-muted'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <p className="mt-6 text-center text-sm text-muted" aria-live="polite">
            Showing {filtered.length} {filtered.length === 1 ? 'project' : 'projects'}
            {activeCategory !== 'All' ? ` in ${activeCategory}` : ''}.
          </p>

          {filtered.length > 0 ? (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((project, index) => (
                <Reveal key={project.slug} delay={(index % 3) * 70}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          ) : (
            <p className="mt-12 text-center text-muted">
              No projects found in this category yet.
            </p>
          )}
        </div>
      </section>

      <CTABanner
        title="Have a Project Like These in Mind?"
        description="Share your requirements and our team will help you plan the next step toward construction."
        buttonLabel="Discuss Your Project"
        buttonTo="/contact"
      />
    </>
  );
}