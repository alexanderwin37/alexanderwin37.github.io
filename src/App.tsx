import Aurora from './react-bits/aurora/Aurora';
import { Card, Separator } from "@heroui/react";
import headshot from './assets/erwin_headshot.png';
import GlassAvatar from './components/GlassAvatar';
import GlassCapsule from './components/GlassCapsule';
import GlassCard from './components/GlassCard';
import ProjectCard from './components/ProjectCard';
import LinkButton from './components/LinkButton';
import { projects, links } from './constants';

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

        <GlassAvatar src={headshot} alt="Alexander Erwin" />

        <GlassCapsule>
          <div className="px-10 py-4 text-center">
            <h1 className="text-3xl font-bold text-white whitespace-nowrap">Alexander Erwin</h1>
          </div>
        </GlassCapsule>

        <GlassCard>
          <Card variant="transparent" className="w-full">
            <Card.Header>
              <Card.Title>About Me</Card.Title>
            </Card.Header>
            <Card.Content>
              <p>This site is a vibe-coded WIP.</p>
            </Card.Content>
          </Card>
        </GlassCard>

        <Separator className="w-full max-w-2xl" />

        <h2 className="text-2xl font-bold text-white">Projects</h2>
        <div className="w-full max-w-md sm:max-w-3xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        <Separator className="w-full max-w-2xl" />

        <h2 className="text-2xl font-bold text-white">Links</h2>
        <div className="w-full max-w-md flex flex-col gap-3">
          {links.map((link) => (
            <LinkButton key={link.label} {...link} />
          ))}
        </div>

        <p className="text-white/30 text-xs mt-8">
          &copy; {new Date().getFullYear()} Alexander Erwin
        </p>
      </div>
    </>
  );
}

export default App;
