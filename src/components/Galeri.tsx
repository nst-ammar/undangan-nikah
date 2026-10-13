import { IMAGES } from "../data";

export default function Galeri() {
  return (
    <section className="w-full py-space-xl bg-surface-container-low" id="galeri">
      <div className="max-w-6xl mx-auto px-gutter-mobile lg:px-gutter">
        <div className="text-center max-w-xl mx-auto mb-space-xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold block mb-2">
            Our Sweet Memories
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary">Galeri Kisah &amp; Momen</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            Sepenggal cerita perjalanan kami sebelum melangkah menuju ikatan suci.
          </p>
        </div>

        <div className="mb-space-lg relative rounded-xl overflow-hidden shadow-md group">
          <div
            className="relative w-full h-80 md:h-[420px] bg-cover bg-center"
            style={{ backgroundImage: `url('${IMAGES.teaser}')` }}
          >
            <div className="absolute inset-0 bg-primary/20 backdrop-blur-[1px] flex flex-col items-center justify-center text-center p-space-md transition-opacity group-hover:bg-primary/30">
              <button
                aria-label="Play Teaser Video"
                className="w-16 h-16 rounded-full bg-surface-container-lowest/90 text-primary flex items-center justify-center shadow-xl hover:scale-110 transition-transform mb-space-sm cursor-pointer"
                type="button"
              >
                <span className="material-symbols-outlined icon-filled text-[36px]">play_arrow</span>
              </button>
              <span className="font-label-lg text-label-lg text-on-primary tracking-widest uppercase font-semibold">
                Teaser Pre-Wedding Video
              </span>
              <span className="font-body-sm text-body-sm text-on-primary-container">
                Durasi 02:45 • Kisah Romansa Dua Jiwa
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-space-sm md:gap-space-md">
          {IMAGES.gallery.map((photo, i) => (
            <div key={i} className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-sm group">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                alt={photo.alt}
                src={photo.src}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
