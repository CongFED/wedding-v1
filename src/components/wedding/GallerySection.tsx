import { useState } from "react";
import { weddingConfig } from "@/config/wedding";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const navigate = (dir: 1 | -1) => {
    if (lightbox === null) return;
    const len = weddingConfig.gallery.length;
    setLightbox((lightbox + dir + len) % len);
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="scroll-reveal text-center mb-12">
          <p className="section-title tracking-[0.3em]">Our Gallery</p>
          <span className="animate-pulse-heart text-gold text-xl mt-3 block">♥</span>
        </div>

        <div className="stagger-children grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {weddingConfig.gallery.map((img, i) => (
            <div
              key={i}
              onClick={() => setLightbox(i)}
              className={`gallery-item group ${i % 3 === 0 ? "row-span-2" : ""}`}
            >
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox with nav */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
          >
            <X size={32} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navigate(-1); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
          >
            <ChevronLeft size={40} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navigate(1); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
          >
            <ChevronRight size={40} />
          </button>
          <img
            src={weddingConfig.gallery[lightbox]}
            alt=""
            className="max-w-full max-h-[85vh] object-contain rounded-lg animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
