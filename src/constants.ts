import project1Img from './assets/project1.png';
import eBirdPhetcherIcon from './assets/ebird-phetcher-icon.svg';

export interface Project {
  title: string;
  description: string;
  tags: string;
  siteLink?: string;
  blogLink?: string;
  image?: string;
  iconCredit?: IconCredit;
}

export interface IconCredit {
  iconLink: string;
  creator: string;
  creatorLink: string;
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
    title: "eBird-Phetcher",
    description: "Retrieve your eBird photos at original resolution",
    tags: "Executable script written in TypeScript",
    siteLink: "https://github.com/alexanderwin37/eBird-Phetcher",
    image: eBirdPhetcherIcon,
    iconCredit: { iconLink: "https://thenounproject.com/icon/bird-7842077/", creator: "Princess In The Spotlight", creatorLink: "https://thenounproject.com/creator/vitafatimah84/" },
  },
  {
    title: "More coming soon...",
    description: "",
    tags: "",
  }
];

export interface Article {
  title: string;
  description: string;
  slug: string;
  date: string;
}

export const articles: Article[] = [
  {
    title: "On Vibe-Coding a Portfolio",
    description: "What I learned building this site with Claude Code.",
    slug: "vibe-coding",
    date: "2026-02-13",
  },
  {
    title: "Lessons from eBird-Phetcher",
    description: "A deep dive into scraping, rate limits, and respecting APIs.",
    slug: "ebird-phetcher",
    date: "2026-02-10",
  },
  {
    title: "Hello World",
    description: "My first post — why I started writing.",
    slug: "hello-world",
    date: "2026-02-01",
  },
];

export const subtitles = ["Software Engineer", "Aspiring Writer"];

export const aboutMe = "I'm Alexander. I grew up in Colorado, attended uni in Nashville, and now live in Seattle. I used Claude Code to vibe-code this website, which is still a work in progress.";

export const links: SocialLink[] = [
  { label: "GitHub", href: "https://github.alexanderwin.com" },
  { label: "LinkedIn", href: "https://linkedin.alexanderwin.com" },
];
