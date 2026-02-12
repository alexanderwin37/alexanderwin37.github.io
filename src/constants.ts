import project1Img from './assets/project1.png';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image?: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export const projects: Project[] = [
  {
    title: "BaseballPips",
    description: "BaseballPips is a passion project",
    tags: ["Swift", "SwiftUI", "Node.js", "Google Cloud"],
    link: "https://baseballpips.com",
    image: project1Img,
  },
  {
    title: "Project Two",
    description: "Brief description of your second CS project.",
    tags: ["Python", "ML"],
    link: "#",
  },
  {
    title: "Project Three",
    description: "Brief description of your third CS project.",
    tags: ["Node.js", "MongoDB"],
    link: "#",
  },
];

export const links: SocialLink[] = [
  { label: "GitHub", href: "https://github.alexanderwin.com" },
  { label: "LinkedIn", href: "https://linkedin.alexanderwin.com" },
];
