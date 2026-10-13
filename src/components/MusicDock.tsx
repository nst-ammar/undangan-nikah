import { useState } from "react";

export default function MusicDock() {
  const [playing, setPlaying] = useState(true);

  return (
    <aside className="fixed bottom-6 right-6 z-40 flex items-center gap-space-sm bg-surface-container-lowest/90 backdrop-blur-md px-space-md py-space-sm rounded-full shadow-[0_12px_32px_-4px_rgba(45,49,46,0.08),0_4px_12px_-2px_rgba(197,160,89,0.12)]">
      <button
        aria-label="Toggle Wedding Melody"
        className={`w-9 h-9 rounded-full bg-primary flex items-center justify-center text-on-primary hover:bg-primary-container transition-colors cursor-pointer ${
          playing ? "animate-spin [animation-duration:4s]" : ""
        }`}
        type="button"
        onClick={() => setPlaying((p) => !p)}
      >
        <span className="material-symbols-outlined text-[20px]">music_note</span>
      </button>
      <div className="hidden sm:flex flex-col text-left">
        <span className="font-label-sm text-label-sm text-secondary uppercase">Canon in D Major</span>
        <span className="font-body-sm text-body-sm text-on-surface-variant">Romansa Raditya &amp; Kirana</span>
      </div>
      <button
        aria-label="Play or Pause"
        className="w-7 h-7 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
        type="button"
        onClick={() => setPlaying((p) => !p)}
      >
        <span className="material-symbols-outlined text-[20px]">{playing ? "pause" : "play_arrow"}</span>
      </button>
    </aside>
  );
}
