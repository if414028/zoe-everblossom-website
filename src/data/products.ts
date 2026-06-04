export type Product = {
  id: string;
  slug: string;
  name: string;
  size: string;
  fullName: string;
  price: number;
  formattedPrice: string;
  fragrance: string;
  wax: string;
  wick: string;
  description: string;
  longDescription: string;
  badge: string;
  perfectFor: string[];
  notes: {
    top: string;
    heart: string;
    base: string;
  };
};

export const whatsappNumber = "6281234567890";

export const products: Product[] = [
  {
    id: "01",
    slug: "zoe-jar-candle-mini",
    name: "Zoe Jar Candle Mini",
    size: "50ml",
    fullName: "Zoe Jar Candle Mini - 50ml",
    price: 36900,
    formattedPrice: "IDR 36.900",
    fragrance: "Honey Lavender",
    wax: "Soy Wax",
    wick: "Sumbu Katun",
    description: "Lilin mungil untuk momen tenang yang manis dan personal.",
    longDescription:
      "Lilin floral lembut dengan sentuhan madu yang hangat dan aroma lavender yang menenangkan, dibuat untuk menghadirkan rasa nyaman di ruang personalmu.",
    badge: "Hadiah Mini",
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
    name: "Zoe Jar Candle Classic",
    size: "100ml",
    fullName: "Zoe Jar Candle Classic - 100ml",
    price: 66900,
    formattedPrice: "IDR 66.900",
    fragrance: "Honey Lavender",
    wax: "Soy Wax",
    wick: "Sumbu Katun",
    description: "Lilin harian yang menenangkan dengan hangat floral yang lembut.",
    longDescription:
      "Lilin yang seimbang untuk kenyamanan sehari-hari, memadukan kelembutan floral, lavender yang menenangkan, dan akhir aroma madu yang hangat.",
    badge: "Favorit Harian",
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
    name: "Zoe Jar Candle Signature",
    size: "250ml",
    fullName: "Zoe Jar Candle Signature - 250ml",
    price: 149000,
    formattedPrice: "IDR 149.000",
    fragrance: "Honey Lavender",
    wax: "Soy Wax",
    wick: "Sumbu Katun",
    description: "Lilin signature untuk ruang bermakna dan hadiah yang istimewa.",
    longDescription:
      "Lilin premium yang dirancang untuk mengisi ruang dengan kehangatan, elegansi, dan aroma floral yang menenangkan, personal, dan mudah dikenang.",
    badge: "Signature",
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
