import type { Metadata } from "next";
import { Poppins, Fredoka } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const siteUrl = "https://okao.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "OKAO — Bringing Street Culture Home",
  description:
    "OKAO is bringing street culture home to Bhadra, Odisha. Opening October 1, 2026.",
  openGraph: {
    title: "OKAO — Bringing Street Culture Home",
    description:
      "OKAO is bringing street culture home to Bhadra, Odisha. Opening October 1, 2026.",
    url: siteUrl,
    siteName: "OKAO",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OKAO — Bringing Street Culture Home",
    description:
      "OKAO is bringing street culture home to Bhadra, Odisha. Opening October 1, 2026.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${fredoka.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-okao-orange text-okao-cream overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
