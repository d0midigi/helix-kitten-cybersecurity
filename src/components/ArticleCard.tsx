import { ChevronRight } from 'lucide-react';
import type { Article } from '@/types';

interface ArticleCardProps {
  article: Article;
  onClick: () => void;
}

export function ArticleCard({ article, onClick }: ArticleCardProps) {
  return (
    <button
      onClick={onClick}
      className="article-card w-full text-left group"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="article-card-title font-medium text-gray-900 mb-2 transition-colors line-clamp-2">
            {article.title}
          </h3>
          {article.description && (
            <p className="text-sm text-gray-500 line-clamp-2">
              {article.description}
            </p>
          )}
        </div>
        <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5 group-hover:text-green-600 transition-colors" />
      </div>
    </button>
  );
}
