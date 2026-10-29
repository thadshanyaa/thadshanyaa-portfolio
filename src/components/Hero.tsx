import { ArrowRight, ChevronDown, Mail, Megaphone, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { currentExperience } from '../data/portfolio';

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const enter = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.75, delay, ease: 'easeOut' as const },
  });

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[100svh] items-center px-5 pb-28 pt-32 sm:px-8 lg:px-12"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p {...enter(0)} className="section-label">
            Prompt Engineer · Social Media · Software Development
          </motion.p>

          <motion.h1
            {...enter(0.12)}
            id="hero-heading"
            className="mt-6 font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-fg sm:text-6xl xl:text-7xl"
          >
            Turning Ideas Into{' '}
            <span className="gradient-text">Intelligent Digital Experiences.</span>
          </motion.h1>

          <motion.p
            {...enter(0.24)}
            className="mt-7 max-w-xl text-base leading-relaxed text-fg-secondary sm:text-lg"
          >
            I&apos;m Thadshanyaa Arulkodeswaran, a technology professional working across prompt
            engineering, social media management, and web development. I combine creative thinking
            and technical skills to develop useful digital experiences and explore new possibilities
            with AI and technology.
          </motion.p>

          <motion.div {...enter(0.36)} className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              Explore My Work
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a href="#contact" className="btn-ghost">
              <Mail size={16} aria-hidden="true" />
              Let&apos;s Connect
            </a>
          </motion.div>

          <motion.div
            {...enter(0.5)}
            className="glass mt-12 inline-flex flex-wrap items-center gap-x-4 gap-y-2 rounded-full px-5 py-3 text-sm"
          >
            <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-cyan opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-cyan" />
            </span>
            <span className="font-medium text-fg">Currently Working at {currentExperience.company}</span>
            <span className="text-fg-muted">{currentExperience.period}</span>
          </motion.div>
        </div>

        <motion.div {...enter(0.3)} aria-hidden="true" className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="glass-strong relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <img
              src="/images/profile.jpeg"
              alt=""
              width={736}
              height={1306}
              className="absolute inset-0 h-full w-full object-cover object-[center_24%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base via-base/25 to-base/5" />
            <div className="grid-bg absolute inset-0 opacity-25" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="sr-only">Portrait of Thadshanyaa Arulkodeswaran</span>
            </div>
            <div className="glass-strong absolute inset-x-5 bottom-5 rounded-2xl p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">Current role</p>
              <p className="mt-2 font-display text-lg font-semibold text-fg">{currentExperience.title}</p>
              <p className="mt-1 text-sm text-fg-secondary">
                {currentExperience.company} · Since July 27, 2026
              </p>
            </div>
          </div>

          <motion.div
            animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="glass absolute -left-3 top-10 flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-medium text-fg sm:-left-8"
          >
            <Sparkles size={16} className="text-brand-cyan" />
            Prompt Engineering
          </motion.div>

          <motion.div
            animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="glass absolute -right-3 bottom-28 flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-medium text-fg sm:-right-8"
          >
            <Megaphone size={16} className="text-brand-cyan" />
            Social Media Management
          </motion.div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to the About section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-fg-muted transition-colors duration-200 hover:text-fg md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown size={18} aria-hidden="true" className="animate-bounce" />
      </a>
    </section>
  );
}
