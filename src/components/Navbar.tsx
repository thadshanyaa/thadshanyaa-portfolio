import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { navItems } from '../data/portfolio';
import { useActiveSection } from '../hooks/useActiveSection';
import TaLogo from './TaLogo';

const sectionIds = navItems.map((item) => item.href.replace('#', ''));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(sectionIds);
  const solid = scrolled || menuOpen;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 sm:px-6">
      <nav
        aria-label="Primary"
        className={`mx-auto mt-3 max-w-6xl overflow-hidden rounded-2xl transition-all duration-300 ${
          solid ? 'glass-strong' : 'border border-transparent'
        }`}
      >
        <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a
            href="#home"
            aria-label="Thadshanyaa Arulkodeswaran, back to top"
            className="group flex items-center gap-3 rounded-xl"
          >
            <TaLogo className="h-10 w-10 shrink-0 transition-transform duration-200 group-hover:scale-105" />
            <span className="font-display text-sm font-semibold tracking-[0.22em] text-fg transition-colors duration-200 group-hover:text-brand-cyan">
              THADSHANYAA
            </span>
          </a>

          <ul className="hidden items-center gap-1 xl:flex">
            {navItems.map((item) => {
              const id = item.href.replace('#', '');
              const isActive = activeId === id;

              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? 'location' : undefined}
                    className={`relative block rounded-full px-3 py-2 text-sm transition-colors duration-200 hover:text-fg ${
                      isActive ? 'text-fg' : 'text-fg-secondary'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        aria-hidden="true"
                        className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-brand-primary via-brand-electric to-brand-cyan"
                        transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <a href="#contact" className="btn-primary hidden px-5 py-2.5 xl:inline-flex">
              Let&apos;s Talk
            </a>
            <button
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen((open) => !open)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-fg transition duration-200 hover:border-brand-cyan/50 xl:hidden"
            >
              {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {menuOpen && (
            <motion.div
              key="mobile-menu"
              id="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="overflow-hidden xl:hidden"
            >
              <ul className="flex flex-col gap-1 border-t border-white/10 px-4 pb-5 pt-3">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="block rounded-xl px-4 py-3 text-base text-fg-secondary transition-colors duration-200 hover:bg-white/[0.05] hover:text-fg"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li className="pt-3">
                  <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-primary w-full">
                    Let&apos;s Talk
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
