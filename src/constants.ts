import project1Img from './assets/project1.png';
import eBirdPhetcherIcon from './assets/ebird-phetcher-icon.svg';
import curtainsClosed from './assets/curtains.closed.svg';
import curtainsOpen from './assets/curtains.open.svg';

export interface Project {
  title: string;
  description: string;
  tags: string;
  siteLink?: string;
  projectSlug?: string;
  image?: string;
  hoverImage?: string;
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
    description: "Follow your baseball team throughout the season",
    tags: "Swift iOS app backed by a Node.js server",
    siteLink: "https://baseballpips.com",
    projectSlug: "baseballpips",
    image: project1Img,
  },
  {
    title: "DIY Smart Curtains",
    description: "Arduino powered and HomeKit Integrated DIY Smart blinds",
    tags: "HomeKit enabled curtains, powered by Arduino",
    image: curtainsClosed,
    hoverImage: curtainsOpen,
    siteLink: "https://github.alexanderwin.com/SmarTblinds",
  },
  {
    title: "eBird-Phetcher",
    description: "Retrieve your eBird photos at original resolution",
    tags: "Executable script written in TypeScript",
    siteLink: "https://github.com/alexanderwin37/eBird-Phetcher",
    image: eBirdPhetcherIcon,
    iconCredit: { iconLink: "https://thenounproject.com/icon/bird-7842077/", creator: "Princess In The Spotlight", creatorLink: "https://thenounproject.com/creator/vitafatimah84/" },
  }
];

export interface Article {
  title: string;
  description: string;
  articleSlug: string;
  date: string;
}

export const articles: Article[] = [
  // {
  //   title: "Dev Sites Considered Harmful",
  //   description: "On beating a dead horse",
  //   articleSlug: "considered-harmful",
  //   date: "2026-03-01",
  // },
];

export const subtitles = ["Software Engineer", "Aspiring Writer"];

export const links: SocialLink[] = [
  { label: "GitHub", href: "https://github.alexanderwin.com" },
  { label: "LinkedIn", href: "https://linkedin.alexanderwin.com" },
  { label: "eBird", href: "https://ebird.alexanderwin.com" },
];
