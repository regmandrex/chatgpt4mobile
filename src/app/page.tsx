import Breadcrumbs from "./components/breadcrumbs";
import CleanTextDemo from "./components/clean-text-demo";

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why does copied ChatGPT text look weird on my phone?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Mobile apps and keyboards often add invisible characters, extra spaces, and line breaks when you copy and paste. ChatGPT replies can also include formatting that does not map cleanly to your destination app, so it shows up as messy text.",
        },
      },
      {
        "@type": "Question",
        name: "Do I always need a separate cleanup tool?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "You can edit replies by hand, but a cleanup tool is faster and more consistent, especially if you are posting several times a day or reusing ChatGPT content across social media, email, and documents.",
        },
      },
      {
        "@type": "Question",
        name: "Is it safe to paste my prompts and answers into a cleaner?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "For sensitive content, look for tools that process text in your browser rather than sending it to a server. In general, avoid pasting private data such as passwords, financial details, or personal health information into any third-party tool.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-300">
              Q-Bot
            </span>
            <span className="text-sm font-medium text-zinc-400">
              ChatGPT4Mobile.com
            </span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-zinc-400 sm:flex">
            <a href="#features" className="hover:text-zinc-100">
              Features
            </a>
            <a href="#cleanup" className="hover:text-zinc-100">
              Cleanup tools
            </a>
            <a href="/guides" className="hover:text-zinc-100">
              Guides
            </a>
            <a href="/about" className="hover:text-zinc-100">
              About
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto flex max-w-5xl flex-col gap-20 px-6 py-12 md:py-20">
        <Breadcrumbs items={[{ label: "Home" }]} />
        <section className="grid gap-10 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] md:items-center">
          <div className="space-y-6">
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              Smart ChatGPT on mobile.{" "}
              <span className="text-emerald-300">
                Clean, shareable replies in seconds.
              </span>
            </h1>
            <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
              ChatGPT4Mobile helps you chat on the go, then tidy up the mess:
              extra spaces, awkward line breaks, stray watermarks, and weird
              punctuation that appear when you copy replies from the app.
            </p>
            <div className="space-y-3 text-sm text-zinc-300">
              <p className="font-medium text-zinc-100">
                Built to pair perfectly with a dedicated suite of GPT cleanup
                tools that remove extra spaces, strip watermarks, fix em dashes,
                and prepare replies for publishing or clients.
              </p>
              <ul className="grid gap-1.5 text-sm text-zinc-300 sm:grid-cols-2">
                <li>• Remove extra spaces and blank lines</li>
                <li>• Strip ChatGPT / watermark text</li>
                <li>• Fix em dashes and punctuation</li>
                <li>• Prepare replies for publishing or clients</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-3 pt-2 text-sm">
              <a
                href="#cleanup"
                className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-5 py-2.5 font-medium text-zinc-950 shadow-lg shadow-emerald-500/30 hover:bg-emerald-300"
              >
                How to clean ChatGPT text
              </a>
              <a
                href="/guides"
                className="inline-flex items-center justify-center rounded-full border border-zinc-700 px-5 py-2.5 font-medium text-zinc-100 hover:border-zinc-500 hover:bg-zinc-900"
              >
                Learn mobile best practices
              </a>
            </div>

            <p className="text-xs text-zinc-500">
              ChatGPT4Mobile.com is an independent resource site focused on
              improving how ChatGPT fits into your mobile workflow.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/80 p-5 shadow-xl shadow-black/50">
            <div className="mb-4 flex items-center justify-between text-xs text-zinc-400">
              <span className="rounded-full bg-zinc-800 px-2 py-0.5 text-[11px]">
                Q-Bot mobile preview
              </span>
              <span>Powered by OpenAI</span>
            </div>
            <div className="space-y-3 rounded-2xl bg-zinc-950 p-4">
              <div className="space-y-2 text-xs">
                <div className="inline-flex max-w-[90%] rounded-2xl bg-emerald-500/10 px-3 py-2 text-emerald-100">
                  “Give me 5 TikTok hooks for explaining how ChatGPT cleanup
                  tools work on mobile.”
                </div>
                <div className="inline-flex max-w-[92%] rounded-2xl bg-zinc-800/70 px-3 py-2 text-zinc-100">
                  Sure! Here are 5 quick hook ideas you can copy, paste, and
                  then polish with a text cleanup tool…
                </div>
              </div>
              <div className="rounded-xl bg-zinc-900 px-3 py-2 text-[11px] text-zinc-400">
                Copy the reply → open your preferred GPT cleanup tool → remove
                spaces, watermarks, and em dashes → paste into your social post
                or document.
              </div>
            </div>
          </div>
        </section>

        <section id="cleanup" className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">
            How to clean ChatGPT text (short guide)
          </h2>
          <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-start">
              <article className="space-y-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
                <p>
                  ChatGPT is great at generating ideas, but the text you copy
                  from the app is rarely ready to publish. On mobile, you&apos;ll
                  often see extra spaces, random line breaks, leftover prompts,
                  or watermarks mixed in with the answer. Cleaning that up
                  before you post or send it makes a big difference in how
                  professional your message feels.
                </p>
                <p>
                  A simple workflow is: generate your reply in ChatGPT → copy
                  it → paste into a text cleanup tool (to{" "}
                  <a
                    href="https://gptcleanuptools.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-300 underline underline-offset-2 hover:text-emerald-200"
                  >
                    clean chatgpt text
                  </a>
                  {" "}step-by-step, GPTcleanuptools.com walks you through it) → remove extra
                  spaces, blank lines, or watermarks → then paste the polished
                  version into Twitter/X, email, notes, or your CMS. This takes
                  a few seconds on your phone but removes the &quot;AI
                  copy-paste&quot; look that people notice.
                </p>
                <p>
                  You can also use cleanup tools to normalize punctuation (for
                  example, fixing em dashes and smart quotes), strip
                  signatures, and quickly reformat long paragraphs into
                  shorter, scannable blocks. The result is content that still
                  comes from ChatGPT, but reads like you took the time to edit
                  it yourself.
                </p>
              </article>
              <div className="space-y-4 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 text-sm text-zinc-300">
                <h3 className="text-sm font-semibold text-zinc-100">
                  Quick cleanup checklist
                </h3>
                <ul className="list-disc space-y-1.5 pl-4">
                  <li>Remove double spaces and trailing spaces.</li>
                  <li>Delete leftover prompts or instructions in the answer.</li>
                  <li>
                    Strip visible and hidden watermarks, signatures, or export
                    labels.
                  </li>
                  <li>Fix em dashes, quotes, and bullet characters.</li>
                  <li>Break long walls of text into short paragraphs.</li>
                </ul>
                <p className="text-xs text-zinc-400">
                  Hidden watermarks often show up as repeated phrases, source
                  tags, or tiny bits of tracking text inside your copy. A good
                  cleanup tool can scan for those patterns, show you how many
                  words and hidden markers are in the text, and remove them
                  before you share screenshots, transcripts, or repurposed AI
                  content.
                </p>
              </div>
            </div>

            <CleanTextDemo />
          </div>
        </section>

        <section
          id="resources"
          className="space-y-6 border-t border-zinc-800 pt-10"
        >
          <h2 className="text-2xl font-semibold tracking-tight">
            Learn more about ChatGPT and mobile best practices
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-zinc-300 sm:text-base">
            Below are curated resources from the wider ecosystem that help you
            get more from ChatGPT on your phone, from official docs to
            high-quality guides on prompts and productivity.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <article className="flex flex-col gap-2 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 text-sm text-zinc-300">
              <h3 className="text-sm font-semibold text-zinc-100">
                Official ChatGPT &amp; OpenAI resources
              </h3>
              <ul className="list-disc space-y-1 pl-4">
                <li>
                  <a
                    href="https://help.openai.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-300 underline underline-offset-2"
                  >
                    OpenAI Help Center
                  </a>
                  {" – "}learn the basics of ChatGPT features and account
                  settings.
                </li>
                <li>
                  <a
                    href="https://platform.openai.com/docs/introduction"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-300 underline underline-offset-2"
                  >
                    OpenAI documentation
                  </a>
                  {" – "}technical docs if you build your own mobile workflows.
                </li>
              </ul>
            </article>
            <article className="flex flex-col gap-2 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 text-sm text-zinc-300">
              <h3 className="text-sm font-semibold text-zinc-100">
                Guides on prompts, writing, and cleanup
              </h3>
              <p>
                We highlight actionable guides on prompt design, on-the-go
                writing, and editing workflows so you can combine ChatGPT,
                mobile apps, and cleanup tools effectively.
              </p>
              <p className="text-xs text-zinc-500">
                As we publish more tutorials, we&apos;ll add detailed blog posts
                here and link out to trusted, high-authority resources.
              </p>
            </article>
          </div>

          <div className="mt-4 space-y-3 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 text-sm text-zinc-300">
            <h3 className="text-sm font-semibold text-zinc-100">
              FAQ: Cleaning ChatGPT text on mobile
            </h3>
            <dl className="space-y-3">
              <div>
                <dt className="font-medium text-zinc-100">
                  Why does copied ChatGPT text look weird on my phone?
                </dt>
                <dd className="text-zinc-300">
                  Mobile apps and keyboards often add invisible characters,
                  extra spaces, and line breaks when you copy and paste. ChatGPT
                  replies can also include formatting that doesn&apos;t map
                  cleanly to your destination app, so it shows up as messy text.
                </dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-100">
                  Do I always need a separate cleanup tool?
                </dt>
                <dd className="text-zinc-300">
                  You can edit replies by hand, but a cleanup tool is faster and
                  more consistent—especially if you&apos;re posting several
                  times a day or reusing ChatGPT content across social media,
                  email, and documents.
                </dd>
              </div>
              <div>
                <dt className="font-medium text-zinc-100">
                  Is it safe to paste my prompts and answers into a cleaner?
                </dt>
                <dd className="text-zinc-300">
                  For sensitive content, look for tools that process text in
                  your browser rather than sending it to a server. In general,
                  avoid pasting private data (passwords, financial details,
                  personal health info) into any third-party tool.
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-900/80 bg-zinc-950/80">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p>© {new Date().getFullYear()} ChatGPT4Mobile.com · Q-Bot.</p>
            <p className="text-zinc-600">
              Guides for getting cleaner, more publish-ready ChatGPT replies on
              your phone.
            </p>
            <p className="space-x-3 text-zinc-600">
              <a href="/about" className="hover:text-zinc-300">
                About
              </a>
              <span>·</span>
              <a href="/privacy" className="hover:text-zinc-300">
                Privacy
              </a>
            </p>
          </div>
          <div className="flex items-center gap-3 text-zinc-600">
            <span className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
              Social
            </span>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="hover:text-emerald-300"
            >
              X
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="hover:text-emerald-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
}
