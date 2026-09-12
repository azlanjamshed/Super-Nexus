"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Ruler } from "lucide-react";

const services = [
  "Project Planning",
  "Design Coordination",
  "Site Assessment",
  "Execution Strategy",
];

export default function PlanningDesign() {
  return (
    <section
      id="planning-design"
      className="bg-[#f6f5f2] py-20 text-[#071b2d] sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#006FFD]" />

              <span className="text-[9px] uppercase tracking-[0.22em] text-[#071b2d]/40">
                04 — Planning & Design
              </span>
            </div>

            <Ruler className="mt-10 h-8 w-8 text-[#006FFD]" strokeWidth={1.3} />

            <h2 className="mt-7 text-4xl font-light leading-[1.05] tracking-[-0.04em] sm:text-5xl">
              Plan Better.
              <br />
              <span className="text-[#071b2d]/40">Build Smarter.</span>
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-[#071b2d]/55">
              Good projects begin with good planning. We help bring structure to
              ideas through thoughtful planning, coordination and practical
              execution strategies.
            </p>

            <a
              href="/contact"
              className="group mt-8 inline-flex items-center gap-3 bg-[#006FFD] px-5 py-3.5 text-[9px] font-medium uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-[#0056c4]"
            >
              Discuss Your Project
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </a>
          </motion.div>

          {/* Services list */}
          <div className="border-t border-[#071b2d]/10">
            {services.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group flex items-center justify-between border-b border-[#071b2d]/10 py-6"
              >
                <div className="flex items-center gap-6">
                  <span className="text-[9px] text-[#071b2d]/25">
                    0{index + 1}
                  </span>

                  <h3 className="text-lg font-light transition-colors duration-300 group-hover:text-[#006FFD]">
                    {service}
                  </h3>
                </div>

                <ArrowUpRight
                  className="h-4 w-4 text-[#071b2d]/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#006FFD]"
                  strokeWidth={1.5}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
