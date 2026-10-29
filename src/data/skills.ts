/**
 * Skill groups. Add or remove items freely.
 * No proficiency levels or percentages are shown by design.
 */

export type SkillIconKey = 'ai' | 'web' | 'code' | 'design' | 'productivity';

export interface SkillGroup {
  id: string;
  title: string;
  icon: SkillIconKey;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'ai',
    title: 'AI & Digital Work',
    icon: 'ai',
    items: ['Prompt Engineering', 'Social Media Management', 'Content Writing'],
  },
  {
    id: 'web',
    title: 'Web Development',
    icon: 'web',
    items: ['HTML', 'CSS', 'WordPress', 'Elementor', 'Elementor Pro', 'WooCommerce'],
  },
  {
    id: 'programming',
    title: 'Programming & Software Development',
    icon: 'code',
    items: [
      'C#',
      'SQL',
      'PHP',
      'Python',
      'Core Java',
      'Object-Oriented Programming',
      'JSP',
      'Servlets',
      'JDBC',
    ],
  },
  {
    id: 'design',
    title: 'Design & Creative Tools',
    icon: 'design',
    items: ['Figma', 'Adobe Photoshop', 'Canva'],
  },
  {
    id: 'productivity',
    title: 'Productivity & Communication',
    icon: 'productivity',
    items: [
      'Microsoft Word',
      'Microsoft Excel',
      'Microsoft PowerPoint',
      'OneDrive',
      'Google Docs',
      'Google Sheets',
      'Google Slides',
      'Zoom',
      'Microsoft Teams',
      'Google Meet',
    ],
  },
];
