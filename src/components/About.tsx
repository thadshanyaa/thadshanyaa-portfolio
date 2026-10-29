import { BrainCircuit, Code2, Megaphone } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { profile } from '../data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

interface FocusArea {
  icon: LucideIcon;
  title: string;
  description: string;
}

const focusAreas: FocusArea[] = [
  {
    icon: BrainCircuit,
    title: 'AI & Prompt Engineering',
    description: 'Designing clear, structured prompts and exploring AI-assisted creative workflows.',
  },
  {
    icon: Megaphone,
    title: 'Digital Content & Social Media',
    description: 'Creating digital content and managing social media communication.',
  },
  {
    icon: Code2,
    title: 'Web & Software Development',
    description: 'Building WordPress websites and software with web and object-oriented technologies.',
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative mx-auto max-w-6xl px-5 py-12 sm:px-8 md:py-16 lg:px-12"
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
        <Reveal>
          <SectionHeading
            id="about-heading"
            label="About Me"
            title="Curious Mind. Creative Thinking. Technical Skills."
          />
          <p className="mt-6 text-sm font-medium tracking-wide text-brand-electric">{profile.identity}</p>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-fg-secondary sm:text-lg">
            <p>
              I&apos;m a technology professional who works where creative thinking meets technical
              skill. I currently work as a Prompt Engineer and Social Media Manager at Meta Tager, and
              my background includes software engineering, WordPress development, and website content
              writing.
            </p>
            <p>
              I&apos;m especially interested in how well-structured prompts and AI-assisted workflows
              can make digital communication clearer and more useful. Whether I&apos;m building a
              website, writing content, or shaping a prompt, I aim for practical solutions that work
              well for real people.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="glass divide-y divide-white/[0.08] overflow-hidden rounded-3xl">
            {focusAreas.map((area) => {
              const Icon = area.icon;
              return (
                <li
                  key={area.title}
                  className="group flex items-start gap-5 p-6 transition-colors duration-300 hover:bg-white/[0.03] sm:p-7"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-primary/15 text-brand-cyan ring-1 ring-inset ring-brand-cyan/20 transition-transform duration-300 group-hover:scale-105">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-fg">{area.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-fg-secondary sm:text-base">
                      {area.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
