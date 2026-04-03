"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./ui/SectionWrapper";
import Button from "./ui/Button";
import CheckCircle from "@/icons/CheckCircle";
import { membershipPlans } from "@/data/membership";

const CHECKIN_URL = "https://www.clockwisemd.com/groups/407";

export default function TotalAccess() {
  return (
    <SectionWrapper id="total-access" className="py-20 sm:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="font-[family-name:var(--font-jakarta)] font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy mb-4">
            Total Access <span className="text-coral">Membership</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Healthcare that&apos;s affordable — no insurance required. Pay per visit with transparent pricing.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {membershipPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`relative rounded-3xl p-8 ${
                plan.highlighted
                  ? "bg-gradient-to-b from-navy to-navy-light text-white shadow-2xl scale-105"
                  : "bg-white border-2 border-border shadow-lg"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-coral text-white px-5 py-1.5 rounded-full text-sm font-[family-name:var(--font-jakarta)] font-bold shadow-md">
                  Best Value
                </div>
              )}

              <h3 className={`font-[family-name:var(--font-jakarta)] font-bold text-xl mb-6 ${plan.highlighted ? "text-white" : "text-navy"}`}>
                {plan.name}
              </h3>

              <div className="mb-6">
                <span className={`font-[family-name:var(--font-jakarta)] font-extrabold text-5xl ${plan.highlighted ? "text-white" : "text-navy"}`}>
                  ${plan.price}
                </span>
                <span className={`text-lg ml-2 ${plan.highlighted ? "text-white/70" : "text-text-muted"}`}>
                  {plan.priceLabel}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle className={`w-5 h-5 flex-shrink-0 ${plan.highlighted ? "text-coral" : "text-teal"}`} />
                    <span className={plan.highlighted ? "text-white/90" : "text-text-muted"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                href={CHECKIN_URL}
                variant={plan.highlighted ? "primary" : "secondary"}
                external
                className="w-full justify-center"
              >
                Check In Now
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
