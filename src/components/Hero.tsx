"use client";

import { motion } from "framer-motion";
import Button from "./ui/Button";

const CHECKIN_URL = "https://www.clockwisemd.com/groups/407";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-navy via-navy-light to-navy overflow-hidden">
      {/* Mountain silhouette decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 200V120L120 80L240 110L360 60L480 100L600 40L720 90L840 50L960 85L1080 30L1200 70L1320 45L1440 80V200H0Z"
            fill="rgba(255,255,255,0.03)"
          />
          <path
            d="M0 200V140L180 100L360 130L540 80L720 120L900 70L1080 110L1260 85L1440 105V200H0Z"
            fill="rgba(255,255,255,0.05)"
          />
        </svg>
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24">
        {/* Hours pill badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8"
        >
          <span className="w-2 h-2 bg-teal rounded-full animate-pulse" />
          <span className="text-white/90 font-[family-name:var(--font-jakarta)] font-medium text-sm">
            Open 7 Days a Week &middot; 9 AM - 8:30 PM
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-[family-name:var(--font-jakarta)] font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6"
        >
          Quality Urgent Care.
          <br />
          <span className="text-coral">In and Out in an Hour.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-white/80 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-10 font-[family-name:var(--font-inter)]"
        >
          7 convenient locations across the Inland Empire. Walk-ins welcome — no appointment needed.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button href={CHECKIN_URL} variant="primary" external className="animate-pulse-glow text-lg px-9 py-4">
            Check In Online
          </Button>
          <Button href="#locations" variant="outline" className="text-lg px-9 py-4">
            Find a Location
          </Button>
        </motion.div>

        {/* Trust stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-white/60 text-sm font-[family-name:var(--font-jakarta)] font-medium"
        >
          <div className="flex items-center gap-2">
            <span className="text-coral font-bold text-lg">7</span> Locations
          </div>
          <div className="w-px h-4 bg-white/20 hidden sm:block" />
          <div className="flex items-center gap-2">
            <span className="text-coral font-bold text-lg">13+</span> Years Serving the IE
          </div>
          <div className="w-px h-4 bg-white/20 hidden sm:block" />
          <div className="flex items-center gap-2">
            <span className="text-coral font-bold text-lg">1.8M+</span> Patients Treated
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white/40">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </motion.div>
    </section>
  );
}
