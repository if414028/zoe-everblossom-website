import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, MessageCircle } from "lucide-react";
import { Button } from "@/src/components/Button";
import { FeatureCard, TestimonialCard } from "@/src/components/Cards";
import { Newsletter } from "@/src/components/Newsletter";
import { ProductGrid } from "@/src/components/ProductCard";
import { SectionHeading } from "@/src/components/SectionHeading";
import { createWhatsAppLink, products } from "@/src/data/products";
import { buildMetadata } from "@/src/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Lilin Floral Buatan Tangan",
  description:
    "Belanja lilin soy wax handmade Zoe.Everblossom dengan aroma Honey Lavender yang lembut untuk hadiah, hampers, dan ruang yang menenangkan.",
  path: "/",
  keywords: ["lilin floral", "lilin aromaterapi handmade", "soy wax candle Indonesia"],
});

const giftTypes = [
  "Hadiah Bridesmaid",
  "Hadiah Ulang Tahun",
  "Hampers Perusahaan",
  "Souvenir Pernikahan",
];

const whyZoe = [
  {
    title: "Dibuat dengan Cinta",
    text: "Setiap lilin dituangkan dengan perhatian lembut agar terasa personal dan bermakna.",
  },
  {
    title: "Perpaduan Soy Wax",
    text: "Perpaduan wax yang halus untuk pengalaman membakar lilin yang bersih dan menenangkan.",
  },
  {
    title: "Aroma Floral Lembut",
    text: "Honey Lavender menghadirkan kelembutan floral, madu hangat, dan lavender yang menenangkan.",
  },
  {
    title: "Indah untuk Hadiah",
    text: "Elegan, hangat, dan berkesan untuk momen personal maupun perayaan istimewa.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[85vh] items-center overflow-hidden px-5 py-20">
        <Image
          src="/images/zoe-hero-floral.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 object-cover object-center"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(248,241,228,0.94)_0%,rgba(248,241,228,0.86)_34%,rgba(248,241,228,0.28)_60%,rgba(248,241,228,0.04)_100%)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,241,228,0.05),rgba(255,249,239,0.24)_22%,rgba(255,249,239,0.3)_50%,rgba(255,249,239,0.24)_78%,rgba(248,241,228,0.05))]"
          aria-hidden
        />
        <div className="hero-copy-glow" aria-hidden />
        <div className="relative z-10 mx-auto max-w-[1200px] text-center">
          <p className="mx-auto mb-5 inline-flex rounded-full border border-[rgba(200,164,93,0.38)] bg-[rgba(255,249,239,0.72)] px-5 py-2 text-xs font-bold uppercase tracking-[0.28em] text-[var(--champagne-gold)]">
            Lilin Soy Wax Buatan Tangan
          </p>
          <h1 className="mx-auto max-w-4xl font-serif text-5xl leading-[0.98] text-[var(--deep-brown)] md:text-7xl lg:text-8xl">
            Cahaya Lembut untuk Setiap Momen Indah
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[var(--soft-brown)] md:text-xl">
            Temukan lilin bernuansa floral yang dibuat untuk membawa
            kehangatan, kenyamanan, dan elegansi tenang ke ruang sehari-harimu.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/shop">
              Lihat Koleksi <ArrowRight size={17} aria-hidden />
            </Button>
            <Button href="/gifts" variant="secondary">
              Lihat Hampers
            </Button>
          </div>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--soft-brown)]">
            Soy Wax - Sumbu Katun - Dibuat di Indonesia
          </p>
        </div>
      </section>

      <section className="luxury-section">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="Koleksi Pilihan"
            title="Lilin Signature untuk Ruang yang Lembut dan Bermakna"
          />
          <div className="mt-12">
            <ProductGrid products={products} />
          </div>
        </div>
      </section>

      <section className="luxury-section bg-[rgba(255,249,239,0.52)]">
        <div className="mx-auto grid max-w-[1200px] gap-10 md:grid-cols-2 md:items-center">
          <SectionHeading
            align="left"
            eyebrow="Cerita Aroma"
            title="Aroma Nyaman yang Lembut"
          >
            <p>
              <strong>Honey Lavender</strong> adalah aroma lembut yang
              menenangkan, memadukan sentuhan floral, manis madu yang hangat,
              dan lavender yang calming. Dibuat agar setiap ruang terasa damai,
              intim, dan hangat menyambut.
            </p>
          </SectionHeading>
          <div className="rounded-[32px] border border-[rgba(200,164,93,0.4)] bg-[var(--white-cream)] p-8 shadow-[0_24px_70px_rgba(74,53,38,0.09)]">
            {[
              ["Catatan Awal", "Floral Lembut"],
              ["Catatan Tengah", "Lavender"],
              ["Catatan Dasar", "Madu Hangat"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex items-center justify-between border-b border-[rgba(200,164,93,0.22)] py-5 last:border-0"
              >
                <span className="text-sm font-bold uppercase tracking-[0.22em] text-[var(--champagne-gold)]">
                  {label}
                </span>
                <span className="font-serif text-2xl text-[var(--deep-brown)]">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="luxury-section">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <SectionHeading
              align="left"
              eyebrow="Hadiah & Hampers"
              title="Hadiah Penuh Perhatian untuk Orang-Orang Tersayang"
            >
              <p>
                Dari momen kecil yang intim hingga perayaan bermakna, lilin
                Zoe.Everblossom dibuat agar setiap hadiah terasa personal,
                hangat, dan indah untuk dikenang.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/gifts" variant="gold">
                  Buat Hadiahmu
                </Button>
                <Button href={createWhatsAppLink()} variant="secondary">
                  <MessageCircle size={17} aria-hidden /> Pesan Hampers
                </Button>
              </div>
            </SectionHeading>
            <div className="grid gap-4 sm:grid-cols-2">
              {giftTypes.map((gift) => (
                <FeatureCard key={gift} title={gift}>
                  Hadiah lilin personal dengan wrapping lembut dan detail
                  floral yang elegan.
                </FeatureCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="luxury-section bg-[rgba(255,249,239,0.52)]">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading eyebrow="Kenapa Zoe" title="Dibuat untuk Elegansi yang Tenang" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {whyZoe.map((item) => (
              <FeatureCard key={item.title} title={item.title}>
                {item.text}
              </FeatureCard>
            ))}
          </div>
        </div>
      </section>

      <section className="luxury-section">
        <div className="mx-auto grid max-w-[1200px] gap-10 rounded-[32px] border border-[rgba(200,164,93,0.32)] bg-[rgba(255,249,239,0.58)] p-8 shadow-[0_24px_70px_rgba(74,53,38,0.08)] md:grid-cols-[0.8fr_1fr] md:p-12">
          <p className="font-script text-7xl text-[var(--dusty-pink)] md:text-8xl">
            Zoe
          </p>
          <div>
            <h2 className="font-serif text-4xl text-[var(--deep-brown)] md:text-5xl">
              Lahir dari Doa, Keindahan, dan Rasa Syukur
            </h2>
            <p className="mt-5 leading-8 text-[var(--soft-brown)]">
              Zoe.Everblossom lahir dari doa, keindahan, dan rasa syukur.
              Terinspirasi dari bunga, aroma, dan cahaya lembut, setiap lilin
              dibuat untuk membawa kehangatan, kenyamanan, sukacita, dan harapan
              baru ke setiap rumah.
            </p>
            <Button href="/about" className="mt-8" variant="secondary">
              Baca Cerita Kami
            </Button>
          </div>
        </div>
      </section>

      <section className="luxury-section bg-[rgba(255,249,239,0.52)]">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading eyebrow="Kata Mereka" title="Catatan Lembut dari Pelanggan" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              "Aromanya lembut banget dan menenangkan. Cocok untuk kamar saya.",
              "Packaging-nya cantik dan terasa thoughtful untuk hadiah.",
              "Meja kerja saya jadi terasa lebih hangat dan kalem.",
            ].map((quote) => (
              <TestimonialCard key={quote} quote={quote} />
            ))}
          </div>
        </div>
      </section>

      <section className="luxury-section">
        <div className="mx-auto max-w-[1200px] rounded-[32px] bg-[var(--deep-brown)] p-8 text-center text-[var(--white-cream)] shadow-[0_24px_70px_rgba(74,53,38,0.16)] md:p-14">
          <h2 className="font-serif text-4xl md:text-5xl">
            Mari Wujudkan Sesuatu yang Indah Bersama
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-[rgba(255,249,239,0.74)]">
            Terbuka untuk kolaborasi dengan brand, acara, pernikahan, dan
            perayaan bermakna.
          </p>
          <Button href="/partnership" variant="gold" className="mt-8">
            Kolaborasi dengan Kami
          </Button>
        </div>
      </section>

      <section className="luxury-section bg-[rgba(255,249,239,0.52)]">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading title="Ikuti Momen Berbunga Kami">
            <p className="inline-flex items-center gap-2">
              <Camera size={18} aria-hidden /> @zoe.everblossom
            </p>
          </SectionHeading>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((item) => (
              <Link
                key={item}
                href="/contact"
                className="aspect-square rounded-[28px] border border-[rgba(200,164,93,0.36)] bg-[radial-gradient(circle_at_34%_24%,rgba(221,166,161,0.34),transparent_25%),linear-gradient(135deg,#fff9ef,#eadcc8)] shadow-[0_18px_45px_rgba(74,53,38,0.07)]"
                aria-label={`Preview Instagram ${item}`}
              />
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
