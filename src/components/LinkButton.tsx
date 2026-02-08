import { Link } from '@heroui/react';
import GlassCapsule from './GlassCapsule';
import type { SocialLink } from '../constants';

export default function LinkButton({ label, href }: SocialLink) {
  return (
    <GlassCapsule>
      <Link href={href} target="_blank" className="w-full px-6 py-2 flex items-center justify-between text-white no-underline">
        <span>{label}</span>
        <Link.Icon />
      </Link>
    </GlassCapsule>
  );
}
