import { useState, type FormEvent } from "react";
import { INITIAL_WISHES, type Wish } from "../data";

interface Props {
  showToast: (message: string) => void;
}

const ATTENDANCE_OPTIONS = [
  { value: "Hadir", icon: "done", label: "Hadir" },
  { value: "Ragu", icon: "help", label: "Ragu" },
  { value: "Tidak Hadir", icon: "close", label: "Tidak" },
] as const;

export default function Rsvp({ showToast }: Props) {
  const [wishes, setWishes] = useState<Wish[]>(INITIAL_WISHES);
  const [totalWishes, setTotalWishes] = useState(18);
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState<string>("Hadir");
  const [guestCount, setGuestCount] = useState("2 Orang");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedMessage = message.trim();
    if (!trimmedName || !trimmedMessage) return;

    const initials = trimmedName
      .split(" ")
      .map((n) => n[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();

    const newWish: Wish = {
      id: Date.now(),
      name: trimmedName,
      initials,
      attendance: attendance as Wish["attendance"],
      message: trimmedMessage,
      time: "Baru saja",
      avatarClass: "bg-secondary-fixed",
      textClass: "text-secondary",
    };

    setWishes((prev) => [newWish, ...prev]);
    setTotalWishes((prev) => prev + 1);
    setName("");
    setAttendance("Hadir");
    setGuestCount("2 Orang");
    setMessage("");
    showToast("Terima kasih, konfirmasi & doa Anda telah terkirim!");
  };

  return (
    <section className="w-full py-space-xl bg-surface-container-low" id="rsvp">
      <div className="max-w-5xl mx-auto px-gutter-mobile lg:px-gutter">
        <div className="text-center max-w-xl mx-auto mb-space-xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold block mb-2">
            Konfirmasi &amp; Harapan
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary">RSVP &amp; Doa Restu</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            Kehadiran dan doa restu Anda adalah anugerah terindah bagi lembaran baru hidup kami.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
          {/* RSVP Form */}
          <div className="lg:col-span-5 bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
            <form className="space-y-space-md" onSubmit={handleSubmit}>
              <div>
                <label
                  className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1.5"
                  htmlFor="guest-name"
                >
                  Nama Lengkap
                </label>
                <input
                  className="w-full px-space-md py-2.5 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20"
                  id="guest-name"
                  placeholder="Contoh: Dimas Aditya"
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <span className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1.5">
                  Konfirmasi Kehadiran
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {ATTENDANCE_OPTIONS.map((opt) => (
                    <label
                      key={opt.value}
                      className={`flex flex-col items-center justify-center p-2 rounded-lg cursor-pointer transition-colors text-center ${
                        attendance === opt.value
                          ? "bg-action text-white"
                          : "bg-surface-container-low"
                      }`}
                    >
                      <input
                        className="hidden"
                        name="attendance"
                        type="radio"
                        value={opt.value}
                        checked={attendance === opt.value}
                        onChange={() => setAttendance(opt.value)}
                      />
                      <span className="material-symbols-outlined text-[20px] mb-1">{opt.icon}</span>
                      <span className="font-label-sm text-label-sm">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label
                  className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1.5"
                  htmlFor="guest-count"
                >
                  Jumlah Tamu
                </label>
                <select
                  className="w-full px-space-md py-2.5 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20"
                  id="guest-count"
                  value={guestCount}
                  onChange={(e) => setGuestCount(e.target.value)}
                >
                  <option value="1 Orang">1 Orang</option>
                  <option value="2 Orang">2 Orang</option>
                  <option value="3 Orang">3 Orang (Maksimal)</option>
                </select>
              </div>
              <div>
                <label
                  className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1.5"
                  htmlFor="guest-message"
                >
                  Untaian Doa &amp; Harapan
                </label>
                <textarea
                  className="w-full px-space-md py-2.5 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20"
                  id="guest-message"
                  placeholder="Tuliskan doa restu untuk Fulan & Fulana..."
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button
                className="w-full py-3 bg-action text-white rounded-lg font-label-lg text-label-lg uppercase tracking-wider hover:bg-action/90 transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                type="submit"
              >
                <span className="material-symbols-outlined text-[18px]">send</span>
                <span>Kirim Konfirmasi &amp; Doa</span>
              </button>
            </form>
          </div>

          {/* Wishes Feed */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center justify-between mb-space-sm px-1">
              <h3 className="font-headline-sm text-headline-sm text-primary">Doa Restu Tamu Undangan</h3>
              <span className="px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
                {totalWishes} Ucapan
              </span>
            </div>
            <div className="space-y-space-sm max-h-[500px] overflow-y-auto pr-1">
              {wishes.map((wish) => {
                const isAttending = wish.attendance === "Hadir" || wish.attendance === "Ragu";
                return (
                  <div key={wish.id} className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm animate-fade-in">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-label-sm ${wish.avatarClass} ${wish.textClass}`}
                        >
                          {wish.initials}
                        </div>
                        <strong className="font-label-lg text-label-lg text-on-surface">{wish.name}</strong>
                      </div>
                      <span
                        className={`inline-flex items-center gap-1 font-label-sm text-label-sm font-semibold bg-surface-container px-2 py-0.5 rounded-full ${
                          isAttending ? "text-primary" : "text-on-surface-variant"
                        }`}
                      >
                        <span className="material-symbols-outlined text-[14px]">
                          {isAttending ? "check_circle" : "cancel"}
                        </span>{" "}
                        {wish.attendance}
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">{wish.message}</p>
                    <span className="font-label-sm text-label-sm text-outline mt-2 block">{wish.time}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
