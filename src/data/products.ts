export type ProductImage = {
  src: string;
  alt: string;
};

export type ProductDetail = {
  label: string;
  value: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  size: string;
  fullName: string;
  price: number;
  formattedPrice: string;
  category: string;
  fragrance: string;
  wax: string;
  wick: string;
  description: string;
  longDescription: string;
  badge: string;
  image?: ProductImage;
  gallery?: ProductImage[];
  details?: ProductDetail[];
  careTitle?: string;
  careInstructions?: string[];
  safetyTitle?: string;
  safetyDescription?: string;
  perfectFor: string[];
  notes: {
    top: string;
    heart: string;
    base: string;
  };
};

export const whatsappNumber = "628211064838";

export const products: Product[] = [
  {
    id: "01",
    slug: "zoe-jar-candle-mini",
    name: "Honey Lavender Mini",
    size: "50ml",
    fullName: "Honey Lavender Mini - 50ml",
    price: 36900,
    formattedPrice: "IDR 36.900",
    category: "Lilin Aromaterapi",
    fragrance: "Honey Lavender",
    wax: "Soy Wax",
    wick: "Sumbu Katun",
    description: "Lilin mungil untuk momen tenang yang manis dan personal.",
    longDescription:
      "Lilin floral lembut dengan sentuhan madu yang hangat dan aroma lavender yang menenangkan, dibuat untuk menghadirkan rasa nyaman di ruang personalmu.",
    badge: "Hadiah Mini",
    image: {
      src: "/images/honey-lavender-mini-hd-1.jpeg",
      alt: "Honey Lavender Mini 50ml dengan jar amber dan tutup hitam",
    },
    gallery: [
      {
        src: "/images/honey-lavender-mini-hd-1.jpeg",
        alt: "Honey Lavender Mini 50ml dengan jar amber dan tutup hitam",
      },
      {
        src: "/images/honey-lavender-mini-hd-2.jpeg",
        alt: "Honey Lavender Mini 50ml terbuka dengan tutup hitam di samping jar",
      },
      {
        src: "/images/honey-lavender-mini-hd-3.jpeg",
        alt: "Honey Lavender Mini 50ml tampak miring di atas batu dekoratif",
      },
    ],
    perfectFor: ["Kamar tidur", "Meja kerja", "Momen self-care", "Hadiah kecil"],
    notes: {
      top: "Floral Lembut",
      heart: "Lavender",
      base: "Madu Hangat",
    },
  },
  {
    id: "02",
    slug: "zoe-jar-candle-classic",
    name: "Honey Lavender Classic",
    size: "100ml",
    fullName: "Honey Lavender Classic - 100ml",
    price: 66900,
    formattedPrice: "IDR 66.900",
    category: "Lilin Aromaterapi",
    fragrance: "Honey Lavender",
    wax: "Soy Wax",
    wick: "Sumbu Katun",
    description: "Lilin harian yang menenangkan dengan hangat floral yang lembut.",
    longDescription:
      "Lilin yang seimbang untuk kenyamanan sehari-hari, memadukan kelembutan floral, lavender yang menenangkan, dan akhir aroma madu yang hangat.",
    badge: "Favorit Harian",
    image: {
      src: "/images/honey-lavender-classic-hd-1.jpeg",
      alt: "Honey Lavender Classic 100ml dengan jar amber dan tutup hitam",
    },
    gallery: [
      {
        src: "/images/honey-lavender-classic-hd-1.jpeg",
        alt: "Honey Lavender Classic 100ml dengan jar amber dan tutup hitam",
      },
      {
        src: "/images/honey-lavender-classic-hd-2.jpeg",
        alt: "Honey Lavender Classic 100ml terbuka dengan tutup hitam di samping jar",
      },
      {
        src: "/images/honey-lavender-classic-hd-3.jpeg",
        alt: "Honey Lavender Classic 100ml tampak miring di atas batu dekoratif",
      },
    ],
    perfectFor: ["Ruang keluarga", "Kamar tidur", "Ritual harian", "Hadiah"],
    notes: {
      top: "Floral Lembut",
      heart: "Lavender",
      base: "Madu Hangat",
    },
  },
  {
    id: "03",
    slug: "zoe-jar-candle-signature",
    name: "Honey Lavender Signature",
    size: "250ml",
    fullName: "Honey Lavender Signature - 250ml",
    price: 149000,
    formattedPrice: "IDR 149.000",
    category: "Lilin Aromaterapi",
    fragrance: "Honey Lavender",
    wax: "Soy Wax",
    wick: "Sumbu Katun",
    description: "Lilin signature untuk ruang bermakna dan hadiah yang istimewa.",
    longDescription:
      "Lilin premium yang dirancang untuk mengisi ruang dengan kehangatan, elegansi, dan aroma floral yang menenangkan, personal, dan mudah dikenang.",
    badge: "Signature",
    image: {
      src: "/images/honey-lavender-signature-hd-1.jpeg",
      alt: "Honey Lavender Signature 250ml dengan jar amber dan tutup hitam",
    },
    gallery: [
      {
        src: "/images/honey-lavender-signature-hd-1.jpeg",
        alt: "Honey Lavender Signature 250ml dengan jar amber dan tutup hitam",
      },
      {
        src: "/images/honey-lavender-signature-hd-2.jpeg",
        alt: "Honey Lavender Signature 250ml terbuka dengan tutup hitam di samping jar",
      },
      {
        src: "/images/honey-lavender-signature-hd-3.jpeg",
        alt: "Honey Lavender Signature 250ml tampak miring di atas batu dekoratif",
      },
    ],
    perfectFor: [
      "Ruang keluarga",
      "Hadiah istimewa",
      "Hampers",
      "Perayaan bermakna",
    ],
    notes: {
      top: "Floral Lembut",
      heart: "Lavender",
      base: "Madu Hangat",
    },
  },
  {
    id: "04",
    slug: "honey-lavender-clear",
    name: "Honey Lavender Clear",
    size: "250ml",
    fullName: "Honey Lavender Clear - 250ml",
    price: 200000,
    formattedPrice: "IDR 200.000",
    category: "Lilin Aromaterapi",
    fragrance: "Honey Lavender",
    wax: "Soy Wax",
    wick: "Sumbu Katun",
    description: "Lilin harian yang menenangkan dengan hangat floral yang lembut.",
    longDescription:
      "Lilin yang seimbang untuk kenyamanan sehari-hari, memadukan kelembutan floral, lavender yang menenangkan, dan akhir aroma madu yang hangat.",
    badge: "Favorit Harian",
    image: {
      src: "/images/honey-lavender-clear-hd-3.jpeg",
      alt: "Honey Lavender Clear 250ml dengan jar bening dan tutup kayu",
    },
    gallery: [
      {
        src: "/images/honey-lavender-clear-hd-3.jpeg",
        alt: "Honey Lavender Clear 250ml dengan jar bening dan tutup kayu",
      },
      {
        src: "/images/honey-lavender-clear-hd-2.jpeg",
        alt: "Honey Lavender Clear 250ml dengan tutup kayu di samping jar",
      },
      {
        src: "/images/honey-lavender-clear-hd-1.jpeg",
        alt: "Honey Lavender Clear 250ml tampak miring di atas batu dekoratif",
      },
    ],
    perfectFor: ["Ruang keluarga", "Kamar tidur", "Ruang kerja", "Spa"],
    notes: {
      top: "Floral Lembut",
      heart: "Lavender",
      base: "Madu Hangat",
    },
  },
  {
    id: "05",
    slug: "zoe-signature-hand-sanitizer",
    name: "Zoe Signature Hand Sanitizer",
    size: "10ml",
    fullName: "Zoe Signature Hand Sanitizer",
    price: 14200,
    formattedPrice: "IDR 14.200",
    category: "Souvenirs",
    fragrance: "Floral Lembut",
    wax: "Hand Sanitizer",
    wick: "Custom Label",
    description:
      "Hadiah kecil yang membawa kehangatan, keindahan, dan wangi yang berkesan.",
    longDescription:
      "Hadiah kecil yang membawa kehangatan, keindahan, dan wangi yang berkesan ✨\n\nSouvenir candle dari Zoe Everblossom hadir sebagai pilihan elegan untuk melengkapi momen spesialmu. Dengan tampilan yang cantik, aroma yang lembut, dan nuansa hangat saat dinyalakan, candle ini bukan hanya menjadi souvenir, tetapi juga pengalaman manis untuk setiap penerima.\n\nCocok untuk berbagai acara spesial seperti pernikahan, ulang tahun, bridal shower, baby shower, corporate event, hampers, gathering, hingga momen intimate bersama orang terkasih.",
    badge: "Souvenir Elegan",
    image: {
      src: "/images/zoe-signature-hand-sanitizer.png",
      alt: "Zoe Signature Hand Sanitizer souvenir dengan label floral dan dekorasi mutiara",
    },
    details: [
      ["Kategori", "Souvenirs"],
      ["Jenis", "Hand Sanitizer"],
      ["Aroma", "Floral Lembut"],
      ["Detail", "Custom Label"],
      ["Dibuat di", "Indonesia"],
    ].map(([label, value]) => ({ label, value })),
    careTitle: "Catatan Souvenir",
    careInstructions: [
      "Dapat disesuaikan untuk nama, tanggal, atau tema acara",
      "Cocok untuk pemesanan souvenir dalam jumlah banyak",
      "Simpan di tempat sejuk dan hindari panas berlebih",
      "Hubungi Zoe.Everblossom untuk konsultasi desain label",
    ],
    safetyTitle: "Catatan Pemakaian",
    safetyDescription:
      "Gunakan sesuai kebutuhan, hindari area mata, dan jauhkan dari jangkauan anak-anak tanpa pengawasan.",
    perfectFor: [
      "Pernikahan",
      "Ulang tahun",
      "Bridal shower",
      "Baby shower",
      "Corporate event",
      "Hampers",
      "Gathering",
    ],
    notes: {
      top: "Floral Lembut",
      heart: "Sentuhan Bersih",
      base: "Kesan Hangat",
    },
  },
  {
    id: "06",
    slug: "zoe-glassy-hand-sanitizer",
    name: "Zoe Glassy Hand Sanitizer",
    size: "10ml",
    fullName: "Zoe Glassy Hand Sanitizer",
    price: 15500,
    formattedPrice: "IDR 15.500",
    category: "Souvenirs",
    fragrance: "Floral Lembut",
    wax: "Hand Sanitizer",
    wick: "Botol Kaca",
    description:
      "Hand sanitizer souvenir 10ml dalam botol kaca dengan tampilan lebih elegan dan premium.",
    longDescription:
      "Hand sanitizer souvenir 10ml dalam botol kaca dengan tampilan lebih elegan dan premium.\n\nHadiah kecil yang membawa kehangatan, keindahan, dan wangi yang berkesan ✨\n\nSouvenir candle dari Zoe Everblossom hadir sebagai pilihan elegan untuk melengkapi momen spesialmu. Dengan tampilan yang cantik, aroma yang lembut, dan nuansa hangat saat dinyalakan, candle ini bukan hanya menjadi souvenir, tetapi juga pengalaman manis untuk setiap penerima.\n\nCocok untuk berbagai acara spesial seperti pernikahan, ulang tahun, bridal shower, baby shower, corporate event, hampers, gathering, hingga momen intimate bersama orang terkasih.",
    badge: "Premium Glass",
    image: {
      src: "/images/zoe-glassy-hand-sanitizer.png",
      alt: "Zoe Glassy Hand Sanitizer 10ml dalam botol kaca dengan pita dan pouch souvenir",
    },
    details: [
      ["Kategori", "Souvenirs"],
      ["Jenis", "Hand Sanitizer"],
      ["Ukuran", "10ml"],
      ["Kemasan", "Botol Kaca"],
      ["Aroma", "Floral Lembut"],
      ["Dibuat di", "Indonesia"],
    ].map(([label, value]) => ({ label, value })),
    careTitle: "Catatan Souvenir",
    careInstructions: [
      "Dapat disesuaikan untuk nama, tanggal, atau tema acara",
      "Cocok untuk pemesanan souvenir dalam jumlah banyak",
      "Simpan di tempat sejuk dan hindari panas berlebih",
      "Hubungi Zoe.Everblossom untuk konsultasi desain label",
    ],
    safetyTitle: "Catatan Pemakaian",
    safetyDescription:
      "Gunakan sesuai kebutuhan, hindari area mata, dan jauhkan dari jangkauan anak-anak tanpa pengawasan.",
    perfectFor: [
      "Pernikahan",
      "Ulang tahun",
      "Bridal shower",
      "Baby shower",
      "Corporate event",
      "Hampers",
      "Gathering",
    ],
    notes: {
      top: "Floral Lembut",
      heart: "Sentuhan Bersih",
      base: "Kesan Premium",
    },
  },
  {
    id: "07",
    slug: "zoe-hampers-lebaran",
    name: "Zoe Hampers Lebaran",
    size: "Limited Eid Hampers",
    fullName: "Zoe Hampers Lebaran",
    price: 385000,
    formattedPrice: "IDR 385.000",
    category: "Hampers",
    fragrance: "Honey Lavender",
    wax: "Soy Wax",
    wick: "Sumbu Katun",
    description:
      "Limited Eid Hampers penuh makna untuk Lebaran yang hangat dan berkesan.",
    longDescription:
      "Lebaran adalah tentang kehangatan, cahaya, dan kebersamaan. Zoe Everblossom menghadirkan Limited Eid Hampers yang memadukan Candle Zoe Honey Lavender, Candle Zoe flower yang cantik dan timeless, carousel jar multifungsi, Nastar Premium, serta kurma pilihan terbaik. Satu box penuh makna dengan stok sangat terbatas.",
    badge: "Limited Hampers",
    image: {
      src: "/images/zoe-hampers-lebaran.jpeg",
      alt: "Zoe Hampers Lebaran berisi Honey Lavender candle, nastar, kurma, dan flower candle",
    },
    perfectFor: [
      "Hampers Lebaran",
      "Hadiah keluarga",
      "Perayaan bermakna",
      "Ucapan hangat",
    ],
    notes: {
      top: "Floral Lembut",
      heart: "Lavender",
      base: "Madu Hangat",
    },
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function createWhatsAppLink(productName?: string) {
  const message = productName
    ? `Halo Zoe.Everblossom, saya mau pesan ${productName}.`
    : "Halo Zoe.Everblossom, saya mau tanya tentang candle dan hampers.";

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
