"use client";

import Link from "next/link";
import { Menu, MessageCircle, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/src/components/Button";
import { createWhatsAppLink } from "@/src/data/products";

const navItems = [
  { href: "/", label: "Beranda" },
  { href: "/shop", label: "Katalog" },
  { href: "/gifts", label: "Hadiah & Hampers" },
  { href: "/about", label: "Tentang Zoe" },
  { href: "/partnership", label: "Kolaborasi" },
  { href: "/contact", label: "Kontak" },
];

export function TopPromoBar() {
  return (
    <div className="bg-[var(--deep-brown)] px-5 py-2 text-center text-xs font-medium tracking-wide text-[var(--white-cream)]">
      Gratis ongkir untuk pesanan tertentu - Dibuat dengan cinta di Indonesia
    </div>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(200,164,93,0.25)] bg-[rgba(248,241,228,0.82)] backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-4"
        aria-label="Navigasi utama"
      >
        <Link href="/" className="font-serif text-2xl text-[var(--deep-brown)]">
          Zoe.Everblossom
        </Link>
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-[var(--soft-brown)] transition-colors duration-300 hover:text-[var(--deep-brown)]"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/shop"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(200,164,93,0.38)] text-[var(--deep-brown)] transition-all duration-300 hover:bg-[rgba(200,164,93,0.12)]"
            aria-label="Lihat katalog"
          >
            <ShoppingBag size={18} aria-hidden />
          </Link>
          <Button href={createWhatsAppLink()} className="min-h-11 px-5">
            <MessageCircle size={17} aria-hidden /> Pesan via WhatsApp
          </Button>
        </div>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(200,164,93,0.38)] text-[var(--deep-brown)] lg:hidden"
          aria-label="Buka atau tutup menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
        </button>
      </nav>
      {open ? (
        <div className="border-t border-[rgba(200,164,93,0.22)] bg-[rgba(255,249,239,0.96)] px-5 py-5 lg:hidden">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl px-2 py-2 text-base font-semibold text-[var(--deep-brown)]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button href={createWhatsAppLink()} className="mt-2">
              <MessageCircle size={17} aria-hidden /> Pesan via WhatsApp
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export function Footer() {
  const columns = [
    {
      title: "Katalog",
      items: ["Lilin Aromaterapi", "Hadiah & Hampers", "Panduan Aroma", "Perawatan Lilin"],
    },
    {
      title: "Layanan Pelanggan",
      items: [
        "Hubungi Kami",
        "Informasi Pengiriman",
        "FAQ",
        "Pesan via WhatsApp",
      ],
    },
    {
      title: "Jelajahi",
      items: ["Tentang Zoe", "Kolaborasi", "Instagram", "TikTok"],
    },
  ];

  return (
    <footer className="border-t border-[rgba(200,164,93,0.26)] bg-[var(--deep-brown)] px-5 py-14 text-[var(--white-cream)]">
      <div className="mx-auto grid max-w-[1200px] gap-10 md:grid-cols-[1.25fr_repeat(3,1fr)]">
        <div>
          <h2 className="font-serif text-3xl">Zoe.Everblossom</h2>
          <p className="mt-4 max-w-sm leading-7 text-[rgba(255,249,239,0.72)]">
            Lilin handcrafted bernuansa floral luxury yang dibuat untuk
            membawa kehangatan, kenyamanan, dan elegansi lembut ke ruang
            bermakna.
          </p>
        </div>
        {columns.map((column) => (
          <div key={column.title}>
            <h3 className="text-sm font-bold uppercase tracking-[0.22em] text-[var(--champagne-gold)]">
              {column.title}
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-[rgba(255,249,239,0.72)]">
              {column.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-12 max-w-[1200px] border-t border-[rgba(255,249,239,0.14)] pt-6 text-sm text-[rgba(255,249,239,0.68)]">
        © 2026 Zoe.Everblossom. Dibuat dengan cinta di Indonesia.
      </div>
    </footer>
  );
}
