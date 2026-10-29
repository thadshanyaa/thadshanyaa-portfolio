import { previousExperience } from '../data/portfolio';
import Reveal from './Reveal';

export default function ExperienceTimeline() {
  return (
    <div>
      <Reveal>
        <h3 id="previous-experience-heading" className="font-display text-2xl font-semibold text-fg">
          Previous Experience
        </h3>
      </Reveal>

      <ol
        aria-labelledby="previous-experience-heading"
        className="relative ml-3 mt-8 space-y-6 border-l border-white/10 sm:ml-4"
      >
        {previousExperience.map((item, index) => (
          <li key={item.id} className="relative pl-8 sm:pl-10">
            <span
              aria-hidden="true"
              className="absolute -left-[8px] top-7 h-3.5 w-3.5 rounded-full border-2 border-brand-electric bg-canvas shadow-[0_0_14px_rgba(59,130,246,0.55)]"
            />
            <Reveal delay={index * 0.08}>
              <div className="glass rounded-2xl p-5 transition duration-300 hover:border-brand-cyan/30 sm:p-6">
                <p className="text-sm font-medium text-brand-cyan">{item.period}</p>
                <h4 className="mt-2 font-display text-lg font-semibold text-fg sm:text-xl">{item.title}</h4>
                <p className="mt-1 text-fg-secondary">{item.company}</p>
                {item.description && (
                  <p className="mt-4 text-sm leading-relaxed text-fg-secondary sm:text-base">{item.description}</p>
                )}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  );
}
