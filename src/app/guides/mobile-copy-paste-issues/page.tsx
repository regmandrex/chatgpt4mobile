export default function MobileCopyPasteIssuesGuide() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <main className="mx-auto flex max-w-3xl flex-col gap-8 px-6 py-16 md:py-20">
        <header className="space-y-3">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-300">
            Guide
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Fixing common ChatGPT mobile copy-paste issues
          </h1>
          <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
            If your pasted ChatGPT replies look nothing like what you saw in the
            app, this guide walks through the most common reasons and quick
            fixes.
          </p>
        </header>

        <section className="space-y-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
          <h2 className="text-lg font-semibold text-zinc-50">
            1. Extra spaces and blank lines
          </h2>
          <p>
            Some mobile keyboards and apps add invisible characters when you
            copy and paste, which show up as extra spaces or random blank lines.
            Run the text through a cleanup tool that can collapse multiple
            spaces and remove empty lines before you publish.
          </p>
        </section>

        <section className="space-y-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
          <h2 className="text-lg font-semibold text-zinc-50">
            2. Broken bullets and numbering
          </h2>
          <p>
            ChatGPT may generate list formatting that does not match what your
            destination app expects. After pasting, quickly scan your bullets
            and numbers. If they look off, convert them to simple dashes or
            manual numbering so they render consistently everywhere.
          </p>
        </section>

        <section className="space-y-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
          <h2 className="text-lg font-semibold text-zinc-50">
            3. Smart quotes, dashes, and symbols
          </h2>
          <p>
            Some fonts and apps treat smart quotes and em dashes differently.
            That can create odd gaps or symbols when you paste into social
            posts, email subject lines, or older CMS editors. A punctuation
            normalizer can quickly turn them into safer plain-text versions.
          </p>
        </section>

        <section className="space-y-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
          <h2 className="text-lg font-semibold text-zinc-50">
            4. Hidden prompts and system messages
          </h2>
          <p>
            It is easy to accidentally copy your own prompt or pieces of the
            system message along with the answer. Before sharing, skim the text
            to remove anything that looks like instructions, internal notes, or
            private context you do not want to expose.
          </p>
        </section>
      </main>
    </div>
  );
}

