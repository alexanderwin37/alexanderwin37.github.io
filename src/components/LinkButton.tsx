import { Link } from '@heroui/react';
import GlassCapsule from './GlassCapsule';
import icons from './SocialIcons';
import type { SocialLink } from '../constants';

export default function LinkButton({ label, href }: SocialLink) {
  const Icon = icons[label];
  return (
    <GlassCapsule>
      <Link href={href} target="_blank" className="w-full px-4 py-2 flex items-center gap-2 text-white no-underline">
        {Icon && <Icon className="w-6 h-6 mr-2" />}
        <span className="underline">{label}</span>
        <Link.Icon />
      </Link>
    </GlassCapsule>
  );
}
