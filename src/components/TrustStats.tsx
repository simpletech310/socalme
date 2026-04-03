"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import SectionWrapper from "./ui/SectionWrapper";

function AnimatedCounter({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

const stats = [
  { value: 7, suffix: "", label: "Locations", sublabel: "Across the Inland Empire" },
  { value: 13, suffix: "+", label: "Years", sublabel: "Serving Our Community" },
  { value: 1800000, suffix: "+", label: "Patients", sublabel: "Treated & Counting" },
  { value: 7, suffix: "", label: "Days a Week", sublabel: "No Appointment Needed" },
];

export default function TrustStats() {
  return (
    <SectionWrapper className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="font-[family-name:var(--font-jakarta)] font-extrabold text-4xl sm:text-5xl text-navy mb-1">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="font-[family-name:var(--font-jakarta)] font-bold text-coral text-sm uppercase tracking-wider mb-1">
                {stat.label}
              </div>
              <div className="text-text-muted text-sm">
                {stat.sublabel}
              </div>
              <div className="mt-4 mx-auto w-12 h-1 bg-coral/20 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
