"use client";

import { motion } from "framer-motion";
import Button from "./ui/Button";

const CHECKIN_URL = "https://www.clockwisemd.com/groups/407";

export default function CallToAction() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-gradient-to-br from-navy via-navy-light to-navy overflow-hidden">
      {/* Mountain silhouette */}
      <div className="absolute bottom-0 left-0 right-0 opacity-30">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120V80L240 50L480 75L720 30L960 60L1200 40L1440 65V120H0Z" fill="rgba(255,255,255,0.05)" />
        </svg>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-coral/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-teal/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-[family-name:var(--font-jakarta)] font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
            Don&apos;t Wait. <span className="text-coral">Check In Now.</span>
          </h2>
          <p className="text-white/80 text-lg sm:text-xl mb-10 max-w-xl mx-auto">
            Walk-ins welcome at all 7 locations, 7 days a week. Skip the waiting room with online check-in.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button href={CHECKIN_URL} variant="primary" external className="animate-pulse-glow text-lg px-10 py-4">
              Check In Online
            </Button>
          </div>

          <div className="flex items-center justify-center gap-3 text-white/60">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
            </svg>
            <span className="font-[family-name:var(--font-jakarta)] font-medium">
              Or call your nearest location to get started
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
