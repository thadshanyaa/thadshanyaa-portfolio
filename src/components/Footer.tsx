import { Github, Linkedin } from 'lucide-react';
import { navItems, profile } from '../data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-canvas/60 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-start md:justify-between lg:px-12">
        <div className="max-w-sm">
          <p className="font-display text-xl font-semibold text-fg">{profile.fullName}</p>
          <p className="mt-3 text-sm text-fg-secondary">{profile.tagline}</p>
          <p className="mt-2 text-sm text-fg-muted">{profile.identity}</p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm sm:grid-cols-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-fg-secondary transition-colors duration-200 hover:text-brand-cyan">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {(profile.githubUrl || profile.linkedinUrl) && (
          <ul className="flex gap-3" aria-label="Social profiles">
            {profile.githubUrl && (
              <li>
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile (opens in a new tab)"
                  className="glass inline-flex h-10 w-10 items-center justify-center rounded-xl text-fg-secondary transition-colors duration-200 hover:text-brand-cyan"
                >
                  <Github size={18} aria-hidden="true" />
                </a>
              </li>
            )}
            {profile.linkedinUrl && (
              <li>
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile (opens in a new tab)"
                  className="glass inline-flex h-10 w-10 items-center justify-center rounded-xl text-fg-secondary transition-colors duration-200 hover:text-brand-cyan"
                >
                  <Linkedin size={18} aria-hidden="true" />
                </a>
              </li>
            )}
          </ul>
        )}
      </div>

      <div className="border-t border-white/5 px-5 py-5 text-center text-xs text-fg-muted sm:px-8">
        <p>© {currentYear} {profile.fullName}. Built with React, Vite, and Tailwind CSS.</p>
      </div>
    </footer>
  );
}
