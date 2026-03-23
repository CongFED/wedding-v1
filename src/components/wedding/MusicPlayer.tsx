import { useRef, useState, useEffect } from "react";
import { weddingConfig } from "@/config/wedding";

interface MusicPlayerProps {
  shouldPlay: boolean;
}

export default function MusicPlayer({ shouldPlay }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (shouldPlay && audioRef.current && !playing) {
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
    }
  }, [shouldPlay]);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  return (
   <>
  <audio ref={audioRef} src={weddingConfig.music} loop preload="auto" />

  <button
    onClick={toggle}
    className={`vinyl ${playing ? "spinning" : ""}`}
    aria-label={playing ? "Tắt nhạc" : "Bật nhạc"}
  >
    <div className="vinyl-inner">
      <div className="vinyl-label"></div>
    </div>
  </button>
</>
  );
}
