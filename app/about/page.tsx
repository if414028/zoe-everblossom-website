import type { Metadata } from "next";
import { FeatureCard } from "@/src/components/Cards";
import { SectionHeading } from "@/src/components/SectionHeading";
import { buildMetadata } from "@/src/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Tentang Zoe",
  description:
    "Kenali Zoe.Everblossom, brand lilin floral buatan tangan dari Indonesia yang menghadirkan soy wax candle lembut untuk rumah dan hadiah.",
  path: "/about",
  keywords: ["brand lilin handmade", "tentang Zoe Everblossom", "lilin floral Indonesia"],
});

export default function AboutPage() {
  return (
    <section className="luxury-section">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading eyebrow="Tentang Zoe" title="Hati di Balik Zoe.Everblossom">
          <p>
            Zoe.Everblossom diciptakan dengan hati yang penuh rasa syukur,
            terinspirasi dari keindahan bunga, hangatnya aroma, dan cahaya
            lembut. Setiap lilin dibuat untuk membawa kenyamanan, sukacita, dan
            harapan baru ke setiap ruang.
          </p>
        </SectionHeading>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <FeatureCard title="Inspirasi Kami">
            Bunga, doa, dan momen harian yang tenang membentuk dunia
            Zoe.Everblossom yang hangat, lembut, dan feminin.
          </FeatureCard>
          <FeatureCard title="Craft Kami">
            Setiap lilin dibuat dengan soy wax, sumbu katun, dan profil aroma
            floral lembut untuk ruang yang elegan.
          </FeatureCard>
          <FeatureCard title="Harapan Kami">
            Kami berharap setiap cahaya membawa kenyamanan, rasa syukur, dan
            keindahan baru ke rumah serta hati yang menerimanya.
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}
