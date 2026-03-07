import { Card } from '@heroui/react';
import { useNavigate } from 'react-router-dom';
import GlassCard from './GlassCard';
import { Title, Description, Content, FooterLink } from './StyledCard';
import type { Article } from '../constants';

export default function ArticleCard({ title, description, articleSlug, date }: Article) {
  const navigate = useNavigate();

  return (
    <GlassCard className="">
      <Card variant="transparent" className="w-full">
        <Card.Header>
          <Title>{title}</Title>
          <Description>{date}</Description>
        </Card.Header>
        <Content>{description}</Content>
        <Card.Footer className="flex gap-4">
          <FooterLink onPress={() => navigate(`/writing/${articleSlug}`)} className="cursor-pointer">
            Read
            <FooterLink.Icon />
          </FooterLink>
        </Card.Footer>
      </Card>
    </GlassCard>
  );
}
