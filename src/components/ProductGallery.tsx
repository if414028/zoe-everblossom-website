"use client";

import { useState } from "react";
import Image from "next/image";
import { ProductVisual } from "@/src/components/FloralOrnament";
import type { ProductImage } from "@/src/data/products";

type ProductGalleryProps = {
  image?: ProductImage;
  gallery?: ProductImage[];
  label: string;
};

export function ProductGallery({
  image,
  gallery = [],
  label,
}: ProductGalleryProps) {
  const images = gallery.length > 0 ? gallery : image ? [image] : [];
  const [selectedImage, setSelectedImage] = useState<ProductImage | undefined>(
    image ?? images[0],
  );

  if (images.length === 0) {
    return (
      <div className="space-y-4">
        <ProductVisual label={label} preload />
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="aspect-square rounded-[24px] border border-[rgba(200,164,93,0.32)] bg-[rgba(255,249,239,0.62)]"
              role="img"
              aria-label={`Placeholder galeri ${label} ${item}`}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <ProductVisual image={selectedImage} label={label} preload />
      {images.length > 1 && (
        <div className="grid grid-cols-3 gap-4">
          {images.map((thumbnail) => {
            const isSelected = selectedImage?.src === thumbnail.src;

            return (
              <button
                key={thumbnail.src}
                type="button"
                aria-label={`Tampilkan ${thumbnail.alt}`}
                aria-pressed={isSelected}
                onClick={() => setSelectedImage(thumbnail)}
                className={[
                  "relative aspect-square overflow-hidden rounded-[24px] border bg-[rgba(255,249,239,0.62)] transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--champagne-gold)]",
                  isSelected
                    ? "border-[var(--champagne-gold)] shadow-[0_14px_34px_rgba(122,90,67,0.18)]"
                    : "border-[rgba(200,164,93,0.32)] hover:border-[rgba(122,90,67,0.46)]",
                ].join(" ")}
              >
                <Image
                  src={thumbnail.src}
                  alt={thumbnail.alt}
                  fill
                  sizes="(min-width: 1024px) 10vw, 30vw"
                  className="object-cover"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
