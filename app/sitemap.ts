import type { MetadataRoute } from "next";
import { products } from "@/src/data/products";
import { absoluteUrl } from "@/src/lib/seo";

const staticRoutes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/shop", priority: 0.95, changeFrequency: "weekly" as const },
  { path: "/gifts", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/partnership", priority: 0.65, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route.path),
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...products.map((product) => ({
      url: absoluteUrl(`/products/${product.slug}`),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
      images: product.image ? [absoluteUrl(product.image.src)] : undefined,
    })),
  ];
}
