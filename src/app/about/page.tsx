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
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is ChatGPT4Mobile?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ChatGPT4Mobile.com is an independent site focused on helping people get cleaner, more publish-ready ChatGPT replies on their phones. We write guides, share workflows, and highlight tools that make mobile AI usage less messy and more professional.",
        },
      },
      {
        "@type": "Question",
        name: "Is ChatGPT4Mobile affiliated with OpenAI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. ChatGPT4Mobile is an independent, community-driven resource. We are not affiliated with, endorsed by, or officially connected to OpenAI in any way. We create guides and tools to help users work with ChatGPT output more effectively on mobile devices.",
        },
      },
      {
        "@type": "Question",
        name: "Does ChatGPT4Mobile store or collect my text?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Any text you paste into our on-page cleaning demos is processed entirely in your browser. Nothing is sent to or stored on our servers. Your text stays on your device at all times.",
        },
      },
      {
        "@type": "Question",
        name: "Why does ChatGPT text need cleaning on mobile?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ChatGPT generates text using markdown formatting and embeds invisible Unicode characters. When you copy and paste this text on a mobile device, the result often includes extra spaces, broken line breaks, asterisks, and hidden characters that look messy in email, social media, or CMS editors. A dedicated cleaning step removes all these artifacts.",
        },
      },
      {
        "@type": "Question",
        name: "Is ChatGPT4Mobile free to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. All guides, articles, and the on-page text cleaning demo on ChatGPT4Mobile.com are completely free to use. No sign-up or account is required.",
        },
      },
    ],
  };

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

