// import project1Img from './assets/project1.png';

export interface Project {
  title: string;
  description: string;
  tags: string;
  link: string;
  image?: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export const projects: Project[] = [
  {
    // title: "BaseballPips",
    title: "Project 1",
    description: "Brief description of your first CS project.",
    tags: "React / TypeScript",
    link: "#",
    // image: project1Img,
  },
];

export const links: SocialLink[] = [
  { label: "GitHub", href: "https://github.alexanderwin.com", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.alexanderwin.com", icon: "linkedin" },
];
