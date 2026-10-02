import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { GAME_DESCRIPTION, SITE_URL } from "./site";
import "./globals.css";

const sans = DM_Sans({ variable: "--font-sans", subsets: ["latin"] });
const display = Fraunces({ variable: "--font-display", subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: { default: "The Longest Dachshund", template: "%s | The Longest Dachshund" },
    description: GAME_DESCRIPTION,
    icons: { icon: "/images/royal-doxie.png", shortcut: "/images/royal-doxie.png" },
    openGraph: {
      title: "The Longest Dachshund",
      description: GAME_DESCRIPTION,
      siteName: "The Longest Dachshund",
      type: "website",
      images: [{ url: "/og.png", width: 1536, height: 1024, alt: "The Longest Dachshund" }],
    },
    twitter: { card: "summary_large_image", title: "The Longest Dachshund", description: GAME_DESCRIPTION, images: ["/og.png"] },
  };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${sans.variable} ${display.variable}`}>{children}</body></html>;
}
