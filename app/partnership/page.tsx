import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { Button } from "@/src/components/Button";
import { FeatureCard } from "@/src/components/Cards";
import { SectionHeading } from "@/src/components/SectionHeading";
import { createWhatsAppLink } from "@/src/data/products";

export const metadata: Metadata = {
  title: "Kemitraan & Kolaborasi | Zoe.Everblossom",
  description:
    "Berkolaborasi dengan Zoe.Everblossom untuk souvenir pernikahan, hampers perusahaan, hadiah acara, dan kolaborasi brand.",
};

const opportunities = [
  "Souvenir Pernikahan",
  "Hampers Perusahaan",
  "Hadiah Acara",
  "Kolaborasi Brand",
];

export default function PartnershipPage() {
  return (
    <section className="luxury-section">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading
          eyebrow="Kemitraan"
          title="Kemitraan & Kolaborasi"
        >
          <p>
            Terbuka untuk kolaborasi bermakna bersama brand, acara,
            pernikahan, dan perayaan istimewa.
          </p>
          <Button href={createWhatsAppLink()} className="mt-8">
            <MessageCircle size={17} aria-hidden /> Diskusikan Kolaborasi
          </Button>
        </SectionHeading>
        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="grid gap-5 sm:grid-cols-2">
            {opportunities.map((item) => (
              <FeatureCard key={item} title={item}>
                Konsep lilin elegan yang disesuaikan dengan momen, audiens, dan
                cerita brand kamu.
              </FeatureCard>
            ))}
          </div>
          <form className="rounded-[32px] border border-[rgba(200,164,93,0.36)] bg-[rgba(255,249,239,0.72)] p-7 shadow-[0_24px_70px_rgba(74,53,38,0.09)] md:p-9">
            {["Nama", "Email", "Acara / Brand"].map((field) => (
              <label
                key={field}
                className="mb-5 block text-sm font-semibold text-[var(--deep-brown)]"
              >
                {field}
                <input
                  className="mt-2 min-h-12 w-full rounded-2xl border border-[rgba(200,164,93,0.36)] bg-[var(--white-cream)] px-4 outline-none focus:border-[var(--champagne-gold)]"
                  type={field === "Email" ? "email" : "text"}
                />
              </label>
            ))}
            <label className="block text-sm font-semibold text-[var(--deep-brown)]">
              Pesan
              <textarea className="mt-2 min-h-36 w-full rounded-2xl border border-[rgba(200,164,93,0.36)] bg-[var(--white-cream)] px-4 py-3 outline-none focus:border-[var(--champagne-gold)]" />
            </label>
            <Button type="submit" className="mt-6">
              Kirim Pertanyaan
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
