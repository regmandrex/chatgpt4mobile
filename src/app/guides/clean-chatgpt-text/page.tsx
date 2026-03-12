export default function CleanChatGPTTextGuide() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <main className="mx-auto flex max-w-3xl flex-col gap-8 px-6 py-16 md:py-20">
        <header className="space-y-3">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-300">
            Guide
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            How to clean ChatGPT text for publishing
          </h1>
          <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
            Use this workflow when you copy a reply from ChatGPT on your phone
            and need it to look like you carefully edited it yourself, not like
            a raw AI dump.
          </p>
        </header>

        <section className="space-y-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
          <h2 className="text-lg font-semibold text-zinc-50">
            1. Copy only the answer you need
          </h2>
          <p>
            When you copy from the ChatGPT app, try to select only the answer,
            not your prompt. Including prompt text makes the result harder to
            scan and sometimes leaks instructions you do not want to share.
          </p>
        </section>

        <section className="space-y-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
          <h2 className="text-lg font-semibold text-zinc-50">
            2. Paste into a cleanup tool instead of directly publishing
          </h2>
          <p>
            On mobile, pasting straight into Twitter/X, Instagram captions, or
            email often reveals extra spaces, strange spacing around bullets,
            and awkward line breaks. A cleanup tool gives you a safe middle
            step: paste, fix, then copy the polished version.
          </p>
          <p>
            Look for tools that can remove double spaces, collapse multiple
            blank lines, and normalize basic punctuation. Many also work
            entirely in your browser, which is better for privacy.
          </p>
        </section>

        <section className="space-y-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
          <h2 className="text-lg font-semibold text-zinc-50">
            3. Reformat into short, scannable blocks
          </h2>
          <p>
            ChatGPT tends to produce tidy paragraphs, but they can still feel
            like a wall of text on a small screen. After cleaning, break the
            reply into short paragraphs or bullets so it is easy to skim on
            mobile.
          </p>
          <p>
            For social posts, aim for 1–3 short sentences per paragraph. For
            email or blog content, use headings and bullets where it makes
            sense. The goal is to keep the AI&apos;s ideas while shaping the
            reading experience for humans.
          </p>
        </section>

        <section className="space-y-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
          <h2 className="text-lg font-semibold text-zinc-50">
            4. Do a quick human pass
          </h2>
          <p>
            Finally, read through the cleaned text once and fix anything that
            sounds off-brand for you. Adjust tone, swap generic phrases, and
            make sure names, links, and calls to action are correct. This last
            30 seconds of editing is what makes AI-assisted writing feel like
            your own.
          </p>
        </section>
      </main>
    </div>
  );
}

