import type { Metadata } from "next";
import { ShopCatalog } from "@/src/components/ShopCatalog";
import { SectionHeading } from "@/src/components/SectionHeading";
import { products } from "@/src/data/products";
import { buildMetadata, jsonLd, absoluteUrl } from "@/src/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Katalog Lilin Zoe",
  description:
    "Belanja koleksi lilin floral Zoe.Everblossom: soy wax handmade, aroma Honey Lavender, hadiah, dan hampers untuk ruang yang hangat.",
  path: "/shop",
  keywords: ["katalog lilin", "beli lilin aromaterapi", "lilin handmade Indonesia"],
});

export default function ShopPage() {
  return (
    <section className="luxury-section">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Katalog Lilin Zoe.Everblossom",
          itemListElement: products.map((product, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: absoluteUrl(`/products/${product.slug}`),
            name: product.fullName,
          })),
        })}
      />
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading
          eyebrow="Katalog"
          title="Katalog Lilin Zoe"
        >
          <p>
            Lilin bernuansa floral untuk ruang yang hangat, bermakna, dan
            menenangkan.
          </p>
        </SectionHeading>
        <ShopCatalog products={products} />
      </div>
    </section>
  );
}
