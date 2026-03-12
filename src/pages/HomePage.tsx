import { Pin, ChevronLeft, ChevronRight } from 'lucide-react';
import { ArticleCard } from '@/components/ArticleCard';
import { articles } from '@/data/navigation';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <span className="flex items-center gap-1 text-green-600">
          <Pin className="w-4 h-4" />
          Pinned
        </span>
        <span>/</span>
        <span className="text-gray-700 font-medium">Active Directory & Kerberos Abuse</span>
      </div>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Active Directory & Kerberos Abuse
        </h1>
        <p className="text-gray-600 text-lg">
          A collection of techniques that exploit and abuse Active Directory, Kerberos authentication, 
          Domain Controllers and similar matters.
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
            onClick={() => onNavigate(article.href)}
          />
        ))}
      </div>

      {/* Navigation */}
      <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200">
        <button
          onClick={() => onNavigate('/sql-injection')}
          className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:shadow-md transition-all text-left group"
        >
          <ChevronLeft className="w-5 h-5 text-gray-400 group-hover:text-green-600" />
          <div>
            <div className="text-xs text-gray-500 mb-1">Previous</div>
            <div className="font-medium text-gray-900 group-hover:text-green-600 transition-colors">
              SQL Injection & XSS Playground
            </div>
          </div>
        </button>
        <button
          onClick={() => onNavigate('/blog/da-to-ea')}
          className="flex items-center justify-end gap-3 p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:shadow-md transition-all text-right group"
        >
          <div>
            <div className="text-xs text-gray-500 mb-1">Next</div>
            <div className="font-medium text-gray-900 group-hover:text-green-600 transition-colors">
              From Domain Admin to Enterprise Admin
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-green-600" />
        </button>
      </div>

      {/* Last Updated */}
      <div className="mt-8 text-sm text-gray-500">
        Last updated <span className="text-gray-700">6 years ago</span>
      </div>
    </div>
  );
}
