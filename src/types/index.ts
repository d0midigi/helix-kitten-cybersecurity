export interface NavItem {
  id: string;
  title: string;
  href?: string;
  items?: NavItem[];
  pinned?: boolean;
}

export interface Article {
  id: string;
  title: string;
  description?: string;
  href: string;
  category?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
  category: string;
}
