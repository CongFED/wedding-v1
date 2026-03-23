import { useState, useEffect } from "react";
import { weddingConfig } from "@/config/wedding";
import leafOrnament from "@/assets/leaf-ornament.png";

interface HeroSectionProps {
  onOpen: () => void;
}

function HeroHearts() {
  const [hearts, setHearts] = useState<
    Array<{ id: number; x: number; y: number; size: number; delay: number; duration: number }>
  >([]);

  useEffect(() => {
    setHearts(
      Array.from({ length: 14 }, (_, i) => ({
        id: i,
        x: 8 + Math.random() * 84,
        y: 8 + Math.random() * 80,
        size: 10 + Math.random() * 18,
        delay: Math.random() * 3,
        duration: 2.5 + Math.random() * 2.5,
      }))
    );
  }, []);

  return (
    <>
      {hearts.map((h) => (
        <span
          key={h.id}
          className="pointer-events-none absolute select-none text-[#f3c98b]/30 animate-float-heart"
          style={{
            left: `${h.x}%`,
            top: `${h.y}%`,
            fontSize: `${h.size}px`,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s`,
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
    setTimeout(onOpen, 650);
  };

  return (
    <section
      className={`relative flex min-h-screen items-center justify-center overflow-hidden transition-all duration-700 ${
        opened ? "scale-95 opacity-0 pointer-events-none" : ""
      }`}
      style={{
        background:
          "linear-gradient(135deg, #e89a84 0%, #d87c62 38%, #c96c53 70%, #b85e47 100%)",
      }}
    >
      <HeroHearts />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,245,235,0.20),transparent_28%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.12),transparent_24%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_75%,rgba(255,220,190,0.10),transparent_22%)]" />
        <div className="absolute inset-0 bg-black/5" />
      </div>

      <img
        src={leafOrnament}
        alt=""
        className="pointer-events-none absolute bottom-0 right-0 w-56 translate-x-10 translate-y-10 opacity-20 blur-[0.5px] md:w-80"
        width={512}
        height={512}
      />

      <img
        src={leafOrnament}
        alt=""
        className="pointer-events-none absolute left-0 top-0 w-40 -translate-x-12 -translate-y-8 rotate-180 opacity-10 blur-[1px] md:w-56"
        width={512}
        height={512}
      />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 text-center">
        <div className="animate-fade-in-up mx-auto max-w-2xl">
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-white/35 md:w-16" />
            <p className="text-sm uppercase tracking-[0.45em] text-white/90 md:text-base">
              Wedding
            </p>
            <span className="h-px w-10 bg-white/35 md:w-16" />
          </div>

          <h1 className="mb-8 font-script text-5xl leading-none text-[#f3d19c] drop-shadow-[0_4px_14px_rgba(120,60,25,0.24)] md:text-7xl">
            Invitation
          </h1>

          <div className="relative mb-8">
            <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f3d19c]/10 blur-3xl md:h-56 md:w-56" />

            <div className="relative">
              <span className="block font-script text-[54px] leading-none text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.18)] md:text-[92px]">
                {weddingConfig.couple.groom.firstName}
              </span>

              <span className="my-1 inline-block font-script text-4xl leading-none text-[#f3d19c] drop-shadow-[0_2px_10px_rgba(120,60,25,0.24)] md:my-2 md:text-6xl">
                &
              </span>

              <span className="block font-script text-[54px] leading-none text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.18)] md:text-[92px]">
                {weddingConfig.couple.bride.firstName}
              </span>
            </div>
          </div>

          <div className="mb-8 space-y-2">
            <p className="text-base italic text-white/85 md:text-lg">
              Trân trọng kính mời
            </p>
            <p className="font-script text-3xl text-[#f3d19c] drop-shadow-[0_2px_10px_rgba(120,60,25,0.2)] md:text-5xl">
              {weddingConfig.guestName}
            </p>
            <p className="pt-1 text-sm text-white/80 md:text-base">
              Đến dự lễ cưới của chúng tôi
            </p>
          </div>

          <button
            onClick={handleOpen}
            className="group inline-flex items-center gap-2 rounded-2xl border border-[#f3d19c]/45 bg-white/8 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_12px_30px_rgba(0,0,0,0.14)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/14 hover:shadow-[0_16px_36px_rgba(0,0,0,0.18)] md:px-7 md:py-3.5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
            >
              <rect width="18" height="13" x="3" y="4" rx="2" />
              <path d="m3 4 9 8 9-8" />
            </svg>
            Mở thiệp
          </button>
        </div>
      </div>
    </section>
  );
}