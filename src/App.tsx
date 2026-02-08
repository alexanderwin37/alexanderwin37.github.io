import Aurora from './react-bits/aurora/Aurora';
import GlassSurface from './react-bits/glass-surface/GlassSurface';
import { Avatar, Card, Link, Separator } from "@heroui/react";
import headshot from './assets/erwin_headshot.png';

const projects = [
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

const links = [
  { label: "GitHub", href: "https://github.alexanderwin.com" },
  { label: "LinkedIn", href: "https://linkedin.alexanderwin.com" },
];

function App() {
  return (
    <>
      <Aurora
        colorStops={["#0F2057", "#1B3A8A", "#2E5CB8"]}
        blend={1}
        amplitude={1.5}
        speed={1}
      />

      <div className="relative z-10 min-h-screen flex flex-col items-center gap-8 px-6 sm:px-4 py-16">

        {/* Avatar */}
        <GlassSurface width={128} height={128} borderRadius={64} opacity={0.6}>
          <div className="w-full h-full flex items-center justify-center">
            <Avatar size="lg" color="accent" className="w-24 h-24 text-3xl">
              <Avatar.Image src={headshot} alt="Alexander Erwin" />
              <Avatar.Fallback>AE</Avatar.Fallback>
            </Avatar>
          </div>
        </GlassSurface>

        {/* Name */}
        <GlassSurface width="100%" height="auto" borderRadius={9999} opacity={0.6} className="w-full max-w-md">
          <div className="px-10 py-4 text-center">
            <h1 className="text-3xl font-bold text-white whitespace-nowrap">Alexander Erwin</h1>
          </div>
        </GlassSurface>

        {/* About Me */}
        <GlassSurface width="100%" height="auto" borderRadius={32} opacity={0.6} className="w-full max-w-md">
          <Card variant="transparent" className="w-full">
            <Card.Header>
              <Card.Title>About Me</Card.Title>
            </Card.Header>
            <Card.Content>
              <p>
                This site is a vibe-coded WIP.
              </p>
            </Card.Content>
          </Card>
        </GlassSurface>

        <Separator className="w-full max-w-2xl" />

        {/* Projects */}
        <h2 className="text-2xl font-bold text-white">Projects</h2>
        <div className="w-full max-w-md sm:max-w-3xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <GlassSurface key={project.title} width="100%" height="auto" borderRadius={32}>
              <Card variant="transparent" className="w-full">
                <Card.Header>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Description>{project.tags}</Card.Description>
                </Card.Header>
                <Card.Content>
                  <p>{project.description}</p>
                </Card.Content>
                <Card.Footer>
                  <Link href={project.link}>
                    View Project
                    <Link.Icon />
                  </Link>
                </Card.Footer>
              </Card>
            </GlassSurface>
          ))}
        </div>

        <Separator className="w-full max-w-2xl" />

        {/* Linktree */}
        <h2 className="text-2xl font-bold text-white">Links</h2>
        <div className="w-full max-w-md flex flex-col gap-3">
          {links.map((link) => (
            <GlassSurface key={link.label} width="100%" height="auto" borderRadius={9999} opacity={0.6}>
              <Link href={link.href} target="_blank" className="w-full px-6 py-2 flex items-center justify-between text-white no-underline">
                <span>{link.label}</span>
                <Link.Icon />
              </Link>
            </GlassSurface>
          ))}
        </div>

        {/* Footer */}
        <p className="text-white/30 text-xs mt-8">
          &copy; {new Date().getFullYear()} Alexander Erwin
        </p>
      </div>
    </>
  );
}

export default App;
