import { weddingConfig } from "@/config/wedding";

export default function CoupleSection() {
  const { bride, groom } = weddingConfig.couple;

  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <div className="scroll-reveal text-center mb-16">
          <p className="font-body text-muted-foreground text-sm md:text-base italic">
            Với tình yêu lớn lao, xin trân trọng kính mời quý khách cùng gia quyến
            đến dự lễ cưới của chúng tôi
          </p>
          <span className="animate-pulse-heart text-gold text-2xl mt-4 block">♥</span>
        </div>

        {/* Bride */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-20">
          <div className="md:w-1/2 flex justify-center scroll-reveal-left">
            <div className="relative">
              <div className="absolute -inset-3 bg-secondary rounded-lg -rotate-3" />
              <img
                src={bride.image}
                alt={bride.fullName}
                className="relative w-64 h-80 object-cover rounded-lg"
                loading="lazy"
                width={640}
                height={800}
              />
            </div>
          </div>
          <div className="md:w-1/2 text-center md:text-left scroll-reveal-right">
            <p className="section-title mb-2">Cô Dâu</p>
            <h3 className="section-title text-lg tracking-[0.15em] mb-1">{bride.firstName.toUpperCase()}</h3>
            <p className="font-script text-gold text-4xl mb-3">{bride.lastName}</p>
            <p className="font-body text-muted-foreground text-sm">{bride.description}</p>
          </div>
        </div>

        {/* Groom */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="md:w-1/2 flex justify-center scroll-reveal-right">
            <div className="relative">
              <div className="absolute -inset-3 bg-terracotta/20 rounded-lg rotate-3" />
              <img
                src={groom.image}
                alt={groom.fullName}
                className="relative w-64 h-80 object-cover rounded-lg"
                loading="lazy"
                width={640}
                height={800}
              />
            </div>
          </div>
          <div className="md:w-1/2 text-center md:text-right scroll-reveal-left">
            <p className="section-title mb-2">Chú Rể</p>
            <h3 className="section-title text-lg tracking-[0.15em] mb-1">{groom.firstName.toUpperCase()}</h3>
            <p className="font-script text-gold text-4xl mb-3">{groom.lastName}</p>
            <p className="font-body text-muted-foreground text-sm">{groom.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
