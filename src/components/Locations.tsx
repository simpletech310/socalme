"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./ui/SectionWrapper";
import Button from "./ui/Button";
import { locations, hours } from "@/data/locations";
import MapPin from "@/icons/MapPin";
import Phone from "@/icons/Phone";
import Clock from "@/icons/Clock";

const CHECKIN_URL = "https://www.clockwisemd.com/groups/407";

export default function Locations() {
  return (
    <SectionWrapper id="locations" className="py-20 sm:py-28 bg-bg-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="font-[family-name:var(--font-jakarta)] font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy mb-4">
            Find a <span className="text-coral">Location</span> Near You
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            7 urgent care centers across the Inland Empire, all open 7 days a week.
          </p>
        </div>

        {/* Locations grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.name}
              className="bg-white rounded-2xl p-5 shadow-md border-l-4 border-coral hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <h3 className="font-[family-name:var(--font-jakarta)] font-bold text-lg text-navy mb-3">
                {loc.name}
              </h3>

              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2 text-text-muted">
                  <MapPin className="w-4 h-4 text-coral mt-0.5 flex-shrink-0" />
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${loc.address}, ${loc.city}, ${loc.state} ${loc.zip}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-coral transition-colors"
                  >
                    {loc.address}<br />
                    {loc.city}, {loc.state} {loc.zip}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-text-muted">
                  <Phone className="w-4 h-4 text-coral flex-shrink-0" />
                  <a href={loc.phoneHref} className="hover:text-coral transition-colors font-medium">
                    {loc.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hours + CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-sm mb-6">
            <Clock className="w-5 h-5 text-teal" />
            <span className="font-[family-name:var(--font-jakarta)] font-semibold text-navy">
              All locations open {hours.days}, {hours.time}
            </span>
          </div>
          <div>
            <Button href={CHECKIN_URL} variant="primary" external>
              Check In Online
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
