import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { Button } from "@/src/components/Button";
import { FeatureCard } from "@/src/components/Cards";
import { SectionHeading } from "@/src/components/SectionHeading";
import { createWhatsAppLink } from "@/src/data/products";
import { buildMetadata } from "@/src/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Hadiah & Hampers",
  description:
    "Pesan hadiah lilin dan hampers Zoe.Everblossom untuk bridesmaid, souvenir pernikahan, ulang tahun, perusahaan, dan momen penuh makna.",
  path: "/gifts",
  keywords: ["hampers lilin", "hadiah bridesmaid", "souvenir pernikahan", "hampers perusahaan"],
});

const categories = [
  "Hadiah Bridesmaid",
  "Souvenir Pernikahan",
  "Hadiah Ulang Tahun",
  "Hampers Perusahaan",
  "Hadiah Terima Kasih",
];

export default function GiftsPage() {
  return (
    <>
      <section className="floral-frame px-5 py-16 md:py-24">
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading eyebrow="Hadiah" title="Hadiah & Hampers" align="left">
            <p>Lilin cantik yang dibuat untuk hadiah penuh makna.</p>
            <Button href={createWhatsAppLink()} className="mt-8">
              <MessageCircle size={17} aria-hidden /> Konsultasi Hadiah
            </Button>
          </SectionHeading>
          <div className="min-h-80 rounded-[32px] border border-[rgba(200,164,93,0.36)] bg-[radial-gradient(circle_at_30%_28%,rgba(221,166,161,0.32),transparent_26%),radial-gradient(circle_at_72%_48%,rgba(244,207,106,0.28),transparent_24%),linear-gradient(135deg,#fff9ef,#eadcc8)] shadow-[0_24px_70px_rgba(74,53,38,0.09)]" />
        </div>
      </section>
      <section className="luxury-section bg-[rgba(255,249,239,0.52)]">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading title="Kategori Hadiah">
            <p>
              Custom notes dan wrapping spesial tersedia sesuai permintaan.
            </p>
          </SectionHeading>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <FeatureCard key={category} title={category}>
                Rangkaian lilin penuh perhatian dengan kehangatan floral,
                detail premium, dan sentuhan akhir yang personal.
              </FeatureCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
