"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import MobileNav from "./ui/MobileNav";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#locations", label: "Locations" },
  { href: "#total-access", label: "Total Access" },
  { href: "#insurance", label: "Insurance" },
  { href: "#contact", label: "Contact" },
];

const CHECKIN_URL = "https://www.clockwisemd.com/groups/407";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/SoCal-logo.png"
              alt="SoCal Emergency Medicine"
              width={180}
              height={48}
              className="h-10 w-auto"
              priority
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-[family-name:var(--font-jakarta)] font-semibold transition-colors ${
                  isScrolled
                    ? "text-navy hover:text-coral"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <a
              href={CHECKIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 bg-coral text-white px-5 py-2.5 rounded-full font-[family-name:var(--font-jakarta)] font-bold text-sm hover:bg-coral-dark transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
              </svg>
              Check In Online
            </a>
            <button
              className={`lg:hidden p-2 cursor-pointer ${isScrolled ? "text-navy" : "text-white"}`}
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <MobileNav isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
