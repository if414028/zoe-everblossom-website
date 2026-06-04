import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { Button } from "@/src/components/Button";
import { ProductVisual } from "@/src/components/FloralOrnament";
import {
  createWhatsAppLink,
  getProductBySlug,
  products,
} from "@/src/data/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Produk Tidak Ditemukan | Zoe.Everblossom",
    };
  }

  return {
    title: `${product.fullName} | Zoe.Everblossom`,
    description: product.longDescription,
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const detailRows = [
    ["Ukuran", product.size],
    ["Aroma", product.fragrance],
    ["Bahan Wax", product.wax],
    ["Sumbu", product.wick],
    ["Dibuat di", "Indonesia"],
  ];

  return (
    <section className="luxury-section">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-4">
            <ProductVisual label={product.fullName} />
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="aspect-square rounded-[24px] border border-[rgba(200,164,93,0.32)] bg-[rgba(255,249,239,0.62)]"
                  role="img"
                  aria-label={`Placeholder galeri ${product.name} ${item}`}
                />
              ))}
            </div>
          </div>
          <div className="rounded-[32px] border border-[rgba(200,164,93,0.36)] bg-[rgba(255,249,239,0.7)] p-7 shadow-[0_24px_70px_rgba(74,53,38,0.09)] md:p-10">
            <span className="rounded-full border border-[rgba(200,164,93,0.42)] px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[var(--champagne-gold)]">
              Lilin Soy Wax Buatan Tangan
            </span>
            <h1 className="mt-6 font-serif text-5xl leading-tight text-[var(--deep-brown)] md:text-6xl">
              {product.fullName}
            </h1>
            <p className="mt-4 text-2xl font-bold text-[var(--deep-brown)]">
              {product.formattedPrice}
            </p>
            <p className="mt-5 leading-8 text-[var(--soft-brown)]">
              {product.longDescription}
            </p>
            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              {detailRows.map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-3xl border border-[rgba(200,164,93,0.26)] bg-[rgba(248,241,228,0.62)] p-4"
                >
                  <dt className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--champagne-gold)]">
                    {label}
                  </dt>
                  <dd className="mt-2 font-semibold text-[var(--deep-brown)]">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={createWhatsAppLink(product.fullName)}>
                <MessageCircle size={17} aria-hidden /> Pesan via WhatsApp
              </Button>
              <Button href={createWhatsAppLink(product.fullName)} variant="secondary">
                Tanya Produk Ini
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <InfoBlock title="Catatan Aroma">
            <ul className="space-y-2">
              <li>Catatan awal: {product.notes.top}</li>
              <li>Catatan tengah: {product.notes.heart}</li>
              <li>Catatan dasar: {product.notes.base}</li>
            </ul>
          </InfoBlock>
          <InfoBlock title="Cocok untuk">
            <ul className="space-y-2">
              {product.perfectFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </InfoBlock>
          <InfoBlock title="Perawatan Lilin">
            <ul className="space-y-2">
              <li>Potong sumbu sebelum setiap pemakaian</li>
              <li>Biarkan permukaan wax mencair merata saat pembakaran pertama</li>
              <li>Jauhkan dari anak-anak dan hewan peliharaan</li>
              <li>Jangan tinggalkan lilin menyala tanpa pengawasan</li>
            </ul>
          </InfoBlock>
          <InfoBlock title="Catatan Keamanan">
            <p>
              Nyalakan dalam pengawasan, letakkan di permukaan tahan panas, dan
              hentikan pemakaian saat wax tersisa sedikit.
            </p>
          </InfoBlock>
        </div>
      </div>
    </section>
  );
}

function InfoBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-[28px] border border-[rgba(200,164,93,0.32)] bg-[rgba(255,249,239,0.64)] p-7 leading-7 text-[var(--soft-brown)] shadow-[0_18px_50px_rgba(74,53,38,0.07)]">
      <h2 className="mb-4 font-serif text-2xl text-[var(--deep-brown)]">
        {title}
      </h2>
      {children}
    </section>
  );
}
