import type { Metadata } from "next";
import Breadcrumbs from "../components/breadcrumbs";

export const metadata: Metadata = {
  title: "About ChatGPT4Mobile — Who We Are & Our Mission",
  description:
    "Learn about ChatGPT4Mobile (Q-Bot) — an independent site helping you clean ChatGPT text on mobile. Guides, workflows, and tools for publish-ready AI output.",
  openGraph: {
    title: "About ChatGPT4Mobile — Who We Are & Our Mission",
    description:
      "An independent site helping you clean ChatGPT text on mobile. Guides, workflows, and tools for publish-ready AI output.",
    url: "https://chatgpt4mobile.com/about",
  },
  twitter: {
    card: "summary",
    title: "About ChatGPT4Mobile",
    description:
      "Learn about ChatGPT4Mobile — guides, workflows, and tools for cleaning ChatGPT text on mobile.",
  },
  alternates: {
    canonical: "https://chatgpt4mobile.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <main className="mx-auto flex max-w-3xl flex-col gap-6 px-6 py-16 md:py-20">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
        <header className="space-y-3">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-300">
            About
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            What is ChatGPT4Mobile?
          </h1>
          <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
            ChatGPT4Mobile.com is a small independent site focused on helping
            people get cleaner, more publish-ready ChatGPT replies on their
            phones. We write guides, share workflows, and highlight tools that
            make mobile AI usage less messy and more professional.
          </p>
        </header>

        <section className="space-y-3 text-sm leading-relaxed text-zinc-300 sm:text-base">
          <h2 className="text-lg font-semibold text-zinc-50">
            Why we care about cleanup
          </h2>
          <p>
            Copying AI output straight into social posts, email, or documents
            often leaves behind extra spaces, broken line breaks, and subtle
            watermarks. On mobile this is especially noticeable. Our goal is to
            show simple ways to fix that so your final content still benefits
            from AI, but reads as if you polished it yourself.
          </p>
        </section>

        <section className="space-y-3 text-sm leading-relaxed text-zinc-300 sm:text-base">
          <h2 className="text-lg font-semibold text-zinc-50">
            How this site is funded
          </h2>
          <p>
            ChatGPT4Mobile.com is run as a side project. From time to time we
            may mention or link to tools we build or maintain. When we do, we
            try to keep those mentions clearly labeled and only recommend tools
            that we actually use in our own workflows.
          </p>
        </section>
      </main>
    </div>
  );
}

