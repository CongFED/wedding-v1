import { weddingConfig } from "@/config/wedding";

export default function QuoteSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-2xl mx-auto text-center px-6">
        <div className="scroll-reveal">
          <p className="section-title mb-4">{weddingConfig.quote.author}</p>
          <p className="font-body text-muted-foreground text-sm md:text-base italic leading-relaxed mb-6">
            "{weddingConfig.quote.text}"
          </p>
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-16 bg-primary/30" />
            <span className="h-px w-16 bg-primary/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
