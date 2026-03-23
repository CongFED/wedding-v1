import { useState, useEffect } from "react";
import { weddingConfig } from "@/config/wedding";
import leafOrnament from "@/assets/leaf-ornament.png";

interface HeroSectionProps {
  onOpen: () => void;
}

function HeroHearts() {
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([]);

  useEffect(() => {
    setHearts(
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        x: 10 + Math.random() * 80,
        y: 10 + Math.random() * 80,
        size: 12 + Math.random() * 20,
        delay: Math.random() * 3,
      }))
    );
  }, []);

  return (
    <>
      {hearts.map((h) => (
        <span
          key={h.id}
          className="absolute animate-pulse-heart pointer-events-none"
          style={{
            left: `${h.x}%`,
            top: `${h.y}%`,
            fontSize: `${h.size}px`,
            animationDelay: `${h.delay}s`,
            opacity: 0.1 + Math.random() * 0.15,
            color: "hsl(38, 60%, 55%)",
          }}
        >
          ♥
        </span>
      ))}
    </>
  );
}

export default function HeroSection({ onOpen }: HeroSectionProps) {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(true);
    setTimeout(onOpen, 600);
  };

  return (
    <section
      className={`min-h-screen flex items-center justify-center relative overflow-hidden transition-all duration-700 ${opened ? "opacity-0 scale-95 pointer-events-none" : ""}`}
      style={{ backgroundColor: "hsl(16, 45%, 45%)" }}
    >
      <HeroHearts />

      {/* Leaf ornament */}
      <img
        src={leafOrnament}
        alt=""
        className="absolute bottom-0 right-0 w-64 md:w-80 opacity-30 translate-x-10 translate-y-10"
        width={512}
        height={512}
      />

      <div className="text-center px-6 animate-fade-in-up z-10">
        <h2 className="font-serif-display text-primary-foreground text-lg md:text-xl tracking-[0.3em] uppercase mb-2">
          Wedding
        </h2>
        <h1 className="font-script text-gold text-4xl md:text-6xl mb-8">
          Invitation
        </h1>

        <div className="mb-6">
          <span className="font-script text-primary-foreground text-5xl md:text-7xl block">
            {weddingConfig.couple.groom.firstName}
          </span>
          <span className="font-script text-gold text-4xl md:text-5xl mx-4 animate-pulse-heart">&</span>
          <span className="font-script text-primary-foreground text-5xl md:text-7xl block">
            {weddingConfig.couple.bride.firstName}
          </span>
        </div>

        <p className="text-primary-foreground/80 font-body text-sm md:text-base mb-1 italic">
          Trân trọng kính mời
        </p>
        <p className="font-script text-gold text-2xl md:text-3xl mb-8">
          {weddingConfig.guestName}
        </p>
        <p className="text-primary-foreground/70 font-body text-sm mb-8">
          Đến dự lễ cưới của chúng tôi
        </p>

        <button onClick={handleOpen} className="btn-wedding border border-gold/30 bg-transparent hover:bg-primary-foreground/10 group">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:scale-110"><rect width="18" height="13" x="3" y="4" rx="2"/><path d="m3 4 9 8 9-8"/></svg>
          Mở Thiệp
        </button>
      </div>
    </section>
  );
}
