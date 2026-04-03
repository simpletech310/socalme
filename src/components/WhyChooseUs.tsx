"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./ui/SectionWrapper";
import Clock from "@/icons/Clock";
import Shield from "@/icons/Shield";
import XRay from "@/icons/XRay";
import MedicalCross from "@/icons/MedicalCross";

const reasons = [
  {
    icon: Clock,
    title: "Walk-In Friendly",
    description: "No appointment necessary — just walk in any day of the week.",
    color: "coral",
  },
  {
    icon: MedicalCross,
    title: "In and Out Fast",
    description: "Average visits take about an hour, so you can get back to your day.",
    color: "teal",
  },
  {
    icon: XRay,
    title: "On-Site Diagnostics",
    description: "X-rays and lab work done right here, so you get answers fast.",
    color: "sky",
  },
  {
    icon: Shield,
    title: "Affordable Care",
    description: "We accept most insurance, Medi-Cal, and offer self-pay options.",
    color: "navy",
  },
];

const colorMap: Record<string, { bg: string; text: string }> = {
  coral: { bg: "bg-coral/10", text: "text-coral" },
  teal: { bg: "bg-teal/10", text: "text-teal" },
  sky: { bg: "bg-sky/10", text: "text-sky" },
  navy: { bg: "bg-navy/10", text: "text-navy" },
};

export default function WhyChooseUs() {
  return (
    <SectionWrapper className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="font-[family-name:var(--font-jakarta)] font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy mb-4">
            Why Choose <span className="text-coral">SoCalEM</span>?
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            We make urgent care simple, fast, and affordable for everyone.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            const colors = colorMap[reason.color];
            return (
              <motion.div
                key={reason.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className={`w-16 h-16 rounded-2xl ${colors.bg} flex items-center justify-center mx-auto mb-5`}>
                  <Icon className={`w-8 h-8 ${colors.text}`} />
                </div>
                <h3 className="font-[family-name:var(--font-jakarta)] font-bold text-xl text-navy mb-2">
                  {reason.title}
                </h3>
                <p className="text-text-muted leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
