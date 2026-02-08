import GlassSurface from '../react-bits/glass-surface/GlassSurface';

interface GlassCapsuleProps {
  children: React.ReactNode;
  className?: string;
  opacity?: number;
}

export default function GlassCapsule({ children, className = "w-full max-w-lg", opacity = 0.6 }: GlassCapsuleProps) {
  return (
    <GlassSurface width="100%" height="auto" borderRadius={9999} opacity={opacity} className={className}>
      {children}
    </GlassSurface>
  );
}
