import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { INITIAL_PROJECT_COUNT, contentWritingLinks, projects, qaLinks } from '../data/projects';
import { displayUrl } from '../lib/url';
import ProjectItem from './ProjectItem';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Projects() {
  const [expanded, setExpanded] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const moreRef = useRef<HTMLDivElement>(null);

  const featured = projects.find((project) => project.featured);
  const rest = projects.filter((project) => project !== featured);
  const visible = rest.slice(0, INITIAL_PROJECT_COUNT - 1);
  const hidden = rest.slice(INITIAL_PROJECT_COUNT - 1);

  // When the list opens, move focus to the newly revealed block without jumping the page.
  useEffect(() => {
    if (expanded) {
      moreRef.current?.focus({ preventScroll: true });
    }
  }, [expanded]);

  const handleToggle = () => {
    if (expanded) {
      setExpanded(false);
      toggleRef.current?.focus({ preventScroll: true });

      // The button moves up as the hidden list collapses; bring it back into view.
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.setTimeout(() => {
        toggleRef.current?.scrollIntoView({
          block: 'center',
          behavior: prefersReduced ? 'auto' : 'smooth',
        });
      }, 350);
    } else {
      setExpanded(true);
    }
  };

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative mx-auto max-w-6xl px-5 py-12 sm:px-8 md:py-16 lg:px-12"
    >
      <Reveal>
        <SectionHeading
          id="projects-heading"
          label="Selected Work"
          title="Projects Built With Purpose"
          description="Software projects and live websites built for a range of businesses and organisations."
        />
      </Reveal>

      {featured && (
        <Reveal className="mt-10">
          <ProjectItem project={featured} large />
        </Reveal>
      )}

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {visible.map((project, index) => (
          <Reveal key={project.id} delay={(index % 2) * 0.08} className="h-full">
            <ProjectItem project={project} />
          </Reveal>
        ))}
      </div>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="more-projects"
            id="more-projects"
            ref={moreRef}
            tabIndex={-1}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="overflow-hidden focus:outline-none"
          >
            <div className="grid gap-5 pt-6 md:grid-cols-2">
              {hidden.map((project) => (
                <ProjectItem key={project.id} project={project} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-8 flex justify-center">
        <button
          ref={toggleRef}
          type="button"
          onClick={handleToggle}
          aria-expanded={expanded}
          aria-controls="more-projects"
          className="btn-ghost"
        >
          {expanded ? 'Show Less' : 'View All Projects'}
          {!expanded && <span className="sr-only">({hidden.length} more projects)</span>}
          <ChevronDown
            size={16}
            aria-hidden="true"
            className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      <Reveal className="mt-16">
        <div className="mb-8 max-w-2xl">
          <p className="section-label">
            <span aria-hidden="true" className="h-px w-8 bg-brand-cyan" />
            Content &amp; Quality Assurance
          </p>
          <h3 className="mt-4 font-display text-2xl font-semibold text-fg sm:text-3xl">
            Writing, Publishing & Website Testing
          </h3>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <LinkGroup
            title="Content Writing & Publishing"
            category="Content Writing, News & Blogs"
            links={contentWritingLinks}
          />
          <LinkGroup
            title="Website Quality Assurance & Testing"
            category="Website Testing & Quality Assurance"
            links={qaLinks}
          />
        </div>
      </Reveal>
    </section>
  );
}

interface LinkGroupProps {
  title: string;
  category: string;
  links: string[];
}

function LinkGroup({ title, category, links }: LinkGroupProps) {
  return (
    <article className="glass rounded-3xl p-6 sm:p-7">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-cyan">{category}</p>
      <h4 className="mt-3 font-display text-xl font-semibold text-fg">{title}</h4>

      <ul className="mt-5 space-y-2.5">
        {links.map((url) => (
          <li key={url}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-sm text-fg-secondary transition duration-200 hover:border-brand-cyan/40 hover:bg-white/[0.05] hover:text-fg"
            >
              <span className="min-w-0 truncate">{displayUrl(url)}</span>
              <ExternalLink
                size={14}
                aria-hidden="true"
                className="shrink-0 text-fg-muted transition-colors duration-200 group-hover:text-brand-cyan"
              />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}
