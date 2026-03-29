import type { Metadata } from 'next';
import { allPosts, getPostsByCategory } from '@/lib/posts';
import type { BlogPost } from '@/lib/types';

export const metadata: Metadata = {
  title: 'ChatGPT4Mobile Blog — ChatGPT Tips, Guides & Text Cleaning',
  description: 'Browse 80+ expert guides on using ChatGPT on mobile, cleaning ChatGPT text, fixing AI formatting issues, and boosting mobile productivity.',
  openGraph: {
    title: 'ChatGPT4Mobile Blog — ChatGPT Tips, Guides & Text Cleaning',
    description: 'Expert guides on ChatGPT mobile usage, text cleaning, formatting fixes, and AI productivity tools.',
    url: 'https://chatgpt4mobile.com/blog',
  },
  twitter: {
    card: 'summary',
    title: 'ChatGPT4Mobile Blog — ChatGPT Tips, Guides & Text Cleaning',
    description: 'Browse 80+ expert guides on ChatGPT mobile usage, text cleaning, and formatting fixes.',
  },
  alternates: {
    canonical: 'https://chatgpt4mobile.com/blog',
  },
};

const CATEGORIES = [
  'ChatGPT Mobile',
  'Clean ChatGPT Text',
  'ChatGPT Formatting',
  'AI Text Tools',
  'Mobile Productivity',
];

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

function PostCard({ post }: { post: BlogPost }) {
  return (
    <article className="flex flex-col gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 hover:border-zinc-700 transition-colors">
      <div className="flex items-center justify-between gap-2">
        <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-300">
          {post.category}
        </span>
        <span className="text-xs text-zinc-500">{formatDate(post.date)}</span>
      </div>
      <h2 className="text-base font-semibold text-zinc-100 leading-snug">
        <a href={`/blog/${post.slug}`} className="hover:text-emerald-300 transition-colors">
          {post.title}
        </a>
      </h2>
      <p className="text-sm text-zinc-400 leading-relaxed line-clamp-3">{post.excerpt}</p>
      <a
        href={`/blog/${post.slug}`}
        className="mt-auto text-sm font-medium text-emerald-300 hover:text-emerald-200"
      >
        Read more →
      </a>
    </article>
  );
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur sticky top-0 z-10">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-300">
              Q-Bot
            </span>
            <a href="/" className="text-sm font-medium text-zinc-400 hover:text-zinc-100">
              ChatGPT4Mobile.com
            </a>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-zinc-400 sm:flex">
            <a href="/blog" className="text-emerald-300">Blog</a>
            <a href="/about" className="hover:text-zinc-100">About</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-12">
        <section className="mb-12 space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            ChatGPT4Mobile <span className="text-emerald-300">Blog</span>
          </h1>
          <p className="max-w-2xl text-lg text-zinc-300">
            Expert guides on using ChatGPT on mobile, cleaning AI text, fixing formatting issues, and maximising your mobile productivity.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <span className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-300">
              80+ Articles
            </span>
            <span className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-300">
              Updated Weekly
            </span>
            <span className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-300">
              Q-Bot Editorial Team
            </span>
          </div>
        </section>

        {CATEGORIES.map((category) => {
          const posts = getPostsByCategory(category);
          if (posts.length === 0) return null;
          return (
            <section key={category} className="mb-14">
              <div className="mb-6 flex items-center gap-3">
                <h2 className="text-xl font-semibold">{category}</h2>
                <span className="rounded-full bg-zinc-800 px-2.5 py-0.5 text-xs text-zinc-400">
                  {posts.length} articles
                </span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            </section>
          );
        })}
      </main>

      <footer className="border-t border-zinc-800 bg-zinc-950/80">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p>© {new Date().getFullYear()} ChatGPT4Mobile.com · Q-Bot.</p>
            <p className="flex gap-3 text-zinc-600">
              <a href="/" className="hover:text-zinc-300">Home</a>
              <span>·</span>
              <a href="/blog" className="hover:text-zinc-300">Blog</a>
              <span>·</span>
              <a href="/about" className="hover:text-zinc-300">About</a>
              <span>·</span>
              <a href="/privacy" className="hover:text-zinc-300">Privacy</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
