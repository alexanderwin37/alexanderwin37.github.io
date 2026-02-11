import { Avatar, Card, Separator } from "@heroui/react";
import headshot from './assets/erwin_headshot.png';
import GlassCard from './components/GlassCard';
import ProjectCard from './components/ProjectCard';
import LinkButton from './components/LinkButton';
import { projects, links } from './constants';
import Beams from "./react-bits/beams/Beams.tsx";

function App() {
  return (
    <>
      {/*<Aurora*/}
      {/*  colorStops={["#0F2057", "#1B3A8A", "#2E5CB8"]}*/}
      {/*  blend={5}*/}
      {/*  amplitude={2}*/}
      {/*  speed={0.25}*/}
      {/*/>*/}

      <div className="beams-container">
        <Beams
            beamWidth={8}
            beamHeight={25}
            beamNumber={3}
            lightColor="#74a7fe"
            speed={5}
            noiseIntensity={1.75}
            scale={0.1}
            rotation={0}
        />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-start gap-8 px-6 sm:px-4 py-16 max-w-lg mx-auto">

        <GlassCard>
          <div className="flex flex-col items-start gap-4 p-4">
            <Avatar size="lg" color="accent" className="w-16 h-16 text-xl">
              <Avatar.Image src={headshot} alt="Alexander Erwin" />
              <Avatar.Fallback>AE</Avatar.Fallback>
            </Avatar>
            <h1 className="text-3xl font-bold text-white">Alexander Erwin</h1>
          </div>
        </GlassCard>

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

        <Separator className="w-full bg-white/10" />

        <h2 className="text-2xl font-bold text-white">Projects</h2>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        <Separator className="w-full bg-white/10" />

        <h2 className="text-2xl font-bold text-white">Links</h2>
        <div className="w-full grid grid-cols-2 gap-3">
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
