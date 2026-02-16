import { Link } from 'react-router-dom';
import ArticleCard from '../components/ArticleCard';
import { articles } from '../constants';

export default function WritingArchive() {
  return (
    <div className="flex flex-col items-start gap-8 px-6 sm:px-4 py-16 max-w-lg mx-auto">
      <Link to="/" className="text-sm text-white/50 underline">Back to home</Link>
      <h1 className="text-3xl font-bold text-white">Writing</h1>
      <div className="w-full grid grid-cols-1 gap-4">
        {articles.map((article) => (
          <ArticleCard key={article.slug} {...article} />
        ))}
      </div>
    </div>
  );
}
