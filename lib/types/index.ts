// Shared TypeScript type definitions

export interface Project {
  title: string;
  description: string;
  fullDescription?: string[];
  image: string;
  technologies: string[];
  github: string | null;
  demo: string | null;
  featured: boolean;
  category: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  logo: string;
  description: string;
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  gradientColor: string;
  textColor: string;
  borderColor: string;
  bgColor: string;
  hoverBg: string;
  skills: string[];
}

export interface Highlight {
  icon: any; // Lucide icon component
  title: string;
  description: string;
}

export interface ContactInfo {
  icon: any; // Lucide icon component
  label: string;
  value: string;
  href: string | null;
}

export interface SocialLink {
  name: string;
  icon: any; // Lucide icon component
  href: string;
}

export interface NavItem {
  name: string;
  href: string;
}
