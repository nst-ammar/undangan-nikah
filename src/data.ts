export const IMAGES = {
  cover:
    "https://images.pexels.com/photos/19035615/pexels-photo-19035615.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  groom:
    "https://images.pexels.com/photos/36259558/pexels-photo-36259558.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  bride:
    "https://images.pexels.com/photos/36211836/pexels-photo-36211836.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  teaser:
    "https://images.pexels.com/photos/36644480/pexels-photo-36644480.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=840&w=1600",
  map: "https://images.pexels.com/photos/32327756/pexels-photo-32327756.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  gallery: [
    {
      src: "https://images.pexels.com/photos/19298189/pexels-photo-19298189.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      alt: "Pasangan muslim dalam busana pengantin tradisional merah yang elegan",
    },
    {
      src: "https://images.pexels.com/photos/17077519/pexels-photo-17077519.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      alt: "Pasangan muslim berbusana elegan berdiri bersama di tengah hijauan yang rimbun",
    },
    {
      src: "https://images.pexels.com/photos/38677864/pexels-photo-38677864.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      alt: "Momen romantis pasangan pengantin muslim tradisional Indonesia saat upacara pernikahan",
    },
    {
      src: "https://images.pexels.com/photos/36887517/pexels-photo-36887517.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      alt: "Pengantin muslimah anggun berhijab di pernikahan bernuansa bunga yang mewah",
    },
    {
      src: "https://images.pexels.com/photos/33411138/pexels-photo-33411138.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      alt: "Pasangan muslim dalam balutan busana pengantin adat Indonesia",
    },
    {
      src: "https://images.pexels.com/photos/19035611/pexels-photo-19035611.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      alt: "Pasangan muslim berbusana modern dan hijab berpose di depan dinding bercorak",
    },
  ],
};

export const NAV_LINKS = [
  { id: "hero", label: "Hero" },
  { id: "mempelai", label: "Mempelai" },
  { id: "acara", label: "Acara" },
  { id: "galeri", label: "Galeri" },
  { id: "rsvp", label: "RSVP" },
  { id: "gift", label: "Gift" },
];

export interface Wish {
  id: number;
  name: string;
  initials: string;
  attendance: "Hadir" | "Ragu" | "Tidak Hadir" | "Berhalangan";
  message: string;
  time: string;
  avatarClass: string;
  textClass: string;
}

export const INITIAL_WISHES: Wish[] = [
  {
    id: 1,
    name: "Fahmi & Anisa",
    initials: "FA",
    attendance: "Hadir",
    message:
      "Barakallahu lakum wa baraka alaikum wa jama’a bainakuma fii khoir. Selamat menempuh hidup baru Fulan & Fulana, langgeng sampai maut memisahkan!",
    time: "10 menit yang lalu",
    avatarClass: "bg-primary-fixed",
    textClass: "text-primary",
  },
  {
    id: 2,
    name: "Bima Sena, S.T.",
    initials: "BS",
    attendance: "Hadir",
    message:
      "Selamat kawan seperjuangan kampus! Semoga jadi keluarga yang sakinah, mawaddah, warahmah. Sangat tidak sabar untuk hadir di Senayan nanti!",
    time: "1 jam yang lalu",
    avatarClass: "bg-secondary-fixed",
    textClass: "text-secondary",
  },
  {
    id: 3,
    name: "Tania Putri",
    initials: "TP",
    attendance: "Berhalangan",
    message:
      "Fulana cantik, bahagia selalu ya! Mohon maaf belum bisa hadir langsung karena masih di luar kota, doa terbaik senantiasa menyertai kalian berdua.",
    time: "3 jam yang lalu",
    avatarClass: "bg-surface-container-high",
    textClass: "text-on-surface-variant",
  },
];

export const WEDDING_DATE = new Date("2026-08-24T08:00:00+07:00").getTime();
