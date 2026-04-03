"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./ui/SectionWrapper";
import Shield from "@/icons/Shield";
import { insurancePlans } from "@/data/insurance";

export default function Insurance() {
  return (
    <SectionWrapper id="insurance" className="py-20 sm:py-28 bg-bg-light">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="font-[family-name:var(--font-jakarta)] font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy mb-4">
            Insurance We <span className="text-coral">Accept</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            We work with major insurance plans to keep your care affordable.
          </p>
        </div>

        {/* Insurance cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {insurancePlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className="bg-white rounded-2xl p-6 shadow-md text-center hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-navy" />
              </div>
              <h3 className="font-[family-name:var(--font-jakarta)] font-bold text-lg text-navy mb-1">
                {plan.name}
              </h3>
              <p className="text-text-muted text-sm">
                {plan.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* No insurance note */}
        <div className="mt-10 text-center">
          <p className="text-text-muted text-lg">
            Don&apos;t have insurance?{" "}
            <a href="#total-access" className="text-coral font-semibold hover:underline">
              Ask about our Total Access membership
            </a>{" "}
            — starting at just $50 per visit.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
