"use client";

import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#locations", label: "Locations" },
  { href: "#total-access", label: "Total Access" },
  { href: "#insurance", label: "Insurance" },
  { href: "#contact", label: "Contact" },
];

const CHECKIN_URL = "https://www.clockwisemd.com/groups/407";

export default function MobileNav({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-navy-dark/60 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white z-50 shadow-2xl flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <span className="font-[family-name:var(--font-jakarta)] font-bold text-lg text-navy">
                Menu
              </span>
              <button
                onClick={onClose}
                className="p-2 text-text-muted hover:text-navy cursor-pointer"
                aria-label="Close menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col p-6 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="font-[family-name:var(--font-jakarta)] font-semibold text-text-dark hover:text-coral py-3 px-4 rounded-xl hover:bg-bg-light transition-all"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-auto p-6 border-t border-border">
              <a
                href={CHECKIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-coral text-white px-6 py-4 rounded-full font-[family-name:var(--font-jakarta)] font-bold text-lg hover:bg-coral-dark transition-colors shadow-lg"
              >
                Check In Online
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
