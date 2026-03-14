import Breadcrumbs from "../components/breadcrumbs";

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <main className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-16 md:py-20">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Guides" }]} />
        <header className="space-y-3">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-300">
            Guides
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Make ChatGPT replies look clean on mobile.
          </h1>
          <p className="max-w-3xl text-sm leading-relaxed text-zinc-300 sm:text-base">
            Short, practical guides on fixing messy copy-paste issues, cleaning
            up AI text, and getting publish-ready results directly from your
            phone.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          <a
            href="/guides/clean-chatgpt-text"
            className="group flex flex-col gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 text-sm text-zinc-300 hover:border-emerald-400/60 hover:bg-zinc-900"
          >
            <h2 className="text-base font-semibold text-zinc-50 group-hover:text-emerald-200">
              How to clean ChatGPT text for publishing
            </h2>
            <p>
              Step-by-step workflow for turning raw ChatGPT replies into clean,
              readable content without the extra spaces, prompts, or weird line
              breaks.
            </p>
            <p className="text-xs text-zinc-500">3–4 minute read</p>
          </a>

          <a
            href="/guides/mobile-copy-paste-issues"
            className="group flex flex-col gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 text-sm text-zinc-300 hover:border-emerald-400/60 hover:bg-zinc-900"
          >
            <h2 className="text-base font-semibold text-zinc-50 group-hover:text-emerald-200">
              Fixing common ChatGPT mobile copy-paste issues
            </h2>
            <p>
              Why copied AI text looks different from what you see on screen,
              and how to avoid broken formatting when pasting into social,
              email, or notes apps.
            </p>
            <p className="text-xs text-zinc-500">4 minute read</p>
          </a>
        </section>
      </main>
    </div>
  );
}

