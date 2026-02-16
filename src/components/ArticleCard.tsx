import { Card } from '@heroui/react';
import { useNavigate } from 'react-router-dom';
import GlassCard from './GlassCard';
import { Title, Description, Content, FooterLink } from './StyledCard';
import GlassChip from './GlassChip';
import type { Article } from '../constants';

export default function ArticleCard({ title, description, slug, date, latest }: Article & { latest?: boolean }) {
  const navigate = useNavigate();

  return (
    <GlassCard className="">
      <Card variant="transparent" className="w-full">
        <Card.Header>
          <Title>{title}</Title>
          <Description>{date}</Description>
          {latest && <div className="mt-1 self-start"><GlassChip>Latest</GlassChip></div>}
        </Card.Header>
        <Content>{description}</Content>
        <Card.Footer className="flex gap-4">
          <FooterLink onPress={() => navigate(`/writing/${slug}`)} className="cursor-pointer">
            Read
            <FooterLink.Icon />
          </FooterLink>
        </Card.Footer>
      </Card>
    </GlassCard>
  );
}
