import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Doxie Dynasty | Big Personality. Tiny Legs.",
  description:
    "Meet Doxie Dynasty, the card game, and The Longest Dachshund, a delightfully long mobile adventure.",
  icons: {
    icon: "/images/royal-doxie.png",
    shortcut: "/images/royal-doxie.png",
  },
  openGraph: {
    title: "Doxie Dynasty",
    description: "One dynasty. Two delightfully long ways to play.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${display.variable}`}>{children}</body>
    </html>
  );
}
