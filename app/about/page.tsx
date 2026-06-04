import type { Metadata } from "next";
import { FeatureCard } from "@/src/components/Cards";
import { SectionHeading } from "@/src/components/SectionHeading";

export const metadata: Metadata = {
  title: "Tentang Zoe | Zoe.Everblossom",
  description:
    "Kenali hati, inspirasi, proses, dan harapan di balik lilin floral buatan tangan Zoe.Everblossom.",
};

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
