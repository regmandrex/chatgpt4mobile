import type { BlogPost } from './types';
export type { BlogPost };

import { chatgptMobilePosts } from './posts-chatgpt-mobile';
import { cleanTextPosts } from './posts-clean-text';
import { formattingPosts } from './posts-formatting';
import { aiToolsPosts } from './posts-ai-tools';
import { mobileProductivityPosts } from './posts-mobile-productivity';
import { cleanupToolsPosts } from './posts-cleanup-tools';
import { nigeriaHostingPosts } from './posts-nigeria-hosting';

export const allPosts: BlogPost[] = [
  ...chatgptMobilePosts,
  ...cleanTextPosts,
  ...formattingPosts,
  ...aiToolsPosts,
  ...mobileProductivityPosts,
  ...cleanupToolsPosts,
  ...nigeriaHostingPosts,
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export function getPostBySlug(slug: string): BlogPost | undefined {
  return allPosts.find(p => p.slug === slug);
}

const HOME_EXCLUDED_SLUGS = ['best-way-to-host-ai-website-nigeria'];

export function getLatestPosts(n: number): BlogPost[] {
  return allPosts.filter(p => !HOME_EXCLUDED_SLUGS.includes(p.slug)).slice(0, n);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return allPosts.filter(p => p.category === category);
}

export function getRelatedPosts(post: BlogPost, n: number): BlogPost[] {
  return allPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, n);
}
