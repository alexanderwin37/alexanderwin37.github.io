import GlassSurface from '../react-bits/glass-surface/GlassSurface';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  opacity?: number;
  borderRadius?: number;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function GlassCard({ children, className = "w-full max-w-lg", opacity = 0.6, borderRadius = 2, onMouseEnter, onMouseLeave }: GlassCardProps) {
  return (
    <GlassSurface width="100%" height="auto" borderRadius={borderRadius} opacity={opacity} className={className} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {children}
    </GlassSurface>
  );
}
