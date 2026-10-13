import { useEffect, useState } from "react";
import { IMAGES, WEDDING_DATE } from "../data";

function pad(n: number) {
  return n < 10 ? `0${n}` : `${n}`;
}

function getTimeLeft() {
  const diff = Math.max(0, WEDDING_DATE - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

function addToCalendar(title: string, location: string) {
  const icsContent =
    "BEGIN:VCALENDAR\n" +
    "VERSION:2.0\n" +
    "BEGIN:VEVENT\n" +
    `SUMMARY:${title}\n` +
    `LOCATION:${location}\n` +
    "DESCRIPTION:Pernikahan Raditya & Kirana\n" +
    "DTSTART:20260824T010000Z\n" +
    "DTEND:20260824T070000Z\n" +
    "END:VEVENT\n" +
    "END:VCALENDAR";

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "The-Wedding-Raditya-Kirana.ics");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

interface EventCardProps {
  badge: string;
  badgeClass: string;
  icon: string;
  iconClass: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  calendarTitle: string;
}

function EventCard({ badge, badgeClass, icon, iconClass, date, time, venue, address, calendarTitle }: EventCardProps) {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-space-md">
          <span className={`px-space-md py-1 rounded-full font-label-sm text-label-sm uppercase ${badgeClass}`}>
            {badge}
          </span>
          <span className={`material-symbols-outlined ${iconClass}`}>{icon}</span>
        </div>
        <h3 className="font-headline-md text-headline-md text-primary mb-2">{date}</h3>
        <p className="font-body-md text-body-md text-on-surface mb-space-sm font-semibold">{time}</p>
        <div className="space-y-1 mb-space-md">
          <p className="font-headline-sm text-headline-sm text-on-surface">{venue}</p>
          <p className="font-body-sm text-body-sm text-on-surface-variant">{address}</p>
        </div>
      </div>
      <div className="pt-space-md flex flex-wrap gap-space-sm">
        <a
          className="inline-flex items-center gap-2 px-space-md py-2 bg-primary text-on-primary rounded-lg font-label-sm text-label-sm uppercase tracking-wider hover:bg-primary-container transition-colors"
          href="https://maps.google.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="material-symbols-outlined text-[16px]">map</span>
          <span>Buka Google Maps</span>
        </a>
        <button
          className="inline-flex items-center gap-2 px-space-md py-2 bg-surface-container-high text-primary rounded-lg font-label-sm text-label-sm uppercase tracking-wider hover:bg-surface-container-highest transition-colors cursor-pointer"
          type="button"
          onClick={() => addToCalendar(calendarTitle, venue)}
        >
          <span className="material-symbols-outlined text-[16px]">event</span>
          <span>Simpan Kalender</span>
        </button>
      </div>
    </div>
  );
}

export default function Acara() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const pillars = [
    { label: "Hari", value: timeLeft.days, accent: "text-primary" },
    { label: "Jam", value: timeLeft.hours, accent: "text-primary" },
    { label: "Menit", value: timeLeft.minutes, accent: "text-primary" },
    { label: "Detik", value: timeLeft.seconds, accent: "text-secondary" },
  ];

  return (
    <section className="w-full py-space-xl" id="acara">
      <div className="max-w-6xl mx-auto px-gutter-mobile lg:px-gutter">
        <div className="text-center max-w-xl mx-auto mb-space-lg">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold block mb-2">
            Menuju Hari Bahagia
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary">Hitung Mundur</h2>
        </div>

        <div className="grid grid-cols-4 gap-3 max-w-xl mx-auto mb-space-xl">
          {pillars.map((p) => (
            <div key={p.label} className="bg-surface-container rounded-xl py-space-md flex flex-col items-center shadow-sm">
              <span className={`font-headline-lg text-display-md-mobile md:text-display-md ${p.accent} font-bold`}>
                {pad(p.value)}
              </span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                {p.label}
              </span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
          <EventCard
            badge="Akad Nikah"
            badgeClass="bg-secondary-fixed text-on-secondary-fixed"
            icon="handshake"
            iconClass="text-secondary"
            date="Sabtu, 24 Agustus 2024"
            time="Pukul 08:00 - 10:00 WIB"
            venue="Masjid Agung Al-Azhar"
            address="Jl. Sisingamangaraja No.1, Kebayoran Baru, Jakarta Selatan"
            calendarTitle="Akad Nikah Raditya & Kirana"
          />
          <EventCard
            badge="Resepsi Pernikahan"
            badgeClass="bg-primary-fixed text-on-primary-fixed"
            icon="celebration"
            iconClass="text-primary"
            date="Sabtu, 24 Agustus 2024"
            time="Pukul 11:00 - 14:00 WIB"
            venue="Grand Ballroom Hotel Mulia Senayan"
            address="Jl. Asia Afrika, Gelora, Tanah Abang, Jakarta Pusat"
            calendarTitle="Resepsi Pernikahan Raditya & Kirana"
          />
        </div>

        <div className="mt-space-lg rounded-xl overflow-hidden shadow-sm">
          <div
            className="w-full h-72 bg-cover bg-center"
            role="img"
            aria-label="Lokasi Hotel Mulia Senayan, Jakarta"
            style={{ backgroundImage: `url('${IMAGES.map}')` }}
          />
        </div>
      </div>
    </section>
  );
}
