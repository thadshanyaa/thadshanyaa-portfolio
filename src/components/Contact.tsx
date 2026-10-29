import { Github, Globe, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { profile } from '../data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

interface ContactItem {
  label: string;
  value: string;
  icon: LucideIcon;
  href?: string;
  external?: boolean;
  pending?: boolean;
}

const contactItems: ContactItem[] = [
  { label: 'Email', value: profile.email, icon: Mail, href: `mailto:${profile.email}` },
  { label: 'Phone', value: profile.phoneDisplay, icon: Phone, href: `tel:${profile.phoneHref}` },
  { label: 'Professional Location', value: profile.location, icon: MapPin },
  {
    label: 'Portfolio',
    value: 'Visit portfolio',
    icon: Globe,
    href: profile.portfolioUrl,
    external: true,
  },
  profile.githubUrl
    ? {
        label: 'GitHub',
        value: '@thadshanyaa',
        icon: Github,
        href: profile.githubUrl,
        external: true,
      }
    : { label: 'GitHub', value: 'Profile link to be added', icon: Github, pending: true },
  profile.linkedinUrl
    ? {
        label: 'LinkedIn',
        value: 'View profile',
        icon: Linkedin,
        href: profile.linkedinUrl,
        external: true,
      }
    : { label: 'LinkedIn', value: 'Profile link to be added', icon: Linkedin, pending: true },
];

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative mx-auto max-w-6xl px-5 py-12 sm:px-8 md:py-16 lg:px-12"
    >
      <Reveal className="glass-strong relative overflow-hidden rounded-[2rem] p-6 sm:p-10 lg:p-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand-primary/25 blur-[90px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-brand-cyan/15 blur-[90px]"
        />

        <div className="relative grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-start">
          <div>
            <SectionHeading
              id="contact-heading"
              label="Contact"
              title="Let's Build Something Meaningful"
              description="Have an idea, a project, or an opportunity to discuss? I'd be happy to connect and explore how we can create something useful together."
            />
            <a href={`mailto:${profile.email}`} className="btn-primary mt-8">
              Send an Email
              <Mail size={16} aria-hidden="true" />
            </a>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {contactItems.map((item) => (
              <ContactCard key={item.label} item={item} />
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}

function ContactCard({ item }: { item: ContactItem }) {
  const Icon = item.icon;

  const content = (
    <>
      <span className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-primary/15 text-brand-cyan">
          <Icon size={18} aria-hidden="true" />
        </span>
        <span className="block min-w-0 text-xs font-semibold uppercase tracking-[0.18em] text-fg-muted">
          {item.label}
        </span>
      </span>
      <span className={`block break-words text-sm font-medium leading-snug ${item.pending ? 'italic text-fg-muted' : 'text-fg'}`}>
        {item.value}
      </span>
    </>
  );

  const baseClasses = 'glass flex min-h-[104px] flex-col gap-3 rounded-2xl p-4 transition duration-300';

  if (!item.href) {
    return <li className={baseClasses}>{content}</li>;
  }

  return (
    <li>
      <a
        href={item.href}
        target={item.external ? '_blank' : undefined}
        rel={item.external ? 'noopener noreferrer' : undefined}
        className={`${baseClasses} hover:-translate-y-0.5 hover:border-brand-cyan/40 hover:bg-white/[0.03]`}
      >
        {content}
        {item.external && <span className="sr-only">(opens in a new tab)</span>}
      </a>
    </li>
  );
}
