import Link from "next/link";
import { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/src/components/utils";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "gold" | "ghost";
  className?: string;
} & Omit<ComponentPropsWithoutRef<"button">, "className">;

const variants = {
  primary:
    "bg-[var(--deep-brown)] text-[var(--white-cream)] shadow-[0_18px_40px_rgba(74,53,38,0.18)] hover:bg-[var(--soft-brown)]",
  secondary:
    "border border-[var(--champagne-gold)] bg-transparent text-[var(--deep-brown)] hover:bg-[rgba(200,164,93,0.13)]",
  gold: "bg-[var(--champagne-gold)] text-[var(--deep-brown)] hover:bg-[#d7b875]",
  ghost:
    "bg-[rgba(255,249,239,0.75)] text-[var(--deep-brown)] hover:bg-[var(--white-cream)]",
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--champagne-gold)]",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
