import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { Button } from "@/src/components/Button";
import { ProductGallery } from "@/src/components/ProductGallery";
import {
  createWhatsAppLink,
  getProductBySlug,
  products,
} from "@/src/data/products";
import { absoluteUrl, buildMetadata, jsonLd, siteConfig } from "@/src/lib/seo";

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
      title: "Produk Tidak Ditemukan",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return buildMetadata({
    title: product.fullName,
    description: `${product.longDescription} Harga ${product.formattedPrice}. Pesan lilin ${product.fragrance} buatan tangan Zoe.Everblossom via WhatsApp.`,
    path: `/products/${product.slug}`,
    image: product.image?.src,
    keywords: [
      product.fullName,
      product.name,
      product.category,
      product.fragrance,
      product.size,
    ],
  });
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const detailRows = product.details ?? [
    { label: "Kategori", value: product.category },
    { label: "Ukuran", value: product.size },
    { label: "Aroma", value: product.fragrance },
    { label: "Bahan Wax", value: product.wax },
    { label: "Sumbu", value: product.wick },
    { label: "Dibuat di", value: "Indonesia" },
  ];
  const productImages = product.gallery ?? (product.image ? [product.image] : []);
  const productEyebrow =
    product.category === "Souvenirs"
      ? "Souvenir Hand Sanitizer"
      : product.category === "Hampers"
        ? "Hampers Spesial Zoe"
        : "Lilin Soy Wax Buatan Tangan";

  return (
    <section className="luxury-section">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd({
          "@context": "https://schema.org",
          "@type": "Product",
          name: product.fullName,
          brand: {
            "@type": "Brand",
            name: siteConfig.name,
          },
          description: product.longDescription,
          image: productImages.map((image) => absoluteUrl(image.src)),
          category: product.category,
          sku: product.slug,
          material: product.wax,
          offers: {
            "@type": "Offer",
            price: product.price,
            priceCurrency: "IDR",
            availability: "https://schema.org/InStock",
            url: absoluteUrl(`/products/${product.slug}`),
            seller: {
              "@type": "Organization",
              name: siteConfig.name,
            },
          },
        })}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Beranda",
              item: absoluteUrl("/"),
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Katalog",
              item: absoluteUrl("/shop"),
            },
            {
              "@type": "ListItem",
              position: 3,
              name: product.fullName,
              item: absoluteUrl(`/products/${product.slug}`),
            },
          ],
        })}
      />
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <ProductGallery
            image={product.image}
            gallery={product.gallery}
            label={product.fullName}
          />
          <div className="rounded-[32px] border border-[rgba(200,164,93,0.36)] bg-[rgba(255,249,239,0.7)] p-7 shadow-[0_24px_70px_rgba(74,53,38,0.09)] md:p-10">
            <span className="rounded-full border border-[rgba(200,164,93,0.42)] px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[var(--champagne-gold)]">
              {productEyebrow}
            </span>
            <h1 className="mt-6 font-serif text-5xl leading-tight text-[var(--deep-brown)] md:text-6xl">
              {product.fullName}
            </h1>
            <p className="mt-4 text-2xl font-bold text-[var(--deep-brown)]">
              {product.formattedPrice}
            </p>
            <p className="mt-5 whitespace-pre-line leading-8 text-[var(--soft-brown)]">
              {product.longDescription}
            </p>
            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              {detailRows.map(({ label, value }) => (
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
          <InfoBlock title={product.careTitle ?? "Perawatan Lilin"}>
            <ul className="space-y-2">
              {(
                product.careInstructions ?? [
                  "Potong sumbu sebelum setiap pemakaian",
                  "Biarkan permukaan wax mencair merata saat pembakaran pertama",
                  "Jauhkan dari anak-anak dan hewan peliharaan",
                  "Jangan tinggalkan lilin menyala tanpa pengawasan",
                ]
              ).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </InfoBlock>
          <InfoBlock title={product.safetyTitle ?? "Catatan Keamanan"}>
            <p>
              {product.safetyDescription ??
                "Nyalakan dalam pengawasan, letakkan di permukaan tahan panas, dan hentikan pemakaian saat wax tersisa sedikit."}
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
