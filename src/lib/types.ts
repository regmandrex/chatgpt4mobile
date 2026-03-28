export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  date: string; // YYYY-MM-DD
  author: string;
  category: string;
  excerpt: string;
  content: string; // HTML content
}
