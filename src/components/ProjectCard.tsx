import { Card, Link } from '@heroui/react';
import GlassCard from './GlassCard';
import type { Project } from '../constants';

export default function ProjectCard({ title, description, tags, link, image }: Project) {
  return (
    <GlassCard className="">
      <Card variant="transparent" className="w-full">
        <Card.Header className="flex flex-row items-start justify-between">
          <div>
            <Card.Title>{title}</Card.Title>
            <Card.Description>{tags}</Card.Description>
          </div>
          {image ? (
            <img src={image} alt={title} className="w-10 h-10 rounded shrink-0 self-center object-cover" />
          ) : (
            <svg className="w-10 h-10 text-white/60 shrink-0 self-center" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
            </svg>
          )}
        </Card.Header>
        <Card.Content>
          <p>{description}</p>
        </Card.Content>
        <Card.Footer>
          <Link href={link}>
            View Project
            <Link.Icon />
          </Link>
        </Card.Footer>
      </Card>
    </GlassCard>
  );
}
