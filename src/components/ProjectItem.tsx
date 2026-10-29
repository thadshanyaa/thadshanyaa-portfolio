import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '../data/projects';
import { displayUrl } from '../lib/url';

interface ProjectItemProps {
  project: Project;
  large?: boolean;
}

export default function ProjectItem({ project, large = false }: ProjectItemProps) {
  const headingId = `project-${project.id}`;

  return (
    <article
      aria-labelledby={headingId}
      className={`group glass flex h-full flex-col overflow-hidden rounded-3xl p-4 transition duration-300 hover:-translate-y-1 hover:border-brand-cyan/35 sm:p-5 ${
        large ? 'lg:flex-row lg:items-center lg:gap-12 lg:p-8' : ''
      }`}
    >
      <ProjectPreview project={project} className={large ? 'lg:w-1/2 lg:shrink-0' : ''} />

      <div className={`flex flex-1 flex-col gap-4 px-2 pb-2 pt-5 sm:px-3 ${large ? 'lg:py-0 lg:pr-4' : ''}`}>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-cyan">{project.category}</p>

        <h3
          id={headingId}
          className={`font-display font-semibold text-fg ${large ? 'text-3xl sm:text-4xl' : 'text-xl sm:text-2xl'}`}
        >
          {project.name}
        </h3>

        <p className={`leading-relaxed text-fg-secondary ${large ? 'text-base sm:text-lg' : 'text-sm sm:text-base'}`}>
          {project.description}
        </p>

        {project.technologies && project.technologies.length > 0 && (
          <ul aria-label="Technologies used" className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-brand-electric/25 bg-brand-primary/10 px-3 py-1 text-xs font-medium text-brand-electric"
              >
                {tech}
              </li>
            ))}
          </ul>
        )}

        {(project.liveUrl || project.repoUrl) && (
          <div className="mt-auto flex flex-wrap gap-3 pt-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost !px-4 !py-2 text-sm"
              >
                Visit website
                <ExternalLink size={14} aria-hidden="true" />
                <span className="sr-only">for {project.name} (opens in a new tab)</span>
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost !px-4 !py-2 text-sm"
              >
                <Github size={14} aria-hidden="true" />
                Repository
                <span className="sr-only">for {project.name} (opens in a new tab)</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

function ProjectPreview({ project, className = '' }: { project: Project; className?: string }) {
  const initials = project.name
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word.charAt(0))
    .join('')
    .toUpperCase();

  const host = project.liveUrl ? displayUrl(project.liveUrl) : project.category;

  return (
    <div className={`relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-elevated ${className}`}>
      {project.previewImage ? (
        <>
          <img
            src={project.previewImage}
            alt={project.previewImageAlt ?? `Screenshot of ${project.name}`}
            loading="lazy"
            decoding="async"
            width={1600}
            height={1000}
            className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
          />
          {project.previewIsConcept && (
            <span className="absolute right-3 top-3 rounded-full border border-white/15 bg-base/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-fg-secondary backdrop-blur-sm">
              Concept visual
            </span>
          )}
        </>
      ) : (
        <div
          role="img"
          aria-label={`Preview placeholder for ${project.name}`}
          className="flex h-full w-full flex-col bg-gradient-to-br from-elevated via-surface to-base"
        >
          <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-2.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="ml-3 truncate rounded-md bg-white/[0.05] px-3 py-0.5 text-[11px] text-fg-muted">
              {host}
            </span>
          </div>

          <div
            aria-hidden="true"
            className="relative flex flex-1 flex-col gap-3 p-5 transition duration-500 group-hover:scale-[1.02]"
          >
            <div className="h-6 w-1/3 rounded-md bg-gradient-to-r from-brand-primary/50 to-brand-cyan/40" />
            <div className="h-3 w-2/3 rounded bg-white/10" />
            <div className="h-3 w-1/2 rounded bg-white/10" />
            <div className="mt-auto grid grid-cols-3 gap-3">
              <div className="h-12 rounded-lg border border-white/10 bg-white/[0.03]" />
              <div className="h-12 rounded-lg border border-white/10 bg-white/[0.03]" />
              <div className="h-12 rounded-lg border border-white/10 bg-white/[0.03]" />
            </div>
            <span className="pointer-events-none absolute inset-0 flex items-center justify-center font-display text-6xl font-bold text-white/[0.05]">
              {initials}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
