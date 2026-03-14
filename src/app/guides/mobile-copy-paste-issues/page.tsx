import type { Metadata } from "next";
import Breadcrumbs from "../../components/breadcrumbs";

export const metadata: Metadata = {
  title: "Fixing common ChatGPT mobile copy-paste issues",
  description:
    "Why pasted ChatGPT replies look different from what you see in the app, and how to fix extra spaces, broken bullets, smart quotes, and hidden prompts.",
};

export default function MobileCopyPasteIssuesGuide() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <main className="mx-auto flex max-w-3xl flex-col gap-8 px-6 py-16 md:py-20">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Guides", href: "/guides" },
            { label: "Fixing common ChatGPT mobile copy-paste issues" },
          ]}
        />
        <header className="space-y-3">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-300">
            Guide
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Fixing common ChatGPT mobile copy-paste issues
          </h1>
          <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
            If your pasted ChatGPT replies look nothing like what you saw in the
            app—extra spaces, broken bullets, or weird symbols—you are not
            alone. This guide walks through the most common causes and quick
            fixes so you can paste into email, social, or notes without
            surprises.
          </p>
        </header>

        <section className="space-y-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
          <h2 className="text-lg font-semibold text-zinc-50">
            Why mobile copy-paste behaves differently
          </h2>
          <p>
            On a phone, text goes through several layers before it reaches your
            clipboard: the ChatGPT app (or web view), the system clipboard,
            and sometimes the keyboard or a third-party app. Each layer can
            add or change characters. What looks like a single space in the app
            might be a non-breaking space, a tab, or multiple regular spaces.
            Line breaks can be stored as different control characters
            depending on the app and OS. When you paste into Gmail, Twitter, or
            Notes, that app interprets those characters in its own way, which
            is why the result often looks messier than the source.
          </p>
        </section>

        <section className="space-y-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
          <h2 className="text-lg font-semibold text-zinc-50">
            1. Extra spaces and blank lines
          </h2>
          <p>
            Some mobile keyboards and apps add invisible characters when you
            copy and paste, which show up as extra spaces or random blank
            lines. The ChatGPT interface itself may also insert spaces around
            list items or after headings. When you paste into a strict
            character-limited field (like a meta description or a tweet), those
            extras waste space and can make the text look sloppy.
          </p>
          <p>
            Run the text through a cleanup tool that can collapse multiple
            spaces to one and remove empty lines. Do this before pasting into
            your final destination. If you paste first and then try to fix in
            the destination app, you may find that the app has already
            normalized or altered the spacing in a way that is hard to undo.
          </p>
        </section>

        <section className="space-y-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
          <h2 className="text-lg font-semibold text-zinc-50">
            2. Broken bullets and numbering
          </h2>
          <p>
            ChatGPT often generates lists with proper list formatting. On
            mobile, that formatting may not survive the copy-paste chain. Bullets
            can turn into odd Unicode symbols, and numbers can become plain
            text or get misaligned. Some apps expect a simple dash or asterisk
            for a list; others expect specific characters. When the source and
            destination do not match, you get broken lists.
          </p>
          <p>
            After pasting, quickly scan your bullets and numbers. If they look
            off—wrong font, wrong character, or no indent—convert them to
            simple dashes or manual numbering (1., 2., 3.) so they render
            consistently everywhere. A cleanup tool that normalizes list
            markers can help; otherwise, do a quick find-and-replace or manual
            edit in the cleanup step before you paste into the final app.
          </p>
        </section>

        <section className="space-y-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
          <h2 className="text-lg font-semibold text-zinc-50">
            3. Smart quotes, dashes, and symbols
          </h2>
          <p>
            ChatGPT output often uses typographic (smart) quotes and em dashes.
            These look fine in the app, but some fonts and apps treat them
            differently. In email subject lines, older CMS editors, or
            plain-text contexts, they can show up as boxes, question marks, or
            odd gaps. That is especially common when the destination uses a
            limited character set or a different encoding.
          </p>
          <p>
            A punctuation normalizer can quickly turn smart quotes into
            straight quotes and em dashes into double hyphens or plain hyphens.
            Run this step in your cleanup tool before pasting into
            character-sensitive or legacy systems. For modern apps and web
            content, you can often leave smart punctuation as is, but if you
            see broken symbols after pasting, add normalization to your
            workflow.
          </p>
        </section>

        <section className="space-y-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
          <h2 className="text-lg font-semibold text-zinc-50">
            4. Hidden prompts and system messages
          </h2>
          <p>
            It is easy to accidentally copy your own prompt or pieces of the
            system message along with the answer. On a small screen, selection
            handles are hard to place precisely. You might think you selected
            only the reply, but the copied block includes the first line of
            your question or a &quot;Remember: …&quot; style note. Before
            sharing, skim the text to remove anything that looks like
            instructions, internal notes, or private context you do not want
            to expose.
          </p>
          <p>
            If you use custom instructions or a system prompt, be especially
            careful. Those rarely appear in the visible chat, but in some
            export or copy flows they can slip into the output. A quick read
            before you paste into a client email or public post can save you
            from leaking context or sounding like a robot.
          </p>
        </section>

        <section className="space-y-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
          <h2 className="text-lg font-semibold text-zinc-50">
            5. Encoding and language issues
          </h2>
          <p>
            If you work in multiple languages or use special characters (e.g.
            accents, symbols, or non-Latin scripts), paste can sometimes
            corrupt them. The clipboard may store text in one encoding and the
            destination app expect another. If you see mojibake (garbled
            characters) or missing accents, try cleaning the text in a
            browser-based tool that preserves UTF-8, then paste again. Avoid
            copying through intermediate apps that might re-encode the text.
          </p>
        </section>

        <section className="space-y-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
          <h2 className="text-lg font-semibold text-zinc-50">
            Recommended workflow
          </h2>
          <p>
            To avoid most of these issues, use a consistent flow: copy from
            ChatGPT, paste into a cleanup tool in your browser, run space and
            punctuation normalization (and watermark removal if needed), then
            copy from the tool and paste into your final destination. Doing
            this every time takes a few extra seconds but keeps your pasted
            content predictable and professional. For more detail on the
            cleanup step, see our guide on how to clean ChatGPT text for
            publishing.
          </p>
        </section>
      </main>
    </div>
  );
}
