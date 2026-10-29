import { GraduationCap, MapPin } from 'lucide-react';
import { PENDING_QUALIFICATION, education } from '../data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="relative mx-auto max-w-6xl px-5 py-12 sm:px-8 md:py-16 lg:px-12"
    >
      <Reveal>
        <SectionHeading id="education-heading" label="Education" title="Education & Learning" />
      </Reveal>

      <ol className="relative ml-3 mt-10 space-y-6 border-l border-white/10 sm:ml-4">
        {education.map((item, index) => {
          const pending = item.qualification === PENDING_QUALIFICATION;

          return (
            <li key={item.id} className="relative pl-8 sm:pl-10">
              <span
                aria-hidden="true"
                className="absolute -left-[8px] top-7 h-3.5 w-3.5 rounded-full border-2 border-brand-electric bg-canvas shadow-[0_0_14px_rgba(59,130,246,0.55)]"
              />
              <Reveal delay={index * 0.08}>
                <div className="glass group rounded-2xl p-6 transition duration-300 hover:border-brand-cyan/30 sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-primary/15 text-brand-cyan">
                        <GraduationCap size={20} aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-fg sm:text-xl">{item.institution}</h3>
                        <p className={`mt-1.5 ${pending ? 'italic text-fg-muted' : 'text-fg-secondary'}`}>
                          {item.qualification}
                        </p>
                      </div>
                    </div>
                    {item.period && (
                      <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-fg-secondary">
                        {item.period}
                      </span>
                    )}
                  </div>

                  <p className="mt-4 flex items-center gap-2 text-sm text-fg-muted">
                    <MapPin size={14} aria-hidden="true" />
                    {item.location}
                  </p>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
