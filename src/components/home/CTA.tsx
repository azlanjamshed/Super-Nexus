"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function CTA() {
  return (
    <section className="bg-[#111] px-5 py-28 text-white sm:px-8 sm:py-36 lg:px-10 lg:py-48">
      <div className="mx-auto max-w-7xl">
        <span className="text-[10px] uppercase tracking-[0.25em] text-white/35">
          06 — Start a conversation
        </span>

        <motion.h2
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.9,
          }}
          className="
            mt-10
            max-w-6xl
            text-5xl
            font-light
            leading-[0.9]
            tracking-[-0.05em]
            sm:text-7xl
            lg:text-[8rem]
          "
        >
          Let's build
          <br />
          something lasting.
        </motion.h2>

        <div className="mt-14">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-5"
          >
            <span
              className="
              flex
              h-14
              items-center
              rounded-full
              border
              border-white/20
              px-7
              text-xs
              uppercase
              tracking-[0.15em]
              transition-all
              duration-500
              group-hover:bg-white
              group-hover:text-black
            "
            >
              Contact Us
            </span>

            <span
              className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              transition-all
              duration-500
              group-hover:translate-x-2
            "
            >
              ↗
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
