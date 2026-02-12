import { Card } from '@heroui/react';
import GlassCard from './GlassCard';
import { Title, Description, Content, FooterLink } from './StyledCard';
import type { Project } from '../constants';

export default function ProjectCard({ title, description, tags, siteLink, blogLink, image }: Project) {
  return (
    <GlassCard className="">
      <Card variant="transparent" className="w-full">
        <Card.Header>
          {image && (
            <img src={image} alt={title} className="w-14 h-14 object-cover rounded-lg mb-3 -ml-1" />
          )}
          <Title>{title}</Title>
          <Description>{tags}</Description>
        </Card.Header>
        <Content>{description}</Content>
        <Card.Footer className="flex gap-4">
          {blogLink && (
            <FooterLink href={blogLink}>
              Read more
              <FooterLink.Icon />
            </FooterLink>
          )}
          {siteLink && (
            <FooterLink href={siteLink}>
              Visit site
              <FooterLink.Icon />
            </FooterLink>
          )}
        </Card.Footer>
      </Card>
    </GlassCard>
  );
}
