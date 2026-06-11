import type { Metadata } from "next";

const fallbackSiteUrl = "https://zoeeverblossom.id";

export const siteConfig = {
  name: "Zoe.Everblossom",
  legalName: "Zoe.Everblossom",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl,
  locale: "id_ID",
  language: "id",
  tagline: "Lilin floral buatan tangan untuk ruang yang lembut dan bermakna.",
  description:
    "Zoe.Everblossom menghadirkan lilin soy wax buatan tangan bernuansa floral luxury, dibuat di Indonesia dengan aroma Honey Lavender yang lembut.",
  instagram: "https://www.instagram.com/zoe.everblossom",
  whatsapp: "https://wa.me/628211064838",
  location: "Jakarta, Indonesia",
  ogImage: "/images/zoe-hero-floral.png",
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function buildMetadata({
  title,
  description,
  path = "/",
  image = siteConfig.ogImage,
  type = "website",
  keywords = [],
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  keywords?: string[];
}): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    keywords: [
      "Zoe Everblossom",
      "Zoe.Everblossom",
      "lilin aromaterapi",
      "lilin soy wax",
      "lilin handmade",
      "lilin Honey Lavender",
      "hampers lilin",
      "hadiah lilin",
      ...keywords,
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - lilin floral buatan tangan`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function jsonLd(data: Record<string, unknown>) {
  return {
    __html: JSON.stringify(data).replace(/</g, "\\u003c"),
  };
}
