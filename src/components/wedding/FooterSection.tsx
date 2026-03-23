import { weddingConfig } from "@/config/wedding";

export default function FooterSection() {
  const { families } = weddingConfig;

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="scroll-reveal">
          <p className="section-title tracking-[0.3em] mb-2">Thank You</p>
          <p className="font-script text-gold text-2xl md:text-3xl mb-6">
            Cảm ơn sự hiện diện & lời chúc phúc
          </p>
          <div className="flex items-center justify-center gap-4 mb-10">
            <span className="h-px w-16 bg-primary/20" />
            <span className="text-gold text-xl">🕊</span>
            <span className="h-px w-16 bg-primary/20" />
          </div>

          <p className="font-body text-muted-foreground text-xs uppercase tracking-[0.2em] mb-8">
            Với tình yêu từ gia đình hai bên
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div className="wedding-card">
              <p className="font-body text-muted-foreground text-xs mb-1">{families.bride.family}</p>
              <p className="font-serif-display text-foreground font-bold text-lg uppercase tracking-wider">
                {weddingConfig.couple.bride.firstName.toUpperCase()}
              </p>
              <p className="font-body text-muted-foreground text-xs mt-1">{families.bride.parents}</p>
            </div>
            <div className="wedding-card">
              <p className="font-body text-muted-foreground text-xs mb-1">{families.groom.family}</p>
              <p className="font-serif-display text-foreground font-bold text-lg uppercase tracking-wider">
                {weddingConfig.couple.groom.firstName.toUpperCase()}
              </p>
              <p className="font-body text-muted-foreground text-xs mt-1">{families.groom.parents}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
