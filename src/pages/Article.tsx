import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import GlassCard from '../components/GlassCard';
import { articles, projects } from '../constants';

const posts = import.meta.glob('../content/*.md', { query: '?raw', import: 'default' });

export default function Article() {
  const { slug } = useParams<{ slug: string }>();
  const [content, setContent] = useState<string | null>(null);
  const [notFound, setNotFound] = useState(false);

  const isValidSlug = articles.some((a) => a.articleSlug === slug)
    || projects.some((p) => p.projectSlug === slug);

  useEffect(() => {
    if (!isValidSlug) {
      setNotFound(true);
      return;
    }
    const key = `../content/${slug}.md`;
    const loader = posts[key];
    if (loader) {
      (loader() as Promise<string>).then(setContent);
    } else {
      setNotFound(true);
    }
  }, [slug, isValidSlug]);

  if (notFound) {
    return (
      <div className="relative z-10 flex flex-col items-start gap-8 px-6 sm:px-4 py-16 max-w-lg mx-auto">
        <GlassCard>
          <div className="p-6">
            <h1 className="text-2xl font-bold text-white mb-4">Post not found</h1>
            <Link to="/" className="text-sm text-white/50 underline">Back to home</Link>
          </div>
        </GlassCard>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="relative z-10 flex items-center justify-center py-16">
        <p className="text-white/50">Loading...</p>
      </div>
    );
  }

  return (
    <div className="relative z-10 flex flex-col items-start gap-8 px-6 sm:px-4 py-16 max-w-lg mx-auto">
      <Link to="/" className="text-sm text-white/50 underline">Back to home</Link>
      <GlassCard>
        <div className="p-6 prose prose-invert prose-sm max-w-none
          [&_h1]:text-2xl [&_h1]:font-bold [&_h1]:text-white [&_h1]:mb-4
          [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-white [&_h2]:mt-6 [&_h2]:mb-2
          [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-white [&_h3]:mt-4 [&_h3]:mb-2
          [&_p]:text-sm [&_p]:text-white/70 [&_p]:mb-3
          [&_ul]:text-sm [&_ul]:text-white/70 [&_ul]:mb-3 [&_ul]:list-disc [&_ul]:pl-5
          [&_ol]:text-sm [&_ol]:text-white/70 [&_ol]:mb-3 [&_ol]:list-decimal [&_ol]:pl-5
          [&_li]:mb-1
          [&_a]:text-white/50 [&_a]:underline
          [&_code]:text-xs [&_code]:bg-white/10 [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded
          [&_blockquote]:border-l-2 [&_blockquote]:border-white/20 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-white/50
        ">
          <Markdown>{content}</Markdown>
        </div>
      </GlassCard>
    </div>
  );
}
