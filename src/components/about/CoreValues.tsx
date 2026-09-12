"use client";

import { motion } from "motion/react";
import { ShieldCheck, Handshake, TrendingUp } from "lucide-react";

const values = [
  {
    number: "01",
    title: "Quality",
    description:
      "We focus on quality at every stage, from planning and materials to execution and final delivery.",
    icon: ShieldCheck,
  },
  {
    number: "02",
    title: "Trust",
    description:
      "We believe strong projects are built on transparency, accountability and lasting relationships.",
    icon: Handshake,
  },
  {
    number: "03",
    title: "Progress",
    description:
      "We continuously look for better ways to design, develop and deliver modern spaces.",
    icon: TrendingUp,
  },
];

export default function CoreValues() {
  return (
    <section
      id="values"
      className="bg-[#f6f5f2] py-20 text-[#071b2d] sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-[#006FFD]" />

            <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#071b2d]/45">
              02 — Our Values
            </span>
          </div>

          <h2 className="text-4xl font-light leading-[1.05] tracking-[-0.04em] sm:text-5xl">
            What Drives
            <br />
            <span className="text-[#071b2d]/40">Everything We Build.</span>
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-[#071b2d]/55">
            Our work is guided by a simple set of principles that shape how we
            plan, build and create long-term value.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden border border-[#071b2d]/10 bg-white p-7 sm:p-9"
              >
                {/* Top row */}
                <div className="flex items-start justify-between">
                  <span className="text-[10px] font-medium text-[#071b2d]/25">
                    {value.number}
                  </span>

                  <Icon className="h-5 w-5 text-[#006FFD]" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="mt-14 text-2xl font-light tracking-[-0.03em]">
                  {value.title}
                </h3>

                <p className="mt-4 text-xs leading-6 text-[#071b2d]/55">
                  {value.description}
                </p>

                {/* Bottom line */}
                <div className="mt-8 h-px w-full bg-[#071b2d]/10" />

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[8px] uppercase tracking-[0.18em] text-[#071b2d]/35">
                    SuperNexus Infra
                  </span>

                  <span className="h-2 w-2 rounded-full bg-[#006FFD]" />
                </div>

                {/* Hover accent */}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#006FFD] transition-all duration-500 group-hover:w-full" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
