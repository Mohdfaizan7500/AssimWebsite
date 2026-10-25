import { Link } from 'react-router-dom';
import { ArrowUpRight, CalendarDays, MapPin } from 'lucide-react';
import SmartImage from './SmartImage';

export default function ProjectCard({ project }) {
  return (
    <article className="card group flex h-full flex-col overflow-hidden hover:-translate-y-1 hover:shadow-card-hover">
      <Link
        to={`/projects/${project.slug}`}
        className="relative block aspect-[4/3] overflow-hidden"
        aria-label={`View details for ${project.name}`}
      >
        <SmartImage
          src={project.cover}
          alt={`${project.name} — ${project.category} project in ${project.location}`}
          className="h-full w-full"
          imgClassName="transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-white">
          {project.category}
        </span>
        <span className="absolute right-4 top-4 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-white/95 text-navy-800 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-navy-800">
          <Link
            to={`/projects/${project.slug}`}
            className="transition-colors hover:text-orange-600"
          >
            {project.name}
          </Link>
        </h3>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-xs font-medium text-muted">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-orange-500" aria-hidden="true" />
            {project.location}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5 text-orange-500" aria-hidden="true" />
            Completed {project.year}
          </span>
        </div>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.short}</p>
        <Link
          to={`/projects/${project.slug}`}
          className="mt-5 inline-flex w-fit items-center gap-2 rounded-md border border-navy-200 px-4 py-2 text-sm font-bold text-navy-800 transition-colors hover:border-orange-500 hover:bg-orange-500 hover:text-white"
        >
          View Details
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}