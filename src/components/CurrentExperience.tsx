import { currentExperience } from '../data/portfolio';
import Reveal from './Reveal';

export default function CurrentExperience() {
  const role = currentExperience;

  return (
    <Reveal>
      <article
        aria-labelledby="current-role-heading"
        className="glass relative overflow-hidden rounded-3xl p-6 sm:p-10"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-primary/25 blur-[90px]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-y-8 left-0 w-1 rounded-full bg-gradient-to-b from-brand-cyan via-brand-electric to-brand-primary shadow-[0_0_18px_rgba(34,211,238,0.6)]"
        />

        <div className="relative flex flex-col gap-6 pl-5 sm:flex-row sm:items-start sm:justify-between sm:pl-7">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" aria-hidden="true" />
              Current Role
            </span>
            <h3
              id="current-role-heading"
              className="mt-5 font-display text-2xl font-semibold text-fg sm:text-3xl"
            >
              {role.title}
            </h3>
            <p className="mt-2 text-lg font-medium text-brand-electric">{role.company}</p>
          </div>

          <p className="shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-fg-secondary">
            {role.period}
          </p>
        </div>

        {role.description && (
          <p className="relative mt-6 max-w-3xl pl-5 text-base leading-relaxed text-fg-secondary sm:pl-7 sm:text-lg">
            {role.description}
          </p>
        )}
      </article>
    </Reveal>
  );
}
