import { Heart } from "lucide-react";
import { weddingConfig } from "@/config/wedding";

export default function QuoteSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/5 to-transparent" />
        <Heart className="absolute left-[10%] top-12 h-4 w-4 fill-primary/10 text-primary/10" />
        <Heart className="absolute right-[12%] bottom-14 h-5 w-5 fill-primary/10 text-primary/10" />
      </div>

      <div className="mx-auto max-w-5xl px-6">
        <div className="scroll-reveal mx-auto max-w-2xl rounded-[28px] border border-primary/10 bg-white/60 px-8 py-12 text-center shadow-[0_20px_60px_rgba(0,0,0,0.06)] backdrop-blur-sm md:px-12 md:py-14">
          <div className="mb-4 flex justify-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-primary/5">
              <Heart className="h-4 w-4 fill-primary/70 text-primary/70" />
            </div>
          </div>

          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.4em] text-primary/80">
            {weddingConfig.quote.author}
          </p>

          <blockquote className="text-lg italic leading-8 text-foreground md:text-3xl md:leading-[1.8]">
            “{weddingConfig.quote.text}”
          </blockquote>

          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="h-px w-14 bg-primary/25" />
            <span className="h-1.5 w-1.5 rounded-full bg-primary/50" />
            <span className="h-px w-14 bg-primary/25" />
          </div>
        </div>
      </div>
    </section>
  );
}