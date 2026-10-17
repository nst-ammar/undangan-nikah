import { useEffect, useState } from "react";
import { IMAGES } from "../data";

interface Props {
  onOpen: () => void;
}

export default function CoverOverlay({ onOpen }: Props) {
  const [closing, setClosing] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    document.body.style.overflow = hidden ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [hidden]);

  if (hidden) return null;

  const handleOpen = () => {
    setClosing(true);
    onOpen();
    setTimeout(() => setHidden(true), 1000);
  };

  return (
    <section
      className={`fixed inset-0 z-[60] flex items-center justify-center bg-surface transition-all duration-1000 overflow-hidden ${
        closing ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-surface/40 pointer-events-none" />
      <div className="relative z-10 max-w-xl mx-auto px-gutter text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container-high text-action font-label-sm text-label-sm uppercase tracking-widest mb-space-md shadow-sm">
          <span className="material-symbols-outlined !text-[16px] text-secondary">favorite</span>
          <span>The Wedding Celebration</span>
        </div>
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-navy tracking-tight mb-space-xs">
          Fulan &amp; Fulana
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">
          Sabtu, 24 Agustus 2024 • Jakarta
        </p>
        <div className="relative w-48 h-64 md:w-56 md:h-72 rounded-full overflow-hidden shadow-2xl mb-space-lg">
          <img
            className="w-full h-full object-cover"
            alt="Potret pasangan mempelai muslim Fulan dan Fulana dalam busana pernikahan islami"
            src={IMAGES.cover}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
        </div>
        <div className="bg-surface-container-lowest/90 backdrop-blur-md rounded-xl p-space-md shadow-md mb-space-lg w-full max-w-md">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-1">
            Kepada Yth. Bapak/Ibu/Saudara/i
          </span>
          <h3 className="font-headline-sm text-headline-sm text-on-surface">Dimas &amp; Partner</h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
            Tanpa mengurangi rasa hormat, kami mengundang Anda untuk hadir di hari bahagia kami.
          </p>
        </div>
        <button
          className="group inline-flex items-center gap-space-sm px-space-lg py-3.5 bg-action text-white rounded-full font-label-lg text-label-lg uppercase tracking-wider hover:bg-action/90 transition-all shadow-xl hover:-translate-y-0.5 cursor-pointer"
          type="button"
          onClick={handleOpen}
        >
          <span className="material-symbols-outlined !text-[20px] transition-transform group-hover:scale-110">
            music_note
          </span>
          <span>Buka Undangan</span>
        </button>
      </div>
    </section>
  );
}
