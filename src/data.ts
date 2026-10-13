export const IMAGES = {
  cover:
    "https://images.pexels.com/photos/7730671/pexels-photo-7730671.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  groom:
    "https://images.pexels.com/photos/17685845/pexels-photo-17685845.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  bride:
    "https://images.pexels.com/photos/13114523/pexels-photo-13114523.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  teaser:
    "https://images.pexels.com/photos/9717108/pexels-photo-9717108.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=840&w=1600",
  map: "https://images.pexels.com/photos/32327756/pexels-photo-32327756.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  gallery: [
    {
      src: "https://images.pexels.com/photos/7783139/pexels-photo-7783139.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      alt: "Pasangan bahagia berpose dengan busana formal di antara rangkaian bunga kering",
    },
    {
      src: "https://images.pexels.com/photos/13114542/pexels-photo-13114542.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      alt: "Potret elegan mempelai pria dan wanita berpelukan dengan buket bunga",
    },
    {
      src: "https://images.pexels.com/photos/7586375/pexels-photo-7586375.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      alt: "Pasangan elegan dengan busana tradisional berpose di tengah hutan hijau",
    },
    {
      src: "https://images.pexels.com/photos/13114523/pexels-photo-13114523.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      alt: "Mempelai wanita memegang buket bunga putih dengan senyum candid",
    },
    {
      src: "https://images.pexels.com/photos/8223732/pexels-photo-8223732.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      alt: "Pasangan bahagia bercanda di pantai saat matahari terbenam keemasan",
    },
    {
      src: "https://images.pexels.com/photos/11414042/pexels-photo-11414042.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      alt: "Pasangan romantis berpelukan di alam terbuka dengan cahaya hangat",
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
      "Barakallahu lakum wa baraka alaikum wa jama’a bainakuma fii khoir. Selamat menempuh hidup baru Radit & Kirana, langgeng sampai maut memisahkan!",
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
      "Kirana cantik, bahagia selalu ya! Mohon maaf belum bisa hadir langsung karena masih di luar kota, doa terbaik senantiasa menyertai kalian berdua.",
    time: "3 jam yang lalu",
    avatarClass: "bg-surface-container-high",
    textClass: "text-on-surface-variant",
  },
];

export const WEDDING_DATE = new Date("2026-08-24T08:00:00+07:00").getTime();
