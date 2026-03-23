import { useState, useEffect } from "react";
import { weddingConfig } from "@/config/wedding";
import { MapPin } from "lucide-react";

function Countdown({ targetDate }: { targetDate: string }) {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calc = () => {
      const diff = new Date(targetDate).getTime() - Date.now();
      if (diff <= 0) return;
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  const items = [
    { value: time.days, label: "Ngày" },
    { value: time.hours, label: "Giờ" },
    { value: time.minutes, label: "Phút" },
    { value: time.seconds, label: "Giây" },
  ];

  return (
    <div className="flex gap-3 justify-center">
      {items.map((item) => (
        <div key={item.label} className="countdown-box">
          <span className="font-serif-display text-xl md:text-2xl font-bold">{item.value}</span>
          <span className="text-[10px] uppercase tracking-wider opacity-80">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

function EventCard({ event }: { event: typeof weddingConfig.events.ceremony }) {
  return (
    <div className="scroll-reveal">
      <div className="relative rounded-lg overflow-hidden mb-6">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-48 md:h-56 object-cover"
          loading="lazy"
          width={800}
          height={512}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent flex items-end p-6">
          <div>
            <p className="font-serif-display text-primary-foreground uppercase tracking-[0.2em] text-sm font-semibold">
              Wedding
            </p>
            <p className="font-script text-gold-light text-3xl">{event.title}</p>
          </div>
        </div>
      </div>

      <div className="text-center space-y-3">
        <p className="font-serif-display text-foreground tracking-[0.3em] text-lg">
          {new Date(event.date).toLocaleDateString("vi-VN")}
        </p>
        <p className="font-body text-muted-foreground text-sm uppercase tracking-widest">
          {event.time}
        </p>
        <p className="font-serif-display text-foreground font-semibold uppercase tracking-widest text-sm">
          {event.venue}
        </p>
        <a
          href={event.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-wedding inline-flex text-xs"
        >
          <MapPin size={14} />
          Xem Bản Đồ
        </a>
      </div>
    </div>
  );
}

export default function EventSection() {
  const { ceremony, reception } = weddingConfig.events;

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="scroll-reveal text-center mb-12">
          <p className="section-title">Wedding</p>
          <p className="section-subtitle">Event</p>
          <div className="flex items-center justify-center gap-4 mt-4">
            <span className="h-px flex-1 max-w-32 bg-primary/20" />
            <span className="h-px flex-1 max-w-32 bg-primary/20" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <EventCard event={ceremony} />
          <EventCard event={reception} />
        </div>

        <div className="scroll-reveal text-center">
          <p className="font-serif-display text-foreground tracking-[0.3em] text-lg mb-6">
            Đếm ngược
          </p>
          <Countdown targetDate={weddingConfig.weddingDate} />
        </div>
      </div>
    </section>
  );
}
