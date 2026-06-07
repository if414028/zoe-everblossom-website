import type { Metadata } from "next";
import { Cormorant_Garamond, Great_Vibes, Inter } from "next/font/google";
import { Footer, Navbar, TopPromoBar } from "@/src/components/Layout";
import { absoluteUrl, jsonLd, siteConfig } from "@/src/lib/seo";
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
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Zoe.Everblossom - Lilin Floral Buatan Tangan",
    template: "%s | Zoe.Everblossom",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: absoluteUrl("/"),
    languages: {
      id: absoluteUrl("/"),
    },
  },
  openGraph: {
    title: "Zoe.Everblossom - Lilin Floral Buatan Tangan",
    description: siteConfig.description,
    url: absoluteUrl("/"),
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        width: 1200,
        height: 630,
        alt: "Zoe.Everblossom lilin floral buatan tangan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zoe.Everblossom - Lilin Floral Buatan Tangan",
    description: siteConfig.description,
    images: [absoluteUrl(siteConfig.ogImage)],
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: siteConfig.name,
            legalName: siteConfig.legalName,
            url: absoluteUrl("/"),
            logo: absoluteUrl("/favicon.ico"),
            description: siteConfig.description,
            areaServed: "Indonesia",
            foundingDate: "2024",
            sameAs: [siteConfig.instagram],
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer service",
              availableLanguage: ["id", "en"],
              url: siteConfig.whatsapp,
            },
          })}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: siteConfig.name,
            url: absoluteUrl("/"),
            inLanguage: siteConfig.language,
            description: siteConfig.tagline,
          })}
        />
        <TopPromoBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
