export default function Hero() {
  return (
    <section
      className="relative w-full py-space-xl lg:py-28 overflow-hidden flex flex-col items-center justify-center text-center"
      id="hero"
    >
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-secondary-fixed/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="max-w-4xl mx-auto px-gutter-mobile lg:px-gutter flex flex-col items-center">
        <div className="flex items-center gap-2 mb-space-sm">
          <span className="h-[1px] w-12 bg-secondary-fixed-dim" />
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
            Walimatul ‘Ursy
          </span>
          <span className="h-[1px] w-12 bg-secondary-fixed-dim" />
        </div>
        <p className="font-headline-lg text-headline-lg text-on-surface-variant italic mb-2">The Wedding of</p>
        <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-navy tracking-tight mb-space-md">
          Fulan &amp; Fulana
        </h2>
        <div className="inline-flex flex-wrap justify-center items-center gap-3 px-space-md py-1.5 rounded-full bg-surface-container-low text-on-surface-variant font-label-lg text-label-lg mb-space-xl shadow-sm">
          <span className="material-symbols-outlined text-secondary text-[18px]">calendar_today</span>
          <span>Sabtu, 24 Agustus 2024</span>
          <span className="text-outline">•</span>
          <span className="material-symbols-outlined text-secondary text-[18px]">location_on</span>
          <span>Jakarta Selatan</span>
        </div>
        <div className="max-w-2xl bg-surface-container-lowest/80 backdrop-blur-sm rounded-xl p-space-lg shadow-sm">
          <p className="font-display-md text-headline-sm italic text-primary mb-3">
            “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari
            jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di
            antaramu rasa kasih dan sayang.”
          </p>
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold">
            QS. Ar-Rum: 21
          </span>
        </div>
      </div>
    </section>
  );
}
