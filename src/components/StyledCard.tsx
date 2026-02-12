import { Card, Link } from '@heroui/react';
import type { ComponentProps } from 'react';

function Title({ className = '', ...props }: ComponentProps<typeof Card.Title>) {
  return <Card.Title className={`text-lg font-semibold ${className}`} {...props} />;
}

function Description({ className = '', ...props }: ComponentProps<typeof Card.Description>) {
  return <Card.Description className={`text-xs text-white/50 ${className}`} {...props} />;
}

function Content({ children, className = '', ...props }: ComponentProps<typeof Card.Content>) {
  return (
    <Card.Content className={className} {...props}>
      <p className="text-sm text-white/70">{children}</p>
    </Card.Content>
  );
}

function FooterLink({ className = '', ...props }: ComponentProps<typeof Link>) {
  return <Link className={`text-xs text-white/50 ${className}`} {...props} />;
}
FooterLink.Icon = Link.Icon;

export { Title, Description, Content, FooterLink };
