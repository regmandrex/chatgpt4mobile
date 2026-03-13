export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <main className="mx-auto flex max-w-3xl flex-col gap-6 px-6 py-16 md:py-20">
        <header className="space-y-3">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-300">
            Privacy
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Privacy policy
          </h1>
          <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
            This page explains what limited information is collected when you
            use ChatGPT4Mobile.com and how we handle it.
          </p>
        </header>

        <section className="space-y-3 text-sm leading-relaxed text-zinc-300 sm:text-base">
          <h2 className="text-lg font-semibold text-zinc-50">
            Analytics and logging
          </h2>
          <p>
            We may use basic, privacy-friendly analytics to understand overall
            traffic patterns, such as which pages are popular and which devices
            people use. These analytics are aggregated and are not used to
            personally identify you.
          </p>
        </section>

        <section className="space-y-3 text-sm leading-relaxed text-zinc-300 sm:text-base">
          <h2 className="text-lg font-semibold text-zinc-50">
            Text you paste into demos
          </h2>
          <p>
            Any text you paste into on-page demos is processed in your browser
            only and is not stored on our servers. Still, you should avoid
            pasting highly sensitive information such as passwords, financial
            details, or private health data into any online tool.
          </p>
        </section>

        <section className="space-y-3 text-sm leading-relaxed text-zinc-300 sm:text-base">
          <h2 className="text-lg font-semibold text-zinc-50">
            Contact and updates
          </h2>
          <p>
            If this policy changes, we&apos;ll update this page with a new
            &quot;last updated&quot; date. For questions about this policy,
            please reach out via the contact methods listed on our main site.
          </p>
        </section>
      </main>
    </div>
  );
}

