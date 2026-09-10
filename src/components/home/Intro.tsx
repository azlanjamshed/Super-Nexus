"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function Intro() {
  return (
    <section className="bg-[#f6f5f2] px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-7xl">
        {/* Section label */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4"
        >
          <span className="h-px w-8 bg-black/30" />

          <span className="text-[10px] uppercase tracking-[0.25em] text-black/40">
            01 — About Us
          </span>
        </motion.div>

        {/* Main heading */}

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-10
            max-w-6xl
            text-4xl
            font-light
            leading-[0.95]
            tracking-[-0.05em]
            sm:text-6xl
            lg:text-[6.5rem]
          "
        >
          Building spaces.
          <br />
          Creating value.
        </motion.h2>

        {/* Bottom content */}

        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-end">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="
              max-w-xl
              text-lg
              font-light
              leading-relaxed
              tracking-[-0.01em]
              text-black/65
              sm:text-xl
            "
          >
            We are a construction and real estate company dedicated to creating
            thoughtfully planned spaces that combine quality, functionality and
            lasting value.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.25,
            }}
            className="lg:justify-self-end"
          >
            <Link
              href="/about"
              className="
                group
                inline-flex
                items-center
                gap-4
                border-b
                border-black/20
                pb-2
                text-xs
                uppercase
                tracking-[0.15em]
                transition-colors
                hover:border-black
              "
            >
              <span>Discover Our Story</span>

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
