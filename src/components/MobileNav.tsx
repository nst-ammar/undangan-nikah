import { NAV_LINKS } from "../data";

interface Props {
  activeSection: string;
}

export default function MobileNav({ activeSection }: Props) {
  return (
    <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-space-xs px-space-md py-2.5 bg-surface-container-lowest/95 backdrop-blur-md rounded-full shadow-[0_12px_32px_-4px_rgba(45,49,46,0.1)]">
      {NAV_LINKS.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          aria-current={activeSection === link.id ? "page" : undefined}
          className={
            activeSection === link.id
              ? "px-2 py-1 text-primary font-semibold font-label-sm text-label-sm"
              : "px-2 py-1 font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface"
          }
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
