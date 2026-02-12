import { Card } from '@heroui/react';
import GlassCard from './GlassCard';
import GlassChip from './GlassChip';
import { Title, Content, FooterLink } from './StyledCard';
import type { Project } from '../constants';

export default function ProjectCard({ title, description, tags, link, image }: Project) {
  return (
    <GlassCard className="">
      <Card variant="transparent" className="w-full">
        <Card.Header>
          {image && (
            <img src={image} alt={title} className="w-14 h-14 object-cover rounded-lg mb-3 -ml-1" />
          )}
          <Title>{title}</Title>
          <div className="flex flex-wrap gap-1.5 mt-1">
            {tags.map((tag) => (
              <GlassChip key={tag}>{tag}</GlassChip>
            ))}
          </div>
        </Card.Header>
        <Content>{description}</Content>
        <Card.Footer>
          <FooterLink href={link}>
            View Project
            <FooterLink.Icon />
          </FooterLink>
        </Card.Footer>
      </Card>
    </GlassCard>
  );
}
