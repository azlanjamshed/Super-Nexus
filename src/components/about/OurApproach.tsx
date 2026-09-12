"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We begin by understanding the project's purpose, requirements and expectations.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We translate ideas into practical plans with clear priorities, timelines and execution strategies.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Our focus shifts to disciplined execution, quality and attention to detail.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "We aim to deliver spaces that perform today and retain their value for the future.",
  },
];

export default function OurApproach() {
  return (
    <section className="bg-[#f6f5f2] py-20 text-[#071b2d] sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end"
        >
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#006FFD]" />

              <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#071b2d]/40">
                05 — Our Approach
              </span>
            </div>

            <h2 className="text-4xl font-light leading-[1.05] tracking-[-0.04em] sm:text-5xl">
              From Vision
              <br />
              <span className="text-[#071b2d]/40">to Reality.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#071b2d]/55">
            Every successful project starts with a clear understanding of its
            purpose. Our process keeps planning, execution and delivery
            connected from beginning to end.
          </p>
        </motion.div>

        {/* Process */}
        <div className="mt-16 border-t border-[#071b2d]/10">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group grid gap-5 border-b border-[#071b2d]/10 py-8 md:grid-cols-[80px_220px_1fr_40px] md:items-center"
            >
              {/* Number */}
              <span className="text-[10px] font-medium text-[#071b2d]/25">
                {step.number}
              </span>

              {/* Title */}
              <h3 className="text-xl font-light tracking-[-0.02em] transition-colors duration-300 group-hover:text-[#006FFD]">
                {step.title}
              </h3>

              {/* Description */}
              <p className="max-w-xl text-xs leading-6 text-[#071b2d]/50">
                {step.description}
              </p>

              {/* Arrow */}
              <ArrowRight
                className="hidden h-4 w-4 text-[#006FFD] transition-transform duration-300 group-hover:translate-x-2 md:block"
                strokeWidth={1.5}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
