import { useState, useEffect, useRef } from "react";
import HeroSection from "@/components/wedding/HeroSection";
import QuoteSection from "@/components/wedding/QuoteSection";
import CoupleSection from "@/components/wedding/CoupleSection";
import EventSection from "@/components/wedding/EventSection";
import GallerySection from "@/components/wedding/GallerySection";
import VideoSection from "@/components/wedding/VideoSection";
import RsvpSection from "@/components/wedding/RsvpSection";
import GiftSection from "@/components/wedding/GiftSection";
import FooterSection from "@/components/wedding/FooterSection";
import MusicPlayer from "@/components/wedding/MusicPlayer";
import FloatingHearts from "@/components/wedding/FloatingHearts";

export default function Index() {
  const [opened, setOpened] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Scroll reveal observer - watches all reveal classes
  useEffect(() => {
    if (!opened) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const timer = setTimeout(() => {
      const selectors = ".scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale, .stagger-children";
      const els = contentRef.current?.querySelectorAll(selectors);
      els?.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [opened]);

  return (
    <div className="min-h-screen bg-background">
      {!opened && <HeroSection onOpen={() => setOpened(true)} />}

      {opened && (
        <>
          <FloatingHearts />
          <div ref={contentRef} className="animate-fade-in">
            <QuoteSection />
            <CoupleSection />
            <EventSection />
            <GallerySection />
            <VideoSection />
            <RsvpSection />
            <GiftSection />
            <FooterSection />
          </div>
        </>
      )}

      <MusicPlayer shouldPlay={opened} />
    </div>
  );
}
