import CurrentExperience from './CurrentExperience';
import ExperienceTimeline from './ExperienceTimeline';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative mx-auto max-w-6xl px-5 py-12 sm:px-8 md:py-16 lg:px-12"
    >
      <Reveal>
        <SectionHeading
          id="experience-heading"
          label="Experience"
          title="Current Role & Professional Journey"
          description="My current role at Meta Tager, followed by previous experience in software engineering and WordPress development."
        />
      </Reveal>

      <div className="mt-10 space-y-10">
        <CurrentExperience />
        <ExperienceTimeline />
      </div>
    </section>
  );
}
