import { Card } from '@heroui/react';
import { useNavigate } from 'react-router-dom';
import GlassCard from './GlassCard';
import { Title, Description, Content, FooterLink } from './StyledCard';
import type { Project } from '../constants';

export default function ProjectCard({ title, description, tags, siteLink, blogLink, image, iconCredit }: Project) {
  const navigate = useNavigate();

  return (
    <GlassCard className="">
      <Card variant="transparent" className="w-full">
        <Card.Header>
          {image && (
            <img src={image} alt={title} className="w-14 h-14 object-cover rounded-lg mb-4 -ml-1" />
          )}
          <Title>{title}</Title>
          <Description>{tags}</Description>
        </Card.Header>
        <Content>{description}</Content>
        <Card.Footer className="flex flex-col items-start gap-2">
          <div className="flex gap-4">
            {blogLink && (
              <FooterLink onPress={() => navigate(blogLink)} className="cursor-pointer">
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
          </div>
          {iconCredit && (
            <Description className="pt-1 text-white/30"><a href={iconCredit.iconLink} target="_blank" rel="noopener noreferrer" className="underline hover:text-white/70">Icon</a> by <a href={iconCredit.creatorLink} target="_blank" rel="noopener noreferrer" className="underline hover:text-white/70">{iconCredit.creator}</a></Description>
          )}
        </Card.Footer>
      </Card>
    </GlassCard>
  );
}
