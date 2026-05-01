import { NextResponse } from "next/server";
import { allPosts } from "@/lib/posts";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://chatgpt4mobile.com";

function escapeXml(unsafe: string): string {
  if (!unsafe) return "";
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
    <item>
      <title>${escapeXml("ChatGPT4Mobile – Clean ChatGPT Text on iPhone & Android")}</title>
      <link>${escapeXml(BASE_URL)}</link>
      <description>${escapeXml("The definitive resource for anyone who needs to clean chatgpt text, use a chatgpt text cleaner, or remove chatgpt formatting on iPhone and Android.")}</description>
      <pubDate>${new Date("2026-03-27").toUTCString()}</pubDate>
      <guid isPermaLink="true">${escapeXml(BASE_URL)}</guid>
    </item>
    <item>
      <title>${escapeXml("How to Clean ChatGPT Text on Mobile — Step-by-Step 2026")}</title>
      <link>${escapeXml(`${BASE_URL}/how-to-clean-chatgpt-text-mobile-guide`)}</link>
      <description>${escapeXml("A practical walkthrough for removing markdown symbols, hidden characters, and spacing errors from ChatGPT output on iPhone and Android — before you publish anywhere.")}</description>
      <pubDate>${new Date("2026-03-26").toUTCString()}</pubDate>
      <guid isPermaLink="true">${escapeXml(`${BASE_URL}/how-to-clean-chatgpt-text-mobile-guide`)}</guid>
    </item>
    <item>
      <title>${escapeXml("Best ChatGPT Text Cleanup Tools in 2026")}</title>
      <link>${escapeXml(`${BASE_URL}/best-chatgpt-text-cleanup-tools`)}</link>
      <description>${escapeXml("Compare the best ChatGPT text cleanup tools in 2026, why AI text needs cleaning, and how to choose the right cleaner for publishing workflows.")}</description>
      <pubDate>${new Date("2026-05-01").toUTCString()}</pubDate>
      <guid isPermaLink="true">${escapeXml(`${BASE_URL}/best-chatgpt-text-cleanup-tools`)}</guid>
    </item>
    ${allPosts
      .map(
        (post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${escapeXml(`${BASE_URL}/${post.slug}`)}</link>
      <description>${escapeXml(post.excerpt)}</description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <guid isPermaLink="true">${escapeXml(`${BASE_URL}/${post.slug}`)}</guid>
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
