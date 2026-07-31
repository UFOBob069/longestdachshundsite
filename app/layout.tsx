import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const sans = DM_Sans({ variable: "--font-sans", subsets: ["latin"] });
const display = Fraunces({ variable: "--font-display", subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "doxie-dynasty-games.dreagan8602.chatgpt.site";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);

  return {
    metadataBase,
    title: { default: "The Longest Dachshund", template: "%s | The Longest Dachshund" },
    description: "Snack, steer, bark, and see how long you can go in The Longest Dachshund mobile game.",
    icons: { icon: "/images/royal-doxie.png", shortcut: "/images/royal-doxie.png" },
    openGraph: {
      title: "The Longest Dachshund",
      description: "Stretch. Snack. Become a legend.",
      type: "website",
      images: [{ url: "/og.png", width: 1536, height: 1024, alt: "The Longest Dachshund" }],
    },
    twitter: { card: "summary_large_image", title: "The Longest Dachshund", description: "Stretch. Snack. Become a legend.", images: ["/og.png"] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${sans.variable} ${display.variable}`}>{children}</body></html>;
}
