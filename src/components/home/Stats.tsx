"use client";

import { motion } from "motion/react";

const stats = [
  {
    number: "15+",
    label: "Years of experience",
  },
  {
    number: "50+",
    label: "Projects delivered",
  },
  {
    number: "2M+",
    label: "Sq. ft. developed",
  },
  {
    number: "10+",
    label: "Cities",
  },
];

export default function Stats() {
  return (
    <section className="bg-[#e9e7e1] px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <span className="text-[10px] uppercase tracking-[0.25em] text-black/35">
            04 — By the numbers
          </span>
        </div>

        <div className="grid grid-cols-2 border-t border-black/10 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              className="
                border-b
                border-black/10
                py-10
                pr-5
                sm:py-14
                lg:border-b-0
                lg:border-r
                lg:px-8
                lg:first:pl-0
                lg:last:border-r-0
              "
            >
              <div
                className="
                text-5xl
                font-light
                tracking-[-0.05em]
                sm:text-7xl
                lg:text-8xl
              "
              >
                {stat.number}
              </div>

              <p
                className="
                mt-4
                max-w-[140px]
                text-[10px]
                uppercase
                leading-relaxed
                tracking-[0.15em]
                text-black/40
              "
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
