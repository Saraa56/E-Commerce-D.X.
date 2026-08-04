"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const navLinks = [
  { label: "Jabones", href: "#productos" },
  { label: "Ingredientes", href: "#ingredientes" },
  { label: "Regalos", href: "#regalos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Preguntas", href: "#faq" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#FAF6EE]/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="#inicio" className="flex flex-col leading-none group">
          <span
            className="font-serif text-2xl font-bold tracking-widest uppercase text-[#2A2318]"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.18em" }}
          >
            Jabones
          </span>
          <span
            className="font-serif text-xs font-light italic tracking-[0.35em] text-[#B85C3A] -mt-1"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            D . X .
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-sans text-sm tracking-widest uppercase text-[#2A2318]/70 hover:text-[#B85C3A] transition-colors duration-200"
                style={{ fontFamily: "var(--font-sans)", fontSize: "0.72rem", letterSpacing: "0.12em" }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <a
          href="#productos"
          className="hidden md:inline-flex items-center gap-2 bg-[#B85C3A] text-[#FAF6EE] text-xs font-sans tracking-widest uppercase px-6 py-3 hover:bg-[#2E4A44] transition-colors duration-300"
          style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.12em" }}
        >
          Comprar Ahora
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <span className={`block w-6 h-px bg-[#2A2318] transition-transform duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block w-6 h-px bg-[#2A2318] transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-[#2A2318] transition-transform duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-[#FAF6EE]/98 ${
          menuOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <ul className="px-6 pb-6 pt-2 flex flex-col gap-4 border-t border-[#D9C9A8]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-sans text-sm tracking-widest uppercase text-[#2A2318]/70 hover:text-[#B85C3A] transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#productos"
              onClick={() => setMenuOpen(false)}
              className="inline-flex bg-[#B85C3A] text-[#FAF6EE] text-xs tracking-widest uppercase px-6 py-3 hover:bg-[#2E4A44] transition-colors"
            >
              Comprar Ahora
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
