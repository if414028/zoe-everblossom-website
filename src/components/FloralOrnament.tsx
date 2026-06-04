import { cn } from "@/src/components/utils";

export function FloralOrnament({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute", className)} aria-hidden>
      <span className="absolute h-20 w-20 rounded-full border border-[rgba(200,164,93,0.45)] bg-[rgba(221,166,161,0.22)]" />
      <span className="absolute left-12 top-10 h-24 w-24 rounded-full border border-[rgba(169,190,214,0.45)] bg-[rgba(244,207,106,0.18)]" />
      <span className="absolute left-6 top-20 h-16 w-16 rounded-full border border-[rgba(122,90,67,0.18)] bg-[rgba(255,249,239,0.8)]" />
      <span className="absolute left-4 top-4 h-28 w-28 rotate-45 rounded-[55%_45%_55%_45%] border border-[rgba(200,164,93,0.32)]" />
    </div>
  );
}

export function ProductVisual({ label }: { label: string }) {
  return (
    <div
      className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[28px] border border-[rgba(200,164,93,0.32)] bg-[radial-gradient(circle_at_28%_18%,rgba(221,166,161,0.38),transparent_24%),radial-gradient(circle_at_78%_24%,rgba(169,190,214,0.34),transparent_22%),linear-gradient(135deg,#fff9ef,#eadcc8)]"
      role="img"
      aria-label={`Placeholder lilin ${label}`}
    >
      <div className="absolute left-5 top-5 h-20 w-20 rounded-full border border-[rgba(200,164,93,0.35)]" />
      <div className="absolute bottom-6 right-7 h-24 w-24 rounded-full bg-[rgba(244,207,106,0.22)]" />
      <div className="relative h-36 w-24 rounded-b-[36px] rounded-t-[20px] border border-[rgba(122,90,67,0.22)] bg-[rgba(255,249,239,0.88)] shadow-[0_24px_50px_rgba(74,53,38,0.12)]">
        <div className="mx-auto mt-4 h-12 w-12 rounded-full bg-[rgba(221,166,161,0.32)]" />
        <div className="mx-auto mt-5 h-1.5 w-12 rounded-full bg-[var(--champagne-gold)]" />
        <div className="mx-auto mt-2 h-1.5 w-16 rounded-full bg-[rgba(74,53,38,0.18)]" />
      </div>
    </div>
  );
}
