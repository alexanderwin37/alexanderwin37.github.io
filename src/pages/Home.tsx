import { Avatar, Card, Separator } from "@heroui/react";
import { useNavigate } from 'react-router-dom';
import headshot from '../assets/erwin_headshot.png';
import GlassCard from '../components/GlassCard';
import { Title, Content } from '../components/StyledCard';
import { FooterLink } from '../components/StyledCard';
import ProjectCard from '../components/ProjectCard';
import ArticleCard from '../components/ArticleCard';
import LinkButton from '../components/LinkButton';
import GlassChip from '../components/GlassChip';
import { projects, articles, links, subtitles, aboutMe } from '../constants';

export default function Home() {
  const navigate = useNavigate();
  const latestArticle = articles[0];

  return (
    <div className="flex flex-col items-start gap-8 px-6 sm:px-4 py-16 max-w-lg mx-auto">

      <GlassCard>
        <div className="flex flex-col items-start gap-0.5 p-4">
          <Avatar size="lg" color="accent" className="w-20 h-20 text-xl mb-3">
            <Avatar.Image src={headshot} alt="Alexander Erwin" />
            <Avatar.Fallback>AE</Avatar.Fallback>
          </Avatar>
          <h1 className="text-3xl font-bold text-white">Alexander Erwin</h1>
          {subtitles.map((s) => (
            <p key={s} className="text-sm text-white/70">{s}</p>
          ))}
        </div>
      </GlassCard>

      <GlassCard>
        <Card variant="transparent" className="w-full">
          <Card.Header>
            <Title>About Me</Title>
          </Card.Header>
          <Content>{aboutMe}</Content>
        </Card>
      </GlassCard>

      <Separator className="w-full bg-white/10" />

      <div className="flex items-center gap-3">
        <h2 className="text-2xl font-bold text-white">Writing</h2>
        <GlassChip>Latest</GlassChip>
      </div>
      {latestArticle && (
        <div className="w-full grid grid-cols-1 gap-4">
          <ArticleCard {...latestArticle} />
          <FooterLink onPress={() => navigate('/writing')} className="cursor-pointer">
            See more
            <FooterLink.Icon />
          </FooterLink>
        </div>
      )}

      <Separator className="w-full bg-white/10" />

      <div className="flex items-center gap-3">
        <h2 className="text-2xl font-bold text-white">Projects</h2>
        <GlassChip>Best</GlassChip>
      </div>
      <div className="w-full grid grid-cols-1 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

      <Separator className="w-full bg-white/10" />

      <h2 className="text-2xl font-bold text-white">Links</h2>
      <div className="w-full grid grid-cols-1 gap-3">
        {links.map((link) => (
          <LinkButton key={link.label} {...link} />
        ))}
      </div>

    </div>
  );
}
