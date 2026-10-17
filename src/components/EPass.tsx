export default function EPass() {
  return (
    <section className="w-full py-space-xl">
      <div className="max-w-2xl mx-auto px-gutter-mobile lg:px-gutter">
        <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-fixed/30 rounded-bl-full pointer-events-none" />
          <div className="flex items-center gap-space-sm mb-space-md">
            <span className="material-symbols-outlined text-primary text-[28px]">confirmation_number</span>
            <div>
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold block">
                E-Invitation Pass
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary">Akses Check-in Resepsi</h3>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-space-lg bg-surface-container-low p-space-md rounded-xl">
            <div className="w-40 h-40 bg-surface-container-lowest rounded-lg p-2.5 shadow-sm flex flex-col items-center justify-center shrink-0">
              <svg className="w-full h-full text-primary" fill="currentColor" viewBox="0 0 100 100">
                <rect height="25" rx="3" width="25" x="5" y="5" />
                <rect fill="#FAF7F2" height="15" width="15" x="10" y="10" />
                <rect height="9" width="9" x="13" y="13" />
                <rect height="25" rx="3" width="25" x="70" y="5" />
                <rect fill="#FAF7F2" height="15" width="15" x="75" y="10" />
                <rect height="9" width="9" x="78" y="13" />
                <rect height="25" rx="3" width="25" x="5" y="70" />
                <rect fill="#FAF7F2" height="15" width="15" x="10" y="75" />
                <rect height="9" width="9" x="13" y="78" />
                <rect height="12" width="6" x="35" y="10" />
                <rect height="6" width="10" x="45" y="8" />
                <rect height="6" width="20" x="35" y="28" />
                <rect height="18" width="8" x="10" y="40" />
                <rect height="6" width="12" x="25" y="38" />
                <rect height="18" width="18" x="38" y="40" />
                <rect height="16" width="8" x="65" y="38" />
                <rect height="6" width="12" x="80" y="40" />
                <rect height="15" width="10" x="80" y="52" />
                <rect height="12" width="10" x="42" y="68" />
                <rect height="8" width="12" x="60" y="72" />
                <rect height="12" width="12" x="80" y="78" />
              </svg>
            </div>
            <div className="space-y-1.5 w-full text-center sm:text-left">
              <div className="inline-block px-2.5 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-semibold uppercase">
                VIP Guest
              </div>
              <h4 className="font-headline-sm text-headline-sm text-on-surface">Dimas &amp; Partner</h4>
              <div className="text-body-sm font-body-sm text-on-surface-variant space-y-0.5 pt-1">
                <p>
                  ID Tamu: <strong className="text-on-surface">FF-2024-0824-042</strong>
                </p>
                <p>
                  Sesi Kehadiran: <strong className="text-on-surface">Sesi 1 (11.00 - 12.30 WIB)</strong>
                </p>
                <p>
                  Nomor Meja: <strong className="text-on-surface">Meja Sakura • 04</strong>
                </p>
              </div>
              <p className="font-label-sm text-label-sm text-outline pt-2">
                Tunjukkan QR code ini kepada panitia resepsi di meja registrasi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
