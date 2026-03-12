import { useState } from 'react';
import { ChevronRight, ChevronDown, Shield, Search, Command } from 'lucide-react';
import type { NavItem } from '@/types';
import { navigationItems } from '@/data/navigation';

interface SidebarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

interface NavItemComponentProps {
  item: NavItem;
  currentPath: string;
  onNavigate: (path: string) => void;
  depth?: number;
}

function NavItemComponent({ item, currentPath, onNavigate, depth = 0 }: NavItemComponentProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const hasChildren = item.items && item.items.length > 0;
  const isActive = item.href === currentPath;
  const isChildActive = hasChildren && item.items?.some(child => child.href === currentPath);

  if (hasChildren) {
    return (
      <div className="mb-1">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`sidebar-group-label w-full text-left ${isChildActive ? 'text-green-600' : ''}`}
          style={{ paddingLeft: `${12 + depth * 12}px` }}
        >
          <span className="flex items-center gap-2">
            {isExpanded ? (
              <ChevronDown className="w-4 h-4 text-gray-400" />
            ) : (
              <ChevronRight className="w-4 h-4 text-gray-400" />
            )}
            <span className="text-sm">{item.title}</span>
          </span>
        </button>
        {isExpanded && (
          <div className="mt-1">
            {item.items?.map((child) => (
              <NavItemComponent
                key={child.id}
                item={child}
                currentPath={currentPath}
                onNavigate={onNavigate}
                depth={depth + 1}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <button
      onClick={() => item.href && onNavigate(item.href)}
      className={`sidebar-item w-full text-left ${isActive ? 'active' : ''}`}
      style={{ paddingLeft: `${12 + depth * 12}px` }}
    >
      <span className="text-sm">{item.title}</span>
    </button>
  );
}

export function Sidebar({ currentPath, onNavigate }: SidebarProps) {
  const pinnedItems = navigationItems.filter(item => item.pinned);
  const regularItems = navigationItems.filter(item => !item.pinned);

  return (
    <aside className="w-72 bg-white border-r border-gray-200 h-screen flex flex-col fixed left-0 top-0">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <button 
          onClick={() => onNavigate('/')}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <span className="font-semibold text-gray-900">Red Team Notes</span>
        </button>
      </div>

      {/* Search */}
      <div className="p-3 border-b border-gray-200">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-xs text-gray-400">
            <Command className="w-3 h-3" />
            <span>K</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto p-3">
        {/* Pinned Section */}
        <div className="mb-4">
          <div className="px-3 py-2 text-xs font-medium text-gray-400 uppercase tracking-wider">
            Pinned
          </div>
          {pinnedItems.map((item) => (
            <NavItemComponent
              key={item.id}
              item={item}
              currentPath={currentPath}
              onNavigate={onNavigate}
            />
          ))}
        </div>

        {/* Regular Items */}
        <div>
          {regularItems.map((item) => (
            <NavItemComponent
              key={item.id}
              item={item}
              currentPath={currentPath}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          <span>Powered by GitBook</span>
        </a>
      </div>
    </aside>
  );
}
