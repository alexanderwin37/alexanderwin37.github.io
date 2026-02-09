export interface Project {
  title: string;
  description: string;
  tags: string;
  link: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export const projects: Project[] = [
  {
    title: "Project One",
    description: "Brief description of your first CS project.",
    tags: "React / TypeScript",
    link: "#",
  },
  {
    title: "Project Two",
    description: "Brief description of your second CS project.",
    tags: "Python / ML",
    link: "#",
  },
  {
    title: "Project Three",
    description: "Brief description of your third CS project.",
    tags: "Node.js / MongoDB",
    link: "#",
  },
];

export const links: SocialLink[] = [
  { label: "GitHub", href: "https://github.alexanderwin.com" },
  { label: "LinkedIn", href: "https://linkedin.alexanderwin.com" },
];
