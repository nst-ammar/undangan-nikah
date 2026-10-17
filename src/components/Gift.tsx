import { useState } from "react";

interface Props {
  showToast: (message: string) => void;
}

interface BankCardProps {
  bank: string;
  number: string;
  numberRaw: string;
  owner: string;
  onCopy: (raw: string) => void;
  copied: boolean;
}

function BankCard({ bank, number, numberRaw, owner, onCopy, copied }: BankCardProps) {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm relative overflow-hidden flex flex-col justify-between">
      <div className="flex items-center justify-between mb-space-md">
        <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-primary">{bank}</span>
        <span className="material-symbols-outlined text-secondary">credit_card</span>
      </div>
      <div className="space-y-1 mb-space-lg">
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline">Nomor Rekening</span>
        <p className="font-mono text-headline-md tracking-wider text-on-surface">{number}</p>
        <p className="font-body-sm text-body-sm text-on-surface-variant">a.n. {owner}</p>
      </div>
      <button
        className="w-full py-2.5 bg-surface-container-low text-action hover:bg-action hover:text-white transition-colors rounded-lg font-label-sm text-label-sm uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
        type="button"
        onClick={() => onCopy(numberRaw)}
      >
        <span className="material-symbols-outlined text-[16px]">{copied ? "check" : "content_copy"}</span>
        <span>{copied ? "Tersalin!" : "Salin No. Rekening"}</span>
      </button>
    </div>
  );
}

export default function Gift({ showToast }: Props) {
  const [qrisOpen, setQrisOpen] = useState(false);
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);

  const handleCopy = (raw: string) => {
    navigator.clipboard
      .writeText(raw)
      .catch(() => {})
      .finally(() => {
        setCopiedNumber(raw);
        showToast("Nomor rekening berhasil disalin!");
        setTimeout(() => setCopiedNumber(null), 2000);
      });
  };

  return (
    <>
      <section className="w-full py-space-xl" id="gift">
        <div className="max-w-4xl mx-auto px-gutter-mobile lg:px-gutter">
          <div className="text-center max-w-xl mx-auto mb-space-xl">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold block mb-2">
              Tanda Kasih
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary">Amplop Digital</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">
              Doa restu Anda merupakan karunia terindah. Namun jika ingin memberikan tanda kasih secara
              digital, Anda dapat menggunakan opsi berikut:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg mb-space-lg">
            <BankCard
              bank="BCA"
              number="5420 8912 34"
              numberRaw="5420891234"
              owner="Fulan Pratama"
              onCopy={handleCopy}
              copied={copiedNumber === "5420891234"}
            />
            <BankCard
              bank="MANDIRI"
              number="1370 0192 8831"
              numberRaw="137001928831"
              owner="Fulana Larasati"
              onCopy={handleCopy}
              copied={copiedNumber === "137001928831"}
            />
          </div>

          <div className="text-center">
            <button
              className="inline-flex items-center gap-2 px-space-lg py-3 rounded-full bg-action text-white hover:bg-action/90 transition-colors font-label-lg text-label-lg uppercase tracking-wider shadow-sm cursor-pointer"
              type="button"
              onClick={() => setQrisOpen(true)}
            >
              <span className="material-symbols-outlined text-[20px]">qr_code_scanner</span>
              <span>Buka QRIS Amplop Digital</span>
            </button>
          </div>
        </div>
      </section>

      {/* QRIS Modal */}
      {qrisOpen && (
        <div
          className="fixed inset-0 z-[55] bg-inverse-surface/60 backdrop-blur-sm flex items-center justify-center p-gutter"
          onClick={(e) => {
            if (e.target === e.currentTarget) setQrisOpen(false);
          }}
        >
          <div className="bg-surface-container-lowest rounded-xl max-w-sm w-full p-space-lg shadow-2xl relative text-center animate-fade-in">
            <button
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface cursor-pointer"
              type="button"
              onClick={() => setQrisOpen(false)}
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
            <div className="mb-space-md">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold block mb-1">
                Standard Pembayaran Digital
              </span>
              <h3 className="font-headline-md text-headline-md text-primary">QRIS Tanda Kasih</h3>
            </div>
            <div className="p-4 bg-surface-container-lowest rounded-xl shadow-inner mb-space-md flex flex-col items-center">
              <svg className="w-48 h-48 text-on-surface" fill="currentColor" viewBox="0 0 100 100">
                <rect height="28" rx="2" width="28" x="5" y="5" />
                <rect fill="#ffffff" height="18" width="18" x="10" y="10" />
                <rect height="10" width="10" x="14" y="14" />
                <rect height="28" rx="2" width="28" x="67" y="5" />
                <rect fill="#ffffff" height="18" width="18" x="72" y="10" />
                <rect height="10" width="10" x="76" y="14" />
                <rect height="28" rx="2" width="28" x="5" y="67" />
                <rect fill="#ffffff" height="18" width="18" x="10" y="72" />
                <rect height="10" width="10" x="14" y="76" />
                <circle cx="50" cy="50" r="8" />
                <rect height="14" width="8" x="38" y="10" />
                <rect height="6" width="10" x="52" y="14" />
                <rect height="20" width="6" x="12" y="38" />
                <rect height="6" width="16" x="24" y="44" />
                <rect height="6" width="16" x="42" y="38" />
                <rect height="16" width="6" x="64" y="38" />
                <rect height="6" width="14" x="78" y="44" />
                <rect height="22" width="8" x="40" y="66" />
                <rect height="6" width="16" x="56" y="70" />
                <rect height="18" width="12" x="78" y="66" />
              </svg>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
              Dapat di-scan melalui BCA Mobile, GoPay, OVO, ShopeePay, Maupun Livin' by Mandiri.
            </p>
            <button
              className="w-full py-2.5 bg-action text-white rounded-lg font-label-sm text-label-sm uppercase tracking-wider cursor-pointer"
              type="button"
              onClick={() => setQrisOpen(false)}
            >
              Selesai
            </button>
          </div>
        </div>
      )}
    </>
  );
}
