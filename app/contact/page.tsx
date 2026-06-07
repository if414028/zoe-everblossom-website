import type { Metadata } from "next";
import { Camera, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/src/components/Button";
import { SectionHeading } from "@/src/components/SectionHeading";
import { createWhatsAppLink } from "@/src/data/products";
import { buildMetadata } from "@/src/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Kontak",
  description:
    "Hubungi Zoe.Everblossom untuk pemesanan lilin handmade, konsultasi hadiah, hampers, souvenir, dan kolaborasi brand.",
  path: "/contact",
  keywords: ["kontak Zoe Everblossom", "pesan lilin WhatsApp", "konsultasi hampers"],
});

const contacts = [
  { title: "WhatsApp", value: "Pemesanan dan konsultasi", icon: MessageCircle },
  { title: "Instagram", value: "@zoe.everblossom", icon: Camera },
  { title: "Lokasi", value: "Jakarta, Indonesia", icon: MapPin },
  { title: "Email", value: "hello@zoeeverbloom.com", icon: Mail },
];

export default function ContactPage() {
  return (
    <section className="luxury-section">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading eyebrow="Kontak" title="Hubungi Zoe.Everblossom">
          <p>
            Kami senang membantu kamu memilih lilin, hadiah, atau hampers yang
            paling tepat.
          </p>
        </SectionHeading>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {contacts.map((contact) => {
            const Icon = contact.icon;

            return (
              <article
                key={contact.title}
                className="rounded-[28px] border border-[rgba(200,164,93,0.32)] bg-[rgba(255,249,239,0.7)] p-7 shadow-[0_18px_50px_rgba(74,53,38,0.07)]"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(200,164,93,0.14)] text-[var(--deep-brown)]">
                  <Icon size={21} aria-hidden />
                </div>
                <h2 className="font-serif text-2xl text-[var(--deep-brown)]">
                  {contact.title}
                </h2>
                <p className="mt-3 leading-7 text-[var(--soft-brown)]">
                  {contact.value}
                </p>
              </article>
            );
          })}
        </div>
        <div className="mt-14 rounded-[32px] bg-[var(--deep-brown)] p-8 text-center text-[var(--white-cream)] md:p-12">
          <h2 className="font-serif text-4xl">Butuh rekomendasi yang lembut?</h2>
          <p className="mx-auto mt-4 max-w-xl text-[rgba(255,249,239,0.72)]">
            Ceritakan mood, ruang, atau momennya, dan kami akan bantu memilih
            lilin Zoe yang paling sesuai.
          </p>
          <Button href={createWhatsAppLink()} variant="gold" className="mt-8">
            <MessageCircle size={17} aria-hidden /> Chat via WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
