import { useCallback, useEffect, useRef, useState } from "react";
import CoverOverlay from "./components/CoverOverlay";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Mempelai from "./components/Mempelai";
import Acara from "./components/Acara";
import Galeri from "./components/Galeri";
import EPass from "./components/EPass";
import Rsvp from "./components/Rsvp";
import Gift from "./components/Gift";
import MusicDock from "./components/MusicDock";
import MobileNav from "./components/MobileNav";
import Footer from "./components/Footer";
import { NAV_LINKS } from "./data";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = useCallback((message: string) => {
    setToast(message);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 3000);
  }, []);

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY + 120;
      let current = "hero";
      for (const link of NAV_LINKS) {
        const el = document.getElementById(link.id);
        if (el && el.offsetTop <= offset) current = link.id;
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-background font-body-md text-body-md text-on-surface antialiased selection:bg-secondary-fixed selection:text-on-secondary-fixed scroll-smooth">
      <CoverOverlay onOpen={() => {}} />
      <Header activeSection={activeSection} />

      <main className="w-full pt-20 bg-background min-h-screen">
        <div className="flex flex-col w-full">
          <Hero />
          <Mempelai />
          <Acara />
          <Galeri />
          <EPass />
          <Rsvp showToast={showToast} />
          <Gift showToast={showToast} />
        </div>
      </main>

      <MusicDock />
      <MobileNav activeSection={activeSection} />
      <Footer />

      {/* Toast Notification */}
      <div
        className={`fixed bottom-24 left-1/2 -translate-x-1/2 z-[70] bg-inverse-surface text-inverse-on-surface px-space-md py-2 rounded-full font-body-sm text-body-sm shadow-xl pointer-events-none transition-opacity duration-300 whitespace-nowrap ${
          toast ? "opacity-100" : "opacity-0"
        }`}
        role="status"
      >
        {toast ?? ""}
      </div>
    </div>
  );
}
