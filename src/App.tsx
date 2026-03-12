import { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { HomePage } from '@/pages/HomePage';
import { BlogPostPage } from '@/pages/BlogPostPage';
import { blogPosts } from '@/data/navigation';

function App() {
  const [currentPath, setCurrentPath] = useState('/');

  const handleNavigate = (path: string) => {
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  // Determine what to render based on current path
  const renderContent = () => {
    if (currentPath === '/') {
      return <HomePage onNavigate={handleNavigate} />;
    }

    if (currentPath.startsWith('/blog/')) {
      const postId = currentPath.replace('/blog/', '');
      const post = blogPosts[postId];
      
      if (post) {
        return <BlogPostPage post={post} onBack={() => handleNavigate('/')} />;
      }
    }

    // Default to home for unknown paths
    return <HomePage onNavigate={handleNavigate} />;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sidebar */}
      <Sidebar currentPath={currentPath} onNavigate={handleNavigate} />

      {/* Main Content */}
      <main className="ml-72 min-h-screen">
        <div className="p-8 lg:p-12">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}

export default App;
