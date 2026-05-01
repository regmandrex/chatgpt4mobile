import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allPosts, getPostBySlug, getRelatedPosts } from '@/lib/posts';
import type { BlogPost } from '@/lib/types';
import Breadcrumbs from '@/app/components/breadcrumbs';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://chatgpt4mobile.com';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${SITE_URL}/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: 'summary',
      title: post.metaTitle,
      description: post.metaDescription,
    },
    alternates: {
      canonical: `${SITE_URL}/${post.slug}`,
    },
  };
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function RelatedPostCard({ post }: { post: BlogPost }) {
  return (
    <article className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 hover:border-zinc-700 transition-colors">
      <span className="mb-2 inline-block rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-semibold text-emerald-300">
        {post.category}
      </span>
      <h3 className="text-sm font-semibold text-zinc-100 leading-snug mb-2">
        <a href={`/${post.slug}`} className="hover:text-emerald-300 transition-colors">
          {post.title}
        </a>
      </h3>
      <p className="text-xs text-zinc-400 line-clamp-2">{post.excerpt}</p>
    </article>
  );
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post, 3);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: 'Q-Bot Editorial Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ChatGPT4Mobile',
      url: SITE_URL,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/${post.slug}`,
    },
    url: `${SITE_URL}/${post.slug}`,
  };

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
            <a href="/blog" className="hover:text-zinc-100 text-emerald-300">Blog</a>
            <a href="/about" className="hover:text-zinc-100">About</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-10">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Blog', href: '/blog' },
              { label: post.title },
            ]}
          />
        </div>

        <article className="space-y-6">
          <header className="space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400">
              <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-300">
                {post.category}
              </span>
              <span>{formatDate(post.date)}</span>
              <span>·</span>
              <span>{post.author}</span>
            </div>
            <h1 className="text-3xl font-semibold tracking-tight leading-tight sm:text-4xl">
              {post.title}
            </h1>
            <p className="text-lg text-zinc-300">{post.excerpt}</p>
          </header>

          <div className="border-t border-zinc-800 pt-8">
            <div
              className="prose-content max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>

        {related.length > 0 && (
          <section className="mt-14 border-t border-zinc-800 pt-10">
            <h2 className="mb-6 text-xl font-semibold">Related Articles</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {related.map((p) => (
                <RelatedPostCard key={p.slug} post={p} />
              ))}
            </div>
          </section>
        )}

        <div className="mt-10 border-t border-zinc-800 pt-6 text-center">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-100 hover:border-zinc-500 hover:bg-zinc-900 transition-colors"
          >
            ← Back to Blog
          </a>
        </div>
      </main>

      <footer className="border-t border-zinc-800 bg-zinc-950/80 mt-12">
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </div>
  );
}
