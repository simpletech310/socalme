import Image from "next/image";
import { locations, hours } from "@/data/locations";

const quickLinks = [
  { href: "#services", label: "Services" },
  { href: "#locations", label: "Locations" },
  { href: "#total-access", label: "Total Access" },
  { href: "#insurance", label: "Insurance" },
  { href: "#contact", label: "Contact" },
];

const CHECKIN_URL = "https://www.clockwisemd.com/groups/407";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div>
            <Image
              src="/SoCal-logo.png"
              alt="SoCal Emergency Medicine"
              width={160}
              height={42}
              className="h-10 w-auto brightness-200 mb-4"
            />
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              A Division of SoCal Emergency Medicine, Inc. Providing quality urgent care across the Inland Empire.
            </p>
            <a
              href={CHECKIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-coral text-white px-5 py-2.5 rounded-full font-[family-name:var(--font-jakarta)] font-bold text-sm hover:bg-coral-dark transition-colors"
            >
              Check In Online
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-[family-name:var(--font-jakarta)] font-bold text-white text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/60 hover:text-coral transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-[family-name:var(--font-jakarta)] font-bold text-white text-lg mb-4">
              Our Locations
            </h4>
            <ul className="space-y-2.5">
              {locations.map((loc) => (
                <li key={loc.name}>
                  <a href={loc.phoneHref} className="text-white/60 hover:text-coral transition-colors text-sm">
                    {loc.name} &middot; {loc.phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & Contact */}
          <div>
            <h4 className="font-[family-name:var(--font-jakarta)] font-bold text-white text-lg mb-4">
              Hours
            </h4>
            <div className="text-white/60 text-sm space-y-2">
              <p className="font-semibold text-white/80">{hours.days}</p>
              <p className="text-lg font-[family-name:var(--font-jakarta)] font-bold text-coral">
                {hours.time}
              </p>
              <p className="mt-4 pt-4 border-t border-white/10">
                No appointment needed. Walk-ins welcome at all locations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/40 text-sm">
          <p>&copy; {new Date().getFullYear()} SoCal Emergency Medicine, Inc. All rights reserved.</p>
          <p>
            Serving the Inland Empire with quality urgent care.
          </p>
        </div>
      </div>
    </footer>
  );
}
