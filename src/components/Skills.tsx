import { BrainCircuit, Code2, Globe, LayoutGrid, Palette } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { skillGroups, type SkillIconKey } from '../data/skills';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const iconMap: Record<SkillIconKey, LucideIcon> = {
  ai: BrainCircuit,
  web: Globe,
  code: Code2,
  design: Palette,
  productivity: LayoutGrid,
};

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative mx-auto max-w-6xl px-5 py-12 sm:px-8 md:py-16 lg:px-12"
    >
      <Reveal>
        <SectionHeading
          id="skills-heading"
          label="Skills"
          title="Tools, Technologies & Creative Skills"
          description="The tools and technologies I use across prompt engineering, web and software development, design, and everyday collaboration."
        />
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {skillGroups.map((group, index) => {
          const Icon = iconMap[group.icon];
          const isLast = index === skillGroups.length - 1;

          return (
            <Reveal
              key={group.id}
              delay={index * 0.06}
              className={`h-full ${isLast ? 'md:col-span-2' : ''}`}
            >
              <article
                aria-labelledby={`skill-${group.id}`}
                className="glass h-full rounded-3xl p-6 transition duration-300 hover:border-brand-cyan/30 sm:p-7"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-primary/15 text-brand-cyan">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h3 id={`skill-${group.id}`} className="font-display text-lg font-semibold text-fg">
                    {group.title}
                  </h3>
                </div>

                <ul className="mt-6 flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-sm text-fg-secondary transition duration-200 hover:border-brand-cyan/50 hover:text-fg"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
