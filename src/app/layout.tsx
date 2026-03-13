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
  title: "ChatGPT4Mobile · Q-Bot – Clean ChatGPT text on your phone",
  description:
    "ChatGPT4Mobile (Q-Bot) helps you use ChatGPT on your phone and clean up replies with GPTcleanuptools.com – remove extra spaces, watermarks, and messy punctuation in seconds.",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
