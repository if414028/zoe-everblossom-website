import { Button } from "@/src/components/Button";

export function Newsletter() {
  return (
    <section className="px-5 py-14 md:py-24">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[32px] border border-[rgba(200,164,93,0.4)] bg-[linear-gradient(135deg,rgba(255,249,239,0.92),rgba(234,221,200,0.78))] p-8 shadow-[0_24px_70px_rgba(74,53,38,0.1)] md:p-12">
        <div className="grid gap-8 md:grid-cols-[1fr_1.15fr] md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-[var(--champagne-gold)]">
              Newsletter
            </p>
            <h2 className="mt-3 font-serif text-4xl text-[var(--deep-brown)]">
              Terima Catatan Lembut dari Zoe
            </h2>
          </div>
          <form className="flex flex-col gap-3 sm:flex-row" action="#">
            <label className="sr-only" htmlFor="newsletter-email">
              Alamat email
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Alamat email kamu"
              className="min-h-12 flex-1 rounded-full border border-[rgba(200,164,93,0.45)] bg-[rgba(255,249,239,0.85)] px-5 text-[var(--deep-brown)] outline-none transition-all duration-300 placeholder:text-[rgba(122,90,67,0.64)] focus:border-[var(--champagne-gold)] focus:ring-4 focus:ring-[rgba(200,164,93,0.18)]"
            />
            <Button type="submit" variant="primary">
              Berlangganan
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
