/**
 * Project data. Only include facts that are verified.
 * To add a screenshot, place an image in /public/projects/ and set previewImage,
 * e.g. previewImage: '/projects/vanni-inn.jpg'. Until then a styled placeholder is shown.
 */

export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  technologies?: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
  previewImage?: string;
  previewImageAlt?: string;
  previewIsConcept?: boolean;
}

/** How many projects are visible before "View All Projects" is pressed (featured project included). */
export const INITIAL_PROJECT_COUNT = 6;

export const projects: Project[] = [
  {
    id: 'ocean-view',
    name: 'Ocean View Resort Management System',
    category: 'Full-Stack Development',
    description:
      'Developed a web-based Ocean View Resort Management System designed to support reservation handling, payment processing, reporting, and role-based dashboards.',
    technologies: ['Java', 'JSP', 'MySQL'],
    featured: true,
    previewImage: 'https://cdn.creativeclaw.co/u/237b5522/images/68a57647-49fb-476b-b708-ec7aefb978ea.jpg',
    previewImageAlt: 'Concept illustration of a resort management dashboard',
    previewIsConcept: true,
  },
  {
    id: 'taniasfoto',
    name: 'Taniasfoto',
    category: 'Photography Business / Point-of-Sale Project',
    description: 'Photography business and point-of-sale project.',
    previewImage: 'https://cdn.creativeclaw.co/u/237b5522/images/87a23d1e-edc0-4cfd-b0c3-f6344a72b70b.jpg',
    previewImageAlt: 'Concept illustration of a photography studio point-of-sale app',
    previewIsConcept: true,
  },
  {
    id: 'vanni-inn',
    name: 'Vanni Inn',
    category: 'WordPress Website',
    description: 'Live website for Vanni Inn.',
    technologies: ['WordPress'],
    liveUrl: 'https://vanniinn.lk/',
    previewImage: '/projects/vanni-inn.jpeg',
  },
  {
    id: 'sri-vishnu-kovil',
    name: 'Sri Vishnu Kovil Website',
    category: 'WordPress Website',
    description: 'Live website for Sri Vishnu Kovil.',
    technologies: ['WordPress'],
    liveUrl: 'https://svkk.lk/',
    previewImage: '/projects/sri-vishnu-kovil.jpeg',
  },
  {
    id: 'skyup',
    name: 'Skyup Company Website',
    category: 'Company Website',
    description: 'Live company website for Skyup.',
    liveUrl: 'https://skyup.lk/',
    previewImage: '/projects/skyup.jpeg',
  },
  {
    id: 'pearl-inn',
    name: 'Pearl Inn Resorts',
    category: 'Resort Website',
    description: 'Live resort website for Pearl Inn Resorts.',
    liveUrl: 'https://pearlinnresorts.com/',
    previewImage: '/projects/pearl-inn.jpeg',
  },
  {
    id: 'turks-caicos',
    name: 'Turks-Caicos Property',
    category: 'Property Website',
    description: 'Live property website.',
    liveUrl: 'https://turks-caicosproperty.com/',
    previewImage: '/projects/turks-caicos.jpeg',
  },
  {
    id: 'omnidisplay',
    name: 'OmniDisplay',
    category: 'Glass Shop Website',
    description: 'Live website for the OmniDisplay glass shop.',
    liveUrl: 'https://omnidisplay.stevessheds.com/',
    previewImage: '/projects/omnidisplay.jpeg',
  },
  {
    id: 'aviary-group',
    name: 'Aviary Group',
    category: 'Company Website',
    description: 'Live company website for Aviary Group.',
    liveUrl: 'https://aviarygroup.stevessheds.com/',
    previewImage: '/projects/aviary-group.jpeg',
  },
  {
    id: 'montana-trailer',
    name: 'Montana Trailer Transport',
    category: 'Transport Website',
    description: 'Transport website for Montana Trailer Transport.',
    liveUrl: 'https://dev.montanatrailertransport.com/',
    previewImage: '/projects/montana-trailer.jpeg',
  },
  {
    id: 'durham-grass-cutting',
    name: 'Durham Grass Cutting',
    category: 'Service Website',
    description: 'Service website for Durham Grass Cutting.',
    liveUrl: 'https://durhamgrasscutting.ca/',
    previewImage: '/projects/durham-grass-cutting.jpeg',
  },
  {
    id: 'webb-taxi',
    name: 'Webb Taxi Jamaica',
    category: 'Taxi Website',
    description: 'Taxi service website for Webb Taxi Jamaica.',
    liveUrl: 'https://webbtaxijamaica.com/-',
    previewImage: '/projects/webb-taxi-jamaica.jpeg',
  },
];

/** Content writing, news, and blog links. Preserved exactly as supplied. */
export const contentWritingLinks: string[] = [
  'https://allaboutdurham.com/',
  'https://arubanews.ca/',
  'https://canadianobituaries.org/',
  'https://bhs.allaboutwebservices.com/blog/',
];

/** Website quality assurance and testing links. Preserved exactly as supplied. */
export const qaLinks: string[] = [
  'https://muldersroofing.stevessheds.com/',
  'https://lowontoner.stevessheds.com/',
  'https://authorlalialove.stevessheds.com/',
  'https://bhs.allaboutwebservices.com/',
];
