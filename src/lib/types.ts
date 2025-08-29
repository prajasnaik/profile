export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  location: string;
  website?: string | null;
  linkedin?: string;
  github?: string;
}

export interface Background {
  introduction: string;
  summary: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  period: string;
  link?: string;
  github?: string;
}

export interface ExperienceEntry {
  title: string;
  company: string;
  period: string;
  details: string[];
}

export interface EducationEntry {
  institution: string;
  degree: string;
  period: string;
  details?: string[];
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  background: Background;
  skills: SkillCategory[];
  projects: Project[];
  experience?: ExperienceEntry[];
  education?: EducationEntry[];
  awards?: string[];
}
