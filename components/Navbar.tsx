"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const WA = `https://wa.me/573004970078?text=${encodeURIComponent("Hola Luxury Smile, quiero agendar una cita")}`;

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Implantes", href: "#implantes" },
  { label: "Armonización", href: "#armonizacion" },
  { label: "Testimonios", href: "#testimonios" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      const close = () => setMenuOpen(false);
      window.addEventListener("scroll", close, { passive: true });
      return () => window.removeEventListener("scroll", close);
    }
  }, [menuOpen]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled || menuOpen ? "rgba(10,22,40,0.95)" : "transparent",
        backdropFilter: scrolled || menuOpen ? "blur(24px)" : "none",
        WebkitBackdropFilter: scrolled || menuOpen ? "blur(24px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-14 flex items-center justify-between" style={{ height: "4.5rem" }}>
        {/* Logo */}
        <div className="relative w-32 h-11 flex-shrink-0">
          <Image src="/logo.jpg" alt="Luxury Smile" fill className="object-contain object-left" sizes="128px" priority />
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((item) => (
            <a key={item.label} href={item.href}
              className="f-sans cursor-pointer transition-colors duration-300 hover:text-white"
              style={{ fontSize: "0.68rem", letterSpacing: "0.1em", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA — clean, no glow, no bg color */}
        <a href={WA} target="_blank" rel="noopener noreferrer"
          className="hidden md:inline-flex btn btn-outline"
          style={{ padding: "0.55rem 1.4rem", fontSize: "0.62rem" }}>
          Agendar cita
        </a>

        {/* Hamburger button — mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex justify-center items-center w-10 h-10 cursor-pointer"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          style={{ background: "none", border: "none" }}
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round">
              <line x1="4" y1="4" x2="16" y2="16"/>
              <line x1="16" y1="4" x2="4" y2="16"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round">
              <line x1="2" y1="5" x2="18" y2="5"/>
              <line x1="2" y1="10" x2="18" y2="10"/>
              <line x1="2" y1="15" x2="14" y2="15"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className="md:hidden overflow-hidden"
        style={{
          maxHeight: menuOpen ? "400px" : "0",
          opacity: menuOpen ? 1 : 0,
          transition: "max-height 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.3s ease",
        }}
      >
        <nav className="flex flex-col px-6 pb-6 pt-2 gap-1">
          {navLinks.map((item) => (
            <a key={item.label} href={item.href}
              onClick={() => setMenuOpen(false)}
              className="f-sans py-3 transition-colors duration-200 hover:text-white"
              style={{
                fontSize: "0.8rem",
                letterSpacing: "0.06em",
                color: "rgba(255,255,255,0.6)",
                textDecoration: "none",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}>
              {item.label}
            </a>
          ))}
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="btn btn-outline mt-4"
            style={{ padding: "0.75rem 1.6rem", fontSize: "0.7rem", textAlign: "center", justifyContent: "center" }}>
            Agendar cita
          </a>
        </nav>
      </div>
    </header>
  );
}
