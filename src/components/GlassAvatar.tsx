import GlassSurface from '../react-bits/glass-surface/GlassSurface';
import { Avatar } from '@heroui/react';

interface GlassAvatarProps {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: number;
}

export default function GlassAvatar({ src, alt = "", fallback = "AE", size = 8 }: GlassAvatarProps) {
  return (
    <GlassSurface width={size} height={size} borderRadius={size / 2} opacity={0.6}>
      <div className="w-full h-full flex items-center justify-center">
        <Avatar size="lg" color="accent" className="w-24 h-24 text-3xl">
          {src && <Avatar.Image src={src} alt={alt} />}
          <Avatar.Fallback>{fallback}</Avatar.Fallback>
        </Avatar>
      </div>
    </GlassSurface>
  );
}
