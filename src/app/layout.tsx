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
  icons: {
    icon: [
      { url: "/favicon-32x32.png?v=3", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png?v=3", type: "image/png", sizes: "16x16" },
      { url: "/favicon.svg?v=3", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png?v=3",
  },
  openGraph: {
    url: SITE_URL,
    siteName: "ChatGPT4Mobile",
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
      </body>
    </html>
  );
}
