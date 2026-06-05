"use client";

import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Product } from "@/src/data/products";
import { ProductGrid } from "@/src/components/ProductCard";
import { cn } from "@/src/components/utils";

const filters = [
  "Semua",
  "Lilin Aromaterapi",
  "Hampers",
] as const;
const sortOptions = [
  { label: "Pilihan Utama", value: "featured" },
  { label: "Harga Terendah", value: "price-asc" },
  { label: "Harga Tertinggi", value: "price-desc" },
] as const;

type Filter = (typeof filters)[number];
type Sort = (typeof sortOptions)[number]["value"];

export function ShopCatalog({ products }: { products: Product[] }) {
  const [activeFilter, setActiveFilter] = useState<Filter>("Semua");
  const [sort, setSort] = useState<Sort>("featured");

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      if (activeFilter === "Semua") {
        return true;
      }

      return product.category === activeFilter;
    });

    return [...filtered].sort((a, b) => {
      if (sort === "price-asc") {
        return a.price - b.price;
      }

      if (sort === "price-desc") {
        return b.price - a.price;
      }

      return Number(a.id) - Number(b.id);
    });
  }, [activeFilter, products, sort]);

  return (
    <>
      <div className="mt-10 flex flex-col justify-between gap-5 md:flex-row md:items-center">
        <div className="flex flex-wrap gap-3" aria-label="Filter produk">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "rounded-full border px-5 py-2 text-sm font-semibold transition-all duration-300",
                  isActive
                    ? "border-[var(--deep-brown)] bg-[var(--deep-brown)] text-[var(--white-cream)] shadow-[0_14px_30px_rgba(74,53,38,0.16)]"
                    : "border-[rgba(200,164,93,0.38)] bg-[rgba(255,249,239,0.64)] text-[var(--deep-brown)] hover:bg-[rgba(200,164,93,0.13)]",
                )}
              >
                {filter}
              </button>
            );
          })}
        </div>
        <label className="flex items-center gap-3 text-sm font-semibold text-[var(--soft-brown)]">
          Urutkan
          <span className="relative inline-flex min-w-44 items-center">
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value as Sort)}
              className="h-10 w-full appearance-none rounded-full border border-[rgba(200,164,93,0.38)] bg-[var(--white-cream)] py-2 pl-5 pr-11 text-sm font-semibold text-[var(--deep-brown)] outline-none transition-all duration-300 focus:border-[var(--champagne-gold)] focus:ring-4 focus:ring-[rgba(200,164,93,0.16)]"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-4 text-[var(--soft-brown)]"
              aria-hidden
            />
          </span>
        </label>
      </div>

      <p className="mt-6 text-sm font-medium text-[var(--soft-brown)]">
        Menampilkan {filteredProducts.length} dari {products.length} produk.
      </p>

      <div className="mt-8">
        <ProductGrid products={filteredProducts} />
      </div>
    </>
  );
}
