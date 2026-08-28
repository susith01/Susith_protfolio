export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  university?: string;
  status: string;
  isCurrentlyStudying?: boolean;
  expectedGraduation?: string;
  focus: string[];
  description: string;
}

export interface SkillItem {
  name: string;
  category: 'Programming' | 'Data Analysis' | 'Web & Dev Tools' | 'Core Concepts' | 'Automation Tools';
  description: string;
  highlight?: string;
  color?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tech: string[];
  shortDescription: string;
  fullProblem: string;
  solution: string;
  keyFeatures: string[];
  myContribution: string;
  githubUrl: string;
  liveDemoUrl: string;
  type: 'speed-monitor' | 'grocery-app' | 'power-bi-ai';
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  category: string;
  description: string;
  skillsGained: string[];
  credentialUrl?: string;
}

export interface WhatIBuildItem {
  id: string;
  title: string;
  description: string;
  tools: string[];
  color: string;
  accentGradient: string;
}

export interface JourneyStage {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  iconName: string;
}

export interface PersonalInfo {
  name: string;
  firstName: string;
  lastName: string;
  title: string;
  heroSubtext: string;
  aboutSummary: string;
  email: string;
  phone: string;
  linkedin: string;
  linkedinUrl: string;
  github: string;
  githubUrl: string;
  statusBadge: string;
}
