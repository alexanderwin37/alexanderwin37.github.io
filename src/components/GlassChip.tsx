import GlassSurface from '../react-bits/glass-surface/GlassSurface';

interface GlassChipProps {
  children: React.ReactNode;
  className?: string;
  opacity?: number;
}

export default function GlassChip({ children, className = '', opacity = 0.4 }: GlassChipProps) {
  return (
    <GlassSurface width="auto" height="auto" borderRadius={9999} opacity={opacity} className={`inline-flex ${className}`}>
      <span className="text-xs text-white/70 -mx-0 -my-1.5 whitespace-nowrap">{children}</span>
    </GlassSurface>
  );
}
