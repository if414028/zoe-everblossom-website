import { ReactNode } from "react";
import { cn } from "@/src/components/utils";

export function FeatureCard({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "rounded-[28px] border border-[rgba(200,164,93,0.35)] bg-[rgba(255,249,239,0.66)] p-7 shadow-[0_18px_50px_rgba(74,53,38,0.07)]",
        className,
      )}
    >
      <div className="mb-5 h-10 w-10 rounded-full bg-[linear-gradient(135deg,var(--dusty-pink),var(--soft-yellow))]" />
      <h3 className="font-serif text-2xl text-[var(--deep-brown)]">{title}</h3>
      <p className="mt-3 leading-7 text-[var(--soft-brown)]">{children}</p>
    </article>
  );
}

export function TestimonialCard({ quote }: { quote: string }) {
  return (
    <figure className="rounded-[28px] border border-[rgba(200,164,93,0.28)] bg-[rgba(255,249,239,0.7)] p-7 shadow-[0_18px_50px_rgba(74,53,38,0.07)]">
      <blockquote className="font-serif text-2xl leading-9 text-[var(--deep-brown)]">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--champagne-gold)]">
        Zoe customer
      </figcaption>
    </figure>
  );
}
