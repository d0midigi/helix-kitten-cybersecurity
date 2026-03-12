import { ArrowLeft, Calendar, Folder, Copy, Check } from 'lucide-react';
import type { BlogPost } from '@/types';
import React, { useState } from 'react';

interface BlogPostPageProps {
  post: BlogPost;
  onBack: () => void;
}

// Simple markdown-like parser for the content
function parseContent(content: string) {
  const lines = content.trim().split('\n');
  const elements: React.ReactNode[] = [];
  let inCodeBlock = false;
  let codeContent = '';
  let codeLanguage = '';

  lines.forEach((line, index) => {
    const trimmedLine = line.trim();

    // Code block handling
    if (trimmedLine.startsWith('```')) {
      if (inCodeBlock) {
        // End of code block
        elements.push(
          <CodeBlock 
            key={`code-${index}`} 
            language={codeLanguage} 
            code={codeContent.trim()} 
          />
        );
        codeContent = '';
        codeLanguage = '';
        inCodeBlock = false;
      } else {
        // Start of code block
        codeLanguage = trimmedLine.slice(3).trim();
        inCodeBlock = true;
      }
      return;
    }

    if (inCodeBlock) {
      codeContent += line + '\n';
      return;
    }

    // Headers
    if (trimmedLine.startsWith('## ')) {
      elements.push(
        <h2 key={index} className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          {trimmedLine.slice(3)}
        </h2>
      );
      return;
    }

    if (trimmedLine.startsWith('### ')) {
      elements.push(
        <h3 key={index} className="text-xl font-semibold text-gray-800 mt-8 mb-3">
          {trimmedLine.slice(4)}
        </h3>
      );
      return;
    }

    // Lists
    if (trimmedLine.startsWith('- ') || trimmedLine.startsWith('* ')) {
      elements.push(
        <li key={index} className="ml-4 text-gray-600 leading-relaxed">
          {parseInlineText(trimmedLine.slice(2))}
        </li>
      );
      return;
    }

    // Numbered lists
    const numberedMatch = trimmedLine.match(/^\d+\.\s(.+)$/);
    if (numberedMatch) {
      elements.push(
        <li key={index} className="ml-4 text-gray-600 leading-relaxed list-decimal">
          {parseInlineText(numberedMatch[1])}
        </li>
      );
      return;
    }

    // Empty line
    if (trimmedLine === '') {
      elements.push(<div key={index} className="h-4" />);
      return;
    }

    // Regular paragraph
    elements.push(
      <p key={index} className="text-gray-600 leading-relaxed mb-4">
        {parseInlineText(trimmedLine)}
      </p>
    );
  });

  return elements;
}

function parseInlineText(text: string): React.ReactNode {
  // Handle inline code
  const parts = text.split(/(`[^`]+`)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('`') && part.endsWith('`')) {
          return (
            <code key={i} className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">
              {part.slice(1, -1)}
            </code>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

function CodeBlock({ language, code }: { language: string; code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group my-6">
      <div className="flex items-center justify-between bg-gray-800 px-4 py-2 rounded-t-lg">
        <span className="text-xs text-gray-400 uppercase">{language || 'text'}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="rounded-t-none mt-0">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export function BlogPostPage({ post, onBack }: BlogPostPageProps) {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-sm text-gray-500 hover:text-green-600 transition-colors mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Active Directory & Kerberos Abuse</span>
      </button>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
          <span className="flex items-center gap-1">
            <Folder className="w-4 h-4" />
            {post.category}
          </span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900">{post.title}</h1>
      </div>

      {/* Content */}
      <article className="blog-content">
        {parseContent(post.content)}
      </article>

      {/* Footer Navigation */}
      <div className="mt-16 pt-6 border-t border-gray-200">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-green-600 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to all articles</span>
        </button>
      </div>
    </div>
  );
}