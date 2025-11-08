import fs from 'fs';
import path from 'path';
import toml from '@iarna/toml';

export interface Personal {
  name?: string;
  phone?: string;
  email?: string;
  location?: string;
  website?: string;
  linkedin?: string;
  github?: string;
}

export interface Summary {
  text?: string;
}

export interface Education {
  institution?: string;
  degree?: string;
  specialization?: string;
  gpa?: string;
  start_date?: string;
  end_date?: string;
}

export interface Experience {
  company?: string;
  location?: string;
  role?: string;
  start_date?: string;
  end_date?: string;
  responsibilities?: string[];
}

export interface Project {
  name?: string;
  link?: string;
  summary?: string;
  description?: string[];
}

export interface Skills {
  languages?: string[];
  frameworks?: string[];
  tools?: string[];
  databases?: string[];
  concepts?: string[];
}

export interface ResumeData {
  personal?: Personal;
  summary?: Summary;
  education?: Education[];
  experience?: Experience[];
  projects?: Project[];
  skills?: Skills;
}

export function loadResumeData(): ResumeData {
  try {
    const resumePath = path.join(process.cwd(), 'resume.toml');
    const fileContent = fs.readFileSync(resumePath, 'utf-8');
    const data = toml.parse(fileContent) as ResumeData;
    return data;
  } catch (error) {
    console.error('Error loading resume.toml:', error);
    return {};
  }
}

export function formatDateRange(startDate?: string, endDate?: string): string {
  if (!startDate && !endDate) return '';
  if (!endDate) return startDate || '';
  if (!startDate) return endDate;
  return `${startDate} - ${endDate}`;
}

export function hasPersonalInfo(personal?: Personal): boolean {
  if (!personal) return false;
  return !!(personal.name || personal.email || personal.phone || personal.location);
}

export function hasSocialLinks(personal?: Personal): boolean {
  if (!personal) return false;
  return !!(personal.website || personal.linkedin || personal.github);
}
