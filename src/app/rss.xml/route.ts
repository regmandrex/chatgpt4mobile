import { NextResponse } from "next/server";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://chatgpt4mobile.com";

const feedItems = [
  {
    title: "ChatGPT4Mobile · Q-Bot – Clean ChatGPT text on your phone",
    link: BASE_URL,
    description:
      "Smart ChatGPT on mobile. Clean, shareable replies in seconds. Guides and tips for cleaning up AI text, removing spaces, watermarks, and formatting for publishing.",
    pubDate: "2025-03-12T00:00:00.000Z",
  },
  {
    title: "How to clean ChatGPT text for publishing",
    link: `${BASE_URL}/guides/clean-chatgpt-text`,
    description:
      "Step-by-step workflow for turning raw ChatGPT replies into clean, readable content without the extra spaces, prompts, or weird line breaks.",
    pubDate: "2025-03-12T00:00:00.000Z",
  },
  {
    title: "Fixing common ChatGPT mobile copy-paste issues",
    link: `${BASE_URL}/guides/mobile-copy-paste-issues`,
    description:
      "Why pasted ChatGPT replies look different from what you see in the app, and how to fix extra spaces, broken bullets, smart quotes, and hidden prompts.",
    pubDate: "2025-03-12T00:00:00.000Z",
  },
  {
    title: "How to clean ChatGPT text on Android",
    link: `${BASE_URL}/guides/how-to-clean-chatgpt-text-on-android`,
    description:
      "Copy from the app, clean in the browser, then paste into Gmail, Keep, or social—no extra apps. Works with split screen and bookmarks.",
    pubDate: "2025-03-12T00:00:00.000Z",
  },
  {
    title: "ChatGPT watermark remover for mobile",
    link: `${BASE_URL}/guides/chatgpt-watermark-remover-mobile`,
    description:
      "Why watermarks and labels appear when you copy, and how to remove them before sharing or publishing.",
    pubDate: "2025-03-12T00:00:00.000Z",
  },
  {
    title: "ChatGPT text cleaner on iPhone",
    link: `${BASE_URL}/guides/chatgpt-text-cleaner-iphone`,
    description:
      "Clean spacing and formatting from ChatGPT replies on iPhone using Safari and a web-based cleanup tool.",
    pubDate: "2025-03-12T00:00:00.000Z",
  },
  {
    title: "Best ChatGPT cleanup tools for mobile",
    link: `${BASE_URL}/best-chatgpt-cleanup-tools`,
    description:
      "What to look for in a cleanup tool—space removal, watermark stripping, in-browser processing—and how to use one on your phone.",
    pubDate: "2025-03-12T00:00:00.000Z",
  },
];

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>ChatGPT4Mobile · Q-Bot</title>
    <link>${escapeXml(BASE_URL)}</link>
    <description>Clean ChatGPT text on your phone – guides and tips for mobile workflows, cleanup tools, and publish-ready replies.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${escapeXml(BASE_URL)}/rss.xml" rel="self" type="application/rss+xml"/>
    ${feedItems
      .map(
        (item) => `
    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${escapeXml(item.link)}</link>
      <description>${escapeXml(item.description)}</description>
      <pubDate>${item.pubDate}</pubDate>
      <guid isPermaLink="true">${escapeXml(item.link)}</guid>
    </item>`
      )
      .join("")}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
