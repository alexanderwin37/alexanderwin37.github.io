import { Card, Link } from '@heroui/react';
import GlassCard from './GlassCard';
import type { Project } from '../constants';

export default function ProjectCard({ title, description, tags, link }: Project) {
  return (
    <GlassCard className="">
      <Card variant="transparent" className="w-full">
        <Card.Header>
          <Card.Title>{title}</Card.Title>
          <Card.Description>{tags}</Card.Description>
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
