import project1Img from './assets/project1.png';

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
}

export const projects: Project[] = [
  {
    title: "BaseballPips",
    description: "BaseballPips is a passion project",
    tags: "Swift iOS app backed by a Node.js server",
    link: "https://baseballpips.com",
    image: project1Img,
  }
];

export const links: SocialLink[] = [
  { label: "GitHub", href: "https://github.alexanderwin.com" },
  { label: "LinkedIn", href: "https://linkedin.alexanderwin.com" },
];
