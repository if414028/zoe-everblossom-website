import type { Metadata } from "next";
import { Cormorant_Garamond, Great_Vibes, Inter } from "next/font/google";
import { Footer, Navbar, TopPromoBar } from "@/src/components/Layout";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const greatVibes = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Zoe.Everblossom - Lilin Floral Buatan Tangan",
  description:
    "Lilin buatan tangan bernuansa floral luxury, dibuat dengan soy wax, sumbu katun, dan aroma Honey Lavender yang lembut di Indonesia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${cormorant.variable} ${greatVibes.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <TopPromoBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
