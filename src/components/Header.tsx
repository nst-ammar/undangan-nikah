import { NAV_LINKS } from "../data";

interface Props {
  activeSection: string;
}

export default function Header({ activeSection }: Props) {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(45,49,46,0.05)]">
      <div className="h-20 max-w-7xl mx-auto px-gutter-mobile lg:px-gutter flex items-center justify-between">
        <div className="flex items-center gap-space-sm">
          <span className="material-symbols-outlined text-primary text-[28px]">eco</span>
          <span className="font-headline-md text-headline-md text-primary tracking-tight">R &amp; K</span>
        </div>
        <nav className="hidden md:flex items-center gap-1.5 p-1.5 bg-surface-container-low rounded-full">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              aria-current={activeSection === link.id ? "page" : undefined}
              className={
                activeSection === link.id
                  ? "px-space-md py-1.5 transition-colors bg-primary-container text-on-primary font-semibold rounded-full shadow-sm font-label-lg text-label-lg"
                  : "px-space-md py-1.5 rounded-full font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors"
              }
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-space-sm">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>
        </div>
      </div>
    </header>
  );
}
