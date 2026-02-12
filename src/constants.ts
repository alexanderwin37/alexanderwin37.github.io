import project1Img from './assets/project1.png';

export interface Project {
  title: string;
  description: string;
  tags: string;
  siteLink?: string;
  blogLink?: string;
  image?: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export const projects: Project[] = [
  {
    title: "BaseballPips",
    description: "This project taught me how to develop an iOS App.",
    tags: "Swift iOS app backed by a Node.js server",
    siteLink: "https://baseballpips.com",
    blogLink: "/project/baseballpips",
    image: project1Img,
  },
  {
    title: "More coming soon...",
    description: "",
    tags: "",
  }
];

export const subtitles = ["Software Engineer", "Aspiring Author"];

export const aboutMe = "I'm Alexander. I grew up in Colorado, attended uni in Nashville, and now live in Seattle. I used Claude Code to vibe-code this website, which is still a work in progress.";

export const links: SocialLink[] = [
  { label: "GitHub", href: "https://github.alexanderwin.com" },
  { label: "LinkedIn", href: "https://linkedin.alexanderwin.com" },
];
