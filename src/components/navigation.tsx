"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Brand from "./brand";
import { Arrow } from "./icons";
const links = [
  { href: "/", name: "Home" },
  { href: "/about", name: "Our branch" },
  { href: "/events", name: "Events" },
  { href: "/societies", name: "Communities" },
  { href: "/articles", name: "Articles" },
  { href: "/membership", name: "Membership" },
];
export default function Navigation() {
  const pathname = usePathname();
  const [openAt, setOpenAt] = useState<string | null>(null);
  const open = openAt === pathname;
  const toggleRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const active = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname.startsWith(href) ||
        (href === "/societies" && pathname.startsWith("/affinities")) ||
        (href === "/about" &&
          ["/team", "/awards", "/gallery"].includes(pathname)) ||
        (href === "/events" && pathname === "/calendar");
  useEffect(() => {
    if (!open) return;
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenAt(null);
        toggleRef.current?.focus();
      }
    };
    const outside = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) setOpenAt(null);
    };
    const wide = window.matchMedia("(min-width: 1181px)");
    const resize = () => {
      if (wide.matches) setOpenAt(null);
    };
    wide.addEventListener("change", resize);
    document.addEventListener("keydown", escape);
    document.addEventListener("pointerdown", outside);
    return () => {
      wide.removeEventListener("change", resize);
      document.removeEventListener("keydown", escape);
      document.removeEventListener("pointerdown", outside);
    };
  }, [open]);
  return (
    <header className="site-header">
      <nav
        className="navigation shell"
        aria-label="Main navigation"
        ref={navRef}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget))
            setOpenAt(null);
        }}
      >
        <Brand onNavigate={() => setOpenAt(null)} />
        <div className="desktop-links">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={active(link.href) ? "page" : undefined}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <Link
          className="nav-contact"
          href="/contact"
          aria-current={pathname === "/contact" ? "page" : undefined}
        >
          Say hello <Arrow diagonal />
        </Link>
        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpenAt(open ? null : pathname)}
        >
          <span className={open ? "open" : ""} />
          <span className={open ? "open" : ""} />
        </button>
        <div id="mobile-menu" className="mobile-menu" hidden={!open}>
          {[
            ...links,
            { href: "/affinities", name: "WIE & SIGHT" },
            { href: "/contact", name: "Say hello" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={active(link.href) ? "page" : undefined}
              onClick={() => setOpenAt(null)}
            >
              {link.name}
              <Arrow />
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
