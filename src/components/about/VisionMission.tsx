"use client";

import { motion } from "motion/react";
import { Eye, Target, ArrowUpRight } from "lucide-react";

const items = [
  {
    number: "03",
    label: "Our Vision",
    title: "Creating a Future Built to Last.",
    description:
      "To build a future where infrastructure and development create lasting value for people, communities and businesses.",
    icon: Eye,
  },
  {
    number: "04",
    label: "Our Mission",
    title: "Turning Ideas Into Reality.",
    description:
      "To deliver reliable construction and development solutions through quality, transparency, innovation and responsible execution.",
    icon: Target,
  },
];

export default function VisionMission() {
  return (
    <section className="bg-[#071b2d] py-20 text-white sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-[#006FFD]" />

            <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-white/40">
              03 — Vision & Mission
            </span>
          </div>

          <h2 className="max-w-2xl text-4xl font-light leading-[1.05] tracking-[-0.04em] sm:text-5xl">
            Where We Are
            <br />
            <span className="text-white/40">Going. And Why.</span>
          </h2>
        </motion.div>

        {/* Vision / Mission */}
        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-2">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                className="group relative min-h-[390px] bg-[#071b2d] p-8 sm:p-10 lg:p-12"
              >
                {/* Header */}
                <div className="flex items-center justify-between">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-white/30">
                    {item.number} — {item.label}
                  </span>

                  <Icon className="h-6 w-6 text-[#006FFD]" strokeWidth={1.4} />
                </div>

                {/* Main content */}
                <div className="mt-20">
                  <h3 className="max-w-md text-3xl font-light leading-[1.05] tracking-[-0.035em] sm:text-4xl">
                    {item.title}
                  </h3>

                  <p className="mt-6 max-w-lg text-sm leading-7 text-white/50">
                    {item.description}
                  </p>
                </div>

                {/* Bottom */}
                <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between border-t border-white/10 pt-5 sm:left-10 sm:right-10 lg:left-12 lg:right-12">
                  <span className="text-[8px] uppercase tracking-[0.18em] text-white/25">
                    SuperNexus Infra Pvt. Ltd.
                  </span>

                  <ArrowUpRight
                    className="h-4 w-4 text-[#006FFD] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Hover line */}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#006FFD] transition-all duration-500 group-hover:w-full" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
