/* Portfolio TypeScript types */

export interface Skill {
  name: string;
  category: string;
  icon?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  challenge: string;
  solution: string;
  impact: string[];
  techStack: string[];
  highlights: string[];
  featured: boolean;
  order: number;
  links?: {
    live?: string;
    github?: string;
  };
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  startDate: string;
  endDate: string;
  location: string;
  type: string;
  summary: string;
  achievements: string[];
  techStack: string[];
  current: boolean;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  social: {
    linkedin: string;
    github: string;
  };
  yearsExperience: string;
  bio: string[];
  /** Google Drive (or any external) direct-download URL for resume PDF */
  resumeUrl: string;
}
