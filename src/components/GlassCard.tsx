import GlassSurface from '../react-bits/glass-surface/GlassSurface';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  opacity?: number;
  borderRadius?: number;
}

export default function GlassCard({ children, className = "w-full max-w-md", opacity = 0.6, borderRadius = 32 }: GlassCardProps) {
  return (
    <GlassSurface width="100%" height="auto" borderRadius={borderRadius} opacity={opacity} className={className}>
      {children}
    </GlassSurface>
  );
}
