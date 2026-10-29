/**
 * Central place for personal, experience, and education details.
 * Edit values here; components read from this file.
 */

export interface NavItem {
  label: string;
  href: string;
}

export interface ExperienceEntry {
  id: string;
  company: string;
  title: string;
  period: string;
  description?: string;
}

export interface EducationEntry {
  id: string;
  institution: string;
  qualification: string;
  location: string;
  period?: string;
}

/** Shown when a qualification has not been confirmed yet. Replace with the real value. */
export const PENDING_QUALIFICATION = 'Qualification details to be added';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const profile = {
  fullName: 'Thadshanyaa Arulkodeswaran',
  initials: 'TA',
  title: 'Prompt Engineer & Social Media Manager',
  identity: 'Prompt Engineer | Social Media Manager | Software & Web Developer',
  tagline: 'Prompt Engineering · Social Media · Web Development',
  location: 'Trincomalee, Sri Lanka',
  email: 'thadshanyaa@gmail.com',
  /** Display format as provided. */
  phoneDisplay: '0742425048',
  /** International format for tel: links (Sri Lanka +94, leading 0 dropped). */
  phoneHref: '+94742425048',
  portfolioUrl: 'https://thadshanyaa-portfolio.vercel.app/',
  githubUrl: 'https://github.com/thadshanyaa',
  linkedinUrl: 'https://www.linkedin.com/in/thadshanyaa-arulkodeswaran-93a936358',
};

export const currentExperience: ExperienceEntry = {
  id: 'meta-tager',
  company: 'Meta Tager',
  title: 'Prompt Engineer & Social Media Manager',
  period: 'July 27, 2026 – Present',
  description:
    'Working across prompt engineering and social media management, combining structured prompt design, creative thinking, and digital content workflows to support professional digital communication.',
};

export const previousExperience: ExperienceEntry[] = [
  {
    id: 'skyup',
    company: 'Skyup (PVT) Ltd',
    title: 'Software Engineer',
    period: 'April 2026 – August 2026',
  },
  {
    id: 'aaws',
    company: 'AAWS',
    title: 'Intern WordPress Developer & Content Writer',
    period: 'April 2026 – October 2026',
  },
  {
    id: 'varaprada',
    company: 'Varaprada Solutionz',
    title: 'Intern WordPress Developer',
    period: 'May 2023 – January 2026',
  },
];

export const education: EducationEntry[] = [
  {
    id: 'icbt-bsc',
    institution: 'ICBT Campus',
    qualification: 'BSc in Software Engineering',
    location: 'Jaffna, Sri Lanka',
    period: 'Present',
  },
  {
    id: 'esoft-hnd',
    institution: 'ESOFT Metro College',
    qualification: 'Higher National Diploma in Computing (Software Engineering)',
    location: 'Trincomalee, Sri Lanka',
    period: '2023 – 2025',
  },
  {
    id: 'esoft-diploma-it',
    institution: 'ESOFT Metro College',
    qualification: 'Diploma in Information Technology',
    location: 'Trincomalee, Sri Lanka',
    period: '2023 – 2024',
  },
  {
    id: 'shanmuga',
    institution: 'T/Sri Shanmuga Hindu Ladies College',
    qualification: 'O/L',
    location: 'Trincomalee, Sri Lanka',
    period: '2023',
  },
];
