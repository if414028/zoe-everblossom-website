import type { Metadata } from "next";
import { ShopCatalog } from "@/src/components/ShopCatalog";
import { SectionHeading } from "@/src/components/SectionHeading";
import { products } from "@/src/data/products";

export const metadata: Metadata = {
  title: "Katalog Lilin Zoe | Zoe.Everblossom",
  description:
    "Lihat koleksi lilin floral Zoe.Everblossom untuk ruang yang hangat, bermakna, dan menenangkan.",
};

export default function ShopPage() {
  return (
    <section className="luxury-section">
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
