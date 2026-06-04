import { ArrowRight, MessageCircle } from "lucide-react";
import { Product, createWhatsAppLink } from "@/src/data/products";
import { Button } from "@/src/components/Button";
import { ProductVisual } from "@/src/components/FloralOrnament";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group rounded-[28px] border border-[rgba(200,164,93,0.42)] bg-[rgba(255,249,239,0.7)] p-4 shadow-[0_22px_60px_rgba(74,53,38,0.09)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(74,53,38,0.13)]">
      <ProductVisual label={product.fullName} />
      <div className="px-2 pb-2 pt-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <span className="rounded-full border border-[rgba(200,164,93,0.4)] bg-[rgba(248,241,228,0.86)] px-3 py-1 text-xs font-semibold text-[var(--deep-brown)]">
            {product.badge}
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--champagne-gold)]">
            {product.size}
          </span>
        </div>
        <h3 className="font-serif text-2xl text-[var(--deep-brown)]">
          {product.name}
        </h3>
        <p className="mt-2 text-sm leading-6 text-[var(--soft-brown)]">
          {product.description}
        </p>
        <p className="mt-4 text-sm text-[var(--soft-brown)]">
          Aroma:{" "}
          <span className="font-semibold text-[var(--deep-brown)]">
            {product.fragrance}
          </span>
        </p>
        <p className="mt-3 text-lg font-bold text-[var(--deep-brown)]">
          {product.formattedPrice}
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <Button
            href={`/products/${product.slug}`}
            variant="secondary"
            className="px-4"
          >
            Lihat Detail <ArrowRight size={16} aria-hidden />
          </Button>
          <Button
            href={createWhatsAppLink(product.fullName)}
            className="px-4"
          >
            <MessageCircle size={16} aria-hidden /> Pesan
          </Button>
        </div>
      </div>
    </article>
  );
}

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
