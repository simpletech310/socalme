"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./ui/SectionWrapper";
import Card from "./ui/Card";
import { services } from "@/data/services";
import MedicalCross from "@/icons/MedicalCross";
import Stethoscope from "@/icons/Stethoscope";
import XRay from "@/icons/XRay";
import Clipboard from "@/icons/Clipboard";
import Shield from "@/icons/Shield";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MedicalCross,
  Stethoscope,
  XRay,
  Clipboard,
  Shield,
};

const colorMap: Record<string, { bg: string; text: string }> = {
  coral: { bg: "bg-coral/10", text: "text-coral" },
  sky: { bg: "bg-sky/10", text: "text-sky" },
  teal: { bg: "bg-teal/10", text: "text-teal" },
  navy: { bg: "bg-navy/10", text: "text-navy" },
};

export default function Services() {
  return (
    <SectionWrapper id="services" className="py-20 sm:py-28 bg-bg-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className="font-[family-name:var(--font-jakarta)] font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy mb-4">
            Our <span className="text-coral">Services</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Comprehensive urgent and occupational care for the whole family — all under one roof.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || MedicalCross;
            const colors = colorMap[service.color] || colorMap.coral;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Card className="h-full">
                  <div className={`w-14 h-14 rounded-2xl ${colors.bg} flex items-center justify-center mb-4`}>
                    <Icon className={`w-7 h-7 ${colors.text}`} />
                  </div>
                  <h3 className="font-[family-name:var(--font-jakarta)] font-bold text-xl text-navy mb-2">
                    {service.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* DOT Physicals highlight banner */}
        <motion.div
          className="mt-10 bg-gradient-to-r from-coral to-coral-dark rounded-2xl p-6 sm:p-8 text-white text-center shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="font-[family-name:var(--font-jakarta)] font-bold text-2xl mb-2">
            DOT Physicals — Just $110
          </h3>
          <p className="text-white/90 text-lg">
            Certified exams for commercial drivers. Walk in any day, no appointment required.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
