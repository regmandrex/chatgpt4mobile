import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://chatgpt4mobile.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ChatGPT4Mobile – Clean ChatGPT Text on Mobile",
    template: "%s | ChatGPT4Mobile",
  },
  description:
    "ChatGPT4Mobile (Q-Bot) helps you use ChatGPT on your phone and clean up replies with GPTcleanuptools.com – remove extra spaces, watermarks, and messy punctuation in seconds.",
  keywords: [
    "clean chatgpt text",
    "chatgpt text cleaner",
    "remove chatgpt formatting",
    "chatgpt mobile",
    "clean ai text",
    "chatgpt iphone",
    "chatgpt android",
    "chatgpt space remover",
    "chatgpt hidden characters",
    "chatgpt copy paste fix",
  ],
  icons: {
    icon: [
      { url: "/favicon-32x32.png?v=3", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png?v=3", type: "image/png", sizes: "16x16" },
      { url: "/favicon.svg?v=3", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png?v=3",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "ChatGPT4Mobile",
  },
  twitter: {
    card: "summary",
    title: "ChatGPT4Mobile – Clean ChatGPT Text on Mobile",
    description:
      "Clean ChatGPT text on your phone. Remove formatting, hidden characters, and spacing issues in seconds.",
  },
  alternates: {
    canonical: SITE_URL,
    types: {
      "application/rss+xml": `${SITE_URL}/rss.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ChatGPT4Mobile",
  alternateName: "Q-Bot",
  url: SITE_URL,
  description:
    "Guides and tools for cleaning ChatGPT text on mobile devices.",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ChatGPT4Mobile",
  alternateName: "Q-Bot",
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon-32x32.png?v=3" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon.svg?v=3" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=3" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </body>
    </html>
  );
}
