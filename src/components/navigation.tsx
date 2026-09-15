"use client";

import Brand from "./brand";
import { useEffect, useRef, useState } from "react";
import { Arrow } from "./icons";

const links = [
  { href: "#about", name: "The branch" },
  { href: "#societies", name: "Our societies" },
  { href: "#highlights", name: "Highlights" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const toggleRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main section[id]"),
    );
    let frame = 0;
    const update = () => {
      frame = 0;
      let current = "";
      for (const section of sections)
        if (section.getBoundingClientRect().top <= 180) current = section.id;
      setActive(current === "recognition" ? "#highlights" : `#${current}`);
    };
    const scroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", scroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", scroll);
      cancelAnimationFrame(frame);
    };
  }, []);
  useEffect(() => {
    if (!open) return;
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const outside = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", escape);
    document.addEventListener("pointerdown", outside);
    return () => {
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
      >
        <Brand onNavigate={() => setOpen(false)} />
        <div className="desktop-links">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={active === link.href ? "location" : undefined}
            >
              {link.name}
            </a>
          ))}
        </div>
        <a className="nav-contact" href="#contact">
          Let’s connect <Arrow diagonal />
        </a>
        <button
          ref={toggleRef}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen(!open)}
        >
          <span className={open ? "open" : ""} />
          <span className={open ? "open" : ""} />
        </button>
        <div id="mobile-menu" className="mobile-menu" hidden={!open}>
          {[...links, { href: "#contact", name: "Let’s connect" }].map(
            (link) => (
              <a
                href={link.href}
                key={link.href}
                onClick={() => setOpen(false)}
              >
                {link.name}
                <Arrow diagonal />
              </a>
            ),
          )}
        </div>
      </nav>
    </header>
  );
}
