export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low py-space-xl mt-space-xl">
      <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter flex flex-col items-center justify-center text-center gap-space-md">
        <div className="font-display-md text-display-md-mobile md:text-display-md text-primary">
          Raditya &amp; Kirana
        </div>
        <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir
          dan memberikan doa restu.
        </p>
        <div className="flex items-center gap-space-sm text-secondary font-label-sm text-label-sm tracking-widest uppercase">
          <span>Sabtu, 24 Agustus 2024</span>
          <span>•</span>
          <span>Jakarta</span>
        </div>
        <div className="pt-space-sm font-label-sm text-label-sm text-outline">
          © 2026 The Wedding of Raditya &amp; Kirana. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
